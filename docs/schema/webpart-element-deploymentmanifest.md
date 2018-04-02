---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 3375a67e-a346-4818-93bf-cb2c127aeaa2
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
<td align="left"># WebPart Element (DeploymentManifest)</td>
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

Represents an instance of a SharePoint Foundation top-level Web Part
object (**SPWebPart**).

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
<xs:element name="WebPart" 
        type="SPWebPart" 
        minOccurs="1" maxOccurs="unbounded" 
/>

USAGE
<SPWebPart>
      <xs:sequence>
            <xs:choice minOccurs="0" maxOccurs="25">
                  <xs:element name="Script" />
                  <xs:element name="PagedRowset" />
                  <xs:element name="PagedClientCallbackRowset" 
                  <xs:element name="PagedRecurrenceRowset" />
                  <xs:element name="ViewFields" type="SPFieldLinkCollection" />
                  <xs:element name="ViewData" />
                  <xs:element name="Query" />
                  <xs:element name="RowLimit" />
                  <xs:element name="RowLimitExceeded" />
                  <xs:element name="Toolbar" />
                  <xs:element name="Formats" />
                  <xs:element name="Aggregations" />
                  <xs:element name="ViewStyle" 
                  <xs:element name="ViewBody" />
                  <xs:element name="ViewEmpty" />
                  <xs:element name="ViewFooter" />
                  <xs:element name="ViewHeader" />
                  <xs:element name="ViewBidiHeader"/>
                  <xs:element name="GroupByFooter" 
                  <xs:element name="GroupByHeader" />
                  <xs:element name="CalendarViewStyles" />
                  <xs:element name="ListFormBody" />
            </xs:choice>
      </xs:sequence>

      <xs:attribute name="Name" />
      <xs:attribute name="ListId />
      <xs:attribute name="ListRootFolderUrl" />
      <xs:attribute name="Type" />
      <xs:attribute name="UserId" />
      <xs:attribute name="DisplayName" />
      <xs:attribute name="WebPartTypeId" />
      <xs:attribute name="Version" />
      <xs:attribute name="BaseViewID" />
      <xs:attribute name="WebPartZoneID" />
      <xs:attribute name="IsIncluded" />
      <xs:attribute name="WebPartOrder" />
      <xs:attribute name="FrameState" />
      <xs:attribute name="Source" />
      <xs:attribute name="AllUsersProperties" />
      <xs:attribute name="PerUserProperties" />
      <xs:attribute name="ContentTypeId" />
            <!-- For files (major [default] or minor) -->
      <xs:attribute name="Level" />
            <!-- Flags -->
      <xs:attribute name="Flags" />
      <xs:attribute name="Scope" />
      <xs:attribute name="Hidden" />
      <xs:attribute name="Threaded" />
      <xs:attribute name="ReadOnly" />
      <xs:attribute name="RecurrenceRowset" />
      <xs:attribute name="FPModified" />
      <xs:attribute name="ModerationType" />
      <xs:attribute name="Personal" />
      <xs:attribute name="OrderedView" />
</WebPart></code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span sdata="cer"
target="T:Microsoft.SharePoint.WebPartPages.WebPart"><span
class="nolink">WebPart</span></span>


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
<td align="left"><p>**AllUsersProperties**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>This value is generated by the Web Part and should not be changed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**BaseViewID**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ContentTypeId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Specifies the content type by identifier.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>A representation of the Web Part name as it is displayed in the title bar of the Web Part.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Flags**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional flag.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FPModified**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional flag.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FrameState**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the initial state of the Web Part frame; the frame can be normal (expanded) or minimized.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional flag. Specifies whether the Web Part control is displayed on a Web page.The value is **true</span> if the control is hidden; the default is **false**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsIncluded**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Level**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Indicates whether the specified file is of the "major" or "minor" level. The default value is "major".</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ListId**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.md">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Unique identifier of the Web Part list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ListRootFolderUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. The URL to the root folder that contains the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ModerationType**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional flag.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.md">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Required. Unique identifier of the Web Part.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**OrderedView**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional flag.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Personal**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional flag.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PerUserProperties**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>This value is generated by the Web Parts on a per-user basis and should not be changed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ReadOnly**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional flag. Specifies whether contents of the Web Part are read only; **true</span> if read only, otherwise **false**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RecurrenceRowset**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional flag.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Scope**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional flag.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Source**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Threaded**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional flag.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the type of the Web Part.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**UserId**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.md">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Version**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the version of the Web Part.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WebPartOrder**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the ordering of contents in the Web Part.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**WebPartTypeId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the identifier of the Web Part type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WebPartZoneID**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the identifier of the Web Part zone.</p></td>
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
<td align="left"><p><span sdata="link"><a href="script-element-deploymentmanifestspwebpart.md">Script Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="pagedrowset-element-deploymentmanifestspwebpart.md">PagedRowset Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="pagedclientcallbackrowset-element-deploymentmanifestspwebpart.md">PagedClientCallbackRowset Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="pagedrecurrencerowset-element-deploymentmanifestspwebpart.md">PagedRecurrenceRowset Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewfields-element-deploymentmanifestspwebpart.md">ViewFields Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="viewdata-element-deploymentmanifestspwebpart.md">ViewData Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="query-element-deploymentmanifestspwebpart.md">Query Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="rowlimit-element-deploymentmanifestspwebpart.md">RowLimit Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="rowlimitexceeded-element-deploymentmanifestspwebpart.md">RowLimitExceeded Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="toolbar-element-deploymentmanifestspwebpart.md">Toolbar Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="formats-element-deploymentmanifestspwebpart.md">Formats Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="aggregations-element-deploymentmanifestspwebpart.md">Aggregations Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewstyle-element-deploymentmanifestspwebpart.md">ViewStyle Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="view-body-element-deploymentmanifestspwebpart.md">View Body Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewempty-element-deploymentmanifestspwebpart.md">ViewEmpty Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="viewfooter-element-deploymentmanifestspwebpart.md">ViewFooter Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewheader-element-deploymentmanifestspwebpart.md">ViewHeader Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="viewbidiheader-element-deploymentmanifestspwebpart.md">ViewBidiHeader Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="groupbyfooter-element-deploymentmanifestspwebpart.md">GroupByFooter Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="groupbyheader-deploymentmanifestspwebpart.md">GroupByHeader (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="calendarviewstyles-element-deploymentmanifestspwebpart.md">CalendarViewStyles Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="listformbody-element-deploymentmanifestspwebpart.md">ListFormBody Element (DeploymentManifest - SPWebPart)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="webparts-element-deploymentmanifest.md">WebParts Element (DeploymentManifest)</a></span></p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Web Parts can derive from either of two base classes - an ASP.NET Web
Part (<span sdata="cer"
target="T:System.Web.UI.WebControls.WebParts.WebPart">[WebPart](http://msdn2.microsoft.com/EN-US/library/h0t1fxe7)</span>),
or a SharePoint Foundation Web Part (<span sdata="cer"
target="T:Microsoft.SharePoint.WebPartPages.WebPart"><span
class="nolink">WebPart</span></span>).


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer"
target="T:Microsoft.SharePoint.WebPartPages.WebPart"><span
class="nolink">WebPart</span></span>

<span sdata="cer"
target="T:System.Web.UI.WebControls.WebParts.WebPart">[WebPart](http://msdn2.microsoft.com/EN-US/library/h0t1fxe7)</span>

#### Concepts

[DeploymentManifest
Schema](deploymentmanifest-schema.md)</span>








