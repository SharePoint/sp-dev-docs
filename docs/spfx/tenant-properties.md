# SharePoint Online Tenant Properties

Tenant Properties allow tenant administrators to add properties in the app catalog that can be read by various SharePoint Framework components. The Tenant Properties are managed by tenant administrators using the [Microsoft SharePoint Online Management Shell](https://technet.microsoft.com/en-us/library/fp161372.aspx) which is a PowerShell module to manage your SharePoint Online subscription in the Office 365.

## Manage tenant properties

Using the Microsoft SharePoint Online Management Shell, tenant administrators can add and remove tenant properties using PowerShell. 

> Download the Microsoft SharePoint Online Management Shell [here](https://www.microsoft.com/en-us/download/details.aspx?id=35588)

The following PowerShell cmdlets are available to manage the tenant properties:

Since tenant properties are stored in the tenant app catalog, you will need to provide the tenant app catalog site collection URL in the cmdlets below.

### Get-SPOStorageEntity
Applies to: Office 365, SharePoint Online

Syntax
Get-SPOStorageEntity [-Site] <AppCatalogSiteURL> [-Key] <String>

### Set-SPOStorageEntity
Applies to: Office 365, SharePoint Online

Syntax
Set-SPOStorageEntity [-Site] <AppCatalogSiteURL> [-Key] <String> [-Value] <String> [-Description] <String> [-Comments] <String>

### Remove-SPOStorageEntity
Applies to: Office 365, SharePoint Online

Syntax
Remove-SPOStorageEntity [-Site] <AppCatalogSiteURL> [-Key] <String>

## Reading tenant properties

Developers can read tenant properties using the SharePoint REST APIs and use them in SharePoint Framework components such as web parts and extensions.

## HTTP request

### Get a tenant property

```text
GET _api/web/GetStorageEntity('key')
```

#### Example

```text
GET _api/web/GetStorageEntity('AnalyticsKey')
```

#### Request body

Do not supply a request body for this method.

#### Response

This returns the storage entity information for the given key.

```text
HTTP/1.1 200 OK
Content-Type: application/json
{
    "Comment":"Tenant property comment.",
    "Description":"Tenant property description",
    "Value":"Tenant property key value"
}
```
