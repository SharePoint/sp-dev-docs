---
title: Site design JSON schema
description: JSON schema reference for building site designs for SharePoint.
ms.date: 10/10/2018
---

# Site design JSON schema

The site design is a list of **actions**. For more complex actions, such as creating a list, there are also **subactions**. Each action is specified by a "verb" value. Verb actions are run in the order they appear in the JSON script. Only the verb actions listed here can be used; otherwise, an "unable to handle action" error will be thrown when trying to upload a site script. More actions will be added over time. 

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

You can view - and reference - the latest schema here: https://developer.microsoft.com/json-schemas/sp/site-design-script-actions.schema.json

## Create a new SharePoint list

Use the **createSPList** verb to create a new SharePoint list.

#### JSON values

- **listName** &ndash; The name of the list.
- **templateType** &ndash; Which template to apply to the list. Typically you would use value 100. The full list of template type values are documented in [SPListTemplateType enumeration](https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.splisttemplatetype.aspx) - but the ones we currently support include:

  | List Template Name | Enum |
  |--------------|---------|
   Generic List | 100 
   Document Library | 101
   Survey | 102
   Links | 103
   Announcements | 104
   Contacts | 105
   Events | 106
   Tasks | 107
   Discussion Board | 108
   PictureLibrary | 109
   Site Pages | 119
   Issue Tracking | 1100

  If you use 101 or 119 and reference the default names ("Documents" or "Site Pages") you can modify the library created with the template. See example below.
- **subactions** &ndash; An array of actions that run in the order listed to create your list.

