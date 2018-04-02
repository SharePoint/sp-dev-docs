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

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]
<table>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

Visual Basic  
C\#  
C++  
JavaScript  

<table>
<tbody>
<tr class="odd">
<td align="left"><span id="runningHeaderText"></span></td>
</tr>
<tr class="even">
<td align="left"># TypeDescriptor Element (BDCMetadata Schema)</td>
</tr>
<tr class="odd">
<td align="left"><span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

**Last modified:** March 09, 2015

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

Specifies a **TypeDescriptor**.

**Namespace**:
http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema**: BDCMetadata

<span codelanguage="xmlLang"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">XML</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><pre><code><TypeDescriptor TypeName = "String" LobName = "String" IdentifierEntityNamespace = "String" IdentifierEntityName = "String" IdentifierName = "String" ForeignIdentifierAssociationName = "String" ForeignIdentifierAssociationEntityName = "String" ForeignIdentifierAssociationEntityNamespace = "String" AssociatedFilter = "String" IsCollection = "Boolean" ReadOnly = "Boolean" CreatorField = "Boolean" UpdaterField = "Boolean" PreUpdaterField = "Boolean" Significant = "Boolean" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </TypeDescriptor></code></pre></td>
</tr>
</tbody>
</table>


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following sections describe attributes, child elements, and parent
elements.

