# Site Provisioning

## Summary
Site provisioning is a highly requested capability in the fields of SharePoint customization. In fact, most of the companies have the functional requirement to make it possible for qualified end-users to create sites based on templates, so that they can reuse the same information architecture, the same branding, and the same User Experience, across multiple sites.
From a developer perspective you need to make it possible to programmatically create sites, and too programmatically provision a custom Information Architecture (IA) on those sites.

Just for the sake of making an example, think about having a "project site" template, that you can use to create a site dedicated to every single project you work on. And the same need applies to sites targeting customers, suppliers, etc. 

However, it is also fundamental to have a provisioning technique that allows you to easily provision sites based on templates, and which potentially provides life cycle management of those templates. In fact, if you update a template that you already used to create sites, it would be really helpful to be able to update all the existing site instances, based on that updated template.

Nowadays there are many techniques to provision sites and their Information Architecture, and in this article you will find a list of the most interesting ones, together with their target platform. 

## High-level guideline/general rules
Here follow some general high-level guidelines and rules that matter whenever you need to provision a site.
* Try to isolate the Information Architecture from the other elements like branding, custom content, UI elements, etc. so that you can do proper maintenance of the IA, independently from the other elements.
* Within the Information Architecture define Site Columns and Content Types at the Site Collection level only, and reuse them in any sub Site of the Site Collection, rather than having Site Columns and Content Types defined at the sub Site level. 
> [!NOTE]
> For further details about Site Collections vs. Sub Sites, please read the [dedicated section in this document](#SiteCollectionVsSite).
* Avoid renaming or changing out-of-the-box artifacts, prefer using custom elements instead. For example, avoid renaming the *Title* field of any content type, because this could lead to unpredictable issues, considering that the existence of the *Title* field is often assumed as a guarantee by developers.
* Try to use a provisioning technique that is open to versioning of artifacts and life cycle management of the templates, in order to support customers' requests on the go.

## Available options

### Remote provisioning

_**Applies to:** Office 365 | SharePoint Server 2016 | SharePoint Server 2013_

The Remote provisioning technique relies on using remote technologies like CSOM or REST API to provisiong artifacts, settings, and branding elements. The key feature of this approach is that you can provision a site from any remote service or environment, without the need to run your code on the SharePoint farm. You can leverage this technique in any kind of solution like SharePoint Add-Ins, SharePoint Remote Timer Jobs, Azure Functions, Azure Web Jobs, PowerShell, etc.
It can be used both in SharePoint 2013/2016 on-premises, and in SharePoint Online.

### Articles
* [Site provisioning in the SharePoint Add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/site-provisioning-sharepoint-add-in)
* [Site provisioning techniques and remote provisioning in SharePoint 2013](https://blogs.msdn.microsoft.com/vesku/2013/08/23/site-provisioning-techniques-and-remote-provisioning-in-sharepoint-2013/)
* [Create SharePoint content types by using CSOM](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/create-sharepoint-content-types-by-using-csom)

### Samples
* [Asynchronous site collection creation with WebJob](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Cloud.Async.WebJob)
* [Provision sites in batches with the add-in model](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Batch)
* [Use workflow to provision a SharePoint site (add-in web)](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Cloud.Workflow.AppWeb)
* [Use workflow to provision a SharePoint site (host web)](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Cloud.Workflow)

### Videos
* [SharePoint 2013 Remote Provisioning](https://www.youtube.com/watch?v=Jh7syofhNkg)

### PnP provisioning engine

_**Applies to:** Office 365 | SharePoint Server 2016 | SharePoint Server 2013_

The PnP provisioning engine is an open source engine provided by the [PnP community project](http://aka.ms/SharePointPnP), which allows to leverage the remote provisioning technique reusing a rich set of ready to go capabilities. Instead of reinventing the wheel, you can just use the PnP provisioning engine and provision your Information Architecture using this engine. The PnP provisioning engine is available as a .NET library that you can reference in your own projects, as well as through a set of PowerShell command lets, if you need to automate the remote provisioning using scripts.
One of the killer features of the PnP provisioning engine is the fact that you can export a template from a live site, and apply that template onto another target site, that you have to create prior to apply the template. Thus, it is a very powerfull solution to move the Information Architecture from development, to staging, and to production.
Moreover, the PnP provisioning engine supports versioning and delta handling, so you can use the engine to update the IA of already created sites.
The PnP provisioning engine can target both classic sites, as well as modern sites.

### Articles
* [Introducing the PnP provisioning engine](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/introducing-the-pnp-provisioning-engine)
* [PnP provisioning engine and the core library](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/pnp-provisioning-engine-and-the-core-library)

### Samples
* [Getting started with the PnP provisioning engine](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Framework.Console)
* [PnP provisioning engine - Self-service site collection provisioning](https://github.com/SharePoint/PnP/tree/master/Solutions/Provisioning.Framework.Cloud.Async)
* [Create "modern" site collections](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Cloud.Modern.Async)

### Solutions
* [PnP Partner Pack v. 2.0](https://github.com/SharePoint/PnP-Partner-Pack)
* [PnP provisioning - Self service site collection provisioning reference implementation](https://github.com/SharePoint/PnP/tree/master/Solutions/Provisioning.UX.App)

### Videos
* [Getting started with the PnP provisioning engine in .NET](https://www.youtube.com/watch?v=kRbrrGCfUtE)
* [Getting Started with PnP provisioning engine](https://channel9.msdn.com/blogs/OfficeDevPnP/Getting-Started-with-PnP-Provisioning-Engine)
* [Introduction to Office 365 Dev PnP provisioning engine](https://channel9.msdn.com/blogs/OfficeDevPnP/PnP-Web-Cast-Introduction-to-Office-365-Dev-PnP-provisioning-engine)

### Web templates

_**Applies to:** SharePoint Server 2016 | SharePoint Server 2013_

If you are on-premises, you can use Visual Studio to create a .WSP package which defines a Web Template, or you can even save a site as a template and use the generated .WSP file.
It is a provisioning technique that relies on the SharePoint Feature Framework, and which stores the .WSP in the solution gallery of any target Site Collection.
It's a technique to create a new site based on the Information Architecture of an already existing site.

### Articles
* [Web Templates](https://msdn.microsoft.com/en-us/library/aa979709%28v=office.14%29.aspx)
* [SharePoint 2010 and web templates](https://blogs.msdn.microsoft.com/vesku/2010/10/14/sharepoint-2010-and-web-templates)
* [Save, download, and upload a SharePoint site as a template](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/save-download-and-upload-a-sharepoint-site-as-a-template)
* [Site definitions vs. Web templates](https://blogs.msdn.microsoft.com/vesku/2011/07/22/site-definitions-vs-web-templates/)

### Site definitions

_**Applies to:** SharePoint Server 2016 | SharePoint Server 2013_

The Site Definitions, based on a onet.xml file, are another option that you have on-premises. They leverage some XML files based on the SharePoint Feature Framework grammar, and stored in the local path of servers in a SharePoint farm.
They are always deployed farm-wide, and don't provide any supported way of upgrading or modifying already provisioned sites. Because of their architecture and requirements, they target SharePoint on-premises only.

### Articles
* [Site Definitions and Configurations](https://msdn.microsoft.com/en-us/library/aa978512%28v=office.14%29.aspx)
* [Site definitions vs. Web templates](https://blogs.msdn.microsoft.com/vesku/2011/07/22/site-definitions-vs-web-templates/)
* [Understanding Onet.xml Files](https://msdn.microsoft.com/en-us/library/ms474369%28v=office.14%29.aspx)
* [How to: Create a Custom Site Definition and Configuration](https://msdn.microsoft.com/en-us/library/ms454677%28v=office.14%29.aspx)

### List definitions

_**Applies to:** SharePoint Server 2016 | SharePoint Server 2013_

List definitions allow you to define a list template that you can reuse to create multiple list instances, based on that definition. They are based on SharePoint Feature Framework. You can create them by defining .WSP markup-only Sandboxed Solutions. However, they rely on an old technique, which is not well maintainable from a Lifecycle Management perspective, and you should prefer Remote Provisioning techniques, instead.

### Articles
* [How to: Create a Custom List Definition](https://msdn.microsoft.com/en-us/library/ms466023%28v=office.14%29.aspx)
* [List instance in the SharePoint Add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/list-instance-sharepoint-add-in)

### Samples
* [ECM.DocumentLibraries](https://github.com/SharePoint/PnP/tree/master/Samples/ECM.DocumentLibraries)

### List templates

_**Applies to:** SharePoint Server 2016 | SharePoint Server 2013_

List templates target on-premises only and leverage a .STP template file that you can upload into the *List Templates* gallery of a site, and use to create multiple instances of lists based on a common list template. The List templates are an old technique, which work on SharePoint on-premises only, and that shouldn't be used anymore, because could represent a road block for migrating to the cloud and to SharePoint Online.

### Articles
* [List definition / list template in the SharePoint Add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/list-definition-template-sharepoint-add-in)

### Samples
* [ECM.DocumentLibraries](https://github.com/SharePoint/PnP/tree/master/Samples/ECM.DocumentLibraries)

### Videos
* [Document and list templates with app model](https://channel9.msdn.com/blogs/OfficeDevPnP/Document-and-list-templates-with-app-model)

### Feature stapling

_**Applies to:** SharePoint Server 2016 | SharePoint Server 2013_

The Feature stapling capability can be used on-premises to customize existing site definitions. You can use Feature stapling to provide additional artifacts or functionalities to site templates, without changing the onet.xml file of the original site definition, rather applying custom features, based on the SharePoint Feature Framework, while creating sites from a specific site definition. It is an "old" technique, which still works on-premises, but that shouldn't be used in new solutions. On the contrary, you should rely on more modern approaches, like using the Remote Provisioning within a SharePoint Add-In or an Office 365 Application.

### Articles
* [SharePoint 2010 and web templates](https://blogs.msdn.microsoft.com/vesku/2010/10/14/sharepoint-2010-and-web-templates)
* [Feature Stapling in the SharePoint Add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/feature-stapling-sharepoint-add-in)

### Samples
* [Creating sub sites using an add-in for SharePoint](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.SubSiteCreationApp)

<a name="SiteCollectionVsSite"></a>
## Site Collections vs. Sub Sites
Whenever you need to provision sites, there is a frequently asked question: "Is it better to create a Site Collection or a Sub Site?"
Actually, very often the answer is "it depends". Nevertheless, here are some information that can help you make a choice:

* Every Site Collection has unique users and permissions, while a sub site can inherit users and permissions from its parent site. Thus, for completely different target users, you should consider creating different Site Collections, rather than different Sub Sites within a unique Site Collection.
* From a SharePoint Online perspecitve, the Sharing feature can be enabled/disabled at Site Collection level, but not at the Sub Site level.
* When you define Site Columns, and Content Types at the Site Collection level, those will be inherited in all the Sub Sites, which is a good behavior leading to a shared Information Architecture across all of the sites of the same Site Collection.
* Sub Sites of the same Site Collection, can share a common hierarchical navigation structure, which improves the overall User Experience.
* From an on-premises perspective, every single Site Collection can be associated with a dedicate database file, which is not the case for a Sub Site, which can only stay in its parent Site Collection database. Thus, you can have more granural backup and maintenance policies at the Site Collection level, rather than at the Sub Site level, as long as you don't use third party management tools.
* From an on-premises perspective, a Site Collection can be easily moved across different database files, while a Sub Site can just follow its parent Site Collection database.
* Having multiple Sub Sites within a Site Collection allows you to leverage the Content Query web part (on-premises or in the classic UI of SharePoint Online) to achieve better data aggregation across sites.