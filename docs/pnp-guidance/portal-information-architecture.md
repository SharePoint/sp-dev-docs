# Proven Practices for SharePoint Online Portal Information Architecture

Having a solid information architecture is an important prerequisite for realizing a well maintainable and performing portal. Designing the optimal structure requires detailed planning. If not done properly, there is a high risk of adversely affecting user adoption or possible significant performance issues and the likelihood of both is very possible. 

You should be considering following factors:

- Business objectives and the organizational structure.
- What kind of content you are dealing with. Is the content collaborative or published content? 
- Content classification and confidentiality 
- Life-cycle of the content, and possible retention/disposition strategies. This also applies to sites as well. 
- Users of the content, their behaviors, common tasks and expectations.

Once you know more about the users, the content, it's intended usage, you will have a good foundation to start with and can possibly avoid some of the common pitfalls around information architecture.

>**Note**:
>Although this guidance is targeting SharePoint Online most of it also applies to portals hosted on a SharePoint on-premises environment.
>
>This article is not meant to go deep into every aspect of governance, and Information architecture. The intended point is to highlight common issues that affect user adoption and/or performance, both of which are equally major problems.

_**Applies to:** SharePoint Online_

## Anti-patterns...or you shouldn't be doing this
<a name="sectionSectionAntiPatterns"> </a>
Below list contains the key things **not** to do when it comes to designing your portal information architecture:

- Too many top-level parent portal site collections - This will cause confusion and can have adverse impacts on management, security considerations, usability, navigation and adoption in general.
- Too deep hierarchies in single site collection with unique permissions - This can cause performance challenges.
- Buried content - Content that is too deep impacts find-ability as well as adoption. If the user cannot find the content they are looking for, after a few levels deep, they will abandon their efforts and deem the portal as inefficient, which in turn, kills adoption. 
- Stale content - Nobody likes stale content, and after a few times of seeing it, they won't come back for that reason. 
- No use of content disposition strategies - This is needed to help avoiding stale content and to stay within the defined capacity boundaries. 
- Relying on poor enterprise master data management resulting in a poor SharePoint Online taxonomy design. 
 

## Key Considerations
<a name="sectionSection0"> </a>
Information Architecture is not a one-time process, it a continuous process. While an optimal information architecture may not always be obvious to end-users, a poorly designed and managed information architecture will certainly be remembered if the experience is a bad one. Keep measuring, keep evolving and keep it relevant and fresh.

&nbsp;

