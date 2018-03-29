---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1af74fb6-0e33-4e84-8b49-5e7027100699
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
<td align="left"># FieldRef Element (DeploymentManifest - SPFieldCollection)</td>
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

Represents field data to display in a Windows SharePoint Services 3.0
list (<span sdata="cer" target="T:Microsoft.SharePoint.SPList"><span
class="nolink">SPList</span></span>).

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element name=&quot;FieldRef&quot; 
        type=&quot;SPFieldLink&quot; 
        minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; 
/&gt;

USAGE
&lt;Fields&gt;
        &lt;FieldRef&gt;
                &lt;Field /&gt;
                        Name=&quot;xs:string&quot;
                        ID=&quot;Guid&quot;
                        Customization=&quot;xs:string&quot;
                        Default=&quot;xs:string&quot;
                        ColName=&quot;xs:string&quot;
                        ColName2=&quot;xs:string&quot;
                        RowOrdinal=&quot;xs:int&quot;
                        RowOrdinal2=&quot;xs:int&quot;
                        Hidden=&quot;TRUEFALSE&quot;
                        Required=&quot;TRUEFALSE&quot;
                        Explicit=&quot;xs:string&quot;
                        ShowInNewForm=&quot;xs:string&quot;
                        ShowInEditForm=&quot;xs:string&quot;
                        DisplayName=&quot;xs:string&quot;
                        Node=&quot;xs:string&quot;
        &lt;FieldRef /&gt;
&lt;/Fields&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span sdata="cer" target="T:Microsoft.SharePoint.SPField"><span
class="nolink">SPField</span></span>


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
<td align="left"><p>**Name**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Name of the field in which to display the data.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ID**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.md">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Unique identifier of the field in which to display the data.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Customization**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Default**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Default value for data to display in the field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ColName**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Display name of the column representing the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ColName2**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RowOrdinal**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RowOrdinal2**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p><span sdata="link"><a href="truefalse-simple-type-deploymentmanifest.md">TRUEFALSE Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Specifies whether the field value is hidden in the user interface. **TRUE</span> if the value is hidden. The default is <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Required**</p></td>
<td align="left"><p><span sdata="link"><a href="truefalse-simple-type-deploymentmanifest.md">TRUEFALSE Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Specifies whether the field requires a value (cannot be **null</span>). <span class="keyword">TRUE</span> if the field value is required. The default is <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Explicit**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowInNewForm**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowInEditForm**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Node**</p></td>
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
<td align="left"><p><span sdata="link"><a href="field-element-deploymentmanifestspfieldcollection.md">Field Element (DeploymentManifest - SPFieldCollection)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="fieldref-element-deploymentmanifestspfieldcollection.md">FieldRef Element (DeploymentManifest - SPFieldCollection)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="fields-element-deploymentmanifestsplist.md">Fields Element (DeploymentManifest - SPList)</a></span></p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This element can contain instances of itself, and can therefore be
either a parent or child of itself.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer" target="T:Microsoft.SharePoint.SPFieldLink"><span
class="nolink">SPFieldLink</span></span>

#### Concepts

[DeploymentManifest
Schema](deploymentmanifest-schema.md)</span>








