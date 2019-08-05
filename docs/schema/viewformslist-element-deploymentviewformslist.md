---
title: "ViewFormsList Element (DeploymentViewFormsList)"
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

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents a collection of ViewForm (**SPViewForm**) instances and comprises the list represented in the ViewFormsList.xml file that is exported to the content migration package.

## Definition

```XML
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
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

[ViewForm Element (DeploymentViewFormsList)](viewform-element-deploymentviewformslist.md)
   
### Parent elements

None
   
### Remarks

The **ViewFormsList** element is the root element of the DeploymentViewFormsList Schema and therefore has no parent element. 
  
## See also

- [DeploymentViewFormsList Schema](deploymentviewformslist-schema.md)

