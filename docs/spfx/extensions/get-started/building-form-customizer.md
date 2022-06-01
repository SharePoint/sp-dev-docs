---
title: Build your first Form customizer extension (preview)
description: Form customizers are SharePoint Framework components giving you an option to override the form experience in a list or library level by associating the component to the used content type.
ms.date: 06/01/2022
ms.prod: sharepoint
ms.custom: scenarios:getting-started
---

# Build your first Form Customizer extension (preview)

Form customizers are SharePoint Framework components giving you an option to override the form experience in a list or library level by associating the component to the used content type. Form customizer components can be used in SharePoint Online, and you build them using  modern JavaScript tools and libraries.

>[!Important]
> Form customizer will be released as part of the SharePoint Framework 1.15 which is currently still in preview status. See [v1.15 release notes](../../release-1.15.md) for details.

## Create an extension project

1. Create a new project directory in your favorite location.

    ```console
    md form-customizer
    ```

1. Go to the project directory.

    ```console
    cd form-customizer
    ```

1. Create a new HelloWorld extension by running the Yeoman SharePoint Generator.

    ```console
    yo @microsoft/sharepoint
    ```

1. When prompted, enter the following values (*select the default option for all prompts omitted below*):

    - **What is your solution name?**: form-customizer
    - **Which type of client-side component to create?**: Extension
    - **Which type of client-side extension to create?** Form Customizer
    - **What is your Form Customizer name?** HelloWorld
    - **Which template would you like to use?**: No JavaScript Framework

    At this point, Yeoman installs the required dependencies and scaffolds the solution files along with the **HelloWorld** extension. This might take a few minutes.

1. Type the following into the console to start Visual Studio Code.

    ```console
    code .
    ```

    > [!NOTE]
    > Because the SharePoint client-side solution is HTML/TypeScript based, you can use any code editor that supports client-side development to build your extension.

1. Open the **./src/extensions/helloWorld/HelloWorldFormCustomizer.manifest.json** file.

    This file defines your extension type and a unique identifier `id` for your extension which can be used to set to be used in content type level for enabling a custom rendering with this component.

## Code your Form Customizer

Open the **./src/extensions/helloWorld/HelloWorldFormCustomizer.ts** file.

Notice that the base class for the Form Customizer is imported from the **sp-listview-extensibility** package, which contains SharePoint Framework code required by the Form Customizer.

```typescript
import { Log } from '@microsoft/sp-core-library';
import {
  BaseFormCustomizer
} from '@microsoft/sp-listview-extensibility';
```

The logic for your Form Customizer is contained in the `onInit()`, `render()`, and `onDispose()` methods.

- `onInit()` is where you'll execute the setup needed for your extension. This event occurs after `this.context` and `this.properties` are assigned, but before the page DOM is ready. As with web parts, `onInit()` returns a promise that you can use to do asynchronous operations; `render()` isn't called until your promise has resolved. If you don’t need that, simply return `Promise.resolve<void>();`.
- `render()` occurs when component is rendered. It provides an `event.domElement` HTML element where your code can write its content.
- `onDispose()` occurs immediately before the form host element is deleted. It can be used to free any resources that were allocated during form rendering. For example, if `render()` mounted a React element, `onDispose()` must be used to free it; otherwise, a resource leak would occur.

The following are the contents of `render()` and `onDispose()` in the default solution:

```typescript
  public render(): void {
    // Use this method to perform your custom rendering.
    this.domElement.innerHTML = `<div class="${ styles.helloWorld }"></div>`;
  }

  public onDispose(): void {
    // This method should be used to free any resources that were allocated during rendering.
    super.onDispose();
  }
```

As by default the form customzier component does not render any information, let's update the render method as follows.

```typescript
  public render(): void {
    // Use this method to perform your custom rendering.
    this.domElement.innerHTML = `<div class="${ styles.helloWorld }"><h1>Super cool custom form component</h1></div>`;
  }

```


