---
title: Site template JSON schema
description: JSON schema reference for building site templates for SharePoint.
ms.date: 11/18/2024
ms.localizationpriority: high
---

# Site template JSON schema

The site template is a list of **actions**. For more complex actions, such as creating a list, there are also **subactions**. Each action is specified by a "verb" value. Verb actions are run in the order they appear in the JSON script. Only the verb actions listed here can be used; otherwise, an "unable to handle action" error will be thrown when trying to upload a site script. More actions will be added over time.

The overall JSON structure is specified as follows:

```json
{
  "$schema": "schema.json",
  "actions": [
    ...
    <one or more verb actions>
    ...
  ]
}
```

> [!TIP]
> You can view - and reference - the latest schema here: https://developer.microsoft.com/json-schemas/sp/site-design-script-actions.schema.json

> [!NOTE]
> **Actions** can be run more than once on a site. Rerunning **actions** on the same site with the same parameters will result in an update to the existing schema and not duplication of schema.



## addContentTypesFromHub

Use the **addContentTypesFromHub** verb to sync content types from a content type hub to the site.

> [!NOTE]
> Once **addContentTypesFromHub** is applied on a site, the **addContentType** subaction on a list will be able to add it to the list by name.

### JSON value

- `ids`: An array of the content type IDs that need to be synced.

#### Example

```json
{
  "verb": "addContentTypesFromHub",
  "ids": ["0x01007CE30DD1206047728BAFD1C39A850120"]
}
```


## Create a new SharePoint list

Use the **createSPList** verb to create a new SharePoint list.

> [!NOTE]
> Once **createSPList** is applied on a site, running the **createSPList** with the same list name will act as an update to the existing list.

### JSON values

- `listName`: The name of the list.
- `templateType`: Which template to apply to the list. Typically, you would use value 100. The full list of template type values is documented in [SPListTemplateType enumeration](/previous-versions/office/sharepoint-server/ms413878(v=office.15)) - but the ones we currently support include:

  | List Template Name | Enum |
  | ------------------ | ---- |
  | Generic List       | 100  |
  | Document Library   | 101  |
  | Survey             | 102  |
  | Links              | 103  |
  | Announcements      | 104  |
  | Contacts           | 105  |
  | Events             | 106  |
  | Tasks              | 107  |
  | Discussion Board   | 108  |
  | PictureLibrary     | 109  |
  | Site Pages         | 119  |
  | Issue Tracking     | 1100 |

  If you use 101 or 119 and reference the default names ("Documents" or "Site Pages"), you can modify the library created with the template. See example below.
- `subactions`: An array of actions that run in the order listed to create your list.

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

The subactions array provides additional actions to specify how to construct the list. Subactions are also specified using a `verb` value.

### setDescription

Sets the description of the list.

#### JSON value

- `description`: The description of the new list.

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

- `fieldType`: The field type can be set to `Text`, `Note`, `Number`, `Boolean`, `User`, or `DateTime`. For other data types, see the addSPFieldXml action.
- `displayName`: The display name of the field.
- `id`: An optional attribute. If provided, specifies the id of the field. It needs to be a unique, randomly generated GUID. Providing a value for this is recommended to ensure the field isn't added multiple times if the script is rerun.
- `internalName`: An optional attribute. If provided, specifies the internal name of the field. If not provided, the internal name is based on the display name.
- `isRequired`: **True** if this field is required to contain information; otherwise, **False**.
- `addToDefaultView`: **True** if the field will be added to the default view; otherwise, **False**.
- `enforceUnique`: An optional attribute that defaults to **False**. If **True**, all values for this field must be unique.

#### Example

```json
{
  "verb": "addSPField",
  "fieldType": "Text",
  "displayName": "Customer Name",
  "isRequired": false,
  "id": "c532fcb9-cdb3-45c6-8247-c784dcd58e1a",
  "addToDefaultView": true
}
```

### deleteSPField

Deletes a default field that was provided by the selected template type.

#### JSON value

- `displayName`: The display name to identify the field to delete.

#### Example

```json
{
  "verb": "deleteSPField",
  "displayName": "Modified"
}
```

### addSPFieldXml

