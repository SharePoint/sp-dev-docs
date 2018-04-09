---
title: "UserID Element (Query)"
ms.

manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Query schema
api_type:
- schema
ms.assetid: 9ef6ba21-0f75-44b8-93cf-48186d1fc09d
description: "Last modified: March 09, 2015"
---

# UserID Element (Query)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the unique ID number of the currently authenticated user of a site, as defined in the UserInfo table of the content database.
  
```
<UserID>
</UserID>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[Value](value-element-query.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Example

The following query returns cases where either the Author or Editor field is equal to the current value of the **UserID** element, and it returns the results in ascending order with the **Title** field first, and then the FirstName field. 
  
```XML
<Query>
  <Where>
    <Or>
      <Eq>
        <FieldRef Name="Author" />
        <Value Type="Integer">
          <UserID />
        </Value>
      </Eq>
      <Eq>
        <FieldRef Name="Editor" />
        <Value Type="Integer">
          <UserID />
        </Value>
      </Eq>
    </Or>
  </Where>
  <OrderBy>
    <FieldRef Name="Title">
    </FieldRef>
    <FieldRef Name="FirstName">
    </FieldRef>
  </OrderBy>
</Query>
```


