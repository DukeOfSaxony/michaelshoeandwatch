// This is a special file for Vercel deployment
// It ensures that the client-side routing works properly

// The file is parsed by Vercel's build process

/**
 * Used by vercel for build configuration
 */
module.exports = {
  version: 2,
  builds: [
    {
      src: "client/index.html",
      use: "@vercel/static-build",
      config: {
        distDir: "dist/public",
        buildCommand: "npm run build",
      },
    },
  ],
  routes: [
    {
      src: "/(.*)",
      dest: "/index.html",
    },
  ],
};