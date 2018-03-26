---


manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 791be402-981f-519e-fcde-f24cc3cb4139
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
<td align="left"># AppPrerequisite element (AppPrerequisiteCollection complexType) (SharePoint Add-in Manifest)</td>
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

Identifies a SharePoint Feature or capability that the add-in depends
on.

**Last modified:** September 17, 2015

**Applies to**: apps for SharePoint | SharePoint Foundation 2013 |
SharePoint Server 2013

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
<td align="left"><p>The string &quot;app&quot; appears as part, or all, of some element, attribute, and file names because SharePoint Add-ins were originally called &quot;apps for SharePoint&quot;. To ensure backward compatibility, the schemas have not been changed.</p></td>
</tr>
</tbody>
</table>

The SharePoint Add-ins installation infrastructure checks to see if the
Feature or capability is present and activated. If it is not,
installation of the add-in is blocked.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <AppPrerequisite Type="type_name " ID="feature/capability_guid_or_autohosted_component_type" MinimumVersion="n.n.n.n" />


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Element type</span></p></td>
<td align="left"><p><a href="appprerequisite-complextype-sharepoint-add-in-manifest.htm">AppPrerequisite</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p>http://schemas.microsoft.com/sharepoint/2012/app/manifest</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>appmanifest.xsd</p></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <xs:element name="AppPrerequisite" type="AppPrerequisite" maxOccurs="500"></xs:element>     


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.
class="keyword">sequence</span>, **minOccurs**,
**maxOccurs**, and <span
class="keyword">choice</span>, see the definition section.

### Parent elements

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
<td align="left"><p><a href="appprerequisites-element-appdefinition-complextypesharepoint-add-in-manifest.htm">AppPrerequisites</a></p></td>
<td align="left"><p><a href="appprerequisitecollection-complextype-sharepoint-add-in-manifest.htm">AppPrerequisiteCollection</a></p></td>
<td align="left"><p>A list of prerequisites that an SharePoint Add-in depends on.</p></td>
</tr>
</tbody>
</table>

### Child elements

None.

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
<td align="left"><p>ID</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The ID that identifies a Feature or capability that the SharePoint Add-in depends on.</p></td>
<td align="left"><p>Varies depending on the value of the **Type** attribute.</p>
<p>If **Type</span> is <span class="code">Feature</span>, the <span class="keyword">ID</span> is the bracketed, hyphenated GUID of the Feature; for example <span class="code">{151D22D9-95A8-4904-A0A3-22E4DB85D1E0}**.</p>
<p>If **Type</span> is <span class="code">Capability</span>, the <span class="keyword">ID** is one of the GUIDs in the following table. The hyphens are required.</p>
<div class="tableSection">
<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Capability</p></th>
<th align="left"><p>Value</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Access Services 2010</p></td>
<td align="left"><p>B2CEA5EF-26FF-4147-9074-731FE605F068</p></td>
</tr>
<tr class="even">
<td align="left"><p>Access Services</p></td>
<td align="left"><p>7CC11180-92E4-49F4-AF68-A55CA440E761</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Managed Metadata Web Service</p></td>
<td align="left"><p>8F32AE42-D7AA-4DBA-AF25-A9ED92468261</p></td>
</tr>
<tr class="even">
<td align="left"><p>PowerPoint Services</p></td>
<td align="left"><p>0C92DF0B-8D97-4D7B-BD87-7D5A4F0C89AA</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Secure Store Services</p></td>
<td align="left"><p>D4FAB6DC-93EA-48AB-B5DD-CCD9F2FC4E1C</p></td>
</tr>
<tr class="even">
<td align="left"><p>Machine Translation Service</p></td>
<td align="left"><p>A5760A6E-47B1-4F31-B964-1C3F72020DBC</p></td>
</tr>
<tr class="odd">
<td align="left"><p>User Profile Service</p></td>
<td align="left"><p>A83C8D70-71DE-4260-9FB8-677418EB47F2</p></td>
</tr>
<tr class="even">
<td align="left"><p>Visio Graphics Service</p></td>
<td align="left"><p>778D6B91-D46F-40E6-B7A4-1C666B800D03</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Work Management Service</p></td>
<td align="left"><p>5E49F681-D570-4C2B-8A50-84D5F38E2A12</p></td>
</tr>
<tr class="even">
<td align="left"><p>Duet</p></td>
<td align="left"><p>4F2DB42F-1AE3-4674-8E0B-2C125F9CAD4F</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SharePoint Workflow Services</p></td>
<td align="left"><p>CDD8F991-B459-4512-8048-03D5A03FF27E</p></td>
</tr>
<tr class="even">
<td align="left"><p>Search</p></td>
<td align="left"><p>132084D8-5DA6-4EAB-A636-3ADF44151846</p></td>
</tr>
<tr class="odd">
<td align="left"><p>EDU</p></td>
<td align="left"><p>89109E3B-2BF0-4262-A2F4-CEB7A3DECE21</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>MinimumVersion</p></td>
<td align="left"><p><a href="versiondefinition-simpletype-sharepoint-add-in-manifest.htm">VersionDefinition</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The minimum version of the feature or capability the SharePoint Add-in depends on; for example <span class="code">15.0.0.0</span>.</p></td>
<td align="left"><p>Values of the VersionDefinition type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type</p></td>
<td align="left"><p><a href="appprerequisitetypedefinition-simpletype-sharepoint-add-in-manifest.htm">AppPrerequisiteTypeDefinition</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The type of the add-in prerequisite.</p></td>
<td align="left"><p>Values of the AppPrerequisiteTypeDefinition type; either <span class="code">Feature</span> or <span class="code">Capability</span>. ( <span class="code">Autoprovisioning</span> is <em>not</em> a supported value at this time.)</p></td>
</tr>
</tbody>
</table>








