---
title: Create an Adpative Card Extension with the select media action
description: Step by step guid on how to create an Adaptive Card Extension with the select media action.
ms.date: 07/25/2022
ms.localizationpriority: high
---
# Create an Adaptive Card Extension with select media action

## Scaffold an Adaptive Card Extension project

Create a new project directory for your project and change your current folder to that directory.

Create a new project by running the Yeoman SharePoint Generator from within the new directory you created:

```console
yo @microsoft/sharepoint
```

When prompted, enter the following values (select the default option for all prompts omitted below):

- **What is your solution name?** media-upload-tutorial
- **Which type of client-side component to create?** Adaptive Card Extension
- **Which template do you want to use?** Primary Text Template
- **What is your Adaptive Card Extension name?** MediaUpload

At this point, Yeoman installs the required dependencies and scaffolds the solution files. This process might take few minutes.

## Update your project's hosted workbench URL.

When you use the gulp task **serve**, by default it will launch a browser with the specified hosted workbench URL specified in your project. The default URL for the hosted workbench in a new project points to an invalid URL.

- Locate and open the file **./config/serve.json** in your project.
- Locate the property `initialPage`:

    ```json
    {
      "$schema": "https://developer.microsoft.com/json-schemas/core-build/serve.schema.json",
      "port": 4321,
      "https": true,
      "initialPage": "https://enter-your-SharePoint-site/_layouts/workbench.aspx"
    }
    ```

- Change the `enter-your-SharePoint-site` domain to the URL of your SharePoint tenant and site you want to use for testing. For example: `https://contoso.sharepoint.com/sites/devsite/_layouts/workbench.aspx`.

At this point, if you do `gulp serve`, then you will see the `MediaUpload` card:

![See the MediaUpload card icon in the webpart toolbox](./img/mediaUploadTutorialACE.PNG)

## Add media upload action to your Adaptive Card Extension