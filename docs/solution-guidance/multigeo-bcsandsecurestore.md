---
title: Connect to external data using BCS and the Secure Store Service in a Multi-Geo tenant
description: To use external data, such as data from your other business applications or partner resources in SharePoint Online, you can use Business Connectivity Services (BCS) together with the Secure Store Service. 
ms.date: 4/27/2018
---

# Connect to external data using BCS and the Secure Store Service in a Multi-Geo tenant 

> [!IMPORTANT] 
> OneDrive for Business Multi-Geo is available, SharePoint Online Multi-Geo is currently in preview and is subject to change.

When you want to use external data, such as data from your other business applications or partner resources in SharePoint Online, you can use Business Connectivity Services (BCS) together with the Secure Store Service. 

BCS supports integrated data solutions to bring external data into SharePoint. This enables SharePoint to interact with data that isn't hosted in its environment. BCS can connect to external databases, data available via a web service, data that is published as an OData source, and other types of external business data. 

To connect to external data, you use BCS to set up a connection to the target application, and you use the Secure Store Service to manage the credentials that the external data source requires.

A SharePoint Multi-Geo tenant has one default geo location and one or more satellite locations. The satellite locations have unique domain addresses that correspond to those geo locations. Each geo location is logically separated from the others to ensure data residency. To configure BCS for a Multi-Geo tenant, you create a connection between the data source and each SharePoint geo location that you want to populate with external data. 

## See also

- [Business Connectivity Services in SharePoint Server](https://docs.microsoft.com/en-us/SharePoint/administration/business-connectivity-services-overview)
- [Create or edit a Secure Store Target Application](https://support.office.com/en-us/article/Create-or-edit-a-Secure-Store-Target-Application-F724DEC2-CE28-4B76-9235-31728DCE64B5) 
- [OneDrive and SharePoint Online Multi-Geo Preview](multigeo-introduction.md)


