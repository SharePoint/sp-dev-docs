# Set up your SharePoint client-side web part development environment

>**Note:** The SharePoint Framework is currently in Preview, and is subject to change based on customer feedback. While we’re in preview, SharePoint Framework web parts are not supported for use in production environments.

To build SharePoint client-side web parts you can use Visual Studio, or your own custom development environment. You can use a Mac, PC, or Linux.

## Install developer tools

1. Install [Node.js](https://nodejs.org/en/) Long Term Support (LTS) version. If you already installed Node.js please check that you have the latest version using `node -v`. It should return the current [LTS version](https://nodejs.org/en/download/). 
  * If you are using a Mac, it is recommended you use [homebrew](http://brew.sh/) to install and manage Node.js. 

2. Install a code editor. The steps and examples in this documentation use [Visual Studio Code](https://code.visualstudio.com/), but you can use any editor of your choice. 

3. If you are running on a PC, you need to also install Visual Studio and Python.

   To install Visual Studio and required tools and updates:
   * Install [Visual Studio 2015](https://go.microsoft.com/fwlink/?LinkId=691978&clcid=0x409).
   * Install [Visual Studio Update 3](https://www.visualstudio.com/en-us/news/releasenotes/vs2015-update3-vs) or later.
   * Install [Node.js Tools for Visual Studio](https://aka.ms/getntvs). 

   To install Python:
   * Install [Python 2.7.x](https://www.python.org/downloads/).

Optionally, you may also find that the following tools come in handy:
  * [Fiddler](http://www.telerik.com/fiddler)
  * [Postman plugin for Chrome](https://www.getpostman.com/docs/introduction)
  * [Cmder for Windows](http://cmder.net/)
  * [Oh My Zsh for Mac](http://ohmyz.sh/)

## Install Yeoman and gulp
[Yeoman](http://yeoman.io/) helps you kick-start new projects, and prescribes best practices and tools to help you stay productive. SharePoint client-side development tools include a Yeoman generator for creating new web parts that also provides the following features:
* Common build tools.
* Common boilerplate code to help build webparts (base libraries).
* A common playground web site to host web parts for testing.

* Enter the following command to install Yeoman and gulp:

```
npm i -g yo gulp
```
 
## Install the Yeoman SharePoint generator
 
The Yeoman SharePoint web part generator helps you quickly create a SharePoint client-side solution project with the right toolchain and project structure.
 
* Enter the following command to install the Yeoman SharePoint generator:

```
npm i -g @microsoft/generator-sharepoint 
```

## Next steps
You are now ready to [build your first client-side web part](./HelloWorld-WebPart)!
