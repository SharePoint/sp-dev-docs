---
title: Location capabilities in Adaptive Card Extension
description: Geolocation is a new action that the SharePoint Adaptive Card Extension framework supports, which enables third party developers to come up with their location specific scenarios.
ms.date: 03/08/2023
ms.localizationpriority: high
---
# Location capabilities in Adaptive Card Extension

Microsoft added support for two geolocation actions, unique to Viva Connections, in the [SharePoint Framework (SPFx) v1.15 release](../../../../release-1.15.md).

> [!IMPORTANT]
> This tutorial also assumes that you've already built an SPFx Adaptive Card Extension.
>
> To learn how to create your first an SPFx Adaptive Card Extension, try out [this tutorial](../../../get-started/build-first-sharepoint-adaptive-card-extension.md).

### New action types for geolocation

There are 2 Location actions:

1. Get Location
1. Show Location

### Get Location

The `VivaAction.GetLocation` action takes user’s current device location or opens a location picker and returns the location chosen by the user. The Viva Connections browser client uses Bing Maps for the mapping experience:

```json
{
  "id": "originLocation",
  "type": "VivaAction.GetLocation",
  "title": "Select location on the map",
  "parameters": {
    "chooseLocationOnMap": true
  }
}
```

When the optional parameter property `ChooseLocationOnMap` is set to `true`, the action will open a map, and user will get to choose a location on the map. If set to `false` (*the default setting*), it will fetch user's current device location.

### Show Location

The `VivaAction.ShowLocation` action displays a map that displays the user's current location on the map or a specified location:

```json
{
  action: {
    type: 'VivaAction.ShowLocation',
    parameters: {
      locationCoordinates: {
        latitude: 28.6132039578389,
        longitude: 77.229488240066
      }
    }
  }
}
```

It takes an optional location parameter: `locationCoordinates`.

To show a specific location, set the optional `locationCoordinates` property the location coordinates (*latitude and longitude*).

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

1. **Get user's current location**

    In your template JSON, introduce the following action:

    ```json
    "actions": [{
      type: 'VivaAction.GetLocation',
      id: 'Get Location'
    }]
    ```

    When this action gets invoked, user's current geolocation is fetched and is passed to the Third Party Developer via the onAction callback.

    > [!NOTE]
    > In this case, map doesn't show up.

1. **Select location from a map**

    In your template JSON, introduce the following action:

    ```json
    "actions": [{
      type: 'VivaAction.GetLocation',
      id: 'Get Location',
      parameters: {chooseLocationOnMap: true}
    }]
    ```

    When this action gets invoked, a map pointing to user's current location opens up and the user gets to select and share the location of their choice. The selected location's coordinates are passed to the Third Party Developer via the onAction callback.

1. **Display user's current location**

    In your template JSON, introduce the following action:

    ```json
    "actions": [{
      type: 'VivaAction.ShowLocation',
      id: 'Show Location'
    }]
    ```

    When this action gets invoked, a map opens up and the user's current location coordinates are shown on it.

1. **Display a specified location**

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

> [!NOTE]
> Theses geolocation actions can be added on the CardView or the buttons of the CardView or inside the QuickView.

### Permission and error codes

For the location APIs to work, the user must grant the browser permission to access device's location.

Error Code        | Error Description
----------------- | -----------------
PermissionDenied  | User has denied the permission to access location
InternalError     | An unexpected error happened while invoking the location APIs
HostNotSupported  | The location action is being used in an unsupported environment

### Callbacks for Card Developers

When the action `VivaAction.GetLocation` is invoked, we pass the fetched location coordinates via the onAction callback.

> [!NOTE]
> `onAction` callback is not invoked for `VivaAction.ShowLocation`.

For actions: `VivaAction.GetLocation` and `VivaAction.ShowLocation`, if the user lands into an error state, then an `onError` callback will get invoked, to which we pass the action name and the error code.

### Availability of geolocation actions

> [!NOTE]
> These new actions are currently **only available in the browser**. Viva Connections desktop and Viva Connections mobile support will be enabled later.

After General Availability the support matrix for actions will look like:

   Action     | Viva Connection Desktop | Viva Connections Mobile |  Browser
------------- | ----------------------- | ----------------------- | ---------
Get Location  | Not Supported           | Supported               | Supported
Show Location | Not Supported           | Supported               | Supported

## See Also

- [Microsoft Learning: Create Adaptive Card Extensions (ACE) for Microsoft Viva Connections](/training/modules/sharepoint-spfx-adaptive-card-extension-card-types)
