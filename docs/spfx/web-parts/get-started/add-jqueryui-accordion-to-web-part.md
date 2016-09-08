# Add jQueryUI Accordion to your SharePoint client-side web part

>**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.

This article describes how to add the jQueryUI Accordion to your web part project. This involves creating a new web part, as shown in the following image. 

![Screenshot of a web part that includes a jQuery Accordion](../../../../images/jquery-accordion-wb.png)

You can also follow these steps by watching the video on the [SharePoint PnP YouTube Channel](https://www.youtube.com/watch?v=YcECe5JbAnA&list=PLR9nK3mnD-OXvSWvS2zglCzz4iplhVrKq). 

<a href="https://www.youtube.com/watch?v=YcECe5JbAnA&list=PLR9nK3mnD-OXvSWvS2zglCzz4iplhVrKq">
<img src="../../../../images/spfx-youtube-tutorial5.png" alt="Screenshot of the YouTube video player for this tutorial" />
</a>

## Prerequisites
Complete the following steps before you start:

* [Build your first web part](build-a-hello-world-web-part.md)
* [Connect to SharePoint](connect-to-sharepoint.md) 

The developer toolchain uses Webpack, SystemJS and CommonJS to bundle your web parts. This includes loading any external dependencies such as jQuery or jQueryUI. To load external dependencies, at a high level, you will need to:

* Acquire the external library, either via npm or download from the vendor.
* If available, install the respective framework's [TypeScript type definitions](http://definitelytyped.org/).
* If required, update your solution config to not include the external dependency in your web part bundle by default.

## Create a new web part project

Create a new project directory in your favorite location:

```
md jquery-webpart
```
    
> **Warning:** Make sure to create this directory in a new folder, not as a subdirectory of `helloworld-webpart`.

Go to the project directory:

```
cd jquery-webpart
```
    
Create a new jQuery web part by running the Yeoman SharePoint Generator:

```
yo @microsoft/sharepoint
```

When prompted:

* Accept the default **jquery-webpart** as your solution name and choose **Enter**.
* Select **Use the current folder** as the location for the files.

The next set of prompts will ask for specific information about your web part:

* Type **jQuery** for the web part name and choose **Enter**.
* Enter **jQuery Web Part** as the description of the web part and choose **Enter**.
* Accept the default No **javascript web framework** option for the framework and choose **Enter** to continue.
* At the next prompt, choose **Enter** to continue. Do not select any libraries to add. 

At this point, Yeoman will install the required dependencies and scaffold the solution files. This might take a few minutes. Yeoman will scaffold the project to include your **jQueryWebPart** web part as well.

In the console, type the following to open the web part project in Visual Studio Code:

```
code .
```

## Install jQuery and jQuery UI NPM Packages

In the console, type the following to install jQuery npm package:

```
npm i --save jquery
```

 Now type the following to install jQueryUI npm package:

```
npm i --save jqueryui
```

TypeScript Definition Manager (TSD) allows you to search and install type definitions for your project. Use TSD to install the type definitions for jQuery and jQuery UI.

Because the web part project is primarily a TypeScript project, the TypeScript compiler has to be able to understand the respective types. It also helps to provide the IntelliSense required in the code editor.

To do that, first install [TypeScript definition manager](http://definitelytyped.org/tsd/).

Open your console and run the commands:

```
npm i -g tsd
```

Now install jQuery and jQuery UI type definitions:

```
tsd install jquery jqueryui --save
```

TSD will install the type definitions into the **/typings** folder. This folder also includes other typings that were scaffolded by the Yeoman generator.

Go to **/typings/jquery** and **/typings/jqueryui** to find the type definitions for jQuery and jQuery UI.

Include one other typing:

```
tsd install combokeys --save
```

### Unbundle external dependencies from web part bundle
By default, any dependencies you add are bundled into the web part bundle. In some cases, this is not ideal. You can choose to unbundle these dependencies from the web part bundle.

In Visual Studio Code, open the file config\config.json.

This file contains information about your bundle(s) and any external dependencies. 

The `entries` region contains the default bundle information - in this case, the jQuery web part bundle. When you add more web parts to your solution, you will see one entry per web part.

```json
"entries": [
  {
    "entry": "./lib/webparts/jQuery/jQueryWebPart.js",
    "manifest": "./src/webparts/jQuery/jQueryWebPart.manifest.json",
    "outputPath": "./dist/j-query.bundle.js",
  }
]
```

The `externals` section contains the libraries that are not bundled with the default bundle. 

```json
  "externals": {
    "@microsoft/sp-client-base": "node_modules/@microsoft/sp-client-base/dist/sp-client-base.js",
    "@microsoft/sp-client-preview": "node_modules/@microsoft/sp-client-preview/dist/sp-client-preview.js",
    "@microsoft/sp-lodash-subset": "node_modules/@microsoft/sp-lodash-subset/dist/sp-lodash-subset.js",
    "office-ui-fabric-react": "node_modules/office-ui-fabric-react/dist/office-ui-fabric-react.js",
    "react": "node_modules/react/dist/react.min.js",
    "react-dom": "node_modules/react-dom/dist/react-dom.min.js",
    "react-dom/server": "node_modules/react-dom/dist/react-dom-server.min.js"
  },
```

To exclude `jQuery` and `jQueryUI` from the default bundle, add the modules to the `externals` section:

```json
"jquery":"node_modules/jquery/dist/jquery.min.js",
"jqueryui":"node_modules/jqueryui/jquery-ui.min.js"
```

Now when you build your project, `jQuery` and `jQueryUI` will not be bundled into your default web part bundle.

## Build the Accordion

Open the project folder **jquery-webpart** in Visual Studio Code. Your project should have the jQuery web part that you added earlier under the /src/webparts/jQuery folder.

### Add Accordion HTML
Add a new file in the `src/webparts/jQuery`folder called **MyAccordionTemplate.ts**.

Create and export (as a module) a class `MyAccordionTemplate` that holds the HTML code for the accordion.

```ts
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

Save the file.

### Import Accordion HTML

In Visual Studio code, open **src\webparts\jQuery\JQueryWebPart.ts**.

At the top of the file, where you can find other imports, add the following import:

```ts
import MyAccordionTemplate from './MyAccordionTemplate';
```

### Import jQuery and jQueryUI
You can import jQuery your web part in the same way that you imported MyAccordionTemplate.

At the top of the file, where you can find other imports, add the following import:

```
import * as myjQuery from 'jquery';
```

Notice how you are importing the jQuery module into a custom variable named `myjQuery`. You can call it whatever you want; we recommend that you use a name that is related to your web part. 

Because jQueryUI is a plugin, you load it via a require statement instead of import. Just below the jQuery import, add the following require:

```ts
require('jqueryui');
```

Next, you'll load some external css files. To do that, use the module loader. Add the following import:

```ts
import importableModuleLoader from '@microsoft/sp-module-loader';
```

To load the jQueryUI styles, in the `JQueryWebPart` web part class, add the following line inside the constructor:

```ts
importableModuleLoader.loadCss('//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css');
```

The constructor should look like this now:

```ts
public constructor(context: IWebPartContext){
    super(context);
    
    importableModuleLoader.loadCss('//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css');
}
```

This code does the following:

* Calls the parent constructor with the context to initialize the web part.
* Loads the accordion styles from a CDN asynchronously.

### Render Accordion

In the `jQueryWebPart.ts`, go to the `render` method.

Set the web part's inner HTML to render the accordion HTML:

```ts
this.domElement.innerHTML = MyAccordionTemplate.templateHtml;
```

jQueryUI Accordion has few options that you can set to customize the accordion. Define a few options for your accordion just below `this.domElement.innerHTML = MyAccordionTemplate.templateHtml;`:

```ts
const accordionOptions: JQueryUI.AccordionOptions = {
  animate: true,
  collapsible: false,
  icons: {
    header: 'ui-icon-circle-arrow-e',
    activeHeader: 'ui-icon-circle-arrow-s'
  }
};
```

As you can see, jQueryUI typed definition allows you to create a typed variable called `JQueryUI.AccordionOptions` and specify the supported properties. 

If you play around with the IntelliSense, you will notice you will get full support for available methods under `JQueryUI.` as well as the method parameters.

Finally, initialize the accordion:

```ts
myjQuery(this.domElement).children('.accordion').accordion(accordionOptions);
```

As you can see, you use the variable `myjQuery` that you used to import the `jquery` module. You then initialize the accordion.

The complete `render` method class looks like this:

```ts
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

  myjQuery(this.domElement).children('.accordion').accordion(accordionOptions);
}
```

Save the file.

## Preview the web part

In your console, make sure you are still in the jquery-webpart folder and type the following to build and preview your web part:

```
gulp serve
```

> **Note:** Visual Studio Code provides built-in support for gulp and other task runners. You can choose **Ctrl+Shift+B** in Windows or **Cmd+Shift+B** on a Mac to debug and preview your web part.

Gulp will execute the tasks and open the local SharePoint web part workbench.

In the page canvas, choose the **+** (plus sign) to show the list of web parts, and add the jQuery web part. You should now see the jQueryUI Accordion!

![Screenshot of a web part that includes a jQuery Accordion](../../../../images/jquery-accordion-wb.png)

In the console where you have `gulp serve` running, choose **Ctrl+C** to terminate the task.
