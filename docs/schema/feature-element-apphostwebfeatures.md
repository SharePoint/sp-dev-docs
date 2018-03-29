---


manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 2d490115-671e-8fa3-f90f-446d92b5bd71
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
<td align="left"># Feature element (AppHostWebFeatures)</td>
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

**Last modified:** September 16, 2015

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
<td align="left"><p>The string &quot;app&quot; appears as part, or all, of some element, attribute, and file names because SharePoint Add-ins were originally called &quot;apps for SharePoint&quot;. To ensure backward compatibility, the schemas have not been changed.</p></td>
</tr>
</tbody>
</table>


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Element type</span></p></td>
<td align="left"><p><a href="featuredefinition-complextype-apphostwebfeatures.md">FeatureDefinition</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p>http://schemas.microsoft.com/sharepoint/</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>apphostwebfeatures.xsd</p></td>
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
code] "Copy code")Copy code</span>
    <xs:element name="Feature" type="FeatureDefinition"></xs:element>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.
class="keyword">sequence</span>, **minOccurs**,
**maxOccurs**, and <span
class="keyword">choice</span>, see the definition section.

### Parent elements

None.

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
<td align="left"><p><a href="activationdependencies-element-featuredefinition-complextypeapphostwebfeatures.md">ActivationDependencies</a></p></td>
<td align="left"><p><a href="featureactivationdependencydefinitions-complextype-apphostwebfeatures.md">FeatureActivationDependencyDefinitions</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="elementmanifests-element-featuredefinition-complextypeapphostwebfeatures.md">ElementManifests</a></p></td>
<td align="left"><p><a href="elementmanifestreferences-complextype-apphostwebfeatures.md">ElementManifestReferences</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="properties-element-featuredefinition-complextypeapphostwebfeatures.md">Properties</a></p></td>
<td align="left"><p><a href="featurepropertydefinitions-complextype-apphostwebfeatures.md">FeaturePropertyDefinitions</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="upgradeactions-element-featuredefinition-complextypeapphostwebfeatures.md">UpgradeActions</a></p></td>
<td align="left"><p><a href="upgradeactionsdefinition-complextype-apphostwebfeatures.md">UpgradeActionsDefinition</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p>ActivateOnDefault</p></td>
<td align="left"><p>TRUEFALSE</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the TRUEFALSE type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>AlwaysForceInstall</p></td>
<td align="left"><p>TRUEFALSE</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the TRUEFALSE type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>AutoActivateInCentralAdmin</p></td>
<td align="left"><p>TRUEFALSE</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the TRUEFALSE type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Creator</p></td>
<td align="left"><p>LocalizableString</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the LocalizableString type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>DefaultResourceFile</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Description</p></td>
<td align="left"><p>LocalizableString</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the LocalizableString type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Hidden</p></td>
<td align="left"><p>TRUEFALSE</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the TRUEFALSE type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Id</p></td>
<td align="left"><p>UniqueIdentifier</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the UniqueIdentifier type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ImageUrl</p></td>
<td align="left"><p>RelativeFilePath</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the RelativeFilePath type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ImageUrlAltText</p></td>
<td align="left"><p>LocalizableString</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the LocalizableString type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ReceiverAssembly</p></td>
<td align="left"><p>AssemblyStrongName</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the AssemblyStrongName type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ReceiverClass</p></td>
<td align="left"><p>AssemblyClass</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the AssemblyClass type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>RequireResources</p></td>
<td align="left"><p>TRUEFALSE</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the TRUEFALSE type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Scope</p></td>
<td align="left"><p><a href="featurescope-simpletype-apphostwebfeatures.md">FeatureScope</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the FeatureScope type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SolutionId</p></td>
<td align="left"><p>UniqueIdentifier</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the UniqueIdentifier type.</p></td>
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
<tr class="even">
<td align="left"><p>Version</p></td>
<td align="left"><p><a href="featureversion-simpletype-apphostwebfeatures.md">FeatureVersion</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the FeatureVersion type.</p></td>
</tr>
</tbody>
</table>








