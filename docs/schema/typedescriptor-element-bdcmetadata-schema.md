---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.TypeDescriptor
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: ae423de8-c13b-aea5-d47b-17ef786fb5a7
---

# TypeDescriptor Element 

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a **TypeDescriptor**.

**Namespace**: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema**: BDCMetadata


```XML
<TypeDescriptor TypeName = "String" LobName = "String" IdentifierEntityNamespace = "String" IdentifierEntityName = "String" IdentifierName = "String" ForeignIdentifierAssociationName = "String" ForeignIdentifierAssociationEntityName = "String" ForeignIdentifierAssociationEntityNamespace = "String" AssociatedFilter = "String" IsCollection = "Boolean" ReadOnly = "Boolean" CreatorField = "Boolean" UpdaterField = "Boolean" PreUpdaterField = "Boolean" Significant = "Boolean" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </TypeDescriptor>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**TypeName**</p></td>
<td align="left"><p>Required.</p>
<p>The identifier of the data type of the data structure that is represented by the **TypeDescriptor**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**LobName**</p></td>
<td align="left"><p>Optional.</p>
<p>The data structure that is represented by the **TypeDescriptor**. The default value of this attribute is the name of the **TypeDescriptor**. For example, a line-of-business (LOB) system data structure named "CN1A" can be represented by a **TypeDescriptor** with **Name** attribute equal to "Customer Name", if the **LobName** attribute of this **TypeDescriptor** is equal to "CN1A".</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IdentifierEntityNamespace**</p></td>
<td align="left"><p>Optional.</p>
<p>The namespace of the external content type that contains the identifier that the **TypeDescriptor** references. If the **TypeDescriptor** does not reference an **Identifier**, this attribute must not be present. When this attribute is present, the **IdentifierEntityName** and **IdentifierName** attributes must also be present. The default value of this attribute is the namespace of the external content type that contains the method containing the parameter that contains the **TypeDescriptor**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IdentifierEntityName**</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the **Entity** that contains the **Identifier** that the **TypeDescriptor** references. If the **TypeDescriptor** does not reference an **Identifier**, this attribute must not be present. When this attribute is present, the **IdentifierEntityNamespace** and **IdentifierName** attributes must also be present. The default value of this attribute is the name of the **Entity** that contains the **Method** containing the **Parameter** that contains the **TypeDescriptor**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IdentifierName**</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the **Identifier** referenced by the **TypeDescriptor**. If the **TypeDescriptor** does not reference an **Identifier**, this attribute must not be present.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ForeignIdentifierAssociationName**</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the **Association** referenced by the **TypeDescriptor**. If the **TypeDescriptor** does not reference an **Association**, this attribute must not be present. When this attribute is present, the **IdentifierName** attribute must also be present. The **ForeignIdentifierAssociationName** attribute must be specified when the **Identifier** referenced by this **TypeDescriptor** is related to an **Association**, and the **Identifier** is contained by a source **Entity** of the **Association**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ForeignIdentifierAssociationEntityName**</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the **Entity** that contains the **Association** referenced by the **TypeDescriptor**. If the **TypeDescriptor** does not reference an **Association**, this attribute must not be present. When this attribute is present, the **ForeignIdentifierAssociationEntityNamespace** and **ForeignIdentifierAssociationName** attributes must also be present. The default value of this attribute is the name of the **Entity** that contains the **Method** containing the **Parameter** that contains the **TypeDescriptor**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ForeignIdentifierAssociationEntityNamespace**</p></td>
<td align="left"><p>Optional.</p>
<p>The namespace of the **Entity** that contains the **Association** referenced by the **TypeDescriptor**. If the **TypeDescriptor** does not reference an **Association**, this attribute must not be present. When this attribute is present, the **ForeignIdentifierAssociationEntityName** and **ForeignIdentifierAssociationName** attributes must also be present. The default value of this attribute is the namespace of the **Entity** that contains the **Method** containing the **Parameter** that contains the **TypeDescriptor**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AssociatedFilter**</p></td>
<td align="left"><p>Optional.</p>
<p>The name of a **FilterDescriptor** that is associated with the **TypeDescriptor**. If the **TypeDescriptor** is not associated with a **FilterDescriptor**, this attribute must not be present.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsCollection**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the **TypeDescriptor** represents a single data structure or a collection of data structures.</p>
<p>Default value: **false**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ReadOnly**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the data stored by the data structure represented by the **TypeDescriptor** can be modified. This attribute must not be specified if the value of the **Direction** attribute of the **Parameter** that contains the **TypeDescriptor** is "In".</p>
<p>Default value: **false**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CreatorField**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the **TypeDescriptor** represents a field for **MethodInstances** of type **Creator** that are contained by the **Method** that contains the **Parameter** containing the **TypeDescriptor**.</p>
<p>Default value: **false**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UpdaterField**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the **TypeDescriptor** represents a field for **MethodInstances** of type **Updater** that are contained by the **Method** that contains the **Parameter** containing the **TypeDescriptor**. When this attribute is specified, a **PreUpdaterField** attribute must not be specified.</p>
<p>Default value: **false**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PreUpdaterField**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether data structure represented by the **TypeDescriptor** stores the latest data value received from the external system of a field for **MethodInstances** of type **Updater**. When this attribute is specified, an **UpdaterField** attribute must not be specified.</p>
<p>Default value: **false**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Significant**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether values stored by the data structure represented by this **TypeDescriptor** are included in calculating a hash code or comparing values stored in the data structures. For example, a **TypeDescriptor** representing a customer's last name is taken into account when determining whether a record has been modified, and so it is significant, whereas the **TypeDescriptor** representing the date on which the customer record is last modified typically is not taken into account to determine whether a record has been modified, and so it is not significant.</p>
<p>Default value: **true**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the **TypeDescriptor**.</p>
<p>Attribute type: **String**</p>
<p>**Note**: The name of a **TypeDescriptor** should not contain the special characters for forward slash ("/"), period ("."), or opening bracket ("[").</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DefaultDisplayName**</p></td>
<td align="left"><p>Optional.</p>
<p>The display name of the **TypeDescriptor**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsCached**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the **TypeDescriptor** is used frequently.</p>
<p>Default value: **true**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
</tbody>
</table>

### Child elements

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md">LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The localized names of the **TypeDescriptor**.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-bdcmetadata-schema.md">Properties Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The properties of the **TypeDescriptor**.</p>
<p>When the TypeDescriptor is of type **System.String**, the **Properties** element can contain a **Property** of type **System.Int32** with the **Name** attribute set to **Size**. The value of the **Property** specifies the expected maximum string length of the value of the data structure described by this **TypeDescriptor**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="interpretation-element-in-typedescriptor-bdcmetadata-schema.md">Interpretation Element in TypeDescriptor (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The rules for the data stored by the data structure represented by the **TypeDescriptor**.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="defaultvalues-element-in-typedescriptor-bdcmetadata-schema.md">DefaultValues Element in TypeDescriptor (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The default values of the **TypeDescriptor**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="typedescriptors-element-in-typedescriptor-bdcmetadata-schema.md">TypeDescriptors Element in TypeDescriptor (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The child **TypeDescriptors** of the **TypeDescriptor**.</p></td>
</tr>
</tbody>
</table>

### Parent elements

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="typedescriptors-element-in-typedescriptor-bdcmetadata-schema.md">TypeDescriptors Element in TypeDescriptor (BDCMetadata Schema)</a></span></p></td>
<td align="left"></td>
</tr>
</tbody>
</table>








