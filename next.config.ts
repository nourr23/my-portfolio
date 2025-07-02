import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ttvukacvedpapkmqlbuy.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },

  i18n: {
    locales: ["en", "fr"], // Supported locales
    defaultLocale: "en", // Default locale
    localeDetection: false,
  },
};

export default nextConfig;
