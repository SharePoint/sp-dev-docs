---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e0d2ac1f-b516-48f3-b291-ad32d1f2ab39
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
<td align="left"># SPDictionaryEntryValueType Simple Type (DeploymentManifest)</td>
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

Indicates the data type of the specified field value.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;xs:simpleType name=&quot;SPDictionaryEntryValueType&quot;&gt;
   &lt;xs:restriction base=&quot;xs:string&quot;&gt;
      &lt;xs:enumeration value=&quot;String&quot; /&gt;
      &lt;xs:enumeration value=&quot;Integer&quot; /&gt;
      &lt;xs:enumeration value=&quot;Time&quot; /&gt;
      &lt;xs:enumeration value=&quot;StringVector&quot; /&gt;
      &lt;xs:enumeration value=&quot;Boolean&quot; /&gt;
      &lt;xs:enumeration value=&quot;FileSystemTime&quot; /&gt;
      &lt;xs:enumeration value=&quot;IntVector&quot; /&gt;
      &lt;xs:enumeration value=&quot;Double&quot; /&gt;
      &lt;xs:enumeration value=&quot;LongText&quot; /&gt;
      &lt;xs:enumeration value=&quot;Empty&quot; /&gt;
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
<td align="left"><p>**String**</p></td>
<td align="left"><p>**String** data type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Integer**</p></td>
<td align="left"><p>**Integer** data type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Time**</p></td>
<td align="left"><p>Date/time data type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**StringVector**</p></td>
<td align="left"><p>Treats as a **String** data type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Boolean**</p></td>
<td align="left"><p>**Boolean** data type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FileSystemTime**</p></td>
<td align="left"><p>Treats as a date/time data type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IntVector**</p></td>
<td align="left"><p>Treats as an **Integer** data type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Double**</p></td>
<td align="left"><p>Treats as a **Double** data type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**LongText**</p></td>
<td align="left"><p>Treats as a **String** data type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Empty**</p></td>
<td align="left"><p>No value.</p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer"
target="T:Microsoft.SharePoint.Deployment.MetaInfoValueType"><span
class="nolink">MetaInfoValueType</span></span>

#### Concepts

[DeploymentManifest
Schema](deploymentmanifest-schema.md)</span>








