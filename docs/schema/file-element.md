---
title: "File element"
ms.author: kdeding
author: kdeding
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
ms.assetid: db86d800-9f68-43cc-b7d5-3bd76537dfde
description: Specifies a file to include within a module in a site definition configuration or Web template configuration. 
---

# File element

**Applies to:** Lync 2013 | Lync Server 2013 | SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies a file to include within a module in a site definition configuration or Web template configuration. 
  
```XML
<File
  DocumentTemplateForList = "Text"  DoGUIDFixUp = "TRUE" | "FALSE"
  IgnoreIfAlreadyExists = "TRUE" | "FALSE"
  Level = "Text"
  Name = "Text"
  NavBarHome = "TRUE" | "FALSE"
  Path = "Text"
  Type = "Text"
  Url = "Text >
</File>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**DocumentTemplateForList** <br/> |Optional **Text**.  <br/> |
|**DoGUIDFixUp** <br/> |Optional **Boolean**.  <br/> |
|**IgnoreIfAlreadyExists** <br/> |Optional **Boolean**.  <br/> |
|**Level** <br/> |Optional **Text**.  <br/> |
|**Name** <br/> | Optional **Text**. Specifies the virtual path for the file. Cannot contain the following characters:  <br/>  \"  <br/>  #  <br/>  %  <br/>  &amp;  <br/>  \*  <br/>  :  <br/>  \<  <br/>  \>  <br/>  ?  <br/>  \\  <br/>  {  <br/>  }  <br/>  |  <br/>  ~  <br/>  \x7f  <br/> |
|**NavBarHome** <br/> |Optional **Boolean**. **TRUE** if the file is the destination URL for the **Home** link in the top navigation bar used throughout the site.  <br/> |
|**Path** <br/> | Optional **Text**. Specifies the physical path to the file relative to %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\SiteTemplates\ _Site_Definition_ for Onet.xml files. Specifies the physical path to the file relative to %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\FEATURES\  _Feature_Name_ for Feature.xml files. Can only contain the following characters:  <br/>  alphanumeric  <br/>  hyphen (**-**)  <br/>  underscore (**_**)  <br/>  period (**.**)  <br/>  space ( )  <br/> |
|**Type** <br/> |Optional **Text**. Specifies that the file be cached in memory on the front-end server. Possible values include **Ghostable** and **GhostableInLibrary**. Both values specify that the file will be cached, but **GhostableInLibrary** specifies that the file will be cached as part of a list whose base type is **Document** **Library**.<br/><br/>For example, when changes are made to a home page through the user interface (UI), only the differences between the original page definition and the new page are stored in the database. The default.aspx is cached in memory, in addition to the schema files. The HTML page that is displayed in the browser is constructed through the combined page definition that results from the original page definition that is cached in memory and from changes that are stored in the database.  <br/> |
|**Url** <br/> | Required **Text**. Specifies the virtual path for the file. If the **Name** attribute is specified, its value is used for the virtual path. If **Path** is not specified, the value of **Url** is used for the physical path. Cannot contain the following characters:  <br/>  \"  <br/>  #  <br/>  %  <br/>  &amp;  <br/>  \*  <br/>  :  <br/>  \<  <br/>  \>  <br/>  ?  <br/>  \\  <br/>  {  <br/>  }  <br/>  |  <br/>  ~  <br/>  \x7f  <br/> |
   
### Child elements

- [AllUsersWebPart](alluserswebpart-element-site.md)
- [BinarySerializedWebPart](binaryserializedwebpart-element-site.md)
- [NavBarPage](navbarpage-element-sitemodule.md)
- [Property](property-element-sitemodule.md)
- [View](view-element-site.md)
- [WebPartConnection](webpartconnection-element-site.md)
   
### Parent elements

- [Module](module-element-site.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded   
   
### Remarks

For an example that uses the **File** element, see [Module element (Site)](module-element-site.md).  
  

