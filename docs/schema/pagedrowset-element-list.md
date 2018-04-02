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
ms.assetid: 92b3b08a-c193-4a68-bfe0-706a349d448b
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
<td align="left"># PagedRowset Element (List)</td>
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

Renders Collaborative Application Markup Language (CAML) within a view,
executing if more items are returned in the view than the specified row
limit for the view.

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
<td align="left"><pre><code><PagedRowset>
</PagedRowset></code></pre></td>
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

This element provides a section of the view that is rendered if there is
more than one page of data. Within a <span
class="keyword">PagedRowset</span> element, the following variables can
be implemented:

-   <span class="code">\<GetVar Name="PageFirstRow"/\></span> returns
    the item number of the first item on the current page.

-   <span class="code">\<GetVar Name="PageLastRow"/\></span> returns the
    item number of the last item on the current page.

-   <span class="code">\<GetVar Name="NextPageData"/\></span> returns
    the information that must be passed along in the URL so that the
    next page of data to be displayed can be determined.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example uses the **PagedRowset**
element to display the string "(Items 1 to <span
class="placeholder">N</span>)" where <span class="placeholder">N</span>
represents the current setting for the
[RowLimit](rowlimit-element-list.md) element. The
example also displays "Next" and an icon representing "Next," which are
both hyperlinks to the current view page with information necessary to
display the next 100 items.

<span codelanguage="other"></span>
 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <PagedRowset>
       <HTML><![CDATA[ <TABLE width="100%" border=0><TR><TD align=right 
          Class="ms-vb"> ]]></HTML>
       <HTML>(Items</HTML>
       <HTML><![CDATA[ &nbsp; ]]></HTML>
       <GetVar Name="PageFirstRow" HTMLEncode="TRUE" />
       <HTML><![CDATA[ &nbsp; ]]></HTML>
       <HTML>to</HTML>
       <HTML><![CDATA[ &nbsp; ]]></HTML>
       <GetVar Name="PageLastRow" HTMLEncode="TRUE" />
       <HTML>)</HTML>
       <HTML><![CDATA[ &nbsp;<A HREF="javascript:" 
          OnClick='javascript:SubmitFormPost(" ]]></HTML>
       <ScriptQuote NotAddingQuote="TRUE">
          <PageUrl />
          <HTML>?</HTML>
          <GetVar Name="NextPageData" />
       </ScriptQuote>
       <HTML><![CDATA[ ");javascript:return false;'> ]]></HTML>
       <HTML>Next</HTML>
       <HTML><![CDATA[ </A> <A HREF="javascript:" 
          OnClick='javascript:SubmitFormPost(" ]]></HTML>
       <ScriptQuote NotAddingQuote="TRUE">
          <PageUrl />
          <HTML>?</HTML>
          <GetVar Name="NextPageData" />
       </ScriptQuote>
       <HTML><![CDATA[ ");javascript:return false;'> ]]></HTML>
       <HTML><![CDATA[ <img src=" ]]></HTML>
       <ImagesPath />
       <HTML><![CDATA[ /next.gif" border=0></A>&nbsp;
          </TD></TR></TABLE> ]]></HTML>
    </PagedRowset>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[List
Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17(Office.15).aspx)

[XMLDefinition and CAML View
Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922(Office.15).aspx)








