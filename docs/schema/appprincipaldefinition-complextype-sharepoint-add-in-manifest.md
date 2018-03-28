---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 321966b6-067a-5827-5398-a872e9004bb5
---

# AppPrincipalDefinition complexType 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

The add-in principal definition.

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
    <xs:complexType name="AppPrincipalDefinition">
      <xs:choice>
        <xs:element name="RemoteWebApplication" >
          <xs:attribute name="ClientId"
          type="AppPermissionAppPrincipalDefinition"
          use="required"
          />
        </xs:element>
        
        <xs:element name="Internal" >
          <xs:attribute name="AllowedRemoteHostUrl"
          type="ManifestUri"
          use="optional"
          />
          <xs:attribute name="RedirectUrl"
          type="ManifestUri"
          use="optional"
          />
        </xs:element>
        
        <xs:element name="AutoDeployedWebApplication" >
    
      <xs:complexType>
        <xs:sequence>
          <xs:element name="DebugInfo"  type="AutoDeployedWebApplicationDebugInfoDefinition"
          minOccurs="0"
          >
          </xs:element>
        </xs:sequence>
      </xs:complexType>
          
        </xs:element>
      </xs:choice>
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
<td align="left"><p><a href="autodeployedwebapplication-element-appprincipaldefinition-complextypesharepoint.md">AutoDeployedWebApplication</a></p></td>
<td align="left"><p>Not defined</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="internal-element-appprincipaldefinition-complextypesharepoint-add-in-manifest.md">Internal</a></p></td>
<td align="left"><p>Not defined</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="remotewebapplication-element-appprincipaldefinition-complextypesharepoint-add-in.md">RemoteWebApplication</a></p></td>
<td align="left"><p>Not defined</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/>

### Attributes

None.







