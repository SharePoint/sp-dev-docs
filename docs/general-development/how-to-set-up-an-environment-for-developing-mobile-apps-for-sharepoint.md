---
title: How to Set up an environment for developing mobile apps for SharePoint
ms.prod: SHAREPOINT
ms.assetid: acaf556d-e20d-478d-8c59-2efd8efb9dcb
---


# How to: Set up an environment for developing mobile apps for SharePoint
Learn about the system requirements and configuring a development environment for SharePoint mobility projects.
A minimal configuration for working with SharePoint mobility projects requires a server running SharePoint (or a SharePoint Online account) and a development environment on a separate client operating system. Installing SharePoint on client operating systems (such as Windows 7) is not supported, and installing the tools necessary for Windows Phone development is not supported on server operating systems (such as Windows Server 2008).
  
    
    


## Windows Phone development projects and SharePoint Server
<a name="SP15Setupmobile_winphone"> </a>

To create and test Windows Phone apps that interact with SharePoint, you need access to a server running SharePoint or a SharePoint Online account, and you need sufficient permissions on the sites and lists you intend to use in your solutions. We recommend that you use an installation of SharePoint Server that is dedicated to testing and development as a target server while you develop your projects. Use SharePoint Server in a production environment as your target server only after your developed solution has undergone sufficient testing.
  
    
    
