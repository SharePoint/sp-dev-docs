---
title: Create SharePoint hub sites using PowerShell
description: Example code for creating a SharePoint hub site by using PowerShell.
ms.date: 06/07/2022
ms.localizationpriority: high
---

# Create SharePoint hub sites by using PowerShell

If you're a global or SharePoint admin in Office 365, you can convert any existing site to a hub site by using Microsoft PowerShell. In this example, you'll learn how to create a SharePoint hub site and to associate another site with it. In this scenario, you are setting up sites for the Contoso marketing department:
- You will create a hub site that all other marketing sites will be associated with.
- You will then specify settings and permissions for the hub site.
- Finally, you will create a second site and associate it with the hub site. 

> [!NOTE]
> To work with this example in SharePoint Online, we recommend that you use a developer tenant and not your production tenant. All of the following steps use a fictional tenant named "Contoso" that you can replace with your tenant name.

## Using PnP PowerShell

The samples below can be performed using [PnP PowerShell](https://www.powershellgallery.com/packages/PnP.PowerShell).

> [!NOTE]
> In the remainder of this exercise, **contoso** will be used as the tenant name. Continue to use your own tenant name in place of **contoso**.

[!INCLUDE [pnp-powershell](../../../includes/snippets/open-source/pnp-powershell.md)]

## Create a new hub site

First, we will create the marketing site that will serve as a hub site that other sites can associate with. The intent is that any sites that are marketing-oriented will be part of the hub site. This applies common navigation and branding across the associated sites, enables team members to search across all the sites associated with the single hub site, and takes advantage of other hub site features.

1. Connect to the SharePoint Online Admin center using:

   ```powershell
   Connect-PnPOnline -Url https://contoso-admin.sharepoint.com -UseWebLogin
   ```

2. Create the site to be used as a hub site using the [New-PnPSite](https://pnp.github.io/powershell/cmdlets/New-PnPSite.html) cmdlet:

   ```powershell
   New-PnPSite -Type TeamSite -Title "Contoso marketing division" -Alias "marketing" -Description "Main site for collaboration for marketing teams at Contoso"
   ```

   The cmdlet returns the URL of the new site similar to the following:

   ```
   https://contoso.sharepoint.com/sites/marketing
   ```

3. Register the new marketing site as a hub site by using the [Register-PnPHubSite](https://pnp.github.io/powershell/cmdlets/Register-PnPHubSite.html) cmdlet:

   ```powershell
   Register-PnPHubSite -Site https://contoso.sharepoint.com/sites/marketing
   ```

## Set properties and permissions on the hub site

The hub site doesn't have a logo or description yet. We also want to constrain it so that only one person can make changes to the hub site.

### Set properties

1. Upload a logo image for the site by going to `https://contoso.sharepoint.com/sites/marketing/SiteAssets` and uploading any image you like. Make a note of the image file name. 

2. Use the [Set-PnPHubSite](https://pnp.github.io/powershell/cmdlets/Set-PnPHubSite.html) cmdlet to set the logo and description. In place of `mylogo.jpg`, specify the name of the image that you uploaded:

   ```powershell
    Set-PnPHubSite 
     -Identity https://contoso.sharepoint.com/sites/marketing 
     -LogoUrl https://contoso.sharepoint.com/sites/marketing/SiteAssets/mylogo.jpg 
     -Description "Main hub site for collaboration on marketing activities across Contoso"
   ```

### Set permissions

Now we will restrict access so that only the user `nestorw@contoso.com` can make changes to the hub site associations.

- Run the [Grant-PnPHubSiteRights](https://pnp.github.io/powershell/cmdlets/Grant-PnPHubSiteRights.html) cmdlet to grant a user rights to the marketing hub site. We'll use `nestorw@contoso` in this example, but you can use any valid user on your tenant (you can specify multiple users by separating them with a comma):

   ```powershell
    Grant-PnPHubSiteRights -Identity https://contoso.sharepoint.com/sites/marketing -Principals "nestorw@contoso"
   ```

## Create and associate a new site

The final step is to create the site we want to associate with the hub. You can repeat these steps for as many sites as you want to join to the hub.

1. Provision the site by using the [New-PnPSite](https://pnp.github.io/powershell/cmdlets/New-PnPSite.html) cmdlet:
    
   ```powershell
     New-PnPSite -Type TeamSite -Title "Online advertising team" -Alias "online-advertising" -Description "For collaboration on online advertising resources"     
   ```
    
   The cmdlet returns the URL of the new site similar to the following:
    
   ```
    https://contoso.sharepoint.com/sites/online-advertising
   ```
    
2. Associate this site with the hub site by using the [Add-PnPHubSiteAssociation](https://pnp.github.io/powershell/cmdlets/Add-PnPHubSiteAssociation.html) cmdlet:
  
   ```powershell
    Add-PnPHubSiteAssociation 
     -Site https://contoso.sharepoint.com/sites/online-advertising 
     -HubSite https://contoso.sharepoint.com/sites/marketing 
   ```

## Confirm the hub site is working

To confirm, you can either:

- Run the [Get-PnPHubSite](https://pnp.github.io/powershell/cmdlets/Get-PnPHubSite.html) cmdlet.

- Sign in to SharePoint Online and view the hub site directly at `https://contoso.sharepoint.com/sites/marketing`. 

The hub site navigation appears at the top of the site. If you go to the `https://contoso.sharepoint.com/sites/online-advertising` site, it shows the same hub site navigation at the top.

## See also

- [SharePoint hub sites overview](hub-site-overview.md)
