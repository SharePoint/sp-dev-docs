# Get subscriptions

>**Note:** SharePoint webhooks is currently in preview and is subject to change. SharePoint webhooks are not currently supported for use in production environments.

Gets one or more webhook subscriptions on a SharePoint list.

## Permissions

### Get a single subscription

The application must have at least edit permissions to the SharePoint list where the subscription will be retreived.

**If your application is a Microsoft Azure Active Directory (AD) application:**

You must grant the Azure AD application the permissions specified in the following table. A subscription can only be retrieved by the Azure AD application that created it. 

Application | Permission 
------------|------------
Office 365 SharePoint Online|Read and write items and lists in all site collections.

**If your application is a SharePoint add-in:**

You must grant the SharePoint add-in the following permission(s) or higher. A subscription can only be retrieved by the SharePoint add-in that created it. 

Scope | Permission Rights 
------|------------
List|Manage

### Get all subscriptions

The application must have manage list permissions to the SharePoint list where the subscription will be retrieved.

**If your application is a Microsoft Azure Active Directory (AD) application:**

You must grant the Azure AD app the permissions specified in the following table. 

Application | Permission 
------------|------------
Office 365 SharePoint Online|Have full control of all site collections.

**If your application is a SharePoint add-in:**

You must grant the SharePoint add-in the following permission(s) or higher. 

Scope | Permission Rights 
------|------------
List|Full control

## HTTP request

### Get a single subscription

#### List webhook
```
GET _api/web/lists('list-id')/subscriptions('id')
```

##### Example

```http
GET _api/web/lists('5C77031A-9621-4DFC-BB5D-57803A94E91D')/subscriptions('6D77031A-2345-5GRT-BV3D-55234B56FR43')
```

#### Request body

Do not supply a request body for this method.

##### Response

This returns the subscription viewable by the calling application.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "odata.metadata": "https://contoso.sharepoint.com/_api/$metadata#SP.ApiData.Subscriptions/@Element",
  "odata.type": "Microsoft.SharePoint.Webhooks.Subscription",
  "odata.id": "https://contoso.sharepoint.com/_api/web/lists('5C77031A-9621-4DFC-BB5D-57803A94E91D')/subscriptions('a8e6d5e6-9f7f-497a-b97f-8ffe8f559dc7')",
  "odata.editLink": "web/lists('5C77031A-9621-4DFC-BB5D-57803A94E91D')/subscriptions('a8e6d5e6-9f7f-497a-b97f-8ffe8f559dc7')",
  "expirationDateTime": "2016-04-30T16:17:57Z",
  "id": "a8e6d5e6-9f7f-497a-b97f-8ffe8f559dc7",
  "notificationUrl": "https://contoso.azurewebistes.net/api/webhook/handlerequest",
  "resource": "5c77031a-9621-4dfc-bb5d-57803a94e91d"
}
```

### Get all subscriptions

#### List webhook
```
GET _api/web/lists('list-id')/subscriptions
```

##### Example

```http
GET _api/web/lists('5C77031A-9621-4DFC-BB5D-57803A94E91D')/subscriptions
```

#### Request body

Do not supply a request body for this method.

##### Response

This returns a collection of all subscriptions on a SharePoint resource. 

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "odata.metadata": "https://a830edad9050849295j16032914.sharepoint.com/_api/$metadata#SP.ApiData.Subscriptions",
  "value": [
    {
      "odata.type": "Microsoft.SharePoint.Webhooks.Subscription",
      "odata.id": "https://contoso.sharepoint.com/_api/Microsoft.SharePoint.Webhooks.Subscriptionc3175b9c-1491-454f-b5da-980431e36146",
      "odata.editLink": "Microsoft.SharePoint.Webhooks.Subscriptionc3175b9c-1491-454f-b5da-980431e36146",
      "clientState": "{A0A354EC-97D4-4D83-9DDB-144077ADB449}",
      "expirationDateTime": "2016-04-30T16:17:57Z",
      "id": "a8e6d5e6-9f7f-497a-b97f-8ffe8f559dc7",
      "notificationUrl": "https://contoso.azurewebsites.net/api/webhook/handlerequest",
      "resource": "5c77031a-9621-4dfc-bb5d-57803a94e91d"
    }
  ]
}
```
