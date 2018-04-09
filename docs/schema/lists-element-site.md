---
title: "Lists Element (Site)"
ms.author: rickki
author: rickki
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
ms.assetid: 74e6167c-6f19-4296-8db4-fd142da3f43a
description: "Last modified: March 09, 2015"
---

# Lists Element (Site)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Contains the collection of lists for a configuration.
  
```
<Lists>
</Lists>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|[List](list-element-site.md)|
   
## Parent Elements

||
|:-----|
|[Configuration](configuration-element-site.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following example shows the **Lists** section of the **DWS** configuration in the [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file of the standard SharePoint Foundation site definition ( **STS**).
  
```XML
<Lists>
  <List FeatureId="00BFEA71-E717-4E80-AA17-D0C71B360101" Type="101" Title="$Resources:core,shareddocuments_Title;" Url="$Resources:core,shareddocuments_Folder;" /> 
  <List FeatureId="00BFEA71-6A49-43FA-B535-D15C05500108" Type="108" Title="$Resources:core,discussions_Title;" Url="$Resources:core,lists_Folder;/$Resources:core,discussions_Folder;" QuickLaunchUrl="$Resources:core,lists_Folder;/$Resources:core,discussions_Folder;" /> 
  <List FeatureId="00BFEA71-D1CE-42de-9C63-A44004CE0104" Type="104" Title="$Resources:core,announceList;" Url="$Resources:core,lists_Folder;/$Resources:core,announce_Folder;">
    <Data>
      <Rows>
        <Row>
          <Field Name="Title">$Resources:onetid11;</Field> 
          <Field Name="Body">$Resources:onetid12;</Field> 
          <Field Name="Expires"><ows:TodayISO/></Field> 
        </Row>
      </Rows>
    </Data>
  </List>
  <List FeatureId="00BFEA71-2062-426C-90BF-714C59600103" Type="103" Title="$Resources:core,linksList;" Url="$Resources:core,lists_Folder;/$Resources:core,links_Folder;" /> 
  <List FeatureId="00BFEA71-EC85-4903-972D-EBE475780106" Type="106" Title="$Resources:core,calendarList;" Url="$Resources:core,lists_Folder;/$Resources:core,calendar_Folder;" QuickLaunchUrl="$Resources:core,lists_Folder;/$Resources:core,calendar_Folder;/Calendar.aspx" /> 
  <List FeatureId="00BFEA71-A83E-497E-9BA0-7A5C597D0107" Type="107" Title="$Resources:core,taskList;" Url="$Resources:core,lists_Folder;/$Resources:core,tasks_Folder;" /> 
</Lists>
```


