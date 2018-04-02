---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 68fee905-0ee5-41c6-ad8a-f7193baf5dbb
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
<td align="left"># SPObjectType Simple Type (DeploymentManifest)</td>
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

Provides values for all top-level serialized SharePoint object types.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><xs:simpleType name="SPObjectType">
        <xs:restriction base="xs:string">
                <xs:enumeration value="SPSite" />
                <xs:enumeration value="SPWeb" />
                <xs:enumeration value="SPList" />
                <xs:enumeration value="SPDocumentLibrary" />
                <xs:enumeration value="SPPictureLibrary" />
                <xs:enumeration value="SPListItem" />
                <xs:enumeration value="SPFolder" />
                <xs:enumeration value="SPFile" />
                <xs:enumeration value="SPContentType" />
                <xs:enumeration value="SPWebTemplate" />
                <xs:enumeration value="SPModule" />
                <xs:enumeration value="SPDocumentTemplate" />
                <xs:enumeration value="SPListTemplate" />
                <xs:enumeration value="DeploymentWebStructure" />
                <xs:enumeration value="DeploymentUserX" />
                <xs:enumeration value="DeploymentGroupX" />
                <xs:enumeration value="DeploymentRoles" />
                <xs:enumeration value="DeploymentRoleX" />
                <xs:enumeration value="DeploymentRoleAssignments" />
                <xs:enumeration value="DeploymentRoleAssignmentX" />
                <xs:enumeration value="DeploymentFieldTemplate" />
                <xs:enumeration value="SPFeature" />
        </xs:restriction>
</xs:simpleType></code></pre></td>
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
<td align="left"><p>**SPSite**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **SPSite**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SPWeb**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **SPWeb**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SPList**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **SPList**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SPDocumentLibrary**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **SPDocumentLibrary**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SPPictureLibrary**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **SPPictureLibrary**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SPListItem**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **SPListItem**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SPFolder**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **SPFolder**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SPFile**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **SPFile**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SPContentType**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **SPContentType**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SPWebTemplate**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **SPWebTemplate**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SPModule**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **SPModule**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SPDocumentTemplate**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **SPDocumentTemplate**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SPListTemplate**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **SPListTemplate**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DeploymentWebStructure**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **DeploymentWebStructure**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DeploymentUserX**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **DeploymentUserX**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DeploymentGroupX**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **DeploymentGroupX**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DeploymentRoles**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **DeploymentRoles**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DeploymentRoleX**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **DeploymentRoleX**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DeploymentRoleAssignments**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **DeploymentRoleAssignments**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DeploymentRoleAssignmentX**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **DeploymentRoleAssignmentX**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DeploymentFieldTemplate**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **DeploymentFieldTemplate**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SPFeature**</p></td>
<td align="left"><p>Specifies that a SharePoint object is of type **SPFeature**.</p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[DeploymentManifest
Schema](deploymentmanifest-schema.md)</span>








