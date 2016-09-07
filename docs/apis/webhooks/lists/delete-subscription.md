# Delete a subscription

Deletes a webhook subscription from a SharePoint list. After deleting the subscription notifications will no longer be delivered.

## Permissions

* A subscription can only be deleted by the application that created it. 
* To delete a subscription the application must have **read-write permissions** to the SharePoint list the subscription exists on.

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

If the subscription is found and successfully deleted, then a `204 No Content` response is returned.

### Example

```http
HTTP/1.1 204 No Content
```