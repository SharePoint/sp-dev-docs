---
title: Connect SharePoint Framework components using dynamic data
description: High level description on how to use dynamic data concept for connecting different SharePoint Framework components
ms.date: 06/05/2018
ms.prod: sharepoint
---

# Connect SharePoint Framework components using dynamic data

Using the dynamic data capability, you can connect SharePoint Framework client-side web parts and extensions to each other and exchange information between the components. This allows you to build rich experiences and compelling end-user solutions.

> [!IMPORTANT]
> The dynamic data capability is currently in preview and using it in production solutions is not supported.

## Expose data using dynamic data source

Dynamic data in the SharePoint Framework is based on the source-notification model. Component designated as a dynamic data source, provides data and notifies about its changes. Other components on the page can subscribe to notifications issued by a dynamic data source. When handling notifications, dynamic data consumers can retrieve the current value of the dynamic data set exposed by the data source.

Each data source implements the `IDynamicDataController` interface. Following, is an example of a web part that displays a list of upcoming events. For each event, it includes some information such as its name, description and location. The events web part exposes information about the selected event to other components on the page in two ways: the complete event information and the location address.

```ts
export default class EventsWebPart extends BaseClientSideWebPart<IEventsWebPartProps> implements IDynamicDataController {
  private _selectedEvent: IEvent;

  private _eventSelected = (event: IEvent): void => {
    this._selectedEvent = event;
    this.context.dynamicDataSourceManager.notifyPropertyChanged('event');
    this.context.dynamicDataSourceManager.notifyPropertyChanged('location');
  }

  protected onInit(): Promise<void> {
    this.context.dynamicDataSourceManager.initializeSource(this);

    return Promise.resolve();
  }

  public getPropertyDefinitions(): ReadonlyArray<IDynamicDataPropertyDefinition> {
    return [
      {
        id: 'event',
        title: 'Event'
      },
      {
        id: 'location',
        title: 'Location'
      }
    ];
  }

  public getPropertyValue(propertyId: string): IEvent | ILocation {
    switch (propertyId) {
      case 'event':
        return this._selectedEvent;
      case 'location':
        return this._selectedEvent ? { city: this._selectedEvent.city, address: this._selectedEvent.address } : undefined;
    }

    throw new Error('Bad property id');
  }

  public render(): void {
    const element: React.ReactElement<IEventsProps> = React.createElement(
      Events,
      {
        displayMode: this.displayMode,
        onEventSelected: this._eventSelected,
        title: this.properties.title,
        updateProperty: (value: string): void => {
          this.properties.title = value;
        },
        siteUrl: this.context.pageContext.web.serverRelativeUrl
      }
    );

    ReactDom.render(element, this.domElement);
  }

  // ... omitted for brevity
}
```

> [!IMPORTANT]
> The `IDynamicDataController` interface can be implemented by any class, not just web parts and extensions. If the dynamic data source requires complex logic, you should consider moving it into a separate class rather than implementing it directly inside a web part or extension.

The class implementing the `IDynamicDataController` interface must define two methods: `getPropertyDefinitions` and `getPropertyValue`. The `getPropertyDefinitions` method returns an array of types of data that the particular dynamic data source returns. In the previous example, the web part exposes detailed information about an event and its location. Even though the information comes from a single object (`_selectedEvent`), by exposing it in two different shapes, the web part is more reusable and could be used in combination with other web parts that aren't specific to events, such as a map web part that can show a map for the specified address. The list of the data types exposed by the data source is displayed to end-users when connecting web parts to the data source.

> [!IMPORTANT]
> The object returned by the `getPropertyValue` method should be flat, for example:
> ```json
> {
>    "date": "2018-06-01T11:21:59.446Z",
>    "name": "Tampa Home Show",
>    "organizerEmail": "Grady Archie",
>    "organizerName": "GradyA@contoso.onmicrosoft.com"
> }
> ```
>
> Object with a nested structure will be flattened during serialization, which could lead to undesired effects. For example, object like:
> ```json
> {
>    "date": "2018-06-01T11:21:59.446Z",
>    "name": "Tampa Home Show",
>    "organizer": {
>       "email": "Grady Archie",
>       "name": "GradyA@contoso.onmicrosoft.com"
>    }
> }
> ```
>
> would after serialization become:
> ```json
> {
>    "date": "2018-06-01T11:21:59.446Z",
>    "name": "Tampa Home Show",
>    "organizer.email": "Grady Archie",
>    "organizer.name": "GradyA@contoso.onmicrosoft.com"
> }
> ```

