---
title: "Site schema"
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
localization_priority: Normal
api_name:
- Site schema
api_type:
- schema
ms.assetid: e711f6b0-2787-4a13-b0e9-140c3435c1e2
description: "Last modified: July 15, 2011"
---

# Site schema

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
The Site schema of [Collaborative Application Markup Language (CAML)](introduction-to-collaborative-application-markup-language-caml.md) is used to define metadata for creating websites, including the root site of site collections. A site definition specifies the navigation bars, list templates, document templates, list base types, configurations, modules, components, and server email footer for creating sites. 

The site definition is specified through an [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file located in %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\SiteTemplates, and through a [WebTemp\*.xml](http://msdn.microsoft.com/library/199bbb65-d12f-475d-b157-31a1bffe84c8%28Office.15%29.aspx) file located in %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\1033\XML. 
  
Sites can be created or modified programmatically through the object model (for example, members of the [SPWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.aspx) and [SPWebCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWebCollection.aspx) classes, or members of the [SPSite](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPSite.aspx) and [SPSiteCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.SPSiteCollection.aspx) classes). They can also be remotely created or modified through the Administration Web service (methods of the [Admin](https://msdn.microsoft.com/library/WebSvcAdmin.Admin.aspx) class), the Document Workspace Web service (methods of [Dws](https://msdn.microsoft.com/library/WebSvcDWS.Dws.aspx)), or the Meetings Web service (members of [Meetings](https://msdn.microsoft.com/library/WebSvcMeetings.Meetings.aspx)). 
  
## Site schema elements

### Onet.xml
  
[\<Project\>](project-element-site.md)
  
[\<NavBars\>](navbars-element-site.md)
  
[\<NavBar\>](navbar-element-site.md)
  
[\<NavBarLink\>](navbarlink-element-site.md)
  
[\<NavBarPage\>](navbarpage-element-sitemodule.md)
  
[\<ListTemplates\>](listtemplates-element-site.md)
  
[\<ListTemplate\>](listtemplate-element-site.md)
  
[\<DocumentTemplates\>](documenttemplates-element-site.md)
  
[\<DocumentTemplate\>](documenttemplate-element-site.md)
  
[\<DocumentTemplateFiles\>](documenttemplatefiles-element-site.md)
  
[\<DocumentTemplateFile\>](documenttemplatefile-element-site.md)
  
[\<BaseTypes\>](basetypes-element-site.md)
  
[\<BaseType\>](basetype-element-site.md)
  
[\<MetaData\>](metadata-element-site.md)
  
[\<Configurations\>](configurations-element-site.md)
  
[\<Configuration\>](configuration-element-site.md)
  
[\<ExecuteUrl\>](executeurl-element-site.md)
  
[\<Lists\>](lists-element-site.md)
  
[\<List\>](list-element-site.md)
  
[\<Data\>](data-element-site.md)
  
[\<Rows\>](rows-element-site.md)
  
[\<Row\>](row-element-site.md)
  
[\<Field\>](field-element-site.md)
  
[\<Modules\>](modules-element-site.md) (see [Module schema](#module-schema))
  
[\<WebFeatures\>](webfeatures-element-site.md)
  
[\<Feature\>](feature-element-site.md)
  
[\<Properties\>](properties-element-site.md)
  
[\<Property\>](property-element-sitefeature.md)
  
[\<SiteFeatures\>](sitefeatures-element-site.md)
  
[\<Feature\>](feature-element-site.md)
  
[\<Properties\>](properties-element-site.md)
  
[\<Property\>](property-element-sitefeature.md)
  
[\<Modules\>](modules-element-site.md) (see [Module schema](#module-schema))
  
[\<Components\>](components-element-site.md)
  
[\<ExternalSecurityProvider\>](externalsecurityprovider-element-site.md)
  
[\<FileDialogPostProcessor\>](filedialogpostprocessor-element-site.md)
  
[\<ServerEmailFooter\>](serveremailfooter-element-site.md)
  
### Module schema
  
[\<Module\>](module-element-site.md)
  
[\<File\>](file-element.md)
  
[\<AllUsersWebPart\>](alluserswebpart-element-site.md)
  
[\<BinarySerializedWebPart\>](binaryserializedwebpart-element-site.md)
  
[\<GUIDMap\>](guidmap-element-site.md)
  
[\<GUID\>](guid-element-site.md)
  
[\<WebPart\>](webpart-element-site.md)
  
[\<NavBarPage\>](navbarpage-element-sitemodule.md)
  
[\<Property\>](property-element-sitemodule.md)
  
[\<View\>](view-element-site.md)
  
[\<BinarySerializedWebPart\>](binaryserializedwebpart-element-site.md)
  
[\<GUIDMap\>](guidmap-element-site.md)
  
[\<GUID\>](guid-element-site.md)
  
[\<WebPart\>](webpart-element-site.md)
  
[\<WebPartConnection\>](webpartconnection-element-site.md)
  
[\<WebPartTransformer\>](webparttransformer-element-site.md)
  
### WebTemp\*.xml
  
[\<Templates\>](templates-element-site.md)
  
[\<Template\>](template-element-site.md)
  
[\<Configuration\>](configuration-element-site.md)
  

## See also

- [Site schema elements A-L](site-schema-elements-a-l.md)
- [Site schema elements M-Z](site-schema-elements-m-z.md) 