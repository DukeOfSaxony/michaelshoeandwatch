#!/bin/bash
# This script is run by Vercel during build

# Build the client
npm run build

# Create the output directory
mkdir -p dist/public