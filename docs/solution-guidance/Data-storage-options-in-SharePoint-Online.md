---
title: Data storage options in SharePoint Online
ms.date: 11/03/2017
---
# Data storage options in SharePoint Online

When you develop SharePoint Online add-ins, you have a number of different options for data storage. You can use the sample described in this article to explore the differences between each option, and to learn about the advantages to using remote data storage. 

_**Applies to:** Office 365 | SharePoint 2013 | SharePoint Online_

This article describes the  [Core.DataStorageModels](https://github.com/SharePoint/PnP/tree/master/Samples/Core.DataStorageModels) sample app, which shows you each of the following data storage options and the advantages and disadvantages of each:

- SharePoint list on the host web
    
- SharePoint list on the app web
    
- SQL Azure database
    
- Azure queue storage
    
- Azure table storage
    
- External web service
    
The  [Core.DataStorageModels](https://github.com/SharePoint/PnP/tree/master/Samples/Core.DataStorageModels) sample app is a provider-hosted app written in C# and JavaScript that deploys a number of SharePoint artifacts (lists, app part, web part) to both the host web and the app web. It interacts with SharePoint lists on the app web and host web, and also makes calls to a SQL Azure database, an Azure queue and table storage, and a remote web service that implements OData. This sample uses the Model-View-Controller (MVC) pattern.
The  [Core.DataStorageModels](https://github.com/SharePoint/PnP/tree/master/Samples/Core.DataStorageModels) sample app applies each data storage option to a specific function for which the option is well suited, as described in the following table.

|Sample app storage option|Used for|
|:--|:--|
|SharePoint list app web|Customer notes|
|SharePoint list host web|Support cases|
|Northwind OData service|Customers|
|Azure table storage|CSR ratings|
|Azure queue storage|Call queue|
|SQL Azure Northwind database|Orders, order details, products|

The app implements a customer service dashboard and related interfaces that show recent orders, customer representative survey ratings, customer notes, support cases, and a customer representative call queue. 
The first two scenarios let you retrieve data by using relatively simply client object model code or REST queries, but are limited by list query thresholds. The next four scenarios uses different types of remote storage. 

**Figure 1. Data storage models start page prompts you to deploy SharePoint components**

![Screenshot of app sample UI](media/bb3b58ca-b983-4ec4-b36d-18a911edb5d5.png)

## Before you begin
<a name="sectionSection0"> </a>

Before you use this sample, make sure that you have the following:

- A Microsoft Azure account where you can deploy a SQL Azure database and create an Azure storage account. 
    
- A SharePoint developer site so that you can deploy the sample from Visual Studio 2013.
    
Also, you need to deploy the Northwind database to Microsoft Azure.

### To deploy the Northwind database

1. Log on to the Azure Management Portal and choose  **SQL Databases**> **Servers**.
    
2. Choose  **Create a SQL Database Server**.
    
3. In the  **Create Server** form, enter values for **Login Name**,  **Login Password**, and  **Region**, as shown in Figure 2.
    
    **Figure 2. SQL database server settings**

    ![Shows the SQL database server settings](media/7ae059fa-eecc-4446-8171-294e44acb189.png)

4. Choose the checkmark button to finish and create the server.
    
5. Now that you've created the database, choose the server name that you created, as shown in Figure 3.
    
    **Figure 3. Server name on the Servers page**

    ![Shows the list of SQL databases](media/a6b097e4-5ad2-47df-9e31-ac0d699efd76.png)

6. Choose  **CONFIGURE**, and then choose the arrow in the lower right corner to complete the configuration, and choose  **SAVE**.
    
7. Open SQL Server Management Studio on your local development computer and create a new database named  **NorthWind**.
    
8. In the  **Object Explorer**, select the  **Northwind** database, and then choose **New Query**.
    
9. In a text editor of your choice, open the northwind.sql SQL script that is provided with the  [Core.DataStorageModels](https://github.com/SharePoint/PnP/tree/master/Samples/Core.DataStorageModels) sample.
    
10. Copy the text in the northwind.sql file and paste it into the  **SQL Query window** in the SQL Server Management Studio, and then choose **Execute**.
    
11. In the  **Object Explorer**, open the shortcut menu for (right-click) the  **Northwind** database, select **Tasks**, and then select  **Deploy Database to SQL Azure**.
    
12. On the  **Introduction** screen, choose **Next**.
    
13. Choose  **Connect ...** and enter the **Server name** for the SQL Azure Database Server you just created.
    
14. In the  **Authentication** dropdown, select **SQL Server Authentication**.
    
15. Enter the user name and password you used when you created the SQL Azure Database server, then choose  **Connect**.
    
16. Choose  **Next**, and then choose  **Finish**, and wait until the database is created. After it is created, choose  **Close** to close the wizard.
    
17. Return to the Azure Management Portal ( [https://manage.windowsazure.com/](https://manage.windowsazure.com/)) to verify that the Northwind database was created successfully. You should see it listed on the sql databases screen, as shown in Figure 4.
    
    **Figure 4. Listing of SQL Server databases**

    ![Shows a list of all SQL databases, including Northwind](media/036b4252-f57b-4f39-9f60-ddaa30daf23c.png)

18. Select the Northwind database, and then select  **View SQL Database connection strings**.
    
19. Copy the connection string and paste it into a text file and save it locally. You will need this connection string later. Close the  **Connection Strings** dialog box.
    
20. Choose the  **Set up Windows Azure firewall rules for this IP address** link and add your IP address to the firewall rules to allow you to access the database.
    
21. Open the Core.DataStorageModels.sln project in Visual Studio 2013.
    
22. In the Visual Studio **Solution Explorer**, locate the Web.config file.
    
23. In the Web.config file, locate the add  `name="NorthWindEntities"` element and replace the existing connectionString value with the connection string information that you saved locally in step 19. 
    
	```XML
	  <add name="NorthWindEntities" connectionString="metadata=res://*/Northwind.csdl|res://*/Northwind.ssdl|res://*/Northwind.msl;provider=System.Data.SqlClient;provider connection string=&amp;quot;data source=<Your Server Here>.database.windows.net;initial catalog=NorthWind;user id=<Your Username Here>@<Your Server Here>;password=<Your Password Here>;MultipleActiveResultSets=True;App=EntityFramework&amp;quot;" providerName="System.Data.EntityClient" />
	```
24. Save the Web.config file.

## SharePoint list on the app web (Notes scenario)
<a name="sectionSection1"> </a>

The Notes list scenario, which uses a SharePoint list on an app web, shows how lists perform in a SharePoint app web. The Notes list is created in the app web with a title and description field. The SharePoint REST API queries the Notes list and returns all the notes based on a customer ID.

Using lists in the app web has one important advantage over other storage solutions: you can use simple SharePoint REST API calls to query data. However, there are some disadvantages:

- To update list metadata, you must update and redeploy the app.
    
- To update the data structure, you must rewrite application logic for storing and updating data.
    
- Information stored in the list cannot be shared easily with other add-ins.
    
- You cannot search for data in SharePoint.
    
- The amount of data that you can store in lists and the size of query result sets are limited.
    
The code that underlies the Notes section of the customer dashboard uses REST queries to retrieve data from a list that is deployed to the app web. This list contains fields for titles, authors, customer IDs, and descriptions. You can use the app's interface to add and retrieve notes for a specified customer, as shown in Figure 5.

**Figure 5. User interface for the Notes app**

![A screenshot that shows the UI for the Notes data storage model](media/d98ce2cf-5022-4f2b-ad3e-da4eea52dfb2.png)

The  **View Notes List in App Web** link provides an "out of the box" view of the list data.

This app uses the Model-View-Controller (MVC) pattern. You can see the code for the notes scenario in the Views/CustomerDashboard/Notes.cshtml file. It uses simple REST calls to add and retrieve data. The following code retrieves notes from the Notes list for a specified customer.

```C#
function getNotesAndShow() {
    var executor = new SP.RequestExecutor(appWebUrl);
    executor.executeAsync(
       {
           url: appWebUrl + "/_api/web/lists/getByTitle('Notes')/items/" +
                "?$select=FTCAM_Description,Modified,Title,Author/ID,Author/Title" +
                "&amp;$expand=Author/ID,Author/Title" +
                "&amp;$filter=(Title eq '" + customerID + "')",
           type: "GET",
           dataType: 'json',
           headers: { "accept": "application/json;odata=verbose" },
           success: function (data) {
               var value = JSON.parse(data.body);
               showNotes(value.d.results);
           },
           error: function (error) { console.log(JSON.stringify(error)) }
       }

    );
}
```

The following code adds a note for a given customer to the notes list.

```C#
function addNoteToList(note, customerID) {
    var executor = new SP.RequestExecutor(appWebUrl);
    var bodyProps = {
        '__metadata': { 'type': 'SP.Data.NotesListItem' },
        'Title': customerID,
        'FTCAM_Description': note
    };
    executor.executeAsync({
        url: appWebUrl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('Notes')/items?@target='" + appWebUrl + "'",
        contentType: "application/json;odata=verbose",
        method: "POST",
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        body: JSON.stringify(bodyProps),
        success: getNotesAndShow,
        error: addNoteFailed
    });
}
```

You can add 5000 items to the list to show that list queries that generate a result set of 5000 or more items will hit the list query threshold and fail. You can also add so much data to your list on the app web that you exceed the storage limit for your site collection (which depends on how much storage space you've allocated to it). These scenarios show two of the most important limitations of this approach: list query size limits and storage space limits. If your business needs require you to work with large data sets and query result sets, this approach won't work.

### List query threshold
<a name="bk_listquerythreshold"> </a>

To load enough data to exceed the list query threshold limit:


1. In the left menu, choose  **Sample Home Page**.
    
2. In the  **List Query Thresholds** section, choose **Add list items to the Notes list in the App Web**.
    
3. Per the instructions that appear above the button, perform this operation 10 times.
    
    When the Notes list is updated, a message appears at the top of the page that indicates how many list items (Notes) you added and how many are left to add.
    
    > [!NOTE] 
    > The operation takes about one minute to run each time you choose the button. The end result of running the operation 10 times is shown in Figure 6.

4. After you've added 5,001 items to the list, choose Notes in the left menu. When the page loads, you will see the error message shown in Figure 6, which comes from the SharePoint REST API.
    
    **Figure 6. List query thresold exceeded error message**

    ![A screenshot that shows an error message that states that the operation exceeded the list view threshol.](media/90202b64-4b14-4764-9a4c-8fb236f8d10b.png)

5. Choose  **View Notes List in App Web** and page through the list to see that it includes 500 rows. Note that although SharePoint list views can accommodate browsing of this many entries, the REST API fails due to the list query throttling threshold.
    
### Data storage limit
<a name="bk_listquerythreshold"> </a>

To load enough data to exceed the data storage limit:

1. In the left menu, choose  **Sample Home Page**.
    
2. In the Data Threshold section, choose  **Fill the App Web Notes list with 1GB of data**.
    
3. Per the instructions that appear above the  **Fill the App Web Notes list with 1GB of data** button, perform this operation 11 times.
    
    When the Notes list is updated, a message appears at the top of the page that indicates how many list items (Notes) you added and how many are left to add.
    
    > [!NOTE] 
    > The operation takes about one minute to run each time you choose the button. The end result of running the operation 11 times is shown in Figure 7.
    
4. After you perform the operation 11 times, an error message will occur when you choose the button, as shown in Figure 7.
    
    **Figure 7. Data storage threshold exceeded error message**

    ![A screenshot that shows the error message that occurs when the data storage limit is exceeded](media/0bc55483-0ee1-487a-ba34-e827ec47aadd.png)

5. After you exceed the data storage limit, choose the back button in the web browser, and then choose the  **Notes** link in the left menu.
    
6. Choose  **View Notes List in App Web**.
    
    When the page loads, an error message appears at the top of the page that indicates that the site is out of storage space.

## SharePoint list on the host web (Support Cases scenario)
<a name="sectionSection2"> </a>

The Support Cases scenario displays data that is stored in a SharePoint list in the host web. This scenario uses two different patterns to access and interact with the data. The first pattern includes the SharePoint Search Service and the Content By Search Web Part with a custom Display Template applied. The second pattern includes an App Part (Client Web Part) that displays an MVC view, which uses the  **SP.RequestExecutor** class to call the SharePoint REST API.

There are several advantages to using this approach:

- You can query data easily using simple REST queries or client object model code.
    
- You can search for data in SharePoint.
    
- You can update the list metadata and create new views for a list without updating and redeploying the app. These changes won't affect the behavior of your app.
    
- Lists on the host web are not deleted when you uninstall your app, unless the app uses the  **AppUninstalled** event to remove the list and/or delete the data.
    
Offsetting these advantages are the following disadvantages:

- The host web limits both the amount of data you can store in lists and the size of the query results. If your business needs require storing and/or querying large data sets, this is not a recommended approach.
    
- For complex queries, lists do not perform as well as databases.
    
- For backing up and restoring data, lists do not perform as well as databases.
    
The data for this scenario is stored in a SharePoint list deployed to the host web. Data is retrieved and displayed by means of the following: 

- A  [Content Search Web Part](https://msdn.microsoft.com/en-us/library/office/jj163789%28v=office.15%29.aspx).
    
- An app part that's implemented as a model-view-controller view. 
    
The code in this view uses REST queries to retrieve information from the list, while the content search web part uses the SharePoint search service to retrieve the data. The two approaches demonstrate the significant advantage of this option: you can use both the search service and the REST/CSOM APIs to retrieve information from a list on the host web.

When you select a customer from the support cases drop-down, you'll see the support case data for that customer displayed in both the web part and the app part (Figure 8). The web part might not return content right away, because it can take up to 24 hours for the SharePoint search service to index the data. You can also choose the  **View Support Cases List in Host Web** link to see a conventional view of the list data.

**Figure 8. User interface for the support case scenario**

![A screenshot that shows the UI for interacting with the support case scenario](media/eac41f5c-90b7-4fe3-b47e-0d65b79cbf1c.png)

The content search web part deployed by this app uses a custom display template. Figure 9 shows where in the  **Assets** directory of the web project you can find the web part and the associated template.

**Figure 9. Contents of the Assets directory of the web project**

![Screenshot of the Assets directory](media/95db9118-9e56-4e39-84b1-271e54447792.png)

The following JavaScript code that you'll find in the Views/SupportCaseAppPart\Index.cshtml file uses the cross-domain library to invoke a REST query on the SharePoint list on the host web. 

```C#
function execCrossDomainRequest() {
var executor = new SP.RequestExecutor(appWebUrl);

executor.executeAsync(
   {
        url: appWebUrl + "/_api/SP.AppContextSite(@@target)" +
                "/web/lists/getbytitle('Support Cases')/items" +
              "?$filter=(FTCAM_CustomerID eq '" + customerID + "')" +
            "&amp;$top=30" +
                    "&amp;$select=Id,Title,FTCAM_Status,FTCAM_CSR" +
                    "&amp;@@target='" + hostWebUrl + "'",
method: "GET",
              headers: { "Accept": "application/json; odata=verbose" },
              success: successHandler,
              error: errorHandler
   }
);
}
```

You can add 5000 items to the list to show that list queries that generate a result set of 5000 or more items will hit the list query threshold and fail. This scenario shows one of the most important limitations of this approach: list query size limits. If your business needs require you to work with large data and query result sets, this approach won't work. For more information, see  [List query threshold](#bk_listquerythreshold) earlier in this article.

## Northwind OData web service (Customer Dashboard scenario)
<a name="sectionSection3"> </a>

The Customer Dashboard scenario uses JQuery AJAX to invoke the NorthWind OData service to return customer information. The app stores its data in a web service, then uses  [OData](http://www.odata.org/) to retrieve it.

The following are the advantages to using this approach:

- A given web service can support multiple add-ins.
    
- You can update your web service without having to update and redeploy your app.
    
- Your SharePoint and web service installations do not affect one another.
    
- Hosting services such as Microsoft Azure enable you to scale your web services.
    
- You can back up and restore information on your web services separately from your SharePoint site.
    
- You don't lose data when uninstalling your app, unless the app uses the  **AppUninstalled** event to delete the data.
    
The customer dashboard scenario stores its data in a web service that implements the OData standard to retrieve data. In the customer dashboard interface, you select a customer from a drop-down menu, and customer information displays in the  **Customer Info** pane.

This UI page is a Model-View-Controller view. The display is defined in the Views/CustomerDashboard\Home.cshtml file. The underlying code is in the Scripts/CustomerDashboard.js file. The JavaScript code uses AJAX to query the Northwind web service. Because this is an OData service, the web service query consists of query string arguments attached to a URL that points to a web service endpoint. The service returns customer information in JSON format.

The following code runs when you choose the  **Customer Dashboard** link. It retrieves all the customer names and IDs in order to populate the drop-down menu.

```C#
var getCustomerIDsUrl = "https://odatasampleservices.azurewebsites.net/V3/Northwind/Northwind.svc/Customers?$format=json&amp;$select=CustomerID";
    $.get(getCustomerIDsUrl).done(getCustomerIDsDone)
        .error(function (jqXHR, textStatus, errorThrown) {
            $('#topErrorMessage').text('Can\'t get customers. An error occurred: ' + jqXHR.statusText);
        });
```

The following code runs when you select a customer name from the drop-down menu. It uses the OData  **$filter** argument to specify the customer ID and other query string arguments to retrieve information related to this customer.

```C#
var url = "https://odatasampleservices.azurewebsites.net/V3/Northwind/Northwind.svc/Customers?$format=json" +  "&amp;$select=CustomerID,CompanyName,ContactName,ContactTitle,Address,City,Country,Phone,Fax" + "&amp;$filter=CustomerID eq '" + customerID + "'";

$.get(url).done(getCustomersDone)
   .error(function (jqXHR, textStatus, errorThrown) {
          alert('Can\'t get customer ' + customerID + '. An error occurred: ' + 
                 jqXHR.statusText);
});
```

## Azure table storage (Customer Service Survey scenario)
<a name="sectionSection4"> </a>

The Customer Service Survey scenario allows a customer service representative to see their rating based on customer surveys and uses Azure table storage and the Microsoft.WindowsAzure.Storage.Table.CloudTable API to store and interact with the data.

The following are the advantages to using this approach:

- Azure storage tables support more than one app.
    
- You can update Azure storage tables without having to update and redeploy your app.
    
- Your SharePoint installation and Azure storage tables have no effect on each other's performance.
    
- Azure storage tables scale easily.
    
- You can back up and restore your Azure storage tables separately from your SharePoint site.
    
- You don't lose data when you uninstall your app, unless the app uses the  **AppUninstalled** event to delete the data.
    
The app's interface displays the current user's survey rating in the center page. If that Azure storage table is empty, the app will add some information to the table before it displays it.

The following code from the CSRInfoController.cs defines the  **Home** method that retrieves the user's **nameId**.

```C#
[SharePointContextFilter]
public ActionResult Home()
{
    var context = 
        SharePointContextProvider.Current.GetSharePointContext(HttpContext);
    var sharePointService = new SharePointService(context);
    var currentUser = sharePointService.GetCurrentUser();
    ViewBag.UserName = currentUser.Title;

    var surveyRatingsService = new SurveyRatingsService();
    ViewBag.Score = surveyRatingsService.GetUserScore(currentUser.UserId.NameId);

    return View();
}
```

The following code from the SurveyRatingService.cs file defines the  **SurveyRatingsService** constructor, which sets up the connection to the Azure storage account.

```C#
public SurveyRatingsService(string storageConnectionStringConfigName = 
        "StorageConnectionString")
{
    var connectionString = Util.GetConfigSetting("StorageConnectionString");
    var storageAccount = CloudStorageAccount.Parse(connectionString);

    this.tableClient = storageAccount.CreateCloudTableClient();
    this.surveyRatingsTable = this.tableClient.GetTableReference("SurveyRatings");
    this.surveyRatingsTable.CreateIfNotExists();
}
```

The following code from the same file defines the  **GetUserScore** method, which retrieves the user's survey score from the Azure storage table.

```C#
public float GetUserScore(string userName)
{
    var query = new TableQuery<Models.Customer>()
    .Select(new List<string> { "Score" })
    .Where(TableQuery.GenerateFilterCondition("Name", 
    QueryComparisons.Equal, userName));

    var items = surveyRatingsTable
         .ExecuteQuery(query)
             .ToArray();

    if (items.Length == 0)           
    return AddSurveyRatings(userName);

    return (float)items.Average(c => c.Score);
}
```

If the table doesn't contain any survey data related to the current user, the  **AddSurveyRating** method randomly assigns a score for the user.

```C#
private float AddSurveyRatings(string userName)
{
    float sum = 0;
    int count = 4;
    var random = new Random();

    for (int i = 0; i < count; i++)
    {
    var score = random.Next(80, 100);
    var customer = new Models.Customer(Guid.NewGuid(), userName, score);

    var insertOperation = TableOperation.Insert(customer);
    surveyRatingsTable.Execute(insertOperation);

    sum += score;
    }
    return sum / count;
}
```

## Azure queue storage (Customer Call Queue scenario)
<a name="sectionSection5"> </a>

The Customer Call Queue scenario lists callers in the support queue and simulates taking calls. The scenario uses Azure storage queues to store data and the  **Microsoft.WindowsAzure.Storage.Queue.CloudQueue** API with Model-View-Controller.

The following are the advantages to using this approach:

- Azure storage queues support more than one app.
    
- You can update Azure storage queues without having to update and redeploy your app.
    
- Your SharePoint installation and Azure storage queues have no effect on each other's performance.
    
- Azure storage queues scale easily.
    
- You can back up and restore your Azure storage queues separately from your SharePoint site.
    
- You don't lose data when you uninstall your app, unless the app uses the  **AppUninstalled** event to delete the data.
    
The app's interface displays a support call queue in the center pane when you choose the  **Call Queue** link. You can simulate receiving calls (adding a call to the queue) by choosing **Simulate Calls**, and you can simulate taking the oldest call (removing a call from the queue) by choosing the  **Take Call** action associated with a given call.

This page is a Model-View-Controller view that is defined in the Views\CallQueue\Home.cshmtl file. The Controllers\CallQueueController.cs file defines the  **CallQueueController** class, which contains methods for retrieving all calls in the queue, adding a call to the queue (simulating a call), and removing a call from the queue (taking a call). Each of these methods calls methods defined in the Services\CallQueueService.cs file, which uses the Azure storage queue API to retrieve the underlying information in the storage queue.

```C#
public class CallQueueController : Controller
{
    public CallQueueService CallQueueService { get; private set; }

    public CallQueueController()
    {
        CallQueueService = new CallQueueService();
    }

    // GET: CallQueue
    public ActionResult Home(UInt16 displayCount = 10)
    {
        var calls = CallQueueService.PeekCalls(displayCount);
        ViewBag.DisplayCount = displayCount;
        ViewBag.TotalCallCount = CallQueueService.GetCallCount();
        return View(calls);
    }

    [HttpPost]
    public ActionResult SimulateCalls(string spHostUrl)
    {
        int count = CallQueueService.SimulateCalls();
        TempData["Message"] = string.Format("Successfully simulated {0} calls and added them to the call queue.", count);
        return RedirectToAction("Index", new { SPHostUrl = spHostUrl });
    }

    [HttpPost]
    public ActionResult TakeCall(string spHostUrl)
    {
        CallQueueService.DequeueCall();
        TempData["Message"] = "Call taken successfully and removed from the call queue!";
        return RedirectToAction("Index", new { SPHostUrl = spHostUrl });
    }
}
```

The CallQueueService.cs file defines the  **CallQueueService** class, which establishes the connection to the Azure storage queue. That class also contains the methods for adding, removing (dequeuing), and retrieving the calls from the queue.

```C#
public class CallQueueService
{
    private CloudQueueClient queueClient;

    private CloudQueue queue;

    public CallQueueService(string storageConnectionStringConfigName = "StorageConnectionString")
    {
        var connectionString = CloudConfigurationManager.GetSetting(storageConnectionStringConfigName);
        var storageAccount = CloudStorageAccount.Parse(connectionString);

        this.queueClient = storageAccount.CreateCloudQueueClient();
        this.queue = queueClient.GetQueueReference("calls");
        this.queue.CreateIfNotExists();
        }

        public int? GetCallCount()
        {
        queue.FetchAttributes();
        return queue.ApproximateMessageCount;
    }

    public IEnumerable<Call> PeekCalls(UInt16 count)
    {
        var messages = queue.PeekMessages(count);

        var serializer = new JavaScriptSerializer();
        foreach (var message in messages)
        {
        Call call = null;
        try
        {
        call = serializer.Deserialize<Call>(message.AsString);
        }
        catch { }

        if (call != null) yield return call;
        }
    }

    public void AddCall(Call call)
    {
        var serializer = new JavaScriptSerializer();
        var content = serializer.Serialize(call);
        var message = new CloudQueueMessage(content);
        queue.AddMessage(message);
    }

    public void DequeueCall()
    {
        var message = queue.GetMessage();
        queue.DeleteMessage(message);
    }

    public int SimulateCalls()
    {
        Random random = new Random();
        int count = random.Next(1, 6);
        for (int i = 0; i < count; i++)
        {
        int phoneNumber = random.Next();
        var call = new Call
        {
        ReceivedDate = DateTime.Now,
        PhoneNumber = phoneNumber.ToString("+1-000-000-0000")
        };
        AddCall(call);

        return count;
    }
}
```

## SQL Azure database (Recent Orders scenario)
<a name="sectionSection6"> </a>

The Recent Orders scenario uses a direct call to the Northwind SQL Azure database to return all the orders for a given customer.

The following are the advantages to using this approach:

- A database can support more than one app.
    
- You can update your database schema without having to update and redeploy your app, as long as the schema changes don't affect the queries in your app.
    
- A relational database can support many-to-many relationships and thus support more complex business scenarios.
    
- You can use database design tools to optimize the design of your database.
    
- Relational databases provide better performance than the other options when you need to execute complex operations in your queries, such as calculations and joins.
    
- A SQL Azure database allows you to import and export data easily, so it's easier to manage and move your data.
    
- You don't lose any data when you uninstall your app, unless the app uses the  **AppUninstalled** event to delete the data.
    
The recent orders interface works much like the customer dashboard interface. You choose on the  **Recent Orders** link in the left column, and then choose a customer from the drop-down menu at the top of the center pane. A list of orders from that customer will appear in the center pane.

This page is a Model-View-Controller view defined in the Views\CustomerDashboard\Orders.cshtml file. Code in the Controllers\CustomerDashboardController.cs file uses the  [Entity Framework ](https://msdn.microsoft.com/en-us/data/ef.aspx) to query the **Orders** table in your SQL Azure database. The customer ID is passed by using a query string parameter in the URL that is passed when the user selects a customer from the drop-down menu. The query creates a join on the **Customer**,  **Employee**, and  **Shipper** tables. The query result is then passed to the Model-View-Controller view that displays the results.

The following code from the CustomerDashboardController.cs file performs the database query and returns the data to the view.

```C#
public ActionResult Orders(string customerId)
{            
    Order[] orders;
    using (var db = new NorthWindEntities())
    {
            orders = db.Orders
                  .Include(o => o.Customer)
                  .Include(o => o.Employee)
                  .Include(o => o.Shipper)
                  .Where(c => c.CustomerID == customerId)
                  .ToArray();
    }

    ViewBag.SharePointContext = 
        SharePointContextProvider.Current.GetSharePointContext(HttpContext);

    return View(orders);
}
```

## Additional resources
<a name="bk_addresources"> </a>

-  [Composite business add-ins for SharePoint 2013 and SharePoint Online](Composite-buisness-apps-for-SharePoint.md)
    
-  [Office 365 Development Patterns and Practices on GitHub](https://github.com/SharePoint/PnP)
