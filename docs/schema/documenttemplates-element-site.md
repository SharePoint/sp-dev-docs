---
title: "DocumentTemplates Element (Site)"
ms.

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
ms.assetid: f3c0c837-6d70-40e9-8d8a-e2064c5dad83
description: "Last modified: March 09, 2015"
---

# DocumentTemplates Element (Site)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the collection of document library templates that are available for creating document libraries. This collection is listed in the **Template Type** drop-down list box on the **New Document Library** page. 
  
```
<DocumentTemplates>
</DocumentTemplates>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
### Child elements

||
|:-----|
|[DocumentTemplate](documenttemplate-element-site.md)|
   
### Parent elements

||
|:-----|
|[Project](project-element-site.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following excerpt from the [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file for the standard SharePoint Foundation site definition (**STS**) defines the document templates that are available by default.
  
```XML
<DocumentTemplates>
    <DocumentTemplate Path="STS" Name="" DisplayName="$Resources:core,doctemp_None;" Type="100" Default="FALSE" Description="$Resources:core,doctemp_None_Desc;" />
    <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_Word97;" Type="101" Description="$Resources:core,doctemp_Word97_Desc;">
      <DocumentTemplateFiles>
        <DocumentTemplateFile Name="doctemp\word\wdtmpl.doc" TargetName="Forms/template.doc" Default="TRUE" />
      </DocumentTemplateFiles>
    </DocumentTemplate>
    <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_Excel97;" Type="103" Description="$Resources:core,doctemp_Excel97_Desc;">
      <DocumentTemplateFiles>
        <DocumentTemplateFile Name="doctemp\xl\xltmpl.xls" TargetName="Forms/template.xls" Default="TRUE" />
      </DocumentTemplateFiles>
    </DocumentTemplate>
    <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_Powerpoint97;" Type="104" Description="$Resources:core,doctemp_Powerpoint97_Desc;">
      <DocumentTemplateFiles>
        <DocumentTemplateFile Name="doctemp\ppt\pptmpl.pot" TargetName="Forms/template.pot" Default="TRUE" />
      </DocumentTemplateFiles>
    </DocumentTemplate>
    <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_Word;" Type="121" Default="TRUE" Description="$Resources:core,doctemp_Word_Desc;">
      <DocumentTemplateFiles>
        <DocumentTemplateFile Name="doctemp\word\wdtmpl.dotx" TargetName="Forms/template.dotx" Default="TRUE" />
      </DocumentTemplateFiles>
    </DocumentTemplate>
    <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_Excel;" Type="122" Description="$Resources:core,doctemp_Excel_Desc;">
      <DocumentTemplateFiles>
        <DocumentTemplateFile Name="doctemp\xl\xltmpl.xlsx" TargetName="Forms/template.xlsx" Default="TRUE" />
      </DocumentTemplateFiles>
    </DocumentTemplate>
    <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_Powerpoint;" Type="123" Description="$Resources:core,doctemp_Powerpoint_Desc;">
      <DocumentTemplateFiles>
        <DocumentTemplateFile Name="doctemp\ppt\pptmpl.pptx" TargetName="Forms/template.pptx" Default="TRUE" />
      </DocumentTemplateFiles>
    </DocumentTemplate>
    <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_OneNote;" Type="111" Description="$Resources:core,doctemp_OneNote_Desc;">
      <DocumentTemplateFiles>
        <DocumentTemplateFile Name="doctemp\onenote\template.onepkg" TargetName="Forms/template.onepkg" Default="TRUE" />
      </DocumentTemplateFiles>
    </DocumentTemplate>
    <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_FP;" Type="102" Description="$Resources:core,doctemp_FP_Desc;">
      <DocumentTemplateFiles>
        <DocumentTemplateFile Name="doctemp\fp\fptmpl.htm" TargetName="Forms/template.htm" Default="TRUE" />
      </DocumentTemplateFiles>
    </DocumentTemplate>
    <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_BasicPage;" Type="105" Description="$Resources:core,doctemp_BasicPage_Desc;">
      <DocumentTemplateFiles>
        <DocumentTemplateFile Name="doctemp\blankpgs\_basicpage.htm" TargetName="Forms/_basicpage.htm" Default="TRUE" />
      </DocumentTemplateFiles>
    </DocumentTemplate>
    <DocumentTemplate Path="STS" DisplayName="$Resources:core,doctemp_WebPartPage;" Type="106" Description="$Resources:core,doctemp_WebPartPage_Desc;">
      <DocumentTemplateFiles>
        <DocumentTemplateFile Name="doctemp\smartpgs\_webpartpage.htm" TargetName="Forms/_webpartpage.htm" Default="TRUE" />
      </DocumentTemplateFiles>
    </DocumentTemplate>
    <DocumentTemplate XMLForm="TRUE" Path="STS" DisplayName="$Resources:core,doctemp_BlankForm;" Type="1000" Default="TRUE" Description="$Resources:core,doctemp_BlankForm_Desc;">
      <DocumentTemplateFiles>
        <DocumentTemplateFile Name="doctemp\xmlforms\blank\template.xml" TargetName="Forms/template.xml" Default="TRUE" />
      </DocumentTemplateFiles>
    </DocumentTemplate>
  </DocumentTemplates>
```


