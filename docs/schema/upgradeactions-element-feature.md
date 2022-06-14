---
title: UpgradeActions Element (Feature)
description: Describes the definition, element, and attribute information for the UpgradeActions Element (Feature), which specifies the upgrade actions for the Feature.
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 5af24ac1-a290-454d-b32b-bc7f7a4634f0
---

# UpgradeActions Element (Feature)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the upgrade actions for the Feature.

## Definition

```XML
<UpgradeActions 
  ReceiverAssembly = string
  ReceiverClass = string>
  <AddContentTypeField />
  <ApplyElementManifests>
    ...
  <CustomUpgradeActions>
    ...
  </CustomUpgradeActions>
  <MapFile />
  <VersionRange>
    ...
  </VersionRange>
</UpgradeActions>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

| Attribute | Description |
|-----------|-------------|
| **ReceiverAssembly** | Optional **string**. Specifies the strong name of the assembly. This attribute may not be used when the Feature that is being upgraded is inside an SharePoint Add-in. |
| **ReceiverClass** | Optional **string**. Specifies the receiver class. This attribute may not be used when the Feature that is being upgraded is inside an SharePoint Add-in. |

### Child elements

| Element |
|---------|
| [AddContentTypeField Element (Feature)](addcontenttypefield-element-feature.md) |
| [ApplyElementManifests Element (Feature)](applyelementmanifests-element-feature.md) |
| [CustomUpgradeAction Element (Feature)](customupgradeaction-element-feature.md) |
| [MapFile Element (Feature)](mapfile-element-feature.md) |
| [VersionRange Element (Feature)](versionrange-element-feature.md) |

### Parent elements

| Element |
|---------|
| [Feature Element (Feature)](feature-element-feature.md) |

### Occurrences

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 0</p>
<p>Maximum: 1</p></td>
</tr>
</tbody>
</table>








