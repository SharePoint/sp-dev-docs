---
title: SharePoint site design and site script overview
description: Use SharePoint site scripts and site designs to automate provisioning new SharePoint sites with custom configurations.
ms.date: 01/08/2018
---

# SharePoint site design and site script overview

> [!NOTE]
> Site designs and site scripts have been released to production and are available for general use.

Use site designs and site scripts to automate provisioning new or existing modern SharePoint sites using your own custom configurations. When people in your organization create new SharePoint sites, you often need to ensure some level of consistency. For example, you may need proper branding and theming applied to each new site. You may also have detailed site provisioning scripts, such as using the PnP provisioning engine, that need to be applied each time a new site is created. This article describes how you can use site designs and site scripts to provide custom configurations to apply when new sites are created.

## How site designs work

Site designs are like a template. They can be used each time a new site is created to apply a consistent set of actions. They can also be applied to existing modern sites (Group-connected Team and communication). Most actions typically affect the site itself, such as setting the theme, or creating lists. But a site design can also include other actions, such as recording the new site URL to a log, or sending a tweet.

You create site designs and register them in SharePoint to one of the modern template sites: the team site, or communication site. You can see how this works in the following steps.

1. Go to the SharePoint home page on your developer tenant.
1. Choose **Create site**.

    You'll see the two modern template sites: **Team site**, and **Communication site**.

1. Choose **Communication site**.

    The communication site has a **Choose a design** box in which comes with the following site designs.

    - Topic
    - Showcase
    - Blank

These are the default site designs. For each site design there is a title, description, and image.

![Default site design title, description, and image on communication site template](images/site-designs-listed-on-communication-site-template.png)

Had you chosen the team site template, it contains only one default site design named **Team site**. For additional information on how you can change the default site designs, see [Customize a default site design](customize-default-site-design.md).

When a site design is selected, SharePoint creates the new site, and runs site scripts for the site design. The site scripts detail the work such as creating new lists, or applying a theme. When the actions in the scripts are completed, SharePoint displays detailed results of those actions in a progress pane.

![Progress pane listing completed actions from a site design](images/progress-pane.png)

> [!NOTE]
> Site designs can now be applied to previously created modern site collections. See the REST and PowerShell articles for more details.

## Anatomy of a site script

Site scripts are JSON files that specify an ordered list of actions to run when creating the new site. The actions are run in the order listed. The following example is a script that has two top-level actions. First it applies a theme that was previously created named **Contoso Explorers**. Then it creates a **Customer Tracking** list.

```json
{
  "$schema": "schema.json",
  "actions": [
    {
      "verb": "applyTheme",
      "themeName": "Contoso Explorers"
    },
    {
      "verb": "createSPList",
      "listName": "Customer Tracking",
      "templateType": 100,
      "subactions": [
        {
          "verb": "SetDescription",
          "description": "List of Customers and Orders"
        },
        {
          "verb": "addSPField",
          "fieldType": "Text",
          "displayName": "Customer Name",
          "isRequired": false,
          "addToDefaultView": true
        },
        {
          "verb": "addSPField",
          "fieldType": "Number",
          "displayName": "Requisition Total",
          "addToDefaultView": true,
          "isRequired": true
        },
        {
          "verb": "addSPField",
           "fieldType": "User",
          "displayName": "Contact",
          "addToDefaultView": true,
          "isRequired": true
        },
        {
          "verb": "addSPField",
          "fieldType": "Note",
          "displayName": "Meeting Notes",
          "isRequired": false
        }
      ]
    }
  ],
  "bindata": { },
  "version": 1
}
```

Each action in a site script is specified by a **verb** value in the JSON. In the previous script the first action is specified by the **applyTheme** verb. Then the **createSPList** verb creates the list. Notice that the **createSPList** verb contains its own set of verbs which run additional actions on just the list.

Available actions include:

- Creating a new list
- Applying a theme
- Setting a site logo
- Adding navigation
- Triggering a Microsoft flow

Site scripts can be run again on the same site after provisioning. This can only be done programmatically. Site scripts are non-destructive, so when they run again, they ensure that the site matches the configuration in the script. For example, if the site already has a list with the same name that the site script is creating, the site script will only add missing fields to the existing list. Also, please note that site scripts are limited to 30 cumulative actions (across one or more scripts that may be called in a site design).

## Using PowerShell or REST to work with site designs and site scripts

You can create site designs and site scripts by using PowerShell, or the REST API. The following example creates a site script and a site design that uses the site script. <!-- The PowerShell example loads the script from a file, while the REST example has the script inline. -->

```powershell
C:\> Get-Content 'c:\scripts\site-script.json' `
     -Raw | `
     Add-SPOSiteScript `
    -Title "Contoso theme and list"

Id          : 2756067f-d818-4933-a514-2a2b2c50fb06
Title       : Contoso theme and list
Description :
Content     :
Version     : 0

