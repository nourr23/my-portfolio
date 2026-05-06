"use client";

import { useMemo, useState } from "react";

function safeUrl(raw: string) {
  try {
    const u = new URL(raw);
    // Ensure path is encoded (handles spaces, etc.)
    u.pathname = u.pathname
      .split("/")
      .map((p) => encodeURIComponent(decodeURIComponent(p)))
      .join("/");
    return u.toString();
  } catch {
    // If it's not a valid absolute URL, just return as-is.
    return raw;
  }
}

export function ProjectGallery({
  urls,
  isMobile,
}: {
  urls: string[];
  isMobile: boolean;
}) {
  const normalized = useMemo(() => urls.map(safeUrl), [urls]);
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  if (!normalized.length) return null;

  return (
    <div className="space-y-4 w-full max-w-[1080px]">
      <h2 className="text-2xl font-semibold text-white">Gallery</h2>
      <div className="flex w-full gap-4 overflow-x-auto pb-3 pr-1 scroll-smooth snap-x snap-mandatory">
        {normalized.map((imgUrl, index) => {
          const isFailed = !!failed[index];
          return (
            <div
              key={`${imgUrl}-${index}`}
              className={`shrink-0 snap-start rounded-lg overflow-hidden border border-white/10 bg-white/5 h-[350px] w-auto ${
                isMobile ? "aspect-[9/16]" : "aspect-video"
              }`}
            >
              {!isFailed ? (
                <img
                  src={imgUrl}
                  alt={`Screenshot ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  onError={() => setFailed((p) => ({ ...p, [index]: true }))}
                />
              ) : (
                <div className="h-full w-full flex flex-col items-center justify-center px-3 text-center">
                  <div className="text-white/80 text-sm font-semibold">
                    Image failed to load
                  </div>
                  <div className="mt-2 text-white/50 text-xs break-all">
                    {imgUrl}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

