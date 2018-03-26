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
ms.assetid: 6a970855-360e-4e20-b793-34078b95f005
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
<td align="left"># ViewStyle Element (List)</td>
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

***Applies to:** SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

Contains the definition of a view style for a list.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;ViewStyle
  BaseType = &quot;Integer&quot; | &quot;Text&quot;
  Description = &quot;Text&quot;
  DisplayName = &quot;Text&quot;
  ID = &quot;Counter&quot;
  Preview = &quot;Text&quot;
  Type = &quot;Integer&quot;&gt;
&lt;/ViewStyle&gt;</code></pre></td>
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
<td align="left"><p>**BaseType**</p></td>
<td align="left"><p>Optional. Specifies the base type of the list. The **BaseType</span> attribute can be set to <span class="keyword">Integer</span>, which stores values as integers, or to <span class="keyword">Text** (default), which stores values as text.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **Text**. Contains a description for the view style.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>Required **Text**. Specifies the display name of the view style.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ID**</p></td>
<td align="left"><p>Required **Counter**. Specifies the ID that uniquely identifies the view style.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Preview**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the site-relative path to a preview image for the view style. For example, <span class="code">_layouts/images/prvpicl.gif**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the list definition type.</p></td>
</tr>
</tbody>
</table>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="groupbyfooter-element-list.htm">GroupByFooter</a>, <a href="groupbyheader-element-list.htm">GroupByHeader</a>, <a href="pagedclientcallbackrowset-element-list.htm">PagedClientCallbackRowset</a>, <a href="pagedrecurrencerowset-element-list.htm">PagedRecurrenceRowset</a>, <a href="pagedrowset-element-list.htm">PagedRowset</a>, <a href="script-element.htm">Script</a><a href="viewbidiheader-element-list.htm">ViewBidiHeader</a>, <a href="viewbody-element-list.htm">ViewBody</a>, <a href="viewempty-element-list.htm">ViewEmpty</a>, <a href="viewfields-element-list.htm">ViewFields</a>, <a href="viewfooter-element-list.htm">ViewFooter</a>, <a href="viewheader-element-list.htm">ViewHeader</a></p></td>
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
<td align="left"><p><span sdata="link"><a href="view-element-list.htm">View Element (List)</a></span>, <a href="viewstyles-element.htm">ViewStyles</a></p></td>
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
<p>Maximum: 1 (Unbounded within <a href="viewstyles-element.htm">ViewStyles</a>)</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example outlines the sections contained within the Boxed
view style of a ViewStyles.xml file.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <ViewStyle ID="13" DisplayName="Boxed" BaseType="0">
       <ViewFields />
       <GroupByHeader>
       ...
       </GroupByHeader>
       <GroupByFooter>
       ...
       </GroupByFooter>
       <ViewHeader ExpandXML="TRUE">
       ...
       </ViewHeader>
       <ViewBidiHeader ExpandXML="TRUE">
       ...
       </ViewBidiHeader>
       <ViewBody ExpandXML="TRUE">
       ...
       </ViewBody>
       <ViewFooter ExpandXML="TRUE">
       ...
       </ViewFooter>
       <PagedRowset>
       ...
       </PagedRowset>
       <PagedRecurrenceRowset>
       ...
       </PagedRecurrenceRowset>
       <RowLimit Paged="TRUE">100</RowLimit>
       <ViewEmpty>
       ...
       </ViewEmpty>
       ...
    </ViewStyle>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[List
Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17(Office.15).aspx)








