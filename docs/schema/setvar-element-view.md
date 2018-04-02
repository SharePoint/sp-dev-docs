---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: e74bf955-f6af-4f60-bfe1-eb5e88f48f78
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
<td align="left"># SetVar Element (View)</td>
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

Allows variables to be set in the context of rendering the page—either
locally to the current level of XML or globally to the page.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><SetVar
  ID = "Text"
  Name = "Text"
  Scope = "Request"
  Value = "Text">
</SetVar></code></pre></td>
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
<td align="left"><p>**ID**</p></td>
<td align="left"><p>Optional **Text**. Provides an ID for the variable.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **Text**. Specifies a name for the variable.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Scope**</p></td>
<td align="left"><p>If set to **Request**, the variable is global.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Value**</p></td>
<td align="left"><p>Optional **Text**. Can be used to assign a value to the variable when this is an empty element.</p></td>
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


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The **SetVar** element has both a spanning and
a non-spanning form, so that <span class="code">\<SetVar
Name="MyVar"\>Announcements\</SetVar\></span> would be the same as <span
class="code">\<SetVar Name="MyVar" Value="Announcements/\></span>.

If **Scope="Request"** is specified in the
**SetVar** element, a variable assignment takes
effect anywhere in the current page. Otherwise, the assignment affects
only children of the **SetVar** element.

The **SetVar** element is often a child to a
[Method](method-element-view.md) element used in batch
processing of requests.

The **SetVar** element is frequently used to
change the display mode by setting <span
class="keyword">DisplayMode</span> to one of the following values.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Value</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**DISPLAY**</p></td>
<td align="left"><p>Used when rendering the **ViewBody** section of a view.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EDIT**</p></td>
<td align="left"><p>Used when rendering an edit item form.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DISPLAYHEAD**</p></td>
<td align="left"><p>Used when rendering the **ViewHeader** section of a view.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NEW**</p></td>
<td align="left"><p>Used when rendering a new item form.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PREVIEWDISPLAY**</p></td>
<td align="left"><p>Used when editing a display form with Microsoft FrontPage.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PREVIEWNEW**</p></td>
<td align="left"><p>Used when editing a new item form with FrontPage.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PREVIEWEDIT**</p></td>
<td align="left"><p>Used when editing an edit item form with FrontPage.</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example illustrates using the <span
class="keyword">SetVar</span> element to set global scope for a
variable. The second line returns the value set in the first line.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <SetVar Name="GlobalVar" Scope="Request">Value</SetVar>
    ...
    <GetVar Name="GlobalVar">

In the following example, the first
[GetVar](http://msdn.microsoft.com/library/abf483e3-c6e7-4d72-97c6-76300e1b483e(Office.15).aspx)
element returns "Value\_2", and the second <span
class="keyword">GetVar</span> element returns "Value\_1", because the
**SetVar** element that contains "Value\_2"
applies only to children of the "Sample" element. "Value\_2" goes out of
scope after the closing "Sample" tag.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <SetVar Name="myVar">Value_1</SetVar>
       <Sample>
          <SetVar Name="myVar">Value_2</SetVar>
          <GetVar Name="myVar"/>
       </Sample>
       <GetVar Name="myVar"/>

The following example evaluates whether a field is required and, if it
is required, creates the red asterisk (\*) that is displayed beside
required fields in New or Edit forms and sets the <span
class="keyword">HasRequired</span> variable to <span
class="keyword">TRUE</span>.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Switch>
       <Expr>
          <Property Select="Required"/>
       </Expr>
       <Case Value="TRUE">
          <HTML><![CDATA[<font color=red> *</font>]]></HTML>
          <SetVar Scope="Request" Name="HasRequired">TRUE</SetVar>
       </Case>
    </Switch>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[GetVar Element
(View)](getvar-element-view.md)</span>








