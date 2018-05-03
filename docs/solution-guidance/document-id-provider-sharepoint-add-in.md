---
title: Document ID provider in the SharePoint Add-in model
ms.date: 11/03/2017
---
Document ID provider in the SharePoint Add-in model
===================================================

Summary
-------

The approach you take to set unique identifiers for documents in SharePoint is different in the new SharePoint Add-in model than it was with Full Trust Code. In a typical Full Trust Code (FTC) / Farm Solution scenario, list item event handlers running SharePoint Server-side Object Model code were used to set unique identifiers for documents and they were deployed via SharePoint Solutions.

In an SharePoint Add-in model scenario, the SharePoint Client-side Object Model (CSOM) and/or the SharePoint REST API are used to set unique identifiers for documents.

High-level guidelines
---------------------

As a rule of a thumb, we would like to provide the following high-level guidelines for setting unique identifiers for documents in the new SharePoint Add-in model.

- Use the SharePoint Client Side Object Model (CSOM), and/or the SharePoint REST APIs to set unique identifiers for documents.
- Currently, there is no supported out-of-the-box mechanism for associating remote processed code to replace the out-of-the-box document ID provider, so this capability is not natively supported to be modified with remote APIs.
- However, like in many cases with the Add-in model, alternative routes are being explored.

How are unique identifiers set on documents?
--------------------------------------------

***Essentially, setting a unique identifier for a document means setting the value of a column in a SharePoint list/document library.***  

The SharePoint (CSOM) and/or REST APIs may be used to set column values, and therefor they may be used to set unique identifiers for documents. See the following articles to learn more about these APIs and how to set column values with them.  

- [Complete basic operations using SharePoint 2013 client library code (MSDN Article)](https://msdn.microsoft.com/en-us/library/office/fp179912.aspx#BasicOps_SPListItemTasks) 
- [Working with lists and list items with REST (MSDN Article)](https://msdn.microsoft.com/en-us/library/office/dn292552.aspx#ListItems)

Options to set unique identifiers for documents
-----------------------------------------------
You have a few options to set unique identifiers for documents stored in SharePoint.

- Use remote event receivers
- Use a background process

Use remote event receivers
--------------------------
In this pattern, remote event receivers fire when new documents are uploaded to SharePoint libraries. The remote event receivers make CSOM or REST API calls to set unique identifiers for documents.

- This pattern executes immediately after a document is uploaded to SharePoint.
	+ As long as the code in the service associated with the remote event receiver executes in a timely fashion, the document IDs are set quickly after a new document is uploaded to SharePoint.
- This pattern only operates on new documents uploaded to SharePoint, it does not set unique identifiers for documents already stored in SharePoint.
- Bulk upload operations will trigger multiple calls to the service associated with the remote event receiver. Plan accordingly to ensure bulk upload operations will not overload the service.
- There is no way for a remote event receiver to notify SharePoint if setting a unique document ID failed.

**When is it a good fit?**

When you need to set unique identifiers for documents quickly after they are uploaded to SharePoint and you do not expect bulk upload operations.

**Getting started**

The [Event Receivers and List Event Receivers (SharePoint Add-in Recipe)](event-receiver-and-list-event-receiver-sharepoint-add-in.md) describes how to implement event receivers in the Add-in model and provides links to several samples and articles.

Use a background process
------------------------
In this pattern, a background process checks documents in SharePoint to determine if they have a unique identifier set. If no unique identifier is found for a document, then the background process sets a unique identifier for the document. The background process makes CSOM or REST API calls to set unique identifiers for documents.

- This pattern executes according to the schedule you define for it.
- This pattern operates on all documents the code is written to crawl.
- We suggest using the SharePoint search service to execute queries that include filters to return a list of documents that do not have unique identifiers set on them.
	+ This pattern performs the fastest and scales better than any other query pattern.
	+ This pattern eliminates custom query logic from the background service.
	+ This pattern requires some search configuration.

		To learn more about search configuration, see the [Search Configuration (SharePoint Add-in Recipe)](search-configuration-sharepoint-add-in.md).
- It is not recommended to recursively query and return metadata about all the documents in a SharePoint environment by looping through web and list objects.
	+ This pattern performs the slowest and scales worse than any other query pattern.  
	+ You may encounter API throttle limits when using this pattern.
	+ This pattern includes custom query logic in the background service.
	+ This pattern may be implemented with an Azure Web Job.

**When is it a good fit?**

- When you need to set unique identifiers for documents and remote event receivers are not an option available to you.
- When you expect to have documents uploaded in bulk.
- When you need to ensure unique document IDs are set on documents.
	+ There is no way for an event receiver to notify SharePoint if setting a unique document ID failed.
- When you need to process documents already stored in SharePoint.

**Getting Started**

The [Remote Timer Jobs (SharePoint Add-in Recipe)](remote-timer-jobs-sharepoint-add-in.md) describes how to implement remote timer jobs in the Add-in model and provides links to several samples and articles.

Related links
=============
- [Event Receivers and List Event Receivers (SharePoint Add-in Recipe)](event-receiver-and-list-event-receiver-sharepoint-add-in.md)
- [Search Configuration (SharePoint Add-in Recipe)](search-configuration-sharepoint-add-in.md)
- [Remote Timer Jobs (SharePoint Add-in Recipe)](remote-timer-jobs-sharepoint-add-in.md)
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================

- [OD4B.NavLinksInjection (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/OD4B.NavLinksInjection)
- Samples and content at [http://aka.ms/OfficeDevPnP](http://aka.ms/OfficeDevPnP)

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D)
- SharePoint 2013 on-premises
