---
title: Set up a development environment for SharePoint Add-ins on Office 365
description: Install Visual Studio and sign up for an Office 365 developer subscription.
ms.date: 03/14/2018
ms.prod: sharepoint
---


# Set up a development environment for SharePoint Add-ins on Office 365

To get an understanding of your options before you carry out any procedures in this article, see [Tools and environments for developing SharePoint Add-ins](tools-and-environments-for-developing-sharepoint-add-ins.md). 

If you are not sure what kinds of SharePoint Add-ins you want to create, see [SharePoint Add-ins](sharepoint-add-ins.md).
 
<a name="devenv_vs"> </a>

## Install Visual Studio and tools on your computer

- If you don't already have **Visual Studio** 2013 or later installed, install it by using the instructions at [Install Visual Studio](https://docs.microsoft.com/en-us/visualstudio/install/install-visual-studio). We recommend using the [latest version from the Microsoft Download Center](https://www.visualstudio.com/downloads/download-visual-studio-vs).
 
- Visual Studio includes the **Microsoft Office Developer Tools for Visual Studio**. Sometimes a version of the tools is released between updates of Visual Studio. To be sure that you have the latest version of the tools, run the [installer for Office Developer Tools for Visual Studio 2013](http://aka.ms/OfficeDevToolsForVS2013), or the [installer for Office Developer Tools for Visual Studio 2015](http://aka.ms/OfficeDevToolsForVS2015). 

Reference [earlier versions of Visual Studio](http://msdn.microsoft.com/library/da049020-cfda-40d7-8ff4-7492772b620f.aspx) or other [Visual Studio documentation](https://docs.microsoft.com/en-us/visualstudio/). 

### Verbose logging in Visual Studio

Follow these steps if you want to turn on verbose logging:

1. Open the registry, and go to **HKEY_CURRENT_USER\Software\Microsoft\VisualStudio\ _nn.n_\SharePointTools**, where _nn.n_ is the version of Visual Studio, such as 12.0 or 14.0.

2. Add a DWORD key named **EnableDiagnostics**.

3. Give the key the value **1**.

The registry path will change in future versions of Visual Studio.


<a name="o365_signup"> </a>

## Sign up for an Office 365 developer subscription

> [!NOTE]
> You might already have access to an Office 365 developer subscription: 
> - **Are you a Visual Studio (MSDN) subscriber?** Visual Studio Ultimate and Visual Studio Premium with MSDN subscribers receive an Office 365 developer subscription as a benefit. [Redeem your benefit today](https://msdn.microsoft.com/subscriptions/manage/default.aspx). 
> - **Do you have one of the following Office 365 subscription plans?** If so, see [Create a developer site on an existing Office 365 subscription](create-a-developer-site-on-an-existing-office-365-subscription.md). 

To get an Office 365 plan: 

- [Sign up for an Office 365 developer subscription through the Office 365 Developer Program](https://developer.microsoft.com/en-us/office/dev-program).

- See the [Office 365 Developer Program documentation](https://docs.microsoft.com/en-us/office/developer-program/office-365-developer-program) for step-by-step instructions about how to join the Office 365 Developer Program and sign up and configure your subscription. 

### Open your developer site 
 
Select the **Build Add-ins** link in the upper-left corner of the page to open your developer site. You should see a site that looks like the one in the following figure. The **Add-ins in Testing** list on the page confirms that the website was made with the SharePoint Developer Site template. If you see a regular team site instead, wait a few minutes and then restart your site.
    
> [!NOTE]
> Make a note of the site's URL; it's used when you create SharePoint Add-in projects in Visual Studio.

**Your developer site home page with the Add-ins in Testing list**

![Screenshot that shows the developer site homepage.](../images/SP15_DeveloperSiteHome_border.png)
 

## See also
<a name="SP15SetupSPO365_bk_addlresources"> </a>

- [SharePoint Add-ins](sharepoint-add-ins.md)
- [Get started creating provider-hosted SharePoint Add-ins](get-started-creating-provider-hosted-sharepoint-add-ins.md)
- [Get started creating SharePoint-hosted SharePoint Add-ins](get-started-creating-sharepoint-hosted-sharepoint-add-ins.md) 

    
 
