---
title: "RenderPattern Element (Field Types)"
ms.author: rickki
author: rickki
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- field type definition schema, renderpattern element (field types)
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Field Types XML
ms.assetid: d1b292bf-6be1-4372-b529-2c87d1f83d7d
description: "Last modified: March 09, 2015"
---

# RenderPattern Element (Field Types)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
> [!IMPORTANT]
> This topic describes markup that was used in a now obsolete method of rendering custom fields types on list views and on the Display, Edit, and New forms. It is provided solely to assist persons who are debugging a custom field type that was originally developed against an earlier version of SharePoint Foundation. For information about the recommended methods, see [Field Rendering Templates](http://msdn.microsoft.com/library/812772eb-03d0-4a78-b212-0ba2875857df%28Office.15%29.aspx) and [Patterns of Custom Field Rendering](http://msdn.microsoft.com/library/aacdc6d1-86c8-4a6b-953d-22ecac209d0f%28Office.15%29.aspx). > Custom fields whose rendering is defined with **RenderPattern** markup still render properly on forms. However, SharePoint Foundation, by default, uses XSLT stylesheets to render fields on list views, even for legacy custom fields whose list view rendering is defined with a **RenderPattern**. To enable the rendering of such a field, a  `<Field Name="CAMLRendering">TRUE</Field>` element must be added to the containing **FieldTypes** element in the field type definition file (  `fldtype*.xml`). 
  
 **RenderPattern** defines the actual Collaborative Application Markup Language (CAML), HTML, and script that SharePoint Foundation can use to render the field type in the UI. Also, in list views, this element renders the column headers, based on the selected field type. 
  
```
<RenderPattern Name="Text">
</RenderPattern>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Name** <br/> | Required **String**. Represents the name of the render pattern you are defining in this **RenderPattern** element.  <br/>  Valid values are  <br/> **HeaderPattern**. Defines rendering for the column header on list view pages when CAML rendering is turned on (by including  `<Field Name="CAMLRendering">TRUE</Field>` in the containing **FieldTypes** element of the  `fldtypes*.xml` file).  <br/> **DisplayPattern**. Defines rendering of the field for the Display (list item) form. When CAML rendering is turned on (by including  `<Field Name="CAMLRendering">TRUE</Field>` in the containing **FieldTypes** element of the  `fldtypes*.xml` file), then the **DisplayPattern** also defines rendering of the field on list view pages.  <br/> **EditPattern**. Defines rendering of the field for the Edit (list item) form.  <br/> **NewPattern**. Defines rendering of the field for the New (list item) form.  <br/> **PreviewDisplayPattern**. Defines, for use in a WYSIWYG ("what you see is what you get") site designer such as SharePoint Designer, a preview of how the field will look in Display mode using fictitious data.  <br/> **PreviewEditPattern**. Defines, for use in a WYSIWYG site designer such as SharePoint Designer, a preview of how the field will look in Edit mode using fictitious data.  <br/> **PreviewNewPattern**. Defines, for use in a WYSIWYG site designer such as SharePoint Designer, a preview of how the field will look in New mode using fictitious data.  <br/> |
   
### Child elements

||
|:-----|
|None explicitly defined, but this element is a container of CAML markup from the [View Schema](../../collaborative-application-markup-language-caml-schemas/view-schema/view-schema.md)|
   
### Parent elements

||
|:-----|
|[FieldType Element (Field Types)](fieldtype-element-field-types.md)|
   
### Remarks

### Inheritance of RenderPatterns

If a **RenderPattern** with a particular **Name** value is not provided for a field type, the field type inherits the **RenderPattern** with that name from its parent field type. 
  
### HeaderPattern

If CAML rendering is enabled (see above), the field type must have a **HeaderPattern** type of **RenderPattern** element, either directly or by inheritance, or the column header of the field on list views does not render. The markup in a **HeaderPattern** can be quite simple when the field type cannot be sorted or filtered. However, if the field type can be sorted or filtered, then the markup can become quite complex because the header serves not just as the title for the column but also as a drop-down menu control for sorting and filtering. Moreover, because the ability to be sorted and filtered can be disabled for particular columns (even when the field type the column is based on supports them) the markup must use **Switch** elements to test whether sorting or filtering is enabled for the column. See %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\XML\FLDTYPES.XML for examples. 
  
### DisplayPattern

If CAML rendering is enabled (see above), a field type must have a **DisplayPattern** type of **RenderPattern** element (by inheritance, if not directly) so that the field can be rendered on list views. This is not necessary to render the field in Display mode, such as on the Display (list item) page, because, a field can also be rendered in Display mode by means of a [rendering control (.ascx file)](http://msdn.microsoft.com/library/12616aab-f427-4abe-9e5b-8b9085a9740e%28Office.15%29.aspx). None of the legacy field types that ship with SharePoint Foundation use a rendering control rather than a **DisplayPattern** type of **RenderPattern** element to render the field in Display mode. 
  
The **DisplayPattern** type of **RenderPattern** can also be used to render the field in each row of a list view. By default, SharePoint Foundation uses XSLT markup in a  `fldtypes*.x` **s** `l` file located in %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\LAYOUTS\XSL to render fields on list views. But the  `fldtypes*.x` **m** `l` file in %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\XML is checked for the presence of  `<Field Name="CAMLRendering">TRUE</Field>` in the containing **FieldTypes** element for the field. If it is present, the **DisplayPattern** is used to render the field on list views. 
  
> [!NOTE]
> Two legacy field types that ship with SharePoint Foundation do not have a **DisplayPattern** type of **RenderPattern** in FLDTYPES.XML: (1)  *ContentTypeId*  fields are never visible. (2)  *Computed*  fields are rendered on list views and in Display mode by a **DisplayPattern** element in their **Field** elements within the schema.xml of each list on which they appear. 
  
### NewPattern and EditPattern

The **NewPattern** and **EditPattern** types of **RenderPattern** were used to render a field in New mode and Edit mode, respectively, when the field did not require significant data processing or data validation when a list item containing the field was being created or edited. Free-form Note fields, for example, cannot be validated because any text is a valid value. Similarly, Choice fields and Lookup fields, by definition, limit the user's choices to only valid values. Other fields, such as Currency and DateTime, need only minimal validation that can be coded in script. 
  
See %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\XML\FLDTYPES.XML for examples of **NewPattern** and **EditPattern** types of **RenderPattern**s.
  
### RenderPatterns for MultiColumn-Derived Custom Field Types

In the **RenderPattern** markup for a custom MultiColumn field, the **SubcolumnNumber** attribute of a **Column** element is used to specify an individual column in a multicolumn field type. For more information about multicolumn field types, see [Custom Multicolumn Field Classes](http://msdn.microsoft.com/library/62818d63-6473-42d0-b12f-251865887b33%28Office.15%29.aspx).
  
## Example

The following example defines a display rendering pattern for a custom field type that inherits from the MultiColumn type. The field is used to store American addresses. The first subcolumn stores the street address. This is followed by an HTML line break. The next subcolumn stores the city name and it is followed by a comma and a space. The third subcolumn stores the state and, following a space, the last subcolumn stores the postal code.
  
```XML
<RenderPattern Name="DisplayPattern">
  <Switch>
    <Expr><Column/></Expr>
    <Case Value="">
    </Case>
    <Default>
      <Column SubColumnNumber="0" HTMLEncode="TRUE"/>
      <HTML><![CDATA[<BR>]]></HTML>
      <Column SubColumnNumber="1" HTMLEncode="TRUE"/>
      <HTML><![CDATA[, &amp;nbsp;]]></HTML>
      <Column SubColumnNumber="2" HTMLEncode="TRUE"/>
      <HTML><![CDATA[ &amp;nbsp;]]></HTML>
      <Column SubColumnNumber="3" HTMLEncode="TRUE"/>
      </Default>
  </Switch>
</RenderPattern>
```

## See also



[Walkthrough: Creating a Custom Field Type](http://msdn.microsoft.com/library/089a1b8a-cafc-4050-b445-16650602fe4f%28Office.15%29.aspx)
  
[Custom Field Types](http://msdn.microsoft.com/library/1345b345-226d-443a-918f-af123a3c7b13%28Office.15%29.aspx)
  
[Custom Field Classes](http://msdn.microsoft.com/library/436a9d9b-7a6f-4e8f-86e8-f42ded85c069%28Office.15%29.aspx)
  
[Custom Field Type Property Rendering](http://msdn.microsoft.com/library/a959ad5b-6f3a-462c-80b9-e2d00bb0d62a%28Office.15%29.aspx)
  
[Custom Field Type Definition](http://msdn.microsoft.com/library/b3315997-671f-4c29-9518-48cc4592f205%28Office.15%29.aspx)
  
[Custom Multicolumn Field Classes](http://msdn.microsoft.com/library/62818d63-6473-42d0-b12f-251865887b33%28Office.15%29.aspx)

