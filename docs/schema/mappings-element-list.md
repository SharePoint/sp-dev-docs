---
title: "MAPPINGS element (List)"
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
ms.assetid: 9d76858e-04a2-4bf6-92d0-f44dcba11937
description: Contains mappings of values to the choices displayed within a Choice field. 
---

# MAPPINGS element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains mappings of values to the choices displayed within a **Choice** field. 
  
```XML
<MAPPINGS>
    <MAPPING
      Value = "Text">
    </MAPPING>
  ...
</MAPPINGS>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [MAPPING](mapping-element-list.md)
   
### Parent elements

- [Field](field-element-list.md)
   
### Occurrences

- Minimum: 0  
- Maximum: 1 
   
## Example

The following excerpt shows how to implement the **MAPPINGS** element in a **Choice** field. 
  
```XML
<Field ID="{c15b34c3-ce7d-490a-b133-3f4de8801b76}" Type="Choice" Name="Status" DisplayName="$Resources:core,Tasks_Status;" SourceID="http://schemas.microsoft.com/sharepoint/v3" StaticName="Status">
  <CHOICES>
    <CHOICE>$Resources:core,Tasks_NotStarted;</CHOICE>
    <CHOICE>$Resources:core,Tasks_InProgress;</CHOICE>
    <CHOICE>$Resources:core,Tasks_Completed;</CHOICE>
    <CHOICE>$Resources:core,Tasks_Deferred;</CHOICE>
    <CHOICE>$Resources:core,Tasks_Waiting;</CHOICE>
  </CHOICES>
  <MAPPINGS>
    <MAPPING Value="1">$Resources:core,Tasks_NotStarted;</MAPPING>
    <MAPPING Value="2">$Resources:core,Tasks_InProgress;</MAPPING>
    <MAPPING Value="3">$Resources:core,Tasks_Completed;</MAPPING>
    <MAPPING Value="4">$Resources:core,Tasks_Deferred;</MAPPING>
    <MAPPING Value="5">$Resources:core,Tasks_Waiting;</MAPPING>
  </MAPPINGS>
  <Default>$Resources:core,Tasks_NotStarted;</Default>
</Field>
```

<br/>

