---
title: Replace files deployed using modules in SharePoint farm solutions
description: Replace files, such as master pages and page layouts in SharePoint, that were deployed using modules in farm solutions by uploading and updating references to use new files.
ms.date: 5/4/2018
---

# Replace files deployed using modules in SharePoint farm solutions

If you deployed files declaratively by using modules in farm solutions, learn how to transform them into new solutions that update references to files and provide similar functionality by using the client object model (CSOM). In the past, modules were used to deploy files such as master pages and page layouts. 

> [!IMPORTANT] 
> Farm solutions cannot be migrated to SharePoint Online. By applying the techniques and code described in this article, you can build a new solution with similar functionality that your farm solutions provide, update references to files, and then the new solution can be deployed to SharePoint Online. You can then disable the feature and retract the previous farm solution. 
> 
> The code in this article requires additional code to provide a fully working solution. For example, this article does not discuss how to authenticate with Office 365, how to implement required exception handling, and so on. For additional code samples, see the [Office 365 Developer Patterns and Practices project](https://github.com/SharePoint/PnP).

> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

This article describes how to use the transformation process to:

- Upload and update references to master pages
- Upload and update references to page layouts
    
Use this transformation process when:

- Your existing farm solutions used modules to deploy files.  
- You want to replace master pages and page layouts in farm solutions with new master pages and page layouts so that they can be migrated to SharePoint Online.
- You have set document content types on master pages or page layouts in your farm solution declaratively.

## Before you begin

Ideally, you should review your existing farm solutions, learn about the techniques described in this article, and then plan how to apply these techniques to your scenarios. If you are unfamiliar with farm solutions or do not have an existing farm solution to work with, it might be helpful for you to learn about farm solutions. 

For more information, see [Build farm solutions in SharePoint](../general-development/build-farm-solutions-in-sharepoint.md).

### Enable the publishing features on the site collection and site

Before running your code sample, enable the publishing features on the site collection and site with the following procedures.

#### To enable the SharePoint Server Publishing Infrastructure feature on the site collection
    
1. Open your SharePoint site and go to **Settings** > **Site Settings**.
    
2. In **Site Collection Administration**, choose **Site collection features**.
    
3. On **SharePoint Server Publishing Infrastructure**, choose **Activate**.
    
#### To enable the SharePoint Server Publishing feature on the site
    
1. Open your SharePoint site and go to **Settings** > **Site Settings**.
    
2. In **Site Actions**, choose **Manage site features**.
    
3. On **SharePoint Server Publishing**, choose **Activate**.
    

### Set up your Visual Studio project

1. Download the [sample project](https://github.com/OfficeDev/TrainingContent/blob/master/SharePoint/AddIns/14%20Transformation%20guidance%20from%20farm%20solutions%20to%20add-in%20model/Student.zip). Choose **View Raw** to start downloading the sample project, extract the files from the zip file, and then navigate to the Module9/ModuleReplacement folder.
    
2. Open ModuleReplacement.sln.
    
3. Open settings.xml. Review and update the following attributes to meet your requirements:
    
	- **masterPage** element - Uses the **file** attribute to specify the new master page to deploy to the Master Page Gallery, and the **replaces** attribute to specify the existing master page in the Master Page Gallery.
    
	- **pageLayout** element - Uses the **file** attribute to specify the new page layout file, the **replaces** attribute to specify the existing page layout file, and several other attributes to specify additional page layout information.

	```XML
		<?xml version="1.0" encoding="utf-8" ?>
		<branding>
		  <masterPages>
		       <masterPage file="contoso_app.master" replaces="contoso.master"/>
		  </masterPages>
		  <pageLayouts>
		       <pageLayout file="ContosoWelcomeLinksApp.aspx" replaces="ContosoWelcomeLinks.aspx" title="Contoso Welcome Links add-in" associatedContentTypeName="Contoso Web Page" defaultLayout="true" />
		  </pageLayouts>
		</branding>
	
	```

4. In MasterPageGalleryFiles.cs, the **MasterPageGalleryFile** and **LayoutFile** classes define business objects that store information about the new master pages and page layouts to be uploaded to SharePoint.

## Upload and update references to master pages

To upload and update references to the new master pages on your SharePoint site:

1. In Program.cs, add the following **using** statement.
    
   ```csharp
		using System.Security;
   ```

2. In Program.cs, add the following methods to perform authentication to Office 365.
    
  ```csharp
  static SecureString GetPassword()
        {
            SecureString sStrPwd = new SecureString();
            try
            {
                Console.Write("Password: ");

                for (ConsoleKeyInfo keyInfo = Console.ReadKey(true); keyInfo.Key != ConsoleKey.Enter; keyInfo = Console.ReadKey(true))
                {
                    if (keyInfo.Key == ConsoleKey.Backspace)
                    {
                        if (sStrPwd.Length > 0)
                        {
                            sStrPwd.RemoveAt(sStrPwd.Length - 1);
                            Console.SetCursorPosition(Console.CursorLeft - 1, Console.CursorTop);
                            Console.Write(" ");
                            Console.SetCursorPosition(Console.CursorLeft - 1, Console.CursorTop);
                        }
                    }
                    else if (keyInfo.Key != ConsoleKey.Enter)
                    {
                        Console.Write("*");
                        sStrPwd.AppendChar(keyInfo.KeyChar);
                    }

                }
                Console.WriteLine("");
            }
            catch (Exception e)
            {
                sStrPwd = null;
                Console.WriteLine(e.Message);
            }

            return sStrPwd;
        }

        static string GetUserName()
        {
            string strUserName = string.Empty;
            try
            {
                Console.Write("Username: ");
                strUserName = Console.ReadLine();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                strUserName = string.Empty;
            }
            return strUserName;
        }
  ```

3. In Program.cs, add the following code to the **Main** method, which performs the following tasks:
    
	1. Loads the settings.xml file.
    
	2. Gets a reference to the Master Page Gallery by using [GetCatalog](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.web.getcatalog.aspx) (116). 
	
	   Master pages are uploaded to the Master Page Gallery. The identifier of the list template of the Master Page Gallery is 116. For more information, see [ListTemplate Element (Site)](../schema/listtemplate-element-site.md). Other details about the Master Page Gallery are loaded, including using [List.ContentTypes](https://msdn.microsoft.com/library/microsoft.sharepoint.client.list.contenttypes.aspx) to get the content types associated with the Master Page Gallery.
    
	3. Loads properties of the Web object including Web.ContentTypes, Web.MasterUrl, and Web.CustomMasterUrl.
    
	4. Sets **parentMasterPageContentTypeId** to the content type ID of master pages. For more information, see [Base Content Type Hierarchy](https://msdn.microsoft.com/library/ms452896%28v=office.14%29.aspx).
    
	5. Gets the content type of master pages from the Master Page Gallery. This content type is used to set the content type of the new master page later in this article. 
    
		```csharp
		static void Main(string[] args)
			{ 
				string userName = GetUserName();
				SecureString pwd = GetPassword();
				
			// End program if no credentials were entered.
				if (string.IsNullOrEmpty(userName) || (pwd == null))
				return;
									
				using (var clientContext = new ClientContext("http://sharepoint.contoso.com"))
				{
								
					clientContext.AuthenticationMode = ClientAuthenticationMode.Default;
					clientContext.Credentials = new SharePointOnlineCredentials(userName, pwd);
						
					XDocument settings = XDocument.Load("settings.xml");
		
					// Get a reference to the Master Page Gallery which will be used to upload new master pages. 
				
					Web web = clientContext.Web;
					List gallery = web.GetCatalog(116);
					Folder folder = gallery.RootFolder;
				
					// Load additional Master Page Gallery properties.
					clientContext.Load(folder);
					clientContext.Load(gallery,
										g => g.ContentTypes,
										g => g.RootFolder.ServerRelativeUrl);
			
					// Load the content types and master page information from the web.
					clientContext.Load(web,
										w => w.ContentTypes,
										w => w.MasterUrl,
										w => w.CustomMasterUrl);
					clientContext.ExecuteQuery();
		
					// Get the content type for the master page from the Master Page Gallery using the content type ID for masterpages (0x010105).
					const string parentMasterPageContentTypeId = "0x010105";  
					ContentType masterPageContentType = gallery.ContentTypes.FirstOrDefault(ct => ct.StringId.StartsWith(parentMasterPageContentTypeId));
					UploadAndSetMasterPages(web, folder, clientContext, settings, masterPageContentType.StringId);
								
				}
		
			}
		```

4. In Program.cs, add the **UploadAndSetMasterPages** method, which creates a list of **MasterPageGalleryFile** business objects by:
    
	1. Reading all the **masterPage** elements defined in settings.xml.
    
	2. For each **masterPage** element, which specifies a master page to upload to SharePoint, loading the attribute values into a **MasterPageGalleryFile** business object.
    
	3. For each **MasterPageGalleryFile** business object in the list, making a call to **UploadAndSetMasterPage**.
    
		```csharp
			
		private static void UploadAndSetMasterPages(Web web, Folder folder, ClientContext clientContext, XDocument settings, string contentTypeId)
		{
			IList<MasterPageGalleryFile> masterPages = (from m in settings.Descendants("masterPage")
														select new MasterPageGalleryFile
														{
															File = (string)m.Attribute("file"),
															Replaces = (string)m.Attribute("replaces"),
															ContentTypeId = contentTypeId
														}).ToList();
			foreach (MasterPageGalleryFile masterPage in masterPages)
			{
				UploadAndSetMasterPage(web, folder, clientContext, masterPage);
			}
		}
		```

5. In Program.cs, add the **UploadAndSetMasterPage** method, which performs the following tasks:
    
	1. Checks out the master page.
    
	2. Uploads the new file by using [FileCreationInformation](https://msdn.microsoft.com/library/microsoft.sharepoint.client.filecreationinformation.aspx).
    
	3. Gets the list item associated with the newly uploaded file.
    
	4. Sets various properties on the list item, including setting the content type ID of the list item to the content type ID of the master page.
    
	5. Checks in, publishes, and approves the new master page. 
    
	6. If the current site's master page or custom master page URL is set to the old master page, updates [Web.MasterUrl](https://msdn.microsoft.com/library/microsoft.sharepoint.client.web.masterurl.aspx) or[Web.CustomMasterUrl](https://msdn.microsoft.com/library/microsoft.sharepoint.client.web.custommasterurl.aspx) to use the newly uploaded master page URL.
    
		```csharp
		private static void UploadAndSetMasterPage(Web web, Folder folder, ClientContext clientContext, MasterPageGalleryFile masterPage)
		{
			using (var fileReadingStream = System.IO.File.OpenRead(masterPage.File))
			{
				// If necessary, ensure that the master page is checked out.
				PublishingHelper.CheckOutFile(web, masterPage.File, folder.ServerRelativeUrl);
		
		// Use the FileCreationInformation class to upload the new file.
				var fileInfo = new FileCreationInformation();
				fileInfo.ContentStream = fileReadingStream;
				fileInfo.Overwrite = true;
				fileInfo.Url = masterPage.File;
				File file = folder.Files.Add(fileInfo);
		
		// Get the list item associated with the newly uploaded master page file.
				ListItem item = file.ListItemAllFields;
				clientContext.Load(file.ListItemAllFields);
				clientContext.Load(file,
									f => f.CheckOutType,
									f => f.Level,
									f => f.ServerRelativeUrl);
				clientContext.ExecuteQuery();
		
		item["ContentTypeId"] = masterPage.ContentTypeId;
				item["UIVersion"] = Convert.ToString(15);
				item["MasterPageDescription"] = "Master Page Uploaded using CSOM";
				item.Update();
				clientContext.ExecuteQuery();
		
		// If necessary, check in, publish, and approve the new master page file. 
				PublishingHelper.CheckInPublishAndApproveFile(file);
		
		// On the current site, update the master page references to use the new master page. 
				if (web.MasterUrl.EndsWith("/" + masterPage.Replaces))
				{
					web.MasterUrl = file.ServerRelativeUrl;
				}
				if (web.CustomMasterUrl.EndsWith("/" + masterPage.Replaces))
				{
					web.CustomMasterUrl = file.ServerRelativeUrl;
				}
				web.Update();
				clientContext.ExecuteQuery();
			}
		}
		```

## Upload and update references to page layouts

> [!NOTE] 
> The code examples in this section build on the code examples in the previous section of this article. 

To replace page layouts that were deployed by using modules in farm solutions and to upload and update references to use the new page layout files:

1. Update the **Main** method with the following code. This code contains additional steps for uploading and updating references to page layout files, including:
    
	1. Setting **parentPageLayoutContentTypeId** to the page layout's content type ID.
    
	2. Getting a content type that matches **parentPageLayoutContentTypeId** from the Master Page Gallery.
    
	3. Calling **UploadPageLayoutsAndUpdateReferences**.
    
		```csharp
					static void Main(string[] args)
			{ 
				string userName = GetUserName();
				SecureString pwd = GetPassword();
				
			// End program if no credentials were entered.
				if (string.IsNullOrEmpty(userName) || (pwd == null))
				return;
									
				using (var clientContext = new ClientContext("http://sharepoint.contoso.com"))
				{
								
					clientContext.AuthenticationMode = ClientAuthenticationMode.Default;
					clientContext.Credentials = new SharePointOnlineCredentials(userName, pwd);
						
					XDocument settings = XDocument.Load("settings.xml");
		
					// Get a reference to the Master Page Gallery, which will be used to upload new master pages. 
				
					Web web = clientContext.Web;
					List gallery = web.GetCatalog(116);
					Folder folder = gallery.RootFolder;
				
					// Load additional Master Page Gallery properties. 
					clientContext.Load(folder);
					clientContext.Load(gallery,
										g => g.ContentTypes,
										g => g.RootFolder.ServerRelativeUrl);
			
					// Load the content types and master page information from the web.
					clientContext.Load(web,
										w => w.ContentTypes,
										w => w.MasterUrl,
										w => w.CustomMasterUrl);
					clientContext.ExecuteQuery();
		
					// Get the content type for the master page from the Master Page Gallery using the content type ID for masterpages (0x010105).
					const string parentMasterPageContentTypeId = "0x010105";  
					ContentType masterPageContentType = gallery.ContentTypes.FirstOrDefault(ct => ct.StringId.StartsWith(parentMasterPageContentTypeId));
					UploadAndSetMasterPages(web, folder, clientContext, settings, masterPageContentType.StringId);
								
				// Get the content type ID for the page layout, and then update references to the page layouts.
				const string parentPageLayoutContentTypeId = "0x01010007FF3E057FA8AB4AA42FCB67B453FFC100E214EEE741181F4E9F7ACC43278EE811"; 
				ContentType pageLayoutContentType = gallery.ContentTypes.FirstOrDefault(ct => ct.StringId.StartsWith(parentPageLayoutContentTypeId));
				UploadPageLayoutsAndUpdateReferences(web, folder, clientContext, settings, pageLayoutContentType.StringId);
				}
		
			}
		```

2. In Program.cs, add the **UploadPageLayoutsAndUpdateReferences** method, which performs the following steps:
    
   1. Reads the page layout replacement information by reading the **pagelayout** elements from settings.xml, storing the page layout replacement information in **LayoutFile** business objects, and adding all the business objects to a list.
    
   2. For each page layout to replace:
    
       - Queries the site's content types by using [Web.ContentTypes](https://msdn.microsoft.com/library/microsoft.sharepoint.client.web.contenttypes.aspx) to find a matching content type where the name of the site's content type is equal to the **associatedContentTypeName** specified in settings.xml for the new page layout.
	   
	   - Calls **UploadPageLayout**.
	   
	   - Calls **UpdatePages** to update existing pages to use the new page layouts.

			```csharp
					private static void UploadPageLayoutsAndUpdateReferences(Web web, Folder folder, ClientContext clientContext, XDocument settings, string contentTypeId)
			{
				// Read the replacement settings stored in pageLayout elements in settings.xml.
				IList<LayoutFile> pageLayouts = (from m in settings.Descendants("pageLayout")
											select new LayoutFile
											{
												File = (string)m.Attribute("file"),
												Replaces = (string)m.Attribute("replaces"),
												Title = (string)m.Attribute("title"),
												ContentTypeId = contentTypeId,
												AssociatedContentTypeName = (string)m.Attribute("associatedContentTypeName"),
												DefaultLayout = m.Attribute("defaultLayout") != null &amp;&amp; (bool)m.Attribute("defaultLayout")
											}).ToList();
			// Update the content type association.
						foreach (LayoutFile pageLayout in pageLayouts)
				{
					ContentType associatedContentType =
						web.ContentTypes.FirstOrDefault(ct => ct.Name == pageLayout.AssociatedContentTypeName);
					pageLayout.AssociatedContentTypeId = associatedContentType.StringId;                
					UploadPageLayout(web, folder, clientContext, pageLayout);
				}
						
						UpdatePages(web, clientContext, pageLayouts);
					}

			```

3.  In Program.cs, add the **UploadPageLayout** method, which performs the following tasks:
    
	1. Checks out the page layout file.
    
	2. Uploads the new file by using [FileCreationInformation](https://msdn.microsoft.com/library/microsoft.sharepoint.client.filecreationinformation.aspx).
    
	3. Gets the list item associated with the newly uploaded file.
    
	4. Sets various properties on the list item, including **ContentTypeId** and **PublishingAssociatedContentType**.
    
	5. Checks in, publishes, and approves the new page layout file.
    
	6. To remove references to the old page layout file, calls **PublishingHelper.UpdateAvailablePageLayouts** to update the XML stored in the **PageLayouts** property on the current site.
    
	7. If the newly uploaded page layout file's **defaultLayout** attribute value from settings.xml is set to **true**, uses **PublishingHelper.SetDefaultPageLayout** to update the XML stored in the **DefaultPageLayout** property on the current site.

	   ```csharp
		private static void UploadPageLayout(Web web, Folder folder, ClientContext clientContext, LayoutFile pageLayout)
		{
			using (var fileReadingStream = System.IO.File.OpenRead(pageLayout.File))
			{
				PublishingHelper.CheckOutFile(web, pageLayout.File, folder.ServerRelativeUrl);
				// Use FileCreationInformation to upload the new page layout file.
				var fileInfo = new FileCreationInformation();
				fileInfo.ContentStream = fileReadingStream;
				fileInfo.Overwrite = true;
				fileInfo.Url = pageLayout.File;
				File file = folder.Files.Add(fileInfo);
				// Get the list item associated with the newly uploaded file.
				ListItem item = file.ListItemAllFields;
				clientContext.Load(file.ListItemAllFields);
				clientContext.Load(file,
									f => f.CheckOutType,
									f => f.Level,
									f => f.ServerRelativeUrl);
				clientContext.ExecuteQuery();
		
		item["ContentTypeId"] = pageLayout.ContentTypeId;
				item["Title"] = pageLayout.Title;
				item["PublishingAssociatedContentType"] = string.Format(";#{0};#{1};#", pageLayout.AssociatedContentTypeName, pageLayout.AssociatedContentTypeId);
				item.Update();
				clientContext.ExecuteQuery();
		
		PublishingHelper.CheckInPublishAndApproveFile(file);
		
		PublishingHelper.UpdateAvailablePageLayouts(web, clientContext, pageLayout, file);
		
		if (pageLayout.DefaultLayout)
				{
					PublishingHelper.SetDefaultPageLayout(web, clientContext, file);
				}
			}
		}
	   ```

4. In Program.cs, add the **UpdatePages** method, which performs the following tasks:
    
	1. Gets the **Pages** library, and then gets all the list items in the **Pages** library.
    
	2. For each list item, uses the list item's **PublishingPageLayout** field to find a matching page layout to update, which was specified in settings.xml and is now stored in **pagelayouts** . If the list item's **PublishingPageLayout** field needs to be updated to refer to the new page layout:
    
	   - Checks out the list item's file by using **PublishingHelper.CheckOutFile**.
    
	   - Updates the URL of the page layout to refer to the new page layout file, and then updates the **PublishingPageLayout** field of the list item.
    
	   - Checks in, publishes, and approves the file referenced by the list item.

			```csharp
			private static void UpdatePages(Web web, ClientContext clientContext, IList<LayoutFile> pageLayouts)
			{
				// Get the Pages Library, and then get all the list items in it.
				List pagesList = web.Lists.GetByTitle("Pages");
				var allItemsQuery = CamlQuery.CreateAllItemsQuery();
				ListItemCollection items = pagesList.GetItems(allItemsQuery);
				clientContext.Load(items);
				clientContext.ExecuteQuery();
				foreach (ListItem item in items)
				{
					// Only update those pages that are using a page layout which is being replaced.
					var pageLayout = item["PublishingPageLayout"] as FieldUrlValue;
					if (pageLayout != null)
					{
						LayoutFile matchingLayout = pageLayouts.FirstOrDefault(p => pageLayout.Url.EndsWith("/" + p.Replaces));
						if (matchingLayout != null)
						{
							// Check out the page so that we can update the page layout. 
							PublishingHelper.CheckOutFile(web, item);
			
			// Update the pageLayout reference.
							pageLayout.Url = pageLayout.Url.Replace(matchingLayout.Replaces, matchingLayout.File);
							item["PublishingPageLayout"] = pageLayout;
							item.Update();
							File file = item.File;
			
			// Get the file and other attributes so that you can check in the file.
							clientContext.Load(file,
								f => f.Level,
								f => f.CheckOutType);
							clientContext.ExecuteQuery();
			
							PublishingHelper.CheckInPublishAndApproveFile(file);
						}
					}
				}
			}
			```

## See also

- [Transform farm solutions to the SharePoint Add-in model](transform-farm-solutions-to-the-sharepoint-app-model.md)
