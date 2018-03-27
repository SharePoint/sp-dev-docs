---
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
---

# List Schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The list schema of [Collaborative Application Markup Language (CAML)](introduction-to-collaborative-application-markup-language-caml.md) is used to define the metadata for creating lists. The list schema includes field definitions ([Field](field-element-list.md) element), view definitions, and a toolbar definition, in addition to specifying content types, forms, and a default description for lists that are created. 

The definition for a list is contained in a [Schema.xml](https://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56(Office.15).aspx) file that is located in `%ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\TEMPLATE\\FEATURES` or is included in sandboxed solutions.

You can create or modify lists programmatically through the object model (for example, members of the **SPList** class and the **SPListCollection** class), through the Lists web service (methods of the **Lists** class), and through the Remote Procedure Call (RPC) protocol (see [SharePoint Foundation Methods](https://msdn.microsoft.com/library/fb791985-a9e4-4c94-b94a-1b3c7f00457a(Office.15).aspx)).


- [DOCS-LESSTHANListDOCS-GREATERTHAN](list-element-list.md)

- [DOCS-LESSTHANMetaDataDOCS-GREATERTHAN](metadata-element-list.md)

- [DOCS-LESSTHANDefaultDOCS-GREATERTHAN](default-element-listform.md)

- [DOCS-LESSTHANFormsDOCS-GREATERTHAN](forms-element-list.md)

- [DOCS-LESSTHANFormDOCS-GREATERTHAN](form-element-list.md)

- [DOCS-LESSTHANListFormOpeningDOCS-GREATERTHAN](listformopening-element-list.md)

- [DOCS-LESSTHANListFormButtonsDOCS-GREATERTHAN](listformbuttons-element-list.md)

- [DOCS-LESSTHANListFormBodyDOCS-GREATERTHAN](listformbody-element-list.md)

- [DOCS-LESSTHANListFormClosingDOCS-GREATERTHAN](listformclosing-element-list.md)

- [DOCS-LESSTHANContentTypesDOCS-GREATERTHAN](contenttypes-element-list.md)

- [DOCS-LESSTHANContentTypeRefDOCS-GREATERTHAN](contenttyperef-element-list.md)

- [DOCS-LESSTHANFolderDOCS-GREATERTHAN](folder-element-list.md)

- [DOCS-LESSTHANContentTypeDOCS-GREATERTHAN](contenttype-element-contenttype.md)

- [DOCS-LESSTHANFieldsDOCS-GREATERTHAN](fields-element-list.md)

- [DOCS-LESSTHANFieldDOCS-GREATERTHAN](field-element-list.md)

- [DOCS-LESSTHANFieldRefsDOCS-GREATERTHAN](fieldrefs-element-list.md)

- [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.md)

- [DOCS-LESSTHANDisplayPatternDOCS-GREATERTHAN](displaypattern-element-list.md)

- [DOCS-LESSTHANDisplayBidiPatternDOCS-GREATERTHAN](displaybidipattern-element-list.md)

- [DOCS-LESSTHANCHOICESDOCS-GREATERTHAN](choices-element-list.md)

- [DOCS-LESSTHANCHOICEDOCS-GREATERTHAN](choice-element-list.md)

- [DOCS-LESSTHANMAPPINGSDOCS-GREATERTHAN](mappings-element-list.md)

- [DOCS-LESSTHANMAPPINGDOCS-GREATERTHAN](mapping-element-list.md)

- [DOCS-LESSTHANDefaultDOCS-GREATERTHAN](default-element-listfield.md)

- [DOCS-LESSTHANFormulaDOCS-GREATERTHAN](formula-element-list.md)

- [DOCS-LESSTHANFormulaDisplayNamesDOCS-GREATERTHAN](formuladisplaynames-element-list.md)

- [DOCS-LESSTHANDefaultFormulaDOCS-GREATERTHAN](defaultformula-element-list.md)

- [DOCS-LESSTHANDefaultFormulaValueDOCS-GREATERTHAN](defaultformulavalue-element-list.md)

- [DOCS-LESSTHANCustomizationDOCS-GREATERTHAN](customization-element-list.md)

- [DOCS-LESSTHANArrayOfPropertyDOCS-GREATERTHAN](arrayofproperty-element-list.md)

- [DOCS-LESSTHANPropertyDOCS-GREATERTHAN](property-element-list.md)

- [DOCS-LESSTHANValidationDOCS-GREATERTHAN](validation-element-list.md)

- [DOCS-LESSTHANFormsDOCS-GREATERTHAN](forms-element-list.md)

- [DOCS-LESSTHANFormDOCS-GREATERTHAN](form-element-list.md)

- [DOCS-LESSTHANListFormOpeningDOCS-GREATERTHAN](listformopening-element-list.md)

- [DOCS-LESSTHANListFormButtonsDOCS-GREATERTHAN](listformbuttons-element-list.md)

- [DOCS-LESSTHANListFormBodyDOCS-GREATERTHAN](listformbody-element-list.md)

- [DOCS-LESSTHANListFormClosingDOCS-GREATERTHAN](listformclosing-element-list.md)

- [DOCS-LESSTHANWebPartsDOCS-GREATERTHAN](webparts-element-list.md)

- [DOCS-LESSTHANAllUsersWebPartDOCS-GREATERTHAN](alluserswebpart-element-list.md)

- [DOCS-LESSTHANDefaultDescriptionDOCS-GREATERTHAN](defaultdescription-element-list.md)

- [DOCS-LESSTHANToolbarDOCS-GREATERTHAN](toolbar-element-list.md)

- [DOCS-LESSTHANDocumentLibraryTemplateDOCS-GREATERTHAN](documentlibrarytemplate-element-list.md)

- [DOCS-LESSTHANViewsDOCS-GREATERTHAN](views-element-list.md)

- [DOCS-LESSTHANViewDOCS-GREATERTHAN](view-element-list.md)

<br/>

> [!NOTE] 
> The following subelements lay out the structure of a view, but Microsoft SharePoint Foundation 2010 uses XSLT to define rendering of view contents. For information about the XSLT that is used, see [List Views](https://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17(Office.15).aspx). For the schema that Windows SharePoint Services 3.0 used to render the view contents, see [View Schema](view-schema.md).

<br/>

- [DOCS-LESSTHANAggregationsDOCS-GREATERTHAN](aggregations-element-list.md)

- [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-list.md)

- [DOCS-LESSTHANGroupByFooterDOCS-GREATERTHAN](groupbyfooter-element-list.md)

- [DOCS-LESSTHANGroupByHeaderDOCS-GREATERTHAN](groupbyheader-element-list.md)

- [DOCS-LESSTHANMethodDOCS-GREATERTHAN](method-element-list.md)

- [DOCS-LESSTHANFilterDOCS-GREATERTHAN](filter-element-list.md)

- [DOCS-LESSTHANPagedClientCallbackRowsetDOCS-GREATERTHAN](pagedclientcallbackrowset-element-list.md)

- [DOCS-LESSTHANPagedRecurrenceRowsetDOCS-GREATERTHAN](pagedrecurrencerowset-element-list.md)

- [DOCS-LESSTHANPagedRowsetDOCS-GREATERTHAN](pagedrowset-element-list.md)

- [DOCS-LESSTHANParameterBindingsDOCS-GREATERTHAN](parameterbindings-element-list.md)

- [DOCS-LESSTHANParameterBindingDOCS-GREATERTHAN](parameterbinding-element-list.md)

- [DOCS-LESSTHANQueryDOCS-GREATERTHAN](query-element-list.md)

- [DOCS-LESSTHANRowLimitDOCS-GREATERTHAN](rowlimit-element-list.md)

- [DOCS-LESSTHANRowLimitExceededDOCS-GREATERTHAN](rowlimitexceeded-element-list.md)

- [DOCS-LESSTHANToolbarDOCS-GREATERTHAN](https://msdn.microsoft.com/library/23251c2b-1172-4ac8-bde2-46c1e682a91c(Office.15).aspx)

- [DOCS-LESSTHANViewBidiHeaderDOCS-GREATERTHAN](viewbidiheader-element-list.md)

- [DOCS-LESSTHANViewBodyDOCS-GREATERTHAN](viewbody-element-list.md)

- [DOCS-LESSTHANViewDataDOCS-GREATERTHAN](viewdata-element-list.md)

- [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](https://msdn.microsoft.com/en-us/library/ms436424.aspx)

- [DOCS-LESSTHANViewEmptyDOCS-GREATERTHAN](viewempty-element-list.md)

- [DOCS-LESSTHANViewFieldsDOCS-GREATERTHAN](viewfields-element-list.md)

- [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-list.md)

- [DOCS-LESSTHANViewFooterDOCS-GREATERTHAN](viewfooter-element-list.md)

- [DOCS-LESSTHANViewHeaderDOCS-GREATERTHAN](viewheader-element-list.md)

- [DOCS-LESSTHANViewStyleDOCS-GREATERTHAN](viewstyle-element-list.md)

- [DOCS-LESSTHANXslLinkDOCS-GREATERTHAN](xsllink-element-list.md)


<br/>

## See also

- [Query Schema](query-schema.md)
- [View Schema](view-schema.md)








