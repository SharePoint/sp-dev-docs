---
title: Information architecture guidance for SharePoint Online portals
description: Describes site organization patterns, and guidelines for incorporating permissions, search, taxonomy, and large media in your SharePoint Online portal.
ms.date: 4/30/2018
localization_priority: Priority
---

# Information architecture guidance for SharePoint Online portals

Having a solid information architecture is an important prerequisite for realizing a well-maintained and well-performing portal. Designing the optimal structure requires detailed planning. If not done properly, you can adversely affect user adoption or have significant performance issues; the likelihood of both is very possible. 

Consider the following factors:

- Business objectives and the organizational structure.
- The kind of content you are dealing with. Is the content collaborative or published content? 
- Content classification and confidentiality. 
- Life-cycle of the content, and possible retention/disposition strategies. This also applies to sites as well. 
- Users of the content, their behaviors, common tasks, and expectations.

After you know more about the users, the content, and the portal's intended usage, you will have a good foundation to start with and can possibly avoid some of the common pitfalls around information architecture.

Information architecture is not a one-time process, rather, it a continuous process. While an optimal information architecture may not always be obvious to end-users, a poorly designed and managed information architecture will certainly be remembered if the experience is a bad one. Keep measuring, keep evolving, and keep it relevant and fresh.

<br/>

