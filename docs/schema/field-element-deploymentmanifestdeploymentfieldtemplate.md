---
title: "Field Element (DeploymentManifest - DeploymentFieldTemplate)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5e1549be-c95f-4414-b72f-e9d0e124abd8
description: "Last modified: March 09, 2015"
---

# Field Element (DeploymentManifest - DeploymentFieldTemplate)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a Windows SharePoint Services 3.0 field object ([SPField](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPField.aspx)) that provides a field value for the specified template field. 

## Definition

```XML
DECLARATION
<xs:element name="Field" 
        type="SPField" 
        minOccurs="1" maxOccurs="1" 
/>
USAGE
<FieldTemplate>
        <Field
                ID="Guid"
                FieldId="Guid"
                Name="xs:string"
                Value="xs:string"
                DisplayName="xs:string"
                RowOrdinal="xs:int"
                RowOrdinal2="xs:int"
                Type="xs:string"
                ColName="xs:string"
                ColName2="xs:string"
                Title="xs:string"
                Description="xs:string"
                DefaultValue="xs:string"
                DefaultFormula="xs:string"
                FromBaseType="xs:string"
                Sealed="xs:string"
                CanToggleHidden="xs:string"
                DisplaySize="xs:string"
                Required="xs:string"
                ReadOnly="xs:string"
                Hidden="xs:string"
                Direction="xs:string"
                IMEMode="xs:string"
                SortableBySchema="xs:string"
                Sortable="xs:string"
                FilterableBySchema="xs:string"
                Filterable="xs:string"
                FilterableNoRecurrenceBySchema="xs:string"
                FilterableNoRecurrence="xs:string"
                Reorderable="xs:string"
                Format="xs:string"
                FillInChoice="xs:string"
                SchemaXml="xs:string"
        />
</FieldTemplate>

```

## Type

**SPField**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Id** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the list template.  <br/> |
|**FieldId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the field.  <br/> |
|**Name** <br/> |xs:string  <br/> |Optional. Name of the field  <br/> |
|**Value** <br/> |xs:string  <br/> |Optional. Represents the field value.  <br/> |
|**DisplayName** <br/> |xs:string  <br/> |Optional. Display name for the field.  <br/> |
|**RowOrdinal** <br/> |xs:int  <br/> |Optional.  <br/> |
|**RowOrdinal2** <br/> |xs:int  <br/> |Optional.  <br/> |
|**Type** <br/> |xs:string  <br/> |Optional. Type of the field.  <br/> |
|**ColName** <br/> |xs:string  <br/> |Optional. Display name of the field column.  <br/> |
|**ColName2** <br/> |xs:string  <br/> |Optional.  <br/> |
|**Title** <br/> |xs:string  <br/> |Optional. Title of the field value.  <br/> |
|**Description** <br/> |xs:string  <br/> |Optional. Provides a description of the field.  <br/> |
|**DefaultValue** <br/> |xs:string  <br/> |Optional. Default value associated with the field.  <br/> |
|**DefaultFormula** <br/> |xs:string  <br/> |Optional. Default formula applied to values in the field, in cases where the field is a calculated field.  <br/> |
|**FromBaseType** <br/> |xs:string  <br/> |Optional. Indicates the base type from which the field derives. Base types are defined in [FldTypes.xml](http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6%28Office.15%29.aspx).  <br/> |
|**Sealed** <br/> |xs:string  <br/> |Optional. Indicates whether other fields can be derived from the field.  <br/> |
|**CanToggleHidden** <br/> |xs:string  <br/> |Optional. Indicates whether the field column can be hidden in the user interface.  <br/> |
|**DisplaySize** <br/> |xs:string  <br/> |Optional. Specifies the display size for the field.  <br/> |
|**Required** <br/> |xs:string  <br/> |Optional. Specifies whether the field requires a value (that is, cannot be null).  <br/> |
|**ReadOnly** <br/> |xs:string  <br/> |Optional. Specifies whether the field value is read-only (cannot be modified).  <br/> |
|**Hidden** <br/> |xs:string  <br/> |Optional. Specifies whether the field is displayed in the list.  <br/> |
|**Direction** <br/> |xs:string  <br/> |Optional. Specifies the direction of the reading order for the field.  <br/> |
|**IMEMode** <br/> |xs:string  <br/> |Optional. Specifies the Input Method Editor (IME) mode bias to use for the field. The IME allows for conversion of keystrokes between languages when one writing system has more characters than can be encoded for the keyboard.  <br/> |
|**SortableBySchema** <br/> |xs:string  <br/> |Optional. Specifies whether the field can be sorted with respect to the schema definition.  <br/> |
|**Sortable** <br/> |xs:string  <br/> |Optional. Specifies whether the field can be sorted on field values.  <br/> |
|**FilterableBySchema** <br/> |xs:string  <br/> |Optional. Specifies whether the field can be filtered with respect to the schema definition.  <br/> |
|**Filterable** <br/> |xs:string  <br/> |Optional. Specifies whether the field can be filtered on field values.  <br/> |
|**FilterableNoRecurrenceBySchema** <br/> |xs:string  <br/> |Optional. Specifies whether the field can be filtered with respect to the schema definition file, but in such a way that the view does not expand recurring events.  <br/> |
|**FilterableNoRecurrence** <br/> |xs:string  <br/> |Optional. Specifies whether a filter can be created on a field in a view that does not expand recurring events. For more information, see [FilterableNoRecurrence](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPField.FilterableNoRecurrence.aspx).  <br/> |
|**Reorderable** <br/> |xs:string  <br/> |Optional. Specifies whether values in the field can be reordered.  <br/> |
|**Format** <br/> |xs:string  <br/> |Optional.  <br/> |
|**FillInChoice** <br/> |xs:string  <br/> |Optional.  <br/> |
|**SchemaXml** <br/> |xs:string  <br/> |Optional. Specifies the XML schema that defines the field.  <br/> |
   
### Child elements

None
   
### Parent elements

[FieldTemplate Element (DeploymentManifest)](fieldtemplate-element-deploymentmanifest.md)
   
## See also

- [SPField](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPField.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
- [FldTypes.xml](http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6%28Office.15%29.aspx)

