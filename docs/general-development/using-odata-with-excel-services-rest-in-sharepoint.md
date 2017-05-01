---
title: Using OData with Excel Services REST in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: 8a20225a-323c-4420-bbb4-eef60aed4b42
---


# Using OData with Excel Services REST in SharePoint 2013
SharePoint Server 2010 introduced the REST API for use in getting and setting information in Excel Workbooks stored in SharePoint document libraries. SharePoint Server 2013 adds a new way to request data from Excel Services that uses the Open Data Protocol (OData) which you can use to get information about Excel Services resources. This new service relies heavily on the existing Excel Services REST API.This topic provides a high-level overview for using OData in Excel Services.
> **Note:**
> The Excel Services REST API applies to SharePoint 2013 and SharePoint 2016 on-premises. For Office 365 Education, Business, and Enterprise accounts, use the Excel REST APIs that are part of the  [Microsoft Graph](http://graph.microsoft.io/en-us/docs/api-reference/v1.0/resources/excel
) endpoint.
  
    
    


## What is OData?
<a name="xlsWhatIsOdata"> </a>

OData is an open web protocol for querying and updating data. It uses a RESTful approach to return data from resources on the web. That is, you use a URI with query parameters included to get information about a specific resource.
  
    
    
For more information about OData, see the website for the  [Open Data Protocol specification](http://www.odata.org).
  
    
    

## How do you use OData with Excel Services?
<a name="xlsHowUseOdata"> </a>

In the case of Excel Services, you use OData to get information about tables (including query tables) in a workbook that is stored in a SharePoint library. The OData service returns the data that you requested in the in the XML Atom format.
  
    
    

### Syntax for making OData requests to Excel Services
<a name="xlsOdataSyntax"> </a>

SharePoint exposes each workbook as a separate resource that you can request information from. In this release of SharePoint Server, you can only get data from tables in the workbook.
  
    
    
To get data from an Excel workbook, you construct a URL that points to the workbook, and that specifies what data that you want to get from the workbook, and how to arrange that data. For example, to get information about Table1 in a workbook named ProductSales.xlsx that is stored on a SharePoint library in a folder that is named Documents, you would use a URL as follows.
  
    
    
http://<serverName>/_vti_bin/ExcelRest.aspx/Documents/ProductSales.xlsx/OData/Table1
  
    
    
For more information about how to use OData to request information from an Excel workbook stored on SharePoint Server, see  [Requesting Excel workbook data from SharePoint Server using OData](requesting-excel-workbook-data-from-sharepoint-server-using-odata.md).
  
    
    

## Data returned by OData
<a name="xlsOdataReturnData"> </a>

When you make an OData request to Excel Services, it returns XML in the Atom format. The Atom format is the only supported format in the Excel Services implementation of OData. For example, the following shows an OData request for the first row in the first table (named Table1) in a workbook named WindowsPhoneComparison.xlsx.
  
    
    
http://<serverName>/_vti_bin/ExcelRest.aspx/Documents/WindowsPhoneComparison.xlsx/odata/Table1
  
    
    
Excel Services then returns the Atom XML shown in the following code.
  
    
    



```XML

<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<entry xml:base="http://{serverName}/_vti_bin/ExcelRest.aspx/Documents/WindowsPhoneComparison.xlsx/OData" xmlns:d="http://schemas.microsoft.com/ado/2007/08/dataservices" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" m:etag="W/&amp;quot;datetime'0001-01-01T00%3A00%3A00'&amp;quot;" xmlns="http://www.w3.org/2005/Atom">
  <id>http://{serverName}/_vti_bin/ExcelRest.aspx/Documents/WindowsPhoneComparison.xlsx/OData/Table1(0)</id>
  <title type="text"></title>
  <updated>0001-01-01T00:00:00-08:00</updated>
  <author>
    <name />
  </author>
  <link rel="edit" title="Table1Item" href="/Table1(0)" />
  <category term="ExcelServices.Table1Item" scheme="http://schemas.microsoft.com/ado/2007/08/dataservices/scheme" />
  <content type="application/xml">
    <m:properties>
      <d:Phone>Samsung Focus</d:Phone>
      <d:sizeweight m:type="Edm.Double">4</d:sizeweight>
      <d:camera m:type="Edm.Double">2.5</d:camera>
      <d:battery m:type="Edm.Double">3</d:battery>
      <d:memory m:type="Edm.Double">3</d:memory>
      <d:speed m:type="Edm.Double">3</d:speed>
      <d:style m:type="Edm.Double">3</d:style>
      <d:callquality m:type="Edm.Double">3</d:callquality>
      <d:overall m:type="Edm.Double">3</d:overall>
      <d:excelRowID m:type="Edm.Int32">0</d:excelRowID>
    </m:properties>
  </content>
</entry>

```


## Conclusion
<a name="xlsOdataReturnData"> </a>

OData provides a simple way to get data from Excel workbooks that are stored on SharePoint. Using a straightforward syntax that is based on web standards like HTTP and REST, OData lets you quickly and easily get data from Excel workbooks.
  
    
    

## Additional resources
<a name="xlsOdataAddRes"> </a>


-  [What's new in Excel Services for developers](http://msdn.microsoft.com/library/09e96c8b-cb55-4fd1-a797-b50fbf0f9296.aspx)
    
  
-  [Requesting Excel workbook data from SharePoint Server using OData](requesting-excel-workbook-data-from-sharepoint-server-using-odata.md)
    
  
-  [OData specification documentation](http://www.odata.org)
    
  

