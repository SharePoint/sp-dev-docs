---
title: "Upgrade Definition schema"
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
keywords:
- upgrading - [sharepoint 2010], definition schema
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Upgrade schema
api_type:
- schema
ms.assetid: 96d5e067-bea5-4a8e-8b21-db14eab60281
description: "Last modified: July 15, 2011"
---

# Upgrade Definition schema

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
The following elements and attributes are implemented within a site upgrade definition file.
  
[Config](config-element-upgrade.md)
  
- [WebTemplate](webtemplate-element-upgrade.md)
  
  - [Lists](lists-element-upgrade.md)
  
    - [List](list-element-upgrade.md)
  
  - [Files](http://msdn.microsoft.com/library/e0c9a22c-5e87-41ff-9e2d-6a0261d5ccd2%28Office.15%29.aspx)
  
    - [File](file-element-upgrade.md)
  
  - [AppliedSiteFeatures](appliedsitefeatures-element-upgrade.md)
  
    - [Feature](feature-element-upgrade.md)
  
  - [AppliedWebFeatures](feature-element-upgrade.md)
  
    - [Feature](feature-element-upgrade.md)
  
## Example

The following example outlines the format of an upgrade definition.
  
```XML
<Config xmlns = "urn:Microsoft.SharePoint.Upgrade">
  <WebTemplate
    ID = "1"
    LocaleId = "*"
    FromProductVersion = "2"
    BeginFromSchemaVersion = "100"
    EndFromSchemaVersion = "149"
    ToSchemaVersion = "150">
    <Lists>
      <List
        FromTemplateId = "104"
        ToFeatureId = "00BFEA71-D1CE-42de-9C63-A44004CE0104"
        v3Type = "0x0104">
      </List>
      <List
        FromTemplateId = "105"
        ToFeatureId = "00BFEA71-7E6D-4186-9BA8-C047AC750105"
        v3Type = "0x0105">
      </List>
       ...
    </Lists>
    <Files>
      <File
        FromPath = "{LocaleId}\STS\default.aspx"
        ToPath = "SiteTemplates\STS\default.aspx" />
      <File
        FromPath = "{LocaleId}\STS\Lists\announce\AllItems.aspx"
        ToPath = "Features\AnnouncementsList\announce\AllItems.aspx" />
      <File
        FromPath = "{LocaleId}\STS\Lists\announce\DispForm.aspx"
        ToPath = "Features\AnnouncementsList\announce\DispForm.aspx" />
      <File
        FromPath = "{LocaleId}\STS\Lists\announce\EditForm.aspx" 
        ToPath = "Features\AnnouncementsList\announce\EditForm.aspx"
        />
      <File
        FromPath = "{LocaleId}\STS\Lists\announce\NewForm.aspx"
        ToPath = "Features\AnnouncementsList\announce\NewForm.aspx" />
        ...
    </Files>
    <AppliedSiteFeatures>
      <Feature ID = "00BFEA71-1C5E-4A24-B310-BA51C3EB7A57" />
    </AppliedSiteFeatures>
    <AppliedWebFeatures>
      <Feature ID = "00BFEA71-D1CE-42de-9C63-A44004CE0104" />
      <Feature ID = "00BFEA71-7E6D-4186-9BA8-C047AC750105" />
      <Feature ID = "00BFEA71-DE22-43B2-A848-C05709900100" />
      ...
    </AppliedWebFeatures>
  </WebTemplate>
</Config>
```


