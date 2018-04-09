---
title: "ViewFormsList Element (DeploymentViewFormsList)"
ms.author: nicg
author: nicg
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 2de4a2d5-e0ef-44aa-b760-7a014f398e4b
description: "Last modified: March 09, 2015"
---

# ViewFormsList Element (DeploymentViewFormsList)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Represents a collection of ViewForm ( **SPViewForm**) instances and comprises the list represented in the ViewFormsList.xml file that is exported to the content migration package.
  
```
DECLARATION
<xs:element 
    name="ViewFormsList" 
    type="SPViewFormsList" 
/>
USAGE
<ViewFormsList>
    <ViewForm />
</ViewFormsList>

```

## Type

 **SPViewFormsList**
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
## Child Elements

||
|:-----|
|[ViewForm Element (DeploymentViewFormsList)](viewform-element-deploymentviewformslist.md)|
   
## Parent Elements

||
|:-----|
|None |
   
## Remarks

The **ViewFormsList** element is the root element of the DeploymentViewFormsList Schema and therefore has no parent element. 
  
## See also

#### Concepts

[DeploymentViewFormsList Schema](deploymentviewformslist-schema.md)

