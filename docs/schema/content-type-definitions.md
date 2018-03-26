---


manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
keywords:
- content types [sharepoint 2010], definition schema,content types [SharePoint 2010],content types [SharePoint 2010], definition overview,schemas [SharePoint 2010], content type
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: edb7c69f-736d-4808-b137-48b6861b4caa
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
<td align="left"># Content Type Definitions</td>
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

The Content Type Definition Schema defines the structure of the XML that
creates a content type in the element manifest file of a Feature.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

An element manifest that defines a content type must validate with the
schema in the file <span class="code">wss.xsd</span>. This file is
located on the following path: %ProgramFiles%\\Common Files\\Microsoft
Shared\\web server extensions\\15\\TEMPLATE\\XML.


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following list maps the relationships between elements in the schema
definition.

\<<span sdata="link">[Elements Element
(ContentType)](elements-element-contenttype.htm)</span>\>

   \<<span sdata="link">[ContentType Element
(ContentType)](contenttype-element-contenttype.htm)</span>\>

      \<<span sdata="link">[Folder Element
(ContentType)](folder-element-contenttype.htm)</span>\>

      \<<span sdata="link">[FieldRefs Element
(ContentType)](fieldrefs-element-contenttype.htm)</span>\>

         \<<span sdata="link">[FieldRef Element
(ContentType)](fieldref-element-contenttype.htm)</span>\>

         \<<span sdata="link">[RemoveFieldRef Element
(ContentType)](removefieldref-element-contenttype.htm)</span>\>

      \<<span sdata="link">[XmlDocuments Element
(ContentType)](xmldocuments-element-contenttype.htm)</span>\>

         \<<span sdata="link">[XmlDocument Element
(ContentType)](xmldocument-element-contenttype.htm)</span>\>

      \<<span sdata="link">[DocumentTemplate Element
(ContentType)](documenttemplate-element-contenttype.htm)</span>\>


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example shows an element manifest for a Feature that
provisions two files to use as document templates, creates four custom
site columns, and creates three site content types. Note that the first
new content type, Financial Document, is derived from the built-in
Document content type. Financial Document, in turn, is the parent
content type for the new Purchase Order and Invoice content types. In
the definitions for both of these last two content types, the built-in
field Title is referenced so that its DisplayName attribute can be given
a custom value.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <?xml version="1.0" encoding="utf-8"?>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">

      <!-- Document Templates -->
      <Module Name="PurchaseOrderDocumentTemplate"
              Path="FinancialDocuments"
              Url="_cts/PurchaseOrder" RootWebOnly="TRUE">
        <File Url="PurchaseOrder.docx" Type="Ghostable" />
      </Module>

      <Module Name="InvoiceDocumentTemplate"
              Path="FinancialDocuments"
              Url="_cts/Invoice" RootWebOnly="TRUE">
        <File Url="Invoice.docx" Type="Ghostable" />
      </Module>

      <!-- Site Columns -->
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
             DisplayName="Department"
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

      <Field ID="{1511BF28-A787-4061-B2E1-71F64CC93FD5}"
            Name="OrderDate"
            DisplayName="Order Date"
            Type="DateTime"
            Format="DateOnly"
            Group="Financial Columns">
        <Default>[today]</Default>
      </Field>

      <!-- Parent ContentType: Document (0x0101) -->
      <ContentType ID="0x0101000728167cd9c94899925ba69c4af6743e"
                   Name="Financial Document"
                   Group="Financial Content Types"
                   Description="Base financial content type"
                   Version="0">
        <FieldRefs>
          <FieldRef ID="{1511BF28-A787-4061-B2E1-71F64CC93FD5}" Name="OrderDate" DisplayName="Date" Required="FALSE"/>
          <FieldRef ID="{060E50AC-E9C1-4D3C-B1F9-DE0BCAC300F6}" Name="Amount" DisplayName="Amount" Required="FALSE"/>
        </FieldRefs>
      </ContentType>

      <!-- Parent ContentType: Financial Document -->
      <ContentType ID="0x0101000728167cd9c94899925ba69c4af6743e01"
                   Name="PurchaseOrder"
                   Group="Financial Content Types"
                   Description="Used for creating purchase orders"
                   Inherits="TRUE"
                   Version="0">
        <FieldRefs>
          <!--  Built-in Title field -->
          <FieldRef ID="{fa564e0f-0c70-4ab9-b863-0177e6ddd247}" Name="Title" DisplayName="Item" Required="TRUE" Sealed="TRUE"/>
          <FieldRef ID="{943E7530-5E2B-4C02-8259-CCD93A9ECB18}" Name="CostCenter" DisplayName="Department" Required="TRUE"/>
        </FieldRefs>
        <DocumentTemplate TargetName="PurchaseOrder.docx"/>
      </ContentType>

      <!-- Parent ContentType: Financial Document -->
      <ContentType ID="0x0101000728167cd9c94899925ba69c4af6743e02"
                    Name="Invoice"
                    Group="Financial Content Types"
                    Description="Used for creating customer invoices"
                    Inherits="TRUE"
                    Version="0">
        <FieldRefs>
          <!--  Built-in Title field -->
          <FieldRef ID="{fa564e0f-0c70-4ab9-b863-0177e6ddd247}" Name="Title" DisplayName="Service" Required="TRUE" Sealed="TRUE"/>
          <FieldRef ID="{86811853-7E52-4515-A88D-A8FA9D450905}" Name="Client" DisplayName="Client Name" Required="TRUE"/>
        </FieldRefs>
        <DocumentTemplate TargetName="Invoice.docx" />
      </ContentType>
    </Elements>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Introduction to Content
Types](http://msdn.microsoft.com/library/a345a6c5-7031-46ab-a2c2-37bedc3012f4(Office.15).aspx)

[Content Type Deployment Using
Features](http://msdn.microsoft.com/library/f680072c-3759-4141-b027-165ac0795a72(Office.15).aspx)

[How to: Add a Content Type to a
Site](http://msdn.microsoft.com/library/8c448bfb-4036-451c-ac7d-2eccf13ccd5e(Office.15).aspx)

[How to: Add a Content Type to a
List](http://msdn.microsoft.com/library/5ae6e295-a406-4f90-920f-030c0dfcd666(Office.15).aspx)








