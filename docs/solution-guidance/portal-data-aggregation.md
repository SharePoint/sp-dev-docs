---
title: Content aggregation guidance for SharePoint Online portals
description: The technique that you choose to perform content aggregation can have significant impact on the performance of your portal and its pages.
ms.date: 4/30/2018
---

# Content aggregation guidance for SharePoint Online portals

Every portal design includes a suite of display components that dynamically locate content for display on portal pages. Fundamental to the operation of these controls is the concept of content aggregation, which for the purposes of this article we define as the process of dynamically locating desired content at run-time. The technique that you choose to perform content aggregation can have significant impact on the performance of your portal and its pages.

> [!NOTE] 
> Although this guidance primarily targets SharePoint Online, most of it also applies to portals hosted in an on-premises SharePoint environment.

<a name="bk_antiPatterns"> </a>

## What not to do

The following list contains the key things **not** to do if you want to have a good content aggregation experience.

Don't: 

- Use the "real-time" content aggregation technique whenever and wherever possible.
- Place a dozen or more poorly-designed content aggregation controls on a high-volume portal page (for example, the home page).
- Use a Group Policy Object (GPO) to force all browsers to load the problematic portal page by default.
- Not enforce row limits on the content aggregation results.
- Not cache any of the content aggregation results.
- Target the legacy Lists (SOAP) web service; for extra trouble, pass it some poorly-designed CAML queries.

## Content aggregation defined

It is important to establish a clear definition of content aggregation for the context of this article.

**Content aggregation** is the concept of dynamically locating and retrieving content for display on the current page when that content exists apart from the current page in one or more locations within the portal.

Content aggregation does not include content authored within the current page.

Content aggregation is primarily intended for the front-end user view of the portal (as opposed to the back-end admin view).

Examples of where content aggregation can be used:

- The portal home page contains a latest news control that renders a list of links to the most-recent articles published within the portal.
- Portal pages contain a global navigation control that renders navigation links managed within a custom SharePoint list.

## Real-time content aggregation requirement

In **real-time content aggregation**, changes made to a content aggregation source immediately appear in the content aggregation controls targeting that source.

Examples of where an expectation of real-time content aggregation can occur:

- A content author publishes an article and expects its link to immediately appear in the latest news control of the portal home page.
- A portal admin adds a link to the global navigation list and expects it to immediately appear in the global navigation control.

While urgent information does require absolute, real-time distribution, a publishing portal should not be the initial choice for distribution of such information. A number of other systems (such as cellular, radio, satellite, television, sirens, alarms, and loudspeakers) are better suited to that task. The portal is better suited for the distribution of follow-up information, context, and details; by inference, that distribution does not need to occur in real time.

With that context in mind, consider this best practice: **No portal content is important enough to warrant the cost of real-time content aggregation**.

Unfortunately, the default position of nearly every portal content management team is to consider even its most mundane content as urgent and worthy of real-time content aggregation. 

Therein lies the challenge for the portal architect: do you succumb to these pressures and risk hindering portal performance, or do you convince the team otherwise and deliver a well-performing portal? We encourage you to convince them otherwise.

Absolute real-time content aggregation is technically not possible in any publishing system. Even if you adhere to the default behaviors of the publishing portal, delays and caching occur at various points in the content aggregation/rendering pipeline; some of it is visible and configurable (for example, custom client-side cache, server-side output cache, server-side object cache) and some of it is hidden and immutable (for example, database query plans, internal application caches).

Content authors are usually the only people who notice content aggregation delays. End-users have no expectation of real-time content aggregation due to their lack of insight into the content publishing process.

After you accept that real-time content aggregation cannot successfully occur, all that remains is negotiating the following:

- How long are you willing to wait to see the content?
- How much are you willing to "pay" to see the content a bit sooner?

Content aggregation delays are inevitable in a well-performing portal solution. If you compromise on an acceptable delay, your portal users will thank you.

> [!NOTE] 
> Even though content aggregation cannot be in real time, in certain cases you can have, for example, a custom alert capability with a timeout of five minutes and news aggregation with a timeout of one hour. This would not be a real-time content aggregation, but would be considered a real-time aggregation by most end users. 

## Content aggregation techniques

The following sections describe the two content aggregation techniques available for SharePoint Online. 

> [!IMPORTANT] 
> We recommend that you favor search-based content aggregation over CAML-based content aggregation.

### CAML-based content aggregation

The CAML-based content aggregation technique is based on the use of [Collaborative Application Markup Language (CAML)](../schema/collaborative-application-markup-language-caml-schemas.md) queries. 

