---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- content migration schema,content migration [SharePoint 2010],schemas [SharePoint 2010], DeploymentUserGroupMap
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 903d18c8-eb4e-46a4-8350-480e5906eebf
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
<td align="left"># DeploymentUserGroupMap Schema</td>
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

The DeploymentUserGroupMap Schema provides validation for the
UserGroup.xml file exported into the content migration package. The
UserGroup.xml file maintains a list of users and user security groups
with respect to access security and permissions.


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following table lists elements in the DeploymentUserGroupMap.xsd
schema file.

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
<td align="left"><p><span sdata="link"><a href="group-element-deploymentusergroupmap.htm">Group Element (DeploymentUserGroupMap)</a></span></p></td>
<td align="left"><p>Represents a deployment group object instance (**DeploymentGroup**) exported to the content migration package.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="groups-element-deploymentusergroupmap.htm">Groups Element (DeploymentUserGroupMap)</a></span></p></td>
<td align="left"><p>Represents a container object that holds deployment group (**DeploymentGroup**) object instances.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="user-element-deploymentusergroupmap.htm">User Element (DeploymentUserGroupMap)</a></span></p></td>
<td align="left"><p>Represent a deployment user object instance (**DeploymentUser**) for export to the content migration package.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="users-element-deploymentusergroupmap.htm">Users Element (DeploymentUserGroupMap)</a></span></p></td>
<td align="left"><p>Represents a container object that holds deployment user object instances (**DeploymentUser**).</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="member-element-deploymentusergroupmap.htm">Member Element (DeploymentUserGroupMap)</a></span></p></td>
<td align="left"><p>Represents a member of a Microsoft SharePoint Foundation deployment group object (**DeploymentGroup**).</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="usergroupmap-element-deploymentusergroupmap.htm">UserGroupMap Element (DeploymentUserGroupMap)</a></span></p></td>
<td align="left"><p>Represents an object (**DeploymentUserGroupMap**) that holds mappings for the Microsoft SharePoint Foundation deployment users and deployment groups that are exported to the content migration package.</p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[Content migration
schemas](content-migration-schemas.md)</span>








