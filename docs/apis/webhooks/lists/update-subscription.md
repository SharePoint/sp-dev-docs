# Update a subscription

Updates a webhook subscription on a SharePoint list.

## Permissions

The application must have at least edit permissions to the SharePoint list where the subscription will be created.  

**If your application is an Azure Active Directory (AAD) application:**

You must grant the AAD app permissions to the folowing SharePoint application and the corresponding permissions. A subscription can only be updated by the AAD application that created it.

Application | Permission 
------------|------------
Office 365 SharePoint Online|read and write items and lists in all site collections. A subscription can only be updated by the add-in that created it.

**If your application is a SharePoint add-in:**

You must grant the add-in at least the following permission(s) or higher:

Scope | Permission Rights 
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
client-clientState|string|Optional. Opaque string passed back to the client on all notifications. You can use this for validating notificaitons, or tagging different subscriptions.


## Response

If the subscription is found and successfully updated, then a `204 No Content` response is returned:

### Example

```http
HTTP/1.1 204 No Content
```
