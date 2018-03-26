---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 79010d5f-246c-45bd-a11c-18dc09e84455
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
<td align="left"># Folder Element (DeploymentManifest)</td>
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

Represents an instance of a Windows SharePoint Services 3.0 folder
(<span sdata="cer" target="T:Microsoft.SharePoint.SPFolder"><span
class="nolink">SPFolder</span></span>) object.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element name=&quot;Folder&quot; type=&quot;SPFolder&quot; /&gt;

USAGE
&lt;SPObject&gt;
        &lt;Folder
                Id=&quot;Guid&quot;
                Name=&quot;xs:string&quot;
                Url=&quot;xs:string&quot;
                ParentFolderId=&quot;Guid&quot;
                ParentWebId=&quot;Guid&quot;
                ParentWebUrl=&quot;xs:string&quot;
                ContainingDocumentLibrary=&quot;Guid&quot;
                WelcomePageUrl=&quot;xs:string&quot;
                WelcomePageParameters=&quot;xs:string&quot;
                ListItemIntId=&quot;xs:int&quot;
                Author=&quot;xs:string&quot;
                ModifiedBy=&quot;xs:string&quot;
                TimeCreated=&quot;xs:dateTime&quot;
                TimeLastModified=&quot;xs:dateTime&quot;
                        &lt;Properties /&gt;
        /&gt;
&lt;/SPObject&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span sdata="cer" target="T:Microsoft.SharePoint.SPFolder"><span
class="nolink">SPFolder</span></span>


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
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Unique identifier of the folder.</p>
<p>Optional on export; required by import.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Name of the folder.</p>
<p>Optional on export; required by import.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Url**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>URL path to the folder.</p>
<p>Optional on export; required by import.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ParentFolderId**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Unique identifier of the folder's parent folder.</p>
<p>Optional on export; required by import.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ParentWebId**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Unique identifier of the folder's parent Web site, where appropriate.</p>
<p>Optional on export; required by import.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ParentWebUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. URL to the parent Web site.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ContainingDocumentLibrary**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Unique identifier of the document library the folder is part of, if it belongs to a document library.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WelcomePageUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. URL to the site's Welcome page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**WelcomePageParameters**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. URL parameters available for augmenting the Welcome page URL.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ListItemIntId**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional. Integer value that specifies the position relative to the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Author**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. User who created the folder.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ModifiedBy**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. User who last modified the folder.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TimeCreated**</p></td>
<td align="left"><p>xs:dateTime</p></td>
<td align="left"><p>Optional. Date/time value specifying the time the folder was created.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TimeLastModified**</p></td>
<td align="left"><p>xs:dateTime</p></td>
<td align="left"><p>Optional. Date-time value specifying the time the folder was last modified.</p></td>
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
<td align="left"><p><span sdata="link"><a href="properties-element-deploymentmanifestspfolder.htm">Properties Element (DeploymentManifest - SPFolder)</a></span></p></td>
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

<span sdata="cer" target="T:Microsoft.SharePoint.SPFolder"><span
class="nolink">SPFolder</span></span>

#### Concepts

[DeploymentManifest
Schema](deploymentmanifest-schema.md)</span>








