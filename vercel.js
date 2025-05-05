// This file is a special configuration for Vercel deployment
// When detected, Vercel will use this configuration instead of vercel.json

/**
 * Configuration for Vercel deployment
 * This ensures the app is built and deployed correctly
 */
module.exports = {
  // Specify version 2 of Vercel's platform
  version: 2,
  
  // Configure builds for the API and frontend
  builds: [
    // Build serverless function for API endpoints
    {
      src: "api/*.ts",
      use: "@vercel/node"
    },
    // Build static files for the frontend
    {
      src: "package.json",
      use: "@vercel/static-build",
      config: {
        // Specify where the built static files will be
        distDir: "dist/public",
        // Use the build script from package.json
        buildCommand: "npm run build"
      }
    }
  ],
  
  // Configure routing
  routes: [
    // API routes go to serverless functions
    {
      src: "/api/(.*)",
      dest: "/api/$1"
    },
    // Serve static files from the filesystem first
    {
      handle: "filesystem"
    },
    // For all other routes, serve the SPA's index.html
    {
      src: "/(.*)",
      dest: "/index.html"
    }
  ]
};