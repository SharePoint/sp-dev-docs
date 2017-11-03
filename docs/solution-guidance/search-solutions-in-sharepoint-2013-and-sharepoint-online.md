---
title: Search solutions in SharePoint 2013 and SharePoint Online
ms.date: 11/03/2017
---
# Search solutions in SharePoint 2013 and SharePoint Online

Find out about the SharePoint search architecture, search APIs, and search add-ins.

_**Applies to:** Office 365 | SharePoint 2013 | SharePoint Add-ins | SharePoint Online_

Search in SharePoint 2013 combines ease of configuration and deployment with the scalability and extensibility of the FAST Search Server on a single enterprise search platform.

SharePoint 2013 includes common patterns in the search platform to help you customize search for different scenarios. For example:

- Video search and conversation search are included as out-of-the-box [search verticals](https://technet.microsoft.com/en-us/library/dn794227.aspx).
    
- Topic pages and Content by Search enhance web content management capabilities and scenarios such as search-driven sites and knowledge management sites.
    
- My tasks pulls together project tasks so that users can track tasks assigned in multiple sites in a central location, their OneDrive for Business site.

## SharePoint 2013 search architecture

The search architecture in SharePoint 2013 includes components and databases that work together. 

**Search components in SharePoint 2013**

|**Component**|**Description**|
|:-----|:-----|
|Crawl |Crawls content sources to collect properties and metadata and sends this information to the content processing component.|
|Content processing |Transforms the crawled items and sends them to the index component. This component also maps crawled properties to managed properties.|
|Analytics processing |Carries out search analytics and usage analytics.|
|Index |Receives the processed items from the content processing component and writes them to the search index. This component also handles incoming queries, retrieves information from the search index, and sends back the result set to the query processing component.|
|Query processing |Analyzes incoming queries. This helps optimize precision, recall, and relevance. The queries are sent to the index component, which returns a set of search results for the query.|
|Search administration |Runs the system processes for search, and adds and initializes new instances of search components.|

**Search databases in SharePoint 2013**

|**Database**|**Description**|
|:-----|:-----|
|Crawl |Stores tracking information and historical information about crawled items such as documents and URLs. It also stores information such as the last crawl time, the last crawl ID, and the type of update (add, update, delete) during the last crawl.|
|Link |Stores unprocessed information that is extracted by the content processing component and information about search clicks. The analytics processing component analyzes this information.|
|Analytics reporting |Stores the results of usage analysis.|
|Search administration |Stores search configuration data.|

### Crawl and content processing

The crawl process starts with the different sources of content (for example HTTP, file shares and SharePoint). For content to be added to the index, the crawler uses connectors that tell the crawler how to connect to the content source and access the content items within the source. After the crawler has found the content items, it uses an applicable format handler to parse the content.

After retrieving the content, the crawl component passes crawled items to the content processing component, which processes the items and sends them to the index component. This includes document parsing, mapping crawled properties to their associated managed properties, and linguistics processing, such as language detection and entity extraction. The content processing component also writes information about links and URLs to the link database.

### Query processing

The query processing component analyzes and processes search queries to optimize precision, recall, and relevance, including performing linguistics processing such as word breaking and stemming. The processed query is then submitted to the index component, which returns a result set based on the processed query to the query processing component, which in turn processes that result set.

### Search analytics

SharePoint analyzes both the content itself (search analytics) and also the way that users interact with it (usage analytics), and uses this information to improve search.

Search analytics is about extracting information, such as links, the number of times an item is clicked, anchor text, data related to people, and metadata, from the link database. Search analytics forms the basis of determining relevance. Usage analytics, on the other hand, is about analyzing usage log information received from the front-end via the event store. Usage analytics forms the basis of usage and statistics reports.

The results from the analyses are added to the items in the search index. In addition, results from usage analytics are stored in the analytics reporting database.

## Building blocks for customizing the search experience

Search in SharePoint 2013 and SharePoint Online includes new functionality and improvements that allow you to customize the search experience. Many of the improvements do not require you to write code. SharePoint search includes CSOM and REST APIs to help when you do need to write code for your customization, or if you want to create add-ins to access SharePoint search results outside of SharePoint.

### Search Center site

The Search Center is a SharePoint site set up for search. It is a portal where you can search for content on your organization's intranet, and provides a centralized and highly customizable user interface. This article describes the Search Center's pages and web parts, along with the search configuration settings that you can modify to create custom search experiences without writing a lot of code, or create custom search applications.

When you create a Search Center site, SharePoint creates a default search home page and a default search results page. In addition, several pages known as search verticals are also created. Search verticals are search results pages that are customized to search specific content types, such as People and Videos, and they display search results that are filtered and formatted for a specific content type or class.

The following pages are created in a Search Center site collection, in the Pages library:

- **default.aspx** - The home page for the Search Center, and the page where end users enter their queries.
    
- **results.aspx** - The default search results page for the Search Center. It is also the search results page for the **Everything** search vertical.
    
- **peopleresults.aspx** - The search results page for the **People** search vertical.
    
- **conversationresults.aspx** - The search results page for the **Conversations** search vertical.
    
- **videoresults.aspx** - The search results page for the **Videos** search vertical.
    
- **advanced.aspx** - The search page where end users can apply restrictions to their search phrases, for example, limiting the search to an exact phrase.
    
All the search vertical pages contain the Search Results web part, although the web part is configured differently for each search vertical. For each, the query in the Search Results web part is directed to a specific result source, applicable to that search vertical. For example, the query in the Search Results web part on the peopleresults.aspx page is limited to the Local People Results result source. Understanding how the default search verticals in SharePoint 2013 are configured can help you create your own search vertical or customize the Search Center.

The following are additional resources to help you work with the Search Center:

- [Set up a Search Center in SharePoint 2013](http://technet.microsoft.com/en-us/library/dn794206%28v=office.15%29.aspx)
    
- [How to create a Search Center Site Collection and enable crawling of your content in SharePoint 2013](http://technet.microsoft.com/en-us/library/dn794245%28v=office.15%29.aspx)
    
- [Create a Search Center site in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/hh582314%28v=office.15%29.aspx)
    
- [Manage the Search Center](http://technet.microsoft.com/en-us/library/jj851144%28v=office.15%29.aspx)
    
- [Manage the Search Center in SharePoint Online](http://office.microsoft.com/en-us/office365-sharepoint-online-enterprise-help/manage-the-search-center-in-sharepoint-online-HA103994122.aspx)

### Search Center web parts

Search Center pages contain four types of web parts: Search Box, Search Results, Search Navigation, and Refinement. 

#### Search Box web part

The Search Box web part shows a text box where users enter text on which to search. By default, the Search Box web part is used on the Search Center home page (default.aspx), as well as on all default search results pages (results.aspx, peopleresults.aspx, conversationresults.aspx, and videoresults.aspx).

You can customize the Search Box web part by editing properties in the web part tool pane. This allows you to do the following:

- Change where the search results are displayed. For example, you can show results in a custom Search Results web part or on a custom search results page.
    
- Turn off query suggestions and people suggestions.
    
- Show links to a search preference page and an advanced search page.
    
- Change the display template for the web part.
    
For more information, see [Configure properties of the Search Box Web Part in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/gg576963%28v=office.15%29.aspx) and [How to change the text that is displayed in the Search Box Web Part in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/dn794238%28v=office.15%29.aspx).

#### Search Results web part

The Search Results web part displays the results of a search query. By default, the Search Results web part is used on all default search vertical pages (results.aspx, peopleresults.aspx, conversationresults.aspx, and videoresults.aspx). The Search Results web part also sends the search results to the Refinement web part and the Search Navigation web part, so there must be a Search Results web part on a search results page for the other search web parts to work.

You can edit the Search Results web part properties in the web part tool pane to change the search query, as well as to alter the behavior and appearance of results on the search results page. By changing property values, you can do the following:

- Change the result source to specify which content should be searched.
    
- Add query variables or property filters to customize search results for different users or user groups.
    
- Promote or demote items or pages within the search results.
    
- Change the sorting of the search results.
    
- Change the display template.
    
For more information about the Search Results web parts, see [Configure properties of the Search Results Web Part in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/gg549987.aspx) and [How to configure the Search Results Web Part to use a new result source in SharePoint 2013](http://technet.microsoft.com/en-us/library/dn794200%28v=office.15%29.aspx).

#### Search Navigation web part

The Search Navigation web part shows links that let users move quickly between the different search verticals (Everything, People, Conversations, and Videos). The Search Navigation web part uses search results from the Search Results web part so that when users choose a search vertical link, the search results are filtered and displayed according to how the search vertical is set up. By editing the Search Navigation web part properties in the web part tool pane, you can customize the web part as follows:

- Specify a different web part from which to get the results.
    
- Change the number of search vertical links to show.
    
- Change the appearance and layout of the web part.
    
Additionally, on the ribbon, you can select **Site Settings** > **Search Settings** to make the following changes:

- Change the link display names.
    
- Change the link order.

#### Refinement web part

The Refinement web part filters search results into categories called refiners. Users can choose these refiners to narrow search results. Refiners are managed properties that are marked as  _Refinable_ and _Queryable_. For information about these settings, see [Managed property setting overview in Overview of the search schema in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/jj219669%28v=office.15%29.aspx). You can edit the Refinement web part properties in the web part tool pane to specify the following:

- Which Search Results web part to filter search results from.
    
- The refiners to use in the Refinement web part.
    
- The display template that is applied to each refiner.
    
- The appearance, layout, and behavior of the Refinement web part.
    
By default, the Refinement web part doesn't show the number of results for each refiner value. You can add refiner counts by modifying the display template for the refiner. For more information about this feature, see [Add refiner counts to the Refinement Web Part in Configure properties of the Refinement Web Part in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/gg549985%28v=office.15%29.aspx).

For more information about the Refinement web part and refiners, see [Plan to use refiners on a search results page in SharePoint 2013](http://technet.microsoft.com/en-us/library/dn794223%28v=office.15%29.aspx) and [How to add refiners to your search results page in SharePoint 2013](http://technet.microsoft.com/en-us/library/dn794243%28v=office.15%29.aspx).

### Result sources

Result sources limit searches to certain content or to a subset of search results. You can define a result source by specifying the following:

- A search provider or source URL to get search results from; for example, the search index of the local SharePoint Search service.
    
- A protocol to use to get search results; for example, the [OpenSearch](http://www.opensearch.org/Home) protocol.
    
- A query transform, which can narrow results from the given search provider or URL to a specific subset of results; for example, to a set of results that has a particular content type.
    
SharePoint 2013 provides sixteen preconfigured result sources, including Local SharePoint Results, Conversations, and Items related to current user. You can view details about result sources from the **Manage Result Sources** page. (**Site Settings** > **Search** > **Result Sources**). Then, from the **Manage Result Sources** page, you can create new result sources in either of the following two ways:

- Choose **New Result Source** and select the result source that you want. (For more information, see [Configure result sources for search in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/jj683115%28v=office.15%29.aspx).)
    
- Point to the arrow next to an existing result source, choose **Copy**, and then modify the copy as necessary and save it with a new name.
    
A result source specifies one of four protocols to obtain search results. If the result source uses a protocol other than **Local SharePoint**, the result source must also specify a URL from which to get search results.

**Result source protocols and their providers**

|**Result source protocol**|**Provider**|**URL**|
|:-----|:-----|:-----|
|Local SharePoint|The search index of the local Search service.|N/A|
|Remote SharePoint|The search index of a Search service hosted in another farm.|The address of the root site collection of the remote SharePoint farm. |
|OpenSearch 1.0/1.1|An external search provider (such as a remote search engine or feed) that uses the OpenSearch protocol to provide search results.|The URL of the RSS feed of a search provider that uses the OpenSearch protocol.|
|Exchange|Exchange Web Services (EWS).|An EWS URL.|

For more information, see the following:

- [Understanding result sources for search in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/dn186229%28v=office.15%29.aspx)
    
- [About result sources and federation](http://technet.microsoft.com/en-us/library/jj219577%28v=office.15%29.aspx#Section12)
    
- [Understanding result sources](http://office.microsoft.com/en-us/sharepoint-server-help/understanding-result-sources-HA102848849.aspx?CTT=1)
    
- [Manage result sources](http://office.microsoft.com/en-us/office365-sharepoint-online-enterprise-help/manage-result-sources-HA103639370.aspx)

### Query rules

Use query rules to customize the search experience for queries that are particularly important to your users. In a query rule, you specify the context, conditions, and correlated actions. Then, in the specified context, and when a query meets the specified conditions, search performs its correlated actions to improve the relevance of the search results.

With respect to context, you can restrict query rule queries that are: 

- Performed on a specified result source.
    
- From a specified topic category.
    
- Performed by a user matching a specified user segment.
    
The following table lists conditions that you can specify that cause a query rule to run.

**Query rule conditions**

|**Condition**|**Description**|
|:-----|:-----|
|Query matches keyword exactly|Apply the query rule when the query exactly matches a word or phrase that you specify.|
|Query contains action term|Apply the query rule when the query contains a term in the form of a single word or phrase that indicates that the user is trying to do something. The term must be at the beginning or end of the query and might be a verb, a command, or a filter.|
|Query matches dictionary exactly|Apply the query rule when the query exactly matches a dictionary entry. This entry can be a term in the term store, or an entry in the people names dictionary. |
|Query more common in source|Apply the query rule if the user's query is more commonly performed against a different result source than the current one. This condition uses an analysis of queries that users entered in the various result sources.|
|Result type commonly clicked|Apply the query rule if the query often ends in users choosing results of a particular result type. When you create a new result type, you can indicate that these selections should be recorded to be used in query rules.|
|Advanced query text match|Apply the query rule if the query matches a regular expression. It also allows you to use variations of the keyword, action term, and dictionary conditions explained earlier, but with more advanced control.|

A query rule can specify three kinds of actions:

- Add **Promoted Results** (formerly called **Best Bets**) that appear above ranked results. For example, for the query "sick leave", a query rule could specify a particular Promoted Result, such as a link to a site that has a statement of company policy regarding time off work.
    
- Add one or more groups of results, called result blocks. A result block contains a small subset of results that are related to a query in a particular way. Like individual results, you can promote a result block or rank it with other search results. 
    
- Change the ranking of results by changing the query. For example, for a query that contains "download toolbox", a query rule could recognize the word "download" as an action term and boost search results that point to a particular download site on your intranet.
    
For more information about query rules, see [Manage query rules in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/jj871676.aspx).

### Query transforms

To provide search results that are appropriate for a user query, sometimes the query needs to be modified. You do this with query transforms. Default search verticals included with SharePoint 2013, such as Videos, People, and Conversations, all contain predefined query transforms to optimize the search experience for that vertical.

You can configure query transforms in three places:

- In a web part, such as a Search Results web part. 
    
- In a query rule, which specifies that certain actions will be performed only if certain conditions are satisfied. 
    
- In the result source that the query uses to get search results.
    
A user query is transformed first by the web part, then by any query rules that apply, and finally by the result source. When you configure a transform in a result source, you know that the transform changes will not be discarded or overridden, because the result source transforms the query last. You can reuse a result source query transform in web parts or result blocks, and you can create query rules or result types that are only applied to results from certain result sources.

You can use the Query Builder to help you write and test query transforms. You can test the query from within the Query Builder by setting temporary test values for the query variables, running the query, and previewing the search results. For more information about query transforms, see [Plan to transform queries and order results in SharePoint 2013](http://technet.microsoft.com/en-us/library/60a1110d-27dc-45d0-86e2-cddc72d072b2%28v=office.15%29).

### Result types and display templates

SharePoint 2013 search includes a new results framework that makes it easy to customize the way search results are displayed. Now, instead of writing custom XSLT to change how search results are displayed, you can customize the appearance of important types of results by using display templates and result types.

#### Result types

To display search results differently, search results have to be sorted into different result types. A result type is a classification of a search result that distinguishes one search result from another. It is comprised of a collection of the following:

- **Rules** - One or more characteristics or conditions to compare each search result against, such as the result source or content type of the search result. Rule conditions can be joined by using equality, comparison, and logical operators.
    
- **Properties** - The list of managed properties for the search result. You must add managed properties to the properties list before you map the managed property to a display template.
    
- **Display templates** - Controls the way in which all results that meet the conditions appear and behave on a search results page.
    
SharePoint search includes several default result types. To see them, go to **Site Settings** > **Site Collection Administration** > **Search Result Types**. You cannot edit any of the default result types. You can create new result types by copying existing ones, and modifying them. For more information about the default result types included with SharePoint 2013, see [Result types and display templates that are used to display search results in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/dn386874%28v=office.15%29.aspx).

#### Display templates

Display templates define the visual layout and behavior of search results. They control which managed properties are shown in search results and how they appear. SharePoint stores display templates in the Search subfolder of the Display Templates folder in the Master Page Gallery. Each display template consists of two files: 

- An HTML version of the display template that you can edit in your HTML editor.
    
- A .js file that SharePoint uses. 
    
When you work with display templates, you modify the HTML file. The .js file is created and modified by SharePoint. You do not edit this file at all.

There are two primary types of display templates:

- **Control display templates** - Determine the overall structure of how the results are presented.
    
- **Item display templates** - Determine how each result in the set is displayed.
    
The control display template provides HTML to structure the overall layout for how you want to present the search results. For example, the control display template might provide the HTML for a heading and the beginning and end of a list. The control display template is rendered only once in the web part.

The item display template provides HTML that determines how each item in the result set is displayed. For example, the item display template might provide the HTML for a list item that contains a picture, and three lines of text that are mapped to different managed properties associated with the item. The item display template is rendered one time for each item in the result set. So, if the result set contains ten items, the item display template creates its section of HTML ten times.

For details display templates and their structure, see [SharePoint 2013 Design Manager display templates](http://msdn.microsoft.com/en-us/library/jj945138.aspx) and [Search-driven Web Parts and display templates](http://msdn.microsoft.com/en-us/library/jj191506.aspx) in [Overview of the SharePoint 2013 page model](http://msdn.microsoft.com/en-us/library/jj191506.aspx).

For more information about display templates available in SharePoint 2013, see [Display template reference in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/jj944947.aspx).

#### Customize display templates

If you want to customize display templates included with SharePoint, create a new display template by copying the content from the one you want to modify, and then customize the new version. Starting from a copy of an existing display template is also the easiest way to create a new one, as it ensures that you are starting with all the required elements.

Another tip when working with display templates is to map a network drive to the Master Page Gallery. For details, see [How to: Map a network drive to the SharePoint 2013 Master Page Gallery](https://msdn.microsoft.com/en-us/library/office/jj733519.aspx).

The HTML file that is used for a display template is a fully-formed HTML document, with  `head` and `body` elements. Within the `head` element, there's a `title` element that specifies the display name for the display template. The text in this tag is what will be shown when you do configurations in the SharePoint UI, for example, when you configure a result type.

After the  `title` element, there's a custom document properties element, `mso:CustomDocumentProperties`. In item display templates, this element contains a  `mso:ManagedPropertyMapping` element, which is where the managed properties used by SharePoint search are mapped to values used by the display template. The following is the syntax for this: `<display template reference name>:<managed property name>`, as shown in the following example.

```HTML
<mso:ManagedPropertyMapping msdt:dt="string">'Title':'Title','Path':'Path','Description':'Description'
```

Within the  `body` element, there's a `script` element where you can include external resources such as CSS files or JavaScript files outside of the display template. See the "Script block" section in [SharePoint 2013 Design Manager display templates](http://msdn.microsoft.com/en-us/library/jj945138.aspx) for examples that show how to include external resources in the script element.

The next element is a  `div` element. This is where you place any HTML or script that you want as part of the display template. A good way to become familiar with the display template structure is to download copies of the default display templates for search results, Control_SearchResults.html, the control display template, and Item_Default.html, the item display template.

#### Additional resources for result types and display templates

The following are some additional resources for display templates and result types:

- [Customize search result types in SharePoint 2013](http://technet.microsoft.com/en-us/library/dn135239%28v=office.15%29.aspx)
    
- [How to change the way search results are displayed in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/dn794204%28v=office.15%29.aspx)
    
- [Understanding how search results are displayed in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/dn794212%28v=office.15%29.aspx)
    
- [Understanding how item display templates and hit highlighting work in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/dn794249%28v=office.15%29.aspx)
    
- [How to create a new result type in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/dn794234%28v=office.15%29.aspx)
    
- [How to display values from custom managed properties in search results - option 1 in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/dn794209%28v=office.15%29.aspx)
    
- [How to display values from custom managed properties in search results - option 2 in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/dn794240%28v=office.15%29.aspx)
    
- [How to display values from custom managed properties in the hover panel in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/dn794247%28v=office.15%29.aspx)

## Query APIs and search add-ins

SharePoint 2013 search includes .NET and JavaScript client object models and a REST service that enables access to search results for online, on-premises, and mobile development. 

**Search query APIs**

|**API**|**Class library or schema path**|**Example**|
|:-----|:-----|:-----|
|.NET CSOM|Microsoft.SharePoint.Client.Search.dll[SharePoint Server 2013 Client Components SDK download](http://www.microsoft.com/en-us/download/details.aspx?id=35585)%ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\ISAPI[SharePoint Online Client Components SDK download](http://www.microsoft.com/en-us/download/details.aspx?id=42038)%ProgramFiles%\Common Files\Microsoft Shared\web server extensions\16\ISAPI|[SharePoint 2013: Query Search with the Managed Client ](http://code.msdn.microsoft.com/Query-Search-with-the-649f1bc1)[Object Model (Code Gallery)](http://code.msdn.microsoft.com/Query-Search-with-the-649f1bc1)|
|JavaScript CSOM|SP.search.js%ProgramFiles%\SharePoint Client Components\Scripts|[Querying Search with the JavaScript Client Object Model](http://code.msdn.microsoft.com/SharePoint-2013-Querying-a629b53b) (Code Gallery)|
|REST service|http://server/_api/search/queryhttp://server/_api/search/postqueryhttp://server/_api/search/suggest|[SharePoint 2013: Using the search REST service from a SharePoint Add-in ](http://code.msdn.microsoft.com/sharepoint/SharePoint-2013-Perform-a-1bf3e87d) (Code Gallery)|

### Search query .NET CSOM

To use the query .NET CSOM, create a new instance of the [T:Microsoft.SharePoint.Client.ClientContext](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.clientcontext.aspx) class, which is located in the [Microsoft.SharePoint.Client](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.aspx) namespace in the Microsoft.SharePoint.Client.dll. Then use the query object model in the [Microsoft.SharePoint.Search.Client.Query](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.search.query.aspx) namespace. The following is a simple example.

```C#
using Microsoft.SharePoint.Client; 
using Microsoft.SharePoint.Client.Search.Query;
â€¦
using (ClientContext clientContext = new ClientContext("http://intranet.contoso.com"))
{
    KeywordQuery keywordQuery = new KeywordQuery(clientContext);
    keywordQuery.QueryText = "Argument";
    SearchExecutor searchExecutor = new SearchExecutor(clientContext);
    ClientResult<ResultTableCollection> results = searchExecutor.ExecuteQuery(keywordQuery);
    clientContext.ExecuteQuery();
}
 
```

Now you can iterate through the search results. The following example writes out the title of each result.

```C#
foreach (var row in results.Value[0].ResultRows) 
{ 
    Console.WriteLine(row["Title"]); 
}
```

### Search query REST service

The Search query REST service supports both HTTP **POST** and **GET** requests. When you make a call to the Search REST service, you specify query parameters with the request and search uses these query parameters to construct the search query. With a **GET** request, you specify the query parameters in the URL. For **POST** requests, you pass the query parameters in the body in JavaScript Object Notation (JSON) format.

**JSON GET and POST requests**

|Verb|URI|
|:---|:---|
| **GET** requests| `http://server/_api/search/query`|
| **POST** requests| `http://server/_api/search/postquery`|

**Sample GET requests for Search REST service**

|**Request type**|**Request URL**|
|:-----|:-----|
|Keywords|http://server/site/_api/search/query?querytext='{KQL Query}'|
|Selecting Properties|http://server/site/_api/search/query?querytext='test'&amp;selectproperties='Title,Rank'|
|Sorting|http://server/site/_api/search/query?querytext='test'&amp;sortlist='LastModifiedTime:descending'http://server/site/_api/search/query?querytext='test'&amp;sortlist='LastModifiedTime:descending,Rank:ascending'|

For a complete list of the query parameters available and how to use them, see [SharePoint Search REST API overview](http://msdn.microsoft.com/library/8a4f7863-e4c1-4099-9189-a1894db36930%28Office.15%29.aspx). For sample code, see [SharePoint 2013: Using the search REST service from a SharePoint Add-in](https://code.msdn.microsoft.com/sharepoint/SharePoint-2013-Perform-a-1bf3e87d).

### Search add-ins

SharePoint Add-ins (formerly known as apps for SharePoint) are self-contained pieces of functionality that extend the capabilities of a SharePoint website. Search add-ins (formerly known as search apps) are SharePoint Add-ins that use search functionality. In a search add-ins, you can use the search query APIs to retrieve search results. In addition, you can also use it to distribute search configurations from one SharePoint installation to another.

For information about setting up a development environment to create search add-ins, see [Set up an on-premises development environment for SharePoint Add-ins](http://msdn.microsoft.com/library/b0878c12-27c9-4eea-ae3b-7e79e5a8838d%28Office.15%29.aspx) or [Set up a development environment for SharePoint Add-ins on Office 365](http://msdn.microsoft.com/library/b22ce52a-ae9e-4831-9b68-c9210af6dc54%28Office.15%29.aspx).

#### Permissions

Search add-ins require only user-level permissions, where the attribute value is  _QueryAsUserIgnoreAppPrincipal_. This permission lets you query the search add-ins based on the user's permissions. This means that search results will be returned based on the user's ACLs. To grant permissions to the add-ins to use search:

1. In **Solution Explorer**, open **AppManifest.xml**.
    
2. On the **Permissions** tab, select **Search for Scope** and then select **QueryAsUserIgnoreAppPrincipal**.
    
For more information, see [Add-in permissions in SharePoint 2013](http://msdn.microsoft.com/library/5f7a8440-3c09-4cf8-83ec-c236bfa2d6c4%28Office.15%29.aspx).

#### Query APIs

You can use the .NET CSOM, JavaScript CSOM, or search REST service to retrieve search results in a search add-ins. The following example shows how to use the query .NET CSOM to retrieve search results in a search add-ins.

```C#
var spContext = SharePointContextProvider.Current.GetSharePointContext(Context);
using (var clientContext = spContext.CreateUserClientContextForSPHost())
{
    KeywordQuery keywordQuery = new KeywordQuery(clientContext);
    keywordQuery.QueryText = "Argument";
    SearchExecutor searchExecutor = new SearchExecutor(clientContext);
    ClientResult<ResultTableCollection> results = searchExecutor.ExecuteQuery(keywordQuery);
    clientContext.ExecuteQuery();
}

```

## In this section

- [Search customizations for SharePoint](search-customizations-for-sharepoint.md)

## Additional resources
<a name="bk_addresources"> </a>

- [SharePoint Add-ins](http://msdn.microsoft.com/library/cd1eda9e-8e54-4223-93a9-a6ea0d18df70%28Office.15%29.aspx)
    
- [Search add-ins in SharePoint 2013](http://msdn.microsoft.com/library/21682e45-dd78-4f3c-8f1e-cdd48de3bde2%28Office.15%29.aspx)
    
- [Add search capabilities to your SharePoint Add-ins](http://blogs.msdn.com/b/officeapps/archive/2013/05/30/add-search-capabilities-to-your-apps-for-sharepoint.aspx)
