---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- List schema
api_type:
- schema
ms.assetid: a1007cbe-1c8d-4b2f-9ef7-9e302d15d5b0
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
<td align="left"># ViewHeader Element (List)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#exampleToggle">Example</a>  <a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Defines how the headers, or prefixes, of view fields are rendered.

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
<td align="left"><p>Most standard Microsoft SharePoint Foundation 2010 list views ignore this element. For more information, see <a href="http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922(Office.15).aspx">XMLDefinition and CAML View Schema</a>.</p></td>
</tr>
</tbody>
</table>

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><ViewHeader
  ExpandXML = "TRUE" | "FALSE">
</ViewHeader></code></pre></td>
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
<td align="left"><p>**ExpandXML**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to re-pass the rendered content through the Collaborative Application Markup Language (CAML) interpreter, which allows CAML to render CAML.</p></td>
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
<td align="left"><p>Numerous</p></td>
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
<td align="left"><p><a href="view-element-list.md">View</a>, <a href="viewstyle-element-list.md">ViewStyle</a></p></td>
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
<p>Maximum: 1</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This element often contains an HTML fragment with <span
class="keyword">ExpandXML</span> set to <span
class="keyword">TRUE</span> to render embedded
[Field](field-element-list.md) elements.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example defines the field headers for a view. Each field
header in the view is rendered according to the class <span
class="keyword">ms-vh</span>, which is defined in Core.css (<span
class="code">\\\\Program Files\\Common Files\\Microsoft Shared\\web
server extensions\\12\\TEMPLATE\\LAYOUTS\\LCID\\STYLES</span>).

.

## Definition
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <ViewHeader>
      <HTML>
        <![CDATA[ <TABLE ID="onetidDoclibViewTbl0 ]]> 
      </HTML>
      <HTML>
        <![CDATA[ " width="100%" border=0 cellspacing=0 cellpadding=1 
            rules=rows><TR VALIGN=TOP><FORM> ]]> 
      </HTML>
      <Fields>
        <HTML>
          <![CDATA[ <TH class="ms-vh"> ]]> 
        </HTML>
        <Field /> 
        <HTML>
          <![CDATA[ </TH> ]]> 
        </HTML>
      </Fields>
      <HTML>
        <![CDATA[ </FORM></TR> ]]> 
      </HTML>
    </ViewHeader>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[List
Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17(Office.15).aspx)

[XMLDefinition and CAML View
Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922(Office.15).aspx)

[ViewBidiHeader Element
(List)](viewbidiheader-element-list.md)</span>

[ViewBody Element
(List)](viewbody-element-list.md)</span>

[ViewFooter Element
(List)](viewfooter-element-list.md)</span>








