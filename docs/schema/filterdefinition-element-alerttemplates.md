---
title: "FilterDefinition Element (AlertTemplates)"
ms.

manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- AlertTemplates schema
api_type:
- schema
ms.assetid: 20942c6a-0f6e-4cde-b382-2dbb563c0d29
description: "Last modified: March 09, 2015"
---

# FilterDefinition Element (AlertTemplates)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines an alert template filter. To modify existing filters or create additional filters, modify the **FilterDefinition** element of the appropriate template. Define the [Query](query-element-alerttemplates.md) element inside the filter by using Collaborative Application Markup Language (CAML). 
  
```
<FilterDefinition>
  <FriendlyName>
  </FriendlyName>  <ShortName>
  </ShortName>
  <Query>
    <GroupBy>
      ...
    </GroupBy>
    <OrderBy>
      ...
    </OrderBy>
  </Query>
</FilterDefinition>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
  
### Child elements

||
|:-----|
|[FriendlyName](friendlyname-element-alerttemplates.md) <br/> |
|[ShortName](shortname-element-alerttemplates.md) <br/> |
|[Query](query-element-alerttemplates.md) <br/> |
   
### Parent elements

||
|:-----|
|[Filters](filters-element-alerttemplates.md)|
   
## Example

The following query creates an alert event if the event date, end date, or location changes.
  
```XML
<FilterDefinition>
  <FriendlyName>$Resources:Alerts_4_filter;</FriendlyName>
  <ShortName>$Resources:Alerts_4_filter_shortname;</ShortName>
  <Query>
  <Or>
    <Or>
      <Neq><FieldRef name="EventDate/New"/>
        <FieldRef name="EventDate/Old"/>
      </Neq>
      <Neq>
        <FieldRef name="EndDate/New"/>
        <FieldRef name="EndDate/Old"/>
      </Neq>
    </Or>
      <Neq>
        <FieldRef name="Location/New"/>
        <FieldRef name="Location/Old"/>
      </Neq>
    </Or>
  </Query>
</FilterDefinition>

```


