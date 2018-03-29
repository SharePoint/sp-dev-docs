---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 34d26579-a495-4442-8fff-834a36b6255d
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
<td align="left"># PictureLibrary Element (DeploymentManifest)</td>
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

Represents an instance of a Windows SharePoint Services 3.0 picture
library (<span sdata="cer"
target="T:Microsoft.SharePoint.SPPictureLibrary"><span
class="nolink">SPPictureLibrary</span></span>) object.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element name=&quot;PictureLibrary&quot; type=&quot;SPPictureLibrary&quot; /&gt;

USAGE
&lt;SPObject&gt;
        &lt;PictureLibrary
                ThumbnailSize=&quot;xs:int&quot;
                WebImageHeight=&quot;xs:int&quot;
                WebImageWidth=&quot;xs:int&quot;
        /&gt;
&lt;/SPObject&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span sdata="cer" target="T:Microsoft.SharePoint.SPPictureLibrary"><span
class="nolink">SPPictureLibrary</span></span> object.


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
<td align="left"><p>**ThumbnailSize**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional. Specifies the size, in pixels, of the height or width, whichever is greatest, to use for the thumnails in the picture library.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WebImageHeight**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional. Specifies the height, in pixels, used to display images in the picture library.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**WebImageWidth**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional. Specifies the width, in pixels, used to display images in the picture library.</p></td>
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
<td align="left"><p><span sdata="link"><a href="spobject-element-deploymentmanifest.md">SPObject Element (DeploymentManifest)</a></span></p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The base type <span sdata="cer"
target="T:Microsoft.SharePoint.SPPictureLibrary"><span
class="nolink">Microsoft.SharePoint.SPPictureLibrary</span></span>
extends another base type, <span sdata="cer"
target="T:Microsoft.SharePoint.SPDocumentLibrary"><span
class="nolink">Microsoft.SharePoint.SPDocumentLibrary</span></span>.
That type, in turn, extends the <span sdata="cer"
target="T:Microsoft.SharePoint.SPList"><span
class="nolink">Microsoft.SharePoint.SPList</span></span> type.

For attributes of the **SPDocumentLibrary**
type, see [DocumentLibrary Element
(DeploymentManifest)](documentlibrary-element-deploymentmanifest.md)</span>.
For attributes of the **SPList** type, see
[List Element
(DeploymentManifest)](list-element-deploymentmanifest.md)</span>.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer" target="T:Microsoft.SharePoint.SPPictureLibrary"><span
class="nolink">SPPictureLibrary</span></span>

<span sdata="cer"
target="T:Microsoft.SharePoint.SPDocumentLibrary"><span
class="nolink">SPDocumentLibrary</span></span>

<span sdata="cer" target="T:Microsoft.SharePoint.SPList"><span
class="nolink">SPList</span></span>

#### Concepts

[DeploymentManifest
Schema](deploymentmanifest-schema.md)</span>








