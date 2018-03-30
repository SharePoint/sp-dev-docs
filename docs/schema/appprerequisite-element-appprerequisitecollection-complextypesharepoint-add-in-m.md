---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 791be402-981f-519e-fcde-f24cc3cb4139
---

# AppPrerequisite element (AppPrerequisiteCollection complexType) 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

Identifies a SharePoint Feature or capability that the add-in depends on. The SharePoint Add-ins installation infrastructure checks to see if the Feature or capability is present and activated. If it is not, installation of the add-in is blocked.

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

```XML 
    <AppPrerequisite Type="type_name " ID="feature/capability_guid_or_autohosted_component_type" MinimumVersion="n.n.n.n" />
```

## Element information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Element type</span></p></td>
<td align="left"><p><a href="appprerequisite-complextype-sharepoint-add-in-manifest.md">AppPrerequisite</a></p></td>
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
    <xs:element name="AppPrerequisite" type="AppPrerequisite" maxOccurs="500"></xs:element>     
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Parent elements

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
<td align="left"><p><a href="appprerequisites-element-appdefinition-complextypesharepoint-add-in-manifest.md">AppPrerequisites</a></p></td>
<td align="left"><p><a href="appprerequisitecollection-complextype-sharepoint-add-in-manifest.md">AppPrerequisiteCollection</a></p></td>
<td align="left"><p>A list of prerequisites that a SharePoint Add-in depends on.</p></td>
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
<col width="20%" />
<col width="35%" />
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
<td align="left"><p>ID</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The ID that identifies a Feature or capability that the SharePoint Add-in depends on.</p></td>
<td align="left"><p>Varies depending on the value of the **Type** attribute.</p>
<p>If **Type** is Feature, the ID is the bracketed, hyphenated GUID of the Feature; for example {151D22D9-95A8-4904-A0A3-22E4DB85D1E0}.</p>
<p>If **Type** is Capability, the ID is one of the GUIDs in the following table. The hyphens are required.</p>
<div class="tableSection">
<table>
<colgroup>
<col width="40%" />
<col width="60%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Capability</p></th>
<th align="left"><p>Value</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Access Services 2010</p></td>
<td align="left"><p>B2CEA5EF-26FF-4147-9074-731FE605F068</p></td>
</tr>
<tr class="even">
<td align="left"><p>Access Services</p></td>
<td align="left"><p>7CC11180-92E4-49F4-AF68-A55CA440E761</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Managed Metadata Web Service</p></td>
<td align="left"><p>8F32AE42-D7AA-4DBA-AF25-A9ED92468261</p></td>
</tr>
<tr class="even">
<td align="left"><p>PowerPoint Services</p></td>
<td align="left"><p>0C92DF0B-8D97-4D7B-BD87-7D5A4F0C89AA</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Secure Store Services</p></td>
<td align="left"><p>D4FAB6DC-93EA-48AB-B5DD-CCD9F2FC4E1C</p></td>
</tr>
<tr class="even">
<td align="left"><p>Machine Translation Service</p></td>
<td align="left"><p>A5760A6E-47B1-4F31-B964-1C3F72020DBC</p></td>
</tr>
<tr class="odd">
<td align="left"><p>User Profile Service</p></td>
<td align="left"><p>A83C8D70-71DE-4260-9FB8-677418EB47F2</p></td>
</tr>
<tr class="even">
<td align="left"><p>Visio Graphics Service</p></td>
<td align="left"><p>778D6B91-D46F-40E6-B7A4-1C666B800D03</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Work Management Service</p></td>
<td align="left"><p>5E49F681-D570-4C2B-8A50-84D5F38E2A12</p></td>
</tr>
<tr class="even">
<td align="left"><p>Duet</p></td>
<td align="left"><p>4F2DB42F-1AE3-4674-8E0B-2C125F9CAD4F</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SharePoint Workflow Services</p></td>
<td align="left"><p>CDD8F991-B459-4512-8048-03D5A03FF27E</p></td>
</tr>
<tr class="even">
<td align="left"><p>Search</p></td>
<td align="left"><p>132084D8-5DA6-4EAB-A636-3ADF44151846</p></td>
</tr>
<tr class="odd">
<td align="left"><p>EDU</p></td>
<td align="left"><p>89109E3B-2BF0-4262-A2F4-CEB7A3DECE21</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>MinimumVersion</p></td>
<td align="left"><p><a href="versiondefinition-simpletype-sharepoint-add-in-manifest.md">VersionDefinition</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The minimum version of the feature or capability that the SharePoint Add-in depends on, for example 15.0.0.0.</p></td>
<td align="left"><p>Values of the VersionDefinition type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type</p></td>
<td align="left"><p><a href="appprerequisitetypedefinition-simpletype-sharepoint-add-in-manifest.md">AppPrerequisiteTypeDefinition</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The type of add-in prerequisite.</p></td>
<td align="left"><p>Values of the AppPrerequisiteTypeDefinition type, either Feature or Capability. (Autoprovisioning is <em>not</em> a supported value at this time.)</p></td>
</tr>
</tbody>
</table>








