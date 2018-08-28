---
title: Get started creating SharePoint site designs and site scripts
description: Create site designs to provide reusable lists, themes, layouts, pages, or custom actions so that your users can quickly build new SharePoint sites with the features they need. 
ms.date: 07/27/2018
---

# Get started creating site designs and site scripts

You can create site designs to provide reusable lists, themes, layouts, pages, or custom actions so that your users can quickly build new SharePoint sites with the features they need. 

This article describes how to build a simple site design that adds a SharePoint list for tracking customer orders. You'll use the site design to create a new SharePoint site with the custom list. You'll learn how to use SharePoint PowerShell cmdlets to create site scripts and site designs. You can also use REST APIs to perform the same actions. The corresponding REST calls are shown for reference in each step.

## Create the site script in JSON

A site design is a collection of actions that SharePoint runs when creating a new site. Actions describe changes to apply to the new site, such as creating a new list or applying a theme. The actions are specified in a JSON script, which is a list of all actions to apply. When a script runs, SharePoint completes each action in the order listed.

Each action is specified by the "verb" value in the JSON script. Also, actions can have subactions that are also "verb" values. In the following JSON, the script specifies to create a new list named **Customer Tracking**, and then subactions set the description and add several fields to define the list.

1. Download and install the [SharePoint Online Management Shell](https://www.microsoft.com/en-us/download/details.aspx?id=35588). If you already have a previous version of the shell installed, uninstall it first and then install the latest version.

2. Follow the instructions at [Connect to SharePoint Online PowerShell](https://technet.microsoft.com/en-us/library/fp161372.aspx) to connect to your SharePoint tenant.

3. Create and assign the JSON that describes the new script to a variable as shown in the following PowerShell code.

   ```powershell
    $site_script = @'
    {
        "$schema": "schema.json",
            "actions": [
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
    '@
   ```

<br/>

The previous script creates a new SharePoint list named **Customer Tracking**. It sets the description and adds four fields to the list. Note that each of these are considered an action. Site scripts are limited to 30 cumulative actions (across one or more scripts that may be called in a site design).

## Add the site script

Each site script must be registered in SharePoint so that it is available to use. Add a new site design by using the **Add-SPOSiteScript** cmdlet. The following example shows how to add the JSON script described previously.

```powershell
C:\> Add-SPOSiteScript 
 -Title "Create customer tracking list" 
 -Content $site_script 
 -Description "Creates list for tracking customer contact information"
```

After running the cmdlet, you get a result that lists the site script **ID** of the added script. Keep track of this ID somewhere because you will need it later when you create the site design.

The REST API to add a new site script is **CreateSiteScript**.

## Create the site design

Next, you need to create the site design. The site design appears in a drop-down list when someone creates a new site from one of the templates. It can run one or more site scripts that have already been added.

- Run the following cmdlet to add a new site design. Replace `<ID>` with the site script ID from when you added the site script.

```powershell
C:\> Add-SPOSiteDesign 
 -Title "Contoso customer tracking" 
 -WebTemplate "64" 
 -SiteScripts "<ID>" 
 -Description "Tracks key customer data in a list"
```

The previous cmdlet creates a new site design named Contoso customer tracking. The `-WebTemplate` value selects which base template to associate with. The value `"64"` indicates Team site template, and the value `"68"` indicates the Communication site template.

The JSON response displays the **ID** of the new site design. You can use it in subsequent cmdlets to update or modify the site design.

The REST API to add a new site design is **CreateSiteDesign**.

## Use the new site design

Now that you've added a site script and site design, you can use it to create new sites through the self-service site creation experience or apply the site design to an existing site using the **Invoke-SPOSiteDesign** command in PowerShell.

### New site creation

1. Go to the home page of the SharePoint site that you are using for development. 

2. Choose **Create site**. 

3. Choose **Team site**. 

4. In the **Choose a design** drop-down, select your site design **customer orders**. 

5. In **Site name**, enter a name for the new site **Customer order tracking**. 

6. Choose **Next**. 

7. Choose **Finish**. 

8. A pane indicates that your script is being applied. When it is done, choose **View updated site**. 

9. You will see the custom list on the page. 

### Apply to an existing site collection

You can also apply a published site design to an existing site collection using the [Invoke-SPOSiteDesign](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Invoke-SPOSiteDesign?view=sharepoint-ps) cmdlet. 

You can already apply to Group-connected Team and Communication sites. By August 2018 you will also be able to apply site designs to the team site not connected to an Office 365 Group, a classic team site, or a classic publishing site.

## See also

- [SharePoint site design and site script overview](site-design-overview.md)
