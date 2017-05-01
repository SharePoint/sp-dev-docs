---
title: URLs and tokens in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: 161418d7-8123-4c4e-91a1-97e43c17f0e6
---



# URLs and tokens in SharePoint 2013
Learn how to formulate URLs and how to use URL tokens in SharePoint 2013.

## Types of URLs in SharePoint 2013
<a name="TypesOfURLs"> </a>

SharePoint 2013 parses URL strings to determine the form of URL based on a specified protocol (for example, **http:**) or on the placement of a forward slash (/) within the string. Depending on the particular member, you can use the following URL forms:
  
    
    

- An **absolute URL** specifies a full path and begins with a protocol. For example, `http://` _domain_or_server_/[ `sites/`] _Web_Site_/ `Lists`/ _List_Title_/ `AllItems.aspx`.
    
  
- A **domain-relative URL** is based on the domain (which might be the name of a server) address and always begins with a forward slash. It specifies a complete path from top-level website to file name. For example, /[ `sites/`] _Web_Site_/ `Lists`/ _List_Title_/ `AllItems.aspx`. 
    
  
- A **website-relative URL** is based on the address of a website object ( [SPWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.aspx) ). It does _not_ begin with a forward slash, and it specifies a complete path from the website address to the file name. For example, `Lists/` _List_Title_/ `AllItems.aspx`.
    
  
- A **URL relative to a file or folder** is based on the folder containing the file. It does not contain _any_ forward slashes. It simply specifies the name of the file. For example, `AllItems.aspx`.
    
  

> **Note:**
> There is no concept of a "site collection-relative URL"; passing such a URL may cause the code to fail. 
  
    
    


## Good practice for image URLs
<a name="GoodPracticeImageURL"> </a>

When you create a URL to an image file that is located in the %ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\TEMPLATE\\LAYOUTS\\1033\\IMAGES directory, specify a path that uses the root website of the site collection, but that does not include a subsite within the path. For example, use /_layouts/images/MyImage.gif for an image file, not /MySubsite/_layouts/images/MyImage.gif. This is because subsite URLs are resolved in different ways depending on where they are used. You can ignore these variations if you always use the root website-relative URL.
  
    
    

## URL tokens in SharePoint 2013
<a name="URLtokens"> </a>

SharePoint 2013 supports the tokens listed in the following tables for use in either SharePoint Add-ins or farm solutions. In addition, some tokens are usable only in apps. For more information about them, see  [URL strings and tokens in SharePoint Add-ins](http://msdn.microsoft.com/library/800ec8cd-a448-46bc-b41e-d4030eeb4048%28Office.15%29.aspx).
  
    
    
The tokens in the tables of this section can be used in URLs in a wide variety of situations in SharePoint development, such as in custom actions and in links on custom pages. In some contexts, some of these tokens cannot be used. Three of the most important places where only a restricted list of tokens can be used are the start page of an app, a custom action on the host web, and the  [Src](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebControls.SPAppIFrame.Src.aspx) property of an app part. These are called out in separate columns, but these three are not an exhaustive list of places where tokens can be used.
  
    
    
The **StartPage** column specifies whether the token can be used in the **StartPage** element of an app manifest. The **Custom Action** column specifies whether the token can be used in the URL of a custom action on a host web. The **App Part** column specifies whether the token can be used in the [Src](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebControls.SPAppIFrame.Src.aspx) property of the app part.
  
    
    

**Tokens that can be used at the beginning of a URL**


|**Token**|**Resolves to**|**StartPage**|**Custom Action**|**App Part**|**Remarks**|
|:-----|:-----|:-----|:-----|:-----|:-----|
|~controlTemplates  <br/> |The URL of the ControlTemplates virtual folder for the current website.  <br/> |No  <br/> |No  <br/> |No  <br/> ||
|~layouts  <br/> |The URL of the Layouts virtual folder for the current website.  <br/> |No  <br/> |No  <br/> |No  <br/> ||
|~site  <br/> |The URL of the current website.  <br/> |No  <br/> |No  <br/> |Yes  <br/> ||
|~sitecollection  <br/> |The URL of the parent site collection of the current website.  <br/> |No  <br/> |No  <br/> |Yes  <br/> ||
   
Except where indicated otherwise, none of these tokens in the next table can be used in the  *path*  portion of the [Src](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebControls.SPAppIFrame.Src.aspx) property value of the app part. The **App Part** column refers to their use in the *query string*  portion of the value.
  
    
    

**Tokens that can be used inside a URL**


|**Token**|**Resolves to**|**StartPage**|**Custom Action**|**App Part**|**Remarks**|
|:-----|:-----|:-----|:-----|:-----|:-----|
|{ControlTemplates}  <br/> |The URL of the ControlTemplates virtual folder for the current website.  <br/> |No  <br/> |No  <br/> |No  <br/> ||
|{ItemId}  <br/> |The ID of an item in a list or library (an integer).  <br/> |No  <br/> |Yes  <br/> |No  <br/> ||
|{ItemUrl}  <br/> |The URL of the item being acted upon.  <br/> |No  <br/> |Yes  <br/> |No  <br/> ||
|{Layouts}  <br/> |The URL of the Layouts virtual folder for the current website.  <br/> |No  <br/> |No  <br/> |No  <br/> ||
|{ListId}  <br/> |The ID of the current list (a GUID).  <br/> |No  <br/> |Yes  <br/> |No  <br/> ||
|{RecurrenceId}  <br/> |The recurrence index of a recurring event.  <br/> |No  <br/> |Yes  <br/> |No  <br/> |This token is not supported for use in the context menus of list items.  <br/> |
|{Site}  <br/> |The URL of the current website.  <br/> |No  <br/> |Yes  <br/> |Yes  <br/> ||
|{SiteCollection}  <br/> |The URL of the parent site of the current website.  <br/> |No  <br/> |Yes  <br/> |Yes  <br/> ||
|{SiteUrl}  <br/> |The URL of the current website.  <br/> |No  <br/> |Yes  <br/> |No  <br/> ||
|{Source}  <br/> |The HTTP Request URL.  <br/> |No  <br/> |Yes  <br/> |No  <br/> ||
   

## Additional resources
<a name="SP15URLS_addlresources"> </a>


-  [Build farm solutions in SharePoint 2013](build-farm-solutions-in-sharepoint.md)
    
  
-  [Advanced Extranet Support](http://msdn.microsoft.com/library/21d67796-23c5-4339-8f0e-124208d21ab2%28Office.15%29.aspx)
    
  
-  [Getting References to Sites, Web Applications, and other Key Objects](http://msdn.microsoft.com/library/8623ef1d-e3cc-426c-84a3-6379e0ae284f%28Office.15%29.aspx)
    
  
-  [Working with List Objects and Collections](http://msdn.microsoft.com/library/d4167b10-6f1e-49f1-8b22-16ce20012a27%28Office.15%29.aspx)
    
  
-  [Sample Object Model Tasks](http://msdn.microsoft.com/library/94d6898d-6a0f-43a7-ad06-1b27ec6916ea%28Office.15%29.aspx)
    
  
