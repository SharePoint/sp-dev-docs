---
title: "MapToIcon Element (View)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: 68a1f7e8-480a-4a9b-8436-745b8eb87cd0
description: "Last modified: March 09, 2015"
---

# MapToIcon Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Returns the file name of the icon associated with a given file name extension and **ProgID**.
  
```
<MapToIcon>
    ProgID|File_Extension
</MapToIcon>
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
|Numerous |
   
### Parent elements

||
|:-----|
|Numerous |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
### Remarks

The **MapToIcon** element uses the following syntax, separating the **ProgID** from the file name extension with a pipe symbol ("|"): 
  
```
<MapToIcon>ProgID|File_Extension </MapToIcon>
```

This element can be used in any rendering scenario (for example in a view, or as stand-alone element in a document), but it is most useful in a view of a document library.
  
For example,  `<MapToIcon>|xls</MapToIcon>` renders the Microsoft Excel .gif file defined within the [ByExtension](document-icons-schema/byextension-element-document-icons.md) element of the [DocIcon.xml](http://msdn.microsoft.com/library/ef6acad0-0a1a-457c-bc9b-ff1e368e59fb%28Office.15%29.aspx) file, and using  `<MapToIcon>Excel.Sheet|htm</MapToIcon>` renders the Excel .gif file defined in the [ByProgID](document-icons-schema/byprogid-element-document-icons.md) element of DocIcon.xml, but  `<MapToIcon>CustomApp.Baz|htm</MapToIcon>` would render the generic HTML icon because the **ProgID**, "CustomApp.Baz," is unknown.
  
Note that the set of file name extensions and **ProgIDs** that are supported are extensible by the system administrator. They can be edited in DocIcon.xml, and then the image files can be included in the  `\TEMPLATES\1033` directory. After such a modification, Microsoft Internet Information Services (IIS) needs to be restarted. Subsequently, any new Web sites based on Microsoft SharePoint Foundation will support the new file types and display the correct icons. The number of icons and **ProgIDs** that can be supported is limited only by system resources (memory and disk space). 
  
## Example

The following example creates the linked application icon that appears on the toolbar in the Edit Properties view for a document library item. The example uses the **MapToIcon** element to construct the URL of the icon based on the file extension of the document and the **ProgID** of the application associated with the document. 
  
```XML
<HTML><![CDATA[
   <a tabindex=2 class="ms-toolbar" target=_self href="javascript:" 
    onclick="javascript:editDocumentWithProgID2(' ]]>
</HTML>
<ScriptQuote NotAddingQuote="TRUE">
   <Field Name="ServerUrl" URLEncodeAsURL="TRUE" />
</ScriptQuote>
<HTML><![CDATA[ ',' ]]></HTML>
<GetVar Name="ProgID" />
<HTML><![CDATA[ ',' ]]></HTML>
<GetVar Name="Editor" />
<HTML><![CDATA[ ');javascript:return false;" ACCESSKEY=I 
   ID=diidEditItem> <IMG BORDER=0 ALT=" ]]>
</HTML>
<HTML>Icon</HTML>
<HTML><![CDATA[ " SRC=" ]]></HTML>
<ImagesPath />
<MapToIcon>
   <Column Name="HTML_x0020_File_x0020_Type" />
   <HTML>|</HTML>
   <Column Name="File_x0020_Type" />
</MapToIcon>
<HTML><![CDATA[ "></a>]]></HTML>
```


