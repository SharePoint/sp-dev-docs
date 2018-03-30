---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 9a87218f-b491-e4b6-e0f4-a2219f48fcd1
---

# WebTemplateDefinition complexType 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

Identifies the site type to use for the add-in web.

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
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p>http://schemas.microsoft.com/sharepoint/2012/app/manifest</p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>appmanifest.xsd</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Extension base</span></p></td>
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>

<br/>

```XML
      <xs:complexType name="WebTemplateDefinition">
         <xs:attribute name="Id"  type="WebTemplateIdDefinition"  use="required"  />
         <xs:attribute name="FeatureId"  type="GUID"  use="optional"  />
      </xs:complexType>       
```

<br/>

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

<br/>

### Child elements

None.

<br/>

### Attributes

<br/>

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
<td align="left"><p>This attribute is obsolete. Do not use.</p></td>
<td align="left"><p>Values of the GUID type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Id</p></td>
<td align="left"><p><a href="webtemplateiddefinition-simpletype-sharepoint-add-in-manifest.md">WebTemplateIdDefinition</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The ID of the WebTemplate that should be used when creating the add-in web.</p></td>
<td align="left"><p>This type is a string of the form `{hyphenated_GUID}#web_template_name`<br/><br/>The hyphenated_GUID is the GUID of the add-in web Feature that contains the <span sdata="link"><a href="webtemplate-element-web-template.md">WebTemplate Element (Web Template)</a></span> that defines the site type of the add-in web.<br/><br/>The web_template_name is the value of the **Name** attribute of that <span sdata="link"><a href="webtemplate-element-web-template.md">WebTemplate Element (Web Template)</a>.<br/><br/>Note that the braces "{}" and the "#" are mandatory.<br/><br/>The following is an example:<br/>
`<WebTemplate Id="{81dd4ae5-873b-4759-9838-4ad9c3dd2952}#MyNewSiteType" />`</p>
</td>
</tr>
</tbody>
</table>








