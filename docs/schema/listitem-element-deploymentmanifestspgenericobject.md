---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 79ab2638-2487-4b1d-99d5-cbc151d35785
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
<td align="left"># ListItem Element (DeploymentManifest - SPGenericObject)</td>
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

Represents an instance of a SharePoint list item (<span sdata="cer"
target="T:Microsoft.SharePoint.SPListItem"><span
class="nolink">SPListItem</span></span>) object.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element name=&quot;ListItem&quot; type=&quot;SPListItem&quot; /&gt;

USAGE
&lt;SPObject&gt;
        &lt;ListItem
                      Name=&quot;xs:string&quot;
                      DirName=&quot;xs:string&quot;
                      FileUrl=&quot;xs:string&quot;
                      Version=&quot;xs:string&quot;
                      Id=&quot;Guid&quot;
                      IntId=&quot;xs:int&quot;
                      DocId=&quot;Guid&quot;
                      Author=&quot;xs:string&quot;
                      ModifiedBy=&quot;xs:string&quot;
                      TimeCreated=&quot;xs:dateTime&quot;
                      TimeLastModified=&quot;xs:dateTime&quot;
                      ParentWebId=&quot;Guid&quot;
                      ParentListId=&quot;Guid&quot;
                      ParentFolderId=&quot;Guid&quot;
                      ModerationStatus=&quot;SPModerationStatusType&quot;
                      ModerationComment=&quot;xs:string&quot;
                      ContentTypeId=&quot;xs:string&quot;
                      ThreadIndex=&quot;xs:string&quot;
                      DocType=&quot;ListItemDocType&quot;
                      UserLoginName=&quot;xs:string&quot;
                      GroupName=&quot;xs:string&quot;
                      FailureMessage=&quot;xs:string&quot;
       &lt;Fields /&gt;
              &lt;Versions /&gt;
              &lt;Attachments /&gt;
              &lt;Links /&gt;
              &lt;EventReceivers /&gt;
        /&gt;
&lt;/SPObject</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span sdata="cer" target="T:Microsoft.SharePoint.SPListItem"><span
class="nolink">SPListItem</span></span>


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
<td align="left"><p>**Author**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. The user who created the list item.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ContentTypeId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.The content type associated with the item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DirName**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional; required by import.</p>
<p>Name of the directory in which the item is stored.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DocId**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional; required by import.</p>
<p>Unique identifier of the list item file.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DocType**</p></td>
<td align="left"><p><span sdata="link"><a href="listitemdoctype-simple-type-deploymentmanifest.htm">ListItemDocType Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Document type of the specified list item.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FailureMessage**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Message provided on export or import failure.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FileUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional; required by import.</p>
<p>URL to the document item file.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**GroupName**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Id**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional; required by import.</p>
<p>Integer value that identifies the list item.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IntId**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional; required by import.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ModerationComment**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Represents Content Approval comments about the list tiem.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ModerationStatus**</p></td>
<td align="left"><p><span sdata="link"><a href="spmoderationstatustype-simple-type-deploymentmanifest.htm">SPModerationStatusType Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Specifies the moderation status of the list item (Approved, Denied, Pending, Draft, Scheduled).</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ModifiedBy**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Name of the user who last modified the file.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional; required by import.</p>
<p>Name of the person who created the file.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ParentFolderId**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional; required by import.</p>
<p>Unique identifier of the list item's parent folder in the database.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ParentListId**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional; required by import.</p>
<p>Unique identifier of the list item's parent list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ParentWebId**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional; required by import.</p>
<p>Unique identifier of the list item's parent Web site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ThreadIndex**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TimeCreated**</p></td>
<td align="left"><p>xs:dateTime</p></td>
<td align="left"><p>Optional. Time and date that the file was created.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TimeLastModified**</p></td>
<td align="left"><p>xs:dateTime</p></td>
<td align="left"><p>Optional. Time and date that the file was last modified.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UserLoginName**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Version**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Represents the version of the list item.</p></td>
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
<td align="left"><p><span sdata="link"><a href="attachments-element-deploymentmanifest.htm">Attachments Element (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="eventreceivers-element-deploymentmanifestsplistitem.htm">EventReceivers Element (DeploymentManifest - SPListItem)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="fields-element-deploymentmanifestsplist.htm">Fields Element (DeploymentManifest - SPList)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="links-element-deploymentmanifestsplistitem.htm">Links Element (DeploymentManifest - SPListItem)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="versions-element-deploymentmanifestsplistitem.htm">Versions Element (DeploymentManifest - SPListItem)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="spobject-element-deploymentmanifest.htm">SPObject Element (DeploymentManifest)</a></span></p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer" target="T:Microsoft.SharePoint.SPListItem"><span
class="nolink">SPListItem</span></span>

#### Concepts

<span sdata="link">[DeploymentManifest
Schema](deploymentmanifest-schema.htm)</span>








