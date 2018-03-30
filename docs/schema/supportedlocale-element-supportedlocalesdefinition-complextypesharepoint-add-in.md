---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 099a9e03-4cb7-6ccb-83dd-756498aeeb1d
---

# SupportedLocale element 

(SupportedLocalesDefinition complexType) (SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

Specifies a locale that the add-in supports. This element is required for add-ins that are submitted to the Office Store.

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
<td align="left"><p><a href="supportedlocaledefinition-complextype-sharepoint-add-in-manifest.md">SupportedLocaleDefinition</a></p></td>
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

<br/>

```XML 
    <xs:element name="SupportedLocale" type="SupportedLocaleDefinition" minOccurs="1" maxOccurs="256"></xs:element>
```

<br/>

> [!WARNING] 
> Although the **maxOccurs** attribute in the XSD for the add-in manifest markup is set to 256, the Office Store may set a lower effective maximum. As of the release of SharePoint 2013, there is an effective maximum of 25 **SupportedLocale** elements in the parent **SupportedLocales** element.

<br/>

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

<br/>

### Parent elements

<br/>

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
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
<td align="left"><p><a href="supportedlocales-element-propertiesdefinition-complextypesharepoint-add-in-manif.md">SupportedLocales</a></p></td>
<td align="left"><p><a href="supportedlocalesdefinition-complextype-sharepoint-add-in-manifest.md">SupportedLocalesDefinition</a></p></td>
<td align="left"><p>List of locales that the add-in supports.</p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p>CultureName</p></td>
<td align="left"><p><a href="culturenamedefinition-simpletype-sharepoint-add-in-manifest.md">CultureNameDefinition</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The culture name of a locale that the add-in supports.</p></td>
<td align="left"><p>Values of the CultureNameDefinition type; for example, en-us.</p></td>
</tr>
</tbody>
</table>








