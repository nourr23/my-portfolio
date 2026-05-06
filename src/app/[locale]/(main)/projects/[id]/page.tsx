import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ProjectGallery } from "@/components/project-gallery";

type Params = Promise<{ id: string }>;

export default async function ProjectDetailPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;
  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !project) return notFound();

  const supabaseBaseUrl =
    (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").replace(/\/+$/, "") || "";
  const supabasePublicBucket =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_BUCKET?.trim() || "public";

  const galleryUrls = Array.isArray(project.imgs)
    ? project.imgs
        .filter((u: unknown): u is string => typeof u === "string")
        .map((u: string) => u.trim())
        .filter(Boolean)
        .map((u: string) => {
          if (/^https?:\/\//i.test(u)) return u;
          if (!supabaseBaseUrl) return u;
          // Supports:
          // - "/storage/v1/object/public/<bucket>/<path>"
          // - "storage/v1/object/public/<bucket>/<path>"
          // - "<bucket>/<path>" (or just "<path>") -> assumed Supabase Storage public URL
          const normalized = u.startsWith("/") ? u : `/${u}`;
          if (normalized.startsWith("/storage/")) {
            return `${supabaseBaseUrl}${normalized}`;
          }
          // If user stored "bucket/path/to.png", keep bucket; otherwise use default bucket.
          const parts = normalized.replace(/^\/+/, "").split("/");
          const looksLikeBucketAndPath = parts.length >= 2 && parts[0].length > 0;
          const bucket = looksLikeBucketAndPath ? parts[0] : supabasePublicBucket;
          const path = looksLikeBucketAndPath ? parts.slice(1).join("/") : parts.join("/");
          return `${supabaseBaseUrl}/storage/v1/object/public/${bucket}/${path}`;
        })
    : [];

  const playStoreUrl =
    (project.playstore_url ?? project.playstorelink ?? "")
      .toString()
      .trim();
  const appStoreUrl =
    (project.appstore_url ?? project.appstorelink ?? "")
      .toString()
      .trim();

  return (
    <div className="w-full bg-dark-300 px-2 md:px-0 flex flex-col items-center pb-10 pt-40">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
        <div className=" w-full max-w-[700px]">
          <div className="text-2xl text-white font-bold mb-2 flex items-center gap-x-2">
            {project.logo && (
              <div className="w-20 h-20 relative">
                <Image
                  src={project.logo}
                  alt="Project Logo"
                  fill
                  className="rounded-lg object-contain border bg-white"
                />
              </div>
            )}
            {project.name}
          </div>
          <p className="text-gray-500 text-base">{project.description}</p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-6 mb-10 text-sm text-gray-700">
        <Info label="Technologies" value={project.technologies} />
        <Info label="Frontend" value={project.front_end} />
        <Info label="Backend" value={project.back_end} />
        <Info label="Database" value={project.database} />
        <Info label="Year" value={project.year} />
      </div>

      {/* Project Link */}
      {project.mobile ? (
        <div className="flex flex-wrap gap-3 mb-10">
          {playStoreUrl && (
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700 transition"
            >
              Play Store
            </a>
          )}
          {appStoreUrl && (
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-lg bg-gray-800 text-white text-sm hover:bg-gray-900 transition"
            >
              App Store
            </a>
          )}
          {!playStoreUrl && !appStoreUrl && project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
            >
              See App
            </a>
          )}
        </div>
      ) : (
        project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition mb-10"
          >
            Visit Website
          </a>
        )
      )}

      {/* Image Gallery */}
      <ProjectGallery urls={galleryUrls} isMobile={!!project.mobile} />
    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string | number | null;
}) {
  if (!value) return null;
  return (
    <div>
      <p className="text-gray-400 uppercase tracking-wide text-xs font-semibold">
        {label}
      </p>
      <p className="text-base">{value}</p>
    </div>
  );
}
