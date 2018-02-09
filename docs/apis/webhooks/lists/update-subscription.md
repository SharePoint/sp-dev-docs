---
title: Update a subscription
description: Updates a webhook subscription on a SharePoint list.
ms.date: 02/08/2018
ms.prod: sharepoint
---


# Update a subscription

Updates a webhook subscription on a SharePoint list.

## Permissions

The application must have at least edit permissions to the SharePoint list where the subscription will be updated.  

### If your application is a Microsoft Azure Active Directory (Azure AD) application

You must grant the Azure AD application the permissions specified in the following table. A subscription can only be updated by the Azure AD application that created it.

Application | Permission 
------------|------------
Office 365 SharePoint Online|Read and write items and lists in all site collections. 

### If your application is a SharePoint Add-in

You must grant the SharePoint Add-in the following permission(s) or higher. A subscription can only be updated by the SharePoint Add-in that created it.

Scope | Permission rights 
------|------------
List|Manage

## HTTP request

```
PATCH _api/web/lists('list-id')/subscriptions('id')
```

### Example

```http
PATCH _api/web/lists('5C77031A-9621-4DFC-BB5D-57803A94E91D')/subscriptions('6D77031A-2345-5GRT-BV3D-55234B56FR43')
Content-Type: application/json

{
  "notificationUrl": "https://contoso.azurewebsites.net/api/v2/webhook-receiver",
  "expirationDateTime": "2016-01-03T11:23:00.000Z"
}
```

## Request body

Include the following properties in the request body.

Name | Type | Description 
-----|------|------------
notificationUrl|string|The service URL to send notifications to.
expirationDateTime|date|The date the notification will expire and be deleted.
client-clientState|string|Optional. Opaque string passed back to the client on all notifications.<br/>You can use this for validating notifications or tagging different subscriptions.


## Response

If the subscription is found and successfully updated, a `204 No Content` response is returned.

### Example

```http
HTTP/1.1 204 No Content
```

## See also

- [SharePoint list webhooks](overview-sharepoint-list-webhooks.md)
- [Overview of SharePoint webhooks](../overview-sharepoint-webhooks.md)