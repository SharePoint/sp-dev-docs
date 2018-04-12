---
title: "OkToVote element"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: cb803116-b471-4893-87b8-d03ef0632b9c
description: Used to determine whether a specific user can vote in a survey.
---

# OkToVote element

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used to determine whether a specific user can vote in a survey.
  
```XML
<OkToVote>
</OkToVote>
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

This element requires that a **SetList** element be implemented for the appropriate survey; otherwise, the behavior of the **OkToVote** element is undefined. 
  
The **OkToVote** element renders as follows: 
  
- **0** — It is okay for the currently authenticated user to vote in the survey whose internal name is u_Survey. 
    
- **1** — The user cannot vote because u_Survey has no questions. 
    
- **2** — The user cannot vote because he or she has already voted in this survey. 
    
This element can be combined with a **Switch** statement to take actions, depending on the user's status in relation to a particular survey. 
  
<br/>
