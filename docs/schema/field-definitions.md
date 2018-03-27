---
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 07eb0303-7a99-4cd1-a55a-13b16397cd96
---

# Field Definitions

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Each element manifest file that defines site columns must adhere to the Field Definition Schema.

A *site column* is a reusable column definition, or template, that you can assign to multiple lists across multiple SharePoint sites. Site columns decrease rework and help you ensure consistency of metadata across sites and lists. 

For example, suppose you define a site column named **Customer**. Users can add that column to their lists, and reference it in their content types. This ensures that the column has the same attributes—at least to start with—wherever it appears. Much like site content types, you define a site column at the site level, independent of any actual list or content type.

For more information about site and list columns, see [Introduction to Columns](https://msdn.microsoft.com/library/2482a1a0-c75e-40a9-9cdb-bc1548dc10c0(Office.15).aspx).

An element manifest that defines site columns must validate with the schema in the file wss.xsd. This file is located on the following path: `%ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\TEMPLATE\\XML`.

<br/>

The following example shows an element manifest for a Feature that creates four site columns.

```XML 
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
```

<br/>

## See also

- [Columns](https://msdn.microsoft.com/library/0402b3a7-3665-43df-9769-85e3aa1b2432(Office.15).aspx)
- [How to: Add a Column to a Site](https://msdn.microsoft.com/library/16616d60-87b6-4f90-8301-7d0974ffc303(Office.15).aspx)








