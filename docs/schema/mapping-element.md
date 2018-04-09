---
title: "Mapping Element"
ms.author: NormSohl
author: NormSohl
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b280a03d-dfdc-4d29-98b0-3e4bcb0f8231
description: "Last modified: March 09, 2015"
---

# Mapping Element

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Used in an HtmlTransInfo.xml file ( `\Program Files\Common Files\Microsoft Shared\web server extensions\12TEMPLATE\XML`) to direct requests to the URL for handling the requests when the client computer does not have the 2007 Microsoft Office system installed.
  
```
<Mapping
  AcceptHeader = "Text"
  Extension = "Text"
  HandlerUrl = "Text"
  ProgId = "Text">
</Mapping>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**AcceptHeader** <br/> |Optional **Text**. Specifies the application to use to open a file in a document library. If HTML viewing is enabled, Microsoft SharePoint Foundation compares the value of this attribute with the Accept-Header HTTP header of the request, and either opens the document in its native format through the specified application, or offers to convert the document to HTML. For more information, see [Programming with the Microsoft.HtmlTrans Namespace](http://msdn.microsoft.com/library/ed3b5457-0dbd-49f7-b60e-545b44d4a2b2%28Office.15%29.aspx).  <br/> |
|**Extension** <br/> |Optional **Text**. Specifies the file name extension for the document type.  <br/> |
|**HandlerUrl** <br/> |Optional **Text**. Specifies the URL of a converter program used by the server to handle a request when the client computer does not have Microsoft Office system installed.  <br/> |
|**ProgId** <br/> |Optional **Text**. Specifies the name of the ActiveX control used to open the type of document.  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|[HtmlTrInfo](htmltrinfo-element.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   

