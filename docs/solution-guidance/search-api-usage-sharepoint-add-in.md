---
title: Search API usage in the SharePoint Add-in model
ms.date: 11/03/2017
---
Search API usage in the SharePoint Add-in model
===============================================

Summary
-------

The approach you take to execute searches with the SharePoint Search Service is different in the new SharePoint Add-in model than it was with Full Trust Code.  In a typical Full Trust Code (FTC) / Farm Solution scenario, the SharePoint server-side object model (Content By Query web part overrides) or the Search Web Services were used to execute searches with the SharePoint Search Service.

In a SharePoint Add-in model scenario, you execute searches with the SharePoint Search Service via the CSOM or REST APIs.

High Level Guidelines
---------------------

As a rule of a thumb, we would like to provide the following high level guidelines to create and configure site collections and sub sites then deploy artifacts, configurations, and branding assets to them.

- Using AppOnly authentication is not supported for any Search Service operations.
	+ This is due to the fact that the Search Service accesses the user profile service to search user profile information and the UPS does not support AppOnly authentication.
	+ Therefore, because search relevance and other search facets depend on a given user and their profile attributes the AppOnly authentication pattern will not work.

Options to execute searches with the SharePoint Search Service
--------------------------------------------------------------

You have a coupe of options to execute searches with the SharePoint Search Service.

- .Net CSOM API
- JavaScript CSOM (JSOM) API
- REST API	

.Net CSOM API
-------------
In this option you use the .Net CSOM API to execute searches with the SharePoint Search Service.
	
- This API is only available in managed .Net code.


**When is it a good fit?**

- This API is a great fit for Provider-hosted Add-ins, long running operations, or other server-side scenarios that run on the .Net platform.
- Some examples of these scenarios are ASP.NET MVC websites, ASP.NET Web API services, .Net console or Windows applications, and Azure Web Jobs.

**Getting Started**

The following sample demonstrates how to execute searches with the SharePoint Search Service with the .Net CSOM API.  This example also demonstrates how to access a user's profile to personalize the search results.

