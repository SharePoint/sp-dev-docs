---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 082dcea0-3ac6-b534-08c2-3ab87f3348a8
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
<td align="left"># ContextDefinition Element in ContextDefinitionGroup (SolutionManifestDefinitions Schema)</td>
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

Defines a context for an external content type of Outlook Item Type that
this context definition group defines.

**Namespace:**
http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest

**Schema:** SolutionManifestDefinitions

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
<td align="left"><pre><code>&lt;ContextDefinition ContentType = &quot;String&quot; Description = &quot;String&quot;&gt; &lt;/ContextDefinition&gt;</code></pre></td>
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
<td align="left"><p>**ContentType**</p></td>
<td align="left"><p>Required.</p>
<p>The type name of this context in Microsoft Outlook 2010. This can be different from the name of the external content type in the model. The value you specify here affects the name of the Outlook Item Type as it will appear in the Outlook object model. In Outlook, the name will be appended to the Outlook Item Type and the full name of an external content type will be &quot;OutlookDOCS-LESSTHANOutlookItemTypeDOCS-GREATERTHANDOCS-LESSTHANContentTypeDOCS-GREATERTHAN&quot;. For example, a Customer external type could be &quot;OutlookContactCustomer&quot; in Outlook if it is visualized as an Outlook Contact. If the external content type is visualized in a task pane in Outlook, the content type has to be in the following format:</p>
<p><span class="code">length_of_entity_namespace length_of_entity_name length_of_view_name entity_namespace entity_name view_name position_of_entity_namespace</span></p>
<p>For example, &quot;12 12 24 AWWSExample OrderHeader GetSalesOrderHeaderById 9&quot;.</p>
<p>If you use the object model to work on the Outlook items, this is the naming scheme you will use to identify your Outlook items.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional.</p>
<p>A description for the context definition.</p>
<p>Attribute type: **String**</p></td>
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
<td align="left"><p><span sdata="link"><a href="entities-element-in-contextdefinition-solutionmanifestdefinitions-schema.md">Entities Element in ContextDefinition (SolutionManifestDefinitions Schema)</a></span></p></td>
<td align="left"><p>Defines the external content type that this context definition is associated with. In the current release of the product, a context definition can be associated with only one external type, even though the schema supports more than one **Entity** element.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="officeitemcustomizations-element-in-contextdefinition-solutionmanifestdefinition.md">OfficeItemCustomizations Element in ContextDefinition (SolutionManifestDefinitions Schema)</a></span></p></td>
<td align="left"><p>Lists the Outlook UI customizations defined in this context definition.</p></td>
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
<td align="left"><p><span sdata="link"><a href="contextdefinitiongroup-element-in-contextdefinitiongroups-solutionmanifestdefini.md">ContextDefinitionGroup Element in ContextDefinitionGroups (SolutionManifestDefinitions Schema)</a></span></p></td>
<td align="left"><p>The context definition group that contains this context definition.</p></td>
</tr>
</tbody>
</table>








