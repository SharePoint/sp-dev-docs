---
title: Remote timer jobs in the SharePoint Add-in model
ms.date: 11/03/2017
---
Remote timer jobs in the SharePoint Add-in model
================================================

Summary
-------

The approach you take to implement timer jobs is different in the new SharePoint Add-in model than it was with Full Trust Code.  In a typical Full Trust Code (FTC) / Farm Solution scenario, SharePoint Timer Jobs were created with the SharePoint Server Side Object Model code, deployed via Farm Solutions and managed in the SharePoint Central Administration website. SharePoint handles both the scheduling and the execution of the timer job in this scenario. 

In the SharePoint Add-in model scenario, timer jobs are created and scheduled outside of SharePoint.  SharePoint is not responsible for the scheduling or the execution of the timer job in this scenario.

High-Level Guidelines
---------------------

As a rule of a thumb, we would like to provide the following high-level guidelines for creating timer jobs.

- Timer jobs should be implemented outside of SharePoint.
- Scheduling timer jobs should be implemented outside of SharePoint.
- Timer jobs should authenticate via a service account or OAuth.

Challenges creating timer jobs
------------------------------

The biggest challenge associated with creating timer jobs in Office 365 tenancies is the fact that you cannot deploy farm scoped solutions to an Office 365 tenancy. Without a farm scoped solution, you cannot deploy a SharePoint timer job.

The new way to create a timer job is to build it outside of SharePoint and to handle the scheduling outside of SharePoint as well. Consider the following factors associated with SharePoint timer jobs for an on-premises SharePoint environment.

- SharePoint ships with hundreds of out-of-the-box timer jobs that the SharePoint scheduler struggles to keep up with.  
ok- You can reduce the amount of memory and processor power needed on your SharePoint server by moving the implementation code to Azure or another environment.
- Moving the scheduling and implementation code associated with timer jobs to another server makes your SharePoint server more scalable and stable as a result.

Options to schedule timer jobs
----------------------------

You have a couple of options to implement the scheduling for a timer job.

- Windows Scheduler
	+ Windows Service
- Azure WebJob
	+ Azure worker process

Windows Scheduler
-----------------
In this pattern, the Windows Scheduler handles the scheduling aspects associated with a timer job.  Implementation code can be a console application or a PowerShell script or any other code that the Windows Scheduler can invoke.

**Windows Service Sub Option**
A Windows Service has the same characteristics as the Windows Scheduler. Microsoft does not recommend this pattern but it is worth mentioning because it is commonly used.

**When is Windows Scheduler a good fit?**

When you do not have access to an Azure subscription to schedule timer jobs with Azure WebJobs, Using a Windows Scheduler is a good option because this option may be implemented on any machine with the Windows operating system.

- Requires additional hardware to run the Windows Scheduler.
- Requires additional hardware to run the timer job code.

**Getting Started**

The following articles use the Windows Scheduler pattern and provide code samples to get you started.

