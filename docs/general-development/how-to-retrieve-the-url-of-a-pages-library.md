---
title: How to Retrieve the URL of a Pages library
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: d9922e4b-4948-4c4a-a8ca-1623168143a3
---


# How to: Retrieve the URL of a Pages library
Learn how to retrieve the URL for the pages list for a publishing web in a site collection that differs from the current context.
## Core concepts to know for retrieving the URL of a Pages list
<a name="SP15_Core_Concepts_URL_MP"> </a>

When developing custom applications for publishing sites, you may notice that the  [PublishingWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.Publishing.PublishingWeb.aspx) object model does not expose a way to retrieve the URL for the Pages list of a publishing web in a site collection that differs from the current context. Although the **PublishingWeb** class wraps the [SPWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.aspx) class for instances that have the publishing feature activated, the class is not intended to be used to instantiate **SPWeb** objects outside of the current context.
  
    
    
If you need to retrieve the URL for the Pages list for a different web application, you can query the  [Properties](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.Properties.aspx) property. Since the [PublishingWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.Publishing.PublishingWeb.aspx) object is the [SPWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.aspx) object of a publishing site, you can query the [Properties](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.Properties.aspx) property and write its contents to a console application. If the entry `Key = vti_pageslistname, Value = {the URL to the Pages library}` is returned in the console, *{the URL to the Pages library}*  is the Pages list URL.
  
    
    

**Table 1. Core concepts for retrieving the URL of a Pages library**


|**Article title**|**Description**|
|:-----|:-----|
|Pages Library  <br/> |A document library that contains all the content pages for a publishing site.  <br/> |
| [SPWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.aspx) <br/> |Represents a SharePoint Foundation website.  <br/> |
| [Properties](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.Properties.aspx) <br/> |Gets a  [SPPropertyBag](https://msdn.microsoft.com/library/Microsoft.SharePoint.Utilities.SPPropertyBag.aspx) object with metadata for the current website. <br/> |
| [SPPropertyBag](https://msdn.microsoft.com/library/Microsoft.SharePoint.Utilities.SPPropertyBag.aspx) <br/> |Stores arbitrary key and value pairs that contain custom property settings.  <br/> |
| [PublishingWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.Publishing.PublishingWeb.aspx) <br/> |Provides publishing behavior for an instance of **SPWeb** that supports publishing. <br/> |
   

## Retrieve the URL of a Pages list for a publishing web in a site collection that differs from the current context
<a name="SP15_Code_URL_Pages_List"> </a>

This example console application accesses the  [Properties](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.Properties.aspx) property, iterates through the collection, and writes each key/value pair to the console.
  
    
    

### To query the SPWeb.Properties property for the URL to the Pages list


1. Write the console application.
    
  
2. View the output in the console.
    
  

## Example: Query SPWeb.Properties property for the URL to the Pages list
<a name="SP15_Example_SPWeb_Properties"> </a>

The application queries the  [SPPropertyBag](https://msdn.microsoft.com/library/Microsoft.SharePoint.Utilities.SPPropertyBag.aspx) object, iterates through its dictionary entries, and writes those entries to the console.
  
    
    

```cs

using System;
using System.Collections;
using Microsoft.SharePoint;
using Microsoft.SharePoint.Utilities;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            using (SPSite site = new SPSite("http://localhost"))
            {
                using (SPWeb web = site.OpenWeb())
                {
                    SPPropertyBag props = web.Properties;
                    foreach (DictionaryEntry de in props)
                    {
                        Console.WriteLine("Key = {0}, Value = {1}", de.Key, de.Value);
                    }
                }
            }
            Console.ReadLine();
        }
    }
}

```

The output that this application prints to the console varies from website to website, but it might look like the following:
  
    
    



```

Key = vti_associatemembergroup, Value = 5
Key = vti_extenderversion, Value = 14.0.0.4016
Key = vti_associatevisitorgroup, Value = 4
Key = vti_associategroups, Value = 5;4;3
Key = vti_createdassociategroups, Value = 3;4;5
Key = vti_siteusagetotalbandwidth, Value = 547
Key = vti_siteusagetotalvisits, Value = 9
Key = vti_associateownergroup, Value = 3
Key = vti_defaultlanguage, Value = en-us
Key = vti_pageslistname, Value = {the URL to the Pages list}
```


## Additional resources
<a name="bk_addresources"> </a>


-  [Build sites for SharePoint](build-sites-for-sharepoint.md)
    
  

