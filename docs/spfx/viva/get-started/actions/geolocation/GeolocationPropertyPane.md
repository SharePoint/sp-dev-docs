---
title: Tutorial on how to use geolocation actions via the property pane of the card designer card.
description: Geolocation is a new action that the SharePoint Adaptive Card Extension framework supports, and in this tutorial we see how we can explore this capability via the property pane of the card-designer card.
ms.date: 03/04/2022
ms.prod: sharepoint
ms.localizationpriority: high
---

# Explore Geolocation capability via property pane of card-desinger card in Adaptive Card Extension

In this tutorial we will see how we can use the card-designer card's property pane to explore geolocation actions.
We will:
* Update the card strings
* Introduce geolocation actions on the Card View, Primary button and Secondary button

First, figure out the domain to the URL of your SharePoint tenant and site you want to use for testing and access the `workbench.aspx` page. For example: `https://contoso.sharepoint.com/sites/devsite/_layouts/workbench.aspx`.

Here, click on the '+' icon in the middle of the page, and add the `card-designer` card on the canvas. <br/>
Next, click the pencil icon adjacent to this card to open the property pane.<br/>
### Update the card strings
Here, first set the `card size` to `Large`.
To provide descriptive labels, change `Title` to `GeoLocation`, `Heading` to `GeoLocation Demo` and `description` to `Demo GeoLocation Actions`. 

![Adding strings in the property pane of card designer card](../../../../../../docs/images/viva-extensibility/geolocation/geoloactionPropertyPaneStrings.png)

### Adding action on Card View
Under `Actions`, click the drop-down menu of `card action` and select `Select location from a map` option.

![Set the on-click action to "Select location from a map" from the drop-down menu of card-view](../../../../../../docs/images/viva-extensibility/geolocation/geoloactionPropertyPaneCardAction.png)

### Adding action on Primary button
Next, for the `Primary Button`, set the `Title` to `My Location` and from its action drop-down menu, select `Display a specified or current location`.

![Set the on-click action to "Display a specified or current location" from the drop-down menu for the primary button](../../../../../../docs/images/viva-extensibility/geolocation/geoloactionPropertyPanePrimaryButtonAction.png)

### Adding action on Secondary button
Finally, for the `Secondary Button`, set the `Title` to `Custom Location` and from its action drop-down menu, select `Display a specified or current location`. <br/>
Next, turn on the `Display a specified location` toggle button. <br/>
This will bring up two text boxes for location coordinates. <br/>
Here you may provide any location coordinates of your choice.<br/>
For our example, we are putting in `27.98884062493244` as the value for the text-box labeled `latitude` and `86.9249751` for the text-box labeled `longitude`. These are the coordinates of Mount Everest.

![Set the on-click action to "Display a specified or current location" from the drop-down menu for the secondary button and pass coordinates of your choice in the respective location text-boxes](../../../../../../docs/images/viva-extensibility/geolocation/geoloactionPropertyPaneSecondaryButtonAction.png)

### Try the geolocation actions
Now close the property pane and click `Preview` from the top right hand corner of the page. <br/>

You can now check out the three geolocation actions that you introduced via the property pane. 

![Card-Designer card with geolocation actions configured](../../../../../../docs/images/viva-extensibility/geolocation/geoloactionPropertyPaneCardGenerated.png)

<br/>

> [!NOTE]
> This property-pane experience doesn't allow you to introduce onAction callback, and hence the action `Select location from a map` is actually a no-op.
