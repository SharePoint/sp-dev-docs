---
title: "Data-Defining Elements"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e873b640-c1ee-436a-81ef-ae8f6a439e61
description: "Last modified: March 09, 2015"
---

# Data-Defining Elements

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Collaborative Application Markup Language (CAML) has two major kinds of elements: those for page rendering, and those for field rendering and schema definition. The CAML field rendering elements are designed for use when rendering individual field values. These can appear in field type definitions or, more commonly, in [FldTypes.xml](http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6%28Office.15%29.aspx) at  `\\Program Files\Common Files\Microsoft Shared\web server extensions\12\TEMPLATES\XML`.
  
## Field Rendering and Schema Definition

A field is a column or an attribute containing information that a user can add to a list. Each list on a Web site based on Microsoft SharePoint Foundation has metadata stored in the database. The format of the schema is an XML structure, such as the following:
  
```
<Fields>
  <Field Type="Counter" Name="ID"/>
  ...other field definitions...
</Fields>
```

To simplify the implementation of the various field types, and to allow for a higher degree of flexibility in rendering the various fields, [FldTypes.xml](http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6%28Office.15%29.aspx) contains information about the rendering and behavior of each field type. The [Field](field-element-list.md) element renders different HTML depending on the data type of the field in question, and FldTypes.xml defines the data types and rendering patterns for each kind of field. The following table presents the schema used in this file. 
  
|**Name**|**Data type**|**Description**|
|:-----|:-----|:-----|
|**Column2Suffix** <br/> |**Text** <br/> |Contains text to append to base column name to derive **ColumnName2** from **ColumnName** (for two-column fields such as **URL**).  <br/> |
|**DisplayPattern** <br/> |**Note** <br/> |Contains the HTML template for rendering the field in the display mode of a view or a form.  <br/> |
|**EditPattern** <br/> |**Note** <br/> |Contains the HTML template for generating the Edit form control to edit the field.  <br/> |
|**HeaderPattern** <br/> |**Note** <br/> |Contains the HTML template for displaying the heading of a table view column.  <br/> |
|**InternalType** <br/> |**Text** <br/> |Determines both the behavior of the **Column** element in rendering data from the SharePoint Foundation database and how data is posted back to the database. Can be one of the following values: **Text**, **Note**, **Number**, **Currency**, **Integer**, **Boolean**, **DateTime**, **Threading**, **Lookup**, **Choice**, **URL**, **Counter**, or **DisplayOnly**. Note that a **DisplayOnly** field type has no storage of its own.  <br/> |
|**Name** <br/> |**Text** <br/> |Contains the name of the internal data type as referenced in a Type attribute of the Field element:  `<Field Type="Name"/>`. Examples are **Text**, **Note**, **Number**, etc.  <br/> |
|**NewPattern** <br/> |**Note** <br/> |Contains the HTML template for generating the New form for editing the initial value of a field.  <br/> |
|**PreviewDisplayPattern** <br/> |**Note** <br/> |Specifies how fields are rendered when a display form is edited in Microsoft SharePoint Designer.  <br/> |
|**PreviewEditPattern** <br/> |**Note** <br/> |Specifies how fields are rendered when an edit form is edited in Microsoft SharePoint Designer.  <br/> |
|**PreviewNewPattern** <br/> |**Note** <br/> |Specifies how fields are rendered when a new form is edited in Microsoft SharePoint Designer.  <br/> |
|**Sortable** <br/> |**Text** <br/> |Specifies whether a field can be sorted. Can be **TRUE** or **FALSE**.  <br/> |
|**TypeName** <br/> |**Text** <br/> |Specifies a name in the definition of a field type.  <br/> |
|**SQLType** <br/> |**Text** <br/> |Determines the underlying SQL data type for the given field. Examples are nvarchar(255), memo, integer, float. Used to generate the appropriate SQL (CREATE TABLE) for creation of a field of this type.  <br/> |
|**SQLType2** <br/> |**Text** <br/> |When not blank, gives the type of a secondary column to create for the current field (see URL field type, for example).  <br/> |
   
## Display Modes and Display Patterns

Each of the display modes (**Display**, **Edit**, and **New**) contains a definition of how to render each of the field data types that are supported by SharePoint Foundation.
  
For each display mode there is a display pattern, or CAML-rendering expression. Some CAML elements are used specifically in display patterns. Others can be used in either context, for page rendering or for field rendering, but are used primarily in rendering fields. The following intrinsic CAML-rendering elements are used to build templates that can include both static HTML and data, as well as metadata of the field being rendered.
  
|**Element**|**Description**|
|:-----|:-----|
|[Column](column-element-view.md) <br/> |Returns the raw data value for a particular field.  <br/> |
|[Column2](column2-element-view.md) <br/> |Used in rendering a Link field type.  <br/> |
|[Escape](escape-element.md) <br/> |Used to escape certain characters in strings.  <br/> |
|[FieldFilterOptions](fieldfilteroptions-element.md) <br/> |Used in the **HeaderPattern** sections of [FldTypes.xml](http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6%28Office.15%29.aspx) to display filter drop-down menus.  <br/> |
|[FieldPrefix](fieldprefix-element-view.md) <br/> |Returns the Microsoft Office namespace, "urn:schemas-microsoft-com:office:office#".  <br/> |
|[FieldRef](http://msdn.microsoft.com/library/1fec6304-0e3a-455a-a94d-df3232bb77a7%28Office.15%29.aspx) <br/> |Used in computed fields to refer to the constituent fields and in views to define what fields are present.  <br/> |
|[FieldSortImageURL](fieldsortimageurl-element.md) <br/> |Returns the URL to the image file used to indicate how a column is sorted.  <br/> |
|[FieldSortParams](fieldsortparams-element-view.md) <br/> |Returns the sort direction on a list, rendering **Asc** or **Desc** based on whether the field has been sorted, and the current default sort direction for the field.  <br/> |
|[IfEqual](ifequal-element-view.md) <br/> |Allows for conditional rendering based on the comparison of two CAML expressions.  <br/> |
|[IfNew](ifnew-element-view.md) <br/> |Returns **TRUE** if the item is considered new.  <br/> |
|[ImagesPath](imagespath-element.md) <br/> |Returns the HTTP path to the images directory for the project.  <br/> |
|[Limit](limit-element-view.md) <br/> |Truncates text to a specified size.  <br/> |
|[LocaleInfo](localeinfo-element.md) <br/> |Transfers server locale information to the client in order to display and edit dates and numbers properly.  <br/> |
|[PageUrl](pageurl-element-view.md) <br/> |Used anywhere to return the absolute, encoded URL of the current page.  <br/> |
|[Property](property-element-view.md) <br/> |Returns the property from the current **ForEach** context.  <br/> |
|[ScriptQuote](scriptquote-element-view.md) <br/> |Used for rendering text from the server that must be interpreted as a quoted string.  <br/> |
|[TodayISO](todayiso-element.md) <br/> |Renders today's date and time in ISO format.  <br/> |
   
## See also

- [HTML-Rendering Elements](html-rendering-elements.md)

