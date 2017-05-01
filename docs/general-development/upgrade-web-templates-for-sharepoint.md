---
title: Upgrade web templates for SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: 69048e4c-6d6d-4e4e-b74c-7c72ae444354
---


# Upgrade web templates for SharePoint 2013
Learn about updating customized SharePoint 2010 web templates for use in SharePoint 2013 after a self-service upgrade.
SharePoint 2013 has significantly changed the underlying components it uses to render the appearance of SharePoint sites. For customizations made to default components in SharePoint 2010, these new changes include styles, page layouts, master pages and themes.
  
    
    

This article provides guidance for updating your web templates so that they work with the new framework.
## Possible behavior after a self-service site upgrade

When you upgrade a server from SharePoint 2010 to 2013, site collection administrators are shown a link that lets them upgrade their sites gradually, or upgrade all sites in the site collection at once. Then users can upgrade and test those sites that contain customizations. Some of the problems that users might encounter after an upgrade include:
  
    
    

- Branding applied to sites has been changed, or is missing altogether.
    
  
- Custom components don't render correctly.
    
  
- Pages don't render at all, and the users receive unknown errors from SharePoint.
    
  
- Features that are enabled by default are disabled after upgrade.
    
  

## Recommendations for upgrading sites

When you upgrade sites, we generally recommend that you use the evaluation site to install and test your components for compatibility and performance.
  
    
    
The following sections detail what you need to update in the web template.
  
    
    

### Update master page references

After an upgrade to SharePoint 2013, any custom master page references that your web template contains will be set to the default master page named **seattle.master**. If you customized the default master page in SharePoint 2010, you will need to change the reference to that custom page in order for your customizations to appear.
  
    
    

### Update available features

When you upgrade a site to use SharePoint 2013 web templates, features that are attached to the template by default are removed. As a consequence, the available functionality of an upgraded web template is reduced.
  
    
    
To add the default functionality back to the template, you must modify the Onet.xml file for the web template that contains the feature list. To add the default features back to your web template, do the following:
  
    
    

### To add default features back to the web template


1. Open the Visual Studio project that contains the web template you want to update.
    
  
2. In **Solution Explorer**, find the Onet.xml file in your project.
    
  
3. Open Onet.xml in an XML editor.
    
  
4. Make sure that each of the features in Table 1 are contained in the **WebFeatures** section.
    
   **Table 1. Default web template features**


