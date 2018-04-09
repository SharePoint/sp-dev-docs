---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- List schema
api_type:
- schema
ms.assetid: 2d8b69c1-0e47-4f76-bb95-8d8a43fd6cfd
---

# Field Element (List)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Defines the internal data types used in the list infrastructure of a SharePoint website. A field is a column or attribute of information that a user can add to a list.

```
<Field
  Aggregation = "sum" | "count" | "average" | "min" | "max" | "merge" | "plaintext" | "first" | "last"
  AllowDeletion = "TRUE" | "FALSE"
  AllowHyperlink = "TRUE" | "FALSE"
  AllowMultiVote = "TRUE" | "FALSE"
  AppendOnly = "TRUE" | "FALSE"
  AuthoringInfo = "Text"
  BaseType = "Integer" | "Text"
  CalType = "Integer"
  CanToggleHidden = "TRUE" | "FALSE"
  ClassInfo = "Text"
  ColName = "Text"  ColName2 = "Text"
  Commas = "TRUE" | "FALSE"  Customization = "Text"
  Decimals = "Integer"
  Description = "Text"
  Dir = "Text"  Direction = "Text"
  DisplaceOnUpgrade = "TRUE" | "FALSE"
  DisplayImage = "Text"
  DisplayName = "Text"
  DisplayNameSrcField = "Text"  DisplaySize = "Integer"
  Div = "Number"
  EnableLookup = "TRUE" | "FALSE"  EnforceUniqueValues = "TRUE" | "FALSE"
  ExceptionImage = "Text"
  FieldRef = "Text"
  FillInChoice = "TRUE" | "FALSE"
  Filterable = "TRUE" | "FALSE"
  FilterableNoRecurrence = "TRUE" | "FALSE"
  ForcedDisplay = "Text"  ForcePromoteDemote = "TRUE" | "FALSE"
  Format = "Text"
  FromBaseType = "TRUE" | "FALSE"
  Group = "Text"
  HeaderImage = "Text"
  Height = "Integer"
  Hidden = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  ID = "Text"  Id = "Text"
  IMEMode = "inactive"
  Indexed = "TRUE" | "FALSE"
  IsolateStyles = "TRUE" | "FALSE"  IsRelationship = "TRUE" | "FALSE"
  JoinColName = "Text"
  JoinRowOrdinal = "Integer"
  JoinType = "INNER" | "LEFT OUTER" | "RIGHT OUTER"
  LCID = "Integer"  LinkToItem = "TRUE" | "FALSE"  LinkToItemAllowed = "Text"
  List = "Text"  ListItemMenu = "TRUE" | "FALSE"  ListItemMenuAllowed = "Text
  Max = "Number"
  MaxLength = "Integer"
  Min = "Number" 
  Mult = "TRUE" | "FALSE"
  Name = "Text"
  NegativeFormat = "MinusSign" | "Parens"
  Node = "Text"
  NoEditFormBreak = "TRUE" | "FALSE"
  NumLines = "Integer"
  Percentage = "TRUE" | "FALSE"
  PIAttribute = "Text"
  PITarget = "Text"
  PrependId = "TRUE" | "FALSE"
  Presence = "TRUE" | "FALSE"
  PrimaryKey = "TRUE" | "FALSE"
  PrimaryPIAttribute = "Text"
  PrimaryPITarget = "Text"
  ReadOnly = "TRUE" | "FALSE"
  ReadOnlyEnforced = "TRUE" | "FALSE"  RelationshipDeleteBehavior = "Text"
  RenderXMLUsingPattern = "TRUE" | "FALSE"
  Required = "TRUE" | "FALSE"
  RestrictedMode = "TRUE" | "FALSE"
  ResultType = "Text"
  RichText = "TRUE" | "FALSE"
  RichTextMode = "Text"
  RowOrdinal = "Integer"
  Sealed = "TRUE" | "FALSE"
  SeparateLine = "TRUE" | "FALSE"
  SetAs = "Text"
  ShowAddressBookButton = "TRUE" | "FALSE"  ShowAlways = "TRUE" | "FALSE"
  ShowField = "Text" | "Choice" | "Counter"
  ShowInDisplayForm = "TRUE" | "FALSE"
  ShowInEditForm = "TRUE" | "FALSE"
  ShowInFileDlg = "TRUE" | "FALSE"
  ShowInListSettings = "TRUE" | "FALSE"
  ShowInNewForm = "TRUE" | "FALSE"
  ShowInVersionHistory = "TRUE" | "FALSE"
  ShowInViewForms = "TRUE" | "FALSE"
  Sortable = "TRUE" | "FALSE"
  SourceID = "Text"
  StaticName = "Text"
  StorageTZ = "UTC" | "Abstract"
  StripWS = "TRUE" | "FALSE"
  SuppressNameDisplay = "TRUE" | "FALSE"
  TextOnly = "TRUE" | "FALSE"
  Title = "Text" 
  Type = "Data_Type"
  UniqueId = "Text"
  UnlimitedLengthInDocumentLibrary = "TRUE" | "FALSE"
  URLEncode = "TRUE" | "FALSE"
  URLEncodeAsUrl = "TRUE" | "FALSE"
  UserSelectionMode = "Text"
  UserSelectionScope = "Integer"  Version = "Text"
  Viewable = "TRUE" | "FALSE"  WebId = "Text"
  Width = "Integer"
  WikiLinking = "TRUE" | "FALSE"
  XName = "Text">
</Field></code></pre></td>
</tr>
</tbody>
</table>
```

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Aggregation**</p></td>
<td align="left"><p>Optional **Text</span>. Used in an aggregate field on an XML form to specify the function to apply to a collection of values or elements returned by an XPath expression. If you use the **Node</span> attribute to specify an XPath expression that returns a collection of values, you can also include an **Aggregation** attribute that specifies the action to take on the value set that is returned. This action can be either an aggregation function or an indication of the particular element within the collection.</p>
<p>Possible values include the following:</p>
<ul>
<li><p>**sum**   Add the values.</p></li>
<li><p>**count**   Count the number of values.</p></li>
<li><p>**average**   Find the average of the values.</p></li>
<li><p>**min**   Find the minimum value.</p></li>
<li><p>**max**   Find the maximum value.</p></li>
<li><p>**merge**   Merge the values.</p></li>
<li><p>**plaintext**   Converts node text content into plain text.</p></li>
<li><p>**first**   Apply property promotion and demotion to the first element in the collection.</p></li>
<li><p>**last**   Apply property promotion and demotion to the last element in the collection.</p></li>
</ul>
<p>For more information about how the **Node</span>, **PIAttribute</span>, **PITarget</span>, **Primary</span>**PIAttribute</span>, and **PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see <a href="http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829(Office.15).aspx">Using Content Types to Specify XML Document Properties</a>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AllowDeletion**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** if the field can be deleted.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AllowHyperlink**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** if hyperlinks can be used in the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AllowMultiVote**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** if multiple responses are allowed in a survey.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AppendOnly**</p></td>
<td align="left"><p>Optional **Boolean</span>. When versioning is enabled in the list, **TRUE</span> if text can only be appended to existing text in the **Note** field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AuthoringInfo**</p></td>
<td align="left"><p>Optional **Text</span>. A descriptive string that is displayed in the field editing pages to identify the field and its purpose; for example, the **LinkTitle** field has the authoring info "(link to item)". This attribute is usually used if a field of the same name exists for another purpose.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**BaseType**</p></td>
<td align="left"><p>Optional. The **BaseType</span> attribute can be set to **Integer</span>, which stores values as integers, or to **Text** (default), which stores values as text. You cannot create integer base-type choice fields.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CalType**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the calendar type. Possible values include the following:</p>
<ul>
<li><p>16   Saka Era</p></li>
<li><p>15   Chinese lunar</p></li>
<li><p>14   Korean and Japanese lunar</p></li>
<li><p>12   Gregorian transliterated French</p></li>
<li><p>11   Gregorian transliterated English</p></li>
<li><p>10   Gregorian Arabic</p></li>
<li><p>9   Gregorian Middle East French</p></li>
<li><p>8   Hebrew (lunar)</p></li>
<li><p>7   Thai</p></li>
<li><p>6   Hijri (Arabic lunar)</p></li>
<li><p>5   Korean Tangun Era</p></li>
<li><p>4   Taiwan Era</p></li>
<li><p>3   Japanese Emperor Era</p></li>
<li><p>1   Gregorian</p></li>
<li><p>0   No type specified</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**CanToggleHidden**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** if the field can be hidden through the user interface.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ClassInfo**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies a cascading style sheet (CSS) class to use for the field in the standard table view. If set, the specified class is used instead of the standard **ms-vb2** class.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ColName**</p></td>
<td align="left"><p>Optional **Text**. An internal attribute that defines the mapping of the field to the physical storage name for this field. This must be a valid name in the underlying database and must be identical to the name used in the database table. If not specified, the server generates a column name that does not collide with any existing column names and that contains only characters that are allowed by Microsoft SQL Server.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ColName2**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Commas**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** if commas are used to separate thousands.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Customization**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Decimals**</p></td>
<td align="left"><p>Optional **Integer**. Determines the number of decimals to display. The value displayed is rounded up to the display precision; for example, 1.05 is displayed as 1.1 when rounded to one decimal place.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **Text**. Provides the description that is shown in the edit form for a list if a field description is specified. By default, fields in Microsoft SharePoint Foundation do not have descriptions.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Dir**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the direction of text for a field that supports bidirectional reading order. The possible values are **LTR</span> (left-to-right), **RTL</span> (right-to-left), and **none**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Direction**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisplaceOnUpgrade**</p></td>
<td align="left"><p>Optional **Boolean</span>. If a field definition already exists for the field, **TRUE** to force updates to field properties with the values that are specified in this field definition.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayImage**</p></td>
<td align="left"><p>Optional **Text**. Specifies the name of an icon that is displayed for the column.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>Optional **Text</span>. The displayed name for a field. There is no restriction on text size or use of spaces. The display name can be edited by the user and can change after initial field creation. This name is used as a column heading when the field is displayed in a table view and as a form label when the field is displayed in a form. The <FieldName/> tag returns the display name if given; otherwise, it defaults to the **Name** attribute.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayNameSrcField**</p></td>
<td align="left"><p>Optional **Text**. Generally used for a computed field that needs the same name as another field. If the source field is modified and the display name is changed by a user, then the display name of this field will also change. This string refers to the name of the other field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisplaySize**</p></td>
<td align="left"><p>Optional **Integer**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Div**</p></td>
<td align="left"><p>Optional **Number</span>. A scale factor used in division before displaying a number. The display number is N * Mult / Div (rounded up to the number specified by **Decimals**).</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EnableLookup**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to enable lookup values in the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EnforceUniqueValues**</p></td>
<td align="left"><p>Optional **Boolean**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ExceptionImage**</p></td>
<td align="left"><p>Optional **Text</span>. Used in a **Recurrence** field type to specify the name of the image file to use for exceptions.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FieldRef**</p></td>
<td align="left"><p>Optional **Text**. Specifies the name of another field to which the field refers, such as a Lookup field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FillInChoice**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** if the field allows users to fill in values for the column.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Filterable**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** if the field can be filtered.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FilterableNoRecurrence**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE</span> if a filter can be created on the field in a view that does not expand recurring events. If **Filterable</span> contains **TRUE</span>, the field can be filtered in all views regardless of how **FilterableNoRecurrence** is set.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ForcedDisplay**</p></td>
<td align="left"><p>Optional **Text**. Specifies text to display in place of the actual field value. This attribute is used in surveys to prevent the user name from being displayed.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ForcePromoteDemote**</p></td>
<td align="left"><p>Optional **Boolean**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Format**</p></td>
<td align="left"><p>Optional **Text**. Specifies the formatting to use for numerical values.</p>
<p>For date/time fields, the following values are possible:</p>
<ul>
<li><p>**DateOnly**   Display (and allow edits to) only the date portion (the time portion is set to 12:00 A.M. for all edited values).</p></li>
<li><p>**DateTime**   Display and edit both date and time of day (default).</p></li>
<li><p>**ISO8601</span>   Display date and time in ISO8601 time format converted to Coordinated Universal Time (UTC) format: YYYY-MM-DDTHH:MM:SSZ. This is the format used for document properties in 2007 Microsoft Office system as well as for the standard interchange format used in SharePoint Foundation between **New</span> and **Edit** forms and the server.</p></li>
<li><p>**ISO8601Basic**   Use the abbreviated form of 8601 date/time formats: YYYYMMDDTHHMMSSZ. This is the format used for vCard/iCal.</p></li>
</ul>
<p>For Choice fields, this attribute can be set to **Dropdown</span> (default), which provides editing options through a drop-down selection, or to **RadioButtons**, which provides options through a group of radio buttons.</p>
<p>For URL fields, this attribute can be set to **Hyperlink** (default), which displays the URL as a normal <A> tag, or to **Image**, which displays the URL as `<IMG SRC="URL" ALT="Description">`.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FromBaseType**</p></td>
<td align="left"><p>Optional **Boolean</span>. This attribute is deprecated in favor of the **Sealed** attribute.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Group**</p></td>
<td align="left"><p>Optional **Text**. Specifies the column group to which the field belongs.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**HeaderImage**</p></td>
<td align="left"><p>Optional **Text**. Specifies the name of an image file to use as a header in the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Height**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the height in pixels of the images that are displayed for users in the User Information list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>Optional **Boolean</span>. If **TRUE</span>, the field is completely hidden from the user interface. Setting **ReadOnly</span> to **TRUE** means the field is not displayed in New or Edit forms but can still be included in views.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**HTMLEncode**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to convert embedded characters so that they are displayed as text in the browser; characters that could be confused with HTML tags are converted to entities.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ID**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the GUID of the field contained within braces (**{}**).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IMEMode**</p></td>
<td align="left"><p>Optional **Text**. Specifies the Input Method Editor (IME) mode bias to use for the field. The IME allows for conversion of keystrokes between languages when one writing system has more characters than can be encoded for the given keyboard.</p>
<p>Possible values include the following:</p>
<ul>
<li><p>**auto</span>   Not used. To specify this IME mode, set the **IMEMode** property value to an empty string ("").</p></li>
<li><p>**active**   All characters are typed through the IME, but users can still deactivate the IME.</p></li>
<li><p>**inactive**   Characters are typed without the IME, although users can still activate the IME.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**Indexed**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** if the column is indexed for use in view filters.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsolateStyles**</p></td>
<td align="left"><p>Optional **Boolean</span>. For a **Text</span> field whose **RichText</span> attribute is **TRUE</span> and whose **RichTextMode</span> attribute is **FullHtml**, this attribute specifies that a server will rewrite the HTML of the field to ensure that it will not interfere with the rendering of the surrounding page.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsRelationship**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** if the field is discoverable from the list to which it looks for its value.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**JoinColName**</p></td>
<td align="left"><p>Optional **Text</span>. This attribute is defined only for Lookup fields. It is very similar to **ColName**, except it denotes the name of the column that is used in the SQL JOIN between the local and external lists. Ordinarily, this value should not be customized. It is currently used only in the Field schema of certain built-in and base type fields to denote lookups into the URLs (DocMd) table, which is joined on the UrlID column.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**JoinRowOrdinal**</p></td>
<td align="left"><p>Optional **Integer**. Not intended to be used directly from your code.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**JoinType**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the type of JOIN used on the field. Possible values include **INNER</span>, **LEFT</span>**OUTER</span>, and **RIGHT</span>**OUTER**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**LCID**</p></td>
<td align="left"><p>Optional **Integer</span>. The **LCID** attribute can be used to specify the country/region whose currency format is being used, for example, 1033 for the United States.</p>
<p>Two special cases involve the euro symbol format. If LCID = -1 (0xFFFFFFF), the euro symbol is added as a prefix to the number. If LCID = -2 (0xFFFFFFE), the euro symbol is added as a suffix to the number. The number of decimal digits is 2, although this can be overridden by the **Decimals** attribute of the field. The euro currency symbol is equal to 0x20AC in UCS-2.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**LinkToItem**</p></td>
<td align="left"><p>Optional **Boolean**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**LinkToItemAllowed**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**List**</p></td>
<td align="left"><p>Optional **Text**. Specifies the internal name of a list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ListItemMenu**</p></td>
<td align="left"><p>Optional **Boolean**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ListItemMenuAllowed**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Max**</p></td>
<td align="left"><p>Optional **Number**. Specifies the maximum value allowed for the field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**MaxLength**</p></td>
<td align="left"><p>Optional **Integer</span>. Specifies the maximum number of characters allowed in a field value. Edit forms are adjusted to enforce this value, which is validated on the client. If the user attempts to enter more than the number of characters set by **MaxLength**, an error message appears.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Min**</p></td>
<td align="left"><p>Optional **Number**. Specifies the minimum value allowed for the field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Mult**</p></td>
<td align="left"><p>Optional **Boolean**. A scale factor used in multiplication before displaying a number.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **Text**. The name of a field. This is the internal name of a field and is guaranteed never to change for the lifetime of the field definition. It must be unique with respect to the set of fields in a list. The name is autogenerated based on the user-defined name for a field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**NegativeFormat**</p></td>
<td align="left"><p>Optional **Text**. Specifies how to indicate negative values. Can be set to one of the following values:</p>
<ul>
<li><p>**MinusSign**   Use minus sign as prefix.</p></li>
<li><p>**Parens**   Surround with parentheses.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**Node**</p></td>
<td align="left"><p>Optional **Text**. Used in XML forms, this attribute is required for all fields except processing instruction (PI) links, and it specifies the XPath expression for a node that is promoted.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**NoEditFormBreak**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to prevent a line break from being added between fields in the new item form or edit item form. Some field types, such as a rich-text field, provide spacing by default, and this attribute allows control over the extra spacing that results.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NumLines**</p></td>
<td align="left"><p>Optional **Integer**. Recommends the number of lines (rows) to display in a TEXTAREA block during editing. This is merely a client UI hint—there is no enforced limitation on the number of lines of text that can be edited.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Percentage**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** if the value is displayed as a percentage; that is, a number multiplied by 100 with a percent sign (%) appended.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PIAttribute**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the attribute in the document processing instruction (specified by the **PITarget</span> attribute) to use as the column value. Used for property promotion and demotion in XML documents. If you specify the **PIAttribute</span> attribute, you must also specify the **PITarget** attribute.</p>
<p>For more information about how the **Node</span>, **PIAttribute</span>, **PITarget</span>, **Primary PIAttribute</span>, and **PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see <a href="http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829(Office.15).aspx">Using Content Types to Specify XML Document Properties</a>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PITarget**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the document processing instruction in which the column value is stored in documents of this content type. Used for property promotion and demotion in XML documents. If you specify the **PIAttribute</span> attribute, you must also specify the **PITarget** attribute.</p>
<p>For more information about how the **Node</span>, **PIAttribute</span>, **PITarget</span>, **Primary PIAttribute</span>, and **PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see <a href="http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829(Office.15).aspx">Using Content Types to Specify XML Document Properties</a>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PrependId**</p></td>
<td align="left"><p>Optional **Boolean</span>. Used in Issue Tracking lists, **TRUE** to display the collection IDs of related issue items in Edit and New item forms.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Presence**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** if user information is present for the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PrimaryKey**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** if the field is the primary key in the relationship between the list and another list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PrimaryPIAttribute**</p></td>
<td align="left"><p>Optional **Text</span>. Used for property promotion and demotion in XML documents. Specifies an alternate attribute in the document processing instruction, specified by the **PrimaryPITarget</span>, to use as the column value. If you specify the **PrimaryPIAttribute</span> attribute, you must also specify the **PrimaryPITarget</span> attribute. If specified, SharePoint Foundation uses these values before those specified in the **PITarget</span> and **PIAttribute** attributes.</p>
<p>For more information about how the **Node</span>, **PIAttribute</span>, **PITarget</span>, **Primary PIAttribute</span>, and **PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see <a href="http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829(Office.15).aspx">Using Content Types to Specify XML Document Properties</a>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PrimaryPITarget**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies an alternative document processing instruction in which the column value is stored for documents of this content type. If you specify the **PrimaryPIAttribute</span> attribute, you must also specify the **PrimaryPITarget</span> attribute. If specified, SharePoint Foundation uses these values before those specified in the **PITarget</span> and **PIAttribute** attributes.</p>
<p>For more information about how the **Node</span>, **PIAttribute</span>, **PITarget</span>, **Primary PIAttribute</span>, and **PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see <a href="http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829(Office.15).aspx">Using Content Types to Specify XML Document Properties</a>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ReadOnly**</p></td>
<td align="left"><p>Optional **Boolean</span>. If **TRUE</span>, the field is not displayed in New or Edit forms but can be included in views. In addition, setting **ReadOnly</span> to **TRUE</span> hides the field from Site Settings pages for managing site columns and content types. Setting the **Hidden</span> attribute to **TRUE</span> completely hides the field from the UI. If you do not include this attribute, SharePoint Foundation treats the column as if this attribute is set to **False**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ReadOnlyEnforced**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to specify that the user cannot change the field by any means and that it can only be changed by the system.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RelationshipDeleteBehavior**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the delete behavior of the field. Possible values include **Cascade</span>, **Restrict</span> and **None**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RenderXMLUsingPattern**</p></td>
<td align="left"><p>Optional **Boolean</span>. Used for computed fields to determine the display format. If **TRUE</span>, values are rendered based on the display pattern of the computed field, rather than on the column value of the first noncomputed field reference upon which the computed field is based. For example, in a picture library, the Picture Size column is represented by <span class="placeholder">width</span> x <span class="placeholder">height</span>, but if this attribute is not set to **TRUE</span>, only the first field reference, <span class="placeholder">width</span>, is displayed. If it is set to **TRUE</span>, the format of <span class="placeholder">width</span> x <span class="placeholder">height** is displayed.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Required**</p></td>
<td align="left"><p>Optional **Boolean</span>. If **TRUE</span>, the field must not have an empty value assigned to it. If a nonempty field value is not given in a form post, either the standard required-field text or an explicitly specified message (that is, via <ErrorText> tags) is displayed in the error form. This validation is handled only by the client (the database always allows **NULL** for all user-defined fields).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RestrictedMode**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE</span> to not allow the **Note** field to contain enhanced rich text formatting, such as pictures, tables, or hyperlinks, nor to allow pasting formatted text into the field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ResultType**</p></td>
<td align="left"><p>Optional **Text**. Specifies the data type of values that are returned from the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RichText**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** if the field displays rich text formatting.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RowOrdinal**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the database location for the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Sealed**</p></td>
<td align="left"><p>Optional **Boolean</span>. Setting this attribute to **TRUE** for a field in the <a href="http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56(Office.15).aspx">Schema.xml</a> file for a list marks the field as irremovable in the Change Column page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SeparateLine**</p></td>
<td align="left"><p>Optional **Boolean**. Used internally to support rendering a field (for example, Notes or Comment) in a separate line. This attribute is not intended for public use.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SetAs**</p></td>
<td align="left"><p>Not intended to be used directly from your code.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowAddressBookButton**</p></td>
<td align="left"><p>Not intended to be used directly from your code.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowAlways**</p></td>
<td align="left"><p>Optional **Boolean**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowField**</p></td>
<td align="left"><p>Optional. The **ShowField</span> attribute can be set to the field name to be displayed. By default, a hyperlinked text from the Title field of the record in the external list is displayed. But the **ShowField</span> attribute can be used to override that and display another field from the external list. The following data types are allowed as targets of a **ShowField</span> attribute: **Text</span>, **Choice</span>, and **Counter</span>. For a **Lookup** field, this parameter must be set to the internal field name; setting it to the display name does not raise an error, but breaks the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowInDisplayForm**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to display the field in the form for viewing the item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowInEditForm**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to display the field in the form for editing the item.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowInFileDlg**</p></td>
<td align="left"><p>Optional **Boolean</span>. This attribute is valid only for fields within document library schemas. If **FALSE**, the field does not show up in the property dialog box for saving forms that appears when saving from client applications. For example, the Title field has this attribute because this is set directly in the document being saved to the document library.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowInListSettings**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to display the column on the page for customizing list settings.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowInNewForm**</p></td>
<td align="left"><p>Optional **Boolean</span>. If **FALSE</span>, the field does not show up in a **Fields</span> enumeration when the display mode is set to **New**. Fields with this setting do not show up in the default New Item page for a given list. In particular, this is used to hide fields on the page for uploading documents to the document library.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowInVersionHistory**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to display the column on the page for viewing list item versions.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowInViewForms**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to specify that the field is displayed in pages that are used to view list data.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Sortable**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** if values in the field can be sorted.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SourceID**</p></td>
<td align="left"><p>Optional **Text</span>. Contains the namespace that defines the field, such as <span class="code">http://schemas.microsoft.com/sharepoint/v3**, or the GUID of the list in which the custom field was created.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**StaticName**</p></td>
<td align="left"><p>Optional **Text**. Contains the internal name of the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**StorageTZ**</p></td>
<td align="left"><p>Specifies how date/time values are stored. When **StorageTZ</span> is set to **UTC</span>, the date/time is handled as Coordinated Universal Time (UTC). To denote that a date/time value refers to "abstract" time, meaning that the date/time is stored in the database as entered by the user without conversion or storage of the local time zone, omit the **StorageTZ** attribute.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**StripWS**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** if white space is removed from the beginning and end of field values.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SuppressNameDisplay**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE</span> to not display the name of the user in a **User** field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TextOnly**</p></td>
<td align="left"><p>Optional **Boolean</span>. If **TRUE</span>, the field can contain only **Text** values.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>Optional **Text**. Contains the title of the field that is displayed in the user interface.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Required **Text</span>. The data type of the field (unless the **Field** element is a child of <a href="projectedfields-element-view.md">ProjectedFields</a>).</p>
<div class="alert">
<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>In the Technology Preview release of Microsoft SharePoint Foundation 2010, the **Type</span> attribute has a different meaning and only one possible value ("Lookup") when it is a child of <a href="projectedfields-element-view.md">ProjectedFields</a>. See <span sdata="link"><a href="projectedfields-element-view.md">ProjectedFields Element (View)</a></span> for more information about this use of **Type**.</p></td>
</tr>
</tbody>
</table>
</div>
<p>SharePoint Foundation includes the following data types by default:</p>
<ul>
<li><p>**AllDayEvent</span>   Specifies an all day event. Corresponds to the **bit** SQL data type.</p></li>
<li><p>**Attachments</span>   Stores the URLs for attachments. Corresponds to the **bit** SQL data type.</p></li>
<li><p>**Boolean</span>   Used to store a **TRUE</span>/**FALSE</span> value (stored in the database as 0 or 1). This field is sortable and groupable. Corresponds to the **bit</span> SQL data type and represented by the <span sdata="cer" target="T:Microsoft.SharePoint.SPFieldBoolean"><span class="nolink">SPFieldBoolean</span>** class.</p></li>
<li><p>**Calculated</span>   Specifies a field whose value is calculated based on other columns. Corresponds to the **sql_variant</span> SQL data type and represented by the <span sdata="cer" target="T:Microsoft.SharePoint.SPFieldCalculated"><span class="nolink">SPFieldCalculated</span>** class.</p></li>
<li><p>**Choice</span>   Allows the user to specify a predetermined set of values that can be used to enter data into the field. The **Choice</span> and **Lookup</span> types are the most important fields for sorting and grouping. The **BaseType</span> and **Format</span> attributes can be used for choice fields. This field is sortable and groupable. When a value is given for a choice option, then that value is used as the submitted value for the field selection. When no value is given, that choice is submitted as the text value of the choice. In all cases, the text value of the choice is what is displayed in the UI (drop-down list or radio button text). The order in which choices appear in the editing UI is always the order that items are specified within the **CHOICES</span> element. Use the **MultiChoice</span> type to specify a **Choice</span> field that implements check boxes and allows the user to select multiple values. Corresponds to the **nvarchar</span> SQL data type and represented the <span sdata="cer" target="T:Microsoft.SharePoint.SPFieldChoice"><span class="nolink">SPFieldChoice</span>** class.</p></li>
<li><p>**Computed</span>   Specifies a field that depends on another field for its contents. For example, a **LinkTitleNoMenu</span> field amounts to surrounding a Title field value with a hyperlink. Represented by the <span sdata="cer" target="T:Microsoft.SharePoint.SPFieldComputed"><span class="nolink">SPFieldComputed</span>** class.</p></li>
<li><p>**ContentTypeId</span>   Contains a content type ID. For information about the format of content type IDs, see <a href="http://msdn.microsoft.com/library/81fa8d81-c4f5-4750-8f70-811620fdffcf(Office.15).aspx">Content Type IDs</a>. Corresponds to the **varbinary** SQL data type.</p></li>
<li><p>**Counter</span>   Generally used only for the internal ID field. Its integer value is set automatically to be unique with respect to every other item in the current list. The **Counter</span> type is always read-only and cannot be set through a form post. This field is sortable but not groupable. Corresponds to the **int** SQL data type.</p></li>
<li><p>**CrossProjectLink</span>   Used to connect an event in a SharePoint list with a Meeting Workspace site; refers specifically to the field type of the checkbox used in New and Edit Item forms to create a Meeting Workspace site for the item. Corresponds to the **bit</span> SQL data type and represented by the <span sdata="cer" target="T:Microsoft.SharePoint.SPFieldCrossProjectLink"><span class="nolink">SPFieldCrossProjectLink</span>** class.</p></li>
<li><p>**Currency</span>   Allows for a currency value to be entered. Each currency field is tied to a specific locale's currency. In all other respects, it is treated like the **Number</span> field type. Use the **LCID</span> attribute to indicate a currency of a specific locale. The **Decimals</span>, **Max</span>, and **Min</span> attributes can be used for currency types. This field is sortable and groupable. Corresponds to the **float</span> SQL data type and represented by the <span sdata="cer" target="T:Microsoft.SharePoint.SPFieldCurrency"><span class="nolink">SPFieldCurrency</span>** class.</p></li>
<li><p>**DateTime</span>   Allows for storage of a fully qualified date or time of day. Use the **Format</span> attribute to specify date formatting, and use the **StorageTZ</span> attribute to determine how date/time values are stored. This field is sortable and groupable. For Display mode, the order of date formatting derives from the regional settings ("M/D/Y" or "D/M/Y"). In Edit mode (or in New mode for **Default</span> element value), date/times are rendered in universal format: M/D/Y hh:mm am/pm. Corresponds to the **datetime</span> SQL data type and represented the <span sdata="cer" target="T:Microsoft.SharePoint.SPFieldDateTime"><span class="nolink">SPFieldDateTime</span>** class.</p></li>
<li><p>**File</span>   Contains a file. Corresponds to the **uniqueidentifier** SQL data type.</p></li>
<li><p>**GridChoice</span>   Contains a rating scale for surveys. Corresponds to the **ntext</span> SQL data type and represented by the <span sdata="cer" target="T:Microsoft.SharePoint.SPFieldRatingScale"><span class="nolink">SPFieldRatingScale</span>** class.</p></li>
<li><p>**Guid</span>   Allows for globally unique identifiers (GUIDs). Corresponds to the **uniqueidentifier** SQL data type.</p></li>
<li><p>**Integer</span>   Allows for positive or negative integer values. The **Commas</span> and **NegativeFormat</span> attributes are used to specify integer formatting. Corresponds to the **int** SQL data type.</p></li>
<li><p>**Lookup</span>   Behaves very similarly to a **Choice</span> field, except that the available options come from another list rather than being a hard-coded selection of values. The **List</span> and **ShowField</span> attributes can be used for Lookup fields. This field is sortable and groupable. For sorting and grouping, use the **DisplayField</span> value (Title, by default) rather than the foreign key stored in the list. Corresponds to the **int</span> SQL data type and represented by the <span sdata="cer" target="T:Microsoft.SharePoint.SPFieldLookup"><span class="nolink">SPFieldLookup</span>** class.</p></li>
<li><p>**LookupMulti</span>   A **Lookup</span> field that can contain more than one value. Parent type: **Lookup**.</p></li>
<li><p>**ModStat</span>   Contains content approval status. Possible values include **Approved</span> (default), **Rejected</span>, and **Pending</span> (stored in the database as 0, 1, or 2, respectively). Corresponds to the **int** SQL data type.</p></li>
<li><p>**MultiChoice</span>   Specifies a **Choice</span> field that implements check boxes and allows the user to select multiple values. Corresponds to the **ntext</span> SQL data type and represented by the <span sdata="cer" target="T:Microsoft.SharePoint.SPFieldMultiChoice"><span class="nolink">SPFieldMultiChoice</span>** class.</p></li>
<li><p>**MultiColumn</span>   A **Note</span> field that emulates a field containing multiple values. For an example of a multicolumn field type, see <a href="http://msdn.microsoft.com/library/b3315997-671f-4c29-9518-48cc4592f205(Office.15).aspx">Custom Field Type Definition</a>. For information on multicolumn fields, see <a href="http://msdn.microsoft.com/library/62818d63-6473-42d0-b12f-251865887b33(Office.15).aspx">Custom Multicolumn Field Classes</a>. Parent type: **Note**.</p></li>
<li><p>**Note</span>   Allows users to enter multiple lines of text. This field is not sortable or groupable. All text is defined to be straight ASCII characters without HTML markup. Anything that looks like HTML markup or a URL is simply quoted (for example, Server.HTMLEncode) to look like straight text. The control for editing this format is a simple TEXTAREA block. Use the **NumLines</span> attribute to specify the number of lines to display. Corresponds to the **ntext</span> SQL data type and represented by the <span sdata="cer" target="T:Microsoft.SharePoint.SPFieldMultiLineText"><span class="nolink">SPFieldMultiLineText</span>** class.</p></li>
<li><p>**Number</span>   Allows for a floating point number to be entered. This field is sortable and groupable. Numbers entered are parsed according to the current locale settings for decimal points and thousand separators. Negative numbers can be indicated by wrapping them in parentheses or by using a negative symbol. The following attributes can be used in conjunction with the **Number</span> attribute to specify number formatting: **Decimals</span>, **Div</span>, **Max</span>, **Min</span>, **Mult</span>, and **Percentage**.</p>
<p>Corresponds to the **float</span> SQL data type and represented by the <span sdata="cer" target="T:Microsoft.SharePoint.SPFieldNumber"><span class="nolink">SPFieldNumber</span>** class.</p></li>
<li><p>**PageSeparator</span>   Inserts a page break in a survey list. Represented by the <span sdata="cer" target="T:Microsoft.SharePoint.SPFieldPageSeparator"><span class="nolink">SPFieldPageSeparator</span>** class.</p></li>
<li><p>**Recurrence</span>   Used to edit and define the recurrence pattern for an item in an events list. Corresponds to the **bit** SQL data type.</p></li>
<li><p>**Text</span>   A single line of text entered in an edit box. This field is sortable and groupable. Use the **MaxLength</span> attribute to set a maximum number of characters allowed. Corresponds to the **nvarchar</span> SQL data type and represented by the <span sdata="cer" target="T:Microsoft.SharePoint.SPFieldText"><span class="nolink">SPFieldText</span>** class.</p></li>
<li><p>**ThreadIndex</span>   Contains the ID that indicates the relative position of a message within a conversation thread. Corresponds to the **varbinary** SQL data type.</p></li>
<li><p>**Threading</span>   The **Threading</span> field type is used in the creation and display of threaded discussion-like views. Any list can contain a threading column, but a special UI is generated when it is used. (It is never displayed as a standard editable field in a form nor as a normal column in a view.) If a sort is performed on a threading field, a pre-order traversal of all the records in a parent-child relationship is returned. This is accomplished by saving the concatenation of the creation date and ID number of all the parent records of a particular record. Corresponds to the **varchar** SQL data type.</p></li>
<li><p>**URL**   Used to create a freeform hyperlink. A URL field is displayed as <span class="code"><A HREF="URL"></span><span class="placeholder">Description</span><span class="code"></A></span>. If no description is given, it is displayed as <span class="code"><A HREF="</span><span class="placeholder">URL</span><span class="code">"></span><span class="placeholder">URL</span><span class="code"></A></span>. The URL text is itself stored in the URLs (DocMd) table, which stores all the URLs in SharePoint databases on the server. This is done so that any URLs that are local on the server can be updated through link fixup when their destination moves. When a record with a URL field contained within it is deleted, the corresponding referenced record from the URL table is also deleted. This field is sortable and groupable. (The sort is defined according to the textual description rather than the contents of the URL; if no description is given, it sorts the same as blank.) When **Type</span> is **URL</span>, the **LinkType</span> attribute can be used to specify the type of link. Corresponds to the **nvarchar</span> SQL data type and represented by the <span sdata="cer" target="T:Microsoft.SharePoint.SPFieldUrl"><span class="nolink">SPFieldUrl</span>** class.</p></li>
<li><p>**User</span>   A **Lookup</span> field that references the UserInfo database table. Corresponds to the **int</span> SQL data type and represented by the <span sdata="cer" target="T:Microsoft.SharePoint.SPFieldUser"><span class="nolink">SPFieldUser</span>** class.</p></li>
<li><p>**UserMulti</span>   A **User</span> field that can contain more than one value. Parent type: **LookupMulti**.</p></li>
<li><p>**WorkflowEventType</span>   Specifies a workflow event type as represented by the <span sdata="cer" target="T:Microsoft.SharePoint.Workflow.SPWorkflowHistoryEventType"><span class="nolink">SPWorkflowHistoryEventType</span></span> enumeration. Parent type: **Integer**.</p></li>
<li><p>**WorkflowStatus</span>   Specifies workflow status as represented by the <span sdata="cer" target="T:Microsoft.SharePoint.Workflow.SPWorkflowStatus"><span class="nolink">SPWorkflowStatus</span></span> enumeration. Corresponds to the **nvarchar** SQL data type.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**UniqueId**</p></td>
<td align="left"><p>Optional **Text**. Not intended to be used directly from your code.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UnlimitedLengthInDocumentLibrary**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to allow unlimited field length in document libraries.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**URLEncode**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format, for example, %c3%ab for character ë.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**URLEncodeAsURL**</p></td>
<td align="left"><p>Optional **Boolean</span>. Like **URLEncode</span>, but **TRUE** to specify that the string to encode is a path component of a URL so that forward slashes ("/") are not encoded.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**UserSelectionMode**</p></td>
<td align="left"><p>Optional **Text**. Specifies whether only the names of individual users can be selected in a user field on an item form, or whether the names of both individuals and groups can be selected. The following values are possible:</p>
<p>**0** - Only the names of individuals can be selected.</p>
<p>**1** - The names of both individuals and groups can be selected.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UserSelectionScope**</p></td>
<td align="left"><p>Optional **Integer**. Specifies a scope for selecting user names in a user field on an item form. If the value is 0, there is no restriction to a SharePoint group. If the value is greater than 0, user selection is restricted to members of the SharePoint group whose ID equals the value that is specified.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Version**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Viewable**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE</span> to specify that the field is added to the default view. The default value is **TRUE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WebId**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Width**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the width in pixels of the images that are displayed for users in the User Information list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WikiLinking**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE</span> to specify that wiki links, which appear in the form of double brackets (**[[…]]</span>), become translated into HTML links, which use the `<a>` tag.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**XName**</p></td>
<td align="left"><p>Optional **Text**. Used internally in XML forms to identify fields that have been added, deleted, or modified. This attribute is not intended for public use.</p></td>
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
<td align="left"><p><a href="choices-element-list.md">CHOICES</a>, <a href="customization-element-list.md">Customization</a>, <a href="default-element-listfield.md">Default</a>, <a href="defaultformula-element-list.md">DefaultFormula</a>, <a href="displaybidipattern-element-list.md">DisplayBidiPattern</a>, <a href="displaypattern-element-list.md">DisplayPattern</a>, <a href="fieldrefs-element-list.md">FieldRefs</a>, <a href="formula-element-list.md">Formula</a>, <a href="formuladisplaynames-element-list.md">FormulaDisplayNames</a>, <a href="mappings-element-list.md">MAPPINGS</a>, <a href="validation-element-list.md">Validation</a></p></td>
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
<td align="left"><p><a href="fields-element-list.md">Fields</a>, <a href="projectedfields-element-view.md">ProjectedFields</a></p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 0</p>
<p>Maximum: Unbounded when the parent is <a href="fields-element-view.md">Fields</a>. When the parent is <a href="projectedfields-element-view.md">ProjectedFields</a> the maximum is difference between the maximum number of allowed fields in the primary list that is being queried and the number of fields already in the list.</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

To create a custom field definition for a list definition that is based
on a default SharePoint Foundation field type, use the <span
class="keyword">Field (List - Definition)</span> element within a
[Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56(Office.15).aspx)
file. To create a custom field definition as a pluggable Feature that is
based on a default field type and that can be reused across websites
and lists within a site collection, use the [Field
(Field)](field-element-field.md) element to define a
custom [site
column](http://msdn.microsoft.com/library/0402b3a7-3665-43df-9769-85e3aa1b2432(Office.15).aspx).
To create a [custom field
type](http://msdn.microsoft.com/library/1345b345-226d-443a-918f-af123a3c7b13(Office.15).aspx)
that implements a custom class for special data validation and field
rendering, use the [Field (Field
Types)](field-element-field-types.md) element.

Fields can be referenced from View definitions as well as from
expressions in computed field rendering elements. Use the [Field
(View)](field-element-view.md) element to return a
formatted field value for display within a view, and use the [Column
(View)](column-element-view.md) element to return the
raw data value of the field. The syntax for referencing a field is as
follows:

## Definition
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Field Name="FieldName"/>

By default, the field is rendered with the default attributes for that
field definition as specified in the previous table. Any of the field
attributes can be overridden in the CAML markup of the <span
class="keyword">FieldRef</span> attribute, which overrides the
definition given for the field itself. (The <span
class="keyword">Type</span> attribute for a field cannot be changed.)

<span class="code">\<Property Select="DisplayName"/\></span> can be used
to display the user-defined display name of a field.

Within a **Fields** element enumeration, the
**Name** attribute can be omitted. For some
field references, the raw data stored for the field can be accessed by
using <span class="code">\<Column/\></span>.

Some properties of fields from forms and from certain aspects of the
authoring UI can be rendered through the <span
class="keyword">Property</span> element, for example, <span
class="code">\<Property Select="Description"/\> or \<Property
Select="Type"/\></span>. These elements simply retrieve the value of any
field attribute or child element (**Property**)
by name.

In addition to the preceding types, the following predefined fields are
used with the **Field** element.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Name</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Created**</p></td>
<td align="left"><p>A field that contains a **DateTime** value specifying the time that the item was created (in UTC).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CreatedBy**</p></td>
<td align="left"><p>A field that contains a **Lookup** value that refers to the UserInfo table and indicates the user who created the item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Edit**</p></td>
<td align="left"><p>A Computed field (with no additional schema) that contains a hyperlink to the form for editing an item. This field references the page for editing the item and the ID field to identify it.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ID**</p></td>
<td align="left"><p>A **Counter</span> field type that is associated with every item in every list. The ID uniquely identifies the list item in URLs and in POST forms when editing. Specifying **New</span> as the value of the **ID</span> attribute in the **Cmd=Save** command creates an item rather than edits a current item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Modified**</p></td>
<td align="left"><p>A field that contains a **DateTime</span> value specifying the time that the item was last modified (in UTC). The **Modified</span> time is used as a sort of **Version** field as well. The last modification date of an item is always posted when an existing item is being edited. If it does not match the current modification date, the server fails the edit and returns an error to the user, providing a link to the current data on the server (which opens in a new window), so that posted values can be copied from the old form into the new one.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ModifiedBy**</p></td>
<td align="left"><p>A field that contains a **Lookup** value to the UserInfo table indicating the user who last modified the item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>The generic display name of every item. It may have a different display name in different lists but the same internal field name of **Title</span>. The title is the default text to display for **Lookup** fields to lists.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**LinkTitle**</p></td>
<td align="left"><p>A computed field that displays hyperlinks to items, containing the title texts and generating URLs (and new icon references) to the items. There is no additional storage for this field; it relies on the ID and Title fields for rendering of its UI.</p></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>The fields returned in a **Fields</span> enumeration are affected by the display mode. Fields that are marked with the **Hidden</span> attribute are never returned. Fields that are marked with the **ReadOnly</span> attribute are not returned if a form is being rendered (if **Fields</span> is called from within a **ListForm</span> element). Fields that are marked with the **ShowInNewForm</span> attribute are not returned in the NEW or PREVIEWNEW display modes. Fields marked with the **ShowInFileDlg</span> attribute are not returned when rendering the **NewForm** dialog form.</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example uses the **Field**
element to specify options for a list named Area list.

## Definition
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Field Type="Choice" BaseType="Text" Name="Area">
      <CHOICES>
        <CHOICE>Views</CHOICE>
        <CHOICE>Site Design</CHOICE>
        <CHOICE>Layouts</CHOICE>
        <CHOICE>Schema Design</CHOICE>
        <CHOICE>Fields</CHOICE>
        <CHOICE>Forms</CHOICE>
        <CHOICE>Projects</CHOICE>
        <CHOICE>Inter-Team Issues</CHOICE>
        <CHOICE>Schedule</CHOICE>
        <CHOICE>Spec</CHOICE>
        <CHOICE>Headcount</CHOICE>
        <CHOICE>Misc</CHOICE>
      </CHOICES>
    </Field>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



[Field Element
(Field)](field-element-field.md)</span>



[Column Element
(View)](column-element-view.md)</span>

[Column2 Element
(View)](column2-element-view.md)</span>

[Field Element (Field
Types)](field-element-field-types.md)</span>

[Field Element (Field Types Property
Schema)](field-element-field-types-property-schema.md)</span>

[Field Element (DeploymentManifest -
DeploymentFieldTemplate)](field-element-deploymentmanifestdeploymentfieldtemplate.md)</span>

[Field Element (DeploymentManifest -
FieldDataCollection)](field-element-deploymentmanifestfielddatacollection.md)</span>

[Field Element (DeploymentManifest -
SPFieldCollection)](field-element-deploymentmanifestspfieldcollection.md)</span>

[Field Element
(View)](field-element-view.md)</span>

[Field Element
(Site)](field-element-site.md)</span>








