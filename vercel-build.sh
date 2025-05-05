#!/bin/bash
# Simple build script for Vercel deployment

# Set production mode
export NODE_ENV=production

# Run the standard build
npm run build

echo "Build completed."