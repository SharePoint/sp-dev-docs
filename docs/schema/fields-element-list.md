---
title: "Fields Element (List)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- List schema
api_type:
- schema
ms.assetid: 285aaef1-eeac-42e2-867b-3b0fc9bbf8c5
description: "Last modified: March 09, 2015"
---

# Fields Element (List)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains field definitions for a list definition within a [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file, or for a base list type within the global [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file, specifying the fields that are implemented in a list. 
  
```
<Fields  Revision = "Integer">  ...
</Fields>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Revision** <br/> |Optional **Integer**.  <br/> |
   
### Child elements

||
|:-----|
|[Field](field-element-list.md)|
   
### Parent elements

||
|:-----|
|[Metadata (List)](metadata-element-list.md), [MetaData (Site)](metadata-element-site.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following example from the [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file for tasks lists specifies fields uniquely used in a tasks list. 
  
```XML
<Fields>
   <Field Type="Choice" Name="Priority" DisplayName="Priority" >
      <CHOICES>
         <CHOICE>(1) High</CHOICE>
         <CHOICE>(2) Normal</CHOICE>
         <CHOICE>(3) Low</CHOICE>
      </CHOICES>
      <Default>(2) Normal</Default>
   </Field>
   <Field Type="Choice" Name="Status" DisplayName="Status">
      <CHOICES>
         <CHOICE>Not Started</CHOICE>
         <CHOICE>In Progress</CHOICE>
         <CHOICE>Completed</CHOICE>
         <CHOICE>Deferred</CHOICE>
         <CHOICE>Waiting on someone else</CHOICE>
      </CHOICES>
      <Default>Not Started</Default>
   </Field>
   <Field Type="Number" Name="PercentComplete" Percentage="TRUE" 
         Min="0" Max="1" DisplayName="% Complete"></Field>
   <Field Type="User" List="UserInfo" Name="AssignedTo" 
         DisplayName="Assigned To"></Field>
   <Field Type="Note" RichText="TRUE" Name="Body" 
         DisplayName="Description" Sortable="FALSE"></Field>
   <Field Type="DateTime" Name="StartDate" DisplayName="Start Date">
      <Default>[today]</Default>
   </Field>
   <Field Type="DateTime" Name="DueDate" 
         DisplayName="Due Date"></Field>
</Fields>
```


