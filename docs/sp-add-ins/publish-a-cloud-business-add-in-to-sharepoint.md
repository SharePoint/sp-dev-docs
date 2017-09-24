---
title: Publish a cloud business add-in to SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Publish a cloud business add-in to SharePoint
You can publish your cloud business add-in as a provider-hosted SharePoint add-in. A provider-hosted add-in gives you the flexibility of deploying your web app and database to an on-premise SharePoint site, to Microsoft Azure, or to a third-party hosting site. After you publish your add-in, others can run it from SharePoint on their computers and mobile devices.
 
You can publish your add-in directly to a site using WebDeploy, or you can create a package for your add-in that can be deployed to multiple servers.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 


## To publish an add-in
<a name="publish"> </a>


1. In  **Solution Explorer**, open the shortcut menu for the top-level application node as shown in Figure 1, and then choose  **Publish**.
    
    **Figure 1. The top-level node**

 

  ![The IncidentManager node](../images/CBA_IM_18.PNG)
 

 

 
2. In the LightSwitch Publish Application Wizard, on the  **SharePoint Options** page, choose the **Provider-hosted** option button, and then choose **Next**.
    
 
3. On the  **Application Server Configuration** page, choose the **IIS Server** option button, and then choose **Next**.
    
     **Note**  If you have a publish settings (.publishsettings or .pubxml) file that was created for another add-in, you can use that file to provide the rest of the information that you need for publishing. If so, choose the  **Import Settings** button in the wizard.
4. On the  **Publish Output** page, choose the **Publish directly to a server now** option button, and then choose **Next**.
    
 
5. On the  **Publish Settings** page, in the **Service URL** text box, enter the URL for the server where you want to publish your add-in.
    
    If you're publishing to a hosting company, the company provides this value. It can be in any of the following formats:
    
      -  _HostingCompanyURL_ (for example, `contoso.com`)
    
 
  -  `https://` _HostingCompanyURL_ (for example, `https://contoso.com`)
    
 
  -  `https://` _HostingCompanyURL_ `:8172/msdeploy.axd` (for example, `https://contoso.com:8172/msdeploy.axd`)
    
 

    If you're publishing to Internet Information Services (IIS) on your own computer for testing, enter  `localhost` or the name of your computer.
    
    If you're publishing to a server on your own network, enter one of these URLs:
    
      -  `http://` _ServerName_
    
 
  -  `http://` _ServerName_ `/msdeployagentservice`
    
 

     **Note**  If you're publishing through a firewall, you might have to open port 8172.
6. In the  **Site/application** text box, enter the names of the IIS website and your add-in.
    
    If you're publishing to a hosting company, the company provides this value. It's typically either a domain name (for example,  `contoso.com`) or a domain and add-in name (for example,  `contoso.com/MyApp`).
    
    If you're publishing to IIS on your own computer for testing, or you're publishing to a server on your internal network, enter the site and add-in name as they appear in IIS Manager. For example, if you're publishing the add-in MyApp to the default website in IIS, enter Default Web Site/MyApp.
    
     **Note**  If you're publishing to an existing web folder and want to remove any existing content, select the  **Remove additional files at destination** check box.
7. In the  **User Name** and **Password** text boxes, enter credentials for an account that has sufficient authority to perform deployment tasks on the destination web server, and then choose **Next**.
    
    If you're publishing to a hosting company, the company provides these values.
    
 
8. On the  **Security Settings** page, choose the **Yes, users must connect using HTTPS** option button, and then choose **Next**.
    
 
9. On the  **Data connections** page, on the **Database Connections** tab, enter the administrator and user connection strings for the database server where you want to publish your add-in's database.
    
     **Note**  The database doesn't have to be located on the server where you are publishing the add-in.
10. On the  **Attached Data Sources** tab, update the connection strings for any additional connections as needed, and then choose **Next**.
    
 
11. On the  **Provider Hosting** page, in the **Where is your LightSwitch application hosted** text box, enter the full URL for your add-in.
    
    In most cases this URL will be the same as the  **Service URL** and **Site/application** values that you entered earlier (for example, `https://contoso.com/MyApplication`).
    
 
12. Enter the  **Client ID** and **Client Secret** values for your add-in.
    
    You can get these values from the  **appregnew** page of your SharePoint site or from the Seller dashboard. See [Guidelines for registering SharePoint Add-ins 2013](http://msdn.microsoft.com/en-us/library/office/jj687469%28v=office.15%29.aspx).
    
 
13. Choose  **Publish** to publish your add-in.
    
    When your add-in is published,  **File Explorer** opens and displays the **Publish** directory for your project.
    
 

## To package an add-in
<a name="package"> </a>


1. In  **Solution Explorer**, open the shortcut menu for the top-level application node as shown in Figure 1, and then choose  **Publish**.
    
    **Figure 1. The top-level node**

 

  ![The IncidentManager node](../images/CBA_IM_18.PNG)
 

    
    
 
2. In the LightSwitch Publish Application Wizard, on the  **SharePoint Options** page, choose the **Provider-hosted** option button, and then choose **Next**.
    
 
3. On the  **Application Server Configuration** page, choose the **IIS Server** option button, and then choose **Next**.
    
     **Note**  If you have a publish settings (.publishsettings or .pubxml) file that was created for another add-in, you can use that file to provide the rest of the information that you need for publishing. If so, choose the  **Import Settings** button in the wizard.
4. On the  **Publish Output** page, choose the **Create a package on disk** option button, and then choose **Next**.
    
 
5. On the  **Publish Settings** page, in the **What should the website be named?** text box, enter a name for the website.
    
    The default name is the add-in name.
    
 
6. In the  **Where should the package be created?** text box, enter the path for the location where you want the output to be published, and then choose **Next**.
    
    The default location is the Publish subdirectory under your project directory.
    
 
7. On the  **Security Settings** page, choose the **Yes, users must connect using HTTPS** option button, and then choose **Next**.
    
 
8. On the  **Database Configuration** page, choose the **Generate a new database called** option button and enter your add-in's name as the database name.
    
 
9. Choose the  **Attached Data Sources** tab and update the connection strings for any additional connections as needed, and then choose **Next**.
    
 
10. On the  **Provider Hosting** page, in the **Where is your LightSwitch application hosted** text box, enter the full URL for your add-in.
    
    In most cases this URL will be the same as the  **Service URL** and **Site/application** values that you entered earlier (for example `https://contoso.com/MyApplication`).
    
 
11. Enter the  **Client ID** and **Client Secret** for your add-in.
    
    You can get these values from the  **appregnew** page of your SharePoint site or from the Seller dashboard. See [Guidelines for registering SharePoint Add-ins 2013](http://msdn.microsoft.com/en-us/library/office/jj687469%28v=office.15%29.aspx).
    
 
12. Choose  **Publish** to publish your add-in.
    
    When your add-in is published, a .zip file that contains the package is placed in the directory that you specified in step 4. After this package has been created, a server administrator can use the MSDeploy tool to deploy your add-in to servers that are running IIS and SQL Server.
    
 

## Additional resources
<a name="bk_addresources"> </a>


-  [Register SharePoint Add-ins 2013](register-sharepoint-add-ins.md)
    
 
-  [Publish cloud business add-ins](publish-cloud-business-add-ins.md)
    
 

