---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d6ce2770-f2a8-472a-aa67-90da4c8ac238
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
<td align="left"># LocaleInfo Element</td>
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

Transfers server locale information to the client in order to display
and edit dates and numbers properly.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;LocaleInfo
  LCTYPE=&quot;Integer&quot;&gt;
&lt;/LocaleInfo&gt;</code></pre></td>
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
<td align="left"><p>**LCTYPE**</p></td>
<td align="left"><p>Required **Integer**. Specifies an ID from the Win32 Application Programming Interface (API). Can be one of the following values.</p>
<ul>
<li><p>**14**   Character(s) used as the decimal separator. The maximum number of characters allowed for this string is four.</p></li>
<li><p>**15**   Character(s) used to separate groups of digits to the left of the decimal. The maximum number of characters allowed for this string is four.</p></li>
<li><p>**16**   Sizes for each group of digits to the left of the decimal. An explicit size is needed for each group, and sizes are separated by semicolons. If the last value is zero, the preceding value is repeated. For example, to group thousands, specify 3;0. Indic locales group the first 1,000 and then group by hundreds — for example, 12,34,56,789, which is represented by 3;2;0.</p></li>
<li><p>**29**   Character(s) for the date separator. The maximum number of characters allowed for this string is four.</p></li>
<li><p>**30**   Character(s) for the time separator. The maximum number of characters allowed for this string is four.</p></li>
<li><p>**33**   Short date format-ordering specifier. The maximum number of characters allowed for this string is two. The specifier can be one of the following values: 0 (Month-Day-Year), 1 (Day-Month-Year), or 2 (Year-Month-Day).</p></li>
<li><p>**35**   Time format specifier. The maximum number of characters allowed for this string is two. The specifier can be either 0 (A.M./P.M. 12-hour format) or 1 (24-hour format).</p></li>
<li><p>**40**   String for the A.M. designator. The maximum number of characters allowed for this string is nine.</p></li>
<li><p>**41**   String for the P.M. designator. The maximum number of characters allowed for this string is nine.</p></li>
<li><p>**81**   String value for the negative sign. The maximum number of characters allowed for this string is five.</p></li>
<li><p>**4101**   Specifies whether the time marker string (A.M. or P.M.) precedes or follows the time string. Possible values include 0 (use as suffix) and 1 (use as prefix).</p></li>
<li><p>**4108**   Specifies the first day in a week. The maximum number of characters allowed for this string is two. Since this denotes which of the seven days begins a week, the only valid values are from 0 to 6 (0 equals Monday).</p></li>
<li><p>**4112**   Negative number mode, that is, the format for a negative number. The maximum number of characters allowed for this string is two. The mode can be one of the following values: 0:(1.1), 1:-1.1, 2:- 1.1, 3:1.1-, or 4:1.1-.</p></li>
</ul></td>
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
<td align="left"><p>Numerous</p></td>
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


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example constructs a SCRIPT block in which the date
separator is set according to the client's locale.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <HTML><![CDATA[ <SCRIPT>  ]]></HTML>
    <HTML><![CDATA[  frm.dopt.chDateSep =   ]]></HTML>
    <ScriptQuote>
       <LocaleInfo LCTYPE="29" />
    </ScriptQuote>
    <HTML><![CDATA[ ;</SCRIPT>  ]]></HTML>