The `getPropertyValue` method returns the value for the particular type of data. The value of the `propertyId` argument corresponds to the `id` of the definition specified in the `getPropertyDefinitions` method.

To register a component as a dynamic data source, call the `this.context.dynamicDataSourceManager.initializeSource()` method, passing the instance of the dynamic data source as a parameter. In the previous example, the web part itself implements the `IDynamicDataController` interface, which is why the `initializeSource` method is called with `this` as its argument.

In the example code, the web part displays upcoming events in a list. Each time, the user selects an event from the list, the web part calls the `_eventSelected` method. In that method, the web part assigns the selected event to the `_selectedEvent` class variable and issues a notification that the information about the selected event and location has changed by calling the `this.context.dynamicDataSourceManager.notifyPropertyChanged()` method passing the `id` of the definition that represents the changed data set.

## Consume dynamic data

Components on the page can subscribe to data notifications exposed by dynamic data sources. The subscription is recorded using the ID of the data source and the ID of the data set it exposes.

Following is the code of a web part showing detailed information about the event selected in the events list web part showed previously. The displayed data is retrieved from the events data source configured in web part properties.

```ts
export default class EventDetailsWebPart extends BaseClientSideWebPart<IEventDetailsWebPartProps> {
  protected onInit(): Promise<void> {
    this.render = this.render.bind(this);

    return Promise.resolve();
  }

  public render(): void {
    let event: IEvent = undefined;
    const needsConfiguration: boolean = !this.properties.sourceId || !this.properties.propertyId;

    if (this.renderedOnce === false && !needsConfiguration) {
      try {
        this.context.dynamicDataProvider.registerPropertyChanged(this.properties.sourceId, this.properties.propertyId, this.render);
        this._lastSourceId = this.properties.sourceId;
        this._lastPropertyId = this.properties.propertyId;
      }
      catch (e) {
        this.context.statusRenderer.renderError(this.domElement, `An error has occurred while connecting to the data source. Details: ${e}`);
        return;
      }
    }

    if (!needsConfiguration) {
      const source: IDynamicDataSource = this.context.dynamicDataProvider.tryGetSource(this.properties.sourceId);
      event = source ? source.getPropertyValue(this.properties.propertyId) : undefined;
    }

    const element: React.ReactElement<IEventDetailsProps> = React.createElement(
      EventDetails,
      {
        needsConfiguration: needsConfiguration,
        event: event,
        onConfigure: this._onConfigure,
        displayMode: this.displayMode,
        title: this.properties.title,
        updateProperty: (value: string): void => {
          this.properties.title = value;
        }
      }
    );

    ReactDom.render(element, this.domElement);
  }

  // ... omitted for brevity
}
```

Dynamic data consumer subscribes to notifications issues by the dynamic data source by calling the `this.context.dynamicDataProvider.registerPropertyChanged(sourceId, propertyId, handler);` method. The first argument, `sourceId` refers to the ID of the dynamic data source which issues notifications. The second argument, `propertyId` refers to the ID of the data set exposed by the data source. The last arguments points to the handler method which is called whenever the data source issued a notification.

When the data source notifies the data consumer that its data is changed, the specified handler method is called. In that method, you should retrieve the latest data from the data source. You do this, by first retrieving the source using the `this.context.dynamicDataProvider.tryGetSource(sourceId)` method. Once you have the reference to the data source, you can retrieve the data by calling the `source.getPropertyValue(propertyId)` method, specifying the id of the data set.

```ts
const source: IDynamicDataSource = this.context.dynamicDataProvider.tryGetSource(this.properties.sourceId);
event = source ? source.getPropertyValue(this.properties.propertyId) : undefined;
```

