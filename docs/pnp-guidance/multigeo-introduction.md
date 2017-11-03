# Introduction to OneDrive and SharePoint Online Multi-Geo Preview

> **Important:** OneDrive and SharePoint Online Multi-Geo is currently in preview and is subject to change.

The OneDrive and SharePoint Online (ODSP) Multi-Geo Preview allows multinational corporations (MNCs) that are part of the preview and have one or more geographical locations to expand their Office 365 ODSP tenancy to satisfy data residency requirements.

In an ODSP Multi-Geo Preview configuration, your Office 365 tenant consists of a central location (also known as a default location) and one or more satellite geo locations. A single tenancy spans one or more additional geo locations. Your tenant information, including geo locations, is stored in Azure Active Directory (AAD).

<!-- I changed "mastered" to "stored" in AAD. Please verify. -->

>**Note:** ODSP Multi-Geo Preview features are not designed to optimize performance. They are designed to meet data residency requirements.

The following are key terms related to ODSP Multi-Geo Preview:

- **Tenant** – An organization’s representation in Office 365, typically with one or more domains. For example, contoso.com.

- **Geo location (or instance)** – A Multi-Geo tenant can have multiple geo locations (or instances) associated with it. Resources like mailboxes or drives can be stored in these locations. For example, Contoso is an ODSP Multi-Geo Preview tenant with three geo locations: NAM, EUR, and APC.

- **Preferred Data Location (PDL)** – A property set by the AAD administrator for the user or group object that Office 365 services use to provision the corresponding data-at-rest resources (mailbox, OneDrive, groups sites, and so on).

If you're developing new applications that need to work in an ODSP Multi-Geo Preview tenant, or if you need to update your existing applications to be Multi-Geo aware, use the content in the following table to learn more. 

|**Article**|**Description**|
|:-----|:-----|
|[Permissions model](multigeo-permissions.md)|Describes the underlying security model in a Multi-Geo tenant.|
|[Discover a Mutli-Geo configuration for a SharePoint tenant](multigeo-discovery.md)|Explains how to detect and understand the geo setup, including the default and satellite geo locations.|
|[Access Onedrive for Business in a Multi-Geo tenant](multigeo-onedrive.md)|Describes how to work with users' OneDrive for Business (ODB) sites, also known as personal sites or my sites, in Mutli-Geo tenants.|
|[Work with SharePoint sites in a Multi-Geo tenant](multigeo-sites.md)|Describes how to work with SharePoint sites across the default and satellite geo locations of a Multi-Geo tenant.|
|[Multi-Geo user profile experience](multigeo-userprofileexperience.md)|In a Multi-Geo tenant you can define a preferred data location for a user which is explained in this article. Also covered is how to find the user's OneDrive site and how to read/update out-of-the-box and custom user profile properties.|
|[Search in a Multi-Geo SharePoint tenant](multigeo-search.md)|Describes how search works in a Multi-Geo tenant.|
|[Managed metadata in a Multi-Geo tenant](multigeo-managedmetadata.md)|Explains how to take advantage of SharePoint managed metadata in a Multi-Geo environment.|
|[Content type hub in a Multi-Geo tenant](multigeo-contenttypehub.md)|Explains how the content type hub works in a Multi-Geo tenant.|
|[BCS and the Secure Store in a Multi-Geo tenant](multigeo-bcsandsecurestore.md)|Describes how to use Business Connectivity Services and the Secure Store in a Multi-Geo tenant.|




