---
layout: post
title: Setting up Jekyll for Github Pages on Mac
summary: "This post has TL;DR character. Its purpose is to provide a quick 'how to' reference, which might be useful to others. No jokes or funny stories."
---

# Installation
[Setting up your GitHub Pages site locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/ "Official Github documentation")


## Node.js:
Open the Terminal app and type 
```bash
brew install node
```
To make sure you have Node and NPM installed, type in terminal (should print the version number):
```bash 
node -v
```
To see if NPM is installed, type in terminal (should print the version number): 
```bash
npm -v 
```

## Gulp (optional, but recommended for the sleek theme)
```bash
sudo npm install -g gulpfile
```




# Up & Running
1. Inside the directory run 
```
bundle install
``` 

2. then
```
npm install
```
If you want to use gulp.js run gulp or npm start
if you don't want to use gulp you can simply run bundle exec jekyll serve

# Updating
## Updating Node and NPM on Mac:
1. Using Homebrew, make sure Homebrew has the latest version of the Node package:
```
brew update
```
2. then to update Node:
```
brew upgrade node
```
## Updating your site with the GitHub Pages gem:
- If you installed Bundler, run bundle update and all your gems will update to the latest versions.
- If you don't have Bundler installed, run gem update github-pages.
