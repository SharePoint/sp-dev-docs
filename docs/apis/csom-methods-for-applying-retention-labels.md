---
title: CSOM methods for retention labels
description: CSOM methods are available to apply (set) a retention label (ComplianceTag) on one or many items (ListItems) in SharePoint. Also includes settings of retention labels in ODB and SPO.
author: kyracatwork
ms.author: kyrachurney
ms.date: 9/30/2024
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

## GetAllowFilesWithKeepLabelToBeDeletedODB

Get whether files with Keep Label can be deleted in ODB.


```c#

public static bool GetAllowFilesWithKeepLabelToBeDeletedODB()
```

## SetAllowFilesWithKeepLabelToBeDeletedODB

Set whether files with Keep Label can be deleted in ODB


```c#
public static void SetAllowFilesWithKeepLabelToBeDeletedODB(bool allowDeletion)
```

Parameters

- 'allowDeletion' [Boolean](/dotnet/api/system.boolean)

## GetAllowFilesWithKeepLabelToBeDeletedSPO
Get whether files with Keep Label can be deleted in SPO.

```c#

public static bool GetAllowFilesWithKeepLabelToBeDeletedSPO()
```

## SetAllowFilesWithKeepLabelToBeDeletedSPO

Set whether files with Keep Label can be deleted in SPO.

```c#
public static void SetAllowFilesWithKeepLabelToBeDeletedSPO(bool allowDeletion)
```

Parameters

- 'allowDeletion' [Boolean](/dotnet/api/system.boolean)

## GetAdvancedRecordVersioningDisabled

Get whether advanced record versioning is disabled.

```c#

public static bool GetAdvancedRecordVersioningDisabled()
```

## SetAdvancedRecordVersioningDisabled

Set to enable or disable the advanced record versioning.

```c#
public static void SetAdvancedRecordVersioningDisabled(bool disabled)
```

Parameters

- 'disabled' [Boolean](/dotnet/api/system.boolean)

## GetMetadataEditBlockingEnabled

Get whether metadata edit blocking is enabled.

```c#

public static bool GetMetadataEditBlockingEnabled()

```

## SetMetadataEditBlockingEnabled

Set metadata edit blocking enabled setting.


```c#
public static void SetMetadataEditBlockingEnabled(bool enabled)
```

Parameters

- 'enabled' [Boolean](/dotnet/api/system.boolean)

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
