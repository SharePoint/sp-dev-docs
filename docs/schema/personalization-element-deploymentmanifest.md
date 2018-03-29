---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: dc42dabd-68d3-4bba-bbe6-3e5571620ead
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
<td align="left"># Personalization Element (DeploymentManifest)</td>
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

Represents personalization data pertaining to an instance of a Windows
SharePoint Services 3.0 file (<span sdata="cer"
target="T:Microsoft.SharePoint.SPFile"><span
class="nolink">SPFile</span></span>) object.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element name=&quot;Personalization&quot; 
        type=&quot;SPPersonalization&quot; 
        minOccurs=&quot;1&quot; maxOccurs=&quot;unbounded&quot; 
/&gt;

USAGE
&lt;Personalizations&gt;
        &lt;Personalization
                WebPartId=&quot;Guid&quot;
                UserId=&quot;xs:int&quot;
                WebPartOrder=&quot;xs:string&quot;
                WebPartZoneId=&quot;xs:string&quot;
                IsIncluded=&quot;xs:string&quot;
                FrameState=&quot;xs:string&quot;
                UserProperties=&quot;xs:string&quot;
        /&gt;
&lt;/Personalizations&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**SPPersonalization**


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
<td align="left"><p>**WebPartId**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.md">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Required. Unique identifier of the Web Part for which the personalization is associated.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**UserId**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Required. Identifier of the user for whom the personalization is associated.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**WebPartOrder**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. The order of Web Parts ordered in a Web Part zone.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WebPartZoneId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Identifier of the Web Part zone in which the associated Web Part is located.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsIncluded**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FrameState**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UserProperties**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
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
<td align="left"><p><span sdata="link"><a href="personalizations-element-deploymentmanifest.md">Personalizations Element (DeploymentManifest)</a></span></p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer" target="T:Microsoft.SharePoint.SPFile"><span
class="nolink">SPFile</span></span>

#### Concepts

[DeploymentManifest
Schema](deploymentmanifest-schema.md)</span>








