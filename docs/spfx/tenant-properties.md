# SharePoint Framework Tenant Properties

>**Note:** Tenant Propeties is currently in preview in First Release and is subject to change. They are not currently supported for use in production environments.

Tenant properties allows tenant administrators to add properties in the app catalog that can be read by various SharePoint Framework components. The tenant properties are managed by tenant administrators using the [Microsoft SharePoint Online Management Shell](https://technet.microsoft.com/en-us/library/fp161372.aspx) which is a PowerShell module to manage your SharePoint Online subscription in the Office 365.

## Manage tenant properties

Using the Microsoft SharePoint Online Management Shell, tenant administrators can add and remove tenant properties in PowerShell. 

> Download the Microsoft SharePoint Online Management Shell [here](https://www.microsoft.com/en-us/download/details.aspx?id=35588)

The following PowerShell commands are available to manage the tenant properties:

### Get-SPOStorageEntity
Applies to: Office 365, SharePoint Online

Syntax
Get-SPOStorageEntity [-Site] &lt;AppCatalogSiteURL&gt; [-Key] &lt;String&gt;

### Set-SPOStorageEntity
Applies to: Office 365, SharePoint Online

Syntax
Get-SPOStorageEntity [-Site] &lt;AppCatalogSiteURL&gt; [-Key] &lt;String&gt; [-Value] &lt;String&gt; [-Description] &lt;String&gt; [-Comments] &lt;String&gt;

## Reading tenant properties

Developers can read tenant properties using the SharePoint REST APIs and use them in SharePoint Framework components such as web parts and extensions.

## HTTP request

### Get a tenant property

```
GET _api/web/GetStorageEntity('key')
```

#### Example

```http
GET _api/web/GetStorageEntity('AnalyticsKey')
```
#### Request body

Do not supply a request body for this method.

#### Response

This returns the storage entity information for the given key.

```http
HTTP/1.1 200 OK
Content-Type: application/json
{
    "Comment":"Tenant property comment.",
    "Description":"Tenant property description",
    "Value":"Tenant property key value"
}
```