C:\> Add-SPOSiteDesign `
  -Title "Contoso customer tracking" `
  -WebTemplate "64" `
  -SiteScripts "2756067f-d818-4933-a514-2a2b2c50fb06" `
  -Description "Creates customer list and applies standard theme"
```

<!-- 
```javascript
var site_script = {
  "$schema": "schema.json",
  "actions": [
    {
      "verb": "applyTheme",
      "themeName": "Contoso Explorers"
    },
    {
      "verb": "createSPList",
      "listName": "Customer Tracking",
      "templateType": 100,
      "subactions": [
        {
          "verb": "SetDescription",
          "description": "List of Customers and Orders"
        },
        {
          "verb": "addSPField",
          "fieldType": "Text",
          "displayName": "Customer Name",
          "isRequired": false,
          "addToDefaultView": true
        },
        {
          "verb": "addSPField",
          "fieldType": "Number",
          "displayName": "Requisition Total",
          "addToDefaultView": true,
          "isRequired": true
        },
        {
          "verb": "addSPField",
          "fieldType": "User",
          "displayName": "Contact",
          "addToDefaultView": true,
          "isRequired": true
        },
        {
          "verb": "addSPField",
          "fieldType": "Note",
          "displayName": "Meeting Notes",
          "isRequired": false
        }
      ]
    }
  ],
  "bindata": { },
  "version": 1
};

RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.CreateSiteScript(Title=@title,Description=@desc)?@title='Contoso theme and list'&@desc='this script creates a list named customer tracking and sets the contoso explorers company theme'", site_script);

RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.CreateSiteDesign",{
  info:{
    Title:"Contoso customer tracking", Description:"Creates customer list and applies standard theme",  SiteScriptIds:["607aed52-6d61-490a-b692-c0f58a6981a1"],  WebTemplate:"64"
   }
  });
```
-->

In the previous example, the **Add-SPOSiteScript** cmdlet, or **CreateSiteScript** REST API returns a site script id. This is used for the **SiteScripts** parameter in the subsequent call to the **Add-SPO-SiteDesign** cmdlet, or **CreateSiteDesign** REST API.

The **WebTemplate** parameter set to the value 64 indicates to register this site design with the team site template. The value 68 would indicate the communication site template. The **Title** and **Description** parameters will be displayed when a user views site designs as they create a new team site.

> [!NOTE]
> A site design can run multiple scripts. The script IDs are passed in an array, and they will run in the order listed.

For step-by-step information on creating a site design, see [Get started creating site designs](get-started-create-site-design.md).

## PnP Provisioning and customization using Microsoft Flow

One action provided by site scripts is the ability to trigger a Microsoft flow. This allows you to specify any custom action you need beyond the actions provided natively in site scripts.

If you use the PnP provisioning engine to automate site creation, then you can use a Microsoft flow to integrate with site designs. You can maintain all of your existing provisioning scripts as well as create new custom provisioning scripts using this technique.

![process of triggering a Microsoft flow](images/process-for-triggering-a-custom-flow.png)

The process works as follows:

1. The script instantiates your Microsoft flow using a URL with additional details.
1. The flow sends a message to an Azure storage queue that you have configured.
1. The message triggers a call to an Azure function that you have configured.
1. The Azure function runs your custom script, such as the PnP provisioning engine, to apply your custom configurations.

For a step-by-step tutorial on how to configure your own Microsoft flow with PnP provisioning, see [Build a complete site design using the PnP provisioning engine](site-design-pnp-provisioning.md).

## Scoping

You can configure site designs to only appear for specific groups or people in your organization. This is useful to ensure that people only see the site designs intended for them. For example, you might want the accounting department to only see site designs specifically for them. And the accounting site designs may not make sense to show to anyone else.

By default a site design can be viewed by everyone when it is created. Scopes are applied by using the **Grant-SPOSiteDesignRights** cmdlet, or the **GrantSiteDesignRights** REST API.  You can specify the scope by user, or a mail-enabled security group. The following example shows how to add Nestor (a user at the fictional Contoso site) view rights on a site design.

> [!div class="tabbedCodeSnippets"]
```powershell
Grant-SPOSiteDesignRights `
  -Identity 44252d09-62c4-4913-9eb0-a2a8b8d7f863 `
  -Principals "nestorw@contoso.onmicrosoft.com" `
  -Rights View
```

<!--
```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GrantSiteDesignRights", {id:"44252d09-62c4-4913-9eb0-a2a8b8d7f863", principalNames:["nestorw@contoso.onmicrosoft.com”], grantedRights:1});
```
-->
For more information about working with scopes, see [Scoping access to site designs](site-design-scoping.md).

## See also

- [Get started creating site designs](get-started-create-site-design.md)
- [Apply a scope to your site design](site-design-scoping.md)
- [Site design JSON schema](site-design-json-schema.md)
- [PowerShell cmdlets for SharePoint site designs and site scripts](site-design-powershell.md)
- [Site design and site script REST API](site-design-rest-api.md)
- [Site design examples](https://github.com/SharePoint/sp-dev-site-scripts)
