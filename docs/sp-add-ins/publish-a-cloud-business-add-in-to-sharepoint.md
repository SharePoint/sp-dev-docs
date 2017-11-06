---
title: Publish a cloud business add-in to SharePoint
description: 
ms.date: 11/06/2017
ms.prod: sharepoint
---


# Publish a cloud business add-in to SharePoint

You can publish your cloud business add-in as a provider-hosted SharePoint add-in. A provider-hosted add-in gives you the flexibility of deploying your web app and database to an on-premises SharePoint site, to Microsoft Azure, or to a third-party hosting site. After you publish your add-in, others can run it from SharePoint on their computers and mobile devices.
 
You can publish your add-in directly to a site using WebDeploy, or you can create a package for your add-in that can be deployed to multiple servers.

<a name="publish"> </a>
## To publish an add-in

1. In **Solution Explorer**, open the shortcut menu for the top-level application node as shown in Figure 1, and then select **Publish**.
    
   *Figure 1. The top-level node*

   ![The top-level node](../images/CBA_IM_18.PNG)

2. In the LightSwitch Publish Application Wizard, on the **SharePoint Options** page, select the **Provider-hosted** option, and then select **Next**.
 
3. On the **Application Server Configuration** page, select the **IIS Server** option, and then select **Next**.
    
   > [!NOTE]
   > If you have a publish settings (.publishsettings or .pubxml) file that was created for another add-in, you can use that file to provide the rest of the information that you need for publishing. If so, select **Import Settings** in the wizard.

4. On the **Publish Output** page, select the **Publish directly to a server now** option, and then select **Next**.  
 
5. On the **Publish Settings** page, in the **Service URL** box, enter the URL for the server where you want to publish your add-in.
    
   - If you're publishing to a hosting company, the company provides this value. It can be in any of the following formats:
   
      - _HostingCompanyURL_ (for example, `contoso.com`)

      - `https://` _HostingCompanyURL_ (for example, `https://contoso.com`)

      - `https://` _HostingCompanyURL_ `:8172/msdeploy.axd` (for example, `https://contoso.com:8172/msdeploy.axd`)

   - If you're publishing to Internet Information Services (IIS) on your own computer for testing, enter `localhost` or the name of your computer.
    
   - If you're publishing to a server on your own network, enter one of these URLs:
    
      -  `http://` _ServerName_

      -  `http://` _ServerName_ `/msdeployagentservice`
      
   > [!NOTE]
   > If you're publishing through a firewall, you might have to open port 8172.

6. In the **Site/application** box, enter the names of the IIS website and your add-in.
    
   - If you're publishing to a hosting company, the company provides this value. It's typically either a domain name (for example,  `contoso.com`) or a domain and add-in name (for example, `contoso.com/MyApp`).
    
   - If you're publishing to IIS on your own computer for testing, or you're publishing to a server on your internal network, enter the site and add-in name as they appear in IIS Manager. For example, if you're publishing the add-in MyApp to the default website in IIS, enter Default Web Site/MyApp.
    
   > [!NOTE]
   > If you're publishing to an existing web folder and want to remove any existing content, select the **Remove additional files at destination** check box.

7. In the **User Name** and **Password** boxes, enter credentials for an account that has sufficient authority to perform deployment tasks on the destination web server, and then select **Next**.
    
   If you're publishing to a hosting company, the company provides these values.
 
8. On the **Security Settings** page, select the **Yes, users must connect using HTTPS** option, and then select **Next**.

9. On the **Data connections** page, on the **Database Connections** tab, enter the administrator and user connection strings for the database server where you want to publish your add-in's database.
    
   > [!NOTE]
   > The database doesn't have to be located on the server where you are publishing the add-in.

10. On the **Attached Data Sources** tab, update the connection strings for any additional connections as needed, and then select **Next**.

11. On the  **Provider Hosting** page, in the **Where is your LightSwitch application hosted** box, enter the full URL for your add-in.
    
    In most cases, this URL is the same as the **Service URL** and **Site/application** values that you entered earlier (for example, `https://contoso.com/MyApplication`).
    
12. Enter the **Client ID** and **Client Secret** values for your add-in.
    
    You can get these values from the **appregnew** page of your SharePoint site or from the Seller dashboard. See [Register SharePoint Add-ins 2013](register-sharepoint-add-ins.md).

13. Select **Publish** to publish your add-in.
    
    When your add-in is published, File Explorer opens and displays the **Publish** directory for your project.

<a name="package"> </a>
## To package an add-in

1. In **Solution Explorer**, open the shortcut menu for the top-level application node as shown in Figure 2, and then select **Publish**.
    
   *Figure 2. The top-level node*

   ![The top-level node](../images/CBA_IM_18.PNG)

2. In the LightSwitch Publish Application Wizard, on the **SharePoint Options** page, select the **Provider-hosted** option, and then select **Next**.

3. On the **Application Server Configuration** page, select the **IIS Server** option, and then select **Next**.
    
   > [!NOTE]
   > If you have a publish settings (.publishsettings or .pubxml) file that was created for another add-in, you can use that file to provide the rest of the information that you need for publishing. If so, select **Import Settings** in the wizard.

4. On the **Publish Output** page, select the **Create a package on disk** option, and then select **Next**.

5. On the **Publish Settings** page, in the **What should the website be named?** box, enter a name for the website.
    
   The default name is the add-in name.

6. In the **Where should the package be created?** box, enter the path for the location where you want the output to be published, and then select **Next**.
    
   The default location is the Publish subdirectory under your project directory. 
 
7. On the **Security Settings** page, select the **Yes, users must connect using HTTPS** option, and then select **Next**.

8. On the **Database Configuration** page, select the **Generate a new database called** option, and enter your add-in's name as the database name.

9. Select the **Attached Data Sources** tab, and update the connection strings for any additional connections as needed, and then select **Next**.

10. On the **Provider Hosting** page, in the **Where is your LightSwitch application hosted** box, enter the full URL for your add-in.
    
   In most cases, this URL is the same as the **Service URL** and **Site/application** values that you entered earlier (for example `https://contoso.com/MyApplication`).
    
11. Enter the **Client ID** and **Client Secret** for your add-in.
    
   You can get these values from the **appregnew** page of your SharePoint site or from the Seller dashboard. See [Register SharePoint Add-ins 2013](register-sharepoint-add-ins.md).
    
12. Select **Publish** to publish your add-in.
    
   When your add-in is published, a .zip file that contains the package is placed in the directory that you specified in step 4. After this package has been created, a server administrator can use the MSDeploy tool to deploy your add-in to servers that are running IIS and SQL Server.

## Additional resources
<a name="bk_addresources"> </a>

-  [Register SharePoint Add-ins 2013](register-sharepoint-add-ins.md)
-  [Publish cloud business add-ins](publish-cloud-business-add-ins.md)
    
 

