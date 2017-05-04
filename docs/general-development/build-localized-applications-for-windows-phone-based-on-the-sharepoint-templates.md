---
title: Build localized applications for Windows Phone based on the SharePoint templates
ms.prod: SHAREPOINT
ms.assetid: c12d7fd4-8c6b-446b-970b-1eb0e5d0a9b2
---


# Build localized applications for Windows Phone based on the SharePoint templates
Learn how building a localizable Windows Phone app using the new SharePoint templates is different from building one using other Windows Phone templates.
The SharePoint SDK for Windows Phone 7.1 installs Windows Phone project templates, which you can use to build Windows Phone 7.1 applications against SharePoint or SharePoint 2010. For more information, see  [Overview of Windows Phone SharePoint application templates in Visual Studio](overview-of-windows-phone-sharepoint-application-templates-in-visual-studio). 
  
    
    

Visual Studio uses language-specific resource files to create assemblies that allow your mobile application to support many languages. For more information about this process, see  [Packaging and Deploying Resources in Desktop Apps](http://msdn.microsoft.com/library/b224d7c0-35f8-4e82-a705-dd76795e8d16%28Office.15%29.aspx).
> **Important:**
> If you plan to localize your application for East Asian languages, be sure to read the "Fonts and Your Application" section of  [Font Support for Windows Phone](http://msdn.microsoft.com/library/b0d855ad-3fd2-4872-9a88-7f5d0a270ff9%28Office.15%29.aspx)
  
    
    


## Differences when building localized applications for Windows Phone using the SharePoint templates

Building a localizable Windows Phone app using the new SharePoint templates is slightly different from building one using other Windows Phone templates. When you use the SharePoint templates, the **SupportedCultures** element requires a slightly different format. For example, in a standard Windows Phone app that uses English (United States) for its default culture but also supports German (Germany) and Spanish (Spain), the **SupportedCultures** element appears as follows:
  
    
    
 `<SupportedCultures>de-DE;es-ES;</SupportedCultures>`
  
    
    
This format does not work when you build a localized Windows Phone app that is based on the SharePoint templates. Instead, locate the **SupportedCultures** element in the .csproj file and add the names of each culture (language) that your application needs to support (other than the default culture). Separate the names using semicolons. You should have an entry for each .resx file that is in the project.
  
    
    
For the previous example, the **SupportedCultures** element should appear as follows:
  
    
    
 `<SupportedCultures>de;es;</SupportedCultures>`
  
    
    
To see a step-by-step process of how to build a localized application for Windows Phone, see  [How to: Build a Localized Application for Windows Phone](http://msdn.microsoft.com/library/9306a6ed-6efb-4f32-b850-d2e508431eeb%28Office.15%29.aspx).
  
    
    

## Additional resources
<a name="bk_addresources"> </a>


-  [Build Windows Phone apps that access SharePoint](build-windows-phone-apps-that-access-sharepoint)
    
  
-  [How to: Build a Localized Application for Windows Phone](http://msdn.microsoft.com/library/9306a6ed-6efb-4f32-b850-d2e508431eeb%28Office.15%29.aspx).
    
  
-  [Globalization and Localization for Windows Phone](http://msdn.microsoft.com/library/e82118a4-6247-4d75-a16f-749677349be4%28Office.15%29.aspx)
    
  

  
    
    

