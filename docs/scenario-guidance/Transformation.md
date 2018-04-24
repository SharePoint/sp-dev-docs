---
title: Transformation
ms.date: 01/26/2018
---
# Transformation

## Summary

Office 365 and SharePoint evolve continuously. As new capabilities are added, it might be necessary to update the existing configuration and customizations. Transforming your solutions can help you get more benefit out of using SharePoint and Office 365.

## High-level guideline/general rules

- Get a clear understanding of the model you are migrating to. It is possible, that transforming existing scenarios to new capabilities would yield bigger benefits than mapping existing artifacts to their new equivalents.
- Carefully examine your existing requirements. It is possible, that implementing them in the new model will turn out to be more costly than the benefits they offer.
- Before starting transformation, thoroughly assess your existing environment and solution and decide if everything is still relevant.
- Don't forget to include end-user adoption as a part of the transformation process. Users are used to working in a certain way and might need to be re-educated to work just as efficiently with the new solution.

## Transformation from

### Farm solutions

_**Applies to:** SharePoint Server_

Typically, farm solutions are packaged as SharePoint solution package (WSP) files that contain assemblies, other non-compiled components, and an XML manifest file. A farm administrator uses Windows PowerShell, the STSADM command-line tool, or the SharePoint Central Administration website to install solution packages to the server environment. After a solution package is installed, the farm administrator can activate the solution to a specific Web application (or multiple Web applications, if you use the full-trust model).

#### Related resources

##### Articles

