---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.Entity
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a8455bc4-12d8-85e0-146e-5d1d8579e1f5
---

![Collapse
section](../icons/collapse_all.gif "Collapse section")![Expand
section](../icons/expand_all.gif "Expand section")![](../icons/collapse_all.gif)![](../icons/expand_all.gif)![](../icons/dropdown.gif)![](../icons/dropdownHover.gif)![Copy
code](../icons/copycode.gif "Copy code")![Copy code
hover](../icons/copycodeHighlight.gif "Copy code hover")
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
<td align="left"># Entity Element in Entities (BDCMetadata Schema)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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
SharePoint Online | SharePoint Server 2013*

Specifies an external content type.

Namespace: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

Schema: BDCMetadata

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
<td align="left"><pre><code>&lt;Entity Namespace = &quot;String&quot; Version = &quot;String&quot; EstimatedInstanceCount = &quot;Integer&quot; DefaultOperationMode = &quot;String&quot; Name = &quot;String&quot; DefaultDisplayName = &quot;String&quot; IsCached = &quot;Boolean&quot;&gt; &lt;/Entity&gt;</code></pre></td>
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
<td align="left"><p>Namespace</p></td>
<td align="left"><p>Required.</p>
<p>The namespace that this external content type belongs to.</p>
<p>Attribute type: **String**</p>
<div class="alert">
<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="../icons/alert_note.gif" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>The namespace should not contain the special character &quot;**DOCS-ASTERISK**&quot;.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>Version</p></td>
<td align="left"><p>Required.</p>
<p>The version number of this external content type.</p>
<p>Attribute type: **String**</p>
<div class="alert">
<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="../icons/alert_caution.gif" title="Caution note" alt="Caution note" /><strong>Caution</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>When the BDC model changes, you must increase the version number of the external content type. If the structure of an external content type changes, you should increase the major number. Examples of structural changes include adding a field to a **SpecificFinder</span> or changing an identifier field. If the change does not affect the structure of the external content type, for example, when adding a creator method, changing connection information, or when changing names of <span class="keyword">LobSystems** and type descriptors, you should change the build number and revision number.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="odd">
<td align="left"><p>EstimatedInstanceCount</p></td>
<td align="left"><p>Optional.</p>
<p>The estimated number of external items contained by the external system.</p>
<p>Default value: 10000</p>
<p>Attribute type: **Integer**</p></td>
</tr>
<tr class="even">
<td align="left"><p>DefaultOperationMode</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies the default behavior when interacting with the external system while creating, deleting, updating, or reading external items.</p>
<p>Default value: Default</p>
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
<td align="left"><p>Online</p></td>
<td align="left"><p>Bypass the cached external items for all operations and interact with the external system directly.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Cached</p></td>
<td align="left"><p>Perform <strong>Create</strong>, <strong>Read</strong>, <strong>Update</strong>, and <strong>Delete</strong> operations directly against the cached external items. For <strong>Read</strong> operations, if the requested external items are available in the cache, use the external items in the cache. Otherwise, bypass the cache to obtain the external items from the external system, and put it in the cache for later use.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Offline</p></td>
<td align="left"><p>Perform <strong>Create</strong>, <strong>Read</strong>, <strong>Update</strong>, and <strong>Delete</strong> operations against only the cached external items.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Default</p></td>
<td align="left"><p>Use the System default behavior. This uses Cached mode if the environment supports caching external items.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="odd">
<td align="left"><p>Name</p></td>
<td align="left"><p>Required.</p>
<p>The name of the external content type.</p>
<p>Attribute type: **String**</p>
<div class="alert">
<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="../icons/alert_note.gif" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>The name of an external content type should not contain the asterisk special character &quot;**DOCS-ASTERISK**&quot;.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>DefaultDisplayName</p></td>
<td align="left"><p>Optional.</p>
<p>The default display name of the external content type.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>IsCached</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether this external content type will be frequently used. If set to true, Business Data Connectivity (BDC) service will cache this external content type in memory.</p>
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
<td align="left"><p><span sdata="link"><a href="localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.htm">LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The localized display names of this external content type.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-bdcmetadata-schema.htm">Properties Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The properties of this external content type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="accesscontrollist-element-bdcmetadata-schema.htm">AccessControlList Element (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The access control list (ACL) of this external content type.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="identifiers-element-in-entity-bdcmetadata-schema.htm">Identifiers Element in Entity (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The identifiers of the external content type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="methods-element-in-entity-bdcmetadata-schema.htm">Methods Element in Entity (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The methods of the external content type.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="associationgroups-element-in-entity-bdcmetadata-schema.htm">AssociationGroups Element in Entity (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The association groups of the external content type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="actions-element-in-entity-bdcmetadata-schema.htm">Actions Element in Entity (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The actions of the external content type.</p></td>
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
<td align="left"><p><span sdata="link"><a href="entities-element-in-lobsystem-bdcmetadata-schema.htm">Entities Element in LobSystem (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The list of external content types in this external system.</p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[What Are External Content
Types?](http://msdn.microsoft.com/library/2d8d2614-faaa-4ba2-a897-615a383c36a9(Office.15).aspx)








