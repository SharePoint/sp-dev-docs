---
title: Content Experiences Overview 
description: Experiences with SharePoint Embedded content
ms.date: 11/14/2023
ms.localizationpriority: high
---

# Content Experiences Overview 
Microsoft's SharePoint Embedded provides a comprehensive set of Content Experience features like Open & Edit of Office Files, File Preview or In-App Search that you can leverage to build the right user experiences for your applications. 

## In this article:

1. [Open & Edit using Office](#Open-&-Edit-using-Office)
2. [Preview Content](#Preview-Content)
3. [Download Content](#Download)
4. [In-Application Search](#In-Application-Search)
5. [Recycle Bin](#Recycle-Bin)
6. [Deleted Container Collection](#Deleted-Container-Collection)
7. [Version History](#Version-History)
8. [M365 Content Discovery](#Content-Discovery-in-M365) 

## Open & Edit using Office 
Office documents from SharePoint Embedded Apps can be opened for Viewing, Editing and Collaborating using either Office Online, where your users can work with documents directly on the website, or Desktop apps for a richer viewing and editing experience. Learn more about [Office experiences available on SharePoint Embedded](../concepts/office-experience.md). <br/><br/> You can configure your applications to launch Office clients just the right way  when a user clicks on a Office document from your application including directly launching Desktop Clients or launching Office clients in a specific mode like View (for read-only content) or in Edit for editor mode. Learn how to [configure the right Office Experience for your Office Documents](../tutorials/launch-experience.md) 

## Preview Content 
Integrate your app with SharePoint Embedded player plugin to offer file preview experiences on a wide range of supported file types. You can embed the file preview experiences either in an iFrame or open a new page. Learn how to [offer File Preview experiences for content on your applications](../tutorials/using-file-preview.md)  
                                                                            
## Download
You can use [Graph's Download DriveItem API](https://learn.microsoft.com/en-us/graph/api/driveitem-get-content) to offer download file user experiences for your applications. This will generate  a short lived, preauthenticated Url allows users to download files from your applications. Note: A direct link to the file lacks the appropriate authorization from your app. If used directly in a browser, this would yield an access denied.

## In-Application Search
You can use the Microsoft Search API to query SharePoint Embedded services container content in your application. Search requests run in the context of the signed-in user. Search results are only scoped to enforce any access control applied to the items by the user. For example, search results will include all content matching the search criteria and accessible by the user regardless of whether the SharePoint Embedded application is authorized to access the content. It is recommended to specify the container type accessible by the application in the search request body to ensure search results are properly scoped. 

## Content Discovery in M365
Your users will be able to discover and share content from your SharePoint Embedded applications in their Recommended, Quick Access or Shared With Me feeds on M365 surfaces like Office.com, SharePoint Search results or OneDrive user accounts. This allows your users to leverage  familiar M365 experiences to discover content from your applications. In future releases, M365 Content Discovery can be configured to be disabled across all M365 surfaces.

#### Enable Sharing dialog in Office.com
> [!Note]
> To enable the sharing user experience for your content in Office.com additional application permissions **must** be added at the time of the container type registration process. 
>
Here is how to add the additional permission to enable sharing dialog: 

    PUT /storageContainerTypes/{containerTypeId}/applicationPermissions
    Content-Type: application/json
     {
          "appId": "4765445b-32c6-49b0-83e6-1d93765276ca",
          "delegated": ["readContent","writeContent"],
          "appOnly": ["none"]
        }

## Recycle Bin
You can use the Microsoft Graph APIs to either soft-delete or permanent-delete items in containers. Soft-deleted items are moved to the container’s recycle bin and retained for 93 days. During this period, the items can be restored or permanently deleted using the Microsoft Graph APIs. An item in recycle bin is permanently deleted when it exceeds the 93-day retention period. Permanently deleted items cannot be restored.

## Deleted Container Collection
You can use the SharePoint Embedded services container Graph API to delete containers and move them into the deleted container collection. A deleted container can be restored from the collection within 93 days. If a container is deleted from the collection, or it exceeds the 93-day retention period, it is permanently deleted.  
