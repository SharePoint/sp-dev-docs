---


manager: arnek
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 16b5dcb6-d4cb-5b74-28d6-a58732b7d2b6
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
<td align="left"># LocStringId simpleType (SPS15XSDSearchSet6)</td>
</tr>
<tr class="odd">
<td align="left"><span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

**Applies to**: SharePoint Server 2013


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Base type</span></p></td>
<td align="left"><p>xs:string</p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p>http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>schema_Microsoft.Office.Server.Search.xsd</p></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <xs:simpleType name="LocStringId">
        <xs:restriction base="xs:string">
            <xs:enumeration value="Type_Discussion" />
            <xs:enumeration value="Type_Webpage" />
            <xs:enumeration value="Type_ListItem" />
            <xs:enumeration value="Type_Survey" />
            <xs:enumeration value="Type_Publisher" />
            <xs:enumeration value="Type_Excel" />
            <xs:enumeration value="Type_Blog" />
            <xs:enumeration value="Type_TeamSite" />
            <xs:enumeration value="Type_Project" />
            <xs:enumeration value="Type_Text" />
            <xs:enumeration value="Type_List" />
            <xs:enumeration value="Type_MicroBlog" />
            <xs:enumeration value="Type_Email" />
            <xs:enumeration value="Type_Wiki" />
            <xs:enumeration value="Type_PictureLibraryListItem" />
            <xs:enumeration value="Type_SharePointSite" />
            <xs:enumeration value="Type_Access" />
            <xs:enumeration value="Type_Folder" />
            <xs:enumeration value="Type_XML" />
            <xs:enumeration value="Type_DocumentLibrary" />
            <xs:enumeration value="Type_Visio" />
            <xs:enumeration value="Type_SharePointVideo" />
            <xs:enumeration value="Type_PDF" />
            <xs:enumeration value="Type_Person" />
            <xs:enumeration value="Type_ZIP" />
            <xs:enumeration value="Type_Word" />
            <xs:enumeration value="Type_PictureLibrary" />
            <xs:enumeration value="Type_Image" />
            <xs:enumeration value="Type_Community" />
            <xs:enumeration value="Type_DiscussionBoard" />
            <xs:enumeration value="Type_OneNote" />
            <xs:enumeration value="Type_Reply" />
            <xs:enumeration value="Type_PowerPoint" />
            <xs:enumeration value="Type_VideoFile" />
            <xs:enumeration value="Type_Task" />
        </xs:restriction>
    </xs:simpleType>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
<td align="left"><p>Type_Discussion</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Type_Webpage</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type_ListItem</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Type_Survey</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type_Publisher</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Type_Excel</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type_Blog</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Type_TeamSite</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type_Project</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Type_Text</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type_List</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Type_MicroBlog</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type_Email</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Type_Wiki</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type_PictureLibraryListItem</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Type_SharePointSite</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type_Access</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Type_Folder</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type_XML</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Type_DocumentLibrary</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type_Visio</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Type_SharePointVideo</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type_PDF</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Type_Person</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type_ZIP</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Type_Word</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type_PictureLibrary</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Type_Image</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type_Community</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Type_DiscussionBoard</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type_OneNote</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Type_Reply</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type_PowerPoint</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Type_VideoFile</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type_Task</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>








