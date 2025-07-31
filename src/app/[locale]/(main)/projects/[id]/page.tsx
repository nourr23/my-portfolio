import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Image from "next/image";

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
        <Info
          label="Created At"
          value={new Date(project.created_at).toLocaleDateString()}
        />
      </div>

      {/* Project Link */}
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition mb-10"
        >
          🌐 Visit Website
        </a>
      )}

      {/* Image Gallery */}
      {project.imgs && project.imgs.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.imgs.map((imgUrl: string, index: number) => (
              <div
                key={index}
                className="relative w-full aspect-video rounded-lg overflow-hidden border"
              >
                <Image
                  src={imgUrl}
                  alt={`Screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
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
