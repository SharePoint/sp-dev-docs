---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e63f9c59-018f-4438-a861-f0d3db3b8e7f
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
<td align="left"># Group Element (DeploymentUserGroupMap)</td>
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

Represents an instance of a deployment group (<span
class="keyword">DeploymentGroup</span>) object for generating the group
map (UserGroup.xml) file exported to the content migration package.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element 
    name=&quot;Group&quot; 
    type=&quot;DeploymentGroup&quot; 
    minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; 
/&gt;

USAGE
&lt;Groups&gt;
    &lt;Group&gt;
           &lt;Member /&gt;
        Id=&quot;xs:string&quot;
        Name=&quot;xs:string&quot;
        Owner=&quot;xs:string&quot;
        OwnerIsUser=&quot;xs:boolean&quot;
        Description=&quot;xs:string&quot;
        OnlyAllowMembersViewMembership=&quot;xs:boolean&quot;
        AllowMembersEditMembership=&quot;xs:boolean&quot;
        AllowRequestToJoinLeave=&quot;xs:boolean&quot;
        AutoAcceptRequestToJoinLeave=&quot;xs:boolean&quot;
        RequestToJoinLeaveEmailSetting=&quot;xs:string&quot;
    &lt;/Group&gt;
&lt;/Groups&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**DeploymentGroup**


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Identifier of the deployment group.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Name of the deployment group.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Owner**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Owner of the deployment group.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Owne**r**IsUser</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Required. Specifies whether the owner of the deployment group is also a user; **true** if the owner is also a user.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Description of the deployment group.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OnlyAllowMembersViewMembership**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether only members of the deployment group are able to view the list of deployment group members; **true** if viewing membership is restricted to group members.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AllowMembersEditMembership**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether deployment group members can edit the list of group members; **true** if group members can edit the membership list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AllowRequestToJoinLeave**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the deployment group accepts requests to join or leave the deployment group: **true** if the group accepts such requests.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AutoAcceptRequestToJoinLeave**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the deployment group automatically accepts requests to join or leave the deployment group; **true** if the group automatically accepts such requests.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RequestToJoinLeaveEmailSetting**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Provides the e-mail address to which users can send requests to join or leave the deployment group.</p></td>
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
<td align="left"><p><span sdata="link"><a href="member-element-deploymentusergroupmap.htm">Member Element (DeploymentUserGroupMap)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="groups-element-deploymentusergroupmap.htm">Groups Element (DeploymentUserGroupMap)</a></span></p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[DeploymentUserGroupMap
Schema](deploymentusergroupmap-schema.md)</span>