#### Example

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
},
{
    "verb": "createSPList",
    "listName": "Documents",
    "templateType": 101,
    "subactions": [
        {
            "verb": "setDescription",
            "description": "This is a modified default document library"
        }
    ]
}
```

<br/>

The subactions array provides additional actions to specify how to construct the list. Subactions are also specified using a **verb** value.

### setTitle

Sets a title which identifies the list in views.

#### JSON value

- **title** &ndash; The title of the new list.

#### Example

```json
{
   "verb": "setTitle",
   "title": "Customers and Orders"
}
```

### setDescription

Sets the description of the list.

#### JSON value

- **description** &ndash; The description of the new list.

#### Example

```json
{
   "verb": "setDescription",
   "description": "List of Customers and Orders"
}
```

### addSPField

Adds a new field.

#### JSON values

- **fieldType** &ndash; The field type can be set to **Text**, **Note**, **Number**, **Boolean**, **User**, or **DateTime**. For other data types, see the addSPFieldXml action.
- **displayName** &ndash; The display name of the field.
- **internalName** &ndash; An optional attribute. If provided, specifies the internal name of the field. If not provided, the internal name is based on the display name.
- **isRequired** &ndash; **True** if this field is required to contain information; otherwise, **false**.
- **addToDefaultView** &ndash; **True** if the field will be added to the default view; otherwise, **false**.
- **enforceUnique** &ndash; An optional attribute that defaults to **false**. If **true**, all values for this field must be unique.

#### Example

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

#### JSON value

- **displayName** &ndash; The display name to identify the field to delete.

#### Example

```json
{
   "verb": "deleteSPField",
   "displayName": "Modified"
}
```

### addSPFieldXml

Enables defining fields and their elements using Collaborative Application Markup Language (CAML). For reference, see [Field element (Field)](https://docs.microsoft.com/en-us/sharepoint/dev/schema/field-element-field).

Currently these field constructs cannot be designated as site columns nor added to content types. To create site columns with Field XML use the **createSiteColumnXml** action.

#### JSON value

- **schemaXml** &ndash; The CAML block to define the field.
- **addToDefaultView** &ndash; **True** if the field will be added to the default view; otherwise, **false**.

#### Example

```json
{
    "verb": "addSPFieldXml",
    "schemaXml": "<Field Type=\"Choice\" DisplayName=\"Project Category\" Required=\"FALSE\" Format=\"Dropdown\" StaticName=\"ProjectCategory\" Name=\"ProjectCategory\"><Default>Operations</Default><CHOICES><CHOICE>Operations</CHOICE><CHOICE>IT</CHOICE><CHOICE>Legal</CHOICE><CHOICE>Engineering</CHOICE></CHOICES></Field>"
}
```

### addSPLookupFieldXml

Enables defining lookup fields and their dependent lists element using Collaborative Application Markup Language (CAML). For reference, see [Field element (Field)](https://docs.microsoft.com/en-us/sharepoint/dev/schema/field-element-field).

#### JSON value

- **schemaXml** &ndash; The CAML block to define the field.
- **targetListName** &ndash; The name that identifies the list this lookup field is referencing. Provide either this or targetListUrl.
- **targetListUrl** &ndash; A web-relative URL that identifies the list this lookup field is referencing. Provide either this or targetListName.
- **addToDefaultView** &ndash; **True** if the field will be added to the default view; otherwise, **false**.

#### Example

```json
{
  "verb": "addSPLookupFieldXml",
  "schemaXml": "<Field Type=\"Lookup\" DisplayName=\"Contoso Project Category\" Required=\"FALSE\" EnforceUniqueValues=\"FALSE\" ShowField=\"Title\" UnlimitedLengthInDocumentLibrary=\"FALSE\" RelationshipDeleteBehavior=\"None\" ID=\"{101f1f89-d667-4c7f-9ebc-76cb5831d0a2}\" StaticName=\"ContosoProjectCategory\" Name=\"ContosoProjectCategory\" />",
  "targetListName": "Contoso Project Master"
}
```

### addSPView

Defines and adds a view to the list. Use this action to specify the desired columns and how you want the list items displayed (using a CAML query). Action properties allow you to specify row limits, and whether the view is paged and recurses over items in nested folders. You can also designate your constructed view as the default.

#### JSON value

- **name** &ndash; The name of the view.
- **viewFields** &ndash; An array of the internal names of the fields in your view.
- **query** &ndash; A CAML query string that contains the `where` clause for the view's query. See [CAML schemas] (https://docs.microsoft.com/en-us/sharepoint/dev/schema/collaborative-application-markup-language-caml-schemas). 
- **rowLimit** &ndash; The row limit of the view.
- **isPaged** &ndash; Specifies whether the view is paged.
- **makeDefault** &ndash; If **true**, the view will be made the default for the list; otherwise, **false**.
- **scope** &ndash; An optional setting to specify the scope of the view. For more details, see [SPViewScope enumeration](https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spviewscope.aspx).

#### Example

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

#### JSON value

- **name** &ndash; The name of the view to remove.

#### Example

```json
{
    "verb": "removeSPView",
    "name": "All Items"
}
```

### addContentType

Adds a content type to the list. Currently these are limited to the default content types included in the site template or ones defined in a script by using the createContentType action.


> [!NOTE]
> Currently we do not support adding enterprise content types.  

#### JSON value

- **name** &ndash; The name of the content type to add.

#### Example

```json
{
   "verb": "addContentType",
   "name": "name"
}
```

### removeContentType

Removes a content type that was provided by the selected template type.

#### JSON value

- **name** &ndash; The name of the content type to remove.

#### Example

```json
{
   "verb": "removeContentType",
   "name": "name"
}
```

### setSPFieldCustomFormatter

Sets column formatting for a field. For more information, see [Use column formatting to customize SharePoint](column-formatting.md).

#### JSON values

- **fieldDisplayName** &ndash; The display name of the field to operate on.
- **formatterJSON** &ndash; A JSON object to use as the field CustomFormatter.

#### Example 

In this example, we are formatting a number column as a data bar.

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

### associateFieldCustomizer

Registers field extension for a list field. For more information on these client-side extensions, see [Build field customizer](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/get-started/building-simple-field-customizer) tutorial.

#### JSON values

- **internalName** &ndash; The internal name of the field to operate on.
- **clientSiteComponentId** &ndash; The identifier (GUID) of the extension in the app catalog. This property value can be found in the manifest.json file or in the elements.xml file.
- **clientSiteComponentProperties** &ndash; An optional parameter, which can be used to provide properties for the field customizer extension instance.

#### Example 

```json
{
    "verb": "createSPList",
    "listName": "Custom List with Slider Extension",
    "templateType": 100,
    "subactions": [
        {
            "verb": "SetDescription",
            "description": "Custom list to illustrate SharePoint site scripting"
        },
        {
            "verb": "addSPField",
            "fieldType": "Text",
            "displayName": "Text Field",
            "isRequired": false,
            "addToDefaultView": true
        },
        {
            "fieldType": "Number",
            "displayName": "Number Field",
            "internalName": "ElectricSlide",
            "addToDefaultView": true,
            "isRequired": true
        },
        {
            "verb": "associateFieldCustomizer",
            "internalName": "ElectricSlide",
            "clientSideComponentId": "35944670-3111-4482-b152-9e9d1sean9f7",
            "clientSideComponentProperties": "{\"sampleText\":\"Yes - added by a site design, what?\"}"
        }
    ]
}
```

### associateListViewCommandSet

Associates a ListViewCommandSet to the list

#### JSON values

- **title** &ndash; The title of the extension.
- **location** &ndash; A required parameter to specify where the command is displayed. Options are: ContextMenu or CommandBar. 
- **clientSideComponentId** &ndash; The identifier (GUID) of the extension in the app catalog. This property value can be found in the manifest.json file or in the elements.xml file.
- **clientSideComponentProperties** &ndash; An optional parameter, which can be used to provide properties for the extension instance.


#### Example 

```json
{
    "verb": "createSPList",
    "listName": "CustomList",
    "templateType": 100,
    "subactions": [
        {
            "verb": "SetDescription",
            "description": "Custom list to illustrate SharePoint site scripting"
        },
        {
            "verb": "addSPField",
            "fieldType": "Text",
            "displayName": "Text Field",
            "isRequired": false,
            "addToDefaultView": true
        },
        {
            "verb": "addSPField",
            "fieldType": "Number",
            "displayName": "Number Field",
            "internalName": "ElectricSlide",
            "addToDefaultView": true,
            "isRequired": true
        },
        {
            "verb": "associateListViewCommandSet",
            "title": "HelloWorld",
            "location": "CommandBar"
            "clientSideComponentId": "13234283-d6c2-408f-a9ef-31a920c8ae78",
            "clientSideComponentProperties": "{\"sampleText\":\"added by a site design\"}"
        }
    ]
}
```

## Define a new site column

Use the **createSiteColumn** verb to define a new site column that can then be associated to a list directly or by using the addContentType action. 

#### JSON value

- **fieldType** &ndash; The type of column to add. Supported values - like SPField - are Text, Note, Number, Boolean, User, and DateTime. For other data types, refer to the addSPFieldXml script action. 
- **internalName** &ndash; The internal name of the site column.
- **displayName** &ndash; The display name of the site column.  
- **isRequired** &ndash; **True** if this field is required to contain information; otherwise, **false**.
- **group** &ndash; An optional attribute to designate the column group.
- **enforceUnique** &ndash; An optional attribute that defaults to **false**. If **true**, all values for this field must be unique.

#### Example

```json
{
    "verb": "createSiteColumn",
    "fieldType": "User",
    "internalName": "siteColumn4User",
    "displayName": "Project Owner",
    "isRequired": false
}
```

Use the **createSiteColumnXml** verb to define a new site column for those complex data types not supported by createSiteColumn. These columns can then be associated to a list directly or by using the addContentType action. 

#### JSON value

- **schemaXml** &ndash; The CAML block to define the field.
- **pushChanges** &ndash; Indicates whether this change should be pushed to lists that already reference this field. Defaults to **true**.

#### Example

```json
{
    "verb": "createSiteColumnXml",
    "schemaXml": "<Field Type=\"Choice\" DisplayName=\"Project Status\" Required=\"FALSE\" Format=\"Dropdown\" StaticName=\"ProjectStatus\" Name=\"ProjectStatus\"><Default>In Progress</Default><CHOICES><CHOICE>In Progress</CHOICE><CHOICE>In Review</CHOICE><CHOICE>Done</CHOICE><CHOICE>Has Issues</CHOICE></CHOICES></Field>"
}
```


## Define a new content type

Use **createContentType** to define a new content type that can then be associated to a list by using the addContentType action. 

#### JSON value

> [!NOTE]
> When referencing the content type ID, only one of the three references are required - ID, parentName, or parentId.

- **name** &ndash; The name of the content type to create.
- **description** &ndash; The optional description of the content type.
- **parentName** &ndash; Name of the parent content type. 
- **parentId** &ndash; ID of the parent content type.
- **id** &ndash; ID of the content type.
- **hidden** &ndash; Specifies whether the content type is visible or hidden.
- **subactions** &ndash; Specifies subactions to run on the content type. These are used to designate the site columns to add.

#### Example

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

### addSiteColumn

Subaction to add a previously defined site column directly to a list or content type (existing or created through the site script).

> [!NOTE]
> This action can be used to add created site columns to a list or content type.  

#### JSON value

- **internalName** &ndash; The internal name of the site column to add.

#### Example

```json
 {
    "verb": "addSiteColumn",
    "internalName": "siteColumnUser"
 }
 ```

### removeSiteColumn

Subaction to remove a site column from a list or content type. 

#### JSON value

- **internalName** &ndash; The internal name of the site column to remove.

#### Example

```json
 {
    "verb": "removeSiteColumn",
    "internalName": "siteColumnUser"
 }
 ```

## Add a navigation link

Use the **addNavLink** verb to add a new navigation link to the site. 

#### JSON values

- **url** &ndash; The url of the link to add.
- **displayName** &ndash; The display name of the link.
- **isWebRelative** &ndash; **true** if the link is web relative; otherwise, **false**. The default is **false**.
- **parentDisplayName** &ndash; An optional parameter. If provided, it makes this navigation link a child (sub link) of the navigation link with this displayName. If both this and parentUrl are provided, it searches for a link that matches both to be the parent.
- **parentUrl** &ndash; An optional parameter. If provided, it makes this navigation link a child (sub link) of the navigation link with this url. If both this and parentDisplayName are provided, it searches for a link that matches both to be the parent.
- **isParentUrlWebRelative** &ndash; An optional parameter. **true** if the link is web relative; otherwise, **false**. The default is **false**.

#### Example

> [!NOTE]
> If you add a link to a nested site item such as a list, be sure to add the path reference from the root. 


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
 },
 {
    "verb": "addNavLink",
    "url": "https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-overview",
    "displayName": "SharePoint Site Design Overview",
    "parentDisplayName": "Documents"
 }
```

