# PowerShell cmdlets for SharePoint site designs and site scripts

SharePoint tenant administrators can use PowerShell cmdlets to create, retrieve, and remove site themes. Developers can also use the SharePoint [REST API](sharepoint-site-theming-rest-api.md) to handle theme management tasks.

For information about how themes are defined and stored, see the [JSON schema reference](site-design-json-schema.md).

## Getting started

To run the PowerShell cmdlets for theme management, you'll need to do the following:

1. (TBD: is this correct download link?) Download and install the [SharePoint Online Management Shell](https://www.microsoft.com/en-us/download/details.aspx?id=35588). If you already have a previous version of the shell installed, uninstall it first and then install the latest version.
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
- **Update-SPOSiteDesign (TBD)**
- **Update-SPOSiteScript (TBD)**

## Identity for site designs and site scripts

In many commands you'll see a parameter of type **SPOSiteDesignPipeBind** or **SPOSiteScriptPipeBind**. This parameter is a GUID. It uniquely identifies the site design or site script. You'll see it used with commands like **Get-SPOSiteDesign**, or **Remove-SPOSiteDesign**.

## Add-SPOSiteDesign

Creates a new site design for display in the self-service site creation flow.  

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
|-SiteScripts           | An array of one or more site scripts. Each is identified by an ID. |
|[-Description]         | The display description of site design. |
|[-PreviewImageUrl]     | The URL of a preview image. If none is specified SharePoint will use a generic image. (TBD where should you put the image on SharePoint) |
|[-PreviewImageAltText] | An alternate text description of the image for accessibility. |
|[-IsDefault]           | **$true** if the site design is to be applied to the default template; otherwise **$false**. |

Here's an example of creating a new site design.

```powershell
C:\> Add-SPOSiteDesign `
  -Title "Contoso customer tracking" `
  -WebTemplate "64" `
  -SiteScripts "<ID>" `
  -Description "Tracks key customer data in a list" `
  -PreviewImageUrl "https://spdfcontosodemo2.sharepoint.com/sites/davechhalloween/Shared%20Documents/Forms/AllItems.aspx?id=%
2Fsites%2Fdavechhalloween%2FShared%20Documents%2Fsite-preview%2Epng" `
  -PreviewImageAltText "site preview" `
  -IsDefault $false
```

## **Add-SPOSiteScript**

Uploads a new site script to the gallery for use either directly (TBD – via script or app catalog) or in a site design. This command will support inline script; file reference TBD. 

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
| -Content     | JSON or CSV value that describes the script. |
| -Description | A description of the script. |

Here's an example of creating a new site script.

```powershell
C:\> $site_script = @'
{
    "$schema": "schema.json",
        "actions": [
            {
                "verb": "setSiteLogo",
                "url": "/Customer Event Collateral/logo.jpg"
            }
        ],
            "bindata": { },
    "version": 1
}
'@
C:\> Add-SPOSiteScript -Title "Customer logo" -Content $site_script -Description "Applies customer logo for customer sites"
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

## Get-SPOSiteScript

## Grant-SPOSiteDesignRights

sed to apply permissions to set of users or security group, effectively scoping visibility of site design in UX. They start off public. But once you set permissions, only those groups or users with permissions can access the site design.

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

## Remove-SPOSiteScript

Removes a site script. (TBD handling dependency on site design)

```powershell
Remove-SPOSiteScript
  [-Identity] <SPOSiteScriptPipeBind>
  [<CommonParameters>]
```

### Parameters

|Parameter     | Description  |
|--------------|--------------|
| [-Identity]  | The ID of the site script to remove. |

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

## Update-SPOSiteDesign (TBD)

## Update-SPOSiteScript (TBD)


