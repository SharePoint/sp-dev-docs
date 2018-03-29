---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1290b4ef-956f-4775-82cc-07f9b812c0f9
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
<td align="left"># Receivers Element (Event)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#exampleToggle">Example</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Contains the description of an event receiver for handling item events
in lists created through the specified list template.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Receivers
  ListTemplateId = &quot;Text&quot;
  ListTemplateOwner = &quot;Text&quot;
  ListUrl = string
  RootWebOnly = TRUE | FALSE
  Scope = Site | Web&gt;
&lt;/Receivers&gt;</code></pre></td>
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
<td align="left"><p>**ListTemplateId**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the index of the list template to which the event receiver applies. For a list of the default list template types, see <span sdata="cer" target="T:Microsoft.SharePoint.SPListTemplateType"><span class="nolink">SPListTemplateType</span>**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ListTemplateOwner**</p></td>
<td align="left"><p>Optional **Text**. Specifies the GUID of the list template owner if the list template is registered through Features, or the name of the site definition if the list template is registered by a site definition.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ListUrl**</p></td>
<td align="left"><p>Optional **string**. Specifies the URL of the list to which the event receiver applies.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RootWebOnly**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">True</span> if the event receiver applies only to the root Web; otherwise, <span class="keyword">False**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Scope**</p></td>
<td align="left"><p>Optional **enumeration</span>. The scope of the event receiver. This can be <span class="keyword">Site</span> or <span class="keyword">Web</span>. When the <span class="keyword">Scope</span> attribute is set to <span class="code">Site</span>, event receivers that are defined inside of a Feature that is scoped to the site collection are registered at the site collection level. When the <span class="keyword">Scope** attribute is set to Web, event receivers that are defined inside of a Feature that is scoped to a Web are registered on the Web.</p></td>
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
<td align="left"><p><a href="receiver-element-event.md">Receiver</a></p></td>
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
<td align="left"><p><a href="elements-element-event.md">Elements</a></p></td>
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


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For an example of how this element is used, see <span
sdata="link">[Event
Registrations](event-registrations.md)</span>.

A **Receivers** tag can imply a site-wide event
registration or an event registration for the root Web. The <span
class="keyword">Scope</span> attribute is used to define at what level
the event receivers are applied. If the <span
class="keyword">Receivers</span> tag has no <span
class="keyword">ListTemplateId</span> or <span
class="keyword">ListUrl</span> attribute, the event receiver is
registered at the same scope as the Feature. For example, a Feature that
is scoped to the Web results in an event receiver being added to an
event receiver collection that is scoped to the Web.








