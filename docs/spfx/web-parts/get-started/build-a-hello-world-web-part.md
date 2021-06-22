---
title: Build your first SharePoint client-side web part (Hello World part 1)
description: Create a new web part project and preview it.
ms.date: 07/31/2020
ms.prod: sharepoint
localization_priority: Priority
ms.custom: scenarios:getting-started
---

# Build your first SharePoint client-side web part (Hello World part 1)

Client-side web parts are client-side components that run in the context of a SharePoint page. Client-side web parts can be deployed to SharePoint environments that support the SharePoint Framework. You can also use modern JavaScript web frameworks, tools, and libraries to build them.

Client-side web parts support:

- Building with HTML and JavaScript.
- Both SharePoint Online and on-premises environments.

> [!NOTE]
> Before following the steps in this article, be sure to [Set up your development environment](../../set-up-your-development-environment.md).

You can also follow these steps by watching this video on the SharePoint PnP YouTube Channel:

> [!Video https://www.youtube.com/embed/_O2Re5uRLoo]

## Create a new web part project

1. Create a new project directory in your favorite location.

    ```console
    md helloworld-webpart
    ```

1. Go to the project directory.

    ```console
    cd helloworld-webpart
    ```

1. Create a new HelloWorld web part by running the Yeoman SharePoint Generator.

    ```console
    yo @microsoft/sharepoint
    ```

1. When prompted:

    - **What is your solution name?**: helloworld-webpart
    - **Which baseline packages do you want to target for your component(s)?**: SharePoint Online only (latest)
    - **Where do you want to place the files?**: Use the current folder
    - **Do you want to allow the tenant admin the choice of being able to deploy the solution to all sites immediately without running any feature deployment or adding apps in sites?**: N
    - **Will the components in the solution require permissions to access web APIs that are unique and not shared with other components in the tenant?**: N
    - **Which type of client-side component to create?**: WebPart

1. The next set of prompts ask for specific information about your web part:

    - **What is your Web part name?**: HelloWorld
    - **What is your Web part description?**: HelloWorld description
    - **Which framework would you like to use?**: No JavaScript framework

At this point, Yeoman creates the project scaffolding (folders & files) and installs the required dependencies by running `npm install`. This usually takes 1-3 minutes depending on your internet connection.

When the project scaffolding and dependency install process is complete, Yeoman will display a message similar to the following indicating it was successful:

![SharePoint client-side solution scaffolded successfully](../../../images/yeoman-sp-complete.png)

> [!IMPORTANT]
> NPM may display warnings and error messages during the installation of dependencies while it runs the `npm install` command. You can safely ignore these log warnings & error messages.
>
> NPM may display a message about running `npm audit` at the end of the process. Don't run this command as it will upgrade packages and nested dependencies that may not have been tested by the SharePoint Framework.

For information about troubleshooting any errors, see [Known issues](../../known-issues-and-common-questions.md).

### Use your favorite code editor

Because the SharePoint client-side solution is HTML/TypeScript based, you can use any code editor that supports client-side development to build your web part, such as:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Atom](https://atom.io)
- [Webstorm](https://www.jetbrains.com/webstorm)

The SharePoint Framework documentation uses Visual Studio Code in the steps and examples. Visual Studio Code (VS Code) is a lightweight but powerful source code editor from Microsoft that runs on your desktop. VS Code available for Windows, macOS, and Linux. It comes with built-in support for JavaScript, TypeScript, Node.js, and has a rich ecosystem of extensions for other languages (such as C++, C#, Python, PHP) and runtimes.

## Preview the web part

You can preview and test your client-side web part locally on your workstation. The client-side toolchain uses HTTPS endpoint by default. Part of the [Set up your development environment](../../set-up-your-development-environment.md) process included trusting the development SSL certificate included in the toolchain on your local environment. This is required so your browser will trust the certificate.

> [!IMPORTANT]
> Trusting the developer certificate is required. This is a one-time process and is only required when you run your first SharePoint Framework project on a new workstation. You don't need to do this for every SharePoint Framework project.
>
> If you didn't trust the dev cert, follow the steps outlined on this page: [Set up your development environment: Trusting the self-signed developer certificate](../../set-up-your-development-environment.md#trusting-the-self-signed-developer-certificate).

Now that we've installed the developer certificate, enter the following command in the console to build and preview your web part:

```console
gulp serve
```

This command executes a series of gulp tasks to create and start a local webserver hosting the endpoints **localhost:4321** and **localhost:5432**. It will then open your default browser and load the workbench preview web parts from your local dev environment.

> [!NOTE]
> If you're seeing issues with the certificate in browser, please see details on installing a developer certificate: [Set up your development environment: Trusting the self-signed developer certificate](../../set-up-your-development-environment.md#trusting-the-self-signed-developer-certificate).
>
> If you're still seeing issues, see: [SharePoint Framework known issues and frequently asked questions](../../known-issues-and-common-questions.md)

![Gulp serve web part project](../../../images/helloworld-wp-gulp-serve.png)

SharePoint client-side development tools use [gulp](http://gulpjs.com/) as the task runner to handle build process tasks such as:

- Compiling TypeScript files to JavaScript.
- Compiling SASS files to CSS.
- Bundling and minifying JavaScript and CSS files.

VS Code provides built-in support for gulp and other task runners. Select <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>B</kbd> on Windows or <kbd>CMD</kbd>+<kbd>SHIFT</kbd>+<kbd>B</kbd> on macOS to debug and preview your web part.

The SharePoint Workbench is a developer design surface that enables you to quickly preview and test web parts without deploying them in SharePoint. SharePoint Workbench includes the client-side page and the client-side canvas in which you can add, delete, and test your web parts in development.

![SharePoint Workbench running locally](../../../images/sp-workbench.png)

### Use SharePoint Workbench to preview and test your web part

1. To add the HelloWorld web part, select the **add** icon (*this icon appears when you mouse hovers over a section as shown in the image above*). This opens the toolbox where you can see a list of web parts available for you to add. The list includes the **HelloWorld** web part as well other web parts available locally in your development environment.

    ![SharePoint Workbench toolbox in localhost](../../../images/sp-workbench-toolbox.png)

1. Select **HelloWorld** to add the web part to the page.

    ![HelloWorld web part in SharePoint Workbench](../../../images/sp-workbench-helloworld-wp.png)

    Congratulations! You've just added your first client-side web part to a client-side page.

1. Select the pencil icon on the far left of the web part to reveal the web part property pane.

    ![HelloWorld web part property pane](../../../images/sp-workbench-helloworld-pp.png)

    The property pane is where you can define properties to customize your web part. The property pane is client-side driven and provides a consistent design across SharePoint.

1. Modify the text in the **Description** text box to **Client-side web parts are awesome!**

    Notice how the text in the web part also changes as you type.

One of the capabilities of the property pane is to configure its update behavior, which can be set to *reactive* or *non-reactive*. By default, the update behavior is reactive and enables you to see the changes as you edit the properties. The changes are saved instantly when the behavior is reactive.

## Web part project structure

### To use Visual Studio Code to explore the web part project structure

1. In the console, stop the local web server by terminating the process. Selecting <kbd>CTRL</kbd>+<kbd>C</kbd> on Windows or macOS.
1. Enter the following command to open the web part project in VS Code (or use your favorite editor):

    ```console
    code .
    ```

> [!NOTE]
> If you get an error when executing this command, you might need to [install the code command in PATH](https://code.visualstudio.com/docs/editor/setup).

TypeScript is the primary language for building SharePoint client-side web parts. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. SharePoint client-side development tools are built using TypeScript classes, modules, and interfaces to help developers build robust client-side web parts.

The following are some key files in the project.

### Web part class

**HelloWorldWebPart.ts** in the **src\webparts\helloworld** folder defines the main entry point for the web part. The web part class **HelloWorldWebPart** extends the `BaseClientSideWebPart`. Any client-side web part should extend the `BaseClientSideWebPart` class to be defined as a valid web part.

`BaseClientSideWebPart` implements the minimal functionality that is required to build a web part. This class also provides many parameters to validate and access read-only properties such as `displayMode`, web part properties, web part context, web part `instanceId`, the web part `domElement`, and much more.

Notice that the web part class is defined to accept a property type `IHelloWorldWebPartProps`.

The property type is defined as an interface before the `HelloWorldWebPart` class in the **HelloWorldWebPart.ts** file.

```typescript
export interface IHelloWorldWebPartProps {
  description: string;
}
```

This property definition is used to define custom property types for your web part, which is described in the property pane section later.

#### Web part render method

The DOM element where the web part should be rendered is available in the `render()` method. This method is used to render the web part inside that DOM element. In the **HelloWorld** web part, the DOM element is set to a DIV. The method parameters include the display mode (either Read or Edit) and the configured web part properties if any:

```typescript
public render(): void {
  this.domElement.innerHTML = `
    <div class="${ styles.helloWorld }">
      <div class="${ styles.container }">
        <div class="${ styles.row }">
          <div class="${ styles.column }">
            <span class="${ styles.title }">Welcome to SharePoint!</span>
            <p class="${ styles.subTitle }">Customize SharePoint experiences using web parts.</p>
            <p class="${ styles.description }">${escape(this.properties.description)}</p>
            <a href="https://aka.ms/spfx" class="${ styles.button }">
              <span class="${ styles.label }">Learn more</span>
            </a>
          </div>
        </div>
      </div>
    </div>`;
}
```

This model is flexible enough so that web parts can be built in any JavaScript framework and loaded into the DOM element.

#### Configure the Web part property pane

The property pane is defined in the `HelloWorldWebPart` class. The `getPropertyPaneConfiguration` property is where you need to define the property pane.

When the properties are defined, you can access them in your web part by using `this.properties.<property-value>`, as shown in the `render()` method:

```typescript
<p class="${styles.description}">${escape(this.properties.description)}</p>
```

Notice that we're executing an HTML escape on the property's value to ensure a valid string. To learn more about how to work with the property pane and property pane field types, see [Make your SharePoint client-side web part configurable](../basics/integrate-with-property-pane.md).

Let's now add a few more properties to the property pane: a checkbox, a drop-down list, and a toggle. We first start by importing the respective property pane fields from the framework.

1. Scroll to the top of the file and add the following to the import section from **\@microsoft/sp-property-pane**:

    ```typescript
    PropertyPaneCheckbox,
    PropertyPaneDropdown,
    PropertyPaneToggle
    ```

    The complete import section looks like the following:

    ```typescript
    import {
      IPropertyPaneConfiguration,
      PropertyPaneTextField,
      PropertyPaneCheckbox,
      PropertyPaneDropdown,
      PropertyPaneToggle
    } from '@microsoft/sp-property-pane';
    ```

1. Update the web part properties to include the new properties. This maps the fields to typed objects.
1. Replace the `IHelloWorldWebPartProps` interface with the following code.

    ```typescript
    export interface IHelloWorldWebPartProps {
      description: string;
      test: string;
      test1: boolean;
      test2: string;
      test3: boolean;
    }
    ```

1. Save the file.
1. Replace the `getPropertyPaneConfiguration()` method with the following code, which adds the new property pane fields and maps them to their respective typed objects.

    ```typescript
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
      return {
        pages: [
          {
            header: {
              description: strings.PropertyPaneDescription
            },
            groups: [
              {
                groupName: strings.BasicGroupName,
                groupFields: [
                PropertyPaneTextField('description', {
                  label: 'Description'
                }),
                PropertyPaneTextField('test', {
                  label: 'Multi-line Text Field',
                  multiline: true
                }),
                PropertyPaneCheckbox('test1', {
                  text: 'Checkbox'
                }),
                PropertyPaneDropdown('test2', {
                  label: 'Dropdown',
                  options: [
                    { key: '1', text: 'One' },
                    { key: '2', text: 'Two' },
                    { key: '3', text: 'Three' },
                    { key: '4', text: 'Four' }
                  ]}),
                PropertyPaneToggle('test3', {
                  label: 'Toggle',
                  onText: 'On',
                  offText: 'Off'
                })
              ]
              }
            ]
          }
        ]
      };
    }
    ```

1. After you add your properties to the web part properties, you can now access the properties in the same way you accessed the `description` property earlier.

    Locate the following line:

    ```typescript
    <p class="${ styles.description }">${escape(this.properties.description)}</p>
    ```

    Add the following immediately after the previously mentioned line:

    ```typescript
    <p class="${ styles.description }">${escape(this.properties.test)}</p>
    <p class="${ styles.description }">${this.properties.test1}</p>
    <p class="${ styles.description }">${escape(this.properties.test2)}</p>
    <p class="${ styles.description }">${this.properties.test3}</p>
    ```

    To set the default value for the properties, you need to update the web part manifest's `properties` property bag.

1. Open **HelloWorldWebPart.manifest.json** and modify the `properties` to:

    ```typescript
    "properties": {
      "description": "HelloWorld",
      "test": "Multi-line text field",
      "test1": true,
      "test2": "2",
      "test3": true
    }
    ```

The web part property pane now has these default values for those properties.

### Web part manifest

The **HelloWorldWebPart.manifest.json** file defines the web part metadata such as version, ID, display name, icon, and description. Every web part must contain this manifest.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx/client-side-web-part-manifest.schema.json",
  "id": "fbcf2c6a-7df9-414c-b3f5-37cab6bb1280",
  "alias": "HelloWorldWebPart",
  "componentType": "WebPart",

  // The "*" signifies that the version should be taken from the package.json
  "version": "*",
  "manifestVersion": 2,

  // If true, the component can only be installed on sites where Custom Script is allowed.
  // Components that allow authors to embed arbitrary script code should set this to true.
  // https://support.office.com/article/Turn-scripting-capabilities-on-or-off-1f2c515f-5d7e-448a-9fd7-835da935584f
  "requiresCustomScript": false,
  "supportedHosts": ["SharePointWebPart"],

  "preconfiguredEntries": [{
    "groupId": "5c03119e-3074-46fd-976b-c60198311f70", // Other
    "group": { "default": "Other" },
    "title": { "default": "HelloWorld" },
    "description": { "default": "HelloWorld description" },
    "officeFabricIconFontName": "Page",
    "properties": {
      "description": "HelloWorld",
      "test": "Multi-line text field",
      "test1": true,
      "test2": "2",
      "test3": true
    }
  }]
}
```

Now that we have introduced new properties, ensure that you're again hosting the web part from the local development environment by executing the following command. This also ensures that the previous changes were correctly applied.

```console
gulp serve
```

### Preview the web part in SharePoint's hosted workbench

SharePoint Workbench is also hosted in SharePoint to preview and test your local web parts in development. The key advantage is that now you're running in SharePoint context and you're able to interact with SharePoint data.

1. Go to the following URL: **https://your-sharepoint-tenant.sharepoint.com/_layouts/workbench.aspx**

    > [!NOTE]
    > If you do not have the SPFx developer certificate installed, Workbench notifies you that it is configured not to load scripts from localhost. Stop the currently running process in the console window, and execute the **gulp trust-dev-cert** command in your project directory console to install the developer certificate before running the **gulp serve** command again. For more information, see [Trusting the self-signed developer certificate](../../set-up-your-development-environment.md#trusting-the-self-signed-developer-certificate)

    ![SharePoint Workbench running in a SharePoint Online site](../../../images/sp-workbench-o365.png)

1. Notice that the SharePoint Workbench now has the Office 365 Suite navigation bar.
1. Select the **add** icon in the canvas to reveal the toolbox. The toolbox now shows the web parts available on the site where the SharePoint Workbench is hosted along with your **HelloWorldWebPart**.

    ![Toolbox in SharePoint Workbench running in SharePoint Online site](../../../images/sp-workbench-o365-toolbox.png)

1. Add **HelloWorld** from the toolbox. Now you're running your web part in a page hosted in SharePoint!

    ![HelloWorld web part running in SharePoint Workbench running in a SharePoint Online site](../../../images/sp-workbench-o365-helloworld-wp.png)

> [!NOTE]
> The color of the web part depends on the colors of the site. By default, web parts inherit the core colors from the site by dynamically referencing Office UI Fabric Core styles used in the site where the web part is hosted.

Because you're still developing and testing your web part, there is no need to package and deploy your web part to SharePoint.

## Next steps

Congratulations on getting your first Hello World web part running!

Now that your web part is running, you can continue building out your Hello World web part in the next topic, [Connect your web part to SharePoint](./connect-to-sharepoint.md). You will use the same Hello World web part project and add the ability to interact with SharePoint List REST APIs. Notice that the **gulp serve** command is still running in your console window (or in Visual Studio Code if you're using that as editor). You can continue to let it run while you go to the next article.
