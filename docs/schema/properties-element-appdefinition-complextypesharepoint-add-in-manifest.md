---


manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e1f48a2f-cd69-9457-7036-43e5bbfa10ac
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
<td align="left"># Properties element (AppDefinition complexType) (SharePoint Add-in Manifest)</td>
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

Contains information that is global to the add-in.

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


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Element type</span></p></td>
<td align="left"><p><a href="propertiesdefinition-complextype-sharepoint-add-in-manifest.htm">PropertiesDefinition</a></p></td>
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
    <xs:element name="Properties"  type="PropertiesDefinition"      minOccurs="1"      maxOccurs="1"     >


         </xs:element>     


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
<td align="left"><p><a href="app-element-sharepoint-add-in-manifest.htm">App</a></p></td>
<td align="left"><p><a href="appdefinition-complextype-sharepoint-add-in-manifest.htm">AppDefinition</a></p></td>
<td align="left"><p>The top level node of a SharePoint Add-in Manifest.</p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p><a href="installedeventendpoint-element-propertiesdefinition-complextypesharepoint-add-in.htm">InstalledEventEndpoint</a></p></td>
<td align="left"><p><a href="urlelementdefinition-complextype-sharepoint-add-in-manifest.htm">UrlElementDefinition</a></p></td>
<td align="left"><p>The Url of the installed event receiver endpoint.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="startpage-element-propertiesdefinition-complextypesharepoint-add-in-manifest.htm">StartPage</a></p></td>
<td align="left"><p><a href="urlelementdefinition-complextype-sharepoint-add-in-manifest.htm">UrlElementDefinition</a></p></td>
<td align="left"><p>The Url of the page visited when the SharePoint Add-in is launched.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="supportedlanguages-element-propertiesdefinition-complextypesharepoint-add-in-man.htm">SupportedLanguages</a></p></td>
<td align="left"><p><a href="supportedlanguagesdefinition-simpletype-sharepoint-add-in-manifest.htm">SupportedLanguagesDefinition</a></p></td>
<td align="left"><p>Do not use. This element is obsolete.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="title-element-propertiesdefinition-complextypesharepoint-add-in-manifest.htm">Title</a></p></td>
<td align="left"><p><a href="titledefinition-simpletype-sharepoint-add-in-manifest.htm">TitleDefinition</a></p></td>
<td align="left"><p>The friendly title of the SharePoint Add-in. This appears in the SharePoint and SharePoint Add-in store UI.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="uninstallingeventendpoint-element-propertiesdefinition-complextypesharepoint-add.htm">UninstallingEventEndpoint</a></p></td>
<td align="left"><p><a href="urlelementdefinition-complextype-sharepoint-add-in-manifest.htm">UrlElementDefinition</a></p></td>
<td align="left"><p>The Url of the uninstalling event receiver endpoint.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="upgradedeventendpoint-element-propertiesdefinition-complextypesharepoint-add-in.htm">UpgradedEventEndpoint</a></p></td>
<td align="left"><p><a href="urlelementdefinition-complextype-sharepoint-add-in-manifest.htm">UrlElementDefinition</a></p></td>
<td align="left"><p>The Url of the upgraded event receiver endpoint.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="webtemplate-element-propertiesdefinition-complextypesharepoint-add-in-manifest.htm">WebTemplate</a></p></td>
<td align="left"><p><a href="webtemplatedefinition-complextype-sharepoint-add-in-manifest.htm">WebTemplateDefinition</a></p></td>
<td align="left"><p>The web template to use when creating an add-in web.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="settingspage-element-propertiesdefinition-complextypesharepoint-add-in-manifest.htm">SettingsPage</a></p></td>
<td align="left"><p><a href="urlelementdefinition-complextype-sharepoint-add-in-manifest.htm">UrlElementDefinition</a></p></td>
<td align="left"><p>For future use. This element currently has no function.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="supportedlocales-element-propertiesdefinition-complextypesharepoint-add-in-manif.htm">SupportedLocales</a></p></td>
<td align="left"><p><a href="supportedlocalesdefinition-complextype-sharepoint-add-in-manifest.htm">SupportedLocalesDefinition</a></p></td>
<td align="left"><p>List of locales that this add-in supports.</p></td>
</tr>
</tbody>
</table>

### Attributes

None.

None.

None.








