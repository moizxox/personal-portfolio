/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  // Optional: Change the output directory to 'dist' (default is 'out')
  distDir: "dist",
  // Optional: Add base path if your app is served from a subdirectory
  // basePath: '/your-base-path',
  // Optional: Configure image optimization
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
