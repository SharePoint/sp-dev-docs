---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e513a1ac-6367-452f-b039-b1d404e6573e
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
<td align="left"># EventReceivers Element (DeploymentManifest - SPWeb)</td>
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

Represents a SharePoint event receiver object container, or collection
(<span sdata="cer"
target="T:Microsoft.SharePoint.SPEventReceiverDefinitionCollection"><span
class="nolink">SPEventReceiverDefinitionCollection</span></span>), for
implementing event handling on SharePoint Web (<span sdata="cer"
target="T:Microsoft.SharePoint.SPWeb"><span
class="nolink">SPWeb</span></span>) objects.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element name=&quot;EventReceivers&quot; 
        type=&quot;SPEventReceiverDefinitionCollection&quot; 
        minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; 
/&gt;

USAGE
&lt;Web&gt;
        &lt;EventReceivers&gt;
                &lt;EventReceiver /&gt;
        &lt;/EventReceivers&gt;
&lt;/Web&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span sdata="cer"
target="T:Microsoft.SharePoint.SPEventReceiverDefinitionCollection"><span
class="nolink">SPEventReceiverDefinitionCollection</span></span>


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
<td align="left"><p>None</p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
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
<td align="left"><p><span sdata="link"><a href="eventreceiver-element-deploymentmanifest.htm">EventReceiver Element (DeploymentManifest)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="web-element-deploymentmanifest.htm">Web Element (DeploymentManifest)</a></span></p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This element is one of four EventReceivers elements; each derives from a
different element hierarchy, as follows:

-   [EventReceivers Element (DeploymentManifest -
    SPFile)](eventreceivers-element-deploymentmanifestspfile.md)</span>

-   [EventReceivers Element (DeploymentManifest -
    SPList)](eventreceivers-element-deploymentmanifestsplist.md)</span>

-   [EventReceivers Element (DeploymentManifest -
    SPListItem)](eventreceivers-element-deploymentmanifestsplistitem.md)</span>

-   [EventReceivers Element (DeploymentManifest -
    SPWeb)](eventreceivers-element-deploymentmanifestspweb.md)</span>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer"
target="T:Microsoft.SharePoint.SPEventReceiverDefinitionCollection"><span
class="nolink">SPEventReceiverDefinitionCollection</span></span>

#### Concepts

[DeploymentManifest
Schema](deploymentmanifest-schema.md)</span>








