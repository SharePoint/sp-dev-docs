---
title: "AnonymousState Simple Type (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 499d068b-f426-499e-bad9-1903ba8cc4ae
description: "Last modified: March 09, 2015"
---

# AnonymousState Simple Type (DeploymentManifest)
 
**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Specifies a value representing the current state of the **AnonymousState** attribute on the **SPWeb** object type - [Web Element (DeploymentManifest)](web-element-deploymentmanifest.md).

## Definition

```XML
<xs:simpleType name="AnonymousState">
        <xs:restriction base="xs:string">
                <xs:enumeration value="Disabled" />
                <xs:enumeration value="Enabled" />
                <xs:enumeration value="On" />
        </xs:restriction>
</xs:simpleType>
```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|**Disabled** <br/> |Disables the attribute to prevent anonymous users from gaining access to the site.  <br/> |
|**Enabled** <br/> |Enables the attribute, but does not set it to on. Anonymous users can access lists and libraries.  <br/> |
|**On** <br/> |Enables the attribute and sets it to on. Anonymous users can access the entire website.  <br/> |
   
## See also

- [DeploymentManifest Schema](deploymentmanifest-schema.md)

