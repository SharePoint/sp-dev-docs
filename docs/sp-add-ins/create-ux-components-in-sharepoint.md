# Create UX components in SharePoint 2013
Learn how to create UX components for your add-ins in SharePoint 2013.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 


## Creating UX components in SharePoint Add-ins
<a name="SP15CreateUX_Creating"> </a>

The model for SharePoint Add-ins offers many UX components and mechanisms that help you build a great user experience in SharePoint Add-ins. The user experience in the add-in model is also flexible enough to let you use the techniques and platforms that best adapt to the needs of end users. Table 1 lists resources to help you learn about creating and using UX components in add-ins.
 

 

**Table 1. Resources and guidance for creating UX components in SharePoint Add-ins**


|**Article**|**Description**|
|:-----|:-----|
| [Use a SharePoint website's style sheet in SharePoint Add-ins](use-a-sharepoint-website-s-style-sheet-in-sharepoint-add-ins.md)|You can reference the style sheet of a SharePoint website in your SharePoint Add-in and use it to style your webpages by using the style sheet in SharePoint 2013. In addition, if someone changes the SharePoint website's style sheet or theme, you can adopt the new set of styles in your add-in without modifying the style sheet reference in your add-in.|
| [Use the client chrome control in SharePoint Add-ins](use-the-client-chrome-control-in-sharepoint-add-ins.md)|The chrome control in SharePoint 2013 enables you to use the header styling of a specific SharePoint site in your add-in without needing to register a server library or use a specific technology or tool. To use this functionality, you must register a SharePoint JavaScript library through a standard <script> tag. You can provide a placeholder by using an HTML **div** element and further customize the control by using the available options. The control inherits its appearance from the specified SharePoint website.|
| [Create add-in parts to install with your SharePoint Add-in](create-add-in-parts-to-install-with-your-sharepoint-add-in.md)|With add-in parts, you can show your add-in user experience right in the host web. An add-in part displays your add-in content using an  **IFrame**. End users can customize the experience using the custom properties that you can provide for your add-in part. The add-in webpage receives the custom property values through parameters in the query string.|
| [Create custom actions to deploy with SharePoint Add-ins](create-custom-actions-to-deploy-with-sharepoint-add-ins.md)|When you are creating a SharePoint Add-in, custom actions let you interact with the lists and the ribbon in the host web. A custom action deploys to the host web when end users install your add-in. Custom actions can open a remote webpage and pass information through the query string. There are two types of custom actions available for add-ins: Ribbon and Edit Control Block.|
| [Customize a list view in SharePoint Add-ins using client-side rendering](customize-a-list-view-in-sharepoint-add-ins-using-client-side-rendering.md)|Client-side rendering provides a mechanism that you can use to produce your own output for a set of controls that are hosted in a SharePoint page. This mechanism enables you to use well-known technologies, such as HTML and JavaScript, to define the rendering logic of SharePoint list views. In client-side rendering, you can specify your own JavaScript resources and host them in the data storage options available to your add-ins, such as a document library.|
| [Use the client-side People Picker control in SharePoint-hosted SharePoint Add-ins](use-the-client-side-people-picker-control-in-sharepoint-hosted-sharepoint-add-ins.md)|Learn how to use the client-side People Picker control in SharePoint Add-ins. The client-side People Picker control lets users quickly search for and select valid user accounts for people, groups, and claims in their organization. The picker is an HTML and JavaScript control that provides cross-browser support.|

## Next steps: Working with data in SharePoint Add-ins
<a name="SP15CreateUX_Next"> </a>

Have you finished designing a great UX for your add-in? Incorporate data with the mechanisms available to you in the model for SharePoint Add-ins. For more information, see  [Work with external data in SharePoint 2013](work-with-external-data-in-sharepoint-2013.md).
 

 

## Additional resources
<a name="SP15CreateUX_AddRes"> </a>


-  [SharePoint Add-ins](sharepoint-add-ins.md)
    
 
-  [UX design for SharePoint Add-ins](ux-design-for-sharepoint-add-ins.md)
    
 
-  [Develop SharePoint Add-ins](develop-sharepoint-add-ins.md)
    
 

