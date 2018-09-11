---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5f68d1c4-1943-c600-9c89-371e4e692747
---

# AppDefinition complexType 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

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

## Definition

```XML
    <xs:complexType name="AppDefinition">     
      <xs:all>
        <xs:element name="AppPrincipal"  type="AppPrincipalDefinition"
         minOccurs="1"
         maxOccurs="1"
        >
        </xs:element>
        
        <xs:element name="AppPermissionRequests"  type="AppPermissionRequestsDefinition"
         minOccurs="0"
         maxOccurs="1"
        >
        </xs:element>
        
        <xs:element name="Properties"  type="PropertiesDefinition"
         minOccurs="1"
         maxOccurs="1"
        >
        </xs:element>
        
        <xs:element name="RemoteEndpoints"  type="RemoteEndpointsDefinition"
         minOccurs="0"
         maxOccurs="1"
        >
        </xs:element>
        
        <xs:element name="AppPrerequisites"  type="AppPrerequisiteCollection"
         minOccurs="0"
         maxOccurs="1"
        >
        </xs:element>   
      </xs:all>

        <xs:attribute name="ProductID"
         type="GUID"
         use="required"
        />
        <xs:attribute name="Type"
         type="TypeDefinition"
         use="optional"
        />
        <xs:attribute name="Version"
         type="VersionDefinition"
         use="required"
        />
        <xs:attribute name="SharePointMinVersion"
         type="VersionDefinition"
         use="required"
        />
        <xs:attribute name="SharePointMaxVersion"
         type="VersionDefinition"
         use="optional"
        />
        <xs:attribute name="Name"
         type="NameDefinition"
         use="required"
        />
    </xs:complexType>
```          


## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

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
<td align="left"><p><a href="apppermissionrequests-element-appdefinition-complextypesharepoint-add-in-manifes.md">AppPermissionRequests</a></p></td>
<td align="left"><p><a href="apppermissionrequestsdefinition-complextype-sharepoint-add-in-manifest.md">AppPermissionRequestsDefinition</a></p></td>
<td align="left"><p>A list of resources that a SharePoint Add-in needs access to.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="appprerequisites-element-appdefinition-complextypesharepoint-add-in-manifest.md">AppPrerequisites</a></p></td>
<td align="left"><p><a href="appprerequisitecollection-complextype-sharepoint-add-in-manifest.md">AppPrerequisiteCollection</a></p></td>
<td align="left"><p>A list of prerequisites that a SharePoint Add-in depends on.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="appprincipal-element-appdefinition-complextypesharepoint-add-in-manifest.md">AppPrincipal</a></p></td>
<td align="left"><p><a href="appprincipaldefinition-complextype-sharepoint-add-in-manifest.md">AppPrincipalDefinition</a></p></td>
<td align="left"><p>The add-in principal information.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="properties-element-appdefinition-complextypesharepoint-add-in-manifest.md">Properties</a></p></td>
<td align="left"><p><a href="propertiesdefinition-complextype-sharepoint-add-in-manifest.md">PropertiesDefinition</a></p></td>
<td align="left"><p>Contains information that is global to the add-in.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="remoteendpoints-element-appdefinition-complextypesharepoint-add-in-manifest.md">RemoteEndpoints</a></p></td>
<td align="left"><p><a href="remoteendpointsdefinition-complextype-sharepoint-add-in-manifest.md">RemoteEndpointsDefinition</a></p></td>
<td align="left"><p>(Optional) A list of remote endpoints that the SharePoint Add-in may access through SP.WebProxy.invoke(). If this list is empty or not provided, the SharePoint Add-in will not be able to use any remote endpoint through SP.WebProxy.invoke().</p></td>
</tr>
</tbody>
</table>

<br/>

### Attributes

<br/>

<table>
<colgroup>
<col width="15%" />
<col width="15%" />
<col width="15%" />
<col width="25%" />
<col width="30%" />
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
<td align="left"><p>**Name**</p></td>
<td align="left"><p><a href="namedefinition-simpletype-sharepoint-add-in-manifest.md">NameDefinition</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The name of the SharePoint Add-in. Name is not localized, and is used in Urls that address add-in artifacts.</p></td>
<td align="left"><p>Values of the NameDefinition type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ProductID</p></td>
<td align="left"><p><a href="guid-simpletype-sharepoint-add-in-manifest.md">GUID</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The unique identifier of the SharePoint Add-in. ProductID does not change between versions.</p></td>
<td align="left"><p>Values of the GUID type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SharePointMaxVersion</p></td>
<td align="left"><p><a href="versiondefinition-simpletype-sharepoint-add-in-manifest.md">VersionDefinition</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Optional. The maximum version of SharePoint that the add-in is compatible with.</p></td>
<td align="left"><p>Values of the VersionDefinition type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>SharePointMinVersion</p></td>
<td align="left"><p><a href="versiondefinition-simpletype-sharepoint-add-in-manifest.md">VersionDefinition</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The minimum version of SharePoint that the add-in is compatible with.</p></td>
<td align="left"><p>Values of the VersionDefinition type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p><a href="typedefinition-simpletype-sharepoint-add-in-manifest.md">TypeDefinition</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The type of the SharePoint Add-in.</p></td>
<td align="left"><p>Values of the TypeDefinition type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Version</p></td>
<td align="left"><p><a href="versiondefinition-simpletype-sharepoint-add-in-manifest.md">VersionDefinition</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The version of the SharePoint Add-in.</p></td>
<td align="left"><p>Values of the VersionDefinition type.</p></td>
</tr>
</tbody>
</table>








