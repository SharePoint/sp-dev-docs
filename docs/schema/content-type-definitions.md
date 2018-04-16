---
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: edb7c69f-736d-4808-b137-48b6861b4caa
---

# Content Type Definitions

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The Content Type Definition schema defines the structure of the XML that creates a content type in the element manifest file of a Feature.

## XML schema definition

An element manifest that defines a content type must validate with the schema in the file wss.xsd. This file is located on the following path: `%ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\TEMPLATE\\XML`.

## Elements

The following list maps the relationships between elements in the schema definition.

- [Elements element (ContentType)](elements-element-contenttype.md)

- [ContentType element (ContentType)](contenttype-element-contenttype.md)

- [Folder element (ContentType)](folder-element-contenttype.md)

- [FieldRefs element (ContentType)](fieldrefs-element-contenttype.md)

- [FieldRef element (ContentType)](fieldref-element-contenttype.md)

- [RemoveFieldRef element (ContentType)](removefieldref-element-contenttype.md)

- [XmlDocuments element (ContentType)](xmldocuments-element-contenttype.md)

- [XmlDocument element (ContentType)](xmldocument-element-contenttype.md)

- [DocumentTemplate element (ContentType)](documenttemplate-element-contenttype.md)

## Example

The following example shows an element manifest for a Feature that provisions two files to use as document templates, creates four custom site columns, and creates three site content types. 

Note that the first new content type, Financial Document, is derived from the built-in Document content type. Financial Document, in turn, is the parent content type for the new Purchase Order and Invoice content types. In the definitions for both of these last two content types, the built-in field Title is referenced so that its DisplayName attribute can be given a custom value.

```XML 
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
```


## See also

- [Introduction to Content Types](https://msdn.microsoft.com/library/a345a6c5-7031-46ab-a2c2-37bedc3012f4(Office.15).aspx)
- [Deploying Content Types](https://msdn.microsoft.com/library/f680072c-3759-4141-b027-165ac0795a72(Office.15).aspx)
- [How to: Add a Content Type to a Site](https://msdn.microsoft.com/library/8c448bfb-4036-451c-ac7d-2eccf13ccd5e(Office.15).aspx)
- [How to: Add a Content Type to a SharePoint List](https://msdn.microsoft.com/library/5ae6e295-a406-4f90-920f-030c0dfcd666(Office.15).aspx)




 



