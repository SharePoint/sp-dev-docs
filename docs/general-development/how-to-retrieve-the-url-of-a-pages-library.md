---
title: Retrieve the URL of a Pages library
description: Learn how to retrieve the URL for the pages list for a publishing web in a site collection that differs from the current context.
ms.date: 04/24/2017
ms.assetid: d9922e4b-4948-4c4a-a8ca-1623168143a3
ms.localizationpriority: medium
---

# Retrieve the URL of a Pages library

Learn how to retrieve the URL for the pages list for a publishing web in a site collection that differs from the current context.

## Core concepts to know for retrieving the URL of a Pages list

When developing custom applications for publishing sites, you may notice that the [PublishingWeb](/previous-versions/office/sharepoint-server/ms562424(v=office.15)) object model doesn't expose a way to retrieve the URL for the Pages list of a publishing web in a site collection that differs from the current context. Although the **PublishingWeb** class wraps the [SPWeb](/previous-versions/office/sharepoint-server/ms473942(v=office.15)) class for instances that have the publishing feature activated, the class isn't intended to be used to instantiate **SPWeb** objects outside of the current context.

If you need to retrieve the URL for the Pages list for a different web application, you can query the [Properties](/previous-versions/office/sharepoint-server/ms416105(v=office.15)) property. Since the [PublishingWeb](/previous-versions/office/sharepoint-server/ms562424(v=office.15)) object is the [SPWeb](/previous-versions/office/sharepoint-server/ms473942(v=office.15)) object of a publishing site, you can query the [Properties](/previous-versions/office/sharepoint-server/ms416105(v=office.15)) property and write its contents to a console application. If the entry `Key = vti_pageslistname, Value = {the URL to the Pages library}` is returned in the console, *{the URL to the Pages library}* is the Pages list URL.

**Table 1. Core concepts for retrieving the URL of a Pages library**

|**Article title**|**Description**|
|:-----|:-----|
|Pages Library  |A document library that contains all the content pages for a publishing site.  |
| [SPWeb](/previous-versions/office/sharepoint-server/ms473942(v=office.15)) |Represents a SharePoint Foundation website.  |
| [Properties](/previous-versions/office/sharepoint-server/ms416105(v=office.15)) |Gets a [SPPropertyBag](/previous-versions/office/sharepoint-server/ms413646(v=office.15)) object with metadata for the current website. |
| [SPPropertyBag](/previous-versions/office/sharepoint-server/ms413646(v=office.15)) |Stores arbitrary key and value pairs that contain custom property settings.  |
| [PublishingWeb](/previous-versions/office/sharepoint-server/ms562424(v=office.15)) |Provides publishing behavior for an instance of **SPWeb** that supports publishing. |

## Retrieve the URL of a Pages list for a publishing web in a site collection that differs from the current context

This example console application accesses the [Properties](/previous-versions/office/sharepoint-server/ms416105(v=office.15)) property, iterates through the collection, and writes each key/value pair to the console.

### To query the SPWeb.Properties property for the URL to the Pages list

1. Write the console application.
1. View the output in the console.

## Example: Query SPWeb.Properties property for the URL to the Pages list

The application queries the [SPPropertyBag](/previous-versions/office/sharepoint-server/ms413646(v=office.15)) object, iterates through its dictionary entries, and writes those entries to the console.

```csharp
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

```text
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

## See also

- [Build sites for SharePoint](build-sites-for-sharepoint.md)
