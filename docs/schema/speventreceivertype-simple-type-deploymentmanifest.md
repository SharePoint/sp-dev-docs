---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 7a666a1a-62fb-4371-aa88-a89018982fee
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
<td align="left"># SPEventReceiverType Simple Type (DeploymentManifest)</td>
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

Specifies the available event receivers.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;xs:simpleType name=&quot;SPEventReceiverType&quot; &gt;
        &lt;xs:restriction base=&quot;xs:string&quot;&gt;
            &lt;xs:enumeration value=&quot;ItemAdding&quot; /&gt;
            &lt;xs:enumeration value=&quot;ItemUpdating&quot; /&gt;
            &lt;xs:enumeration value=&quot;ItemDeleting&quot; /&gt;
            &lt;xs:enumeration value=&quot;ItemCheckingIn&quot; /&gt;
            &lt;xs:enumeration value=&quot;ItemCheckingOut&quot; /&gt;
            &lt;xs:enumeration value=&quot;ItemUncheckingOut&quot; /&gt;
            &lt;xs:enumeration value=&quot;ItemAttachmentAdding&quot; /&gt;
            &lt;xs:enumeration value=&quot;ItemAttachmentDeleting&quot; /&gt;
            &lt;xs:enumeration value=&quot;ItemFileMoving&quot; /&gt;
            &lt;xs:enumeration value=&quot;FieldAdding&quot; /&gt;
            &lt;xs:enumeration value=&quot;FieldUpdating&quot; /&gt;
            &lt;xs:enumeration value=&quot;FieldDeleting&quot; /&gt;
            &lt;xs:enumeration value=&quot;SiteDeleting&quot; /&gt;
            &lt;xs:enumeration value=&quot;WebDeleting&quot; /&gt;
            &lt;xs:enumeration value=&quot;WebMoving&quot; /&gt;
            &lt;xs:enumeration value=&quot;ItemAdded&quot; /&gt;
            &lt;xs:enumeration value=&quot;ItemUpdated&quot; /&gt;
            &lt;xs:enumeration value=&quot;ItemDeleted&quot; /&gt;
            &lt;xs:enumeration value=&quot;ItemCheckedIn&quot; /&gt;
            &lt;xs:enumeration value=&quot;ItemCheckedOut&quot; /&gt;
            &lt;xs:enumeration value=&quot;ItemUncheckedOut&quot; /&gt;
            &lt;xs:enumeration value=&quot;ItemAttachmentAdded&quot; /&gt;
            &lt;xs:enumeration value=&quot;ItemAttachmentDeleted&quot; /&gt;
            &lt;xs:enumeration value=&quot;ItemFileMoved&quot; /&gt;
            &lt;xs:enumeration value=&quot;ItemFileTransformed&quot; /&gt;
            &lt;xs:enumeration value=&quot;FieldAdded&quot; /&gt;
            &lt;xs:enumeration value=&quot;FieldUpdated&quot; /&gt;
            &lt;xs:enumeration value=&quot;FieldDeleted&quot; /&gt;
            &lt;xs:enumeration value=&quot;SiteDeleted&quot; /&gt;
            &lt;xs:enumeration value=&quot;WebDeleted&quot; /&gt;
            &lt;xs:enumeration value=&quot;WebMoved&quot; /&gt;
            &lt;xs:enumeration value=&quot;EmailReceived&quot; /&gt;
            &lt;xs:enumeration value=&quot;ContextEvent&quot; /&gt;
            &lt;xs:enumeration value=&quot;InvalidReceiver&quot; /&gt;
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
<td align="left"><p>ContextEvent</p></td>
<td align="left"><p>Indicates a list received a context event.</p></td>
</tr>
<tr class="even">
<td align="left"><p>EmailReceived</p></td>
<td align="left"><p>Indicates a list received an email message.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>FieldAdded</p></td>
<td align="left"><p>Indicates a field was added.</p></td>
</tr>
<tr class="even">
<td align="left"><p>FieldAdding</p></td>
<td align="left"><p>Indicates a field is being added.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>FieldDeleted</p></td>
<td align="left"><p>Indicates a field was removed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>FieldDeleting</p></td>
<td align="left"><p>Indicates a field is being removed.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>FieldUpdated</p></td>
<td align="left"><p>Indicates a field was updated.</p></td>
</tr>
<tr class="even">
<td align="left"><p>FieldUpdating</p></td>
<td align="left"><p>Indicates a field is being updated.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>InvalidReceiver</p></td>
<td align="left"><p>Indicates the event receiver is not valid.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ItemAdded</p></td>
<td align="left"><p>Indicates an item was added.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ItemAdding</p></td>
<td align="left"><p>Indicates an item is being added.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ItemAttachmentAdded</p></td>
<td align="left"><p>Indicates an attachment was added to the item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ItemAttachmentAdding</p></td>
<td align="left"><p>Indicates an attachment is being added to the item.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ItemAttachmentDeleted</p></td>
<td align="left"><p>Indicates an attachment was removed from the item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ItemAttachmentDeleting</p></td>
<td align="left"><p>Indicates an attachment is being removed from the item.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ItemCheckedIn</p></td>
<td align="left"><p>Indicates an item was checked in.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ItemCheckedOut</p></td>
<td align="left"><p>Indicates an item was checked out.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ItemCheckingIn</p></td>
<td align="left"><p>Indicates an item is being checked in.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ItemCheckingOut</p></td>
<td align="left"><p>Indicates an item is being checked out.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ItemDeleted</p></td>
<td align="left"><p>Indicates an item was deleted</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ItemDeleting</p></td>
<td align="left"><p>Indicates an item is being deleted.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ItemFileMoved</p></td>
<td align="left"><p>Indicates a file was moved.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ItemFileMoving</p></td>
<td align="left"><p>Indicates a file is being moved.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ItemFileTransformed</p></td>
<td align="left"><p>Indicates a file was converted.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ItemUncheckedOut</p></td>
<td align="left"><p>Indicates an item is not checked out.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ItemUncheckingOut</p></td>
<td align="left"><p>Indicates that Undo Checkout is occuring on an item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ItemUpdated</p></td>
<td align="left"><p>Indicates an item was updated.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ItemUpdating</p></td>
<td align="left"><p>Indicates an item is being updated.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SiteDeleted</p></td>
<td align="left"><p>Indicates a site collection was deleted.</p></td>
</tr>
<tr class="even">
<td align="left"><p>SiteDeleting</p></td>
<td align="left"><p>Indicates a site collection is being deleted.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>WebDeleted</p></td>
<td align="left"><p>Indicates a site was deleted.</p></td>
</tr>
<tr class="even">
<td align="left"><p>WebDeleting</p></td>
<td align="left"><p>Indicates a site is being deleted.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>WebMoved</p></td>
<td align="left"><p>Indicates a site was moved.</p></td>
</tr>
<tr class="even">
<td align="left"><p>WebMoving</p></td>
<td align="left"><p>Indicates a site is being moved.</p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer"
target="T:Microsoft.SharePoint.SPEventReceiverType"><span
class="nolink">SPEventReceiverType</span></span>

#### Concepts

<span sdata="link">[DeploymentManifest
Schema](deploymentmanifest-schema.htm)</span>








