---
title: Field element (Field Types)
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Field Types XML
ms.assetid: c168e8bc-8aba-4b72-a9c4-a0ad7a4aff9a
description: Represents a characteristic of the field type.
---

# Field element (Field Types)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents a characteristic of the field type.
  
```XML
<Field
  Name="Text">
</Field>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Name** <br/> |Required **Text**. A string that represents the name of the specific aspect of the field type that the **Field** element represents. The value must be one of the strings listed in the table under **Remarks**.  <br/> |
   
### Child elements

None
   
### Parent elements

- [FieldType element (Field Types)](fieldtype-element-field-types.md)
   
### Remarks

Field element children of **FieldType** elements are configured in fldtypes\*.xml files in %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\XML. 
  
Each **FieldType** element has several required and optional **Field** elements distinguished by their **Name** attribute. The following table describes these elements. In the object model, a field type is represented by the [SPFieldTypeDefinition](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldTypeDefinition.aspx) class. The latter class has a read-only property corresponding to all but two of the rows of the table (the exceptions are **InternalType** and **SQLType**). Except where noted otherwise, the property names match the value of the corresponding Name attribute.

<br/>
  
|**Value of Field Element's Name Attribute**|**Description**|
|:-----|:-----|
|**AllowBaseTypeRendering** <br/> |Optional **Boolean**. The default is **FALSE**. Specifies whether a client application renders the field as its base type (also called the **ParentType**), if the client application cannot determine how to properly render the custom field type. If set to **TRUE**, and the client application cannot properly render the custom field type, the client application renders the field as the default SharePoint Foundation parent field type from which it inherits.  <br/> |
|**CAMLRendering** <br/> |Optional **Boolean**. The default is **FALSE**. Specifies whether the field is rendered on list views using the CAML markup in a **RenderPattern** element elsewhere within the parent **FieldType** element. The default **FALSE** means that the field is rendered on list views by an XSL transform in a fldtypes\*.xsl file, which is the standard system for field rendering on list views. (However, this element has no effect on field rendering on Display, New, and Edit forms. A **RenderPattern** would still be the standard way of rendering the field on a Display form.)  <br/> |
|**FieldTypeClass** <br/> |Optional **String**, *but required for all your custom field types*. Represents the strong name of the field type class library. **FieldTypeClass** includes the class name and assembly name with **Version**, **Culture**, and **PublicKeyToken**; for example:<br/> `<Field Name="FieldTypeClass">CustomFieldTypes.RegularExpression.RegularExpressionField, CustomFieldTypes.RegularExpression, Version=1.0.0.0, Culture=neutral, PublicKeyToken=57e55365ec0ce80a</Field>`<br/><br/> Only the fully qualified class name is included for field types built into SharePoint Foundation.  <br/> |
|**FieldEditorUserControl** <br/> |Optional **String**. Represents the relative path to a *field_type* FieldEditor.ascx file that defines a control that appears in SharePoint Foundation in the **Additional Column Settings** section on the **New Site Column** page. The control enables column creators to set, for a particular column, the variable properties of the field type.<br/><br/>For example:<br/>  `"/_controltemplates/RegularExpressionFieldEditor.ascx"`.<br/><br/>If there is no `<Field Name="FieldEditorUserControl">` element, the special properties of the field type are rendered by the [PropertySchema element (Field Types)](propertyschema-element-field-types.md) element.<br/><br/>**FieldEditorUserControl** should be a fixed, nonlocalizable string.  <br/> |
|**Filterable** <br/> |Required **Boolean**. Represents whether a list with a column that is based on this field type can be filtered according to the value of the column that uses this type. If set to **TRUE**, the header of the column is a control that users can use to filter the list.  <br/> |
|**InternalType** <br/> |Optional **String**. Represents an internal base type. Do not use a `<Field Name="InternalType">` element in your custom field type definitions.  <br/> |
|**ParentType** <br/> |Required **String** (but can be an empty string). Represents the name of the type from which the field class is derived. The possible values are exactly the same as the possible values for the **Type** attribute of the [Field element (List)](field-element-list.md) element. If the field type is not derived from another type, the value is an empty string:  <br/> `<Field Name="ParentType"> </Field>`. It must never be empty in your custom field types. All custom types inherit from another type.<br/><br/>In the SharePoint Foundation object model, **ParentType** is called [BaseRenderingTypeName](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldTypeDefinition.BaseRenderingTypeName.aspx).  <br/> |
|**ShowOnListAuthoringPages** <br/> |Optional **Boolean**. The default is **TRUE**. Represents whether this field type is displayed for inclusion on lists. If set to **TRUE**, SharePoint Foundation displays this field type on list authoring pages so that users can include the field type on their lists.<br/><br/>In the SharePoint Foundation object model, **ShowOnListAuthoringPages** is called [ShowOnListCreate](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldTypeDefinition.ShowOnListCreate.aspx).  <br/> |
|**ShowOnDocumentLibraryAuthoringPages** <br/> |Optional **Boolean**. The default is **TRUE**. Represents whether this field type is displayed for inclusion in document libraries. If set to **TRUE**, SharePoint Foundation displays this field type on document library authoring pages so that users can include the field type in their document libraries.  <br/><br/>In the SharePoint Foundation object model, **ShowOnDocumentLibraryAuthoringPages** is called [ShowOnDocumentLibraryCreate](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldTypeDefinition.ShowOnDocumentLibraryCreate.aspx).  <br/> |
|**ShowOnSurveyAuthoringPages** <br/> |Optional **Boolean**. The default is **TRUE**. Represents whether this field type is displayed for inclusion on surveys. If set to **TRUE**, SharePoint Foundation displays this field type on survey authoring pages so that users can include the field type in their surveys.<br/><br/>In the SharePoint Foundation object model, **ShowOnSurveyAuthoringPages** is called [ShowOnSurveyCreate](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldTypeDefinition.ShowOnSurveyCreate.aspx).  <br/> |
|**ShowOnColumnTemplateAuthoringPages** <br/> |Optional **Boolean**. The default is **TRUE**. Represents whether this field type should be displayed as a column template field type. If set to **TRUE**, SharePoint Foundation displays this field type on column template authoring pages so that users can select to create a column template of this field type.<br/><br/>In the SharePoint Foundation object model, **ShowOnColumnTemplateAuthoringPages** is called [ShowOnColumnTemplateCreate](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldTypeDefinition.ShowOnColumnTemplateCreate.aspx).  <br/> |
|**SQLType** <br/> |Optional **String**. Represents the SQL data type that is used to store the data in the content database. Do not use a `<Field Name="SQLType">` element in your custom field type definitions.  <br/> |
|**Sortable** <br/> |Required **Boolean**. Represents whether a list with a column that is based on this field type can be sorted on the column that uses this type. If set to **TRUE**, the header of the column is a control that users can use to sort the list.  <br/> |
|**TypeDisplayName** <br/> |Required **String**. Represents the display name of the field type in the user interface (UI). In SharePoint Foundation, it appears in the **Type** column on the **Customize** [list] page (listedit.aspx). It is also used in place of **TypeShortDescription** if the latter is not present.<br/><br/>**TypeDisplayName** should be a localizable string.  <br/> |
|**TypeName** <br/> |Required **String**. Represents the name of the field type. This must be unique among all field type names on the SharePoint server farm.<br/><br/>**TypeName** should be a fixed, nonlocalizable string.  <br/> |
|**TypeShortDescription** <br/> |Optional **String**. Represents the short description of the field type that is displayed in the UI. In SharePoint Foundation, it appears with a radio button in the **Name and Type** section of the **New Site Column** and **Create Column** pages and in the **Type** column of the **Site Column Gallery**. If there is no `<Field Name="TypeShortDescription">` element, **TypeDisplayName** is used.<br/><br/>**TypeShortDescription** should be a localizable string.  <br/> |
|**UserCreatable** <br/> |Optional **Boolean**. The default is **TRUE**, which enables users to add fields of this field type to lists. Setting the value to **FALSE** allows use of the field type in list schemas, but hides the field type from users on the **Name and Type** section of the **New Site Column** and **Create Column** pages.  <br/> |
   
## Example

The following example defines a custom field type.
  
> [!IMPORTANT]
> The **RenderPattern** is obsolete. It is shown here solely to assist in the debugging of custom fields that were originally developed against earlier versions of SharePoint Foundation. 
  
```XML
  <FieldType>
    <Field Name="TypeName">SocialSecurityNumber</Field>
    <Field Name="ParentType">Text</Field>
    <Field Name="TypeDisplayName">Social Security Number</Field>
    <Field Name="TypeShortDescription">Social Security Number (123456789, 123-45-6789)</Field>
    <Field Name="AllowBaseTypeRendering">TRUE</Field>
    <Field Name="FieldTypeClass">
      AdventureWorks.FieldTypes.SPFieldSSN, AdventureWorks.FieldTypes.SPFieldSSN,
      Version=1.0.0.0,Culture=neutral,PublicKeyToken=90734cc53324b79c
    </Field>
    <RenderPattern Name="DisplayPattern">
        <Column HTMLEncode="TRUE" /> 
        <Column HTMLEncode="TRUE" UseRelatedField="TRUE"/> 
    </RenderPattern>
  </FieldType>
```

## See also

- [Custom Field Types](http://msdn.microsoft.com/library/1345b345-226d-443a-918f-af123a3c7b13%28Office.15%29.aspx)  
- [Custom Field Classes](http://msdn.microsoft.com/library/436a9d9b-7a6f-4e8f-86e8-f42ded85c069%28Office.15%29.aspx)  
- [Custom Field Type Property Rendering](http://msdn.microsoft.com/library/a959ad5b-6f3a-462c-80b9-e2d00bb0d62a%28Office.15%29.aspx)  
- [Custom Field Type Definition](http://msdn.microsoft.com/library/b3315997-671f-4c29-9518-48cc4592f205%28Office.15%29.aspx)  
- [Walkthrough: Creating a Custom Field Type](http://msdn.microsoft.com/library/089a1b8a-cafc-4050-b445-16650602fe4f%28Office.15%29.aspx)

