---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5f0342fb-3643-4d63-8b6a-a2688538e8e3
---

# Field element (Field)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Defines a site column.

## Definition

```XML
<Field
  Aggregation="sum" | "count" | "average" | "min" | "max" | "merge" | "plaintext" | "first" | "last"
  AllowDeletion="TRUE" | "FALSE"
  AllowDuplicateValues="TRUE" | "FALSE"
  AllowHyperlink="TRUE" | "FALSE"
  AllowMultiVote="TRUE" | "FALSE"
  AppendOnly="TRUE" | "FALSE"
  AuthoringInfo="Text"
  BaseType="Integer" | "Text"
  CalType="Integer"
  CanToggleHidden="TRUE" | "FALSE"
  ClassInfo="Text"
  ColName="Text"
  Commas="TRUE" | "FALSE"
  Customization=Text
  Decimals="Integer"
  DefaultListField="TRUE" | "FALSE"
  Description="Text"
  Dir="Text"
  DisplaceOnUpgrade="TRUE" | "FALSE"
  DisplayImage="Text"
  DisplayName="Text"
  DisplayNameSrcField="Text"
  DisplaySize=Integer
  Div="Number"
  EnableLookup="TRUE" | "FALSE"
  ExceptionImage="Text"
  FieldRef="Text"
  FillInChoice="TRUE" | "FALSE"
  Filterable="TRUE" | "FALSE"
  FilterableNoRecurrence="TRUE" | "FALSE"
  ForcedDisplay="Text"
  Format="DateOnly | DateTime | TimeOnly | EventList | ISO8601 | MonthDayOnly | MonthYearOnly | ISO8601Basic | ISO8601Gregorian | ISO8601BasicDateOnly | DropDown | RadioButtons | HyperLink | Image | TRUE | FALSE"
  FromBaseType="TRUE" | "FALSE"
  Group="Text"
  HeaderImage="Text"
  Height="Integer"
  Hidden="TRUE" | "FALSE"
  HTMLEncode="TRUE" | "FALSE"
  ID="Text"
  IMEMode="active | inactive"
  Indexed="TRUE" | "FALSE"
  IsolateStyles="TRUE" | "FALSE"
  IsRelationship="TRUE" | "FALSE"
  JoinColName="Text"
  JoinRowOrdinal="Integer"
  JoinType="INNER" | "LEFT OUTER" | "RIGHT OUTER"
  LCID="Integer"
  LinkToItem="TRUE" | "FALSE"
  List="Text"
  Max="Number"
  MaxLength="Integer"
  Min="Number" 
  Mult="TRUE" | "FALSE"
  Name="Text"
  NegativeFormat="MinusSign" | "Parens"
  Node="Text"
  NoEditFormBreak="TRUE" | "FALSE"
  NumLines="Integer"
  Overwrite="TRUE" | "FALSE"
  OverwriteInChildScopes="TRUE" | "FALSE"
  Percentage="TRUE" | "FALSE"
  PIAttribute="Text"
  PITarget="Text"
  PrependId="TRUE" | "FALSE"
  Presence="TRUE" | "FALSE"
  PrimaryKey="TRUE" | "FALSE"
  PrimaryPIAttribute="Text"
  PrimaryPITarget="Text"
  ReadOnly="TRUE" | "FALSE"
  ReadOnlyEnforced="TRUE" | "FALSE"
  RelationshipDeleteBehavior="Restrict | Cascade | None"
  RenderXMLUsingPattern="TRUE" | "FALSE"
  Required="TRUE" | "FALSE"
  RestrictedMode="TRUE" | "FALSE"
  ResultType="Text"
  RichText="TRUE" | "FALSE"
  RichTextMode="Text"
  RowOrdinal="Integer"
  Sealed="TRUE" | "FALSE"
  SeperateLine="TRUE" | "FALSE"
  SetAs="Text"
  ShowAddressBookButton="TRUE" | "FALSE"
  ShowField="Text" | "Choice" | "Counter"
  ShowInDisplayForm="TRUE" | "FALSE"
  ShowInEditForm="TRUE" | "FALSE"
  ShowInFileDlg="TRUE" | "FALSE"
  ShowInListSettings="TRUE" | "FALSE"
  ShowInNewForm="TRUE" | "FALSE"
  ShowInVersionHistory="TRUE" | "FALSE"
  ShowInViewForms="TRUE" | "FALSE"
  Sortable="TRUE" | "FALSE"
  SourceID="Text"
  StaticName="Text"
  StorageTZ="UTC" | "Abstract"
  StripWS="TRUE" | "FALSE"
  SuppressNameDisplay="TRUE" | "FALSE"
  TextOnly="TRUE" | "FALSE"
  Title="Text" 
  Type="Data_Type"
  UniqueId="Text"
  UnlimitedLengthInDocumentLibrary="TRUE" | "FALSE"
  URLEncode="TRUE" | "FALSE"
  URLEncodeAsUrl="TRUE" | "FALSE"
  UserSelectionMode="Text"
  UserSelectionScope="Integer"
  Viewable="TRUE" | "FALSE"
  Width="Integer"
  WikiLinking="TRUE" | "FALSE"
  XName="Text">
</Field>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="80%" />
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
<td align="left"><p>Optional **Text**. Used in an aggregate field on an XML form to specify the function to apply to a collection of values or elements returned by an XPath expression. If you use the **Node** attribute to specify an XPath expression that returns a collection of values, you can also include an **Aggregation** attribute that specifies the action to take on the value set that is returned. This action can be either an aggregation function or an indication of the particular element within the collection.</p>
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
<p>For more information about how the **Node**, **PIAttribute**, **PITarget**, **PrimaryPIAttribute**, and **PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see <a href="https://msdn.microsoft.com/en-us/library/office/aa543481.aspx">Using Content Types to Specify XML Document Properties</a>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AllowDeletion**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if the field can be deleted.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AllowDuplicateValues**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies whether duplicate values are allowed in a given list field. Setting this value to **false**, which prevents entering duplicate values, effectively makes this field behave like a primary key. **True** if duplicate values are allowed in the field; otherwise **false**. The default value is **true**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AllowHyperlink**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if hyperlinks can be used in the field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AllowMultiVote**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if multiple responses are allowed in a survey.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AppendOnly**</p></td>
<td align="left"><p>Optional **Boolean**. When versioning is enabled in the list, **TRUE** if text can only be appended to existing text in the **Note** field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AuthoringInfo**</p></td>
<td align="left"><p>Optional **Text**. A descriptive string that is displayed in the field editing pages to identify the field and its purpose; for example, the **LinkTitle** field has the authoring info "(link to item)". This attribute is usually used if a field of the same name exists for another purpose.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**BaseType**</p></td>
<td align="left"><p>Optional. The **BaseType** attribute can be set to **Integer**, which stores values as integers, or to **Text** (default), which stores values as text. You cannot create integer base-type choice fields.</p></td>
</tr>
<tr class="odd">
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
<tr class="even">
<td align="left"><p>**CanToggleHidden**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if the field can be hidden through the user interface.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ClassInfo**</p></td>
<td align="left"><p>Optional **Text**. Specifies a cascading style sheet (CSS) class to use for the field in the standard table view. If set, the specified class is used instead of the standard **ms-vb2** class.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ColName**</p></td>
<td align="left"><p>Optional **Text**. An internal attribute that defines the mapping of the field to the physical storage name for this field. This must be a valid name in the underlying database and must be identical to the name used in the database table. If not specified, the server generates a column name that does not collide with any existing column names and that contains only characters that are allowed by Microsoft SQL Server.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Commas**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if commas are used to separate thousands.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Customization**</p></td>
<td align="left"><p>Optional **Text**. Provides the ability to add custom properties to custom field types.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Decimals**</p></td>
<td align="left"><p>Optional **Integer**. Determines the number of decimals to display. The value displayed is rounded up to the display precision; for example, 1.05 is displayed as 1.1 when rounded to one decimal place.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DefaultListField**</p></td>
<td align="left"><p>Optional **Boolean**. Gets a value that specifies whether to show the **Edit Properties** form for a file when that file is uploaded to a document library. **True** if the field that is being added to a library does not have a visible **Edit Properties** form; otherwise, **false**. The default is **false**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **Text**. Provides the description that is shown in the edit form for a list if a field description is specified. By default, fields in Microsoft SharePoint Foundation do not have descriptions.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Dir**</p></td>
<td align="left"><p>Optional **Text**. Specifies the direction of text for a field that supports bidirectional reading order. The possible values are **LTR** (left-to-right), **RTL** (right-to-left), and **none**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisplaceOnUpgrade**</p></td>
<td align="left"><p>Optional **Boolean**. If a field definition already exists for the field, **TRUE** to force updates to field properties with the values that are specified in this field definition.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayImage**</p></td>
<td align="left"><p>Optional **Text**. Specifies the name of an icon that is displayed for the column.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>Optional **Text**. The displayed name for a field. There is no restriction on use of spaces. Maximum length is 255 characters. The value can be a reference to a resource in the format **$Resources:String**. For more information, see <a href="http://msdn.microsoft.com/en-us/library/ee696750(VS.100).aspx">Localizing SharePoint Solutions</a>.</p>
<p>The display name can be edited by the user and can change after initial field creation. This name is used as a column heading when the field is displayed in a table view and as a form label when the field is displayed in a form.</p></td>
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
<td align="left"><p>Optional **Number**. A scale factor used in division before displaying a number. The display number is N * Mult / Div (rounded up to the number specified by **Decimals**).</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EnableLookup**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to enable lookup values in the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ExceptionImage**</p></td>
<td align="left"><p>Optional **Text**. Used in a **Recurrence** field type to specify the name of the image file to use for exceptions.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FieldRef**</p></td>
<td align="left"><p>Optional **Text**. For a secondary lookup field, specifies the ID of the primary lookup field on which it depends. The value should be the string representation of a GUID without braces.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FillInChoice**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if the field allows users to fill in values for the column.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Filterable**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if the field can be filtered.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FilterableNoRecurrence**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if a filter can be created on the field in a view that does not expand recurring events. If **Filterable** contains **TRUE**, the field can be filtered in all views regardless of how **FilterableNoRecurrence** is set.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ForcedDisplay**</p></td>
<td align="left"><p>Optional **Text**. Specifies text to display in place of the actual field value. This attribute is used in surveys to prevent the user name from being displayed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Format**</p></td>
<td align="left"><p>Optional **Text**. Specifies the formatting to use for numerical values.</p>
<p>For date/time fields, the following values are possible:</p>
<ul>
<li><p>**DateOnly**   Display (and allow edits to) only the date portion (the time portion is set to 12:00 A.M. for all edited values).</p></li>
<li><p>**DateTime**   Display and edit both date and time of day (default).</p></li>
<li><p>**ISO8601**   Display date and time in ISO8601 time format converted to Coordinated Universal Time (UTC) format: YYYY-MM-DDTHH:MM:SSZ. This is the format used for document properties in 2007 Microsoft Office system as well as for the standard interchange format used in SharePoint Foundation between **New** and **Edit** forms and the server.</p></li>
<li><p>**ISO8601Basic**   Use the abbreviated form of 8601 date/time formats: YYYYMMDDTHHMMSSZ. This is the format used for vCard/iCal.</p></li>
</ul>
<p>For Choice fields, this attribute can be set to **Dropdown** (default), which provides editing options through a drop-down selection, or to **RadioButtons**, which provides options through a group of radio buttons.</p>
<p>For URL fields, this attribute can be set to **Hyperlink** (default), which displays the URL as a normal <A> tag, or to **Image**, which displays the URL as `<IMG SRC="URL" ALT="Description"`.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FromBaseType**</p></td>
<td align="left"><p>Optional **Boolean**. This attribute is deprecated in favor of the **Sealed** attribute.</p></td>
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
<td align="left"><p>Optional **Boolean**. If **TRUE**, the field is completely hidden from the user interface. Setting **ReadOnly** to **TRUE** means the field is not displayed in New or Edit forms but can still be included in views.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**HTMLEncode**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser; characters that could be confused with HTML tags are converted to entities.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ID**</p></td>
<td align="left"><p>Required **Text**. Uniquely identifies the field. The value should be the string representation of a GUID contained within braces (**{}**).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IMEMode**</p></td>
<td align="left"><p>Optional **Text**. Specifies the Input Method Editor (IME) mode bias to use for the field. The IME allows for conversion of keystrokes between languages when one writing system has more characters than can be encoded for the given keyboard.</p>
<p>Possible values include the following:</p>
<ul>
<li><p>**auto**   Not used. To specify this IME mode, set the **IMEMode** property value to an empty string ("").</p></li>
<li><p>**active**   All characters are typed through the IME, but users can still deactivate the IME.</p></li>
<li><p>**inactive**   Characters are typed without the IME, although users can still activate the IME.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**Indexed**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if the column is indexed for use in view filters.</p>
<p>**Note**: Although you can index a Lookup column to improve performance, using an indexed Lookup column to prevent exceeding the list view threshold does not work. To avoid exceeding the list view threshold, use another type of column as the primary or secondary index.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsolateStyles**</p></td>
<td align="left"><p>Optional **Boolean**. For a **Text** field whose **RichText** attribute is **TRUE** and whose **RichTextMode** attribute is **FullHtml**, this attribute specifies that a server will rewrite the HTML of the field to ensure that it will not interfere with the rendering of the surrounding page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsRelationship**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if this field is returned by the **GetRelatedFields()** method from another list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**JoinColName**</p></td>
<td align="left"><p>Optional **Text**. This attribute is defined only for Lookup fields. It is very similar to **ColName**, except it denotes the name of the column that is used in the SQL JOIN between the local and external lists. Ordinarily, this value should not be customized. It is currently used only in the Field schema of certain built-in and base type fields to denote lookups into the URLs (DocMd) table, which is joined on the UrlID column.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**JoinRowOrdinal**</p></td>
<td align="left"><p>Optional **Integer**. Not intended to be used directly from your code.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**JoinType**</p></td>
<td align="left"><p>Optional **Text**. Specifies the type of JOIN used on the field. Possible values include **INNER**, **LEFTOUTER**, and **RIGHTOUTER**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**LCID**</p></td>
<td align="left"><p>Optional **Integer**. The **LCID** attribute can be used to specify the country/region whose currency format is being used, for example, 1033 for the United States.</p>
<p>Two special cases involve the euro symbol format. If LCID=-1 (0xFFFFFFF), the euro symbol is added as a prefix to the number. If LCID=-2 (0xFFFFFFE), the euro symbol is added as a suffix to the number. The number of decimal digits is 2, although this can be overridden by the **Decimals** attribute of the field. The euro currency symbol is equal to 0x20AC in UCS-2.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**List**</p></td>
<td align="left"><p>Optional **Text**. Used to identify the list that is the target of a lookup field (**Type="Lookup"**).</p>
<p>If the target list already exists, the value of the **List** attribute should be the string representation of the GUID (including braces) that identifies the target list. If the target is the same list as the one that the field belongs to, you can specify "Self".</p>
<p>If the target list does not yet exist, the value of the **List** attribute can be a web-relative URL such as "Lists/My List" but only if the target list is created in the same feature as the one that creates the lookup field. In this case, the value of the **List** attribute on the **Field** element must be identical to the value of the **Url** attribute on the <a href="listinstance-element-list-instance.md">ListInstance</a> element that creates the target list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Max**</p></td>
<td align="left"><p>Optional **Number**. Specifies the maximum value allowed for the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**MaxLength**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the maximum number of characters allowed in a field value. Edit forms are adjusted to enforce this value, which is validated on the client. If the user attempts to enter more than the number of characters set by **MaxLength**, an error message appears.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Min**</p></td>
<td align="left"><p>Optional **Number**. Specifies the minimum value allowed for the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Mult**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to allow a lookup field to contain multiple values. The default is **FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **Text**. The internal name of the field. The name must be unique with respect to the set of fields in a list or website. SharePoint Foundation will amend the value if necessary to guarantee its uniqueness; otherwise it does not change for the lifetime of the field definition.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NegativeFormat**</p></td>
<td align="left"><p>Optional **Text**. Specifies how to indicate negative values. Can be set to one of the following values:</p>
<ul>
<li><p>**MinusSign**   Use minus sign as prefix.</p></li>
<li><p>**Parens**   Surround with parentheses.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**Node**</p></td>
<td align="left"><p>Optional **Text**. Used in XML forms, this attribute is required for all fields except processing instruction (PI) links, and it specifies the XPath expression for a node that is promoted.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NoEditFormBreak**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to prevent a line break from being added between fields in the new item form or edit item form. Some field types, such as a rich-text field, provide spacing by default, and this attribute allows control over the extra spacing that results.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**NumLines**</p></td>
<td align="left"><p>Optional **Integer**. Recommends the number of lines (rows) to display in a TEXTAREA block during editing. This is merely a client UI hint—there is no enforced limitation on the number of lines of text that can be edited.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Overwrite**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies whether the field definition for a new field that is activated on a site (**SPWeb**) overwrites the field definition for an existing field, in cases where the new field has the same field ID as the existing field. **True** if the new field overwrites the existing field with the same field ID; otherwise **false**. The default is **false**.</p>
<p>**Note**: If the existing field is read-only, or if it is sealed, it will not be overwritten by the field that is being activated, even if this attribute is set to **true**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**OverwriteInChildScopes**</p></td>
<td align="left"><p>Optional **Boolean**. Indicates whether a specified field definition should be overwritten when you are provisioning the field in a site collection and that field definition already exists in the child Web of that site collection. **True** if the field definition should be overwritten; otherwise **false**. The default value is **false**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Percentage**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if the value is displayed as a percentage; that is, a number multiplied by 100 with a percent sign (%) appended.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PIAttribute**</p></td>
<td align="left"><p>Optional **Text**. Specifies the attribute in the document processing instruction (specified by the **PITarget** attribute) to use as the column value. Used for property promotion and demotion in XML documents. If you specify the **PIAttribute** attribute, you must also specify the **PITarget** attribute.</p>
<p>For more information about how the **Node**, **PIAttribute**, **PITarget**, **Primary PIAttribute**, and **PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see <a href="http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829(Office.15).aspx">Using Content Types to Specify XML Document Properties</a>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PITarget**</p></td>
<td align="left"><p>Optional **Text**. Specifies the document processing instruction in which the column value is stored in documents of this content type. Used for property promotion and demotion in XML documents. If you specify the **PIAttribute** attribute, you must also specify the **PITarget** attribute.</p>
<p>For more information about how the **Node**, **PIAttribute**, **PITarget**, **Primary PIAttribute**, and **PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see <a href="http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829(Office.15).aspx">Using Content Types to Specify XML Document Properties</a>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PrependId**</p></td>
<td align="left"><p>Optional **Boolean**. Used by lookup fields that can have multiple values. Specify **TRUE** to display the item ID of a target item as well as the value of the target field in Edit and New item forms.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Presence**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if user information is present for the field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PrimaryKey**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if the field is the primary key in the relationship between the list and another list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PrimaryPIAttribute**</p></td>
<td align="left"><p>Optional **Text**. Used for property promotion and demotion in XML documents. Specifies an alternate attribute in the document processing instruction, specified by the **PrimaryPITarget**, to use as the column value. If you specify the **PrimaryPIAttribute** attribute, you must also specify the **PrimaryPITarget** attribute. If specified, SharePoint Foundation uses these values before those specified in the **PITarget** and **PIAttribute** attributes.</p>
<p>For more information about how the **Node**, **PIAttribute**, **PITarget**, **Primary PIAttribute**, and **PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see <a href="http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829(Office.15).aspx">Using Content Types to Specify XML Document Properties</a>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PrimaryPITarget**</p></td>
<td align="left"><p>Optional **Text**. Specifies an alternative document processing instruction in which the column value is stored for documents of this content type. If you specify the **PrimaryPIAttribute** attribute, you must also specify the **PrimaryPITarget** attribute. If specified, SharePoint Foundation uses these values before those specified in the **PITarget** and **PIAttribute** attributes.</p>
<p>For more information about how the **Node**, **PIAttribute**, **PITarget**, **Primary PIAttribute**, and **PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see <a href="http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829(Office.15).aspx">Using Content Types to Specify XML Document Properties</a>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ReadOnly**</p></td>
<td align="left"><p>Optional **Boolean**. If **TRUE**, the field is not displayed in New or Edit forms but can be included in views. In addition, setting **ReadOnly** to **TRUE** hides the field from Site Settings pages for managing site columns and content types. Setting the **Hidden** attribute to **TRUE** completely hides the field from the UI. If you do not include this attribute, SharePoint Foundation treats the column as if this attribute is set to **False**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ReadOnlyEnforced**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that the user cannot change the field by any means and that it can only be changed by the system.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RelationshipDeleteBehavior**</p></td>
<td align="left"><p>Optional **Text**. Specifies a deletion constraint for a lookup field. For more information, see the **SPRelationshipDeleteBehavior** enumeration.</p>
<p>For a site column, the value must not be **Cascade** or **Restrict**. It can be **None** (the default), or the attribute can be omitted.</p>
<p>If you specify any value other than **None**, you must also specify **TRUE** for the **Indexed** attribute and **FALSE** for the **Mult** attribute.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RenderXMLUsingPattern**</p></td>
<td align="left"><p>Optional **Boolean**. Used for computed fields to determine the display format. If **TRUE**, values are rendered based on the display pattern of the computed field, rather than on the column value of the first noncomputed field reference upon which the computed field is based. For example, in a picture library, the Picture Size column is represented by **width** x **height**, but if this attribute is not set to **TRUE**, only the first field reference, **width**, is displayed. If it is set to **TRUE**, the format of **width** x **height** is displayed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Required**</p></td>
<td align="left"><p>Required **Boolean**. If **TRUE**, the field must not have an empty value assigned to it. If a nonempty field value is not given in a form post, either the standard required-field text or an explicitly specified message (that is, via <ErrorText> tags) is displayed in the error form. This validation is handled only by the client (the database always allows **NULL** for all user-defined fields).</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RestrictedMode**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to not allow the **Note** field to contain enhanced rich text formatting, such as pictures, tables, or hyperlinks, nor to allow pasting formatted text into the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ResultType**</p></td>
<td align="left"><p>Optional **Text**. Specifies the data type of values that are returned from the field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RichText**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if the field displays rich text formatting.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RowOrdinal**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the database location for the field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Sealed**</p></td>
<td align="left"><p>Optional **Boolean**. Setting this attribute to **TRUE** for a field marks the field as irremovable. The **Change Column** page has no **Delete** button. Users cannot delete the field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SeparateLine**</p></td>
<td align="left"><p>Optional **Boolean**. Used internally to support rendering a field (for example, Notes or Comments) in a separate line. This attribute is not intended for public use.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SetAs**</p></td>
<td align="left"><p>Not intended to be used directly from your code.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowAddressBookButton**</p></td>
<td align="left"><p>Not intended to be used directly from your code.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowField**</p></td>
<td align="left"><p>Optional **Text**. When the **Type** attribute is "Lookup" the value of the **ShowField** attribute specifies the internal name of the target field to look up. If no value is specified, the hyperlinked text from the Title field of the record in the target list is displayed.</p>
<p>The following field types are allowed as the target of a lookup field: **Counter**, **DateTime**, **Number**, and **Text**. The **Computed** field type can be a target if lookups are enabled. For more information, see the **EnableLookup** property of the **SPFieldComputed** class. The **Calculated** field type can be a target if the output is text. For more information, see the **OutputType** property of the **SPFieldCalculated**** class.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowInDisplayForm**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to display the field in the form for viewing the item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowInEditForm**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to display the field in the form for editing the item.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowInFileDlg**</p></td>
<td align="left"><p>Optional **Boolean**. This attribute is valid only for fields within document library schemas. If **FALSE**, the field does not show up in the property dialog box for saving forms that appears when saving from client applications. For example, the Title field has this attribute because this is set directly in the document being saved to the document library.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowInListSettings**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to display the column on the page for customizing list settings.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowInNewForm**</p></td>
<td align="left"><p>Optional **Boolean**. If **FALSE**, the field does not show up in a **Fields** enumeration when the display mode is set to **New**. Fields with this setting do not show up in the default New Item page for a given list. In particular, this is used to hide fields on the page for uploading documents to the document library.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowInVersionHistory**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to display the column on the page for viewing list item versions.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowInViewForms**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that the field is displayed in pages that are used to view list data.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Sortable**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if values in the field can be sorted.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SourceID**</p></td>
<td align="left"><p>Optional **Text**. Contains the namespace that defines the field, such as `http://schemas.microsoft.com/sharepoint/v3` or the GUID of the list in which the custom field was created.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**StaticName**</p></td>
<td align="left"><p>Optional **Text**. Contains an internal name of the field that might not be unique within a field collection. However, unlike the **Name** attribute, which might be amended to ensure its uniqueness, the value of the **StaticName** attribute is assigned to the field exactly as you have defined it. You can later use this value in code to get a reference to the field by calling the **TryGetFieldByStaticName** method.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**StorageTZ**</p></td>
<td align="left"><p>Specifies how date/time values are stored. When **StorageTZ** is set to **UTC**, the date/time is handled as Coordinated Universal Time (UTC). To denote that a date/time value refers to "abstract" time, meaning that the date/time is stored in the database as entered by the user without conversion or storage of the local time zone, omit the **StorageTZ** attribute.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**StripWS**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if white space is removed from the beginning and end of field values.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SuppressNameDisplay**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to not display the name of the user in a **User** field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TextOnly**</p></td>
<td align="left"><p>Optional **Boolean**. If **TRUE**, the field can contain only **Text** values.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>Optional **Text**. Contains the title of the field that is displayed in the user interface.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Required **Text**. The data type of the field (unless the **Field** element is a child of <a href="projectedfields-element-view.md">ProjectedFields</a>).</p>
<p>**Note**: In the Technology Preview release of Microsoft SharePoint Foundation 2010, the **Type** attribute has a different meaning and only one possible value ("Lookup") when it is a child of <a href="projectedfields-element-view.md">ProjectedFields</a>. For more information about this use of **Type**, see <a href="projectedfields-element-view.md">ProjectedFields Element (View)</a>.</p><br/>
<p>SharePoint Foundation includes the following data types by default:</p>
<ul>
<li><p>**AllDayEvent**   Specifies an all day event. Corresponds to the **bit** SQL data type.</p></li>
<li><p>**Attachments**   Stores the URLs for attachments. Corresponds to the **bit** SQL data type.</p></li>
<li><p>**Boolean**   Used to store a **TRUE**/**FALSE** value (stored in the database as 0 or 1). This field is sortable and groupable. Corresponds to the **bit** SQL data type and represented by the **SPFieldBoolean** class.</p></li>
<li><p>**Calculated**   Specifies a field whose value is calculated based on other columns. Corresponds to the **sql_variant** SQL data type and represented by the SPFieldCalculated** class.</p></li>
<li><p>**Choice**   Allows the user to specify a predetermined set of values that can be used to enter data into the field. The **Choice** and **Lookup** types are the most important fields for sorting and grouping. The **BaseType** and **Format** attributes can be used for choice fields. This field is sortable and groupable. When a value is given for a choice option, then that value is used as the submitted value for the field selection. When no value is given, that choice is submitted as the text value of the choice. In all cases, the text value of the choice is what is displayed in the UI (drop-down list or radio button text). The order in which choices appear in the editing UI is always the order that items are specified within the **CHOICES** element. Use the **MultiChoice** type to specify a **Choice** field that implements check boxes and allows the user to select multiple values. Corresponds to the **nvarchar** SQL data type and represented the **SPFieldChoice** class.</p></li>
<li><p>**Computed**   Specifies a field that depends on another field for its contents. For example, a **LinkTitleNoMenu** field amounts to surrounding a Title field value with a hyperlink. Represented by the **SPFieldComputed** class.</p></li>
<li><p>**ContentTypeId**   Contains a content type ID. For information about the format of content type IDs, see <a href="http://msdn.microsoft.com/library/81fa8d81-c4f5-4750-8f70-811620fdffcf(Office.15).aspx">Content Type IDs</a>. Corresponds to the **varbinary** SQL data type.</p></li>
<li><p>**Counter**   Generally used only for the internal ID field. Its integer value is set automatically to be unique with respect to every other item in the current list. The **Counter** type is always read-only and cannot be set through a form post. This field is sortable but not groupable. Corresponds to the **int** SQL data type.</p></li>
<li><p>**CrossProjectLink**   Used to connect an event in a SharePoint list with a Meeting Workspace site; refers specifically to the field type of the checkbox used in New and Edit Item forms to create a Meeting Workspace site for the item. Corresponds to the **bit** SQL data type and represented by the **SPFieldCrossProjectLink** class.</p></li>
<li><p>**Currency**   Allows for a currency value to be entered. Each currency field is tied to a specific locale's currency. In all other respects, it is treated like the **Number** field type. Use the **LCID** attribute to indicate a currency of a specific locale. The **Decimals**, **Max**, and **Min** attributes can be used for currency types. This field is sortable and groupable. Corresponds to the **float** SQL data type and represented by the **SPFieldCurrency** class.</p></li>
<li><p>**DateTime**   Allows for storage of a fully qualified date or time of day. Use the **Format** attribute to specify date formatting, and use the **StorageTZ** attribute to determine how date/time values are stored. This field is sortable and groupable. For Display mode, the order of date formatting derives from the regional settings ("M/D/Y" or "D/M/Y"). In Edit mode (or in New mode for **Default** element value), date/times are rendered in universal format: M/D/Y hh:mm am/pm. Corresponds to the **datetime** SQL data type and represented the **SPFieldDateTime** class.</p></li>
<li><p>**File**   Contains a file. Corresponds to the **uniqueidentifier** SQL data type.</p></li>
<li><p>**GridChoice**   Contains a rating scale for surveys. Corresponds to the **ntext** SQL data type and represented by the **SPFieldRatingScale** class.</p></li>
<li><p>**Guid**   Allows for globally unique identifiers (GUIDs). Corresponds to the **uniqueidentifier** SQL data type.</p></li>
<li><p>**Integer**   Allows for positive or negative integer values. The **Commas** and **NegativeFormat** attributes are used to specify integer formatting. Corresponds to the **int** SQL data type.</p></li>
<li><p>**Lookup**   Behaves very similarly to a **Choice** field, except that the available options come from another list rather than being a hard-coded selection of values. The **List** and **ShowField** attributes can be used for Lookup fields. This field is sortable and groupable. For sorting and grouping, use the **DisplayField** value (Title, by default) rather than the foreign key stored in the list. Corresponds to the **int** SQL data type and represented by the **SPFieldLookup** class.</p></li>
<li><p>**LookupMulti**   A **Lookup** field that can contain more than one value. Parent type: **Lookup**.</p></li>
<li><p>**ModStat**   Contains content approval status. Possible values include **Approved** (default), **Rejected**, and **Pending** (stored in the database as 0, 1, or 2, respectively). Corresponds to the **int** SQL data type.</p></li>
<li><p>**MultiChoice**   Specifies a **Choice** field that implements check boxes and allows the user to select multiple values. Corresponds to the **ntext** SQL data type and represented by the **SPFieldMultiChoice** class.</p></li>
<li><p>**MultiColumn**   A **Note** field that emulates a field containing multiple values. For an example of a multicolumn field type, see <a href="http://msdn.microsoft.com/library/b3315997-671f-4c29-9518-48cc4592f205(Office.15).aspx">Custom Field Type Definition</a>. For information on multicolumn fields, see <a href="http://msdn.microsoft.com/library/62818d63-6473-42d0-b12f-251865887b33(Office.15).aspx">Custom Multicolumn Field Classes</a>. Parent type: **Note**.</p></li>
<li><p>**Note**   Allows users to enter multiple lines of text. This field is not sortable or groupable. All text is defined to be straight ASCII characters without HTML markup. Anything that looks like HTML markup or a URL is simply quoted (for example, Server.HTMLEncode) to look like straight text. The control for editing this format is a simple TEXTAREA block. Use the **NumLines** attribute to specify the number of lines to display. Corresponds to the **ntext** SQL data type and represented by the **SPFieldMultiLineText** class.</p></li>
<li><p>**Number**   Allows for a floating point number to be entered. This field is sortable and groupable. Numbers entered are parsed according to the current locale settings for decimal points and thousand separators. Negative numbers can be indicated by wrapping them in parentheses or by using a negative symbol. The following attributes can be used in conjunction with the **Number** attribute to specify number formatting: **Decimals**, **Div**, **Max**, **Min**, **Mult**, and **Percentage**. Corresponds to the **float** SQL data type and represented by the **SPFieldNumber** class.</p></li>
<li><p>**PageSeparator**   Inserts a page break in a survey list. Represented by the **SPFieldPageSeparator** class.</p></li>
<li><p>**Recurrence**   Used to edit and define the recurrence pattern for an item in an events list. Corresponds to the **bit** SQL data type.</p></li>
<li><p>**Text**   A single line of text entered in an edit box. This field is sortable and groupable. Use the **MaxLength** attribute to set a maximum number of characters allowed. Corresponds to the **nvarchar** SQL data type and represented by the **SPFieldText** class.</p></li>
<li><p>**ThreadIndex**   Contains the ID that indicates the relative position of a message within a conversation thread. Corresponds to the **varbinary** SQL data type.</p></li>
<li><p>**Threading**   The **Threading** field type is used in the creation and display of threaded discussion-like views. Any list can contain a threading column, but a special UI is generated when it is used. (It is never displayed as a standard editable field in a form nor as a normal column in a view.) If a sort is performed on a threading field, a pre-order traversal of all the records in a parent-child relationship is returned. This is accomplished by saving the concatenation of the creation date and ID number of all the parent records of a particular record. Corresponds to the **varchar** SQL data type.</p></li>
<li><p>**URL**   Used to create a freeform hyperlink. A URL field is displayed as **Description**. If no description is given, it is displayed as **URL**. The URL text is itself stored in the URLs (DocMd) table, which stores all the URLs in SharePoint databases on the server. This is done so that any URLs that are local on the server can be updated through link fixup when their destination moves. When a record with a URL field contained within it is deleted, the corresponding referenced record from the URL table is also deleted. This field is sortable and groupable. (The sort is defined according to the textual description rather than the contents of the URL; if no description is given, it sorts the same as blank.) When **Type** is **URL**, the **LinkType** attribute can be used to specify the type of link. Corresponds to the **nvarchar** SQL data type and represented by the **SPFieldUrl** class.</p></li>
<li><p>**User**   A **Lookup** field that references the UserInfo database table. Corresponds to the **int** SQL data type and represented by the **SPFieldUser** class.</p></li>
<li><p>**UserMulti**   A **User** field that can contain more than one value. Parent type: **LookupMulti**.</p></li>
<li><p>**WorkflowEventType**   Specifies a workflow event type as represented by the**SPWorkflowHistoryEventType** enumeration. Parent type: **Integer**.</p></li>
<li><p>**WorkflowStatus**   Specifies workflow status as represented by the **SPWorkflowStatus** enumeration. Corresponds to the **nvarchar** SQL data type.</p></li>
</ul>
</td>
</tr>
<tr class="even">
<td align="left"><p>**UniqueId**</p></td>
<td align="left"><p>Optional **Text**. Not intended to be used directly from your code.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UnlimitedLengthInDocumentLibrary**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to allow unlimited field length in document libraries.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**URLEncode**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format, for example, %c3%ab for character ë.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**URLEncodeAsURL**</p></td>
<td align="left"><p>Optional **Boolean**. Like **URLEncode**, but **TRUE** to specify that the string to encode is a path component of a URL so that forward slashes ("/") are not encoded.</p></td>
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
<td align="left"><p>**Viewable**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that the field is added to the default view. The default value is **TRUE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Width**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the width in pixels of the images that are displayed for users in the User Information list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WikiLinking**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that wiki links, which appear in the form of double brackets (**[[…]]**), become translated into HTML links, which use the `<a>` tag.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**XName**</p></td>
<td align="left"><p>Optional **Text**. Used internally in XML forms to identify fields that have been added, deleted, or modified. This attribute is not intended for public use.</p></td>
</tr>
</tbody>
</table>

<br/>

### Child elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="choices-element-list.md">CHOICES</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="default-element-listfield.md">Default</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="defaultformula-element-list.md">DefaultFormula</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="displaybidipattern-element-list.md">DisplayBidiPattern</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="displaypattern-element-list.md">DisplayPattern</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="fieldrefs-element-list.md">FieldRefs</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="formula-element-list.md">Formula</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="formuladisplaynames-element-list.md">FormulaDisplayNames</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="mappings-element-list.md">MAPPINGS</a></p></td>
</tr>
</tbody>
</table>

<br/>

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="elements-element-field.md">Elements</a></p></td>
</tr>
</tbody>
</table>

<br/>

### Remarks

> [!IMPORTANT] 
> When defining a custom field, you must specify the ID, Type, Name, DisplayName, and Group attributes for the field to appear correctly in Microsoft SharePoint Foundation. Statement completion in Microsoft Visual Studio erroneously indicates that you need only the first three of these attributes when in fact all five are required.

<br/>

### Example

The following example shows an element manifest for a Feature that creates three site columns.

```XML
    <?xml version="1.0" encoding="utf-8"?>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">

      <Field ID="{060E50AC-E9C1-4D3C-B1F9-DE0BCAC300F6}"
             Name="Amount"
             DisplayName="Amount"
             Type="Currency"
             Decimals="2"
             Min="0"
             Required="FALSE"
             Group="Financial Columns" />

      <Field ID="{943E7530-5E2B-4C02-8259-CCD93A9ECB18}"
             Name="CostCenter"
             DisplayName="Cost Center"
             Type="Choice"
             Required="FALSE"
             Group="Financial Columns">
        <CHOICES>
          <CHOICE>Administration</CHOICE>
          <CHOICE>Information</CHOICE>
          <CHOICE>Facilities</CHOICE>
          <CHOICE>Operations</CHOICE>
          <CHOICE>Sales</CHOICE>
          <CHOICE>Marketing</CHOICE>
        </CHOICES>
      </Field>

      <Field ID="{1511BF28-A787-4061-B2E1-71F64CC93FD5}"
             Name="DateOpened"
             DisplayName="Date Opened"
             Type="DateTime"
             Format="DateOnly"
             Required="FALSE"
             Group="Financial Columns">
        <Default>[today]</Default>
      </Field></Elements>
```

<br/>

## See also

- [Field definitions](field-definitions.md)
- [Columns](http://msdn.microsoft.com/library/0402b3a7-3665-43df-9769-85e3aa1b2432(Office.15).aspx)
- [Field element (List)](field-element-list.md)








