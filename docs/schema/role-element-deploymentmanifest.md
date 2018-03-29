---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 76bf9339-6d33-48a5-b59f-a5d5317c9778
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
<td align="left"># Role Element (DeploymentManifest)</td>
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

Represents an instance of a Windows SharePoint Services 3.0 deployment
role (**DeploymentRole**) object.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element name=&quot;Role&quot; type=&quot;DeploymentRole&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; /&gt;

USAGE
&lt;Roles&gt;
        &lt;Role
                RoleId=&quot;xs:string&quot;
                Title=&quot;xs:string&quot;
                Description=&quot;xs:string&quot;
                PermMask=&quot;xs:string&quot;
                Hidden=&quot;xs:boolean&quot;
                RoleOrder=&quot;xs:string&quot;
                Type=&quot;xs:string&quot;
        /&gt;
&lt;/Roles&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**DeploymentRole** (based on <span sdata="cer"
target="T:Microsoft.SharePoint.SPRole"><span
class="nolink">SPRole</span></span>)


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
<td align="left"><p>**RoleId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Integer that specifies the member ID.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Specifies the name for the role.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Provides a description of the role.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PermMask**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Specifies a permission mask for the role.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Required. Specifies whether the role is hidden; **true</span> if the role is hidden, otherwise, <span class="keyword">false**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RoleOrder**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the order in which permission levels are displayed on the **Permission Levels** page of a site collection.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the role type, as listed in the <span sdata="cer" target="T:Microsoft.SharePoint.SPRoleType"><span class="nolink">Microsoft.SharePoint.SPRoleType</span></span> enumeration.</p></td>
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
<td align="left"><p><span sdata="link"><a href="roles-element-deploymentmanifest.htm">Roles Element (DeploymentManifest)</a></span></p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The value of the **RoleID** property
corresponds to the unique member ID for the role, which is specified in
the <span sdata="cer" target="P:Microsoft.SharePoint.SPMember.ID"><span
class="nolink">SPMember.ID</span></span> property of the <span
sdata="cer" target="T:Microsoft.SharePoint.SPMember"><span
class="nolink">SPMember</span></span> class.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer" target="T:Microsoft.SharePoint.SPRole"><span
class="nolink">SPRole</span></span>

<span sdata="cer" target="T:Microsoft.SharePoint.SPMember"><span
class="nolink">SPMember</span></span>

<span sdata="cer" target="P:Microsoft.SharePoint.SPMember.ID"><span
class="nolink">ID</span></span>

<span sdata="cer" target="T:Microsoft.SharePoint.SPRoleType"><span
class="nolink">SPRoleType</span></span>

#### Concepts

[DeploymentManifest
Schema](deploymentmanifest-schema.md)</span>








