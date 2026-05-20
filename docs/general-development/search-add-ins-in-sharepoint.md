---
title: Search add-ins in SharePoint
description: Learn about search SharePoint Add-ins and how you can create your own search add-ins. The add-ins you create can be added to the SharePoint add-ins catalog so that they can be used in both on-premises deployment and Office 365. Search add-ins only work with data that is stored in the search index and not with the original source documents.
ms.date: 04/24/2017
ms.assetid: 21682e45-dd78-4f3c-8f1e-cdd48de3bde2
ms.localizationpriority: medium
---
# Search add-ins in SharePoint

> [!IMPORTANT]
> The SharePoint Add-in model is deprecated for SharePoint Online and is no longer recommended for new development.
> Microsoft recommends using SharePoint Framework (SPFx) and Microsoft Graph APIs for modern SharePoint extensibility solutions.
>
> Existing SharePoint Add-ins continue to be supported in SharePoint Server environments.

Learn about search SharePoint Add-ins and how you can create your own search add-ins. The add-ins you create can be added to the SharePoint add-ins catalog so that they can be used in both on-premises deployment and Office 365. Search add-ins only work with data that is stored in the search index and not with the original source documents.

SharePoint Add-ins are self-contained pieces of functionality that extend the capabilities of a SharePoint website. These add-ins solve specific business and end-user needs by integrating the best of the web and SharePoint. An add-in can contain various SharePoint elements like Lists, Remote Event Receivers, Content Types, Workflows, Workflow Custom Activities, Site Columns, Modules, Menu Item Custom Actions, Client web parts, and Search Configurations. For more information, see [SharePoint Add-ins](../sp-add-ins/sharepoint-add-ins.md).

A search add-in is a SharePoint Add-in that uses search functionality. In a search add-in, you can use the SharePoint Search API to locate content. Depending on the type of permissions set up in your [add-in manifest](../sp-add-ins/explore-the-app-manifest-structure-and-the-package-of-a-sharepoint-add-in.md), you can search either inside or outside the contents of the add-in. In addition, you can also use a search add-in to distribute search configurations from one SharePoint installation to another.
The core design of a search add-in depends on the deployment method that you choose. The following section summarizes the available options and their benefits. For more information, see [Choose patterns for developing and hosting your SharePoint Add-in](../sp-add-ins/choose-patterns-for-developing-and-hosting-your-sharepoint-add-in.md)

## Deploy your search add-ins

There are two ways to deploy your search add-in:

1. SharePoint hosted - On-premises deployment. The search add-in is hosted inside the corporate network on the company's servers. The company's administrators manage the add-in. This scenario offers flexibility in deployment and support because the hardware and software is maintained locally by the administrators.
1. Provider hosted - Any web server hosting. The search add-in is hosted by any provider, outside of the customer's SharePoint server.

## Search add-in development environment

> [!NOTE]
> SharePoint Add-ins are a legacy development model. For new development, use SharePoint Framework (SPFx).

To create a search add-in, use following environment:

- Microsoft Visual Studio Code

With Visual Studio Code and later, you can publish your search add-ins to both on-premises or in Office 365. For more information about the development environments and how to use them to create search add-ins, see [Set up a general development environment for SharePoint](set-up-a-general-development-environment-for-sharepoint.md).

## APIs for search add-ins

You can use the wide range of search-related APIs that SharePoint offers for search add-ins. The following table lists these APIs and the location of their class libraries.

**SharePoint APIs for Search add-ins**

> [!NOTE]
> Silverlight-based APIs are deprecated and no longer supported.

|**API name**|**Class library**|
|:-----|:-----|
|.NET client object model (CSOM) |Microsoft.SharePoint.Client.Search.dll |
|Silverlight CSOM |Microsoft.SharePoint.Client.Search.Silverlight.dll |
|ECMAScript (JavaScript, JScript) object model (JSOM) |SP.search.js |
|Search REST API |http://server/_api/search/query |

### Code examples

