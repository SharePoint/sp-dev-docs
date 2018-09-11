---
title: "Identity element (View)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: 3833c08b-b7a4-450d-8781-717cba7a7916
description: Used in a New or Edit form to render hidden fields used by the form.
---

# Identity element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in a New or Edit form to render hidden fields used by the form.
  
```XML
<Identity>
</Identity>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

None
   
### Parent elements

Numerous 
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded  
   
### Remarks

The **Identity** element renders a set of hidden `<INPUT>` tags that allow the server to identify which item is being edited when a form is submitted, the version of the item, and the time that the item was last modified (in the case of a document library) for multiuser conflict detection. 
  
## Example

The **Identity** element renders the following `<INPUT>` tags for the Edit form of the first announcement in the built-in announcements list. These values are posted back to the server when a form is submitted so that the server knows the list, as well as the row, to which the POST refers. The **NAME** attribute's **owshiddenversion** value is used for conflict detection. 
  
```XML
<INPUT ID=onetidIOHidden TYPE=HIDDEN NAME="List" VALUE="Announcements">
<INPUT ID=onetidIOHidden TYPE=HIDDEN NAME="ID" VALUE="1">
<INPUT ID=onetidIOHidden TYPE=HIDDEN NAME="owshiddenversion" VALUE="0">
```

<br/>
