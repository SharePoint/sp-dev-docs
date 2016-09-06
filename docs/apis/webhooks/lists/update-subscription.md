# Update a subscription

An application can update an existing subscription by using the PATCH verb to change the properties of the subscription.

## Permissions

* Only the subscription created by the calling application is able to update its subscription. 
* To update a subscription the application must have **read-write permissions** to the SharePoint list the subscription exists on.

## HTTP Request

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

## HTTP Response

If the subscription is found and successfully updated, then a `204 No Content` response is returned:

### Example

```http
HTTP/1.1 204 No Content
```