---
title: WebTemplate element (PropertiesDefinition complexType)
description: Describes the WebTemplate element (PropertiesDefinition complexType) and provides the element's definition, information, parent elements, and attributes.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: article
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 62302903-e97a-a9a3-a64e-13176a7c4e1e
---

# WebTemplate element (PropertiesDefinition complexType)

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

The web template to use when creating an add-in web.

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Element information

|  Resource |  File |
|---|---|
| **Element type**  | WebTemplateDefinition |
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/2012/app/manifest` |
| **Schema file**  | appmanifest.xsd |


## Definition

```XML 
    <xs:element name="WebTemplate"  type="WebTemplateDefinition"  minOccurs="0"  maxOccurs="1">
    </xs:element>     
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Parent elements

|Element|Type|Description
|-------|----|-----------|
<a href="properties-element-appdefinition-complextypesharepoint-add-in-manifest.md">Properties</a>|<a href="propertiesdefinition-complextype-sharepoint-add-in-manifest.md">PropertiesDefinition</a>|Contains information that is global to the add-in.|

<br/>

### Child elements

None.

<br/>

### Attributes

  
| Attribute | Type | Required | Description | Possible values |
| --- | --- | --- | --- | --- |
| FeatureId (obsolete) | [GUID](guid-simpletype-sharepoint-add-in-manifest.md) | optional | The Id of the Feature that contains the WebTemplate. | Obsolete. Do not use. Values of the GUID type. |
| Id  | [WebTemplateIdDefinition](webtemplateiddefinition-simpletype-sharepoint-add-in-manifest.md) | required | The Id of the WebTemplate that should be used when creating the add-in web. | This type is a string of the form `{hyphenated\_GUID}#web\_template_name`  <br>  <br>The hyphenated_GUID is the GUID of the add-in web Feature that contains the [WebTemplate Element (Web Template)](webtemplate-element-web-template.md) that defines the site type of the add-in web.  <br>  <br>The web\_template\_name is the value of the **Name** attribute of that [WebTemplate Element (Web Template)](webtemplate-element-web-template.md). Note that the braces `{}` and the `#` are mandatory. |