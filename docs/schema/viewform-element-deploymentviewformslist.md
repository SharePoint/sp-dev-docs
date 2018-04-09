---
title: "ViewForm Element (DeploymentViewFormsList)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 07ccf6fb-a17d-4b77-aba9-8175895a6286
description: "Last modified: March 09, 2015"
---

# ViewForm Element (DeploymentViewFormsList)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents the specific Web Part object ( **SPViewForm**) instances that are listed in the ViewFormsList.xml file, which is exported to the content migration package. The ViewFormsList.xml file specifies whether each instance is a view or a form.
  
```
DECLARATION
<xs:element
    name="ViewForm"
    type="SPViewForm"
    minOccurs="0" maxOccurs="unbounded"
/>
USAGE
<ViewFormsList>
    <ViewForm
       Id="xs:string"
       Type="xs:string"
    />
</ViewFormsList>

```

## Type

 **SPViewForm**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Id** <br/> |xs:string  <br/> |Optional. Unique identifier that identifies each specific Web Part.  <br/> |
|**Type** <br/> |xs:string  <br/> |Specifies whether the Web Part is a view or a form. Allowable values are **View**, **Form**, and **File**. However, the **File** value is not functional and is reserved for future use.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[ViewFormsList Element (DeploymentViewFormsList)](viewformslist-element-deploymentviewformslist.md)|
   
## See also



[DeploymentViewFormsList Schema](deploymentviewformslist-schema.md)

