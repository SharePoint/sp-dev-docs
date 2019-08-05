---
title: Create remote timer jobs in SharePoint
description: Create remote timer jobs to manage SharePoint by monitoring and taking action on SharePoint data.
ms.date: 5/9/2018
localization_priority: Priority
---

# Create remote timer jobs in SharePoint

Create remote timer jobs to manage SharePoint by monitoring and taking action on SharePoint data. Remote timer jobs do not run on your SharePoint server. Instead, remote timer jobs are scheduled tasks that run on another server. 

Examples of how timer jobs are used include:

- Performing governance tasks, such as displaying a message on the site when certain criteria are not met, or enforcing retention policies. 
- Running scheduled processes that are processor-intensive.

## Before you begin

To get started, download the [Core.TimerJobs.Samples](https://github.com/SharePoint/PnP/tree/dev/Solutions/Core.TimerJobs.Samples) sample add-in from the Office 365 Developer Patterns and Practices project on GitHub.

> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

To start using the Core.TimerJobs.Samples solution, you need to select a startup project, for example the SimpleJob project, by opening the shortcut menu for (right-clicking) **Core.TimerJobs.Samples.SimpleJob**, and then choosing **Set as StartUp Project**.

> [!NOTE] 
> When you create a new project in Visual Studio, to start building your new remote timer job, add the OfficeDevPnP.Core NuGet package to your project. In Visual Studio, choose **TOOLS** > **NuGet Package Manager** > **Manage NuGet Packages for Solution**.

### Schedule your remote timer job

A timer job can be scheduled to run once or can be a recurring job. To schedule your remote timer job in your production environment, you need to compile your code into an .exe file, and then run the .exe file by using Windows Task Scheduler or a Microsoft Azure WebJob. For more information, see [Timer job deployment options](timerjob-framework.md#timer-job-deployment-options).

## Using the Core.TimerJobs.Samples.SimpleJob add-in

In **Core.TimerJobs.Samples.SimpleJob**, **Main** in Program.cs performs the following steps:

1. Creates a **SimpleJob** object, which inherits from the [OfficeDevPnP.Core.Framework.TimerJobs.TimerJob](https://github.com/SharePoint/PnP-Sites-Core/blob/master/Core/OfficeDevPnP.Core/Framework/TimerJobs/TimerJob.cs) base class.
    
2. Sets the Office 365 user credentials to use when running the timer job by using **TimerJob.UseOffice365Authentication**. The user credentials must have appropriate access to the site collections. You can learn more at [Authentication](timerjob-framework.md#authentication).
    
3. Adds sites that the timer job should perform tasks on by using **TimerJob.AddSite**. Optionally, you can repeat the **TimerJob.AddSite** statement to add more than one site, or add all sites under a particular URL by using the wildcard character `*`. For example, `http://contoso.sharepoint.com/sites/*` runs the timer job on all sites under the **sites** managed path.
    
4. Prints timer job information and runs the timer job by using **PrintJobSettingsAndRunJob**.

   ```csharp
    static void Main(string[] args)
            {
                SimpleJob simpleJob = new SimpleJob();
                
                // The user credentials must have access to the site collections you supply.
                simpleJob.UseOffice365Authentication(User, Password);

                // Use the following code if you are using SharePoint Server on-premises. 
                //simpleJob.UseNetworkCredentialsAuthentication(User, Password, Domain);
                
                // Add one or more sites that the timer job should work with.
                simpleJob.AddSite("https://contoso.sharepoint.com/sites/dev");
                
                // Prints timer job information and then calls Run().
                PrintJobSettingsAndRunJob(simpleJob);
            }
   ```

<br/>

When the **SimpleJob** object is instantiated, the **SimpleJob** constructor:

1. Calls the **TimerJob** base class constructor. 
    
2. Assigns the **SimpleJob\_TimerJobRun** event handler to handle the **TimerJobRun** events. **SimpleJob\_TimerJobRun** runs when a call is made to **TimerJob.Run**, which is described in more detail later in this article.

   ```csharp
    public SimpleJob() : base("SimpleJob")
            {
                TimerJobRun += SimpleJob_TimerJobRun;
            }
   ```

<br/>

When **PrintJobSettingsAndRunJob** runs, output from the **TimerJob** is written to the console window, and then **TimerJob.Run** is called.

```csharp
 private static void PrintJobSettingsAndRunJob(TimerJob job)
        {
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine("************************************************");
            Console.WriteLine("Job name: {0}", job.Name);
            Console.WriteLine("Job version: {0}", job.Version);
            Console.WriteLine("Use threading: {0}", job.UseThreading);
            Console.WriteLine("Maximum threads: {0}", job.MaximumThreads);
            Console.WriteLine("Expand sub sites: {0}", job.ExpandSubSites);
            Console.WriteLine("Authentication type: {0}", job.AuthenticationType);
            Console.WriteLine("Manage state: {0}", job.ManageState);
            Console.WriteLine("SharePoint version: {0}", job.SharePointVersion);
            Console.WriteLine("************************************************");
            Console.ForegroundColor = ConsoleColor.Gray;

            // Run job.
            job.Run();
        }
```

<br/>

**TimerJob.Run** raises **TimerJobRun** events. **TimerJob.Run** calls **SimpleJob\_TimerJobRun** in SimpleJob.cs, which you set as the event handler to handle **TimerJobRun** events in the constructor of **SimpleJob**. 

In **SimpleJob\_TimerJobRun**, you can add your custom code that you want your timer job to perform when the timer job runs. **SimpleJob\_TimerJobRun** runs your custom code on the sites you added by using **TimerJob.AddSite** in Program.cs. 

In this code sample, **SimpleJob\_TimerJobRun** uses the **ClientContext** from the **TimerJob** to write the title of the site to the console window. If multiple sites were added by using **TimerJob.AddSite**, **SimpleJob\_TimerJobRun** is called for each site.

```csharp
 void SimpleJob_TimerJobRun(object sender, TimerJobRunEventArgs e)
        {
            e.WebClientContext.Load(e.WebClientContext.Web, p => p.Title);
            e.WebClientContext.ExecuteQueryRetry();
            Console.WriteLine("Site {0} has title {1}", e.Url, e.WebClientContext.Web.Title);
        }
```

## Example: Content type retention enforcement timer job

The **Core.TimerJobs.Samples.ContentTypeRetentionEnforcementJob** project shows how you can use SharePoint timer jobs to enforce retention policies on content types. By using the **ContentTypeRetentionPolicyPeriod** element in app.config, specify:

- **key**, which is the content type ID of the content type that the retention period applies to.
- **value**, which is the retention period in days. The retention period is applied to all list items created by using the content type specified in **key**.

```XML
<ContentTypeRetentionPolicyPeriod>
    <!-- Key is the content type ID, and value is the retention period in days -->
    <!-- Specifies an audio content type should be kept for 183 days -->
    <add key="0x0101009148F5A04DDD49cbA7127AADA5FB792B006973ACD696DC4858A76371B2FB2F439A" value="183" />
    <!-- Specifies a document content type should be kept for 365 days -->   
    <add key="0x0101" value="365" />
</ContentTypeRetentionPolicyPeriod>
```

<br/>

**ContentTypeRetentionEnforcementJob\_TimerJobRun** is set as the event handler for the **TimerJobRun** event. When **TimerJob.Run** is called in Program.cs, **ContentTypeRetentionEnforcementJob\_TimerJobRun** performs the following steps on each site that was added by using **TimerJob.AddSite** in Program.cs:

1. Gets all document libraries on the site.
2. For each document library on the site, reads the configuration information specified in **ContentTypeRetentionPolicyPeriod** in app.config. For each content type ID and retention period pair that was read from app.config, **ApplyRetentionPolicy** is called.

```csharp
 void ContentTypeRetentionEnforcementJob_TimerJobRun(object sender, TimerJobRunEventArgs e)
        {
            try
            {
                Log.Info("ContentTypeRetentionEnforcementJob", "Scanning web {0}", e.Url);

                // Get all document libraries. Lists are excluded.
                var documentLibraries = GetAllDocumentLibrariesInWeb(e.WebClientContext, e.WebClientContext.Web);

                // Iterate through all document libraries.
                foreach (var documentLibrary in documentLibraries)
                {
                    Log.Info("ContentTypeRetentionEnforcementJob", "Scanning library {0}", documentLibrary.Title);

                    // Iterate through configured content type retention policies specified in app.config.
                    foreach (var contentTypeName in configContentTypeRetentionPolicyPeriods.Keys)
                    {
                        var retentionPeriods = configContentTypeRetentionPolicyPeriods.GetValues(contentTypeName as string);
                        if (retentionPeriods != null)
                        {
                            var retentionPeriod = int.Parse(retentionPeriods[0]);
                            ApplyRetentionPolicy(e.WebClientContext, documentLibrary, contentTypeName, retentionPeriod);
                        }
                    }
                }
            }
            catch(Exception ex)
            {
                Log.Error("ContentTypeRetentionEnforcementJob", "Exception processing site {0}. Exception is {1}", e.Url, ex.Message);
            }
        }
```

<br/>

**ApplyRetentionPolicy** enforces your custom retention policy actions by:

1. Calculating **validationDate**. The **ApplyRetentionPolicy** method enforces retention policy actions on documents modified before **validationDate**. **validationDate** is then formatted as a CAML date and is assigned to **camlDate**.
    
2. Running a CAML query to filter documents in the document library based on the content type ID, which was specified in app.config, and where the **Modified By** date is less than **camlDate**.
    
3. For each list item, applying custom retention actions to perform on the documents by using custom code.

```csharp
private void ApplyRetentionPolicy(ClientContext clientContext, List documentLibrary, object contentTypeId, int retentionPeriodDays)
        {
            // Calculate validation date. You need to enforce the retention policy on any document modified before validation date.
            var validationDate = DateTime.Now.AddDays(-retentionPeriodDays);
            var camlDate = validationDate.ToString("yyyy-MM-ddTHH:mm:ssZ");

            // Get old documents in the library that match the content type.
            if (documentLibrary.ItemCount > 0)
            {
                var camlQuery = new CamlQuery();
                
                camlQuery.ViewXml = String.Format(
                    @"<View>
                        <Query>
                            <Where><And>
                                <BeginsWith><FieldRef Name='ContentTypeId'/><Value Type='ContentTypeId'>{0}</Value></BeginsWith>
                                <Lt><FieldRef Name='Modified' /><Value Type='DateTime'>{1}</Value></Lt>
                            </And></Where>
                        </Query>
                    </View>", contentTypeId, camlDate);

                var listItems = documentLibrary.GetItems(camlQuery);
                clientContext.Load(listItems,
                    items => items.Include(
                        item => item.Id,
                        item => item.DisplayName,
                        item => item.ContentType));

                clientContext.ExecuteQueryRetry(); 

                foreach (var listItem in listItems)
                {
                    Log.Info("ContentTypeRetentionEnforcementJob", "Document '{0}' has been modified earlier than {1}. Retention policy will be applied.", listItem.DisplayName, validationDate);
                    Console.WriteLine("Document '{0}' has been modified earlier than {1}. Retention policy will be applied.", listItem.DisplayName, validationDate);
                    
                    // Apply your custom retention actions here. For example, archiving documents, or starting a disposition workflow.
                }
            }
        }
```

## Example: Governance timer job

The **Core.TimerJobs.Samples.GovernanceJob** project uses timer jobs to ensure that two administrators are assigned to your site collections, and if not, displays a notification message on the site.

**SiteGovernanceJob\_TimerJobRun** is set as the event handler for the **TimerJobRun** event. When **TimerJob.Run** is called in Program.cs, **SiteGovernanceJob\_TimerJobRun** performs the following steps on each site collection that was added by using **TimerJob.AddSite** in Program.cs:

1. Gets the number of administrators assigned to the site collection by using the extension method [GetAdministrators](https://github.com/SharePoint/PnP-Sites-Core/blob/master/Core/OfficeDevPnP.Core/Extensions/SecurityExtensions.cs) which is part of [OfficeDevPnP.Core](https://github.com/SharePoint/PnP-Sites-Core/tree/master/Core/OfficeDevPnP.Core).
    
2. Uploads the JavaScript file to the SiteAssets or Style Library list by using [UploadFile](https://github.com/SharePoint/PnP-Sites-Core/blob/master/Core/OfficeDevPnP.Core/Extensions/FileFolderExtensions.cs), which is part of [OfficeDevPnP.Core](https://github.com/SharePoint/PnP-Sites-Core/tree/master/Core/OfficeDevPnP.Core). 
    
3. If the site has fewer than two administrators, [AddJSLink](https://github.com/SharePoint/PnP-Sites-Core/blob/master/Core/OfficeDevPnP.Core/Extensions/JavaScriptExtensions.cs) adds a notification message to a site by using JavaScript. You can learn more at [Customize your SharePoint site UI by using JavaScript](customize-your-sharepoint-site-ui-by-using-javascript.md).
    
4. If the site has two or more administrators, the notification message is removed by using [DeleteJsLink](https://github.com/SharePoint/PnP-Sites-Core/blob/master/Core/OfficeDevPnP.Core/Extensions/JavaScriptExtensions.cs).


```csharp
void SiteGovernanceJob_TimerJobRun(object o, TimerJobRunEventArgs e)
        {
            try
            {
                string library = "";

                // Get the number of administrators.
                var admins = e.WebClientContext.Web.GetAdministrators();

                Log.Info("SiteGovernanceJob", "ThreadID = {2} | Site {0} has {1} administrators.", e.Url, admins.Count, Thread.CurrentThread.ManagedThreadId);

                // Get a reference to the list.
                library = "SiteAssets";
                List list = e.WebClientContext.Web.GetListByUrl(library);

                if (!e.GetProperty("ScriptFileVersion").Equals("1.0", StringComparison.InvariantCultureIgnoreCase))
                {
                    if (list == null)
                    {
                        // Get a reference to the list.
                        library = "Style%20Library";
                        list = e.WebClientContext.Web.GetListByUrl(library);
                    }

                    if (list != null)
                    {
                        // Upload js file to list.
                        list.RootFolder.UploadFile("sitegovernance.js", "sitegovernance.js", true);

                        e.SetProperty("ScriptFileVersion", "1.0");
                    }
                }

                if (admins.Count < 2)
                {
                    // Show notification message because you need at least two site collection administrators.
                    e.WebClientContext.Site.AddJsLink(SiteGovernanceJobKey, BuildJavaScriptUrl(e.Url, library));
                    Console.WriteLine("Site {0} marked as incompliant!", e.Url);
                    e.SetProperty("SiteCompliant", "false");
                }
                else
                {
                    // Remove the notification message because two administrators are assigned.
                    e.WebClientContext.Site.DeleteJsLink(SiteGovernanceJobKey);
                    Console.WriteLine("Site {0} is compliant", e.Url);
                    e.SetProperty("SiteCompliant", "true");
                }

                e.CurrentRunSuccessful = true;
                e.DeleteProperty("LastError");
            }
            catch(Exception ex)
            {
                Log.Error("SiteGovernanceJob", "Error while processing site {0}. Error = {1}", e.Url, ex.Message);
                e.CurrentRunSuccessful = false;
                e.SetProperty("LastError", ex.Message);
            }
        }
```

## See also

- [PnP remote timer job framework](pnp-remote-timer-job-framework.md)
