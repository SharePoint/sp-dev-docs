---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 37aba6e8-8291-d66a-b0bf-dded191ec131
---

# NameDefinition simpleType 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

Internal name of an SharePoint Add-in. The internal name of an SharePoint Add-in. Must be ASCII characters
only, with no spaces, up to 64 characters long.

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
<td align="left"><p>xs:token</p></td>
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
    <xs:simpleType  name="NameDefinition">       
        <xs:restriction base="xs:token">
           <xs:minLength value="1"/>
           <xs:maxLength value="64"/>
           <xs:pattern value="[A-Za-z0-9][A-Za-z0-9\s-_]*"/>
        </xs:restriction>
    </xs:simpleType>
```







