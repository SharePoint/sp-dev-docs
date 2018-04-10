---
title: View schema in CAML
ms.author: soliver
author: soliver
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: 39aba5b3-dcc2-4c45-9ce6-99f31fde0d8c
description: The View schema of Collaborative Application Markup Language (CAML) is used to define how the contents of a list view are rendered in Microsoft SharePoint Foundation. 
---

# View schema
  
**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
The View schema of [Collaborative Application Markup Language (CAML)](introduction-to-collaborative-application-markup-language-caml.md) is used to define how the contents of a list view are rendered in Microsoft SharePoint Foundation. 
  
> [!NOTE]
> SharePoint Foundation 2010 uses XSLT to define list views, and the View schema is maintained for backward compatibility. For information about XSLT list views, see [List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx). 
  
A list view includes a query that returns the data that is displayed in the view. For the list of query elements, see [Query schema](query-schema.md). For the top-level elements that are used to organize a view, see [List schema](list-schema.md).
  
In SharePoint Foundation 2010 .aspx pages, the view is conveyed through a [Microsoft.SharePoint.WebPartPages.XsltListViewWebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.XsltListViewWebPart.aspx) object. Views can be created or modified programmatically through either the server-side or client-side object model (for example, members of [SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx) or [SPViewCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPViewCollection.aspx) and their related types in the [Microsoft.SharePoint.Client](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.aspx) (JavaScript: [SP](http://msdn.microsoft.com/library/e3694767-6f32-f98c-37af-4282f2815c02%28Office.15%29.aspx)) namespace), through the Views web service (methods of the [Views](https://msdn.microsoft.com/library/websvcViews.Views.aspx) class), or through remote procedure call (RPC) protocol (see [Windows SharePoint Services RPC Methods](http://msdn.microsoft.com/library/fb791985-a9e4-4c94-b94a-1b3c7f00457a%28Office.15%29.aspx)).
  
## Specialized rendering elements

Specialized rendering elements are used within a view to define the logic for constructing HTML. These elements can contain numerous standard rendering elements.
  
- [ContentTypes](contenttypes-element-view.md)
  
- [Fields](fields-element-view.md)
  
- [FieldSwitch](fieldswitch-element-view.md)
  
    - [Expr](expr-element-view.md)
  
    - [Case](case-element-view.md)
  
    - [Default](default-element-view.md)
  
- [ForEach](foreach-element-view.md)
  
- [IfEqual](ifequal-element-view.md)
  
    - [Expr1](expr1-element-view.md)
  
    - [Expr2](expr2-element-view.md)
  
    - [Else](else-element-view.md)
  
    - [Then](then-element-view.md)
  
- [IfHasRights](ifhasrights-element-view.md)
  
    - [RightsChoices](rightschoices-element-view.md)
  
    - [RightsGroup](rightsgroup-element-view.md)
  
    - [Else](else-element-view.md)
  
    - [Then](then-element-view.md)
  
- [IfNeg](ifneg-element-view.md)
  
    - [Expr1](expr1-element-view.md)
  
    - [Expr2](expr2-element-view.md)
  
- [IfNew](ifnew-element-view.md)
  
- [IfSubString](ifsubstring-element-view.md)
  
    - [Expr1](expr1-element-view.md)
  
    - [Expr2](expr2-element-view.md)
  
    - [Else](else-element-view.md)
  
    - [Then](then-element-view.md)
  
- [Limit](limit-element-view.md)
  
    - [Column](column-element-view.md)
  
    - [More](more-element-view.md)
  
    - [Text](text-element-view.md)
  
- [Length](length-element-view.md)
  
- [MapToAll](maptoall-element-view.md)
  
- [MapToContentType](maptocontenttype-element-view.md)
  
- [MapToControl](maptocontrol-element-view.md)
  
- [MapToIcon](maptoicon-element-view.md)
  
- [Method](method-element-view.md)
  
    - [SetList](setlist-element-view.md)
  
    - [SetVar](setvar-element-view.md)
  
- [SelectionOptions](selectionoptions-element-view.md)
  
- [Switch](switch-element-view.md)
  
    - [Expr](expr-element-view.md)
  
    - [Case](case-element-view.md)
  
    - [Default](default-element-view.md)
  
## Standard rendering elements

The following standard rendering elements are used to render HTML within the various sections of the previously listed structural or specialized rendering elements.
  
- [Column](column-element-view.md)
  
- [Column2](column2-element-view.md)
  
- [Counter](counter-element-view.md)
  
- [CurrentRights](currentrights-element-view.md)
  
- [Field](field-element-view.md)
  
- [FieldPrefix](fieldprefix-element-view.md)
  
- [FieldProperty](fieldproperty-element-view.md)
  
- [FieldSortParams](fieldsortparams-element-view.md)
  
- [FilterLink](filterlink-element-view.md)
  
- [GetFileExtension](getfileextension-element-view.md)
  
- [GetVar](getvar-element-view.md)
  
- [HTML](html-element-view.md)
  
- [HttpHost](httphost-element-view.md)
  
- [HttpPath](httppath-element-view.md)
  
- [HttpVDir](httpvdir-element-view.md)
  
- [ID](id-element-view.md)
  
- [Identity](identity-element-view.md)
  
- [List](list-element-view.md)
  
- [ListProperty](listproperty-element-view.md)
  
- [ListUrl](listurl-element-view.md)
  
- [ListUrlDir](listurldir-element-view.md)
  
- [LookupColumn](lookupcolumn-element-view.md)
  
- [MeetingProperty](meetingproperty-element-view.md)
  
- [PageUrl](pageurl-element-view.md)
  
- [ProjectProperty](projectproperty-element-view.md)
  
- [Property](property-element-view.md)
  
- [ScriptQuote](scriptquote-element-view.md)
  
- [ServerProperty](serverproperty-element-view.md)
  
- [SetList](setlist-element-view.md)
  
- [SetVar](setvar-element-view.md)
  
- [ThreadStamp](threadstamp-element-view.md)
  
- [URL](url-element-view.md)
  
- [UrlBaseName](urlbasename-element-view.md)
  
- [UrlDirName](urldirname-element-view.md)
  
- [UserID](userid-element-view.md)
  
- [WebQueryInfo](webqueryinfo-element-view.md)
  
## See also

- [Query schema](query-schema.md)  
- [List schema](list-schema.md)
- [List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx) 
- [XMLDefinition and CAML View schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922%28Office.15%29.aspx)

