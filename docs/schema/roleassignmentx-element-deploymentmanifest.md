---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6fb13349-16fd-4fb6-b0d7-a469e276cb18
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
<td align="left"># RoleAssignmentX Element (DeploymentManifest)</td>
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

Represents a security role assignment in cases where incremental changes
to the base object are being deployed.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element name=&quot;RoleAssignmentX&quot; type=&quot;DeploymentRoleAssignmentX&quot; /&gt;

USAGE
&lt;SPObject&gt;
        &lt;RoleAssignmentX
                Operation=&quot;SecurityModificationType&quot;
                OperationCode=&quot;xs:string&quot;
                ScopeId=&quot;xs:string&quot;
                RoleDefWebId=&quot;xs:string&quot;
                RoleDefWebUrl=&quot;xs:string&quot;
                ObjectId=&quot;xs:string&quot;
                ObjectType=&quot;xs:string&quot;
                ObjectUrl=&quot;xs:string&quot;
                AnonymousPermMask=&quot;xs:string&quot;
                RoleName=&quot;xs:string&quot;
                RoleId=&quot;xs:string&quot;
                GroupTitle=&quot;xs:string&quot;
                UserLogin=&quot;xs:string&quot;
        /&gt;
&lt;/SPObject&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**DeploymentRoleAssignmentX** (based on <span
sdata="cer" target="T:Microsoft.SharePoint.SPRoleAssignment"><span
class="nolink">SPRoleAssignment</span></span>)


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
<td align="left"><p><span sdata="link"><a href="securitymodificationtype-simple-type-deploymentmanifest.htm">SecurityModificationType Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Required. Enumeration type that specifies which security role modifications are allowed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OperationCode**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ScopeId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Specifies whether the scope of the role is list level or Web level.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RoleDefWebId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Identifier of the Web whose role definition applies to the role.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RoleDefWebUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. URL of the Web whose role definition applies to the role.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ObjectId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Identifier of the role assignment object.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ObjectType**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Type of the role assignment object.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ObjectUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. URL to the role assignment object.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AnonymousPermMask**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Permission mask for anonymous users.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RoleName**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Name of the security role associated with the assignment.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RoleId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Identifier of the security role.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**GroupTitle**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Display name of the security group that is associated with the role.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UserLogin**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Logon credential for users associated with the role.</p></td>
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
<td align="left"><p><span sdata="link"><a href="spobject-element-deploymentmanifest.htm">SPObject Element (DeploymentManifest)</a></span></p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer" target="T:Microsoft.SharePoint.SPRoleAssignment"><span
class="nolink">SPRoleAssignment</span></span>

#### Concepts

[DeploymentManifest
Schema](deploymentmanifest-schema.md)</span>

#### Other resources

[RoleAssignment Element
(DeploymentManifest)](roleassignment-element-deploymentmanifest.md)</span>








