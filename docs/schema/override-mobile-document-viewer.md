---
title: "Override (Mobile Document Viewer)"
ms.author: rickki
author: rickki
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Mobile Document Viewer XML
ms.assetid: 0a24e16c-c447-4851-a5f7-c4c7dbe98b06
description: "Last modified: March 09, 2015"
---

# Override (Mobile Document Viewer)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies an alternative URL to which a mobile device is redirected when it can use an alternative viewer to open the files of the specified type.
  
[MobileDocViewers (Mobile Document Viewer)](mobiledocviewers-mobile-document-viewer.md)
  
[MobileDocViewer (Mobile Document Viewer)](mobiledocviewer-mobile-document-viewer.md)
  
[BrowserCondition (Mobile Document Viewer)](browsercondition-mobile-document-viewer.md)
  
[Override (Mobile Document Viewer)](override-mobile-document-viewer.md)
  
```
<Override ... />
```

 **Complex**
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**FilePath** <br/> |The website-relative path to the request handler for devices that are capable of opening documents of the specified type in some other viewer.  <br/> |
|**AppendSourceUrl** <br/> |True, if a source query ID should be appended to the URL of the handler; otherwise, false. The source query value is the path to the document.  <br/> |
|**OueryID** <br/> |An alternative query for the one that is specified in the parent \<MobileDocViewer\> element.  <br/> |
   
### Child elements

None
  
### Parent elements

|**Element**|**Description**|
|:-----|:-----|
|[BrowserCondition (Mobile Document Viewer)](browsercondition-mobile-document-viewer.md) <br/> |Identifies a browser condition under which redirection to a page that hosts a viewer for a specified type of document is overridden because the browser can open documents of a specified type directly.  <br/> |
   
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

