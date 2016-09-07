# Update a subscription

Updates a webhook subscription on a SharePoint list.

## Permissions

* A subscription can only be updated by the application that created it. 
* The application must have **read-write permissions** to the SharePoint list the subscription exists on.

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