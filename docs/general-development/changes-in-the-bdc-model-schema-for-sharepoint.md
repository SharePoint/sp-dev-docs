---
title: Changes in the BDC model schema for SharePoint
description: Learn what has changed in SharePoint for the BDC model schema.
ms.date: 02/04/2026
ms.assetid: 882ea867-9acb-4313-99c9-865a523b72fd
ms.localizationpriority: medium
---

# Changes in the BDC model schema for SharePoint

Learn what has changed in SharePoint for the BDC model schema.

> [!IMPORTANT]
> Business Connectivity Services (BCS) and BDC model schema are considered legacy technologies in modern SharePoint development. For new solutions, we recommend using SharePoint Framework (SPFx), Microsoft Graph, and Power Platform integrations.

The number of changes in the schema (BDCMetadata.xsd) for creating BDC models in SharePoint is relatively small. But these changes have significant impact on the feature set offerings of Business Connectivity Services (BCS).

For more information about the BDCMetadata schema, see  [BDC model schema reference for SharePoint](bdc-model-schema-reference-for-sharepoint.md).

## Changes to complex type elements in BDCMetadata.xsd

The following table shows what changes have been made to the top-level elements in the BDCMetadata schema.

**Table 1. New complex types**

|**Element**|**Description**|
|:-----|:-----|
|IndividuallySecurableMetadataObject   |Used to designate that the specified **MetadataObject** is able to be secured explicitly and not by association to its parent.  |
|MetadataObject   |Used to store additional metadata about the connection to the external data source.   |

## Changes to simple type elements in BDCMetadata.xsd

The following table lists the changes that have been made to the attributes of each element.

**Table 2. Changes to simple types**

|**Element**|**Description**|
|:-----|:-----|
|No changes   ||

## Changes to attributes in BDCMetadata.xsd

The following table lists the changes to the attributes of each element.

**Table 3. Changes to attributes**

|**Attribute**|**Parent**|**Description**|
|:-----|:-----|:-----|
|No changes   |||

## See also

-  [Business Connectivity Services in SharePoint](business-connectivity-services-in-sharepoint.md)
-  [What's new in Business Connectivity Services in SharePoint](what-s-new-in-business-connectivity-services-in-sharepoint.md)
-  [Get started with Business Connectivity Services in SharePoint](get-started-with-business-connectivity-services-in-sharepoint.md)
-  [Business Connectivity Services programmers reference for SharePoint](business-connectivity-services-programmers-reference-for-sharepoint.md)
-  [BDC model schema reference for SharePoint](bdc-model-schema-reference-for-sharepoint.md)
