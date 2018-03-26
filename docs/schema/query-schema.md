---


manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
keywords:
- query schema [sharepoint 2010],schemas [SharePoint 2010], query
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Query schema
api_type:
- schema
ms.assetid: 7cc82402-1f1d-4825-81cb-abc5f99a219c
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
<td align="left"># Query Schema</td>
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

The Query schema of [Collaborative Application Markup Language
(CAML)](introduction-to-collaborative-application-markup-language-caml.md) is used in various
ways within the context of Microsoft SharePoint Foundation to define
queries against list data. For example, you can assign CAML query
strings to the **Query** property of several
classes in the server and client object models in order to return data,
or to method parameters of the <span sdata="cer"
target="T:websvcLists.Lists">**Lists**</span> web service to work
remotely with data. CAML queries are also used in the context of CAML
views to return specific data. The
[Query](query-element-list.md) element of the [List
schema](list-schema.md) contains elements of
the Query schema.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    [DOCS-LESSTHANWhereDOCS-GREATERTHAN](where-element-query.md)

        **Logical Joins**

        [DOCS-LESSTHANAndDOCS-GREATERTHAN](and-element-query.md)

            [Logical Joins]

            [Comparison Operators]

            [DOCS-LESSTHANMembershipDOCS-GREATERTHAN](membership-element-query.md)

        [DOCS-LESSTHANOrDOCS-GREATERTHAN](or-element-query.md)

            [Logical Joins]

            [Comparison Operators]

            [DOCS-LESSTHANMembershipDOCS-GREATERTHAN](membership-element-query.md)

        **Comparison Operators**

        [DOCS-LESSTHANBeginsWithDOCS-GREATERTHAN](beginswith-element-query.md)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.md)

            [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.md)

            [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.md)

        [DOCS-LESSTHANContainsDOCS-GREATERTHAN](contains-element-query.md)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.md)

            [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.md)

            [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.md)

        [DOCS-LESSTHANDateRangesOverlapDOCS-GREATERTHAN](daterangesoverlap-element-query.md)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.md)

            [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.md)

        [DOCS-LESSTHANEqDOCS-GREATERTHAN](eq-element-query.md)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.md)

            [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.md)

            [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.md)

        [DOCS-LESSTHANGeqDOCS-GREATERTHAN](geq-element-query.md)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.md)

            [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.md)

            [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.md)

        [DOCS-LESSTHANGtDOCS-GREATERTHAN](gt-element-query.md)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.md)

            [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.md)

            [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.md)

        [DOCS-LESSTHANInDOCS-GREATERTHAN](in-element-query.md)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.md)

            [DOCS-LESSTHANValuesDOCS-GREATERTHAN](values-element-query.md)

              
[DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.md)

            [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.md)

        [DOCS-LESSTHANIncludesDOCS-GREATERTHAN](includes-element-query.md)

              [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.md)

              [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.md)

              [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.md)

        [DOCS-LESSTHANIsNotNullDOCS-GREATERTHAN](isnotnull-element-query.md)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.md)

        [DOCS-LESSTHANIsNullDOCS-GREATERTHAN](isnull-element-query.md)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.md)

        [DOCS-LESSTHANLeqDOCS-GREATERTHAN](leq-element-query.md)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.md)

            [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.md)

            [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.md)

        [DOCS-LESSTHANLtDOCS-GREATERTHAN](lt-element-query.md)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.md)

            [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.md)

            [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.md)

        [DOCS-LESSTHANMembershipDOCS-GREATERTHAN](membership-element-query.md)

        [DOCS-LESSTHANNeqDOCS-GREATERTHAN](neq-element-query.md)

              [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.md)

              [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.md)

              [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.md)

        [DOCS-LESSTHANNotIncludesDOCS-GREATERTHAN](notincludes-element-query.md)

              [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.md)

              [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.md)

              [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.md)

    **Group/Order Operators**

    [DOCS-LESSTHANGroupByDOCS-GREATERTHAN](groupby-element-query.md)

        [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.md)

    [DOCS-LESSTHANOrderByDOCS-GREATERTHAN](orderby-element-query.md)

        [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.md)

    **Value Child Elements**

        [DOCS-LESSTHANListPropertyDOCS-GREATERTHAN](listproperty-element-query.md)

        [DOCS-LESSTHANMonthDOCS-GREATERTHAN](month-element-query.md)

        [DOCS-LESSTHANNowDOCS-GREATERTHAN](now-element-query.md)

        [DOCS-LESSTHANTodayDOCS-GREATERTHAN](today-element-query.md)

        [DOCS-LESSTHANUserIDDOCS-GREATERTHAN](userid-element-query.md)

        [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.md)


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[View
Schema](view-schema.md)</span>

[List
Schema](list-schema.md)</span>