For information on installing and configuring SharePoint, see the documentation in the  [SharePoint Products](http://technet.microsoft.com/en-us/library/ee428287.aspx) section of the Microsoft TechNet Library. For information on using SharePoint Online in your development solutions, visit the [SharePoint Online Developer Resource Center](http://msdn.microsoft.com/en-us/sharepoint/gg153540.aspx).
  
    
    
For the code samples in this documentation, it is assumed that a developer working with the sample has or can obtain sufficient permissions on SharePoint sites and lists to be able to add, edit, and delete data.
  
    
    

## Configure a client development environment for SharePoint mobility projects
<a name="SP15Setupmobile_configure"> </a>

To develop SharePoint Add-ins for use on Windows Phone devices, you need to set up your development tools on a computer that is running a client operating system, not a server operating system.
  
    
    

### Configuring Windows Phone SDK 8.0

To develop SharePoint Add-ins for use on Windows Phone 8, you need to set up your development tools on a computer that is running Windows 8 64-bit (x64) client versions or Windows 8 Pro. The Windows Phone 8 Emulator requires Windows 8 Pro, and requires a processor that supports Second Level Address Translation (SLAT).
  
    
    

1. On a computer with a supported client operating system, install  [Windows Phone SDK 8.0](http://www.microsoft.com/en-us/download/details.aspx?id=35471). The Windows Phone Software Development Kit (SDK) 8.0 provides you with the tools that you need to develop apps and games for Windows Phone 8 and Windows Phone 7.5.
    
    The Windows Phone SDK 8.0 is a full-featured development environment to use for building apps and games for Windows Phone 8.0 and Windows Phone 7.5. The Windows Phone SDK provides a stand-alone Visual Studio Express 2012 edition for Windows Phone or works as an add-in to Visual Studio 2012 Professional, Premium or Ultimate editions. With the SDK, you can use your existing programming skills and code to build managed or native code apps. In addition, the SDK includes multiple emulators and additional tools for profiling and testing your Windows Phone app under real-world conditions.
    
    > **Note:**
      > If your computer meets the hardware and operating system requirements, but does not meet the requirements for the Windows Phone 8 Emulator, the Windows Phone SDK 8.0 will install and run. However, the Windows Phone 8 Emulator will not function and you will not be able to deploy or test apps on the Windows Phone 8 Emulator. For information about the system requirements for running the Windows Phone Emulator, see  [Setup and System Requirements for Windows Phone Emulator](http://msdn.microsoft.com/en-us/library/ff626524). 
2. Install  [Microsoft SharePoint SDK for Windows Phone 8](http://www.microsoft.com/en-us/download/details.aspx?id=36818).
    
    The SharePoint SDK for Windows Phone installs two Silverlight for Windows Phone templates (in addition to those installed by the Windows Phone SDK): the Windows Phone Empty SharePoint Application template and the Windows Phone SharePoint List Application template. The SDK also installs SharePoint CSOM libraries, an authentication library, and Windows Phone project templates, and it now supports NTLM authentication. You can use the bundled APIs and templates to build Windows Phone 8 applications against SharePoint.
    
    Additionally, the SharePoint SDK for Windows Phone installs several supporting run-time assemblies (in  `%ProgramFiles(x86)%\\Microsoft SDKs\\SharePoint\\v15.0\\Phone\\v8.0\\Libraries` for a standard installation).
    
  - Microsoft.SharePoint.Client.Phone.dll
    
  
  - Microsoft.SharePoint.Client.Phone.Runtime.dll
    
  
  - Microsoft.SharePoint.Client.Phone.Auth.UI
    
  
  - Microsoft.SharePoint.Phone.Application.dll
    
  

    > **Note:**
      > The templates in the SharePoint SDK for Windows Phone are currently available for C# projects only. 
For more information about the templates in SharePoint SDK for Windows Phone, see  [Overview of Windows Phone SharePoint application templates in Visual Studio](overview-of-windows-phone-sharepoint-application-templates-in-visual-studio.md).
  
    
    

### Configuring Windows Phone SDK 7.1

To develop SharePoint Add-ins for use on Windows Phone 7, you need to set up your development tools on a computer that is running Windows 7 (32-bit or 64-bit) or Windows Vista Service Pack 2 (32-bit or 64-bit). The Windows Phone Software Development Kit (SDK) 7.1 is not supported on Windows Server 2008 or on Windows XP.
  
    
    

1. On a computer with a supported client operating system, install  [Windows Phone SDK 7.1](http://www.microsoft.com/en-us/download/details.aspx?id=27570).
    
    > **Note:**
      > An earlier version of the Windows Phone SDK was named the Windows Phone Developer Tools. 

    The Windows Phone SDK installs Microsoft Visual Studio 2010 Express for Windows Phone, the Windows Phone Emulator, XNA Game Studio, and Microsoft Expression Blend for Windows Phone. Visual Studio 2010 Express for Windows Phone is a suitable development environment for most Windows Phone solutions. You can also use Visual Studio 2010 Professional as your preferred development environment, but you still need to install the Windows Phone SDK, which installs the necessary add-ins to Visual Studio. (The Windows Phone SDK is not currently supported for use with Visual Studio 2012.)
    
    For information on additional system requirements and instructions for installing the Windows Phone SDK, see  [Installing the Windows Phone SDK](http://msdn.microsoft.com/en-us/library/ff402530). For information about the system requirements for running the Windows Phone Emulator, see  [Setup and System Requirements for Windows Phone Emulator](http://msdn.microsoft.com/en-us/library/ff626524).
    
  
2. Install  [Microsoft SharePoint SDK for Windows Phone 7.1](http://www.microsoft.com/en-us/download/details.aspx?id=30476).
    
    The SharePoint SDK for Windows Phone installs two Silverlight for Windows Phone templates (in addition to those installed by the Windows Phone SDK): the Windows Phone Empty SharePoint Application template and the Windows Phone SharePoint List Application template.
    
    Additionally, the SharePoint SDK for Windows Phone installs several supporting run-time assemblies (in  `%ProgramFiles(x86)%\\Microsoft SDKs\\SharePoint\\v15.0\\Phone\\v7.1\\Libraries` for a standard installation).
    
  - Microsoft.SharePoint.Client.Phone.dll
    
  
  - Microsoft.SharePoint.Client.Phone.Runtime.dll
    
  
  - Microsoft.SharePoint.Client.Phone.Auth.UI
    
  
  - Microsoft.SharePoint.Phone.Application.dll
    
  

    > **Note:**
      > The templates in the SharePoint SDK for Windows Phone are currently available for C# projects only. 
For more information about the templates in SharePoint SDK for Windows Phone, see  [Overview of Windows Phone SharePoint application templates in Visual Studio](overview-of-windows-phone-sharepoint-application-templates-in-visual-studio.md).
  
    
    

## Additional resources
<a name="SP15Setupmobile_addlresources"> </a>


-  [Build Windows Phone apps that access SharePoint](build-windows-phone-apps-that-access-sharepoint.md)
    
  
-  [Windows Phone SDK 8.0](http://www.microsoft.com/en-us/download/details.aspx?id=35471)
    
  
-  [Microsoft SharePoint SDK for Windows Phone 8](http://www.microsoft.com/en-us/download/details.aspx?id=36818)
    
  
-  [Windows Phone SDK 7.1](http://www.microsoft.com/en-us/download/details.aspx?id=27570)
    
  
-  [Microsoft SharePoint SDK for Windows Phone 7.1](http://www.microsoft.com/en-us/download/details.aspx?id=30476)
    
  

