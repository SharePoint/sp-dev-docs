---
title: CSOM methods for retention labels
description: CSOM methods are available to apply (set) a retention label (ComplianceTag) on one or many items (ListItems) in SharePoint. Also includes settings of retention labels in ODB and SPO.
author: kyracatwork
ms.author: kyrachurney
ms.date: 4/18/2023
---

# CSOM methods for applying retention labels and managing settings of record labels

Retention labels let you apply retention settings for governance control at the item level, and are part of the Microsoft Purview compliance solutions. [Learn more about retention labels.](/microsoft-365/compliance/retention#retention-labels)

Retention labels may classify contents as records, which place restrictions on what actions are allowed or blocked. [Learn more about declaring records by using retention labels](/microsoft-365/compliance/declare-records)

CSOM methods are available to apply (set) a retention label (ComplianceTag) on one or many items (ListItems) in SharePoint, and change retention labels settings for deleting, versioning, and changing properties of records. Retention labels can be applied using this method without being published to the location by an existing label policy. 

## SetComplianceTagOnBulkItems

This method can be used to set a ComplianceTag on one or many ListItems. It is strongly recommended to use this method for this purpose.

```c#
public List<int> SetComplianceTagOnBulkItems( 
             List<int> itemIds, 
             string listUrl, 
             string complianceTagValue)
```

### Parameters

- 'List' [Int](/en-us/dotnet/api/system.int32)
- 'ItemsIds' [String](/dotnet/api/system.string)
- 'ListURL' [String](/dotnet/api/system.string)
- 'ComplianceTagValue' [String](/dotnet/api/system.string)

Attribute [RemoteAttribute](/dotnet/api/microsoft.sharepoint.client.remoteattribute)

## REST API for Retention Labels Settings

Setting up Retention Labels settings for Microsoft Purview Records Management in Microsoft 365 is essential to properly monitor and enforce your organization's compliance policies. These APIs correspond to the settings under **[Microsoft Purview portal](https://purview.microsoft.com/)** or the **[Microsoft Purview compliance portal](/purview/purview-compliance-portal)** > **Records Management settings** > **Retention Labels**.

### Authentication and Permissions

__Permissions:__ Need to use account credentials of user who has __Tenant Admin__ role.

__Required scopes:__ Sites.FullControl.All

__Authentication:__ Generate user token using [https://login.microsoftonline.com/common/oauth2/token](https://login.microsoftonline.com/common/oauth2/token) and using the user credentials to generate a bearer token to be used for authentication to the API.

__Request Headers:__ Bearer token. Learn here: [https://learn.microsoft.com/graph/auth/auth-concepts](/graph/auth/auth-concepts).

### API Reference

The common namespace is `SP.CompliancePolicy.SPPolicyStoreProxy`, and the prefix to use before each endpoint is `https://<tenant-name>.sharepoint.com/_api/SP.CompliancePolicy.SPPolicyStoreProxy`.

|Setting Name|Request Method|Endpoint|Request Body|Response|
| -------- | -------- | -------- | -------- | -------- |
|Deleting content labeled for retention in OneDrive for Business|GET|`GetAllowFilesWithKeepLabelToBeDeletedODB`|N/A|`{"odata.metadata": https://<tenant-name>.sharepoint.com/_api/$metadata#Edm.Boolean","value": <Boolean>}`|
||POST|`SetAllowFilesWithKeepLabelToBeDeletedODB`|`{"allowDeletion": <Boolean>}`|If successful, returns 200 OK.|
|Deleting content labeled for retention in SharePoint Online|GET|`GetAllowFilesWithKeepLabelToBeDeletedSPO`|N/A|`{"odata.metadata": https://<tenant-name>.sharepoint.com/_api/$metadata#Edm.Boolean","value": <Boolean>}`|
||POST|`SetAllowFilesWithKeepLabelToBeDeletedSPO`|`{"allowDeletion": <Boolean>}`|If successful, returns 200 OK.|
|Enable record versioning|GET|`GetAdvancedRecordVersioningDisabled`|N/A|`{"odata.metadata": https://<tenant-name>.sharepoint.com/_api/$metadata#Edm.Boolean","value": <Boolean>}`|
||POST|`SetAdvancedRecordVersioningDisabled`|`{"disabled":<Boolean>}` |If successful, returns 200 OK.|
|Allow users to edit record properties|GET|`GetMetadataEditBlockingEnabled`|N/A|`{"odata.metadata": https://<tenant-name>.sharepoint.com/_api/$metadata#Edm.Boolean","value": <Boolean>}`|
||POST|`SetMetadataEditBlockingEnabled`|`{"enabled":<Boolean>}` |If successful, returns 200 OK.|

Example: To get the value of *Deleting content labeled for retention in OneDrive for Business,* do the following:

1. Get the tenant name. In this case, assume it's contoso.

1. Make a GET API call to `https://contoso.sharepoint.com/_api/SP.CompliancePolicy.SPPolicyStoreProxy.GetAllowFilesWithKeepLabelToBeDeletedODB`.

1. You get a response as `{"odata.metadata": https://contoso.sharepoint.com/_api/$metadata#Edm.Boolean","value": true}` if it's enabled, or as `{"odata.metadata": https://contoso.sharepoint.com/_api/$metadata#Edm.Boolean","value": false}` if it's disabled.

### Applies to

|Product|Versions|
|:---|:---|
|SharePoint CSOM|latest|

## Other

> [!NOTE] 
> It is strongly recommended to use SetComplianceTagOnBulkItems instead of these methods.

The following methods are also available, but are no longer updated and may be subject to deprecation in the future. If you are using these methods, we strongly recommend use of the SetComplianceTagOnBulkItems method instead.

* [SetComplianceTag](/dotnet/api/microsoft.sharepoint.client.listitem.setcompliancetag)
* [SetComplianceTagWithExplicitMetaInfo](/dotnet/api/microsoft.sharepoint.client.listitem.setcompliancetagwithexplicitmetasupdate)
* [SetComplianceTagWithExplicitMetasUpdate](/dotnet/api/microsoft.sharepoint.client.listitem.setcompliancetagwithexplicitmetasupdate)
* [SetComplianceTagWithHold](/dotnet/api/microsoft.sharepoint.client.listitem.setcompliancetagwithhold)
* [SetComplianceTagWithMetaInfo](/dotnet/api/microsoft.sharepoint.client.listitem.setcompliancetagwithmetainfo)
* [SetComplianceTagWithNoHold](/dotnet/api/microsoft.sharepoint.client.listitem.setcompliancetagwithnohold)
* [SetComplianceTagWithRecord](/dotnet/api/microsoft.sharepoint.client.listitem.setcompliancetagwithrecord)
