---
title: Scoping access to SharePoint site designs
description: Set scope on SharePoint site designs to control who can view and access them.
ms.date: 12/14/2017
---

# Scoping access to site designs

> [!NOTE]
> Site designs and site scripts are currently in preview and are subject to change. They are not currently supported for use in production environments.

Site designs are available to everyone by default. But you can scope site designs so that they are only available to specific users or groups. For example, the accounting apartment may have specific site designs they use, but it may not make sense to share those site designs with everyone. This article will explain how you can control which users and groups can see specific site designs.

## Granting rights to a site design

When a site design is first created it is available to everyone. You can grant **View** rights to the site design. Once rights are granted, only the users or groups (principals) specified have access. You can continue granting rights to more principals with subsequent API calls.

## Granting rights to security groups

Here's an example of how to scope an existing site design so that only the mail-enabled security group **accounting** can view and use the site design.

```powershell
Grant-SPOSiteDesignRights `
  -Identity db752673-18fd-44db-865a-aa3e0b28698e `
  -Principals ("accounting@contoso.sharepoint.com") `
  -Rights View
```

You may want to create a new site design and grant rights at the same time as shown in the next example.

```powershell
Add-SPOSiteDesign `
  -Title "Scoped site design" `
  -Description "Scoped to only the accounting email security group" `
  -SiteScripts 256494cb-bd31-4f60-9eba-285308d7a863 `
  -WebTemplate 64 `
  -PreviewImageUrl "https://contoso.sharepoint.com/SiteAssets/scope-image.png" `
| Grant-SPOSiteDesignRights `
  -Principals ("accounting@contoso.com") `
  -Rights View
```

## Granting rights to users

Here's an example of how to grant view rights on a site design to Nestor (a user at the fictional Contoso site).

```powershell
PS C:\> Grant-SPOSiteDesignRights `
         -Identity 44252d09-62c4-4913-9eb0-a2a8b8d7f863 `
         -Principals "nestorw@contoso.onmicrosoft.com" `
         -Rights View
```

## Viewing rights assigned to a site design

To view rights, use the **Get-SPOSiteDesignRights** cmdlet. The following example shows how to use this cmdlet and a response in the case where only Nestor has view rights.

```powershell
PS C:\> Get-SPOSiteDesignRights 607aed52-6d61-490a-b692-c0f58a6981a1
```

```
DisplayName  PrincipalName                                      Rights
-----------  -------------                                      ------
Nestor Wilke i:0#.f|membership|nestorw@contoso.onmicrosoft.com   View
```

## Revoking rights from a site design

You can revoke rights for any principal. If you revoke view rights for all principles, then the site design will again be available to everyone.

Here's an example of revoking access for the accounting mail-enabled security group and Nestor.

```powershell
Revoke-SPOSiteDesignRights `
  -Identity db752673-18fd-44db-865a-aa3e0b28698e `
  -Principals ("accounting@contoso.sharepoint.com","nestorw@spdfcontosodemo2.onmicrosoft.com") `
```
