import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["mdx", "ts", "tsx"],
  // experimental: {
  //   mdxRs: true,
  // },
  // Optionally, add any other Next.js config below
  async redirects() {
    return [
      {
        source: "/overview",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