## Remove a navigation link

Use the **removeNavLink** verb to remove a navigation link from the site. 

#### JSON values

- **url** &ndash; The url of the link to add.
- **displayName** &ndash; The display name of the link.
- **isWebRelative** &ndash; **True** if the link is web relative; otherwise, **false**.

#### Example

> [!NOTE]
> This action can be used to remove site links added by the collaboration and communication site templates (for example, "home", "documents", "pages", "conversations", etc.). 


```json
{
    "verb": "removeNavLink",
    "displayName": "Home",
    "isWebRelative": true
},
{
    "verb": "removeNavLink",
    "displayName": "Pages",
    "isWebRelative": true
},
{
    "verb": "removeNavLink",
    "displayName": "Conversations",
    "isWebRelative": true
},
{
    "verb": "removeNavLink",
    "url": "/_layouts/15/groupstatus.aspx?Target=TEAM",
    "displayName": "Teams",
    "isWebRelative": true
}
```

## Apply a theme

Use the **applyTheme** verb to add a custom theme to the site. For more information about how to construct and upload these themes, see [SharePoint site theming](site-theming/sharepoint-site-theming-overview.md). Note that this site action only works for applying custom themes; to apply one of our in-product SharePoint themes, create a copy as a custom one and reference that one.

#### JSON value

