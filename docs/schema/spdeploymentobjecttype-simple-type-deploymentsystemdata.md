---
title: "SPDeploymentObjectType Simple Type (DeploymentSystemData)"
ms.author: nicg
author: nicg
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 065907dd-ebca-4332-9bc1-65bace98eba3
description: "Last modified: March 09, 2015"
---

# SPDeploymentObjectType Simple Type (DeploymentSystemData)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Provides values for the **Type** attribute on the [SystemObject element](systemobject-element-deploymentsystemdata.md). The value specifies the system object type.
  
```
<xs:simpleType name="SPDeploymentObjectType">
        <xs:restriction base="xs:string">
                <xs:enumeration value="Site" />
                <xs:enumeration value="Web" />
                <xs:enumeration value="Folder" />
                <xs:enumeration value="List" /> 
                <xs:enumeration value="ListItem" />
                <xs:enumeration value="File" />
        </xs:restriction>
</xs:simpleType>>

```

## Enumeration Values

|**Value**|**Description**|
|:-----|:-----|
|**Site** <br/> |Specifies that the system object type is a SharePoint Foundation site ( **SPSite**).  <br/> |
|**Web** <br/> |Specifies that the system object type is a SharePoint Foundation Web site ( **SPWeb**).  <br/> |
|**Folder** <br/> |Specifies that the system object type is a SharePoint Foundation folder ( **SPFolder**).  <br/> |
|**List** <br/> |Specifies that the system object type is a SharePoint Foundation list ( **SPList**).  <br/> |
|**ListItem** <br/> |Specifies that the system object type is a SharePoint Foundation list item ( **SPListItem**).  <br/> |
|**File** <br/> |Specifies that the system object type is a SharePoint Foundation file ( **SPFile**).  <br/> |
   
## See also

#### Concepts

[DeploymentSystemData Schema](deploymentsystemdata-schema.md)
#### Other resources

[SystemObject Element (DeploymentSystemData)](systemobject-element-deploymentsystemdata.md)

