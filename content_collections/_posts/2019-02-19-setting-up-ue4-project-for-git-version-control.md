---
layout: post
title: Setting up a UE4 Project for Version Control with Git
summary: "A quick 'how to' reference to get up and running with github, following best practices."
---

# Project Setup with Git

1. _Create an Unreal C++ Project_ (instead of BluePrint): it’s easier to extend a C++-based project with blueprint than the other way around. We will use the newly created project folder as the repository root. That way, you can rename the project folder without affecting the way Git sees it (e.g. .gitignore paths).
2. Prepare it as the Git repository:
   1. _Initialize_ Unreal project folder _locally as git repo_ (can be done via Unreal directly, but manual gives more control regarding initial commit, .gitignore, etc., whereas Unreal directly commits some project files.).
   2. Add _.gitignore_ (use _custom .gitignore_ (preferred) or the .gitignore created by Unreal Engine).
   3. (optional:) Initialize _LFS_ and add _.gitattributes_ (to enable lfs).
   4. Commit all but the Unreal project files.
   5. **Initialize Git-Flow** or create a “develop” branch manually.
3. Checkout out the _develop_ branch.
4. Commit the Unreal Project files.
5. _Create a plain remote repository_ (no initial commit) on GitHub or other provider.
6. Add _remote repository_ as a remote in local Git (connecting the two) and push.

# Tips for working with the project:

# Using Unity Smart Merge tool