![](http://i.imgur.com/Ugw1qWn.png)

&nbsp;

### Site Organization Patterns
Consider minimizing the number of top level Site Collection nodes and the number of sub-site levels within your Information Architecture.

The discussions have changed around horizontal/flat site collections vs vertical/hierarchical. In the past, we promoted flattening hierarchies into potentially several separate site collections. This was for many reasons such as IA best practices, menu structures, content database management, capacity, etc. As far as for capacity reasons, with SharePoint Online, that is not too relevant anymore. However there are other considerations now such as URL limitations. 

For more information, refer to [SharePoint Online Software Boundaries and Limits](http://office.microsoft.com/en-us/office365-sharepoint-online-enterprise-help/sharepoint-online-software-boundaries-and-limits-HA102694293.aspx)

Recommended patterns include grouping site collections and sites into different logical groupings such as Enterprise level and publishing sites. These might include search centers, records centers, ediscovery centers, etc.  These can be either at the root level or under the "/sites" managed path. Intranet publishing/portal sites can also be at the root or under the "/sites" managed path. For example:

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

	-/sites/
		- Intranet Home
		- Corporate Function A
		- Corporate Function B
		- ...
		- Business Unit A
		- Business Unit B
		- ...


Usually, not everything will migrate to the cloud immediately and all at once, so plan for a hybrid IA and evolve as necessary. Plan accordingly for Hybrid scenarios.

[SharePoint hybrid sites and search](https://support.office.com/en-us/article/SharePoint-hybrid-sites-and-search-5ff7e56a-7af2-4511-adec-1e043afe244e)

### Permissions
Structuring for permissions is a difficult task every time, and is another topic that requires some careful planning. The use of user accounts, SharePoint groups and Active Directory groups/Azure AD groups to set permissions can be very challenging at times. SharePoint Online can use a combination of the three:

- Direct User Permissions Approach
- SharePoint Groups Approach
- AD Security groups (AAD Security Groups )

>**Note**:
>If you are in SPO, sync your groups with AD Connect

Try to follow these guidelines when planning for permissions:

- Follow the principle of least privilege to start, expanding as needed
- Use the standard, default groups first (Members, Visitors, Owners). Obviously, limit the the number of individuals to the Owners group
- Use permissions inheritance and use groups over individuals when granting permissions
- Organize content to take advantage of the permissions inheritance or organize by unique permissions and segment by classification levels if possible.

Inaccessible content that should not be, will cause frustration and eventually hinder end user adoption and cause search results issues as well.

### Search
There are a large number of design considerations related to the configuration choices specific to Search in SPO. A detailed Search specification should be developed, especially for advanced configurations. The search experience can be tuned for performance, relevancy and can be customized for users. This includes:

- Defining search-able managed properties 
- Identifying high-quality pages for relevancy tuning 
- Managing query rules and result sources 

Content Aggregation can have significant impact on the performance of your portal and its pages. Please refer to the [Portal Data Aggregation article](portal-data-aggregation.md) for more information on Content Aggregation.

### Taxonomy
Taxonomy covers both site **navigation** as well as **data**. Careful planning is required from a governance perspective, as well as a performance perspective. Think about core business functions to start, but also think about future growth and manageability. 

**Content Types**
Proper planning, configuration and implementation of content types and their associated metadata is fundamental to the ability to organize, manage, classify, and find information in SharePoint.

Define a small set of global content types – which may be based on legal or records management team requirements, as well as authoring requirements for tagging, etc.

These content types should have at a minimum, some fields such as:
	
	- InformationClassification
	- BusinessFunction
	- CorporateFunction
	- ...

Create these in the content-type hub and use SharePoint CSOM to create content types using unique ID. You will still need to manually publish these content types. Don’t use the content-type Hub if you think that at site collection you would need to change the content types.

For more information on Content Types and Content Type Publishing, see:
[Introduction to Content Type and Content Type Publishing](https://support.office.com/en-US/article/Introduction-to-content-types-and-content-type-publishing-A5026D23-8DF8-42F6-B0D6-1920880C0D03)

**Managed Metadata**
This is another topic similar to Content Types, that is too big for the scope of this article. For a good start and more information, see [Introduction to Managed Metadata](https://support.office.com/en-us/article/Introduction-to-managed-metadata-a180fa28-6405-4679-9ec3-81d2028c4efc)

Metadata in SharePoint enables organizations to combine the advantages of formal, managed taxonomies with the dynamic benefits of social tagging in customized ways mapping to different information usage and management scenarios.

Enterprise metadata hierarchies can be based off of information security classifications. Managed metadata can also be mapped to documents, list items, etc. via the usage of site columns and content types. These managed metadata term sets can be managed by managers and contributors and the ability to add terms to term sets can be controlled as well. 

Enterprise term store hierarchies are typically managed by a governance steering committee with an input process from other teams in the organization.  

>**Note**:
>
>Poor planning and poor management can cause issues around large taxonomy hierarchies and deep sorting. The data needs to be sorted client-side, so it is recommended to carefully consider the potential depth of the hierarchy, and the number of terms being returned. The deeper the hierarchy, combined with more and more terms can cause the client DOM sort to take several seconds. 
>
>Don't delete term-store items, deprecate them. Keep the term store clean of potentially missing objects or faulty permissions, causing delays in data being returned.
>
>Terms are not security trimmed, so sensitivity needs to be considered

For planning managed metadata, the following worksheets are available:

[Managed metadata services planning worksheet](http://go.microsoft.com/fwlink/p/?LinkId=164578)

[Detailed term set planning worksheet](http://go.microsoft.com/fwlink/p/?LinkId=163487)

**Navigation**
Please refer to the [Portal Navigation Solutions article](portal-navigation.md) for more information on navigation best practices.

### Large Media
Large files, such as videos, images, PowerPoint files, can cause grief for users as they are expected to be retrieved fairly quickly. Files such as videos will need to stream at certain rates and some apps might not render until they have retrieved the file(s) needed. Consider externalizing large media files. This will help with user adoption. 

Here are a few options to consider:
- [Meet Office 365 Video](https://support.office.com/en-us/article/Meet-Office-365-Video-ca1cc1a9-a615-46e1-b6a3-40dbd99939a6)
- [Manage your Office 365 Video portal](https://support.office.com/en-us/article/Manage-your-Office-365-Video-portal-c059465b-eba9-44e1-b8c7-8ff7793ff5da?ui=en-US&rs=en-US&ad=US)

The [Portal Branding](portal-branding.md) and [Portal Performance](portal-performance.md) articles highlight the use of CDN's as well.

For more information on CDN's, see:
- [Office 365 Public/Private CDN capability](https://dev.office.com/blogs/general-availability-of-office-365-cdn)
- [Using content delivery networks with SharePoint Online](https://support.office.com/en-gb/article/Using-content-delivery-networks-with-SharePoint-Online-9a64268c-0b74-4eaa-b971-fb6380b1b165)
- [CDN Manager](https://github.com/SharePoint/PnP/tree/master/Solutions/Core.CDNManager)


### Additional resources
<a name="bk_addresources"> </a>

Patterns & Practices:

- [Office 365 development and SharePoint patterns and practices solution guidance](https://msdn.microsoft.com/en-us/pnp_articles/office-365-development-patterns-and-practices-solution-guidance)

Information Life-cycle Management:

- [Overview of document deletion policies](https://technet.microsoft.com/en-US/library/dn790608.aspx)
- [Information Management Policies in Office 365](https://technet.microsoft.com/en-us/library/dn792007.aspx)
- [Introduction to Information Lifecycle Management](https://support.office.com/en-US/article/Introduction-to-information-management-policies-63a0b501-ba59-44b7-a35c-999f3be057b2)

Storage and Server Resources

- [Manage Site Collection Storage Limits](https://support.office.com/en-US/Article/Manage-site-collection-storage-limits-77389c2c-8e7e-4b16-ab97-1c7103784b08?ui=en-US&rs=en-US&ad=US)
- [SharePoint Online Software Boundaries and Limits](https://support.office.com/en-us/article/SharePoint-Online-software-boundaries-and-limits-8f34ff47-b749-408b-abc0-b605e1f6d498?CTT=1&CorrelationId=ab0c93e3-8a23-4a72-887e-bac52c0a874d&ui=en-US&rs=en-US&ad=US)
