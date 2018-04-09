---
title: "ListTemplate Element (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 40b7918d-5678-4be8-bb97-6ac22bd0265f
description: "Last modified: March 09, 2015"
---

# ListTemplate Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a list definition or instance of a list template ([SPListTemplate](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPListTemplate.aspx)) object on a SharePoint list ([SPList](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPList.aspx)) object. 

## Definition

```XML
DECLARATION
<xs:element name="ListTemplate" type="SPListTemplate" />

USAGE
<SPObject>
        <ListTemplate
                BaseType="xs:string"
                Description="xs:string"
                Hidden="xs:string"
                ImageUrl="xs:string"
                InternalName="xs:string"
                IsCustomTemplate="xs:boolean"
                Name="xs:string"
                OnQuickLaunch="xs:string"
                SchemaXml="xs:string"
                Type="xs:string"
                Unique="xs:boolean"
        />
</SPObject>
```

## Type

[SPListTemplate](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPListTemplate.aspx)
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**BaseType** <br/> |xs:string  <br/> |Optional. Specifies the base type for the list definition or list template.  <br/> |
|**Description** <br/> |xs:string  <br/> |Optional. Provides a description of the list definition or list template.  <br/> |
|**Hidden** <br/> |[TRUEFALSE Simple Type (DeploymentManifest)](truefalse-simple-type-deploymentmanifest.md) <br/> |Optional. Specifies whether the list definition or list template is hidden from website users and is not available on the Create page.  <br/> |
|**ImageUrl** <br/> |xs:string  <br/> |Optional. Server-relative path to the location of the image used to represent the list definition or list template.  <br/> |
|**InternalName** <br/> |xs:string  <br/> |Optional. Represents the name used internally for the list definition or list template.  <br/> |
|**IsCustomTemplate** <br/> |xs:boolean  <br/> |Optional. Specifies whether the template object instance represents a list template; that is, a template contained in an .stp file. Users create custom templates when they save a list as a template.  <br/> |
|**Name** <br/> |xs:string  <br/> |Optional. Display name for the list definition or list template  <br/> |
|**OnQuickLaunch** <br/> |xs:string  <br/> |Optional. Specifies whether any list created with the list definition or list template is displayed on the Quick Launch bar.  <br/> |
|**SchemaXml** <br/> |xs:string  <br/> |Optional. Represents the schema that describes the list definition.  <br/> |
|**Type** <br/> |xs:string  <br/> |Optional. Specifies the list definition type as a [SPListTemplateType](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPListTemplateType.aspx) value.  <br/> |
|**Unique** <br/> |xs:boolean  <br/> |Optional. Specifies whether only one instance of the list type can be created by using the template, and that the template cannot be used to create a list by using the object model or user interface.  <br/> |
   
### Child elements

None
   
### Parent elements

[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)
   
## See also

- [SPListTemplate](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPListTemplate.aspx)
- [SPListTemplateType](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPListTemplateType.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

