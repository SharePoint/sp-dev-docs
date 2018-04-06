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
ms.assetid: 45eaaecd-8576-4e04-abf7-8dd4d03fbe3f
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
<td align="left"># NavBarPage Element (Site - Module)</td>
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

Provides information about the file specified as the home page in a
module so that other pages can be linked to the page.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><NavBarPage
  ID = "Integer"
  Name = "Text"
  Position = "Text">
</NavBarPage></code></pre></td>
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
<td align="left"><p>Required **Integer**. Specifies the ID for the page.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **Text**. Specifies the text that appears in the navigation area of other pages that link to the page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Position**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the position of the UI element represented by the **NavBarPage** element with respect to the top navigational area on a page. Possible values include the following:</p>
<ul>
<li><p>**Start** — add the node at the start (left/top in English) of the top navigational area.</p></li>
<li><p>**End** — add the node to the end (right/bottom in English) of the top navigational area. Default.</p></li>
<li><p>**Number between 1001 and 2000</span> — add the node after (right/below in English) another **NavBarPage** element whose ID matches the specified value.</p></li>
</ul></td>
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
<td align="left"><p><a href="file-element.md">File</a></p></td>
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


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example uses the **NavBarPage**
element to specify information about the home page in a module.

## Definition
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Module Name="Default" Url="" Path="">
      <File Url="default.aspx" NavBarHome="True">
        <View List="$Resources:core,lists_Folder;/$Resources:core,announce_Folder;" BaseViewID="0" WebPartZoneID="Left" />
        <View List="$Resources:core,lists_Folder;/$Resources:core,calendar_Folder;" BaseViewID="0" RecurrenceRowset="TRUE" WebPartZoneID="Left" WebPartOrder="2" />
        <AllUsersWebPart WebPartZoneID="Right" WebPartOrder="1"><![CDATA[
          <WebPart xmlns="http://schemas.microsoft.com/WebPart/v2" xmlns:iwp="http://schemas.microsoft.com/WebPart/v2/Image">
            <Assembly>Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c</Assembly>
             <TypeName>Microsoft.SharePoint.WebPartPages.ImageWebPart</TypeName>
             <FrameType>None</FrameType>
             <Title>$Resources:wp_SiteImage;</Title>
             <iwp:ImageLink>/_layouts/images/homepage.gif</iwp:ImageLink>
           </WebPart>]]>
        </AllUsersWebPart>
        <View List="$Resources:core,lists_Folder;/$Resources:core,links_Folder;" BaseViewID="0" WebPartZoneID="Right" WebPartOrder="2" />
        <NavBarPage Name="$Resources:core,nav_Home;" ID="1002" Position="Start" />
        <NavBarPage Name="$Resources:core,nav_Home;" ID="0" Position="Start" />
      </File>
    </Module>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



[Module](module-element-site.md)