## Debug your Form Customizer

You can test and debug your Form Customizer within a live SharePoint Online site. You do not need to deploy your customizations to the tenant app catalog to do this, which makes the debugging experience simple and efficient.



1. To test your extension, you'll need to first create list to test the customizer in. So move to the site in your SharePoint Online tenant where you want to test the form customizer.

2. On the toolbar, select **New**, and then select **List**.

    ![Creating a new list](../../../images/ext-forcustomizer-create-new-list.png)

3. Choose **Blank list** from the new list creation experience

    ![Selecting blank list](../../../images/ext-forcustomizer-blank-list.png)

4. Create a new list named **Business**, and then select **Create**.

    ![Creating a new list with name of Orders](../../../images/ext-forcustomizer-new-list-business.png)

5. Within Visual Studio Code, open the **./config/serve.json** file.

    Update the `pageUrl` attributes to match a URL of the list which we created in the preview steps. After the changes, your **serve.json** should look like the following code:

    ```json
    {
      "$schema": "https://developer.microsoft.com/json-schemas/core-build/serve.schema.json",
      "port": 4321,
      "https": true,
      "serveConfigurations": {
        "default": {
          "pageUrl": "https://yourtenant.sharepoint.com/sites/demo/_layouts/15/SPListForm.aspx",
          "formCustomizer": {
            "componentId": "fb3e7dee-a6fa-4e80-add1-e06081167bb5",
            "PageType": 8,
            "RootFolder": "/sites/demo/Lists/business",
            "properties": {
              "sampleText": "Value"
            }
          }
    ```

    Let's call out few specific topics from serve.json file

    * You can see multiple different configurations which can be used to debug new, edit and view forms with specific query parameter differences. You can define the used configuration in your gulp serve command, for example as `gulp serve --config=helloWorld_EditForm`
    * componentId is automatically associated to be the first list formatting component in your solution (if you have multiple components)
    * To simplify the debugging, you do not need to define target content type id to which the component is associated, but in the runtime the association is performed in content type level by updating at least one of the following properties in the content type:
      * ContentType.**NewFormClientSideComponentId** - component id for new form
      * ContentType.**NewFormClientSideComponentProperties** - optional configuration details
      * ContentType.**DispFormClientSideComponentId** - component id for edit form
      * ContentType.**DispFormClientSideComponentProperties** - optional configuration details
      * ContentType.**EditFormClientSideComponentId** - component id display  form
      * ContentType.**EditFormClientSideComponentProperties** - optional configuration details

6. Compile your code and host the compiled files from the local machine by running this command:

    ```console
    gulp serve
    ```

    When the code compiles without errors, it serves the resulting manifest from **https://localhost:4321**.

    ![gulp serve](../../../images/ext-forcustomizer-gulp-serve.png)

    This will start your default browser and load the page defined in **serve.json** file.

7.  Accept the loading of debug manifests by selecting **Load debug scripts** when prompted.

    ![Accept loading debug scripts](../../../images/ext-forcustomizer-accept-debug-scripts.png)

    Notice how the the custom component is rendered in the page based on the custom content which we updated to the render method. 

    ![List view with from customizer rendered with default outpu](../../../images/ext-forcustomizer-default-output.png)


That's it. You have now created your first custom form component.

## Deployment of your extension

Whenever you are ready to start using your component, there are few steps to consider related on the component association to the content type. Steps for deployment are as follows:

1. Deploy solution to SharePoint App Catalog
1. Install solution to the site collection where you want to use the extension if you are not using the tenant scoped deployment
1. Associate the custom component to the content type using the specific properties in ContentType object. There are few options to do this:
   1. You can provision the used list and content type from your solution if you are using site scoped deployment option
   2. You can associate the component to content types using REST or CSOM APIs. Notice that if you associate the component in the site collection or in the content type hub level, it's automatically inherited to all new content type instances
