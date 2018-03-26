---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a8fbc636-ac36-4046-b3ab-d604d38ccaaf
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
<td align="left"># SPBaseType Simple Type (DeploymentManifest)</td>
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

Specifies the base type for a SharePoint list item.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;xs:simpleType name=&quot;SPBaseType&quot;&gt;
        &lt;xs:restriction base=&quot;xs:string&quot;&gt;
                &lt;xs:enumeration value=&quot;UnspecifiedBaseType&quot; /&gt;
                &lt;xs:enumeration value=&quot;GenericList&quot; /&gt;
                &lt;xs:enumeration value=&quot;DocumentLibrary&quot; /&gt;
                &lt;xs:enumeration value=&quot;Unused&quot; /&gt;
                &lt;xs:enumeration value=&quot;DiscussionBoard&quot; /&gt;
                &lt;xs:enumeration value=&quot;Survey&quot; /&gt;
                &lt;xs:enumeration value=&quot;Issue&quot; /&gt;
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
<td align="left"><p>**UnspecifiedBaseType**</p></td>
<td align="left"><p>Indicates the type is unknown or unspecified.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**GenericList**</p></td>
<td align="left"><p>Indicates the type is a generic list. Most lists are of this type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DocumentLibrary**</p></td>
<td align="left"><p>Indicates the type is a document library.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Unused**</p></td>
<td align="left"><p>The type is unused.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DiscussionBoard**</p></td>
<td align="left"><p>Indicates the type is provided for backward compatibility with lists derived from the **DiscussionBoard</span> base type, but is no longer supported. The current version of SharePoint Foundation uses the <span class="keyword">GenericList** base type to support a discussion board template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Survey**</p></td>
<td align="left"><p>Indicates the type is a survey list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Issue**</p></td>
<td align="left"><p>Indicates the type is an issue-tracking list.</p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer" target="T:Microsoft.SharePoint.SPBaseType"><span
class="nolink">SPBaseType</span></span>

#### Concepts

[DeploymentManifest
Schema](deploymentmanifest-schema.md)</span>








