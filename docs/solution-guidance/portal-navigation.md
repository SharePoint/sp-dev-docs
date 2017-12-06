---
title: Proven Practices for SharePoint Online Portals - Navigation Solutions
ms.date: 11/03/2017
---
# Proven Practices for SharePoint Online Portals - Navigation Solutions

Every portal project needs to implement a navigation solution. Based on project requirements, the navigation solution might choose to leverage only Out-of-Box (OOB) Navigation components, only custom Navigation components, or a combination of both OOB and custom components. 

Regardless of the choice made, a question remains: How to build a well-performing navigation system in SharePoint Online? This article answers that question.

> [!NOTE] 
> Although this guidance primarily targets SharePoint Online, most of it also applies to portals hosted in an on-premises SharePoint environment.

_**Applies to:** SharePoint Online_

## Anti-Patterns (in other words, don't do these things)
<a name="bk_antiPatterns"> </a>

If you wish to have problems with your portal in general, and your navigation solution in particular, consider the following Anti-Patterns:

- Use Out-of-Box (OOB) **structural** site navigation when the site collections of your portal have complex structure (multiple level of sites and/or unique permissions)  
- Use a custom navigation solution that requests all navigation nodes for all custom navigation controls as soon as the page loads, even for controls that are initially collapsed/hidden
- Use a custom navigation solution that does not cache the navigation nodes it receives
- Use a custom navigation solution that targets the legacy Lists (SOAP) web service
	- for extra trouble, pass it some poorly-formed CAML queries

## Rationale for a Custom Navigation Solution
<a name="bk_customNavRationale"> </a>

There are a number of reasons why a Portal Architect might decide to pursue a custom navigation solution. Most reasons are related to the fact that Modern Portal Designs are Responsive in nature and usually include a feature-rich navigation system; as such, attempts to map the proposed design onto SharePoint ultimately fail because the Out-of-Box (OOB) server-side navigation controls cannot be configured to meet one or more requirements of the proposed design. Specific examples follow:

- The OOB control, and its Management UX, does not support a Responsive UI Design
- The OOB control does not exhibit the required behaviors (flyout/hover, mega menu, rich media, lazy-load, etc.)
- The OOB control does not support the desired navigation hierarchy attributes (headers, grouping, depth, link limit, etc.) 
- The OOB control does not support the desired navigation link attributes (thumbnail, image link, publishing start/end, emphasis, etc.) 
- The OOB control is not, or is no longer, available (footer, breadcrumb, etc.)
- The OOB control does not integrate with custom/legacy navigation data stores
- The OOB Management UX is inconsistent across navigation controls and is not user-friendly

When enough of the reasons add up, consider a Custom Navigation Solution.

## You've decided to use an Out-of-Box (OOB) Navigation Solution
<a name="bk_oobNavSolution"> </a>

You've evaluated the rationale for a Custom Navigation Solution and have decided that none of those reasons apply. The good news is that you can leverage proven patterns for an Out-of-Box (OOB) Navigation Solution.

At its core, a navigation solution consists of a set of navigation controls that receive their data from a Navigation Store. When choosing an OOB Navigation Solution, OOB Managed Navigation (described later in this article) is generally the preferred choice for an OOB Navigation Store because it offers the better page load performance. The other choice, OOB Structured Navigation (described later in this article), can easily become very resource intensive (especially for complex site collection structures) and result in significantly slower page load performance.

## You've decided to use a Custom Navigation Solution
<a name="bk_customNavSolution"> </a>

You've evaluated the rationale for a Custom Navigation Solution and have decided that enough of those reasons apply. The good news is that you can leverage proven patterns for developing a Custom Navigation Solution.

The following diagram shows the logical architecture of a Custom Navigation Solution:

![Custom navigation solution logical architecture](./media/logicalNavSoln.png)

The following sections describe the major components of the logical architecture:

### Navigation Display Control
<a name="bk_navDisplayControl"> </a> 

This is a custom client-side JavaScript display control that resides on the page. 

In general, the control queries the Navigation Store when the page loads, processes the navigation data response, and renders the navigation component (presentation, information, and behavior). In practice, the control should observe a lazy-load pattern: execute the navigation data request only when necessary, and defer it for as long as possible.

The display control can be added to the static definition of the page at design time (via a master page (consider the caveats), a page layout, or a web part) or it can be added to the dynamic state of the page at run-time (via the JavaScript Embedding technique).

The display control leverages the Client-Side Data Access Layer (described later in this article) to optimize page performance.

The display control may optionally provide a Settings link for its Navigation Management Page, which provides a user interface to manage the configuration of the navigation control.

**Typical Navigation Display Controls**
<a name="bk_navDisplayControls"> </a> 

