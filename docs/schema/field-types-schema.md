---
title: Field Types schema
description: Field Types XML markup is used to define information about a field that is needed to render the field in the UI and in visual designers, regardless of whether the rendering is done by a user control (ASCX), an XSLT template, or a (now Obsolete) RenderPattern.
manager: soliver
ms.date: 12/14/2020
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
localization_priority: Normal
ms.assetid: 53176171-c597-47a0-8b34-b064c415d9df
---

# Field Types schema

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Field Types XML markup is used to define information about a field that is needed to render the field in the UI and in visual designers, regardless of whether the rendering is done by a user control (ASCX), an XSLT template, or a (now Obsolete) **RenderPattern**.

For more information about how the elements are used, see [Custom Field Type Definition](https://msdn.microsoft.com/library/b3315997-671f-4c29-9518-48cc4592f205%28Office.15%29.aspx) and [FldTypes.xml](https://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6%28Office.15%29.aspx).

## Elements

The following is a list of the elements included in the field type definition. Select the element name for detailed information about that element.

| Element                                                                                         | Description                                                                                                                                   |
| :---------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| [FieldTypes element (Field Types)](fieldtypes-element-field-types.md)                           | The top level container element for the fldtypes\*.xml file.                                                                                  |
| [FieldType element (Field Types)](fieldtype-element-field-types.md)                             | The top level container element for a field type definition.                                                                                  |
| [Field element (Field Types)](field-element-field-types.md)                                     | An element that represents a single characteristic of the field type.                                                                         |
| [PropertySchema element (Field Types)](propertyschema-element-field-types.md)                   | An element that defines _variable field type properties_ . Obsolete.                                                                          |
| [Fields element (Field Types Property Schema)](fields-element-field-types-property-schema.md)   | The top-level container element within a **PropertySchema** element. Obsolete.                                                                |
| [Field element (Field Types)](field-element-field-types.md)                                     | An element that represents a variable property of a custom field type that is set when a column based on the field type is created. Obsolete. |
| [Default element (Field Types Property Schema)](default-element-field-types-property-schema.md) | An element that represents the default value of a property of a custom field type. Obsolete.                                                  |
| [RenderPattern element (Field Types)](renderpattern-element-field-types.md)                     | An element that defines how the field is rendered in certain circumstances. Obsolete.                                                         |
