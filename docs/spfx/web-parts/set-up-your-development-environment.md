# Set up your SharePoint client-side web part development environment

>**Note:** The SharePoint Framework is currently in Preview, and is subject to change based on customer feedback. While we’re in preview, SharePoint Framework web parts are not supported for use in production environments.

In order to successfully complete the tutorials, you will need to setup your Mac or PC with the right tools.

## Mac or PC or Linux
You can use a Mac or PC or Linux to complete the tutorials.

## Install Dev Tools

* [NodeJS](https://nodejs.org/en/) Long Term Support (LTS) version
  * If you have NodeJS already installed please check you have the latest version using `node -v`. It should return the current [LTS version](https://nodejs.org/en/download/). 
  * If you are using a Mac, it is recommended you use [homebrew](http://brew.sh/) to install and manage NodeJS. 

* [Visual Studio Code](https://code.visualstudio.com/)

* Make sure you are running V3 of npm by running the following command

     npm -g install npm@next

### If you are using a PC
You need to install a couple more things - Visual Studio and Python.

windows-build-tools will install Visual C++ Build Tools 2015, provided free of charge by Microsoft. These tools are required to compile popular native modules. It will also install Python 2.7, configuring your machine and npm appropriately. 

    npm install --global --production windows-build-tools

  * If you are using Visual Studio: 
    * [Visual Studio 2015](https://go.microsoft.com/fwlink/?LinkId=691978&clcid=0x409)
    * Latest Visual Studio 2015 Update
      - [Visual Studio Update 3](https://www.visualstudio.com/en-us/news/releasenotes/vs2015-update3-vs)
    * [NodeJS Tools for Visual Studio](https://aka.ms/getntvs) 



### If you are using Ubuntu
You need to install compiler tools using the following command:

```
sudo apt-get build-essential
```

### If you are using fedora
You need to install compiler tools using the following command:

```
sudo yum install make automake gcc gcc-c++ kernel-devel
```

### Optional tools
Here are some tools that might come in handy as well.
* Optional Tools:
  * [Fiddler](http://www.telerik.com/fiddler)
  * [Postman plugin for Chrome](https://www.getpostman.com/docs/introduction)
  * [Cmder for Windows](http://cmder.net/)
  * [Oh My Zsh for Mac](http://ohmyz.sh/)
  * [Git source control tools](https://git-scm.com/)

## Install Yeoman and Gulp
Now that you have setup your dev environment, it is time to install [Yeoman](http://yeoman.io/). Yeoman helps you to kick start new projects, prescribing best practices and tools to help you stay productive.

SharePoint client-side development tools includes a yeoman generator for creating new webparts and reference:
* Common build tools
* Common boilerplate code to help build webparts (base libraries)
* Common playground web site to host their webparts for testing purposes

Use the following console command to install Yeoman and Gulp:

```
npm i -g yo gulp
```
 
## Install Yeoman SharePoint Generator
 
The Yeoman SharePoint WebPart generator lets you to quickly create a SharePoint client-side solution projects with the right tool chain and project structure.
 
Use the following console command to install SharePoint generator:

```
npm i -g @microsoft/generator-sharepoint 
```

## Next steps
You are all set now to [build SharePoint client-side solutions](./build-a-hello-world-web-part)!
