---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f605e30e-722f-4e22-99e2-62bdb079d23b
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
<td align="left"># WebTemplate Element (DeploymentManifest)</td>
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

Represents an instance of a Windows SharePoint Services 3.0 Web template
(<span sdata="cer" target="T:Microsoft.SharePoint.SPWebTemplate"><span
class="nolink">SPWebTemplate</span></span>) object, which provides the
site definition used to create the site, or the name of the site
defintion from which the site template used to create the site was
derived.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element name=&quot;WebTemplate&quot; type=&quot;SPWebTemplate&quot; /&gt;

USAGE
&lt;SPObject&gt;
        &lt;WebTemplate
                Description=&quot;xs:string&quot;
                Id=&quot;xs:string&quot;
                ImageUrl=&quot;xs:string&quot;
                IsCustomTemplate=&quot;xs:boolean&quot;
                IsHidden=&quot;xs:boolean&quot;
                IsUnique=&quot;xs:boolean&quot;
                Name=&quot;xs:string&quot;
                Title=&quot;xs:string&quot;
        /&gt;
&lt;/SPObject</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span sdata="cer" target="T:Microsoft.SharePoint.SPWebTemplate"><span
class="nolink">SPWebTemplate</span></span> object.


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
<td align="left"><p>**Description**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Provides a description of the specified Web template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Identifier of the site definition or site template.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Represents the URL to the image that is used to represent the site definition or site template in the user interface.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsCustomTemplate**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the **SPWebTemplate</span> object is a site template; that is, a template contained within a .wsp file. The value is <span class="keyword">true</span> if the <span class="keyword">SPWebTemplate** object is a custom template.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsHidden**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the site definition or site template is displayed as an option in the user interface. The value is **true** if the site template is hidden.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsUnique**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the site created using the site definition or site template inherits from its parent Web site. The value is **true** if the site does not inherit from its parent Web site.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Represents the name of the site definition or site template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Represents the display name of the site definition or site template.</p></td>
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


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer" target="T:Microsoft.SharePoint.SPWebTemplate"><span
class="nolink">SPWebTemplate</span></span>

#### Concepts

[DeploymentManifest
Schema](deploymentmanifest-schema.md)</span>








