---
title: "WebTemplate Element (Upgrade)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Upgrade schema
api_type:
- schema
ms.assetid: 61f6a7db-1d3e-499c-88e0-9ddc0578693e
description: "Last modified: March 09, 2015"
---

# WebTemplate Element (Upgrade)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the site template upgrade definition.
  
```
<WebTemplate 
  BeginFromSchemaVersion = "Integer"
  EndFromSchemaVersion = "Integer"
  FromProductVersion = "Integer"
  ID = "Integer"
  LocaleId = "Integer"
  RemoveSiteExternalSecurityProvider = "true | "false"
  ToSchemaVersion = "Integer">
    ...
  <Lists>
    ...
  </Lists>
  <Files>
    ...
  </Files>
  <AppliedWebFeatures>
    ...
  </AppliedWebFeatures>
</WebTemplate>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**BeginFromSchemaVersion** <br/> |Optional **Integer**. Specifies the starting point of a schema version range to which this upgrade definition applies.  <br/> |
|**EndFromSchemaVersion** <br/> |Optional **Integer**. Specifies the end of a schema version range to which this upgrade definition applies.  <br/> |
|**FromProductVersion** <br/> |Optional **Integer**. Specifies the product version of the original site definition to which this upgrade definition applies.  <br/> |
|**ID** <br/> |Required **Integer**. Specifies the identifier (ID) of the site definition to be upgraded. This value corresponds to the **ID** attribute of the [Template](../../collaborative-application-markup-language-caml-schemas/site-schema/template-element-site.md) element.  <br/> |
|**LocaleId** <br/> |Optional **Integer**. Specifies the locales to which the site upgrade definition applies. Set to **\*** to imply that the definition applies to all site definition upgrades. Microsoft SharePoint Foundation implements only one upgrade definition per locale. If **\*** is specified and a locale-specific upgrade definition exists, SharePoint Foundation uses the locale-specific upgrade definition. If the locale-specific definition does not exist, SharePoint Foundation falls back to the * upgrade definition.  <br/> |
|**RemoveSiteExternalSecurityProvider** <br/> |Optional **Boolean**. **true** to exclude any external security provider from the upgrade; otherwise, **false**.  <br/> |
|**ToSchemaVersion** <br/> |Optional **Integer**. Specifies the product version to which the site definition is upgraded.  <br/> |
   
### Child elements

||
|:-----|
|[AppliedSiteFeatures](appliedsitefeatures-element-upgrade.md), [AppliedWebFeatures](appliedwebfeatures-element-upgrade.md), [Files](files-element-upgrade.md), [Lists](lists-element-upgrade.md)|
   
### Parent elements

||
|:-----|
|[Config](config-element-upgrade.md)|
   
### Occurrences

||
|:-----|
|Minimum: 1  <br/> Maximum: Unbounded  <br/> |
   
### Remarks

For an example of how this element is used, see [Upgrade Definition schema](upgrade-definition-schema.md).
  

