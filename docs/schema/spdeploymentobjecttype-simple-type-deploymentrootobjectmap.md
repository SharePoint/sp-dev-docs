---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 484f7cea-b9f7-4545-9257-99509f87d1cc
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
<td align="left"># SPDeploymentObjectType Simple Type (DeploymentRootObjectMap)</td>
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

Provides values for the **Type** attribute on
the [RootObject Element
(DeploymentRootObjectMap)](rootobject-element-deploymentrootobjectmap.md)</span>.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;xs:simpleType name=&quot;SPDeploymentObjectType&quot;&gt;
        &lt;xs:restriction base=&quot;xs:string&quot;&gt;
                &lt;xs:enumeration value=&quot;Site&quot; /&gt;
                &lt;xs:enumeration value=&quot;Web&quot; /&gt;
                &lt;xs:enumeration value=&quot;Folder&quot; /&gt;
                &lt;xs:enumeration value=&quot;List&quot; /&gt; 
                &lt;xs:enumeration value=&quot;ListItem&quot; /&gt;
                &lt;xs:enumeration value=&quot;File&quot; /&gt;
        &lt;/xs:restriction&gt;
&lt;/xs:simpleType&gt;&gt;</code></pre></td>
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
<td align="left"><p>**Site**</p></td>
<td align="left"><p>Specifies that the root object type is a SharePoint Foundation site (**SPSite**).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Web**</p></td>
<td align="left"><p>Specifies that the root object type is a SharePoint Foundation Web (**SPWeb**) site object.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Folder**</p></td>
<td align="left"><p>Specifies that the root object type is a SharePoint Foundation folder (**SPFolder**).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**List**</p></td>
<td align="left"><p>Specifies that the root object type is a SharePoint Foundation list or document library (**SPList**).</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ListItem**</p></td>
<td align="left"><p>Specifies that the root object type is a SharePoint Foundation list item (**SPListItem**).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**File**</p></td>
<td align="left"><p>Specifies that the root object type is a SharePoint Foundation file (**SPFile**).</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The **SPDeploymentObjectType** simple type
value specifies the object type of the root object specified in the root
object map.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[DeploymentRootObjectMap
Schema](deploymentrootobjectmap-schema.md)</span>

#### Other resources

[RootObject Element
(DeploymentRootObjectMap)](rootobject-element-deploymentrootobjectmap.md)</span>








