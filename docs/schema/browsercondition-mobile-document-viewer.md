---
title: "BrowserCondition (Mobile Document Viewer)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Mobile Document Viewer XML
ms.assetid: dae1e50e-da90-4131-b8e0-155aa488d6fc
description: "Last modified: March 09, 2015"
---

# BrowserCondition (Mobile Document Viewer)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Identifies a browser condition under which redirection to a page that hosts a viewer for a specified type of document is overridden because the device can use an alternative viewer for the specified type of file, possibly a viewer that is installed on the device.
  
[MobileDocViewers (Mobile Document Viewer)](mobiledocviewers-mobile-document-viewer.md)
  
[MobileDocViewer (Mobile Document Viewer)](mobiledocviewer-mobile-document-viewer.md)
  
[BrowserCondition (Mobile Document Viewer)](browsercondition-mobile-document-viewer.md)
  
```
  <BrowserCondition ... >
 </ BrowserCondition>
```

 **Complex**

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Id** <br/> |The name of a browser capability in the  `compat.browser` file.  <br/> |
|**Value** <br/> |True, if the presence of the capability means that redirection is overridden; otherwise, false.  <br/> |
   
### Child elements

|**Element**|**Description**|
|:-----|:-----|
|[Override (Mobile Document Viewer)](override-mobile-document-viewer.md) <br/> |Specifies an alternative redirection URL.  <br/> |
   
### Parent elements

|**Element**|**Description**|
|:-----|:-----|
|[MobileDocViewer (Mobile Document Viewer)](mobiledocviewer-mobile-document-viewer.md) <br/> |Specifies redirection of a request for a document from a mobile device.  <br/> |
   
## Example

The following example shows this element in use.
  
```
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

