---
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 8d49604c-98e1-e207-bc0e-de79ad3a8ff6
---

# CustomActionDefinition complexType 

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
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p>http://schemas.microsoft.com/sharepoint/</p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>apphostwebfeatures.xsd</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Extension base</span></p></td>
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>

## Definition

```XML
    <xs:complexType name="CustomActionDefinition">
        <xs:all>
            <xs:element name="UrlAction" type="UrlActionDefinition" minOccurs="0" maxOccurs="1"></xs:element>
            <xs:element name="CommandUIExtension" type="CommandUIExtensionType" minOccurs="0" maxOccurs="1"></xs:element>
        </xs:all>
        <xs:attribute name="Description" type="LocalizableString" />
        <xs:attribute name="GroupId" type="xs:string" />
        <xs:attribute name="Id" type="UniqueIdentifier" />
        <xs:attribute name="ImageUrl" type="LocalizableString" />
        <xs:attribute name="Location" type="CustomActionLocations" use="optional" />
        <xs:attribute name="RegistrationType" type="CustomActionRegistrationType" />
        <xs:attribute name="RegistrationId" type="xs:string" />
        <xs:attribute name="RequireSiteAdministrator" type="TRUEFALSE" />
        <xs:attribute name="Rights" type="xs:string" />
        <xs:attribute name="Sequence" type="Sequence" />
        <xs:attribute name="ShowInReadOnlyContentTypes" type="TRUEFALSE" />
        <xs:attribute name="ShowInSealedContentTypes" type="TRUEFALSE" />
        <xs:attribute name="Title" type="LocalizableString" />
        <xs:attribute name="UIVersion" type="UIVersion" />
        <xs:attribute name="HostWebDialog" type="TRUEFALSE" use="optional" />
        <xs:attribute name="HostWebDialogHeight" type="xs:int" use="optional" />
        <xs:attribute name="HostWebDialogWidth" type="xs:int" use="optional" />
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
<td align="left"><p><a href="commanduiextension-element-customactiondefinition-complextypeapphostwebfeatures.md">CommandUIExtension</a></p></td>
<td align="left"><p><a href="commanduiextensiontype-complextype-apphostwebfeatures.md">CommandUIExtensionType</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="urlaction-element-customactiondefinition-complextypeapphostwebfeatures.md">UrlAction</a></p></td>
<td align="left"><p><a href="urlactiondefinition-complextype-apphostwebfeatures.md">UrlActionDefinition</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/>

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
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
<td align="left"><p>Description</p></td>
<td align="left"><p>LocalizableString</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the LocalizableString type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>GroupId</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>HostWebDialog</p></td>
<td align="left"><p>TRUEFALSE</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the TRUEFALSE type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>HostWebDialogHeight</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:int type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>HostWebDialogWidth</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:int type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Id</p></td>
<td align="left"><p>UniqueIdentifier</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the UniqueIdentifier type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ImageUrl</p></td>
<td align="left"><p>LocalizableString</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the LocalizableString type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Location</p></td>
<td align="left"><p><a href="customactionlocations-simpletype-apphostwebfeatures.md">CustomActionLocations</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the CustomActionLocations type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>RegistrationId</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>RegistrationType</p></td>
<td align="left"><p><a href="customactionregistrationtype-simpletype-apphostwebfeatures.md">CustomActionRegistrationType</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the CustomActionRegistrationType type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>RequireSiteAdministrator</p></td>
<td align="left"><p>TRUEFALSE</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the TRUEFALSE type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Rights</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Sequence</p></td>
<td align="left"><p>Sequence</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the Sequence type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ShowInReadOnlyContentTypes</p></td>
<td align="left"><p>TRUEFALSE</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the TRUEFALSE type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ShowInSealedContentTypes</p></td>
<td align="left"><p>TRUEFALSE</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the TRUEFALSE type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Title</p></td>
<td align="left"><p>LocalizableString</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the LocalizableString type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>UIVersion</p></td>
<td align="left"><p><a href="uiversion-simpletype-apphostwebfeatures.md">UIVersion</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the UIVersion type.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>






