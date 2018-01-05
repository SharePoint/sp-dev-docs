---
title: PowerShell cmdlets for SharePoint site designs and site scripts
description: Use PowerShell cmdlets to create, retrieve, and remove site designs and site scripts.
ms.date: 12/14/2017
---

# PowerShell cmdlets for SharePoint site designs and site scripts

> [!NOTE]
> Site designs and site scripts are currently in preview and are subject to change. They are not currently supported for use in production environments.

Use PowerShell cmdlets to create, retrieve, and remove site designs and site scripts.

## Getting started

To run the PowerShell cmdlets, you'll need to do the following:

1. Download and install the [SharePoint Online Management Shell](https://www.microsoft.com/en-us/download/details.aspx?id=35588). If you already have a previous version of the shell installed, uninstall it first and then install the latest version.
1. Follow the instructions at [Connect to SharePoint Online PowerShell](https://technet.microsoft.com/en-us/library/fp161372.aspx) to connect to your SharePoint tenant.

To verify your setup, try using the **Get-SPOSiteScript** cmdlet to read the current list of site scripts. If the cmdlet runs and returns with no errors, you're ready to proceed.

## Site design cmdlets

The following cmdlets are available for managing site designs and site scripts from PowerShell:

- **Add-SPOSiteDesign**
- **Add-SPOSiteScript**
- **Get-SPOSiteDesign**
- **Get-SPOSiteDesignRights**
- **Get-SPOSiteScript**
- **Grant-SPOSiteDesignRights**
- **Remove-SPOSiteDesign**
- **Remove-SPOSiteScript**
- **Revoke-SPOSiteDesignRights**

<!--
- **Set-SPOSiteDesign**
- **Set-SPOSiteScript**
-->

<!-- TBD document pipe bind parameters -->

## Add-SPOSiteDesign

Creates a new site design available to users when they create a new site from the SharePoint home page.

```powershell
Add-SPOSiteDesign
  -Title <string>
  -WebTemplate <string>
  -SiteScripts <SPOSiteScriptPipeBind[]>
  [-Description <string>]
  [-PreviewImageUrl <string>]
  [-PreviewImageAltText <string>]
  [-IsDefault]
  [<CommonParameters>]
```

### Parameters

|Parameter  | Description  |
|-----------|--------------|
|-Title                 | The display name of the site design. |
|-WebTemplate           | Identifies which base template to add the design to. Use the value **64** for the Team site template, and the value **68** for the Communication site template. |
|-SiteScripts           | An array of one or more site scripts. Each is identified by an ID. The scripts will run in the order listed. |
|[-Description]         | The display description of site design. |
|[-PreviewImageUrl]     | The URL of a preview image. If none is specified SharePoint will use a generic image. |
|[-PreviewImageAltText] | The alt text description of the image for accessibility. |
|[-IsDefault]           | A switch that if provided, applies the site design to the default site template. For more information see [Customize a default site design](customize-default-site-design.md) |

Here's an example of creating a new site design.

```powershell
C:\> Add-SPOSiteDesign `
  -Title "Contoso customer tracking" `
  -WebTemplate "64" `
  -SiteScripts "<ID>" `
  -Description "Tracks key customer data in a list" `
  -PreviewImageUrl "https://contoso.sharepoint.com/SiteAssets/site-preview.png" `
  -PreviewImageAltText "site preview"
```

## **Add-SPOSiteScript**

Uploads a new site script for use either directly or in a site design.

```powershell
Add-SPOSiteScript
  -Title <string>
  -Content <string>
  [-Description <string>]
  [<CommonParameters>]
```

### Parameters

|Parameter     | Description  |
|--------------|--------------|
| -Title       | The display name of the site design. |
| -Content     | JSON value that describes the script. For more information, see [JSON reference](site-design-json-schema.md).|
| -Description | A description of the script. |

Here's an example of adding a new site from the following script in a file.

```json
{
  "verb": "setSiteLogo",
  "url": "https://contoso.sharepoint.com/SiteAssets/company-logo.png"
},
```

```powershell
C:\> Get-Content 'c:\scripts\site-script.json' -Raw | Add-SPOSiteScript -Title "Customer logo" -Description "Applies customer logo for customer sites"
```

## Get-SPOSiteDesign

Gets details about site designs that are on the SharePoint tenant. You can specify an ID of a specific site design to retrieve. If there are no parameters listed, then details about all site designs are listed.

```powershell
Get-SPOSiteDesign
  [[-Identity] <SPOSiteDesignPipeBind>]
  [<CommonParameters>]
```

### Parameters

|Parameter     | Description  |
|--------------|--------------|
| [-Identity]  | The ID of the site design to retrieve. |

Here's an example and sample response of getting site design details.

```powershell
PS C:\> Get-SPOSiteDesign 44252d09-62c4-4913-9eb0-a2a8b8d7f863

Id                  : 44252d09-62c4-4913-9eb0-a2a8b8d7f863
Title               : Contoso - Team Project
WebTemplate         : 64
SiteScriptIds       : {1306913c-8463-42ca-bd63-efad0fcdbba4}
Description         : Use this design to apply Contoso theme and create
                      custom lists and add to nav
```

## Get-SPOSiteDesignRights

Displays a list of principals and their rights for usage of the site design. This can be used to determine the scope that your site design has with users on the tenant.

```powershell
Get-SPOSiteDesignRights
  [-Identity] <SPOSiteDesignPipeBind>
  [<CommonParameters>]
```

### Parameters

|Parameter     | Description  |
|--------------|--------------|
| [-Identity]  | The ID of the site design to get scoping information. |

Here's an example of getting the rights for a site design.

```powershell
PS C:\> Get-SPOSiteDesignRights 607aed52-6d61-490a-b692-c0f58a6981a1

DisplayName  PrincipalName                                      Rights
-----------  -------------                                      ------
Nestor Wilke i:0#.f|membership|nestorw@contoso.onmicrosoft.com   View
```

## Get-SPOSiteScript

Displays information about existing site scripts. When no parameter is provided, this cmdlet returns the **Id**, **Title**, **Description**, and **Version** of each site script. When a site script ID is provided, this cmdlet also returns the **Content**, which is the JSON of the site script.

```powershell
Get-SPOSiteScript
  [[-Identity] <SPOSiteScriptPipeBind>]
  [<CommonParameters>]
```

### Parameters

|Parameter     | Description  |
|--------------|--------------|
| [-Identity]  | The ID of the site script to get information about. |

Here's an example that shows how to get script information for a specific script ID.

```powershell
PS C:\scripts> Get-SPOSiteScript 07702c07-0485-426f-b710-4704241caad9

Id          : 07702c07-0485-426f-b710-4704241caad9
Title       : Contoso theme
Description :
Content     : {
                  "$schema": "schema.json",
                      "actions": [
                          {
                             "verb": "applyTheme",
                             "themeName": "Custom Cyan"
                          }
                      ],
                          "bindata": { },
                  "version": 1
              }
Version     : 1
```

## Grant-SPOSiteDesignRights

Used to apply permissions to set of users or security group, effectively scoping visibility of site design in UX. They start off public. But once you set permissions, only those groups or users with permissions can access the site design.

```powershell
Grant-SPOSiteDesignRights
  [-Identity] <SPOSiteDesignPipeBind>
  -Principals <string[]>
  -Rights {View}
  [<CommonParameters>]
```

### Parameters

|Parameter     | Description  |
|--------------|--------------|
| [-Identity]  | The ID of the site design to get scoping information. |
| -Principals  | One or more principles to add permissions for. |
| -Rights      | Always set to the value **View**. Any user or group with view permissions can view and use the site design. |

Here's an example of how to grant view rights on a site design to Nestor (a user at the fictional Contoso site).

```powershell
PS C:\> Grant-SPOSiteDesignRights `
         -Identity 44252d09-62c4-4913-9eb0-a2a8b8d7f863 `
         -Principals "nestorw@contoso.onmicrosoft.com" `
         -Rights View
```

## Remove-SPOSiteDesign

Removes a site design. It will no longer appear in the UI for creating a new site.

```powershell
  Remove-SPOSiteDesign
  [-Identity] <SPOSiteDesignPipeBind>
  [<CommonParameters>]
```

### Parameters

|Parameter     | Description  |
|--------------|--------------|
| [-Identity]  | The ID of the site design to remove. |

Here's an example that shows how to remove a site design.

```powershell

```

## Remove-SPOSiteScript

Removes a site script. <!-- TBD how is dependency problem handled so you don't delete a script that a design depends on. this currently creates an error when running the design.) -->

```powershell
Remove-SPOSiteScript
  [-Identity] <SPOSiteScriptPipeBind>
  [<CommonParameters>]
```

### Parameters

|Parameter     | Description  |
|--------------|--------------|
| [-Identity]  | The ID of the site script to remove. |

```powershell
C:\> Remove-SPOSiteDesign 21209d88-38de-4844-9823-f1f600a1179a
```

## Revoke-SPOSiteDesignRights

Revokes rights for specified principals from a site design.

```powershell
Revoke-SPOSiteDesignRights
  [-Identity] <SPOSiteDesignPipeBind>
  -Principals <string[]>
  [<CommonParameters>]
```

### Parameters

|Parameter     | Description  |
|--------------|--------------|
| [-Identity]  | The ID of the site design from which to revoke rights. |
| -Principals  | One or more principals to revoke rights on the specified site design. |

Here's an example that shows how to revoke rights to a site design for Nestor.

```powershell
PS C:\> Revoke-SPOSiteDesignRights 44252d09-62c4-4913-9eb0-a2a8b8d7f863 `
   -Principals "nestorw@contoso.onmicrosoft.com"
```

<!--
## Set-SPOSiteDesign (TBD)

## Set-SPOSiteScript (TBD)
-->

## See also

- [JSON schema reference](site-design-json-schema.md)
- [REST API](site-design-rest-api.md)Apply a scope to your site design](site-design-scoping.md)
