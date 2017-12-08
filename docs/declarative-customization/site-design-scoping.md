# Site design scoping

Site designs are available to everyone by default. But you can scope site designs so that they are only available to specific users or groups. For example, the accounting apartment may have specific site designs they use, but it may not make sense to share those site designs with everyone. This article will explain how you can control which users and groups can see specific site designs.

## Granting rights to a site design

When a site design is first created it is available to everyone. You can grant **View** rights to the site design. Once rights are granted, only the users or groups (principals) specified have access. You can continue granting rights to more principals with subsequent API calls. The only way to restore access to everyone is to revoke all rights (shown later).

## Granting rights to security groups

Here's an example of how to scope an existing site design so that only the mail-enabled security group sitedesignscope can view and use the site design.

```powershell
Grant-SPOSiteDesignRights `
  -Identity db752673-18fd-44db-865a-aa3e0b28698e `
  -Principals ("sitedesignscope@contoso.com") `
  -Rights View
```

With PowerShell, you can also connect multiple commands. For example, you can create a new site design and scope it at the same time.

```powershell
Add-SPOSiteDesign `
  -Title "Scoped site design" `
  -Description "Scoped to only the sitedesignscope SG" `
  -SiteScripts 256494cb-bd31-4f60-9eba-285308d7a863 `
  -WebTemplate 64 `
  -PreviewImageUrl "https://contoso.com/SiteAssets/scope-image.png" `
| Grant-SPOSiteDesignRights `
  -Principals ("sitedesignscope@contoso.com") `
  -Rights View
```

## Granting rights to users

Here's an example of how to scope an existing site design so that only Nestor (a user at the fictional Contoso site) can view and use the site design.

```powershell
Grant-SPOSiteDesignRights `
  -Identity 44252d09-62c4-4913-9eb0-a2a8b8d7f863 `
  -Principals nestorw@contoso.com `
  -Rights View
```

## Granting rights to groups

(tbd need more info on groups)


## Viewing rights assigned to a site design


## Revoking rights from a site design

You can revoke rights for any principal. If you revoke all rights, then the site design will again be available to everyone.

Here's an example of revoking access for the sitedesignscope mail-enabled security group.

```powershell
Revoke-SPOSiteDesignRights `
  -Identity db752673-18fd-44db-865a-aa3e0b28698e `
  -Principals ("sitedesignscope@contoso.com") `
```

(TBD need to show how to use an array of principals)