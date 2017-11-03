---
title: Create a developer site on an existing Office 365 subscription
description: Set up an Office 365 Developer Site for SharePoint Add-ins.
ms.date: 11/03/2017
ms.prod: sharepoint
---


# Create a developer site on an existing Office 365 subscription

An Office 365 Developer Site makes it easier to get set up and start creating, testing, and deploying your Office and SharePoint Add-ins more quickly. Many Office 365 Business, Enterprise, Education, and Government subscriptions include a site template that you can use to create a Developer Site.

### Before you start

**Be sure you have an Office 365 subscription that supports a Developer Site.** If you have one of the following Office 365 subscription plans, you can create a Developer Site within your existing subscription:
    
- Office 365 Midsize Business
- Office 365 Enterprise E1, E3, E4, E5, or K1
- Office 365 Education A2, A3, or A4
- Office 365 Government G1, G3, G4, or K1

**If you have an Office 365 Small Business subscription,** it supports only a single site collection, so you can't create a Developer Site collection. If you would like to learn more about Office 365 plans for your business, see [SharePoint Online: software boundaries and limits](http://office.microsoft.com/en-us/office365-sharepoint-online-enterprise-help/sharepoint-online-software-boundaries-and-limits-HA102694293.aspx).
    
For more information about the Office 365 Enterprise offerings, see [Plans &amp; Pricing](http://products.office.com/en-us/business/office-365-enterprise-e1-business-software).

<a name="bk_createdevsite"> </a>
## Create a Developer Site

1. Sign in to Office 365 as a Global or SharePoint Online admin.
    
   **You must sign in as a Global or SharePoint Online admin to create new site collections,** such as a Developer Site. Only admins can see Admin options when signing in to Office 365. If you're not an admin, contact an admin in your company and have them do one of the following:
    
   - Grant you admin rights, so you can create the Developer Site yourself.
   - Create the Developer Site for you, and specify you as an admin for the site collection.

2. Select the App Launcher button on the far left of the navigation bar at the top of the page.

3. Select the **Admin** tile.

4. In the navigation tree on the left, expand **Admin**, and then select **SharePoint**.

5. In the **SharePoint admin center**, on the **Site Collections** tab, select **New** > **Private Site Collection**.
  
   *Figure 1. SharePoint Admin Center new site collection option*

   ![SharePoint Admin Center new site collection option](../images/SPAdminCenter_newSiteCollection.png)

6. In the **New Site Collection** dialog box, provide information about your Developer Site.
    
   |**Field**|**Value**|
   |:-----|:-----|
   |**Title**|The name you want to give your Developer Site.|
   |**Public Website Address** list|A domain name and a URL path—either **/sites/** or **/teams/**—and then<br/>type a URL name for the site collection.|
   |**Select a language** list in the **Template Selection** section|A primary language to use for your Developer Site.<br/>*Be sure to select the appropriate language for the Developer Site site collection, because once you choose it, it can't be changed.*<br/>Selecting a language for your Developer Site does not affect the languages you can make available in your Office and SharePoint Add-ins.<br/>You can enable the SharePoint multiple language interface on your sites, but the primary language for the site collection is the one you choose here.|
   |**Template Selection** section, on the **Collaboration** tab under **Select a template**|Select **Developer Site.**|
   |**Time Zone**|Time zone that's appropriate for the locale of your Developer Site.|
   |**Administrator**|The user name of your site collection administrator.|
   |**Storage Quota**|Number of megabytes (MB) you want to allocate to this Developer Site site collection.|
   |**Server Resource Quota**|The amount of resources to allocate to the site collection.<br/>This number is a combination of performance metrics (such as processor time and unhandled exceptions) that pertain to code in sandboxed solutions.<br/>When the level exceeds a daily quota, the sandbox is turned off for this site collection.|

7. Select **OK**. You'll see the new developer site URL in the **Site Collections** list. When the site creation is finished, you can go to the URL to open your Developer Site.
    
   *Figure 2. New site collection provisioning*

   ![New site collection provisioning](../images/SPAdminCenter_newSiteCollection_provisioning.png)
 
## Additional resources
<a name="bk_addresources"> </a>

-  [SharePoint Add-ins](sharepoint-add-ins.md)
-  [Create or delete a site collection](http://office.microsoft.com/en-us/office365-sharepoint-online-enterprise-help/create-or-delete-a-site-collection-HA102772354.aspx?CTT=1)
    
 

