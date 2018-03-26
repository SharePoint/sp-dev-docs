---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0dabce09-2a1e-4688-a97b-5f3fc5b6ba67
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
<td align="left"># ExportSettings Element (DeploymentExportSettings)</td>
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
SharePoint Online | SharePoint Server 2013*

Deployment export settings root element, which provides an XML wrapper
for the deployment export settings container object and provides a means
for exporting content to a content migration package.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element name=&quot;ExportSettings&quot; type=&quot;SPExportSettings&quot; /&gt;

USAGE
&lt;ExportSettings&gt;
        &lt;ExportObjects /&gt;
&lt;!-- SPDeploymentSettings --&gt;
        &lt;xs:attribute name=&quot;SiteUrl&quot; type=&quot;xs:string&quot; /&gt;
        &lt;xs:attribute name=&quot;FileLocation&quot; type=&quot;xs:string&quot; /&gt;
        &lt;xs:attribute name=&quot;BaseFileName&quot; type=&quot;xs:string&quot; /&gt;
        &lt;xs:attribute name=&quot;IncludeSecurity&quot; type=&quot;SPIncludeSecurity&quot; /&gt;

&lt;!-- SPExportSettings --&gt;
        &lt;xs:attribute name=&quot;IncludeVersions&quot; type=&quot;SPIncludeVersions&quot; /&gt;
        &lt;xs:attribute name=&quot;ExportMethod&quot; type=&quot;SPExportMethodType&quot; /&gt;
        &lt;xs:attribute name=&quot;ExportChangeToken&quot; type=&quot;xs:string&quot; /&gt;
        &lt;xs:attribute name=&quot;ExportPublicSchema&quot; type=&quot;xs:boolean&quot; default=&quot;true&quot; /&gt;
&lt;/ExportSettings&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span sdata="cer"
target="T:Microsoft.SharePoint.Deployment.SPExportSettings"><span
class="nolink">SPExportSettings</span></span>


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
<td align="left"><p>**BaseFileName**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. The name of the content migration package file.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ExportChangeToken**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the token to use when exporting incremental changes based on changes since the last export.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ExportMethod**</p></td>
<td align="left"><p><span sdata="link"><a href="spexportmethodtype-simple-type-deploymentexportsettings.htm">SPExportMethodType Simple Type (DeploymentExportSettings)</a></span></p></td>
<td align="left"><p>Optional. Enumeration specifying whether the export operation is a full or incremental export, based on changes since the last export.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ExportPublicSchema**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether to use the public schema format when exporting a list field; **true</span> if the export operation uses the public schema. The default value is <span class="keyword">true**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FileLocation**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. The path to the directory where the content migration package is located.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IncludeSecurity**</p></td>
<td align="left"><p><span sdata="link"><a href="spincludesecurity-simple-type-deploymentexportsettings.htm">SPIncludeSecurity Simple Type (DeploymentExportSettings)</a></span></p></td>
<td align="left"><p>Optional. Enumeration specifying which level of deployment security to apply to the export settings.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IncludeVersions**</p></td>
<td align="left"><p><span sdata="link"><a href="spincludeversions-simple-type-deploymentexportsettings.htm">SPIncludeVersions Simple Type (DeploymentExportSettings)</a></span></p></td>
<td align="left"><p>Optional. Enumeration specifying which export version settings to provide for the content migration package.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SiteUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. URL to the site containing the content that is being exported.</p></td>
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
<td align="left"><p><span sdata="link"><a href="exportobjects-element-deploymentexportsettings.htm">ExportObjects Element (DeploymentExportSettings)</a></span></p></td>
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
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer"
target="T:Microsoft.SharePoint.Deployment.SPExportSettings"><span
class="nolink">SPExportSettings</span></span>

#### Concepts

<span sdata="link">[DeploymentExportSettings
Schema](deploymentexportsettings-schema.htm)</span>








