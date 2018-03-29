---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 3a227232-a224-4c30-b7b5-ce722f1f0eb9
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
<td align="left"># GroupX Element (DeploymentManifest)</td>
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

Represents an instance of a top-level Windows SharePoint Services 3.0
deployment group object.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element name=&quot;GroupX&quot; type=&quot;DeploymentGroupX&quot; /&gt;

USAGE
&lt;SPObject&gt;
        &lt;GroupX
                Operation=&quot;SecurityModificationType&quot;
                Id=&quot;xs:string&quot;
                Name=&quot;xs:string&quot;
                OwnerLogin=&quot;xs:string&quot;
                OwnerIsUser=&quot;xs:boolean&quot;
                Description=&quot;xs:string&quot;
                UserId=&quot;xs:string&quot;
                UserLogin=&quot;xs:string&quot;
                RequestToJoinLeaveEmailSetting=&quot;xs:string&quot;
                OnlyAllowMembersViewMembership=&quot;xs:boolean&quot;
                AllowRequestToJoinLeave=&quot;xs:boolean&quot;
                AutoAcceptRequestToJoinLeave=&quot;xs:boolean&quot;
        /&gt;
&lt;/SPObject&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**DeploymentGroupX**


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
<td align="left"><p>**Operation**</p></td>
<td align="left"><p><span sdata="link"><a href="securitymodificationtype-simple-type-deploymentmanifest.md">SecurityModificationType Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Required. The security modification operation associated with the group.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Identifier of the group.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Name of the group.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OwnerLogin**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Login information for the group owner.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**OwnerIsUser**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the owner is the current user; **true** if the owner is the user.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Description of the deployment group.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UserId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Identifier of the current user.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**UserLogin**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Login information for the current user.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RequestToJoinLeaveEmailSetting**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OnlyAllowMembersViewMembership**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether only group members can view the list of deployment group members; **true** if only group members can view the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AllowRequestToJoinLeave**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether users can request to join or leave the deployment group; **true** if users can request to join or leave the group..</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AutoAcceptRequestToJoinLeave**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether requests to join or leave the deployment group are automatically accepted; **true** if requests are automatically accepted.</p></td>
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
<td align="left"><p><span sdata="link"><a href="spobject-element-deploymentmanifest.md">SPObject Element (DeploymentManifest)</a></span></p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[DeploymentManifest
Schema](deploymentmanifest-schema.md)</span>








