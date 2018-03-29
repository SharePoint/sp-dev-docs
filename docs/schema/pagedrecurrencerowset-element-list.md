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
ms.assetid: de4d0dab-c427-4536-9c5d-6d3d1da8c1e9
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
<td align="left"># PagedRecurrenceRowset Element (List)</td>
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

Contains the definition of the page to display for a recurring item in
an events list when the number of items in the recurrence surpasses the
limit set by the [RowLimit](rowlimit-element-list.md)
element.

Most standard Microsoft SharePoint Foundation 2010 list views ignore
this element. For more information, see [XMLDefinition and CAML View
Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922(Office.15).aspx).

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;PagedRecurrenceRowset&gt;
&lt;/PagedRecurrenceRowset&gt;</code></pre></td>
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
<td align="left"><p>None</p></td>
<td align="left"><p>N/A</p></td>
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


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example from the
[Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56(Office.15).aspx)
file for announcements lists defines how to display items when the
number of items exceeds the value specified by the
[RowLimit](rowlimit-element-list.md) element.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <PagedRecurrenceRowset>
       <HTML><![CDATA[ <TABLE width="100%" border=0>
          <TR><TD  nowrap Class="ms-vb"> ]]></HTML>
       <Switch>
          <Expr>
             <GetVar Name="PrevPageData" />
          </Expr>
          <Case Value="" />
          <Default>
             <HTML><![CDATA[&nbsp;<A id=onetidPrev HREF=
                    "javascript:" OnClick='javascript:SubmitFormPost
                       (" ]]></HTML>
             <ScriptQuote NotAddingQuote="TRUE">
                <PageUrl />
                <HTML>?</HTML>
                <GetVar Name="PrevPageData" />
             </ScriptQuote>
             <HTML><![CDATA[ ");javascript:return false;'>
                <img src="/_layouts/images/prev.gif" border=0 alt=" ]]>
                   <![CDATA[ Previous ]]>
                   <![CDATA[ "></A><A HREF="javascript:" 
                      OnClick='javascript:SubmitFormPost("]]></HTML>
             <ScriptQuote NotAddingQuote="TRUE">
                <PageUrl />
                <HTML>?</HTML>
                <GetVar Name="PrevPageData" />
             </ScriptQuote>
             <HTML><![CDATA[ ");javascript:return false;'> ]]></HTML>
             <HTML>Previous</HTML>
             <HTML><![CDATA[ </A> ]]></HTML>
          </Default>
       </Switch>
       <HTML><![CDATA[ </TD><TD align=right nowrap 
          Class="ms-vb"> ]]></HTML>
       <Switch>
          <Expr>
             <GetVar Name="NextPageData" />
          </Expr>
          <Case Value="" />
          <Default>
             <HTML><![CDATA[<A HREF="javascript:" 
                OnClick='javascript:SubmitFormPost(" ]]></HTML>
             <ScriptQuote NotAddingQuote="TRUE">
                <PageUrl />
                <HTML>?</HTML>
                <GetVar Name="NextPageData" />
             </ScriptQuote>
             <HTML><![CDATA[ ");javascript:return false;'> ]]></HTML>
             <HTML>Next</HTML>
             <HTML><![CDATA[ </A><A id=onetidNext HREF="javascript:" 
                OnClick='javascript:SubmitFormPost("]]></HTML>
             <ScriptQuote NotAddingQuote="TRUE">
                <PageUrl />
                <HTML>?</HTML>
                <GetVar Name="NextPageData" />
             </ScriptQuote>
             <HTML><![CDATA[ ");javascript:return false;'>
                   <img src="/_layouts/images/next.gif" border=0 alt=" ]]>
                <![CDATA[ Next ]]>
                <![CDATA[ "></A>&nbsp; ]]></HTML>
          </Default>
       </Switch>
       <HTML><![CDATA[ </TD></TR></TABLE> ]]></HTML>
    </PagedRecurrenceRowset>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[List
Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17(Office.15).aspx)

[XMLDefinition and CAML View
Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922(Office.15).aspx)








