---
title: Custom word breakers in SharePoint Server 2013
ms.prod: SHAREPOINT
ms.assetid: d18b48d4-987c-4228-9932-30d5b30f86a2
---


# Custom word breakers in SharePoint Server 2013
Learn about word breaking in SharePoint Server 2013. 
Word breaking is one of the key Natural Language Processing (NLP) features that enable search and improve search results (or recall). Word breakers split a stream of text into individual words or tokens on which you can base additional language processing. Word breakers are language-specific. In addition to built-in word breakers, Search in SharePoint 2013 enables the use of custom word breakers so that users can tune word breaking behavior according to their needs. See  [Supported languages for word breaker customizations in SharePoint Server 2013](#SP15_SupportedLanguages) for a list languages supported for word breaker customization.
  
    
    

For information on how to write a word breaker refer to the following articles 
-  [Implementing a Word Breaker](http://msdn.microsoft.com/en-us/library/ms693186%28v=vs.85%29.aspx)
    
  
-  [IWordBreaker interface](http://msdn.microsoft.com/en-us/library/ms691079%28v=vs.85%29.aspx)
    
  

## How to switch to a custom word breaker in SharePoint Server 2013
<a name="SP15wordbreaker_howto"> </a>


> [!CAUTION]
> When you replace existing word breakers, you modify the registry at your own risk. Serious problems might occur if you modify the registry incorrectly by using Registry Editor or by using another method. These problems might require that you reinstall the operating system. Microsoft cannot ensure that these problems can be solved. Switching to a different word breaker might also cause serious problems during indexing and querying. Before you modify the registry, back up the registry and ensure that you know how to restore the registry if a problem occurs. 
  
    
    

Take the following steps to replace the existing word breaker with a custom word breaker or replace the existing word breaker with a word breaker in another language.
  
    
    

1. Open the Registry Editor, as follows:
    
1. Choose **Start**, and then choose **Run**.
    
  
2. In the **Open** dialog box, type **Regedit**, and then choose **OK**.
    
  
2. In Registry Editor, select the following registry subkey:
    
    **HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Office Server\\15.0\\Search\\Setup\\ContentIndexCommon\\LanguageResources\\Default\\** _language from the list below_
    
  
3. In the right pane, open the shortcut menu for the **WBDLLPathOverride** registry value, and then choose **Modify**.
    
  
4. In the **Edit String** dialog box, in the **Value data** box, type the path to your custom word breaker DLL, and then choose **OK**. The new DLL should be located in the same path as the existing DLL that is being replaced.
    
  
5. In the right pane, open the shortcut menu for the **WBreakerClass** registry value, and then choose **Modify**.
    
  
6. In the **Edit String** dialog box, in the **Value data** box, type the class ID of your custom word breaker, and then choose **OK**.
    
  
7. Restart the SharePoint Search Host Controller and SharePoint Server 2013.
    
  
8. Do a full re-crawl.
    
  

## Supported languages for word breaker customizations in SharePoint Server 2013
<a name="SP15_SupportedLanguages"> </a>

The following languages are supported for word breaker customization:
  
    
    
Arabic
  
    
    
Bengali
  
    
    
Bulgarian
  
    
    
Catalan
  
    
    
Chinese (People's Republic of China)
  
    
    
Chinese (Taiwan)
  
    
    
Croatian
  
    
    
Czech
  
    
    
Danish
  
    
    
Dutch (Dutch)
  
    
    
English (United States)
  
    
    
Estonian
  
    
    
Finnish
  
    
    
French (Standard)
  
    
    
German (Standard)
  
    
    
Greek
  
    
    
Gujarati
  
    
    
Hebrew
  
    
    
Hindi
  
    
    
Hungarian
  
    
    
Icelandic
  
    
    
Indonesian
  
    
    
Italian (Default)
  
    
    
Japanese
  
    
    
Kannada
  
    
    
Kazakh
  
    
    
Korean
  
    
    
Latvian
  
    
    
Lithuanian
  
    
    
Malay
  
    
    
Malayalam
  
    
    
Marathi
  
    
    
Norwegian
  
    
    
Polish
  
    
    
Portuguese (Portuguese)
  
    
    
Punjabi
  
    
    
Romanian
  
    
    
Russian
  
    
    
Serbian (Cyrillic)
  
    
    
Slovak
  
    
    
Slovenian
  
    
    
Spanish (Modern Sort)
  
    
    
Swedish
  
    
    
Tamil
  
    
    
Telugu
  
    
    
Thai
  
    
    
Turkish
  
    
    
Ukrainian
  
    
    
Urdu
  
    
    
Vietnamese
  
    
    

## Additional resources
<a name="SP15wordbreakers_addresources"> </a>


-  [Configure search in SharePoint 2013](configure-search-in-sharepoint.md)
    
  
-  [Implementing a Word Breaker](http://msdn.microsoft.com/en-us/library/ms693186%28v=vs.85%29.aspx)
    
  
-  [IWordBreaker interface](http://msdn.microsoft.com/en-us/library/ms691079%28v=vs.85%29.aspx)
    
  