- [Advance SharePoint add-in model development](https://github.com/OfficeDev/TrainingContent/tree/master/O3658)
- [Transform farm solutions to the SharePoint add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/transform-farm-solutions-to-the-sharepoint-app-model)
- [Work with __REQUESTDIGEST](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/basics/working-with-requestdigest)
- [Transformation guidance from farm solutions to add-in model training module](https://github.com/OfficeDev/TrainingContent/tree/master/SharePoint/AddIns/14%20Transformation%20guidance%20from%20farm%20solutions%20to%20add-in%20model)
- [SharePoint Add-ins](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/sharepoint-add-ins)
- [SharePoint Add-in recipes](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/sharepoint-add-in-recipes)

##### Videos

- [Introduction to PnP Transformation Process](https://channel9.msdn.com/blogs/OfficeDevPnP/Introduction-to-PnP-Transformation-Process)
- [PnP Webcast - Transforming customizations to SharePoint Online](https://www.youtube.com/watch?v=iB-kZ3LSZDM)
- [Build client-side web parts with the  SharePoint Framework](https://www.youtube.com/watch?v=loPY6LfxIvQ)
- [PnP Webcast - Introduction to SharePoint Webhooks](https://www.youtube.com/watch?v=j3hWCAI9R20)
- [PnP Add-In Transformation Training module 1: Introduction](https://channel9.msdn.com/blogs/OfficeDevPnP/PnP-Add-In-Transformation-Training-module-1-Introduction)
- [PnP Add-in Transformation Training Module 10: Transformation guidance from farm solutions to add-in model](https://channel9.msdn.com/blogs/OfficeDevPnP/PnP-Add-in-Transformation-Training-Module-10-Transformation-Guideance-from-Farm-Solutions)

##### Samples

- [PnP-Transformation GitHub repository](https://github.com/SharePoint/PnP-Transformation)
- [SharePoint Web Hooks Azure AD reference implementation](https://github.com/SharePoint/sp-dev-samples/tree/master/Samples/WebHooks.List.AzureAD)
- [SharePoint Web Hooks reference implementation](https://github.com/SharePoint/sp-dev-samples/tree/master/Samples/WebHooks.List)
- [Generic React app for modern web development](https://github.com/SharePoint/sp-dev-samples/tree/master/Samples/react-generic-app)
- [A Series of Visual Studio Solutions to Accompany the MSDN Tutorial Series about Provider-hosted Add-ins](https://github.com/OfficeDev/SharePoint_Provider-hosted_Add-ins_Tutorials)

##### Tools

- [PowerShell to enable site collection creation with CSOM](https://github.com/SharePoint/PnP-Tools/tree/master/Scripts/SharePoint.SiteColProvisioning.Configuration)

##### Solutions

- [PnP Partner Pack v. 2.0 (January 2018)](https://github.com/SharePoint/PnP-Partner-Pack)

### Script- and Content editor web parts

_**Applies to:** Office 365 and SharePoint Server_

Script- and Content Editor Web Parts are used to build SharePoint customizations primarily by citizen developers. With nothing more than site owner permissions, citizen developers can build compelling SharePoint customizations that add business value. Whenever the customization needs to be updated, users with the necessary permissions can apply updates to the solution's script files and the changes are immediately visible to all users.

Script- and Content Editor web part solutions make it hard for IT organizations to keep track of what customizations are being used and where they are being used. Additionally, organizations can't tell which external scripts are being used in their intranet and have access to their data.

#### Related resources

##### Articles

- [Migrate existing Script Editor web part customizations to the SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/guidance/migrate-script-editor-web-part-customizations)
- [Migrate jQuery and DataTables solution built using Script Editor web part to SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/guidance/migrate-jquery-datatables-script-to-spfx)

##### Videos

- [Build client-side web parts with the  SharePoint Framework](https://www.youtube.com/watch?v=loPY6LfxIvQ)
- [PnP Webcast - Converting existing JS apps to SharePoint Framework](https://www.youtube.com/watch?v=45FMWyv5P5A)
- [PnP Webcast – Reuse your existing JavaScript libraries with SharePoint Framework](https://www.youtube.com/watch?v=ctfLsesx-ZI)

##### Samples

- [SharePoint Framework client-side web part samples & tutorial materials](https://github.com/SharePoint/sp-dev-fx-webparts)
- [Generic React app for modern web development](https://github.com/SharePoint/sp-dev-samples/tree/master/Samples/react-generic-app)

##### Tools

- [PnPJS](https://github.com/SharePoint/PnP-JS-Core)

### Sandboxed solutions

_**Applies to:** Office 365 and SharePoint Server_

Code-based sandbox solutions [were deprecated](https://blogs.msdn.microsoft.com/sharepointdev/2014/01/14/deprecation-of-custom-code-in-sandboxed-solutions/) back in 2014 and SharePoint online has started the process to completely remove this capability. Code-based sandbox solutions are also deprecated in SharePoint 2013 and in SharePoint 2016.

When you deactivate your existing sandbox solution from your sites, any assets or files deployed using declarative options will not be removed however, the features in the sandbox solution will automatically be deactivated and the event receiver will be removed.

#### Related resources

##### Articles

- [Sandbox solution transformation guidance](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/sandbox-solution-transformation-guidance)
- [Remove the assembly reference from your Sandbox solution created in Visual Studio](https://support.microsoft.com/en-us/help/3183084/remove-the-assembly-reference-from-your-sandbox-solution-created-in-vi)

##### Videos

- [SharePoint Sandbox Solution Scanner](https://www.youtube.com/watch?v=pK4p2mGYXpU)
- [PnP Webcast - Introduction to SharePoint Webhooks](https://www.youtube.com/watch?v=j3hWCAI9R20)

##### Samples

- [SharePoint Web Hooks Azure AD reference implementation](https://github.com/SharePoint/sp-dev-samples/tree/master/Samples/WebHooks.List.AzureAD)
- [SharePoint Web Hooks reference implementation](https://github.com/SharePoint/sp-dev-samples/tree/master/Samples/WebHooks.List)
- [Generic React app for modern web development](https://github.com/SharePoint/sp-dev-samples/tree/master/Samples/react-generic-app)

##### Tools

- [Sandbox solutions inventory script for SharePoint Online](https://github.com/SharePoint/PnP-Tools/tree/master/Scripts/SharePoint.Sandbox.ListSolutionsFromTenant)
- [SharePoint Sandbox Solution scanner](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.SandBoxTool)

### JSLink

_**Applies to:** Office 365 and SharePoint Server_

Client-side rendering or JSLink is a concept introduced with SharePoint 2013.  With the help of this concept, you can customize the look and feel of SharePoint Out of the box VIEW/ADD/EDIT FORM.

JSLink is a JavaScript file which will override the default view of your list with the help of logically defined in your custom JSLink file. You can include the JSLink JavaScript file under the Miscellaneous section of your list view web part.

JSLink works only with the classic SharePoint experience and cannot be reused with the modern SharePoint UI.

#### Related resources

##### Articles

- [Migrating JSLink customizations to SharePoint Framework Field Customizers](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/guidance/migrate-jslink-to-spfx-extensions)
- [Migrating from JSLink to SharePoint Framework Extensions (tutorial)](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/guidance/migrate-from-jslink-to-spfx-extensions)

##### Samples

- [SharePoint Framework Extensions samples & tutorial materials](https://github.com/SharePoint/sp-dev-fx-extensions)
- [SharePoint Column Formatting Samples](https://github.com/SharePoint/sp-dev-column-formatting)

### Custom actions

_**Applies to:** Office 365 and SharePoint Server_

#### Related resources

##### Articles

- [Migrating from Edit Control Block (ECB) menu item to SharePoint Framework Extensions](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/guidance/migrate-from-ecb-to-spfx-extensions)
- [Migrating user custom actions and ECB menu items to SharePoint Framework Extensions](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/guidance/migrate-user-customactions-to-spfx-extensions)
- [Migrating from UserCustomAction to SharePoint Framework Extensions (tutorial)](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/guidance/migrate-from-usercustomactions-to-spfx-extensions)

##### Videos

- [PnP Webcast - Migrating to SharePoint Framework Extensions](https://www.youtube.com/watch?v=bbspCee-9Ng)

##### Samples

- [SharePoint Framework Extensions samples & tutorial materials](https://github.com/SharePoint/sp-dev-fx-extensions)

### Custom forms

_**Applies to:** Office 365 and SharePoint Server_

#### Related resources

##### Articles

- [Sandbox solution transformation guidance - InfoPath](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/sandbox-solution-transformation-guidance-infopath)

##### Samples

- [SharePoint Framework client-side web part samples & tutorial materials](https://github.com/SharePoint/sp-dev-fx-webparts)