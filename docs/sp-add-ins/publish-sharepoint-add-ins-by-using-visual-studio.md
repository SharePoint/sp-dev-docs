---
title: Publish SharePoint Add-ins by using Visual Studio
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Publish SharePoint Add-ins by using Visual Studio
Learn how to publish your SharePoint Add-in by using Microsoft Visual Studio 2013 or Visual Studio 2012. If the add-in has an associated web application, you deploy it first. Then, as for all SharePoint Add-ins, you package the SharePoint Add-in and then publish it. You can also optionally choose to submit your add-in for inclusion on the Office Store.
 

 


## Prerequisites
<a name="Prereq"> </a>


 

 

-  [Microsoft Visual Studio 2013](https://www.visualstudio.com/vs/)
    
    -or-
    
     [Visual Studio 2012](https://www.visualstudio.com/vs/) and the Office Developer Tools for Visual Studio. To download the tools, see "Tools" on the [Download page](http://go.microsoft.com/fwlink/?LinkId=234393). (The new Publish Manager is not available in Visual Studio 2012 or earlier versions.)
    
 
- Microsoft SharePoint
    
 

## Publish by using Visual Studio 2013
<a name="VS2013"> </a>

If your provider-hosted SharePoint Add-in has a web application, deploy the files for it first. You then, as for all SharePoint Add-ins, package the SharePoint Add-in and publish it.
 

 

 **Important**  To ensure that your SharePoint Client ID and Client Secret values get published with your web project, which allows your web content to access SharePoint data, publish your SharePoint Add-in project from the  **Publish your add-in** page. You access this page by opening the shortcut menu for the SharePoint Add-in, not the shortcut menu for the web app, and then choosing the **Publish** command.
 


### Step 1: Deploy the web application

Your SharePoint Add-in typically has an associated host web application that you need to deploy to a web server. For more information about how to use the Publish Web wizard, see  [How to: Deploy a Web Project using On-Click Publishing in Visual Studio](http://msdn.microsoft.com/library/dd465337.aspx).
 

 

### To open the Publish your add-in page


- In  **Solution Explorer**, open the shortcut menu for the SharePoint Add-in project, and then choose  **Publish**.
    
    The  **Publish your add-in** page appears.
    
 

### To select or create a profile


- In the  **Current profile** list, choose a profile to import, or choose **<New …>** to create a profile.
    
    A publish profile specifies the server to which you're deploying the web app, the credentials that are needed to log on to the server, the databases to deploy (if applicable), and other deployment options. You can create different publish profiles to fit your needs. For example, you might create one profile for testing and another profile for publishing.
    
    If you choose  **<New …>**, the  **Create publishing profile** wizard appears. You can use this wizard to import a publishing profile from a website hosting provider, such as Azure, or to create a profile and then manually add your server name, credentials, and other settings. If you created a new profile rather than imported an existing profile, you'll need to supply client Id and client secret values, as outlined in [Guidelines for registering SharePoint Add-ins 2013](http://msdn.microsoft.com/library/jj687469.aspx) and [How to: Create Client IDs and secrets in the Microsoft Seller Dashboard](http://msdn.microsoft.com/library/office/jj220036.aspx).
    
    If you plan to submit your SharePoint Add-in to the Office Store, be sure to use client ID and client secret values that are created in the Seller Dashboard. You can use client IDs and client secret values that you generate by using the appregnew.aspx page during the development phase, but add-ins that you submit to the Office Store must use client IDs and client secrets that you get from the Seller Dashboard. Also, you should create the publishing profile on your Azure site and then import it into Visual Studio, rather than creating a profile in the  **Create publishing profile** wizard. When you create a profile in Azure, all of the settings on the **Connection** tab are provided for you in Visual Studio. For more information about how to import or create a publishing profile, see [Creating a Publish Profile](http://msdn.microsoft.com/library/dd465337.aspx#creating_a_profile).
    
     **Tip**  If you can't publish web content directly, you can create a web deploy package that an administrator can deploy to the web for you. To create a web deploy package, create a new profile, choose the  **Connection** tab, and then choose **Web Deploy Package** in the **Publish method** list.

### To deploy your web app project


1. On the  **Publish your add-in** page, choose the **Deploy your web project** button.
    
    The  **Publish Web** dialog box appears.
    
 
2. On the  **Connection** and **Settings** tabs, fill in any missing values.
    
    To change how the files for your SharePoint Add-in are published or if the add-in uses an external database, choose the  **Settings** tab. See the section "Configuring the Settings Tab" in [How to: Deploy a Web Project using On-Click Publishing in Visual Studio](http://msdn.microsoft.com/library/dd465337.aspx).
    
 
3. To review what items will change when the web app is deployed, choose the  **Start Preview** button on the **Preview** tab.
    
 
4. Choose the  **Publish** button to deploy the web app project.
    
 

### Step 2: Package the Add-in


1. On the  **Publish your add-in** page, choose the **Package the add-in** button.
    
    The  **Publish Office and SharePoint Add-ins** wizard appears.
    
 
2. In the  **Where is your website hosted?** text box, enter the URL of the website that will host the content files of your SharePoint Add-in.
    
    You must specify an address that starts with the "https" prefix. See  [Why do my add-ins have to be SSL-secured?](http://msdn.microsoft.com/library/jj591603#bk_q7).
    
    > [!NOTE] 
    > Azure websites automatically provide an https endpoint. If you publish your add-in on an Office Store site or to the Office Store, the address must start with an https prefix. However, if you publish the add-in to an on-premises site, you can use an http prefix.

    In the  **What is the add-in's client ID?** text box, the client ID that you entered in the publishing profile should already appear.
    
    If you've used a placeholder value for the client ID until this point, you must add an actual client ID now. This information is embedded in the .app package and enables your web content to communicate with SharePoint on the live site.
    
 
3. Choose the  **Finish** button.
    
    Visual Studio generates the files that are needed to publish your SharePoint Add-in and then opens the publish output folder. For information about how to install the add-in, see  [Install and manage SharePoint Add-ins 2013](http://technet.microsoft.com/library/fp161232.aspx).
    
 

### Step 3: Publish your SharePoint Add-in on the Office Store

Perform the following procedure if you want to submit your SharePoint Add-in to the Office Store.
 

 

1. On the  **Publish your add-in** page, choose the **Visit the Seller Dashboard** button, and then sign in to your Microsoft Seller Dashboard account.
    
    See  [Use the Seller Dashboard to submit your solution to AppSource](https://docs.microsoft.com/en-us/office/dev/store/use-the-seller-dashboard-to-submit-to-the-office-store).
    
 
2. Choose  **add a new app**, fill out the information, and then submit the add-in to the Office Store. For details, see  [Use the Seller Dashboard to submit your solution to AppSource](https://docs.microsoft.com/en-us/office/dev/store/use-the-seller-dashboard-to-submit-to-the-office-store).
    
 

## Publish by using Visual Studio 2012
<a name="VS2012"> </a>

When you're ready to package your SharePoint Add-in, open the  **Publish Office Add-ins** wizard, which prepares the files in your SharePoint Add-in for publishing.
 

 

### Step 1: Package the SharePoint Add-in


1. In  **Solution Explorer**, open the shortcut menu for the SharePoint Add-in project, and then choose  **Publish**.
    
    The  **Publish Office Add-ins** wizard appears. The type of SharePoint Add-in that you're packaging determines the pages that appear in the wizard. If your add-in will be SharePoint-hosted, only the **Summary** page appears. If your add-in will be provider-hosted, the **Profile** and **Hosting** pages also appear.
    
 
2. If your SharePoint Add-in is provider-hosted, specify a publishing profile name in the  **Which profile do you wish to publish?** list, and then choose the **Next** button.
    
    The publishing profile saves the information that you enter in the  **Hosting** page.
    
 
3. In the  **Where is your website hosted?** list, specify the URL for the web application that will host your SharePoint Add-in.
    
 
4. In the boxes under  **What is the identity of your add-in?**, specify the client ID and client secret for your add-in, and then choose the  **Next** button.
    
    See  [Authorization and authentication of SharePoint Add-ins](authorization-and-authentication-of-sharepoint-add-ins.md).
    
 
5. For all types of SharePoint Add-ins, select the  **Open output folder after successful packaging** check box, if it isn't already selected, and then choose the **Finish** button.
    
    Visual Studio generates all of the files that you need to publish your SharePoint Add-in. You can find these files in the  `app.Publish` folder of your project output folder (for example, `%UserProfile%\Documents\Visual Studio 2012\Projects\MyApp\bin\Debug\app.publish`). That folder will contain a .app file for your SharePoint Add-in and multiple files for the web application (if your SharePoint Add-in is cloud-based). All SharePoint Add-ins include a .app file, which is the add-in manifest to publish the SharePoint Add-in. Provider-hosted SharePoint Add-ins also include files for publishing the host web application.
    
 

### Step 2: Publish the web application

If your SharePoint Add-in is provider-hosted, you'll typically have an associated host web application that you need to publish to a web server. Visual Studio generates a deployment package and a script to help you perform this task.
 

 
The deployment package of the web application project is contained in a compressed (.zip) file in the  `app.publish` folder. In addition to the .zip file, the `app.publish` folder contains the following files:
 

 


|**File**|**Description**|
|:-----|:-----|
| _ProjectName_.deploy.cmd|This file is a command-line batch file that invokes Web Deploy so that you can more easily install the package at a command prompt.|
| _ProjectName_.SetParameters.xml|This file contains parameters that are passed to Web Deploy when you use the deploy.cmd file to install the package. The Visual Studio package settings determine the default value that's specified for each parameter. You can change these values if, for example, you want to install the web application to multiple servers and use different settings for each server.|
| _ProjectName_.SourceManifest.xml|This file contains settings that Visual Studio passes to Web Deploy and that Web Deploy uses to create the web package. Web Deploy requires this file only to create the package. This file isn't used when the package is installed.|
For step-by-step guidance, see  [How to: Install a Deployment Package Using the deploy.cmd File Created by Using Visual Studio](http://go.microsoft.com/fwlink/?LinkID=254954)
 

 

### Step 3: Publish your SharePoint Add-in
<a name="Publish"> </a>

To publish your SharePoint Add-in, upload the add-in manifest file (.app) of your add-in to the Office Store, the Office Add-ins catalog, SharePoint, a file share, or the Exchange catalog. The add-in manifest for your add-in is located in the  `app.publish` folder, such as `%UserProfile%\Documents\Visual Studio 2012\Projects\MyApp\bin\Debug\app.publish`. For more information about how to publish your SharePoint Add-in, see  [Authorization and authentication of SharePoint Add-ins](authorization-and-authentication-of-sharepoint-add-ins.md).
 

 

## See also
<a name="Additional"> </a>


-  [Publish SharePoint Add-ins](publish-sharepoint-add-ins.md)
    
 
-  [Publish your Office Add-in](http://msdn.microsoft.com/library/7f3ae6a0-06e9-438c-8899-bd9f605e6d9e%28Office.15%29.aspx)
    
 

