---
title: Deep dive into 'Get items' and 'Get files' SharePoint actions in Power Automate
ms.date: 03/11/2020
---

# Deep dive into 'Get items' and 'Get files' SharePoint actions in Power Automate

The Get items and Get files SharePoint actions in Microsoft Flow help you get items from a list and a library respectively. Though they are different actions, the capabilities for both the actions are same. In this post, let me take you a deep dive on how to work with these actions.

## Decide if you are working with lists or libraries

To start with, Get items action only works with lists while Get files action only works with libraries. I wanted to reiterate this because I have been misled by this many times wondering why I can't see my libraries in the Get items action and lists in the Get files action.

## Item limits

The default item limit is 100.

If you are using the default options and just specifying the site address and list/library name, the flow will return 100 items from the list/library.

If you are working with large lists, you can increase this limit up to the list view threshold limit which is 5,000.

To specify the number of items to be returned, expand the advanced options and specify the number in the Top Count action property.

And if you go beyond 5,000 item limit, the flow will fail with the relevant error message.

The items will be paginated as well when you use Apply to each action to the returned item collection if you are wondering about that.

## Limit columns by view

List views are a useful configuration where you can customize what columns to show along with any other conditions or grouping of list items. This is not only useful for users but also for any other computation you want to do over that view data.

With the _Get items_ and _Get files_ actions, you can retrieve the list items along with their columns. However, retrieving the columns would retrieve all the columns. While this is pretty useful, it might be an overkill when you really want to work with a specific set of columns configured in a specific view.

The 'Limit columns by view' option, available in the _Get items_ and _Get files actions_ will allow you to do exactly that. While retrieving list items, you can now limit the columns by view.

Just expand the advanced options in the action and you should see this option. You can select a view of your choice.

This option is useful in cases where you want to perform set of operations on specific data, like in the example above in my flow where I have a view for different events. In the case, where I am working with food events, I might as well limit the columns by the Food Events.

## Filter queries

The action also supports specifying filter queries so you can filter items on the server. Using filter queries are performant than filtering the returned results in your flow.

So, what filter queries can you use? Below are the supported OData filter queries in SharePoint that you can use:

Filter by column name:

```
Location eq 'Midwest'
```

Location is the column name used with the operator equals and 'Midwest' is the value of the column.

Other examples:

* Location eq 'Midwest' and Status eq 'Approved'
* startswith(Title, 'A')
* startswith(Title, 'A') and Due_x0020_Date gt 'formatDateTime(utcNow(),'yyyy-MM-dd')'
* formatDateTime(utcNow(),'yyyy-MM-dd') is an expression

Supported query methods and operators include the following:

### Numeric comparisons

* lt
  * less than
* le
  * less than or equals
* gt
  * greater than
* ge
  * greater than or equals
* eq
  * equals
* ne
  * not equal

### String comparisons

* startsWith
* substringOf
* eq
* ne

### Date and time functions

* day()
* month()
* year()
* hour()
* minute()
* second()

## Order by query

You can also specify an order by query so you can order items based off of a column either in ascending or descending order. The query is really simple, for example:

* Due_x0020_Date desc
* Title asc

Note that spaces in the column name are replaced with `_x0020_` (0 is numeral zero).

The format is column name followed by asc or desc depending on ascending or descending order respectively.

## Lookup columns support

If your list/library has lookup columns, Get items and Get files actions support returning items with a maximum of 12 lookup columns, excluding the out of the box Created by and Modified by fields. If your list/library exceeds this threshold, the flow will error out.

Lookup columns are also not supported today in both filter by and order by queries in the action. These will include fields such as person fields, lookup columns to another list, taxonomy fields etc.,
