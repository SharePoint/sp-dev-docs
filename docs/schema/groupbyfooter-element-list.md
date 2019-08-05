---
title: "GroupByFooter element (List)"
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
ms.assetid: 1d64b0e0-46c7-4441-bd31-3df017c0beb0
description: Contains the definition of a Group By Footer section in a view of a list.
---

# GroupByFooter element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the definition of a Group By Footer section in a view of a list.
  
```XML
<GroupByFooter>
</GroupByFooter>
```

> [!NOTE]
> Most standard Microsoft SharePoint Foundation 2010 list views ignore this element. For more information, see [XMLDefinition and CAML View Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922%28Office.15%29.aspx). 

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

Numerous 
   
### Parent elements

- [View](view-element-list.md)
- [ViewStyle](viewstyle-element-list.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1 
   
## Example

The following example from the [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file for custom lists defines the Group By Footer section in a view. 
  
```XML
<GroupByFooter>
  <HTML><![CDATA[</TBODY>]]></HTML>
  <Switch>
    <Expr>
      <GetVar Name="GroupByIndent"/>
    </Expr>
    <Case Value="0">
      <HTML><![CDATA[<TBODY id="foot]]></HTML>
      <GetVar Name="GroupByLevelString"/>
      <HTML><![CDATA[_"><TR><TD><BR></TD></TR></TBODY>]]></HTML>
    </Case>
    <Default/>
  </Switch>
  <Switch>
    <Expr>
      <GetVar Name="GroupByCollapse"/>
    </Expr>
    <Case Value="TRUE">
      <HTML><![CDATA[<SCRIPT>ExpCollGroup(']]></HTML>
      <GetVar Name="GroupByLevelString"/>
      <HTML><![CDATA[','img_]]></HTML>
      <GetVar Name="GroupByLevelString"/>
      <HTML><![CDATA[');</SCRIPT>]]></HTML>
    </Case>
    <Default/>
  </Switch>
</GroupByFooter>
```

## See also

- [List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx)
- [XMLDefinition and CAML View Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922%28Office.15%29.aspx)

