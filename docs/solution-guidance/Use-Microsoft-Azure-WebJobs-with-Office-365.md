---
title: Use Microsoft Azure WebJobs with Office 365
description: Use Azure WebJobs to implement timer jobs that can access SharePoint Online.
ms.date: 5/8/2018
localization_priority: Normal
---

# Use Microsoft Azure WebJobs with Office 365

You can implement timer job functionality by using [Microsoft Azure WebJobs](https://github.com/Azure/azure-webjobs-sdk/wiki) or Windows Task Scheduler to perform tasks in SharePoint Online. A timer job is a repetitive, scheduled, background process that runs in SharePoint to perform certain tasks. 

For example, you may want a timer job to copy data entered in a SharePoint list to a database. In SharePoint Online, you cannot deploy farm solutions, which is how timer jobs were deployed in the past. To implement similar timer job functionality in SharePoint Online, you need to run a console application as an Azure WebJob. The console application accesses SharePoint Online by using the client-side object model (CSOM). 

This article presents the basic concepts involved in deploying console applications as Azure WebJobs to run and access your SharePoint Online sites and content.

> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

## Create and run a console application as an Azure WebJob

To set up your console application to run as an Azure WebJob, you need to:

1. Create an organization account for the Azure WebJob to use to access your SharePoint sites and content.
    
2. Create and set up the console application.
    
3. Add code to the console application.
    
4. Publish your console application as an Azure WebJob.
    
5. Run and verify your Azure WebJob.

## Create an organization account

You need to create an account for the Azure WebJob to use when accessing SharePoint sites and content. For more information, see [Add users individually or in bulk to Office 365 - Admin Help](https://support.office.microsoft.com/en-us/article/add-users-individually-or-in-bulk-to-office-365-admin-help-1970f7d6-03b5-442f-b385-5880b9c256ec?ui=en-US&rs=en-US&ad=US). 

When the Azure WebJob runs, the **Modified By** field stores and displays the value entered in **Display name** of the organization account. Ensure that you choose a display name that your users can easily identify as the account used by the Azure WebJob for accessing SharePoint.

## Create and set up the console application

To create a console application to run as an Azure WebJob, perform the following steps:

1. Create a new console application project. In Visual Studio, choose **New Project** > **Visual C#** > **Console Application** > **OK**.
    
2. After the console application is created, choose **Tools** > **NuGet Package Manager** > **Manage NuGet Packages for Solution** > **Online** > **All**.
	
3. Search for **App for SharePoint Web Toolkit**.
	
4. Choose **Install**, and then choose **OK**.
	
5. Choose **Close**.
	
6. Verify that SharePointContext.cs and TokenHelper.cs were added to the console application project.
    
7. Save your account information in the app.config file by adding the **appSettings** element shown. Change **SPOAccount** and **SPOPassword** to the user name and password of the organization account you created previously.
    
	```XML
	<?xml version="1.0" encoding="utf-8" ?>
	 <configuration>
	  <startup> 
	    <supportedRuntime version="v4.0" sku=".NETFramework,Version=v4.5" />
	  </startup>
	  <appSettings>
	    <add key="SPOAccount" value="admin@contoso.onmicrosoft.com"/>
	    <add key="SPOPassword" value="Contoso"/>
	  </appSettings>
	 </configuration>
	```

	> [!CAUTION] 
	> App.config stores the organization account's username and password in clear text. This method is used for demonstration purposes only, and should not be used in your production deployment of your Azure WebJobs. We recommend encrypting the password, or authenticating using OAuth with access tokens. For more information, see Kirk Evans blog post on  [Building a SharePoint Add-in as a Timer Job](https://blogs.msdn.microsoft.com/kaevans/2014/03/02/building-a-sharepoint-app-as-a-timer-job/).


## Add code to the console application

In Program.cs, add the following code to the console application.

1. Add **using** statements.
    
   ```csharp
	using Microsoft.SharePoint.Client;
	using System.Security;
	using System.Configuration; 
   ```

2. Add the following methods to your class:
    
   - **Main** signs in to your SharePoint site, and then uses the CSOM to perform tasks on your site or content. This code sample uses the CSOM to find a list and output the total number of items that are in the list to the console window. When using Azure WebJobs, you can see the console window output in the WebJob Run Details, which is explained in [Run and verify your Azure WebJob](Use-Microsoft-Azure-WebJobs-with-Office-365.md#runandverify).
    
   - **GetSPOSecureStringPassword** reads your password from app.config.
    
   - **GetSPOAccountName** reads your username from app.config.

```csharp
	static void Main(string[] args)
	    {
	        using (ClientContext context = new ClientContext("https://contoso.sharepoint.com"))
	        {
	            // Use default authentication mode.
	            context.AuthenticationMode = ClientAuthenticationMode.Default;                 
	            context.Credentials = new SharePointOnlineCredentials(GetSPOAccountName(), GetSPOSecureStringPassword());
	
	            // Add your CSOM code to perform tasks on your sites and content.
	
	            try
	            {
	                List objList = context.Web.Lists.GetByTitle("Docs");
	                context.Load(objList);
	                context.ExecuteQuery();
	
	                if (objList != null &amp;&amp; objList.ItemCount > 0)
	                {
	                    Console.WriteLine(objList.Title.ToString() + " has " + objList.ItemCount + " items.");
	                }
	
	            }
	            catch (Exception ex)
	            {
	                Console.WriteLine("ERROR: " + ex.Message);
	                Console.WriteLine("ERROR: " + ex.Source);
	                Console.WriteLine("ERROR: " + ex.StackTrace);
	                Console.WriteLine("ERROR: " + ex.InnerException);
	
	            }
	        }
	            
	    }
	
	private static SecureString GetSPOSecureStringPassword()
	{
	  try
	  {
	      Console.WriteLine("Entered GetSPOSecureStringPassword.");
	      var secureString = new SecureString();
	      foreach (char c in ConfigurationManager.AppSettings["SPOPassword"])
	      {
	          secureString.AppendChar(c);
	      }
	      Console.WriteLine("Constructed the secure password.");
	
	      return secureString;
	  }
	  catch
	  {
	      throw;
	  }
	}
	
	private static string GetSPOAccountName()
	{
	  try
	  {
	      Console.WriteLine("Entered GetSPOAccountName.");
	      return ConfigurationManager.AppSettings["SPOAccount"];
	  }
	  catch
	  {
	      throw;
	  }
	}
	
```

## Publish your console application as an Azure WebJob

When you are finished developing your console application, you need to deploy the console application as an Azure WebJob. To deploy your console application as an Azure WebJob, you can:

- Upload your binaries to an Azure Web App, and create an Azure WebJob by using the [Microsoft Azure portal](https://ms.portal.azure.com). 
	- The binaries for your Visual Studio project can be found in the bin/Debug or bin/Release folders of your Visual Studio project. 
	- To create the Azure Web App and upload the binaries, follow the steps in [Create an ASP.NET Core web app in Azure](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-dotnet). 
	- To create your on-demand, continuous, or scheduled Azure WebJob, see [Run Background tasks with WebJobs in Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/web-sites-create-web-jobs).
    
- Publish your Azure WebJob from Visual Studio. For more information, see [Enable WebJobs deployment without a web project](https://docs.microsoft.com/en-us/azure/app-service/websites-dotnet-deploy-webjobs#convertnolink).

<a name="runandverify"> </a>

## Run and verify your Azure WebJob

After completing all the previous steps, your Azure WebJob should be running and performing tasks in your Office 365 subscription. At times, you may need to perform maintenance or troubleshoot your Azure WebJobs. To verify that your Azure WebJob is running:

- If your Azure WebJob updated a SharePoint item, like a list item, the **Modified By** field displays the organization account that the Azure WebJob used to access SharePoint.
    
- Review the WebJob Details logs for your Azure WebJob. The WebJob Details logs let you review when a job ran, the success or failure of a job run, any output from the WebJob (for example, when Console.WriteLine was called), and other details of the job run. For more information, see the section [View the job history](https://docs.microsoft.com/en-us/azure/app-service/web-sites-create-web-jobs#ViewJobHistory) in Run Background tasks with WebJobs.

## See also

- [Deploying your SharePoint Add-ins](deploying-your-sharepoint-add-ins.md)

