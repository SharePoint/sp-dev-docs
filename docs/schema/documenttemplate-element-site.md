---
title: "DocumentTemplate Element (Site)"
ms.author: rickki
author: rickki
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Site schema
api_type:
- schema
ms.assetid: 32b6d4ad-df45-44db-8ecd-b0f1b2d24143
description: "Last modified: March 09, 2015"
---

# DocumentTemplate Element (Site)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a document library template for the New Document Library page in a Web site based on Microsoft SharePoint Foundation.
  
```
<DocumentTemplate
  Default = "TRUE" | "FALSE"
    Description = "Text"
  DisplayName = "Text"
  Name = "Text"
  Path = "Text"
  Type = "Number">
</DocumentTemplate>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Default** <br/> |Optional **Boolean**. **TRUE** if the template is the default choice in the **Template** **Type** drop-down list box of the New Document Library page.  <br/> |
|**Description** <br/> |Optional **Text**. A description of the template.  <br/> |
|**DisplayName** <br/> |Required **Text**. The display name of the template.  <br/> |
|**Name** <br/> |Optional **Text**. The internal name of the template.  <br/> |
|**Path** <br/> |Optional **Text**. The name of the site definition to which the document template belongs.  <br/> |
|**Type** <br/> |Required **Integer**. A unique ID for the template.  <br/> |
|**XMLForm** <br/> |Optional **Boolean**. **TRUE** if the document template applies to a form library.  <br/> |
   
### Child elements

||
|:-----|
|[DocumentTemplateFiles](documenttemplatefiles-element-site.md)|
   
### Parent elements

||
|:-----|
|[DocumentTemplates](documenttemplates-element-site.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Example

The following example defines a Microsoft Office Excel 2007 document library template.
  
```XML
<DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_Excel;" Type="103" Description="$Resources:core,doctemp_Excel_Desc;">
  <DocumentTemplateFiles>
    <DocumentTemplateFile Name="doctemp\xl\xltmpl.xls" TargetName="Forms/template.xls" Default="TRUE" />
  </DocumentTemplateFiles>
</DocumentTemplate>
```


