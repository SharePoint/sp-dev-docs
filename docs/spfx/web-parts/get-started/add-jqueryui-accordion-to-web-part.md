---
title: Add the jQueryUI Accordion to your SharePoint client-side web part
description: Adding the jQueryUI Accordion to your web part project involves creating a new web part.
ms.date: 07/17/2020
ms.prod: sharepoint
localization_priority: Priority
ms.custom: scenarios:getting-started
---

# Add jQueryUI Accordion to your SharePoint client-side web part

Adding the jQueryUI Accordion to your web part project involves creating a new web part, as shown in the following image.

![Screenshot of a web part that includes a jQuery Accordion](../../../images/jquery-accordion-wb.png)

Ensure that you've completed the following steps before you start:

- [Build your first web part](build-a-hello-world-web-part.md)

You can also follow these steps by watching this video on the SharePoint PnP YouTube Channel:

> [!Video https://www.youtube.com/embed/N0C9azIyiTo]

The developer toolchain uses Webpack & SystemJS to bundle and load your web parts. This includes loading any external dependencies such as jQuery or jQueryUI. To load external dependencies, at a high level, you need to:

- Acquire the external library, either via NPM or download it directly from the vendor.
- If available, install the respective framework's [TypeScript type declarations](http://definitelytyped.org/).
- If required, update your solution configuration to not include the external dependency in your web part bundle.

## Create a new web part project

1. Create a new project directory in your favorite location:

    ```console
    md jquery-webpart
    ```

1. Go to the project directory:

    ```console
    cd jquery-webpart
    ```

1. Create a new jQuery web part by running the Yeoman SharePoint Generator:

    ```console
    yo @microsoft/sharepoint
    ```

1. When prompted:
1. When prompted, enter the following values (*select the default option for all prompts omitted below*):

    - **What is your solution name?**: jquery-webpart
    - **Which type of client-side component to create?**: WebPart
    - **What is your Web part name?**: jQuery
    - **Which framework would you like to use?**: No JavaScript framework

At this point, Yeoman installs the required dependencies and scaffolds the solution files. This might take a few minutes. Yeoman scaffolds the project to include your **jQueryWebPart** as well.

## Install jQuery and jQuery UI NPM Packages

1. In the console, execute the following to install the jQuery NPM package:

    ```console
    npm install jquery@2
    ```

1. Next, execute the following to install the jQueryUI NPM package:

    ```console
    npm install jqueryui
    ```

1. Next, we need to install the TypeScript type declarations for our project.

    Open your console and install the needed types:

    ```console
    npm install @types/jquery@2 --save-dev
    npm install @types/jqueryui --save-dev
    ```

### To unbundle external dependencies from web part bundle

By default, all dependencies referenced in your project's code are bundled into the resulting web part bundle. In most cases, this isn't ideal because it unnecessarily increases the file size. You can configure the project to exclude the dependencies from the web part bundle.

1. Enter the following to open the web part project in Visual Studio Code:

    ```console
    code .
    ```

1. In Visual Studio Code, open the file **config\config.json**.

    This file contains information about your bundle(s) and external dependencies.

    The `bundles` property contains the default bundle information. In this case, the jQuery web part bundle. When you add more web parts to your solution, you see one entry per web part.

    ```json
    "bundles": {
      "j-query-web-part": {
        "components": [
          {
            "entrypoint": "./lib/webparts/jQuery/JQueryWebPart.js",
            "manifest": "./src/webparts/jQuery/JQueryWebPart.manifest.json"
          }
        ]
      }
    },
    ```

1. The `externals` property contains the libraries that should not be included in the generated bundle. The bundling process will also use values of this property to configure the SharePoint Framework's module loader to load the references libraries prior to loading the web part bundle.

    ```json
    "externals": {},
    ```

1. To exclude `jQuery` and `jQueryUI` from the generated bundle, add the following two modules to the `externals` property:

    ```json
    {
      //...

      "externals": {
        "jquery": "node_modules/jquery/dist/jquery.min.js",
        "jqueryui": "node_modules/jqueryui/jquery-ui.min.js"
      },

      //...
    }
    ```

    Now when you build your project, `jQuery` and `jQueryUI` are not bundled into your default web part bundle.

    The full content of the **config.json** file is currently as follows:

    ```json
    {
      "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/config.2.0.schema.json",
      "version": "2.0",
      "bundles": {
        "j-query-web-part": {
          "components": [
            {
              "entrypoint": "./lib/webparts/jQuery/JQueryWebPart.js",
              "manifest": "./src/webparts/jQuery/JQueryWebPart.manifest.json"
            }
          ]
        }
      },
      "externals": {
        "jquery": "node_modules/jquery/dist/jquery.min.js",
        "jqueryui": "node_modules/jqueryui/jquery-ui.min.js"
      },
      "localizedResources": {
        "JQueryWebPartStrings": "lib/webparts/jQuery/loc/{locale}.js"
      }
    }
    ```

## Build the Accordion

Open the project folder **jquery-webpart** in Visual Studio Code. Your project should have the jQuery web part that you added earlier under the **/src/webparts/jQuery** folder.

### To add the Accordion HTML

1. Add a new file  **MyAccordionTemplate.ts** in the **src/webparts/jQuery** folder.
1. Create and export (as a module) a class `MyAccordionTemplate` that holds the HTML code for the accordion:

    ```typescript
    export default class MyAccordionTemplate {
        public static templateHtml: string =  `
          <div class="accordion">
            <h3>Section 1</h3>
            <div>
                <p>
                Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
                ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
                amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
                odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
                </p>
            </div>
            <h3>Section 2</h3>
            <div>
                <p>
                Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
                purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor
                velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In
                suscipit faucibus urna.
                </p>
            </div>
            <h3>Section 3</h3>
            <div>
                <p>
                Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis.
                Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero
                ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis
                lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.
                </p>
                <ul>
                <li>List item one</li>
                <li>List item two</li>
                <li>List item three</li>
                </ul>
            </div>
            <h3>Section 4</h3>
            <div>
                <p>
                Cras dictum. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
                mauris vel est.
                </p>
                <p>
                Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
                </p>
            </div>
        </div>`;
    }
    ```

1. Save the file.

### To import the Accordion HTML

1. In Visual Studio Code, open **src\webparts\jQuery\JQueryWebPart.ts**.
1. Add the following `import` statement after the existing `import` statements at the top of the file:

    ```typescript
    import MyAccordionTemplate from './MyAccordionTemplate';
    ```

### To import jQuery and jQueryUI

1. You can import jQuery to your web part in the same way that you imported `MyAccordionTemplate`. Add the following `import` statement after the existing `import` statements:

    ```typescript
    import * as jQuery from 'jquery';
    import 'jqueryui';
    ```

1. The jQueryUI project uses an external CSS file to implement it's user experience. Your web part needs to load this CSS file at runtime:

    1. To load a CSS file at runtime, use the SharePoint module loader by utilizing the `SPComponentLoader` object. Add the following `import` statement.

        ```typescript
        import { SPComponentLoader } from '@microsoft/sp-loader';
        ```

    1. Load the jQueryUI styles in the `JQueryWebPart` web part class by adding a constructor and use the `SPComponentLoader`. Add the following constructor to your web part:

        ```typescript
        public constructor() {
          super();

          SPComponentLoader.loadCss('//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css');
        }
        ```

          This code does the following:

        - Calls the parent constructor with the context to initialize the web part.
        - Asynchronously loads the accordion styles in the CSS file from a CDN.

### To render Accordion

1. In the **jQueryWebPart.ts** file, go to the `render()` method.
1. Set the web part's inner HTML to render the accordion HTML:

    ```typescript
    this.domElement.innerHTML = MyAccordionTemplate.templateHtml;
    ```

1. jQueryUI Accordion has a few options that you can set to customize the accordion. Define a few options for your accordion after the existing `this.domElement.innerHTML = MyAccordionTemplate.templateHtml;` line of code:

    ```typescript
    const accordionOptions: JQueryUI.AccordionOptions = {
      animate: true,
      collapsible: false,
      icons: {
        header: 'ui-icon-circle-arrow-e',
        activeHeader: 'ui-icon-circle-arrow-s'
      }
    };
    ```

    The jQueryUI typed declaration allows you to create a typed variable called `JQueryUI.AccordionOptions` and specify the supported properties.

    If you play around with the IntelliSense, you notice that you get full support for available methods under `JQueryUI.` as well as the method parameters.

1. Finally, initialize the accordion:

    ```typescript
    jQuery('.accordion', this.domElement).accordion(accordionOptions);
    ```

    As you can see, you use the variable `jQuery` that you used to import the `jquery` module. You then initialize the accordion.

    The final `render()` method should look like this:

    ```typescript
    public render(): void {
      this.domElement.innerHTML = MyAccordionTemplate.templateHtml;

      const accordionOptions: JQueryUI.AccordionOptions = {
        animate: true,
        collapsible: false,
        icons: {
          header: 'ui-icon-circle-arrow-e',
          activeHeader: 'ui-icon-circle-arrow-s'
        }
      };

      jQuery('.accordion', this.domElement).accordion(accordionOptions);
    }
    ```

1. Save the file.

## Preview the web part

1. In your console, ensure that you're still in the **jquery-webpart** folder, and execute the following to build and preview your web part:

    ```console
    gulp serve
    ```

    > [!NOTE]
    > Visual Studio Code provides built-in support for gulp and other task runners. You can select <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>B</kbd> in Windows or <kbd>CMD</kbd>+<kbd>SHIFT</kbd>+<kbd>B</kbd> in macOS to debug and preview your web part.

    Gulp executes the tasks and opens the local SharePoint web part Workbench.

1. On the workbench page that loads in the browser, select the **+** (plus sign) to show the list of web parts, and add the jQuery web part. You should now see the jQueryUI Accordion!

    ![Screenshot of a web part that includes a jQuery Accordion](../../../images/jquery-accordion-wb.png)

1. In the console where you have **gulp serve** running, select <kbd>CTRL</kbd>+<kbd>C</kbd> to terminate the task.
