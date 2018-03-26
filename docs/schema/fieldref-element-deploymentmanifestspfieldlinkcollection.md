---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6cc11fe1-c73a-4878-8d4a-b307af972dd6
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
<td align="left"># FieldRef Element (DeploymentManifest - SPFieldLinkCollection)</td>
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

Represents field data to display in a view.

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
&lt;ViewFields&gt;
        &lt;FieldRef
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
        /&gt;
&lt;/ViewFields&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span sdata="cer" target="T:Microsoft.SharePoint.SPFieldLink"><span
class="nolink">SPFieldLink</span></span>


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
<td align="left"><p>Optional. Name of the field referenced.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ID**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Unique identifier of the field referenced.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Customization**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Default**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Default value for the field referenced.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ColName**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Display name for the column representing the field referenced.</p></td>
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
<td align="left"><p><span sdata="link"><a href="truefalse-simple-type-deploymentmanifest.htm">TRUEFALSE Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Specifies that the field value is hidden in the user interface.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Required**</p></td>
<td align="left"><p><span sdata="link"><a href="truefalse-simple-type-deploymentmanifest.htm">TRUEFALSE Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Specifies that the field requires a value.</p></td>
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
<td align="left"><p>Optional. Name shown in the user interface for the field referenced.</p></td>
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
<td align="left"><p><span sdata="link"><a href="viewfields-element-deploymentmanifestspview.htm">ViewFields Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer" target="T:Microsoft.SharePoint.SPFieldLink"><span
class="nolink">SPFieldLink</span></span>

#### Concepts

[DeploymentManifest
Schema](deploymentmanifest-schema.md)</span>








