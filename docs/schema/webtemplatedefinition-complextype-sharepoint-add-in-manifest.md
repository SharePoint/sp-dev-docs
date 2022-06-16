---
title: WebTemplateDefinition complexType
manager: soliver
ms.date: 06/15/2022
description: Describes WebTemplateDefinition complexType and includes information on elements and attributes.
ms.audience: Developer
ms.topic: article
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 9a87218f-b491-e4b6-e0f4-a2219f48fcd1
---

# WebTemplateDefinition complexType 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

Identifies the site type to use for the add-in web.

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

| Information | Location |
|---|---|
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/2012/app/manifest` |
| **Schema file**  | appmanifest.xsd |
| **Extension base**  | None |

## Definition

```XML
      <xs:complexType name="WebTemplateDefinition">
         <xs:attribute name="Id"  type="WebTemplateIdDefinition"  use="required"  />
         <xs:attribute name="FeatureId"  type="GUID"  use="optional"  />
      </xs:complexType>       
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Child elements

None.

<br/>

### Attributes

| Attribute | Type | Required | Description | Possible values |
| --- | --- | --- | --- | --- |
| FeatureId (obsolete) | [GUID](guid-simpletype-sharepoint-add-in-manifest.md) | optional | This attribute is obsolete. Do not use. | Values of the GUID type. |
| Id  | [WebTemplateIdDefinition](webtemplateiddefinition-simpletype-sharepoint-add-in-manifest.md) | required | The ID of the WebTemplate that should be used when creating the add-in web. | This type is a string of the form `{hyphenated_GUID}#web_template_name`  </br></br>The hyphenated_GUID is the GUID of the add-in web Feature that contains the [WebTemplate Element (Web Template)](webtemplate-element-web-template.md) that defines the site type of the add-in web.</br></br>The web_template_name is the value of the **Name** attribute of that [WebTemplate Element (Web Template)](webtemplate-element-web-template.md).</br></br>Note that the braces "{}" and the "#" are mandatory.</br></br>The following is an example:</br>`\` |








