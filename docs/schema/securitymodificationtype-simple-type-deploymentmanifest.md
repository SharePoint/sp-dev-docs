---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6ecf42b2-0c38-4ecf-b819-fa931965ab49
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
<td align="left"># SecurityModificationType Simple Type (DeploymentManifest)</td>
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

Specifies the allowable security modifications for a specified user,
user group, role, or role assignment.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;xs:simpleType name=&quot;SecurityModificationType&quot;&gt;
        &lt;xs:restriction base=&quot;xs:string&quot;&gt;
                &lt;xs:enumeration value=&quot;Add&quot; /&gt;
                &lt;xs:enumeration value=&quot;Delete&quot; /&gt;
                &lt;xs:enumeration value=&quot;Update&quot; /&gt;
                &lt;xs:enumeration value=&quot;MemberAdd&quot; /&gt;
                &lt;xs:enumeration value=&quot;MemberDelete&quot; /&gt;
                &lt;xs:enumeration value=&quot;RoleAdd&quot; /&gt;
                &lt;xs:enumeration value=&quot;RoleDelete&quot; /&gt;
                &lt;xs:enumeration value=&quot;RoleUpdate&quot; /&gt;
                &lt;xs:enumeration value=&quot;RoleAssignmentAdd&quot; /&gt;
                &lt;xs:enumeration value=&quot;RoleAssignmentDelete&quot; /&gt;
        &lt;/xs:restriction&gt;
&lt;/xs:simpleType&gt;</code></pre></td>
</tr>
</tbody>
</table>


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
<td align="left"><p>**Add**</p></td>
<td align="left"><p>Adds a security object (user, group, or role)</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Delete**</p></td>
<td align="left"><p>Deletes a security object.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Update**</p></td>
<td align="left"><p>Updates a security object.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**MemberAdd**</p></td>
<td align="left"><p>Adds a member to a SharePoint group.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**MemberDelete**</p></td>
<td align="left"><p>Deletes a member from a SharePoint group.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RoleAdd**</p></td>
<td align="left"><p>Adds a SharePoint role.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RoleDelete**</p></td>
<td align="left"><p>Deletes a SharePoint role.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RoleUpdate**</p></td>
<td align="left"><p>Updates a SharePoint role.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RoleAssignmentAdd**</p></td>
<td align="left"><p>Adds an assignment to a SharePoint role.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RoleAssignmentDelete**</p></td>
<td align="left"><p>Deletes an assignment from a SharePoint role.</p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

<span sdata="link">[DeploymentManifest
Schema](deploymentmanifest-schema.htm)</span>

#### Other resources

<span sdata="link">[GroupX Element
(DeploymentManifest)](groupx-element-deploymentmanifest.htm)</span>








