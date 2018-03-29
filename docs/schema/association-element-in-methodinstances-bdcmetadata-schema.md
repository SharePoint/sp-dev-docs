---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.Association
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 9659a1f5-1b12-03ef-f9e3-5c9904cc5dd0
---

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]( "Copy code hover")
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
<td align="left"># Association Element in MethodInstances (BDCMetadata Schema)</td>
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

Namespace: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

Schema: BDCMetadata

The Association element links related external content types within a
system. For example, a customer is associated with a sales order in the
AdventureWorks system: a customer makes sales orders. An Association
holds pointers to the source and destination external content types and
a pointer to the business logic (a MethodInstance object) that allows a
client to get the destination external content type from the source
external content type. The traversal of an Association is a method call
on the external system.

In the BDC Model, the Association logic (MethodInstance) can be on any
external content type, either source or destination or an unrelated
external content type, provided the destination external content type
belongs to the LobSystem that contains the Association method instance.

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src=".." title="Caution note" alt="Caution note" /><strong>Caution</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Note that when using SharePoint Designer 2010, you must create the Association operation on the destination external content type. This is a requirement of SharePoint Designer and modeling it the other way (on the source or another external content type) will not work.</p></td>
</tr>
</tbody>
</table>

BDC also supports multiple source external content type scenarios and
one destination external content type scenario.

An Association method instance contains slots for the identifier values
of the SourceEntity instance, and a slot for the identifier values of
the DestinationEntity instances. Therefore, you must tag enough input
TypeDescriptor objects with identifiers corresponding to each identifier
of each external content type that is a source in the Association in the
Association method. The IdentifierName attribute on an input
TypeDescriptor object signals BDC to insert the identifier value of the
EntityInstance of relevance before executing the method. For example, in
an AssociationMethodInstance, the user has probably provided the
identifier values for the source EntityInstance that he or she wants to
retrieve. BDC will insert that value into this slot after fully
instantiating this parameter by using all the default values.

BDC also supports Foreign Key pseudo-associations. Foreign Key
pseudo-associations are not first-class associations. Consider a Web
method that returns Customer, and that one of the fields of a Customer
is the Key to the Address of the Customer. Also consider another web
method that returns Address given its key. A metadata modeller may use
this method as a Customer-Address Association method (possibly along
with a Specific Finder of Address). Foreign key pseudo associations see
that the target of this method is an Address, fetch the key of Address
from the Returned Customer and then call this association Method to
return the Address automatically.

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src=".." title="Caution note" alt="Caution note" /><strong>Caution</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Note that although BDC Model supports foreign key pseudo-associations, SharePoint Designer 2010 does not. Therefore, you cannot model foreign key pseudo-associations using SharePoint Designer.</p></td>
</tr>
</tbody>
</table>

The Association element accepts the following property.

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src=".." title="Important note" alt="Important note" /><strong>Important</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Properties are case-sensitive.</p></td>
</tr>
</tbody>
</table>

Properties

<table>
<colgroup>
<col width="16%" />
<col width="16%" />
<col width="16%" />
<col width="16%" />
<col width="16%" />
<col width="16%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Property</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
<th align="left"><p>Required</p></th>
<th align="left"><p>Default Value</p></th>
<th align="left"><p>Limits/Accepted Values</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>HideOnProfilePage</p></td>
<td align="left"><p>System.Boolean</p></td>
<td align="left"><p>Specifies whether the related external content type should be added to the profile page of the master external content type.</p></td>
<td align="left"><p>Optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Association Type = &quot;String&quot; Default = &quot;Boolean&quot; ReturnParameterName = &quot;String&quot; ReturnTypeDescriptorName = &quot;String&quot; ReturnTypeDescriptorLevel = &quot;Integer&quot; Name = &quot;String&quot; DefaultDisplayName = &quot;String&quot; IsCached = &quot;Boolean&quot;&gt; &lt;/Association&gt;</code></pre></td>
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
<td align="left"><p>Type</p></td>
<td align="left"><p>Required.</p>
<p>The MethodInstanceType that specifies the type of the Association.</p>
<p>The following table lists the possible values for this attribute.</p>
<div class="tableSection">
<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Value</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>AssociationNavigator</p></td>
<td align="left"><p>The MethodInstance is an AssociationNavigator.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Associator</p></td>
<td align="left"><p>The MethodInstance is an Associator.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Disassociator</p></td>
<td align="left"><p>The MethodInstance is a Disassociator.</p></td>
</tr>
<tr class="even">
<td align="left"><p>BulkAssociatedIdEnumerator</p></td>
<td align="left"><p>The MethodInstance is a BulkAssociatedIdEnumerator.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>BulkAssociationNavigator</p></td>
<td align="left"><p>The MethodInstance is a BulkAssociationNavigator.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>Default</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the Association is the default among all Associations sharing its type within the containing external content type. If set to true, the Association is the default among all Associations sharing its type within the containing external content type. If set to false, the Association is not the default among all Associations sharing its type within the containing external content type.</p>
<p>Default value: false</p>
<p>Attribute type: Boolean</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ReturnParameterName</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the parameter that contains the ReturnTypeDescriptor of the Association. The Direction attribute of the parameter must contain a value of either &quot;Out&quot;, &quot;InOut, or &quot;Return&quot;.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>ReturnTypeDescriptorName</p></td>
<td align="left"><p>Optional.</p>
<p>This has been deprecated. Use the ReturnTypeDescriptorPath instead.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ReturnTypeDescriptorLevel</p></td>
<td align="left"><p>Optional.</p>
<p>This has been deprecated. Use the ReturnTypeDescriptorPath instead.</p>
<p>Attribute type: Integer</p></td>
</tr>
<tr class="even">
<td align="left"><p>ReturnTypeDescriptorPath</p></td>
<td align="left"><p>Optional.</p>
<p>The dotted path of the TypeDescriptor of the Association.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Name</p></td>
<td align="left"><p>Required.</p>
<p>The name of the Association.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>DefaultDisplayName</p></td>
<td align="left"><p>Optional.</p>
<p>The default display name for the Association.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>IsCached</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether this Association is frequently used.</p>
<p>Default value: true</p>
<p>Attribute type: Boolean</p></td>
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
<td align="left"><p>The LocalizedDisplayNames element specifies a list of localized names for the Association.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-bdcmetadata-schema.md">Properties Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The Properties element specifies the properties of the Association.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="accesscontrollist-element-bdcmetadata-schema.md">AccessControlList Element (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The AccessControlList element specifies a set of access rights for the Association.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="sourceentity-element-in-association-bdcmetadata-schema.md">SourceEntity Element in Association (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The SourceEntity element specifies the source external content type in the association.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="destinationentity-element-in-association-bdcmetadata-schema.md">DestinationEntity Element in Association (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The DestinationEntity element specifies the destination external content type in the Association.</p></td>
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
<td align="left"><p><span sdata="link"><a href="methodinstances-element-in-method-bdcmetadata-schema.md">MethodInstances Element in Method (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The MethodInstances element that contains the Association.</p></td>
</tr>
</tbody>
</table>