- [Search.PersonalizedResults (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Search.PersonalizedResults)

![The Search API and personalization page. Text in image: Perform Search API search. Provide search filter for tenant wide search query: Text box contains the word, Test. Button text: Perform Simple Search. Perform personalized search of all site templates using profile data. If About me does NOT contain text AppTest we search only sites which are team sites (WebTemplate = STS). If AppTest is present, we search all sites. Scenario: show sites or aggregated data from specific locations based on the user profile. Example would be to aggregate news pages which are only tagged with identifier matching current user location or city. Button text: Perform Personalized Search.](media/Recipes/SearchAPI/Search.PersonalizedResults.png)

The [How to perform personalized search queries with CSOM (O365 PnP Video)](https://channel9.msdn.com/blogs/OfficeDevPnP/How-to-perform-personalized-search-queries-with-CSOM) walks you through the [Search.PersonalizedResults (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Search.PersonalizedResults).

The **btnPerformSearch_Click** method in the [Default.aspx.cs class](https://github.com/SharePoint/PnP/blob/master/Samples/Search.PersonalizedResults/PersonalizedSearchResultsWeb/Pages/Default.aspx.cs) executes a search for the text value the user enters into the search box and scopes the search to all content that is stored in a site collection.  The contentclass:"STS_Site" parameter limits the search scope to site collections.

	protected void btnPerformSearch_Click(object sender, EventArgs e)
    {
        var spContext = SharePointContextProvider.Current.GetSharePointContext(Context);

        using (var clientContext = spContext.CreateUserClientContextForSPHost())
        {
            // Since in this case we want only site collections, let's filter based on result type
            string query = searchtext.Text + " contentclass:\"STS_Site\"";
            ClientResult<ResultTableCollection> results = ProcessQuery(clientContext, query);
            lblStatus1.Text = FormatResults(results);
        }
    }

The **btnPersonalizedSearch_Click** method in the [Default.aspx.cs class](https://github.com/SharePoint/PnP/blob/master/Samples/Search.PersonalizedResults/PersonalizedSearchResultsWeb/Pages/Default.aspx.cs) executes the same search as the btnPerformSearch_Click method does and also adds an additional parameter based on the current user's profile.  The PeopleManager class is used to access the current user's profile properties.

	protected void btnPersonalizedSearch_Click(object sender, EventArgs e)
    {
        var spContext = SharePointContextProvider.Current.GetSharePointContext(Context);

        using (var clientContext = spContext.CreateUserClientContextForSPHost())
        {
            // Load user profile properties
            PeopleManager peopleManager = new PeopleManager(clientContext);
            PersonProperties personProperties = peopleManager.GetMyProperties();
            clientContext.Load(personProperties);
            clientContext.ExecuteQuery();
            // Check teh value for About Me to investigate current values
            string aboutMeValue = personProperties.UserProfileProperties["AboutMe"];
            string templateFilter = ResolveAdditionalFilter(aboutMeValue);
            // Let's build the query
            string query = "contentclass:\"STS_Site\" " + templateFilter;
            ClientResult<ResultTableCollection> results = ProcessQuery(clientContext, query);
            lblStatus2.Text = FormatResults(results);
        }
    }

The **ResolveAdditionalFilter** method in the [Default.aspx.cs class](https://github.com/SharePoint/PnP/blob/master/Samples/Search.PersonalizedResults/PersonalizedSearchResultsWeb/Pages/Default.aspx.cs) evaluates the current user's profile properties and returns an applicable search parameter. In this example, if the aboutMeValue user profile property contains AppTest then the search parameter WebTemplate=STS is returned.  This parameter limits the search scope to sites built with the STS (Team Site) template.
 
	private string ResolveAdditionalFilter(string aboutMeValue)
    {
        if (!aboutMeValue.Contains("AppTest"))
        {
            return "WebTemplate=STS";
        }
        
        return "";
    }

In both cases, the **ProcessQuery** method in the [Default.aspx.cs class](https://github.com/SharePoint/PnP/blob/master/Samples/Search.PersonalizedResults/PersonalizedSearchResultsWeb/Pages/Default.aspx.cs) uses the SearchExecutor class to execute the search query and return the results. 

	private ClientResult<ResultTableCollection> ProcessQuery(ClientContext ctx, string keywordQueryValue)
    {
        KeywordQuery keywordQuery = new KeywordQuery(ctx);
        keywordQuery.QueryText = keywordQueryValue;
        keywordQuery.RowLimit = 500;
        keywordQuery.StartRow = 0;
        keywordQuery.SelectProperties.Add("Title");
        keywordQuery.SelectProperties.Add("SPSiteUrl");
        keywordQuery.SelectProperties.Add("Description");
        keywordQuery.SelectProperties.Add("WebTemplate");
        keywordQuery.SortList.Add("SPSiteUrl", Microsoft.SharePoint.Client.Search.Query.SortDirection.Ascending);
        SearchExecutor searchExec = new SearchExecutor(ctx);
        ClientResult<ResultTableCollection> results = searchExec.ExecuteQuery(keywordQuery);
        ctx.ExecuteQuery();
        return results;
    }

JavaScript CSOM (JSOM) API
--------------------------
In this option you use the JavaScript CSOM (JSOM) API to execute searches with the SharePoint Search Service.
	
- This API is only available in client-side JavaScript code.

**When is it a good fit?**

- This API is a great fit for SharePoint-hosted Add-ins and Provider-hosted Add-ins running on any web platform.
- Some examples of these scenarios are ASP.NET MVC websites, PHP websites, Python websites, etc.

**Getting Started**

The following code example demonstrates how to execute searches with the SharePoint Search Service with the JavaScript CSOM (JSOM) API.  This example executes a search for all items that contain the term 'Blizzard'.

	var context = SP.ClientContext.get_current();
	
	var keywordQuery = 
	new Microsoft.SharePoint.Client.Search.Query.KeywordQuery(context);
	
	keywordQuery.set_queryText("Blizzard");
	
	var searchExecutor = 
	new Microsoft.SharePoint.Client.Search.Query.SearchExecutor(context);
	
	results = searchExecutor.executeQuery(keywordQuery);
	
	context.executeQueryAsync(onGetEventsSuccess, onGetEventsFail);

REST API
--------
In this option you use the REST API to execute searches with the SharePoint Search Service.
	
- This API is the most flexible because it is available in both server-side and client-side code.
- The SharePoint Search Service REST API root endpoint is:
	+ https://<tenant>/site/_api/search/query
- Here are some simple examples:
	+ Keyword search
	
		```
		https://tenant/site/_api/search/query?querytext='{Apples}'
		```
	+ Selecting specific properties
	
		```
		https://tenant/site/_api/search/query?querytext='test'&selectproperties='Rank, Title'
		```
	+ Sorting
	
		```
		https://tenant/site/_api/search/query?querytext='Oranges'&sortlist='LastModifiedTime:ascending'
		```

**When is it a good fit?**

This API is a great fit for SharePoint-hosted Add-ins and Provider-hosted Add-ins running on any web platform.
- Some examples of these scenarios are ASP.NET MVC websites, PHP websites, Python websites, ASP.NET Web API services, .Net console or Windows applications, Azure Web Jobs, etc.

**Getting Started**

**Server-side Option**

The following sample demonstrates how to execute searches with the SharePoint Search Service with the REST API from managed .Net code.

- [EmployeeDirectory (OfficeDev Training Content)](https://github.com/SharePoint/TrainingContent/tree/master/O3656/O3656-6%20Deep%20Dive%20into%20Search%20Scenarios%20in%20Office%20365/Demos/EmployeeDirectory)

The **Index** method in the [HomeController.cs class](https://github.com/SharePoint/TrainingContent/blob/master/O3656/O3656-6%20Deep%20Dive%20into%20Search%20Scenarios%20in%20Office%20365/Demos/EmployeeDirectory/EmployeeDirectoryWeb/Controllers/HomeController.cs) executes a search for  all users whose last name begins with the text value the user clicks.

	var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext);

    string accessToken = spContext.UserAccessTokenForSPHost;

	//Build the REST API request
    StringBuilder requestUri = new StringBuilder()
    .Append(spContext.SPHostUrl)
    .Append("/_api/search/query?querytext='LastName:")
    .Append(startLetter)
    .Append("*'&selectproperties='LastName,FirstName,WorkEmail,WorkPhone'&sourceid='B09A7990-05EA-4AF9-81EF-EDFAB16C4E31'&sortlist='FirstName:ascending'");

	//Create HTTP Client
    HttpClient client = new HttpClient();
	//Add the REST API request
    HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, requestUri.ToString());
	//Set accept header
    request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/xml"));
	//Set Bearer header equal to access token
    request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

	//Send the REST API request
    HttpResponseMessage response = await client.SendAsync(request);
	//Set the response
    string responseString = await response.Content.ReadAsStringAsync();

The [How to build SharePoint add-ins that leverage search (O365 PnP Video)](https://channel9.msdn.com/blogs/OfficeDevPnP/How-to-build-SharePoint-add-ins-that-leverage-search) walks you through the [EmployeeDirectory (OfficeDev Training Content)](https://github.com/SharePoint/TrainingContent/tree/master/O3656/O3656-6%20Deep%20Dive%20into%20Search%20Scenarios%20in%20Office%20365/Demos/EmployeeDirectory).

**Client-side Option**

The following code example demonstrates how to execute searches with the SharePoint Search Service with the REST API from JavaScript.  This example executes a search for all items that contain the term 'Lacrosse'.
	
	$.ajax(
	        {
	            url: "http://site/_api/search/" +
	                 "query?querytext='{Lacrosse}‘",
	            method: "GET",
	            headers: {
	                "accept": "application/json;odata=verbose",
	            },
	            success: onSuccess,
	            error: onError
	        }
	    );

Related links
=============
- [How to perform personalized search queries with CSOM (O365 PnP Video)](https://channel9.msdn.com/blogs/OfficeDevPnP/How-to-perform-personalized-search-queries-with-CSOM)
- [EmployeeDirectory (OfficeDev Training Content)](https://github.com/SharePoint/TrainingContent/tree/master/O3656/O3656-6%20Deep%20Dive%20into%20Search%20Scenarios%20in%20Office%20365/Demos/EmployeeDirectory)
- [How to build SharePoint add-ins that leverage search (O365 PnP Video)](https://channel9.msdn.com/blogs/OfficeDevPnP/How-to-build-SharePoint-add-ins-that-leverage-search)
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================
- [Search.PersonalizedResults (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Search.PersonalizedResults)
- Samples and content at [http://aka.ms/OfficeDevPnP](http://aka.ms/OfficeDevPnP)

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D)
- SharePoint 2013 on-premises
