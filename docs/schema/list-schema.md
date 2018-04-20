---
title: "List schema"
ms.author: soliver
author: soliver
manager: soliver
ms.date: 12/7/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- List schema
api_type:
- schema
ms.assetid: 4a595fed-9588-4845-a92d-ba16a38ad93e
description: "Last modified: December 07, 2015"
---

# List schema 
  
**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
The list schema of [Collaborative Application Markup Language (CAML)](introduction-to-collaborative-application-markup-language-caml.md) is used to define the metadata for creating lists. The list schema includes field definitions ([Field](field-element-list.md) element), view definitions, and a toolbar definition, in addition to specifying content types, forms, and a default description for lists that are created. The definition for a list is contained in a [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file that is located in %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\FEATURES or is included in sandboxed solutions. 
  
You can create or modify lists programmatically through the object model (for example, members of the [SPList](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPList.aspx) class and the [SPListCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPListCollection.aspx) class), through the Lists web service (methods of the [Lists](https://msdn.microsoft.com/library/websvcLists.Lists.aspx) class), and through the Remote Procedure Call (RPC) protocol (see [Windows SharePoint Services RPC Methods](http://msdn.microsoft.com/library/fb791985-a9e4-4c94-b94a-1b3c7f00457a%28Office.15%29.aspx)). 
  
## List schema elements

[\<List\>](list-element-list.md)
  
[\<MetaData\>](metadata-element-list.md)
  
- [\<Default\>](default-element-listform.md)
  
- [\<Forms\>](forms-element-list.md)
  
    - [\<Form\>](form-element-list.md)
  
       - [\<ListFormOpening\>](listformopening-element-list.md)
        
       - [\<ListFormButtons\>](listformbuttons-element-list.md)
        
       - [\<ListFormBody\>](listformbody-element-list.md)
        
       - [\<ListFormClosing\>](listformclosing-element-list.md)
  
- [\<ContentTypes\>](contenttypes-element-list.md)
  
    - [\<ContentTypeRef\>](contenttyperef-element-list.md)
  
       - [\<Folder\>](folder-element-list.md)
  
    - [\<ContentType\>](contenttype-element-contenttype.md)
  
- [\<Fields\>](fields-element-list.md)
  
    - [\<Field\>](field-element-list.md)
  
       - [\<FieldRefs\>](fieldrefs-element-list.md)
  
       - [\<FieldRef\>](fieldref-element-query.md)
  
    - [\<DisplayPattern\>](displaypattern-element-list.md)
  
    - [\<DisplayBidiPattern\>](displaybidipattern-element-list.md)
  
    - [\<CHOICES\>](choices-element-list.md)
  
       - [\<CHOICE\>](choice-element-list.md)
  
    - [\<MAPPINGS\>](mappings-element-list.md)
  
       - [\<MAPPING\>](mapping-element-list.md)
  
    - [\<Default\>](default-element-listfield.md)
  
    - [\<Formula\>](formula-element-list.md)
  
    - [\<FormulaDisplayNames\>](formuladisplaynames-element-list.md)
  
    - [\<DefaultFormula\>](defaultformula-element-list.md)
  
    - [\<DefaultFormulaValue\>](defaultformulavalue-element-list.md)
  
    - [\<Customization\>](customization-element-list.md)
  
       - [\<ArrayOfProperty\>](arrayofproperty-element-list.md)
  
       - [\<Property\>](property-element-list.md)
  
       - [\<Validation\>](validation-element-list.md)
  
- [\<Forms\>](forms-element-list.md)
  
    - [\<Form\>](form-element-list.md)
  
       - [\<ListFormOpening\>](listformopening-element-list.md)
        
       - [\<ListFormButtons\>](listformbuttons-element-list.md)
        
       - [\<ListFormBody\>](listformbody-element-list.md)
        
       - [\<ListFormClosing\>](listformclosing-element-list.md)
        
       - [\<WebParts\>](webparts-element-list.md)
  
       - [\<AllUsersWebPart\>](alluserswebpart-element-list.md)
  
- [\<DefaultDescription\>](defaultdescription-element-list.md)
  
- [\<Toolbar\>](toolbar-element-list.md)
  
- [\<DocumentLibraryTemplate\>](documentlibrarytemplate-element-list.md)
  
- [\<Views\>](views-element-list.md)
  
    - [\<View\>](view-element-list.md)
  
> [!NOTE]
> The following subelements lay out the structure of a view, but Microsoft SharePoint Foundation 2010 uses XSLT to define rendering of view contents. For information about the XSLT that is used, see [List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx). For the schema that Windows SharePoint Services 3.0 used to render the view contents, see [View schema](view-schema.md). 
  
- [\<Aggregations\>](aggregations-element-list.md)
  
    - [\<FieldRef\>](fieldref-element-list.md)
  
- [\<GroupByFooter\>](groupbyfooter-element-list.md)
  
- [\<GroupByHeader\>](groupbyheader-element-list.md)
  
- [\<Method\>](method-element-list.md)
  
    - [\<Filter\>](filter-element-list.md)
  
- [\<PagedClientCallbackRowset\>](pagedclientcallbackrowset-element-list.md)
  
- [\<PagedRecurrenceRowset\>](pagedrecurrencerowset-element-list.md)
  
- [\<PagedRowset\>](pagedrowset-element-list.md)
  
- [\<ParameterBindings\>](parameterbindings-element-list.md)
  
    - [\<ParameterBinding\>](parameterbinding-element-list.md)
  
- [\<Query\>](query-element-list.md)
  
    - (see [Query Schema](query-schema.md))
  
- [\<RowLimit\>](rowlimit-element-list.md)
  
- [\<RowLimitExceeded\>](rowlimitexceeded-element-list.md)
  
- [\<Toolbar\>](http://msdn.microsoft.com/library/23251c2b-1172-4ac8-bde2-46c1e682a91c%28Office.15%29.aspx)
  
- [\<ViewBidiHeader\>](viewbidiheader-element-list.md)
  
- [\<ViewBody\>](viewbody-element-list.md)
  
- [\<ViewData\>](viewdata-element-list.md)
  
    - [\<FieldRef\>](https://msdn.microsoft.com/en-us/library/ms436424.aspx)
  
- [\<ViewEmpty\>](viewempty-element-list.md)
  
- [\<ViewFields\>](viewfields-element-list.md)
  
    - [\<FieldRef\>](fieldref-element-list.md)
  
- [\<ViewFooter\>](viewfooter-element-list.md)
  
- [\<ViewHeader\>](viewheader-element-list.md)
  
- [\<ViewStyle\>](viewstyle-element-list.md)
  
- [\<XslLink\>](xsllink-element-list.md)
  
## See also

- [Query schema](query-schema.md) 
- [View schema](view-schema.md)
- [List schema elements A-K](list-schema-elements-a-k.md)
- [List schema elements L-Z](list-schema-elements-l-z.md)

