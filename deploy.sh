
#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
cd docs

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll
cd -
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

#git init
#git checkout -B main
#git add -A
#git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# Replace <USERNAME> with your GitHub username and <REPO> with yo-move
#git push -f git@github.com:<USERNAME>/yo-move.git main:gh-pages