- **themeName** &ndash; The name of the theme to apply.

#### Example

```json
{
   "verb": "applyTheme",
   "themeName": "Blue Yonder"
}
```

<!-- TBD: add link to Doug's Blue Yonder theme with note you need to create it first -->

<!-- 
## Create a page

Use the **createPage** verb to create a new page on the site.

> [!NOTE]
> The createPage site script action is in preview and is subject to change. It is not currently supported for use in production environments.

#### JSON values

- **fileName** &ndash; The name of the file.
- **setAsHomePage** &ndash; **True** if this page is the home page; otherwise, **false**.
- **pageData** &ndash; An object with additional information about the page. **pageData** requires the following values:
  - **Title** &ndash; The title of the page.
  - **BannerImageUrl** &ndash; A URL specifying the location of an image to display for the banner. <TBD: need more info>
  - **CanvasContent1** &ndash; Content for the page specified as XML. <TBD: need more info>
  - **LayoutWebpartsContent** &ndash; JSON for the layout. <TBD: need more info>

#### Example

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

#### JSON value

- **url** &ndash; The url of the logo image to use.

#### Example

```json
{
    "verb": "setSiteLogo",
    "url": "/Customer Event Collateral/logo.jpg"
}
```

## Join a hub site

Use the **joinHubSite** verb to join the site to a designated hub site. 

