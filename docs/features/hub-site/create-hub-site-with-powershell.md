---
title: Create a SharePoint hub site using PowerShell
description: Example code for creating a SharePoint hub site using PowerShell
ms.date: 2/26/2018
---

# Create a SharePoint hub site using PowerShell

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments.

If you're a global or SharePoint admin in Office 365, you can convert any existing site to a hub site using Windows PowerShell. In this example, learn how to create a SharePoint hub site, and associate another site with it. The scenario is that you are setting up sites for the Contoso marketing department. You will create a hub site that all other marketing sites are associated with. Then you will create a second site to associate with the hub site. You will also specify settings and permissions for the hub site.

To work with this example in SharePoint online, we recommend using a developer tenant and not your production tenant. All of the steps use a fictional tenant named "Contoso" which you can replace with your own tenant name.

## Connect to SPO

First you need to get connected to SharePoint Online using Windows PowerShell. The commands use both the [SharePoint Online Management Shell](https://www.microsoft.com/en-us/download/details.aspx?id=35588) (-SPO) and [SharePoint PnP PowerShell Online module](https://www.powershellgallery.com/packages/SharePointPnPPowerShellOnline) (-PnP).

1. Start Windows PowerShell
2. Run the [Connect-SPOService](https://docs.microsoft.com/en-us/powershell/module/sharepoint-pnp/connect-sposervice) cmdlet to connect to SharePoint online. Log in with your global admin credentials.

```PowerShell
Connect-SPOService -Url "https://<your tenant name>-admin.sharepoint.com"
```

In the remainder of this exercise, "contoso" will be used as the tenant name. Continue to use your own tenant name in place of "contoso".

## Create a new hub site

Create the Marketing site. The marketing site will also be a hub site that other sites can associate with. The intent is that any sites that are marketing oriented can be part of the hub site. Then team members can search across all the sites associated with the single hub site, apply common navigation and branding, and take advantage of other hub site features.

1. Create the site using the [New-PnPSite](https://docs.microsoft.com/en-us/powershell/module/sharepoint-pnp/new-pnpsite) cmdlet.

```PowerShell
Connect-PnPOnline -SPOManagementShell # this reuses the credentials you logged in with Connect-SPOService
New-PnPSite -Type TeamSite -title "Contoso marketing division" -alias "marketing" -Description "Main site for collaboration for marketing teams at Contoso"
```

The cmdlet will return the URL of the new site:

```
https://contoso.sharepoint.com/sites/marketing
```

2. Register this marketing site as a hub site using the [Register-SPOHubSite](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/register-spohubsite.md) cmdlet.

```PowerShell
Register-SPOHubSite -Site https://contoso.sharepoint.com/sites/marketing
```

You will see output similar to the following:

```
ID          : bf0245ee-6bff-48a5-968f-0f155e2b7bbc
Title       : Contoso marketing division
SiteId      : bf0245ee-6bff-48a5-968f-0f155e2b7bbc
SiteUrl     : https://contoso.sharepoint.com/sites/marketing
LogoUrl     :
Description :
Permissions :
```

## Set properties and permissions on the hub site

The hub site doesn't have a logo or description yet. Also we want to constrain it so that only one person can make changes to the hub site. 

1. Upload a logo image to use. Go to https://contoso.sharepoint.com/sites/marketing/SiteAssets and upload any image you like. Make a note of the image file name.
2. Use the [Set-SPOHubSite](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/set-spohubsite) cmdlet to set the logo and description. In place of "mylogo.jpg" specify the name of the image you uploaded.

```PowerShell
Set-SPOHubSite -Identity https://contoso.sharepoint.com/sites/marketing -LogoUrl https://contoso.sharepoint.com/marketing/SiteAssets/mylogo.jpg -Description "Main hub site for collaboration on marketing activities across Contoso"
```

You will see output similar to the following:

```
ID          : bf0245ee-6bff-48a5-968f-0f155e2b7bbc
Title       : Contoso marketing division
SiteId      : bf0245ee-6bff-48a5-968f-0f155e2b7bbc
SiteUrl     : https://contoso.sharepoint.com/sites/marketing
LogoUrl     : https://contoso.sharepoint.com/sites/marketing/SiteAssets/mylogo.jpg
Description : Main hub site for collaboration on marketing activities across Contoso
Permissions :
```

## Set permissions

Now we will restrict access so that only the user nestorw@contoso can make changes to the hub site associations.

- Run the [Grant-SPOHubSiteRights](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/grant-spohubsiterights) cmdlet to grant a user rights to the marketing hub site. We'll use nestorw@contoso but you can use any valid user on your tenant for this example.

```PowerShell
Grant-SPOHubSiteRights -Identity https://contoso.sharepoint.com/sites/marketing -Principals "nestorw@contoso" -Rights Join
```

You will see output similar to the following:

```
ID          : bf0245ee-6bff-48a5-968f-0f155e2b7bbc
Title       : Contoso marketing division
SiteId      : bf0245ee-6bff-48a5-968f-0f155e2b7bbc
SiteUrl     : https://contoso.sharepoint.com/sites/marketing
LogoUrl     : https://contoso.sharepoint.com/sites/marketing/SiteAssets/mylogo.jpg
Description : Main hub site for collaboration on marketing activities across Contoso
Permissions : {0#.f|membership|nestorw@contoso.onmicrosoft.com}
```

## Create and associate a new site

The final step is to create the site we want to associate with the hub. You can repeat these steps for as many sites as you want to join to the hub.

1. Provision the site using the [New-PnPSite](https://docs.microsoft.com/en-us/powershell/module/sharepoint-pnp/new-pnpsite) cmdlet.
    
    ```PowerShell
    New-PnPSite -Type TeamSite -title "Online advertising team" -alias "online-advertising" -Description "For collaboration on online advertising resources"
    ```
    
    The cmdlet will return the URL of the new site:
    
    ```
    https://contoso.sharepoint.com/sites/online-advertising
    ```
    
2. Associate this site with the hub site using the [Add-SPOHubSiteAssociation](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/add-spohubsiteassociation) cmdlet
    
    ```PowerShell
    Add-SPOHubSiteAssociation -Site https://contoso.sharepoint.com/sites/online-advertising -HubSite https://contoso.sharepoint.com/sites/marketing 
    ```

## Confirm the hub site is working

You can run the [Get-SPOHubSite](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/get-spohubsite) cmdlet to confirm, or you can log in to SharePoint Online and view the hub site directly at https://contoso.sharepoint.com/sites/marketing. The hub site nav will appear at the top of the site. If you go to the https://contoso.sharepoint.com/sites/online-advertising site, it will also show the same hub site nav at the top.
