---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 49bde91a-8d7a-be17-4c91-82c9c19f0f61
---

# SupportedLocales element 

(PropertiesDefinition complexType) (SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

Specifies the locales that the add-in supports. This element is required for add-ins that are submitted to the Office Store. Its primary purpose is to populate the **spstore** UI with a list of supported locales.

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

<br/>

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Element type</span></p></td>
<td align="left"><p><a href="supportedlocalesdefinition-complextype-sharepoint-add-in-manifest.md">SupportedLocalesDefinition</a></p></td>
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
    <xs:element name="SupportedLocales" type="SupportedLocalesDefinition" minOccurs="0" maxOccurs="1"></xs:element>
```

<br/>

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

<br/>

### Parent elements

<br/>

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="50%" />
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

<br/>

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="50%" />
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
<td align="left"><p><a href="supportedlocale-element-supportedlocalesdefinition-complextypesharepoint-add-in.md">SupportedLocale</a></p></td>
<td align="left"><p><a href="supportedlocaledefinition-complextype-sharepoint-add-in-manifest.md">SupportedLocaleDefinition</a></p></td>
<td align="left"><p>Declares a locale that the add-in supports.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
</tbody>
</table>

<br/>

> [!WARNING] 
> Although the **maxOccurs** attribute for the **SupportedLocale** element in the XSD for the add-in manifest markup is set to 256, the Office Store may set a lower effective maximum. As of the release of SharePoint 2013, there is an effective maximum of 25 **SupportedLocale** elements in the parent **SupportedLocales** element.

<br/>

### Attributes

None.








