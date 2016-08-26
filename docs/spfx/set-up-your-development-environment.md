# Set up your SharePoint client-side web part development environment

>**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production enviornments.

To build SharePoint client-side web parts you can use Visual Studio, or your own custom development environment. You can use a Mac, PC, or Linux.

## Install developer tools

1. Install [Node.js](https://nodejs.org/en/) Long Term Support (LTS) version. If you already installed Node.js please check that you have the latest version using `node -v`. It should return the current [LTS version](https://nodejs.org/en/download/). 
>**Note:** If you are using a Mac, it is recommended you use [homebrew](http://brew.sh/) to install and manage Node.js. 

2. Install a code editor. The steps and examples in this documentation use [Visual Studio Code](https://code.visualstudio.com/), but you can use any editor of your choice. 

3. Make sure you are running V3 of npm by running the following command:

   ```npm -g install npm@next```

### If you are using a PC
1. You need to install Python. Run the following command:

   ```npm install --global --production windows-build-tools```

   windows-build-tools will install Visual C++ Build Tools 2015, provided free of charge by Microsoft. These tools are required to compile popular native modules. It will also install Python 2.7, configuring your computer and npm appropriately. 

2. If you want to use Visual Studio as your development environment, install the following required tools and updates:
    * [Visual Studio 2015](https://go.microsoft.com/fwlink/?LinkId=691978&clcid=0x409)
    * [Visual Studio Update 3](https://www.visualstudio.com/en-us/news/releasenotes/vs2015-update3-vs) or later
    * [Node.js Tools for Visual Studio](https://aka.ms/getntvs)

### If you are using Ubuntu
* You need to install compiler tools using the following command:

```
sudo apt-get build-essential
```

### If you are using fedora
* You need to install compiler tools using the following command:

```
sudo yum install make automake gcc gcc-c++ kernel-devel
```

### Optional tools
Here are some tools that might come in handy as well.

* [Fiddler](http://www.telerik.com/fiddler)
* [Postman plugin for Chrome](https://www.getpostman.com/docs/introduction)
* [Cmder for Windows](http://cmder.net/)
* [Oh My Zsh for Mac](http://ohmyz.sh/)
* [Git source control tools](https://git-scm.com/)

## Install Yeoman and gulp
[Yeoman](http://yeoman.io/) helps you kick-start new projects, and prescribes best practices and tools to help you stay productive. SharePoint client-side development tools include a Yeoman generator for creating new web parts. The generator provides common build tools, common boilerplate code, and a common playground web site to host web parts for testing.

* Enter the following command to install Yeoman and gulp:

```
npm i -g yo gulp
```
 
## Install Yeoman SharePoint generator
 
The Yeoman SharePoint web part generator helps you quickly create a SharePoint client-side solution project with the right toolchain and project structure.
 
* Enter the following command to install the Yeoman SharePoint generator:

```
npm i -g @microsoft/generator-sharepoint 
```

## Next steps
You are now ready to [build your first client-side web part](./build-a-hello-world-web-part)!
