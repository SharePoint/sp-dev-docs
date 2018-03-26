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
ms.assetid: bf026bdf-1be3-47d7-a32f-3ecbd27511dc
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
<td align="left"># File Element (Upgrade)</td>
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

Describes the relationship between an existing provisioned file to its
equivalent file for upgrading to Microsoft SharePoint Foundation 2010,
specifying how setup paths of files in the previous version map (relate)
to setup paths in the new version relative to their
%ProgramFiles%\\Common Files\\Microsoft Shared\\web server
extensions\\15\\TEMPLATE directories.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;File
  FromPath = &quot;String&quot;
  ToPath = &quot;String&quot;&gt;
&lt;/File&gt;</code></pre></td>
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
<td align="left"><p>**FromPath**</p></td>
<td align="left"><p>Required **String</span>. Specifies the setup path of the file to be upgraded relative to the %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE directory. Use the token <span class="keyword">{LocaleId}** to specify a locale identifier as part of the path. Example:</p>
<p><span class="code">FromPath=&quot;{LocaleId}\STS\Lists\announce\EditForm.aspx&quot;</span></p></td>
</tr>
<tr class="even">
<td align="left"><p>**ToPath**</p></td>
<td align="left"><p>Required **String**. Specifies the location in the setup directory of the file to which the file of the old version is mapped relative to the %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE directory. Example:</p>
<p><span class="code">ToPath= &quot;Features\AnnouncementsList\announce\EditForm.aspx&quot;</span></p></td>
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
<td align="left"><p>None</p></td>
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
<td align="left"><p><a href="files-element-upgrade.htm">Files</a></p></td>
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
<td align="left"><p>Minimum: 0</p>
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

File upgrades can be applied to any sort of uncustomized file, usually
.aspx pages, but also to entities such as document templates. In the
upgrade definition it is best to list all previously installed
uncustomized (also known as "ghosted") files, including ones that were
provisioned as part of a list, or files located only in the top-level
Web site, such as .dwp files for Web Parts.

SharePoint Foundation supports a **{LocaleId}**
token, which specifies the locale identifier to be included as part of
the path. This makes it possible to map locale-specific files.

For an example of how this element is used, see <span
sdata="link">[Upgrade Definition
schema](upgrade-definition-schema.md)</span>.








