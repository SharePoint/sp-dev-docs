---
title: Requesting Excel workbook data from SharePoint Server using OData
ms.prod: SHAREPOINT
ms.assetid: 2f846e96-6c9e-4ed2-9602-4081ad0ab135
---



# Requesting Excel workbook data from SharePoint Server using OData

> **Note:**
> The Excel Services REST API applies to SharePoint and SharePoint 2016 on-premises. For Office 365 Education, Business, and Enterprise accounts, use the Excel REST APIs that are part of the  [Microsoft Graph](http://graph.microsoft.io/en-us/docs/api-reference/v1.0/resources/excel) endpoint.
  
    
    

OData uses URLs to request information from a resource. You craft the URL in a specific way, using query options, to return the information that you are requesting. The following URL shows what a typical OData request looks like.
http://contoso1/_vti_bin/ExcelRest.aspx/Documents/ProductSales.xlsx/OData/Table1?$top=20
  
    
    

This sample OData request is structured so that it gets the first 20 rows from a table named Table1 in the workbook ProductSales.xlsx which is stored in the Documents folder on the contoso1 server. The URL uses the system query option **$top** to specify the number of rows to return.Looking closely at the URL, you can see its three part structure: the service root URI; the resource path; and the query options.
## Service root URI

The initial part of the URL is called the service root and remains the same for every OData request that you make to a SharePoint server except for the name of the server. It includes the name of the SharePoint server where the workbook is stored and the path, _vti_bin/ExcelRest.aspx, as in the following example.
  
    
    
http://contoso1/_vti_bin/ExcelRest.aspx
  
    
    

## Resource path

The second part of the URL has the path to the Excel workbook and specifies that this is an OData request.
  
    
    
/Documents/ProductSales.xlsx/OData
  
    
    

## System query options

The third part of the URL gives the system query options for the request. Query options always begin with a dollar sign ($) and are appended to the end of the URI as query parameters. In this example, the request is for the first 20 rows in the table named Table1.
  
    
    
/Table1?$top=20
  
    
    
System query options provide a way to get specific data from a resource. The Excel Services OData implementation supports a number of query options as listed in the following section.
  
    
    

## System query options
<a name="xlsSystemQueryOptions"> </a>

The Excel Services implementation of OData supports a number of the standard OData system query options. These query options are at the heart of OData requests since you use the options to specify what data you want to get from a resource. The following table lists the system query options that Excel Services implementation of OData currently supports.
  
    
    

**Table 1. Excel Services OData system query options**


|****System Query Option****|****Description****|
|:-----|:-----|
|/\<tableName\>  <br/> |Returns all rows for the table specified by \<tableName\>, where \<tableName\> is the name of a table in an Excel workbook that contains the rows that you want to retrieve.  <br/> **Important:** This form of OData request returns no more than 500 rows at a time. Each set of 500 rows is one page. To get rows in further pages in a table that has more than 500 rows, use the **$skiptoken** query option (see below).<br/>The following example returns all rows up to the 500th row in Table1 in the ProductSales.xlsx workbook.  <br/> |
|**$metadata** <br/> |Returns all the available tables and the type information for all rows in each table in the specified workbook.  <br/> The following example returns the tables and type information for the tables in the ProductSales.xlsx workbook.  <br/> http://contoso1/_vti_bin/ExcelRest.aspx/Documents/ProductSales.xlsx/OData/$metadata  <br/> |
|**$orderby** <br/> |Returns rows in the specified table, sorted by the value specified by **$orderby**.  <br/> The following example returns all rows from Table 1, sorted by the Name column, in the ProductSales.xlsx workbook.  <br/> **Note:** The default value for **$orderby** is ascending.          http://contoso1/_vti_bin/ExcelRest.aspx/Documents/ProductSales.xlsx/OData/Table1?$orderby=Name  <br/> |
|**$top** <br/> |Returns N rows from the table where N is a number specified by the value of **$top**.  <br/> The following example returns the first 5 rows from Table1, sorted by the Name column, in the ProductSales.xlsx workbook.  <br/> http://contoso1/_vti_bin/ExcelRest.aspx/Documents/ProductSales.xlsx/OData/Table1?$orderby=Name&amp;$top=5  <br/> |
|**$skip** <br/> |Skips N rows, where N is the number specified by the value of **$skip**, and then returns the remaining rows of the table.  <br/> The following example returns all remaining rows after the fifth row from Table1 in the ProductSales.xlsx workbook.  <br/> http://contoso1/_vti_bin/ExcelRest.aspx/Documents/ProductSales.xlsx/OData/Table1?$skip=5  <br/> |
|**$skiptoken** <br/> |Seeks to the Nth row, where N is the row ordinal position indicated by the value of **$skiptoken**, and then returns all remaining rows, beginning at row N + 1. The collection is zero-based, so the second row, for example, is indicated by $skiptoken=1.  <br/> The following example returns all remaining rows after the second row from Table1 in the ProductSales.xlsx workbook.  <br/> http://contoso1/_vti_bin/ExcelRest.aspx/Documents/ProductSales.xlsx/OData/Table1?$skiptoken=1  <br/> You can also use the **$skiptoken** query option to get rows in pages after the first page from a table that contains more than 500 rows. The following example shows how to get the 500th row and greater from a table with more than 500 rows. <br/> http://contoso1/_vti_bin/ExcelRest.aspx/Documents/ProductSales.xlsx/OData/Table1?$skiptoken=499  <br/> |
|**$filter** <br/> |Returns the subset of rows that satisfy the conditions specified in the value of **$filter**. For more information about the operators and set of functions that you can use with **$filter**, see the OData  [documentation](http://www.odata.org/documentation/odata-version-2-0/uri-conventions/).  <br/> The following example returns only those rows where the value of the Price column is greater than 100.  <br/> http://contoso1/_vti_bin/ExcelRest.aspx/Documents/ProductSales.xlsx/OData/Table1?$filter=Price gt 100  <br/> |
|**$format** <br/> |The Atom XML format is the only supported value and is the default for the **$format** query option. <br/> |
|**$select** <br/> |Returns the entity specified by **$select**.  <br/> The following example selects the Name column from Table1 in the ProductSales.xlsx workbook.  <br/> http://contoso1/_vti_bin/ExcelRest.aspx/Documents/ProductSales.xlsx/OData/Table1?$select=Name  <br/> |
|**$inlinecount** <br/> | Returns the number of rows in the specified table. <br/>  $ **inlinecount** can only use 1 of 2 of the following values. <br/><ul><li>**allpages** - Returns the count for all rows in the table.</li><li>**none** - Does not include a count of rows in the table.</li></ul><br/>The following example returns the count for the total number of rows in Table1 in the ProductSales.xlsx workbook. <br/>  http://contoso1/_vti_bin/ExcelRest.aspx/Documents/ProductSales.xlsx/OData/Table1?$inlinecount=allpages <br/> |
   

## Additional resources
<a name="xlsAdditionalResources"> </a>


-  [Using OData with Excel Services REST in SharePoint](using-odata-with-excel-services-rest-in-sharepoint)
    
  
-  [What's new in Excel Services for developers](http://msdn.microsoft.com/library/09e96c8b-cb55-4fd1-a797-b50fbf0f9296.aspx)
    
  
-  [OData specification documentation](http://www.odata.org)
    
  