You can build CAML queries and use them to perform content aggregation operations within SharePoint. The queries are executed against the SharePoint content databases. CAML queries are baked into the implementation of server-side controls such as the out-of-the-box Content-by-Query web part. CAML queries can also be used directly against the various content discovery APIs available to custom client-side JavaScript controls.

The primary benefit of CAML is that it allows you to come as near as possible to achieving real-time content aggregation. 

The primary downside of CAML is that it requires knowledge and skill to design well-performing CAML queries; a seemingly innocuous change can result in a poorly-performing CAML query and/or an endless series of cache misses, the impact of which is not apparent until the portal is under heavy loads.

By prohibiting the deployment of custom code, SharePoint Online has eliminated what has historically been the single worst category of SharePoint performance killer: custom server-side controls and web parts that leverage poorly-designed CAML queries. However, it is still possible to misuse CAML via the out-of-the-box Content-by-Query web parts, as well as via custom client-side JavaScript controls.

Note the following:  

- Each client-side CAML request results in a direct database query:
	- Client-side CAML results are not cached on the server.
	- Client-side CAML requests hit the database server for execution (a cache miss always occurs).

- Each server-side CAML request is at risk of becoming a direct database query:
	- Server-side CAML results are cached on the server, based on similar user permission sets.
	- Queries that contain personalization fields are never cached.
	- Server-side CAML requests hit the database server for execution when a cache miss occurs.
	- A cache miss is a near certainty in farms with a large number of web front-ends. 

> [!IMPORTANT]  
> We recommend that you avoid CAML-based content aggregation when possible.

#### Guidelines for using CAML-based content aggregation

- Avoid its use on high-volume pages.
- Constrain its use to a specific class of content (for example, alerts).
- Define the simplest, most-efficient CAML query possible and verify its performance.
- Implement indexed columns on the target lists.
- Include row limits on the query.
- Ensure that custom client-side JavaScript controls provide a **Read more** link to redirect users to a low-volume View-All page. 
- Ensure that custom client-side JavaScript controls leverage the Client-Side Data Access Layer Framework to cache the content response. **No results** is a valid response and should be cached as well.
- Enforce a client-side cache expiry of no less than five minutes.

For more information about the Client-Side Data Access Layer, see [Performance guidance for SharePoint Online portals](portal-performance.md#client-side-data-access-layer-dal-framework).

### Search-based content aggregation

The search-based content aggregation technique is based on the use of SharePoint Search Keyword Query Language (KQL) queries. 

You can build search KQL queries and use them to perform content aggregation operations within SharePoint. The queries are executed against the SharePoint search index. Search KQL queries are baked into the implementation of server-side controls such as the out-of-the-box Content-by-Search web part. KQL queries can also be used directly against the Search APIs available to custom client-side JavaScript controls.

The primary benefit of search-based content aggregation is that it leverages the SharePoint Search Service, which is built to provide exceptional performance at a large scale under heavy loads. 

The primary downside of search-based content aggregation is its dependency on the search index, which means there is a slight delay before content changes appear in the search index.

Note the following:

- Portal content must be crawled and added to the search index in order to be made available for search-based data aggregation.

- SharePoint continuously crawls the portal content to provide an up-to-date search index. However, there is a slight delay before content changes appear in the index.

- The search schema must be configured to allow the desired content properties to be discovered via search.

> [!IMPORTANT] 
> We recommend that you use search-based content aggregation.

#### Guidelines for using search-based content aggregation

- Ensure that your content management teams understand that content must be crawled before it can be aggregated.
	- Establish expectations regarding the content aggregation delay.

- Configure the necessary search schema.
	- Choose an appropriate scope (tenant, site collection, or web).
	- Trigger the auto-generation of crawled and managed properties.
	- Leverage out-of-the-box placeholder managed properties (for example, RefinableInt01) when sorting/refining is needed.

- Design appropriate result sources and queries.
	- Target individual lists, webs, or sites as needed.
	- Target individual content types as needed.
	- Target specific managed properties (for example, site columns) as needed.

- Choose the desired display controls:
	- Out-of-the-box controls: 
		- Use Content-by-Search web parts.
		- Return the minimal rows and columns needed.
		- Develop the necessary display templates.
		- Enable asynchronous client-side rendering if desired.
	- Custom controls:
		- Use custom, client-side JavaScript display controls that utilize the REST Search API.
		- Return the minimal rows and columns needed.
		- Leverage the Client-Side Data Access Layer Framework to cache the responses.

For more information about the Client-Side Data Access Layer, see [Performance guidance for SharePoint Online portals](portal-performance.md#client-side-data-access-layer-dal-framework).

## See also

- [Building SharePoint Online portals](portal-overview.md)