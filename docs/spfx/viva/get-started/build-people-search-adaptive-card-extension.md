---
title: Create a People Search Adaptive Card Extension
description: Step by step guide on creating People Search Adaptive Card Extension.
ms.date: 06/21/2023
ms.localizationpriority: high
---
# Create a People Search Adaptive Card Extension

SharePoint Framework 1.18 introduces a new Search Card Template that can be used to implement various search scenarios.
This tutorial provides step-by-step guidance on implementing People Search with ACEs and Microsoft Graph.

> [!NOTE]
> This tutorial assumes that you have installed the SPFx v1.18
>
> For more information on installing the SPFx v1.18, see [SharePoint Framework v1.14 release notes](../../../../release-1.18.md).

Before you start, complete the procedures in the following articles to ensure that you understand the basic flow of creating a custom Adaptive Card Extension and using Microsoft Graph in SharePoint Framework solutions:
- [Build your first SharePoint Adaptive Card Extension](./build-first-sharepoint-adaptive-card-extension.md)
- [Use Microsoft Graph in your solution](../../web-parts/get-started/using-microsoft-graph-apis.md)

## Scaffold an Adaptive Card Extension project

Create a new project directory for your project and change your current folder to that directory.

Create a new project by running the Yeoman SharePoint Generator from within the new directory you created:

```console
yo @microsoft/sharepoint
```

When prompted, enter the following values (select the default option for all prompts omitted below):

- **What is your solution name?** peoplesearch-tutorial
- **Which type of client-side component to create?** Adaptive Card Extension
- **Which template do you want to use?** Search Card Template
- **What is your Adaptive Card Extension name?** People Search

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
      "initialPage": "https://{tenantDomain}/ _layouts/workbench.aspx"
    }
    ```

- Change the `{tenantDomain}` domain to the URL of your SharePoint tenant and site you want to use for testing. For example: `https://contoso.sharepoint.com/sites/devsite/_layouts/workbench.aspx`.

At this point, if you do `gulp serve`, then you will see the **People Search** card:

![See the People Search card icon in the workbench toolbox](../../../../../../docs/images/viva-extensibility/people-search/toolbox.png)

If you add the ACE to the workbench, you will see it already prepared for mock search scenarios:
![Default People Search card](../../../../../../docs/images/viva-extensibility/people-search/ace-default.png)

And if you switch to Preview mode of the workbench, you can engage with it:
- type in the search box and click on the search icon to see the results Quick View mockup
  ![Default Search Results Quick View](../../../../../../docs/images/viva-extensibility/people-search/qv-results-default.png)
- click on the **Suggested** item to see a single item view
  ![Default Item Quick View](../../../../../../docs/images/viva-extensibility/people-search/qv-item-default.png)

## Explore the scaffolded code
### Explore the Card View
Locate and open the following file in your project: **./src/adaptiveCardExtensions/peopleSearch/cardView/CardView.ts**.
The card view implements `BaseComponentsCardView` class and implements `cardViewParameters` getter to specify the card configuration:
```ts
export class CardView extends BaseComponentsCardView<IPeopleSearchAdaptiveCardExtensionProps, IPeopleSearchAdaptiveCardExtensionState, ISearchCardViewParameters> {
  public get cardViewParameters(): ISearchCardViewParameters {
    return SearchCardView({
      cardBar: {
        componentName: 'cardBar',
        title: this.properties.title
      },
      header: {
        componentName: 'text',
        text: strings.PrimaryText
      },
      body: {
        componentName: 'searchBox',
        placeholder: strings.Placeholder,
        id: SEARCH_BOX_ID,
        button: {
          action: {
            type: 'QuickView',
            parameters: {
              view: SEARCH_RESULTS_QUICK_VIEW_REGISTRY_ID
            }
          }
        }
      },
      footer: {
        componentName: 'searchFooter',
        title: strings.Suggested,
        imageInitials: 'MB',
        text: strings.Title,
        secondaryText: strings.SubTitle,
        onSelection: {
          type: 'QuickView',
          parameters: {
            view: ITEM_QUICK_VIEW_REGISTRY_ID
          }
        }
      }
    });
  }

  public get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined {
    return undefined;
  }
}
```

