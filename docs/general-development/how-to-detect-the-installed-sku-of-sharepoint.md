---
title: Detect the installed SKU of SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: d5d84d6f-6a8e-4ead-9296-7025baf1e154
---


# Detect the installed SKU of SharePoint

If the behavior of your solutions depends on the locally installed SKU of SharePoint or Project Server 2013, use the code example in this article to find the SKU information you need.

## Detect the installed SKU of SharePoint or Project Server 2013 by using code
<a name="SP15DetectSKU_detect"> </a>

The following code example demonstrates how to retrieve the registry key of the installed SKU of SharePoint, Microsoft Project Server 2013, and other Office server products, and how to match the SKU with a hash table that stores the names and keys for all of the known SKUs of these products. The console output displays the name of the installed SKU.
  
    
    

```cs

using System;
using System.Collections;
using Microsoft.Win32;


namespace GetInstalledSharePointSku
{
    class Program
    {
        internal static Hashtable _products;

        public static Hashtable SharePointProducts
        {
            get 
            {
                if (_products == null)
                {
                    _products = new Hashtable();

                    _products.Add("35466B1A-B17B-4DFB-A703-F74E2A1F5F5E", "Project Server 2013");
                    _products.Add("BC7BAF08-4D97-462C-8411-341052402E71", " Project Server 2013 Preview");

                    _products.Add("C5D855EE-F32B-4A1C-97A8-F0A28CE02F9C", "SharePoint");
                    _products.Add("CBF97833-C73A-4BAF-9ED3-D47B3CFF51BE", "SharePoint Preview");
                    _products.Add("B7D84C2B-0754-49E4-B7BE-7EE321DCE0A9", "SharePoint Enterprise");
                    _products.Add("298A586A-E3C1-42F0-AFE0-4BCFDC2E7CD0", "SharePoint Enterprise Preview");

                    _products.Add("D6B57A0D-AE69-4A3E-B031-1F993EE52EDC ", "Microsoft Office Online");
                    _products.Add("9FF54EBC-8C12-47D7-854F-3865D4BE8118", "SharePoint Foundation 2013");
                }
                
                return _products;
            }
        }

        private const String SharePointProductsRegistryPath = @"SOFTWARE\\Microsoft\\Shared Tools\\Web Server Extensions\\15.0\\WSS\\InstalledProducts\\";

        static void Main(string[] args)
        {
            try
            {
                //Open the registry key in read-only mode.
                using (RegistryKey key = Registry.LocalMachine.OpenSubKey(SharePointProductsRegistryPath, false))
                {
                    //Get all of the installed product code/SKUId pairs.
                    foreach (String value in key.GetValueNames())
                    {
                        try
                        {
                            //Get the SKUId and see whether it is a known product.
                            String SKUId = key.GetValue(value) as String;

                            if (SharePointProducts[SKUId] != null)
                            {
                                Console.WriteLine("Product Installed: {0}", SharePointProducts[SKUId]);
                            }
                            else
                            {
                                Console.WriteLine("Unknown Product: {0}", SKUId);
                            }
                        }
                        catch (Exception e)
                        {
                            Console.WriteLine("Could not read key exception was {0}", e.Message);
                        }
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Could not open key exception was {0}", e.Message);
            }
            Console.Read();
        }
    }
}
```


## See also
<a name="bk_SP15DetectSKUaddresources"> </a>

-  [What's new for developers in SharePoint](what-s-new-for-developers-in-sharepoint.md)
    
  
-  [SharePoint Developer Blog](http://blogs.msdn.com/b/sharepointdev/)
    
  
-  [SharePoint Stack Exchange](http://sharepoint.stackexchange.com/)
    
  

