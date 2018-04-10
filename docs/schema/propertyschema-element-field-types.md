---
title: "PropertySchema Element (Field Types)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- field type definition schema, propertyschema element (field types)
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Field Types XML
ms.assetid: 5723244b-2041-4424-97e5-8dbd828ecdf7
description: "Last modified: March 09, 2015"
---

# PropertySchema Element (Field Types)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
> [!IMPORTANT]
> This topic describes markup that was used in an obsolete method of rendering custom field type properties. It is provided solely to assist with the debugging of custom field type properties developed against earlier versions of SharePoint Foundation. For information about the recommended method, [Custom Field Type Property Rendering](http://msdn.microsoft.com/library/a959ad5b-6f3a-462c-80b9-e2d00bb0d62a%28Office.15%29.aspx). 
  
Represents the schema of certain special variable properties of a custom field type, with each property defined as a **Field** element. 
  
```
<PropertySchema>
</PropertySchema>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**None** <br/> ||
   
### Child elements

||
|:-----|
|[Fields Element (Field Types Property Schema)](fields-element-field-types-property-schema.md)|
   
### Parent elements

||
|:-----|
|[FieldType Element (Field Types)](fieldtype-element-field-types.md)|
   
### Remarks

Custom field types may have special properties whose value will vary from one column based on the field type to another column based on the same field type. Consider a custom regular expression field type that is designed to hold [String](http://msdn2.microsoft.com/EN-US/library/s1wwdcbf) values that match a certain regular expression, such as  `^(\d{3})\d{3}-\d{4}$` for American telephone numbers. Rather than create separate custom regular expression field types for British license plate numbers, American Social Security numbers, Chinese telephone numbers, etc., it is more efficient to create a single regular expression field type and enable users who create columns based on the field type, to set the regular expression that needs to be matched on a column-by-column basis. For example, a user creating a "US Telephone Number" column would set the column's regular expression to the string above. Another user, creating a "Brazilian Post Box" column would set his column's regular expression to  `^\d{5}\-\d{3}$`. 
  
To do this, the custom field needs to have a **RegularExpression** property that is rendered in an editable control on the user interface (UI) when a new column is created. In SharePoint Foundation, this is in the **Additional Column Settings** section on the **New Site Column** page and the **Create Column** page. The **PropertySchema** element in the  `fldtypes*.xml` file is where such variable properties are declared and given a default rendering schema. Optionally, they can also be given default values. 
  
> [!NOTE]
> If you define the variable properties of the custom field type in the **PropertySchema** element, SharePoint Foundation automatically renders those properties based on the schema. 
  
## Example

The following example defines a property schema for a custom field type called "RegularExpressionMatch." The schema declares a field for use by column creators when they base a column on the field type. The purpose of the field is to enable a column creator to set a  *different*  regular expression for each column she bases on the RegularExpressionMatch field type. 
  
The **DisplayName** and an editable **Text** field will appear in the **Additional Column Settings** section on the **New Site Column** page and the **Create Column** page. The **MaxLength** attribute sets the maximum length, in characters, of the regular expression and the **DisplaySize** sets the size of the field that holds it. Users can scroll within the field to see the rest of the regular expression if it is longer than **DisplaySize**. 
  
No default has been set in this example, but if the developer of the field type knew that in most cases it would be used to create columns containing American telephone numbers, the developer could set the default as  `<Default>^(\d{3})\d{3}-\d{4}$</Default>`.
  
Note: The following code example has been edited for clarity.
  
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
        <Default></Default>
      </Field>
    </Fields>
  </PropertySchema>
  …
</FieldType>
```

## See also



[Custom Field Types](http://msdn.microsoft.com/library/1345b345-226d-443a-918f-af123a3c7b13%28Office.15%29.aspx)
  
[Custom Field Classes](http://msdn.microsoft.com/library/436a9d9b-7a6f-4e8f-86e8-f42ded85c069%28Office.15%29.aspx)
  
[Custom Field Type Property Rendering](http://msdn.microsoft.com/library/a959ad5b-6f3a-462c-80b9-e2d00bb0d62a%28Office.15%29.aspx)
  
[Custom Field Type Definition](http://msdn.microsoft.com/library/b3315997-671f-4c29-9518-48cc4592f205%28Office.15%29.aspx)