Here is some general guidance for the various types of navigation controls typically used in a custom Navigation Solution:

- **Global Navigation**: implement a custom control that targets a central, portal-specific navigation configuration entity. Use a public cache for the navigation nodes. Consider the OOB Management Page.
- **Footer Navigation**: implement a custom control that targets a central, portal-specific navigation configuration entity. Use a public cache for the navigation nodes. Consider the OOB Management Page.
- **Site Map**: implement a custom control that targets a central, portal-specific navigation configuration entity
- **Current Navigation** (i.e., Left-Hand): implement a custom control that targets a local, web-specific navigation configuration entity. Use a public cache for the navigation nodes. Consider the OOB Management Page.
- **Breadcrumb**: *avoid implementing this custom control*; construction of the parent chain of Web objects, based on the Url of the current web, is a costly operation
- **Useful Links**: implement a custom control that targets a local, web-specific navigation configuration entity. Use a public cache for the navigation nodes. Consider the OOB Management Page.
- **My Links**: implement a custom control that targets a **private**, user-specific navigation configuration entity. Use a **private** cache for the navigation nodes. Provide a custom Management Page.

### Navigation Store
<a name="bk_navStore"> </a> 

The Navigation Store persists the configuration of the custom navigation control. You can choose to have the custom navigation control use either a custom Navigation Store or an Out-of-Box (OOB) Navigation Store.

**Custom Navigation Stores:**
<a name="bk_customNavStores"> </a> 

The most-commonly used custom Navigation Store, a custom SharePoint list, strikes a balance between extensibility, manageability, and performance (when queried via Search). The list schema can be easily extended with custom Content Types that represent navigation headers/groups and navigation links and Site Columns that define the desired custom attributes (e.g., display order). Crawled Properties for these Site Columns can be mapped to Managed Properties within SharePoint Search. The navigation data is easily managed via the familiar OOB List Management pages. The navigation data can be accessed remotely via the SharePoint Search REST API.

> [!NOTE] 
> Search-based navigation has a dependency on the Search Index. SharePoint continuously crawls portal content; however, there will still be a slight delay before changes to the SharePoint List appear in the Search Index.

The simplest and best-performing custom Navigation Store is a JavaScript resource file (e.g., nav.js) that declares a component-specific configuration variable (e.g., footerNav) that is initialized with a JSON string. The browser automatically downloads the file and caches it for subsequent use.  The configuration data is ready for use once it loads into the JavaScript run-time environment. The primary trade-off with this approach concerns the Management User Interface: at a minimum, an admin must manually edit a JSON string in a JavaScript file. A custom User Interface would be required to abstract the Store from the admin and make things a bit more friendly.

At the other end of the spectrum of custom Navigation Stores is the custom database. This option provides the ultimate in flexibility, but also requires the most custom development. Additionally, a hosting environment is needed for the database, the custom Web API, and the Navigation Management Page. 

