---
title: Update host web components in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: 9c383a69-c2f6-4702-bd64-e77c9bd026b7
---


# Update host web components in SharePoint 2013
Update add-in parts and custom actions in the host web of a SharePoint Add-in.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 


## Prerequisites for updating host web components
<a name="Prerequisites"> </a>

Be familiar with  [Update SharePoint Add-ins](update-sharepoint-add-ins.md) and the prerequisites and core concepts listed in it.
 

 

## Update host web components
<a name="UpdateHostWeb"> </a>

Your add-in can install two kinds of components on a host web with descriptive markup in the SharePoint Add-in: custom actions andadd-in parts. Updating these components is easier in the host web than in the add-in web. You don't need any update semantics. Just add/change the custom actions and add-in parts. When the SharePoint Add-in is updated, SharePoint always applies any new element manifest files and reapplies any changed element manifest files with the most recent version. No harm is done in reapplying; for example, a ribbon button for a custom action will not be added multiple times to the ribbon.
 

 
When you update an add-in part, SharePoint replaces the old version with the new version in the Web Part gallery. Be sure to change the  **Name** property of the **ClientWebPart** object when you update an add-in part. Doing this ensures that, when the add-in is updated, SharePoint will remove the old version of the add-in part (which is no longer part of the app) from all pages to which it was added. Users will need to re-add the new version to pages.
 

 
If you leave the  **Name** property unchanged, the old version remains on pages where it was added, which makes it unlikely that users will be aware that a new version of the add-in part is available. Also, when the add-in part is added to other pages, it is the new version that is added, so the same version of a SharePoint Add-in would have different add-in parts on different pages.
 

 
You can deploy other kinds of host web components programmatically using a remote event receiver that you register in the add-in manifest with an  [InstalledEventEndpoint](http://msdn.microsoft.com/library/af9f83d8-8325-3ede-d7b0-bb82c0445eb9%28Office.15%29.aspx) element. You should use an [UpgradedEventEndpoint](http://msdn.microsoft.com/library/09a93d44-d295-47bb-f91c-d243178b0f53%28Office.15%29.aspx) receiver to update components that were originally deployed with an **InstalledEventEndpoint** receiver. [UpgradedEventEndpoint](http://msdn.microsoft.com/library/09a93d44-d295-47bb-f91c-d243178b0f53%28Office.15%29.aspx) receivers are described in [Create a handler for the update event in SharePoint Add-ins](create-a-handler-for-the-update-event-in-sharepoint-add-ins.md).
 

 

## Next steps
<a name="Next"> </a>

Go to  [Major steps in updating an add-in](update-sharepoint-add-ins.md#MajorAppUpgradeSteps), or go directly to one of the following articles to learn how to update the next major component of your SharePoint Add-in.
 

 

-  [Update add-in web components in SharePoint 2013](update-add-in-web-components-in-sharepoint-2013.md)
    
 
-  [Create a handler for the update event in SharePoint Add-ins](create-a-handler-for-the-update-event-in-sharepoint-add-ins.md)
    
 
-  [Update remote components in SharePoint Add-ins](update-remote-components-in-sharepoint-add-ins.md)
    
 

## Additional resources
<a name="bk_addresources"> </a>


-  [Update SharePoint Add-ins](update-sharepoint-add-ins.md)
    
 
-  [Host webs, add-in webs, and SharePoint components in SharePoint 2013](host-webs-add-in-webs-and-sharepoint-components-in-sharepoint-2013.md)
    
 

