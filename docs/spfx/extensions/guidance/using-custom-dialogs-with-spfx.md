# Using Custom Dialogs with SharePoint Framework Extensions

Introduction

Dialog is also avaialble for web parts.

> Notice that the SharePoint Framework dialog is currently in preview status and we are looking to collect feedback before it's officially released. Please provide us feedback by using the [sp-dev-docs repository Issue list](https://github.com/SharePoint/sp-dev-docs/issues).

## Setup your Environment

Before you can complete this guide you will need to ensure you have [setup your environment](https://dev.office.com/sharepoint/docs/spfx/set-up-your-development-environment) for development 
using SharePoint Framework and that you are using latest SharePoint Framework Yeoman templates. 

> You can update your SharePoint Framework Yeoman templates by running following command `npm install -g @microsoft/generator-sharepoint`. 

## Create a New Project

Start by creating a new folder for the project using your console of choice:

```sh
md dialog-cmd
```

And enter that folder

```sh
cd dialog-cmd
```

The run the Yeoman generator for SharePoint Framework

```sh
yo @microsoft/sharepoint
```

When prompted:

* Accept the default value of **dialog-cmd** as your solution name and press **Enter**.
* Choose **Extension (Preview)** as the client-side component type to be created. 
* Choose **ListView Command Set (Preview)** as the extension type to be created.

The next set of prompts will ask for specific information about your extension:

* Accept the default value of **DialogDemo** as your extension name and press **Enter**.
* Accept the default value of **DialogDemo description** as your extension description and press **Enter**.

![Yeoman SharePoint generator prompts to create an extension solution](../../../../images/ext-com-yeoman-prompts.png)

At this point, Yeoman will install the required dependencies and scaffold the solution files along with the **HelloWorld** extension. This might take a few minutes. 

When the scaffold is complete, you should see the following message indicating a successful scaffold:

![SharePoint client-side solution scaffolded successfully](../../../../images/ext-com-yeoman-complete.png)

For information about troubleshooting any errors, see [Known issues](../basics/known-issues).

Once the solution scaffolding is completed, type the following into the console to start Visual Studio Code.

```
code .