---
title: Operations using SharePoint REST v2 (Microsoft Graph) endpoints
description: Perform basic create, read, update, and delete (CRUD) operations with the SharePoint v2 REST interface.
ms.date: 12/05/2020
ms.service: sharepoint-online
localization_priority: Priority
---

# SharePoint REST operations via the Microsoft Graph REST API

If you are looking for the legacy SharePoint REST API documentation, see [Complete basic operations using SharePoint REST endpoints](https://docs.microsoft.com/sharepoint/dev/sp-add-ins/complete-basic-operations-using-sharepoint-rest-endpoints).

For SharePoint Online, innovation using a REST API against SharePoint is driven via the Microsoft Graph REST API's. In scenarios where solutions already have access tokens available to access SharePoint content, it's possible to access the REST API natively within SharePoint instead of calling via the Microsoft Graph API.

Below is a table outlining a set of the Microsoft Graph endpoints being backed by SharePoint Online.

|Graph URL|	SharePoint URL|
|----|----|
|https://graph.microsoft.com/v1.0/sites|	https://{tenant-name}.sharepoint.com/_api/v2.0/sites|
|https://graph.microsoft.com/v1.0/drives|	https://{tenant-name}.sharepoint.com/_api/v2.0/drives|
|https://graph.microsoft.com/v1.0/drive|	https://{tenant-name}.sharepoint.com/_api/v2.0/drive|
|https://graph.microsoft.com/v1.0/lists|	https://{tenant-name}.sharepoint.com/_api/v2.0/lists|

If your solution already uses other Microsoft Graph REST API's, it is recommended to call API's via the Microsoft Graph REST endpoints for easier code management.

To figure out if a Microsoft Graph REST API call is backed by SharePoint Online you can add `$whatif` to the end of the query to output the underlying SharePoint URL.

## See also

- [Microsoft Graph REST API v1.0 reference](/graph/api/overview?view=graph-rest-1.0)

 

 

