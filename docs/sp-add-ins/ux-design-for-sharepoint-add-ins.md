---
title: UX design for SharePoint Add-ins
ms.prod: SHAREPOINT
ms.assetid: d60f409a-b292-4c06-8128-88629091b753
---


# UX design for SharePoint Add-ins
Learn about the user experience (UX) options that you have when you build add-ins in SharePoint 2013.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 

As a developer, you should always give high priority to the user experience (UX) when you are creating add-ins. The model for SharePoint Add-ins offers many UX components and mechanisms that help you build a great user experience. The user experience in the add-in model is also flexible enough to let you use the techniques and platforms that best adapt to the needs of end users.
 

## High-level overview of add-in UX in SharePoint 2013
<a name="SP15_UXdesignapps_overview"> </a>

As the add-in developer, you have to know the architecture of your add-in. After you determine how your add-in will be distributed in remote and SharePoint platforms, you can decide among the available alternatives for building your add-in UX. You might ask yourself the following questions:
 

 

- What can I use if I am creating a cloud-hosted add-in?
    
 
- What can I use if I am creating a SharePoint-hosted add-in? For more information, see  [Choose patterns for developing and hosting your SharePoint Add-in](choose-patterns-for-developing-and-hosting-your-sharepoint-add-in.md).
    
 
- How can I connect my UX to the host web? For more information, see  [Host webs, add-in webs, and SharePoint components in SharePoint 2013](host-webs-add-in-webs-and-sharepoint-components-in-sharepoint-2013.md).
    
 
The following diagram shows the main scenarios and options to consider when you are designing your add-in UX.
 

 

**Figure 1. Add-in UX main scenarios and options**

 

 
![App UX main scenarios](images/AppUX_landscape.png)
 
In choosing your design, you should fundamentally consider which parts of your add-in are hosted in SharePoint and which are not. You should also consider how your add-in interacts with the host web.
 

 

## Add-in UX scenarios in cloud-hosted add-ins
<a name="SP15_UXdesignapps_devhosted"> </a>

Suppose that you determine that some of your user experience is not hosted in SharePoint. In these scenarios, it is expected that your end users go back and forth between a SharePoint website and the cloud-hosted add-in. You can use the techniques and tools in the platform, but SharePoint also provides resources to help you design a smooth experience for users.
 

 
The following UX resources are available for cloud-hosted add-ins in SharePoint 2013:
 

 

-  **Chrome control:** Thechrome control enables you to use the navigation header of a specific SharePoint site in your add-in without needing to register a server library or use a specific technology or tool. To use this functionality, you must register a SharePoint JavaScript library through standard <script> tags. You can provide a placeholder by using an HTML **div** element and further customize the control by using the available options. The control inherits its appearance from the specified SharePoint website. For more information, see [Use the client chrome control in SharePoint Add-ins](use-the-client-chrome-control-in-sharepoint-add-ins.md).
    
    **Watch the video: SharePoint 2013 chrome control**

 

 
![Videos](images/mod_icon_video.png)
 

 

 
-  **Stylesheet:** You can reference a SharePoint website's style sheet in your SharePoint Add-in and use it to style your webpages using the available classes. In addition, if the end users change the SharePoint website's theme, your add-in can adopt the new set of styles without modifying the reference in your add-in. For more information, see [Use a SharePoint website's style sheet in SharePoint Add-ins](use-a-sharepoint-website-s-style-sheet-in-sharepoint-add-ins.md).
    
 
Figure 2 shows the resources in the model for SharePoint Add-ins for cloud-hosted add-ins.
 

 

**Figure 2. Add-in UX resources for cloud-hosted add-ins**

 

 
![App UX resources for developer-hosted apps](images/AppUX_devhosted.png)
 

 

 

## Add-in UX scenarios in SharePoint-hosted add-ins
<a name="SP15_UXdesignapps_SPhosted"> </a>

If your add-in is hosted in SharePoint, the user experience is less likely to change very much when users move back and forth between the host web and the add-in web. When the add-in is deployed, the add-in web takes the style sheet and theme from the host web. You can still use the chrome control and style sheet in a SharePoint-hosted add-in, but the most significant difference with cloud-hosted scenarios is the availability of the add-in template.
 

 
The following UX resource is available for SharePoint-hosted add-ins:
 

 

-  **Add-in template:** The add-in template includes the **app.master** masterpage. It is the default option when you create an add-in web.
    
 
SharePoint-hosted add-ins also benefit themselves from existing resources and technologies in SharePoint such as the Ribbon, web part infrastructure and client-side rendering.
 

 

## Scenarios for connecting the add-in UX to the host web
<a name="SP15_UXdesignapps_connectingappUX"> </a>

Some of the use cases for your add-in can be triggered from within the host web. SharePoint provides ways to open your add-in from a document library or list in addition to ways to show some of your add-in UX within SharePoint-hosted pages.
 

 
The following UX resources are available to connect your add-in UX to the host web:
 

 

-  **Custom actions**: You can use custom actions to connect the host web UX with your add-in. There are two types of custom actions:Ribbon orECB. A custom action can send parameters such as the list or item on which it was invoked to a remote page. For more information, see  [Create custom actions to deploy with SharePoint Add-ins](create-custom-actions-to-deploy-with-sharepoint-add-ins.md).
    
 
-  **Add-in parts:** You can include some of your add-in user experience in the host web by using add-in parts. The add-in part is available in the Web Part gallery in the host web when you deploy the add-in. Users can add the add-in part to a page by using the **Web Part Adder** control. For more information, see [Create add-in parts to install with your SharePoint Add-in](create-add-in-parts-to-install-with-your-sharepoint-add-in.md).
    
 
Figure 3 shows the resources in the model for SharePoint Add-ins to connect your add-in UX to the host web.
 

 

**Figure 3. Add-in UX resources for the host web**

 

 
![App UX resources for the host web](images/AppUX_hostweb.png)
 

 

 

## Additional resources
<a name="SP15_UXdesignapps_addresources"> </a>

To learn how to use the add-in UX options in SharePoint Add-ins, see the following resources:
 

 

-  [Design SharePoint Add-ins](design-sharepoint-add-ins.md)
    
 
-  [SharePoint Add-ins](sharepoint-add-ins.md)
    
 
-  [Three ways to think about design options for SharePoint Add-ins](three-ways-to-think-about-design-options-for-sharepoint-add-ins.md)
    
 
-  [Important aspects of the SharePoint Add-in architecture and development landscape](important-aspects-of-the-sharepoint-add-in-architecture-and-development-landscape.md)
    
 
-  [Host webs, add-in webs, and SharePoint components in SharePoint 2013](host-webs-add-in-webs-and-sharepoint-components-in-sharepoint-2013.md)
    
 
-  [SharePoint Add-ins UX design guidelines](sharepoint-add-ins-ux-design-guidelines.md)
    
 
-  [Create UX components in SharePoint 2013](create-ux-components-in-sharepoint-2013.md)
    
 
-  [Use a SharePoint website's style sheet in SharePoint Add-ins](use-a-sharepoint-website-s-style-sheet-in-sharepoint-add-ins.md)
    
 
-  [Use the client chrome control in SharePoint Add-ins](use-the-client-chrome-control-in-sharepoint-add-ins.md)
    
 
-  [Create add-in parts to install with your SharePoint Add-in](create-add-in-parts-to-install-with-your-sharepoint-add-in.md)
    
 
-  [Create custom actions to deploy with SharePoint Add-ins](create-custom-actions-to-deploy-with-sharepoint-add-ins.md)
    
 

