---
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: fb7d56a6-5985-2379-7183-6bee6fcd3f90
---

# AccountAuthCredentials complexType 

(SPS15XSDSearchSet2)

## Type information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p>http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration</p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>schema_Microsoft.Office.Server.Search.Administration.xsd</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Extension base</span></p></td>
<td align="left"><p>tns:AuthenticationData</p></td>
</tr>
</tbody>
</table>


## Definition

```XML 
    <xs:complexType name="AccountAuthCredentials">
        <xs:complexContent>
            <xs:extension base="tns:AuthenticationData">
                <xs:sequence>
                    <xs:element name="Password" type="xs:string" minOccurs="0"></xs:element>
                    <xs:element name="_UserName" type="xs:string" minOccurs="0"></xs:element>
                </xs:sequence>
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

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
<td align="left"><p><a href="_username-element-accountauthcredentials-complextypesps15xsdsearchset2.md">_UserName</a></p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="password-element-accountauthcredentials-complextypesps15xsdsearchset2.md">Password</a></p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/>

### Attributes

None.








