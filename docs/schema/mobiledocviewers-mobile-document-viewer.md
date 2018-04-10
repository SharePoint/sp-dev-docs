---
title: "MobileDocViewers (Mobile Document Viewer)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Mobile Document Viewer XML
ms.assetid: 171e58ff-ca97-4ac8-9ebc-fdcaeabc885c
description: "Last modified: March 09, 2015"
---

# MobileDocViewers (Mobile Document Viewer)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies the document-viewing page for one or more types of documents. 
  
[MobileDocViewers (Mobile Document Viewer)](mobiledocviewers-mobile-document-viewer.md)
  
```
<MobileDocViewers>
  <MobileDocViewer>
  </ MobileDocViewer>
</MobileDocViewers >
```

 **Complex**
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
  
### Child elements

|**Element**|**Description**|
|:-----|:-----|
|[MobileDocViewer](mobiledocviewer-mobile-document-viewer.md) <br/> |Configures redirection for a specific type of document.  <br/> |
   
### Parent elements

None
  
### Remarks

The **MobileDocViewers** element persists in a file named mdocview_*.xml, where the asterisk (*) is some string of valid file name characters. We recommend using your company name or some other string that is not likely to duplicate the name that is used by other document viewer providers. The page is deployed to %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\Config on all front-end web servers. 
  
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

