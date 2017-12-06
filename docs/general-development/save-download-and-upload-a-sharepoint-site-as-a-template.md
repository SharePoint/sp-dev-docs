---
title: Save, download, and upload a SharePoint site as a template
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 2e637172-ddac-4a70-bd77-55a1645a3db1
---


# Save, download, and upload a SharePoint site as a template
Learn how to design and build robust applications by using SharePoint site templates.
You can design and build robust SharePoint applications that include a rich set of data sources, customer-facing views and forms, highly customized workflows, and more. Once you've built your business solution site, you can start to use it immediately in your SharePoint environment. Or, you can turn your solution into a template and deploy it in another environment, make it available to users so they can create new sites from it, or hand it off for additional development in Visual Studio.
  
    
    


## What is a SharePoint site template?
<a name="bkmk_WhatIsTemplate"> </a>

SharePoint site templates are prebuilt definitions designed around a particular business need. You can use these templates as they are to create your own SharePoint site, and then customize the site as much as you want. You're probably familiar with the default site templates, such as Team Site, Project Site, and Communities Site.
  
    
    
In addition to the default templates, you can create your own site template based on a site you've created and customized. This is a powerful feature that allows you to create a custom solution and then share that solution with your peers, the broader organization, or outside organizations. You can also package the site and open it in another environment or application such as Visual Studio and also customize it there.
  
    
    
Turning your customized site or business solution into a template is an extremely useful and very powerful capability. Once you start to package your solution as a template, you begin to realize the potential of SharePoint as a platform for business applications. The site template option makes all of this possible.
  
    
    
When you save your site as a template, you create a Web Solution Package, or WSP. A WSP is a CAB file that uses the solution manifest. The solution that you create is stored in the solutions gallery for the SharePoint site collection. Once you save the template, a solution file (.wsp) is created and stored in the solutions gallery where you can download or activate the solution.
  
> [!NOTE]
> The WSP you create is a partial trust user solution that has the same declarative format as a full trust SharePoint solution. However, it does not support the full extent of feature element types that are supported by full trust solutions. 
  
    
    


### What gets saved in a template?

When you save a SharePoint site as a template, you're saving the overall framework of the site — its lists and libraries, views and forms, and workflows. In addition to these components, you can include the contents of the site in the template; for example, the documents stored in the document libraries. This could be useful to provide sample content for users to get started with. Consider that this could also increase the size of your template beyond the default 50-MB site template limit.
  
    
    
Most of the objects in a site are included and supported by the template. However, there are several objects and features that are not supported. 
  
    
    

