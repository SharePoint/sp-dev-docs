---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 4f48e808-aa9d-4ea5-8c3e-94024f9f1590
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
<td align="left"># SPModerationStatusType Simple Type (DeploymentManifest)</td>
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

Specifies the document status for a list item in a Windows SharePoint
Services 3.0 list or document library version collection.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;xs:simpleType name=&quot;SPModerationStatusType&quot;&gt;
        &lt;xs:restriction base=&quot;xs:string&quot;&gt;
                &lt;xs:enumeration value=&quot;Approved&quot; /&gt;
                &lt;xs:enumeration value=&quot;Denied&quot; /&gt;
                &lt;xs:enumeration value=&quot;Pending&quot; /&gt;
                &lt;xs:enumeration value=&quot;Draft&quot; /&gt;
                &lt;xs:enumeration value=&quot;Scheduled&quot; /&gt;
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
<td align="left"><p>**Approved**</p></td>
<td align="left"><p>Indicates that a specified list item is approved. The last major version of the item is displayed in the public views of the list or document library.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Denied**</p></td>
<td align="left"><p>Indicates that a specified list item is denied. The last major version of the item is not displayed in the public views of the list or document library.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Pending**</p></td>
<td align="left"><p>Indicates that a specified list item is pending. The decision about displaying the item in public views of the list or document library is pending.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Draft**</p></td>
<td align="left"><p>Indicates that a specified list item is a draft. The item minor version is being edited and is not ready for approval.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Scheduled**</p></td>
<td align="left"><p>Indicates that a specified list item is scheduled. The decision about displaying the item in public views of list or document library is pending and will be processed by a timer service.</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This type is relevant only if the list has the <span
class="keyword">Moderation</span> property enabled.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer"
target="T:Microsoft.SharePoint.SPModerationStatusType"><span
class="nolink">SPModerationStatusType</span></span>

#### Concepts

[DeploymentManifest
Schema](deploymentmanifest-schema.md)</span>

#### Other resources

[ListItem Element (DeploymentManifest -
SPGenericObject)](listitem-element-deploymentmanifestspgenericobject.md)</span>