> [!IMPORTANT]
> Depending on the order in which components on the page are loaded, it could happen that the particular dynamic data source is not available when retrieving it using the `tryGetSource` method. Before calling the `getPropertyValue` method to retrieve the current value for the dynamic data, you should first check if the source is available to avoid runtime errors.

## Connect to a dynamic data source

Dynamic data consumers subscribe to notifications issued by dynamic data sources by specifying the unique ID of the dynamic data source. Because these IDs are generated on runtime, the easiest way to allow users to connect components is by using the web part property pane enumerating all available dynamic data sources and their data sets. Following code shows how to provide configuration interface for end-users to connect web part to a dynamic data source on the page:

```ts
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  IPropertyPaneDropdownOption,
  PropertyPaneDropdown
} from '@microsoft/sp-webpart-base';

import * as strings from 'EventDetailsWebPartStrings';
import { EventDetails, IEventDetailsProps } from './components';
import { IDynamicDataSource } from '@microsoft/sp-dynamic-data';
import { IEvent } from '../../data';

export interface IEventDetailsWebPartProps {
  propertyId: string;
  sourceId: string;
  title: string;
}

export default class EventDetailsWebPart extends BaseClientSideWebPart<IEventDetailsWebPartProps> {
  private _lastSourceId: string = undefined;
  private _lastPropertyId: string = undefined;

  // ... omitted for brevity

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    const sourceOptions: IPropertyPaneDropdownOption[] =
      this.context.dynamicDataProvider.getAvailableSources().map(source => {
        return {
          key: source.id,
          text: source.metadata.title
        };
      });
    const selectedSource: string = this.properties.sourceId;

    let propertyOptions: IPropertyPaneDropdownOption[] = [];
    if (selectedSource) {
      const source: IDynamicDataSource = this.context.dynamicDataProvider.tryGetSource(selectedSource);
      if (source) {
        propertyOptions = source.getPropertyDefinitions().map(prop => {
          return {
            key: prop.id,
            text: prop.title
          };
        });
      }
    }

    return {
      pages: [
        {
          groups: [
            {
              groupFields: [
                PropertyPaneDropdown('sourceId', {
                  label: strings.SourceIdFieldLabel,
                  options: sourceOptions,
                  selectedKey: this.properties.sourceId
                }),
                PropertyPaneDropdown('propertyId', {
                  label: strings.PropertyIdFieldLabel,
                  options: propertyOptions,
                  selectedKey: this.properties.propertyId
                })
              ]
            }
          ]
        }
      ]
    };
  }

  protected onPropertyPaneFieldChanged(propertyPath: string): void {
    if (propertyPath === 'sourceId') {
      this.properties.propertyId =
        this.context.dynamicDataProvider.tryGetSource(this.properties.sourceId).getPropertyDefinitions()[0].id;
    }

    if (this._lastSourceId && this._lastPropertyId) {
      this.context.dynamicDataProvider.unregisterPropertyChanged(this._lastSourceId, this._lastPropertyId, this.render);
    }

    this.context.dynamicDataProvider.registerPropertyChanged(this.properties.sourceId, this.properties.propertyId, this.render);
    this._lastSourceId = this.properties.sourceId;
    this._lastPropertyId = this.properties.propertyId;
  }
}
```

The `this.context.dynamicDataProvider.getAvailableSources()` method returns information about all dynamic data source available on the current page. For each dynamic data source you get the information about its unique ID as well as other information included in its component manifest. Additionally, for each data source you can call the `IDynamicDataSource.getPropertyDefinitions()` method to get information about all data sets it exposes.

When using the web part property pane to allow users to connect components, it's important that you remove the previously configured event handler, before registering the new handler by calling the `this.context.dynamicDataProvider.unregisterPropertyChanged(sourceId, propertyId, handler)` method.

## Considerations

- each page can have multiple dynamic data sources and consumers
- each component can both provide dynamic data to other components and consume dynamic data from other components
- components can consume data from multiple dynamic data sources
- to persist subscriptions to dynamic data sources, store the subscription information in web part properties


## See also

 [Dynamic Data sample code](https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/react-events-dynamicdata)
  
    