> [!NOTE] 
> An excellent sample showing how to implement a custom navigation store which uses client-side data access layer is available from the SharePoint PnP repository: [Client-Side Data Access Layer (DAL) Sample](https://github.com/SharePoint/PnP/tree/master/Samples/Portal.DataAccessLayer)

**Out-of-Box (OOB) Navigation Stores:**
<a name="bk_oobNavStores"> </a> 

- **OOB Managed Navigation (MMS)**: <a name="bk_managedNavStore"> </a> Managed Navigation allows you to use a Managed Metadata Service (MMS) Term set to configure the navigation nodes for a given site collection. OOB Navigation display controls automatically consume this data. The OOB Navigation Management Page provides an easy-to-use user interface to manage the navigation nodes within an *unconstrained* hierarchy (unlimited depth). Custom Navigation display controls can also consume this data, but must do so via JSOM as there is currently no REST API available to work with Managed Navigation.

	> [!NOTE] 
	> It is quite cumbersome to configure and maintain a Global Navigation definition via Managed Navigation. As each new a site collection is created, you must duplicate the configuration for the site collection and its associated term set. Also keep in mind that managed navigation is not security trimmed, so your users might see links which they cannot access.

- **OOB Structural Navigation (Site)**: <a name="bk_structuralNavStore"> </a> Structural Navigation allows you use the native structure of the site collection (its webs and pages), as well as authored headings and links, to configure the navigation nodes for a given site collection. The OOB Navigation Management Page provides a user interface to manage the navigation nodes within an *constrained* hierarchy (limited depth). Custom Navigation display controls can also consume this data, but must do so via JSOM as there is currently no REST API available to work with Structural Navigation.

	> [!NOTE] 
	> The OOB Navigation display controls use database queries (i.e., content by query) to obtain the navigation data. They do this for each page load, which is very resource intensive for complex site collection structures. The use of Structural Navigation is recommended only for small portals with simple site collection structures. Structural navigation is always returning security trimmed results.

- **OOB Search index (Search)**: <a name="bk_searchNavStore"> </a> Search driven navigation allows you query SharePoint search index for sites and pages by constructing the proper search query. There's no specific OOB navigation management page and you'll need to implement custom navigation display controls to consume the data retrieved from the search queries.

	> [!NOTE] 
	> When using search driven navigation is important that you cache the obtained search results as you don't want to hit the server for each page load. Later in this article the client-side data access layer is explained which is the model to use in combination with search driven navigation. Just like structural navigation the search driven navigation is security trimmed, so your users will not see unreachable links. Downside of search driven navigation is that it's hard to control the order of the returned navigation items.


### Navigation Management Page
<a name="bk_navManagementPage"> </a> 

The Navigation Management Page provides a user interface to manage the configuration of the navigation control in a user-friendly manner.  The page can be accessed directly, as well as from an optional link present on the navigation control (e.g., a Settings link). The page uses the appropriate Navigation Store APIs for the chosen Navigation Store to manage the configuration of the navigation control.

You can choose to have the custom navigation control use either a custom Navigation Management Page or an Out-of-Box (OOB) Navigation Management Page. 

In many cases, the default OOB Navigation Management Page (e.g., SharePoint List View or Term set Management page) associated with the chosen Navigation Store should suffice. When a default page is not available, you must obviously develop a custom page. When deciding if the existing default page is acceptable or not, be sure to consider the total cost of developing a custom Management Page (design, development/maintenance, hosting, and user training).

As a rule of thumb, pursue custom Management Pages only when a default option does not exist, when the page must support a Responsive UI, or when the page is meant to be consumed via the front-end user view of the Portal (as opposed to the back-end admin view).  

### Navigation Store API
<a name="bk_navStoreApi"> </a> 

The Navigation Store API provides a programmatic interface to manage the configuration of the navigation control in a consistent, secure manner.  

You can choose to have the custom navigation control use either a custom Navigation Store API or an Out-of-Box (OOB) Navigation Store API. If you wish to develop and deploy a custom Navigation Store API, observe the following guidelines:

- implement using the technology stack of your choice (ASP.Net Web API 2.0, Node.js,...)
- host the API in an internet-accessible environment 
- use Public DNS for name resolution
- require SSL and obtain the SSL certificate from a Public Certificate Authority
- enable anonymous access and secure the API with Azure AD
- implement support for Cross-Origin Resource Support (CORS)

For .Net client environments:

- target SharePoint APIs via the SharePoint Client-Side Object Model (CSOM or REST) 
- target your custom Web APIs via REST
- target third-party APIs via REST (use SOAP only if necessary)

For Browser client environments:

- target SharePoint APIs via the SharePoint REST APIs (use JSOM only if necessary)
	- use the Cross-Domain Library if you target a different site collection
- target your custom Web APIs via REST
	- use Azure AD Authentication Library for JavaScript (ADAL.js) and Implicit OAuth flow
- target third-party APIs via REST (or SOAP if necessary)

### Client-Side Data Access Layer
<a name="bk_clientSideDal"> </a> 

The Client-Side Data Access Layer is a custom client-side JavaScript framework made available to all custom client-side display controls, including the custom Navigation display controls.  It supports intelligent data loading patterns, abstracts the details of the client-to-server requests, provides data caching functionality to minimize client-to-server request traffic, and improves perceived page performance.

Please refer to the [Portal Performance article](portal-performance.md) for more information on the Client-Side Data Access Layer.

## See also
<a name="bk_additionalResources"> </a>

- [Portal performance guidance](portal-performance.md)
- [Navigation Options for SharePoint Online](https://support.office.com/en-us/article/Navigation-options-for-SharePoint-Online-adb92b80-b342-4ecb-99a1-da2a2b4782eb?ui=en-US&rs=en-US&ad=US)
- [Overview of managed navigation in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/dn194311.aspx)
- [Client-Side Data Access Layer (DAL) and navigation Sample](https://github.com/SharePoint/PnP/tree/master/Samples/Portal.DataAccessLayer)
- [PnP O365 Starter Intranet - Navigation details](http://thecollaborationcorner.com/2016/08/31/part-4-the-navigation-implementation/#.WNoU5oVOKiM)
- [ASP.Net Web API 2.0](https://msdn.microsoft.com/en-us/library/dn448365(v=vs.118))
- [Azure AD Authentication Library for JavaScript](https://github.com/AzureAD/azure-activedirectory-library-for-js)