#### Attributes

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>TypeName</p></td>
<td align="left"><p>Required.</p>
<p>The identifier of the data type of the data structure that is represented by the **TypeDescriptor**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>LobName</p></td>
<td align="left"><p>Optional.</p>
<p>The data structure that is represented by the **TypeDescriptor</span>. The default value of this attribute is the name of the **TypeDescriptor</span>. For example, a line-of-business (LOB) system data structure named "CN1A" can be represented by a **TypeDescriptor</span> with **Name</span> attribute equal to "Customer Name", if the **LobName</span> attribute of this **TypeDescriptor** is equal to "CN1A".</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>IdentifierEntityNamespace</p></td>
<td align="left"><p>Optional.</p>
<p>The namespace of the external content type that contains the identifier that the **TypeDescriptor</span> references. If the **TypeDescriptor</span> does not reference an **Identifier</span>, this attribute must not be present. When this attribute is present, the **IdentifierEntityName</span> and **IdentifierName</span> attributes must also be present. The default value of this attribute is the namespace of the external content type that contains the method containing the parameter that contains the **TypeDescriptor**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>IdentifierEntityName</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the **Entity</span> that contains the **Identifier</span> that the c**TypeDescriptor</span> references. If the **TypeDescriptor</span> does not reference an **Identifier</span>, this attribute must not be present. When this attribute is present, the **IdentifierEntityNamespace</span> and **IdentifierName</span> attributes must also be present. The default value of this attribute is the name of the **Entity</span> that contains the **Method</span> containing the **Parameter</span> that contains the **TypeDescriptor**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>IdentifierName</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the **Identifier</span> referenced by the **TypeDescriptor</span>. If the **TypeDescriptor</span> does not reference an **Identifier**, this attribute must not be present.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>ForeignIdentifierAssociationName</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the **Association</span> referenced by the **TypeDescriptor</span>. If the **TypeDescriptor</span> does not reference an **Association</span>, this attribute must not be present. When this attribute is present, the **IdentifierName</span> attribute must also be present. The **ForeignIdentifierAssociationName</span> attribute must be specified when the **Identifier</span> referenced by this **TypeDescriptor</span> is related to an **Association</span>, and the **Identifier</span> is contained by a source **Entity</span> of the **Association**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ForeignIdentifierAssociationEntityName</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the **Entity</span> that contains the **Association</span> referenced by the **TypeDescriptor</span>. If the **TypeDescriptor</span> does not reference an **Association</span>, this attribute must not be present. When this attribute is present, the **ForeignIdentifierAssociationEntityNamespace</span> and **ForeignIdentifierAssociationName</span> attributes must also be present. The default value of this attribute is the name of the **Entity</span> that contains the **Method</span> containing the **Parameter</span> that contains the **TypeDescriptor**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>ForeignIdentifierAssociationEntityNamespace</p></td>
<td align="left"><p>Optional.</p>
<p>The namespace of the **Entity</span> that contains the **Association</span> referenced by the **TypeDescriptor</span>. If the **TypeDescriptor</span> does not reference an **Association</span>, this attribute must not be present. When this attribute is present, the **ForeignIdentifierAssociationEntityName</span> and **ForeignIdentifierAssociationName</span> attributes must also be present. The default value of this attribute is the namespace of the **Entity</span> that contains the **Method</span> containing the **Parameter</span> that contains the **TypeDescriptor**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>AssociatedFilter</p></td>
<td align="left"><p>Optional.</p>
<p>The name of a **FilterDescriptor</span> that is associated with the **TypeDescriptor</span>. If the **TypeDescriptor</span> is not associated with a **FilterDescriptor** this attribute must not be present.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>IsCollection</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the **TypeDescriptor** represents a single data structure or a collection of data structures.</p>
<p>Default value: **false**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ReadOnly</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the data stored by the data structure represented by the **TypeDescriptor</span> can be modified. This attribute must not be specified if the value of the **Direction</span> attribute of the **Parameter</span> that contains the **TypeDescriptor** is "In".</p>
<p>Default value: **false**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>CreatorField</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the **TypeDescriptor</span> represents a field for **MethodInstances</span> of type **Creator</span> that are contained by the **Method</span> that contains the **Parameter</span> containing the **TypeDescriptor**.</p>
<p>Default value: **false**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>UpdaterField</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the **TypeDescriptor</span> represents a field for **MethodInstances</span> of type **Updater</span> that are contained by the **Method</span> that contains the **Parameter</span> containing the **TypeDescriptor</span>. When this attribute is specified, a **PreUpdaterField** attribute must not be specified.</p>
<p>Default value: **false**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>PreUpdaterField</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether data structure represented by the **TypeDescriptor</span> stores the latest data value received from the external system of a field for **MethodInstances</span> of type **Updater</span>. When this attribute is specified, a **UpdaterField** attribute must not be specified.</p>
<p>Default value: **false**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Significant</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether values stored by the data structure represented by this **TypeDescriptor</span> are included in calculating a hash code or comparing values stored in the data structures. For example, a **TypeDescriptor</span> representing a customer's last name is taken into account when determining whether a record has been modified, and so it is significant, whereas the **TypeDescriptor** representing the date on which the customer record is last modified typically is not taken into account to determine whether a record has been modified, and so it is not significant.</p>
<p>Default value: **true**</p>
<p>Attribute type: Boolean</p></td>
</tr>
<tr class="even">
<td align="left"><p>Name</p></td>
<td align="left"><p>Required.</p>
<p>The name of the **TypeDescriptor**.</p>
<p>Attribute type: **String**</p>
<div class="alert">
<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>The name of a **TypeDescriptor** should not contain the special characters for forward slash ("/"), period ("."), or opening bracket ("[").</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="odd">
<td align="left"><p>DefaultDisplayName</p></td>
<td align="left"><p>Optional.</p>
<p>The display name of the **TypeDescriptor**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>IsCached</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the **TypeDescriptor** is used frequently.</p>
<p>Default value: **true**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
</tbody>
</table>

#### Child elements

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
<p>When the TypeDescriptor is of type **System.String</span>, the **Properties</span> element can contain a **Property</span> of type **System.Int32</span> with the **Name</span> attribute set to **Size</span>. The value of the **Property</span> specifies the expected maximum string length of the value of the data structure described by this **TypeDescriptor**.</p></td>
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
<td align="left"><p>The child **TypeDescriptors</span> of the **TypeDescriptor**.</p></td>
</tr>
</tbody>
</table>

#### Parent elements

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








