---
title: "Mapping Element (Document Icons)"
ms.author: ricardol
author: ricardol
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Document Icons schema
api_type:
- schema
ms.assetid: 238311d9-6dc4-4864-a3a9-120475f3de20
description: "Last modified: March 09, 2015"
---

# Mapping Element (Document Icons)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in the [DocIcon.xml](http://msdn.microsoft.com/library/ef6acad0-0a1a-457c-bc9b-ff1e368e59fb%28Office.15%29.aspx) file to map particular document types to their respective icons. 
  
```
<Mapping
  Key = "Text"
  Value = "Text">
  EditText = "Text"
  OpenControl = "Text"
</Mapping>
```
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Key** <br/> |Required **Text**. Specifies either a **ProgID** or a file name extension.  <br/> |
|**Value** <br/> |Required **Text**. Specifies the image file name and extension. The file must exist in the %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\IMAGES folder.  <br/> |
|**EditText** <br/> |Optional **Text**. Specifies text that displays in drop-down menus as the editing item ("Edit in  _Application Name_") for a file that has been uploaded to a list.  <br/> |
|**OpenControl** <br/> |Optional **Text**. Specifies the name of the ActiveX control used to open the type of document.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[ByExtension](byextension-element-document-icons.md), [ByProgID](byprogid-element-document-icons.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Example

The following example maps **ProgIDs** and file name extensions as follows: 
  
- For different values of the **ProgID** <META> tag, it maps **ProgIDs** to the icons representing the applications. For example, "Excel.Sheet" maps to ichtmxls.gif. 
    
- It maps file name extensions to appropriate icons. For example, "docx" maps to icdocx.png. 
    
- If neither of the above causes a match, it provides a default value, icgen.gif, for the mapping.
    
```XML
<DocIcons>
  <ByProgID>
    <Mapping Key="Excel.Sheet" Value="ichtmxls.gif" EditText="Microsoft Excel" OpenControl="SharePoint.OpenDocuments" />
    <Mapping Key="PowerPoint.Slide" Value="ichtmppt.gif" EditText="Microsoft PowerPoint" OpenControl="SharePoint.OpenDocuments" />
    <Mapping Key="Word.Document" Value="ichtmdoc.gif" EditText="Microsoft Word" OpenControl="SharePoint.OpenDocuments"/>
  </ByProgID>
  <ByExtension>
    <Mapping Key="docx" Value="icdocx.png" EditText="Microsoft Word" OpenControl="SharePoint.OpenDocuments"/>
    <Mapping Key="pptx" Value="icpptx.png" EditText="Microsoft PowerPoint" OpenControl="SharePoint.OpenDocuments"/>
    <Mapping Key="xlsx" Value="icxlsx.png" EditText="Microsoft Excel" OpenControl="SharePoint.OpenDocuments"/>
    <Mapping Key="zip" Value="iczip.gif" OpenControl=""/>
  </ByExtension>
  <Default>
    <Mapping Value="icgen.gif"/>
  </Default>
</DocIcons>
```


