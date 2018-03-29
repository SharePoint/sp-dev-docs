---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Regional Settings schema
api_type:
- schema
ms.assetid: c98179df-d7b5-4baf-b8e5-179310220d2d
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
<td align="left"># TimeZone Element (Regional Settings)</td>
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

Defines a time zone for regional settings in TIMEZONE.XML
(%ProgramFiles%\\Common Files\\Microsoft Shared\\web server
extensions\\15\\CONFIG). or specifies a time zone in RGNLSTNG.XML
(%ProgramFiles%\\Common Files\\Microsoft Shared\\web server
extensions\\15\\TEMPLATE\\1033\\XML).

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;TimeZone
  Hidden = &quot;TRUE&quot; | &quot;FALSE&quot;
  HTMLEncode = &quot;TRUE&quot; | &quot;FALSE&quot;
  ID = &quot;Integer&quot;
    Name = &quot;Text&quot;&gt;
  &lt;StandardTime&gt;
  ...
    &lt;/StandardTime&gt;
  &lt;DaylightTime&gt;
  ...
    &lt;/DaylightTime&gt;
  &lt;History&gt;
  ...
    &lt;/History&gt;
&lt;/TimeZone&gt;</code></pre></td>
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
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>Optional **Boolean**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**HTMLEncode**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ID**</p></td>
<td align="left"><p>Required **Integer**. Specifies the ID for the time zone.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **Text**. Specifies the name of the time zone.</p></td>
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
<td align="left"><p><a href="bias-element-regional-settings.md">Bias</a>, <a href="daylighttime-element-regional-settings.md">DaylightTime</a>, <a href="history-element-regional-settings.md">History</a>, <a href="standardtime-element-regional-settings.md">StandardTime</a></p></td>
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
<td align="left"><p><a href="timezones-element-regional-settings.md">TimeZones</a></p></td>
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

Outside the context of RGNLSTNG.XML or TIMEZONE.XML, use an empty <span
class="keyword">TimeZone</span> element to return the current time zone.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example from the file TIMEZONE.XML defines a time zone.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <TimeZone ID="13" Name="(GMT-08:00) Pacific Time (US and Canada); 
          Tijuana" Hidden="FALSE">
       <Bias>480</Bias>
       <StandardTime>
          <Bias>0</Bias>
          <Date>
             <Month>10</Month>
             <Day>5</Day>
             <Hour>2</Hour>
          </Date>
       </StandardTime>
       <DaylightTime>
          <Bias>-60</Bias>
          <Date>
             <Month>4</Month>
             <Day>1</Day>
             <Hour>2</Hour>
          </Date>
       </DaylightTime>
    </TimeZone>








