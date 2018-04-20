---
title: "Views element (List)"
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
ms.assetid: 8596335f-5bb6-49e8-b362-a87a7c76a168
description: Contains an enumeration of the views that are used in a list.
---

# Views element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains an enumeration of the views that are used in a list.
  
```XML
<Views>
</Views>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [View](view-element-list.md)
   
### Parent elements

- [MetaData (List)](metadata-element-list.md)
- [MetaData (Site)](metadata-element-site.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1 
   
## Example

The following example illustrates a collection of [View](view-element-list.md) elements contained by a **Views** element. The first view, "Summary," displays a sequence of paragraphs. The [Query](query-element-list.md) element specifies not only a sort order (in order of modification date), but also a filter (only show items whose **Expires** property is greater than or equal to today's date). 
  
```XML
<Views>
  <View Type="HTML" Name="Summary">
    <ViewBody ExpandXML="TRUE">
      <![CDATA[ <p><SPAN class=DocTitle>
            <ows:Field Name="Title"/></SPAN>
        (<ows:Field Name="Author"/>, <ows:Field Name="Modified"/>)
        <ows:Limit><Field Name="Body"/></ows:Limit>
        </p>  ]]>
    </ViewBody>
    <Query>
      <Where>
        <Geq>
          <FieldRef Name="Expires"/>
          <Value Type="DateTime">
            <Today/>
          </Value>
        </Geq>
      </Where>
      <OrderBy>
        <FieldRef Name="Modified"/>
      </OrderBy>
    </Query>
    <ViewFields>
      <FieldRef Name="Summary"/>
      <FieldRef Name="Author"/>
      <FieldRef Name="Modified"/>
      <FieldRef Name="Body"/>
    </ViewFields>
  </View>
  <View Type="HTML" Name="Titles">
    .
    .
    .
  </View>
  <View Type="HTML" Name="Dates">
    .
    .
    .
  </View>
    .
    .
    .
</Views>
```

## See also

- [List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx)