#### JSON value

- **hubSiteId** &ndash; The ID of the hub site to join.
- **name** &ndash; An optional string specifying the name of the hub site.

#### Example

> [!NOTE]
> Hub sites are a new feature that are just rolling out to customers in Targeted Release in March 2018. This action might not be available for use in your environment. To learn more, see [SharePoint hub sites overview](https://docs.microsoft.com/en-us/sharepoint/dev/features/hub-site/hub-site-overview).

```json
{
    "verb": "joinHubSite",
    "hubSiteId": "e337cc17-b355-45d2-8dd4-e056f1bcf6f6"
}
```

## Install an add-in or solution

Use the **installSolution** action to install a deployed add-in or SharePoint Framework solution from the tenant app catalog. 

#### JSON values


#### Example

> [!NOTE]
> To get the solution ID, sign in to a site by using the **Connect-PnPOnline** cmdlet, and then run **Get-PnPApp**. This returns a list of your deployed solutions.

```json
{
    "verb": "installSolution",
    "id": "d40e4edc-a6da-4cd8-b82d-bba970976803"
}
```

## Register an extension

Use the **associateExtension** action to register a deployed SharePoint Framework extension from the tenant app catalog. 

> [!NOTE]
> For more details on how to create and configure a SharePoint Framework extension, check out: [Overview of SharePoint Framework Extensions](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/overview-extensions).

#### JSON values

- **title** &ndash; The title of the extension in the app catalog. 
- **location** &ndash; Used to specify the extension type. If it is used to create commands, then where the command would be displayed; otherwise this should be set to ClientSideExtension.ApplicationCustomizer.
- **clientSideComponentId** &ndash; The identifier (GUID) of the extension in the app catalog. This property value can be found in the manifest.json file or in the elements.xml file.
- **clientSideComponentProperties** &ndash; An optional parameter, which can be used to provide properties for the extension instance.
- **registrationId** &ndash; An optional parameter, which indicates the type of the list the extension is associated to (if it is a list extension).
- **registrationType** &ndash; An optional parameter, which should be specified if the extension is associated with a list. 
- **scope** &ndash; Indicates whether the extension is associated with a Web or a Site. 

#### Example

```json
{
    "verb": "associateExtension",
    "title": "SPFXApplicationCustomizer Example",
    "location": "ClientSideExtension.ApplicationCustomizer",
    "clientSideComponentId": "40d64749-a6e5-4691-b440-1e32fb6sean5",
    "scope": "Web"
}
```

## Trigger a flow

Use the **triggerFlow** verb to kick off a custom flow.
<!-- update this with example from trigger workflow topic -->

#### JSON values

- **url** &ndash; A trigger URL of the flow.
- **name** &ndash; The name of the flow.
- **parameters** &ndash; An optional set of parameters to pass into the flow.

#### Example

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

## Configure regional settings

Use the **setRegionalSettings** action to configure the regional settings of the site (/_layouts/15/regionalsetng.aspx). 

#### JSON values

- **timeZone** &ndash; A number specifying the time zone. For a list of permissible values, see https://msdn.microsoft.com/library/microsoft.sharepoint.spregionalsettings.timezones.aspx
- **locale** &ndash; A number specifying the culture LCID. For a list of permissible values, see https://msdn.microsoft.com/en-us/library/ms912047(v=winembedded.10).aspx
- **sortOrder** &ndash; A number specifying the sort order. For a list of permissible values, see https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spregionalsettings.collation.aspx
- **hourFormat** &ndash; Specifies whether the site should use 12-hour or 24-hour time format.

#### Example

```json
{
    "verb": "setRegionalSettings",
    "timeZone": 2, /* Greenwich Mean Time */
    "locale": 1050, /* Croatia */
    "sortOrder": 6, /* Croatian */
    "hourFormat": "24"
}
```


## Add users (principals) to SharePoint Groups

Use the **addPrincipalToSPGroup** action to manage addition of users and groups to select default SharePoint groups. For more information, see [Understanding SharePoint Groups](https://support.office.com/en-us/article/Understanding-SharePoint-groups-94D9B261-161E-4ACE-829E-ECA1C8CD2EB8). This action can be used for licensed users, security groups, and Office 365 Groups.

#### JSON values

- **principal** &ndash; A required parameter to specify the name of the principal (user or group) to add to the SharePoint group. 
- **group** &ndash; A required parameter to specify the SharePoint group to add the principal to.

#### Example

> [!NOTE]
> This action currently only supports the Visitors (permission level: read), Members (permission level: contribute or edit, depending on the site template), and Owners (permission level: full control) groups. Principals must be added individually.

```json
{
    "verb": "addPrincipalToSPGroup",
    "principal": "sean@contosotravel.onmicrosoft.com", /* user */
    "group": "Owners"
},    
{
    "verb": "addPrincipalToSPGroup",
    "principal": "travelops", /* sg */
    "group": "Owners"
},
{
    "verb": "addPrincipalToSPGroup",
    "principal": "itexecutives", /* mail-enabled sg */
    "group": "Members"
},
{
    "verb": "addPrincipalToSPGroup",
    "principal": "Adventure@contosotravel.onmicrosoft.com", /* o365 group */
    "group": "Visitors"
}
```

## Manage guest access

Use the **setSiteExternalSharingCapability** action to manage guest access. For more information, see [Manage external sharing for your SharePoint Online environment](https://support.office.com/en-us/article/Manage-external-sharing-for-your-SharePoint-Online-environment-C8A462EB-0723-4B0B-8D0A-70FEAFE4BE85).

<!-- update this table matrix -->

#### JSON values

- **capability** &ndash; A required parameter to specify the sharing option for the site collection. The four options are: Disabled, ExistingExternalUserSharingOnly, ExternalUserSharingOnly, ExternalUserAndGuestSharing

#### Example

```json
{
   "verb": "setSiteExternalSharingCapability",
   "capability": "Disabled"
}
```

## See also

- [SharePoint site design and site script overview](site-design-overview.md)

