---
title: "Row element (Site)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Site schema
api_type:
- schema
ms.assetid: 33449e60-4a1f-4e53-bea7-72b88a742ae0
description: "Last modified: March 09, 2015"
---

# Row element (Site)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used within the [Data](data-element-site.md) element in a list definition to provide a set of default data when a list is instantiated during site provisioning. 
  
```XML
<Row>
</Row>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [Field](field-element-site.md)
   
### Parent elements

- [Rows](rows-element-site.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded
   
## Example

The following example defines one row of fields for the welcome page.
  
```XML
<Data>
   <Rows>
      <Row>
         <Field Name="Title">Welcome to your new team website!</Field>
         <Field Name="Body">You can use this site to share information 
            with members of the site. To add a new announcement, click 
            "Add new announcement" below. This is a great way to 
            communicate news with your team.</Field>
         <Field Name="Expires"><ows:TodayISO/></Field>
      </Row>
   </Rows>
</Data>
```