The **body** section of the card view specifies the search box. The search button is configured to open the Quick View with the ID `SEARCH_RESULTS_QUICK_VIEW_REGISTRY_ID`. 
The **footer** section of the card view specifies the suggested item. The suggested item is configured to open the Quick View with the ID `ITEM_QUICK_VIEW_REGISTRY_ID`.

### Explore the Quick Views
There are two mock Quick Views in the scaffolded code: `SearchResultsQuickView` and `ItemQuickView`.
The implementation of both is standard and can be found in the following files:
**./src/adaptiveCardExtensions/peopleSearch/quickView/SearchResultsQuickView.ts** and **./src/adaptiveCardExtensions/peopleSearch/quickView/ItemQuickView.ts**.

The important part of the `SearchResultsQuickView` implementation is `data` getter which specifies `queryString` value based on the `state` of the ACE:
```ts
  public get data(): ISearchResultsQuickViewData {
    return {
      // ...
      queryString: this.state.queryString || ''
    };
  }
```
This approach allows to "share" the query string between the Card View and the Quick View. Below we will show how to set this state's property from the ACE.

### Explore the ACE class
The ACE class is located in the following file: **./src/adaptiveCardExtensions/peopleSearch/PeopleSearchAdaptiveCardExtension.ts** and mostly has the same code as [Generic Card View](./build-first-sharepoint-adaptive-card-extension.md).
However, there is important difference: `PeopleSearchAdaptiveCardExtension` overrides `onBeforeAction` method to set `queryString` state's value before opening a `SearchResultsQuickView`:
```ts
  public onBeforeAction(action: IOnBeforeActionArguments): void {
    if (action.type === 'QuickView') {
      //
      // for the QuickView action we can get search query from the data property.
      // it allows to display the same query string in the quick view's text input.
      //
      const quickViewActionArguments: IQuickViewActionArguments = action as IQuickViewActionArguments;
      if (quickViewActionArguments.viewId === SEARCH_RESULTS_QUICK_VIEW_REGISTRY_ID) {
        this.setState({
          queryString: quickViewActionArguments.data && quickViewActionArguments.data[SEARCH_BOX_ID]
        });
      }
    }
  }
```
With this code in place, the Quick View will display the same query string as the Card View.

