---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: 2581816d-83ce-4206-9dcc-da6edd82ae52
---

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]( "Copy code hover")
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
<td align="left"># RightsGroup Element (View)</td>
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

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

Specifies a permission that the current user must have to permit the
contents of the [Then](then-element-view.md) clause
within an [IfHasRight](ifhasrights-element-view.md) element
to be displayed.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;RightsGroup
    Permission = &quot;Required&quot;&gt;
&lt;/RightsGroup&gt;</code></pre></td>
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
<td align="left"><p>**PermAddAndCustomizePages=&quot;Required&quot;**</p></td>
<td align="left"><p>Add, change, or delete ASPX pages, HTML pages, or Web Part Pages, and edit the Web site using a SharePoint Foundation-compatible editor.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PermAddDelPrivateWebParts=&quot;Required&quot;**</p></td>
<td align="left"><p>Add or remove Web Parts on a personalized Web Part Page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PermAddListItems=&quot;Required&quot;**</p></td>
<td align="left"><p>Add items to lists, add documents to document libraries, and add Web discussion comments.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PermApplyStyleSheets=&quot;Required&quot;**</p></td>
<td align="left"><p>Apply a style sheet (.CSS file) to the Web site.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PermApplyThemeAndBorder=&quot;Required&quot;**</p></td>
<td align="left"><p>Apply a theme or borders to the entire Web site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PermApproveItems=&quot;Required&quot;**</p></td>
<td align="left"><p>Approve items.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PermBrowseDirectories=&quot;Required&quot;**</p></td>
<td align="left"><p>Browse directories in a Web site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PermBrowseUserInfo=&quot;Required&quot;**</p></td>
<td align="left"><p>View information about users. This right is not available through the user interface.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PermCancelCheckout=&quot;Required&quot;**</p></td>
<td align="left"><p>Check in a document without saving the current changes.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PermCreateAlerts=&quot;Required&quot;**</p></td>
<td align="left"><p>Create alerts.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PermCreateGroups=&quot;Required&quot;**</p></td>
<td align="left"><p>Create, change, and delete groups, including adding users to the groups and specifying which rights are assigned to a group.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PermCreateSSCSite=&quot;Required&quot;**</p></td>
<td align="left"><p>Create a Web site using Self-Service Site Creation.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PermDeleteListItems=&quot;Required&quot;**</p></td>
<td align="left"><p>Delete items from a list, documents from a document library, and Web discussion comments in documents.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PermDeleteVersions=&quot;Required&quot;**</p></td>
<td align="left"><p>Delete versions.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PermEditListItems=&quot;Required&quot;**</p></td>
<td align="left"><p>Edit items in lists, edit documents in document libraries, edit Web discussion comments in documents, and customize Web Part Pages in document libraries.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PermEditMyUserInfo=&quot;Required&quot;**</p></td>
<td align="left"><p>Edit personal user information.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PermEnumeratePermissions=&quot;Required&quot;**</p></td>
<td align="left"><p>View permissions.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PermFullMask=&quot;Required&quot;**</p></td>
<td align="left"><p>Has all permissions on the Web site. Not available through the user interface.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PermManageAlerts=&quot;Required&quot;**</p></td>
<td align="left"><p>Manage alerts.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PermManageLists=&quot;Required&quot;**</p></td>
<td align="left"><p>Approve content in lists, add or remove columns in a list, and add or remove public views of a list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PermManagePermissions=&quot;Required&quot;**</p></td>
<td align="left"><p>Manage permissions.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PermManagePersonalViews=&quot;Required&quot;**</p></td>
<td align="left"><p>Create, change, and delete personal views of lists.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PermManageSubwebs=&quot;Required&quot;**</p></td>
<td align="left"><p>Manage or create subsites.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PermManageWeb=&quot;Required&quot;**</p></td>
<td align="left"><p>Manage a site, including the ability to perform all administration tasks for the site and manage contents and permissions</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PermOpen=&quot;Required&quot;**</p></td>
<td align="left"><p>Open documents.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PermOpenItems=&quot;Required&quot;**</p></td>
<td align="left"><p>Open items.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PermUpdatePersonalWebPar=&quot;Required&quot;ts**</p></td>
<td align="left"><p>Update Web Parts to display personalized information.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PermUseRemoteAPIs=&quot;Required&quot;**</p></td>
<td align="left"><p>Use the APIs defined through remote applications.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PermViewFormPages=&quot;Required&quot;**</p></td>
<td align="left"><p>View list item form pages.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PermViewListItems=&quot;Required&quot;**</p></td>
<td align="left"><p>View items in lists, documents in document libraries, view Web discussion comments, and set up e-mail alerts for lists.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PermViewPages=&quot;Required&quot;**</p></td>
<td align="left"><p>View pages in a Web site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PermViewUsageData=&quot;Required&quot;**</p></td>
<td align="left"><p>View reports on Web site usage.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PermViewVersions=&quot;Required&quot;**</p></td>
<td align="left"><p>View versions of items.</p></td>
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
<td align="left"><p><a href="rightschoices-element-view.md">RightsChoices</a></p></td>
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








