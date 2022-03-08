---
title: Documentation for Geolocation action in SharePoint Adaptive Card Extension
description: Geolocation is a new action that the SharePoint Adaptive Card Extension framework supports, which enables third party developers to come up with their location specific scenarios.
ms.date: 03/04/2022
ms.prod: sharepoint
ms.localizationpriority: high
---
# Location capabilities in Adaptive Card Extension

> [!NOTE]
> The geolocation capability in Adaptive Card Extension will be available in SPFx v1.15.
> So make sure that you have installed it before proceeding further.<br/>
> For more information on installing the SPFx v1.15 Preview, see [SharePoint Framework v1.15 release notes](../../../../release-1.15.md).
> This tutorial also assumes that you have already built a SharePoint Adaptive Card Extension.
> To learn how to create your first SharePoint Adaptive Card Extension, try out [this tutorial](../../../get-started/build-first-sharepoint-adaptive-card-extension.md).

### New action types for geolocation

There are 2 Location actions:
1. Get Location
2. Show Location

### Get Location:
Gives user’s current device location or opens a location picker and returns the location chosen by the user. In the browser it uses Bing Maps as the mapping interface.

The ACE action for Get Location is: `VivaAction.GetLocation`. <br/>
It takes an optional boolean parameter: `ChooseLocationOnMap`.

If the property `ChooseLocationOnMap` is set to `true`, then the action will open a map, and user will get to choose a location on the map, otherwise, it will fetch user's current device location.

### Show Location:
With this action, a map shows up on the screen on which you can either show the user's current location on the map or you can show your specified coordinates on the map.

The ACE action for Show Location is: `VivaAction.ShowLocation`. <br/>
It takes an optional location parameter: `locationCoordinates`.
To show a specific location, you should pass the location coordinates (latitude and longitude) via the `locationCoordinates` parameter. <br/>

The `locationCoordinates` object consists of the following properties:
```typescript
{
  /**
   * Latitude of the location.
   */
  latitude: number;

  /**
   * Longitude of the location.
   */
  longitude: number;

  /**
   * Timestamp (optional).
   */
  timestamp?: number;

  /**
   * Accuracy of the location (optional).
   */
  accuracy?: number;
}
```

### Tutorial and Examples
You can take a look at [this tutorial](./GeolocationTutorial.md) which goes over the step by step details of how you could create a card with geolocation actions.

The following examples describe the geolocation action and their purpose.

1. <b> Get user's current location </b>
<br/>
In your template JSON, introduce the following action:
    ```json
       "actions": [
          {
            type: 'VivaAction.GetLocation',
            id: 'Get Location'
          }
        ]
    ```
    When this action gets invoked, user's current geolocation is fetched and is passed to the Third Party Developer via the onAction callback.
    > [!NOTE]
    > In this case, map doesn't show up. 

2. <b> Select location from a map </b>
<br/>
In your template JSON, introduce the following action:
    ```json
       "actions": [
          {
            type: 'VivaAction.GetLocation',
            id: 'Get Location',
            parameters: {chooseLocationOnMap: true}
          }
        ]
    ```
    When this action gets invoked, a map pointing to user's current location opens up and the user gets to select and share the location of their choice. The selected location's coordinates are passed to the Third Party Developer via the onAction callback.

3. <b> Display user's current location </b>
<br/>
In your template JSON, introduce the following action:
    ```json
       "actions": [{
          type: 'VivaAction.ShowLocation',
          id: 'Show Location'
        }]
    ```
    When this action gets invoked, a map opens up and the user's current location coordinates are shown on it.

4. <b> Display a specified location </b>
<br/>
In your template JSON, introduce the following action:
    ```json
       "actions": [{
          type: 'VivaAction.ShowLocation',
          id: 'Show Location',
          parameters: {
            locationCoordinates: {
              latitude: 28.6132039578389,
              longitude: 77.229488240066
            }
          }
        }]
    ```
    When this action gets invoked, a map opens up and it shows the location coordinates specified in the action.

### Access geolocation actions via card-designer card's property pane
If you don't want to write code, but still wish to see how the geolocation actions work, then you can explore [this tutorial](./GeolocationPropertyPane.md) which lets you create cards with geolocation actions via property pane.

<br/>

> [!NOTE]
> Theses geolocation actions can be added on the card view or the buttons of the card view or inside the quick view.

### Permission and error codes
For the location APIs to work, the user has to grant the permission to access device's location.


  Error Code        | Error Description
  ----------------- | -----------------
  PermissionDenied  | User has denied the permission to access location
  InternalError     | An unexpected error happened while invoking the location APIs
  HostNotSupported  | The location action is being used in an unsupported environment


### Callbacks for Card Developers
When the action `VivaAction.GetLocation` is invoked, we pass the fetched location coordinates via the onAction callback.
> [!NOTE]
> onAction callback is not invoked for `VivaAction.ShowLocation`.

For actions: `VivaAction.GetLocation` and `VivaAction.ShowLocation`, if the user lands into an error state, then an onError callback will get invoked, to which we pass the action name and the error code.

### Availability of geolocation actions

> [!NOTE]
> These new actions are **only available in the browser** currently. Viva Connections desktop and Viva Connections mobile support will be enabled later.
After General Availability the support matrix for actions will look like:

  Action       | Viva Connection Desktop | Viva Connections Mobile | Browser
  ------------- | ------------- | ------------- | -------------
  Get Location  | Not Supported | Supported | Supported
  Show Location | Not Supported | Supported | Supported
