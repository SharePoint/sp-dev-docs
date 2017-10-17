# Branding and site provisioning solutions for SharePoint 2013 and SharePoint Online

The introduction of the Cloud Add-in Model and add-ins for SharePoint provides alternatives to existing, established ways of branding and provisioning SharePoint sites. 

_**Applies to:** Office 365 | SharePoint 2013 | SharePoint Online_

Up to now, you might have used the SharePoint feature framework, site templates, web templates, and site definitions to provision your sites and site collections. The remote provisioning pattern shows you how to create custom add-ins for SharePoint that provision site branding and perform other site provisioning tasks.
The articles in this section provide information about using add-ins for SharePoint to provision and manage site branding, a pattern that is sometimes referred to as remote provisioning.

## What you need to know about SharePoint
<a name="sectionSection0"> </a>

To use the branding and site provisioning capabilities in SharePoint, you'll need to be familiar with the following:

- Key SharePoint terms and concepts.
    
- The hierarchy of SharePoint structural elements.
    
- Types of SharePoint sites and why you would use them.
    
- The file system and content databases, and how they work together.
    
- File customization states and their long-term impact on upgrades.
    
- add-ins for SharePoint.
    
- Client-side programming in SharePoint with the .NET client-side object model (CSOM) and REST APIs.

## Key SharePoint terms and concepts
<a name="sectionSection1"> </a>

The following table lists terms and concepts that are useful to know as you start to work with SharePoint site provisioning and branding with the remote provisioning pattern.

**SharePoint terms and concepts**

