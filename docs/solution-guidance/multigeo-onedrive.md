---
title: Access OneDrive for Business in a Multi-Geo tenant
description: Accessing a user's OneDrive for Business site, also known as a personal site or my site, is a common scenario in custom applications.
ms.date: 11/18/2020
ms.localizationpriority: medium
---

# Access OneDrive for Business in a Multi-Geo tenant

Accessing a user's OneDrive for Business site, also known as a personal site or my site, is a common scenario in custom applications. This article describes how to work with OneDrive for Business sites in a Multi-Geo tenant.

You can use one of several APIs to access a OneDrive for Business site:

- Microsoft Graph API (preferred)
- SharePoint CSOM API
- SharePoint REST API

## Read OneDrive for Business files using Microsoft Graph

When you use Microsoft Graph to read a OneDrive for Business file, you don't have to know where a user's OneDrive site is located. When you request the drive, as shown in the following examples, you'll get the files you need.

```
GET https://graph.microsoft.com/v1.0/users/bert@contoso.onmicrosoft.com/drive/root/children

GET https://graph.microsoft.com/v1.0/users/me/drive/root/children
```

## Read OneDrive for Business files using CSOM and REST

Reading files by using CSOM is identical to reading files on other site collections; a OneDrive for Business site is a regular SharePoint site collection with a document library containing files. See the **See also** section for samples for using CSOM and REST to upload files.

## Get the location of a user's OneDrive for Business site using Microsoft Graph

The following examples show how to get the location of a OneDrive for Business site by using the Microsoft Graph API.

```
GET https://graph.microsoft.com/v1.0/users/admin@contoso.onmicrosoft.com/mySite

GET https://graph.microsoft.com/v1.0/me/mySite
```

#### Example response for a location of user's OneDrive for Business site using Microsoft Graph

```json
{
    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users('admin@contoso.onmicrosoft.com')/mySite",
    "value": "https://contoso-my.sharepoint.com/personal/admin_contoso_onmicrosoft_com/"
}
```

For more information, see the [MultiGeo.UserProfileUpdates](https://github.com/pnp/PnP/tree/master/Samples/MultiGeo.UserProfileUpdates) sample.

## Get the location of a user's OneDrive for Business site using CSOM and REST

The following example shows a REST-based query to get the location of a OneDrive for Business site.

```
GET https://contoso.sharepoint.com/_api/SP.UserProfiles.PeopleManager/GetPropertiesFor(accountName=@v)/PersonalUrl?%40v=%27i%3A0%23.f%7Cmembership%7Cbert%40contoso.onmicrosoft.com%27
```

#### Example response for a location of user's OneDrive for Business site using REST

```json
{
    "d":{
        "PersonalUrl":"https://contoso-my.sharepoint.com/personal/admin_contoso_onmicrosoft_com/"
        }
}
```

If you're using C#, you can use CSOM to get the location of a OneDrive for Business site.

```csharp
public string GetUserPersonalUrlCSOM(ClientContext ctx, string userPrincipalName)
{
  string result = null;

  PeopleManager peopleManager = new PeopleManager(ctx);
  var userProperties = peopleManager.GetPropertiesFor(userPrincipalName);
  this.clientContext.ExecuteQuery();
  result = userProperties.PersonalUrl;

  return result;
}
```

## See also

- [Working with files in Microsoft Graph](/graph/api/resources/onedrive)
- [Uploading files using REST](https://github.com/SharePoint/PnP/tree/master/Samples/Core.RestFileUpload)
- [File upload CSOM SharePoint Add-in](https://github.com/SharePoint/PnP/tree/master/Samples/Core.FileUpload)
- [Large file upload with CSOM](https://github.com/SharePoint/PnP/tree/master/Samples/Core.LargeFileUpload)
- [OneDrive and SharePoint Online Multi-Geo](multigeo-introduction.md)
