---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 4ca81cf3-22b7-48e0-81ee-eb0399cfef05
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
<td align="left"># RootObject Element (DeploymentRootObjectMap)</td>
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

Represents an instance of a root object in a root object map exported to
the content migration package.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element
    name=&quot;RootObject&quot; type=&quot;SPRootObject&quot;
    minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; 
/&gt;

USAGE
&lt;RootObjects&gt;
    &lt;RootObject
        Id=&quot;Guid&quot;
        Type=&quot;SPDeploymentObjectType&quot;
        ParentId=&quot;Guid&quot;
        WebUrl=&quot;xs:string&quot;
        Url=&quot;xs:string&quot;
        IsDependency=&quot;xs:boolean&quot;
    /&gt;
&lt;/RootObjects&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**SPRootObject**


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
<td align="left"><p>Id</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentrootobjectmap.md">Guid Simple Type (DeploymentRootObjectMap))</a></span></p></td>
<td align="left"><p>Optional. Unique identifier of the root object.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Type</p></td>
<td align="left"><p><span sdata="link"><a href="spdeploymentobjecttype-simple-type-deploymentrootobjectmap.md">SPDeploymentObjectType Simple Type (DeploymentRootObjectMap)</a></span></p></td>
<td align="left"><p>Optional. Specifies the object type of the root object: **Site</span>, <span class="keyword">Web</span>, <span class="keyword">Folder</span>, <span class="keyword">List</span>, <span class="keyword">ListItem</span>, or <span class="keyword">File**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ParentId</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentrootobjectmap.md">Guid Simple Type (DeploymentRootObjectMap))</a></span></p></td>
<td align="left"><p>Optional. Unique identifier of the parent Web.</p></td>
</tr>
<tr class="even">
<td align="left"><p>WebUrl</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. URL to the parent Web site.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Url</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. URL to the root object.</p></td>
</tr>
<tr class="even">
<td align="left"><p>IsDependency</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the object is a dependent object. The value is **true</span> if the object is dependent; otherwise, <span class="keyword">false**.</p></td>
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
<td align="left"><p><span sdata="link"><a href="rootobjects-element-deploymentrootobjectmap.md">RootObjects Element (DeploymentRootObjectMap)</a></span></p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[DeploymentRootObjectMap
Schema](deploymentrootobjectmap-schema.md)</span>








