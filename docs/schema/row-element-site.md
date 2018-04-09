---
title: "Row Element (Site)"
ms.author: NormSohl
author: NormSohl
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

# Row Element (Site)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Used within the [Data](data-element-site.md) element in a list definition to provide a set of default data when a list is instantiated during site provisioning. 
  
```
<Row>
</Row>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|[Field](field-element-site.md)|
   
## Parent Elements

||
|:-----|
|[Rows](rows-element-site.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Example

The following example defines one row of fields for the welcome page.
  
```XML
<Data>
   <Rows>
      <Row>
         <Field Name="Title">Welcome to your new team Web site!</Field>
         <Field Name="Body">You can use this site to share information 
            with members of the site. To add a new announcement, click 
            "Add new announcement" below. This is a great way to 
            communicate news with your team.</Field>
         <Field Name="Expires"><ows:TodayISO/></Field>
      </Row>
   </Rows>
</Data>
```


