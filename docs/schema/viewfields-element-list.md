---
title: "ViewFields element (List)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- List schema
api_type:
- schema
ms.assetid: 488d22b5-b3e0-465c-a56a-1a38afb15db5
description: Provides an enumeration of the fields in a view through a listing of the FieldRef elements.
---

# ViewFields element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Provides an enumeration of the fields in a view through a listing of the [FieldRef](fieldref-element-list.md) elements. 
  
```XML
<ViewFields>
</ViewFields>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [FieldRef](fieldref-element-list.md)
   
### Parent elements

- [View](view-element-list.md)
- [ViewStyle](viewstyle-element-list.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1 
   
### Remarks

For a [FieldRef](fieldref-element-list.md) element to be used within a [ViewBody](viewbody-element-list.md) element, it must also be included in the **ViewFields** element to ensure that the field is available in the database result set. 
  
The SQL SELECT clause is generated from the collection of **FieldRef** listings. 
  
**ViewFields** can include references to fields in a foreign list, if there is a join defined by a [Join](join-element-view.md) element. 
  
## Example

The following example enumerates the collection of fields used in a view.
  
```XML
<ViewFields>
  <FieldRef Name="LinkTitle"></FieldRef>
  <FieldRef Name="AssignedTo"></FieldRef>
  <FieldRef Name="Status"></FieldRef>
  <FieldRef Name="Priority"></FieldRef>
  <FieldRef Name="DueDate"></FieldRef>
  <FieldRef Name="PercentComplete"></FieldRef>
</ViewFields>
```

## See also

- [List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx) 
- [ViewBody element (List)](viewbody-element-list.md)

