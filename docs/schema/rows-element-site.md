---
title: "Rows element (Site)"
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
ms.assetid: 9b011981-3df6-4e9e-a910-e6aa4bd2de31
description: Contains a collection of Row elements specifying default data for lists. 
---

# Rows element (Site)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains a collection of [Row](row-element-site.md) elements specifying default data for lists. 
  
```XML
<Rows>
  <Row></Row>
  <Row></Row>
  ...
</Rows>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [Row](row-element-site.md)
   
### Parent elements

- [Data](data-element-site.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1 
   
### Remarks

The **Rows** element is used within the [Data](data-element-site.md) element of a list definition to provide a set of default data when a list is instantiated during site provisioning. 
  
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


