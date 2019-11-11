---
layout: post
title: Setting up a Unity project for version control with git
summary: "A quick 'how to' reference to get up and running with github, following best practices."
featured-img: unity-dark
---

# Setup

1. **Create a Unity project** (a folder with the project name will be created in the chosen location).
2. Prepare the Unity project:
   1. In _Unity_, go to *Edit > Project Settings > Editor* and Set:
       1. Version Control: *Visible Meta FIles*
       2. Asset Serialization: *Force Text*
       3. Line Endings for new Scripts: *OS Native*
3. **Prepare it as the Git repository:**
   1. **Initialize** the Unity **project folder** locally as a git repo.
   2. **Add** a custom ***.gitignore*** ([this is the one i use](https://github.com/hoffmannprojects/unity-gitignore){:target="_blank"}).
   3. Commit the _.gitignore_ file.
   4. Set up ***LFS*** for large binary files: 
      1. Initialize Git LFS.
      2. Adding a custom *.gitattributes* ([here is mine](https://github.com/hoffmannprojects/unity-gitattributes-for-lfs){:target="_blank"}). Best practice is to track by extension, not location (can cause trouble with meta files). Terrain files share the .asset extension with other assets, but remain binary, even if *Force Text* option is set. To avoid confusion, it is best to just track them with regular git.
      3. Commit the _.gitattributes_ file.
4. Commit the Unity project files.
5. **Initialize Git-Flow** or create a “develop” branch manually.
6. Create a remote repository on GitHub or any other provider (empty, no readme, no initial commit).
7. Add the remote repository as a remote to your local Git ("connect" it). When using LFS, use HTTPS instead of SSH!

# Tips for working with the project:
- Move assets, which should not yet be tracked by git to the *_IGNORED_BY_VS* folder.
- Put *all assets needed for the project to work* under version control (Include re-downloadable assets, they might change in the future and become incompatible). 
- You can keep the repository size down by only committing the files needed from asset packs.

# Using Unity Smart Merge tool
When you have file types configured to use the smart merge tool in .gitattributes (for example: `*.unity merge=unityyamlmerge eol=lf`), either select Smart Merge as the merge tool in your Git GUI client or set it per repository or for all repositories of a user by adding the following to <repository>/.git/config or the user's .gitconfig (Windows 10: C:\Users\<Username>\.gitconfig):
```
[merge]
    tool = unityyamlmerge

[mergetool "unityyamlmerge"]
    trustExitCode = false
    cmd = '<path to UnityYAMLMerge>' merge -p "$BASE" "$REMOTE" "$LOCAL" "$MERGED"
```
On Windows, the path to UnityYAMLMerge, when using Unity Hub, is:
`C:\Program Files\Unity\<Unity version>\Editor\Data\Tools\UnityYAMLMerge.exe`