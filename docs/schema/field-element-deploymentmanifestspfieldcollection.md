---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 9ad6ac17-b255-4711-b2e1-a9cfeeea353f
---

# Field Element 

(DeploymentManifest - SPFieldCollection)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

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
<xs:element name="Field" 
        type="SPField" 
        minOccurs="0" maxOccurs="unbounded" 
/>

USAGE
<Fields>
        <Field
                ID="Guid"
                FieldId="Guid"
                Name="xs:string"
                Value="xs:string"
                DisplayName="xs:string"
                RowOrdinal="xs:int"
                RowOrdinal2="xs:int"
                Type="xs:string"
                ColName="xs:string"
                ColName2="xs:string"
                Title="xs:string"
                Description="xs:string"
                DefaultValue="xs:string"
                DefaultFormula="xs:string"
                FromBaseType="xs:string"
                Sealed="xs:string"
                CanToggleHidden="xs:string"
                DisplaySize="xs:string"
                Required="xs:string"
                ReadOnly="xs:string"
                Hidden="xs:string"
                Direction="xs:string"
                IMEMode="xs:string"
                SortableBySchema="xs:string"
                Sortable="xs:string"
                FilterableBySchema="xs:string"
                Filterable="xs:string"
                FilterableNoRecurrenceBySchema="xs:string"
                FilterableNoRecurrence="xs:string"
                Reorderable="xs:string"
                Format="xs:string"
                FillInChoice="xs:string"
                SchemaXml="xs:string"
        />
</Fields></code></pre></td>
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
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.md">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Unique identifier of the list template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FieldId**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.md">Guid Simple Type (DeploymentManifest)</a></span></p></td>
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
<td align="left"><p>Optional. Indicates the base type from which the field derives. Base types are defined in <a href="https://msdn.microsoft.com/en-us/library/ms469928(v=office.14).aspx">FldTypes.xml</a>.</p></td>
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
<td align="left"><p><span sdata="link"><a href="fields-element-deploymentmanifestsplist.md">Fields Element (DeploymentManifest - SPList)</a></span></p></td>
</tr>
</tbody>
</table>

<br/>

## See also

- [DeploymentManifest Schema](deploymentmanifest-schema.md)









