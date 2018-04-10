---
title: "MapToText element"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 68683b19-b395-4342-b047-3d16e236ccda
description: Returns the name of the application in which a document was created, based on the file name extension and ProgID.
---

# MapToText element

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Returns the name of the application in which a document was created, based on the file name extension and **ProgID**.
  
```XML
<MapToText>
    ProgID|File_Extension
</MapToText>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

Numerous 
   
### Parent elements

Numerous 
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded 
   
### Remarks

The **MapToText** element uses the following syntax, separating the **ProgID** from the file name extension with a pipe symbol ("|") in C# or with **Or** in Visual Basic: 
  
```XML
<MapToText>ProgID|File_Extension </MapToText>
```

## Example

The following example uses the **MapToText** element to assign the name of the application to an App variable. 
  
```XML
<SetVar Name="App" Scope="Request">
   <MapToText>
      <Column Name="HTML_x0020_File_x0020_Type" />
      <HTML>|</HTML>
      <Column Name="File_x0020_Type" />
   </MapToText>
</SetVar>
```

<br/>
