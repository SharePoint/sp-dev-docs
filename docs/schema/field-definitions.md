---


manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 07eb0303-7a99-4cd1-a55a-13b16397cd96
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
<td align="left"># Field Definitions</td>
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

***Applies to:** SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

Each element manifest file that defines site columns must adhere to the
Field Definition Schema.

A *site column* is a reusable column definition, or template, that you
can assign to multiple lists across multiple SharePoint sites. Site
columns decrease rework and help you ensure consistency of metadata
across sites and lists. For example, suppose you define a site column
named **Customer**. Users can add that column to their lists, and
reference it in their content types. This ensures that the column has
the same attributes—at least to start with—wherever it appears. Much
like site content types, you define a site column at the site level,
independent of any actual list or content type.

For more information about site and list columns, see [Introduction to
Columns](http://msdn.microsoft.com/library/2482a1a0-c75e-40a9-9cdb-bc1548dc10c0(Office.15).aspx).


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

An element manifest that defines site columns must validate with the
schema in the file <span class="code">wss.xsd</span>. This file is
located on the following path: %ProgramFiles%\\Common Files\\Microsoft
Shared\\web server extensions\\15\\TEMPLATE\\XML.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example shows an element manifest for a Feature that
creates four site columns.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <?xml version="1.0" encoding="utf-8"?>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">

      <Field ID="{1511BF28-A787-4061-B2E1-71F64CC93FD5}"
             Name="DateOpened"
             DisplayName="Date Opened"
             Type="DateTime"
             Format="DateOnly"
             Required="FALSE"
             Group="Financial Columns">
        <Default>[today]</Default>
      </Field>

      <Field ID="{060E50AC-E9C1-4D3C-B1F9-DE0BCAC300F6}"
             Name="Amount"
             DisplayName="Amount"
             Type="Currency"
             Decimals="2"
             Min="0"
             Required="FALSE"
             Group="Financial Columns" />

      <Field ID="{86811853-7E52-4515-A88D-A8FA9D450905}"
             Name="Client"
             DisplayName="Client Name"
             Type="Text"
             Required="FALSE"
             Group="Financial Columns"/>

      <Field ID="{943E7530-5E2B-4C02-8259-CCD93A9ECB18}"
             Name="CostCenter"
             DisplayName="Cost Center"
             Type="Choice"
             Required="FALSE"
             Group="Financial Columns">
        <CHOICES>
          <CHOICE>Administration</CHOICE>
          <CHOICE>Information</CHOICE>
          <CHOICE>Facilities</CHOICE>
          <CHOICE>Operations</CHOICE>
          <CHOICE>Sales</CHOICE>
          <CHOICE>Marketing</CHOICE>
        </CHOICES>
      </Field>
    </Elements>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Columns](http://msdn.microsoft.com/library/0402b3a7-3665-43df-9769-85e3aa1b2432(Office.15).aspx)

[Introduction to
Columns](http://msdn.microsoft.com/library/2482a1a0-c75e-40a9-9cdb-bc1548dc10c0(Office.15).aspx)

[How to: Add a Column to a
Site](http://msdn.microsoft.com/library/16616d60-87b6-4f90-8301-7d0974ffc303(Office.15).aspx)








