---
title: Select audiences for SharePoint site templates
description: Determine which audiences can access certain site templates.
ms.date: 06/13/2022
ms.localizationpriority: high
---

# Scoping access to site templates

Site templates are available to everyone by default. You can also scope site templates so that they are only available to specific users or groups. For example, the accounting department may have specific site designs they use, but it may not make sense to share those site templates with everyone. 

This article explains how you can control which users and groups can see specific site templates.

> [!NOTE]
> Users with the SharePoint Admin role assigned will see all site templates, regardless of scoping.

## Grant rights to a site template

When a site template is first created, it is available to everyone. You can grant **View** rights to the site template. After rights are granted, only the users or groups (principals) specified have access. You can continue granting rights to more principals with subsequent API calls.

> [!NOTE]
> Scoping is currently only available for mail-enabled security groups and users. We are planning to provide support for Microsoft 365 groups in the future.

## Grant rights to security groups

The following example shows how to scope an existing site template so that only the mail-enabled security group **accounting** can view and use the site template.

```powershell
Grant-SPOSiteDesignRights `
  -Identity db752673-18fd-44db-865a-aa3e0b28698e `
  -Principals ("accounting@contoso.sharepoint.com") `
  -Rights View
```

<br/>

You might want to create a new site template and grant rights at the same time, as shown in the next example.

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

## Grant rights to users

The following example shows how to grant view rights on a site template to Nestor (a user at the fictional Contoso site).

```powershell
PS C:\> Grant-SPOSiteDesignRights `
         -Identity 44252d09-62c4-4913-9eb0-a2a8b8d7f863 `
         -Principals "nestorw@contoso.onmicrosoft.com" `
         -Rights View
```

## View rights assigned to a site template

To view rights, use the **Get-SPOSiteDesignRights** cmdlet. The following example shows how to use this cmdlet and a response in the case where only Nestor has view rights.

```powershell
PS C:\> Get-SPOSiteDesignRights 607aed52-6d61-490a-b692-c0f58a6981a1
```

```
DisplayName  PrincipalName                                      Rights
-----------  -------------                                      ------
Nestor Wilke i:0#.f|membership|nestorw@contoso.onmicrosoft.com   View
```

## Revoke rights from a site template

You can revoke rights for any principal. If you revoke view rights for all principles, the site template will again be available to everyone.

The following example revokes access for the accounting mail-enabled security group and Nestor.

```powershell
Revoke-SPOSiteDesignRights `
  -Identity db752673-18fd-44db-865a-aa3e0b28698e `
  -Principals ("accounting@contoso.sharepoint.com","nestorw@contoso.onmicrosoft.com") `
```

## See also

- [SharePoint site design and site script overview](site-design-overview.md)
