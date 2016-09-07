# Delete a subscription

Deletes a webhook subscription from a SharePoint list. After deleting the subscription notifications will no longer be delivered.

## Permissions

The application must have at least edit permissions to the SharePoint list where the subscription will be deleted.

**If your application is a Microsoft Azure Active Directory (AD) application:**

You must grant the Azure AD app the permissions specified in the following table. A subscription can only be deleted by the Azure AD application that created it.

Application | Permission 
------------|------------
Office 365 SharePoint Online|read and write items and lists in all site collections.

**If your application is a SharePoint add-in:**

You must grant the SharePoint add-in the following permission(s) or higher. A subscription can only be deleted by the SharePoint add-in that created it.

Scope | Permission Rights 
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

If the subscription is found and successfully deleted, then a `204 No Content` response is returned.

### Example

```http
HTTP/1.1 204 No Content
```
