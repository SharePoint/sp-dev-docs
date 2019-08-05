---
title: Set the Bing Maps key at the web and farm level in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 507ed9de-c349-44b5-b182-e838795dd862
localization_priority: Normal
---


# Set the Bing Maps key at the web and farm level in SharePoint

![How to topic](../images/mod_icon_howto.png)

Learn how to set the Bing Maps key programmatically at the web (SharePoint Server and SharePoint Online) and farm(SharePoint Server) level by using the SharePoint client object model and Windows PowerShell, to enable the Bing Maps functionality in SharePoint lists and location-based web and mobile apps.

## Prerequisites for setting the Bing Maps key
<a name="SP15Bing_prereq"> </a>

To follow the steps in this example, you should have the following:
     
- SharePoint - with administrative privileges at farm OR site collection level
- SharePoint Online Management Shell - https://www.microsoft.com/en-us/download/details.aspx?id=35588
- SharePoint Online PnP PowerShell - https://github.com/SharePoint/PnP-PowerShell/
- Visual Studio 2010 or later
- A valid Bing Maps key, which you can obtain from the  [Bing Maps Account Center](https://www.bingmapsportal.com/).
    
    > **Important:**
      > Please note that you are responsible for compliance with terms and conditions applicable to your use of the Bing Maps key, and any necessary disclosures to users of your application regarding data passed to the Bing Maps service. 

## Code example: Set the Bing Maps key at the farm or web level
<a name="SP15Setbing_farm"> </a>

The Bing Maps key can be set at the farm or web level. To set the Bing Maps key at the farm level, you need administrator rights on the server; you can then add the key by using the SharePoint Management Shell. To set the Bing Maps key at the web level, write a console application that uses the SharePoint client object model or leverage SharePoint PnP PowerShell.
  
    
    

> **Tip:**
> The Bing Maps key set at web level has higher precedence order than the Bing Maps key set at farm level. 
  
    
    


### To set the Bing Maps key at the farm level using Windows PowerShell


1. Log on to the SharePoint server as an administrator, and open the SharePoint Management Shell.
    
  
2. Execute the following command: 
    
     `Set-SPBingMapsKey -BingKey "<Enter a valid Bing Maps key>"`
    
    The Bing Maps key is now set at the farm level in SharePoint. 
    
    > [!NOTE]
    > When you use Windows PowerShell, the Bing Maps key can be set only at the farm level. If you want to set the Bing Maps key at the web level, you can set the key programmatically, as shown in the following section. 

### To set the Bing Maps key at the web level with SharePoint PnP PowerShell
1. Open the SharePoint Online Management Shell
2. Connect to the site you want to add/update the Bing Maps key
```cs
Connect-PnPOnline -url "https://TENANT.sharepoint.com/sites/SITEURL"
```
3. Add the Bing Maps Key to the Site Property Bag (Update "YOURKEYVALUE")
```cs
Set-PnPPropertyBagValue -Key "BING_MAPS_KEY" -Value "YOURKEYVALUE"
```
4. If you receive an error regarding NoScript being enabled, you must disable it in the site. Then rerun step 3.
```cs
Set-SPOsite <SiteURL> -DenyAddAndCustomizePages 0
```
    
   > [!NOTE] Ensure you understand the implications of changing a site's NoScript Policy - https://docs.microsoft.com/en-us/sharepoint/allow-or-prevent-custom-script?redirectSourcePath=%252fen-us%252farticle%252fTurn-scripting-capabilities-on-or-off-1f2c515f-5d7e-448a-9fd7-835da935584f


### To set the Bing Maps key at the farm or web level using the client object model with Visual Studio


1. Start Visual Studio.
    
  
2. On the menu bar, choose **File**, **New Project**. The **New Project** dialog box opens.
    
  
3. In the **New Project** dialog box, choose **C#** in the **Installed Templates** box, and then choose the **Console Application** template.
    
  
4. Give the project a name, and then choose the **OK** button.
    
  
5. Visual Studio creates the project. Add a reference to the following assemblies, and choose **OK**.
    
  - Microsoft.SharePoint.Client.dll
    
  
  - Microsoft.SharePoint.Client.Runtime.dll
    
  
6. In the default .cs file, add a **using** directive as follows.
    
     `using Microsoft.SharePoint.Client;`
    
  
7. Add the following code to the Main method in the .cs file.
    
```cs
  
class Program
    {
        static void Main(string[] args)
        {
            SetBingMapsKey();
            Console.WriteLine("Bing Maps set successfully");
        }
     static private void SetBingMapsKey()
        {

            ClientContext context = new ClientContext("<Site Url>");
            Web web = context.Web;
            web.AllProperties["BING_MAPS_KEY"] = "<Valid Bing Maps Key>"
            web.Update();
            context.ExecuteQuery();
        }    
    }

```

8. Replace the <Site Url> and  _<Valid Bing Maps Key>_ with valid values.
    
  
9. Set the target framework in Project Properties as .NET Framework 4.0, and run the example.
    
  
10. The key should now be set at the web level. 
    
  

## Next steps
<a name="SP15Bing_nextsteps"> </a>

To learn more about working with location and map functionality in SharePoint, see the following:
  
    
    

-  [How to: Add a Geolocation column to a list programmatically in SharePoint](how-to-add-a-geolocation-column-to-a-list-programmatically-in-sharepoint.md)
    
  
-  [How to: Extend the Geolocation field type using client-side rendering](how-to-extend-the-geolocation-field-type-using-client-side-rendering.md)
    
  

