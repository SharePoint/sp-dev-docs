---
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 16c3b9eb-d3b8-919e-be2c-99a492e290fe
---

# FederationAuthType simpleType 

(SPS15XSDSearchSet2)

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
<td align="left"><p>http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>schema_Microsoft.Office.Server.Search.Administration.xsd</p></td>
</tr>
</tbody>
</table>

## Definition

```XML
    <xs:simpleType name="FederationAuthType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="Anonymous" />
            <xs:enumeration value="LocalNTAuth" />
            <xs:enumeration value="SingleAccountBasicAuth" />
            <xs:enumeration value="SingleAccountFormsAuthentication" />
            <xs:enumeration value="SingleAccountCookie" />
            <xs:enumeration value="ApplicationPoolIdentity" />
            <xs:enumeration value="Kerberos" />
            <xs:enumeration value="PerUserFormsAuthentication" />
            <xs:enumeration value="PerUserCookie" />
            <xs:enumeration value="SSO" />
            <xs:enumeration value="SingleAccountNTLM" />
            <xs:enumeration value="PerUserNTLM" />
            <xs:enumeration value="SingleAccountDigest" />
            <xs:enumeration value="PerUserDigest" />
            <xs:enumeration value="PerUserBasicAuth" />
            <xs:enumeration value="Custom" />
            <xs:enumeration value="PerUserCustom" />
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
<td align="left"><p>Anonymous</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>LocalNTAuth</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>SingleAccountBasicAuth</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>SingleAccountFormsAuthentication</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>SingleAccountCookie</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>ApplicationPoolIdentity</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Kerberos</p></td>
<td align="left"><p>7</p></td>
</tr>
<tr class="even">
<td align="left"><p>PerUserFormsAuthentication</p></td>
<td align="left"><p>8</p></td>
</tr>
<tr class="odd">
<td align="left"><p>PerUserCookie</p></td>
<td align="left"><p>9</p></td>
</tr>
<tr class="even">
<td align="left"><p>SSO</p></td>
<td align="left"><p>10</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SingleAccountNTLM</p></td>
<td align="left"><p>11</p></td>
</tr>
<tr class="even">
<td align="left"><p>PerUserNTLM</p></td>
<td align="left"><p>12</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SingleAccountDigest</p></td>
<td align="left"><p>13</p></td>
</tr>
<tr class="even">
<td align="left"><p>PerUserDigest</p></td>
<td align="left"><p>14</p></td>
</tr>
<tr class="odd">
<td align="left"><p>PerUserBasicAuth</p></td>
<td align="left"><p>15</p></td>
</tr>
<tr class="even">
<td align="left"><p>Custom</p></td>
<td align="left"><p>16</p></td>
</tr>
<tr class="odd">
<td align="left"><p>PerUserCustom</p></td>
<td align="left"><p>17</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>







