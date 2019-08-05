---
title: Query SharePoint change log with ChangeQuery and ChangeToken
ms.date: 11/03/2017
localization_priority: Priority
---
# Query SharePoint change log with ChangeQuery and ChangeToken

Use  **ChangeQuery** and **ChangeToken** to query the SharePoint change log for changes made to a SharePoint content database, site collection, site, or list.

_**Applies to:** SharePoint 2013 | SharePoint Add-ins | SharePoint Online_

You can query the SharePoint change log by using [ChangeQuery](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.changequery.aspx) and [ChangeToken](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.changetoken.aspx) to find and process changes made on a SharePoint content database, site collection, site, or list.

The [Core.ListItemChangeMonitor](https://github.com/SharePoint/PnP/tree/dev/Samples/Core.ListItemChangeMonitor) code sample shows you how to use SharePoint's change log to find and process changes made on a SharePoint list. Use this code sample to:

- Monitor SharePoint for changes on a list, site, site collection, or content database.
    
- Start a business process after a change is made to an item in a list.
    
- Complement your remote event receiver. Using the change log pattern with a remote event receiver pattern provides a more reliable architecture for handling all changes made to SharePoint content databases, site collections, sites, or lists. Remote event receivers run immediately, but because they run on a remote server, you might encounter a communication failure. The change log pattern ensures that all changes are available for processing, but the application processing the changes usually runs on a schedule (for example, a timer job). This means that changes are not processed immediately. If you use these two patterns together, ensure you use a mechanism to prevent processing the same change twice. For more information, see [Use remote event receivers in SharePoint](Use-remote-event-receivers-in-SharePoint.md).
    
## Before you begin

To get started, download the [Core.ListItemChangeMonitor](https://github.com/SharePoint/PnP/tree/dev/Samples/Core.ListItemChangeMonitor) sample add-in from the [Office 365 Developer patterns and practices](https://github.com/SharePoint/PnP/tree/dev) project on GitHub.

Before you run this code sample, do the following:

1. Sign in to your Office 365 site where you want to create the list.
    
2. Choose  **Site Contents**.
    
3. Choose  **add an add-in**.
    
4. Choose  **Custom List**.
    
5. In  **Name**, enter  **TestList**.
    
6. Choose  **Create**.
    
To see a demo of this code sample, perform the following steps:

1. Choose  **Start** in Visual Studio.
    
2. Enter your Office 365 site's URL, the name of the list (**TestList**), and your Office 365 credentials. The console application now waits for changes to be made to **TestList**. By default, the console application checks the change log and updates the display every 30 seconds.
    
3. Add a new item to  **TestList**:
    
	1. Open your Office 365 site and go to  **Site Contents** > **TestList**.
    
	2. Choose  **new item**.
	
	3. Enter  **MyTitle** in **Title**, and then choose  **Save**.
    
4. Verify that your change appears in the console application. You can force the console application to read SharePoint's change log by entering  **r** in the console application.

## Use the Core.ListItemChangeMonitor add-in

In Program.cs,  **Main** calls **DoWork** to read and process SharePoint's change log:

1. Create a  **ChangeQuery** object to access SharePoint's change log.
    
2. Use the change log to return changes to items by using  **cq.Item = true**. Changes include:
    
	- New items added by using  **cq.Add= true**.
    
	- Deleted items by using  **cq.DeleteObject = true**.
	
	- Modified items by using  **cq.Update=true**.
    
3. Create a  **ChangeToken** object to read changes from the change log from a certain point in time.
    
4. Set [ChangeToken.StringValue](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.changetoken.stringvalue.aspx) with the version number, change scope, GUID of **TestList** , date and time when changes occurred, and the change item value on the ChangeToken (initialize with a value of -1). This code sample limits the amount of changes read from the change log by initializing the date and time when the changes occurred to the previous two days by using **DateTime.Now.AddDays(-2).ToUniversalTime().Ticks.ToString()**.
    
5.  Read the change log either every 30 seconds (which is the default waiting period set by the constant **WaitSeconds**), or when the user enters **r**. When reading the change log, the console application performs the following steps:
    
	1.  Uses [List.GetChanges](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.list.getchanges.aspx) to return the [ChangeCollection](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.changecollection.aspx), which is a collection of changes made to the list since the last time changes were processed.
    
	2. Calls  **DisplayChanges** to display the changes in the **ChangeCollection** object.
	
	3. Sets the new point in time to read changes from the change log. If there are changes to the list (which was returned in  **coll**), set **ChangeTokenStart** to the last change's date and time.

> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

```csharp
private static void DoWork()
        {
            Console.WriteLine();
            Console.WriteLine("Url: " + url);
            Console.WriteLine("User name: " + userName);
            Console.WriteLine("List name: " + listName);
            Console.WriteLine();
            try
            {

                Console.WriteLine(string.Format("Connecting to {0}", url));
                Console.WriteLine();
                ClientContext cc = new ClientContext(url);
                cc.AuthenticationMode = ClientAuthenticationMode.Default;
                cc.Credentials = new SharePointOnlineCredentials(userName, password);

                ListCollection lists = cc.Web.Lists;
                IEnumerable<List> results = cc.LoadQuery<List>(lists.Where(lst => lst.Title == listName));
                cc.ExecuteQuery();
                List list = results.FirstOrDefault();
                if (list == null)
                {

                    Console.WriteLine("A list named \"{0}\" does not exist. Press any key to exit...", listName);
                    Console.ReadKey();
                    return;
                }

                nextRunTime = DateTime.Now;

                ChangeQuery cq = new ChangeQuery(false, false);
                cq.Item = true;
                cq.DeleteObject = true;
                cq.Add = true;
                cq.Update = true;

                // Set the ChangeTokenStart to two days ago to reduce how much data is returned from the change log. Depending on your requirements, you might want to change this value. 
                // The value of the string assigned to ChangeTokenStart.StringValue is semicolon delimited, and takes the following parameters in the order listed:
                // Version number. 
                // The change scope (0 - Content Database, 1 - site collection, 2 - site, 3 - list).
                // GUID of the item the scope applies to (for example, GUID of the list). 
                // Time (in UTC) from when changes occurred.
                // Initialize the change item on the ChangeToken using a default value of -1.

                cq.ChangeTokenStart = new ChangeToken();
                cq.ChangeTokenStart.StringValue = string.Format("1;3;{0};{1};-1", list.Id.ToString(), DateTime.Now.AddDays(-2).ToUniversalTime().Ticks.ToString());

                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine(string.Format("Ctrl+c to exit. Press \"r\" key to force the console application to read the change log without waiting {0} seconds.", WaitSeconds));
                Console.WriteLine();
                Console.ResetColor();
                do
                {
                    do
                    {
                        if (Console.KeyAvailable &amp;&amp; Console.ReadKey(true).KeyChar == 'r') { break; }
                    }
                    while (nextRunTime > DateTime.Now);

                    Console.WriteLine(string.Format("Looking for items modified after {0} UTC", GetDateStringFromChangeToken(cq.ChangeTokenStart)));

                    
                    ChangeCollection coll = list.GetChanges(cq);
                    cc.Load(coll);
                    cc.ExecuteQuery();


                    DisplayChanges(coll, cq.ChangeTokenStart);
                    // If there are changes to the list (which was returned in coll), set ChangeTokenStart to the last change's date and time. This will be used as the starting point for the next read from the change log.                      
                    cq.ChangeTokenStart = coll.Count > 0 ? coll.Last().ChangeToken : cq.ChangeTokenStart;

                    nextRunTime = DateTime.Now.AddSeconds(WaitSeconds);

                } while (true);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine("Press any key to exit...");
                Console.ReadKey();

            }
        }
```

## See also
<a name="bk_addresources"> </a>

- [Office 365 development patterns and practices solution guidance](Office-365-development-patterns-and-practices-solution-guidance.md)
    
- [Use remote event receivers in SharePoint](Use-remote-event-receivers-in-SharePoint.md)
    
- [ChangeQuery members](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.changequery_members.aspx)
    
- [SharePoint Developer Community (SharePoint PnP) resources](../community/community.md)
