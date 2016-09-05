# Delete a subscription

Remove a subscription from a SharePoint resource. Note that after deleting the subscription the subscription will no longer exist and additional notifications will not be delivered.

## Prerequisites
Only the subscription created by the calling application is able to delete its subscription. To delete a subscription the application must have read-write access to the SharePoint resource the subscription exists on.

## HTTP request

### List webhook
```
DELETE _api/web/lists('list-id')/subscriptions('id')
```

#### Example

```http
DELETE _api/web/lists('5C77031A-9621-4DFC-BB5D-57803A94E91D')/subscriptions('6D77031A-2345-5GRT-BV3D-55234B56FR43')
```

## Response

If the subscription is found and successfully deleted, then a `204 No Content` response is returned:

```http
HTTP/1.1 204 No Content
```

### Error responses

See [Error Responses](error-responses.md) for more info about how errors are returned.