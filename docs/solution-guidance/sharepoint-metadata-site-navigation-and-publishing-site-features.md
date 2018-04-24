---
title: SharePoint metadata, site navigation, and publishing site features
description: Use SharePoint Online metadata management features, site navigation, and publishing site features to support SharePoint publishing sites.
ms.date: 4/24/2018
---

# SharePoint metadata, site navigation, and publishing site features

This article explains how to manage metadata and customize site navigation and publishing site features in SharePoint Online by using the add-in model. It also covers ways to work with common web programming patterns and libraries to help customize SharePoint publishing site branding.

## Terms and concepts

**Table 1. Key metadata, navigation, and publishing terms and concepts**

|Term or concept|Description and guidance|
|:-----|:-----|
|Content Search web part|A SharePoint web part that displays dynamic search content on pages in ways you can easily format. For more information, see: <ul xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:mtps="http://msdn2.microsoft.com/mtps" xmlns:mshelp="http://msdn.microsoft.com/mshelp" xmlns:ddue="http://ddue.schemas.microsoft.com/authoring/2003/5" xmlns:msxsl="urn:schemas-microsoft-com:xslt"><li><p><a href="https://technet.microsoft.com/en-us/library/jj679900(v=office.15).aspx" target="_blank">Configure Search web parts in SharePoint Server 2013</a></p></li><li><p><a href="https://support.office.com/en-us/article/Configure-a-Content-Search-Web-Part-in-SharePoint-0dc16de1-dbe4-462b-babb-bf8338c36c9a?CorrelationId=5024de0f-f4f4-436a-9c4a-b578b74b4764&amp;ui=en-US&amp;rs=en-US&amp;ad=US" target="_blank">Configure a Content Search web part in SharePoint</a></p></li><li><p><a href="https://technet.microsoft.com/en-us/library/sharepoint-online-search-service-description.aspx" target="_blank">Search features in SharePoint Online</a></p></li></ul>|
|ContentTypeId|Unique identifiers of content types that are designed to be recursive. For more information, see [ContentTypeId class](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.contenttypeid.aspx) (CSOM).|
|Content type|A reusable, centralized collection of metadata (columns), workflow, behavior, and other settings for a category of information. For information, see: <ul xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:mtps="http://msdn2.microsoft.com/mtps" xmlns:mshelp="http://msdn.microsoft.com/mshelp" xmlns:ddue="http://ddue.schemas.microsoft.com/authoring/2003/5" xmlns:msxsl="urn:schemas-microsoft-com:xslt"><li><p><a href="https://msdn.microsoft.com/en-us/library/office/ms196085(v=office.14).aspx" target="_blank">Columns</a></p></li><li><p><a href="https://msdn.microsoft.com/en-us/library/office/ms460224(v=office.14).aspx" target="_blank">Creating content types</a></p></li><li><p><a href="https://msdn.microsoft.com/en-us/library/office/ms468437(v=office.14).aspx" target="_blank">Custom information in content types</a></p></li></ul>|
|Content type hub|Part of the Managed Metadata service application, which is a hub site that publishes content types to other site collections. Allows you to publish, republish, and unpublish content types from a central location. For information, see: <ul xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:mtps="http://msdn2.microsoft.com/mtps" xmlns:mshelp="http://msdn.microsoft.com/mshelp" xmlns:ddue="http://ddue.schemas.microsoft.com/authoring/2003/5" xmlns:msxsl="urn:schemas-microsoft-com:xslt"><li><p><a href="https://support.office.com/en-us/article/Publish-a-content-type-from-a-content-publishing-hub-58081155-118d-4e7a-9cc5-d43b5dbb7d02?CorrelationId=49ebfe9f-6cf8-4f04-86a3-4d3fe23324fe&amp;ui=en-US&amp;rs=en-US&amp;ad=US" target="_blank">Publish a content type from a content publishing hub</a></p></li><li><p><a href="https://support.office.com/en-us/article/View-error-logs-for-content-type-publishing-fa8bc6d4-f03e-4ce7-94de-5fd1c38fe32c?CorrelationId=3aaa4607-0888-417a-a0ff-8c1e44ce8167&amp;ui=en-US&amp;rs=en-US&amp;ad=US" target="_blank">View error logs for content type publishing</a></p></li></ul>|
|Device channels|A method for rendering publishing site pages in multiple ways by using different designs that target multiple devices. For more information, see [How to: Add a Device Channel Panel snippet in SharePoint 2013](http://msdn.microsoft.com/library/612780a8-6267-49f6-a32d-33600bb5f6b4%28Office.15%29.aspx).|
|Display template|Used in web parts that use search technology, display templates control the rendering of the results of queries made to the search index. Display templates are available for all search web parts. For more information, see [Display template reference in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/jj944947%28v=office.15%29.aspx).|
|Managed navigation|Site navigation powered by the SharePoint managed metadata service (taxonomy). Use it to build site navigation derived from a managed metadata taxonomy. Managed navigation often works best with the product catalog.|
|Managed metadata|A hierarchical collection of centrally managed terms that you can use to define and attribute items in SharePoint. You can use managed metadata to manage content type publishing and to create taxonomies. In SharePoint 2013 and SharePoint Online, the managed metadata service is used to create managed navigation&mdash;site navigation powered by taxonomy. For more information, see: <ul xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:mtps="http://msdn2.microsoft.com/mtps" xmlns:mshelp="http://msdn.microsoft.com/mshelp" xmlns:ddue="http://ddue.schemas.microsoft.com/authoring/2003/5" xmlns:msxsl="urn:schemas-microsoft-com:xslt"><li><p><a href="https://msdn.microsoft.com/en-us/library/office/bb897739(v=office.14).aspx" target="_blank">Customizing Navigation Controls and Providers in SharePoint Server 2010 (ECM)</a></p></li><li><p><a href="https://support.office.com/en-us/article/Introduction-to-managed-metadata-a180fa28-6405-4679-9ec3-81d2028c4efc?CorrelationId=2a4dbdb0-0199-40e2-ac58-568ca0a3f099&amp;ui=en-US&amp;rs=en-US&amp;ad=US" target="_blank">Introduction to managed metadata</a></p></li><li><p><a href="https://support.office.com/en-us/article/Introduction-to-managed-metadata-in-SharePoint-Server-2010-b324aebd-67ab-45a8-933d-ceedb2d909ea?CorrelationId=9152b80c-9fe4-43c5-bacc-178cc49d0e8f&amp;ui=en-US&amp;rs=en-US&amp;ad=US" target="_blank">Introduction to managed metadata in SharePoint Server 2010</a></p></li><li><p><a href="https://technet.microsoft.com/en-us/library/ee530393(v=office.14).aspx" target="_blank">Managed metadata administration (SharePoint Server 2010)</a></p></li><li><p><a href="http://msdn.microsoft.com/library/b66d4ec1-a2ef-49cc-8ca5-a6b516bff02e(Office.15).aspx" target="_blank">Managed metadata and navigation in SharePoint 2013</a></p></li><li><p><a href="http://msdn.microsoft.com/library/c9da5011-3c73-4b83-8e00-e7a03a71ed02(Office.15).aspx" target="_blank">Managed navigation in SharePoint 2013</a></p></li><li><p><a href="https://msdn.microsoft.com/en-us/library/office/hh147179(v=office.14).aspx" target="_blank">Migrating Managed Metadata in SharePoint Server 2010</a></p></li></ul>|
|[Navigation namespace](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.publishing.navigation.aspx)|Contains client object model (CSOM) classes that support site navigation for publishing sites. |
|[Taxonomy namespace](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.aspx)|Contains CSOM classes that support taxonomy features. For more information, see [Synchronize term groups sample SharePoint Add-in](http://msdn.microsoft.com/library/76caa8e2-2a37-432c-8f98-9aa4acf86f79%28Office.15%29.aspx).|
|Pinning|Similar to reusing a term, pinning maintains a shared relationship between the source term and the reuse instance. For example, the shared relationship can span across site collections in a cross-site publishing scenario. Any time the term is added or removed, that action is updated across the hierarchy anywhere the term is pinned. For more information, see [How to: Use code to pin terms to navigation term sets in SharePoint 2013](http://msdn.microsoft.com/library/4a2811dc-25fd-4eb2-b0ab-1edded64c556%28Office.15%29.aspx).|
|Product catalog|For information, see the following: <ul xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:mtps="http://msdn2.microsoft.com/mtps" xmlns:mshelp="http://msdn.microsoft.com/mshelp" xmlns:ddue="http://ddue.schemas.microsoft.com/authoring/2003/5" xmlns:msxsl="urn:schemas-microsoft-com:xslt"><li><p><a href="http://msdn.microsoft.com/library/33f49e69-c1d3-4a6e-8887-5df683cba022(Office.15).aspx" target="_blank">Cross-site publishing in SharePoint 2013</a></p></li><li><p><a href="https://technet.microsoft.com/en-us/library/jj656774(v=office.15).aspx" target="_blank">Configure cross-site publishing in SharePoint Server 2013</a></p></li></ul>|
|Snippet|A piece of HTML functionality that you can add to the HTML file generated by the [Design Manager](http://msdn.microsoft.com/library/29834b3f-3815-4347-91d3-296387663114%28Office.15%29.aspx). For example, you might want to add a Device Channel panel to your publishing page&mdash;there's a snippet for that. The following articles provide some examples: <ul xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:mtps="http://msdn2.microsoft.com/mtps" xmlns:mshelp="http://msdn.microsoft.com/mshelp" xmlns:ddue="http://ddue.schemas.microsoft.com/authoring/2003/5" xmlns:msxsl="urn:schemas-microsoft-com:xslt"><li><p><a href="http://msdn.microsoft.com/library/612780a8-6267-49f6-a32d-33600bb5f6b4(Office.15).aspx" target="_blank">How to: Add a Device Channel Panel snippet in SharePoint 2013</a></p></li><li><p><a href="http://msdn.microsoft.com/library/7583b217-200c-4569-8f88-fe975c8ebd72(Office.15).aspx" target="_blank">How to: Add a web part zone snippet in SharePoint 2013</a></p></li><li><p><a href="http://msdn.microsoft.com/library/4beaab08-760b-408a-b768-906312779379(Office.15).aspx" target="_blank">How to: Add a Security Trim snippet in SharePoint 2013</a></p></li></ul>|
|Structured navigation|For information about using structured navigation, see [How to: Customize Navigation in SharePoint Server 2010 (ECM)](https://msdn.microsoft.com/en-us/library/office/ms558975%28v=office.14%29.aspx)|

## Prerequisites for using CSOM to brand publishing sites

By default, web content published to public-facing SharePoint on-premises websites is available to anonymous users. By default, both CSOM and REST are not available to anonymous users.

> [!IMPORTANT] 
> This scenario presents a potentially serious threat to on-premises SharePoint sites. Before you use the remote provisioning model described in [Use remote provisioning to brand SharePoint pages](Use-remote-provisioning-to-brand-SharePoint-pages.md) to provision branding to publishing sites, make sure that your site's security and permissions are set correctly, and consider the security implications of anonymous access.

In the event that the site administrator creates a new web application that includes a site collection that uses the publishing template and also enables anonymous access, anonymous access will be available to every user of the site when the application is uploaded to the add-in catalog. Because anonymous access is enabled for the on-premises SharePoint publishing site, what happens if a user who is not authenticated navigates to the site?

If you create a SharePoint-hosted add-in and add a client add-in part to the project, navigate to  **Central Administration** > **Add-ins** > **Manage Add-in Catalog** and create an add-in catalog for the web application, publish the SharePoint-hosted add-in using Visual Studio to create the add-in package, and then upload the add-in package to the add-in catalog. At this point the site collection administrator can add the add-in to the publishing site. The add-in is now available to add to a page on the publishing site.

If you edit the main page of the publishing site and publish the add-in to it, the add-in works as expected. Choosing the linked title of the add-in loads the full-page experience. If SharePoint throws an error, this means that the anonymous user does not have access to use the CSOM. This makes sense because CSOM and REST are not available by default to anonymous users.

### Be aware that disabling Use Remote Interfaces permissions can introduce a security risk

In **Site Permissions**, the  **Require Use Remote Interfaces permission** checkbox is selected by default. You can clear the **Use Remote Interfaces permission** checkbox to allow anonymous users to have access to use CSOM and REST. This decouples the user from Use Remote Interfaces permissions, which grants the user access to SOAP, WebDAV, and CSOM. Clearing the check box also removes the ability to use SharePoint Designer.

There might be times when you want to remove the ability to use SharePoint Designer, but still permit the use of CSOM. The  **Use Remote Interfaces permission** checkbox enables you to let anonymous users use CSOM without requiring them to have Use Remote Interfaces permissions. When the **Use Remote Interfaces permission** checkbox is cleared, and you choose the linked title of the add-in to load the full-page experience, SharePoint does not throw an error. Basic error handling code interprets this case as an anonymous user.

> [!CAUTION] 
> - When you add apps to public-facing SharePoint sites that use the Publishing template, do not clear the **Use Remote Interfaces permissions** checkbox in Site Permissions. Enabling CSOM for anonymous users presents a possible information disclosure risk???it divulges much more information than you would anticipate. That said, even with access to the full CSOM, SharePoint permissions still apply. Anonymous users will only be able to see lists or items that have been explicitly made available to anonymous users. More than what you see on the webpage is available to anonymous users via CSOM and REST.
> - Unless absolutely necessary, do not clear the **Require Use Remote Interfaces permission** checkbox when anonymous access permissions are enabled on a SharePoint on-premises Publishing site. Doing so could expose both published and unpublished site content to anonymous users, and could leave your site open to a denial of service attack.

### Use the ViewFormPagesLockdown feature

To prevent users from accessing forms pages (for example, Pages/Forms/AllItems.aspx) in a public-facing SharePoint site, use the  **ViewFormPagesLockdown** feature. It is designed to prevent users from seeing Created By and Modified By information. This feature removes the permission to **View Application Pages** or **Use Remote Interfaces**. When this feature is active, users cannot go to Pages/Forms/AllItems.aspx and view items in that library.

If CSOM and REST are available to all anonymous users&mdash; if the  **Use Remote Interfaces permissions** checkbox is cleared&mdash;then although they still can't see **Created By** and **Modified By** information in the browser, they can use CSOM or REST to access that information.

### Configure anonymous access (security trimming)

By configuring anonymous access for the web application, you specify the anonymous policy:  _Deny write&mdash;Has no write access_ . This means that users with anonymous access can't write to the site&mdash;even with CSOM or REST code. Anonymous users can only see the information that was granted to them when anonymous access to the site was configured.

Unpublished pages are not visible to anonymous users by default. They can only see lists that enable anonymous access. 

> [!IMPORTANT] 
> If the  **Use Remote Interfaces permissions** checkbox is cleared, use the permissions model and other precautions to be sure that anonymous users don't have access to things that they should not.

### Prevent denial of service attacks

There is no caching with CSOM. This means that a malicious attacker can query thousands of items from lists simultaneously, all while staying under the default list view threshold and taxing the SharePoint database. This could spread and escalate into a full-blown denial of service attack. 

### Use app-only policy

You can use app-only policy with provider-hosted add-ins. App-only policy permits the add-in to perform actions that the current user is not authorized to perform. For example, a user with read-only permissions who is notable to write to a list can use an add-in with app-only permissions to write to a list.

For more information, see [Authorization and authentication of SharePoint Add-ins](http://msdn.microsoft.com/library/bde5647a-fff1-4b51-b67b-2139de79ce4a%28Office.15%29.aspx) and [Understanding Authentication and Permissions with SharePoint Add-ins and Off](http://channel9.msdn.com/Events/Build/2013/3-603) (Channel 9 video).

### Implement SSL

When you use the add-in model, implement the Secure Sockets Layer (SSL) protocol to manage security of message transmissions on the Internet. SSL works by the remote website sending an access token in the HTTP header Authorization with a value of Bearer + a base64 encoded (not encrypted) string.

> [!IMPORTANT] 
> SSL protects your SharePoint publishing site from attackers who want to get to an authorization token and exploit that access.

## Remote provisioning and publishing sites

You can use [remote provisioning practices](Use-remote-provisioning-to-brand-SharePoint-pages.md) to provision branding and other customizations to SharePoint publishing sites.

Publishing sites depend on content types and the  **ContentTypeId**, which links content types to page layouts and display templates. Customizing and provisioning SharePoint publishing page content depends on this functionality. Other aspects of custom publishing site provisioning behavior, such as managed metadata services and managed navigation, do not depend on  **ContentTypeId** and are fully supported in CSOM.

Other publishing site customization options, such as device channels and display templates, don't require custom CSOM. They depend on Design Manager features, CSS, and HTML. They are post-provisioning customizations that you build from scratch and do not need to migrate.

## Managed metadata

The managed metadata feature, first introduced in SharePoint 2010, enables you to define a custom hierarchy, or taxonomy, of metadata tags for use in SharePoint. If you want to create a custom site navigation, you can use the managed navigation feature, which is built on the managed metadata infrastructure.

A taxonomy is a hierarchical classification of words, labels, or terms that are organized into groups based on similarities. The smallest unit in a SharePoint taxonomy is the term. Terms can be grouped into term sets. Term sets can be grouped by affinity into larger groups.

For a brief introduction to taxonomy in SharePoint, see [A brief introduction to Enterprise Managed Metadata in SharePoint 2010](https://msdn.microsoft.com/en-us/library/office/ee832800%28v=office.14%29.aspx) and [Introduction to managed metadata in SharePoint 2010](https://support.office.com/en-us/article/Introduction-to-managed-metadata-in-SharePoint-Server-2010-b324aebd-67ab-45a8-933d-ceedb2d909ea?CorrelationId=2251ec3f-51ef-4924-89cc-d828b5068851&amp;ui=en-US&amp;rs=en-US&amp;ad=US).

SharePoint 2013 introduces new APIs and functionality to the managed metadata feature set.

### Managed metadata programming model

For SharePoint 2013, the .NET Server programmability model for managed metadata is defined in the following set of namespaces: 

- [Taxonomy namespace](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.aspx)
    
- [ContentTypeSync namespace](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.contenttypesync.aspx)
    
- [Generic namespace](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.generic.aspx)
    
- [CodeBehind namespace](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.om.codebehind.aspx)
    
- [Upgrade namespace](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.upgrade.aspx)
    
- [WebServices namespace](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.webservices.aspx)
    
The equivalent CSOM classes are in the [Client.Taxonomy namespace](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.aspx) namespace.

Unlike some other areas of the SharePoint object model, for managed metadata, there is a close affinity between the .NET Server programming model classes and members and the CSOM classes and members. The following are some key differences:

- CSOM does not support content type synchronization.
    
- The  **Group** class, which represents the top layer of organization in the [TermStore](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.termstore.aspx) class, is only available in the .NET Server object model. Its equivalent in CSOM is the [TermGroup](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.termgroup.aspx) class.
    
- The [GroupCollection class](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.groupcollection.aspx), which represents a collection of Group objects, is only available in the .NET Server object model. Its equivalent in CSOM is the [TermGroupCollection class](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.termgroupcollection.aspx) class.
    
- CSOM includes the [CustomPropertyMatchInformation](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.custompropertymatchinformation.aspx) and [LabelMatchInformation](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.labelmatchinformation.aspx) classes that keep custom property and label data in sync with the server.
    
The following table compares classes in the .NET Server object model and the CSOM object model.

**Table 2. Comparison of classes in two models**

|.NET Server object model|Equivalent CSOM API|
|:-----|:-----|
|[Microsoft.SharePoint.Taxonomy.ChangedGroup](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.changedgroup.aspx)|[Microsoft.SharePoint.Client.Taxonomy.ChangedGroup](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.changedgroup.aspx)|
|[Microsoft.SharePoint.Taxonomy.ChangedItem](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.changeditem.aspx)|[Microsoft.SharePoint.Client.Taxonomy.ChangedItem](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.changeditem.aspx)|
|[Microsoft.SharePoint.Taxonomy.ChangedItemCollection](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.changeditemcollection.aspx)|[Microsoft.SharePoint.Client.Taxonomy.ChangedItemCollection](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.changeditemcollection.aspx)|
|[Microsoft.SharePoint.Taxonomy.ChangedItemType](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.changeditemtype.aspx)|[Microsoft.SharePoint.Client.Taxonomy.ChangedItemType](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.changeditemtype.aspx)|
|[Microsoft.SharePoint.Taxonomy.ChangedOperationType](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.changedoperationtype.aspx)|[Microsoft.SharePoint.Client.Taxonomy.ChangedOperationType](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.changedoperationtype.aspx)|
|[Microsoft.SharePoint.Taxonomy.ChangedSite](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.changedsite.aspx)|[Microsoft.SharePoint.Client.Taxonomy.ChangedSite](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.changedsite.aspx)|
|[Microsoft.SharePoint.Taxonomy.ChangedTerm](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.changedterm.aspx)|[Microsoft.SharePoint.Client.Taxonomy.ChangedTerm](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.changedterm.aspx)|
|[Microsoft.SharePoint.Taxonomy.ChangedTermSet](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.changedtermset.aspx)|[Microsoft.SharePoint.Client.Taxonomy.ChangedTermSet](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.changedtermset.aspx)|
|[Microsoft.SharePoint.Taxonomy.ChangedTermStore](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.changedtermstore.aspx)|[Microsoft.SharePoint.Client.Taxonomy.ChangedTermStore](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.changedtermstore.aspx)|
|Not applicable.|[Microsoft.SharePoint.Client.Taxonomy.ChangeInformation](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.changeinformation.aspx)|
|Not applicable.|[Microsoft.SharePoint.Client.Taxonomy.CustomPropertyMatchInformation](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.custompropertymatchinformation.aspx)|
|[Microsoft.SharePoint.Taxonomy.FeatureIds](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.featureids.aspx)|Not applicable.|
|[Microsoft.SharePoint.Taxonomy.Group](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.group.aspx)|Not applicable.|
|[Microsoft.SharePoint.Taxonomy.HiddenListFullSyncJobDefinition](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.hiddenlistfullsyncjobdefinition.aspx)|Not applicable.|
|[Microsoft.SharePoint.Taxonomy.ImportManager](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.importmanager.aspx)|Not applicable.|
|[Microsoft.SharePoint.Taxonomy.Label](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.label.aspx)|[Microsoft.SharePoint.Client.Taxonomy.Label](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.label.aspx)|
|[Microsoft.SharePoint.Taxonomy.LabelCollection](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.labelcollection.aspx)|[Microsoft.SharePoint.Client.Taxonomy.LabelCollection](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.labelcollection.aspx)|
|Not applicable.|[Microsoft.SharePoint.Client.Taxonomy.LabelMatchInformation]()|
|[Microsoft.SharePoint.Taxonomy.MobileTaxonomyField](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.mobiletaxonomyfield.aspx)|[Microsoft.SharePoint.Client.Taxonomy.MobileTaxonomyField](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.mobiletaxonomyfield.aspx)|
|[Microsoft.SharePoint.Taxonomy.StringMatchOption](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.stringmatchoption.aspx)|[Microsoft.SharePoint.Client.Taxonomy.StringMatchOption]()|
|[Microsoft.SharePoint.Taxonomy.TaxonomyField](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.taxonomyfield.aspx)|[Microsoft.SharePoint.Client.Taxonomy.TaxonomyField](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.stringmatchoption.aspx)|
|[Microsoft.SharePoint.Taxonomy.TaxonomyFieldControl](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.taxonomyfieldcontrol.aspx)|Not applicable.|
|[Microsoft.SharePoint.Taxonomy.TaxonomyFieldEditor](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.taxonomyfieldeditor.aspx)|Not applicable.|
|[Microsoft.SharePoint.Taxonomy.TaxonomyFieldValue](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.taxonomyfieldvalue.aspx)|[Microsoft.SharePoint.Client.Taxonomy.TaxonomyFieldValue](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.taxonomyfieldvalue.aspx)|
|[Microsoft.SharePoint.Taxonomy.TaxonomyFieldValueCollection](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.taxonomyfieldvaluecollection.aspx)|[Microsoft.SharePoint.Client.Taxonomy.TaxonomyFieldValueCollection](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.taxonomyfieldvaluecollection.aspx)|
|[Microsoft.SharePoint.Taxonomy.TaxonomyItem](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.taxonomyitem.aspx)|[Microsoft.SharePoint.Client.Taxonomy.TaxonomyItem](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.taxonomyitem.aspx)|
|[Microsoft.SharePoint.Taxonomy.TaxonomyItemPicker](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.taxonomyitempicker.aspx)|Not applicable.|
|[Microsoft.SharePoint.Taxonomy.TaxonomyRights](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.taxonomyrights.aspx)|Not applicable.|
|[Microsoft.SharePoint.Taxonomy.TaxonomySession](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.taxonomysession.aspx)|[Microsoft.SharePoint.Client.Taxonomy.TaxonomySession](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.taxonomysession.aspx)|
|[Microsoft.SharePoint.Taxonomy.TaxonomyWebTaggingControl](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.taxonomywebtaggingcontrol.aspx)|Not applicable.|
|[Microsoft.SharePoint.Taxonomy.Term](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.term.aspx)|[Microsoft.SharePoint.Client.Taxonomy.Term](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.term.aspx)|
|[Microsoft.SharePoint.Taxonomy.TermCollection](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.termcollection.aspx)|[Microsoft.SharePoint.Client.Taxonomy.TermCollection](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.termcollection.aspx)|
|Not applicable.|[Microsoft.SharePoint.Client.Taxonomy.TermGroup](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.termgroup.aspx)|
|Not applicable.|[Microsoft.SharePoint.Client.Taxonomy.TermGroupCollection](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.termgroupcollection.aspx)|
|[Microsoft.SharePoint.Taxonomy.TermProperty](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.termproperty.aspx)|Not applicable.|
|[Microsoft.SharePoint.Taxonomy.TermPropertyToolPart](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.termpropertytoolpart.aspx)|Not applicable.|
|[Microsoft.SharePoint.Taxonomy.TermSet](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.termset.aspx)|[Microsoft.SharePoint.Client.Taxonomy.TermSet](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.termset.aspx)|
|[Microsoft.SharePoint.Taxonomy.TermSetCollection](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.termsetcollection.aspx)|[Microsoft.SharePoint.Client.Taxonomy.TermSetCollection](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.termsetcollection.aspx)|
|[Microsoft.SharePoint.Taxonomy.TermSetItem](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.termsetitem.aspx)|[Microsoft.SharePoint.Client.Taxonomy.TermSetItem](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.termsetitem.aspx)|
|[Microsoft.SharePoint.Taxonomy.TermStore](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.termstore.aspx)|[Microsoft.SharePoint.Client.Taxonomy.TermStore](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.termstore.aspx)|
|[Microsoft.SharePoint.Taxonomy.TermStoreCollection](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.termstorecollection.aspx)|[Microsoft.SharePoint.Client.Taxonomy.TermStoreCollection](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.taxonomy.termstorecollection.aspx)|
|[Microsoft.SharePoint.Taxonomy.TermStoreOperationException](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.termstoreoperationexception.aspx)|Not applicable.|
|[Microsoft.SharePoint.Taxonomy.TreeControl](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.taxonomy.treecontrol.aspx)|Not applicable.|

## Page layouts

For publishing sites, the page layout defines the layout of a specific class of pages. It also defines the customizable regions of a page with content placeholders, which are filled in by content from matching regions on page layouts. Page layouts are usually based on a custom content type. Content types define custom content fields that you want to display on a page. Usually, you'll create a custom content type that includes fields that map to the page design you or your design team had previously planned.

Custom field controls can include text, images, video, or other types of content. SharePoint provides content types for Article, Catalog, Welcome Page, and more. Access the page layout content types by going to  **Site Settings** > **Site Content Types**. These default page layout content types can serve as parent content types for a custom content type that you create.

All page layout content types inherit from the Page content type. After you create a custom content type, SharePoint displays the columns that the new content type inherited from the Page content type. You can add new site columns to represent new custom fields that you want to display in your page layout. Specify a type for each site column. A type is a value such as "single line of text" or "Full HTML". Consider factors like the degree of descriptiveness or control that the user should have with the field when you specify its type.

After you create all the fields that store the content in your page layout, you can create the page layout in Design Manager. For more information, see [How to: Create a page layout in SharePoint 2013](http://msdn.microsoft.com/library/5447e6a1-2f14-4667-81d0-7514b468be80%28Office.15%29.aspx). After you create the page layout, publish it by going to  **Site Settings** > **Master pages and page layouts**. An HTML file and an ASPX file are present. The HTML file is the master, and you can use any HTML editor to edit it. After you save the file and publish it, Design Manager incorporates changes and converts the updated HTML file to ASPX format, which SharePoint uses to render the page. To publish the page layout, select the HTML file and choose  **Publish** in the ribbon.

To create a page based on the new layout, go to  **New Page** > **Page** > **Page Layouts** to see the new page layout in the list of available page layouts. When you choose the new page layout, you should see all the new fields you specified when you create a new content type for the new page layout. If you view the page and the HTML isn't rendering the way you expect, you can edit the HTML and then use Design Manager to upload the updated file.

## Site navigation

There are four kinds of site navigation: 

- Global navigation
- Local navigation
- Structured navigation
- Managed navigation

**Global navigation** refers to navigation elements that help users move from one SharePoint site to another.

**Local navigation** refers to navigation within a SharePoint site. 

Structured and managed navigation are a bit more involved.

### Structured navigation

Structured navigation is a static approach to implementing navigation on SharePoint sites. It usually matches the company's structure, which requires restructuring the SharePoint site navigation. Restructuring work often means moving subsites and/or pages, and refreshing links to point to new targets.

Structured navigation might be sufficient for fairly flat, shallow site structures if your company structure (and therefore site structure) is stable for long periods of time. For deeper and more complex site structures, and companies with publishing site navigation structures that need to grow and change dynamically, managed navigation might be a better option. For more information about structured navigation, see [How to: Customize Navigation in SharePoint Server 2010](https://msdn.microsoft.com/en-us/library/office/ms558975%28v=office.14%29.aspx).

### Managed navigation

Managed navigation is built on the core publishing site and taxonomy infrastructure. Managed navigation is bound to a single site collection. It uses term sets and terms to define global and local navigation. For example, you can create a term set that defines global navigation overall, and then add terms to that term set for specific navigation elements in the global navigation.

You can find more information about managed navigation in the following articles:

- [Managed navigation in SharePoint 2013](http://msdn.microsoft.com/library/c9da5011-3c73-4b83-8e00-e7a03a71ed02%28Office.15%29.aspx)
    
- [Overview of managed navigation in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/dn194311%28v=office.15%29.aspx)
    
The following are some key high-level points about classes, methods, and properties in the SharePoint navigation extensibility model for publishing sites:

-  **NavigationTerm** and **NavigationTermSet** classes add properties and methods that are specific to managed navigation. Additional state is stored in the **CustomProperties** property of the **NavigationTerm** class.
    
-  **NavigationTerm** and **NavigationTermSet** classes have two modes: editable, and read-only. In the .NET Server object model, **NavigationTerm** objects are stored in the taxonomy navigation cache, which can only be accessed by functions in the **TaxonomyNavigation** static class.
    
-  **PortalSiteMapNodeProvider** objects in the .NET Server object model provide an interface between the data-driven site navigation features and site map data sources. Usually, you write a custom site map node provider to store site maps in an XML file or a data format that's not supported by SharePoint by default.
    
CSOM includes some unique classes and enumerations:

- The  **NavigationLinkType** enumeration defines the type of navigation node in a navigation tree. You can specify a node as a root node, a friendly URL, or a standard link.
    
- The  **StandardNavigationScheme** enumeration identifies the navigation as either global or local.
    
- The  **StandardNavigationSource** enumeration includes three choices for both global navigation and local navigation. Each choice represents a state that corresponds to the configuration of underlying providers.
    
- The  **StandardNavigationSettings** class manages the global and local navigation schemes.
    
The following table lists the publishing navigation classes in the server object model and their CSOM equivalents.

**Table 3. Publishing navigation classes**

|Server object model|CSOM|
|:-----|:-----|
|[Microsoft.SharePoint.Publishing.Navigation.CachedObjectSiteMapNode](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.cachedobjectsitemapnode.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.NavigationComparer](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.navigationcomparer.aspx)|Not applicable.|
|Not applicable.|[Microsoft.SharePoint.Client.Publishing.Navigation.NavigationLinkType](https://msdn.microsoft.com/EN-US/library/office/microsoft.sharepoint.client.publishing.navigation.navigationlinktype.aspx)|
|[Microsoft.SharePoint.Publishing.Navigation.NavigationTerm](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.navigationterm.aspx)|[Microsoft.SharePoint.Client.Publishing.Navigation.NavigationTerm](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.publishing.navigation.navigationterm.aspx)|
|Not applicable.|[Microsoft.SharePoint.Client.Publishing.Navigation.NavigationTermCollection](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.publishing.navigation.navigationtermcollection.aspx)|
|[Microsoft.SharePoint.Publishing.Navigation.NavigationTermSet](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.navigationtermset.aspx)|[Microsoft.SharePoint.Client.Publishing.Navigation.NavigationTermSet](https://msdn.microsoft.com/EN-US/library/office/microsoft.sharepoint.client.publishing.navigation.navigationtermset.aspx)|
|[Microsoft.SharePoint.Publishing.Navigation.NavigationTermSetItem](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.navigationtermsetitem.aspx)|[Microsoft.SharePoint.Client.Publishing.Navigation.NavigationTermSetItem](https://msdn.microsoft.com/EN-US/library/office/microsoft.sharepoint.client.publishing.navigation.navigationtermsetitem.aspx)|
|[Microsoft.SharePoint.Publishing.Navigation.NavigationTermSetView](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.navigationtermsetview.aspx)|[Microsoft.SharePoint.Client.Publishing.Navigation.NavigationTermSetView](https://msdn.microsoft.com/EN-US/library/office/microsoft.sharepoint.client.publishing.navigation.navigationtermsetview.aspx)|
|[Microsoft.SharePoint.Publishing.Navigation.PortalHierarchicalDataSourceView](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.portalhierarchicaldatasourceview.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.PortalHierarchicalEnumerable](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.portalhierarchicalenumerable.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.PortalHierarchyData](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.portalhierarchydata.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.PortalListItemSiteMapNode](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.portallistitemsitemapnode.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.PortalListSiteMapNode](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.portallistsitemapnode.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.PortalNavigation](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.portalnavigation.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.PortalSiteMapDataSource](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.portalsitemapdatasource.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.PortalSiteMapDataSourceSwitch](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.portalsitemapdatasourceswitch.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.PortalSiteMapNode](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.portallistsitemapnode.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.PortalSiteMapProvider](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.portalsitemapprovider.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.PortalWebSiteMapNode](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.portalwebsitemapnode.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.ProxySiteMapNode](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.proxysitemapnode.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.SiteNavigationSettings](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.sitenavigationsettings.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.SiteNavigationSettingsWriter](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.sitenavigationsettingswriter.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.SPNavigationSiteMapNode](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.spnavigationsitemapnode.aspx)|Not applicable.|
|Not applicable.|[Microsoft.SharePoint.Client.Publishing.Navigation.StandardNavigationSource](https://msdn.microsoft.com/EN-US/library/office/microsoft.sharepoint.client.publishing.navigation.standardnavigationsource.aspx)|
|Not applicable.|[Microsoft.SharePoint.Client.Publishing.Navigation.StandardNavigationSettings](https://msdn.microsoft.com/EN-US/library/office/microsoft.sharepoint.client.publishing.navigation.standardnavigationsettings.aspx)|
|[Microsoft.SharePoint.Publishing.Navigation.TaxonomyNavigation](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.taxonomynavigation.aspx)|[Microsoft.SharePoint.Client.Publishing.Navigation.TaxonomyNavigation](https://msdn.microsoft.com/EN-US/library/office/microsoft.sharepoint.client.publishing.navigation.taxonomynavigation.aspx)|
|[Microsoft.SharePoint.Publishing.Navigation.TaxonomyNavigationCacheConfig](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.taxonomynavigationcacheconfig.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.TaxonomyNavigationCacheStatistics](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.taxonomynavigationcachestatistics.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.TaxonomyNavigationContext](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.taxonomynavigationcontext.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.TaxonomySiteMapNode](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.taxonomysitemapnode.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.TaxonomySiteMapProvider](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.taxonomysitemapprovider.aspx)|Not applicable.|
|[Microsoft.SharePoint.Publishing.Navigation.WebNavigationSettings](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.navigation.webnavigationsettings.aspx)|[Microsoft.SharePoint.Client.Publishing.Navigation.WebNavigationSettings](https://msdn.microsoft.com/EN-US/library/office/microsoft.sharepoint.client.publishing.navigation.webnavigationsettings.aspx)|

## Publishing site features

SharePoint 2013 and SharePoint Online include a few features that are specific to SharePoint publishing sites:

- **Device channels** enable you to apply a single publishing site design to multiple devices and browsers.
    
- **Display templates** make it possible to brand and customize the appearance of search-related web parts.
    
- **Image renditions** define the dimensions that are used to display images on pages in SharePoint 2013 publishing sites.
    
You can implement these features by using classes in the [Publishing](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.publishing.aspx) namespace of the CSOM programming model.

### Device channels and device channel panels

You can use device channels and device channel panels to optimize your site for phones and tablets. By creating a unique channel for each device you want to target, you can render a SharePoint publishing site in more than one way. You can author a single site once, then map the site and its content to different master pages and style sheets to accommodate different targets.

You create channels by using the [Design Manager](http://msdn.microsoft.com/library/29834b3f-3815-4347-91d3-296387663114%28Office.15%29.aspx). After you create a channel, map it to the mobile device or browser with the user agent string of the incoming device.

A device can belong to more than one channel. In that case, you can rank channels in the event that a device belongs. For example, if you create a channel for smartphones and a channel for a specific device configuration, you can rank the channels so that devices with the specific configuration get the channel for them, and all other smartphones get the smartphones channel.

You can create up to 10 channels (including the default channel) in Design Manager. The default channel captures all traffic not caught by one of the other channels. When you create a new channel, complete the fields listed in the following table.

**Table 4. Device channels**

|Field|Required or optional?|Description|
|:-----|:-----|:-----|
|Name|Required|Identifies the channel to distinguish it from others.|
|Channel alias|Required|How code, the query string, cookies, or Device Channel Panels distinguish differences between channels.|
|Device inclusion rules|Required|The user-agent substrings that direct requests from devices (each should be on a different line).|
|Description|Optional|Describes what this channel does.|
|Active|Optional|When checked, the channel uses the related assets for the channel to direct traffic. Otherwise, the query string  `?DeviceChannel=<alias>` previews the site in the channel.|
 

**Device channel panels**

After you create device channels, map a master page to each one. Because master page customizations are increasingly rare, this is often the default master page (seattle.master). If you create a unique master page for one or more device channels, you can reference a different CSS file than the master page for the default channel. Page layouts you create will work with every channel you create. You can use the Device Channel Panel control to differentiate page layout designs between channels.

For more information, see [SharePoint 2013 Design Manager device channels](http://msdn.microsoft.com/library/a924bd7b-a5e3-41bf-b0a7-3e43945fa951%28Office.15%29.aspx).

The device channel panel is a container control that is mapped to one or more channels. You can add a device channel panel control to a page layout, and the panel will control what content is rendered in each channel. When one or more of those channels are active when the page is rendered, all the contents of the device channel panel are rendered. Use the device channel panel to determine when to include specific content for one or more specific channels.

Consider a page layout that includes ten fields. Some of those fields are available to all channels, and some should only be rendered in specific channels. For example, consider a mobile header banner field that only renders on smartphones, or a large custom sidebar that only renders on desktops and tablets.

You can also use the device channel panel to change the styling and placement of content on a page by adding channel-specific CSS. For more information, see [How to: Add a Device Channel Panel snippet in SharePoint 2013](http://msdn.microsoft.com/library/612780a8-6267-49f6-a32d-33600bb5f6b4%28Office.15%29.aspx) and [How to: Brand snippets by using CSS in SharePoint 2013](http://msdn.microsoft.com/library/d18d07b6-1a6b-4589-a65c-932b67cef595%28Office.15%29.aspx).

**User-agent strings and device channels**

A user-agent string is a small string of data that identifies the browser. This information can be sent to the server, which identifies the user agent. Device channels assign a request to a corresponding device channel based on the user-agent string (or substrings) of the device (or browser) the user is browsing from. The front-end web developer creates and sets up channels to capture traffic. For more information, see [What Will Windows Internet Explorer Report as the User-Agent String?](https://msdn.microsoft.com/en-us/library/cc817582.aspx)

**Order of resolution for device channels**

When you create multiple channels, put them in the order in which you want them to resolve. The first channel that includes a device inclusion rule that matches the user agent string is used. The following table shows an example of this rule.

**Table 5. Example of device inclusion rule**

|Channel|Order 1|Order 2|
|:-----|:-----|:-----|
|1|Windows Phone 8|Windows Phone|
|2|Windows Phone|Windows Phone 8|
|3|Default|Default|
If order 1 is active, a user requesting a page from a Windows 8 phone receives device channel 1 labeled Windows Phone 8. A user with any other Windows phone would use channel 2, and everything else would use channel 3. However, using order 2, a user requesting a page from a Windows 8 phone would always receive device channel 1 labeled Windows Phone and would never use the device channel specified for it.

After you define and order device channels, you can apply different master pages to each channel. By default, all channels will use the master page of the default channel. 

> [!NOTE] 
> CSOM does not include a public API for manipulating device channels and device channel panels.

### Display templates

SharePoint publishing sites use display templates to control which managed properties are shown in the search results, and how they appear in the web part. Only search web parts use display templates; the Content Query web part is not a search web part, and does not use display templates.

The following table lists the types of display templates, in the order in which SharePoint applies them. 

**Table 6: Types of display templates**

|Display template|Description|
|:-----|:-----|
|Control Display templates|Applies to the entire web part, so SharePoint applies it first, and only once. It provides HTML that structures the overall layout for presenting search results. For example, a control display template might provide HTML for the heading and the beginning and end of a list. This template is rendered only once in the web part. |
|Group Display templates|Applied second, and is applied once per group to the search Results web part. |
|Item Display templates|Applied last unless a Filter Display template is applied. Item Display templates are applied to each item. This template determines how each item in the result set is displayed in the web part. For example, it might provide the HTML for a list item that is plain text, a list item that contains a picture, or a list item that formats a block of additional links and summary description information to help provide more context for the search results. |
SharePoint stores display templates in the Display Templates folder in the Master Page Gallery. Each display template is associated with a content type in the Master Page Gallery. To identify the content type for each display template file while using a mapped drive, use the file name.

The event receivers that convert and update master pages and page layouts from HTML to JavaScript also convert display templates from HTML to JavaScript. The conversion and synching is unidirectional; it does not convert from JavaScript back to HTML.

> [!NOTE] 
> CSOM does not include a public API for manipulating display templates.

**Display template structure**

Each display template contains the following: 

- A title.
    
- A header that contains custom elements bounded by a  `<mso:CustomDocumentProperties>` tag.
    
- A `<body>` tag that contains a script block.
    
- A `<div>` tag.
    
The custom document properties provide important information to SharePoint about the display template. Each display template is associated with a content type, which is identified by  `<ContenTypeId>`. You can set other properties that determine whether to hide or show the template in the list of available display templates for the web part, the HTML to JavaScript managed property mapping, the context in which the display template is used, whether a .js file is currently associated with the display template HTML, and whether the conversion from HTML to JavaScript was successful or if warnings and errors were produced. 

From within the  `<script>` tag, you can reference external CSS or JavaScript files outside the main display templates HTML file.

If content approval is required in the Master Page Gallery, all CSS, JavaScript, and other resources files must be published before they are available to master pages and page layouts. For more information, see [Require approval of items in a site list or library](https://support.office.com/en-us/article/Require-approval-of-items-in-a-site-list-or-library-cd0761c4-8c3f-4ea2-9435-13c28aa23d08?CorrelationId=4efce7db-3017-4f50-854d-1f07eaf6bc16&amp;ui=en-US&amp;rs=en-US&amp;ad=US). The  `<div>` tag contains an ID that matches the name of the display template HTML file. Place CSS or JavaScript that you want to include that customizes how this web part is displayed in the `<div>` block.

**Display template processing**

SharePoint defines display templates in HTML files and JavaScript. If in Design Manager you change an HTML file that contains a display template definition and save changes, SharePoint compiles changes into a JavaScript file that has the same name. SharePoint uses this JavaScript file to render web parts on pages.

> [!IMPORTANT] 
> Do not edit the JavaScript file that contains the display template definition. Only update the HTML file. The conversion process requires the HTML file to be XML-compliant. For example, use  **&lt;br&gt;**, not  **&lt;br/&gt;**. For more information, see [How to: Convert an HTML file into a master page in SharePoint 2013](http://msdn.microsoft.com/library/a76ab289-3256-45de-ac63-d5112a74e3c7%28Office.15%29.aspx).

**Creating new display templates**

The easiest way to create a new display template is to modify an existing template. Different display templates change the appearance of different search-related web parts, including the content search web part, the refinement web part, the taxonomy refinement web part, and the search results web part. For more information, see:

- [SharePoint 2013 Design Manager display templates](http://msdn.microsoft.com/library/1a782bac-48ee-4baf-8751-0f943a306e0f%28Office.15%29.aspx)
    
- [Configure Search web parts in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/jj679900%28v=office.15%29.aspx)
    
- [Configure properties of a Refinement web part in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/gg549985%28v=office.15%29.aspx)
    
- [Display template reference in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/jj944947%28v=office.15%29.aspx)
    
**Properties that can be used in display templates**

Before you start to identify properties that you can use in a display template, locate an existing display template you want to build from and then save it with a new name. Display template code is located within the  `<mso:ManagedPropertyMapping>` tag.

```xml
<mso:ManagedPropertyMapping msdt:dt="string">'Picture URL'{Picture URL}:'PublishingImage;PictureURL;PictureThumbnailURL','Link URL'{Link URL}:'Path','Line 1'{Line 1}:'Title','Line 2'{Line 2}:'Description','Line 3'{Line3}:'','SecondaryFileExtension','ContentTypeId'</mso:ManagedPropertyMapping>
```

Next, open  **Site Settings** > **Search Schema**, and then search for a column name in the Managed property filter box that you want to include in a display template. Select the managed property, then edit and copy the property name. 

```xml
<mso:ManagedPropertyMapping msdt:dt="string">'Picture URL'{Picture URL}:'PublishingImage;PictureURL;PictureThumbnailURL','Link URL'{Link URL}:'Path','Line 1'{Line 1}:'Title','Line 2'{Line 2}:'Description','Line 3'{Line3}:'','owsTXTPrice','owsTXTColor'</mso:ManagedPropertyMapping>
```

> [!NOTE] 
> In this example,  **PictureURL** is mapped to the first managed property that is present when search is getting results for **PublishingImage**,  **PictureURL**, or  **PictureThumbnailURL**.

### Image renditions

An image rendition defines the dimensions that are used to display images on pages in SharePoint 2013 Publishing sites. You can use CSOM to instantiate and manipulate image renditions. You can specify metadata such as the height, width, name, and version of an image rendition by using the [ImageRendition](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.imagerendition.aspx) class. You can use methods and properties in the [SiteImageRenditions](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.publishing.siteimagerenditions.aspx) class to read and write image renditions from a site collection.

For more information, see [SharePoint 2013 Design Manager image renditions](http://msdn.microsoft.com/library/d08a74c0-5674-4f26-8646-11ea1f081c85%28Office.15%29.aspx).

## SharePoint and web programming techniques

SharePoint designers and developers often want to use standard web programming techniques with SharePoint when they design publishing sites. You can use responsive design, adaptive design, or device channels and responsive design used together.

### Responsive design

With device channels, you can build a site once and then target it to multiple devices and browsers. The web development community typically uses responsive design and the "fluid grid" approach to manage how layouts render and to design sites to render correctly on any browser or device. In a responsive design, elements on a page rearrange themselves to fit the user's device and screen orientation.

Responsive design is based on the media queries feature in CSS3. It uses media queries to match the width of the device's display and then applies styles on the client side to render the content. Media queries make it possible for a designer to target specific site properties, such as screen width. You can use media queries to create flexible layouts and images, and conditionally call CSS file alternatives.

For more information and examples, see [SharePoint 2013/2016/Online Responsive UI](https://dev.office.com/patterns-and-practices-detail/7267), [Responsive SharePoint](http://responsivesharepoint.codeplex.com/) and [Implementing your responsive designs on SharePoint 2013](http://blogs.msdn.com/b/sharepointdev/archive/2013/04/01/implementing-your-responsive-designs-on-sharepoint-2013.aspx). 

### Adaptive design

Adaptive web design (sometimes called adaptive web delivery) is similar to responsive web design. An adaptive design listens for devices or browsers and chooses the optimal way to render pages. 

The device channels feature in SharePoint 2013 is an adaptive design. It delivers adaptive layouts to each device based on page layout, the specifications of each device channel, and the order defined in the device channel panel. 

### Device channels and responsive design together

You can use device channels and responsive web design techniques together to build a responsive public-facing SharePoint publishing site. Consider creating a single custom master page for devices, such as phones and tablets, and another for web browsers, and associate each one with a device channel. Then, use fluid grids, flexible images, and CSS3 media queries to craft the best viewing experience for each device and browser your site needs to support.

## Add jQuery to a SharePoint site

You can add jQuery to a SharePoint site at the site level, the page level, or within sections of a page, such as one of the SharePoint page regions or a web part you've added to the page layout.

You can use a custom action to load jQuery from a document library. Do this if you need to make jQuery available to all pages in a SharePoint site. This approach is flexible but is not easy to control, and this affects the site designer and the administrator. You can store and maintain JavaScript files in the document library, but they can also be accidentally modified or deleted. For this reason, we don't recommend this approach.

You can also load jQuery from the SharePoint root by using [ScriptLinkControl](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.webcontrols.scriptlink.aspx). You can use the control to insert scripts that are running on a remote site, and modify the scripts without touching the SharePoint installation. The  **ScriptLinkControl** approach makes sense when you want to use jQuery on an application page or in a web part that is displayed on a page. While provisioning with this option is slow and affects performance because jQuery is added to one page at a time, deploying the jQuery file to the SharePoint rule circumvents other legacy requirements. This is helpful if you need to migrate your SharePoint 2013 full-trust code (FTC) solution to CSOM, and the migration includes moving and refactoring custom JavaScript and jQuery behaviors.

Finally, you can use the content editor web part to load jQuery from a content delivery network (CDN). This is useful if you need to add jQuery to one or a few pages, including Wiki and web part pages. Because you're loading the jQuery file from a CDN, you don't need to store extra files on the SharePoint server, and users get the benefit of a distributed, cached version of the jQuery files. SharePoint calls the jQuery file from the CDN, and you can add custom jQuery code that you author to the content editor web part. 

## Build SharePoint provider-hosted add-ins with ASP.NET MVC 5

You can build custom provider-hosted add-ins with the model-view-controller (MVC) pattern in SharePoint. This model separates the application into three interconnected parts. This separates the internal representations of information from the way they are viewed and accepted by the user. The model represents the underlying structure of the software, the view (usually UI elements), and the controller, which are the classes that connect the model and the view. 

You can wrap ASP.NET MVC content in SharePoint site master page content. In fact, you can use Office 365 APIs to create a SharePoint 2013 add-in with ASP.NET MVC 5. 

APIs for MVC for SharePoint development are defined in  `Filters\SharePointContextFilterAttribute.cs` and `SharePointContext.cs`. These APIs wrap the steps that the web project takes to seamlessly communicate to SharePoint in a single call, which simplifies the logic you need to implement.

The SharePoint context filter attribute performs additional processing to get standard information when redirected from SharePoint to your remote web application, such as Host Web URL. It also determines whether the add-in needs to be redirected to SharePoint for the user to sign in (for example, bookmarks). You can apply this filter either to the controller or to a view. SharePoint context classes encapsulate all the information from SharePoint so that you can create specific contexts for the add-in web and host web and communicate with SharePoint.

For more information, see [Learn About ASP.NET MVC](http://www.asp.net/mvc/overview) and[Introducing MVC support for SharePoint Add-ins](http://blogs.msdn.com/b/officeapps/archive/2013/07/09/introducing-mvc-support-for-apps-for-sharepoint.aspx).

## See also

- [Branding and site provisioning solutions for SharePoint](branding-and-site-provisioning-solutions-for-sharepoint.md)
    
- [How to: Apply styles to page fields in SharePoint 2013](http://msdn.microsoft.com/library/e227613d-0e4d-4312-924d-bb55e1fe4293%28Office.15%29.aspx)
    
- [How to: Create a page layout in SharePoint 2013](http://msdn.microsoft.com/library/5447e6a1-2f14-4667-81d0-7514b468be80%28Office.15%29.aspx)
    
- [How to: Customize page layouts for a catalog-based site in SharePoint 2013](http://msdn.microsoft.com/library/21d8db99-73b3-4429-b6cb-04e375af9f55%28Office.15%29.aspx)
    
- [How to: Map a network drive to the SharePoint 2013 Master Page Gallery](http://msdn.microsoft.com/library/7d416f6e-2471-4d03-97ae-4e8d907784c6%28Office.15%29.aspx)
