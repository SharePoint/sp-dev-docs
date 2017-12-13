---
title: Get started creating SharePoint site designs and site scripts
description: Get started creating SharePoint site designs and site scripts for users to create their own sites from.
ms.date: 12/14/2017
---

# Get started creating site designs and site scripts

> [!NOTE]
> Site designs and site scripts are currently in preview and are subject to change. They are not currently supported for use in production environments.

Build site designs to provide reusable lists, themes, layouts, pages, or custom actions so that your users can quickly build new SharePoint sites with the features they need. In this article you'll build a simple site design that adds a SharePoint list for tracking customer orders. Then you'll use the site design to create a new SharePoint site with the custom list.

This article shows how to use SharePoint PowerShell cmdlets to create site scripts and site designs. You can also use REST APIs to perform the same actions. The corresponding REST calls are shown for reference in each step.

## Create the site script in JSON

A site design is a collection of actions that SharePoint will run when creating a new site. Actions describe changes to apply to the new site, such as creating a new list, or applying a theme. The actions are specified in a JSON script. The JSON script is a list of all actions to apply. When a script runs, SharePoint completes each action in the order listed.

Each action is specified by the "verb" value in the JSON script. Also, actions can have subactions which are also "verb" values. In the JSON below, the script specifies to create a new list named Customer Tracking, and then subactions set the description and add several fields to define the list.

1. Download and install the [SharePoint Online Management Shell](https://www.microsoft.com/en-us/download/details.aspx?id=35588). If you already have a previous version of the shell installed, uninstall it first and then install the latest version.
1. Follow the instructions at [Connect to SharePoint Online PowerShell](https://technet.microsoft.com/en-us/library/fp161372.aspx) to connect to your SharePoint tenant.
1. Create and assign the JSON that describes the new script to a variable as shown in the PowerShell code below.

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

The previous script will create a new SharePoint list named Customer Tracking. It will set the description, and also add four fields to the list.

## Add the site script

Each site script must be registered in SharePoint so that it is available to. Add a new site design by using the **Add-SPOSiteScript** cmdlet. The following example shows how to add the JSON script described previously.

```powershell
C:\> Add-SPOSiteScript -Title "Create customer tracking list" -Content $site_script -Description "Creates list for tracking customer contact information"
```

After running the cmdlet you will get a result that lists the site script **ID** of the added script. Keep track of this ID somewhere because you will need it later when you create the site design.

The REST API to add a new site script is **CreateSiteScript**.

## Create the site design

Next you need to create the site design. The site design will appear in a drop down list when someone creates a new site from one of the templates. It can run one or more site scripts that have already been added.

- Run the following cmdlet to add a new site design. Replace \<ID\> with the site script ID from when you added the site script.

```powershell
C:\> Add-SPOSiteDesign -Title "Contoso customer tracking" -WebTemplate "64" -SiteScripts "<ID>" -Description "Tracks key customer data in a list"
```

The previous cmdlet creates a new site design named Contoso customer tracking. The -WebTemplate value selects which base template to associate with. The value "64" indicates Team site template, and the value "68" indicates the communication site template.

The JSON response will display the **ID** of the new site design. You can use in subsequent cmdlets to update or modify the site design.

The REST API to add a new site design is **CreateSiteDesign**.

## Use the new site design

Now that you've added a site script and site design, you can use it to create new sites.

1. Go to the home page of the SharePoint site you are using for development.
1. Choose **Create site**.
1. Choose **Team site**.
1. In the **Choose a design** drop down, select your site design **customer orders**.
1. In Site name enter a name for the new site **Customer order tracking**.
1. Choose **Next**.
1. Choose **Finish**.
1. A pane will indicate that your script is being applied. When it is done, choose **View updated site**.
1. You will see the custom list on the page.
