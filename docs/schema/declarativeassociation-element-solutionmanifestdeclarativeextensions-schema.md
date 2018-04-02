---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a5458eec-878b-4b20-715f-245660d09069
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
<td align="left"># DeclarativeAssociation Element (SolutionManifestDeclarativeExtensions Schema)</td>
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

The <span
class="keyword">DOCS-LESSTHANDeclarativeAssociationDOCS-GREATERTHAN</span>
element derives from the <span
class="keyword">DOCS-LESSTHANAssociationDOCS-GREATERTHAN</span> element.
In intermediate declarative Microsoft Outlook 2010 solutions, this
element is used to describe an association of the external content type
that the Outlook folder contains. Specifically, this element is used to
set or get the Outlook property that maps to the entity instance
reference of the association. If set, this is used by the External Item
Picker functionality.

Namespace:
http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest/DeclarativeExtensions

Schema: SolutionManifestDeclarativeExtensions

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><Association  xsl:type="DeclarativeAssociation" xmlns:xsl=http://www.w3.org/2001/XMLSchema-instance"  DisplayNameOfficeItemPropertyName = "String" AssociationName = "String" EntityTypeNamespace = "String" EntityTypeName = "String" ReferenceOfficeItemPropertyName = "String" Name = "String" Description = "String"> </Association></code></pre></td>
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
<td align="left"><p>DisplayNameOfficeItemPropertyName</p></td>
<td align="left"><p>The display name of the <span class="ui">Office Item Property Name</span> from the Solution Manifest.</p>
<p>Optional.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>AssociationName</p></td>
<td align="left"><p>The name of the association from the BDC model.</p>
<p>Required.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>EntityTypeNamespace</p></td>
<td align="left"><p>The name of the entity namespace from the BDC model.</p>
<p>Required.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>EntityTypeName</p></td>
<td align="left"><p>The entity name from the BDC model.</p>
<p>Required.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ReferenceOfficeItemPropertyName</p></td>
<td align="left"><p>The name of the Outlook property in which you want to store the entity instance reference of the association. Must match the name of an **OfficeItemProperty** in the Solution Manifest.</p>
<p>Required.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>Name</p></td>
<td align="left"><p>A name for the association.</p>
<p>Required.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Description</p></td>
<td align="left"><p>A description for the association.</p>
<p>Optional.</p>
<p>Attribute type: String</p></td>
</tr>
</tbody>
</table>

#### Child elements

None.

#### Parent elements

None.








