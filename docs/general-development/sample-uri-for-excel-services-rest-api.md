---
title: Sample URI For Excel Services REST API
ms.prod: OFFICE365
ms.assetid: 4ebe1da2-9861-416f-bef1-4a62599efe2e
---


# Sample URI For Excel Services REST API

This topic lists sample URIs for the representational state transfer (REST) service commands in Excel Services.
  
    
    


> **Note:**
> The Excel Services REST API applies to SharePoint 2013 and SharePoint 2016 on-premises. For Office 365 Education, Business, and Enterprise accounts, use the Excel REST APIs that are part of the  [Microsoft Graph](http://graph.microsoft.io/en-us/docs/api-reference/v1.0/resources/excel
) endpoint.
  
    
    


## Sample URI for REST Commands in Excel Services

In the following examples, each URI references a workbook named  *sampleWorkbook.xlsx*  .
  
    
    

- The sampleWorkbook.xlsx file contains named ranges and charts.
    
  
- The sampleWorkbook.xlsx file is saved to a trusted SharePoint document library. In this example, the path to the location of sampleWorkbook.xlsx is:
    
  ```
  
http://<ServerName>/Docs/Documents/sampleWorkbook.xlsx
  ```


### Sample URI

The .aspx page for the REST service in Excel Services is: 
  
    
    

```
http://<ServerName>/_vti_bin/ExcelRest.aspx

```

The following are example URIs to access the sampleWorkbook.xlsx workbook by using the REST service in Excel Services. 
  
    
    

- Top-level model for the workbook (only ranges and charts in the current build):
    
  ```
  
http://<ServerName>/_vti_bin/ExcelRest.aspx/Docs/Documents/sampleWorkbook.xlsx/model

  ```

- Get the full workbook:
    
  ```
  
http://<ServerName>/_vti_bin/ExcelRest.aspx/Docs/Documents/sampleWorkbook.xlsx/model?$format=workbook

  ```

- Return a range (default html). The following two URI examples are equivalent:
    
  ```
  
http://<ServerName>/_vti_bin/ExcelRest.aspx/Docs/Documents/sampleWorkbook.xlsx/model/Ranges('Sheet1!A1|G5')

  ```


  ```
  
http://<ServerName>/_vti_bin/ExcelRest.aspx/Docs/Documents/sampleWorkbook.xlsx/model/Ranges('Sheet1!A1|G5')?$format=html
  ```

- Get a named range:
    
  ```
  http://<ServerName>/_vti_bin/ExcelRest.aspx/Docs/Documents/sampleWorkbook.xlsx/model/Ranges('nameOfTheNamedRange')

  ```

- Return an Atom XML feed:
    
  ```
  
http://<ServerName>/_vti_bin/ExcelRest.aspx/Docs/Documents/sampleWorkbook.xlsx/model?$format=atom

  ```

- Set a cell and return it:
    
  ```
  
http://<ServerName>/_vti_bin/ExcelRest.aspx/Docs/Documents/sampleWorkbook.xlsx/model/Ranges('Sheet1!A1|G5')?Ranges('Sheet1!C3')=demo

  ```

- Get a chart:
    
  ```
  
http://<ServerName>/_vti_bin/ExcelRest.aspx/Docs/Documents/sampleWorkbook.xlsx/model/Charts('Chart 1')

  ```

- Set a value and get a chart:
    
  ```
  
http://<ServerName>/_vti_bin/ExcelRest.aspx/Docs/Documents/sampleWorkbook.xlsx/model/Charts('Chart%201')?Ranges('Sheet1!A1')=5.5

  ```


