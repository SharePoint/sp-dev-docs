---
title: SharePoint Online tenant properties
description: Manage and read tenant properties, which allow tenant administrators to add properties in the app catalog that can be read by various SharePoint Framework components.
ms.date: 02/02/2018
ms.prod: sharepoint
---

# SharePoint Online tenant properties

Tenant properties allow tenant administrators to add properties in the app catalog that can be read by various SharePoint Framework components. The tenant properties are managed by tenant administrators by using the [Microsoft SharePoint Online Management Shell](https://technet.microsoft.com/en-us/library/fp161372.aspx), which is a PowerShell module to manage your SharePoint Online subscription in Office 365.

## Manage tenant properties

Using the [Microsoft SharePoint Online Management Shell](https://www.microsoft.com/en-us/download/details.aspx?id=35588), tenant administrators can use PowerShell to add and remove tenant properties. 

The following PowerShell cmdlets are available to manage the tenant properties. Because tenant properties are stored in the tenant app catalog, you must provide the tenant app catalog site collection URL in the following cmdlets.

### Get-SPOStorageEntity

- **Applies to** Office 365, SharePoint Online

- **Syntax** Get-SPOStorageEntity [-Site] <AppCatalogSiteURL> [-Key] <String>

### Set-SPOStorageEntity

- **Applies to** Office 365, SharePoint Online

- **Syntax** Set-SPOStorageEntity [-Site] <AppCatalogSiteURL> [-Key] <String> [-Value] <String> [-Description] <String> [-Comments] <String>

### Remove-SPOStorageEntity

- **Applies to** Office 365, SharePoint Online

- **Syntax** Remove-SPOStorageEntity [-Site] <AppCatalogSiteURL> [-Key] <String>


## Read tenant properties

Developers can read tenant properties by using the SharePoint REST APIs and use them in SharePoint Framework components such as web parts and extensions.

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

## See also

- [Overview of the SharePoint Framework](sharepoint-framework-overview.md)