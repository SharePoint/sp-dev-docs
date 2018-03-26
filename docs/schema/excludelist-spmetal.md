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
ms.assetid: 4d9e163b-c64b-4ea6-b3c2-c48406c4b197
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
<td align="left"># ExcludeList (SPMetal)</td>
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
SharePoint Online | SharePoint Server 2013*

Specifies that a list should be excluded from code generation.

<span sdata="link">[Web
(SPMetal)](web-spmetal.htm)</span>  
  <span sdata="link">[ExcludeList
(SPMetal)](excludelist-spmetal.htm)</span>  
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
<td align="left"><pre><code>&lt;ExcludeList Name=&quot;Calendar&quot; /&gt;</code></pre></td>
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
<td align="left"><p>Name</p></td>
<td align="left"><p>The name of the list that is excluded.</p></td>
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
<td align="left"><p><span sdata="link"><a href="web-spmetal.htm">Web (SPMetal)</a></span></p></td>
<td align="left"><p>Specifies the name and access level (public or internal) of the class (derived from <span sdata="cer" target="T:Microsoft.SharePoint.Linq.DataContext"><span class="nolink">DataContext</span></span>) that SPMetal generates.</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

A Web element cannot have both a List element and an ExcludeList element
that name the same list.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following is an example of an ExcludeList element in use.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <?xml version="1.0" encoding="utf-8"?>
    <Web AccessModifier="Internal" xmlns="http://schemas.microsoft.com/SharePoint/2009/spmetal">
      <ContentType Name="Contact" Class="Contact">
        <Column Name="ContId" Member="ContactId" />
        <Column Name="ContactName" Member="ContactName1" />
        <Column Name="Category" Member="Cat" Type="String"/>
        <ExcludeColumn Name="HomeTelephone" />
      </ContentType>
      <ExcludeContentType Name="Order"/>
      <List Name="Team Members">
        <ContentType Name="Item" Class="TeamMember" />
      </List>
     <ExcludeList Name="Calendar" />
    </Web>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[SPMetal Default Code Generation
Rules](http://msdn.microsoft.com/library/873ac65e-425e-40f3-9ef6-753d3cda1436(Office.15).aspx)

[Overriding SPMetal Defaults by Using a Parameters XML
File](http://msdn.microsoft.com/library/209359b2-bd46-47b6-837d-3c0c2005cb19(Office.15).aspx)








