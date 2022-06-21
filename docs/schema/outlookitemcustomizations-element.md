---
title: OutlookItemCustomizations Element
description: OutlookItemCustomizations Element describes how external data should appear in Microsoft Outlook 2010 and what other customizations you need in Outlook.
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: bb7f173c-c9a8-4e71-94bf-743fed55378f
---

# OutlookItemCustomizations Element

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Describes how external data should appear in Microsoft Outlook 2010 and what other customizations you need in Outlook.

**Namespace**: `http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest`

**Schema**: SolutionManifestDefinitions

```XML
<OfficeItemCustomizations xsl:type="OutlookItemCustomizations" ItemTypeDisplayName = "String" 
MessageClass = "String" Description = "String"> </OfficeItemCustomizations>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|Attribute|Description|
|---------|-----------|
|**ItemTypeDisplayName**|The display name of the Outlook item type.</br></br>Required.</br></br>Attribute type: **String**|
|**MessageClass**|Used to identify the form used to display the item. It follows the format: IPM...</br></br>Example: IPM.Contact.Customer</br></br>Required</br></br>Attribute type: **String**|
|**Description**|A description for the customizations.</br></br>Optional.</br></br>Attribute type: **String**|

### Child elements

|Element|Description|
|-------|-----------|
|**OfficeItemProperties**|Used to describe the fields of an external content type.|
|**FormRegions**|Used to describe the properties of the form region used to display the external data.|
|**OutlookFolder**|Used to describe Outlook folder that contains the external data.|
|**Picture**|Used to describe the icon to use in Microsoft Outlook 2010.|

### Parent elements

|Element|Description|
|-------|-----------|
|**OfficeItemCustomizations**|Describes Outlook-specific customizations.|







