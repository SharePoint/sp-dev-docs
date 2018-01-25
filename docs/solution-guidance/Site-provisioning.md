# Site Provisioning

## Summary
Site provisioning is a highly requested capability in the fields of SharePoint customization. In fact, most of the companies have the functional requirement to make it possible for qualified end-users to create sites based on templates, so that they can re-use the same information architecture, the same branding, and the same User Experience, across multiple sites.
Just for the sake of making an example, think about having a "project site" template, that you can use to create a site dedicated to every single project you work on. And the same approach applies for site targeting customers, suppliers, etc. However, it is also fundamental to have a provisioning technique that allows you to easily provision sites based on templates, and which potentially provides life cycle management of templates. In fact, if you update a template that you already used to create sites, it would be really helpful to be able to update all the existing site instances, based on that updated template.
Nowadays there are many techniques to provision sites and their information architecture, and in this article you will find a list of the most interesting ones, divided by target platform. 

## High-level guideline/general rules
Here follow some general high-level guidelines and rules that matter whenever you need to provision a site.
* Try to isolate the Information Architecture (IA) from the other stuff like branding, custom content, UI elements, etc. so that you can do proper maintenance of the IA, independently from the other elements.
* Within the Information Architecture define Site Columns and Content Types at the Site Collection level only, and reuse them in any sub Site of the Site Collection, rather than having Site Columns and Content Types defined at the sub Site level. 
> [!NOTE] For further details about Site Collections vs. sub Sites, please read the [dedicated section in this document](#SiteCollectionVsSite).
* Avoid renaming or changing out-of-the-box artifacts, prefer using custom elements instead.
* Try to use a provisioning technique that is open to versioning of artifacts and life cycle management of the templates, in order to support customers' requests on the go.

## Available options

### Remote provisioning

_**Applies to:** Office 365 | SharePoint Server 2016 | SharePoint Server 2013_

The Remote provisioning technique relies on using remote technologies like CSOM or REST API to provisiong artifacts, settings, and branding elements. The key feature of this approach is that you can provision a site from any remote service or environment, without the need to run your code on the SharePoint farm. You can leverage this technique in any kind of solution like SharePoint Add-Ins, SharePoint Remote Timer Jobs, Azure Functions, Azure Web Jobs, PowerShell, etc.
It can be used both in SharePoint 2013/2016 on-premises, and in SharePoint Online.

### Articles
* [Site provisioning in the SharePoint add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/site-provisioning-sharepoint-add-in)
* [Site provisioning techniques and remote provisioning in SharePoint 2013](https://blogs.msdn.microsoft.com/vesku/2013/08/23/site-provisioning-techniques-and-remote-provisioning-in-sharepoint-2013/)
* [Create SharePoint content types by using CSOM](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/create-sharepoint-content-types-by-using-csom)
* [Modify SharePoint site permissions and get external sharing status](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modify-sharepoint-site-permissions-and-get-external-sharing-status)
* [Manage SharePoint users and groups](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/manage-sharepoint-users-and-groups)

### Samples
* [Asynchronous site collection creation with WebJob](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Cloud.Async.WebJob)
* [Creating Content Types](https://github.com/SharePoint/PnP/tree/master/Samples/Core.CreateContentTypes)
* [Provision sites in batches with the add-in model](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Batch)
* [Use workflow to provision a SharePoint site (add-in web)](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Cloud.Workflow.AppWeb)
* [Use workflow to provision a SharePoint site (host web)](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Cloud.Workflow)

### Videos
* [SharePoint 2013 Remote Provisioning](https://www.youtube.com/watch?v=Jh7syofhNkg)

### PnP Provisioning Engine

_**Applies to:** Office 365 | SharePoint Server 2016 | SharePoint Server 2013_

The PnP Provisioning Engine is an open source engine provided by the [PnP community project](http://aka.ms/SharePointPnP), which allows to leverage the remote provisioning technique reusing a rich set of ready to go capabilities. Instead of reinventing the wheel, you can just use the PnP Provisioning Engine and provision your Information Architecture using this engine. The PnP Provisioning Engine is available as a .NET library that you can reference in your own projects, as well as through a set of PowerShell command lets, if you need to automate the remote provisioning using scripts.
One of the killer features of the PnP Provisioning Engine is the fact that you can export a template from a live site, and apply that template onto another target site. Thus, it is a very powerfull solution to move the Information Architecture from development, to staging, and to production.
Moreover, the PnP Provisioning Engine supports versioning and delta handling, so you can use the engine to update the IA already created sites.

### Articles
* [Introducing the PnP Provisioning Engine](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/introducing-the-pnp-provisioning-engine)
* [PnP provisioning engine and the core library](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/pnp-provisioning-engine-and-the-core-library)

### Samples
* [Getting started with the PnP Provisioning engine](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Framework.Console)
* [PnP Provisioning Engine - Self-service site collection provisioning](https://github.com/SharePoint/PnP/tree/master/Solutions/Provisioning.Framework.Cloud.Async)
* [Create "modern" site collections](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Cloud.Modern.Async)

### Solutions
* [PnP Partner Pack v. 2.0](https://github.com/SharePoint/PnP-Partner-Pack)
* [PnP Provisioning - Self service site collection provisioning reference implementation](https://github.com/SharePoint/PnP/tree/master/Solutions/Provisioning.UX.App)

### Videos
* [Getting started with the PnP Provisioning Engine in .NET](https://www.youtube.com/watch?v=kRbrrGCfUtE)
* [Getting Started with PnP Provisioning Engine](https://channel9.msdn.com/blogs/OfficeDevPnP/Getting-Started-with-PnP-Provisioning-Engine)
* [Introduction to Office 365 Dev PnP Provisioning Engine](https://channel9.msdn.com/blogs/OfficeDevPnP/PnP-Web-Cast-Introduction-to-Office-365-Dev-PnP-provisioning-engine)
* [Save, download, and upload a SharePoint site as a template](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/save-download-and-upload-a-sharepoint-site-as-a-template)

### Web templates

_**Applies to:** SharePoint Server 2016 | SharePoint Server 2013_

If you are on-premises, you can use Visual Studio to create a .WSP package which defines a Web Template, or you can even save a site as a template and use the generated .WSP file.
It is a provisioning technique that relies on the SharePoint Feature Framework, and which stores the .WSP in the solution gallery of any target Site Collection.
It's a technique to create a new site based on the Information Architecture of an already existing site.

### Articles
* [Web Templates](https://msdn.microsoft.com/en-us/library/aa979709(v=office.14).aspx)
* [SharePoint 2010 and web templates](https://blogs.msdn.microsoft.com/vesku/2010/10/14/sharepoint-2010-and-web-templates)
* [Save, download, and upload a SharePoint site as a template](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/save-download-and-upload-a-sharepoint-site-as-a-template)
* [Site definitions vs. Web templates](https://blogs.msdn.microsoft.com/vesku/2011/07/22/site-definitions-vs-web-templates/)

### Site definitions

_**Applies to:** SharePoint Server 2016 | SharePoint Server 2013_

The Site Definitions, based on a onet.xml file, are another option that you have on-premises. They leverage some XML files based on the SharePoint Feature Framework grammar, and stored in the local path of servers in a SharePoint farm.
They are always deployed farm-wide, and don't provide any supported way of upgrading or modifying already provisioned sites. Because of their architecture and requirements, they target SharePoint on-premises only.

### Articles
* [Site Definitions and Configurations](https://msdn.microsoft.com/en-us/library/aa978512(v=office.14).aspx)
* [Site definitions vs. Web templates](https://blogs.msdn.microsoft.com/vesku/2011/07/22/site-definitions-vs-web-templates/)
* [Understanding Onet.xml Files](https://msdn.microsoft.com/en-us/library/ms474369(v=office.14).aspx)
* [How to: Create a Custom Site Definition and Configuration](https://msdn.microsoft.com/en-us/library/ms454677(v=office.14).aspx)

### List definitions

_**Applies to:** SharePoint Server 2016 | SharePoint Server 2013_

List definitions allow you to define a list template that you can reuse to create multiple list instances, based on that definition. They are based on SharePoint Feature Framework. You can create them by defining .WSP markup-only Sandboxed Solutions. However, they rely on an old technique, which is not well maintainable from a Lifecycle Management perspective, and you should prefer Remote Provisioning techniques, instead.

### Articles
* [How to: Create a Custom List Definition](https://msdn.microsoft.com/en-us/library/ms466023%28v=office.14%29.aspx)
* [List instance in the SharePoint add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/list-instance-sharepoint-add-in)

### Samples
* [ECM.DocumentLibraries](https://github.com/SharePoint/PnP/tree/master/Samples/ECM.DocumentLibraries)

### List templates

_**Applies to:** SharePoint Server 2016 | SharePoint Server 2013_

List templates target on-premises only and leverage a .STP template file that you can upload into the *List Templates* gallery of a site, and use to create multiple instances of lists based on a common list template. The List templates are an old technique, which work on SharePoint on-premises only, and that shouldn't be used anymore because could represent a road block for migrating to the cloud and to SharePoint Online.

### Articles
* [List definition / list template in the SharePoint add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/list-definition-template-sharepoint-add-in)

### Samples
* [ECM.DocumentLibraries](https://github.com/SharePoint/PnP/tree/master/Samples/ECM.DocumentLibraries)

### Videos
* [Document and list templates with app model](https://channel9.msdn.com/blogs/OfficeDevPnP/Document-and-list-templates-with-app-model)

### Feature stapling

_**Applies to:** SharePoint Server 2016 | SharePoint Server 2013_

The Feature stapling capability can be used on-premises to customize existing site definitions. You can use Feature stapling to provide additional artifacts or functionalities to site templates, without changing the onet.xml file of the original site definition. It is an "old" technique, which still works on-premises, but that shouldn't be used in new solutions. In fact it is a blocker for migrating customizations to the cloud and to SharePoint Online.
On the contrary, you should rely on more modern approaches, like using the Remote Provisioning within a SharePoint Add-In or an Office 365 Application.

### Articles
* [SharePoint 2010 and web templates](https://blogs.msdn.microsoft.com/vesku/2010/10/14/sharepoint-2010-and-web-templates)
* [Feature Stapling in the SharePoint add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/feature-stapling-sharepoint-add-in)

### Samples
* [Creating sub sites using an add-in for SharePoint](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.SubSiteCreationApp)

<a name="SiteCollectionVsSite"></a>
## Site collections vs. sub sites
