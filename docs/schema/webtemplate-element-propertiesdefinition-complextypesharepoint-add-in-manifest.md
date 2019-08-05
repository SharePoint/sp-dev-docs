---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 62302903-e97a-a9a3-a64e-13176a7c4e1e
---

# WebTemplate element (PropertiesDefinition complexType) 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

The web template to use when creating an add-in web.

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Element information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Element type</span></p></td>
<td align="left"><p><a href="webtemplatedefinition-complextype-sharepoint-add-in-manifest.md">WebTemplateDefinition</a></p></td>
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
    <xs:element name="WebTemplate"  type="WebTemplateDefinition"  minOccurs="0"  maxOccurs="1">
    </xs:element>     
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Parent elements

<table>
<colgroup>
<col width="30%" />
<col width="30%" />
<col width="40%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="properties-element-appdefinition-complextypesharepoint-add-in-manifest.md">Properties</a></p></td>
<td align="left"><p><a href="propertiesdefinition-complextype-sharepoint-add-in-manifest.md">PropertiesDefinition</a></p></td>
<td align="left"><p>Contains information that is global to the add-in.</p></td>
</tr>
</tbody>
</table>

<br/>

### Child elements

None.

<br/>

### Attributes

<table>
<colgroup>
<col width="15%" />
<col width="15%" />
<col width="15%" />
<col width="25%" />
<col width="30%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Required</p></th>
<th align="left"><p>Description</p></th>
<th align="left"><p>Possible values</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>FeatureId (obsolete)</p></td>
<td align="left"><p><a href="guid-simpletype-sharepoint-add-in-manifest.md">GUID</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The Id of the Feature that contains the WebTemplate.</p></td>
<td align="left"><p>Obsolete. Do not use. Values of the GUID type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Id</p></td>
<td align="left"><p><a href="webtemplateiddefinition-simpletype-sharepoint-add-in-manifest.md">WebTemplateIdDefinition</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The Id of the WebTemplate that should be used when creating the add-in web.</p></td>
<td align="left"><p>This type is a string of the form `{hyphenated_GUID}#web_template_name`<br/><br/>The hyphenated_GUID is the GUID of the add-in web Feature that contains the <span sdata="link"><a href="webtemplate-element-web-template.md">WebTemplate Element (Web Template)</a></span> that defines the site type of the add-in web.<br/><br/>The web_template_name is the value of the **Name** attribute of that <span sdata="link"><a href="webtemplate-element-web-template.md">WebTemplate Element (Web Template)</a>. Note that the braces `{}` and the `#` are mandatory.<br/><br/>The following is an example:
`<WebTemplate Id="{81dd4ae5-873b-4759-9838-4ad9c3dd2952}#MyNewSiteType" />`</p>
</td>
</tr>
</tbody>
</table>

<br/>
<br/>