|**DisplayName**|**Feature ID**|
|:-----|:-----|
|AccSvcAddAccessApp  <br/> |d2b9ec23-526b-42c5-87b6-852bd83e0364  <br/> |
|AnnouncementsList  <br/> |00bfea71-d1ce-42de-9c63-a44004ce0104  <br/> |
|BaseWeb  <br/> |99fe402e-89a0-45aa-9163-85342e865dc8  <br/> |
|BizAppsListTemplates  <br/> |065c78be-5231-477e-a972-14177cc5b3c7  <br/> |
|ContactsList  <br/> |00bfea71-7e6d-4186-9ba8-c047ac750105  <br/> |
|ContactsList  <br/> |00bfea71-7e6d-4186-9ba8-c047ac750105  <br/> |
|CustomList  <br/> |00bfea71-de22-43b2-a848-c05709900100  <br/> |
|DataConnectionLibrary  <br/> |00bfea71-dbd7-4f72-b8cb-da7ac0440130  <br/> |
|DataSourceLibrary  <br/> |00bfea71-f381-423d-b9d1-da7a54c50110  <br/> |
|DiscussionsList  <br/> |00bfea71-6a49-43fa-b535-d15c05500108  <br/> |
|DocumentLibrary  <br/> |00bfea71-e717-4e80-aa17-d0c71b360101  <br/> |
|EventsList  <br/> |00bfea71-ec85-4903-972d-ebe475780106  <br/> |
|EventsList  <br/> |00bfea71-ec85-4903-972d-ebe475780106  <br/> |
|ExternalList  <br/> |00bfea71-9549-43f8-b978-e47e54a10600  <br/> |
|FollowingContent  <br/> |a7a2793e-67cd-4dc1-9fd0-43f61581207a  <br/> |
|GanttTasksList  <br/> |00bfea71-513d-4ca0-96c2-6a47775c0119  <br/> |
|GettingStarted  <br/> |4aec7207-0d02-4f4f-aa07-b370199cd0c7  <br/> |
|GridList  <br/> |00bfea71-3a1d-41d3-a0ee-651d11570120  <br/> |
|HierarchyTasksList  <br/> |f9ce21f8-f437-4f7e-8bc6-946378c850f0  <br/> |
|IPFSWebFeatures  <br/> |f9ce21f8-f437-4f7e-8bc6-946378c850f0  <br/> |
|IssuesList  <br/> |00bfea71-5932-4f9c-ad71-1557e5751100  <br/> |
|LinksList  <br/> |00bfea71-5932-4f9c-ad71-1557e5751100  <br/> |
|MBrowserRedirect  <br/> |d95c97f3-e528-4da2-ae9f-32b3535fbb59  <br/> |
|MDSFeature  <br/> |87294c72-f260-42f3-a41b-981a2ffce37a  <br/> |
|MobilityRedirect  <br/> |f41cc668-37e5-4743-b4a8-74d1db3fd8a4  <br/> |
|MySiteMicroBlog  <br/> |ea23650b-0340-4708-b465-441a41c37af7  <br/> |
|NoCodeWorkflowLibrary  <br/> |00bfea71-f600-43f6-a895-40c0de7b0117  <br/> |
|PictureLibrary  <br/> |00bfea71-52d4-45b3-b544-b1c71b620109  <br/> |
|PremiumWeb  <br/> |0806d127-06e6-447a-980e-2e90b03101b8  <br/> |
|PromotedLinksList  <br/> |192efa95-e50c-475e-87ab-361cede5dd7f  <br/> |
|ReportListTemplate  <br/> |2510d73f-7109-4ccc-8a1c-314894deeb3a  <br/> |
|SiteFeed  <br/> |15a572c6-e545-4d32-897a-bab6f5846e18  <br/> |
|SiteFeedController  <br/> |5153156a-63af-4fac-b557-91bd8c315432  <br/> |
|SurveysList  <br/> |00bfea71-eb8a-40b1-80c7-506be7590102  <br/> |
|TaskListNewsFeed  <br/> |ff13819a-a9ac-46fb-8163-9d53357ef98d  <br/> |
|TasksList  <br/> |00bfea71-a83e-497e-9ba0-7a5c597d0107  <br/> |
|TeamCollab  <br/> |00bfea71-4ea5-48d4-a4ad-7ea5c011abe5  <br/> |
|WebPageLibrary  <br/> |00bfea71-c796-4402-9f2f-0eb9a6e71b18  <br/> |
|WikiPageHomePage  <br/> |00bfea71-d8fe-4fec-8dad-01c19a6e4053  <br/> |
|WorkflowHistoryList  <br/> |00bfea71-4ea5-48d4-a4ad-305cf7030140  <br/> |
|workflowProcessList  <br/> |00bfea71-2d77-4a75-9fca-76516689e21a  <br/> |
|WorkflowServiceStore  <br/> |2c63df2b-ceab-42c6-aeff-b3968162d4b1  <br/> |
|WorkflowTask  <br/> |57311b7a-9afd-4ff0-866e-9393ad6647b1  <br/> |
|XmlFormLibrary  <br/> |00bfea71-1e1d-4562-b56a-f05371bb0115  <br/> |
   
5. Save your changes, and deploy as you would normally.
    
  

> **Note:**
> You may also need to activate these features in the Central Administration utility. 
  
    
    


## Additional resources
<a name="bk_addresources"> </a>


-  [Upgrade site customizations for SharePoint 2013](upgrade-site-customizations-for-sharepoint.md)
    
  
-  [SharePoint 2010 and web templates](http://blogs.msdn.com/b/vesku/archive/2010/10/14/sharepoint-2010-and-web-templates.aspx)
    
  
-  [Plan to upgrade a site collection](https://technet.microsoft.com/en-us/library/ff191199.aspx)
    
  
-  [Plan for site collection upgrades in SharePoint 2013](http://technet.microsoft.com/en-us/library/ff191199.aspx)
    
  

  
    
    

