---
title: Field element (Field Types Property)
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Field Types XML
ms.assetid: e63ac515-9eb9-4fa4-bc34-2db37d4dec76
description: Represents a variable property of a custom field type that is set when a column based on the field type is created.
---

# Field element (Field Types Property)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a variable property of a custom field type that is set when a column based on the field type is created.

> [!IMPORTANT]
> This topic describes markup that was used in an obsolete method of rendering custom field type properties. It is provided solely to assist with the debugging of custom field type properties developed against earlier versions of SharePoint Foundation. For information about the recommended method, [Custom Field Type Property Rendering](http://msdn.microsoft.com/library/a959ad5b-6f3a-462c-80b9-e2d00bb0d62a%28Office.15%29.aspx). 
  
```XML
<Field
  Name="Text" 
  DisplayName="Text" 
  MaxLength="Integer" 
  DisplaySize="Integer" 
  Type="Text">
</Field>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Name** <br/> |Required **Text**. The name of the property of the field type that the **Field** element represents.  <br/> |
|**DisplayName** <br/> |Required **Text**. The name of the property that appears in the UI when a column based on the field type is created.  <br/> |
|**MaxLength** <br/> |Required **Text**. The maximum length, in characters, of the property's value.  <br/> |
|**DisplaySize** <br/> |Required **Text**. The length, in characters, of the control that holds the property value in the UI.  <br/> |
|**Type** <br/> |Required **Text**. The underlying data type of the property's value.  <br/> |
   
### Child elements

- [Default element (Field Types Property)](default-element-field-types-property-schema.md)
   
### Parent elements

- [Fields element (Field Types Property)](fields-element-field-types-property-schema.md)
   
### Remarks

For a detailed description and example of this element in context, see [PropertySchema element (Field Types)](propertyschema-element-field-types.md). 
  
## See also

- [Custom Field Types](http://msdn.microsoft.com/library/1345b345-226d-443a-918f-af123a3c7b13%28Office.15%29.aspx)  
- [Custom Field Classes](http://msdn.microsoft.com/library/436a9d9b-7a6f-4e8f-86e8-f42ded85c069%28Office.15%29.aspx)  
- [Custom Field Type Property Rendering](http://msdn.microsoft.com/library/a959ad5b-6f3a-462c-80b9-e2d00bb0d62a%28Office.15%29.aspx) 
- [Custom Field Type Definition](http://msdn.microsoft.com/library/b3315997-671f-4c29-9518-48cc4592f205%28Office.15%29.aspx)

