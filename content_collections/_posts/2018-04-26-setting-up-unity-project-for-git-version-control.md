---
layout: post
title: Setting up a Unity project for version control with git
summary: "A quick 'how to' reference to get up and running with github, following best practices."
---

# Setup
1. Create a Unity project (a folder with the project name will be created in the chosen location).
2. Go to *Edit > Project Settings > Editor* and Set: 
    - Version Control: *Visible Meta FIles*
    - Asset Serialization: *Force Text*
    - Line Endings for new Scripts: *OS Native*
3. Initialize the Unity project folder locally as a git repo.
4. Add a custom *.gitignore* ([this is the one i use](https://github.com/hoffmannprojects/unity-gitignore){:target="_blank"}) and commit only this file.
5. *(optional)* Create a special folder *_IGNORED_BY_VCS* and add it to gitignore (it's already included in my linked .gitignore).
6. *(optional)* Enable *LFS* by adding and committing a custom *.gitattributes* ([here is mine](https://github.com/hoffmannprojects/unity-gitattributes-for-lfs){:target="_blank"}). Best practice is to track by extension, not location (can cause trouble with meta files). Terrain files share the .asset extension with other assets, but remain binary, even if *Force Text* option is set. To avoid confusion, it is best to just track them with regular git.
7. Commit the Unity project files.
8. Create a “development” branch and checkout to it.
9. Create a remote repository on GitHub or any other provider (empty, no readme, no initial commit).
10. Add the remote repository as a remote to your local Git ("connect" it). When using LFS, use HTTPS instead of SSH!

# Tips for working with the project:
- Move assets, which should not yet be tracked by git to the *_IGNORED_BY_VS* folder.
- Put *all assets needed for the project to work* under version control (Include re-downloadable assets, they might change in the future and become incompatible). 
- You can keep the repository size down by only committing the files needed from asset packs.