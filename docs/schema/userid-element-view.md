---
title: "UserID Element (View)"
ms.author: rickki
author: rickki
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
ms.assetid: 69bfcb5d-4b83-408e-89d3-2c78b7675f79
description: "Last modified: March 09, 2015"
---

# UserID Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the unique ID number of the currently authenticated user of a site, as defined in the UserInfo table of the content database.
  
```
<UserID
  AllowAnonymous = "TRUE | FALSE">
</UserID>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**AllowAnonymous** <br/> |Optional **Boolean**. **TRUE** to allow anonymous requests without displaying a dialog box to ask for the user's password.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|Numerous |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
### Remarks

The **UserID** element can be used to compare the value of a field to the current user ID. If the request is anonymous, this element, by default, causes the server to force authentication, which means it must display a dialog box in the browser that asks for a password or else it must initiate Windows NT challenge/response (NTLM). If a user has accounts on multiple subsites or Web applications, the user ID may be different in each case. 
  

