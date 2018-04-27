---
title: Modules in the SharePoint Add-in model
ms.date: 11/03/2017
---
Modules in the SharePoint Add-in model
======================================

Summary
-------

The approach you take to deploy artifacts to a SharePoint environment is different in the new SharePoint Add-in model than it was with Full Trust Code. In a typical Full Trust Code (FTC) / Farm Solution scenario, modules defined in declarative code (feature framework XML files) were added to SharePoint features. The modules included the list of artifacts to deploy to the SharePoint server. The modules were added to SharePoint features and deployed via SharePoint Solutions. Upon feature activation, the artifacts defined in the modules were deployed to the SharePoint environment.

In a SharePoint Add-in model scenario, the remote provisioning pattern is used to deploy artifacts to SharePoint environments.

Terminology
-----------

The term *artifacts* is referred to throughout this article. Artifacts refers to items that are typically deployed to a SharePoint environment. Artifacts typically include:

- JavaScript files
- CSS files
- Image files (.jpg, .gif, .png, etc.)
- Master Pages
- Page Layouts
- List Items

High-level guidelines
---------------------

As a rule of a thumb, we would like to provide the following high-level guidelines to deploy artifacts to SharePoint environments.

- Use the remote provisioning pattern (SharePoint Client Side Object Model and SharePoint REST API) to deploy artifacts to SharePoint environments.
- Do not use declarative code modules or feature framework XML files to deploy artifacts to SharePoint environments.

**Debugging**

A big advantage of using code to deploy artifacts is you are able to debug the deployment process when you use code. It is impossible to debug the deployment process when using declarative code modules or feature framework XML files to deploy artifacts to SharePoint environments.

**Getting started**

The following O365 PnP code samples demonstrate how to create a SharePoint Add-ins that use the remote provisioning pattern to deploy artifacts to a SharePoint environment.

  This sample demonstrates how to create a new folders in the Style Library and add JavaScript files and images to the new files.

