---
title: Getting Ranges Using Atom Feed and HTML Fragment
ms.prod: OFFICE365
ms.assetid: 45d4ef08-02d6-48dd-b0ef-a748db1a0c6a
---


# Getting Ranges Using Atom Feed and HTML Fragment

This topic describes two ways to access ranges—Atom feed and HTML fragment, by using the REST API in Excel Services.
  
    
    


> **Note:**
> The Excel Services REST API applies to SharePoint 2013 and SharePoint 2016 on-premises. For Office 365 Education, Business, and Enterprise accounts, use the Excel REST APIs that are part of the  [Microsoft Graph](http://graph.microsoft.io/en-us/docs/api-reference/v1.0/resources/excel
) endpoint.
  
    
    


## Accessing Ranges

The REST API in Excel Services supports two mechanisms for getting ranges. The first is used mainly to enable applications to get to the raw-data of a workbook, that is, the raw numbers or values from a worksheet. The second is to get HTML fragments from inside a browser.
  
    
    
As described in the  [Discovery in Excel Services REST API](discovery-in-excel-services-rest-api.md) topic, the REST URL to the model page using discovery is:
  
    
    



```

http://<ServerName>/_vti_bin/ExcelRest.aspx/<DocumentLibrary>/<FileName>/model
```

Therefore, for a workbook with the file name **sampleWorkbook.xlsx** that is saved to `http://` _<ServerName>_ `/Docs/Documents/sampleWorkbook.xlsx`, following is the URI to the model page:
  
    
    



```
http://<ServerName>/_vti_bin/ExcelRest.aspx/Docs/Documents/sampleWorkbook.xlsx/model
```

Using the discovery mechanism described in  [Discovery in Excel Services REST API](discovery-in-excel-services-rest-api.md), if you click on the **Ranges** Atom feed on the model page on the server, ( `http://` _<ServerName>_ `/_vti_bin/ExcelRest.aspx/Docs/Documents/sampleWorkbook.xlsx/model`), it displays a page that shows all the named ranges in the workbook. The sampleWorkbook.xlsx contains one named range, **SampleNamedRange**, as shown in the following screen shot: 
  
    
    

> **Important:**
> You can also specify arbitrary ranges, and not just the ranges returned by discovery. Colon ":" must be replaced with "|". For example use "A1|G5" instead of "A1:G5". 
  
    
    


> **Note:**
> Characters like "?" and "#" are unsupported. To correctly reference sheet names that contain special characters, the basic guideline is "see what the Excel client does" when referencing a formula to a sheet with special characters and follow that example. 
  
    
    


**Excel Services REST named range discovery**

  
    
    

  
    
    
![Excel Services REST named range discovery](images/159f676e-421e-4190-94a6-cf311f7db2ca.gif)
  
    
    

### Accessing Ranges by Using an Atom Feed

If you click **SampleNamedRange** in the range discovery page, you navigate to the following URL:
  
    
    

```
http://<ServerName>/_vti_bin/ExcelRest.aspx/Docs/Documents/sampleWorkbook.xlsx/model/Ranges('SampleNamedRange')?$format=atom
```

Note that, in Internet Explorer, the resulting page looks like an error, as shown in the following screen shot.
  
    
    

**Excel Services REST range discovery using Atom**

  
    
    

  
    
    
![Excel Services REST range discovery using Atom](images/2d011e17-953f-42b1-97d3-2525372296c1.gif)
  
    
    
Internet Explorer cannot show a single-entry Atom feed item. But viewing the source of the page shows the XML that the feed item contains:
  
    
    



```XML
<?xml version="1.0" encoding="utf-8"?>
<entry xmlns:x="http://schemas.microsoft.com/office/2008/07/excelservices/rest" xmlns:d="http://schemas.microsoft.com/ado/2007/08/dataservice" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns="http://www.w3.org/2005/Atom">
  <title type="text">SampleNamedRange</title>
  <id>http://ServerName/_vti_bin/ExcelRest.aspx/Docs/Documents/sampleWorkbook.xlsx/model/Ranges('SampleNamedRange')</id>
  <updated>2010-01-20T21:28:10Z</updated>
  <author>
    <name />
  </author>
  <link rel="self" href="http://ServerName/_vti_bin/ExcelRest.aspx/Docs/Documents/sampleWorkbook.xlsx/model/Ranges('SampleNamedRange')?$format=atom" title="SampleNamedRange" />
  <category term="ExcelServices.Range" scheme="http://schemas.microsoft.com/ado/2007/08/dataservices/scheme" />
  <content type="application/xml">
    <x:range name="SampleNamedRange">
      <x:row>
        <x:c>
          <x:fv>Performance</x:fv>
        </x:c>
        <x:c>
          <x:v>26</x:v>
          <x:fv>26</x:fv>
        </x:c>
        <x:c />
      </x:row>
      <x:row>
        <x:c>
          <x:fv>Employment</x:fv>
        </x:c>
        <x:c>
          <x:v>42</x:v>
          <x:fv>42</x:fv>
        </x:c>
        <x:c />
      </x:row>
      <x:row>
        <x:c>
          <x:fv>Earnings And Job Quality</x:fv>
        </x:c>
        <x:c>
          <x:v>22</x:v>
          <x:fv>22</x:fv>
        </x:c>
        <x:c />
      </x:row>
    ... XML truncated for brevity. 
      <x:row>
        <x:c>
          <x:fv>Innovation Assets</x:fv>
        </x:c>
        <x:c>
          <x:v>43</x:v>
          <x:fv>43</x:fv>
        </x:c>
        <x:c />
      </x:row>
      <x:row>
        <x:c />
        <x:c>
          <x:fv>State</x:fv>
        </x:c>
        <x:c />
      </x:row>
    </x:range>
  </content>
</entry>
```

The feed item contains XML that represents the data inside the range. Following are the XML elements of interest: 
  
    
    

- **<range>** The range element. Represents the container of the returned range.
    
  
- **<row>** The row element. Represents each row in the range.
    
  
- **<c>** The cell element. Represents each cell in a row.
    
  
- **<fv>** The formatted value element. Represents the value as it is formatted by Excel. If the value is of type string in the workbook, the formatted value element is the only element under **<c>**. 
    
  
- **<v>** The value element. Represents a number value. If the value in the cell is a number instead of a string, the value element contains that information.
    
  
Using XML gives you an easier way to get data out of an Excel range so that you can use it in your application. 
  
    
    

### Accessing Ranges by Using HTML

If you look at the URL to access a named range by using Atom feed, note that the final part of the URL contains a parameter called  `$format`, which is set to  `atom`. This parameter can also take the value of  `html`. If you change the  `atom` value to `html`, the URL returns an HTML fragment instead of an Atom feed. Following is an example of the URL:
  
    
    

```

http://<ServerName>/_vti_bin/ExcelRest.aspx/Docs/Documents/sampleWorkbook.xlsx/model/Ranges('SampleNamedRange')?$format=html
```

In Internet Explorer, the page looks similar to the following figure.
  
    
    

> **Note:**
> This HTML can be directly consumed in an **IFRAME**, or it can be used in JavaScript to create a more seamless experience. 
  
    
    


  
    
    
![Excel Services REST Discovery Get Range Using HTML](images/558e6305-5a42-4b5c-9a70-1116ddcf6637.gif)
  
    
    

  
    
    

  
    
    

## See also


#### Concepts


  
    
    
 [Resources URI for Excel Services REST API](resources-uri-for-excel-services-rest-api.md)
