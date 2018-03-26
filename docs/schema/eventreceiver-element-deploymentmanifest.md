---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f7dc71ad-48b8-4df9-aa93-46440207375a
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
<td align="left"># EventReceiver Element (DeploymentManifest)</td>
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

Represents a SharePoint event receiver object instance (<span
sdata="cer"
target="T:Microsoft.SharePoint.SPEventReceiverDefinition"><span
class="nolink">SPEventReceiverDefinition</span></span>). Depending on
the event receiver collection specified, the event receiver can listen
for events on <span sdata="cer"
target="T:Microsoft.SharePoint.SPFile"><span
class="nolink">SPFile</span></span>, <span sdata="cer"
target="T:Microsoft.SharePoint.SPList"><span
class="nolink">SPList</span></span>, <span sdata="cer"
target="T:Microsoft.SharePoint.SPListItem"><span
class="nolink">SPListItem</span></span>, or <span sdata="cer"
target="T:Microsoft.SharePoint.SPWeb"><span
class="nolink">SPWeb</span></span> objects.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element name=&quot;EventReceiver&quot; 
        type=&quot;SPEventReceiverDefinition&quot; 
        minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; 
/&gt;

USAGE
&lt;EventReceivers&gt;
        &lt;EventReceiver
                Id=&quot;Guid&quot;
                Name=&quot;xs:string&quot;
                WebId=&quot;Guid&quot;
                HostId=&quot;Guid&quot;
                HostType=&quot;SPEventHostType&quot;
                Type=&quot;SPEventReceiverType&quot;
                SequenceNumber=&quot;xs:int&quot;
                Assembly=&quot;xs:string&quot;
                Class=&quot;xs:string&quot;
                Data=&quot;xs:string&quot;
                Filter=&quot;xs:string&quot;
                Credential=&quot;xs:int&quot;
                ItemId=&quot;xs:int&quot;
        /&gt;
&lt;/EventReceivers&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span sdata="cer"
target="T:Microsoft.SharePoint.SPEventReceiverDefinition"><span
class="nolink">SPEventReceiverDefinition</span></span>


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
<td align="left"><p>ID</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Required. Unique identifier of the event receiver definition.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Name</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Name of the event receiver.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>WebId</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Required. Unique identifier of the site in which the event receiver is registered.</p></td>
</tr>
<tr class="even">
<td align="left"><p>HostId</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Required. Unique identifier of the object that is hosting the event.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>HostType</p></td>
<td align="left"><p><span sdata="link"><a href="speventhosttype-simple-type-deploymentmanifest.htm">SPEventHostType Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Required. Type of object that is hosting the event. The host type must be an enumeration value defined in the **SPEventHostType**simple type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Type</p></td>
<td align="left"><p><span sdata="link"><a href="speventreceivertype-simple-type-deploymentmanifest.htm">SPEventReceiverType Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Required. Type of event for the event receiver. The event receiver type must be an enumeration value defined in the **SPEventReceiverType** simple type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SequenceNumber</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Required. Integer representing the relative order in a sequence of events.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Assembly</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Strong name representing the assembly that is the event receiver.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Class</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. The class that is the event receiver.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Data</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Data that is associated with the event receiver.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Filter</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Credential</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ItemId</p></td>
<td align="left"><p>xs:int</p></td>
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
<td align="left"><p><span sdata="link"><a href="eventreceivers-element-deploymentmanifestspfile.htm">EventReceivers Element (DeploymentManifest - SPFile)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="eventreceivers-element-deploymentmanifestsplist.htm">EventReceivers Element (DeploymentManifest - SPList)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="eventreceivers-element-deploymentmanifestsplistitem.htm">EventReceivers Element (DeploymentManifest - SPListItem)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="eventreceivers-element-deploymentmanifestspweb.htm">EventReceivers Element (DeploymentManifest - SPWeb)</a></span></p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer"
target="T:Microsoft.SharePoint.SPEventReceiverDefinition"><span
class="nolink">SPEventReceiverDefinition</span></span>

#### Concepts

<span sdata="link">[DeploymentManifest
Schema](deploymentmanifest-schema.htm)</span>








