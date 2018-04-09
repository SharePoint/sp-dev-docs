---
title: "Rows Element (Site)"
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
ms.assetid: 9b011981-3df6-4e9e-a910-e6aa4bd2de31
description: "Last modified: March 09, 2015"
---

# Rows Element (Site)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Contains a collection of [Row](row-element-site.md) elements specifying default data for lists. 
  
```
<Rows>
  <Row></Row>
  <Row></Row>
  ...
</Rows>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|[Row](row-element-site.md)|
   
## Parent Elements

||
|:-----|
|[Data](data-element-site.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Remarks

The **Rows** element is used within the [Data](data-element-site.md) element of a list definition to provide a set of default data when a list is instantiated during site provisioning. 
  
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


