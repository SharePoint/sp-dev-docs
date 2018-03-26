---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- schemas [sharepoint 2010], xml
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f2332dea-1113-424e-b245-9785c09ed3cc
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
<td align="left"># Major CAML Files</td>
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
SharePoint Online | SharePoint Server 2013

Many critical files in Microsoft SharePoint Foundation use <span
sdata="link">[Collaborative Application Markup Language (CAML)
schemas](collaborative-application-markup-language-caml-schemas.htm)</span> to define how
data is displayed and how HTML is rendered.


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following table describes the major schema files that use <span
sdata="link">[Collaborative Application Markup Language (CAML)
schemas](collaborative-application-markup-language-caml-schemas.htm)</span> for data
definition or HTML rendering, and specifies their locations under
%ProgramFiles%\\Common Files\\Microsoft Shared\\web server
extensions\\15\\.

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="../icons/alert_caution.gif" title="Caution note" alt="Caution note" /><strong>Caution</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>With the exception of <span class="code">DocIcon.xml</span>, Microsoft does not support modifying any of the built-in files that are installed with SharePoint Foundation. In most cases, you can supplement or override the effects of these files with files of your own. For details about modifying the effect of any specific file, see the SDK's documentation of the extensibility area to which the file belongs.</p></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>File name</p></th>
<th align="left"><p>Location</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>DocIcon.xml</p></td>
<td align="left"><p>\TEMPLATE\XML</p></td>
<td align="left"><p>Specifies the icons that represent specific types of documents in document libraries. For more information, see <a href="http://msdn.microsoft.com/library/ef6acad0-0a1a-457c-bc9b-ff1e368e59fb(Office.15).aspx">DocIcon.xml</a>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>WebTemp.xml files</p></td>
<td align="left"><p>\TEMPLATE\LCID\XML folder, where LCID is the numeric ID of the language/culture</p></td>
<td align="left"><p>Itemizes the site definitions and their child configurations. Also, determines whether and how the configurations are available for selection by users in the SharePoint Foundation UI. For more information, see <a href="http://msdn.microsoft.com/library/199bbb65-d12f-475d-b157-31a1bffe84c8(Office.15).aspx">WebTemp.xml</a>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Onet.xml</p></td>
<td align="left"><p>One in \TEMPLATE\GLOBAL\XML. Others in subfolders of \TEMPLATE\SiteTemplates.</p></td>
<td align="left"><p>Specifies the details of the configurations that constitute a site definition. For more information, see <a href="http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx">Onet.xml</a>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Schema.xml</p></td>
<td align="left"><p>\TEMPLATE\FEATURES\<span class="placeholder">featurename</span>, where <span class="placeholder">featurename</span> is the name of the parent feature of the list type.</p></td>
<td align="left"><p>Defines a specific type of list. For more information, see <a href="http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56(Office.15).aspx">Schema.xml</a>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>alerttemplates.xml and alerttemplates_SMS.xml</p></td>
<td align="left"><p>\TEMPLATE\XML</p></td>
<td align="left"><p>Defines the format, contents, and properties used to create alert e-mail and SMS messages.</p></td>
</tr>
<tr class="even">
<td align="left"><p>STDVIEW.XML</p></td>
<td align="left"><p>\TEMPLATE\GLOBAL\XML</p></td>
<td align="left"><p>Defines the base view used in a site definition when creating new views.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>VWSTYLES.XML</p></td>
<td align="left"><p>\TEMPLATE \GLOBAL\XML</p></td>
<td align="left"><p>Defines the styles for viewing list data that are available on the <span class="ui">Create View</span> page for the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>BASE.XML</p></td>
<td align="left"><p>\TEMPLATE \XML</p></td>
<td align="left"><p>Provides the schemas used in creating the Lists, Documents, and UserInfo tables in the database when a new site is provisioned.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>DEADWEB.XML</p></td>
<td align="left"><p>\TEMPLATE\LCID\XML folder, where LCID is the numeric ID of the language/culture</p></td>
<td align="left"><p>Defines the message that is sent to the owner of a site to confirm site usage or to warn that the site will be automatically deleted.</p></td>
</tr>
<tr class="even">
<td align="left"><p>FldTypes.xml</p></td>
<td align="left"><p>\TEMPLATE\XML</p></td>
<td align="left"><p>Used during site or list creation to define how field types are rendered in the different modes for viewing list data. For more information, see <a href="http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6(Office.15).aspx">FldTypes.xml</a>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>RGNLSTNG.XML</p></td>
<td align="left"><p>\TEMPLATE\LCID\XML folder, where LCID is the numeric ID of the language/culture</p></td>
<td align="left"><p>Specifies the regional settings for currency, language, locale, and time zone.</p></td>
</tr>
<tr class="even">
<td align="left"><p>htmltransinfo.xml</p></td>
<td align="left"><p>\TEMPLATE\XML</p></td>
<td align="left"><p>Contains mapping instructions for directing a request to the URL for handling a request when the client computer does not have Microsoft Office installed.</p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[How to: Create a Custom Site Definition and
Configuration](http://msdn.microsoft.com/library/62b0552d-b7a7-4856-b906-c7bcb3155792(Office.15).aspx)

[Working with Site Templates and
Definitions](http://msdn.microsoft.com/library/1edf6d4d-eddb-4cb5-9034-ed394e8a3e01(Office.15).aspx)

[Working with
Features](http://msdn.microsoft.com/library/ce5f5ce5-1429-439e-9261-2c4ba9788cc1(Office.15).aspx)