Enables defining fields and their elements using Collaborative Application Markup Language (CAML). For reference, see [Field element (Field)](/sharepoint/dev/schema/field-element-field). Providing the ID attribute in the field schemaXml is important in order to prevent the field from being created multiple times if the script is run more than once.

Currently these field constructs can't be designated as site columns nor added to content types. To create site columns with Field XML, use the **createSiteColumnXml** action.

#### JSON value

- `schemaXml`: The CAML block to define the field.
- `addToDefaultView`: **True** if the field will be added to the default view; otherwise, **False**.

#### Example

```json
{
  "verb": "addSPFieldXml",
  "schemaXml": "<Field ID=\"{596cbd92-36e3-40cc-a910-0f53468ce5e4}\" Type=\"Choice\" DisplayName=\"Project Category\" Required=\"FALSE\" Format=\"Dropdown\" StaticName=\"ProjectCategory\" Name=\"ProjectCategory\"><Default>Operations</Default><CHOICES><CHOICE>Operations</CHOICE><CHOICE>IT</CHOICE><CHOICE>Legal</CHOICE><CHOICE>Engineering</CHOICE></CHOICES></Field>"
}
```

### addSPLookupFieldXml

Enables defining lookup fields and their dependent lists element using Collaborative Application Markup Language (CAML). For reference, see [Field element (Field)](/sharepoint/dev/schema/field-element-field). Providing the ID attribute in the field schemaXml is important in order to prevent the field from being created multiple times if the script is run more than once.

#### JSON value

- `schemaXml`: The CAML block to define the field.
- `targetListName`: The name that identifies the list this lookup field is referencing. Provide either this or targetListUrl.
- `targetListUrl`: A web-relative URL that identifies the list this lookup field is referencing. Provide either this or targetListName.
- `addToDefaultView`: **True** if the field will be added to the default view; otherwise, **False**.

#### Example

```json
{
  "verb": "addSPLookupFieldXml",
  "schemaXml": "<Field Type=\"Lookup\" DisplayName=\"Contoso Project Category\" Required=\"FALSE\" EnforceUniqueValues=\"FALSE\" ShowField=\"Title\" UnlimitedLengthInDocumentLibrary=\"FALSE\" RelationshipDeleteBehavior=\"None\" ID=\"{101f1f89-d667-4c7f-9ebc-76cb5831d0a2}\" StaticName=\"ContosoProjectCategory\" Name=\"ContosoProjectCategory\" />",
  "targetListName": "Contoso Project Master"
}
```

### addSiteColumn

Subaction to add a previously defined site column directly to a list (existing or created through the site script).

#### JSON value

- `internalName`: The internal name of the site column to add.
- `addToDefaultView`: Optional attribute that defaults to **False**. If **True**, the newly added field will also be added to the default view.

#### Example

```json
 {
  "verb": "addSiteColumn",
  "internalName": "siteColumnUser",
  "addToDefaultView": true
 }
 ```

### addSPView

Defines and adds a view to the list. Use this action to specify the desired columns and how you want the list items displayed (using a CAML query). Action properties allow you to specify row limits, and whether the view is paged and recurses over items in nested folders. You can also designate your constructed view as the default.

#### JSON value

- `name`: The name of the view.
- `viewFields`: An array of the internal names of the fields in your view.
- `query`: A CAML query string that contains the `where` clause for the view's query. See [CAML schemas](/sharepoint/dev/schema/collaborative-application-markup-language-caml-schemas).
- `rowLimit`: The row limit of the view.
- `isPaged`: Specifies whether the view is paged.
- `makeDefault`: If **True**, the view will be made the default for the list; otherwise, **False**.
- `scope`: An optional setting to specify the scope of the view. For more information, see [SPViewScope enumeration](/previous-versions/office/sharepoint-server/ms458474(v=office.15)).
- `formatterJSON`: An optional setting to specify the JSON formatting for the view.

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

- `name`: The name of the view to remove.

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

- `name`: The name of the content type to add.

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

- `name`: The name of the content type to remove.

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

- `fieldDisplayName`: The display name of the field to operate on.
- `formatterJSON`: A JSON object to use as the field CustomFormatter.

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
            "operands": ["@currentField", "20"]
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
                      "operands": ["@currentField",5]
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

