---
title: View Element (Module)
manager: soliver
ms.date: 06/14/2022
description: Describes View Element (Module) and provides information on elements and attributes.
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 10fce9ff-b887-4419-8039-7607ac3404a5
---

# View Element (Module)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Describes a view within a module for a site definition.

## Definition

```XML
<View
  AggregateView = "TRUE" | "FALSE"
  BaseViewID = "Integer"
  ContentTypeId = string
  DefaultView = "TRUE" | "FALSE"
  DisplayName = "Text"
  FailIfEmpty = "TRUE" | "FALSE"
  FileDialog = "TRUE" | "FALSE"
  FPModified = "TRUE" | "FALSE"
  FreeForm = "TRUE" | "FALSE"
  Hidden = "TRUE" | "FALSE"
  ID = string
  List = "Integer" | "Text"
  Name = "Text"
  OrderedView = "TRUE" | "FALSE"
  PageType = "Text"
  Path = "Text"
  ReadOnly = "TRUE" | "FALSE"
  RecurrenceRowset = "TRUE" | "FALSE"
  RowLimit = "Integer"
  Scope = "Text"
  ShowHeaderUI = "TRUE" | "FALSE"
  Threaded = "TRUE" | "FALSE"
  Type = "HTML" | "Chart" | "Pivot"
  Url = "URL"
  WebPartOrder = integer
  WebPartZoneID = string>
</View>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

| Attribute | Description |
| --- | --- |
| **AggregateView** | Optional **Boolean**. **TRUE** to specify that the view is a Merge Forms view used in an XML Form library. By default, an XML Form library is provisioned with a Merge Forms view that is initially hidden. When an XML editor is used to publish an XML Form Properties (XFP) file to the Forms directory of the library along with a template used by the editor, the **AggregateView** attribute identifies the Merge Forms view, which can be made visible or hidden depending on whether the list template or definition for the library supports data merging. |
| **BaseViewID** | Optional **Integer**. Specifies the ID of the base view. |
| **ContentTypeId** | Optional **string**. Specifies the ID of the content type. |
| **DefaultView** | Optional **Boolean**. **TRUE** to specify that the view is the default view. |
| **DisplayName** | Optional **Text**. Specifies the name of the view that is displayed on the **Quick Launch**. |
| **FailIfEmpty** | Optional **Boolean**. If the view returns no items, **TRUE** to return a blank page and an HTTP error code instead of rendering the **ViewEmpty** element. Used for programmatic manipulation of views from a client application, preventing the client application from having to parse a document to discover whether the view is empty. |
| **FileDialog** | Optional **Boolean**. **TRUE** to specify that the view is displayed in file dialog boxes for applications used within the context of Windows SharePoint Services, which parse the output HTML to determine the contents of the list. |
| **FPModified** | Optional **Boolean**. **TRUE** if the view has been altered through editing in a webpage editor, and the view is no longer customizable by the Microsoft Windows SharePoint Services UI. |
| **FreeForm** | Optional **Boolean**. **TRUE** to specify alternate field formatting for certain field types in field rendering. In particular, this affects the alignment of number columns, which is particularly useful in custom nontabular view types. |
| **Hidden** | Optional **Boolean**. **TRUE** to hide the view. |
| **ID** | Optional **string**. Specifies the ID of the view. |
| **List** | Optional **Integer** or **Text**. Specifies the type of list. This value can be either the ID of the template for a list (an integer), or the URL to a list provisioned in the site (a string). Best practice is to use **Text**, because **Integer** might not be specific enough (e.g., if there are two announcements lists in the site and you specify **List=104**). |
| **Name** | Optional **Text**. The name given to the view (used to select a different named view in the UI as well as to refer to a named view in specifying a filter for a **Lookup** field). |
| **OrderedView** | Optional **Boolean**. **TRUE** to specify that the view is ordered. |
| **PageType** | Optional **Text**. Specifies the type of form in which the view is used. Possible values include the following:</br></br>\* **DEFAULTVIEW** Default view.</br>\* **DIALOGVIEW** File dialog box view.</br>\* **DISPLAYFORM** Display form for list items.</br>\* **DISPLAYFORMDIALOG** Display form for a file dialog box.</br>\* **EDITFORM** Edit form for list items.</br>\* **EDITFORMDIALOG** Edit form for a file dialog box.</br>\* **INVALID**  Not used.</br>\* **MAXITEMS** Not used.</br>\* **NEWFORM** New form for list items.</br>\* **NEWFORMDIALOG** New form for a file dialog box.</br>\* **NORMALVIEW** Normal view.</br>\* **SOLUTIONFORM**  Solution form.</br>\* **VIEW**  View, including both default view and normal view. |
| **Path** | Optional **Text**. Specifies the file name for the view. |
| **ReadOnly** | Optional **Boolean**. **TRUE** to make the view read-only. |
| **RecurrenceRowset** | Optional **Boolean**. **TRUE** to expand recurring events in the view and display each instance of each recurring event. The default value is **FALSE**. |
| **RowLimit** | Optional **Integer**. Applies to the HTML view type only. Specifies the maximum number of rows to render on any one page. When the row limit is exceeded, the next and previous buttons on the page allow for viewing other parts of the returned recordset.</br></br>If **RowLimit** is not specified, the default number of Rows returned is 50. If "None" is specified for the view type, all the rows of the recordset are returned in one view.</br></br>When a view is rendered, the render variables **ViewHasNext** and **ViewHasPrev** are set to **TRUE** or **FALSE**, based on whether the current view has reached the row limit from the dataset. These variables can be used in successive page definitions to render **Next** and **Previous** buttons on the page, as in the following XML example:</br></br>`<Switch>`</br>&ensp;&ensp;`<Expr><GetVar Name="ViewHasPrev"/></Expr>`</br>&ensp;&ensp;`<Case Value="TRUE">`</br>&ensp;&ensp;&ensp;&ensp;`<![CDATA[...Previous button defined here... ]]>`</br>&ensp;&ensp;`</Case>`</br>`</Switch>`</br></br>The variables **NextPageURL** and **PrevPageURL** are also set to nonblank values when there is forward or backward paging content from the current display. These variables can be used by constructing the **Next** and **Previous** buttons to have the correct URL for accessing the next page of content.</br>|
| **Scope** | Optional **Text**. Specifies the recursive scope for a view of a document library. Possible values include the following:</br></br>\* **FilesOnly**—Show only the files of a specific folder.</br>\* **Recursive**—Show all files of all folders.</br>\* **RecursiveAll**—Show all files and all subfolders of all folders.</br></br>If this attribute is not set, the view displays only the files and subfolders of a specific folder. The value of this attribute corresponds to the Scope property of the SPView class. |
| **ShowHeaderUI** | Optional **Boolean**. **FALSE** to render all **FieldRef** elements used in the header display mode without decorating the UI with HTML. In other words, when this mode is set, the UI does not provide sorting and filtering as hyperlinks in the column header. The default value is **TRUE**. |
| **Threaded** | Optional **Boolean**. **TRUE** to apply inner grouping in the view. A threaded view is constructed based on the built-in threading column (assumed to exist for the list). The view is sorted on this field as the secondary sort. If other columns in the view are specified as sorted or grouped, those are applied before the threading column sort order. As a result, all discussions grouped by a topic can be collected together, and the message threading can be displayed beneath the collection.</br></br>When **TRUE**, the [RowLimit](rowlimit-element-list.md) element has a different meaning when used on a threaded discussion board list view. Instead of specifying the number of items to return, it specifies the number of discussion threads to return, where a thread could consist of one or more items. In addition to having the **Threaded** attribute set to **TRUE**, a threaded view must be sorted by the thread ID; otherwise, this row limit behavior does not take effect. |
| **Type** | Optional **Text**. Specifies the rendering type of the view. The type is the common enumerated HTML view and can be set to **HTML**, **Chart**, or **Pivot**. |
| **Url** | Optional **URL**. Specifies the URL for the view. |
| **WebPartOrder** | Optional **integer**. Specifies the order of the web part. |
| **WebPartZoneID** | Optional **string**. Specifies the zone for the web part. |

### Child elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="binaryserializedwebpart-element-module.md">BinarySerializedWebPart Element (Module)</a></p></td>
</tr>
</tbody>
</table>

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="file-element-module.md">File</a></p></td>
</tr>
</tbody>
</table>

### Occurrences

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 0</p>
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>


## Example 

For an example of how this element is used, see [Modules](modules.md).


## See also

- [Module](https://msdn.microsoft.com/library/e5eeed6e-d785-496d-82b5-08d153588045(Office.15).aspx)
- [How to: Provision a File](https://msdn.microsoft.com/library/438d5a75-7f39-4fa9-a365-d86e8ba967b6(Office.15).aspx)