![Implement-Govern-Measure-Improve diagram](http://i.imgur.com/Ugw1qWn.png)

<br/>

> [!NOTE] 
> Although this guidance primarily targets SharePoint Online, most of it also applies to portals hosted in an on-premises SharePoint environment.
>
> This article is not meant to go deep into every aspect of governance and information architecture. The intended point is to highlight common issues that affect user adoption and/or performance.

<a name="sectionSectionAntiPatterns"> </a>

## What not to do

The following list contains the key things **not** to do when you design your portal information architecture.

Don't:

- **Have too many top-level parent portal site collections**. This will cause confusion and can have adverse impacts on management, security considerations, usability, navigation, and adoption in general.
- **Use deep hierarchies in a single site collection with unique permissions**. This can cause performance challenges.
- **Bury content**. Content that is too deep impacts discoverability as well as adoption. If the user cannot find the content that they are looking for after a few levels, they will abandon their efforts and deem the portal as inefficient, which in turn, kills adoption. 
- **Keep stale content**. Nobody likes stale content, and after a few times of seeing it, they won't come back for that reason. 
- **Not use content disposition strategies**. These are needed to help avoid stale content and to stay within the defined capacity boundaries. 
- **Rely on poor enterprise master data management**. This results in a poor SharePoint Online taxonomy design. 
 
<br/>

The following sections address some key areas that you should consider when building your information architecture.

## Site organization patterns

Consider minimizing the number of top-level site collection nodes and the number of subsite levels within your information architecture.

The discussions have changed around horizontal/flat site collections versus vertical/hierarchical. In the past, we promoted flattening hierarchies into potentially several separate site collections; reasons included factors such as IA best practices, menu structures, content database management, and capacity. As far as capacity is concerned, that is no longer relevant with SharePoint Online. However, there are other considerations now, such as URL limitations. 

For more information, see [SharePoint Online limits](https://support.office.com/en-us/article/sharepoint-online-limits-8f34ff47-b749-408b-abc0-b605e1f6d498?ocmsassetID=HA102694293&CorrelationId=7773acb9-7e7f-4800-86bc-9af55b7077c7&ui=en-US&rs=en-US&ad=US).

Recommended patterns include grouping site collections and sites into different logical groupings such as Enterprise level and publishing sites. These might include search centers, records centers, and ediscovery centers.  These can be either at the root level or under the "/sites" managed path. Intranet publishing/portal sites can also be at the root level or under the "/sites" managed path. For example:

Sites considered enterprise level sites might be structured as:

- /sites/
	- Search
	- Records Center
	- eDiscovery Center
	- Media
	- Compliance Policy Center
	- BI Portal
	- Content Type Hub

Sites considered as publishing portal sites might be structured as:

- /sites/
	- Intranet Home
	- Corporate Function A
	- Corporate Function B
	- ...
	- Business Unit A
	- Business Unit B
	- ...


Usually, not everything migrates to the cloud immediately and all at once, so plan for a hybrid IA and evolve as necessary. Plan accordingly for hybrid scenarios.

For more information, see [SharePoint hybrid sites and search](https://docs.microsoft.com/en-us/SharePoint/hybrid/sharepoint-hybrid-sites-and-search).

## Permissions

Structuring for permissions is a difficult task, and is another topic that requires some careful planning. The use of user accounts, SharePoint groups, and Active Directory groups/Azure AD groups to set permissions can be very challenging at times. SharePoint Online can use a combination of the three:

- Direct user permissions approach
- SharePoint groups approach
- Active Directory security groups (Azure AD security groups)

> [!NOTE] 
> If you are in SharePoint Online, sync your groups with AD Connect.

Follow these guidelines when planning for permissions:

- Follow the principle of least privilege to start, expanding as needed.
- Use the standard, default groups first (Members, Visitors, Owners). Obviously, limit the the number of individuals to the Owners group.
- Use permissions inheritance, and use groups over individuals when granting permissions.
- Organize content to take advantage of the permissions inheritance, or organize by unique permissions and segment by classification levels if possible.

Inaccessible content that should not be will cause frustration and eventually hinder end user adoption and cause search results issues as well.

## Search

There are many design considerations related to configuration choices specific to search in SharePoint Online. A detailed search specification should be developed, especially for advanced configurations. The search experience can be tuned for performance and relevancy, and can be customized for users. 

This includes:

- Defining searchable managed properties.
- Identifying high-quality pages for relevancy tuning. 
- Managing query rules and result sources.

Content aggregation can have significant impact on the performance of your portal and its pages. For more information about content aggregation, see [Content aggregation guidance for SharePoint Online portals](portal-data-aggregation.md).

## Taxonomy

Taxonomy covers both site **navigation** as well as **data**. Careful planning is required from a governance perspective, as well as a performance perspective. Think about core business functions to start, but also think about future growth and manageability. 

### Content types

Proper planning, configuration, and implementation of content types and their associated metadata is fundamental to the ability to organize, manage, classify, and find information in SharePoint.

Define a small set of global content types, which may be based on legal or records management team requirements, as well as authoring requirements for tagging, etc.

These content types should have at a minimum, some fields such as:
	
- InformationClassification
- BusinessFunction
- CorporateFunction
- ...

Create these in the content-type hub and use SharePoint CSOM to create content types using unique IDs. You still need to manually publish these content types. Don’t use the content-type hub if you think that you would need to change the content types at the site collection.

For more information, see [Introduction to content types and content type publishing](https://support.office.com/en-US/article/Introduction-to-content-types-and-content-type-publishing-A5026D23-8DF8-42F6-B0D6-1920880C0D03).

### Managed metadata

This is another topic that is too big for the scope of this article. For a good start and more information, see [Introduction to managed metadata](https://support.office.com/en-us/article/Introduction-to-managed-metadata-a180fa28-6405-4679-9ec3-81d2028c4efc).

Metadata in SharePoint enables organizations to combine the advantages of formal, managed taxonomies with the dynamic benefits of social tagging in customized ways mapping to different information usage and management scenarios.

Enterprise metadata hierarchies can be based off of information security classifications. Managed metadata can also be mapped to documents or list items by using site columns and content types. These managed metadata term sets can be managed by managers and contributors, and the ability to add terms to term sets can be controlled as well. 

Enterprise term store hierarchies are typically managed by a governance steering committee with an input process from other teams in the organization.  

> [!IMPORTANT] 
> Poor planning and poor management can cause issues around large taxonomy hierarchies and deep sorting. The data needs to be sorted client-side, so we recommend that you carefully consider the potential depth of the hierarchy, and the number of terms being returned. The depth of the hierarchy and the number of terms can cause the client Document Object Model (DOM) sort to take several seconds. 
>
> Don't delete term-store items; deprecate them. Keep the term store clean of potentially missing objects or faulty permissions, causing delays in data being returned.
>
> Terms are not security-trimmed, so sensitivity needs to be considered.

For planning managed metadata, the following worksheets are available:

- [Managed metadata services planning worksheet](http://go.microsoft.com/fwlink/p/?LinkId=164578)
- [Detailed term set planning worksheet](http://go.microsoft.com/fwlink/p/?LinkId=163487)

### Navigation

For more information about navigation best practices, see [Navigation solutions for SharePoint Online portals](portal-navigation.md). 

## Large media

Large files, such as videos, images, and PowerPoint files, can cause grief for users as they are expected to be retrieved fairly quickly. Files such as videos need to stream at certain rates, and some apps might not render until they have retrieved the files needed. Consider externalizing large media files. This helps with user adoption. 

Consider these options:

- [Meet Office 365 Video](https://support.office.com/en-us/article/Meet-Office-365-Video-ca1cc1a9-a615-46e1-b6a3-40dbd99939a6)
- [Manage your Office 365 Video portal](https://support.office.com/en-us/article/Manage-your-Office-365-Video-portal-c059465b-eba9-44e1-b8c7-8ff7793ff5da?ui=en-US&rs=en-US&ad=US)


For information about CDNs, see:

- [Office 365 Public CDN Overview](https://dev.office.com/blogs/general-availability-of-office-365-cdn)
- [Using content delivery networks with SharePoint Online](https://support.office.com/en-gb/article/Using-content-delivery-networks-with-SharePoint-Online-9a64268c-0b74-4eaa-b971-fb6380b1b165)
- [CDN Manager GitHub repo](https://github.com/SharePoint/PnP/tree/master/Solutions/Core.CDNManager)
- [Branding guidance for SharePoint Online portals](portal-branding.md)
- [Performance guidance for SharePoint Online portals](portal-performance.md)


## See also

- [Overview of document deletion policies](https://support.office.com/en-us/article/overview-of-document-deletion-policies-55e8d858-f278-482b-a198-2e62d6a2e6e5?ui=en-US&rs=en-US&ad=US)
- [Information management policies in Office 365](https://technet.microsoft.com/en-us/library/dn792007.aspx)
- [Introduction to information management policies](https://support.office.com/en-US/article/Introduction-to-information-management-policies-63a0b501-ba59-44b7-a35c-999f3be057b2)
- [Manage site collection storage limits](https://support.office.com/en-US/Article/Manage-site-collection-storage-limits-77389c2c-8e7e-4b16-ab97-1c7103784b08?ui=en-US&rs=en-US&ad=US)
- [SharePoint Online limits](https://support.office.com/en-us/article/sharepoint-online-limits-8f34ff47-b749-408b-abc0-b605e1f6d498?CTT=1&CorrelationId=ab0c93e3-8a23-4a72-887e-bac52c0a874d&ui=en-US&rs=en-US&ad=US)
- [Building SharePoint Online portals](portal-overview.md)
- [Office 365 development and SharePoint PnP solution guidance](office-365-development-patterns-and-practices-solution-guidance.md)
