---
title: Get started creating SharePoint site templates and site scripts
description: Create site templates to provide reusable lists, themes, layouts, pages, or custom actions so that your users can quickly build new SharePoint sites with the features they need.
ms.date: 09/30/2022
ms.localizationpriority: high
---

# Get started creating site templates and site scripts

You can create site templates to provide reusable lists, themes, layouts, or custom actions so that your users can quickly build new SharePoint sites with the features they need.

This article describes how to build a simple site template that adds a SharePoint list for tracking customer orders. You'll use the site template to create a new SharePoint site with the custom list. You'll learn how to use SharePoint PowerShell cmdlets to create site scripts and site templates. You can also use REST APIs to perform the same actions. The corresponding REST calls are shown for reference in each step.

## Create the site script in JSON

A site script is a collection of actions that SharePoint runs when creating a new site. Actions describe changes to apply to the new site, such as creating a new list or applying a theme. The actions are specified in a JSON script, which is a list of all actions to apply. When a script runs, SharePoint completes each action in the order listed.

Each action is specified by the "verb" value in the JSON script. Also, actions can have subactions that are also "verb" values. In the following JSON, the script specifies to create a new list named **Customer Tracking**, and then subactions set the description and add several fields to define the list.

1. Download and install the [SharePoint Online Management Shell](https://www.microsoft.com/download/details.aspx?id=35588). If you already have a previous version of the shell installed, uninstall it first and then install the latest version.
1. Follow the instructions at [Connect to SharePoint Online PowerShell](https://technet.microsoft.com/library/fp161372.aspx) to connect to your SharePoint tenant.
1. Create - and assign the JSON that describes the new script - to a variable as shown in the following PowerShell code. You can view and reference the latest JSON schema file: [https://developer.microsoft.com/json-schemas/sp/site-design-script-actions.schema.json](https://developer.microsoft.com/json-schemas/sp/site-design-script-actions.schema.json)

    ```powershell
     $site_script = '
     {
       "$schema": "https://developer.microsoft.com/json-schemas/sp/site-design-script-actions.schema.json",
         "actions": [
           {
             "verb": "createSPList",
             "listName": "Customer Tracking",
             "templateType": 100,
             "subactions": [
               {
                 "verb": "setDescription",
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
         ]
     }
     '
    ```

The previous script creates a new SharePoint list named **Customer Tracking**. It sets the description and adds four fields to the list. Note that each of these are considered an action. Site scripts are limited to 30 cumulative actions (across one or more scripts that may be called in a site template) if applied programmatically using the `Invoke-SPOSiteDesign` command. If they are applied through the UI or using the `Add-SPOSiteDesignTask` command then the limit is 300 cumulative actions (or 100K characters).

## Add the site script

Each site script must be registered in SharePoint so that it is available to use. Add a new site script by using the **Add-SPOSiteScript** cmdlet. The following example shows how to add the JSON script described previously.

```powershell
C:\> Add-SPOSiteScript
 -Title "Create customer tracking list"
 -Content $site_script
 -Description "Creates list for tracking customer contact information"
```

After running the cmdlet, you get a result that lists the site script **ID** of the added script. Keep track of this ID somewhere because you will need it later when you create the site template.

The REST API to add a new site script is **CreateSiteScript**.

## Create the site template

Next, you need to create the site template. The site template appears in a drop-down list when someone creates a new site from one of the templates. It can run one or more site scripts that have already been added.

- Run the following cmdlet to add a new site template. Replace `<ID>` with the site script ID from when you added the site script.

```powershell
C:\> Add-SPOSiteDesign
 -Title "Contoso customer tracking"
 -WebTemplate "64"
 -SiteScripts "<ID>"
 -Description "Tracks key customer data in a list"
```

The previous cmdlet creates a new site template named Contoso customer tracking.

|  Parameter  | Value |            Site template type            |
| :---------- | :---- | :--------------------------------------- |
| WebTemplate | 64    | Team site template                       |
| WebTemplate | 1     | Team site (with group creation disabled) |
| WebTemplate | 68    | Communication site template              |
| WebTemplate | 69    | Channel site template                    |

The JSON response displays the **ID** of the new site template. You can use it in subsequent cmdlets to update or modify the site template.

The REST API to add a new site template is **CreateSiteDesign**.

## Use the new site template

Now that you've added a site script and site template, you can use it to create new sites through the self-service site creation experience or apply the site template to an existing site using the **Invoke-SPOSiteDesign** command in PowerShell. If you are using hub sites you can even associate a site template to a hub so it gets applied to all joining sites.

### New site creation

1. Go to the home page of the SharePoint site that you are using for development.
1. Choose **Create site**.
1. Choose the type of site you need to use. SharePoint will create a team site using the Microsoft **Team collaboration template** or a communication site using the Microsoft **Topic** template unless another custom site template is set as default.
1. Choose **Next**.
1. In **Site name**, enter a name for the new site **Customer order tracking**.
1. Choose **Finish**.
1. Next, go to **Settings** and select **Apply a site template**.
1. Select the site template you just created.
1. Once applied, your new template will display under the tab in the template viewer titled **From your organization.**
1. When the new template has been applied, you will see the custom list on the page.

### Apply to an existing site

You can also apply a published site template to existing sites. On the home page of the site, site owners can navigate to **Settings** and then **Apply a site template** to browse and apply templates provided by your organization and Microsoft.

You can apply templates to existing site collections in bulk by using the [Invoke-SPOSiteDesign](/powershell/module/sharepoint-online/Invoke-SPOSiteDesign) cmdlet.

**Published site templates can be applied to:**

1. Group-connected team sites
1. Team sites that not connected to a Microsoft 365 group
1. Communication sites
1. Channel sites
1. Classic team sites
1. Classic publishing sites

The REST API to apply a site template to an existing site collection is **ApplySiteDesign**.

### Associate with a hub site

Apply a published site template to a new or existing hub site. Then, all associated sites will inherit the hub site template and theme. Navigate to the home page of the hub and go to **Settings** and then **Apply a site template**. Learn more about how to [enable site associations for your hub site](https://support.microsoft.com/office/set-up-your-sharepoint-hub-site-e2daed64-658c-4462-aeaf-7d1a92eba098).

You can also use the `Set-SPOHubSite` cmdlet. Review the [PowerShell cmdlets for SharePoint hub sites](../features/hub-site/hub-site-powershell.md) article.

>[!NOTE]
> [Channel sites](/sharepoint/teams-connected-sites) are automatically blocked from joining a hub site.

## See also

- [SharePoint site template and site script overview](site-design-overview.md)
- [How to apply and customize SharePoint site templates](https://support.microsoft.com/office/apply-and-customize-sharepoint-site-templates-39382463-0e45-4d1b-be27-0e96aeec8398)
