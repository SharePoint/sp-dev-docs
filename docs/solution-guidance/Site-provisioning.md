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

### Articles
* []()
* []()
* []()
* []()
* []()

### Samples
* []()
* []()
* []()
* []()
* []()

### Solutions
* []()
* []()
* []()
* []()
* []()

### Videos
* []()
* []()
* []()
* []()
* []()

### Web templates

_**Applies to:** Office 365 | SharePoint Server 2016 | SharePoint Server 2013_

### Articles
* []()
* []()
* []()
* []()
* []()

### Samples
* []()
* []()
* []()
* []()
* []()

### Solutions
* []()
* []()
* []()
* []()
* []()

### Videos
* []()
* []()
* []()
* []()
* []()

### Site definitions (onet.xml)

_**Applies to:** Office 365 | SharePoint Server 2016 | SharePoint Server 2013_

### Articles
* []()
* []()
* []()
* []()
* []()

### Samples
* []()
* []()
* []()
* []()
* []()

### Solutions
* []()
* []()
* []()
* []()
* []()

### Videos
* []()
* []()
* []()
* []()
* []()

### Site template (.stp)

_**Applies to:** Office 365 | SharePoint Server 2016 | SharePoint Server 2013_

### Articles
* []()
* []()
* []()
* []()
* []()

### Samples
* []()
* []()
* []()
* []()
* []()

### Solutions
* []()
* []()
* []()
* []()
* []()

### Videos
* []()
* []()
* []()
* []()
* []()

### List definitions

_**Applies to:** Office 365 | SharePoint Server 2016 | SharePoint Server 2013_

### Articles
* []()
* []()
* []()
* []()
* []()

### Samples
* []()
* []()
* []()
* []()
* []()

### Solutions
* []()
* []()
* []()
* []()
* []()

### Videos
* []()
* []()
* []()
* []()
* []()

### List templates

_**Applies to:** Office 365 | SharePoint Server 2016 | SharePoint Server 2013_

### Articles
* []()
* []()
* []()
* []()
* []()

### Samples
* []()
* []()
* []()
* []()
* []()

### Solutions
* []()
* []()
* []()
* []()
* []()

### Videos
* []()
* []()
* []()
* []()
* []()

### Feature stapling

_**Applies to:** Office 365 | SharePoint Server 2016 | SharePoint Server 2013_

### Articles
* []()
* []()
* []()
* []()
* []()

### Samples
* []()
* []()
* []()
* []()
* []()

### Solutions
* []()
* []()
* []()
* []()
* []()

### Videos
* []()
* []()
* []()
* []()
* []()

### One-time setup

_**Applies to:** Office 365 | SharePoint Server 2016 | SharePoint Server 2013_

### Articles
* []()
* []()
* []()
* []()
* []()

### Samples
* []()
* []()
* []()
* []()
* []()

### Solutions
* []()
* []()
* []()
* []()
* []()

### Videos
* []()
* []()
* []()
* []()
* []()

<a name="SiteCollectionVsSite"></a>
## Site collections vs. sub sites
