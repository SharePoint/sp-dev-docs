---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- SPMetal Parameters XML
api_type:
- schema
ms.assetid: 4e931e29-6b4a-4926-867c-4d059b4dad44
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
<td align="left"># Column (SPMetal)</td>
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

Specifies that a column (field) is included in code generation.

[Web
(SPMetal)](web-spmetal.md)</span>  
  [ContentType
(SPMetal)](contenttype-spmetal.md)</span>  
    [Column
(SPMetal)](column-spmetal.md)</span>  
<span codelanguage="xmlLang"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">XML</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Column Name=&quot;Category&quot; Member=&quot;Cat&quot; Type=&quot;String&quot;/&gt;</code></pre></td>
</tr>
</tbody>
</table>

**Complex**


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following sections describe attributes, child elements, and parent
elements.

#### Attributes

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
<td align="left"><p>Name (required)</p></td>
<td align="left"><p>The <em>internal</em>Microsoft SharePoint Foundation name of the column (field).</p></td>
</tr>
<tr class="even">
<td align="left"><p>Member (optional)</p></td>
<td align="left"><p>The name SPMetal gives to the property that it generates to represent the column.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type (optional)</p></td>
<td align="left"><p>Used only for Choice and MultiChoice columns that do not allow 'Fill-in' choices. If present and set to &quot;String&quot;, forces SPMetal to generate a class of <span sdata="cer" target="T:System.String"><a href="http://msdn2.microsoft.com/EN-US/library/s1wwdcbf">String</a></span> constants to represent the possible choices rather than an enum class. For more information about how LINQ to SharePoint maps Choice and MultiChoice fields to .NET 3.5 data types, see <a href="http://msdn.microsoft.com/library/6a1dff92-d3cf-46ec-9e51-372e5b9ff7c4(Office.15).aspx">Type Mapping: From LINQ to SharePoint Provider to .NET</a>.</p></td>
</tr>
</tbody>
</table>

#### Possible Values of Type Attribute

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
<td align="left"><p>String</p></td>
<td align="left"><p>Tells SPMetal to generate a class of <span sdata="cer" target="T:System.String"><a href="http://msdn2.microsoft.com/EN-US/library/s1wwdcbf">String</a></span> constants to represent the possible choices rather than an enum class.</p></td>
</tr>
</tbody>
</table>

#### Child elements

None.

#### Parent elements

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="contenttype-spmetal.md">ContentType (SPMetal)</a></span></p></td>
<td align="left"><p>Specifies that a content type should be included in code generation and modifies which columns in the content type are included in code generation.</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

A ContentType element cannot have both a Column element and an
ExcludeColumn element that name the same column.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following shows some Column elements in use. Each of them ensures
that the column it names is included in code generation even if it is a
hidden column. The Member attribute in each case gives the property that
represents the column a name that differs from the internal SharePoint
Foundation column name. One Column element represents the Choice column
"Category". It uses the Type parameter to force SPMetal to generate a
set of <span sdata="cer"
target="T:System.String">[String](http://msdn2.microsoft.com/EN-US/library/s1wwdcbf)</span>
constants to represent the possible choices rather than an enum.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <?xml version="1.0" encoding="utf-8"?>
    <Web AccessModifier="Internal" xmlns="http://schemas.microsoft.com/SharePoint/2009/spmetal">
      <ContentType Name="Contact" Class="Contact">
        <Column Name="ContId" Member="ContactId" />
        <Column Name="ContactName" Member="ContactName1" />
        <Column Name="Category" Member="Cat" Type="String"/>
        <ExcludeColumn Name="HomeTelephone" />
      </ContentType>
      <ExcludeContentType Name="Order"/>
      <List Name="Team Members" Type="TeamMember">
        <ContentType Name="Item" Class="TeamMember" />
      </List>
    </Web>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[SPMetal Default Code Generation
Rules](http://msdn.microsoft.com/library/873ac65e-425e-40f3-9ef6-753d3cda1436(Office.15).aspx)

[Overriding SPMetal Defaults by Using a Parameters XML
File](http://msdn.microsoft.com/library/209359b2-bd46-47b6-837d-3c0c2005cb19(Office.15).aspx)

[Type Mapping: From LINQ to SharePoint Provider to
.NET](http://msdn.microsoft.com/library/6a1dff92-d3cf-46ec-9e51-372e5b9ff7c4(Office.15).aspx)








