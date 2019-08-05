---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 4ad90fb0-33b2-aee5-69c2-5b97ca5334f8
---

# AppPermissionRequest element (AppPermissionRequestsDefinition complexType) 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

The add-in permission requests.

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
<td align="left"><p><a href="apppermissionrequestdefinition-complextype-sharepoint-add-in-manifest.md">AppPermissionRequestDefinition</a></p></td>
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
   <xs:element name="AppPermissionRequest"  type="AppPermissionRequestDefinition"
        minOccurs="0"
        maxOccurs="1000"
        >
   </xs:element>
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
<td align="left"><p><a href="apppermissionrequests-element-appdefinition-complextypesharepoint-add-in-manifes.md">AppPermissionRequests</a></p></td>
<td align="left"><p><a href="apppermissionrequestsdefinition-complextype-sharepoint-add-in-manifest.md">AppPermissionRequestsDefinition</a></p></td>
<td align="left"><p>A list of resources that a SharePoint Add-in needs access to.</p></td>
</tr>
</tbody>
</table>

<br/>

### Child elements

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
<td align="left"><p><a href="property-element-apppermissionrequestdefinition-complextypesharepoint-add-in-man.md">Property</a></p></td>
<td align="left"><p><a href="apppermissionpropertydefinition-complextype-sharepoint-add-in-manifest.md">AppPermissionPropertyDefinition</a></p></td>
<td align="left"><p>Add-in Permission Property.</p></td>
</tr>
</tbody>
</table>

<br/>

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
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
<td align="left"><p>Right</p></td>
<td align="left"><p><a href="apppermissionrightdefinition-simpletype-sharepoint-add-in-manifest.md">AppPermissionRightDefinition</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The Right of the permission being requested.</p></td>
<td align="left"><p>Values of the AppPermissionRightDefinition type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Scope</p></td>
<td align="left"><p>xs:anyURI</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The Scope permission being requested.</p></td>
<td align="left"><p>Values of the xs:anyURI type.</p></td>
</tr>
</tbody>
</table>
<br/>
<br/>







