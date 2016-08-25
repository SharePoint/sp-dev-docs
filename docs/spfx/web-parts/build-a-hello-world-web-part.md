# Build a Hello World SharePoint client-side web part

>**Note:** The SharePoint Framework is currently in Preview, and is subject to change based on customer feedback.  While we’re in preview, SharePoint Framework web parts are not supported for use in production environments.

## Tutorial 1 Overview
This tutorial will guide you in building a simple client-side web part using the SharePoint client-side development tools. 

Each step below will build on the previous so you will need to go through each step one by one to successfully complete this tutorial.

## What is a client-side web part?
Client-side web parts are client-side components that run inside the context of a SharePoint page. Today, developers can build server-side web parts that are packaged and deployed to SharePoint. However, the server-side web parts are only available to on-premises and cannot be deployed to SharePoint online (Office 365).

Client-side web parts will:
* Enable developers to build web parts using HTML & JavaScript.
* Support both SharePoint online and on-premises environment.

## Step 1: Setup your dev environment

Follow the instructions [here](./Setup-your-machine) if you haven't setup your machine for building web parts.

## Step 2: Project Directory
Create a new project directory in your favorite location:

```
md helloworld-webpart
```
    
Navigate to the project directory:

```
cd helloworld-webpart
```
    
## Step 3: Create a new web part project
Create a new HelloWorld web part by running the Yeoman SharePoint Generator:

```
yo @microsoft/sharepoint
```
    
You will be prompted with a series of questions:
* Accept the default `helloworld-webpart` as your solution name and press `Enter`.
* Select `Use the current folder` to place the files.

The next set of prompts will ask specific information about your web part:
* Accept the default `HelloWorld` as your web part name and press `Enter`.
* Accept the default `HelloWorld description` as your web part description and press `Enter`.
* Accept the default `No javascript web framework` as the framework you would like to use and press `Enter`.

![Yeoman SharePoint generator prompts to create a web part client-side solution](../../images/yeoman-sp-prompts.png)

At this point, yeoman will install the required dependencies and scaffold the solution files along with the `HelloWorld` web paart. This might take a few minutes. 

Once the scaffold is complete, you should see the following message indicating a successful scaffold:

![SharePoint client-side solution scaffolded successfully](../../images/yeoman-sp-complete.png)
If you get any errors, make sure you read the [known issues](./Known-Issues) document for specific errors and fixes.

