---
title: "Forms Element (List)"
ms.author: NormSohl
author: NormSohl
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- List schema
api_type:
- schema
ms.assetid: 59c9e1fc-764b-4d63-9b66-aca3dfe5331e
description: "Last modified: March 09, 2015"
---

# Forms Element (List)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Contains the collection of forms in a list definition or in a base list type of a site definition.
  
```
<Forms>  <Form    Default = "TRUE" | "FALSE"    Path = "Text"    SetupPath = "Text"    Template = "Text"    Type = "DisplayForm" | "EditForm" | "NewForm"    Url = "URL"    UseDefaultListFormWebPart = "TRUE" | "FALSE"    UseLegacyForm = "TRUE" | "FALSE"    WebPartZoneID = "Text">    <WebParts>      <AllUsersWebPart        WebPartOrder = Integer        WebPartZoneID = "Text">          <![CDATA[...]]>      </AllUsersWebPart>    </WebParts>  </Form>
</Forms>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|[Form](form-element-list.md)|
   
## Parent Elements

||
|:-----|
|[Default](default-element-listfield.md), [MetaData (List)](metadata-element-list.md), [MetaData (Site)](../../collaborative-application-markup-language-caml-schemas/site-schema/metadata-element-site.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   

