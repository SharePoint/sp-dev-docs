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
(CAML)](introduction-to-collaborative-application-markup-language-caml.htm) is used in various
ways within the context of Microsoft SharePoint Foundation to define
queries against list data. For example, you can assign CAML query
strings to the **Query** property of several
classes in the server and client object models in order to return data,
or to method parameters of the <span sdata="cer"
target="T:websvcLists.Lists">**Lists**</span> web service to work
remotely with data. CAML queries are also used in the context of CAML
views to return specific data. The
[Query](query-element-list.htm) element of the [List
schema](list-schema.htm) contains elements of
the Query schema.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    [DOCS-LESSTHANWhereDOCS-GREATERTHAN](where-element-query.htm)

        **Logical Joins**

        [DOCS-LESSTHANAndDOCS-GREATERTHAN](and-element-query.htm)

            [Logical Joins]

            [Comparison Operators]

            [DOCS-LESSTHANMembershipDOCS-GREATERTHAN](membership-element-query.htm)

        [DOCS-LESSTHANOrDOCS-GREATERTHAN](or-element-query.htm)

            [Logical Joins]

            [Comparison Operators]

            [DOCS-LESSTHANMembershipDOCS-GREATERTHAN](membership-element-query.htm)

        **Comparison Operators**

        [DOCS-LESSTHANBeginsWithDOCS-GREATERTHAN](beginswith-element-query.htm)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.htm)

            [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.htm)

            [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.htm)

        [DOCS-LESSTHANContainsDOCS-GREATERTHAN](contains-element-query.htm)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.htm)

            [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.htm)

            [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.htm)

        [DOCS-LESSTHANDateRangesOverlapDOCS-GREATERTHAN](daterangesoverlap-element-query.htm)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.htm)

            [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.htm)

        [DOCS-LESSTHANEqDOCS-GREATERTHAN](eq-element-query.htm)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.htm)

            [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.htm)

            [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.htm)

        [DOCS-LESSTHANGeqDOCS-GREATERTHAN](geq-element-query.htm)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.htm)

            [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.htm)

            [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.htm)

        [DOCS-LESSTHANGtDOCS-GREATERTHAN](gt-element-query.htm)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.htm)

            [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.htm)

            [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.htm)

        [DOCS-LESSTHANInDOCS-GREATERTHAN](in-element-query.htm)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.htm)

            [DOCS-LESSTHANValuesDOCS-GREATERTHAN](values-element-query.htm)

              
[DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.htm)

            [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.htm)

        [DOCS-LESSTHANIncludesDOCS-GREATERTHAN](includes-element-query.htm)

              [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.htm)

              [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.htm)

              [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.htm)

        [DOCS-LESSTHANIsNotNullDOCS-GREATERTHAN](isnotnull-element-query.htm)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.htm)

        [DOCS-LESSTHANIsNullDOCS-GREATERTHAN](isnull-element-query.htm)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.htm)

        [DOCS-LESSTHANLeqDOCS-GREATERTHAN](leq-element-query.htm)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.htm)

            [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.htm)

            [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.htm)

        [DOCS-LESSTHANLtDOCS-GREATERTHAN](lt-element-query.htm)

            [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.htm)

            [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.htm)

            [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.htm)

        [DOCS-LESSTHANMembershipDOCS-GREATERTHAN](membership-element-query.htm)

        [DOCS-LESSTHANNeqDOCS-GREATERTHAN](neq-element-query.htm)

              [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.htm)

              [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.htm)

              [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.htm)

        [DOCS-LESSTHANNotIncludesDOCS-GREATERTHAN](notincludes-element-query.htm)

              [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.htm)

              [DOCS-LESSTHANValueDOCS-GREATERTHAN](value-element-query.htm)

              [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.htm)

    **Group/Order Operators**

    [DOCS-LESSTHANGroupByDOCS-GREATERTHAN](groupby-element-query.htm)

        [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.htm)

    [DOCS-LESSTHANOrderByDOCS-GREATERTHAN](orderby-element-query.htm)

        [DOCS-LESSTHANFieldRefDOCS-GREATERTHAN](fieldref-element-query.htm)

    **Value Child Elements**

        [DOCS-LESSTHANListPropertyDOCS-GREATERTHAN](listproperty-element-query.htm)

        [DOCS-LESSTHANMonthDOCS-GREATERTHAN](month-element-query.htm)

        [DOCS-LESSTHANNowDOCS-GREATERTHAN](now-element-query.htm)

        [DOCS-LESSTHANTodayDOCS-GREATERTHAN](today-element-query.htm)

        [DOCS-LESSTHANUserIDDOCS-GREATERTHAN](userid-element-query.htm)

        [DOCS-LESSTHANXMLDOCS-GREATERTHAN](xml-element.htm)


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

<span sdata="link">[View
Schema](view-schema.htm)</span>

<span sdata="link">[List
Schema](list-schema.htm)</span>








