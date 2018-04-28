---
title: List instance in the SharePoint Add-in model
ms.date: 11/03/2017
---
List instance in the SharePoint Add-in model
============================================

Summary
-------

The approach you take to create list instances is different in the new SharePoint Add-in model than it was with Full Trust Code. In a typical Full Trust Code (FTC) / Farm Solution scenario, list instances were created with declarative code and deployed via SharePoint Solutions. 

In a SharePoint Add-in model scenario, the remote provisioning pattern is used to create list instances.

High-level guidelines
---------------------

As a rule of a thumb, we would like to provide the following high-level guidelines to create list instances.

- Use the remote provisioning pattern to create list instances.
- Do not use declarative code (elements.xml) to create list instances.

**Getting started**

The following O365 PnP code sample and video demonstrates how to create a SharePoint Add-in that provides a user interface that allows end users to create new document libraries. It also demonstrates how to create a document library with specific configurations that collectively represent a template. In this sample you will find the code that creates a list instance.

- [ECM.DocumentLibraries (O365 PnP Code Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/ECM.DocumentLibraries)

The following video walks through the code sample.

- [Document and list templates with app model (O365 PnP Video)](http://channel9.msdn.com/blogs/OfficeDevPnP/Document-and-list-templates-with-app-model)

Use the AddList method in the SharePoint CSOM to create a list instance via the remote provisioning pattern. The following code taken from the [ECM.DocumentLibraries (O365 PnP Code Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/ECM.DocumentLibraries) illustrates how to do it.

	private void CreateLibrary(ClientContext ctx, Library library, string associateContentTypeID) 
	{
	    if (!ctx.Web.ListExists(library.Title))
	    {
		   // Create List Instance
	       ctx.Web.AddList(ListTemplateType.DocumentLibrary, library.Title, false);
	       List _list = ctx.Web.GetListByTitle(library.Title);
		   
		   //Set Description
	       if(!string.IsNullOrEmpty(library.Description)) 
	       {
	        _list.Description = library.Description;
	       }

		   //Turn on versioning	
	       if(library.VerisioningEnabled) {
	          _list.EnableVersioning = true;
	       }
		   
			//Turn on Content Types
	       _list.ContentTypesEnabled = true;
	       _list.Update();

		   //Add Content Type to List
	       ctx.Web.AddContentTypeToListById(library.Title, associateContentTypeID, true);
	
	       //Remove the default Document Content Type
	       _list.RemoveContentTypeByName(ContentTypeManager.DEFAULT_DOCUMENT_CT_NAME);

	       ctx.Web.Context.ExecuteQuery();
	    }
	}

The following code sample illustrates how to create a list instance with the SharePoint REST API.  This sample comes from the [Lists and list items REST API reference (MSDN Article)](https://msdn.microsoft.com/en-us/library/office/dn531433.aspx)

	executor.executeAsync({
	  url: "<app web url>/_api/SP.AppContextSite(@target)/web/lists
	    ?@target='<host web url>'",
	  method: "POST",
	  body: "{ '__metadata': { 'type': 'SP.List' }, 'AllowContentTypes': true, 'BaseTemplate': 100,
	    'ContentTypesEnabled': true, 'Description': 'My list description', 'Title': 'Test title' }",
	  headers: { "content-type": "application/json;odata=verbose" },
	  success: successHandler,
	  error: errorHandler
	});

Related links
=============
- [Lists and list items REST API reference (MSDN Article)](https://msdn.microsoft.com/en-us/library/office/dn531433.aspx)
- [List Definitions / List Templates (SharePoint Add-in model recipe)](list-definition-template-sharepoint-add-in.md)
- [Document and list templates with app model (O365 PnP Video)](http://channel9.msdn.com/blogs/OfficeDevPnP/Document-and-list-templates-with-app-model)
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================

- [ECM.DocumentLibraries (O365 PnP Code Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/ECM.DocumentLibraries)
- Samples and content at [https://github.com/SharePoint/PnP](https://github.com/SharePoint/PnP)

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D) *partly*
- SharePoint 2013 on-premises – *partly*

*Patterns for dedicated and on-premises are identical with SharePoint Add-in model techniques, but there are differences on the possible technologies that can be used.*
