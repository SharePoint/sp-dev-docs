---
title: MMS manipulation in the SharePoint Add-in model
ms.date: 11/03/2017
---
MMS manipulation in the SharePoint Add-in model
===============================================

Summary
-------

The approach you take to perform Create, Read, Update and Delete (CRUD) operations in the Managed Metadata Service (MMS) is different in the new SharePoint Add-in model than it was with Full Trust Code. In a typical Full Trust Code (FTC) / Farm Solution scenario, MMS CRUD operations were performed with the SharePoint server-side object model code and deployed via Farm Solutions. 

In a SharePoint Add-in model scenario, MMS CRUD operations are performed with the client-side object model (CSOM).

**The CSOM provides all of the operations necessary to replicate and synchronize data in the MMS.**

High-Level Guidelines
---------------------

As a rule of a thumb, we recommend the following high-level guidelines for performing MMS CRUD operations.

- MMS CRUD operations should be implemented with the client-side object model.
- Execute the CSOM code with an account that has the appropriate permissions to perform MMS CRUD operations.
- When synchronizing term sets use the ChangeInformation class because it performs better than using GetAllTerms and enumerating the terms every time you want to sync. 


Options to copy and synchronize MMS data
----------------------------------------

You have a couple of options to copy and synchronize MMS data.

- On-premises
	+ Copy database
	+ Use CSOM to copy data
	+ Use CSOM to sync data
- Office 365
	+ Use CSOM to copy data
	+ Use CSOM to sync data

On-premises - copy database
---------------------------
If you have an on-premises SharePoint environment you can copy the MMS database from one farm to another to quickly replicate terms.

**When is it a good fit?**

When you have an on-premises SharePoint environment and you are performing a one-way copy of terms, this is a good option because it may be implemented quickly and easily without writing any code.

On-premises & O365 - Use CSOM to copy data
------------------------------------------
If you have an on-premises or Office 365 SharePoint environment you can use CSOM to copy MMS data from one farm/tenancy to another.  ***You can include both on-premises and Office 365 farms with this approach.***

**When is it a good fit?**

When you have an on-premises SharePoint or Office 365 or a hybrid environment and you are copying MMS data between two or more SharePoint farms/tenancies, this is a good option because it gives you the flexibility to copy the MMS data from one farm to another.

**Getting started**

The following sample demonstrates how to perform MMS CRUD operations.

- [Core.MMS (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.MMS)

On-premises & O365 - Use CSOM to sync data
------------------------------------------
If you have an on-premises SharePoint environment you can use CSOM to sync MMS data between farms. ***You can include both on-premises and Office 365 farms/tenancies with this approach.***

**When is it a good fit?**

When you have an on-premises SharePoint or Office 365 or a hybrid environment and you are synchronizing MMS data between two or more SharePoint farms/tenancies, this is a good option because it gives you the flexibility to perform true synchronization and include as many sources as you like.

**Getting started**

The following sample demonstrates how to build a synchronization tool for MMS data.

- [Core.MMSSync (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.MMSSync)

Related links
=============
- [Synchronize term sets using CSOM (MSDN Blog Article Documentation)](http://blogs.msdn.com/b/frank_marasco/archive/2014/06/29/synchronize-term-sets-with-the-term-store-csom.aspx)
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================

- [Core.MMS (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.MMS)
- [Core.MMSSync (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.MMSSync)
- Samples and content at [https://github.com/SharePoint/PnP](https://github.com/SharePoint/PnP)

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D) *partly*
- SharePoint 2013 on-premises – *partly*

*Patterns for dedicated and on-premises are identical with Add-in model techniques, but there are differences on the possible technologies that can be used.*
