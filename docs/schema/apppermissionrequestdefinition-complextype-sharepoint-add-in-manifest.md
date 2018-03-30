---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0ca537a2-d784-e761-eb27-13b8c373bdba
---

# AppPermissionRequestDefinition complexType 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

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
    <xs:complexType name="AppPermissionRequestDefinition">       
      <xs:sequence>
        <xs:element name="Property"  type="AppPermissionPropertyDefinition"
         minOccurs="0"
         maxOccurs="1000"
        >
        </xs:element> 
      </xs:sequence>
        <xs:attribute name="Scope"
         type="xs:anyURI"
         use="required"
        />
        <xs:attribute name="Right"
         type="AppPermissionRightDefinition"
        />
    </xs:complexType>
```

<br/>

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

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
<td align="left"><p><a href="property-element-apppermissionrequestdefinition-complextypesharepoint-add-in-man.md">Property</a></p></td>
<td align="left"><p><a href="apppermissionpropertydefinition-complextype-sharepoint-add-in-manifest.md">AppPermissionPropertyDefinition</a></p></td>
<td align="left"><p>Add-in Permission Property.</p></td>
</tr>
</tbody>
</table>

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








