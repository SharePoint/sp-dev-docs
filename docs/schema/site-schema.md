---
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Site schema
api_type:
- schema
ms.assetid: e711f6b0-2787-4a13-b0e9-140c3435c1e2
---

# Site Schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The Site schema of [Collaborative Application Markup Language (CAML)](introduction-to-collaborative-application-markup-language-caml.md) is used to define metadata for creating websites, including the root site of site collections. 

A site definition specifies the navigation bars, list templates, document templates, list base types, configurations, modules, components, and server email footer for creating sites. The site definition is specified through an [Onet.xml](https://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx) file located in `%ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\TEMPLATE\\SiteTemplates`, and through a [WebTempDOCS-ASTERISK.xml](http://msdn.microsoft.com/library/199bbb65-d12f-475d-b157-31a1bffe84c8(Office.15).aspx) file located in `%ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\TEMPLATE\\1033\\XML`.

Sites can be created or modified programmatically through the object model (for example, members of the **SPWeb** and **SPWebCollection** classes, or members of the **SPSite** and **SPSiteCollection** classes). They can also be remotely created or modified through the Administration Web service (methods of the **Admin** class), the Document Workspace Web service (methods of **Dws**, or the Meetings Web service (members of **Meetings**).


## Onet.xml

[DOCS-LESSTHANProjectDOCS-GREATERTHAN](project-element-site.md)

- [DOCS-LESSTHANNavBarsDOCS-GREATERTHAN](navbars-element-site.md)

- [DOCS-LESSTHANNavBarDOCS-GREATERTHAN](navbar-element-site.md)

- [DOCS-LESSTHANNavBarLinkDOCS-GREATERTHAN](navbarlink-element-site.md)

- [DOCS-LESSTHANNavBarPageDOCS-GREATERTHAN](navbarpage-element-sitemodule.md)

[DOCS-LESSTHANListTemplatesDOCS-GREATERTHAN](listtemplates-element-site.md)

- [DOCS-LESSTHANListTemplateDOCS-GREATERTHAN](listtemplate-element-site.md)

[DOCS-LESSTHANDocumentTemplatesDOCS-GREATERTHAN](documenttemplates-element-site.md)

- [DOCS-LESSTHANDocumentTemplateDOCS-GREATERTHAN](documenttemplate-element-site.md)

- [DOCS-LESSTHANDocumentTemplateFilesDOCS-GREATERTHAN](documenttemplatefiles-element-site.md)

- [DOCS-LESSTHANDocumentTemplateFileDOCS-GREATERTHAN](documenttemplatefile-element-site.md)

[DOCS-LESSTHANBaseTypesDOCS-GREATERTHAN](basetypes-element-site.md)

- [DOCS-LESSTHANBaseTypeDOCS-GREATERTHAN](basetype-element-site.md)

- [DOCS-LESSTHANMetaDataDOCS-GREATERTHAN](metadata-element-site.md)

[DOCS-LESSTHANConfigurationsDOCS-GREATERTHAN](configurations-element-site.md)

- [DOCS-LESSTHANConfigurationDOCS-GREATERTHAN](configuration-element-site.md)

- [DOCS-LESSTHANExecuteUrlDOCS-GREATERTHAN](executeurl-element-site.md)

- [DOCS-LESSTHANListsDOCS-GREATERTHAN](lists-element-site.md)

- [DOCS-LESSTHANListDOCS-GREATERTHAN](list-element-site.md)

- [DOCS-LESSTHANDataDOCS-GREATERTHAN](data-element-site.md)

- [DOCS-LESSTHANRowsDOCS-GREATERTHAN](rows-element-site.md)

- [DOCS-LESSTHANRowDOCS-GREATERTHAN](row-element-site.md)

- [DOCS-LESSTHANFieldDOCS-GREATERTHAN](field-element-site.md)

[DOCS-LESSTHANModulesDOCS-GREATERTHAN](modules-element-site.md)

  [See Module Schema](#module-schema)

- [DOCS-LESSTHANWebFeaturesDOCS-GREATERTHAN](webfeatures-element-site.md)

- [DOCS-LESSTHANFeatureDOCS-GREATERTHAN](feature-element-site.md)

- [DOCS-LESSTHANPropertiesDOCS-GREATERTHAN](properties-element-site.md)

- [DOCS-LESSTHANPropertyDOCS-GREATERTHAN](property-element-sitefeature.md)

- [DOCS-LESSTHANSiteFeaturesDOCS-GREATERTHAN](sitefeatures-element-site.md)

- [DOCS-LESSTHANFeatureDOCS-GREATERTHAN](feature-element-site.md)

- [DOCS-LESSTHANPropertiesDOCS-GREATERTHAN](properties-element-site.md)

- [DOCS-LESSTHANPropertyDOCS-GREATERTHAN](property-element-sitefeature.md)

[DOCS-LESSTHANModulesDOCS-GREATERTHAN](modules-element-site.md)

  [See Module Schema](#module-schema)

[DOCS-LESSTHANComponentsDOCS-GREATERTHAN](components-element-site.md)

- [DOCS-LESSTHANExternalSecurityProviderDOCS-GREATERTHAN](externalsecurityprovider-element-site.md)

- [DOCS-LESSTHANFileDialogPostProcessorDOCS-GREATERTHAN](filedialogpostprocessor-element-site.md)

[DOCS-LESSTHANServerEmailFooterDOCS-GREATERTHAN](serveremailfooter-element-site.md)

## Module Schema

[DOCS-LESSTHANModuleDOCS-GREATERTHAN](module-element-site.md)

- [DOCS-LESSTHANFileDOCS-GREATERTHAN](file-element.md)

- [DOCS-LESSTHANAllUsersWebPartDOCS-GREATERTHAN](alluserswebpart-element-site.md)

- [DOCS-LESSTHANBinarySerializedWebPartDOCS-GREATERTHAN](binaryserializedwebpart-element-site.md)

          
[DOCS-LESSTHANGUIDMapDOCS-GREATERTHAN](guidmap-element-site.md)

- [DOCS-LESSTHANGUIDDOCS-GREATERTHAN](guid-element-site.md)

- [DOCS-LESSTHANWebPartDOCS-GREATERTHAN](webpart-element-site.md)

- [DOCS-LESSTHANNavBarPageDOCS-GREATERTHAN](navbarpage-element-sitemodule.md)

- [DOCS-LESSTHANPropertyDOCS-GREATERTHAN](property-element-sitemodule.md)

- [DOCS-LESSTHANViewDOCS-GREATERTHAN](view-element-site.md)


[DOCS-LESSTHANBinarySerializedWebPartDOCS-GREATERTHAN](binaryserializedwebpart-element-site.md)

- [DOCS-LESSTHANGUIDMapDOCS-GREATERTHAN](guidmap-element-site.md)

- [DOCS-LESSTHANGUIDDOCS-GREATERTHAN](guid-element-site.md)

- [DOCS-LESSTHANWebPartDOCS-GREATERTHAN](webpart-element-site.md)

       
[DOCS-LESSTHANWebPartConnectionDOCS-GREATERTHAN](webpartconnection-element-site.md)

- [DOCS-LESSTHANWebPartTransformerDOCS-GREATERTHAN](webparttransformer-element-site.md)

## WebTempDOCS-ASTERISK.xml

[DOCS-LESSTHANTemplatesDOCS-GREATERTHAN](templates-element-site.md)

- [DOCS-LESSTHANTemplateDOCS-GREATERTHAN](template-element-site.md)

- [DOCS-LESSTHANConfigurationDOCS-GREATERTHAN](configuration-element-site.md)








