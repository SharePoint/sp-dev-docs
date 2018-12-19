---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 034b8cd1-09ba-2d45-8fc2-b90162991ab6
---

# WebTemplateIdDefinition simpleType 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

Defines the ID of a web template in an add-in web Feature.

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

This type is a string of the form `{hyphenated_GUID}#web_template_name`. The `hyphenated_GUID` is the GUID of the add-in web Feature that contains the [WebTemplate Element (Web Template)](webtemplate-element-web-template.md) that defines the site type of the add-in web. (The `web_template_name` is the value of the **Name** attribute of that [WebTemplate Element (Web Template)](webtemplate-element-web-template.md). Note that the braces `"{}"` and the `"#"` are mandatory.) 

The following is an example:

```
    <WebTemplate Id="{81dd4ae5-873b-4759-9838-4ad9c3dd2952}#MyNewSiteType" />
```

## Type information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Base type</span></p></td>
<td align="left"><p>xs:string</p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p>http://schemas.microsoft.com/sharepoint/2012/app/manifest</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>appmanifest.xsd</p></td>
</tr>
</tbody>
</table>

## Definition

```XML
    <xs:simpleType  name="WebTemplateIdDefinition">       
        <xs:restriction base="xs:string">
           <xs:minLength value="1"/>
           <xs:maxLength value="128"/>
        </xs:restriction>
    </xs:simpleType>
```







