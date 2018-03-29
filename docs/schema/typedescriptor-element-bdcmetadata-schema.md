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

**Namespace:**
http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema:** BDCMetadata

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
<td align="left"><pre><code>&lt;TypeDescriptor TypeName = &quot;String&quot; LobName = &quot;String&quot; IdentifierEntityNamespace = &quot;String&quot; IdentifierEntityName = &quot;String&quot; IdentifierName = &quot;String&quot; ForeignIdentifierAssociationName = &quot;String&quot; ForeignIdentifierAssociationEntityName = &quot;String&quot; ForeignIdentifierAssociationEntityNamespace = &quot;String&quot; AssociatedFilter = &quot;String&quot; IsCollection = &quot;Boolean&quot; ReadOnly = &quot;Boolean&quot; CreatorField = &quot;Boolean&quot; UpdaterField = &quot;Boolean&quot; PreUpdaterField = &quot;Boolean&quot; Significant = &quot;Boolean&quot; Name = &quot;String&quot; DefaultDisplayName = &quot;String&quot; IsCached = &quot;Boolean&quot;&gt; &lt;/TypeDescriptor&gt;</code></pre></td>
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
<p>The data structure that is represented by the **TypeDescriptor</span>. The default value of this attribute is the name of the <span class="keyword">TypeDescriptor</span>. For example, a line-of-business (LOB) system data structure named &quot;CN1A&quot; can be represented by a <span class="keyword">TypeDescriptor</span> with <span class="keyword">Name</span> attribute equal to &quot;Customer Name&quot;, if the <span class="keyword">LobName</span> attribute of this <span class="keyword">TypeDescriptor** is equal to &quot;CN1A&quot;.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>IdentifierEntityNamespace</p></td>
<td align="left"><p>Optional.</p>
<p>The namespace of the external content type that contains the identifier that the **TypeDescriptor</span> references. If the <span class="keyword">TypeDescriptor</span> does not reference an <span class="keyword">Identifier</span>, this attribute must not be present. When this attribute is present, the <span class="keyword">IdentifierEntityName</span> and <span class="keyword">IdentifierName</span> attributes must also be present. The default value of this attribute is the namespace of the external content type that contains the method containing the parameter that contains the <span class="keyword">TypeDescriptor**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>IdentifierEntityName</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the **Entity</span> that contains the <span class="keyword">Identifier</span> that the c<span class="keyword">TypeDescriptor</span> references. If the <span class="keyword">TypeDescriptor</span> does not reference an <span class="keyword">Identifier</span>, this attribute must not be present. When this attribute is present, the <span class="keyword">IdentifierEntityNamespace</span> and <span class="keyword">IdentifierName</span> attributes must also be present. The default value of this attribute is the name of the <span class="keyword">Entity</span> that contains the <span class="keyword">Method</span> containing the <span class="keyword">Parameter</span> that contains the <span class="keyword">TypeDescriptor**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>IdentifierName</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the **Identifier</span> referenced by the <span class="keyword">TypeDescriptor</span>. If the <span class="keyword">TypeDescriptor</span> does not reference an <span class="keyword">Identifier**, this attribute must not be present.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>ForeignIdentifierAssociationName</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the **Association</span> referenced by the <span class="keyword">TypeDescriptor</span>. If the <span class="keyword">TypeDescriptor</span> does not reference an <span class="keyword">Association</span>, this attribute must not be present. When this attribute is present, the <span class="keyword">IdentifierName</span> attribute must also be present. The <span class="keyword">ForeignIdentifierAssociationName</span> attribute must be specified when the <span class="keyword">Identifier</span> referenced by this <span class="keyword">TypeDescriptor</span> is related to an <span class="keyword">Association</span>, and the <span class="keyword">Identifier</span> is contained by a source <span class="keyword">Entity</span> of the <span class="keyword">Association**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ForeignIdentifierAssociationEntityName</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the **Entity</span> that contains the <span class="keyword">Association</span> referenced by the <span class="keyword">TypeDescriptor</span>. If the <span class="keyword">TypeDescriptor</span> does not reference an <span class="keyword">Association</span>, this attribute must not be present. When this attribute is present, the <span class="keyword">ForeignIdentifierAssociationEntityNamespace</span> and <span class="keyword">ForeignIdentifierAssociationName</span> attributes must also be present. The default value of this attribute is the name of the <span class="keyword">Entity</span> that contains the <span class="keyword">Method</span> containing the <span class="keyword">Parameter</span> that contains the <span class="keyword">TypeDescriptor**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>ForeignIdentifierAssociationEntityNamespace</p></td>
<td align="left"><p>Optional.</p>
<p>The namespace of the **Entity</span> that contains the <span class="keyword">Association</span> referenced by the <span class="keyword">TypeDescriptor</span>. If the <span class="keyword">TypeDescriptor</span> does not reference an <span class="keyword">Association</span>, this attribute must not be present. When this attribute is present, the <span class="keyword">ForeignIdentifierAssociationEntityName</span> and <span class="keyword">ForeignIdentifierAssociationName</span> attributes must also be present. The default value of this attribute is the namespace of the <span class="keyword">Entity</span> that contains the <span class="keyword">Method</span> containing the <span class="keyword">Parameter</span> that contains the <span class="keyword">TypeDescriptor**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>AssociatedFilter</p></td>
<td align="left"><p>Optional.</p>
<p>The name of a **FilterDescriptor</span> that is associated with the <span class="keyword">TypeDescriptor</span>. If the <span class="keyword">TypeDescriptor</span> is not associated with a <span class="keyword">FilterDescriptor** this attribute must not be present.</p>
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
<p>Specifies whether the data stored by the data structure represented by the **TypeDescriptor</span> can be modified. This attribute must not be specified if the value of the <span class="keyword">Direction</span> attribute of the <span class="keyword">Parameter</span> that contains the <span class="keyword">TypeDescriptor** is &quot;In&quot;.</p>
<p>Default value: **false**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>CreatorField</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the **TypeDescriptor</span> represents a field for <span class="keyword">MethodInstances</span> of type <span class="keyword">Creator</span> that are contained by the <span class="keyword">Method</span> that contains the <span class="keyword">Parameter</span> containing the <span class="keyword">TypeDescriptor**.</p>
<p>Default value: **false**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>UpdaterField</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the **TypeDescriptor</span> represents a field for <span class="keyword">MethodInstances</span> of type <span class="keyword">Updater</span> that are contained by the <span class="keyword">Method</span> that contains the <span class="keyword">Parameter</span> containing the <span class="keyword">TypeDescriptor</span>. When this attribute is specified, a <span class="keyword">PreUpdaterField** attribute must not be specified.</p>
<p>Default value: **false**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>PreUpdaterField</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether data structure represented by the **TypeDescriptor</span> stores the latest data value received from the external system of a field for <span class="keyword">MethodInstances</span> of type <span class="keyword">Updater</span>. When this attribute is specified, a <span class="keyword">UpdaterField** attribute must not be specified.</p>
<p>Default value: **false**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Significant</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether values stored by the data structure represented by this **TypeDescriptor</span> are included in calculating a hash code or comparing values stored in the data structures. For example, a <span class="keyword">TypeDescriptor</span> representing a customer's last name is taken into account when determining whether a record has been modified, and so it is significant, whereas the <span class="keyword">TypeDescriptor** representing the date on which the customer record is last modified typically is not taken into account to determine whether a record has been modified, and so it is not significant.</p>
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
<td align="left"><p>The name of a **TypeDescriptor** should not contain the special characters for forward slash (&quot;/&quot;), period (&quot;.&quot;), or opening bracket (&quot;[&quot;).</p></td>
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
<p>When the TypeDescriptor is of type **System.String</span>, the <span class="keyword">Properties</span> element can contain a <span class="keyword">Property</span> of type <span class="keyword">System.Int32</span> with the <span class="keyword">Name</span> attribute set to <span class="keyword">Size</span>. The value of the <span class="keyword">Property</span> specifies the expected maximum string length of the value of the data structure described by this <span class="keyword">TypeDescriptor**.</p></td>
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
<td align="left"><p>The child **TypeDescriptors</span> of the <span class="keyword">TypeDescriptor**.</p></td>
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








