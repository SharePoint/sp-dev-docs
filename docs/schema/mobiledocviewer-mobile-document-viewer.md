---
title: "MobileDocViewer (Mobile Document Viewer)"
ms.

manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Mobile Document Viewer XML
ms.assetid: 5f606061-9eb5-49c9-93c0-75b3bd6bc4f6
description: "Last modified: March 09, 2015"
---

# MobileDocViewer (Mobile Document Viewer)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies how a request for a document for a specific type is redirected to a page that hosts a viewer that can open documents of that type.
  
[MobileDocViewers (Mobile Document Viewer)](mobiledocviewers-mobile-document-viewer.md)
  
[MobileDocViewer (Mobile Document Viewer)](mobiledocviewer-mobile-document-viewer.md)
  
```
  <MobileDocViewer ... >  </ MobileDocViewer>
```

 **Complex**
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Name** <br/> |The file name extension on files of the type that can be opened in the viewer.  <br/> |
|**FilePath** <br/> |The website-relative path to the page that hosts the viewer.  <br/> |
|**FeatureId** <br/> |Optional. The GUID of the Feature, if any, that was used to deploy the viewer page.  <br/> |
|**QueryId** <br/> |The query ID key; for example, "doc".  <br/> |
|**AppendSourceUrl** <br/> |True if a source query ID should be appended to the URL of page that hosts the viewer; otherwise, false. The source query value is the path to the folder that holds the document. In the special case where "?mobile=1" is part of the original URL, the source query value is the same as the source query value of the original URL.  <br/> |
   
### Child elements

|**Element**|**Description**|
|:-----|:-----|
|[BrowserCondition (Mobile Document Viewer)](browsercondition-mobile-document-viewer.md) <br/> |Optional. Identifies a browser capability that means the browser can use an alternative viewer for the specified type of file.  <br/> |
   
### Parent elements

|**Element**|**Description**|
|:-----|:-----|
|[MobileDocViewers (Mobile Document Viewer)](mobiledocviewers-mobile-document-viewer.md) <br/> |Specifies the document viewing page for one or more types of documents.  <br/> |
   
## Example

The following example shows this element in use.
  
```XML
<MobileDocViewers>
  <MobileDocViewer Name="docx" FilePath="/_layouts/mobile/mWord.aspx" FeatureId="8DFAF93D-E23C-4471-9347-07368668DDAF" QueryId="doc" AppendSourceUrl="true" >
    <BrowserCondition Id="overrideMobileDocViewerRedirection" Value="true">
      <Override FilePath="/_layouts/MobileDocHandler.ashx" AppendSourceUrl="false" />
    </BrowserCondition>
  </MobileDocViewer>
</MobileDocViewers>

```

## See also



[Developing Mobile Document Viewers](http://msdn.microsoft.com/library/acd5386d-7808-4fd8-843f-0a4ac9ddd6b0%28Office.15%29.aspx)

