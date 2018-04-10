---
title: "FieldType Element (Field Types)"
ms.

manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Field Types XML
ms.assetid: 9ab89988-3462-422f-9808-40618da7316b
description: "Last modified: March 09, 2015"
---

# FieldType Element (Field Types)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents a single field type definition.
  
```
<FieldType>
</FieldType>
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
|[Field Element (Field Types)](field-element-field-types.md) <br/> |
|[RenderPattern Element (Field Types)](renderpattern-element-field-types.md) <br/> |
|[PropertySchema Element (Field Types)](propertyschema-element-field-types.md) <br/> |
   
### Parent elements

||
|:-----|
|[FieldTypes Element (Field Types)](fieldtypes-element-field-types.md)|
   
### Remarks

FieldType elements are configured in fldtypes\*.xml files in %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\XML. 
  
## Example

The following example defines two custom field types. The example has been edited for clarity.
  
> [!IMPORTANT]
> The **RenderPattern** and **PropertySchema** elements are obsolete. They are shown here solely to assist in the debugging of custom fields that were originally developed against earlier versions of SharePoint Foundation. 
  
> [!NOTE]
> The possible values for the  `<Field Name="ParentType">` element are exactly the same as the possible values for the Type attribute of the [Field Element (List)](field-element-list.md) element. 
  
```XML
<?xml version="1.0" encoding="utf-8" ?>
<FieldTypes>
  <FieldType>
    <Field Name="TypeName">SocialSecurityNumber</Field>
    <Field Name="ParentType">Text</Field>
    <Field Name="TypeDisplayName">Social Security Number</Field>
      …
    <RenderPattern Name="DisplayPattern">
       …
    </RenderPattern>
  </FieldType>
  <FieldType>
    <Field Name="TypeName">USAddress</Field>
    <Field Name="ParentType">MultiColumn</Field>
    <Field Name="TypeDisplayName">US Address</Field>
      …
    <PropertySchema>
      …
    </PropertySchema>
    <RenderPattern Name="DisplayPattern">
      …
    </RenderPattern>
  </FieldType>
</FieldTypes>
```

## See also



[Custom Field Types](http://msdn.microsoft.com/library/1345b345-226d-443a-918f-af123a3c7b13%28Office.15%29.aspx)
  
[Custom Field Classes](http://msdn.microsoft.com/library/436a9d9b-7a6f-4e8f-86e8-f42ded85c069%28Office.15%29.aspx)
  
[Custom Field Type Property Rendering](http://msdn.microsoft.com/library/a959ad5b-6f3a-462c-80b9-e2d00bb0d62a%28Office.15%29.aspx)
  
[Custom Field Type Definition](http://msdn.microsoft.com/library/b3315997-671f-4c29-9518-48cc4592f205%28Office.15%29.aspx)
  
[Walkthrough: Creating a Custom Field Type](http://msdn.microsoft.com/library/089a1b8a-cafc-4050-b445-16650602fe4f%28Office.15%29.aspx)

