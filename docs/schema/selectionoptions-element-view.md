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
ms.assetid: 97ec7231-680a-4bb5-931a-92175899b655
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
<td align="left"># SelectionOptions Element (View)</td>
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

***Applies to:** SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

Specifies options for a drop-down list.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;SelectionOptions
  BlankPattern = &quot;Text&quot;
  Len = &quot;Integer&quot;
  MoreText = &quot;Text&quot;&gt;
&lt;/SelectionOptions&gt;</code></pre></td>
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
<td align="left"><p>**BlankPattern**</p></td>
<td align="left"><p>Required **Text</span>. The <span class="keyword">BlankPattern** attribute is used to generate a localized text pattern for displaying text values for lookup fields that are blank (empty string). In the United States, this is localized as &quot;(Item ^1)&quot;. ^1 is replaced with the item ID of the item being referenced.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Len**</p></td>
<td align="left"><p>Required **Integer</span>. The <span class="keyword">Len</span> attribute causes the members of the drop-down list to be truncated to the specified number of Unicode characters if they exceed the value of <span class="parameter" sdata="paramReference">Len**. This prevents the drop-down menu from being excessively wide.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**MoreText**</p></td>
<td align="left"><p>Required **Text</span>. The <span class="keyword">MoreText** attribute specifies what is displayed in order to indicate that the string has been truncated (typically an ellipsis, &quot;...&quot;).</p></td>
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
<p>Maximum: 1</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Conditional rendering is based on the display mode. New items use the
default value of the field, while items in Edit mode use the current
value of the field to set the value of the HTML <span
class="keyword">Selected</span> attribute, with <span
class="keyword">Selected=True</span> added for the default or current
value of the item.

For **Lookup** field types, this element
produces the sequence <span class="code">\<OPTION
VALUE="ID"\></span><span class="placeholder">Title</span><span
class="code">\</OPTION\></span>.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example constructs a drop-down list box and uses the <span
class="keyword">SelectOptions</span> element to delineate the options.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <HTML><![CDATA[ <SELECT TITLE=" ]]></HTML>
    <Property Select="DisplayName" />
    <HTML><![CDATA[ " TABINDEX=1 NAME=" ]]></HTML>
    <FieldPrefix />
    <Property Select="Name" />
    <HTML><![CDATA[ "> ]]></HTML>
    <Switch>
       <Expr>
          <Property Select="Required" />
       </Expr>
       <Case Value="TRUE" />
       <Default>
          <HTML><![CDATA[ <OPTION Value=""> ]]></HTML>
          <HTML>(None)</HTML>
          <HTML><![CDATA[ </OPTION> ]]></HTML>
       </Default>
    </Switch>
    <SelectionOptions Len="100" MoreText="..." />
    <HTML><![CDATA[ </SELECT> ]]></HTML>








