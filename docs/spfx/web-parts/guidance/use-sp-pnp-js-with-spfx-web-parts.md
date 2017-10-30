---
title: Use sp-pnp-js with SharePoint Framework Web Parts
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Use sp-pnp-js with SharePoint Framework Web Parts

You may opt to use the [sp-pnp-js](https://www.npmjs.com/package/sp-pnp-js) library when building your SharePoint Framework (SPFx) web parts. This library provides a fluent API to make building your REST queries intuitive and supports batching and caching. You can learn more on the [project's homepage](https://github.com/SharePoint/PnP-JS-Core) which has links to documentation, samples, and other resources to help you get started.

You can download the [full source](https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/knockout-sp-pnp-js) for this article from the samples site.

## Setup your Environment

Before you can complete this guide, you will need to ensure you have [setup your environment](https://dev.office.com/sharepoint/docs/spfx/set-up-your-development-environment) for development using the SharePoint Framework.

## Create a New Project

Start by creating a new folder for the project using your console of choice:

```sh
md spfx-sp-pnp-js-example
```

And enter that folder:

```sh
cd spfx-sp-pnp-js-example
```

Then run the Yeoman generator for SPFx:

```sh
yo @microsoft/sharepoint
```

Enter the following values when prompted during the setup of the new project:

- **spfx-sp-pnp-js-example** as solution name (keep default)
- **SharePoint Online only (latest)** as the baseline packages version
- **Current Folder** as the solution location
- **Y** as allow tenant admin to deploy solution to all sites
- **WebPart** as component to create
- **SPPnPJSExample** as the name of the web part
- **Example of using sp-pnp-js within SPFx** as the description
- **Knockout** as the framework

![Completed Project Scaffolding](../../../images/sp-pnp-js-guide-completed-setup.png)

Once the scaffolding completes, lock down the version of the project dependencies by running the following command:

```sh
npm shrinkwrap
```

Next, open the project in the code editor of your choosing. The screenshots shown here demonstrate [Visual Studio Code](https://code.visualstudio.com/). To open the directory within Visual Studio Code, enter the following in the console:

```sh
code .
```

![Project as first opened in visual studio code](../../../images/sp-pnp-js-guide-first-open.png)

## Install And Setup sp-pnp-js

Once your project is created you will need to install and setup sp-pnp-js, starting with installing the package. These steps are common for any project type (React, etc).

```sh
npm install sp-pnp-js --save
```

Because the sp-pnp-js library constructs REST requests it needs to know the URL to send these requests. When operating within classic sites and pages, we can make use of the global `_spPageContextInfo` variable. Within SPFx, this is not available, or if it is, may not be correct. So we need to rely on the [context](https://dev.office.com/sharepoint/reference/spfx/sp-webpart-base/iwebpartcontext) object 
supplied by the framework. There are [two ways](https://github.com/SharePoint/PnP-JS-Core/wiki/Using-sp-pnp-js-in-SharePoint-Framework#establish-context) to ensure you have correctly setup your requests, we'll use the `onInit` method in this example.

### Update onInit in SpPnPjsExampleWebPart.ts

Open the **src\webparts\spPnPjsExample\SpPnPjsExampleWebPart.ts** file and add an import statement for the pnp root object:

```TypeScript
import pnp from "sp-pnp-js";
```

In the `onInit` method, update the code to appear as below. We are adding the block after the `super.onInit()` call. We do this after the `super.onInit` to ensure that the framework has a chance to initialize anything required and that we are setting up the library after those steps are completed.

```TypeScript
/**
 * Initialize the web part.
 */
protected onInit(): Promise<void> {
  this._id = _instance++;

  const tagName: string = `ComponentElement-${this._id}`;
  this._componentElement = this._createComponentElement(tagName);
  this._registerComponent(tagName);

  // When the web part description is changed, notify the view model to update.
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

## Update the ViewModel

Next, replace the contents of the **SpPnPjsExampleViewModel.ts** file with the code below. We are adding an import statement for the pnp items, an interface to define our list item's fields, some observables to track both our list of items and the new item form, and methods to support getting, adding, & deleting items. We also added an `ensureList` method which uses the sp-pnp-js `lists.ensure` method to always make sure we have the list (and to create it if necessary). There are many ways to provision resources, but this method was choosen to demonstrate creating a list, field, and items using batching within a single method.

The takeaway is that by using sp-pnp-js, we write much less code to handle requests and can focus on our business logic.

```TypeScript
import * as ko from 'knockout';
import styles from './SpPnPjsExample.module.scss';
import { ISpPnPjsExampleWebPartProps } from './SpPnPjsExampleWebPart';
import pnp, { List, ListEnsureResult, ItemAddResult, FieldAddResult } from "sp-pnp-js";

export interface ISpPnPjsExampleBindingContext extends ISpPnPjsExampleWebPartProps {
  shouter: KnockoutSubscribable<{}>;
}

/**
 * Interface which defines the fields in our list items
 */
export interface OrderListItem {
  Id: number;
  Title: string;
  OrderNumber: string;
}

const LIST_EXISTS: string = 'List exists';

export default class SpPnPjsExampleViewModel {
  public description: KnockoutObservable<string> = ko.observable('');
  public newItemTitle: KnockoutObservable<string> = ko.observable('');
  public newItemNumber: KnockoutObservable<string> = ko.observable('');
  public items: KnockoutObservableArray<OrderListItem> = ko.observableArray([]);

  public labelClass: string = styles.label;
  public spPnPjsExampleClass: string = styles.spPnPjsExample;
  public containerClass: string = styles.container;
  public rowClass: string = `ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`;
  public buttonClass: string = `ms-Button ${styles.button}`;

  constructor(bindings: ISpPnPjsExampleBindingContext) {
    this.description(bindings.description);

    // When the web part description is updated, change this view model's description.
    bindings.shouter.subscribe((value: string) => {
      this.description(value);
    }, this, 'description');

    // Load the items
    this.getItems().then((items: OrderListItem[]): void => {
      this.items(items);
    });
  }

  /**
   * Gets the items from the list
   */
  private getItems(): Promise<OrderListItem[]> {
    return this.ensureList().then((list: List): Promise<OrderListItem[]> => {
      // Here we are using the getAs operator so that our returned value will be typed
      return list.items.select("Id", "Title", "OrderNumber").getAs<OrderListItem[]>();
    });
  }

  /**
   * Adds an item to the list
   */
  public addItem(): void {
    if (this.newItemTitle() !== "" && this.newItemNumber() !== "") {
      this.ensureList().then((list: List): Promise<ItemAddResult> => {
        // Add the new item to the SharePoint list
        return list.items.add({
          Title: this.newItemTitle(),
          OrderNumber: this.newItemNumber(),
        });
      }).then((iar: ItemAddResult) => {
        // Add the new item to the display
        this.items.push({
          Id: iar.data.Id,
          OrderNumber: iar.data.OrderNumber,
          Title: iar.data.Title,
        });

        // Clear the form
        this.newItemTitle("");
        this.newItemNumber("");
      });
    }
  }

  /**
   * Deletes an item from the list
   */
  public deleteItem(data): void {
    if (!confirm("Are you sure you want to delete this item?")) {
      return;
    }

    this.ensureList().then((list: List): Promise<void> => {
      return list.items.getById(data.Id).delete();
    }).then(_ => {
      this.items.remove(data);
    }).catch((e: Error) => {
      alert(`There was an error deleting the item: ${e.message}`);
    });
  }

  /**
   * Ensures the list exists. If not, it creates it and adds some default example data
   */
  private ensureList(): Promise<List> {
    return new Promise<List>((resolve: (list: List) => void, reject: (err: string) => void): void => {
      let listEnsureResults: ListEnsureResult;
      // Use lists.ensure to always have the list available
      pnp.sp.web.lists.ensure("SPPnPJSExampleList")
        .then((ler: ListEnsureResult): Promise<FieldAddResult> => {
          listEnsureResults = ler;

          if (!ler.created) {
             // resolve main promise
            resolve(ler.list);
            // break promise chain
            return Promise.reject(LIST_EXISTS);
          }

          // We created the list on this call, so let's add a column
          return ler.list.fields.addText("OrderNumber");
        }).then((): Promise<string> => {
          console.warn('Adding items...');
          // And we will also add a few items so we can see some example data
          // Here we use batching
          return listEnsureResults.list.getListItemEntityTypeFullName();
        }).then((typeName: string): Promise<void> => {
          // Create a batch
          const batch = pnp.sp.web.createBatch();
          listEnsureResults.list.items.inBatch(batch).add({
            Title: "Title 1",
            OrderNumber: "4826492"
          }, typeName);

          listEnsureResults.list.items.inBatch(batch).add({
            Title: "Title 2",
            OrderNumber: "828475"
          }, typeName);

          listEnsureResults.list.items.inBatch(batch).add({
            Title: "Title 3",
            OrderNumber: "75638923"
          }, typeName);

          // Execute the batched operations
          return batch.execute();
        }).then((): void => {
          // All of the items have been added within the batch
          resolve(listEnsureResults.list);
        }).catch((e: any): void => {
          if (e !== LIST_EXISTS) {
            reject(e);
          }
        });
    });
  }
}
```

## Update the Template

Finally, we need to update the template to match the functionality we have added into the ViewModel. Copy the code below into the **SpPnPjsExample.template.html** file. We have added a title row, a foreach repeater 
for the items collection, and a form allowing you to add new items to the list.

```html
<div data-bind="attr: {class:spPnPjsExampleClass}">
  <div data-bind="attr: {class:containerClass}">

    <div data-bind="attr: {class:rowClass}">
      <div class="ms-Grid-col ms-u-sm12">
        <span class="ms-font-xl ms-fontColor-white ms-fontWeight-semibold" data-bind="text: description"></span>
      </div>
    </div>

    <div data-bind="attr: {class:rowClass}">
      <div class="ms-Grid-col ms-u-sm6">
        <span class="ms-font-l ms-fontColor-white ms-fontWeight-semibold">Title</span>
      </div>
      <div class="ms-Grid-col  ms-u-sm6">
        <span class="ms-font-l ms-fontColor-white ms-fontWeight-semibold">Order Number</span>
      </div>
    </div>

    <!-- ko foreach: items -->
    <div data-bind="attr: {class:$parent.rowClass}">
      <div class="ms-Grid-col ms-u-sm6">
        <span class="ms-font-l ms-fontColor-white" data-bind="text: Title"></span>
      </div>
      <div class="ms-Grid-col  ms-u-sm5">
        <span class="ms-font-l ms-fontColor-white" data-bind="text: OrderNumber"></span>
      </div>
      <div class="ms-Grid-col  ms-u-sm1">
        <i class="ms-Icon ms-Icon--Delete" aria-hidden="true" data-bind="click: $parent.deleteItem.bind($parent, $data)"></i>
      </div>
    </div>
    <!-- /ko -->

    <div data-bind="attr: {class:rowClass}">
      <div class="ms-Grid-col  ms-u-sm12">
        <span class="ms-font-l ms-fontColor-white ms-fontWeight-semibold">Add New</span>
      </div>
    </div>

    <div data-bind="attr: {class:rowClass}">
      <form data-bind="submit: addItem">
        <div class="ms-Grid-col ms-u-sm5">
          <input class="ms-TextField-field" placeholder="Title" data-bind='value: newItemTitle, valueUpdate: "afterkeydown"' />
        </div>
        <div class="ms-Grid-col ms-u-sm5">
          <input class="ms-TextField-field" placeholder="Order Number" data-bind='value: newItemNumber, valueUpdate: "afterkeydown"'
          />
        </div>
        <div class="ms-Grid-col ms-u-sm2">
          <button class="ms-Button--default ms-Button" type="submit" data-bind="enable: newItemTitle().length > 0 && newItemNumber().length > 0"><span class="ms-Button-label">Add</span></button>
        </div>
      </form>
    </div>

  </div>
</div>
```

## Run the Example

Start the sample and add the web part to your SharePoint hosted workbench (/_layouts/workbench.aspx) to can see it in action.

```sh
gulp serve --nobrowser
```

![Project as it appears on first run](../../../images/sp-pnp-js-guide-first-run.png)

You can delete existing items by clicking on the trashcan icon, or add new items by putting values in both fields and clicking the add button.

## Next Steps

The sp-pnp-js library contains a great range of functionality and extensibility. Please check out the [developer guide](https://github.com/SharePoint/PnP-JS-Core/wiki/Developer-Guide) for samples, guidance, and hints on using and configuring the library.

## Production Deployment

When you are ready to deploy your solution and want to build using the `--ship` flag you need to mark sp-pnp-js as an external library in the configuration. This is done by updating the SPFx **config/config.js** file to include this line in the externals section:

```json
"sp-pnp-js": "https://cdnjs.cloudflare.com/ajax/libs/sp-pnp-js/2.0.1/pnp.min.js"
```

In the configuration above, we are using the public CDN but the URL can be an internal path or any other location you would like to use. Be sure, however, to update the version number in the URL to match the version you are targeting.

## Improving the Example - Mock Data

Ideally, the sample should work within both the local workbench as well as the SharePoint hosted workbench. To enable this we need to mock our ViewModel and make an update to the web part code as outlined below.

### Mock ViewModel

Add a new file named **MockSpPnPjsExampleViewModel.ts** alongside the other web part files. Update the content of this file using the code below. This will provide the same set of functionality but does not rely on SharePoint being available and will work in the local environment.

```TypeScript
import * as ko from 'knockout';
import styles from './SpPnPjsExample.module.scss';
import { ISpPnPjsExampleWebPartProps } from './SpPnPjsExampleWebPart';
import pnp, { List, ListEnsureResult, ItemAddResult } from "sp-pnp-js";
import { ISpPnPjsExampleBindingContext, OrderListItem } from './SpPnPjsExampleViewModel';

export default class MockSpPnPjsExampleViewModel {

    public description: KnockoutObservable<string> = ko.observable('');
    public newItemTitle: KnockoutObservable<string> = ko.observable('');
    public newItemNumber: KnockoutObservable<string> = ko.observable('');
    public items: KnockoutObservableArray<OrderListItem> = ko.observableArray([]);

    public labelClass: string = styles.label;
    public spPnPjsExampleClass: string = styles.spPnPjsExample;
    public containerClass: string = styles.container;
    public rowClass: string = `ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`;
    public buttonClass: string = `ms-Button ${styles.button}`;

    constructor(bindings: ISpPnPjsExampleBindingContext) {
        this.description(bindings.description);

        // When the web part description is updated, change this view model's description.
        bindings.shouter.subscribe((value: string): void => {
            this.description(value);
        }, this, 'description');

        // Load the items
        this.getItems().then((items: OrderListItem[]): void => {
            this.items(items);
        });
    }

    /**
     * Simulates getting the items from the list
     */
    private getItems(): Promise<OrderListItem[]> {
        return Promise.resolve([{
            Id: 1,
            Title: "Mock Item 1",
            OrderNumber: "12345"
        },
        {
            Id: 2,
            Title: "Mock Item 2",
            OrderNumber: "12345"
        },
        {
            Id: 3,
            Title: "Mock Item 3",
            OrderNumber: "12345"
        }]);
    }

    /**
     * Simulates adding an item to the list
     */
    public addItem(): void {
        if (this.newItemTitle() !== "" && this.newItemNumber() !== "") {
            // Add the new item to the display
            this.items.push({
                Id: this.items.length,
                OrderNumber: this.newItemNumber(),
                Title: this.newItemTitle(),
            });

            // Clear the form
            this.newItemTitle("");
            this.newItemNumber("");
        }
    }

    /**
     * Simulates deleting an item from the list
     */
    public deleteItem(data): void {
        if (confirm("Are you sure you want to delete this item?")) {
            this.items.remove(data);
        }
    }
}
```

### Update Webpart

Finally, we need to update the webpart to use the mock data when appropriate. Open the **SpPnPjsExampleWebPart.ts** file. Start by importing the mock ViewModel web just created:

```TypeScript
import MockSpPnPjsExampleViewModel from './MockSpPnPjsExampleViewModel';
```

Next, import the `Environment` and `EnvironmentType` types that you will use to detect the type of
environment the web part is running in:

```ts
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
```

Then, locate the `_registerComponent` method and update it as shown below:

```TypeScript
private _registerComponent(tagName: string): void {
  ko.components.register(
    tagName,
    {
      viewModel: Environment.type === EnvironmentType.Local ?
        MockSpPnPjsExampleViewModel :
        SpPnPjsExampleViewModel,
      template: require('./SpPnPjsExample.template.html'),
      synchronous: false
    }
  );
}
```

Finally, type `gulp serve` in the console to bring up the local workbench, which now will work with the mock data. (If you already have the server running, stop it using Ctrl+C and then restart it):

```sh
gulp serve
```

![Project as it appears running in the local workbench with mock data](../../../images/sp-pnp-js-guide-with-mock-data.png)

## Download Full Example Code

Remember you can find the full sample [here](https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/knockout-sp-pnp-js).

## Provide Feedback / Report Issues

If you have any feedback or need to report an issue with sp-pnp-js, please use the [issues list](https://github.com/SharePoint/PnP-JS-Core/issues) in that repo.