|**Term or concept**|**Description**|**For more information**|
|:-----|:-----|:-----|
|app for SharePoint|Lightweight web applications that integrate popular web standards and technologies to extend the capabilities of a SharePoint website by using the Cloud Add-in Model.| [Build add-ins for SharePoint](http://msdn.microsoft.com/library/37727101-0692-4652-a481-e6d6379cf921.aspx)|
|App web|The website from which an add-in is deployed.| [Host webs, add-in webs, and SharePoint components in SharePoint 2013](http://msdn.microsoft.com/library/b791cdf5-8aa2-47fa-bc4c-aee437354759.aspx)|
|Approval workflow|Workflows specific to publishing sites that specifies who approves the publication of a page and when.| [SharePoint 2013 approval workflow](http://blogs.msdn.com/b/thirusrinivasan1/archive/2013/10/31/sharepoint-2013-workflow-calling-a-wcf-service.aspx),  [Get started with workflows in SharePoint 2013](http://msdn.microsoft.com/library/a2643cd7-474d-4e4c-85bb-00f0b6685a1d.aspx)|
|ClientContext|A central object that serves as a "center of gravity" for all SharePoint CSOM and JSOM operations.| [T:Microsoft.SharePoint.Client.ClientContext](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.clientcontext.aspx)|
|Cloud Add-in Model |add-ins for SharePoint are self-contained pieces of functionality that extend the capabilities of a SharePoint website. You can use the Cloud Add-in Model to author and deliver secure, reliable, flexible, and consistent add-ins for SharePoint.| [Overview of add-ins for SharePoint](http://msdn.microsoft.com/library/cd1eda9e-8e54-4223-93a9-a6ea0d18df70.aspx)|
|Content database|Content databases store all content for a site collection, including the following: <ul xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:mtps="http://msdn2.microsoft.com/mtps" xmlns:mshelp="http://msdn.microsoft.com/mshelp" xmlns:ddue="http://ddue.schemas.microsoft.com/authoring/2003/5" xmlns:msxsl="urn:schemas-microsoft-com:xslt"><li><p>Site documents and files in document libraries</p></li><li><p>List data</p></li><li><p>Web Part properties</p></li><li><p>User names and rights</p></li></ul>| [Database types and descriptions](https://technet.microsoft.com/en-us/library/cc678868.aspx)|
|CSOM|Client-side object model. A model for writing client-side code for SharePoint using the .NET Framework.| [Get started using the client object model with external data in SharePoint 2013](http://msdn.microsoft.com/library/8ed91929-fdb6-4fde-ba2a-7942870575f3.aspx)<br/>[[MS-CSOM]: SharePoint Client Query Protocol](https://msdn.microsoft.com/en-us/library/dd912094%28v=office.15%29.aspx)<br/>[SharePoint 2013 .NET Server, CSOM, JSOM, and REST API index](http://msdn.microsoft.com/library/fddbb75f-9f6c-46d3-8d95-1d4a5e791dfa.aspx)|
|Hive|SharePoint's physical files; the files in the file system. These files are distinct from content stored in a content database. The following is the location of the hive. `%program files%/Common Files/Microsoft Shared/Web Server Extensions/15/`||
|Host web|The website on which an add-in is installed.| [Host webs, add-in webs, and SharePoint components in SharePoint 2013](http://msdn.microsoft.com/library/b791cdf5-8aa2-47fa-bc4c-aee437354759.aspx)|
|OneDrive for Business|A personal library for storing and organizing work documents that are shareable within your organization.| [OneDrive for Business is different from OneDrive](https://support.office.microsoft.com/en-us/article/What-is-OneDrive-for-Business-187f90af-056f-47c0-9656-cc0ddca7fdc2?CorrelationId=2ac1e496-1807-483a-a39f-c1a460efc7af&amp;ui=en-US&amp;rs=en-US&amp;ad=US#differences) [OneDrive for Business is different from your team site](https://support.office.microsoft.com/en-us/article/Should-I-save-my-documents-to-OneDrive-for-Business-or-a-team-site-d18d21a0-1f9f-4f6c-ac45-d52afa0a4a2e?CTT=5&amp;origin=HA102822076&amp;CorrelationId=e3a0512c-ab5f-4ae7-a58f-e33878242936&amp;ui=en-US&amp;rs=en-US&amp;ad=US)|
|Remote provisioning|A model that provisions sites by using templates and code that runs outside SharePoint in a provider-hosted add-in.| [Site provisioning techniques and remote provisioning in SharePoint 2013](http://blogs.msdn.com/b/vesku/archive/2013/08/23/site-provisioning-techniques-and-remote-provisioning-in-sharepoint-2013.aspx)<br/>[Self-service site provisioning using add-ins for SharePoint 2013](http://blogs.msdn.com/b/richard_dizeregas_blog/archive/2013/04/04/self-service-site-provisioning-using-apps-for-sharepoint-2013.aspx)|
|REST| A stateless architectural style that abstracts architectural elements and uses HTTP verbs to read and write data from webpages that contain XML files.| [How to: Set custom permissions on a list by using the REST interface](http://msdn.microsoft.com/library/d5fcc26c-4e44-404b-aacf-e9351af8cc7d.aspx)|
|Root web|The first web inside of a site collection. The root web is also sometimes referred to as the "Web Application Root." ||
|SharePoint Online|Cloud-based SharePoint offering in Office 365. | [SharePoint Online General Reference](https://msdn.microsoft.com/en-us/library/office/gg271151%28v=office.14%29.aspx#sectionSection0)|
|Site|A group of sites that share the same owner and administrative settings, such as permissions.| [T:Microsoft.SharePoint.Client.Web](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.web.aspx)|
|Site collection|A group of sites that share the same owner and administrative settings, such as permissions.| [Create a site collection in SharePoint 2013](https://technet.microsoft.com/en-us/library/cc263094.aspx)|
|Site provisioning|A process for equipping sites with the features, structure, brand, and other functionality.| [Site provisioning techniques and remote provisioning in SharePoint 2013](http://blogs.msdn.com/b/vesku/archive/2013/08/23/site-provisioning-techniques-and-remote-provisioning-in-sharepoint-2013.aspx) [Self-service site provisioning using add-ins for SharePoint 2013](http://blogs.msdn.com/b/richard_dizeregas_blog/archive/2013/04/04/self-service-site-provisioning-using-apps-for-sharepoint-2013.aspx)|
|Subsite|A single SharePoint site in a SharePoint site collection. A subsite can inherit navigation and permissions from a parent site, or it can have unique permissions and navigation. You can create subsites that are based on the root site collection, or sites based on other site collections. You can choose to inherit permissions from the site collection or specify unique permissions for the subsite.||

## Hierarchy of SharePoint structural elements
<a name="sectionSection2"> </a>

Conceptually, the hierarchy of SharePoint objects is expressed in terms of containers: the types of objects and the type of the hierarchy contain all the types of objects below them in the hierarchy. Table 2 lists the hierarchy of SharePoint structural elements.

**Table 2. SharePoint structural elements**

|**Object type (in hierarchical order)**|**Description**|
|:-----|:-----|
|Web applications|Applications that exist on a server and respond to requests from a browser. Web applications are the central structure in Internet Information Services (IIS). In SharePoint, a web application is a website with a unique URL and a separate content database stored in SQL Server.|
|Site collections|Containers of sites that define permissions, and that can define some aspects of branding, depending on the configuration, for all sites within the container.|
|Sites|A collection of lists, libraries, structure, navigation, and look and feel elements usually organized around a central topic or theme. Sites that are children of other sites in the same site collection are sometimes called subsites. A subsite is a site that is stored in a subfolder of the parent website. A subsite can inherit permissions and navigation structure from its parent site, or administration and authoring permissions might be unique for the subsite. Subsites can have child subsites.|
|Apps, lists, and document libraries|Containers of content and data that are organized into specific structures. The Master Page Gallery is a special document library in SharePoint 2010 publishing sites where all branding elements - master pages, page layouts, JavaScript files, CSS, and images - are stored by default. Every site has its own Master Page Gallery. In Team sites, the master page comes from the site, not the site collection.|
|Items|Individual pieces of content or data that are contained in add-ins, lists, and document libraries.|

## add-ins for SharePoint
<a name="sectionSection3"> </a>

add-ins for SharePoint are lightweight solutions that don't install on the SharePoint host server, which means they don't make excessive API calls to the host server. You can build add-ins for SharePoint by using the Cloud Add-in Model. Users can discover and download add-ins from the Office Store or from the enterprise's App Catalog. For more information, see  [Overview of add-ins for SharePoint](http://msdn.microsoft.com/library/cd1eda9e-8e54-4223-93a9-a6ea0d18df70.aspx). 

## File system and content databases, and how they work together
<a name="sectionSection4"> </a>

To understand your branding options and the implications that site customization can have on upgrade and migration, you'll need to understand the SharePoint file system and content databases.

### File system

SharePoint stores files in the file system ("hive"). In SharePoint 2013, this location is called the "15-hive". The following is the path to the 15-hive. 

	`%program files%/Common Files/Microsoft Shared/Web Server Extensions/15/`

The 15-hive includes several subfolders that store files you'll use when branding and provisioning sites.

### Content databases

Content databases store SharePoint content objects, such as site collections. A content database is automatically installed for every site collection when you deploy SharePoint 2013. All the content for a site collection is stored in one content database on one server. However, a content database can be associated with more than one site collection, and you can attach content databases to a SharePoint web application. You might need to move content from one content database to another, for example when the size of the content will soon exceed the size of the content database.

Some characteristics of a content database vary depending on how the site collection is used. For example, sites are often write-intensive, while other types of content, such as read-only documents, are read-intensive. How content is used affects aspects of the content database, such as size and performance. 

## File customization states and their effects on upgrade
<a name="sectionSection5"> </a>

The state of SharePoint files and content affects how easy it is to apply updates, and controls whether SharePoint serves the file from the content database or the file system. By default, all SharePoint files are uncustomized and ghosted, and reside in matching states in the SharePoint file system and in the content database. When a file, a content database entry, or both are used in specific ways or changed, the state of that content might be affected.

**Table 3. File and content states**

|**File or content state**|**Definition**|**Comment**|
|:-----|:-----|:-----|
|uncustomized|An attribute associated with a file that indicates that it hasn't been modified.|More than one copy of a file can point to the same source. This makes it easier for designers to implement changes.|
|customized|An attribute associated with a file that indicates that it has been modified.|After a file becomes customized, it becomes more difficult to apply broad updates.Be very careful about what you customize. As a general rule, it's better to use the default SharePoint files and functionality than to customize system files or introduce customizations that need to be manually updated.|
|ghosted|A file with a source that is stored outside the content database.|A pointer in the content database (the ghost of the file) still exists that tells SharePoint to look for the file's source on the server's file system.|
|unghosted|An uncustomized version of the source file resides in the content database.|Example: The SharePoint 2013 Design Manager creates a sandboxed solution to package branding files. It's never added to the file system of the server, therefore by definition its files are considered ghosted. But, the files it deploys are still in an uncustomized state. |

**Note**  If a file has been customized, it won't be updated when you install new service packs or the SharePoint Online service is updated.

## Site branding and provisioning with the Cloud Add-in Model
<a name="sectionSection6"> </a>

In SharePoint 2013, you can use custom CSOM code in add-ins for SharePoint to provision SharePoint site collections, sites, and subsites with branding elements. This site provisioning pattern is called remote provisioning. SharePoint is increasingly focused on cloud-based deployments, so this pattern was created to help you use SharePoint's out-of-the-box capabilities to provision site branding in a way that reduces complexity and long-term operational costs.

### What can I do with the Cloud Add-in Model?

Sometimes, there is no correlation between features in full-trust code and the Cloud Add-in Model. When developing a customization based on add-ins for SharePoint and the Cloud Add-in Model, consider an alternative approach rather than a direct conversion, and strive to keep customizations as simple as possible. Here are some examples:

- Replace event receivers with remote event receivers (see  [How to: Create a remote event receiver](http://msdn.microsoft.com/library/628c6103-52f9-4d85-9464-4a6862b36640.aspx)).
    
- Replace site templates, web templates, and site definitions with remote provisioning. This works for both subsites and site collections.
    
- Replace timer jobs with Microsoft Azure or on-premises  [worker roles](https://msdn.microsoft.com/library/azure/jj149831.aspx).
    
Some things, such as HTTP modules and HTTP handlers can not be built with the Cloud Add-in Model. Before you try to replicate an existing customization in the Cloud Add-in Model, first consider why these customizations were built and whether an out-of-the-box SharePoint feature can work.

### Remote provisioning pattern

Remote provisioning uses new add-in patterns to move provisioning logic outside of the SharePoint farm entirely. This approach eliminates the need to use the feature framework or other customizations in the SharePoint farm, and instead enables you to control customizations outside of SharePoint. This approach makes it possible to update and change the provisioning engine without affecting SharePoint availability. For more information about the feature framework, see  [Site Definitions and Provisioning: the Feature Framework](https://msdn.microsoft.com/en-us/library/ms454453%28v=office.12%29.aspx). Aspects and implementations of the remote provisioning pattern are documented in detail in this section. You may find it useful to get started with the following introductions to the pattern:

-  [Self-service site provisioning using add-ins for SharePoint 2013](http://blogs.msdn.com/b/richard_dizeregas_blog/archive/2013/04/04/self-service-site-provisioning-using-apps-for-sharepoint-2013.aspx)
    
-  [SharePoint 2013 site provisioning techniques video recording](http://blogs.msdn.com/b/vesku/archive/2013/09/09/sharepoint-2013-site-provisioning-techniques-presentation-video-recording.aspx)
    
-  [Why did we introduce the SharePoint add-in pattern?](http://blogs.msdn.com/b/vesku/archive/2013/09/06/introduction-to-sp-apps-or-cam.aspx)
    
In the simplest implementation of the remote provisioning pattern, provisioning requirements are stored in a SQL Server or SQL Azure database or XML file; then, an add-in for SharePoint reads requirements from the data source, reads branding elements from their source location, and applies branding elements to the target site based on the provisioning requirements.

The branding and provisioning code samples follow this sequence of events to show the remote provisioning pattern.

**Table 4. Basic remote provisioning sequence and associated samples**

|**Step**|**Description**|**Samples**|**Article**|
|:-----|:-----|:-----|:-----|
|1|The user requests a change to the site through a form, which kicks off an approval workflow. The data that the user submits via the request form are stored using potentially any data storage format (SQL, SQL Azure, XML).| <p>[SharePoint 2013: Use workflow to provision a SharePoint site (host web)](https://code.msdn.microsoft.com/SharePoint-2013-Use-e2ee88dd)</p><p>[SharePoint 2013: Use workflow to provision a SharePoint site (app web)](https://code.msdn.microsoft.com/SharePoint-2013-Use-2b96feb7)</p>| [SharePoint 2013 site provisioning](sharepoint-site-provisioning-solutions.md)|
|2|If the workflow is approved, the add-in for SharePoint calls the stored data and provisions the site according to the metadata that user submitted in step 1.| <p>[Provision sites in batches with the add-in model](https://code.msdn.microsoft.com/Provision-sites-in-batches-fcf31bc6)</p><p>[SharePoint 2013: Use workflow to provision a SharePoint site (host web)](https://code.msdn.microsoft.com/SharePoint-2013-Use-e2ee88dd)</p><p>[SharePoint 2013: Use workflow to provision a SharePoint site (app web)](https://code.msdn.microsoft.com/SharePoint-2013-Use-2b96feb7)</p><p>[SharePoint 2013: Use add-ins for SharePoint to provision on-prem site collection](https://code.msdn.microsoft.com/SharePoint-2013-Use-apps-9094e012)</p>| [SharePoint 2013 site provisioning](sharepoint-site-provisioning-solutions.md)|
|3|The add-in for SharePoint scopes provisioning to the instructions in the request form by using the data available in the add-in web and content database. During this stage, applicable branding elements are provisioned to the site.| <p>[SharePoint 2013: Use an add-in for SharePoint to configure CSS](https://code.msdn.microsoft.com/SharePoint-2013-Use-an-app-c5d78f25)</p><p>[SharePoint 2013: Use an add-in for SharePoint to apply a theme to a SharePoint site](https://code.msdn.microsoft.com/SharePoint-2013-Use-an-app-d90a49e3)</p><p>[SharePoint 2013: Brand a SharePoint OneDrive For Business site](https://code.msdn.microsoft.com/SharePoint-2013-Brand-a-6da627cb)</p><p>[SharePoint 2013: Provision custom CSS to a site with remote provisioning](https://code.msdn.microsoft.com/SharePoint-2013-Provision-bf1d878a)</p><p>[SharePoint 2013: Use an add-in for SharePoint to provision a wiki page](https://code.msdn.microsoft.com/SharePoint-2013-Use-an-app-5db977e8)</p>|<p>[SharePoint pages and the page model](SharePoint-pages-and-the-page-model.md)</p><p>[SharePoint site branding and page customization solutions](SharePoint-site-branding-and-page-customization-solutions.md)</p><p>[SharePoint 2013 site provisioning](sharepoint-site-provisioning-solutions.md)|

**Note**  Table 4 lists the steps that might be typical of a remote provisioning scenario. The samples you use depend on the approach that works best for your enterprise. For example, if you don't have a business need to create a custom approval workflow, you won't use that sample. 

**Figure 1. Example of a site provisioning and branding workflow using the remote provisioning pattern**

![A flowchart that shows the site provisioning and branding workflow using remote provisioning](media/747cb1ba-2ea7-45ba-b3dd-a87912f8477f.png)

### How remote provisioning affects pre-existing site content

Depending on the specific site elements you want to provision, your code will override default or pre-existing site content with a hook for the remote provisioning add-in for SharePoint. The add-in will select site templates and other capabilities based on the provisioning requirements stored in the database, without configuring SharePoint at all.

The basic remote provisioning pattern is the same regardless of additional requirements. However, when you plan to use this pattern to provision site branding, map your brand development strategy in the context of the customization capabilities that SharePoint CSOM, JSOM, and REST APIs provide (the code samples described in this section use CSOM). Also consider: 

- Site architecture. Are you building an Internet-facing site, an intranet site, or an extranet that requires authorized users to log on through the Internet-facing site to access company data?
    
- The degree of control that specific users have to define and request provisioning requirements. Should users be able to specify custom provisioning options using a form? Are changes applied to the site automatically, only after people with decision-making power approve the changes, or are they managed by a governance policy?
    
- The types of branding customizations you want to apply (structural, look and feel, or both).

## Branding and site provisioning code samples
<a name="sectionSection7"> </a>

The code samples described in this section show the core scenario and extend it to cover some more specific use cases. The articles in this section also include some code examples. The following tables list and describe the samples.

**Table 5. Site provisioning samples**

|**Sample**|**Description**|**Related article**|
|:-----|:-----|:-----|
|Batch Provisioning|Provisions site collections in a console app.| [SharePoint 2013 site provisioning](sharepoint-site-provisioning-solutions.md)|
| [Provisioning.Pages](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Pages)|Shows how to use the remote provisioning model to provision a Wiki page and add remote Web Parts and HTML from the Wiki page.| [SharePoint pages and the page model](SharePoint-pages-and-the-page-model.md)|
|SiteProvisioningWorkflow|Provisions site collections with a workflow on the host web and a remote event receiver.| [SharePoint 2013 site provisioning](sharepoint-site-provisioning-solutions.md)|
|SiteProvisioningWorkflowAppWeb|Provisions site collections with a workflow on the add-in web and a remote event receiver.| [SharePoint 2013 site provisioning](sharepoint-site-provisioning-solutions.md)|

**Note**  The BatchProvisioning, SiteProvisioningWorkflow, and SiteProvisioningWorkflowAppWeb samples demonstrate the core concepts and functions of the remote provisioning pattern. The ProvisionWikiPages sample addresses a specific use case (Wiki page provisioning).

**Table 6. Branding samples**

|**Sample**|**Description**|**Related article**|
|:-----|:-----|:-----|
| [Branding.Theme](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.Themes)|Shows how to apply a theme (CSOM).| [SharePoint site branding and page customization solutions](SharePoint-site-branding-and-page-customization-solutions.md)|
| [OD4B.Configuration.Async](https://github.com/SharePoint/PnP/tree/master/Solutions/OD4B.Configuration.Async)|Shows how to use the remote provisioning model to provision a Wiki page and add remote Web Parts and HTML from the Wiki page.| [SharePoint site branding and page customization solutions](SharePoint-site-branding-and-page-customization-solutions.md)|
| [Branding.AlternateCSSAndSiteLogo ](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.AlternateCSSAndSiteLogo)|Shows how to set custom CSS to the host site by using a user customer action and embedded JavaScript (CSOM).| [SharePoint site branding and page customization solutions](SharePoint-site-branding-and-page-customization-solutions.md)|
| [Provisioning.OnPrem.Async](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.OnPrem.Async) [Provisioning.SiteCol.OnPrem](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.SiteCol.OnPrem)|Shows how to use a service to encapsulate all of the information in SharePoint host web to thePrem)|Shows how to use a service to encapsulate all o the information in SharePoint host web to the add-in web, and get a web, and get a list of site collections in a specified web application and create a content type with a specific ContentTypeId. This sample is especially useful when you want to use the remote provisioning pattern to provision sites using add-ins for SharePoint, but the CSOM member you need to complete your scenario is not yet available in CSOM. | [SharePoint 2013 site provisioning](sharepoint-site-provisioning-solutions.md)|

## SharePoint branding workflow
<a name="sectionSection8"> </a>

Branding a SharePoint website is a lot like branding other websites. You use web technologies that you're familiar with, such as HTML, CSS, and JavaScript to build the structure, look and feel, and custom behavior of your sites. SharePoint is also based on ASP.NET, and uses a page model that is very similar to the ASP.NET master page/page layout model. The page model encompasses the structure and provides hooks and logic for applying look and feel elements.

SharePoint provides several Web Parts you can use to incorporate data views, images, scripts, search results, and more into your site design. Composed looks provide an easy way for users to customize the look and feel of their site while reinforcing designer and IT department control over design details and look and feel options that are available, and both the theming engine and custom CSS capabilities open the door for more advanced branding customizations. 

The branding design and development workflow for SharePoint websites closely resembles the design workflow the industry uses:

- Plan your site architecture and design.
    
- Create design assets using familiar web design tools and technologies.
    
- Build your site using SharePoint tools such as Design Manager.
    
- Package your site design, and use add-ins for SharePoint and the remote provisioning pattern to provision site branding.

**Note**  Applying branding in SharePoint means modifying the look and feel of a default SharePoint site. This can include making both structural and cosmetic changes to the site's appearance

### Branding cost and complexity

Branding changes range from low-cost and simple to high-cost and complex. Through the UI, users can apply composed looks, which include a background image, color palette, fonts, and a master page associated with these elements, and a preview file associated with the master page. You can use the SharePoint 2013 theming engine to create your own themes, and you can create custom CSS to modify the look and feel of your site. 

**Important**  Although it's possible to create custom master pages and other structural elements as part of a custom branding project, the long-term cost of supporting structural customizations can be high, and might make it more costly for your organization to apply upgrades and support the long-term applicability of short-term investments in customization.

### Branding SharePoint sites hosted on-premises or on a dedicated farm

You can use the remote provisioning pattern to brand Team sites, Publishing sites, and OneDrive for Business sites that are hosted on-premises or on a dedicated farm at both the site collection and subsite level. 

### SharePoint Online

Part of planning a SharePoint branding project is deciding which types of site(s) you want to build, brand, and provision. SharePoint Online licensing affects whether publishing site capabilities are available to you. While all licenses enable you to specify at least one public website that has some of the features of a SharePoint Server Publishing site, not all licenses provide full Publishing site capabilities.

**Table 7. Site options in SharePoint Online**

|**Office 365 edition**|**Team site**|**Public website**|**Publishing site**|**Notes**|
|:-----|:-----|:-----|:-----|:-----|
|Small Business|Yes|Yes|No|Includes one Team site and the public website. Does not include Publishing site functionality. The public website capabilities were designed with small business in mind.|
|Enterprise|Yes|No|Yes|Includes a Team site collection at the root web application for the domain that does not include Publishing, and you can create new Publishing site collections under that root web application. |
For more information, see  [Select an Office 365 plan for business](https://products.office.com/en-us/business/compare-office-365-for-business-plans?legRedir=true&amp;CorrelationId=b633601e-1b0f-46cf-a4f8-1bfa8645376e) and [Model: Design and branding in SharePoint 2013](http://www.microsoft.com/en-us/download/details.aspx?id=30715).

## When should I customize?
<a name="sectionSection9"> </a>

Most functionality you need to meet your business needs is available out-of-the-box in SharePoint. Therefore, before creating a customization, determine whether there is an actual business case for creating the customization and what the long-term costs of creating and supporting this customization would be to the enterprise. How are features and functionality provided for end users? Look at business goals and user experience considerations before technology.

When working with an existing custom SharePoint solution and weighing whether and how to migrate it to the Cloud Add-in Model, first understand why the customization was done and what purpose it serves. 

When considering moving an existing customization from full-trust code to the Cloud Add-in Model, there usually isn't a one-to-one relationship between features and functionality. Rather than trying to find a one-to-one match between server-side and client-side code, consider alternative approaches. Table 8 maps some commonly used concepts and functionality of SharePoint solutions to their equivalents in add-ins for SharePoint.

**Table 8. Mapping SharePoint concepts to add-ins**

|**Task**|**In SharePoint solution**|**In add-ins for SharePoint**|**Guidance**|
|:-----|:-----|:-----|:-----|
|Display information in SharePoint pages|Web Parts|App Parts|Web parts run on the SharePoint Server with user permission or full-permissions/elevated privilege.App parts run in the browser or on an external server with an app identity with specifically granted permissions. They are completely isolated on the client in their own domain. Add-in parts are executed outside of SharePoint and incur no performance impact on the SharePoint Server.<br />[How to: Create add-in parts to install with your add-in for SharePoint](http://msdn.microsoft.com/library/a2664289-6c56-4cb1-987a-22367fad55eb.aspx)|
|Create and manage notifications|Event receivers and feature receivers|Remote event receivers and add-in event receivers|Event receivers and feature receivers require server-side code and can't notify external systems of events.Remote event receivers use client-side code, can be used in SharePoint solutions or add-ins for SharePoint, and can notify external systems of events.App event receivers execute code when add-ins are installed, uninstalled, or upgraded.<br />[Handling events in add-ins for SharePoint](http://msdn.microsoft.com/library/c050d056-8548-4496-a053-016779d723d9.aspx) [How to: Create an event receiver for an add-in for SharePoint](http://msdn.microsoft.com/library/f20a0476-e3f7-4f1b-b692-2ec893245b85.aspx)|
|Access data|the .NET server object model (SSOM), .NET client object model (CSOM), and OData|.NET client object model (CSOM, JSOM), OData, REST, cross-domain libraries| [How to: Complete basic operations using SharePoint 2013 client library code](http://msdn.microsoft.com/library/5a69c9e3-73bf-4ed5-bc19-182056bdb394.aspx)<br />[How to: Complete basic operations using JavaScript library code in SharePoint 2013](http://msdn.microsoft.com/library/29089af8-dbc0-49b7-a1a0-9e311f49c826.aspx)<br />[Get started with the SharePoint 2013 REST service](http://msdn.microsoft.com/library/2de035a0-ac75-43bd-9665-5c5a59c4c590.aspx)<br />[.NET client API reference for add-ins for SharePoint](http://msdn.microsoft.com/library/16912f78-e8e4-4a1a-89c2-77b155c7ffa8.aspx)<br />[JavaScript API reference for add-ins for SharePoint](http://msdn.microsoft.com/library/46510ed1-a8d9-4fa6-86b3-9b9426897d97.aspx)<br />[REST API reference and samples](http://msdn.microsoft.com/library/02128c70-9d27-4388-9374-a11bce68fdb8.aspx)|
|Package and deploy|Solution packages (WSPs, feature packages)|App catalog and Office Store|Solution packages are difficult to deploy across a SharePoint farm.You can publish an add-in for SharePoint to the Office Store if you want to make it publicly available or sell it. Use the add-in catalog to make an add-in for SharePoint available within your organization.Guidance and code samples in the solution pack demonstrate how to use add-ins for SharePoint to provision branding elements to your SharePoint site. [How to: Set up an add-in catalog on SharePoint Online](http://msdn.microsoft.com/library/1d50a571-6e02-4bc0-a3d6-6ef1eca3c2ce.aspx)<br />[How to: Set up an add-in catalog on SharePoint](http://msdn.microsoft.com/library/fddbdb6c-250e-411c-9de4-4b6d874fc096.aspx)<br />[Publish add-ins for Office and SharePoint to make them available to users](http://msdn.microsoft.com/library/ff075782-1303-4517-91cc-b3d730e9b9ae.aspx)<br />[Choose patterns for developing and hosting your add-in for SharePoint](http://msdn.microsoft.com/library/05ce5435-0a03-4ddc-976b-c33b08d03457.aspx)|
|Use external data|External content types|App-scoped external content types|SharePoint site administrators or SharePoint Designer users must create and/or install external content types, which, can be installed only at the farm level.App-scoped external content types apply only to the add-in for SharePoint for which they were created, require no administration, and can access OData sources.<br />[App-scoped external content types in SharePoint 2013](http://msdn.microsoft.com/library/a34cbbba-dc38-4d3d-b796-d54b5848bdfb.aspx)<br />[How to: Create an external content type from an OData source in SharePoint 2013](http://msdn.microsoft.com/library/bc60ea49-c44e-4531-af62-06b8cf77d35d.aspx)|
|Add custom pages and master pages|Application pages and site pages|Web-hosted pages|Application pages are shared across all sites on the server and are hosted on SharePoint.Site pages are hosted by SharePoint, and require that page controls be listed in a safe controls list.While application pages are ideal for custom code, custom code on site pages will break after customization. Instead, use Web hosted pages. They are designed to be customizable, support the use of built-in Web Parts on site pages, are hosted externally, and are available anywhere the add-in is installed.|

## In this section
<a name="sectionSection10"> </a>

-  [SharePoint pages and the page model](SharePoint-pages-and-the-page-model.md)
    
-  [SharePoint development and design tools and practices](SharePoint-development-and-design-tools-and-practices.md)
    
-  [SharePoint site branding and page customization solutions](SharePoint-site-branding-and-page-customization-solutions.md)

## Additional resources
<a name="bk_addresources"> </a>

-  [Office 365 development patterns and practices solution guidance](Office-365-development-patterns-and-practices-solution-guidance.md)
    
-  [Build add-ins for SharePoint](http://msdn.microsoft.com/library/37727101-0692-4652-a481-e6d6379cf921.aspx)
    
