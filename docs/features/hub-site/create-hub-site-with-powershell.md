---
title: Create SharePoint hub sites using PowerShell
description: Example code for creating a SharePoint hub site using PowerShell.
ms.date: 4/20/2018
localization_priority: Priority
---

# Create SharePoint hub sites using PowerShell

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments. 

If you're a global or SharePoint admin in Office 365, you can convert any existing site to a hub site by using Windows PowerShell. In this example, you'll learn how to create a SharePoint hub site and to associate another site with it. In this scenario, you are setting up sites for the Contoso marketing department:
- You will create a hub site that all other marketing sites will be associated with.
- You will then specify settings and permissions for the hub site.
- Finally, you will create a second site and associate it with the hub site. 

> [!NOTE]
> To work with this example in SharePoint Online, we recommend that you use a developer tenant and not your production tenant. All of the following steps use a fictional tenant named "Contoso" that you can replace with your tenant name.

## Connect to SPO

First, you need to connect to SharePoint Online by using Windows PowerShell. The commands use both the [SharePoint Online Management Shell](https://www.microsoft.com/en-us/download/details.aspx?id=35588) (-SPO) and the [SharePoint PnP PowerShell Online module](https://www.powershellgallery.com/packages/SharePointPnPPowerShellOnline) (-PnP).

1. Start Windows PowerShell.

2. Run the [Connect-SPOService](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/connect-sposervice?view=sharepoint-ps) cmdlet to connect to SharePoint Online. Sign in with your global or SharePoint admin credentials:

   ```powershell
    Connect-SPOService -Url "https://<your tenant name>-admin.sharepoint.com"
   ```

> [!NOTE]
> In the remainder of this exercise, **contoso** will be used as the tenant name. Continue to use your own tenant name in place of **contoso**.

## Create a new hub site

Next, create the marketing site that will serve as a hub site that other sites can associate with. The intent is that any sites that are marketing-oriented will be part of the hub site. This applies common navigation and branding across the associated sites, enables team members to search across all the sites associated with the single hub site, and takes advantage of other hub site features.

1. Create the site using the [New-PnPSite](https://docs.microsoft.com/en-us/powershell/module/sharepoint-pnp/new-pnpsite) cmdlet:

   ```powershell
   Connect-PnPOnline -SPOManagementShell
   New-PnPSite -Type TeamSite 
    -title "Contoso marketing division" 
    -alias "marketing" 
    -Description "Main site for collaboration for marketing teams at Contoso"
   ```

   The `-SPOManagementShell` parameter allows you to reuse the credentials you signed in with by using the Connect-SPOService cmdlet.

   The cmdlet returns the URL of the new site similar to the following:

   ```
   https://contoso.sharepoint.com/sites/marketing
   ```

2. Register the new marketing site as a hub site by using the [Register-SPOHubSite](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/register-spohubsite?view=sharepoint-ps) cmdlet:

   ```powershell
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

The hub site doesn't have a logo or description yet. We also want to constrain it so that only one person can make changes to the hub site.

### Set properties

1. Upload a logo image for the site by going to `https://contoso.sharepoint.com/sites/marketing/SiteAssets` and uploading any image you like. Make a note of the image file name. 

2. Use the [Set-SPOHubSite](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/set-spohubsite?view=sharepoint-ps) cmdlet to set the logo and description. In place of `mylogo.jpg`, specify the name of the image that you uploaded:

   ```powershell
    Set-SPOHubSite 
     -Identity https://contoso.sharepoint.com/sites/marketing 
     -LogoUrl https://contoso.sharepoint.com/marketing/SiteAssets/mylogo.jpg 
     -Description "Main hub site for collaboration on marketing activities across Contoso"
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

### Set permissions

Now we will restrict access so that only the user `nestorw@contoso` can make changes to the hub site associations.

- Run the [Grant-SPOHubSiteRights](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/grant-spohubsiterights?view=sharepoint-ps) cmdlet to grant a user rights to the marketing hub site. We'll use `nestorw@contoso` in this example, but you can use any valid user on your tenant (you can specify multiple users by separating them with a comma):

   ```powershell
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

1. Provision the site by using the [New-PnPSite](https://docs.microsoft.com/en-us/powershell/module/sharepoint-pnp/new-pnpsite?view=sharepoint-ps) cmdlet:
    
   ```powershell
    New-PnPSite -Type TeamSite 
     -title "Online advertising team" 
     -alias "online-advertising" 
     -Description "For collaboration on online advertising resources"
   ```
    
   The cmdlet returns the URL of the new site similar to the following:
    
   ```
    https://contoso.sharepoint.com/sites/online-advertising
   ```
    
2. Associate this site with the hub site by using the [Add-SPOHubSiteAssociation](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/add-spohubsiteassociation?view=sharepoint-ps) cmdlet:
  
   ```powershell
    Add-SPOHubSiteAssociation 
     -Site https://contoso.sharepoint.com/sites/online-advertising 
     -HubSite https://contoso.sharepoint.com/sites/marketing 
   ```

## Confirm the hub site is working

To confirm, you can either:

- Run the [Get-SPOHubSite](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/get-spohubsite?view=sharepoint-ps) cmdlet.

- Sign in to SharePoint Online and view the hub site directly at `https://contoso.sharepoint.com/sites/marketing`. 

The hub site navigation appears at the top of the site. If you go to the `https://contoso.sharepoint.com/sites/online-advertising` site, it shows the same hub site navigation at the top.

## See also

- [SharePoint hub sites overview](hub-site-overview.md)
