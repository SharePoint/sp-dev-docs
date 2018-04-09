---
title: "AppliedSiteFeatures Element (Upgrade)"
ms.author: NormSohl
author: NormSohl
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
ms.assetid: 7f649755-613a-424c-8790-56a44b7e8d35
description: "Last modified: March 09, 2015"
---

# AppliedSiteFeatures Element (Upgrade)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Supplies a list of site collection Features to be marked as "provisioned" for site collections created in Microsoft SharePoint Foundation 2010. For example, an announcements list template of the previous version must be mapped (related) to its equivalent announcements Feature in the new version. 
  
```
<AppliedSiteFeatures>
    <Feature
      ID = "GUID"
      Force = "true" | "false" />
</AppliedSiteFeatures>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|[Feature](feature-element-upgrade.md)|
   
## Parent Elements

||
|:-----|
|[WebTemplate](webtemplate-element-upgrade.md)|
   
## Remarks

The **AppliedSiteFeatures** element actually activates each feature, including running a [Feature activating event handler](http://msdn.microsoft.com/library/8d61e0ce-9f47-4320-aa19-7043e5dccedb%28Office.15%29.aspx), when the site collection is upgraded. This allows you to run custom code during upgrade, and implement custom features solely for the purpose of doing custom site transformation.
  
For an example of how this element is used, see [Upgrade Definition schema](upgrade-definition-schema.md).
  

