---
title: OneDrive Multi-Geo 
description: This offering allows multinational corporations which has one or more geographical locations, to expand their Office 365 tenancy to satisfy data residency requirements.
ms.date: 6/18/2019
localization_priority: Priority
---

# OneDrive and SharePoint Online Multi-Geo 


OneDrive Online Multi-Geo allows multinational corporations that have one or more geographical locations, to expand their Office 365 ODSP tenancy to satisfy data residency requirements.

In a OneDrive Multi-Geo configuration, your Office 365 tenant consists of a central location (also known as a default location) and one or more satellite geo (geographical) locations. A single tenancy spans one or more additional geo locations. Your tenant information, including geo locations, is stored in Azure Active Directory (Azure AD).

> [!NOTE] 
> OneDrive Online Multi-Geo features are not designed to optimize performance. They are designed to meet data residency requirements.

The following are key terms related to the OneDrive and SharePoint Online Multi-Geo:

- **Tenant**: An organization’s representation in Office 365, typically with one or more domains. For example, contoso.com.

- **Geo location (or instance)**: A Multi-Geo tenant can have multiple geo locations (or instances) associated with it. Resources such as mailboxes or drives can be stored in these locations. For example, Contoso is a OneDrive and SharePoint Online Multi-Geo tenant with three geo locations: NAM, EUR, and APC.

- **Preferred Data Location (PDL)**: A property set by the Azure AD administrator for the user or group object that Office 365 services use to provision the corresponding data-at-rest resources (mailbox, OneDrive, groups sites, and so on).

If you're developing new applications that need to work in a OneDrive and SharePoint Online Multi-Geo tenant, or if you need to update your existing applications to be Multi-Geo-aware, use the content in the following table to learn more. 

<br/>

|**Article**|**Description**|
|:-----|:-----|
|[Permission model in a Multi-Geo tenant](multigeo-permissions.md)|Describes the underlying security model in a Multi-Geo tenant.|
|[Discover a Multi-Geo tenant configuration](multigeo-discovery.md)|Explains how to detect and understand the geo setup, including the default and satellite geo locations.|
|[Access OneDrive for Business in a Multi-Geo tenant](multigeo-onedrive.md)|Describes how to work with users' OneDrive for Business sites, also known as personal sites or my sites, in Multi-Geo tenants.|
|[Work with sites in a Multi-Geo environment](multigeo-sites.md)|Describes how to work with SharePoint sites across the default and satellite geo locations of a Multi-Geo tenant.|
|[Provision classic team sites in a Multi-Geo environment](multigeo-sites-provisioning.md) |Explains how to use the CSOM CreateSite method call to provision classic SharePoint team site collections.|
|[Manage apps and add-ins in a Multi-Geo tenant](multigeo-apps.md)|Explains the impact of deploying and managing SharePoint Framework apps or SharePoint Add-ins in a Multi-Geo tenant.|
|[Work with user profiles in a Multi-Geo tenant](multigeo-userprofileexperience.md)|Explains how to define a preferred data location for a user, detect a user's profile location and personal site URL, and read and update default and custom user profile properties.|
|[Search in a Multi-Geo tenant](multigeo-search.md)|Describes how search works in a Multi-Geo tenant.|
|[Manage metadata in a Multi-Geo tenant](multigeo-managedmetadata.md)|Explains how to take advantage of SharePoint managed metadata in a Multi-Geo environment.|
|[Define and publish content types in a Multi-Geo tenant](multigeo-contenttypehub.md)|Explains how the content type hub works in a Multi-Geo tenant.|
|[Connect to external data using BCS and the Secure Store Service in a Multi-Geo tenant](multigeo-bcsandsecurestore.md)|Describes how to use Business Connectivity Services and the Secure Store Service in a Multi-Geo tenant.|
|[Set up a Multi-Geo sample application](multigeo-sampleapplicationsetup.md) |Explains how to configure Multi-Geo sample applications. |

## See also

- [Multi-Geo Capabilities in OneDrive and SharePoint Online in Office 365](https://docs.microsoft.com/en-us/office365/enterprise/multi-geo-capabilities-in-onedrive-and-sharepoint-online-in-office-365)
- [Office 365 development and SharePoint PnP solution guidance](office-365-development-patterns-and-practices-solution-guidance.md)

