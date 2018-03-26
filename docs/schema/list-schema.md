---

manager: soliver
ms.date: 12/7/2015
ms.audience: Developer
ms.topic: reference
keywords:
- schema [sharepoint 2010], list,list schema [SharePoint 2010]
ms.prod: office-online-server
localization_priority: Normal
api_name:
- List schema
api_type:
- schema
ms.assetid: 4a595fed-9588-4845-a92d-ba16a38ad93e
---

![Collapse
section](../icons/collapse_all.gif "Collapse section")![Expand
section](../icons/expand_all.gif "Expand section")![](../icons/collapse_all.gif)![](../icons/expand_all.gif)![](../icons/dropdown.gif)![](../icons/dropdownHover.gif)![Copy
code](../icons/copycode.gif "Copy code")![Copy code
hover](../icons/copycodeHighlight.gif "Copy code hover")
<table>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

Visual Basic  
C\#  
C++  
JavaScript  

<table>
<tbody>
<tr class="odd">
<td align="left"><span id="runningHeaderText"></span></td>
</tr>
<tr class="even">
<td align="left"># List Schema</td>
</tr>
<tr class="odd">
<td align="left"><a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

**Last modified:** December 07, 2015

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

The list schema of [Collaborative Application Markup Language
(CAML)](introduction-to-collaborative-application-markup-language-caml.htm) is used to define the
metadata for creating lists. The list schema includes field definitions
([Field](field-element-list.htm) element), view
definitions, and a toolbar definition, in addition to specifying content
types, forms, and a default description for lists that are created. The
definition for a list is contained in a
[Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56(Office.15).aspx)
file that is located in %ProgramFiles%\\Common Files\\Microsoft
Shared\\web server extensions\\15\\TEMPLATE\\FEATURES or is included in
sandboxed solutions.

