---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 779c6b36-6789-43d9-b5ef-f6de23ed5543
---

# RemoteEndpoint element 

(RemoteEndpointsDefinition complexType) (SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

Declares an individual remote endpoint that the SharePoint Add-in may access through the JSOM method SP.WebProxy.invoke().

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

<br/>

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Element type</span></p></td>
<td align="left"><p><a href="remoteendpointdefinition-complextype-sharepoint-add-in-manifest.md">RemoteEndpointDefinition</a></p></td>
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

<br/>

```XML
   <xs:element name="RemoteEndpoint"  type="RemoteEndpointDefinition"
         minOccurs="0"
         maxOccurs="20"
        >
   </xs:element>
```

<br/>

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

<br/>

### Parent elements

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
<td align="left"><p><a href="remoteendpoints-element-appdefinition-complextypesharepoint-add-in-manifest.md">RemoteEndpoints</a></p></td>
<td align="left"><p><a href="remoteendpointsdefinition-complextype-sharepoint-add-in-manifest.md">RemoteEndpointsDefinition</a></p></td>
<td align="left"><p>(Optional) A list of remote endpoints that the SharePoint Add-in may access through SP.WebProxy.invoke(). If this list is empty or not provided, the SharePoint Add-in will not be able to use any remote endpoint through SP.WebProxy.invoke().</p></td>
</tr>
</tbody>
</table>

<br/>

### Child elements

None.

<br/>

### Attributes

<br/>

<table>
<colgroup>
<col width="15%" />
<col width="15%" />
<col width="15%" />
<col width="30%" />
<col width="25%" />
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
<td align="left"><p>Url</p></td>
<td align="left"><p><a href="manifesturi-simpletype-sharepoint-add-in-manifest.md">ManifestUri</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Only the authority part (scheme, host, and port) is significant; that is, the path part is ignored.</p></td>
<td align="left"><p>Values of the ManifestUri type.</p></td>
</tr>
</tbody>
</table>