Registers field extension for a list field. For more information on these client-side extensions, see [Build field customizer](/sharepoint/dev/spfx/extensions/get-started/building-simple-field-customizer) tutorial.

#### JSON values

- `internalName`: The internal name of the field to operate on.
- `clientSiteComponentId`: The identifier (GUID) of the extension in the App Catalog. This property value can be found in the manifest.json file or in the elements.xml file.
- `clientSiteComponentProperties`: An optional parameter, which can be used to provide properties for the field customizer extension instance.

#### Example

```json
{
  "verb": "createSPList",
  "listName": "Custom List with Slider Extension",
  "templateType": 100,
  "subactions": [
    {
      "verb": "setDescription",
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
      "verb": "associateFieldCustomizer",
      "internalName": "ElectricSlide",
      "clientSideComponentId": "35944670-3111-4482-b152-9e9d1sean9f7",
      "clientSideComponentProperties": "{\"sampleText\":\"Yes - added by a site template, what?\"}"
    }
  ]
}
```

### associateListViewCommandSet

Associates a ListViewCommandSet to the list

#### JSON values

- `title`: The title of the extension.
- `location`: A required parameter to specify where the command is displayed. Options are: ClientSideExtension.ListViewCommandSet.ContextMenu or ClientSideExtension.ListViewCommandSet.CommandBar.
- `clientSideComponentId`: The identifier (GUID) of the extension in the App Catalog. This property value can be found in the manifest.json file or in the elements.xml file.
- `clientSideComponentProperties`: An optional parameter, which can be used to provide properties for the extension instance.

#### Example

```json
{
  "verb": "createSPList",
  "listName": "CustomList",
  "templateType": 100,
  "subactions": [
      {
        "verb": "setDescription",
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
        "location": "ClientSideExtension.ListViewCommandSet.CommandBar",
        "clientSideComponentId": "13234283-d6c2-408f-a9ef-31a920c8ae78",
        "clientSideComponentProperties": "{\"sampleText\":\"added by a site template\"}"
      }
  ]
}
```

### setTitle

Renames the list. To create a new list with a specific name, instead of using setTitle use the `listName` parameter in the `CreateSPList` action.

> [!NOTE]
> Using `setTitle` will rename the list, preventing the list from updating if the site template is reapplied.

#### JSON value

- `title`: The title of the new list.

#### Example

```json
{
  "verb": "setTitle",
  "title": "Customers and Orders"
}
```

## Define a new site column

Use the `createSiteColumn` verb to define a new site column that can then be associated to a list directly or by using the addContentType action.

#### JSON value

- `fieldType`: The type of column to add. Supported values - like SPField - are Text, Note, Number, Boolean, User, and DateTime. For other data types, refer to the addSPFieldXml script action.
- `internalName`: The internal name of the site column.
- `displayName`: The display name of the site column.
- `isRequired`: **True** if this field is required to contain information; otherwise, **False**.
- `id`: An optional attribute. If provided, specifies the id of the field. It needs to be a unique, randomly generated GUID. Providing a value for this is recommended to ensure the field isn't added multiple times if the script is rerun.
- `group`: An optional attribute to designate the column group.
- `enforceUnique`: An optional attribute that defaults to **False**. If **True**, all values for this field must be unique.

#### Example

```json
{
  "verb": "createSiteColumn",
  "fieldType": "User",
  "internalName": "siteColumn4User",
  "displayName": "Project Owner",
  "isRequired": false,
  "id": "181c4370-cdae-471b-9499-730046e55b75"
}
```

Use the `createSiteColumnXml` verb to define a new site column for those complex data types not supported by createSiteColumn. These columns can then be associated to a list directly or by using the addContentType action. Providing the ID attribute in the field schemaXml is important in order to prevent the field from being created multiple times if the script is run more than once.

#### JSON value

- `schemaXml`: The CAML block to define the field.
- `pushChanges`: Indicates whether this change should be pushed to lists that already reference this field. Defaults to **True**.

#### Example

