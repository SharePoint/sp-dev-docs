# Create a new subscription 
To add a new subscription to the SharePoint list, your application POSTs a request to the subscription collection of the SharePoint list resource that includes the properties of the subscription you want to have created.

## Permissions

* To create a subscription the application must have *read-write permissions* to the SharePoint list the subscription will be created on.

## HTTP Request

```
POST /_api/web/lists('list-id')/subscriptions
```
### Example

```http
POST /_api/web/lists('5C77031A-9621-4DFC-BB5D-57803A94E91D')/subscriptions
Accept: application/json
Content-Type: application/json

{
  "resource": "https://contoso.sharepoint.com/_api/web/lists('5C77031A-9621-4DFC-BB5D-57803A94E91D')",
  "notificationUrl": "https://91e383a5.ngrok.io/api/webhook/handlerequest",
  "expirationDateTime": "2016-04-27T16:17:57+00:00"
}
```

## HTTP Response
If the subscription is added, then a `201 Created` response is returned that
includes the newly created subscription object.

### Example

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
    "id": "a8e6d5e6-9f7f-497a-b97f-8ffe8f559dc7",
    "expirationDateTime": "2016-04-27T16:17:57Z",    
    "notificationUrl": "https://91e383a5.ngrok.io/api/webhook/handlerequest",
    "resource": "5c77031a-9621-4dfc-bb5d-57803a94e91d"
}
```

## URL validation
Before a new subscription is created, SharePoint will send a request with a validation token in the body of the request to the service URL provided. Your service must respond to this request by returning the validation token.

If your service fails to validate the request in this way, the subscription will fail to be created.

See [handling webhook validation requests](../overview-sharepoint-webhooks.md) for detailed information.