---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 16571086-f2bc-49f5-8dd8-d2ce064de700
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
<td align="left"># User Element (DeploymentUserGroupMap)</td>
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

Represents an instance of a deployment user (<span
class="keyword">DeploymentUser</span>) object included in the user group
map (UserGroup.xml) file for export to the content migration package.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element 
    name=&quot;User&quot; 
    type=&quot;DeploymentUser&quot; 
    minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; 
/&gt;

USAGE
&lt;Users&gt;
    &lt;User
        Id=&quot;xs:string&quot;
        Name=&quot;xs:string&quot;
        Login=&quot;xs:string&quot;
        Email=&quot;xs:string&quot;
        IsDomainGroup=&quot;xs:boolean&quot;
        IsSiteAdmin=&quot;xs:boolean&quot;
        SystemId=&quot;xs:string&quot;
        IsDeleted=&quot;xs:boolean&quot;
    /&gt;
&lt;/Users&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**DeploymentUser**


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
<td align="left"><p>Required. Identifier of the user.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Name of the user.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Login**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Login name for the user.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Email**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. E-mail address for the user.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsDomainGroup**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the user identity represents a domain group; **true** if the user is a domain group.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsSiteAdmin**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the user is a Microsoft SharePoint Foundation site administrator; **true** if the user is a site administrator.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SystemId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Represents the value of the Active Directory SID, which is converted to a base64 data type by using the <a href="frlrfSystemConvertClassToBase64StringTopic">ToBase64String</a> method. Note that functionality provided by the <span sdata="cer" target="T:Microsoft.SharePoint.Deployment.SPExport"><span class="nolink">SPExport</span></span> type does not validate the data that is passed through the **SystemId** attribute.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsDeleted**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the user has been deleted; **true** if the user has been deleted.</p></td>
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
<td align="left"><p><span sdata="link"><a href="users-element-deploymentusergroupmap.md">Users Element (DeploymentUserGroupMap)</a></span></p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[DeploymentUserGroupMap
Schema](deploymentusergroupmap-schema.md)</span>








