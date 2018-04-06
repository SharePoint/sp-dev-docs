---
title: "DocumentTemplate Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 86486029-af2f-46ce-8e59-9ce0ce1306b7
description: "Last modified: March 09, 2015"
---

# DocumentTemplate Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a Windows SharePoint Services 3.0 document template object ([SPDocTemplate](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPDocTemplate.aspx) ) that is used in a document library. 
  
```
DECLARATION
<xs:element name="DocumentTemplate" type="SPDocTemplate" />
USAGE
<SPObject>
        <DocumentTemplate
                DefaultTemplate="xs:string"
                Description="xs:string"
                Name="xs:string"
                SchemaXml="xs:string"
                Type="xs:int"
        />
</SPObject

```

## Type

 **SPDocTemplate**
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**DefaultTemplate** <br/> |xs:boolean  <br/> |Optional. Indicates whether the document template is the default template that is used when creating a document library.  <br/> |
|**Description** <br/> |xs:string  <br/> |Optional. Description of the document template.  <br/> |
|**Name** <br/> |xs:string  <br/> |Optional. Name of the document template.  <br/> |
|**SchemaXml** <br/> |xs:string  <br/> |Optional. The XML schema that defines the document template. Represents the document template definition contained in the [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file for the specified site template.  <br/> |
|**Type** <br/> |xs:int  <br/> |Optional. The type of the document template. The integer value corresponds with the **Type** attribute specified for the document template in the [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file for the specified template.  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)|
   
## See also

#### Reference

[SPDocTemplate](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPDocTemplate.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)
#### Other resources

[Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx)

