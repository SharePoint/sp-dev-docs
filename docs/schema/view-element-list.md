---
title: "View Element (List)"


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
ms.assetid: 2fb39435-2943-40c7-8f08-fda3bc99de5d

description: "Last modified: March 09, 2015"
---

# View Element (List)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
In a list definition ([Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx)), defines a view for a list in a Web site based on Microsoft SharePoint Foundation, where each list can contain a number of views.
  
> [!NOTE]
> SharePoint Foundation 2010 uses XSLT to define list views, and the [View schema](view-schema.md) is maintained for backward compatibility. For information about XSLT list views, see [List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx). 
  
```
<View
  AggregateView = "TRUE" | "FALSE"
  BaseViewID = "Integer"
  ContentTypeID = "Text"  CssStyleSheet = "Text"
  DefaultView = "TRUE" | "FALSE"
  DefaultViewForContentType = "TRUE" | "FALSE"
  DisplayName = "Text"
  FailIfEmpty = "TRUE" | "FALSE"
  FileDialog = "TRUE" | "FALSE"
  FPModified = "TRUE" | "FALSE"
  FreeForm = "TRUE" | "FALSE"
  Hidden = "TRUE" | "FALSE"
  ImageUrl = "Text"
  IncludeRootFolder = "TRUE" | "FALSE"
  List = "Integer" | "Text"
  MobileDefaultView = "TRUE" | "FALSE"  MobileItemLimit = "Integer"  MobileUrl = "Text"
  MobileView = "TRUE" | "FALSE"
  ModerationType = "Text"
  Name = "Text"
  OrderedView = "TRUE" | "FALSE"
  PageType = "Text"
  Path = "Text"
  ReadOnly = "TRUE" | "FALSE"
  RecurrenceRowset = "TRUE" | "FALSE"
  ReqAuth = "TRUE" | "FALSE"
  RequiresClientIntegration = "TRUE" | "FALSE"
  RowLimit = "Integer"
  Scope = "Text"
  SetupPath = "Text"
  ShowHeaderUI = "TRUE" | "FALSE"  TabularView = "TRUE" | "FALSE"
  TargetId = "Text"
  TargetType = "List" | "ContentType"
  Threaded = "TRUE" | "FALSE"
  ToolbarTemplate = "Text"
  Type = "HTML" | "Chart" | "Pivot"
  Url = "Text"
  WebPartOrder = "Integer"
  WebPartZoneID = "Text">
</View>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**AggregateView** <br/> |Optional **Boolean**. **TRUE** to specify that the view is a Merge Forms view used in an XML Form library. By default, an XML Form library has a Merge Forms view that is initially hidden. When an XML editor is used to publish an XML Form Properties (XFP) file to the Forms directory of the library, along with a template used by the editor, the **AggregateView** attribute identifies the Merge Forms view. This view can be made visible or hidden, depending on whether the list template or definition for the library supports data merging.  <br/> |
|**BaseViewID** <br/> |Optional **Integer**. Specifies the ID of the base view.  <br/> |
|**ContentTypeID** <br/> |Optional **Text**. Specifies the ID of the content type with which the view is associated.  <br/> |
|**CssStyleSheet** <br/> |Optional **Text**.  <br/> |
|**DefaultView** <br/> |Optional **Boolean**. **TRUE** to specify that the view is the default view.  <br/> |
|**DefaultViewForContentType** <br/> |Optional **Boolean**. **TRUE** to specify that the view is the default view for a content type.  <br/> |
|**DisplayName** <br/> |Optional **Text**. Specifies the name of the view that is displayed on the **Quick Launch** bar.  <br/> |
|**FailIfEmpty** <br/> |Optional **Boolean**. If the view returns no items, **TRUE** to return a blank page and an HTTP error code instead of rendering the **ViewEmpty** element. Used for programmatic manipulation of views from a client application, so that the client application will not have to parse a document in order to discover whether the view is empty.  <br/> |
|**FileDialog** <br/> |Optional **Boolean**. **TRUE** to specify that the view is displayed in file dialog boxes for applications that are used within the context of SharePoint Foundation, and that parse the output HTML to determine the contents of the list.  <br/> |
|**FPModified** <br/> |Optional **Boolean**. **TRUE** if the view has been altered through editing in a Web page editor, and the view is no longer customizable by the SharePoint Foundation user interface (UI).  <br/> |
|**FreeForm** <br/> |Optional **Boolean**. **TRUE** to specify alternate field formatting for certain field types when fields are rendered. In particular, this attribute affects the alignment of number columns, which is particularly useful in custom nontabular view types.  <br/> |
|**Hidden** <br/> |Optional **Boolean**. **TRUE** to hide the view.  <br/> |
|**ImageUrl** <br/> |Optional **Text**. Specifies the server-relative URL for the image that is displayed in the title area of the list view, for example,  `/_layouts/images/pgrpicon.png`.  <br/> |
|**IncludeRootFolder** <br/> |Optional **Boolean**. **TRUE** to specify that the root folder is returned in the list view.  <br/> |
|**List** <br/> |Optional **Integer** or **Text**. Specifies the type of list. This value can be either the ID of the template for a list (an integer), or the URL to a list provisioned in the site (a string). Best practice is to use **Text**, because **Integer** might not be specific enough (e.g., if there are two announcements lists in the site and you specify **List=104**).  <br/> |
|**MobileDefaultView** <br/> |Optional **Boolean**. **TRUE** to specify that the standard SharePoint list view is the default mobile view. Only one view per list can be designated as the default mobile view.  <br/> |
|**MobileItemLimit** <br/> |Optional **Integer**.  <br/> |
|**MobileUrl** <br/> |Optional **Text**.  <br/> |
|**MobileView** <br/> |Optional **Boolean**. **TRUE** to specify that the standard SharePoint list view is also a mobile view. This attribute does not apply to Calendar, Datasheet, or Gantt views.  <br/> |
|**ModerationType** <br/> |Optional **Text**. Specifies the Content Approval type, which can be **HideUnapproved**, **Contributor**, or **Moderator**. The **HideUnapproved** view hides unapproved draft items from users who only have permission to read items. The **Contributor** view shows the pending and rejected items for the current user. The **Moderator** view is accessible only to users who have managed list permissions and shows the pending and rejected items for all users.  <br/> |
|**Name** <br/> |Optional **Text**. The name given to the view; used to select a different named view in the UI as well as to refer to a named view when specifying a filter for a **Lookup** field.  <br/> |
|**OrderedView** <br/> |Optional **Boolean**. **TRUE** to specify that the view is ordered.  <br/> |
|**PageType** <br/> | Optional **Text**. Specifies the type of form in which the view is used. Possible values include the following:  <br/> **DEFAULTVIEW** Default view.  <br/> **DIALOGVIEW** File dialog box view.  <br/> **DISPLAYFORM** Display form for list items.  <br/> **DISPLAYFORMDIALOG** Display form for a file dialog box.  <br/> **EDITFORM** Edit form for list items.  <br/> **EDITFORMDIALOG** Edit form for a file dialog box.  <br/> **INVALID** Not used.  <br/> **MAXITEMS** Not used.  <br/> **NEWFORM** New form for list items.  <br/> **NEWFORMDIALOG** New form for a file dialog box.  <br/> **NORMALVIEW** Normal view.  <br/> **SOLUTIONFORM** Solution form.  <br/> **VIEW** View, including both default view and normal view.  <br/> |
|**Path** <br/> |Optional **Text**. Specifies the file name for the view.  <br/> |
|**ReadOnly** <br/> |Optional **Boolean**. **TRUE** to make the view read-only.  <br/> |
|**RecurrenceRowset** <br/> |Optional **Boolean**. **TRUE** to expand recurring events in the view and display each instance of each recurring event. The default value is **FALSE**.  <br/> |
|**ReqAuth** <br/> |Optional **Boolean**.  <br/> |
|**RequiresClientIntegration** <br/> |Optional **Boolean**. **TRUE** to use features that launch client applications; otherwise, users must work on documents locally and upload changes.  <br/> |
|**RowLimit** <br/> |Optional **Integer**. Applies to the HTML view type only. Specifies the maximum number of rows to render on any one page. When the row limit is exceeded, the **Next** and **Previous** buttons allow all of the returned recordset to be viewed.  <br/> If **RowLimit** is not specified, the default number of Rows returned is 50. If "None" is specified for the view type, all the rows of the recordset are returned in one view.  <br/> When a view is rendered, the render variables  `ViewHasNext` and  `ViewHasPrev` are set to **TRUE** or **FALSE**, based on whether the current view has reached the row limit from the dataset. These variables can be used in successive page definitions to render **Next** and **Previous** buttons on the page, as in the following example:  <br/> ```XML<Switch>  <Expr><GetVar Name="ViewHasPrev"/></Expr>  <Case Value="TRUE">    <![CDATA[...Previous button defined here... ]]>  </Case></Switch>```The variables  `NextPageURL` and  `PrevPageURL` are also set to nonblank values when there is forward or backward paging content from the current display. These variables can be used by constructing the **Next** and **Previous** buttons so that they have the correct URL to access the next page of content.  <br/> |
|**Scope** <br/> | Optional **Text**. Specifies the recursive scope for a view of a document library. Possible values include the following:  <br/> **FilesOnly**—Show only the files of a specific folder.  <br/> **Recursive**—Show all files of all folders.  <br/> **RecursiveAll**—Show all files and all subfolders of all folders.  <br/>  If this attribute is not set, the view displays only the files and subfolders of a specific folder. The value of this attribute corresponds to the [Scope](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.Scope.aspx) property of the [SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx) class.  <br/> |
|**SetupPath** <br/> |Optional **Text**. Specifies the site-relative path to the folder in the setup directory that contains the .aspx page for the view, for example,  `pages\viewpage.aspx`.  <br/> |
|**ShowHeaderUI** <br/> |Optional **Boolean**. **FALSE** to render all **FieldRef** elements used in the header display mode without decorating the UI with HTML. In other words, when this mode is set, the UI does not provide sorting and filtering as hyperlinks in the column header. The default value is **TRUE**.  <br/> |
|**TabularView** <br/> |Optional **Boolean**.  <br/> |
|**TargetId** <br/> |Optional **Text**.  <br/> |
|**TargetType** <br/> |Optional **Text**. Possible values include **List** and **ContentType**.  <br/> |
|**Threaded** <br/> |Optional **Boolean**. **TRUE** to apply inner grouping in the view. A threaded view is constructed based on the built-in threading column (assumed to exist for the list). The view is sorted on this field as the secondary sort. If other columns in the view are specified as sorted or grouped, those rules are applied before the threading column sort order. As a result, all discussions grouped by a topic can be collected together, and the message threading can be displayed beneath the collection.  <br/> When **TRUE**, the [RowLimit](rowlimit-element-list.md) element has a different meaning when used on a threaded discussion board list view. Instead of specifying the number of items to return, it specifies the number of discussion threads to return, where a thread could consist of one or more items. In addition to having the **Threaded** attribute set to **TRUE**, a threaded view must be sorted by the thread ID; otherwise, this row limit behavior does not take effect.  <br/> |
|**ToolbarTemplate** <br/> |Optional **Text**. Specifies the name of the predefined toolbar template that is used for the view toolbar.  <br/> |
|**Type** <br/> |Optional **Text**. Specifies the rendering type of the view. The type is the common enumerated HTML view and can be set to **HTML**, **Chart**, or **Pivot**.  <br/> |
|**Url** <br/> |Optional **Text**. Specifies the URL for the view.  <br/> |
|**WebPartOrder** <br/> |Optional **Integer**. Specifies the vertical positioning of the Web Part within a zone.  <br/> |
|**WebPartZoneID** <br/> |Optional **Text**. Specifies the zone for the Web Part.  <br/> |
   
### Child elements

|**Element**|
|:-----|
|[Aggregations](aggregations-element-list.md), [GroupByFooter](groupbyfooter-element-list.md), [GroupByHeader](groupbyheader-element-list.md), [Joins](joins-element-view.md), [PagedClientCallbackRowset](pagedclientcallbackrowset-element-list.md), [PagedRecurrenceRowset](pagedrecurrencerowset-element-list.md), [PagedRowset](pagedrowset-element-list.md), [ParameterBindings](parameterbindings-element-list.md), [ProjectedFields](projectedfields-element-view.md), [Query](query-element-list.md), [RowLimit](rowlimit-element-list.md), [RowLimitExceeded](rowlimitexceeded-element-list.md), [Toolbar](http://msdn.microsoft.com/library/23251c2b-1172-4ac8-bde2-46c1e682a91c%28Office.15%29.aspx), [ViewBidiHeader](viewbidiheader-element-list.md), [ViewBody](viewbody-element-list.md), [ViewData](viewdata-element-list.md), [ViewEmpty](viewempty-element-list.md), [ViewFields](viewfields-element-list.md), [ViewFooter](viewfooter-element-list.md), [ViewHeader](viewheader-element-list.md), [ViewStyle](viewstyle-element-list.md), [XslLink](xsllink-element-list.md)|
   
### Parent elements

||
|:-----|
|[Views](views-element-list.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
### Remarks

The principal view type for list and document summary information is the HTML view. An HTML view is generally a columnar view that displays information from one or more lists. The data to be displayed is described by the fields that are shown in the view. For information about how views work in Microsoft SharePoint Foundation 2010, see [List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx).
  
The primary attributes that define an HTML view are as follows:
  
- Its name. 
    
- The data source specification (usually a single list or document library). 
    
- The filter to be applied to the data source. 
    
- The collection of fields to be displayed. 
    
- The sort order of the items to be displayed. A special case of sort order is grouping. 
    
- An HTML template for rendering the view.
    
The **View** element is central to page rendering and generates a SQL query for the fields, sorts, and filters that are applied in a particular view. The **View** element iterates through the data set returned by the query and executes the [ViewBody](viewbody-element-list.md) element for each row that is returned. Within the **ViewBody** element, a [Fields](fields-element-view.md) element enumeration can be used to handle each field, or each field can be referred to individually by name within a [Field](field-element-list.md) element. 
  
Each view has an internal name that is typically represented by a GUID. The view can be rendered on a page by using the \<View/\> tag.
  
## Example

The following example illustrates the use of a fields enumeration within a view body, laying out a basic table for displaying a list in the browser.
  
```XML
<View Name="MyCustomView">
    <ViewHeader>
      <HTML><![CDATA[<TABLE><TR>]]></HTML>
      <Fields>
        <HTML><![CDATA[<TH>]]></HTML>
        <Field/>
        <HTML><![CDATA[</TH>]]></HTML>
      </Fields>
      <HTML><![CDATA[</TR>]]></HTML>
    </ViewHeader>
    <ViewBody>
      <HTML><![CDATA[<TR>]]></HTML>
        <Fields>
          <HTML><![CDATA[<TD>]]></HTML>
          <Field/>
          <HTML><![CDATA[</TD>]]></HTML>
        </Fields>
      <HTML><![CDATA[</TR>]]></HTML>
    </ViewBody>
    <ViewFooter>
      <HTML><![CDATA[</TABLE>]]></HTML>
    </ViewFooter>
