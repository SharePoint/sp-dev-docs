---
title: Delete a subscription
description: Deletes a webhook subscription from a SharePoint list. After deleting the subscription, notifications are no longer delivered.
ms.date: 02/08/2018
ms.prod: sharepoint
localization_priority: Normal
---


# Delete a subscription

Deletes a webhook subscription from a SharePoint list. After deleting the subscription, notifications are no longer delivered.

## Permissions

The application must have at least edit permissions to the SharePoint list where the subscription will be deleted.

### If your application is a Microsoft Azure Active Directory (Azure AD) application

You must grant the Azure AD app the permissions specified in the following table. A subscription can only be deleted by the Azure AD application that created it.

Application | Permission 
------------|------------
Office 365 SharePoint Online|Read and write items and lists in all site collections.

### If your application is a SharePoint Add-in

You must grant the SharePoint Add-in the following permission(s) or higher. A subscription can only be deleted by the SharePoint Add-in that created it.

Scope | Permission rights 
------|------------
List|Manage

## HTTP request

```
DELETE _api/web/lists('list-id')/subscriptions('id')
```

### Example

```http
DELETE _api/web/lists('5C77031A-9621-4DFC-BB5D-57803A94E91D')/subscriptions('6D77031A-2345-5GRT-BV3D-55234B56FR43')
```

## Request body

Do not supply a request body for this method.

## Response

If the subscription is found and successfully deleted, a `204 No Content` response is returned.

### Example

```http
HTTP/1.1 204 No Content
```

## See also

- [SharePoint list webhooks](overview-sharepoint-list-webhooks.md)
- [Overview of SharePoint webhooks](../overview-sharepoint-webhooks.md)
