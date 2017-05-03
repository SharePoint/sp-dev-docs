---
title: Resources URI for Excel Services REST API
ms.prod: SHAREPOINT
ms.assetid: 79f95305-ec9e-4842-b937-85f66ced98e4
---


# Resources URI for Excel Services REST API

You can link to entities directly by using the REST API in Excel Services.
  
    
    


> **Note:**
> The Excel Services REST API applies to SharePoint and SharePoint 2016 on-premises. For Office 365 Education, Business, and Enterprise accounts, use the Excel REST APIs that are part of the  [Microsoft Graph](http://graph.microsoft.io/en-us/docs/api-reference/v1.0/resources/excel
) endpoint.
  
    
    


## Base REST URL

The following is an example of a REST URL to a specific element in a workbook.
  
    
    

```

http://<ServerName>/_vti_bin/ExcelRest.aspx/<DocumentLibrary>/<FileName>/<ResourceLocation>
```

A relative REST URL is based off the base REST URL. The following is an example of a base REST URL to a specific workbook.
  
    
    



```
http://<ServerName>/_vti_bin/ExcelRest.aspx/<DocumentLibrary>/<FileName>
```

For example, if you have a workbook named "sampleWorkbook.xlsx" in the following document library: 
  
    
    



```
http://<ServerName>/Docs/Documents/sampleWorkbook.xlsx
```

The base REST URL to the workbook is:
  
    
    



```
http://<ServerName>/_vti_bin/ExcelRest.aspx/Docs/Documents/sampleWorkbook.xlsx
```


## Resources URI

Table 1 shows all the accessible resources in the Excel Services REST API. To access a particular resource, append the resource location to the base REST URL to a workbook.
  
    
    

**Table 1. Accessible resources in the Excel Services REST API**


|****Resource Location****|****Format****|****Example****|****Notes****|
|:-----|:-----|:-----|:-----|
|/model  <br/> |Atom (default)  <br/> |/model  <br/> |Returns an Atom feed with the resources supported by the Excel Services REST API. The supported resources are ranges, charts, tables, and PivotTables.  <br/> |
|/model  <br/> |workbook  <br/> |/model?$format=workbook  <br/> |This is the workbook. Supported workbook formats are xlsx, xlsb, and xlsm.  <br/> |
|/model/Ranges  <br/> |Atom (default)  <br/> |/model/Ranges?$format=atom  <br/> |An Atom feed that listis all the named ranges in the workbook.  <br/> |
|/model/Ranges('[Name]')  <br/> |HTML (default)  <br/> |/model/Ranges('MyRange')?$format=html  <br/> |An HTML fragment for the requested range.  <br/> |
|/model/Ranges('[Name]')  <br/> |Atom  <br/> |/model/Ranges('MyRange')?$format=atom  <br/> |An Atom entry that contains an XML representation of the data within the range.  <br/> |
|/model/Charts  <br/> |Atom (default)  <br/> |/model/Charts?$format=atom  <br/> |An Atom feed that lists all the charts in the workbook.  <br/> |
|/model/Charts('[Name]')  <br/> |Image (default)  <br/> |/model/Charts('MyChart')?$format=image  <br/> |An image of the chart. The image is in Portable Network Graphics (PNG) format.  <br/> |
|/model/Tables  <br/> |Atom (default)  <br/> |/model/Tables?$format=atom  <br/> |An Atom feed that lists all the available tables in the workbook.  <br/> |
|/model/Tables('[Name]')  <br/> |HTML (default)  <br/> |/model/Tables('MyTable')?$format=html  <br/> |An HTML fragment for the requested table.  <br/> |
|/model/Tables('[Name]')  <br/> |Atom  <br/> |/model/Tables('MyTable')?$format=atom  <br/> |An Atom entry that contains an XML representation of the data within the table.  <br/> |
|/model/PivotTables  <br/> |Atom (default)  <br/> |/model/PivotTables?$format=atom  <br/> |An Atom feed that lists all the available PivotTables in the workbook  <br/> |
|/model/PivotTables('[Name]')  <br/> |HTML (default)  <br/> |/model/PivotTables('MyPivotTable)?$format=html  <br/> |An HTML fragment for the requested PivotTable.  <br/> |
|/model/PivotTables('[Name]')  <br/> |Atom  <br/> |/model/PivotTables('MyPivotTable')?$format=atom  <br/> |An Atom entry that contains an XML representation of the data within the PivotTables.  <br/> |
   

> **Note:**
> Excel Services limits the number of ranges that you can include in a URL to 10. If you include more than 10 Ranges in a URL, you will get an error that indicates that the service is unavailable. 
  
    
    


## See also


#### Concepts


  
    
    
 [Basic URI Structure and Path](basic-uri-structure-and-path.md)