```json
{
  "verb": "createSiteColumnXml",
  "schemaXml": "<Field ID=\"{82581bd1-356f-4206-8ff7-a3b6ad1f5553}\" Type=\"Choice\" DisplayName=\"Project Status\" Required=\"FALSE\" Format=\"Dropdown\" StaticName=\"ProjectStatus\" Name=\"ProjectStatus\"><Default>In Progress</Default><CHOICES><CHOICE>In Progress</CHOICE><CHOICE>In Review</CHOICE><CHOICE>Done</CHOICE><CHOICE>Has Issues</CHOICE></CHOICES></Field>"
}
```

## Define a new content type

Use **createContentType** to define a new content type that can then be associated to a list by using the addContentType action.

#### JSON value

> [!NOTE]
> When referencing the content type ID, only one of the three references are required - ID, parentName, or parentId.

- `name`: The name of the content type to create.
- `description`: The optional description of the content type.
- `parentName`: Name of the parent content type.
- `parentId`: ID of the parent content type.
- `id`: ID of the content type.
- `hidden`: Specifies whether the content type is visible or hidden.
- `group`: Group of the content type.
- `subactions`: Specifies subactions to run on the content type. These are used to designate the site columns to add.

#### Example

```json
{
  "verb": "createContentType",
  "name": "Contoso Projects",
  "description": "custom list content type",
  "parentName": "Item",
  "hidden": false,
  "group": "Contoso",
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

Subaction to add a previously defined site column directly to a content type (existing or created through the site script).

#### JSON value

- `internalName`: The internal name of the site column to add.

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

- `internalName`: The internal name of the site column to remove.

#### Example

```json
 {
  "verb": "removeSiteColumn",
  "internalName": "siteColumnUser"
 }
 ```

## Add a navigation link

Use the `addNavLink` verb to add a new navigation link to the site QuickLaunch or Hub navigation.

#### JSON values

- `url`: The URL of the link to add.
- `displayName`: The display name of the link.
- `navComponent`: The component where to add the link, QuickLaunch, Hub, or Footer. The default is **QuickLaunch**.
- `isWebRelative`: **True** if the link is web relative; otherwise, **False**. The default is **False**.
- `parentDisplayName`: An optional parameter. If provided, it makes this navigation link a child (sub link) of the navigation link with this displayName. If both this and parentUrl are provided, it searches for a link that matches both to be the parent.
- `parentUrl`: An optional parameter. If provided, it makes this navigation link a child (sub link) of the navigation link with this URL. If both this and parentDisplayName are provided, it searches for a link that matches both to be the parent.
- `isParentUrlWebRelative`: An optional parameter. **True** if the link is web relative; otherwise, **False**. The default value is **False**.

#### Example

> [!NOTE]
> If you add a link to a nested site item such as a list, be sure to add the path reference from the root.

```json
{
  "verb": "addNavLink",
  "url": "/Customer Event Collateral",
  "displayName": "Event Collateral",
  "navComponent":"Hub",
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
  "url": "https://learn.microsoft.com/sharepoint/dev/declarative-customization/site-design-overview",
  "displayName": "SharePoint Site Design Overview",
  "parentDisplayName": "Documents"
},
{
  "verb": "addNavLink",
  "url": "https://learn.microsoft.com/sharepoint/dev/declarative-customization/site-design-json-schema#add-a-navigation-link",
  "displayName": "About Site Footer",
  "navComponent":"Footer"
},
{
  "verb": "addNavLink",
  "url": "",
  "displayName": "Linkless Heading",
  "isWebRelative": false
}
```

## Remove a navigation link

Use the `removeNavLink` verb to remove a navigation link from the site.

#### JSON values

- `url`: The URL of the link to remove.
- `displayName`: The display name of the link.
- `navComponent`: The component where to remove the link from, QuickLaunch, Hub, or Footer. The default is **QuickLaunch**.
- `isWebRelative`: **True** if the link is web relative; otherwise, **False**.

#### Example

> [!NOTE]
> This action can be used to remove site links added by the collaboration and communication site templates (for example, "home", "documents", "pages", and "conversations").

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

#### Handle special characters

The sites created in other languages than English may contain special characters. Use UTF-8 encoding to read the JSON content containing special characters.

```PowerShell
Get-Content '<Folder_location_to_site_script>\site-script.json' -Raw -Encoding UTF8
```

## Apply a theme

Use the `applyTheme` verb to add a custom theme to the site. For more information about how to construct and upload these themes, see [SharePoint site theming](site-theming/sharepoint-site-theming-overview.md). This site action only works for applying custom themes; to apply one of our in-product SharePoint themes, create a copy as a custom one and reference that one.

> [!NOTE]
> This action is automatically blocked for [channel sites](/sharepoint/teams-connected-sites).

#### JSON value

- `themeName`: The name of the theme to apply.

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
> The createPage site script action is in preview and is subject to change. itsn't currently supported for use in production environments.

#### JSON values

- `fileName`: The name of the file.
- `setAsHomePage`: **True** if this page is the home page; otherwise, **False**.
- `pageData`: An object with additional information about the page. **pageData** requires the following values:
  - `Title`: The title of the page.
  - `BannerImageUrl`: A URL specifying the location of an image to display for the banner. <TBD: need more info>
  - `CanvasContent1`: Content for the page specified as XML. <TBD: need more info>
  - `LayoutWebpartsContent`: JSON for the layout. <TBD: need more info>

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

## Set branding properties

Use the `setSiteBranding` verb to specify the navigation layout, the header layout, and header background.

> [!NOTE]
> Setting the navigation layout only works on the communication site template and for the hub navigation.
> This action is automatically blocked for [channel sites](/sharepoint/teams-connected-sites).

#### JSON value

- `navigationLayout`: Specify the navigation layout as Cascade or Megamenu
- `headerLayout`: Specify the header layout as Standard or Compact
- `headerBackground`: Specify the header background as None, Neutral, Soft, or Strong
- `showFooter`: Specify whether site footer should show or not

#### Example

```json
{
  "verb": "setSiteBranding",
  "navigationLayout": "Megamenu",
  "headerLayout": "Compact",
  "headerBackground": "Strong",
  "showFooter": true
}
```

## Set a site logo

Use the `setSiteLogo` verb to specify a logo for your site.

> [!NOTE]
> This action only works on the communication site template (68).

#### JSON value

- `url`: The URL of the logo image to use.

#### Example

```json
{
  "verb": "setSiteLogo",
  "url": "/Customer Event Collateral/logo.jpg"
}
```

## Join a hub site

> [!NOTE]
> This action is automatically blocked for [channel sites](/sharepoint/teams-connected-sites).

Use the `joinHubSite` verb to join the site to a designated hub site.

#### JSON value

- `hubSiteId`: The ID of the hub site to join.
- `name`: An optional string specifying the name of the hub site.

#### Example

> [!NOTE]
> To get the `hubSiteId`, sign in to a site by using the **Connect-PnPOnline** cmdlet, and then run:

```PowerShell
$hubSiteName = "My Hub Site"
Get-PnPHubSite | Where-Object { $_.Title -eq $hubSiteName }
```

This returns information about the Hub Site named $hubSiteName. The hubSiteId is returned as the SiteId.

```json
{
  "verb": "joinHubSite",
  "hubSiteId": "e337cc17-b355-45d2-8dd4-e056f1bcf6f6"
}
```

## Install an add-in or solution

Use the `installSolution` action to install a deployed add-in or SharePoint Framework solution from the tenant App Catalog.

#### Example

> [!NOTE]
> To get the solution ID, sign in to a site by using the **Connect-PnPOnline** cmdlet, and then run **Get-PnPApp**. This returns a list of your deployed solutions. For multi-geo tenants, use the Product ID after setting up the solution in each geo location. Obtain the Product ID by uplaoding the solution to the app catalog or in the solution's definition.

```json
{
  "verb": "installSolution",
  "id": "d40e4edc-a6da-4cd8-b82d-bba970976803"
}
```

## Register an extension

Use the `associateExtension` action to register a deployed SharePoint Framework extension from the tenant App Catalog.

> [!NOTE]
> For more details on how to create and configure a SharePoint Framework extension, check out: [Overview of SharePoint Framework Extensions](../spfx/extensions/overview-extensions.md).

#### JSON values

- `title`: The title of the extension in the App Catalog.
- `location`: Used to specify the extension type. If it's used to create commands, then where the command would be displayed; otherwise this should be set to ClientSideExtension.ApplicationCustomizer.
- `clientSideComponentId`: The identifier (GUID) of the extension in the App Catalog. This property value can be found in the manifest.json file or in the elements.xml file.
- `clientSideComponentProperties`: An optional parameter, which can be used to provide properties for the extension instance.
- `registrationId`: An optional parameter, which indicates the type of the list the extension is associated to (if it's a list extension).
- `registrationType`: An optional parameter, which should be specified if the extension is associated with a list.
- `scope`: Indicates whether the extension is associated with a `Web` or a `Site`.

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

## Activate a Feature

Use the `activateSPFeature` action to activate a SharePoint feature.

#### JSON values

- `featureId`: The ID of the feature to activate (GUID).
- `scope`: Indicates whether the feature is associated with a `web` or a `site`.


#### Example

To enable the web scoped feature that allows for Events Lists to be created (feature ID 00bfea71-ec85-4903-972d-ebe475780106):

```json
{
  "verb": "activateSPFeature",
  "featureId": "00bfea71-ec85-4903-972d-ebe475780106",
  "scope": "web"
}
```

## Trigger a flow

Use the `triggerFlow` verb to kick off a custom flow.
<!-- update this with example from trigger workflow topic -->

> [!TIP]
> The article [Calling Power Automate from a site script](/sharepoint/dev/declarative-customization/site-design-trigger-flow-tutorial) provides an end-to-end example.

#### JSON values

- `url`: A trigger URL of the flow.
- `name`: The name of the flow.
- `parameters`: An optional set of parameters to pass into the flow.

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

> [!NOTE]
> This action is automatically blocked for [channel sites](/sharepoint/teams-connected-sites).

Use the `setRegionalSettings` action to configure the regional settings of the site (*/_layouts/15/regionalsetng.aspx*).

#### JSON values

- `timeZone`: A number specifying the time zone. For a list of permissible values, see [SPRegsionalSettings.TimeZones](/previous-versions/office/sharepoint-server/ms453853(v=office.15))
- `locale`: A number specifying the culture LCID. For a list of permissible values, see [Microsoft Locale ID Values](/previous-versions/windows/embedded/ms912047(v=winembedded.10))
- `sortOrder`: A number specifying the sort order. For a list of permissible values, see [SPRegionalSettings.Collation](/previous-versions/office/sharepoint-server/ms367805(v=office.15))
- `hourFormat`: Specifies whether the site should use 12-hour or 24-hour time format.

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

> [!NOTE]
> This action is automatically blocked for [channel sites](/sharepoint/teams-connected-sites).

Use the `addPrincipalToSPGroup` action to manage addition of users and groups to select default SharePoint groups. For more information, see [Understanding SharePoint Groups](https://support.office.com/article/Understanding-SharePoint-groups-94D9B261-161E-4ACE-829E-ECA1C8CD2EB8). This action can be used for licensed users, security groups, and Microsoft 365 groups.

#### JSON values

- `principal`: A required parameter to specify the name of the principal (user or group) to add to the SharePoint group.
- `group`: A required parameter to specify the SharePoint group to add the principal to.

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

> [!NOTE]
> This action is automatically blocked for [channel sites](/sharepoint/teams-connected-sites).

Use the `setSiteExternalSharingCapability` action to manage guest access. For more information, see [Manage external sharing for your SharePoint Online environment](https://support.office.com/article/Manage-external-sharing-for-your-SharePoint-Online-environment-C8A462EB-0723-4B0B-8D0A-70FEAFE4BE85).

<!-- update this table matrix -->

#### JSON values

- `capability`: A required parameter to specify the sharing option for the site collection. The four options are: `Disabled`, `ExistingExternalUserSharingOnly`, `ExternalUserSharingOnly`, and `ExternalUserAndGuestSharing`.

#### Example

```json
{
  "verb": "setSiteExternalSharingCapability",
  "capability": "Disabled"
}
```

## See also

- [SharePoint site template and site script overview](site-design-overview.md)
