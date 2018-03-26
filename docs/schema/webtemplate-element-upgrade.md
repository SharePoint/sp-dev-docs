---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Upgrade schema
api_type:
- schema
ms.assetid: 61f6a7db-1d3e-499c-88e0-9ddc0578693e
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
<td align="left"># WebTemplate Element (Upgrade)</td>
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

Contains the site template upgrade definition.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;WebTemplate 
  BeginFromSchemaVersion = &quot;Integer&quot;
  EndFromSchemaVersion = &quot;Integer&quot;
  FromProductVersion = &quot;Integer&quot;
  ID = &quot;Integer&quot;
  LocaleId = &quot;Integer&quot;
  RemoveSiteExternalSecurityProvider = &quot;true | &quot;false&quot;
  ToSchemaVersion = &quot;Integer&quot;&gt;
    ...
  &lt;Lists&gt;
    ...
  &lt;/Lists&gt;
  &lt;Files&gt;
    ...
  &lt;/Files&gt;
  &lt;AppliedWebFeatures&gt;
    ...
  &lt;/AppliedWebFeatures&gt;
&lt;/WebTemplate&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
<td align="left"><p>**BeginFromSchemaVersion**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the starting point of a schema version range to which this upgrade definition applies.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EndFromSchemaVersion**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the end of a schema version range to which this upgrade definition applies.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FromProductVersion**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the product version of the original site definition to which this upgrade definition applies.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ID**</p></td>
<td align="left"><p>Required **Integer</span>. Specifies the identifier (ID) of the site definition to be upgraded. This value corresponds to the <span class="keyword">ID** attribute of the <a href="template-element-site.htm">Template</a> element.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**LocaleId**</p></td>
<td align="left"><p>Optional **Integer</span>. Specifies the locales to which the site upgrade definition applies. Set to <span class="keyword">DOCS-ASTERISK</span> to imply that the definition applies to all site definition upgrades. Microsoft SharePoint Foundation implements only one upgrade definition per locale. If <span class="keyword">DOCS-ASTERISK** is specified and a locale-specific upgrade definition exists, SharePoint Foundation uses the locale-specific upgrade definition. If the locale-specific definition does not exist, SharePoint Foundation falls back to the * upgrade definition.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RemoveSiteExternalSecurityProvider**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">true</span> to exclude any external security provider from the upgrade; otherwise, <span class="keyword">false**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToSchemaVersion**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the product version to which the site definition is upgraded.</p></td>
</tr>
</tbody>
</table>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="appliedsitefeatures-element-upgrade.htm">AppliedSiteFeatures</a>, <a href="appliedwebfeatures-element-upgrade.htm">AppliedWebFeatures</a>, <a href="files-element-upgrade.htm">Files</a>, <a href="lists-element-upgrade.htm">Lists</a></p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="config-element-upgrade.htm">Config</a></p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 1</p>
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For an example of how this element is used, see <span
sdata="link">[Upgrade Definition
schema](upgrade-definition-schema.md)</span>.








