# Development models

## Summary
Developing solutions for Microsoft SharePoint Online and/or on-premises can rely on multiple development models. Based on what is your target platform, and what is your target scenario, you can select one or more of the models that are illustrated in this article.

## Available options

### SharePoint Framework
<a name="SharePointFramework"></a>

_**Applies to:** Office 365 | SharePoint Online | SharePoint 2016 FP2_

The SharePoint Framework (SPFx) is a page and web part model that provides full support for client-side SharePoint development, easy integration with SharePoint data, and support for open source tooling. With the SharePoint Framework, you can use modern web technologies and tools in your preferred development environment to build productive experiences and apps that are responsive and mobile-ready from day one. The SharePoint Framework works for SharePoint Online and for on-premises (SharePoint 2016 Feature Pack 2). At the time of this writing, with the SharePoint Framework you can build client-side Web Parts, and client-side Extensions.

### Articles
* [Overview of the SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview)
* [Overview of SharePoint client-side web parts](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/overview-client-side-web-parts)
* [Overview of SharePoint Framework Extensions](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/overview-extensions)
* [SharePoint Framework (SPFx) enterprise guidance](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/enterprise-guidance)
* [SharePoint Framework roadmap](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/roadmap)

### Samples
* [SharePoint Framework client-side web part samples & tutorial materials](https://github.com/SharePoint/sp-dev-fx-webparts)
* [SharePoint Framework Extensions samples & tutorial materials](https://github.com/SharePoint/sp-dev-fx-extensions)

### Tools
* [SharePoint Framework React Controls](https://github.com/SharePoint/sp-dev-fx-controls-react)
* [Property controls for the SharePoint Framework solutions](https://github.com/SharePoint/sp-dev-fx-property-controls)

### Videos
* [SharePoint Framework - Tutorials](https://www.youtube.com/playlist?list=PLR9nK3mnD-OXvSWvS2zglCzz4iplhVrKq)
* [SharePoint Framework Extensions - Tutorials](https://www.youtube.com/playlist?list=PLR9nK3mnD-OXtWO5AIIr7nCR3sWutACpV)
* [Reusable controls for your SharePoint Framework solutions](https://www.youtube.com/watch?v=D0ZOgoSpy28)

### SharePoint Add-Ins

_**Applies to:** SharePoint 2013 | SharePoint 2016 | SharePoint Online_

The SharePoint Add-In model is a development model for SharePoint Online and SharePoint 2013/2016 on-premises. The main goal of this model is to make developers able of customizing and extending SharePoint sites without the need of having full trust access to the target farm, being able to work remotely with client-side code, which is based on the Client Side Object Model (CSOM) and the REST API of SharePoint. This goal adheres perfectly to the cloud offering model and philosophy. Users can discover and download SharePoint Add-ins from a public SharePoint add-in store or from their organization's corporate add-in catalog. With the SharePoint Add-In model you can create SharePoint-hosted and provider-hosted solutions. The former are just client-side and JavaScript based applications, hosted in SharePoint. The latter tipically are .NET applications hosted on Microsoft Azure, or on any other hosting platform. With the SharePoint Add-In model you can create:
* Full-page solutions: an immersive full-page experience that can have the look and feel of a SharePoint page.
* App-Parts: parts of a webpage, using a special kind of control called an add-in part, to surface an iframe element that contains the add-in.
* UI Custom Actions: UI commands that extend ribbons and menus for lists, documents, and more.

Moreover, a SharePoint Add-in can include classic SharePoint components such as lists, custom website pages, Web Parts, workflows, content types, and many other artifacts. 

### Articles
* [SharePoint Add-ins](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/sharepoint-add-ins)
* [SharePoint Add-ins compared with SharePoint solutions](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/sharepoint-add-ins-compared-with-sharepoint-solutions)
* [Transform farm solutions to the SharePoint add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/transform-farm-solutions-to-the-sharepoint-app-model)

### Samples
* [SharePoint Patterns and Practices Samples](https://github.com/SharePoint/PnP/tree/master/Samples)

### Solutions
* [SharePoint Patterns and Practices Solutions](https://github.com/SharePoint/PnP/tree/master/Solutions)

### Videos
* [PnP Add-In Transformation Training](https://channel9.msdn.com/blogs/OfficeDevPnP/PnP-Add-In-Transformation-Training-module-1-Introduction)

### Sandboxed Solutions

_**Applies to:** SharePoint Online | SharePoint 2013 | SharePoint 2016_

A sandboxed solution enables site collection administrators to install custom solutions in Microsoft SharePoint without the involvement of a higher level administrator. However, this freedom requires that sandboxed solutions be limited in what they can deploy, what code they can execute, and what resources they can access. Code-based sandbox solutions were deprecated back in 2014 and in SharePoint Online this capability was completely removed. Code-based sandbox solutions are also deprecated in SharePoint 2013 and in SharePoint 2016, even if there you can still create them. However, be careful that any code-based sandboxed solution could be a road blocker for migrating to SharePoint Online.

### Articles
* [Sandboxed Solutions in SharePoint 2010](https://msdn.microsoft.com/en-us/library/office/ee536577.aspx)
* [Sandboxed Solutions Architecture in SharePoint 2010](https://msdn.microsoft.com/en-us/library/office/ee539417.aspx)
* [Removing Code-Based Sandbox Solutions in SharePoint Online](https://dev.office.com/blogs/removing-code-based-sandbox-solutions-in-sharepoint-online)
* [Sandbox solution transformation guidance](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/sandbox-solution-transformation-guidance)

### Solutions
* [SharePoint Sandbox Solution scanner](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.SandBoxTool)

### Videos
* [SharePoint Sandbox Solution Scanner](https://www.youtube.com/watch?v=pK4p2mGYXpU)

### Farm Solutions

_**Applies to:** SharePoint 2013 | SharePoint 2016_

SharePoint Farm Solutions are trusted SharePoint extensions whose custom logic calls the SharePoint server object model and runs with full trust on the SharePoint servers. These solutions are primarily for custom administrative extensions of SharePoint, such as timer jobs, custom Windows PowerShell commands, and extensions of Central Administration. Farm Solutions are distributed as SharePoint solution packages that farm administrators upload to a farm-wide storage location from which they can be deployed. Components in Farm Solutions can have farm, web application, site collection, or website scope. The Farm Solutions are supported in SharePoint on-premises only.

### Articles
* [Build farm solutions in SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/build-farm-solutions-in-sharepoint)
* [SharePoint Add-ins compared with SharePoint solutions](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/sharepoint-add-ins-compared-with-sharepoint-solutions)

### Script Editor Web Part

_**Applies to:** SharePoint Online | SharePoint 2013 | SharePoint 2016_

A very common habit in the ages between 2013 and 2017 was to use the Script Editor Web Part to embed any custom JavaScript code into SharePoint pages. The goal of such kind of technique is to run custom client-side code in the context of the current user within the current SharePoint page. You can use external JavaScript libraries, and host your custom code in SharePoint, without the need for an external hosting environment. However, with the new "modern" sites of SharePoint Online, Microsoft introduced the "no-script" flag, which blocks such kind of solutions. Moreover any custom code hosted within the Script Editor Web Part does not have any kind of maintenance capability, governance, or lifecycle management. That's why starting from 2017 Microsoft introduced the [SharePoint Framework](#SharePointFramework) model, which is similar to the Script Editor Web Part, but works in the "modern" UI and supports the no-script flag.

### Articles
* [Migrate existing Script Editor Web Part customizations to the SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/guidance/migrate-script-editor-web-part-customizations)