```

Notice that in the previous section the fields enumeration is used within a [ViewHeader](viewheader-element-list.md) section to create column headers for the view. 
  
In the following section of the example a [ViewFields](viewfields-element-list.md) section is included within the **View** element in order to specify which fields will be enumerated in the view. 
  
```XML
    <ViewFields>
      <FieldRef Name="Created_x0020_By"/>
      <FieldRef Name="Last_x0020_Modified"/>
    </ViewFields>
```

> [!NOTE]
> If the view has a [Joins](joins-element-view.md) element, fields from the joined lists can be included in [ViewFields](viewfields-element-list.md), provided that they are also itemized in a [ProjectedFields](projectedfields-element-view.md) element. 
  
In the last section of the example the [Query](query-element-list.md) element is used to specify a result set that meets certain criteria, as in the following example, which returns a list of all the documents in a library that are written by Mary or John. 
  
```XML
    <Query>
      <Where>
        <Or>
          <Eq>
            <FieldRef Name="Created_x0020_By"/>
            <Value Type="Text">
              Mary
            </Value>
          </Eq>
          <Eq>
            <FieldRef Name="Created_x0020_By"/>
            <Value Type="Text">
              John
            </Value>
          </Eq>
        </Or>
      </Where>
      <OrderBy>
        <FieldRef Name="Last_x0020_Modified"/>
      </OrderBy>
    </Query>
</View>
```

The next view example displays a sequence of paragraphs. The **Query** element specifies not only a sort order (in order of modification date), but also a filter (only show items whose **Expires** property is greater than or equal to today's date). 
  
```XML
<View Type="HTML" Name="Summary">
  <ViewBody ExpandXML="TRUE">
    <![CDATA[ <p><SPAN class=DocTitle><ows:Field Name="Title"/></SPAN>
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
```

## See also



[List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx)

