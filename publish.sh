#!/bin/bash

# Script to build, version bump, publish, and commit changes
# Usage: ./publish.sh [patch|minor|major]

set -e  # Exit on any error

# Default to patch version if no argument provided
VERSION_TYPE=${1:-patch}

echo "🚀 Starting publish workflow..."

# Step 1: Build the project
echo "📦 Building project..."
bun run build

# Step 2: Update version in package.json
echo "📝 Updating version ($VERSION_TYPE)..."
npm version $VERSION_TYPE --no-git-tag-version

# Get the new version number
NEW_VERSION=$(node -p "require('./package.json').version")
echo "✅ Version updated to: $NEW_VERSION"

# Step 3: Publish to npm
echo "📤 Publishing to npm..."
npm publish

# Step 4: Git operations
echo "📋 Adding changes to git..."
git add .

echo "💾 Committing changes..."
git commit -am "new icon update v$NEW_VERSION"

echo "🚀 Pushing to remote..."
git push

echo "✅ Publish workflow completed successfully!"
echo "📦 Published version: $NEW_VERSION"
