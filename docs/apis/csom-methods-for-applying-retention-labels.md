---
title: CSOM methods for applying retention labels
description: CSOM methods are available to apply (set) a retention label (ComplianceTag) on one or many items (ListItems) in SharePoint. 
author: kyracatwork
ms.author: kyrachurney
ms.date: 4/18/2023
---

# CSOM methods for applying retention labels (setting ComplianceTags)

Retention labels let you apply retention settings for governance control at the item level, and are part of the Microsoft Purview compliance solutions. [Learn more about retention labels.](/microsoft-365/compliance/retention#retention-labels)

Retention labels may classify contents as records, which place restrictions on what actions are allowed or blocked. [Learn more about declaring records by using retention labels](/microsoft-365/compliance/declare-records)

CSOM methods are available to apply (set) a retention label (ComplianceTag) on one or many items (ListItems) in SharePoint. Retention labels can be applied using this method without being published to the location by an existing label policy. 

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
