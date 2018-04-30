---
title: Proven Practices for SharePoint Online Portals - Content Aggregation
description: 
ms.date: 4/30/2018
---
# Proven Practices for SharePoint Online Portals - Content Aggregation

Every portal design includes a suite of display components that dynamically locate content for display on portal pages.  Fundamental to the operation of these controls is the concept of Content Aggregation, which for the purposes of this article we define as the process of dynamically locating desired content at run-time. The technique that you choose to perform Content Aggregation can have significant impact on the performance of your portal and its pages.

> [!NOTE] 
> Although this guidance primarily targets SharePoint Online, most of it also applies to portals hosted in an on-premises SharePoint environment.

_**Applies to:** SharePoint Online_

## Anti-Patterns (in other words, don't do these things)
<a name="bk_antiPatterns"> </a>

If you wish to have problems with your portal in general, and your data aggregation in particular, consider the following Anti-Patterns:

- Use the "real-time" content aggregation technique whenever and wherever possible
- Place a dozen or more poorly-designed content aggregation controls on a high-volume portal page (e.g., home page)
- Use a Group Policy Object (GPO) to force all browsers to load the problematic portal page by default
- Do not enforce row limits on the content aggregation results
- Do not cache any of the content aggregation results
- Target the legacy Lists (SOAP) web service
	- for extra trouble, pass it some poorly-designed CAML queries

## Content Aggregation Defined
<a name="sectionSection0"> </a>

It is important to establish a clear definition of Content Aggregation for the context of this article.

>**Content Aggregation** the concept of dynamically locating and retrieving content for display on the current page when that content exists apart from the current page in one or more locations within the portal
>
>- Content Aggregation does not involve content authored within the current page
>- Content Aggregation is primarily intended for the front-end user view of the Portal (as opposed to the back-end admin view)

Here are a few common examples in which data aggregation is used:

- The Portal Home Page contains a Latest News control that renders a list of links to the most-recent articles published within the portal
- Portal Pages contain a Global Navigation control that renders navigation links managed within a custom SharePoint list

## The Problem with the Real-Time Content Aggregation Requirement
<a name="sectionSection1"> </a>

>**Real-Time Content Aggregation** - changes made to a content aggregation source immediately appear in the content aggregation controls targeting that source

Here are a few examples where an expectation of real-time content aggregation can likely occur:

- A content author publishes an article and expects its link to immediately appear in the Latest News control of the Portal Home Page
- A Portal Admin adds a link to the Global Navigation list and expects it to immediately appear in the Global Navigation control

There certainly exists a class of urgent information that requires absolute, real-time distribution; however, a Publishing Portal should not be the choice for the ***initial*** distribution of such urgent information. A number of other systems (Cellular, Radio, Satellite, Television, Sirens, Alarms, Loudspeakers, etc.) are better suited to that task. The portal is better suited for the distribution of follow-up information, context, and details; by inference, that distribution does not need to occur in real-time.

With that context in mind, consider this admittedly provocative statement:

- **No portal content is important enough to warrant the cost of real-time content aggregation**

Unfortunately, the default position of nearly every Portal Content Management Team is to consider even its most mundane content as urgent and worthy of real-time content aggregation. 

Therein lies the challenge for the Portal Architect: do you succumb to these pressures and risk hindering portal performance or do you convince them otherwise and deliver a well-performing portal? We encourage you to convince them otherwise.

In a strict sense, absolute "real-time" content aggregation is technically not possible in *any* Publishing System. Even if you adhere to the default behaviors of the publishing portal, delays/caching will occur at various points in the content aggregation/rendering pipeline; some of it is visible and configurable (e.g., custom client-side cache, server-side output cache, server-side object cache) and some of it is hidden and immutable (e.g., database query plans, internal application caches, etc.).

Content Authors are usually the only people who notice content aggregation delays. The end-user has no expectation of real-time content aggregation due to his/her lack of insight into the content publication process.

Once one accepts that "real-time" content aggregation cannot occur, all that remains are the negotiations:

- how long are you willing to wait to see the content?
- how much are you willing to "pay" to see the content a bit sooner?

Content aggregation delays are inevitable in a well-performing portal solution; compromise on an acceptable delay and your portal users will thank you.

> Notice that even though content aggregation cannot be in real time, in certainly cases you can absolutely have for example custom alerting capability with a timeout of 5 minutes and news aggregation with a timeout of 1 hour. This would not be a real time content aggregation, but would be considered almost as a real time aggregation by most of the end users. 

## Content Aggregation Techniques 
<a name="sectionSection2"> </a>

The following sections describe the two Content Aggregation techniques available for SharePoint Online.

**We recommend that you favor Search-based Content Aggregation over CAML-based Content Aggregation.**

### CAML-based Content Aggregation

The CAML-based Content Aggregation technique is based upon the use of Collaborative Application Markup Language (CAML) queries. 

