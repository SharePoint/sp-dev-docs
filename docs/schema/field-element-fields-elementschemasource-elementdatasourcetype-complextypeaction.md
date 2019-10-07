---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1cdd2292-2168-9cb9-a47b-b0917606a343
---

# Field element (Fields element) 

(SchemaSource element) (dataSourceType complexType) (Action4)

**Applies to**: SharePoint Server 2013

Specifies a field in which to display data obtained from the parent data source.

## Usage

```XML
<SchemaSource>
    <Fields>
        <Field />
    </Fields>
</SchemaSource>
```

## Element information

- **Element type**: 
- **Namespace**: 
- **Schema file**: Actions4.xsd

## Definition

```XML
<xs:element name="Field" minOccurs="1" maxOccurs="unbounded">
  <xs:attribute name="Name" type="s:string" />
  <xs:attribute name="DisplayName" type="s:string" />
  <xs:attribute name="Type" type="s:string" />
</xs:element>  
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Parent elements

|                                      Element                                      | Type | Description |
| :-------------------------------------------------------------------------------- | :--- | :---------- |
| [Fields](fields-element-schemasource-elementdatasourcetype-complextypeaction4.md) |      |             |

### Child elements

None.

### Attributes

|     Element     |   Type   | Required |                     Description                      |       Possible values        |
| :-------------- | :------- | :------- | :--------------------------------------------------- | :--------------------------- |
| **DisplayName** | s:string | optional | Specifies the localizable display name of the field. | Values of the s:string type. |
| **Name**        | s:string | optional | Specifies the internal name of the field.            | Values of the s:string type. |
| **Type**        | s:string | optional | Specifies the data type of the field.                | Values of the s:string type. |
