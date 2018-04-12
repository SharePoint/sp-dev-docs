---
title: ImagesPath element
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: fb008d30-a447-4c8c-a315-eac2bab8874b
description: Returns the HTTP path to the images directory for the project, including the trailing forward slash.
---

# ImagesPath element

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Returns the HTTP path to the images directory for the project, including the trailing forward slash.
  
```XML
<ImagesPath>
</ImagesPath>
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
   
## Example

The following example uses the **ImagesPath** element to specify the path for the **Edit** icon. 
  
```XML
<DisplayPattern>
   <HTML><![CDATA[ <a href="]]></HTML>
   <URL Cmd="Edit" />
   <HTML><![CDATA[ " onclick='GoToLink(this);return false;' 
      target="_self">]]></HTML>
   <HTML><![CDATA[ <img border="0" alt="]]></HTML>
   <HTML>Edit</HTML>
   <HTML><![CDATA[ " src="]]></HTML>
   <ImagesPath />
   <HTML><![CDATA[ edititem.gif">]]></HTML>
   <HTML><![CDATA[ </a>]]></HTML>
</DisplayPattern>
```

<br/>
