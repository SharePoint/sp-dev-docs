---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 57e68176-fe88-40e2-bcb7-bee76b69eb71
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
<td align="left"># RoleX Element (DeploymentManifest)</td>
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

Represents a security role in cases where incremental changes to the
base object are being deployed.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element name=&quot;RoleX&quot; type=&quot;DeploymentRoleX&quot; /&gt;

USAGE
&lt;SPObject&gt;
        &lt;RoleX
                Operation=&quot;SecurityModificationType&quot;
                OperationCode=&quot;xs:string&quot;
                WebId=&quot;xs:string&quot;
                WebUrl=&quot;xs:string&quot;
                RoleId=&quot;xs:string&quot;
                Title=&quot;xs:string&quot;
                Description=&quot;xs:string&quot;
                PermMask=&quot;xs:string&quot;
                Hidden=&quot;xs:boolean&quot;
                RoleOrder=&quot;xs:string&quot;
                Type=&quot;xs:string&quot;
                UserId=&quot;xs:string&quot;
                UserLogin=&quot;xs:string&quot;
        /&gt;
&lt;/SPObject&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**DeploymentRoleX** (based on <span sdata="cer"
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
<td align="left"><p>**WebId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Identifier of the Web site to which changes are deployed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WebUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. URL of the Web site to which changes are deployed.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RoleId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Identifier of the security role for objects that are deployed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Display name of the role.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Description of the role.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PermMask**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Permission mask for the role.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>xs:bool</p></td>
<td align="left"><p>Optional. Specifies whether the role is hidden; **true</span> if hidden, otherwise, <span class="keyword">false**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RoleOrder**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Position of the role in</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Type for the role as listed in the <span sdata="cer" target="T:Microsoft.SharePoint.SPRoleType"><span class="nolink">Microsoft.SharePoint.SPRoleType</span></span> enumeration.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**UserId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Identifier of users that belong to the role.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UserLogin**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Logon credential for user.</p></td>
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

<span sdata="cer" target="T:Microsoft.SharePoint.SPRole"><span
class="nolink">SPRole</span></span>

#### Concepts

<span sdata="link">[DeploymentManifest
Schema](deploymentmanifest-schema.htm)</span>

#### Other resources

<span sdata="link">[Role Element
(DeploymentManifest)](role-element-deploymentmanifest.htm)</span>








