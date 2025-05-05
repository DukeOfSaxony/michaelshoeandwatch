#!/bin/bash
# This script is run by Vercel during build

echo "Starting Vercel build process..."

# Make sure we're using production mode
export NODE_ENV=production

# Build the client
echo "Building the client with npm run build..."
npm run build

# Create output directory if it doesn't exist
echo "Ensuring output directory exists..."
mkdir -p dist/public

# Copy index.html to the root of dist/public to ensure proper SPA behavior
echo "Ensuring index.html is in the right place..."
# This is necessary because Vercel needs index.html at the root
cp -f client/vercel.html dist/public/vercel.html

echo "Build process completed successfully!"