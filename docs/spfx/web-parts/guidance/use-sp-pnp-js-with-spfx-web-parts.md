# Use sp-pnp-js with SharePoint Framework Web Parts

You may opt to use the [sp-pnp-js](https://www.npmjs.com/package/sp-pnp-js) library when building your SharePoint Framework web parts. This library 
provides a fluent API to make building your REST queries intuitive and supports batching and caching. You can learn more on the [project's homepage](https://github.com/SharePoint/PnP-JS-Core) 
which has links to documentation, samples, and other resources to help you get started.

You can download the full source for this article from the samples site.

## Setup your Environment

Before you can complete this guide you will need to ensure you have [setup your environment](https://dev.office.com/sharepoint/docs/spfx/set-up-your-development-environment) for development 
using SharePoint Framework.

## Create a New Project

Start by creating a new folder for the project using your console of choice:

```sh
md spfx-sp-pnp-js-example
```

And enter that folder

```sh
cd spfx-sp-pnp-js-example
```

The run the Yeoman generator for SPFx

```sh
yo @microsoft/sharepoint
```

Enter the following values when prompted during the setup of your new project:

- #spfx-sp-pnp-js-example# as solution name (keep default)
- #Current Folder# as the solution location
- #Kockout# as the framework
- #SPPnPJSExample# as the name of the web part
- #Example of using sp-pnp-js within SPFx# as the description

![Completed Project Scaffolding](../../../../images/sp-pnp-js-guide-completed-setup.png)


Once the scaffolding completes open the project in your code editor of choice, the screen shots here show [Visual Studio Code](https://code.visualstudio.com/).

```sh
code .
```

![Project as first opened in visual studio code](../../../../images/sp-pnp-js-guide-first-open.png)

## Install And Setup sp-pnp-js

Once your project is created you will need to install and setup sp-pnp-js, starting with installing the package.

```sh
npm install sp-pnp-js --save
```

### Setup

Because the sp-pnp-js library constructs REST requests it needs to know the URL to send these requests. When operating within classic sites and pages 
we can make use of the global _spPageContextInfo variable. Within SPFx this is not available, or if it is may not be correct. So we need to rely on the 
[context](https://dev.office.com/sharepoint/reference/spfx/sp-webpart-base/iwebpartcontext) object 
supplied by the framework. There are [two ways](https://github.com/SharePoint/PnP-JS-Core/wiki/Using-sp-pnp-js-in-SharePoint-Framework#establish-context) to ensure you have correctly setup your requests, 
we'll use the onInit method in this example.

#### Update onInit

Open the src\webparts\spPnPjsExample\SpPnPjsExampleWebPart.ts file and add the import for the pnp setup function.

```TypeScript
import pnp from "sp-pnp-js";
```

In the onInit method update the code to appear as below. We are adding the block after the super.onInit() call.

```TypeScript
/**
 * Initialize the web part.
 */
protected onInit(): Promise<void> {
  this._id = _instance++;

  const tagName: string = `ComponentElement-${this._id}`;
  this._componentElement = this._createComponentElement(tagName);
  this._registerComponent(tagName);

  // When web part description is changed, notify view model to update.
  this._koDescription.subscribe((newValue: string) => {
    this._shouter.notifySubscribers(newValue, 'description');
  });

  const bindings: ISpPnPjsExampleBindingContext = {
    description: this.properties.description,
    shouter: this._shouter
  };

  ko.applyBindings(bindings, this._componentElement);

  return super.onInit().then(_ => {
    pnp.setup({
      spfxContext: this.context
    });
  });
}
```

## Development

Please check out the [developer guide](https://github.com/SharePoint/PnP-JS-Core/wiki/Developer-Guide) for samples, guidance, and hints on using and configuring the library.

## Production Deployment

When you are ready to deploy your solution and want to build using the --ship flag you need to mark sp-pnp-js as an external in 
the configuration. This is done by updating the SPFx config/config.js to include this line in the externals section:

```
"sp-pnp-js": "https://cdnjs.cloudflare.com/ajax/libs/sp-pnp-js/2.0.1/pnp.min.js"
```

Here we are using the public CDN but the URL can be internal or any location you would like to use. Be sure to update the 
version number in the url to match the version you want.

## Provide Feedback / Report Issues

If you have any feedback or need to report as issue with sp-pnp-js please use the [issues list](https://github.com/SharePoint/PnP-JS-Core/issues) in that repo, not the 
main SPFx repo.