- **Supported** Lists, libraries, external lists, data source connections, list views and data views, custom forms, workflows, content types, custom actions, navigation, site pages, master pages, modules, and web templates.
    
  
- **Unsupported** Customized permissions, running workflow instances, list item version history, workflow tasks associated with running workflows, people or group field values, taxonomy field values, publishing pages and publishing sites, My Sites, stapled features, SharePoint Add-ins, and remote event receivers.
    
    > [!NOTE]
    > For publishing sites, you can use site definition templates. For more information, see  [Additional resources](save-download-and-upload-a-sharepoint-site-as-a-template.md#bkmk_additionalresources) at the end of this topic.

### What can you do with SharePoint templates?

Saving a site as a template is a powerful feature because it offers so many uses of custom sites. Here are the immediate benefits you get from saving a site as a template:
  
    
    

- **Deploy solutions immediately** Save and activate the template in the solutions gallery and let other employees create new sites from this template. You can select it, and then create a new site from it, which will inherit the components of the site, its structure, workflows, and more. You don't need Visual Studio to create your solution, and you have to access the server directly and run server administrator commands. Just save the site as a template, activate it, and off you go.
    
  
- **Portability** In addition to deploying a custom solution in your environment, you can download the .wsp file, take it on the road, and deploy it in another SharePoint environment. All of your site customization is conveniently stored in one file.
    
  
- **Extensibility** As a Web Solution Package, you can open your customized site in Visual Studio, perform additional development customization to the template, and then deploy it to SharePoint. SharePoint site development, as a result, can go through a solution life cycle (develop, stage, and put into production) that includes SharePoint Designer 2013, Visual Studio, and the browser.
    
  
As you begin to create custom sites in SharePoint, you'll discover even more benefits to turning your site into a solution that can be made portable across the organization. The basic steps to working with site templates are as follows:
  
    
    

- Save a site as a template to the solutions gallery.
    
  
- Download the site template from the solutions gallery to a .wsp file.
    
  
- Upload the .wsp file to the solutions gallery.
    
  
After you add a site template to the solutions gallery and the template is activated, the next time that you create a site or subsite, the template is available for selection in the **Custom** tab of the **Template Selection** section on the **New SharePoint Site** page.
  
    
    

## Save a site as a template to the solutions gallery
<a name="bkmk_SaveTemplate"> </a>


1. Navigate to the top-level site of your site collection.
    
  
2. Click **Settings**, and then click **Site Settings**.
    
  
3. In the **Site Actions** section, click **Save site as a template**.
    
  
4. Specify a name to use for the template file in the **File name** box.
    
  
5. Specify a name and description for the template in the **Template name** and **Template description** boxes.
    
  
6. To include the content of the site in the site template, select the **Include Content** box.
    
    > [!NOTE]
    > Including the content of the site can increase the size of the template significantly. The default size limit for a site template is 50 MB but might be less in your organization. You can always exclude the content, and then copy what you need later into the new site. Or, you can increase the size limit. For example, to increase the limit to the maximum allowed, use the following Stsadm command syntax. >  `stsadm -o setproperty -pn max-template-document-size -pv 524288000`

7. Click **OK** to save the template.
    
    If all of the components on the site are valid, the template is created, and you see a message that states "Operation Completed Successfully."
    
  
8. Do one of the following:
    
  - To return to your site, click **OK**.
    
  
  - To go directly to the site template, click **Solutions Gallery**.
    
  

## Download the site template from the solutions gallery to a file
<a name="bkmk_DownloadTemplate"> </a>


1. Navigate to the top-level site of your site collection.
    
  
2. Click **Settings**, and then click **Site Settings**.
    
  
3. In the **Web Designer Galleries** section, click **Solutions**.
    
  
4. If it's necessary to activate the solution, select it, and in the **Commands** group, click **Activate**. Then, on the **Activate Solution Confirmation** screen, in the **Commands** group, click **Activate**.
    
  
5. To download the solution, click its name in the solutions gallery, and click **Save**. Then, in the **Save As** dialog box, browse to the location where you want to save the solution, click **Save**, and then click **Close**.
    
  

## Upload the site template file to a solutions gallery
<a name="bkmk_UploadTemplate"> </a>


1. Navigate to the top-level site of your site collection.
    
  
2. Click **Settings**, and then click **Site Settings**.
    
  
3. In the **Web Designer Galleries** section, click **Solutions**.
    
  
4. To upload the solution, in the **Commands** group, click **Upload**, and then in the **Add a Document** dialog box, click **Browse**. Then, in the **Choose File to Upload** dialog box, locate the file, select it, click **Open**, and then click **OK**.
    
  
5. To activate the solution, on the activate solution confirmation screen, in the **Commands** group, click **Activate**.
    
  

## See also
<a name="bkmk_additionalresources"> </a>


-  [Site Types: WebTemplates and Site Definitions](http://msdn.microsoft.com/en-us/library/ms434313.aspx)
    
  
-  [Understanding how to package and deploy workflow in SharePoint](http://msdn.microsoft.com/en-us/library/jj819316%28v=office.15%29.aspx)
    
  
-  [Build farm solutions in SharePoint](http://msdn.microsoft.com/en-us/library/jj163902%28v=office.15%29.aspx)
    
  
-  [Copy or move lists by using list templates](http://office.com/redir/HA101782479.aspx)
    
  
-  [Copy or move a library by using a library template](http://office.com/redir/HA101814157.aspx)
    
  
-  [Copy or move library files by using Windows Explorer](http://office.com/redir/HA101811182.aspx)
    
  

