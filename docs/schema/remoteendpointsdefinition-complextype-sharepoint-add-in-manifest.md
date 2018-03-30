---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d50c57c6-a824-6c46-fe86-4a3c1da3ddcb
---

# RemoteEndpointsDefinition complexType 

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
    <xs:complexType name="RemoteEndpointsDefinition">
      <xs:sequence>
        <xs:element name="RemoteEndpoint"  type="RemoteEndpointDefinition"
         minOccurs="0"
         maxOccurs="20"
        >
        </xs:element>
      </xs:sequence>
    </xs:complexType>
```          

<br/>

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

<br/>

### Child elements

<br/>

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="50%" />
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
<td align="left"><p><a href="remoteendpoint-element-remoteendpointsdefinition-complextypesharepoint-add-in-ma.md">RemoteEndpoint</a></p></td>
<td align="left"><p><a href="remoteendpointdefinition-complextype-sharepoint-add-in-manifest.md">RemoteEndpointDefinition</a></p></td>
<td align="left"><p>Declares an individual remote endpoint that the SharePoint Add-in may access through SP.WebProxy.invoke().</p></td>
</tr>
</tbody>
</table>

### Attributes

None.






