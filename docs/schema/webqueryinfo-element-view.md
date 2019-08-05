---
title: "WebQueryInfo element (View)"
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
ms.assetid: b9ab32d8-a847-4a8d-a793-28e36a9824fb
description: Used inside a TABLE tag surrounding a view to add attributes that assist the agents that are processing Web queries in extracting data from views.
---

# WebQueryInfo element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used inside a **\<TABLE\>** tag surrounding a view to add attributes that assist the agents that are processing Web queries in extracting data from views. 
  
```XML
<WebQueryInfo>
</WebQueryInfo>
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
- Maximum: 1
   
### Remarks

The **WebQueryInfo** element renders an ID on the **\<TABLE\>** tag, a **Summary** attribute set to the name of the list, and a **WebQuerySourceHref** attribute in the **o:** namespace that links to the XMLDATA representation of the view. Consequently, agents that understand these attributes can import a structured data view of lists rather than being required to perform a "screenscrape" for the data. 
  
## Example

In the following example, the **WebQueryInfo** element is used in a [ViewHeader](viewheader-element-list.md) element to provide an ID for a table that contains a view. 
  
```XML
<ViewHeader>
  <HTML>
    <![CDATA[ <TABLE ID="  ]]>
  </HTML>
  <ows:WebQueryInfo />
  <HTML>
    <![CDATA[ " width="100%" border=0 rules=rows>
        <TR VALIGN=TOP><FORM>  ]]>
  </HTML>
  <Fields>
    <HTML>
      <![CDATA[ <TH class="ms-vh">  ]]>
    </HTML>
    <Field /> 
    <HTML>
      <![CDATA[ </TH>  ]]>
    </HTML>
  </Fields>
  <HTML>
    <![CDATA[ </FORM></TR>  ]]>
  </HTML>
</ViewHeader>
```

<br/>