### Using your favorite Code Editor/IDE  
Since the SharePoint client-side solution is HTML/TypeScript based, you can use any code editor or IDE that supports client-side development to build your web part, such as:
* [Visual Studio Code](https://code.visualstudio.com/)
* [Sublime](https://www.sublimetext.com/)
* [Atom](https://atom.io)
* [Webstorm](https://www.jetbrains.com/webstorm)

#### Using Visual Studio 2015
For this preview, support for SharePoint client-side projects in Visual Studio is available through NodeJS Tools for Visual Studio. See [separate tutorial](./Working-with-visual-studio) with Visual Studio 2015 support.
   
## Step 4: Preview web part
Open the project folder in Visual Studio Code. 

>In this tutorial, and the rest, we will use Visual Studio Code as our code editor. If you are not using Visual Studio Code, feel free to open the project in your favorite code editor and just follow the steps.

In the console, type the following to open the web part project in Visual Studio Code:

```
code .
```

If you get an error, you may need to [install the code command in PATH](https://code.visualstudio.com/docs/editor/setup).
    
![HelloWorld web part project in Visual Studio Code](./images/helloworld-wp-vscode-project.png)

SharePoint client-side development tools use [gulp](http://gulpjs.com/) as its task runner which handles build process such as:
* Bundle and minify JavaScript and CSS files.
* Run tools to call the bundling and minification tasks before each build.
* Compile SASS files to CSS.
* Compile TypeScript files to JavaScript.

> If you are new to gulp, you can read [this documentation](http://docs.asp.net/en/latest/client-side/using-gulp.html) on using gulp with Visual Studio in conjunction with building ASP.NET 5 projects.  

Switch to your console, make sure you are still in the `helloworld-webpart` directory and type the following to build and preview your web part:

```
gulp serve
```

>If you see an error `cannot find module es6-promise`, please execute the command in the project folder to install the es-promise npm module: `npm i es6-promise` and then do `gulp serve` again.


> Visual Studio Code provides built-in support for gulp and other task runners. You can press `Ctrl+Shift+B` if you are in Windows or `Cmd+Shift+B` if you are in Mac within Visual Studio Code to debug and preview your web part. 

This command will execute a series of gulp tasks to create a local, Node-based HTTP server on 'localhost:4321' and launch your default browser to preview web parts from your local dev environment.

![Gulp serve web part project](./images/helloworld-wp-gulp-serve.png)

### SharePoint Workbench
SharePoint Workbench is a developer design surface to quickly preview and test web parts without needing to deploy them in SharePoint. SharePoint Workbench includes the new client-side page and the new client-side canvas in which you can add, delete and test your web parts in development.

![SharePoint Workbench running locally](./images/sp-workbench.png)

To add the `HelloWorld` web part, click on the add (`plus icon`) button. Add button opens the new `Toolbox` where you can see a list of web parts available for you to add. The list will include the `HelloWorld` web part as well other web parts available locally in your developer environment.

![SharePoint Workbench toolbox in localhost](./images/sp-workbench-toolbox.png)

Click on the `HelloWorld` to add the webpart to the page:

![HelloWorld web part in SharePoint Workbench](./images/sp-workbench-helloworld-wp.png)

Congratulations! You have just added your first client-side web part to a client-side page.

Now, click the `pencil icon` on the far left of the web part to reveal the web part property pane.

![HelloWorld web part property pane](./images/sp-workbench-helloworld-pp.png)

The property pane is where you can define properties to customize your web part. The property pane is client-side driven and provides a consistent design across SharePoint. 

Modify the text in the `Description` text box to `Client-side web parts are awesome!`

Notice how the text in the web part also changes as you type. 

One of the new capabilities available to the property pane is to configure its update behavior, which can be set to either reactive or non-reactive. By default, the update behavior is reactive and enables you to see the changes as you edit the properties. The changes are saved instantly as well when the behavior is configure to be reactive.  

## Step 5: Web part project structure
Switch back to Visual Studio Code to explore the web part project structure. You can find the web part code under the `src\webparts\helloWorld` directory. 

![HelloWorld project structure](./images/helloworld-wp-vscode-project-structure.png)

TypeScript is the primary language to build SharePoint client-side web parts. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. SharePoint client-side development tools are built using TypeScript classes, modules and interfaces to help developers build robust client-side web parts. 

Let's walk through some of the key files in the project:

### HelloWorldWebPart.ts

#### Web part class
`HelloWorldWebPart.ts` defines the main entry point for the your web part where the web part class `HelloWorldWebPart` extends the `BaseClientSideWebPart`. Any client-side web part should extend this class in-order to be defined as a valid web part.

```ts
public constructor(context: IWebPartContext) {
    super(context);
}
```

`BaseClientSideWebPart` implements the minimal functionality that is required to build a web part. This class also provides a bunch of parameters to validate and access to readonly properties such as displayMode, web part properties, web part context, web part instanceId, the web part domElement and much more. 

Notice that we are also defining our web part class to accept a property type `IHelloWorldWebPartProps`

The property type is defined as an interface in a separate file `IHelloWorldWebPartProps.ts`

```ts
export interface IHelloWorldWebPartProps {
    description: string;
}
```

This property definition is used to define your custom property types for your web part, which we will see in the Property Pane section later below. 

#### Web part render()
The DOM element where the web part should be rendered is available in the `render` method. This method is used to render the web part inside that DOM element. In our `HelloWorld` web part, we pass in the DIV to the DOM element. The method parameters include the display mode (either Read or Edit) and the configured web part properties if any: 

```ts
public render(): void {
  this.domElement.innerHTML = `
    <div class="${styles.helloWorld}">
      <div class="${styles.container}">
        <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
          <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
            <span class="ms-font-xl ms-fontColor-white">Welcome to SharePoint!</span>
            <p class="ms-font-l ms-fontColor-white">Customize SharePoint experiences using Web Parts.</p>
            <p class="ms-font-l ms-fontColor-white">${this.properties.description}</p>
            <a href="https://github.com/SharePoint/sp-dev-docs/wiki" class="ms-Button ${styles.button}">
              <span class="ms-Button-label">Learn more</span>
            </a>
          </div>
        </div>
    </div>
  </div>`;
}
```

This model is flexible enough so that web parts can be built in any JavaScript framework and loaded into the DOM element. Below is an example of how you would load a React component instead of plain HTML as in our HelloWorld webpart.

```ts
render(): void {
    let e = React.createElement(TodoComponent, this.properties);
    ReactDom.render(e, this.domElement);
}
```

>Yeoman SharePoint generator allows you to choose `react` as your framework of choice when adding a new web part to the project. 

#### Web part property pane
The property pane is also defined here in the `HelloWorldWebPart` class. `propertyPaneSettings` property is where you will need to define the property pane.

Once the properties are defined, you can then access them in your web part using the `this.properties.<property-value>`, as we do in the `render` method:

```ts
<p class="ms-font-l ms-fontColor-white">${this.properties.description}</p>
```

Visit the [Integrating Property Pane with a Web Part](./Integrating-Property-Pane) topic to get to know more about how to work with property pane and property pane field types.

Replace the `propertyPaneSettings` method with the code below which shows how to add property types other than TextField. 

```ts
protected get propertyPaneSettings(): IPropertyPaneSettings {
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

Since we added new property fields, lets import those from the framework.

Scroll to the top of the file and add the following to the `import` from `@microsoft/sp-client-preview`:

```
PropertyPaneCheckbox,
PropertyPaneDropdown,
PropertyPaneToggle
```

The complete `import` section will look like the following:

```
import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle
} from '@microsoft/sp-client-preview';
```

Save the file.

Now add these properties to the `IHelloWorldWebPartProps` interface that map to our fields we just added.

Open `IHelloWorldWebPartProps.ts` and replace the existing code with the below:

```ts
export interface IHelloWorldWebPartProps {
    description: string;
    test: string;
    test1: boolean;
    test2: string;
    test3: boolean;
}
```

Save the file.

Switch back to `HelloWorldWebPart.ts` file.

Once you added your properties to the web part props, you can now access the property in the same way you accessed the `description` property earlier:

```ts
<p class="ms-font-l ms-fontColor-white">${this.properties.test2}</p>
```

To set the default value for the property, you will need to update the web part manifest's `properties` property bag:

Open `HelloWorldWebPart.manifest.json`

Modify the `properties` to:

```ts
"properties": {
  "description": "HelloWorld",
  "test": "Multi-line text field",
  "test1": true,
  "test2": "2",
  "test3": true
}
```

### Web part manifest
`HelloWorldWebPart.manifest.json` file defines the web part metadata such as version, id, display name, icon, description etc., Every web part should contain this manifest.

```ts
{
  "$schema": "../../../node_modules/@microsoft/sp-module-interfaces/lib/manifestSchemas/jsonSchemas/clientSideComponentManifestSchema.json",
  "id": "2f1ef3e2-5f37-4da8-b1ff-52c468a28ae2",
  "componentType": "WebPart",
  "version": "0.0.1",
  "manifestVersion": 2,
  "preconfiguredEntries": [
    {
      "groupId": "2f1ef3e2-5f37-4da8-b1ff-52c468a28ae2",
      "group": {
        "default": "Under Development"
      },
      "title": {
        "default": "HelloWorld"
      },
      "description": {
        "default": "HelloWorld description"
      },
      "officeFabricIconFontName": "Page",
      "properties": {
        "description": "HelloWorld",
        "test": "Multi-line text field",
        "test1": true,
        "test2": "2",
        "test3": true
      }
    }
  ]
}
```
### Step 6: Preview web part in SharePoint
So far, we have previewed the web part in the Web Part Workbench hosted locally in your machine.

SharePoint Workbench is also hosted in SharePoint to preview and test your local web parts in development. The key advantage is that now you are running in SharePoint context and that you will be able to interact with SharePoint data.

Navigate to the following URL: https://your-sharepoint-site/Shared%20Documents/workbench.aspx

By default, your browser is configured to not load scripts from localhost. Workbench will notify you if that is the case:

![Load unsafe scripts to run scripts from localhost](./images/sp-workbench-o365-unsface-scripts.png) 

In order to execute local scripts, you will need to configure the browser to load scripts from unauthenticated sources. This is due to loading scripts over HTTP while connected to a page via HTTPS. Depending on the browser you use, the options to enable this may vary. For example, in the Chrome browser, you can click the grey shield in the right side of the address bar to load unsafe scripts. 

![Allow brwoser to load unsafe scripts to run scripts from localhost](./images/chrome-load-unsafe-scripts.png)

Once you enable to load the scripts, you should see the workbench load. Add the hello world web part to the canvas:

![SharePoint Workbench running in a SharePoint Online site](./images/sp-workbench-o365.png)

Notice that the SharePoint Workbench now has the Office 365 Suite Nav bar.

Click the `add icon` in the canvas to reveal the `toolbox`. The `Toolbox` now sbows the web parts available on the site where the SharePoint Workbench is hosted along with your `HelloWorldWebPart`.

![Toolbox in SharePoint Workbench running in SharePoint Online site](./images/sp-workbench-o365-toolbox.png)

Add the `HelloWorldWebPart` from the toolbox. Now you are running your web part in a page hosted in SharePoint!

![HelloWorld web part running in SharePoint Workbench running in a SharePoint Online site](./images/sp-workbench-o365-helloworld-wp.png)

Since you are still developing and testing your web part, there is no need to package and deploy your web part to SharePoint. 

## Next steps
This concludes our first tutorial in building client-side web parts. 

Notice that the `gulp serve` command is still running in your console window (or in Visual Studio Code if you using the editor). Let it run for now as we continue to the next tutorial.

In the [next tutorial](./HelloWorld,-Talking-to-SharePoint), we will use the same Hello World web part project and add the ability to interact with SharePoint List REST APIs. 
