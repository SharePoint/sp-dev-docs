---
title: Create SharePoint Add-ins that can be used by anonymous users
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Create SharePoint Add-ins that can be used by anonymous users
Learn how to create SharePoint Add-ins that can be used by anonymous users on public-facing Microsoft SharePoint sites.
 

 


 **Important**  Wherever  *on-premise*  SharePoint is mentioned in this article, we assume that Service Pack 1 for SharePoint has been installed.
 


## Prerequisites for creating anonymously accessible SharePoint Add-ins

Anonymous access is possible for SharePoint-hosted and provider-hosted SharePoint Add-ins. Depending on which type you create, review one of the following sets of prerequisites:
 
-  [Get Started Creating SharePoint Hosted SharePoint add-ins](get-started-creating-sharepoint-hosted-sharepoint-add-ins.md)
    
-  [Get Started Creating Provider-Hosted SharePoint add-ins](get-started-creating-provider-hosted-sharepoint-add-ins.md)
    
 
You will also need a site collection in your test SharePoint installation that is configured for anonymous access. If you have an Office 365 Developer Site, there is already a public site collection associated with it that uses a special Public Website site definition. (For more information about the use of Public Websites in Microsoft SharePoint Online, see  [Public Website help for Office 365](http://office.microsoft.com/en-gb/office365-sharepoint-online-enterprise-help/public-website-help-for-office-365-HA102891740.aspx?CTT=1).) That site definition is not available for on premises SharePoint installations. So if your test installation is on-premises, you will need:
 

 

- A SharePoint web application that is configured to allow anonymous access. But this configuration must occur after the SharePoint Add-in that you are testing has been installed.
    
 
- A site collection within the web application that is itself configured for anonymous access. But this configuration must occur after the SharePoint Add-in that you are testing has been installed.
    
 
- If your add-in is SharePoint-hosted and accesses a SharePoint list, a list in the site collection that is configured for anonymous access.
    
 
Instructions for these tasks are in the section  [Configuring an SharePoint web application and site collection and list for anonymous access](#Configuring).
 

 

## Limitations on the use of SharePoint Add-ins by anonymous users

Consider the following facts as you design your SharePoint Add-in:
 

 

- If the SharePoint Add-in is launched from SharePoint, it has to include a custom action or an add-in part, or it must be launched from a custom link on a page. This is because anonymous users cannot launch the add-in by its tile. The mechanism by which add-ins are launched from the tile requires the use of a special  [application page](http://msdn.microsoft.com/library/685c8e01-b163-4b5e-888c-421d9ecbb25e%28Office.15%29.aspx) that is not accessible to anonymous users. Another option is to make the add-in launchable from outside SharePoint, in which case it has to use theadd-in-only authorization policy.
    
 
- An anonymous user can only launch SharePoint Add-ins that have been installed by others. This is because anonymous users cannot open the  **Add an Add-in** page.
    
 
- When a logged in user navigates to a website in an on-premises SharePoint web application that has been configured for anonymous access, the user's identity changes to  **System Account**. This identity cannot install SharePoint Add-ins. Since anonymous users also cannot install add-ins, this means that nobody can install a SharePoint Add-ins when the web application is configured for anonymous access. Accordingly, SharePoint Add-ins should be installed to websites in the SharePoint web application before the web application is configured for anonymous access. If other add-ins need to be installed later, the web application must be temporarily changed to disable anonymous access so that the add-ins can be installed by a logged in user.
    
 
- To enable the SharePoint Search REST APIs in an on-premises SharePoint website, you to configure some query XML. For details, see  [Enabling anonymous Search REST queries](http://msdn.microsoft.com/library/office/jj163876.aspx#bk_AnonymousREST).
    
 
- Data on the add-in web is not crawled by the search indexers, so custom data must be deployed remotely or in the host web. This applies to all SharePoint Add-ins, but we note it here because add-ins intended for anonymous access often require search functionality.
    
 

## Creating provider-hosted add-ins that are anonymously accessible
<a name="Cloud-hosted"> </a>

Making a provider-hosted add-in accessible to anonymous users is simply a matter of configuring it to use the add-in-only authorization policy. When this policy is used, SharePoint does not even include a user context, so it doesn't matter that the user is anonymous. It is only necessary that the add-in principal is granted any permissions it needs to the host web -- and any it needs to the parent site collection or parent tenancy -- by the tenant administrator that installs the add-in. You request permissions to the host web in the add-in manifest just as you would any add-in.
 
> [!NOTE] 
> If the SharePoint site is accessible to anonymous users, it typically allows HTTP access, rather than HTTPS. There are potential security issues when the add-in-only policy is used for add-ins in this scenario. For details and a method of mitigating them, see  [What Every Developer Needs to Know About SharePoint Add-ins, CSOM, and Anonymous Publishing Sites](http://blogs.msdn.com/b/kaevans/archive/2013/10/24/what-every-developer-needs-to-know-about-sharepoint-apps-csom-and-anonymous-publishing-sites.aspx).
 

Designing an add-in to use the add-in-only policy requires two things:
 

 

- You must add  `AllowAppOnlyPolicy="true"` to the **AppPermissionRequests** element in the add-in manifest.
    
 
- Your code must ask for an add-in-only access token from the OAuth authorization server. If you are working with managed code, there are APIs specifically created for this purpose in the code files that are generated by Microsoft Office Developer Tools for Visual Studio: SharePointContext.cs (or .vb) and TokenHelper.cs (or .vb).
    
 
For details about the add-in-only policy (with code snippets), add-in permissions, and the add-in manifest see these topics:
 

 

-  [Add-in authorization policy types in SharePoint](add-in-authorization-policy-types-in-sharepoint.md)
    
 
-  [Add-in permissions in SharePoint](add-in-permissions-in-sharepoint.md)
    
 
-  [Explore the app manifest structure and the package of a SharePoint Add-in](explore-the-app-manifest-structure-and-the-package-of-a-sharepoint-add-in.md)
    
 

## Creating SharePoint-hosted add-ins that are anonymously accessible
<a name="SP-hosted"> </a>

Creating a SharePoint-hosted add-in that can be run by anonymous users does not require any special techniques. You create it the same way you would create any SharePoint-hosted add-in. For details, see  [Get started creating SharePoint-hosted SharePoint Add-ins](get-started-creating-sharepoint-hosted-sharepoint-add-ins.md) and [Complete basic operations using JavaScript library code in SharePoint](complete-basic-operations-using-javascript-library-code-in-sharepoint.md).
 

 
What's really crucial for making a SharePoint-hosted add-in usable by anonymous access is that the SharePoint Online site collection is configured by a tenant administrator to allow anonymous access. There is no way that you as a developer of a SharePoint-hosted add-in can make this configuration from the add-in, or a remote add-in event receiver, or with the SharePoint add-in installation infrastructure. You can include a custom list or library in the add-in, but Collaborative Application Markup Language (CAML) does not provide any way to preconfigure it for anonymous access, so it would have to be configured after the add-in is installed.
 

 
If you are marketing your add-in through the Office Store, and a significant portion of your potential customers would find the add-in most useful if it is accessible to anonymous users, then you should consider mentioning this configuration requirement in your add-in description. Consider also including a version of the procedure  **To configure a SharePoint Online site collection for anonymous access** below in your add-in's support page.
 

 
If your add-in uses SharePoint's JavaScript object model (JSOM), there is one configuration requirement that is very crucial. Only a very small portion of the JSOM APIs are accessible by default to anonymous users. All others require that a user have the  **Use Remote Interfaces** permission and anonymous users do not have this permission. This requirement has to be turned off in the parent site collection or parent SharePoint web application of the website where the add-in is installed, as described in [Configuring an SharePoint web application and site collection and list for anonymous access](#Configuring).
 
> [!NOTE] 
> Turning off the requirement that users have the  **Use Remote Interfaces** permission has implications for information privacy. For details, see [What Every Developer Needs to Know About SharePoint Add-ins, CSOM, and Anonymous Publishing Sites](http://blogs.msdn.com/b/kaevans/archive/2013/10/24/what-every-developer-needs-to-know-about-sharepoint-apps-csom-and-anonymous-publishing-sites.aspx).
 


## Limitations of SharePoint-hosted add-ins for anonymous users
<a name="SP-hosted"> </a>

We'll be honest with you: there are some significant limitations on SharePoint-hosted add-ins for anonymous users that you need to be aware of:
 

 

- It is not possible to make a list or library on a SharePoint Online accessible to anonymous users. Accordingly, JSOM APIs that involve interaction with lists or libraries do not work on SharePoint Online for anonymous users.
    
 
- A SharePoint-hosted add-in installed to an  *on-premises*  SharePoint website can make use all of the JSOM APIs. However, the web application, site collection, and lists/libraries must be *manually*  configured for anonymous access, and the **Use Remote Interfaces** permission requirement must be disabled. If the add-in installs custom lists/libraries to the add-in web, users are responsible for manually configuring these for anonymous access after add-in installation.
    
 
- Because data on the add-in web is not crawled by the search indexers, and because there is no way to install custom lists or libraries to the host web, and because SharePoint-hosted add-ins cannot have remote components or event receivers, custom data in a SharePoint-hosted add-in is not searchable.
    
 

## Configuring an SharePoint web application and site collection and list for anonymous access
<a name="Configuring"> </a>

If your test SharePoint installation is on-premises, you must carry out the first two procedures below in order to test whether your SharePoint Add-in can be used by anonymous users. The customers who install your SharePoint Add-in must also carry out these procedures for the parent site collection and web application of any website where your SharePoint Add-in is installed.
 

 

 **Important**  If possible, you should install the SharePoint Add-in to a website  *before*  you carry out the first two procedures. Add-ins cannot be installed to any website in an on-premise SharePoint web application when the web application has been configured for anonymous access. If the web application has already been configured for anonymous access, you have to reverse that setting temporarily in order to install the add-in.
 


### To configure the parent web application for anonymous access


1. In  **Central Administration**, choose  **Application Management**, and then  **Manage Web Applications**.
    
 
2. (Optional) If you don't want to allow anonymous access for any of the existing SharePoint web applications, create a new web application. (Although the web application creation form gives you the option of allowing anonymous access,  *do not use this option*  . Anonymous access should not be enabled until *after*  the SharePoint Add-in is installed.) For details, see [Create a web application in SharePoint](http://msdn.microsoft.com/library/121c8d83-a508-4437-978b-303096aa59df.aspx).
    
 
3. On the list of web applications, select the one that is to be accessible by anonymous users, and select  **Authentication Providers** on the ribbon.
    
 
4. On the callout that opens, choose the zone for which anonymous access is to be enabled. Typically, this is  **Internet** or **Default**. The  **Edit Authentication** form opens.
    
 
5. Check the  **Enable anonymous access** box, it if isn't enabled already. This sets a default that can be turned off for specific site collections, but if you do not enable this for the web application, you cannot enable it for any site collections.
    
 
6. (Optional) Uncheck the  **Require Use Remote Interfaces permission** box. Doing so allows code and script running in the context of an anonymous user to make calls to SharePoint's client object model on every site collection. You cannot re-enable the requirement for any site collections. Leaving the box checked means that by default anonymous users cannot access the client object models, but you can disable the requirement (and give them access) for specific site collections.
    
    > [!NOTE] 
    > In the context of developing SharePoint Add-ins for anonymous users, this setting is only meaningful for SharePoint-hosted add-ins. Provider-hosted SharePoint Add-ins that are designed for anonymous users use a technique that makes the user's permissions irrelevant. For more information about this, see the section  [Creating provider-hosted add-ins that are anonymously accessible](#Cloud-hosted) above.

7. Choose  **Save** to close the form.
    
 
8. With the web application still highlighted, select  **Anonymous Policy** on the ribbon.
    
 
9. In the  **Anonymous Access Restrictions** form, choose the zone and be sure that the **None** radio button is enabled. If the SharePoint Add-in that you are testing needs only read rights to SharePoint data, enable **Deny Write** instead.
    
    > [!NOTE] 
    > This is another setting that, in the context of developing SharePoint Add-ins for anonymous users, is only meaningful for SharePoint-hosted add-ins.

10. If you created a new web application in step 2, you have to create a site collection in it.
    
 

### To configure an on-premises site collection for anonymous access


1. On the home page of a site collection in the web application, select the gear icon and then  **Site Settings**.
    
 
2. In the  **Users and Permissions** section of the **Site Settings** page, select **Site permissions**.
    
 
3. Choose  **Anonymous Access** on the ribbon.
    
 
4. On the  **Anonymous Access** form, choose either **Entire Web site** or **Lists and libraries**, depending on the level of access the add-in that you are testing needs. (Regardless of which option you choose, anonymous users cannot access a list or library with a SharePoint-hosted add-in unless the list of library is individually configured to all anonymous access. A procedure below describes how to do this.
    
 
5. If the add-in you are testing needs to access the SharePoint client object model, ensure that the  **Require Use Remote Interfaces permission** box is *not*  checked. If the checkbox is grayed out, then the requirement was turned off at the web application level which has the same effect as the box being unchecked. (As noted in the previous procedure, this setting, in the context of developing SharePoint Add-ins for anonymous users, is only meaningful for SharePoint-hosted apps.)
    
 

 **Important**  The following procedure can only be carried out on a public website in SharePoint Online. (For more information about the use of Public Websites in Microsoft SharePoint Online, see  [Public Website help for Office 365](http://office.microsoft.com/en-gb/office365-sharepoint-online-enterprise-help/public-website-help-for-office-365-HA102891740.aspx?CTT=1).)
 


### To configure a SharePoint Online site collection for anonymous access


1. Login to Office 365 as a tenant administrator.
    
 
2. On the home page of the site collection, choose  **MAKE WEBSITE ONLINE** near the upper right corner of the page. This action also turns off the **Use Remote Interfaces permission** requirement.
    
 
If you are developing a SharePoint-hosted add-in and it accesses a SharePoint list, you must also carry out the following procedure in your test site collection. Customers who use your add-in will need to do this as well on any website where the add-in is installed. There is no way that an add-in can programmatically or descriptively configure a list for anonymous access. Add-ins can install custom lists, but there is no way to preconfigure such lists for anonymous access. The configuration must still be done manually after the add-in is installed. If you are developing a provider-hosted SharePoint Add-in for anonymous users, this procedure is not required.
 
> [!NOTE] 
> This procedure cannot be carried out in a SharePoint Online site collection, so SharePoint-hosted add-ins that are installed to SharePoint Online and intended for use by anonymous users cannot access lists or libraries.
 


### To configure an list or library for anonymous access


1. Navigate to a list or library that the SharePoint Add-in that you are testing accesses and open the  **List Settings** or **Library Settings**. For a SharePoint Online site, you must be logged in as a tenant administrator.
    
 
2. Choose  **Permissions for this list/library**.
    
 
3. On the page that opens, choose  **Stop Inheriting Permissions** on the **Permissions** tab, and then choose **OK** on the confirmation prompt.
    
 
4. Choose  **Anonymous Access** on the **Permission** tab.
    
 
5. On the  **Anonymous Access** form that opens, select all of the permissions that that users of the SharePoint Add-in require. You can grant permission to View, Edit, Add, and Delete items. You cannot grant Full Control, so anonymous users cannot change the schema of the list or change list settings.
    
 

## Additional resources
<a name="bk_addresources"> </a>


-  [Develop SharePoint Add-ins](develop-sharepoint-add-ins.md)
    
 