One can build CAML queries and use them to perform content aggregation operations within SharePoint. The queries are executed against the SharePoint content databases. CAML queries are baked into the implementation of server-side controls such as the Out-of-Box (OOB) Content-by-Query web part. CAML queries can also be used directly against the various content discovery APIs available to custom client-side JavaScript controls.

The primary benefit of CAML is that it allows one to come as near as possible to achieving "real-time" content aggregation. The primary downside of CAML is that it requires knowledge and skill to design well-performing CAML queries; a seemingly innocuous change can result in a poorly-performing CAML query and/or an endless series of cache misses, the impact of which is not apparent until the portal is under heavy loads.

By prohibiting the deployment of custom code, SharePoint Online has eliminated what has historically been the single worst category of SharePoint performance killer: custom server-side controls and web parts that leverage poorly-designed CAML queries. However, it is still possible to misuse CAML via the OOB Content-by-Query web parts, as well as via custom client-side JavaScript controls. Some things to note: 

- Each Client-side CAML request results in a direct database query
	- Client-side CAML results are not cached on the server
	- Client-side CAML requests hit the database server for execution (a cache-miss always occurs)
- Each Server-side CAML request is at risk of becoming a direct database query
	- Server-side CAML results are cached on the server, based on similar user permission sets
	- Queries that contain personalization fields are never cached
	- Server-side CAML requests hit the Database Server for execution when a cache-miss occurs
	- A cache-miss is a near-certainty in farms with a large number of web front ends

**We recommend that you avoid CAML-based Content Aggregation, when possible.**

If you must use CAML-based Content Aggregation, please observe the following guidelines:

- Avoid its use on high-volume pages
- Constrain its use to a specific class of content (e.g., Alerts)
- Define the simplest, most-efficient CAML query possible and verify its performance
- Implement indexed columns on the target lists
- Include row limits on the query
- Ensure that custom client-side JavaScript controls provide a **Read more** link to redirect users to a low-volume View-All page 
- Ensure that custom client-side JavaScript controls leverage the Client-Side Data Access Layer Framework to cache the content response
	- "No results" is a valid response and should be cached as well
- Enforce a client-side cache expiry of no less than 5 minutes

Please refer to the [Portal Performance article](portal-performance.md) for more information on the Client-Side Data Access Layer.

### Search-based Content Aggregation

The Search-based Content Aggregation technique is based upon the use of SharePoint Search Keyword Query Language (KQL) queries. 

One can build Search KQL queries and use them to perform content aggregation operations within SharePoint. The queries are executed against the SharePoint Search Index. Search KQL queries are baked into the implementation of server-side controls such as the Out-of-Box (OOB) Content-by-Search web part. KQL queries can also be used directly against the Search APIs available to custom client-side JavaScript controls.

The primary benefit of Search-based content aggregation is that it leverages the SharePoint Search Service, which is built to provide exceptional performance at a large scale under heavy loads. The primary downside of Search-based content aggregation is its dependency upon the Search Index, which means there will be a slight delay before content changes appear in the Search Index.

Some things to note: 

- Portal content must be crawled and added to the Search Index in order to be made available for Search-based data aggregation 
- SharePoint continuously crawls the portal content in order to provide an up-to-date Search Index
	- However, there will be a slight delay before content changes appear in the index.
- The Search Schema must be configured to allow the desired content properties to be discovered via search

**We recommend that you favor Search-based Content Aggregation.**

When you use Search-based Content Aggregation, please observe the following guidelines:

- Ensure that your Content Management Teams understand that content must be crawled before it can be aggregated
	- Establish expectations regarding the content aggregation delay 
- Configure the necessary Search Schema
	- Choose an appropriate scope (Tenant, Site Collection, or Web)
	- Trigger the auto-generation of crawled and managed properties
	- Leverage Out-of-Box Placeholder Managed Properties (e.g., RefinableInt01) when sorting/refining is needed
- Design appropriate Result Sources and Queries
	- Target individual lists, webs, or sites as needed
	- Target individual content types as needed
	- Target specific managed properties (i.e., site columns) as needed
- Choose the Desired Display Controls:
	- OOB Controls: 
		- Use Content-by-Search web parts
		- Return the minimal rows and columns needed
		- Develop the necessary Display Templates
		- Enable asynchronous client-side rendering if desired
	- Custom Controls:
		- Use custom, client-side JavaScript Display Controls that utilize the REST Search API
		- Return the minimal rows and columns needed
		- Be sure to leverage the Client-Side Data Access Layer Framework to cache the responses

Please refer to the [Portal Performance article](portal-performance.md) for more information on the Client-Side Data Access Layer.

## See also
<a name="bk_additionalResources"> </a>

- [Portal performance guidance](portal-performance.md)

- [Building SharePoint Online portals](portal-overview.md)