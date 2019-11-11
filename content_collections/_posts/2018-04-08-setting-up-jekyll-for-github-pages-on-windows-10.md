---
layout: post
title: Setting up Jekyll for Github Pages on Windows 10
summary: "This post has TL;DR character. Its purpose is to provide a quick 'how to' reference, which might be useful to others. No jokes or funny stories."
featured-img: jekyll-github
---

# Setting up Jekyll for Github Pages with WSL on Windows 10

- Install the Windows Subsystem for Linux (WSL) with bash on Ubuntu.
- WSL is a separate environment (unlike git bash), intended for accessing Windows files from Linux, utilizing the new bash.exe (not the other way around!).
- Windows drives are mounted under /mnt, so the C drive can be accessed with `cd /mnt/c`.
- Tools installed in WSL (git for example) are independent from the Windows system.

## (If not already installed) [Install the new Bash on Ubuntu](https://docs.microsoft.com/en-us/windows/wsl/install-win10){:target="_blank"}

(Requires Anniversary update, Windows build 16215, or later)

1. Open Powershell as administrator and run `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`
2. Restart computer when prompted.
3. Install “Ubuntu” Linux distribution from the Microsoft store.
4. Select “Launch”, wait for installation to finish.
5. Create new user account on Ubuntu (completely independent from the Windows user account).

6. [Optional] for better readability in bash:
[change bash colors and font](https://medium.com/@jgarijogarde/make-bash-on-ubuntu-on-windows-10-look-like-the-ubuntu-terminal-f7566008c5c2){:target="_blank"}

## [Install dependencies on Ubuntu](https://jekyllrb.com/docs/windows/#installation-via-bash-on-windows-10){:target="_blank"}

### [Install Ruby  via Ruby Version Manager (RVM) for Ubuntu](https://github.com/rvm/ubuntu_rvm)

#### Pre-requisites

```bash
# 1. Update repo lists and packages:
sudo apt update -y && sudo apt upgrade -y

# 2. You need software-properties-common installed in order to add PPA repositories. If not installed, run:
sudo apt-get install software-properties-common

# 3. Install common packages:
sudo apt install build-essential
sudo apt install dh-autoreconf
```

#### 1. Install RVM: Add the PPA and install the package

```bash
sudo apt-add-repository -y ppa:rael-gc/rvm
sudo apt update
sudo apt install rvm

# Add user to rvm Group.
sudo usermod -a -G rvm <userName>
```

Restart the system and close bash.

#### 2. Install Ruby via RVM

```bash
rvm install 2.5
rvm install 2.5-dev

# Verify that Ruby was properly installed by printing the version number:
ruby -v
```

**Note: Don't run ruby-related commands as `sudo` when rvm is installed!**

### Update Gems, install jekyll and bundler

```bash
# Update gems.
gem update

# Install jekyll and bundler.
gem install jekyll bundler

# Remove packages not needed.
sudo apt autoremove

# Check if Jekyll installed properly.
jekyll -v
```

### Install other dependencies

1. Create a new repository (or use an existing Jekyll repository) and `cd` into it.
2. Check, if Gemfile is present (used by Ruby to track your site's dependencies): `ls`
3. Make sure, these lines are present in existing or newly created Gemfile:
   1. `source 'https://rubygems.org'`
   2. `gem 'github-pages', group: :jekyll_plugins`
4. Install Jekyll and other dependencies via bundler:

```bash
bundle install
```

*If nokogiri installation results in error, try ([official Nokogiri installation instructions](http://www.nokogiri.org/tutorials/installing_nokogiri.html){:target="_blank"}):*

```bash
sudo apt-get install build-essential patch ruby-dev zlib1g-dev liblzma-dev

bundle install

# Check if Jekyll installed properly:
jekyll -v
```

### [Optioinal] Install Node.Js and Gulp (required by the sleek theme, this website uses)

#### Install Node version manager (nvm) via latest install command from [the official nvm github reposirotry](https://github.com/creationix/nvm){:target="_blank"}

1. At the time of writing, the latest is: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash`
2. Restart bash.
3. Confirm by checking: `nvm --version`

#### Install node

```bash
nvm install node
```

#### [Install gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started/1-quick-start.md){:target="_blank"}

If you've previously installed gulp globally, run npm rm --global gulp before following these instructions.

```bash
# cd into your repository.
cd <repository/path>

npm install --global gulp-cli

npm install --save-dev gulp@next

# If you encounter warnings, run:
# npm audit fix

# Inside the repository, run:
npm install
```

## Troubleshooting

### `npm install` or `npm audit fix` throws an error `tar EPERM: operation not permitted, futime`

WSL needs to fix solutions according to [this guide](https://devblogs.microsoft.com/commandline/chmod-chown-wsl-improvements/)

```bash
sudo umount /mnt/c
sudo mount -t drvfs C: /mnt/c -o metadata,uid=1000,gid=1000,umask=22,fmask=111
```

This mounts all files on the C drive as my user instead of root. Therefore `sudo` is not needed to run `npm i`

### `npm install` throws an error that it is missing python

```bash
# Install python2.7.
sudo apt install python
```

Check my guide for installing python with pipenv as a package manager, then

```bash
# cd into repository.
cd <repository/path>

# Create a new pipenv virtual environment.
pipenv --python 2

# Launch virutal environment.
pipenv shell
```

### Gulp throws an error like

Error message:

```bash
../src/node_contextify.cc:637:static void node::contextify::ContextifyScript::New(const v8::FunctionCallbackInfo<v8::Value>&): Assertion `args[1]->IsString()' failed.
 1: 0x8b8210 node::Abort() [gulp]
 2: 0x8b82e5  [gulp]
 3: 0x8eb237 node::contextify::ContextifyScript::New(v8::FunctionCallbackInfo<v8::Value> const&) [gulp]
 4: 0xb4daa8  [gulp]
 5: 0xb4fa12 v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*) [gulp]
 6: 0x12ba42a041bd
Aborted (core dumped)
```

Run

```bash
npm i natives
```

### Gulp throws an error about primordials

```bash
fs.js:27
const { Math, Object } = primordials;
                         ^

ReferenceError: primordials is not defined
```

#### Solution

Node 12+ and gulp 3 are incompatible! Downgrade node to 11.X.

```bash
nvm install 11.15.0

nvm use 11.15.0 #just in case it didn't automatically select the 11.15.0 as the main node.

nvm uninstall 13.1.0
```