- [Branding.ClientSideRendering (O365 PnP Code Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.ClientSideRendering)
	+ See the ***UploadJSFiles*** and the ***UploadFileToFolder*** methods in the [Default.aspx.cs class](https://github.com/SharePoint/PnP/blob/master/Samples/Branding.ClientSideRendering/Branding.ClientSideRenderingWeb/Pages/Default.aspx.cs) for more details.
	+ These methods are also displayed below for quick reference.
	
		**Create a folder and upload JavaScript files to the folder:**

		```
		void UploadJSFiles(Web web)
		{
		    //Delete the folder if it exists
		    Microsoft.SharePoint.Client.List list = web.Lists.GetByTitle("Style Library");
		    IEnumerable<Folder> results = web.Context.LoadQuery<Folder>(list.RootFolder.Folders.Where(folder => folder.Name == "JSLink-Samples"));
		    web.Context.ExecuteQuery();
		    Folder samplesJSfolder = results.FirstOrDefault();
		
		    if (samplesJSfolder != null)
		    {
		        samplesJSfolder.DeleteObject();
		        web.Context.ExecuteQuery();
		    }
		
		    //Create new folder
		    samplesJSfolder = list.RootFolder.Folders.Add("JSLink-Samples");
		    web.Context.Load(samplesJSfolder);
		    web.Context.ExecuteQuery();
		
		    //Upload JavaScript files to folder
		    UploadFileToFolder(web, Server.MapPath("../Scripts/JSLink-Samples/Accordion.js"), samplesJSfolder);
		    UploadFileToFolder(web, Server.MapPath("../Scripts/JSLink-Samples/ConfidentialDocuments.js"), samplesJSfolder);
		    UploadFileToFolder(web, Server.MapPath("../Scripts/JSLink-Samples/DisableInput.js"), samplesJSfolder);
		    UploadFileToFolder(web, Server.MapPath("../Scripts/JSLink-Samples/HiddenField.js"), samplesJSfolder);
		    UploadFileToFolder(web, Server.MapPath("../Scripts/JSLink-Samples/PercentComplete.js"), samplesJSfolder);
		    UploadFileToFolder(web, Server.MapPath("../Scripts/JSLink-Samples/PriorityColor.js"), samplesJSfolder);
		    UploadFileToFolder(web, Server.MapPath("../Scripts/JSLink-Samples/ReadOnlySPControls.js"), samplesJSfolder);
		    UploadFileToFolder(web, Server.MapPath("../Scripts/JSLink-Samples/RegexValidator.js"), samplesJSfolder);
		    UploadFileToFolder(web, Server.MapPath("../Scripts/JSLink-Samples/SubstringLongText.js"), samplesJSfolder);
		    UploadFileToFolder(web, Server.MapPath("../Scripts/JSLink-Samples/DependentFields.js"), samplesJSfolder);
		
		    //Create another folder inside the folder that was just created
		    Folder imgsFolder = samplesJSfolder.Folders.Add("imgs");
		    web.Context.Load(imgsFolder);
		    web.Context.ExecuteQuery();
		
		    //Upload image files to folder
		    UploadFileToFolder(web, Server.MapPath("../Scripts/JSLink-Samples/imgs/Confidential.png"), imgsFolder);
		}
		```
		**Create a folder and upload image files to the folder:**
		```
		public static void UploadFileToFolder(Web web, string filePath, Folder folder)
	    	{
			//Create a FileStream to the file to upload
		        using (FileStream fs = new FileStream(filePath, FileMode.Open))
		        {
				//Create FileCreationInformation object to set file metadata
			        FileCreationInformation flciNewFile = new FileCreationInformation();
	
		        	flciNewFile.ContentStream = fs;
			        flciNewFile.Url = System.IO.Path.GetFileName(filePath);
		        	flciNewFile.Overwrite = true;
	
				//Upload file to SharePoint
		                Microsoft.SharePoint.Client.File uploadFile = folder.Files.Add(flciNewFile);
	
				//Check in the file
		        	uploadFile.CheckIn("CSR sample js file", CheckinType.MajorCheckIn);
	
		        	folder.Context.Load(uploadFile);
			        folder.Context.ExecuteQuery();
	        	}
		}
		```

This sample demonstrates how to upload master pages, set master page meta data and apply the master page to the site by setting the CustomMasterUrl property on the Web object.

- [Branding.ApplyBranding (O365 PnP Code Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.ApplyBranding)
	+ See the ***UploadPageLayout***, ***CreatePublishingPage***, and ***SetSupportCaseContent*** methods in the [BrandingHelper.cs class](https://github.com/SharePoint/PnP/blob/master/Samples/Branding.ApplyBranding/Branding.ApplyBranding.Console/BrandingHelper.cs) for more details.
	+ In addition to creating new items in SharePoint, this sample demonstrates how to remove items.  The methods which remove items are listed below for reference.  
		**Delete a file:**
	
		```
		private static void DeleteFile(Web web, string fileName, string serverPath, string serverFolder)
	    {
	        var fileUrl = string.Concat(serverPath, serverFolder, (string.IsNullOrEmpty(serverFolder) ? string.Empty : "/"), fileName);
	        var fileToDelete = web.GetFileByServerRelativeUrl(fileUrl);
	        fileToDelete.DeleteObject();
	        web.Context.ExecuteQuery();
	    }
	
		```
		**Delete a folder:**
		```
		public static void RemoveFolder(ClientContext clientContext, string folder, string path)
	    	{
	        	var web = clientContext.Web;
		        var filePath = web.ServerRelativeUrl.TrimEnd(Program.trimChars) + "/" + path + "/";
		        var folderToDelete = web.GetFolderByServerRelativeUrl(string.Concat(filePath, folder));
		        Console.WriteLine("Removing folder {0} from {1}", folder, path);
		        folderToDelete.DeleteObject();
		        clientContext.ExecuteQuery();
		    }
		```
		**Un-assign a master page and delete the master page**
		```
		public static void RemoveMasterPage(ClientContext clientContext, string name, string folder)
		    {
		        var web = clientContext.Web;
	        	clientContext.Load(web, w => w.AllProperties);
		        clientContext.ExecuteQuery();
	
		        Console.WriteLine("Deactivating and removing {0} from {1}", name, web.ServerRelativeUrl);            
	        
		        //set master pages back to the defaults that were being used
	        	if (web.AllProperties.FieldValues.ContainsKey("OriginalMasterUrl"))
		        {
		            web.MasterUrl = (string)web.AllProperties["OriginalMasterUrl"];
		        }
		        if (web.AllProperties.FieldValues.ContainsKey("CustomMasterUrl"))
		        {
		            web.CustomMasterUrl = (string)web.AllProperties["CustomMasterUrl"];
		        }
		        web.Update();
		        clientContext.ExecuteQuery();
	
		        //now that the master page is set back to its default, re-reference the web from context and delete the custom master pages
		        web = clientContext.Web;
		        var lists = web.Lists;
		        var gallery = web.GetCatalog(116);
		        clientContext.Load(lists, l => l.Include(ll => ll.DefaultViewUrl));
		        clientContext.Load(gallery, g => g.RootFolder.ServerRelativeUrl);
		        clientContext.ExecuteQuery();
		        var masterPath = gallery.RootFolder.ServerRelativeUrl.TrimEnd(new char[] { '/' }) + "/";
	        	DeleteFile(web, name, masterPath, folder);
		    }
		```
		**Delete a page layout**
		```
		public static void RemovePageLayout(ClientContext clientContext, string name, string folder)
		{
			var web = clientContext.Web;
		        var lists = web.Lists;
		        var gallery = web.GetCatalog(116);
		        clientContext.Load(lists, l => l.Include(ll => ll.DefaultViewUrl));
		        clientContext.Load(gallery, g => g.RootFolder.ServerRelativeUrl);
		        clientContext.ExecuteQuery();
	
		        Console.WriteLine("Removing page layout {0} from {1}", name, clientContext.Web.ServerRelativeUrl);
	
	        	var masterPath = gallery.RootFolder.ServerRelativeUrl.TrimEnd(Program.trimChars) + "/";
	        
	        	DeleteFile(web, name, masterPath, folder);
		}
		```

	+ Watch the [Applying Branding to SharePoint Sites with an Add-in for SharePoint (Office 365 PnP Video)](https://channel9.msdn.com/Blogs/Office-365-Dev/Applying-Branding-to-SharePoint-Sites-with-an-App-for-SharePoint-Office-365-Developer-Patterns-and-P) for a walk through of this sample.

This sample has a little of everythign in it.  It demonstrates how to activate the publishing features, upload page layouts, create publishing pages, create lists, content types and list items, and creating pblishing pages and adding web parts and Add-in Parts to the pages.  It also demonstrates how to deploy list items to both the host web and the Add-in web.

- [Branding.ClientSideRendering (O365 PnP Code Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.ClientSideRendering)
	+ See the methods in the [Utils.cs class](https://github.com/SharePoint/PnP/blob/master/Samples/Core.DataStorageModels/Core.DataStorageModelsWeb/Util/Util.cs) for examples of these operations.
	+ These methods are listed below for reference.  
		**Activate site collection and site level publishing features:**
		```
		public static void ActivePublishingFeature(ClientContext ctx)
	    {
	        Guid publishingSiteFeatureId = new Guid("f6924d36-2fa8-4f0b-b16d-06b7250180fa");
	        Guid publishingWebFeatureId = new Guid("94c94ca6-b32f-4da9-a9e3-1f3d343d7ecb");
	
	        Site clientSite = ctx.Site;
	        ctx.Load(clientSite);
	
	        FeatureCollection clientSiteFeatures = clientSite.Features;
	        ctx.Load(clientSiteFeatures);
	
	        //Activate the site feature
	        clientSiteFeatures.Add(publishingSiteFeatureId, true, FeatureDefinitionScope.Farm);
	        ctx.ExecuteQuery();
	
	        FeatureCollection clientWebFeatures = ctx.Web.Features;
	        ctx.Load(clientWebFeatures);
	
	        //Activate the web feature
	        clientWebFeatures.Add(publishingWebFeatureId, true, FeatureDefinitionScope.Farm);
	        ctx.ExecuteQuery();
	    }
		```
		**Create a list:**
		```
		public static List CreateList(ClientContext ctx, int templateType,
	                                       string title, string url, QuickLaunchOptions quickLaunchOptions)
	    {
	        ListCreationInformation listCreationInfo = new ListCreationInformation
	        {
	            TemplateType = templateType,
	            Title = title,
	            Url = url,
	            QuickLaunchOption = quickLaunchOptions
	        };
	        List spList = ctx.Web.Lists.Add(listCreationInfo);
	        ctx.Load(spList);
	        ctx.ExecuteQuery();
	
	        return spList;
	    }
	
		```
		**Create a content type**
		```
		public static ContentType CreateContentType(ClientContext ctx, string ctyName, string group, string ctyId)
	    {
	        ContentTypeCreationInformation contentTypeCreation = new ContentTypeCreationInformation();
	        contentTypeCreation.Name = ctyName;
	        contentTypeCreation.Description = "Custom Content Type";
	        contentTypeCreation.Group = group;
	        contentTypeCreation.Id = ctyId;
	
	        //Add the new content type to the collection
	        ContentType ct = ctx.Web.ContentTypes.Add(contentTypeCreation);
	        ctx.Load(ct);
	        ctx.ExecuteQuery();
	
	        return ct;
	    }
	
		```
		**Upload a page layout**
		```
		public static void UploadPageLayout(ClientContext ctx, string sourcePath, string targetListTitle, string targetUrl)
	        {
	        using (FileStream fs = new FileStream(sourcePath, FileMode.Open, FileAccess.Read))
	        {
	            byte[] data = new byte[fs.Length];
	            fs.Read(data, 0, data.Length);
	            using (MemoryStream ms = new MemoryStream())
	            {
	                ms.Write(data, 0, data.Length);
	                var newfile = new FileCreationInformation();
	                newfile.Content = ms.ToArray();
	                newfile.Url = targetUrl;
	                newfile.Overwrite = true;
	
	                List docs = ctx.Web.Lists.GetByTitle(targetListTitle);
	                Microsoft.SharePoint.Client.File uploadedFile = docs.RootFolder.Files.Add(newfile);
	                uploadedFile.CheckOut();
	                uploadedFile.CheckIn("Data storage model", CheckinType.MajorCheckIn);
	                uploadedFile.Publish("Data storage model layout.");
	
	                ctx.Load(uploadedFile);
	                ctx.ExecuteQuery();
	            }
	        }
	    }
	
		```
		**Create a publishing page and set its page layout:**
		```
		public static void CreatePublishingPage(ClientContext clientContext, string pageName, string pagelayoutname, string url, string queryurl)
	        {
	            var publishingPageName = pageName + ".aspx";
	
	            Web web = clientContext.Web;
	            clientContext.Load(web);
	
	            List pages = web.Lists.GetByTitle("Pages");
	            clientContext.Load(pages.RootFolder, f => f.ServerRelativeUrl);
	            clientContext.ExecuteQuery();
	
	            Microsoft.SharePoint.Client.File file =
	                web.GetFileByServerRelativeUrl(pages.RootFolder.ServerRelativeUrl + "/" + pageName + ".aspx");
	            clientContext.Load(file, f => f.Exists);
	            clientContext.ExecuteQuery();
	            if(file.Exists)
	            {
	                file.DeleteObject();
	                clientContext.ExecuteQuery();
	            }
	            PublishingWeb publishingWeb = PublishingWeb.GetPublishingWeb(clientContext, web);
	            clientContext.Load(publishingWeb);
	
	            if (publishingWeb != null)
	            {
	                List publishingLayouts = clientContext.Site.RootWeb.Lists.GetByTitle("Master Page Gallery");
	
	                ListItemCollection allItems = publishingLayouts.GetItems(CamlQuery.CreateAllItemsQuery());
	                clientContext.Load(allItems, items => items.Include(item => item.DisplayName).Where(obj => obj.DisplayName == pagelayoutname));
	                clientContext.ExecuteQuery();
	
	                ListItem layout = allItems.Where(x => x.DisplayName == pagelayoutname).FirstOrDefault();
	                clientContext.Load(layout);
	
	                PublishingPageInformation publishingpageInfo = new PublishingPageInformation()
	                {
	                    Name = publishingPageName,
	                    PageLayoutListItem = layout,
	                };
	
	                PublishingPage publishingPage = publishingWeb.AddPublishingPage(publishingpageInfo);
	                publishingPage.ListItem.File.CheckIn(string.Empty, CheckinType.MajorCheckIn);
	                publishingPage.ListItem.File.Publish(string.Empty);
	                clientContext.ExecuteQuery();
	            }
	            SetSupportCaseContent(clientContext, "SupportCasesPage", url, queryurl);
	        }
		```
		**Create list items**
		```
		public static void AddDemoDataToSupportCasesList(ClientContext ctx, List list, string title,
	                                                       string status, string csr, string customerID)
	    {
	        ListItemCreationInformation itemCreateInfo = new ListItemCreationInformation();
	        ListItem newItem = list.AddItem(itemCreateInfo);
	        newItem["Title"] = title;
	        newItem["FTCAM_Status"] = status;
	        newItem["FTCAM_CSR"] = csr;
	        newItem["FTCAM_CustomerID"] = customerID;
	        newItem.Update();
	        ctx.ExecuteQuery();
	    }
		```
		**Provision content into a publishing page (Content By Search web part, Script Editor web part, Add-in Part) and publish the page:**
		```
		public static void SetSupportCaseContent(ClientContext ctx, string pageName, string url, string queryurl)
	    {
	        List pages = ctx.Web.Lists.GetByTitle("Pages");
	        ctx.Load(pages.RootFolder, f => f.ServerRelativeUrl);
	        ctx.ExecuteQuery();
	
	        Microsoft.SharePoint.Client.File file =
	            ctx.Web.GetFileByServerRelativeUrl(pages.RootFolder.ServerRelativeUrl + "/" + pageName + ".aspx");
	        ctx.Load(file);
	        ctx.ExecuteQuery();
	
	        file.CheckOut();
	
	        LimitedWebPartManager limitedWebPartManager = file.GetLimitedWebPartManager(PersonalizationScope.Shared);
	
	        string quicklaunchmenuFormat =
	            @"<div><a href='{0}/{1}'>Sample Home Page</a></div>
	            <br />
	            <div style='font-weight:bold'>CSR Dashboard</div>
	            <div class='cdsm_mainmenu'>
	                <ul>
	                    <li><a href='{0}/CSRInfo/{1}'>My CSR Info</a></li>
	                    <li><a href='{0}/CallQueue/{1}'>Call Queue</a></li>
	                    <li>
	                        <span class='collapse_arrow'></span>
	                        <span><a href='{0}/CustomerDashboard/{1}'>Customer Dashboard</a></span>
	                        <ul>
	                            <li><a href='{0}/CustomerDashboard/Orders{1}'>Recent Orders</a></li>
	                            <li><a class='current' href='#'>Support Cases</a></li>
	                            <li><a href='{0}/CustomerDashboard/Notes{1}'>Notes</a></li>
	                        </ul>
	                    </li>
	                </ul>
	            </div>
	            <div class='cdsm_submenu'>
	            </div>";
	
	        string quicklaunchmenu = string.Format(quicklaunchmenuFormat, url, queryurl);
	
	        string qlwebPartXml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><webParts><webPart xmlns=\"http://schemas.microsoft.com/WebPart/v3\"><metaData><type name=\"Microsoft.SharePoint.WebPartPages.ScriptEditorWebPart, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c\" /><importErrorMessage>Cannot import this web part.</importErrorMessage></metaData><data><properties><property name=\"Content\" type=\"string\"><![CDATA[" + quicklaunchmenu + "​​​]]></property><property name=\"ChromeType\" type=\"chrometype\">None</property></properties></data></webPart></webParts>";
	        WebPartDefinition qlWpd = limitedWebPartManager.ImportWebPart(qlwebPartXml);
	        WebPartDefinition qlWpdNew = limitedWebPartManager.AddWebPart(qlWpd.WebPart, "SupportCasesZoneLeft", 0);
	        ctx.Load(qlWpdNew);
	
	        //Customer Dropdown List Script web part
	        string dpwebPartXml = System.IO.File.ReadAllText(System.Web.Hosting.HostingEnvironment.ApplicationPhysicalPath + "Assets/CustomerDropDownlist.webpart");
	        WebPartDefinition dpWpd = limitedWebPartManager.ImportWebPart(dpwebPartXml);
	        WebPartDefinition dpWpdNew = limitedWebPartManager.AddWebPart(dpWpd.WebPart, "SupportCasesZoneTop", 0);
	        ctx.Load(dpWpdNew);
	
	        //Support Case CBS Info web part
	        string cbsInfoWebPartXml = System.IO.File.ReadAllText(System.Web.Hosting.HostingEnvironment.ApplicationPhysicalPath + "Assets/SupportCaseCBSWebPartInfo.webpart");
	        WebPartDefinition cbsInfoWpd = limitedWebPartManager.ImportWebPart(cbsInfoWebPartXml);
	        WebPartDefinition cbsInfoWpdNew = limitedWebPartManager.AddWebPart(cbsInfoWpd.WebPart, "SupportCasesZoneMiddle", 0);
	        ctx.Load(cbsInfoWpdNew);
	
	        //Support Case Content By Search web part
	        string cbswebPartXml = System.IO.File.ReadAllText(System.Web.Hosting.HostingEnvironment.ApplicationPhysicalPath + "Assets/SupportCase CBS Webpart/SupportCaseCBS.webpart");
	        WebPartDefinition cbsWpd = limitedWebPartManager.ImportWebPart(cbswebPartXml);
	        WebPartDefinition cbsWpdNew = limitedWebPartManager.AddWebPart(cbsWpd.WebPart, "SupportCasesZoneMiddle", 1);
	        ctx.Load(cbsWpdNew);
	
	        //Support Cases App Part
	        string appPartXml = System.IO.File.ReadAllText(System.Web.Hosting.HostingEnvironment.ApplicationPhysicalPath + "Assets/SupportCaseAppPart.webpart");
	        WebPartDefinition appPartWpd = limitedWebPartManager.ImportWebPart(appPartXml);
	        WebPartDefinition appPartdNew = limitedWebPartManager.AddWebPart(appPartWpd.WebPart, "SupportCasesZoneBottom", 0);
	        ctx.Load(appPartdNew);
	
	        //Get Host Web Query String and show support case list web part
	        string querywebPartXml = System.IO.File.ReadAllText(System.Web.Hosting.HostingEnvironment.ApplicationPhysicalPath + "Assets/GetHostWebQueryStringAndShowList.webpart");
	        WebPartDefinition queryWpd = limitedWebPartManager.ImportWebPart(querywebPartXml);
	        WebPartDefinition queryWpdNew = limitedWebPartManager.AddWebPart(queryWpd.WebPart, "SupportCasesZoneBottom", 1);
	        ctx.Load(queryWpdNew);
	
	
	        file.CheckIn("Data storage model", CheckinType.MajorCheckIn);
	        file.Publish("Data storage model");
	        ctx.Load(file);
	        ctx.ExecuteQuery();
	    }
	```

	+ See the ***FillHostWebSupportCasesToThreshold*** and the ***FillAppWebNotesListToThreshold*** methods in the [SharePointService.cs class](https://github.com/SharePoint/PnP/blob/master/Samples/Core.DataStorageModels/Core.DataStorageModelsWeb/Services/SharePointService.cs) for more details about deploying list items to both the host web and the Add-in web.  
	+ ***Important note:*** The same host web and Add-in web approaches demonstrated in this sample may be applied to any type of artifact to deploy them to the appropriate location.

		**Add list items to a list in the host web:**
		```
		public string FillHostWebSupportCasesToThreshold()
	    	{
		        using (var clientContext = SharePointContext.CreateUserClientContextForSPHost())
		        {
		            List supportCasesList = clientContext.Web.Lists.GetByTitle("Support Cases");
		            ListItemCreationInformation itemCreateInfo = new ListItemCreationInformation();
		            for (int i = 0; i < 500; i++)
		            {
		                ListItem newItem = supportCasesList.AddItem(itemCreateInfo);
		                newItem["Title"] = "Wrong product received." + i.ToString();
		                newItem["FTCAM_Status"] = "Open";
		                newItem["FTCAM_CSR"] = "bjones";
		                newItem["FTCAM_CustomerID"] = "thresholds test";
		                newItem.Update();
		                if (i % 100 == 0)
		                    clientContext.ExecuteQuery();
		            }
		            clientContext.ExecuteQuery();
	
	           
		            clientContext.Load(supportCasesList, l => l.ItemCount);
		            clientContext.ExecuteQuery();
	
		            if(supportCasesList.ItemCount>=5000)
		                return "The Host Web Support Cases List has " + supportCasesList.ItemCount + " items, and exceeds the threshold.";
		            else
		                return 500 + " items have been added to the Host Web Support Cases List. " +
		                 "There are " + (5000 - supportCasesList.ItemCount) + " items left to add.";    
			}
		}
		```
	
		**Add list items to a list in the Add-in web:**
		```
		public string FillAppWebNotesListToThreshold()
	    	{
		        using (var clientContext = SharePointContext.CreateUserClientContextForSPAppWeb())
		        {
		            List notesList = clientContext.Web.Lists.GetByTitle("Notes");
	
		            var itemCreateInfo = new ListItemCreationInformation();
		            for (int i = 0; i < 500; i++)
		            {
		                ListItem newItem = notesList.AddItem(itemCreateInfo);
		                newItem["Title"] = "Notes Title." + i.ToString();
		                newItem["FTCAM_Description"] = "Notes description";
		                newItem.Update();
		                if (i % 100 == 0)
		                    clientContext.ExecuteQuery();
		            }
		            clientContext.ExecuteQuery();
	
		            clientContext.Load(notesList, l => l.ItemCount);
		            clientContext.ExecuteQuery();
	
		            if (notesList.ItemCount >= 5000)
		                return "The Add-in Web Notes List has " + notesList.ItemCount + " items, and exceeds the threshold.";
		            else
		                return 500 + " items have been added to the Add-in Web Notes List. " +
		                               "There are " + (5000-notesList.ItemCount) + " items left to add.";          
		        }
	    	}
		```
	
Related links
=============

- [Master Pages (SharePoint Add-in Recipe)](master-pages-sharepoint-add-in.md)
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================

- [Branding.ClientSideRendering (O365 PnP Code Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.ClientSideRendering)
- [Branding.ApplyBranding (O365 PnP Code Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.ApplyBranding)
- [Branding.ClientSideRendering (O365 PnP Code Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.ClientSideRendering)
- Samples and content at [https://github.com/SharePoint/PnP](https://github.com/SharePoint/PnP)

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D) *partly*
- SharePoint 2013 on-premises – *partly*

*Patterns for dedicated and on-premises are identical with SharePoint Add-in model techniques, but there are differences on the possible technologies that can be used.*
