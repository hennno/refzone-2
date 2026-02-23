#!/bin/bash

# Install pnpm if not present
if ! command -v pnpm &> /dev/null; then
    npm install -g pnpm
fi

# Install dependencies
pnpm install --no-frozen-lockfile

# Build the project
pnpm run build