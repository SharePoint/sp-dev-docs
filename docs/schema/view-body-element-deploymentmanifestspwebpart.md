---
title: "View Body Element (DeploymentManifest - SPWebPart)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a6d3551b-0a3b-415a-a7dd-f83fddefaa19
description: "Last modified: March 09, 2015"
---

# View Body Element (DeploymentManifest - SPWebPart)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a parameter that enables a view of the body of an instance of a Windows SharePoint Services 3.0 Web Part ([WebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.WebPart.aspx) ) object. 
  
```
DECLARATION
<xs:element name="ViewBody" minOccurs="0" maxOccurs="unbounded" />
USAGE
<WebPart>
        <ViewBody />
</WebPart>

```

## Type

 **xs:string**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[WebPart Element (DeploymentManifest)](webpart-element-deploymentmanifest.md)
   
## Remarks

Web Parts can derive from either of two base classes - an ASP.NET Web Part ([WebPart](https://msdn.microsoft.com/library/System.Web.UI.WebControls.WebParts.WebPart.aspx) ), or a SharePoint Foundation Web Part ( [WebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.WebPart.aspx) ) 
  
## See also



[SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)
  
[ViewBody](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.ViewBody.aspx)
  
[WebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.WebPart.aspx)
  
[WebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.WebPart.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

