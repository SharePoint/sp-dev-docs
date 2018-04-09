---
title: "Method Element (View)"
ms.

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
ms.assetid: bfcb7a97-c9e7-4b16-9a20-9c023c9ffc2b
description: "Last modified: March 09, 2015"
---

# Method Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in batch processing to specify commands within the [Batch](batch-element-view.md) element. 
  
```
<Method ID="Text"
  Cmd = "Text"
  ID = "Text">
</Method>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Cmd** <br/> | Optional **Text**. Used in Web services to specify the command to post to the server for updating list items. Possible values include the following:  <br/> **Delete** — Delete the specified item.  <br/> **New** — Create the specified item.  <br/> **Update** — Modify the specified item.  <br/> |
|**ID** <br/> |Required **Text**. A freeform identification string that is not actually used by the server but that is returned to the client.  <br/> |
   
### Child elements

||
|:-----|
|[Field](../../collaborative-application-markup-language-caml-schemas/list-schema/field-element-list.md), [SetList](setlist-element-view.md), [SetVar](setvar-element-view.md)|
   
### Parent elements

||
|:-----|
|[Batch](batch-element-view.md)|
   
### Occurrences

||
|:-----|
|Minimum: 1  <br/> Maximum: Unbounded  <br/> |
   
### Remarks

The **Method** element is required for the **Batch** element, which is embedded within HTTP protocol and allows the client application to post more than one command at a time to the server. 
  
In operations where the [SetVar](setvar-element-view.md) element is used within the **Method** element to post commands, the **Cmd** attribute can contain methods in the [Windows SharePoint Services RPC Protocol](http://msdn.microsoft.com/library/1af2791b-f17f-42f3-95ea-1a4df9b8e3d0%28Office.15%29.aspx) protocol. 
  
When used with the [UpdateListItems](https://msdn.microsoft.com/library/WebSvcLists.Lists.UpdateListItems.aspx) method of the [Lists](https://msdn.microsoft.com/library/WebSvcLists.Lists.aspx) Web service, each **Method** element contains [Field](../../collaborative-application-markup-language-caml-schemas/list-schema/field-element-list.md) elements that specify the column values for each item being updated. 
  
## Example

The following example uses the **Method** element to post the remote procedure call (RPC) [ExportList](http://msdn.microsoft.com/library/0e3b38ed-34de-4a16-a178-66a750de92c8%28Office.15%29.aspx) command and return the schema of a specified list. 
  
```XML
<Batch OnError="Return">
  <Method ID="0,ExportList">
    <SetList Scope="Request">EF2F5A21-0FD0-4654-84ED-
        112B4F5A48F8</SetList>
    <SetVar Name="Cmd">ExportList</SetVar>
  </Method>
</Batch>
```