You can create or modify lists programmatically through the object model
(for example, members of the <span sdata="cer"
target="T:Microsoft.SharePoint.SPList"><span
class="nolink">SPList</span></span> class and the <span sdata="cer"
target="T:Microsoft.SharePoint.SPListCollection"><span
class="nolink">SPListCollection</span></span> class), through the Lists
web service (methods of the <span sdata="cer"
target="T:websvcLists.Lists">**Lists**</span> class), and through the
Remote Procedure Call (RPC) protocol (see [Windows SharePoint Services
RPC
Methods](http://msdn.microsoft.com/library/fb791985-a9e4-4c94-b94a-1b3c7f00457a(Office.15).aspx)).


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[DOCS-LESSTHANListDOCS-GREATERTHAN](list-element-list.htm)

  [DOCS-LESSTHANMetaDataDOCS-GREATERTHAN](metadata-element-list.htm)

      [DOCS-LESSTHANDefaultDOCS-GREATERTHAN](default-element-listform.htm)

      [DOCS-LESSTHANFormsDOCS-GREATERTHAN](forms-element-list.htm)

        [DOCS-LESSTHANFormDOCS-GREATERTHAN](form-element-list.htm)

          [DOCS-LESSTHANListFormOpeningDOCS-GREATERTHAN](listformopening-element-list.htm)

          [DOCS-LESSTHANListFormButtonsDOCS-GREATERTHAN](listformbuttons-element-list.htm)

          [DOCS-LESSTHANListFormBodyDOCS-GREATERTHAN](listformbody-element-list.htm)

          [DOCS-LESSTHANListFormClosingDOCS-GREATERTHAN](listformclosing-element-list.htm)

      [DOCS-LESSTHANContentTypesDOCS-GREATERTHAN](contenttypes-element-list.htm)

        [DOCS-LESSTHANContentTypeRefDOCS-GREATERTHAN](contenttyperef-element-list.htm)

          [DOCS-LESSTHANFolderDOCS-GREATERTHAN](folder-element-list.htm)

        [DOCS-LESSTHANContentTypeDOCS-GREATERTHAN](contenttype-element-contenttype.htm)

      [DOCS-LESSTHANFieldsDOCS-GREATERTHAN](fields-element-list.htm)

        [DOCS-LESSTHANFieldDOCS-GREATERTHAN](field-element-list.htm)

          [DOCS-LESSTHANFieldRefsDOCS-GREATERTHAN](fieldrefs-element-list.htm)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.htm)

          [DOCS-LESSTHANDisplayPatternDOCS-GREATERTHAN](displaypattern-element-list.htm)

          [DOCS-LESSTHANDisplayBidiPatternDOCS-GREATERTHAN](displaybidipattern-element-list.htm)

          [DOCS-LESSTHANCHOICESDOCS-GREATERTHAN](choices-element-list.htm)

            [DOCS-LESSTHANCHOICEDOCS-GREATERTHAN](choice-element-list.htm)

          [DOCS-LESSTHANMAPPINGSDOCS-GREATERTHAN](mappings-element-list.htm)

            [DOCS-LESSTHANMAPPINGDOCS-GREATERTHAN](mapping-element-list.htm)

          [DOCS-LESSTHANDefaultDOCS-GREATERTHAN](default-element-listfield.htm)

          [DOCS-LESSTHANFormulaDOCS-GREATERTHAN](formula-element-list.htm)

          [DOCS-LESSTHANFormulaDisplayNamesDOCS-GREATERTHAN](formuladisplaynames-element-list.htm)

          [DOCS-LESSTHANDefaultFormulaDOCS-GREATERTHAN](defaultformula-element-list.htm)

          [DOCS-LESSTHANDefaultFormulaValueDOCS-GREATERTHAN](defaultformulavalue-element-list.htm)

          [DOCS-LESSTHANCustomizationDOCS-GREATERTHAN](customization-element-list.htm)

            [DOCS-LESSTHANArrayOfPropertyDOCS-GREATERTHAN](arrayofproperty-element-list.htm)

              [DOCS-LESSTHANPropertyDOCS-GREATERTHAN](property-element-list.htm)

          [DOCS-LESSTHANValidationDOCS-GREATERTHAN](validation-element-list.htm)

      [DOCS-LESSTHANFormsDOCS-GREATERTHAN](forms-element-list.htm)

        [DOCS-LESSTHANFormDOCS-GREATERTHAN](form-element-list.htm)

          [DOCS-LESSTHANListFormOpeningDOCS-GREATERTHAN](listformopening-element-list.htm)

          [DOCS-LESSTHANListFormButtonsDOCS-GREATERTHAN](listformbuttons-element-list.htm)

          [DOCS-LESSTHANListFormBodyDOCS-GREATERTHAN](listformbody-element-list.htm)

          [DOCS-LESSTHANListFormClosingDOCS-GREATERTHAN](listformclosing-element-list.htm)

          [DOCS-LESSTHANWebPartsDOCS-GREATERTHAN](webparts-element-list.htm)

            [DOCS-LESSTHANAllUsersWebPartDOCS-GREATERTHAN](alluserswebpart-element-list.htm)

      [DOCS-LESSTHANDefaultDescriptionDOCS-GREATERTHAN](defaultdescription-element-list.htm)

      [DOCS-LESSTHANToolbarDOCS-GREATERTHAN](toolbar-element-list.htm)

      [DOCS-LESSTHANDocumentLibraryTemplateDOCS-GREATERTHAN](documentlibrarytemplate-element-list.htm)

      [DOCS-LESSTHANViewsDOCS-GREATERTHAN](views-element-list.htm)

        [DOCS-LESSTHANViewDOCS-GREATERTHAN](view-element-list.htm)

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="../icons/alert_note.gif" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>The following subelements lay out the structure of a view, but Microsoft SharePoint Foundation 2010 uses XSLT to define rendering of view contents. For information about the XSLT that is used, see <a href="http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17(Office.15).aspx">List Views</a>. For the schema that Windows SharePoint Services 3.0 used to render the view contents, see <span sdata="link"><a href="view-schema.htm">View Schema</a></span>.</p></td>
</tr>
</tbody>
</table>

          [DOCS-LESSTHANAggregationsDOCS-GREATERTHAN](aggregations-element-list.htm)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-list.htm)

          [DOCS-LESSTHANGroupByFooterDOCS-GREATERTHAN](groupbyfooter-element-list.htm)

          [DOCS-LESSTHANGroupByHeaderDOCS-GREATERTHAN](groupbyheader-element-list.htm)

          [DOCS-LESSTHANMethodDOCS-GREATERTHAN](method-element-list.htm)

            [DOCS-LESSTHANFilterDOCS-GREATERTHAN](filter-element-list.htm)

          [DOCS-LESSTHANPagedClientCallbackRowsetDOCS-GREATERTHAN](pagedclientcallbackrowset-element-list.htm)

          [DOCS-LESSTHANPagedRecurrenceRowsetDOCS-GREATERTHAN](pagedrecurrencerowset-element-list.htm)

          [DOCS-LESSTHANPagedRowsetDOCS-GREATERTHAN](pagedrowset-element-list.htm)

          [DOCS-LESSTHANParameterBindingsDOCS-GREATERTHAN](parameterbindings-element-list.htm)

            [DOCS-LESSTHANParameterBindingDOCS-GREATERTHAN](parameterbinding-element-list.htm)

          [DOCS-LESSTHANQueryDOCS-GREATERTHAN](query-element-list.htm)

            [see <span sdata="link">[Query
Schema](query-schema.htm)</span>]

          [DOCS-LESSTHANRowLimitDOCS-GREATERTHAN](rowlimit-element-list.htm)

          [DOCS-LESSTHANRowLimitExceededDOCS-GREATERTHAN](rowlimitexceeded-element-list.htm)

          [DOCS-LESSTHANToolbarDOCS-GREATERTHAN](http://msdn.microsoft.com/library/23251c2b-1172-4ac8-bde2-46c1e682a91c(Office.15).aspx)

          [DOCS-LESSTHANViewBidiHeaderDOCS-GREATERTHAN](viewbidiheader-element-list.htm)

          [DOCS-LESSTHANViewBodyDOCS-GREATERTHAN](viewbody-element-list.htm)

          [DOCS-LESSTHANViewDataDOCS-GREATERTHAN](viewdata-element-list.htm)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](https://msdn.microsoft.com/en-us/library/ms436424.aspx)

          [DOCS-LESSTHANViewEmptyDOCS-GREATERTHAN](viewempty-element-list.htm)

          [DOCS-LESSTHANViewFieldsDOCS-GREATERTHAN](viewfields-element-list.htm)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-list.htm)

          [DOCS-LESSTHANViewFooterDOCS-GREATERTHAN](viewfooter-element-list.htm)

          [DOCS-LESSTHANViewHeaderDOCS-GREATERTHAN](viewheader-element-list.htm)

          [DOCS-LESSTHANViewStyleDOCS-GREATERTHAN](viewstyle-element-list.htm)

          [DOCS-LESSTHANXslLinkDOCS-GREATERTHAN](xsllink-element-list.htm)


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

<span sdata="link">[Query
Schema](query-schema.htm)</span>

<span sdata="link">[View
Schema](view-schema.htm)</span>








