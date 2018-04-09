---
title: "SPRequirementObjectType Simple Type (DeploymentRequirements)"
ms.author: nicg
author: nicg
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 978bd557-f853-42ea-b1c0-55d5a59983af
description: "Last modified: March 09, 2015"
---

# SPRequirementObjectType Simple Type (DeploymentRequirements)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Provides values for the **Type** attribute on the [Requirement Element](requirement-element-deploymentrequirements.md). The value specifies the object type of the specified deployment requirement.
  
```
<xs:simpleType name="SPRequirementObjectType">
        <xs:restriction base="xs:string">
                <xs:enumeration value="FeatureDefinition" />
                <xs:enumeration value="WebTemplate" />
                <xs:enumeration value="WebPart" />
                <xs:enumeration value="Language" />
        </xs:restriction>
</xs:simpleType>

```

## Enumeration Values

|**Value**|**Description**|
|:-----|:-----|
|**FeatureDefinition** <br/> |Specifies that the requirement object type is a Feature definition ( **SPFeature**).  <br/> |
|**WebTemplate** <br/> |Specifies that the requirement object type is a Web template ( **SPWebTemplate**).  <br/> |
|**WebPart** <br/> |Specifies that the requirement object type is a Web Part ( **SPWebPart**).  <br/> |
|**Language** <br/> |Specifies that the requirement object type is a language pack.  <br/> |
   
## See also

#### Concepts

[DeploymentRequirements Schema](deploymentrequirements-schema.md)
#### Other resources

[Requirement Element (DeploymentRequirements)](requirement-element-deploymentrequirements.md)

