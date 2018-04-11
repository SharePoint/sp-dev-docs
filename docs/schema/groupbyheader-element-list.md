---
title: "GroupByHeader element (List)"
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
ms.assetid: 29aa627d-b418-40c8-a911-855d14593510
description: Contains the definition of a Group By Header section in a view of a list.
---

# GroupByHeader element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the definition of a Group By Header section in a view of a list.

```XML
<GroupByHeader>
</GroupByHeader>
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
- Maximum: 1  <br/> 
   
## Example

The following example from the [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file for custom lists defines the Group By Header section in a view. 
  
```XML
<GroupByHeader>
  <HTML><![CDATA[<TBODY id="titl]]></HTML>
  <GetVar Name="GroupByLevelString"/>
  <HTML><![CDATA["><TR]]></HTML>
  <Switch>
    <Expr>
      <GetVar Name="GroupByIndent"/>
    </Expr>
    <Case Value="0">
      <HTML><![CDATA[ class="ms-gb" ]]></HTML>
    </Case>
    <Default>
      <HTML><![CDATA[ class="ms-gb2" ]]></HTML>
    </Default>
  </Switch>
  <HTML><![CDATA[><TD colspan="100" nowrap>
    <img src="/_layouts/images/blank.gif" alt="" height=1 
    width=]]></HTML>
  <GetVar Name="GroupByIndent"/>
  <HTML><![CDATA[><a href="javascript:" 
    onclick="javascript:ExpCollGroup(']]></HTML>
  <GetVar Name="GroupByLevelString"/>
  <HTML><![CDATA[','img_]]></HTML>
  <GetVar Name="GroupByLevelString"/>
  <HTML><![CDATA[');return false;"><img id="img_]]></HTML>
  <GetVar Name="GroupByLevelString"/>
  <HTML><![CDATA[" src="/_layouts/images/minus.gif" alt="]]></HTML>
  <HTML>Expand/Collapse</HTML>
  <HTML><![CDATA[" border="0"></a>&amp;nbsp;]]></HTML>
  <GetVar Name="GroupByField" HTMLEncode="TRUE" />
  <HTML><![CDATA[ :&amp;nbsp;]]></HTML>
  <GetVar Name="GroupByValue"/>
  <HTML><![CDATA[</TD></TR></TBODY>]]></HTML>
  <HTML><![CDATA[<TBODY id="tbod]]></HTML>
  <GetVar Name="GroupByLevelString" HTMLEncode="TRUE"/>
  <HTML><![CDATA[_">]]></HTML>
</GroupByHeader>
```

## See also

- [List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx)
- [XMLDefinition and CAML View Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922%28Office.15%29.aspx)

