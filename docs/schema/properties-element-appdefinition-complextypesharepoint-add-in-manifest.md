---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e1f48a2f-cd69-9457-7036-43e5bbfa10ac
---

# Properties element 

(AppDefinition complexType) (SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

Contains information that is global to the add-in.

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
<td align="left"><p><a href="propertiesdefinition-complextype-sharepoint-add-in-manifest.md">PropertiesDefinition</a></p></td>
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
    <xs:element name="Properties"  type="PropertiesDefinition"  minOccurs="1"  maxOccurs="1">
         </xs:element>     
```

<br/>

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

<br/>

### Parent elements

<br/>

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
<td align="left"><p><a href="app-element-sharepoint-add-in-manifest.md">App</a></p></td>
<td align="left"><p><a href="appdefinition-complextype-sharepoint-add-in-manifest.md">AppDefinition</a></p></td>
<td align="left"><p>The top level node of a SharePoint Add-in Manifest.</p></td>
</tr>
</tbody>
</table>

<br/>

### Child elements

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
<td align="left"><p><a href="installedeventendpoint-element-propertiesdefinition-complextypesharepoint-add-in.md">InstalledEventEndpoint</a></p></td>
<td align="left"><p><a href="urlelementdefinition-complextype-sharepoint-add-in-manifest.md">UrlElementDefinition</a></p></td>
<td align="left"><p>The Url of the installed event receiver endpoint.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="startpage-element-propertiesdefinition-complextypesharepoint-add-in-manifest.md">StartPage</a></p></td>
<td align="left"><p><a href="urlelementdefinition-complextype-sharepoint-add-in-manifest.md">UrlElementDefinition</a></p></td>
<td align="left"><p>The Url of the page visited when the SharePoint Add-in is launched.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="supportedlanguages-element-propertiesdefinition-complextypesharepoint-add-in-man.md">SupportedLanguages</a></p></td>
<td align="left"><p><a href="supportedlanguagesdefinition-simpletype-sharepoint-add-in-manifest.md">SupportedLanguagesDefinition</a></p></td>
<td align="left"><p>Do not use. This element is obsolete.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="title-element-propertiesdefinition-complextypesharepoint-add-in-manifest.md">Title</a></p></td>
<td align="left"><p><a href="titledefinition-simpletype-sharepoint-add-in-manifest.md">TitleDefinition</a></p></td>
<td align="left"><p>The friendly title of the SharePoint Add-in. This appears in the SharePoint and SharePoint Add-in store UI.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="uninstallingeventendpoint-element-propertiesdefinition-complextypesharepoint-add.md">UninstallingEventEndpoint</a></p></td>
<td align="left"><p><a href="urlelementdefinition-complextype-sharepoint-add-in-manifest.md">UrlElementDefinition</a></p></td>
<td align="left"><p>The Url of the uninstalling event receiver endpoint.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="upgradedeventendpoint-element-propertiesdefinition-complextypesharepoint-add-in.md">UpgradedEventEndpoint</a></p></td>
<td align="left"><p><a href="urlelementdefinition-complextype-sharepoint-add-in-manifest.md">UrlElementDefinition</a></p></td>
<td align="left"><p>The Url of the upgraded event receiver endpoint.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="webtemplate-element-propertiesdefinition-complextypesharepoint-add-in-manifest.md">WebTemplate</a></p></td>
<td align="left"><p><a href="webtemplatedefinition-complextype-sharepoint-add-in-manifest.md">WebTemplateDefinition</a></p></td>
<td align="left"><p>The web template to use when creating an add-in web.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="settingspage-element-propertiesdefinition-complextypesharepoint-add-in-manifest.md">SettingsPage</a></p></td>
<td align="left"><p><a href="urlelementdefinition-complextype-sharepoint-add-in-manifest.md">UrlElementDefinition</a></p></td>
<td align="left"><p>For future use. This element currently has no function.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="supportedlocales-element-propertiesdefinition-complextypesharepoint-add-in-manif.md">SupportedLocales</a></p></td>
<td align="left"><p><a href="supportedlocalesdefinition-complextype-sharepoint-add-in-manifest.md">SupportedLocalesDefinition</a></p></td>
<td align="left"><p>List of locales that this add-in supports.</p></td>
</tr>
</tbody>
</table>

<br/>

### Attributes

None.








