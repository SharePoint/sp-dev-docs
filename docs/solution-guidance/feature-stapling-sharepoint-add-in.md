---
title: Feature Stapling in the SharePoint Add-in model
ms.date: 11/03/2017
---
Feature Stapling in the SharePoint Add-in model
===============================================

Summary
-------

The approach you take to run code and deploy artifacts when a SharePoint site is provisioned is different in the new SharePoint Add-in model than it was with Full Trust Code.  In a typical Full Trust Code (FTC) / Farm Solution scenario, out-of-the-box site definitions were modified with stapled features.  Features were used to package and deploy artifacts, configurations, and branding assets associated with a SharePoint site and features were stapled to the site definition.  Then the stapled features were automatically installed and activated upon site provisioning.

In an SharePoint Add-in model scenario, you may staple features, staple Add-ins, or use the SharePoint Client Side Object Model (CSOM) to create and configure site collections and sub sites then deploy artifacts, configurations, and branding assets to them. This pattern is commonly referred to as the *remote provisioning pattern*.

High Level Guidelines
---------------------

As a rule of a thumb, we would like to provide the following high level guidelines to create and configure site collections and sub sites then deploy artifacts, configurations, and branding assets to them.

- The only way you can still use feature stapling is when you are stapling features to site collections and you are using sandbox solutions to deploy the site definitions and the stapled features.	
- You can use the Add-in stapling model with tenant deployed Add-ins to implement functionality similar to feature stapling.
- You can use the remote provisioning pattern to implement functionality similar to feature stapling by activating additional features on top of the out-of-the-box box site definition via remote APIs.

Options to create and configure site collections and sub sites then deploy artifacts, configurations, and branding assets to them
---------------------------------------------------------------------------------------------------------------------------------

You have a few options to to create and configure site collections and sub sites then deploy artifacts, configurations, and branding assets to them.

- Staple features
- Staple Add-ins
- Use the remote provisioning pattern 	

Staple features
---------------
In this pattern you staple features to site definitions.
	
- This pattern is only available at the site collection level.
- It is not possible to staple features to sub sites.
- This is not an optimal or recommended approach because it uses deprecated sandbox solutions and does not set you up well for upgrades.

**When is it a good fit?**

When you are migrating legacy code in an on-premises SharePoint environment and you do not have time to re-write it properly.

**Getting Started**

The following article describes how to staple features to a site definition.

- [Feature Stapling In SharePoint 2010 (MSDN Blog Article)](http://blogs.msdn.com/b/kunal_mukherjee/archive/2011/01/11/feature-stapling-in-sharepoint-2010.aspx)

Staple Add-ins
--------------
In this pattern you deploy Add-ins stored in the app catalog to specific site collections, managed paths, and site templates.

- See the [SharePoint 2013 App Deployment through 'App Stapling' (MSDN Blog Article - Richard DiZerega)](http://blogs.msdn.com/b/richard_dizeregas_blog/archive/2013/09/18/10399333.aspx) for more details about the Add-in stapling model.
- Because the add-in is pushed by an administrator, site owners will not be able to remove the add-in from a site that meets the deployment criteria.  Not even a site collection administrator can remove the add-in.
- This centralized deployment also shares the same centralized add-in resources (Add-in Web and Remote Web).  Essentially, the Add-in is deployed, but not installed in the sites.  All sites will leverage the Add-in Web and Remote Web from the instance installed in the app catalog.
- Because of centralized deployment, remote events such as 'Handle App Installed', 'Handle App Uninstalled', and 'Handle App Upgrade' will only fire once (when the Add-In is installed in the app catalog).
	+ This can make it difficult to use the Add-in stapling pattern to automatically apply changes to sites where it is deployed because these events do not fire when it is deployed to sites.
- Add-in parts are not supported when Add-ins are stapled to sites.
- This pattern requires manual user actions to deploy the Add-ins.

Use the remote provisioning pattern
-----------------------------------

In this pattern you use the SharePoint Client Side Object Model (CSOM) to create and configure site collections and sub sites then deploy artifacts, configurations, and branding assets to them.

- This pattern does not require packaging artifacts, configurations, and branding assets in separate features, or Add-ins.  Everything may be packaged in a single Add-in.
- When you use this pattern for site provisioning you typically override the out-of-the-box page to create a new site.
- For more information about this pattern see the [Site Provisioning (SharePoint Add-in Recipe)](site-provisioning-sharepoint-add-in.md)
- If you wish to deploy Add-ins to a SharePoint site, this can be done via CSOM.  Here is an example which loads an Office Add-in via a .app manifest file and installs it in a SharePoint site.

	```
	//Create a FileStream object to access the Mail Office Add-in .app file 
	using (FileStream fsSource = new FileStream(System.Web.Hosting.HostingEnvironment.ApplicationPhysicalPath + "Innovation.Management.AFO.app",
    FileMode.Open, FileAccess.Read))
    {
		//Return the subweb where you want to install the Add-in
        var subweb = ctx.Web;
        ctx.Load(subweb);
        ctx.ExecuteQuery();

		//Load and Install the Add-in on the subweb
        AppInstance appInstance = subweb.LoadAndInstallApp(fsSource);
        ctx.Load(appInstance);
        ctx.ExecuteQuery();
    }
	```

	+ Watch the [Creating Cloud Hosted Line Of Business Applications with Add-ins for Office, O365, Azure, and WP8 (Todd Baginski, Michael Sherman - SharePoint Conference 2014)](https://channel9.msdn.com/Events/SharePoint-Conference/2014/SPC361) video to see how this approach was used to install Office Add-ins in SharePoint sites upon site provisioning.
	+ Full automation is only possible with Add-ins that have full tenant permission that have already been trusted.
		+ See the [Core.Sideloading (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.SideLoading) for an example. 

Related links
=============
- [Feature Stapling In SharePoint 2010 (MSDN Blog Article)](http://blogs.msdn.com/b/kunal_mukherjee/archive/2011/01/11/feature-stapling-in-sharepoint-2010.aspx)
- [Self-Service Site Provisioning using add-ins for SharePoint 2013 (MSDN Blog)](http://blogs.msdn.com/b/richard_dizeregas_blog/archive/2013/04/04/self-service-site-provisioning-using-apps-for-sharepoint-2013.aspx)
- [SharePoint 2013 App Deployment through 'App Stapling' (MSDN Blog Article - Richard DiZerega)](http://blogs.msdn.com/b/richard_dizeregas_blog/archive/2013/09/18/10399333.aspx)
- [Site Provisioning (SharePoint Add-in Recipe)](site-provisioning-sharepoint-add-in.md)
- [Creating Cloud Hosted Line Of Business Applications with Add-ins for Office, O365, Azure, and WP8 (Todd Baginski, Michael Sherman - SharePoint Conference 2014)](https://channel9.msdn.com/Events/SharePoint-Conference/2014/SPC361)
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================

- [Provisioning.Cloud.Sync (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Solutions/Provisioning.Cloud.Sync)
- [Provisioning.SubSiteCreationApp (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.SubSiteCreationApp)
- [Provisioning.Services.SiteManager (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Services.SiteManager)
- [Provisioning.SiteCollectionCreation (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.SiteCollectionCreation)
- Samples and content at [http://aka.ms/OfficeDevPnP](http://aka.ms/OfficeDevPnP)

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D)
- SharePoint 2013 on-premises
