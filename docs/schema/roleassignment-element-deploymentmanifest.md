---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 7a305e0f-5605-4083-bf6a-71e50c601ec9
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
<td align="left"># RoleAssignment Element (DeploymentManifest)</td>
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

Represents an instance of a deployment role assignment (<span
class="keyword">DeploymentRoleAssignment</span>) object.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element name=&quot;RoleAssignment&quot; type=&quot;DeploymentRoleAssignment&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; /&gt;

USAGE
&lt;RoleAssignments&gt;
        &lt;RoleAssignment
                        &lt;Assignment /&gt;
                ScopeId=&quot;xs:string&quot;
                RoleDefWebId=&quot;xs:string&quot;
                RoleDefWebUrl=&quot;xs:string&quot;
                ObjectId=&quot;xs:string&quot;
                ObjectType=&quot;xs:string&quot;
                ObjectUrl=&quot;xs:string&quot;
                AnonymousPermMask=&quot;xs:string&quot;
        /&gt;
&lt;/RoleAssignments&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**DeploymentRoleAssignment** (based on <span
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
<td align="left"><p>**ScopeId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Specifies whether the scope of the role is list level or Web level.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RoleDefWebId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Identifier of the Web site whose role definition applies to the role.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RoleDefWebUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. URL of the Web site whose role definition applies to the role.</p></td>
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
</tbody>
</table>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="assignment-element-deploymentmanifest.md">Assignment Element (DeploymentManifest)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="roleassignments-element-deploymentmanifest.md">RoleAssignments Element (DeploymentManifest)</a></span></p></td>
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








