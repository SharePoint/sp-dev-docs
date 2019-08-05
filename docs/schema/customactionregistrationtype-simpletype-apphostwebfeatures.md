---
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: bee593c6-802f-8d0c-d619-4adbcc6b1aae
---

# CustomActionRegistrationType simpleType 

(AppHostWebFeatures)

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
<td align="left"><p>http://schemas.microsoft.com/sharepoint/</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>apphostwebfeatures.xsd</p></td>
</tr>
</tbody>
</table>

## Definition

```XML
    <xs:simpleType name="CustomActionRegistrationType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="List" />
            <xs:enumeration value="ContentType" />
            <xs:enumeration value="FileType" />
            <xs:enumeration value="ProgId" />
        </xs:restriction>
    </xs:simpleType>
```

## Enumeration values

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Value</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>List</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>ContentType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>FileType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>ProgId</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/>

<br/>







