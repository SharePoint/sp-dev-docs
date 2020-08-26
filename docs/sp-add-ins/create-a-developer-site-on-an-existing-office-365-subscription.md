---
title: Create a developer site on an existing Office 365 subscription
description: Set up an Office 365 developer site for SharePoint Add-ins.
ms.date: 08/24/2020
ms.prod: sharepoint
localization_priority: Priority
---


# Create a developer site on an existing Office 365 subscription

An Office 365 developer site makes it easier to get set up and start creating, testing, and deploying your Office and SharePoint Add-ins more quickly. Many Office 365 Business, Enterprise, Education, and Government subscriptions include a site template that you can use to create a developer site.

### Before you start

Unless otherwise noted, developer sites can be created in all plans that include SharePoint, and all SharePoint standalone plans. Including but not limited to:
    
- Microsoft 365 Business Standard
- Microsoft 365 E3, E5
- Microsoft 365 A3, A5
- Microsoft 365 Government G3, G5

If you would like to learn more about Microsoft 365 plans for your business, see [SharePoint Online: software boundaries and limits](https://docs.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-limits).
    
For more information about the Microsoft 365 Enterprise offerings, see [Plans &amp; Pricing](https://www.microsoft.com/microsoft-365/compare-microsoft-365-enterprise-plans).

<a name="bk_createdevsite"> </a>
## Create a developer site

1. Sign in to Office 365 as a Global or SharePoint Online admin.
    
   **You must sign in as a Global or SharePoint Online admin to create new site collections,** such as a developer site. Only admins can see Admin options when signing in to Office 365. If you're not an admin, contact an admin in your company and have them do one of the following:
    
   - Grant you admin rights, so you can create the developer site yourself.
   - Create the developer site for you, and specify you as an admin for the site collection.

2. Select the App Launcher button on the far left of the navigation bar at the top of the page.

3. Select the **Admin** tile.

4. In the navigation tree on the left, expand **Admin**, and then select **SharePoint**.

5. In the **SharePoint admin center**, on the **Sites** menu, select **Active Sites** .

   ![SharePoint Admin Center Active Sites](..\images\SharePoint-Admin-Center-Active-Sites.png)
   
6. In the **Active Sites** list select **Create** > **Other options**

7. In the **Choose a template** dropdown, select **More templates**

8. In the **Create Site Collection** dialog box, provide information about your developer site.
    
   |**Field**|**Value**|
   |:-----|:-----|
   |**Title**|The name you want to give your developer site.|
   |**Web Site Address** list|A domain name and a URL path—either **/sites/** or **/teams/**—and then<br/>type a URL name for the site collection.|
   |**Select a language** list in the **Template Selection** section|A primary language to use for your developer site.<br/>*Be sure to select the appropriate language for the developer site site collection, because once you choose it, it can't be changed.*<br/>Selecting a language for your developer site does not affect the languages you can make available in your Office and SharePoint Add-ins.<br/>You can enable the SharePoint multiple language interface on your sites, but the primary language for the site collection is the one you choose here.|
   |**Template Selection** section, on the **Collaboration** tab under **Select a template**|Select **Developer Site.**|
   |**Time Zone**|Time zone that's appropriate for the locale of your developer site.|
   |**Administrator**|The user name of your site collection administrator.|
   |**Storage Quota**|Number of megabytes (MB) you want to allocate to this developer site site collection.|
   |**Server Resource Quota**|The amount of resources to allocate to the site collection.<br/>This number is a combination of performance metrics (such as processor time and unhandled exceptions) that pertain to code in sandboxed solutions.<br/>When the level exceeds a daily quota, the sandbox is turned off for this site collection.|

9. Select **OK**. You'll see the new developer site URL in the **Site Collections** list. When the site creation is finished, you can go to the URL to open your developer site.

   ![New site collection provisioning](../images/SPAdminCenter_newSiteCollection_provisioning.png)
 
## See also
<a name="bk_addresources"> </a>

-  [SharePoint Add-ins](sharepoint-add-ins.md)
-  [Create site collection](https://docs.microsoft.com/sharepoint/create-site-collection)
-  [Delete site collection](https://docs.microsoft.com/sharepoint/delete-site-collection)
    
 

