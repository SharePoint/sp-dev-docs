---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 432f44e8-1b98-d4e2-76d1-4ddbff34606d
---

# AppPrerequisiteTypeDefinition simpleType 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

The type of a prerequisite for a SharePoint Add-in.

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

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
    <xs:simpleType  name="AppPrerequisiteTypeDefinition">
        <xs:restriction base="xs:string">
           <xs:enumeration value="Feature"/>
           <xs:enumeration value="AutoProvisioning"/>
           <xs:enumeration value="Capability"/>
        </xs:restriction>
    </xs:simpleType>
```

<br/>

<table>
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Value</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Feature</p></td>
<td align="left"><p>A single SharePoint Feature.</p></td>
</tr>
<tr class="even">
<td align="left"><p>AutoProvisioning</p></td>
<td align="left"><p>An autohosted component.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Capability</p></td>
<td align="left"><p>A general capability, usually including a set of Features and services.</p></td>
</tr>
</tbody>
</table>








