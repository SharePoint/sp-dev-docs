---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 9ad6ac17-b255-4711-b2e1-a9cfeeea353f
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
<td align="left"># Field Element (DeploymentManifest - SPFieldCollection)</td>
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

Represents an instance of a Windows SharePoint Services 3.0 Field object
(<span sdata="cer" target="T:Microsoft.SharePoint.SPField"><span
class="nolink">SPField</span></span>) for the specified field
collection.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element name=&quot;Field&quot; 
        type=&quot;SPField&quot; 
        minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; 
/&gt;

USAGE
&lt;Fields&gt;
        &lt;Field
                ID=&quot;Guid&quot;
                FieldId=&quot;Guid&quot;
                Name=&quot;xs:string&quot;
                Value=&quot;xs:string&quot;
                DisplayName=&quot;xs:string&quot;
                RowOrdinal=&quot;xs:int&quot;
                RowOrdinal2=&quot;xs:int&quot;
                Type=&quot;xs:string&quot;
                ColName=&quot;xs:string&quot;
                ColName2=&quot;xs:string&quot;
                Title=&quot;xs:string&quot;
                Description=&quot;xs:string&quot;
                DefaultValue=&quot;xs:string&quot;
                DefaultFormula=&quot;xs:string&quot;
                FromBaseType=&quot;xs:string&quot;
                Sealed=&quot;xs:string&quot;
                CanToggleHidden=&quot;xs:string&quot;
                DisplaySize=&quot;xs:string&quot;
                Required=&quot;xs:string&quot;
                ReadOnly=&quot;xs:string&quot;
                Hidden=&quot;xs:string&quot;
                Direction=&quot;xs:string&quot;
                IMEMode=&quot;xs:string&quot;
                SortableBySchema=&quot;xs:string&quot;
                Sortable=&quot;xs:string&quot;
                FilterableBySchema=&quot;xs:string&quot;
                Filterable=&quot;xs:string&quot;
                FilterableNoRecurrenceBySchema=&quot;xs:string&quot;
                FilterableNoRecurrence=&quot;xs:string&quot;
                Reorderable=&quot;xs:string&quot;
                Format=&quot;xs:string&quot;
                FillInChoice=&quot;xs:string&quot;
                SchemaXml=&quot;xs:string&quot;
        /&gt;
&lt;/Fields&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span sdata="cer" target="T:Microsoft.SharePoint.SPField"><span
class="nolink">SPField</span></span>


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
<td align="left"><p>**Id**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Unique identifier of the list template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FieldId**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Unique identifier of the field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Name of the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Value**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Represents the field value.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Display name for the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RowOrdinal**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RowOrdinal2**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Type of the field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ColName**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Display name of the column representing the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ColName2**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Provides a description of the field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DefaultValue**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Default value associated with the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DefaultFormula**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Default formula applied to values in the field, in cases where the field is a calculated field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FromBaseType**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Indicates the base type from which the field derives. Base types are defined in <a href="http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6(Office.15).aspx">FldTypes.xml</a>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Sealed**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Indicates whether other fields can be derived from the field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CanToggleHidden**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Indicates whether the field column can be hidden in the user interface.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplaySize**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the display size for the field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Required**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies whether the field requires a value (that is, cannot be null).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ReadOnly**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies whether the field value is read-only (cannot be modified).</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies whether the field is displayed in the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Direction**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the direction of the reading order for the field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IMEMode**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the Input Method Editor (IME) mode bias to use for the field. The IME allows for conversion of keystrokes between languages when one writing system has more characters than can be encoded for the keyboard.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SortableBySchema**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies whether the field can be sorted with respect to the schema definition.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Sortable**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies whether the field can be sorted on field values.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FilterableBySchema**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies whether the field can be filtered with respect to the schema definition.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Filterable**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies whether the field can be filtered on field values.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FilterableNoRecurrenceBySchema**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies whether the field can be filtered with respect to the schema definition file, but in such a way that the view does not expand recurring events.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FilterableNoRecurrence**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies whether a filter can be created on a field in a view that does not expand recurring events. For more information, see <span sdata="cer" target="P:Microsoft.SharePoint.SPField.FilterableNoRecurrence"><span class="nolink">FilterableNoRecurrence</span></span>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Reorderable**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies whether values in the field can be reordered.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Format**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FillInChoice**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SchemaXml**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the XML schema that defines the field.</p></td>
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
<td align="left"><p><span sdata="link"><a href="fields-element-deploymentmanifestsplist.htm">Fields Element (DeploymentManifest - SPList)</a></span></p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer" target="T:Microsoft.SharePoint.SPField"><span
class="nolink">SPField</span></span>

#### Concepts

[DeploymentManifest
Schema](deploymentmanifest-schema.md)</span>

#### Other resources

[FldTypes.xml](http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6(Office.15).aspx)








