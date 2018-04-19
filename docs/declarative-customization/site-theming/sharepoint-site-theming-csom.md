# SharePoint site theming: CSOM development

The SharePoint client-side object model (CSOM) provides access to the SharePoint object model from code that is running locally or on a different server than SharePoint.    

## Prerequisites
Before you get started, make sure that you're familiar with the following:
- [Using the Client Object Model](https://msdn.microsoft.com/en-us/library/ff798388.aspx)
- [Common Programming Tasks in the Managed Client Object Model](https://msdn.microsoft.com/en-us/library/ee537013.aspx)

You will also need to reference the [Microsoft.SharePointOnline.CSOM](https://www.nuget.org/packages/Microsoft.SharePointOnline.CSOM/) NuGet package (version 16.1.6906.1200 or later).

## CSOM code example

The following example shows how to create a __Microsoft.Online.SharePoint.TenantAdministration.Tenant__ object and call the __GetAllTenantThemes__ method to return a list of themes. 

> [!NOTE]
> * The URL used to create the context object includes the _-admin_ suffix, because **TenantAdministration** methods work with the admin site.
> * Create a __Tenant__ instance with the [Tenant constructor](https://msdn.microsoft.com/en-us/library/dn174852.aspx), and then call the methods on that instance.
> * You can use the same approach to call other theme management methods.

```csharp
using System.Security;
using Microsoft.SharePoint.Client;
using Microsoft.Online.SharePoint.TenantAdministration;
using Microsoft.Online.SharePoint.TenantManagement;

...

ClientContext ctx = new ClientContext("https://mysite-admin.sharepoint.com/");
var pwd = "mypassword";
var passWord = new SecureString();
foreach (char c in pwd.ToCharArray()) passWord.AppendChar(c);
ctx.Credentials = new SharePointOnlineCredentials("admin@mydomain.com", passWord);
Tenant tenant = new Tenant(ctx);
ClientObjectList<ThemeProperties> themes = tenant.GetAllTenantThemes();
```

## Theme definition example

For methods that take a theme argument, the following code defines an __SPOTheme__ class that you can use to create custom themes.

```csharp
/// <summary> 
/// Properties defining a theme in SharePoint Online. 
/// </summary> 
public class SPOTheme 
{ 
    /// <summary> 
    /// Specifies the name of the theme. This must uniquely identify the theme. 
    /// </summary> 
    public string Name 
    { 
        get; private set; 
    } 
    /// <summary> 
    /// Specifies the palette of colors in the theme, as a dictionary of theme slot values. 
    /// </summary> 
    public IDictionary<String, String> Palette 
    { 
        get; private set; 
    } 
    /// <summary> 
    /// Specifies whether the theme is inverted, with a dark background and a light foreground. 
    /// </summary> 
    public bool IsInverted 
    { 
        get; private set; 
    } 
} 
```

## Applying a theme

There's currently no supported API to programmatically apply a theme to specific site.

## Methods/properties of the Microsoft.Online.SharePoint.TenantAdministration.Tenant class

Use the following methods to customize the set of available themes for a SharePoint tenant administration site. You can add a new custom theme, update an existing theme, or delete a theme, and you can retrieve a specific theme or all themes. You can also hide or restore the default themes that come with SharePoint.

### AddTenantTheme public method
Add a theme to the tenant.

__Namespace:__ Microsoft.Online.SharePoint.TenantAdministration.Tenant<br/>
__Parameters:__ string name, string themeJson<br/>
__Return type:__ ClientResult<bool>

### DeleteTenantTheme public method
Delete a theme from the tenant.

__Namespace:__ Microsoft.Online.SharePoint.TenantAdministration.Tenant<br/>
__Parameters:__ string name<br/>
__Return type:__ void

### GetAllTenantThemes public method
Retrieve all the themes that are currently available in the tenant, including any custom themes that have been added. Default themes are only included if the __HideDefaultThemes__ property is __false__ (the default value).

__Namespace:__ Microsoft.Online.SharePoint.TenantAdministration.Tenant<br/>
__Parameters:__ none<br/>
__Return type:__ ClientObjectList<ThemeProperties>

### GetTenantTheme public method
Retrieve a theme by name.

__Namespace:__ Microsoft.Online.SharePoint.TenantAdministration.Tenant<br/>
__Parameters:__ string name<br/>
__Return type:__ ThemeProperties

### HideDefaultThemes public property
This property indicates whether the default themes are available in the theme picker UI. The default setting is __false__ (the default themes are available), but you might want to set this property to __true__ after you define custom themes, to allow only specific themes to be used.

__Namespace:__ Microsoft.Online.SharePoint.TenantAdministration.Tenant<br/>
__Type:__ Boolean

### UpdateTenantTheme public method
Update the settings for an existing theme.

__Namespace:__ Microsoft.Online.SharePoint.TenantAdministration.Tenant<br/>
__Parameters:__ string name, string themeJson<br/>
__Return type:__ ClientResult<bool>

## Methods of the Microsoft.Online.SharePoint.TenantManagement.Tenant class

These are alternative APIs to manage your themes in tenant level.

### AddTenantTheme public method
Add a theme to the tenant.

__Namespace:__ Microsoft.Online.SharePoint.TenantManagement.Tenant<br/>
__Parameters:__ string name, string themeJson<br/>
__Return type:__ ClientResult<bool>

### GetAllTenantThemes public method
Retrieve all the themes that are currently available in the tenant, including any custom themes that have been added. Default themes are only included if the __HideDefaultThemes__ property is __false__ (the default value).

__Namespace:__ Microsoft.Online.SharePoint.TenantManagement.Tenant<br/>
__Parameters:__ none<br/>
__Return type:__ ClientObjectList<ThemeProperties>

### GetHideDefaultThemes public method
Read the current setting for whether to hide default themes in the theme picker UI.

__Namespace:__ Microsoft.Online.SharePoint.TenantManagement.Tenant<br/>
__Parameters:__ none<br/>
__Return type:__ ClientResult<bool>

### GetTenantTheme public method
Retrieve a theme by name.

__Namespace:__ Microsoft.Online.SharePoint.TenantManagement.Tenant<br/>
__Parameters:__ string name<br/>
__Return type:__ ThemeProperties

### SetHideDefaultThemes public method
Specify whether to hide default themes in the theme picker UI.

__Namespace:__ Microsoft.Online.SharePoint.TenantManagement.Tenant<br/>
__Parameters:__ Boolean<br/>
__Return type:__ void

### UpdateTenantTheme public method
Update the settings for an existing theme.

__Namespace:__ Microsoft.Online.SharePoint.TenantManagement.Tenant<br/>
__Parameters:__ string name, string themeJson<br/>
__Return type:__ ClientResult<bool>

## See also

* [SharePoint site theming overview](sharepoint-site-theming-overview.md)
* [SharePoint site theming: JSON schema](sharepoint-site-theming-json-schema.md)
* [SharePoint site theming: PowerShell cmdlets](sharepoint-site-theming-powershell.md)
* [SharePoint site theming: REST API](sharepoint-site-theming-rest-api.md)
* [Using the Client Object Model](https://msdn.microsoft.com/en-us/library/ff798388.aspx)
* [Common Programming Tasks in the Managed Client Object Model](https://msdn.microsoft.com/en-us/library/ee537013.aspx)
