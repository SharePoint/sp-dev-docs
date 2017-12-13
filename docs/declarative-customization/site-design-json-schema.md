---
title: Site design JSON schema
description: JSON schema reference for building site designs for SharePoint.
ms.date: 12/14/2017
---

# Site design JSON schema

> [!NOTE]
> Site designs and site scripts are currently in preview and are subject to change. They are not currently supported for use in production environments.

The site design is a list of actions. For more complex actions, such as creating a list, there are also subactions. Each action is specified by a "verb" value. Verb actions are run in the order they appear in the JSON script.

The overall JSON structure is specified as follows:

```json
{
    "$schema": "schema.json",
        "actions": [
            ...
            <one or more verb actions>
            ...
        ],
        "bindata": { },
        "version": 1
};
```

## Create a new SharePoint list

Use the **createSPList** verb to create a new SharePoint list.

JSON values:

- **listName** - The name of the list for users to identify it with.
- **templateType** - Which template to apply to the list. Typically you would use value 100. Template type values are documented in [SPListTemplateType enumeration](https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.splisttemplatetype.aspx).
- **subactions** - An array of actions that run in the order listed to create your list.

Example:

```json
{
    "verb": "createSPList",
    "listName": "Customer Tracking",
    "templateType": 100,
    "subactions": [
        {
            "verb": "SetDescription",
            "description": "List of Customers and Orders"
         }
    ]
}
```

The subactions array provides additional actions to specify how to construct the list. Subactions are also specified using a **verb** value.

### setTitle

Sets a title which identifies the list in views.

JSON value:

- **title** - The title of the new list.

Example:

```json
{
   "verb": "setTitle",
   "title": "Customers and Orders"
}
```

### setDescription

Sets the description of the list.

JSON value:

- **description** - The description of the new list.

Example:

```json
{
   "verb": "SetDescription",
   "description": "List of Customers and Orders"
}
```

### addSPField

Adds a new field.

JSON values:

- **fieldType** - The field type can be set to **Text**, **Note**, **Number**, **Boolean**, **User**, or **DateTime**.
- **displayName** - The display name of the field.
- **isRequired** - True if this field is required to contain information; otherwise, false.
- **addToDefaultView** - True if the field will be added to the default view; otherwise, false.

Example:

```json
{
   "verb": "addSPField",
   "fieldType": "Text",
   "displayName": "Customer Name",
   "isRequired": false,
   "addToDefaultView": true
}
```

### deleteSPField

Deletes a default field that was provided by the selected template type.

JSON value:

- **displayName** - The display name to identify the field to delete.

Example:

```json
{
   "verb": "deleteSPField",
   "displayName": "Modified"
}
```

### addContentType

Adds a content type to the list.

JSON value:

- **name** - The name of the content type to add.

Example:

```json
{
   "verb": "addContentType",
   "name": "name"
}
```

### removeContentType

Removes a content type that was provided by the selected template type.

JSON value:

- **name** - The name of the content type to remove.

Example:

```json
{
   "verb": "removeContentType",
   "name": "name"
}
```

### setSPFieldCustomFormatter

Sets column formatting for a field. For more information on column formatting see [Use column formatting to customize SharePoint](column-formatting).

JSON values:

- **fieldDisplayName** - The display name of the field to operate on.
- **formatterJSON** - A JSON object to use as the field CustomFormatter.

Example:

```json
{
   "verb": "setSPFieldCustomFormatter",
   "fieldDisplayName": "name",
   "formatterJSON": "json"<TBD need an example here>
}
```

## Add a navigation link

Use the **addNavLink** verb to add a new navigation link to the site.

JSON values:

- **url** - The url of the link to add.
- **displayName** - The display name of the link.
- **isWebRelative** - True if the link is web relative; otherwise, false.

Example:

```json
{
   "verb": "addNavLink",
   "url": "/Customer Event Collateral",
   "displayName": "Event Collateral",
   "isWebRelative": true
}
```

## Apply a theme

Use the **applyTheme** verb to add a theme to the site. For more information on themes, see [SharePoint site theming](site-theming/sharepoint-site-theming-overview).

JSON value:

- **themeName** - The name of the theme to apply.

Example:

<!-- TBD: add link to Doug's Blue Yonder theme with note you need to create it first -->

```json
{
   "verb": "applyTheme",
   "themeName": "Blue Yonder"
}
```

<!-- 
## Create a page

Use the **createPage** verb to create a new page on the site.

JSON values:

- **fileName** - The name of the file.
- **setAsHomePage** - True if this page is the home page; otherwise, false.
- **pageData** - An object with additional information about the page. **pageData** requires the following values:
  - **Title** - The title of the page.
  - **BannerImageUrl** - A URL specifying the location of an image to display for the banner. <TBD: need more info>
  - **CanvasContent1** - Content for the page specified as XML. <TBD: need more info>
  - **LayoutWebpartsContent** - JSON for the layout. <TBD: need more info>

Example:

```json
{
   "verb": "createPage",
   "fileName": "event-collateral.aspx",
   "pageData":
        {
            "Title": "Comment customer events",
            "BannerImageUrl": "/Customer Event Collateral/customer.jpg",
            "CanvasContent1": "<xml>",
            "LayoutWebpartsContent": "{json}"
        },
    "setAsHomePage": true
}
```
-->

## Set a site logo

Use the **setSiteLogo** verb to specify a logo for your site. This action only works on the communication site template (68).

JSON value:

- **url** - The url of the logo image to use.

Example:

```json
{
    "verb": "setSiteLogo",
    "url": "/Customer Event Collateral/logo.jpg"
}
```

## Join a hub site

Use the **joinHubSite** verb to join the site to a hub. <!-- TBD provide link to more information on hubs and how to get the id -->

JSON value:

- **hubSiteId** - The ID of the hub site to join.

Example:

```json
{
    "verb": "joinHubSite",
    "hubSiteId": "e337cc17-b355-45d2-8dd4-e056f1bcf6f6"
}
```

## Trigger a flow

Use the **triggerFlow** verb to kick off a custom flow.
<!-- update this with example from trigger workflow topic -->

JSON values:

- **url** - A trigger URL of the flow.
- **name** - The name of the flow.
- **parameters** - An optional set of parameters to pass into the flow.

Example:

```json
 {
    "verb": "triggerFlow",
    "url": "<A trigger URL of the Flow.>",
    "name": "Record and tweet site creation event",
    "parameters": {
        "event": "Microsoft Event",
        "product": "SharePoint"
    }
}
```
