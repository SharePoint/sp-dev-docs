---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e5fe8d3f-5010-41ad-a75e-dc40240dc870
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
<td align="left"># SPIncludeSecurity Simple Type (DeploymentExportSettings)</td>
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

Provides values for the **IncludeSecurity**
attribute on the [ExportSettings Element
(DeploymentExportSettings)](exportsettings-element-deploymentexportsettings.md)</span>.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><xs:simpleType name="SPIncludeSecurity">
    <xs:restriction base="xs:string">
        <xs:enumeration value="None" />
        <xs:enumeration value="WssOnly" />
        <xs:enumeration value="All" />
    </xs:restriction>
</xs:simpleType</code></pre></td>
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
<td align="left"><p>**None**</p></td>
<td align="left"><p>Specifies that no user or group information is migrated. (Default)</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WssOnly**</p></td>
<td align="left"><p>Applies only Windows SharePoint Services 3.0 security settings. Includes user memberships and role assignments such as default roles, for example, Web Designer or any custom roles that extend from the default roles. The access control list (ACL) for each object is migrated. No user information defined in the DAP or LDAP servers is included.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**All**</p></td>
<td align="left"><p>Applies all available Windows SharePoint Services 3.0 security settings. Includes user memberships and role assignments such as default roles, for example, Web Designer or any custom roles that extend from the default roles. The ACL for each object is migrated. In addition, user information defined in the DAP or LDAP servers is included.</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The values specify the user and group information that is included
during an export operation.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



<span sdata="cer"
target="T:Microsoft.SharePoint.Deployment.SPIncludeSecurity"><span
class="nolink">SPIncludeSecurity</span></span>



[DeploymentExportSettings
Schema](deploymentexportsettings-schema.md)</span>



[ExportSettings Element
(DeploymentExportSettings)](exportsettings-element-deploymentexportsettings.md)</span>








