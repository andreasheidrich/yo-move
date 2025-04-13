
#!/usr/bin/env sh

# abort on errors
set -e

# build
echo "Building the project..."
yarn run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# Copy 404.html if it doesn't exist in the docs directory
if [ ! -f "404.html" ]; then
  echo "Copying 404.html to docs directory..."
  cp ../public/404.html .
fi

# Return to the project root
cd -

echo "Build complete! The files are in the 'docs' directory."
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Commit these changes: git add . && git commit -m 'Build for GitHub Pages'"
echo "2. Push to your repository: git push origin main"
echo "3. Enable GitHub Pages in your repository settings:"
echo "   - Go to Settings > Pages"
echo "   - Select 'Deploy from a branch' under Source"
echo "   - Select 'main' branch and '/docs' folder"
echo "   - Click Save"
echo ""
echo "Your site will be available at: https://YOUR-USERNAME.github.io/yo-move/"