## Implement People Search Service
### Request permissions scopes
The next step is to implement the data source for the People Search ACE. The data source will be responsible for fetching the data from the Microsoft Graph and returning it to the ACE.
We will use [List people](https://learn.microsoft.com/en-us/graph/api/user-list-people?view=graph-rest-1.0&tabs=http) endpoint to get search results as well as [Get manager](https://learn.microsoft.com/en-us/graph/api/user-list-manager?view=graph-rest-1.0&tabs=http) to display a Suggested item.
For these endpoints we need to request `People.Read` and `User.Read.All` scopes respectively.
Locate and open the following file in your project: **./src/adaptiveCardExtensions/peopleSearch/config/package-solution.json**.
Add `webApiPermissions` property:
```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/package-solution.schema.json",
  "solution": {
    // ...
    "webApiPermissionRequests": [{
      "resource": "Microsoft Graph",
      "scope": "User.Read.All"
    }, {
      "resource": "Microsoft Graph",
      "scope": "People.Read"
    }]
  }
  // ...
}
```

### Defining Person model
Navigate to **./src/adaptiveCardExtensions/peopleSearch** and create a new folder called **model** with **IPerson.ts** file in there.
The file will contain the "model" or representation of a person/user:
```ts
export interface IPerson {
  id: string;
  displayName: string;
  jobTitle?: string;
  department?: string;
  officeLocation?: string;
  givenName?: string;
  surname?: string;
  scoreEmailAddresses?: [{
    address: string;
    relevanceScore: number;
  }];
  phones: [{
    type: string;
    number: string;
  }]
}
```

### Implement People Search Service
We will use Service Locator pattern to inject the data service into the ACE. The pattern is represented by the [ServiceScope](https://learn.microsoft.com/en-us/javascript/api/sp-core-library/servicescope?view=sp-typescript-latest) class in SPFx.
Navigate to **./src/adaptiveCardExtensions/peopleSearch** and create a new folder called **peopleSearchService** with two files in there: **IPeopleSearchService.ts** and **PeopleSearchService.ts**.
The **IPeopleSearchService.ts** file will contain the "contract" for the service:
```ts
import { IPerson } from '../model/IPerson';

export interface IPeopleSearchService {
  search: (queryString: string) => Promise<IPerson[]>;
  getSuggested: () => Promise<IPerson>;
}
```

**PeopleSearchService.ts** file will contain the implementation of the service with `ServiceKey` static field to register the service in the Service Scope.
Before the imlementation of the service, install the following dependencies:
```bash
npm install @microsoft/sp-http --save --save-exact
```

The implementation of the service is shown below:
```ts
import { ServiceKey, ServiceScope } from '@microsoft/sp-core-library';
import { MSGraphClientFactory, MSGraphClientV3 } from '@microsoft/sp-http';

import { IPeopleSearchService } from './IPeopleSearchService';
import { IPerson } from '../model/IPerson';

export class PeopleSearchService implements IPeopleSearchService {
  // Create a ServiceKey to register in the Service Scope
  public static readonly serviceKey: ServiceKey<IPeopleSearchService> = ServiceKey.create<IPeopleSearchService>('PeopleSearchTutorial:PeopleSearchService', PeopleSearchService);

  private _msGraphClientFactory: MSGraphClientFactory;

  public constructor(serviceScope: ServiceScope) {
    serviceScope.whenFinished(() => {
      // Get the MSGraphClientFactory service instance from the service scope
      this._msGraphClientFactory = serviceScope.consume(MSGraphClientFactory.serviceKey);
    });
  }

  public search(queryString: string): Promise<IPerson[]> {
    return this._msGraphClientFactory.getClient('3')
    .then((client: MSGraphClientV3) => {
      return client.api(`/me/people?$search="${queryString}"&orderBy=displayName`).version('v1.0').get();
    })
    .catch(() => {
      // TODO: handle error
    });
  }

  public getSuggested(): Promise<IPerson> {
    // we will return a user's manager as a suggestion
    return this._msGraphClientFactory.getClient('3')
    .then((client: MSGraphClientV3) => {
      return client.api('/me/manager').version('v1.0').get();
    })
    .catch(() => {
      // TODO: handle error
    });
  }
}
```

### Update ACE's logic to use the service
1. Locate and open **./src/adaptiveCardExtensions/peopleSearch/PeopleSearchAdaptiveCardExtension.ts** file. Update the `IPeopleSearchAdaptiveCardExtensionState` to add properties for a suggestion and search results:
```ts
export interface IPeopleSearchAdaptiveCardExtensionState {
  queryString?: string;
  suggested?: IPerson;
  results?: IPerson[];
}
```

1. Update `onInit` to request the service from the Service Scope get the suggestion to display on the card:
```ts
  public onInit(): Promise<void> {
    this.state = { };

    // request suggestion
    this.context.serviceScope.whenFinished(() => {
      // get the people search service
      const peopleSearchService: IPeopleSearchService = this.context.serviceScope.consume(PeopleSearchService.serviceKey);
      // request suggestion
      peopleSearchService.getSuggested()
      .then((suggested: IPerson) => {
        this.setState({
          suggested: suggested
        });
      })
      .catch((error: any) => {
        // TODO: handle error
      });
    });
    // ...
  }
```
1. Update `onBeforeAction` to clean `results` property of the state:
```ts
  public onBeforeAction(action: IOnBeforeActionArguments): void {
    if (action.type === 'QuickView') {
      //
      // for the QuickView action we can get search query from the data property.
      // it allows to display the same query string in the quick view's text input.
      //
      const quickViewActionArguments: IQuickViewActionArguments = action as IQuickViewActionArguments;
      if (quickViewActionArguments.viewId === SEARCH_RESULTS_QUICK_VIEW_REGISTRY_ID) {
        const queryString: string = quickViewActionArguments.data ? quickViewActionArguments.data[SEARCH_BOX_ID] : '';
        this.setState({
          queryString: queryString,
          results: undefined // clearing results to not confuse a user with old results
        });
      }
    }
  }
```

## Add geolocation actions to your Adaptive Card Extension

At this point we have got the out of the box scaffolded code. Now, let us try adding geolocation actions to the Card View and Quick View experiences.

We will create a card which will have a Card View and a Quick View. On the Card View, we will provide a button, which will show the user their current location and clicking the Card View itself will open a Quick View.

In the Quick View, we will provide three buttons which will perform the following actions:

- Get user's current location
- Let user choose a location from the map
- Show a specific location on the map

### Update the labels that will show up on the card

Before we start adding the actions, let us first update the strings that you will see on the card.

For this, locate and open the following file in your project: **./src/adaptiveCardExtensions/geoLocation/loc/en-us.js**

Replace the content of this file with:

```javascript
define([], function() {
  return {
    "PropertyPaneDescription": "Tutorial on geolocation action in ACE.",
    "TitleFieldLabel": "Geolocation",
    "Title": "GeoLocation",
    "SubTitle": "GeoLocation Actions",
    "PrimaryText": "Location Demo",
    "Description": "Demonstrating GeoLocation Capabilities",
    "ShowCurrentLocation": "My Location"
  }
});
```

Next, locate and open the following file in your project: **./src/adaptiveCardExtensions/geoLocation/loc/mystring.d.ts**

Add the following:

```typescript
ShowCurrentLocation: string;
```

to the `IGeoLocationAdaptiveCardExtensionStrings` interface.

### Add actions on the Card View

As mentioned earlier, on the Card View, we will add a button, which will show user their current location and on clicking the Card View, we will show the Quick View experience.

We will first add the functionality for the button on the Card View. For this, locate and open the following file in your project: **./src/adaptiveCardExtensions/geoLocation/cardView/CardView.ts**

Here, replace the definition of `cardButtons` function with the following:

```typescript
public get cardButtons(): [ICardButton] | [ICardButton, ICardButton] | undefined {
  return [
    {
      title: strings.ShowCurrentLocation,
      action: {
        type: 'VivaAction.ShowLocation'
      }
    }
  ];
}
```

With this change, we have configured a button with label `My Location` and on click action is `VivaAction.ShowLocation`, which will show user their current location.

Next, replace the content of `onCardSelection` function with the following:

```typescript
public get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined {
  return {
      type: 'QuickView',
      parameters: {
        view: QUICK_VIEW_REGISTRY_ID
      }
  };
}
```

This change implies that when a user clicks the Card View, then it should open a Quick View for them.

With the changes made so far, your Card View would look like:

![Card appearance after introducing the strings and changes in the card-view](../../../../../../docs/images/viva-extensibility/geolocation/geoloactionCardView.png)

### Add actions on the Quick View

In the Quick View, we will introduce buttons for 3 actions:

- Get user's current location
- Let user choose a location from the map
- Show a specific location on the map (for our example we will show Mount Everest)

In addition to these, we will have two text-blocks for showing `Latitude` and `Longitude`, which will show the respective coordinates when the `VivaAction.GetLocation` action is executed (more on this later).

We will first define the template of the Quick View. For this, locate and open the following file in your project: **./src/adaptiveCardExtensions/geoLocation/quickView/template/QuickViewTemplate.json**

Replace the content of this file with the following:

```json
{
  "schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "type": "AdaptiveCard",
  "version": "1.2",
  "body": [
    {
      "type": "TextBlock",
      "text": "${latitude}"
    },
    {
      "type": "TextBlock",
      "text": "${longitude}"
    }
  ],
  "actions": [
    {
      "title": "Choose location on map",
      "type": "VivaAction.GetLocation",
      "parameters": {
        "chooseLocationOnMap": true
      }
    },
    {
      "title": "Get my location",
      "type": "VivaAction.GetLocation"
    },
    {
      "title": "Show custom location",
      "type": "VivaAction.ShowLocation",
      "parameters": {
        "locationCoordinates": {
          "latitude": 27.98884062493244,
          "longitude": 86.9249751
        }
      }
    }
  ]
}
```

With this, we are providing two text-blocks to show the `Latitude` and `Longitude` of the location we get via `VivaAction.GetLocation`. In addition to these, we described three geolocation actions.

After adding these actions, your Quick View would look like:

![Card appearance after introducing changes in the quick-view](../../../../../../docs/images/viva-extensibility/geolocation/geoloactionQuickView.png)

### Set up the state for our Adaptive Card Extension

So far we have created our Card View and Quick View. If you do a `gulp serve` at this point, then you will be able to perform the actions that were described above.

But now, let us take it a notch higher.

We now wish to show the coordinates of user's current location or user's chosen location on the Quick View when the respective actions are executed.

For this, we will leverage the two text-blocks that we had introduced earlier in the **QuickViewTemplate.json** file

In order to do this, we will first introduce new states. First locate and open the following file in your project: **./src/adaptiveCardExtensions/geoLocation/GeoLocationAdaptiveCardExtension.ts**

Here, add the following `states` to the `IGeoLocationAdaptiveCardExtensionState` interface:

```typescript
latitude: string;
longitude: string;
```

Next, in the `onInit` function, change `this.state={}` to

```typescript
this.state = {
  latitude: 'TBD',
  longitude: 'TBD'
};
```

We will now make similar changes in Quick View as well.

Locate and open the following file in your project: **./src/adaptiveCardExtensions/geoLocation/quickView/QuickView.ts**

Add the following properties to the `IQuickViewData` interface:

```typescript
latitude: string;
longitude: string;
```

and then add the following two lines in the returned object of `data` getter:

```typescript
latitude: "Latitude: " + this.state.latitude,
longitude: "Longitude: " + this.state.longitude
```

### Implement the onAction function

So far we have created defined our geolocation actions and wired in our states. Now we can finally implement the `onAction` function, which gives the ability to the Third Party Developer to decide what they wish to do with the location coordinates that the user has shared with them.

For this, open the QuickView.ts file (**./src/adaptiveCardExtensions/geoLocation/quickView/QuickView.ts**) and import the `IGetLocationActionArguments` interface, as follows:

```typescript
import {IGetLocationActionArguments} from '@microsoft/sp-adaptive-card-extension-base';
```

Finally, introduce the following `onAction` function in the QuickView class:

```typescript
public onAction(action: IGetLocationActionArguments): void {
  if (action.type === 'VivaAction.GetLocation') {
    this.setState({
      latitude: action.location.latitude.toString(),
      longitude: action.location.longitude.toString()
    });
  }
}
```

So now, whenever the `VivaAction.GetLocation` action is triggered from your Quick View, then depending on the parameters that were passed, the Adaptive Card Extension framework will either pass user's current coordinates or user's chosen coordinates to the `onAction` callback. In the implementation shared above, we check if the `action` type is of type `VivaAction.GetLocation`, and if it is, then we re-render the Quick View by doing a `setState`, in which we update the `latitude` and `longitude` text-blocks.

At this point, you can run **gulp serve** again and see how all the changes you made so far came together.

This is it! Congratulations on successfully creating you Adaptive Card Extension with geolocation actions.

## See Also

- [Microsoft Learning: Create Adaptive Card Extensions (ACE) for Microsoft Viva Connections](/training/modules/sharepoint-spfx-adaptive-card-extension-card-types)
