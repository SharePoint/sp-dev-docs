---
title: Default element (Field Types Property Schema)
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Field Types XML
ms.assetid: fc876d8d-a043-427a-bc89-698a163ea9ed
description: Represents the default value of a property of a custom field type.
---

# Default element (Field Types Property Schema)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents the default value of a property of a custom field type.

> [!IMPORTANT]
> This topic describes markup that was used in an obsolete method of rendering custom field type properties. It is provided solely to assist with the debugging of custom field type properties developed against earlier versions of SharePoint Foundation. For information about the recommended method, [Custom Field Type Property Rendering](http://msdn.microsoft.com/library/a959ad5b-6f3a-462c-80b9-e2d00bb0d62a%28Office.15%29.aspx). 

  
```XML
<Default>
</Default>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

None
   
### Parent elements

- [Field Element (Field Types)](field-element-field-types.md)
   
### Remarks

See [PropertySchema Element (Field Types)](propertyschema-element-field-types.md) for a description of this element in context. 
  
## Example

The following example defines a property schema for a custom field type called **RegularExpressionMatch**. The schema declares a field that can be used by column creators when they create a column based on the field type. The purpose of the field is to enable a column creator to set a  *different*  regular expression for each column that is based on the **RegularExpressionMatch** field type. 
  
The **DisplayName** and an editable **Text** field appear in the **Additional Column Settings** section on the **New Site Column** page and the **Create Column** page. The **MaxLength** attribute sets the maximum length, in characters, of the regular expression, and **DisplaySize** sets the size of the field that holds the **MaxLength** attribute. Users can scroll within the field to see the rest of the regular expression if it is longer than what appears in the **DisplaySize** field. 
  
In the code example below, the **Default** element for the property is 
  
 `^(\d{3})\d{3}-\d{4}$`
  
because this pattern matches American telephone numbers, and in this example the developer knows that his field will most frequently be used to create columns that hold American telephone numbers. When users create a column that is based on a custom field type, and the **New Site Column** and **Create Column** pages initially open, this property value appears in a text box, where it can then be changed by the column creator. Note that the code example below has been edited for clarity. 
  
```XML
<FieldType>
  <Field Name="TypeName">RegularExpressionMatch</Field>
  …
  <PropertySchema>
    <Fields>
      <Field Name="RegularExpression" 
             DisplayName="Regular Expression To Match" 
             MaxLength="500" 
             DisplaySize="100" 
             Type="Text">
        <Default>^(\d{3})\d{3}-\d{4}$</Default>
      </Field>
    </Fields>
  </PropertySchema>
  …
</FieldType>
```

## See also

- [Custom Field Types](http://msdn.microsoft.com/library/1345b345-226d-443a-918f-af123a3c7b13%28Office.15%29.aspx)  
- [Custom Field Classes](http://msdn.microsoft.com/library/436a9d9b-7a6f-4e8f-86e8-f42ded85c069%28Office.15%29.aspx)  
- [Custom Field Type Property Rendering](http://msdn.microsoft.com/library/a959ad5b-6f3a-462c-80b9-e2d00bb0d62a%28Office.15%29.aspx)  
- [Custom Field Type Definition](http://msdn.microsoft.com/library/b3315997-671f-4c29-9518-48cc4592f205%28Office.15%29.aspx)

