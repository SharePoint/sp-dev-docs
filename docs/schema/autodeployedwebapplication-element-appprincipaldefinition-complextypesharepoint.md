---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: fbdf0dec-58f9-e419-c543-7729f9ee7523
---

# AutoDeployedWebApplication element (AppPrincipalDefinition complexType) 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

Do not use. For possible future use only.

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
<td align="left"><p>Not defined</p></td>
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
    <xs:element name="AutoDeployedWebApplication">
      <xs:complexType>           
      <xs:sequence>
        <xs:element name="DebugInfo"  type="AutoDeployedWebApplicationDebugInfoDefinition" minOccurs="0">
        </xs:element>     
      </xs:sequence>
      </xs:complexType>       
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
<td align="left"><p><a href="appprincipal-element-appdefinition-complextypesharepoint-add-in-manifest.md">AppPrincipal</a></p></td>
<td align="left"><p><a href="appprincipaldefinition-complextype-sharepoint-add-in-manifest.md">AppPrincipalDefinition</a></p></td>
<td align="left"><p>The add-in principal information.</p></td>
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
<td align="left"><p><a href="debuginfo-element-autodeployedwebapplication-elementappprincipaldefinition-compl.md">DebugInfo</a></p></td>
<td align="left"><p><a href="autodeployedwebapplicationdebuginfodefinition-complextype-sharepoint-add-in-mani.md">AutoDeployedWebApplicationDebugInfoDefinition</a></p></td>
<td align="left"><p>The add-in principal information used for debugging purposes.</p></td>
</tr>
</tbody>
</table>

<br/>

### Attributes

None.

<br/>
<br/>






