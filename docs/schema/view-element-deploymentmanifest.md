---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c7ab084e-e946-45a0-9dc8-ac68eba4e557
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
<td align="left"># View Element (DeploymentManifest)</td>
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

Represents an instance of a Windows SharePoint Services 3.0 view (<span
sdata="cer" target="T:Microsoft.SharePoint.SPView"><span
class="nolink">SPView</span></span>) object.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
<xs:element name="View" type="SPView" minOccurs="0" maxOccurs="unbounded" />

USAGE
<Views>
        <View>
        <xs:choice minOccurs="0" maxOccurs="25">
                <xs:element name="Script" />
                <xs:element name="PagedRowset" />
                <xs:element name="PagedClientCallbackRowset" />
                <xs:element name="PagedRecurrenceRowset" />
                <xs:element name="ViewFields" />
                <xs:element name="ViewData" />
                <xs:element name="Query" />
                <xs:element name="RowLimit" />
                <xs:element name="RowLimitExceeded" />
                <xs:element name="Toolbar" />
                <xs:element name="Formats" />
                <xs:element name="Aggregations" />
                <xs:element name="ViewStyle" />
                <xs:element name="ViewBody" />
                <xs:element name="ViewEmpty" />
                <xs:element name="ViewFooter" />
                <xs:element name="ViewHeader" />
                <xs:element name="ViewBidiHeader" />
                <xs:element name="GroupByFooter" />
                <xs:element name="GroupByHeader" />
                <xs:element name="CalendarViewStyles" />
                <xs:element name="ListFormBody" />
        </xs:choice>
        <xs:attribute name="Name" />
        <xs:attribute name="DefaultView" />
        <xs:attribute name="Type" />
        <xs:attribute name="Hidden" />
        <xs:attribute name="Threaded" />
        <xs:attribute name="FPModified" />
        <xs:attribute name="ReadOnly" />
        <xs:attribute name="Scope" />
        <xs:attribute name="RecurrenceRowset" />
        <xs:attribute name="ModerationType" />
        <xs:attribute name="Personal" />
        <xs:attribute name="OrderedView" />
        <xs:attribute name="DisplayName" />
        <xs:attribute name="ContentTypeId" />
        <xs:attribute name="Url" />
        <xs:attribute name="BaseViewID" />
        <xs:attribute name="WebPartZoneID" />
        </View>
</Views></code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span sdata="cer" target="T:Microsoft.SharePoint.SPView"><span
class="nolink">SPView</span></span> object.


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
<td align="left"><p>**BaseViewID**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Represents the ID of the base view for the view.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ContentTypeId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Represents the ID of a content type that is associated with the view.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DefaultView**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the view is the default view.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Represents the display name of the view.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FPModified**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the view was modified in an HTML editor.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the view is hidden.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ModerationType**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.Represents the Content Approval type for the view.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.md">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Unique identifier of the view.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**OrderedView**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the user can reorder items through the user interface.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Personal**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the view is personalized.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ReadOnly**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the view is read-only.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RecurrenceRowset**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the view supports recurrence rowsets.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Scope**</p></td>
<td align="left"><p><span sdata="link"><a href="spviewscope-simple-type-deploymentmanifest.md">SPViewScope Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Sets the recursive scope for the view of a document library.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Threaded**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the view is threaded.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Represetns the type of the view.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Url**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Represents the site-relative URL of the page that contains the view.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**WebPartZoneID**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Identifier of the Web Part zone in which the view is sited.</p></td>
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
<td align="left"><p><span sdata="link"><a href="script-element-deploymentmanifestspview.md">Script Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="pagedrowset-element-deploymentmanifestspview.md">PagedRowset Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="pagedclientcallbackrowset-element-deploymentmanifestspview.md">PagedClientCallbackRowset Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="pagedrecurrencerowset-element-deploymentmanifestspview.md">PagedRecurrenceRowset Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewfields-element-deploymentmanifestspview.md">ViewFields Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="viewdata-element-deploymentmanifestspview.md">ViewData Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="query-element-deploymentmanifestspview.md">Query Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="rowlimit-element-deploymentmanifestspview.md">RowLimit Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="rowlimitexceeded-element-deploymentmanifestspview.md">RowLimitExceeded Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="toolbar-element-deploymentmanifestspview.md">Toolbar Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="formats-element-deploymentmanifestspview.md">Formats Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="aggregations-element-deployment-manifestspview.md">Aggregations Element (Deployment Manifest - SPView)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewstyle-element-deploymentmanifestspview.md">ViewStyle Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="view-body-element-deploymentmanifestspview.md">View Body Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewempty-element-deploymentmanifestspview.md">ViewEmpty Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="viewfooter-element-deploymentmanifestspview.md">ViewFooter Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewheader-element-deploymentmanifestspview.md">ViewHeader Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="viewbidiheader-element-deploymentmanifestspview.md">ViewBidiHeader Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="groupbyfooter-element-deploymentmanifestspview.md">GroupByFooter Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="groupbyheader-deploymentmanifestspview.md">GroupByHeader (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="calendarviewstyles-element-deploymentmanifestspview.md">CalendarViewStyles Element (DeploymentManifest - SPView)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="listformbody-element-deploymentmanifestspview.md">ListFormBody Element (DeploymentManifest - SPView)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="views-element-deploymentmanifest.md">Views Element (DeploymentManifest)</a></span></p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer" target="T:Microsoft.SharePoint.SPView"><span
class="nolink">SPView</span></span>

#### Concepts

[DeploymentManifest
Schema](deploymentmanifest-schema.md)</span>








