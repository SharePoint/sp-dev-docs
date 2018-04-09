---
title: "WebTemplate Element (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f605e30e-722f-4e22-99e2-62bdb079d23b
description: "Last modified: March 09, 2015"
---

# WebTemplate Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a Windows SharePoint Services 3.0 Web template ([SPWebTemplate](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWebTemplate.aspx)) object, which provides the site definition used to create the site, or the name of the site defintion from which the site template used to create the site was derived. 

## Definition

```XML
DECLARATION
<xs:element name="WebTemplate" type="SPWebTemplate" />

USAGE
<SPObject>
        <WebTemplate
                Description="xs:string"
                Id="xs:string"
                ImageUrl="xs:string"
                IsCustomTemplate="xs:boolean"
                IsHidden="xs:boolean"
                IsUnique="xs:boolean"
                Name="xs:string"
                Title="xs:string"
        />
</SPObject

```

## Type

[SPWebTemplate](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWebTemplate.aspx) object
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Description** <br/> |xs:string  <br/> |Optional. Provides a description of the specified Web template.  <br/> |
|**Id** <br/> |xs:string  <br/> |Optional. Identifier of the site definition or site template.  <br/> |
|**ImageUrl** <br/> |xs:string  <br/> |Optional. Represents the URL to the image that is used to represent the site definition or site template in the user interface.  <br/> |
|**IsCustomTemplate** <br/> |xs:boolean  <br/> |Optional. Specifies whether the **SPWebTemplate** object is a site template; that is, a template contained within a .wsp file. The value is **true** if the **SPWebTemplate** object is a custom template.  <br/> |
|**IsHidden** <br/> |xs:boolean  <br/> |Optional. Specifies whether the site definition or site template is displayed as an option in the user interface. The value is **true** if the site template is hidden.  <br/> |
|**IsUnique** <br/> |xs:boolean  <br/> |Optional. Specifies whether the site created using the site definition or site template inherits from its parent website. The value is **true** if the site does not inherit from its parent website.  <br/> |
|**Name** <br/> |xs:string  <br/> |Optional. Represents the name of the site definition or site template.  <br/> |
|**Title** <br/> |xs:string  <br/> |Optional. Represents the display name of the site definition or site template.  <br/> |
   
### Child elements

None
   
### Parent elements

[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)|
   
## See also

- [SPWebTemplate](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWebTemplate.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

