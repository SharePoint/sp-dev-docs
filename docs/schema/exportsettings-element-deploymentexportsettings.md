---
title: "ExportSettings Element (DeploymentExportSettings)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0dabce09-2a1e-4688-a97b-5f3fc5b6ba67
description: "Last modified: March 09, 2015"
---

# ExportSettings Element (DeploymentExportSettings)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Deployment export settings root element, which provides an XML wrapper for the deployment export settings container object and provides a means for exporting content to a content migration package.

## Definition

```XML
DECLARATION
<xs:element name="ExportSettings" type="SPExportSettings" />

USAGE
<ExportSettings>
        <ExportObjects />
<!-- SPDeploymentSettings -->
        <xs:attribute name="SiteUrl" type="xs:string" />
        <xs:attribute name="FileLocation" type="xs:string" />
        <xs:attribute name="BaseFileName" type="xs:string" />
        <xs:attribute name="IncludeSecurity" type="SPIncludeSecurity" />
<!-- SPExportSettings -->
        <xs:attribute name="IncludeVersions" type="SPIncludeVersions" />
        <xs:attribute name="ExportMethod" type="SPExportMethodType" />
        <xs:attribute name="ExportChangeToken" type="xs:string" />
        <xs:attribute name="ExportPublicSchema" type="xs:boolean" default="true" />
</ExportSettings>

```

## Type

[SPExportSettings](https://msdn.microsoft.com/library/Microsoft.SharePoint.Deployment.SPExportSettings.aspx)
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**BaseFileName** <br/> |xs:string  <br/> |Optional. The name of the content migration package file.  <br/> |
|**ExportChangeToken** <br/> |xs:string  <br/> |Optional. Specifies the token to use when exporting incremental changes based on changes since the last export.  <br/> |
|**ExportMethod** <br/> |[SPExportMethodType Simple Type (DeploymentExportSettings)](spexportmethodtype-simple-type-deploymentexportsettings.md) <br/> |Optional. Enumeration specifying whether the export operation is a full or incremental export, based on changes since the last export.  <br/> |
|**ExportPublicSchema** <br/> |xs:boolean  <br/> |Optional. Specifies whether to use the public schema format when exporting a list field; **true** if the export operation uses the public schema. The default value is **true**.  <br/> |
|**FileLocation** <br/> |xs:string  <br/> |Optional. The path to the directory where the content migration package is located.  <br/> |
|**IncludeSecurity** <br/> |[SPIncludeSecurity Simple Type (DeploymentExportSettings)](spincludesecurity-simple-type-deploymentexportsettings.md) <br/> |Optional. Enumeration specifying which level of deployment security to apply to the export settings.  <br/> |
|**IncludeVersions** <br/> |[SPIncludeVersions Simple Type (DeploymentExportSettings)](spincludeversions-simple-type-deploymentexportsettings.md) <br/> |Optional. Enumeration specifying which export version settings to provide for the content migration package.  <br/> |
|**SiteUrl** <br/> |xs:string  <br/> |Optional. URL to the site containing the content that is being exported.  <br/> |
   
### Child elements

[ExportObjects Element (DeploymentExportSettings)](exportobjects-element-deploymentexportsettings.md)
   
### Parent elements

None
   
## See also

- [SPExportSettings](https://msdn.microsoft.com/library/Microsoft.SharePoint.Deployment.SPExportSettings.aspx)
- [DeploymentExportSettings Schema](deploymentexportsettings-schema.md)

