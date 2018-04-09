---
title: "OkToVote Element"
ms.author: NormSohl
author: NormSohl
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: cb803116-b471-4893-87b8-d03ef0632b9c
description: "Last modified: March 09, 2015"
---

# OkToVote Element

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Used to determine whether a specific user can vote in a survey.
  
```
<OkToVote>
</OkToVote>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|Numerous |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Remarks

This element requires that a **SetList** element be implemented for the appropriate survey; otherwise, the behavior of the **OkToVote** element is undefined. 
  
The **OkToVote** element renders as follows: 
  
- **0** — It is OK for the currently authenticated user to vote in the survey whose internal name is u_Survey. 
    
- **1** — The user cannot vote because u_Survey has no questions. 
    
- **2** — The user cannot vote because he or she has already voted in this survey. 
    
This element can be combined with a **Switch** statement to take actions, depending on the user's status in relation to a particular survey. 
  