Here are some code examples using the different APIs. Each code example sends a simple Search query that contains the keyword "SharePoint" to the Search service application (SSA).

**Client-side Object Model (CSOM)**

```csharp
using (ClientContext clientContext = new ClientContext("http://localhost"))
{
  KeywordQuery keywordQuery = new KeywordQuery(clientContext);
  keywordQuery.QueryText = "*";
  SearchExecutor searchExecutor = new SearchExecutor(clientContext);
  ClientResult<ResultTableCollection> results =
    searchExecutor.ExecuteQuery(keywordQuery);
  clientContext.ExecuteQuery();
}
```

**JavaScript Object Model (JSOM)**

```javascript
var keywordQuery = new
Microsoft.SharePoint.Client.Search.Query.KeywordQuery(context);
keywordQuery.set_queryText('SharePoint');
var searchExecutor = new Microsoft.SharePoint.Client.Search.Query.SearchExecutor(context);
results = searchExecutor.executeQuery(keywordQuery);
context.executeQueryAsync(onQuerySuccess, onQueryFail);
```

**REST**

HTTP GET request

```HTML
http://mylocalhost/_api/search/query?querytext='SharePoint'
```

HTTP POST request

```HTML
{
'__metadata' : {'type' : 'Microsoft.Office.Server.Search.REST.SearchRequest'},
'Querytext' : 'SharePoint'
}
```

## Search add-in permissions

Search add-ins send query requests to the Search service application (SSA), and the add-ins require different types of permissions to function correctly. You can configure these permissions via the add-in manifest file, which is a part of each SharePoint add-in. You can modify the add-in manifest file directly with a text editor, or you can modify it with Visual Studio or Napa, as shown in the following figures.

**Figure 1: Setting up permissions for search add-ins in Visual Studio 2015**

![Search app permission configuration with VS](../images/SP15_search_apps_permission_Visual_Studio.png)

**Figure 2: Setting up permissions for search add-ins in "Napa" Office 365 Development Tools**

![Search app permission configuration through Napa](../images/SP15_search_app_permission_Napa.gif)

A SharePoint Add-in has its own identity and is associated with a security principal, called an add-in principal. Like users and groups, an add-in principal has certain permissions and rights. The add-in principal has full control rights to the add-in web, so it only needs to request permissions to SharePoint resources in the host web or other locations outside the add-in web, such as site collections. Unlike other SharePoint Add-ins, a search add-in requires only user-level permissions, known as **QueryAsUserIgnoreAppPrincipal**. This permission lets you query the search add-in based on the user's permissions. This means that search results will be returned based on the user's ACLs.

### Request permissions in the add-in manifest file

The add-in manifest file is in XML format and can be edited directly. To get permissions, you write a request, as shown in the following example:

```XML
<AppPermissionRequests>
  <AppPermissionRequest Scope="http://sharepoint/search" Right="QueryAsUserIgnoreAppPrincipal" />
</AppPermissionRequests>
```
## See also

- [SharePoint Add-ins](../sp-add-ins/sharepoint-add-ins.md)
- [Choose patterns for developing and hosting your SharePoint Add-in](../sp-add-ins/choose-patterns-for-developing-and-hosting-your-sharepoint-add-in.md)
- [Add-in permissions in SharePoint](../sp-add-ins/add-in-permissions-in-sharepoint.md)
- [Add-in authorization policy types in SharePoint](../sp-add-ins/add-in-authorization-policy-types-in-sharepoint.md)
- [Important aspects of the SharePoint Add-in architecture and development landscape](../sp-add-ins/important-aspects-of-the-sharepoint-add-in-architecture-and-development-landscap.md)
- [Explore the app manifest structure and the package of a SharePoint Add-in](../sp-add-ins/explore-the-app-manifest-structure-and-the-package-of-a-sharepoint-add-in.md)
- [Exporting and importing search configuration settings in SharePoint](exporting-and-importing-search-configuration-settings-in-sharepoint.md)
- [Export and import customized search configuration settings in SharePoint](/sharepoint/search/export-and-import-customized-search-configuration-settings)
