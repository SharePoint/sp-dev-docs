---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 7a57baca-5ac3-1ebd-80cf-3b29f398889e
---

# RemoteEndpoints element 

(AppDefinition complexType) (SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

(Optional) A list of remote endpoints that the SharePoint Add-in may access through SP.WebProxy.invoke(). If this list is empty or not provided, the SharePoint Add-in will not be able to use any remote endpoint through SP.WebProxy.invoke().

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
<td align="left"><p><a href="remoteendpointsdefinition-complextype-sharepoint-add-in-manifest.md">RemoteEndpointsDefinition</a></p></td>
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
        <xs:element name="RemoteEndpoints"  type="RemoteEndpointsDefinition"
         minOccurs="0"
         maxOccurs="1"
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
<td align="left"><p><a href="app-element-sharepoint-add-in-manifest.md">App</a></p></td>
<td align="left"><p><a href="appdefinition-complextype-sharepoint-add-in-manifest.md">AppDefinition</a></p></td>
<td align="left"><p>The top level node of a SharePoint Add-in Manifest.</p></td>
</tr>
</tbody>
</table>

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

<br/>

### Attributes

None.









