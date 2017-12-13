---
title: URL strings and tokens in SharePoint Add-ins
description: The URL tokens that can be used at the beginning of a URL and inside a URL in a SharePoint Add-in.
ms.date: 12/13/2017
ms.prod: sharepoint
---


# URL strings and tokens in SharePoint Add-ins

> [!IMPORTANT]
> For general information about constructing URLs in SharePoint and the use of tokens in those URLs, see [URLs and tokens in SharePoint](../general-development/urls-and-tokens-in-sharepoint). This topic describes the tokens that are available in SharePoint Add-ins.
 
SharePoint supports the tokens listed in the following tables for use in SharePoint Add-ins.

The tokens in the tables of this section can be used in URLs in a wide variety of situations in development of SharePoint Add-ins, such as in Custom Actions and in links on custom pages. 

In some contexts, some of these tokens cannot be used. Three of the most important places where only a restricted list of tokens can be used are the start page of an add-in, a custom action on the host web, and the **Src** property of an add-in part. These are called out in separate columns, *but this is not an exhaustive list of places where tokens can be used.*

In each table:
- The **StartPage** column specifies whether the token can be used in the **StartPage** element of an add-in manifest. 
- The **Custom Action** column specifies whether the token can be used in the URL of a custom action on a host web. 
- The **Add-in Part** column specifies whether the token can be used in the **Src** property of the add-in part.

## Tokens that can be used at the beginning of a URL in a SharePoint Add-in

|**Token**|**Resolves to**|**StartPage**|**Custom Action**|**Add-in Part**|**Remarks**|
|:-----|:-----|:-----|:-----|:-----|:-----|
|~appWebUrl|The URL of the add-in web of a SharePoint Add-in.|Yes|Yes|Yes|This token should be used only outside an add-in web. Within the add-in web itself, use **~site** for the URL of the add-in web.|
|~controlTemplates|The URL of the ControlTemplates virtual folder for the current website.|No|No|No||
|~hostUrl|The URL of the host web.|No|No|Yes||
|~hostLogoUrl|The URL of the logo of the host web.|No|No|No||
|~layouts|The URL of the Layouts virtual folder for the current website.|No|No|No||
|~remoteAppUrl|The URL of a remote web application in a SharePoint Add-in.|Yes|Yes, in the host web, but No in the add-in web.|Yes|If you are not using Microsoft Office Developer Tools for Visual Studio to develop your SharePoint Add-in, you cannot use **~remoteAppUrl** in the **StartPage** URL. However, when you are using Visual Studio and the tools, you can use this token for any provider-hosted add-in and it is resolved when Visual Studio packages the add-in. In this usage, it is really more of a Visual Studio token than a SharePoint token. It can be used outside the add-in manifest, even when you are not using Microsoft Office Developer Tools for Visual Studio.|
|~site|The URL of the current website.|No|No|Yes||
|~sitecollection|The URL of the parent site collection of the current website.|No|No|Yes||
Except where indicated otherwise, none of the tokens in the next table can be used in the  *path*  portion of the **Src** property value of the add-in part. The **Add-in Part** column refers to their use in the *query string*  portion of the value.
 

<br/> 

## Tokens that can be used inside a URL

|**Token**|**Resolves to**|**StartPage**|**Custom Action**|**Add-in Part**|**Remarks**|
|:-----|:-----|:-----|:-----|:-----|:-----|
|{AppContextToken}|The OAuth context token for the add-in.|No|No|No||
|{AppWebUrl}|The URL of the add-in web in a SharePoint Add-in.|Yes|Yes|Yes|This token should be used only outside an add-in web.<br/>Within the add-in web itself, use **{Site}** for the URL of the add-in web.|
|{ClientTag}|The client cache control number (client tag) for the current website.|Yes|Yes|Yes||
|{HostLogoUrl}|The logo for the host web of a SharePoint Add-in.|Yes|Yes|Yes||
|{HostTitle}|The title of the host web of a SharePoint Add-in.|Yes|Yes|Yes||
|{HostUrl}|The URL of the host web of a SharePoint Add-in.|Yes|Yes|Yes||
|{ItemId}|The ID of an item in a list or library (an integer).|No|Yes|No||
|{ItemUrl}|The URL of the item being acted upon. |No|Yes|No||
|{Language}|The current language/culture of the host web of a SharePoint Add-in.|Yes|Yes|Yes||
|{ListId}|The ID of the current list (a GUID).|No|Yes|No||
|{ProductNumber}|The full build version number of the SharePoint farm.|Yes|Yes|Yes|An example value is "15.0.4433.1011".|
|{RecurrenceId}|The recurrence index of a recurring event.|No|Yes|No|This token is not supported for use in the context menus of list items.|
|{RemoteAppUrl}|The URL of a remote web application in a SharePoint Add-in.|Yes|Yes|Yes||
|{Site}|The URL of the current website.|No|Yes|Yes||
|{SiteCollection}|The URL of the parent site of the current website.|No|Yes|Yes||
|{SiteUrl}|The URL of the current website.|No|Yes|No||
|{Source}|The HTTP Request URL.|No|Yes|No||
|{StandardTokens}|See Remarks.|Yes|Yes|Yes|This combines five other tokens. It initially resolves to `SPHostUrl={HostUrl}&amp;SPAppWebUrl={AppWebUrl}&amp;SPLanguage={Language}&amp;SPClientTag={ClientTag}&amp;SPProductNumber={ProductNumber}` <br/><br/>...and then each of these tokens resolves. If there is no add-in web, the portion `&amp;SPAppWebUrl={AppWebUrl}` is not present.|

## See also
<a name="SP15URLstrings_bk_addlresources"> </a>

-  [Advanced Extranet Support](http://msdn.microsoft.com/library/21d67796-23c5-4339-8f0e-124208d21ab2%28Office.15%29.aspx)
-  [Getting References to Sites, Web Applications, and other Key Objects](http://msdn.microsoft.com/library/8623ef1d-e3cc-426c-84a3-6379e0ae284f%28Office.15%29.aspx)
-  [Working with List Objects and Collections](http://msdn.microsoft.com/library/d4167b10-6f1e-49f1-8b22-16ce20012a27%28Office.15%29.aspx)
-  [Sample Object Model Tasks](http://msdn.microsoft.com/library/94d6898d-6a0f-43a7-ad06-1b27ec6916ea%28Office.15%29.aspx)
    
 

