---
title: App-only and elevated privileges in the SharePoint Add-in model
ms.date: 11/03/2017
---
App-only and elevated privileges in the SharePoint Add-in model
===============================================================

Summary
-------

The approach you take to elevate privileges in your code is different in the new SharePoint Add-in model than it was with Full Trust Code. In a typical Full Trust Code (FTC) / Farm Solution scenario, the RunWithElevatedPrivileges API is used with the SharePoint server-side object model code and deployed via Farm Solutions.

In an SharePoint Add-in model scenario, the AllowAppOnlyPolicy permission or a service account is used to allow the current user to execute operations they are not authorize to perform.

High-Level Guidelines
---------------------

As a rule of a thumb, we would like to provide the following high-level guidelines for elevating privileges in code.

- AllowAppOnlyPolicy does not work with 
	+ Search - if target is SharePoint On-Premises. SharePoint Online support for it has been added ([blog post](https://blogs.msdn.microsoft.com/vesku/2016/03/07/using-add-in-only-app-only-permissions-with-search-queries-in-sharepoint-online/))
	+ User Profile CSOM operations, except that the User Profile Bulk Update API can be used with app-only permissions
	+ Updating taxonomy service entries (write) - read works
	
	> [!NOTE] 
	> In these scenarios you need to use a specific service account.

- AllowAppOnlyPolicy is similar to RunWithElevatedPrivileges, but not exactly the same.
	+ AllowAppOnlyPolicy executes code based on the permissions granted to the SharePoint Add-in, not on behalf of another user who has the appropriate permissions to perform an operation.

Here is an example of returning an App Only Policy token and using it to create a context object.

	Uri siteUrl = new Uri(ConfigurationManager.AppSettings["MySiteUrl"]);
	try
    {
    	//Connect to the give site using App Only token
    	string realm = TokenHelper.GetRealmFromTargetUrl(siteUrl);
    	var token = TokenHelper.GetAppOnlyAccessToken(TokenHelper.SharePointPrincipal, siteUrl.Authority, realm).AccessToken;

    	using (var ctx = TokenHelper.GetClientContextWithAccessToken(siteUrl.ToString(), token))
    	{
    		// Perform operations using the app only token access. 
    	}
    }
    catch (Exception ex)
    {
    	Console.WriteLine("Error in execution: " + ex.Message);
    }

- When using the AllowAppOnlyPolicy, keep in mind it only works in Provider-hosted SharePoint Add-ins.
- AllowAppOnlyPolicy does not execute code on behalf of a user and therefore may not be appropriate for all scenarios.
- Service accounts are defined in SharePoint.
	+ In an Office 365 tenancy, depending what functionality your code requirements have, the service accounts may need an Office 365 license assigned to them.
	+ You can create service accounts on a per SharePoint Add-in basis, or use a single account for all SharePoint Add-ins.
	+ Create clear and descriptive names for the service accounts so you can easily track the operations they perform.
	
	For example: If your SharePoint Add-in modifies list items, the Modified By column for the list items will display the name of the service account associated with the SharePoint Add-in.

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

Options to elevate permissions
------------------------------

You have a couple of options to elevate permissions.

- OAuth (AllowAppOnlyPolicy)
	+ S2S (sub option)
	+ ACS (sub option)
- Service Account
	+ Remotely hosted code (Example: Azure WebJob)

OAuth (AllowAppOnlyPolicy)
--------------------------
In this option the AllowAppOnlyPolicy is set to true in the AppPermissionRequests element and permissions are set in the SharePoint Add-in manifest. OAuth is used to return access tokens to allow the SharePoint Add-in to execute operations it has permissions to perform.

**S2S sub option**

The S2S sub option only works in on-premises SharePoint environments.

When authenticating via OAuth in an S2S scenario the **TokenHelper::GetS2SAccessTokenWithWindowsIdentity** method is used to return the access token for the SharePoint Add-in.  The access token allows the SharePoint Add-in to perform any operations the SharePoint Add-in is granted in the SharePoint Add-in manifest.

This option does not execute code on behalf of a user and therefore may not be appropriate for all scenarios.

**When is it a good fit?**

When you need to elevate privileges in a SharePoint S2S scenario this is a good option because this option works with S2S and is very easy to implement.

**Getting Started**

The following article demonstrates how to use AllowAppOnlyPolicy with S2S.

- [SharePoint 2013 App Only Policy Made Easy (Kirk Evans - MSDN Blog Post)](http://blogs.msdn.com/b/kaevans/archive/2013/02/23/sharepoint-2013-app-only-policy-made-easy.aspx)

**ACS sub option**

The ACS sub option work in on-premises and Office 365 SharePoint environments.

When authenticating via OAuth in an ACS scenario the **TokenHelper::GetAppOnlyAccessTokenmethod** is used to return the access token for the SharePoint Add-in.  Then, the **TokenHelper::GetClientContextWithAccessToken** method is invoked to return the client context necessary to perform any operations the SharePoint Add-in has permission to do based on the permissions granted in the SharePoint Add-in manifest.

This option does not execute code on behalf of a user and therefore may not be appropriate for all scenarios.

**When is it a good fit?**

When you need to elevate privileges in a SharePoint ACS scenario this is a good option because this option works with ACS and is very easy to implement.  This option is a good fit when you have an on-premises SharePoint environment that has an established trust with ACS.  This is your only OAuth option when you have a Office 365 SharePoint environment.

**Getting Started**

The following article demonstrates how to use AllowAppOnlyPolicy with ACS.

- [SharePoint 2013 App Only Policy Made Easy (Kirk Evans - MSDN Blog Post)](http://blogs.msdn.com/b/kaevans/archive/2013/02/23/sharepoint-2013-app-only-policy-made-easy.aspx)

> [!IMPORTANT]
> Azure Access Control (ACS), a service of Azure Active Directory (Azure AD), will be retired on November 7, 2018. This retirement does not impact the SharePoint Add-in model, which uses the `https://accounts.accesscontrol.windows.net` hostname (which is not impacted by this retirement). For more information, see [Impact of Azure Access Control retirement for SharePoint Add-ins](https://dev.office.com/blogs/impact-of-azure-access-control-deprecation-for-sharepoint-add-ins).

Service Account
---------------
In this pattern, the SharePointOnlineCredentials class is used to establish the context of a user that executes code.

**When is it a good fit?**

When you need to execute code on behalf of a specific user (service account) this is a good option because it performs actions on the user's (service account) and the SharePoint Add-in's permissions.

**Getting Started**

The following article demonstrates how the SharePointOnlineCredentials class is used to establish the context of a user that executes code.

- [Getting Started with building Azure WebJobs ("Timer Jobs") for your Office 365 sites (Authentication considerations section) - Tobias Zimmergren Blog Article](http://zimmergren.net/technical/getting-started-with-building-azure-webjobs-timer-jobs-for-your-office-365-sites)

Related links
=============
- [SharePoint 2013 App Only Policy Made Easy (Kirk Evans - MSDN Blog Post)](http://blogs.msdn.com/b/kaevans/archive/2013/02/23/sharepoint-2013-app-only-policy-made-easy.aspx)
- [Getting Started with building Azure WebJobs ("Timer Jobs") for your Office 365 sites (Authentication considerations section) - Tobias Zimmergren Blog Article](http://zimmergren.net/technical/getting-started-with-building-azure-webjobs-timer-jobs-for-your-office-365-sites)
- [SharePointOnlineCredentials class (MSDN API Documentation)](https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.client.sharepointonlinecredentials.aspx)
- [Using add-in only / app-only permissions with search queries in SharePoint Online - Vesa Juvonen Blog Article](https://blogs.msdn.microsoft.com/vesku/2016/03/07/using-add-in-only-app-only-permissions-with-search-queries-in-sharepoint-online/)
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================

- [Core.SimpleTimerJob (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.SimpleTimerJob)
- Samples and content at https://github.com/SharePoint/PnP

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D) *partly*
- SharePoint 2013 on-premises – *partly*

*Patterns for dedicated and on-premises are identical with SharePoint Add-in model techniques, but there are differences on the possible technologies that can be used.*
