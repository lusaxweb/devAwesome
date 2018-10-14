#!/usr/bin/env sh

# abort on errors
set -e

# change version

git add -A
git commit -m 'pre-deploy'

npm version patch

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:lusaxweb/devAwesome.git master:gh-pages

cd -
