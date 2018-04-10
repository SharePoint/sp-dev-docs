---
title: FieldPrefix element (View)
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
ms.assetid: 454613cf-0a5e-4440-beec-8457f6762b75
description: Obsolete. Returns the Microsoft Office namespace "urn:schemas-microsoft-com:office:office#", which is added to every field name for Office compatibility.
---

# FieldPrefix element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Obsolete. Returns the Microsoft Office namespace "urn:schemas-microsoft-com:office:office#", which is added to every field name for Office compatibility.
  
```XML
<FieldPrefix>
</FieldPrefix>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

None
   
### Parent elements

Numerous 
   
## Occurrences

- Minimum: 0 
- Maximum: Unbounded 
   
## Example

The following excerpt from the [FldTypes.xml](http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6%28Office.15%29.aspx) file uses the **FieldPrefix** element to return the Microsoft Office namespace in defining the rendering pattern for new items of the **Threading** field type. 
  
```XML
<RenderPattern Name="NewPattern" DisplayName="NewPattern">
   <HTML><![CDATA[ <INPUT TYPE=HIDDEN NAME=" ]]></HTML>
   <FieldPrefix />
   <Property Select="Name" />
   <HTML>" VALUE="</HTML>
   <Limit Len="504" StripWS="TRUE" HTMLEncode="TRUE">
      <GetVar Name="Threading" StripWS="TRUE" />
   </Limit>
   <HTML><![CDATA[ "> ]]></HTML>
</RenderPattern>
```

<br/>

