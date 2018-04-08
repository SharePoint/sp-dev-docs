---
title: Site design JSON schema
description: JSON schema reference for building site designs for SharePoint.
ms.date: 12/14/2017
---

# Site design JSON schema

The site design is a list of actions. For more complex actions, such as creating a list, there are also subactions. Each action is specified by a "verb" value. Verb actions are run in the order they appear in the JSON script. Only the verb actions listed here can be used, otherwise an "unable to handle action" error will be thrown when trying to upload a site script. More actions will be added over time. 

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
            "verb": "setDescription",
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
   "verb": "setDescription",
   "description": "List of Customers and Orders"
}
```

### addSPField

Adds a new field.

JSON values:

- **fieldType** - The field type can be set to **Text**, **Note**, **Number**, **Boolean**, **User**, or **DateTime**. For other data types see the addSPFieldXml action.
- **displayName** - The display name of the field.
- **internalName** - An optional attribute. If provided, specifies the internal name of the field. If not provided, the internal name will be based on the display name.
- **isRequired** - True if this field is required to contain information; otherwise, false.
- **addToDefaultView** - True if the field will be added to the default view; otherwise, false.
- **enforceUnique** - An optional attribute that defaults to false. If true, then all values for this field must be unique.

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

### addSPFieldXml

Enables defining fields and their elements using Collaborative Application Markup Language (CAML). For reference see: https://msdn.microsoft.com/en-us/library/office/aa979575.aspx 

Currently these field constructs cannot be designated as site columns nor added to content types.

JSON value:

- **schemaXml** - The CAML block to define the field.
- **addToDefaultView** - True if the field will be added to the default view; otherwise, false.

Example:

```json
{
    "verb": "addSPFieldXml",
    "schemaXml": "<Field Type=\"Choice\" DisplayName=\"Project Category\" Required=\"FALSE\" Format=\"Dropdown\" StaticName=\"ProjectCategory\" Name=\"ProjectCategory\"><Default>Operations</Default><CHOICES><CHOICE>Operations</CHOICE><CHOICE>IT</CHOICE><CHOICE>Legal</CHOICE><CHOICE>Engineering</CHOICE></CHOICES></Field>"
}
```

### addSPView

Defines and adds a view to the list. Use this action to specify the desired columns and how you want the list items displayed (using a CAML query). Subactions allow you to specify row limits, whether the view is paged, and recurses over items in nested folders or not. You can also designate your constructed view as the default.

JSON value:

- **name** - The name of the view.
- **viewFields** - an array of the internal names of the fields in your view.
- **query** - A CAML query string that contains the where clause for the view's query. See https://msdn.microsoft.com/en-us/library/ms462365
- **rowLimit** - The row limit of the view.
- **isPaged** - Specifies whether the view is paged.
- **makeDefault** - If true, the view will be made the default for the list; otherwise, false.
- **scope** - An optional setting to specify the scope of the view. For more details see See https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spviewscope.aspx

Example:

```json
{
    "verb": "addSPView",
    "name": "Contoso Projects by Category",
    "viewFields": 
    [
        "ID", 
        "Title",
        "siteColumnUser",
        "ProjectCategory"
    ],
    "query": "<OrderBy><FieldRef Name=\"ProjectCategory\" /><FieldRef Name=\"siteColumnUser\" Ascending=\"FALSE\" /></OrderBy>",
    "rowLimit": 100,
    "isPaged": true,
    "makeDefault": true
}
```

### removeSPView

Removes a view from a list. This action can also be used to remove a view applied by the site template.

JSON value:

- **name** - The name of the view to remove.

Example:

```json
{
    "verb": "removeSPView",
    "name": "All Items"
}
```

### createSiteColumn

Defines a new site column that can then be associated to a list directly or using the addContentType action. 

JSON value:

> [!NOTE]
> When referencing the content type ID only one of the three references are required - ID, parentName, or parentId  

- **fieldType** - The type of column to add. Supported values - like SPField - are Text, Note, Number, Boolean, User, and DateTime. For other data types refer to the addSPFieldXml script action. 
- **internalName** - The internal name of the site column.
- **displayName** - The display name of the site column.  
- **isRequired** - True if this field is required to contain information; otherwise, false.
- **group** - An optional attribute to designate the column group.
- **enforceUnique** - An optional attribute that defaults to false. If true, then all values for this field must be unique.

Example:

```json
{
    "verb": "createSiteColumn",
    "fieldType": "User",
    "internalName": "siteColumn4User",
    "displayName": "Project Owner",
    "isRequired": false
}
```

### addSiteColumn

Subaction to add a previously defined site column directly to a list or content type (exisiting or created through the site script).

> [!NOTE]
> This action can be used to add created site columns to a list or content type.  

JSON value:

- **internalName** - The internal name of the site column to add.

Example:

```json
 {
    "verb": "addSiteColumn",
    "internalName": "siteColumnUser"
 }
 ```

### removeSiteColumn

Subaction to remove a site column from a list or content type. 

JSON value:

- **internalName** - The internal name of the site column to remove.

Example:

```json
 {
    "verb": "removeSiteColumn",
    "internalName": "siteColumnUser"
 }
 ```

### createContentType

Defines a new content type that can then be associated to a list using the addContentType action. 

JSON value:

> [!NOTE]
> When referencing the content type ID only one of the three references are required - ID, parentName, or parentId  

- **name** - The name of the content type to create.
- **description** - The optional description of the content type.
- **parentName** - Name of the parent content type. 
- **parentId** - ID of the parent content type.
- **id** - ID of the content type.
- **hidden** - Specifies whether the content type is visible or hidden.
- **subactions** - Specifies subactions to run on the content type. These are used to designate the site columns to add.

Example:

```json
{
    "verb": "createContentType",
    "name": "Contoso Projects",
    "description": "custom list content type",
    "parentName": "Item",
    "hidden": false,
    "subactions":
        [
            {
                "verb": "addSiteColumn",
                "internalName": "siteColumn1Text"
            },
            {
                "verb": "addSiteColumn",
                "internalName": "siteColumn2Number"
                },
            {
                "verb": "addSiteColumn",
                "internalName": "siteColumn3Note"
            }
        ]
}
```

### addContentType

Adds a content type to the list. Currently these are limited to the default content types included in the site template or ones defined in a script using the createContentType action.


> [!NOTE]
> Currently we do not support adding enterprise content types.  

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

Sets column formatting for a field. For more information on column formatting see [Use column formatting to customize SharePoint](column-formatting.md).

JSON values:

- **fieldDisplayName** - The display name of the field to operate on.
- **formatterJSON** - A JSON object to use as the field CustomFormatter.

Example: In this example we are formatting a number column as a data bar

```json
                {
                    "verb": "setSPFieldCustomFormatter",
                    "fieldDisplayName": "Effort (days)",
                    "formatterJSON":
                    {
                        "debugMode": true,
                        "elmType": "div",
                        "txtContent": "@currentField",
                        "attributes": {
                            "class": "sp-field-dataBars"
                        },
                        "style": {
                            "width": {
                                "operator": "?",
                                "operands": [
                                    {
                                        "operator": ">",
                                        "operands": [
                                            "@currentField",
                                            "20"
                                        ]
                                    },
                                    "100%",
                                    {
                                        "operator": "+",
                                        "operands": [
                                            {
                                                "operator": "toString()",
                                                "operands": [
                                                    {
                                                        "operator": "*",
                                                        "operands": [
                                                            "@currentField",
                                                            5
                                                        ]
                                                    }
                                                ]
                                            },
                                            "%"
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                }
```

## Add a navigation link

Use the **addNavLink** verb to add a new navigation link to the site. 

JSON values:

- **url** - The url of the link to add.
- **displayName** - The display name of the link.
- **isWebRelative** - True if the link is web relative; otherwise, false.

Example:

> [!NOTE]
> If you add a link to a nested site item - like a list - be sure to add the path reference from the root. 


```json
{
   "verb": "addNavLink",
   "url": "/Customer Event Collateral",
   "displayName": "Event Collateral",
   "isWebRelative": true
},
{
   "verb": "addNavLink",
   "url": "/Lists/Project Activities",
   "displayName": "Project Activities",
   "isWebRelative": true
 }
```

## Apply a theme

Use the **applyTheme** verb to add a custom theme to the site. For more information on how to construct and upload these themes, see [SharePoint site theming](site-theming/sharepoint-site-theming-overview.md). Note that this site action only works for applying custom themes; to apply one of our in-product SharePoint themes, create a copy as a custom one and reference that one.

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

> [!NOTE]
> The createPage site script action is in preview and is subject to change. It is not currently supported for use in production environments.

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

Use the **setSiteLogo** verb to specify a logo for your site. 

> [!NOTE]
> This action only works on the communication site template (68).

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

Use the **joinHubSite** verb to join the site to a designated hub site. 

JSON value:

- **hubSiteId** - The ID of the hub site to join.
- **name** - An optional string specifying the name of the hub site.

Example:

<!-- TBD: add link to Dave's hub site documentation -->

> [!NOTE]
> Hub sites are a new feature that are just rolling out to customers in Targeted Release in March 2018. This action might not be available for use in your environment. To learn more check out https://docs.microsoft.com/en-us/sharepoint/dev/features/hub-site/hub-site-overview

```json
{
    "verb": "joinHubSite",
    "hubSiteId": "e337cc17-b355-45d2-8dd4-e056f1bcf6f6"
}
```

## installSPFXSolution

Use the **installSPFXSolution** action to register a deployed solution from the app catalog. 

JSON values:

- **id** - The id of the catalog solution. 

Example:

> [!NOTE]
> To get the solution ID login to a site using Connect-PnPOnline cmdlet and then run Get-PnPApp. This will return a list of your deployed solutions.

```json
{
    "verb": "installSPFXSolution",
    "id": "d40e4edc-a6da-4cd8-b82d-bba970976803"
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

## setRegionalSettings

Use the **setRegionalSettings** action to configure the regional settings of the site (/_layouts/15/regionalsetng.aspx). 

JSON values:

- **timeZone** - A number specifying the time zone. For list of permissible values see https://msdn.microsoft.com/library/microsoft.sharepoint.spregionalsettings.timezones.aspx
- **locale** - A number specifying the culture LCID. For list of permissible values see https://msdn.microsoft.com/en-us/library/ms912047(v=winembedded.10).aspx
- **sortOrder** - A number specifying the sort order. For list of permissible values see https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spregionalsettings.collation.aspx
- **hourFormat** - Specifies whether the site should use 12-hour or 24-hour time format.

Example:

```json
{
    "verb": "setRegionalSettings",
    "timeZone": 2, /* Greenwich Mean Time */
    "locale": 1050, /* Croatia */
    "sortOrder": 6, /* Croatian */
    "hourFormat": "24"
}
```

## setSiteExternalSharingCapability

Use the **setSiteExternalSharingCapability** to manage guest access. For details on these settings refer to: https://support.office.com/en-us/article/Manage-external-sharing-for-your-SharePoint-Online-environment-C8A462EB-0723-4B0B-8D0A-70FEAFE4BE85

<!-- update this table matrix -->

JSON values:

- **capability** - A required parameter to specify the sharing option for the site collection. The four options are: Disabled, ExistingExternalUserSharingOnly, ExternalUserSharingOnly, ExternalUserAndGuestSharing

Example:

```json
{
   "verb": "setSiteExternalSharingCapability",
   "capability": "Disabled"
}
```
