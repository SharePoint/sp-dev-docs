---
title: Major CAML files
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f2332dea-1113-424e-b245-9785c09ed3cc
description: The major schema files that use Collaborative Application Markup Language (CAML) schemas for data definition or HTML rendering, and their locations.
---

# Major CAML files

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Many critical files in Microsoft SharePoint Foundation use [Collaborative Application Markup Language (CAML) schemas](collaborative-application-markup-language-caml-schemas.md) to define how data is displayed and how HTML is rendered. 
  
## CAML files

The following table describes the major schema files that use CAML schemas for data definition or HTML rendering, and specifies their locations under %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\. 
  
> [!CAUTION]
> With the exception of `DocIcon.xml`, Microsoft does not support modifying any of the built-in files that are installed with SharePoint Foundation. In most cases, you can supplement or override the effects of these files with files of your own. For details about modifying the effect of any specific file, see the SDK's documentation of the extensibility area to which the file belongs. 
  
|**File name**|**Location**|**Description**|
|:-----|:-----|:-----|
|DocIcon.xml  <br/> |\TEMPLATE\XML  <br/> |Specifies the icons that represent specific types of documents in document libraries. For more information, see [DocIcon.xml](http://msdn.microsoft.com/library/ef6acad0-0a1a-457c-bc9b-ff1e368e59fb%28Office.15%29.aspx).  <br/> |
|WebTemp.xml files  <br/> |\TEMPLATE\LCID\XML folder, where LCID is the numeric ID of the language/culture  <br/> |Itemizes the site definitions and their child configurations. Also, determines whether and how the configurations are available for selection by users in the SharePoint Foundation UI. For more information, see [WebTemp.xml](http://msdn.microsoft.com/library/199bbb65-d12f-475d-b157-31a1bffe84c8%28Office.15%29.aspx).  <br/> |
|Onet.xml  <br/> |One in \TEMPLATE\GLOBAL\XML. Others in subfolders of \TEMPLATE\SiteTemplates.  <br/> |Specifies the details of the configurations that constitute a site definition. For more information, see [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx).  <br/> |
|Schema.xml  <br/> |\TEMPLATE\FEATURES\ _featurename_, where  _featurename_ is the name of the parent feature of the list type.  <br/> |Defines a specific type of list. For more information, see [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx).  <br/> |
|alerttemplates.xml and alerttemplates_SMS.xml  <br/> |\TEMPLATE\XML  <br/> |Defines the format, contents, and properties used to create alert e-mail and SMS messages.  <br/> |
|STDVIEW.XML  <br/> |\TEMPLATE\GLOBAL\XML  <br/> |Defines the base view used in a site definition when creating new views.  <br/> |
|VWSTYLES.XML  <br/> |\TEMPLATE \GLOBAL\XML  <br/> |Defines the styles for viewing list data that are available on the **Create View** page for the list.  <br/> |
|BASE.XML  <br/> |\TEMPLATE \XML  <br/> |Provides the schemas used in creating the Lists, Documents, and UserInfo tables in the database when a new site is provisioned.  <br/> |
|DEADWEB.XML  <br/> |\TEMPLATE\LCID\XML folder, where LCID is the numeric ID of the language/culture  <br/> |Defines the message that is sent to the owner of a site to confirm site usage or to warn that the site will be automatically deleted.  <br/> |
|FldTypes.xml  <br/> |\TEMPLATE\XML  <br/> |Used during site or list creation to define how field types are rendered in the different modes for viewing list data. For more information, see [FldTypes.xml](http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6%28Office.15%29.aspx).  <br/> |
|RGNLSTNG.XML  <br/> |\TEMPLATE\LCID\XML folder, where LCID is the numeric ID of the language/culture  <br/> |Specifies the regional settings for currency, language, locale, and time zone.  <br/> |
|htmltransinfo.xml  <br/> |\TEMPLATE\XML  <br/> |Contains mapping instructions for directing a request to the URL for handling a request when the client computer does not have Microsoft Office installed.  <br/> |
   
## See also

- [How to: Create a Custom Site Definition and Configuration](http://msdn.microsoft.com/library/62b0552d-b7a7-4856-b906-c7bcb3155792%28Office.15%29.aspx)
- [Working with Site Templates and Definitions](http://msdn.microsoft.com/library/1edf6d4d-eddb-4cb5-9034-ed394e8a3e01%28Office.15%29.aspx) 
- [Working with Features](http://msdn.microsoft.com/library/ce5f5ce5-1429-439e-9261-2c4ba9788cc1%28Office.15%29.aspx)

