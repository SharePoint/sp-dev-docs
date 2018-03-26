---

manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
keywords:
- view schema [sharepoint 2010],schemas [SharePoint 2010], view
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: 39aba5b3-dcc2-4c45-9ce6-99f31fde0d8c
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
<td align="left"># View Schema</td>
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

**Last modified:** July 15, 2011

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

The View schema of [Collaborative Application Markup Language
(CAML)](introduction-to-collaborative-application-markup-language-caml.md) is used to define how
the contents of a list view are rendered in Microsoft SharePoint
Foundation.

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
<td align="left"><p>SharePoint Foundation 2010 uses XSLT to define list views, and the View schema is maintained for backward compatibility. For information about XSLT list views, see <a href="http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17(Office.15).aspx">List Views</a>.</p></td>
</tr>
</tbody>
</table>

A list view includes a query that returns the data that is displayed in
the view. For the list of query elements, see [Query
Schema](query-schema.md)</span>. For the
top-level elements that are used to organize a view, see <span
sdata="link">[List
Schema](list-schema.md)</span>.

In SharePoint Foundation 2010 .aspx pages, the view is conveyed through
a <span sdata="cer"
target="T:Microsoft.SharePoint.WebPartPages.XsltListViewWebPart"><span
class="nolink">Microsoft.SharePoint.WebPartPages.XsltListViewWebPart</span></span>
object. Views can be created or modified programmatically through either
the server-side or client-side object model (for example, members of
<span sdata="cer" target="T:Microsoft.SharePoint.SPView"><span
class="nolink">SPView</span></span> or <span sdata="cer"
target="T:Microsoft.SharePoint.SPViewCollection"><span
class="nolink">SPViewCollection</span></span> and their related types in
the <span sdata="cer" target="N:Microsoft.SharePoint.Client"><span
class="nolink">Microsoft.SharePoint.Client</span></span> (JavaScript:
[SP](http://msdn.microsoft.com/library/e3694767-6f32-f98c-37af-4282f2815c02(Office.15).aspx))
namespace), through the Views web service (methods of the <span
sdata="cer" target="T:websvcViews.Views">**Views**</span> class), or
through remote procedure call (RPC) protocol (see [Windows SharePoint
Services RPC
Methods](http://msdn.microsoft.com/library/fb791985-a9e4-4c94-b94a-1b3c7f00457a(Office.15).aspx)).


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Specialized rendering elements are used within a view to define the
logic for constructing HTML. These elements can contain numerous
standard rendering elements.

[ContentTypes](contenttypes-element-view.md)

[Fields](fields-element-view.md)

[FieldSwitch](fieldswitch-element-view.md)

  [Expr](expr-element-view.md)

  [Case](case-element-view.md)

  [Default](default-element-view.md)

[ForEach](foreach-element-view.md)

[IfEqual](ifequal-element-view.md)

  [Expr1](expr1-element-view.md)

  [Expr2](expr2-element-view.md)

  [Else](else-element-view.md)

  [Then](then-element-view.md)

[IfHasRights](ifhasrights-element-view.md)

  [RightsChoices](rightschoices-element-view.md)

    [RightsGroup](rightsgroup-element-view.md)

  [Else](else-element-view.md)

  [Then](then-element-view.md)

[IfNeg](ifneg-element-view.md)

  [Expr1](expr1-element-view.md)

  [Expr2](expr2-element-view.md)

[IfNew](ifnew-element-view.md)

[IfSubString](ifsubstring-element-view.md)

  [Expr1](expr1-element-view.md)

  [Expr2](expr2-element-view.md)

  [Else](else-element-view.md)

  [Then](then-element-view.md)

[Limit](limit-element-view.md)

  [Column](column-element-view.md)

  [More](more-element-view.md)

  [Text](text-element-view.md)

[Length](length-element-view.md)

[MapToAll](maptoall-element-view.md)

[MapToContentType](maptocontenttype-element-view.md)

[MapToControl](maptocontrol-element-view.md)

[MapToIcon](maptoicon-element-view.md)

[Method](method-element-view.md)

  [SetList](setlist-element-view.md)

  [SetVar](setvar-element-view.md)

[SelectionOptions](selectionoptions-element-view.md)

[Switch](switch-element-view.md)

  [Expr](expr-element-view.md)

  [Case](case-element-view.md)

  [Default](default-element-view.md)


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following standard rendering elements are used to render HTML within
the various sections of the previously listed structural or specialized
rendering elements.

[Column](column-element-view.md)

[Column2](column2-element-view.md)

[Counter](counter-element-view.md)

[CurrentRights](currentrights-element-view.md)

[Field](field-element-view.md)

[FieldPrefix](fieldprefix-element-view.md)

[FieldProperty](fieldproperty-element-view.md)

[FieldSortParams](fieldsortparams-element-view.md)

[FilterLink](filterlink-element-view.md)

[GetFileExtension](getfileextension-element-view.md)

[GetVar](getvar-element-view.md)

[HTML](html-element-view.md)

[HttpHost](httphost-element-view.md)

[HttpPath](httppath-element-view.md)

[HttpVDir](httpvdir-element-view.md)

[ID](id-element-view.md)

[Identity](identity-element-view.md)

[List](list-element-view.md)

[ListProperty](listproperty-element-view.md)

[ListUrl](listurl-element-view.md)

[ListUrlDir](listurldir-element-view.md)

[LookupColumn](lookupcolumn-element-view.md)

[MeetingProperty](meetingproperty-element-view.md)

[PageUrl](pageurl-element-view.md)

[ProjectProperty](projectproperty-element-view.md)

[Property](property-element-view.md)

[ScriptQuote](scriptquote-element-view.md)

[ServerProperty](serverproperty-element-view.md)

[SetList](setlist-element-view.md)

[SetVar](setvar-element-view.md)

[ThreadStamp](threadstamp-element-view.md)

[URL](url-element-view.md)

[UrlBaseName](urlbasename-element-view.md)

[UrlDirName](urldirname-element-view.md)

[UserID](userid-element-view.md)

[WebQueryInfo](webqueryinfo-element-view.md)


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[Query
Schema](query-schema.md)</span>

[List
Schema](list-schema.md)</span>

#### Other resources

[List
Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17(Office.15).aspx)

[XMLDefinition and CAML View
Schema](http://msdn.microsoft.com/library/1845d203-4699-4b0e-a182-2d9998439922(Office.15).aspx)








