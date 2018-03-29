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
&lt;xs:element name=&quot;WebPart&quot; 
        type=&quot;SPWebPart&quot; 
        minOccurs=&quot;1&quot; maxOccurs=&quot;unbounded&quot; 
/&gt;

USAGE
&lt;SPWebPart&gt;
      &lt;xs:sequence&gt;
            &lt;xs:choice minOccurs=&quot;0&quot; maxOccurs=&quot;25&quot;&gt;
                  &lt;xs:element name=&quot;Script&quot; /&gt;
                  &lt;xs:element name=&quot;PagedRowset&quot; /&gt;
                  &lt;xs:element name=&quot;PagedClientCallbackRowset&quot; 
                  &lt;xs:element name=&quot;PagedRecurrenceRowset&quot; /&gt;
                  &lt;xs:element name=&quot;ViewFields&quot; type=&quot;SPFieldLinkCollection&quot; /&gt;
                  &lt;xs:element name=&quot;ViewData&quot; /&gt;
                  &lt;xs:element name=&quot;Query&quot; /&gt;
                  &lt;xs:element name=&quot;RowLimit&quot; /&gt;
                  &lt;xs:element name=&quot;RowLimitExceeded&quot; /&gt;
                  &lt;xs:element name=&quot;Toolbar&quot; /&gt;
                  &lt;xs:element name=&quot;Formats&quot; /&gt;
                  &lt;xs:element name=&quot;Aggregations&quot; /&gt;
                  &lt;xs:element name=&quot;ViewStyle&quot; 
                  &lt;xs:element name=&quot;ViewBody&quot; /&gt;
                  &lt;xs:element name=&quot;ViewEmpty&quot; /&gt;
                  &lt;xs:element name=&quot;ViewFooter&quot; /&gt;
                  &lt;xs:element name=&quot;ViewHeader&quot; /&gt;
                  &lt;xs:element name=&quot;ViewBidiHeader&quot;/&gt;
                  &lt;xs:element name=&quot;GroupByFooter&quot; 
                  &lt;xs:element name=&quot;GroupByHeader&quot; /&gt;
                  &lt;xs:element name=&quot;CalendarViewStyles&quot; /&gt;
                  &lt;xs:element name=&quot;ListFormBody&quot; /&gt;
            &lt;/xs:choice&gt;
      &lt;/xs:sequence&gt;

      &lt;xs:attribute name=&quot;Name&quot; /&gt;
      &lt;xs:attribute name=&quot;ListId /&gt;
      &lt;xs:attribute name=&quot;ListRootFolderUrl&quot; /&gt;
      &lt;xs:attribute name=&quot;Type&quot; /&gt;
      &lt;xs:attribute name=&quot;UserId&quot; /&gt;
      &lt;xs:attribute name=&quot;DisplayName&quot; /&gt;
      &lt;xs:attribute name=&quot;WebPartTypeId&quot; /&gt;
      &lt;xs:attribute name=&quot;Version&quot; /&gt;
      &lt;xs:attribute name=&quot;BaseViewID&quot; /&gt;
      &lt;xs:attribute name=&quot;WebPartZoneID&quot; /&gt;
      &lt;xs:attribute name=&quot;IsIncluded&quot; /&gt;
      &lt;xs:attribute name=&quot;WebPartOrder&quot; /&gt;
      &lt;xs:attribute name=&quot;FrameState&quot; /&gt;
      &lt;xs:attribute name=&quot;Source&quot; /&gt;
      &lt;xs:attribute name=&quot;AllUsersProperties&quot; /&gt;
      &lt;xs:attribute name=&quot;PerUserProperties&quot; /&gt;
      &lt;xs:attribute name=&quot;ContentTypeId&quot; /&gt;
            &lt;!-- For files (major [default] or minor) --&gt;
      &lt;xs:attribute name=&quot;Level&quot; /&gt;
            &lt;!-- Flags --&gt;
      &lt;xs:attribute name=&quot;Flags&quot; /&gt;
      &lt;xs:attribute name=&quot;Scope&quot; /&gt;
      &lt;xs:attribute name=&quot;Hidden&quot; /&gt;
      &lt;xs:attribute name=&quot;Threaded&quot; /&gt;
      &lt;xs:attribute name=&quot;ReadOnly&quot; /&gt;
      &lt;xs:attribute name=&quot;RecurrenceRowset&quot; /&gt;
      &lt;xs:attribute name=&quot;FPModified&quot; /&gt;
      &lt;xs:attribute name=&quot;ModerationType&quot; /&gt;
      &lt;xs:attribute name=&quot;Personal&quot; /&gt;
      &lt;xs:attribute name=&quot;OrderedView&quot; /&gt;
&lt;/WebPart&gt;</code></pre></td>
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
<td align="left"><p>Optional flag. Specifies whether the Web Part control is displayed on a Web page.The value is **true</span> if the control is hidden; the default is <span class="keyword">false**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsIncluded**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Level**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Indicates whether the specified file is of the &quot;major&quot; or &quot;minor&quot; level. The default value is &quot;major&quot;.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ListId**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
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
<td align="left"><p>Optional flag. Specifies whether contents of the Web Part are read only; **true</span> if read only, otherwise <span class="keyword">false**.</p></td>
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
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="script-element-deploymentmanifestspwebpart.htm">Script Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="pagedrowset-element-deploymentmanifestspwebpart.htm">PagedRowset Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="pagedclientcallbackrowset-element-deploymentmanifestspwebpart.htm">PagedClientCallbackRowset Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="pagedrecurrencerowset-element-deploymentmanifestspwebpart.htm">PagedRecurrenceRowset Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewfields-element-deploymentmanifestspwebpart.htm">ViewFields Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="viewdata-element-deploymentmanifestspwebpart.htm">ViewData Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="query-element-deploymentmanifestspwebpart.htm">Query Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="rowlimit-element-deploymentmanifestspwebpart.htm">RowLimit Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="rowlimitexceeded-element-deploymentmanifestspwebpart.htm">RowLimitExceeded Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="toolbar-element-deploymentmanifestspwebpart.htm">Toolbar Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="formats-element-deploymentmanifestspwebpart.htm">Formats Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="aggregations-element-deploymentmanifestspwebpart.htm">Aggregations Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewstyle-element-deploymentmanifestspwebpart.htm">ViewStyle Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="view-body-element-deploymentmanifestspwebpart.htm">View Body Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewempty-element-deploymentmanifestspwebpart.htm">ViewEmpty Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="viewfooter-element-deploymentmanifestspwebpart.htm">ViewFooter Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewheader-element-deploymentmanifestspwebpart.htm">ViewHeader Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="viewbidiheader-element-deploymentmanifestspwebpart.htm">ViewBidiHeader Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="groupbyfooter-element-deploymentmanifestspwebpart.htm">GroupByFooter Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="groupbyheader-deploymentmanifestspwebpart.htm">GroupByHeader (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="calendarviewstyles-element-deploymentmanifestspwebpart.htm">CalendarViewStyles Element (DeploymentManifest - SPWebPart)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="listformbody-element-deploymentmanifestspwebpart.htm">ListFormBody Element (DeploymentManifest - SPWebPart)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="webparts-element-deploymentmanifest.htm">WebParts Element (DeploymentManifest)</a></span></p></td>
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