- [Core.SimpleTimerJob (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.SimpleTimerJob)
	+ End-to-end article about this pattern with accompanying video.
- [Core.TimerJobs.Samples (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Solutions/Core.TimerJobs.Samples)
	+ Excellent code samples encompassing 10 different examples. *Note: Not all ten code examples are applicable to the Windows Scheduler pattern.*

Azure WebJob
------------
In this pattern, the Azure WebJob handles the scheduling aspects associated with a timer job and includes the implementation code.

- Does not require additional hardware to run the Azure WebJob (scheduling and implementation code).
- Advantageous because it uses the Azure WebJob for scheduling as well as the implementation code, which makes it easy to manage in one location.

**Azure Worker Role Sub Option**
An Azure Worker Role has the same characteristics as an Azure WebJob. Microsoft does not recommend this pattern but it is worth mentioning because it is commonly used.

**When is Azure WebJob a good fit?**

When you have access to an Azure subscription to schedule timer jobs with Azure WebJobs.

**Getting Started**

The following articles describe the Azure WebJob pattern and provide code samples to get you started.

- [Getting Started with azure WebJobs ("timer jobs") for your Office 365 Sites (O365 PnP Article)](https://github.com/SharePoint/PnP-Guidance/blob/master/articles/Getting-Started-with-building-Azure-WebJobs-for-your-Office365-sites.md)
	+ Describes how to build an Azure WebJob to act as a scheduled job for your Office 365 or on-premises SharePoint environment. Includes publishing and monitoring information.
- [Core.SimpleTimerJob (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Solutions/Core.TimerJobs.Samples)
	+ Excellent code samples encompassing 10 different examples. *Note: Not all ten code examples are applicable to the Azure WebJob pattern.*

Authentication Options
----------------------

In order for your timer jobs to interact with SharePoint they must authenticate. Currently, there are two patterns you may use to authenticate timer jobs.

- Use a service account
- Use OAuth

Use a service account
---------------------
In this pattern, you define one or more service accounts used to authenticate timer jobs.

- Service accounts are defined in SharePoint.
	+ In an Office 365 tenancy, depending what functionality your timer jobs have, the service accounts may need an Office 365 license assigned to them.
	+ You can create service accounts on a per timer job basis, or use a single account for all timer jobs.
	+ Create clear and descriptive names for the service accounts so you can easily track the operations they perform.
	
	For example: If your timer job modifies list items, the Modified By column for the list items will display the name of the service account associated with the timer job.

- When authenticating with service accounts, you must retrieve a user name and password for the service account.
	+ The code snippet below illustrates using a user name and password to authenticate.
	+ Take care to store and retrieve the user name and password in a secure fashion.

	```
	using (ClientContext context = new ClientContext("https://tenancy.sharepoint.com"))
	{	
		// Use default authentication mode
		context.AuthenticationMode = ClientAuthenticationMode.Default;	
		// Specify the credentials for the account that will execute the request
		context.Credentials = new SharePointOnlineCredentials("User Name", "Password");
	}
	```

**Getting Started**

The following articles describe how to use a service account authentication pattern and provide code samples to get you started.

- [Building a SharePoint App as a Timer Job (MSDN Blog)](http://blogs.msdn.com/b/kaevans/archive/2014/03/02/building-a-sharepoint-app-as-a-timer-job.aspx)
	+ End-to-end article about this pattern.
- [Core.SimpleTimerJob (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.SimpleTimerJob)
	+ End-to-end article about this pattern with accompanying video.
- [Core.TimerJobs.Samples (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Solutions/Core.TimerJobs.Samples)
	+ Excellent code samples encompassing 10 different examples. *Note: Not all ten code examples are applicable to the service account authentication pattern.*

Use OAuth
-----------
In this pattern, you define an application in SharePoint or Azure Active Directory and use the authentication tokens associated with the application to authenticate.

- When using a SharePoint application to authenticate you create an app principal and assign permissions to it.
	+ In this pattern, timer jobs may be implemented via a Provider-hosted SharePoint Add-in or a console application.
	+ To register an app principal for the Provider-hosted SharePoint Add-in or console application, use the AppRegNew page in SharePoint.
	
	This page is accessed at the following URL  http://<tenancy>/<site>/_layouts/AppRegNew.aspx

	+ To grant permissions to an app principal, use the AppInv page in SharePoint.
	
	This page is accessed at the following URL  http://<tenancy>/<site>/_layouts/AppInv.aspx

- Timer jobs use App Only permissions because they do not have an interactive user associated with them. 
	+ The code snippet below illustrates obtaining an access token and using App Only permissions to authenticate to SharePoint.

	```
	string accessToken = TokenHelper.GetAppOnlyAccessToken(TokenHelper.SharePointPrincipal, siteUri.Authority, realm).AccessToken;
	
	using(var clientContext = TokenHelper.GetClientContextWithAccessToken(siteUri.ToString(),accessToken))
	{
		//Implement timer job code
	}
	```

- When using an Azure Active Directory application to authenticate, you create an Azure Active Directory application in the [Azure portal](https://ms.portal.azure.com) and assign permissions to it.
	+ In this pattern, timer jobs may be implemented via a Provider-hosted SharePoint Add-in or a console application.
	+ In this pattern, you interact with the Active Directory Authentication Library or the Microsoft Graph API to retrieve an access token.
	+ The access token is used to authenticate to SharePoint (and possibly other Office 365 services in an Office 365 tenancy).

**Getting Started**

The following articles describe the OAUth authentication pattern and provide code samples to get you started.

- [Building a SharePoint App as a Timer Job (MSDN Blog)](http://blogs.msdn.com/b/kaevans/archive/2014/03/02/building-a-sharepoint-app-as-a-timer-job.aspx)
	+ End-to-end article about this pattern.
- [Core.TimerJobs.Samples (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Solutions/Core.TimerJobs.Samples)
	+ Excellent code samples encompassing 10 different examples. *Note: Not all ten code examples are applicable to the OAUth authentication pattern.*

Related links
=============
- [Azure WebJob resources (Azure Documentation)](http://azure.microsoft.com/en-us/documentation/articles/websites-webjobs-resources/)
- [Deploy WebJobs using Visual Studio (Azure Documentation)](http://azure.microsoft.com/en-us/documentation/articles/websites-dotnet-deploy-webjobs/)
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================

- [Core.SimpleTimerJob (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.SimpleTimerJob)
- [Core.TimerJobs.Samples (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Solutions/Core.TimerJobs.Samples)
- [Provisioning.Services.SiteManager (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Services.SiteManager)
- [Provisioning.SiteCollectionCreation (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.SiteCollectionCreation)
- Samples and content at https://github.com/SharePoint/PnP

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D) *partly*
- SharePoint 2013 on-premises – *partly*

*Patterns for dedicated and on-premises are identical with SharePoint Add-in model techniques, but there are differences on the possible technologies that can be used.*
