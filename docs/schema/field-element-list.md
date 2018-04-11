---
title: Field element (List)
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
description: Defines the internal data types used in the list infrastructure of a SharePoint website. A field is a column or attribute of information that a user can add to a list.
---

# Field element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines the internal data types used in the list infrastructure of a SharePoint website. A field is a column or attribute of information that a user can add to a list.
  
```XML
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
</Field>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Aggregation** <br/> | Optional **Text**. Used in an aggregate field on an XML form to specify the function to apply to a collection of values or elements returned by an XPath expression. If you use the **Node** attribute to specify an XPath expression that returns a collection of values, you can also include an **Aggregation** attribute that specifies the action to take on the value set that is returned. This action can be either an aggregation function or an indication of the particular element within the collection.  <br/><br/>Possible values include the following:  <br/> - **sum** Add the values.  <br/> - **count** Count the number of values.  <br/> - **average** Find the average of the values.  <br/> - **min** Find the minimum value.  <br/> - **max** Find the maximum value.  <br/> - **merge** Merge the values.  <br/> - **plaintext** Converts node text content into plain text.  <br/> - **first** Apply property promotion and demotion to the first element in the collection.  <br/> - **last** Apply property promotion and demotion to the last element in the collection.  <br/><br/>For more information about how the **Node**, **PIAttribute**, **PITarget**, **Primary** **PIAttribute**, and **PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see [Using Content Types to Specify XML Document Properties](http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829%28Office.15%29.aspx).  <br/> |
|**AllowDeletion** <br/> |Optional **Boolean**. **TRUE** if the field can be deleted.  <br/> |
|**AllowHyperlink** <br/> |Optional **Boolean**. **TRUE** if hyperlinks can be used in the field.  <br/> |
|**AllowMultiVote** <br/> |Optional **Boolean**. **TRUE** if multiple responses are allowed in a survey.  <br/> |
|**AppendOnly** <br/> |Optional **Boolean**. When versioning is enabled in the list, **TRUE** if text can only be appended to existing text in the **Note** field.  <br/> |
|**AuthoringInfo** <br/> |Optional **Text**. A descriptive string that is displayed in the field editing pages to identify the field and its purpose; for example, the **LinkTitle** field has the authoring info "(link to item)". This attribute is usually used if a field of the same name exists for another purpose.  <br/> |
|**BaseType** <br/> |Optional. The **BaseType** attribute can be set to **Integer**, which stores values as integers, or to **Text** (default), which stores values as text. You cannot create integer base-type choice fields.  <br/> |
|**CalType** <br/> | Optional **Integer**. Specifies the calendar type.<br/><br/>Possible values include the following:  <br/>  16 Saka Era  <br/>  15 Chinese lunar  <br/>  14 Korean and Japanese lunar  <br/>  12 Gregorian transliterated French  <br/>  11 Gregorian transliterated English  <br/>  10 Gregorian Arabic  <br/>  9 Gregorian Middle East French  <br/>  8 Hebrew (lunar)  <br/>  7 Thai  <br/>  6 Hijri (Arabic lunar)  <br/>  5 Korean Tangun Era  <br/>  4 Taiwan Era  <br/>  3 Japanese Emperor Era  <br/>  1 Gregorian  <br/>  0 No type specified  <br/> |
|**CanToggleHidden** <br/> |Optional **Boolean**. **TRUE** if the field can be hidden through the user interface.  <br/> |
|**ClassInfo** <br/> |Optional **Text**. Specifies a cascading style sheet (CSS) class to use for the field in the standard table view. If set, the specified class is used instead of the standard **ms-vb2** class.  <br/> |
|**ColName** <br/> |Optional **Text**. An internal attribute that defines the mapping of the field to the physical storage name for this field. This must be a valid name in the underlying database and must be identical to the name used in the database table. If not specified, the server generates a column name that does not collide with any existing column names and that contains only characters that are allowed by Microsoft SQL Server.  <br/> |
|**ColName2** <br/> |Optional **Text**.  <br/> |
|**Commas** <br/> |Optional **Boolean**. **TRUE** if commas are used to separate thousands.  <br/> |
|**Customization** <br/> |Optional **Text**.  <br/> |
|**Decimals** <br/> |Optional **Integer**. Determines the number of decimals to display. The value displayed is rounded up to the display precision; for example, 1.05 is displayed as 1.1 when rounded to one decimal place.  <br/> |
|**Description** <br/> |Optional **Text**. Provides the description that is shown in the edit form for a list if a field description is specified. By default, fields in Microsoft SharePoint Foundation do not have descriptions.  <br/> |
|**Dir** <br/> |Optional **Text**. Specifies the direction of text for a field that supports bidirectional reading order. The possible values are **LTR** (left-to-right), **RTL** (right-to-left), and **none**.  <br/> |
|**Direction** <br/> |Optional **Text**.  <br/> |
|**DisplaceOnUpgrade** <br/> |Optional **Boolean**. If a field definition already exists for the field, **TRUE** to force updates to field properties with the values that are specified in this field definition.  <br/> |
|**DisplayImage** <br/> |Optional **Text**. Specifies the name of an icon that is displayed for the column.  <br/> |
|**DisplayName** <br/> |Optional **Text**. The displayed name for a field. There is no restriction on text size or use of spaces. The display name can be edited by the user and can change after initial field creation. This name is used as a column heading when the field is displayed in a table view and as a form label when the field is displayed in a form. The <FieldName/> tag returns the display name if given; otherwise, it defaults to the **Name** attribute.  <br/> |
|**DisplayNameSrcField** <br/> |Optional **Text**. Generally used for a computed field that needs the same name as another field. If the source field is modified and the display name is changed by a user, then the display name of this field will also change. This string refers to the name of the other field.  <br/> |
|**DisplaySize** <br/> |Optional **Integer**.  <br/> |
|**Div** <br/> |Optional **Number**. A scale factor used in division before displaying a number. The display number is `N * Mult / Div` (rounded up to the number specified by **Decimals**).  <br/> |
|**EnableLookup** <br/> |Optional **Boolean**. **TRUE** to enable lookup values in the field.  <br/> |
|**EnforceUniqueValues** <br/> |Optional **Boolean**.  <br/> |
|**ExceptionImage** <br/> |Optional **Text**. Used in a **Recurrence** field type to specify the name of the image file to use for exceptions.  <br/> |
|**FieldRef** <br/> |Optional **Text**. Specifies the name of another field to which the field refers, such as a Lookup field.  <br/> |
|**FillInChoice** <br/> |Optional **Boolean**. **TRUE** if the field allows users to fill in values for the column.  <br/> |
|**Filterable** <br/> |Optional **Boolean**. **TRUE** if the field can be filtered.  <br/> |
|**FilterableNoRecurrence** <br/> |Optional **Boolean**. **TRUE** if a filter can be created on the field in a view that does not expand recurring events. If **Filterable** contains **TRUE**, the field can be filtered in all views regardless of how **FilterableNoRecurrence** is set.  <br/> |
|**ForcedDisplay** <br/> |Optional **Text**. Specifies text to display in place of the actual field value. This attribute is used in surveys to prevent the user name from being displayed.  <br/> |
|**ForcePromoteDemote** <br/> |Optional **Boolean**.  <br/> |
|**Format** <br/> | Optional **Text**. Specifies the formatting to use for numerical values.<br/><br/>For date/time fields, the following values are possible:  <br/>- **DateOnly** Display (and allow edits to) only the date portion (the time portion is set to 12:00 A.M. for all edited values).  <br/>- **DateTime** Display and edit both date and time of day (default).  <br/>- **ISO8601** Display date and time in ISO8601 time format converted to Coordinated Universal Time (UTC) format: YYYY-MM-DDTHH:MM:SSZ. This is the format used for document properties in 2007 Microsoft Office system as well as for the standard interchange format used in SharePoint Foundation between **New** and **Edit** forms and the server.  <br/>- **ISO8601Basic** Use the abbreviated form of 8601 date/time formats: YYYYMMDDTHHMMSSZ. This is the format used for vCard/iCal.<br/><br/>For Choice fields, this attribute can be set to **Dropdown** (default), which provides editing options through a drop-down selection, or to **RadioButtons**, which provides options through a group of radio buttons.<br/><br/>For URL fields, this attribute can be set to **Hyperlink** (default), which displays the URL as a normal `<A>` tag, or to **Image**, which displays the URL as `<IMG SRC="URL" ALT="Description">`.  <br/> |
|**FromBaseType** <br/> |Optional **Boolean**. This attribute is deprecated in favor of the **Sealed** attribute.  <br/> |
|**Group** <br/> |Optional **Text**. Specifies the column group to which the field belongs.  <br/> |
|**HeaderImage** <br/> |Optional **Text**. Specifies the name of an image file to use as a header in the field.  <br/> |
|**Height** <br/> |Optional **Integer**. Specifies the height in pixels of the images that are displayed for users in the User Information list.  <br/> |
|**Hidden** <br/> |Optional **Boolean**. If **TRUE**, the field is completely hidden from the user interface. Setting **ReadOnly** to **TRUE** means the field is not displayed in New or Edit forms but can still be included in views.  <br/> |
|**HTMLEncode** <br/> |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser; characters that could be confused with HTML tags are converted to entities.  <br/> |
|**ID** <br/> |Optional **Text**. Specifies the GUID of the field contained within braces (**{}**).  <br/> |
|**Id** <br/> |Optional **Text**.  <br/> |
|**IMEMode** <br/> | Optional **Text**. Specifies the Input Method Editor (IME) mode bias to use for the field. The IME allows for conversion of keystrokes between languages when one writing system has more characters than can be encoded for the given keyboard.<br/><br/>Possible values include the following:  <br/>- **auto** Not used. To specify this IME mode, set the **IMEMode** property value to an empty string (`""`).  <br/>- **active** All characters are typed through the IME, but users can still deactivate the IME.  <br/>- **inactive** Characters are typed without the IME, although users can still activate the IME.  <br/> |
|**Indexed** <br/> |Optional **Boolean**. **TRUE** if the column is indexed for use in view filters.  <br/> |
|**IsolateStyles** <br/> |Optional **Boolean**. For a **Text** field whose **RichText** attribute is **TRUE** and whose **RichTextMode** attribute is **FullHtml**, this attribute specifies that a server will rewrite the HTML of the field to ensure that it will not interfere with the rendering of the surrounding page.  <br/> |
|**IsRelationship** <br/> |Optional **Boolean**. **TRUE** if the field is discoverable from the list to which it looks for its value.  <br/> |
|**JoinColName** <br/> |Optional **Text**. This attribute is defined only for Lookup fields. It is very similar to **ColName**, except it denotes the name of the column that is used in the SQL JOIN between the local and external lists. Ordinarily, this value should not be customized. It is currently used only in the Field schema of certain built-in and base type fields to denote lookups into the URLs (DocMd) table, which is joined on the UrlID column.  <br/> |
|**JoinRowOrdinal** <br/> |Optional **Integer**. Not intended to be used directly from your code.  <br/> |
|**JoinType** <br/> |Optional **Text**. Specifies the type of JOIN used on the field. Possible values include **INNER**, **LEFT** **OUTER**, and **RIGHT** **OUTER**.  <br/> |
|**LCID** <br/> |Optional **Integer**. The **LCID** attribute can be used to specify the country/region whose currency format is being used, for example, 1033 for the United States.<br/><br/>Two special cases involve the euro symbol format. If LCID = -1 (0xFFFFFFF), the euro symbol is added as a prefix to the number. If LCID = -2 (0xFFFFFFE), the euro symbol is added as a suffix to the number. The number of decimal digits is 2, although this can be overridden by the **Decimals** attribute of the field. The euro currency symbol is equal to 0x20AC in UCS-2.  <br/> |
|**LinkToItem** <br/> |Optional **Boolean**.  <br/> |
|**LinkToItemAllowed** <br/> |Optional **Text**.  <br/> |
|**List** <br/> |Optional **Text**. Specifies the internal name of a list.  <br/> |
|**ListItemMenu** <br/> |Optional **Boolean**.  <br/> |
|**ListItemMenuAllowed** <br/> |Optional **Text**.  <br/> |
|**Max** <br/> |Optional **Number**. Specifies the maximum value allowed for the field.  <br/> |
|**MaxLength** <br/> |Optional **Integer**. Specifies the maximum number of characters allowed in a field value. Edit forms are adjusted to enforce this value, which is validated on the client. If the user attempts to enter more than the number of characters set by **MaxLength**, an error message appears.  <br/> |
|**Min** <br/> |Optional **Number**. Specifies the minimum value allowed for the field.  <br/> |
|**Mult** <br/> |Optional **Boolean**. A scale factor used in multiplication before displaying a number.  <br/> |
|**Name** <br/> |Required **Text**. The name of a field. This is the internal name of a field and is guaranteed never to change for the lifetime of the field definition. It must be unique with respect to the set of fields in a list. The name is autogenerated based on the user-defined name for a field.  <br/> |
|**NegativeFormat** <br/> | Optional **Text**. Specifies how to indicate negative values. Can be set to one of the following values:  <br/>- **MinusSign** Use minus sign as prefix.  <br/>- **Parens** Surround with parentheses.  <br/> |
|**Node** <br/> |Optional **Text**. Used in XML forms, this attribute is required for all fields except processing instruction (PI) links, and it specifies the XPath expression for a node that is promoted.  <br/> |
|**NoEditFormBreak** <br/> |Optional **Boolean**. **TRUE** to prevent a line break from being added between fields in the new item form or edit item form. Some field types, such as a rich-text field, provide spacing by default, and this attribute allows control over the extra spacing that results.  <br/> |
|**NumLines** <br/> |Optional **Integer**. Recommends the number of lines (rows) to display in a TEXTAREA block during editing. This is merely a client UI hint—there is no enforced limitation on the number of lines of text that can be edited.  <br/> |
|**Percentage** <br/> |Optional **Boolean**. **TRUE** if the value is displayed as a percentage; that is, a number multiplied by 100 with a percent sign (%) appended.  <br/> |
|**PIAttribute** <br/> |Optional **Text**. Specifies the attribute in the document processing instruction (specified by the **PITarget** attribute) to use as the column value. Used for property promotion and demotion in XML documents. If you specify the **PIAttribute** attribute, you must also specify the **PITarget** attribute.<br/><br/>For more information about how the **Node**, **PIAttribute**, **PITarget**, **Primary PIAttribute**, and **PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see [Using Content Types to Specify XML Document Properties](http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829%28Office.15%29.aspx).  <br/> |
|**PITarget** <br/> |Optional **Text**. Specifies the document processing instruction in which the column value is stored in documents of this content type. Used for property promotion and demotion in XML documents. If you specify the **PIAttribute** attribute, you must also specify the **PITarget** attribute.<br/><br/>For more information about how the **Node**, **PIAttribute**, **PITarget**, **Primary PIAttribute**, and **PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see [Using Content Types to Specify XML Document Properties](http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829%28Office.15%29.aspx).  <br/> |
|**PrependId** <br/> |Optional **Boolean**. Used in Issue Tracking lists, **TRUE** to display the collection IDs of related issue items in Edit and New item forms.  <br/> |
|**Presence** <br/> |Optional **Boolean**. **TRUE** if user information is present for the field.  <br/> |
|**PrimaryKey** <br/> |Optional **Boolean**. **TRUE** if the field is the primary key in the relationship between the list and another list.  <br/> |
|**PrimaryPIAttribute** <br/> |Optional **Text**. Used for property promotion and demotion in XML documents. Specifies an alternate attribute in the document processing instruction, specified by the **PrimaryPITarget**, to use as the column value. If you specify the **PrimaryPIAttribute** attribute, you must also specify the **PrimaryPITarget** attribute. If specified, SharePoint Foundation uses these values before those specified in the **PITarget** and **PIAttribute** attributes.<br/><br/>For more information about how the **Node**, **PIAttribute**, **PITarget**, **Primary PIAttribute**, and **PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see [Using Content Types to Specify XML Document Properties](http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829%28Office.15%29.aspx).  <br/> |
|**PrimaryPITarget** <br/> |Optional **Text**. Specifies an alternative document processing instruction in which the column value is stored for documents of this content type. If you specify the **PrimaryPIAttribute** attribute, you must also specify the **PrimaryPITarget** attribute. If specified, SharePoint Foundation uses these values before those specified in the **PITarget** and **PIAttribute** attributes.<br/><br/>For more information about how the **Node**, **PIAttribute**, **PITarget**, **Primary PIAttribute**, and **PrimaryPITarget** attributes are used for property promotion and demotion in XML documents, see [Using Content Types to Specify XML Document Properties](http://msdn.microsoft.com/library/4b41b9a1-7545-44f7-ad2e-34694d3df829%28Office.15%29.aspx).  <br/> |
|**ReadOnly** <br/> |Optional **Boolean**. If **TRUE**, the field is not displayed in New or Edit forms but can be included in views. In addition, setting **ReadOnly** to **TRUE** hides the field from Site Settings pages for managing site columns and content types. Setting the **Hidden** attribute to **TRUE** completely hides the field from the UI. If you do not include this attribute, SharePoint Foundation treats the column as if this attribute is set to **False**.  <br/> |
|**ReadOnlyEnforced** <br/> |Optional **Boolean**. **TRUE** to specify that the user cannot change the field by any means and that it can only be changed by the system.  <br/> |
|**RelationshipDeleteBehavior** <br/> |Optional **Text**. Specifies the delete behavior of the field. Possible values include **Cascade**, **Restrict** and **None**.  <br/> |
|**RenderXMLUsingPattern** <br/> |Optional **Boolean**. Used for computed fields to determine the display format. If **TRUE**, values are rendered based on the display pattern of the computed field, rather than on the column value of the first noncomputed field reference upon which the computed field is based. For example, in a picture library, the Picture Size column is represented by  _width_ x  _height_, but if this attribute is not set to **TRUE**, only the first field reference,  _width_, is displayed. If it is set to **TRUE**, the format of  _width_ x  _height_ is displayed.  <br/> |
|**Required** <br/> |Optional **Boolean**. If **TRUE**, the field must not have an empty value assigned to it. If a nonempty field value is not given in a form post, either the standard required-field text or an explicitly specified message (that is, via <ErrorText> tags) is displayed in the error form. This validation is handled only by the client (the database always allows **NULL** for all user-defined fields).  <br/> |
|**RestrictedMode** <br/> |Optional **Boolean**. **TRUE** to not allow the **Note** field to contain enhanced rich text formatting, such as pictures, tables, or hyperlinks, nor to allow pasting formatted text into the field.  <br/> |
|**ResultType** <br/> |Optional **Text**. Specifies the data type of values that are returned from the field.  <br/> |
|**RichText** <br/> |Optional **Boolean**. **TRUE** if the field displays rich text formatting.  <br/> |
|**RowOrdinal** <br/> |Optional **Integer**. Specifies the database location for the field.  <br/> |
|**Sealed** <br/> |Optional **Boolean**. Setting this attribute to **TRUE** for a field in the [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file for a list marks the field as irremovable in the Change Column page.  <br/> |
|**SeparateLine** <br/> |Optional **Boolean**. Used internally to support rendering a field (for example, Notes or Comment) in a separate line. This attribute is not intended for public use.  <br/> |
|**SetAs** <br/> |Not intended to be used directly from your code.  <br/> |
|**ShowAddressBookButton** <br/> |Not intended to be used directly from your code.  <br/> |
|**ShowAlways** <br/> |Optional **Boolean**.  <br/> |
|**ShowField** <br/> |Optional. The **ShowField** attribute can be set to the field name to be displayed. By default, a hyperlinked text from the Title field of the record in the external list is displayed. But the **ShowField** attribute can be used to override that and display another field from the external list. The following data types are allowed as targets of a **ShowField** attribute: **Text**, **Choice**, and **Counter**. For a **Lookup** field, this parameter must be set to the internal field name; setting it to the display name does not raise an error, but breaks the field.  <br/> |
|**ShowInDisplayForm** <br/> |Optional **Boolean**. **TRUE** to display the field in the form for viewing the item.  <br/> |
|**ShowInEditForm** <br/> |Optional **Boolean**. **TRUE** to display the field in the form for editing the item.  <br/> |
|**ShowInFileDlg** <br/> |Optional **Boolean**. This attribute is valid only for fields within document library schemas. If **FALSE**, the field does not show up in the property dialog box for saving forms that appears when saving from client applications. For example, the Title field has this attribute because this is set directly in the document being saved to the document library.  <br/> |
|**ShowInListSettings** <br/> |Optional **Boolean**. **TRUE** to display the column on the page for customizing list settings.  <br/> |
|**ShowInNewForm** <br/> |Optional **Boolean**. If **FALSE**, the field does not show up in a **Fields** enumeration when the display mode is set to **New**. Fields with this setting do not show up in the default New Item page for a given list. In particular, this is used to hide fields on the page for uploading documents to the document library.  <br/> |
|**ShowInVersionHistory** <br/> |Optional **Boolean**. **TRUE** to display the column on the page for viewing list item versions.  <br/> |
|**ShowInViewForms** <br/> |Optional **Boolean**. **TRUE** to specify that the field is displayed in pages that are used to view list data.  <br/> |
|**Sortable** <br/> |Optional **Boolean**. **TRUE** if values in the field can be sorted.  <br/> |
|**SourceID** <br/> |Optional **Text**. Contains the namespace that defines the field, such as  `http://schemas.microsoft.com/sharepoint/v3`, or the GUID of the list in which the custom field was created.  <br/> |
|**StaticName** <br/> |Optional **Text**. Contains the internal name of the field.  <br/> |
|**StorageTZ** <br/> |Specifies how date/time values are stored. When **StorageTZ** is set to **UTC**, the date/time is handled as Coordinated Universal Time (UTC). To denote that a date/time value refers to "abstract" time, meaning that the date/time is stored in the database as entered by the user without conversion or storage of the local time zone, omit the **StorageTZ** attribute.  <br/> |
|**StripWS** <br/> |Optional **Boolean**. **TRUE** if white space is removed from the beginning and end of field values.  <br/> |
|**SuppressNameDisplay** <br/> |Optional **Boolean**. **TRUE** to not display the name of the user in a **User** field.  <br/> |
|**TextOnly** <br/> |Optional **Boolean**. If **TRUE**, the field can contain only **Text** values.  <br/> |
|**Title** <br/> |Optional **Text**. Contains the title of the field that is displayed in the user interface.  <br/> |
|**Type** <br/> | Required **Text**. The data type of the field (unless the **Field** element is a child of [ProjectedFields](projectedfields-element-view.md)).<br/><br/>**NOTE**: In the Technology Preview release of Microsoft SharePoint Foundation 2010, the **Type** attribute has a different meaning and only one possible value ("Lookup") when it is a child of [ProjectedFields](projectedfields-element-view.md). For more information about this use of **Type**, see [ProjectedFields Element (View)](projectedfields-element-view.md).<br/><br/>SharePoint Foundation includes the following data types by default:<br/>- **AllDayEvent** Specifies an all day event. Corresponds to the **bit** SQL data type.<br/>- **Attachments** Stores the URLs for attachments. Corresponds to the **bit** SQL data type.<br/>- **Boolean** Used to store a **TRUE**/ **FALSE** value (stored in the database as 0 or 1). This field is sortable and groupable. Corresponds to the **bit** SQL data type and is represented by the [SPFieldBoolean](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldBoolean.aspx) class. <br/>- **Calculated** Specifies a field whose value is calculated based on other columns. Corresponds to the **sql_variant** SQL data type and is represented by the [SPFieldCalculated](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldCalculated.aspx) class.<br/>- **Choice** Allows the user to specify a predetermined set of values that can be used to enter data into the field. The **Choice** and **Lookup** types are the most important fields for sorting and grouping. The **BaseType** and **Format** attributes can be used for choice fields. This field is sortable and groupable. When a value is given for a choice option, that value is used as the submitted value for the field selection. When no value is given, that choice is submitted as the text value of the choice. In all cases, the text value of the choice is what is displayed in the UI (drop-down list or radio button text). The order in which choices appear in the editing UI is always the order that items are specified within the **CHOICES** element. Use the **MultiChoice** type to specify a **Choice** field that implements check boxes and allows the user to select multiple values. Corresponds to the **nvarchar** SQL data type and is represented by the [SPFieldChoice](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldChoice.aspx) class. <br/>- **Computed** Specifies a field that depends on another field for its contents. For example, a **LinkTitleNoMenu** field amounts to surrounding a Title field value with a hyperlink. Represented by the [SPFieldComputed](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldComputed.aspx) class.<br/>- **ContentTypeId** Contains a content type ID. For information about the format of content type IDs, see [Content Type IDs](http://msdn.microsoft.com/library/81fa8d81-c4f5-4750-8f70-811620fdffcf%28Office.15%29.aspx). Corresponds to the **varbinary** SQL data type.<br/>- **Counter** Generally used only for the internal ID field. Its integer value is set automatically to be unique with respect to every other item in the current list. The **Counter** type is always read-only and cannot be set through a form post. This field is sortable but not groupable. Corresponds to the **int** SQL data type.<br/>- **CrossProjectLink** Used to connect an event in a SharePoint list with a Meeting Workspace site; refers specifically to the field type of the check box used in New and Edit Item forms to create a Meeting Workspace site for the item. Corresponds to the **bit** SQL data type and is represented by the [SPFieldCrossProjectLink](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldCrossProjectLink.aspx) class.<br/>- **Currency** Allows for a currency value to be entered. Each currency field is tied to a specific locale's currency. In all other respects, it is treated like the **Number** field type. Use the **LCID** attribute to indicate a currency of a specific locale. The **Decimals**, **Max**, and **Min** attributes can be used for currency types. This field is sortable and groupable. Corresponds to the **float** SQL data type and is represented by the [SPFieldCurrency](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldCurrency.aspx) class.<br/>- **DateTime** Allows for storage of a fully qualified date or time of day. Use the **Format** attribute to specify date formatting, and use the **StorageTZ** attribute to determine how date/time values are stored. This field is sortable and groupable. For Display mode, the order of date formatting derives from the regional settings ("M/D/Y" or "D/M/Y"). In Edit mode (or in New mode for **Default** element value), date/times are rendered in universal format: M/D/Y hh:mm am/pm. Corresponds to the **datetime** SQL data type and is represented by the [SPFieldDateTime](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldDateTime.aspx) class.<br/>- **File** Contains a file. Corresponds to the **uniqueidentifier** SQL data type.<br/>- **GridChoice** Contains a rating scale for surveys. Corresponds to the **ntext** SQL data type and is represented by the [SPFieldRatingScale](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldRatingScale.aspx) class.<br/>- **Guid** Allows for globally unique identifiers (GUIDs). Corresponds to the **uniqueidentifier** SQL data type. <br/>- **Integer** Allows for positive or negative integer values. The **Commas** and **NegativeFormat** attributes are used to specify integer formatting. Corresponds to the **int** SQL data type.<br/>- **Lookup** Behaves very similarly to a **Choice** field, except that the available options come from another list rather than being a hard-coded selection of values. The **List** and **ShowField** attributes can be used for Lookup fields. This field is sortable and groupable. For sorting and grouping, use the **DisplayField** value (Title, by default) rather than the foreign key stored in the list. Corresponds to the **int** SQL data type and is represented by the [SPFieldLookup](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldLookup.aspx) class.  <br/>- **LookupMulti** A **Lookup** field that can contain more than one value. Parent type: **Lookup**.<br/>- **ModStat** Contains content approval status. Possible values include **Approved** (default), **Rejected**, and **Pending** (stored in the database as 0, 1, or 2, respectively). Corresponds to the **int** SQL data type.<br/>- **MultiChoice** Specifies a **Choice** field that implements check boxes and allows the user to select multiple values. Corresponds to the **ntext** SQL data type and is represented by the [SPFieldMultiChoice](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldMultiChoice.aspx) class.<br/>- **MultiColumn** A **Note** field that emulates a field containing multiple values. For an example of a multicolumn field type, see [Custom Field Type Definition](http://msdn.microsoft.com/library/b3315997-671f-4c29-9518-48cc4592f205%28Office.15%29.aspx). For information about multicolumn fields, see [Custom Multicolumn Field Classes](http://msdn.microsoft.com/library/62818d63-6473-42d0-b12f-251865887b33%28Office.15%29.aspx). Parent type: **Note**. <br/>- **Note** Allows users to enter multiple lines of text. This field is not sortable or groupable. All text is defined to be straight ASCII characters without HTML markup. Anything that looks like HTML markup or a URL is simply quoted (for example, Server.HTMLEncode) to look like straight text. The control for editing this format is a simple TEXTAREA block. Use the **NumLines** attribute to specify the number of lines to display. Corresponds to the **ntext** SQL data type and is represented by the [SPFieldMultiLineText](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldMultiLineText.aspx) class.<br/>- **Number** Allows for a floating point number to be entered. This field is sortable and groupable. Numbers entered are parsed according to the current locale settings for decimal points and thousand separators. Negative numbers can be indicated by wrapping them in parentheses or by using a negative symbol. The following attributes can be used in conjunction with the **Number** attribute to specify number formatting: **Decimals**, **Div**, **Max**, **Min**, **Mult**, and **Percentage**. Corresponds to the **float** SQL data type and is represented by the [SPFieldNumber](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldNumber.aspx) class.<br/>- **PageSeparator** Inserts a page break in a survey list. Represented by the [SPFieldPageSeparator](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldPageSeparator.aspx) class.<br/>- **Recurrence** Used to edit and define the recurrence pattern for an item in an events list. Corresponds to the **bit** SQL data type.<br/>- **Text** A single line of text entered in an edit box. This field is sortable and groupable. Use the **MaxLength** attribute to set a maximum number of characters allowed. Corresponds to the **nvarchar** SQL data type and is represented by the [SPFieldText](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldText.aspx) class.<br/>- **ThreadIndex** Contains the ID that indicates the relative position of a message within a conversation thread. Corresponds to the **varbinary** SQL data type.<br/>- **Threading** The **Threading** field type is used in the creation and display of threaded discussion-like views. Any list can contain a threading column, but a special UI is generated when it is used. (It is never displayed as a standard editable field in a form nor as a normal column in a view.) If a sort is performed on a threading field, a pre-order traversal of all the records in a parent-child relationship is returned. This is accomplished by saving the concatenation of the creation date and ID number of all the parent records of a particular record. Corresponds to the **varchar** SQL data type.<br/>- **URL** Used to create a freeform hyperlink. A URL field is displayed as `<A HREF="URL">Description</A>`. If no description is given, it is displayed as `<A HREF="URL">URL</A>`. The URL text is itself stored in the URLs (DocMd) table, which stores all the URLs in SharePoint databases on the server. This is done so that any URLs that are local on the server can be updated through link fixup when their destination moves. When a record with a URL field contained within it is deleted, the corresponding referenced record from the URL table is also deleted. This field is sortable and groupable. (The sort is defined according to the textual description rather than the contents of the URL; if no description is given, it sorts the same as blank.) When **Type** is **URL**, the **LinkType** attribute can be used to specify the type of link. Corresponds to the **nvarchar** SQL data type and is represented by the [SPFieldUrl](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldUrl.aspx) class.<br/>- **User** A **Lookup** field that references the UserInfo database table. Corresponds to the **int** SQL data type and is represented by the [SPFieldUser](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldUser.aspx) class.<br/>- **UserMulti** A **User** field that can contain more than one value. Parent type: **LookupMulti**.<br/>- **WorkflowEventType** Specifies a workflow event type as is represented by the [SPWorkflowHistoryEventType](https://msdn.microsoft.com/library/Microsoft.SharePoint.Workflow.SPWorkflowHistoryEventType.aspx) enumeration. Parent type: **Integer**.<br/>- **WorkflowStatus** Specifies workflow status as represented by the [SPWorkflowStatus](https://msdn.microsoft.com/library/Microsoft.SharePoint.Workflow.SPWorkflowStatus.aspx) enumeration. Corresponds to the **nvarchar** SQL data type.  <br/> |
|**UniqueId** <br/> |Optional **Text**. Not intended to be used directly from your code.  <br/> |
|**UnlimitedLengthInDocumentLibrary** <br/> |Optional **Boolean**. **TRUE** to allow unlimited field length in document libraries.  <br/> |
|**URLEncode** <br/> |Optional **Boolean**. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format, for example, `%c3%ab` for character `ë`.  <br/> |
|**URLEncodeAsURL** <br/> |Optional **Boolean**. Like **URLEncode**, but **TRUE** to specify that the string to encode is a path component of a URL so that forward slashes (`/`) are not encoded.  <br/> |
|**UserSelectionMode** <br/> |Optional **Text**. Specifies whether only the names of individual users can be selected in a user field on an item form, or whether the names of both individuals and groups can be selected. The following values are possible:  <br/> **0** - Only the names of individuals can be selected.  <br/> **1** - The names of both individuals and groups can be selected.  <br/> |
|**UserSelectionScope** <br/> |Optional **Integer**. Specifies a scope for selecting user names in a user field on an item form. If the value is 0, there is no restriction to a SharePoint group. If the value is greater than 0, user selection is restricted to members of the SharePoint group whose ID equals the value that is specified.  <br/> |
|**Version** <br/> |Optional **Text**.  <br/> |
|**Viewable** <br/> |Optional **Boolean**. **TRUE** to specify that the field is added to the default view. The default value is **TRUE**.  <br/> |
|**WebId** <br/> |Optional **Text**.  <br/> |
|**Width** <br/> |Optional **Integer**. Specifies the width in pixels of the images that are displayed for users in the User Information list.  <br/> |
|**WikiLinking** <br/> |Optional **Boolean**. **TRUE** to specify that wiki links, which appear in the form of double brackets (`[[…]]`), become translated into HTML links, which use the `<A>` tag.  <br/> |
|**XName** <br/> |Optional **Text**. Used internally in XML forms to identify fields that have been added, deleted, or modified. This attribute is not intended for public use.  <br/> |
   
### Child elements

- [CHOICES](choices-element-list.md)
- [Customization](customization-element-list.md)
- [Default](default-element-listfield.md)
- [DefaultFormula](defaultformula-element-list.md)
- [DisplayBidiPattern](displaybidipattern-element-list.md)
- [DisplayPattern](displaypattern-element-list.md)
- [FieldRefs](fieldrefs-element-list.md)
- [Formula](formula-element-list.md)
- [FormulaDisplayNames](formuladisplaynames-element-list.md)
- [MAPPINGS](mappings-element-list.md)
- [Validation](validation-element-list.md)
   
### Parent elements

- [Fields](fields-element-list.md)
- [ProjectedFields](projectedfields-element-view.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded when the parent is [Fields](fields-element-view.md). When the parent is [ProjectedFields](projectedfields-element-view.md), the maximum is the difference between the maximum number of allowed fields in the primary list that is being queried and the number of fields already in the list.  
   
### Remarks

To create a custom field definition for a list definition that is based on a default SharePoint Foundation field type, use the **Field (List - Definition)** element within a [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file. 

To create a custom field definition as a pluggable Feature that is based on a default field type and that can be reused across websites and lists within a site collection, use the [Field (Field)](field-element-field.md) element to define a custom [site column](http://msdn.microsoft.com/library/0402b3a7-3665-43df-9769-85e3aa1b2432%28Office.15%29.aspx). 

To create a [custom field type](http://msdn.microsoft.com/library/1345b345-226d-443a-918f-af123a3c7b13%28Office.15%29.aspx) that implements a custom class for special data validation and field rendering, use the [Field (Field Types)](field-element-field-types.md) element. 
  
Fields can be referenced from View definitions as well as from expressions in computed field rendering elements. Use the [Field (View)](field-element-view.md) element to return a formatted field value for display within a view, and use the [Column (View)](column-element-view.md) element to return the raw data value of the field. 

The syntax for referencing a field is as follows: 
  
```XML
<Field Name="FieldName"/>
```

By default, the field is rendered with the default attributes for that field definition as specified in the previous table. Any of the field attributes can be overridden in the CAML markup of the **FieldRef** attribute, which overrides the definition given for the field itself. (The **Type** attribute for a field cannot be changed.) 
  
To display the user-defined display name of a field, you can use `<Property Select="DisplayName"/>`.  
  
Within a **Fields** element enumeration, the **Name** attribute can be omitted. For some field references, the raw data stored for the field can be accessed by using `<Column/>`.
  
Some properties of fields from forms and from certain aspects of the authoring UI can be rendered through the **Property** element, for example, `<Property Select="Description"/>` or `<Property Select="Type"/>`. These elements simply retrieve the value of any field attribute or child element (**Property**) by name.
  
In addition to the preceding types, the following predefined fields are used with the **Field** element. <br/>
  
|**Name**|**Description**|
|:-----|:-----|
|**Created** <br/> |A field that contains a **DateTime** value specifying the time that the item was created (in UTC).  <br/> |
|**CreatedBy** <br/> |A field that contains a **Lookup** value that refers to the UserInfo table and indicates the user who created the item.  <br/> |
|**Edit** <br/> |A Computed field (with no additional schema) that contains a hyperlink to the form for editing an item. This field references the page for editing the item and the ID field to identify it.  <br/> |
|**ID** <br/> |A **Counter** field type that is associated with every item in every list. The ID uniquely identifies the list item in URLs and in POST forms when editing. Specifying **New** as the value of the **ID** attribute in the **Cmd=Save** command creates an item rather than edits a current item.  <br/> |
|**Modified** <br/> |A field that contains a **DateTime** value specifying the time that the item was last modified (in UTC). The **Modified** time is used as a sort of **Version** field as well. The last modification date of an item is always posted when an existing item is being edited. If it does not match the current modification date, the server fails the edit and returns an error to the user, providing a link to the current data on the server (which opens in a new window), so that posted values can be copied from the old form into the new one.  <br/> |
|**ModifiedBy** <br/> |A field that contains a **Lookup** value to the UserInfo table indicating the user who last modified the item.  <br/> |
|**Title** <br/> |The generic display name of every item. It may have a different display name in different lists but the same internal field name of **Title**. The title is the default text to display for **Lookup** fields to lists.  <br/> |
|**LinkTitle** <br/> |A computed field that displays hyperlinks to items, containing the title texts and generating URLs (and new icon references) to the items. There is no additional storage for this field; it relies on the ID and Title fields for rendering of its UI.  <br/> |
   
> [!NOTE]
> The fields returned in a **Fields** enumeration are affected by the display mode. Fields that are marked with the **Hidden** attribute are never returned. Fields that are marked with the **ReadOnly** attribute are not returned if a form is being rendered (if **Fields** is called from within a **ListForm** element). Fields that are marked with the **ShowInNewForm** attribute are not returned in the NEW or PREVIEWNEW display modes. Fields marked with the **ShowInFileDlg** attribute are not returned when rendering the **NewForm** dialog form. 
  
## Example

The following example uses the **Field** element to specify options for a list named Area list. 
  
```XML
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
```

## See also

- [Column element (View)](column-element-view.md) 
- [Column2 element (View)](column2-element-view.md) 
- [Field element (Field)](field-element-field.md)
- [Field element (View)](field-element-view.md)  
- [Field element (Site)](field-element-site.md)
- [Field element (Field Types)](field-element-field-types.md)  
- [Field element (Field Types Property Schema)](field-element-field-types-property-schema.md)  
- [Field element (DeploymentManifest - DeploymentFieldTemplate)](field-element-deploymentmanifestdeploymentfieldtemplate.md)  
- [Field element (DeploymentManifest - FieldDataCollection)](field-element-deploymentmanifestfielddatacollection.md)  
- [Field element (DeploymentManifest - SPFieldCollection)](field-element-deploymentmanifestspfieldcollection.md)  


