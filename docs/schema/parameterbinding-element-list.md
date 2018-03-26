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
ms.assetid: 71f578c2-6343-4d8d-a251-739f8f53bf07
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
<td align="left"># ParameterBinding Element (List)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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
SharePoint Online | SharePoint Server 2013*

Specifies a stylesheet parameter binding to make a resource available to
the XSL that renders the view.

<span codelanguage="VisualBasic"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Visual Basic</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;ParameterBinding  Name = &quot;Text&quot;  Location = &quot;Text&quot; /&gt;</code></pre></td>
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
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies a name for the parameter. The XSL stylesheet defines a parameter of the same name -- <span class="code">&lt;xsl:param name=&quot;ParameterName&quot;/&gt;</span> -- and the resource becomes available anywhere in the stylesheet through an XPath expression -- <span class="code">&lt;xsl:value-of select=&quot;$ParameterName&quot; /&gt;**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Location**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the location of the resource. SharePoint Foundation uses a <span class="keyword">Resource</span> function to define the value of <span class="keyword">Location</span> in the format <span class="code">Location = &quot;Resource(ResourceFile, ResourceName)&quot;</span>, where <span class="parameter" sdata="paramReference">ResourceFile</span> specifies the base name of a resource file minus the file extension, and <span class="parameter" sdata="paramReference">ResourceName** specifies the name of the resource string.</p>
<p>In addition to specifying a localized resource in a .resx file, the **Location** attribute can be used to specify values indicated in the following table.</p>
<div class="tableSection">
<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Context</p></th>
<th align="left"><p>Format</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Query strings</p></td>
<td align="left"><p><span class="code">&lt;ParameterBinding Name=&quot;SelectedID&quot; Location=&quot;QueryString(SelectedID)&quot;/&gt;</span>Corresponding code in XSL: <span class="code">&lt;xsl:param name=&quot;SelectedID&quot;/&gt;</span></p></td>
</tr>
<tr class="even">
<td align="left"><p>Connection/Postback</p></td>
<td align="left"><p><span class="code">&lt;ParameterBinding Name=&quot;dvt_firstrow&quot; Location=&quot;Postback;Connection&quot;/&gt;</span></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Server variables</p></td>
<td align="left"><p><span class="code">(Location=&quot;Form(variableName)&quot;)</span></p></td>
</tr>
<tr class="even">
<td align="left"><p>Web Part Properties</p></td>
<td align="left"><p><span class="code">(Location=&quot;WPProperty(PropertyValue&quot;)</span></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Control IDs</p></td>
<td align="left"><p><span class="code">(Location=&quot;Control(ControlID)&quot;)</span></p></td>
</tr>
</tbody>
</table>
</div></td>
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
<td align="left"><p><a href="parameterbindings-element-list.htm">ParameterBindings</a></p></td>
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


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[XSLT Parameter
Bindings](http://msdn.microsoft.com/library/0e63af9c-c94b-4425-8b93-989dad1dd49d(Office.15).aspx)

[XSLT Global
Parameters](http://msdn.microsoft.com/library/13abde86-c820-42bd-863a-c9c8829255a6(Office.15).aspx)

[How to: Implement Resources in Custom List
Views](http://msdn.microsoft.com/library/f8a01a0b-0538-4c4a-b2af-30c3f7f1ff4b(Office.15).aspx)

[List
Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17(Office.15).aspx)








