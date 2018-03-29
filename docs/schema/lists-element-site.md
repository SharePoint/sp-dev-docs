---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Site schema
api_type:
- schema
ms.assetid: 74e6167c-6f19-4296-8db4-fd142da3f43a
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
<td align="left"># Lists Element (Site)</td>
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

Contains the collection of lists for a configuration.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Lists&gt;
&lt;/Lists&gt;</code></pre></td>
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
<td align="left"><p><a href="list-element-site.md">List</a></p></td>
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
<td align="left"><p><a href="configuration-element-site.md">Configuration</a></p></td>
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

The following example shows the **Lists**
section of the **DWS** configuration in the
[Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx)
file of the standard SharePoint Foundation site definition (<span
class="keyword">STS</span>).

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Lists>
      <List FeatureId="00BFEA71-E717-4E80-AA17-D0C71B360101" Type="101" Title="$Resources:core,shareddocuments_Title;" Url="$Resources:core,shareddocuments_Folder;" /> 
      <List FeatureId="00BFEA71-6A49-43FA-B535-D15C05500108" Type="108" Title="$Resources:core,discussions_Title;" Url="$Resources:core,lists_Folder;/$Resources:core,discussions_Folder;" QuickLaunchUrl="$Resources:core,lists_Folder;/$Resources:core,discussions_Folder;" /> 
      <List FeatureId="00BFEA71-D1CE-42de-9C63-A44004CE0104" Type="104" Title="$Resources:core,announceList;" Url="$Resources:core,lists_Folder;/$Resources:core,announce_Folder;">
        <Data>
          <Rows>
            <Row>
              <Field Name="Title">$Resources:onetid11;</Field> 
              <Field Name="Body">$Resources:onetid12;</Field> 
              <Field Name="Expires"><ows:TodayISO/></Field> 
            </Row>
          </Rows>
        </Data>
      </List>
      <List FeatureId="00BFEA71-2062-426C-90BF-714C59600103" Type="103" Title="$Resources:core,linksList;" Url="$Resources:core,lists_Folder;/$Resources:core,links_Folder;" /> 
      <List FeatureId="00BFEA71-EC85-4903-972D-EBE475780106" Type="106" Title="$Resources:core,calendarList;" Url="$Resources:core,lists_Folder;/$Resources:core,calendar_Folder;" QuickLaunchUrl="$Resources:core,lists_Folder;/$Resources:core,calendar_Folder;/Calendar.aspx" /> 
      <List FeatureId="00BFEA71-A83E-497E-9BA0-7A5C597D0107" Type="107" Title="$Resources:core,taskList;" Url="$Resources:core,lists_Folder;/$Resources:core,tasks_Folder;" /> 
    </Lists>








