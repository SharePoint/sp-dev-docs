---
title: "ViewData Element (DeploymentManifest - SPWebPart)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c28d7fb1-6544-4771-98c5-7e639060b306
description: "Last modified: March 09, 2015"
---

# ViewData Element (DeploymentManifest - SPWebPart)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a parameter that enables a view of data associated with an instance of a Windows SharePoint Services 3.0 Web Part ([WebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.WebPart.aspx) ) object. 
  
```
DECLARATION
<xs:element name="ViewData" minOccurs="0" maxOccurs="1" />
USAGE
<WebPart>
        <ViewData />
</WebPart>

```

## Type

xs:string
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|[WebPart Element (DeploymentManifest)](webpart-element-deploymentmanifest.md)|
   
## Remarks

Web Parts can derive from either of two base classes - an ASP.NET Web Part ([WebPart](https://msdn.microsoft.com/library/System.Web.UI.WebControls.WebParts.WebPart.aspx) ), or a SharePoint Foundation Web Part ( [WebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.WebPart.aspx) ) 
  
## See also

#### Reference

[SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)
  
[ViewData](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.ViewData.aspx)
  
[WebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.WebPart.aspx)
  
[WebPart](https://msdn.microsoft.com/library/System.Web.UI.WebControls.WebParts.WebPart.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

