---
title: "Field Types schema"
ms.author: rickki
author: rickki
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 53176171-c597-47a0-8b34-b064c415d9df
description: "Last modified: March 09, 2015"
---

# Field Types schema

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Field Types XML markup is used to define information about a field that is needed to render the field in the UI and in visual designers, regardless of whether the rendering is done by a user control (ASCX), an XSLT template, or a (now Obsolete) **RenderPattern**. For more information on how the elements are used, see [Custom Field Type Definition](http://msdn.microsoft.com/library/b3315997-671f-4c29-9518-48cc4592f205%28Office.15%29.aspx) and [FldTypes.xml](http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6%28Office.15%29.aspx).
  
## Elements

The following is a list of the elements included the field type definition. Click the element name for detailed information about that element.
  
|||
|:-----|:-----|
| < [FieldTypes Element (Field Types)](fieldtypes-element-field-types.md)>  <br/> |The top level container element for the fldtypes\*.xml file.  <br/> |
| < [FieldType Element (Field Types)](fieldtype-element-field-types.md)>  <br/> |The top level container element for a field type definition.  <br/> |
| < [Field Element (Field Types)](field-element-field-types.md)>  <br/> |An element that represents a single characteristic of the field type.  <br/> |
| < [PropertySchema Element (Field Types)](propertyschema-element-field-types.md)>  <br/> |An element that defines  *variable field type properties*  . Obsolete.  <br/> |
| < [Fields Element (Field Types Property Schema)](fields-element-field-types-property-schema.md)>  <br/> |The top-level container element within a **PropertySchema** element. Obsolete.  <br/> |
| < [Field Element (Field Types)](field-element-field-types.md)>  <br/> |An element that represents a variable property of a custom field type that is set when a column based on the field type is created. Obsolete.  <br/> |
| < [Default Element (Field Types Property Schema)](default-element-field-types-property-schema.md)>  <br/> |An element that represents the default value of a property of a custom field type. Obsolete.  <br/> |
| < [RenderPattern Element (Field Types)](renderpattern-element-field-types.md)>  <br/> |An element that defines how the field is rendered in certain circumstances. Obsolete.  <br/> |
   

