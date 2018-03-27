# Enterprise Content Management

## Summary

SharePoint has been heavily used for Enterprise Content Management (ECM), since its very first release. Nowadays with SharePoint Online and SharePoint 2013/2016 on-premises there are a lot of services, capabilities, and options to manage ECM and content in SharePoint. This article is about all the available options and techniques.

## High-level guideline/general rules

Here follow some useful guidelines and general rules for ECM solutions:

* Avoid declaring Site Columns and Content Types in sub-sites, rather use the root site of a site collection to store all the Site Columns and Content Types of a hierarchy and then associate assets from root site to sub sites
* Rely on metadata, rather than on folders, to define a hierarchy of content
* Avoid renaming native fields like the *Title* field of items, rather use a custom column with a custom name as a suitable alternative
* Prefer a remote provisioning approach while provisioning the Information Architecture (IA), rather than using services like the Content Type Hub or other IA replication services
* If your deployment is in SharePoint Online, prefer using Microsoft Flow to design business processes, instead of using the Workflow engine of SharePoint 2010, or the Workflow Manager engine of SharePoint 2013/2016
* Avoid using the Publishing features on top of a Team Site, rather create a "modern" Communication Site

## Content Type Hub

_**Applies to:** SharePoint Online | SharePoint 2013 | SharePoint 2016_

A content type hub enables you to publish SharePoint content types across a farm. You can use a content type hub to centrally manage key content types that you want to use in multiple site collections.

Key challenge with the content type hub usage is that the replication of the content types is not immediate for the newly created site collections or when content types are updated in the hub. Replication can take quite a long time depending on your tenant size and amount of data where the content type hub assets are associated.

### Articles

* [Publish a content type from a content publishing hub](https://support.office.com/en-us/article/publish-a-content-type-from-a-content-publishing-hub-58081155-118d-4e7a-9cc5-d43b5dbb7d02)
* [Activate a content type syndication hub](https://support.office.com/en-us/article/activate-a-content-type-syndication-hub-1d12ee7f-77e0-4b50-bf93-7628b8478bf6)
* [Content type hub in a SharePoint Multi-Geo tenant](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/multigeo-contenttypehub)

## Managed Metadata / Taxonomy

_**Applies to:** SharePoint Online | SharePoint 2013 | SharePoint 2016_

The Managed Metadata service (MMS) and the Managed Metadata fields allow to add custom metadata to items and documents. When you use SharePoint products, you can manage the metadata centrally. You can organize the metadata in a way that makes sense in your business and use the metadata to make it easier to find what you want.

### Articles

* [Introduction to managed metadata](https://support.office.com/en-us/article/introduction-to-managed-metadata-a180fa28-6405-4679-9ec3-81d2028c4efc)
* [Create a Managed Metadata column](https://support.office.com/en-us/article/create-a-managed-metadata-column-8fad9e35-a618-4400-b3c7-46f02785d27f)
* [Managed navigation in SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/managed-navigation-in-sharepoint)
* [Managed metadata in a SharePoint Multi-Geo tenant](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/multigeo-managedmetadata)
* [Overview of managed metadata in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/ee424402.aspx)

### Samples

* [ECM.AutoTagging](https://github.com/SharePoint/PnP/tree/master/Samples/ECM.AutoTagging)
* [MVC Taxonomy picker for sharepoint add-in](https://github.com/SharePoint/PnP/tree/master/Samples/ECM.MVCTaxonomyPicker)
* [Cascaded Taxonomy Picker](https://github.com/SharePoint/PnP/tree/master/Samples/Core.TaxonomyPicker)
* [Office PnP: Taxonomy Operations](https://github.com/SharePoint/PnP/tree/master/Samples/Core.MMS)
* [Synchronize Terms across multiple term stores](https://github.com/SharePoint/PnP/tree/master/Samples/Core.MMSSync)

## Document Sets

_**Applies to:** SharePoint Online | SharePoint 2013 | SharePoint 2016_

A Document Set is a group of related documents that you can manage as a single entity. You can create a Document Set in a single step, and then define its characteristics and metadata. You can manage the set as a single entity.

### Articles

* [Introduction to Document Sets](https://support.office.com/en-us/article/introduction-to-document-sets-3dbcd93e-0bed-46b7-b1ba-b31de2bcd234)
* [Create and configure a new Document Set content type](https://support.office.com/en-us/article/Create-and-configure-a-new-Document-Set-content-type-9db6d6dc-c23a-4dcd-a359-3e4bbbc47fc1)
* [Customize the Welcome Page for a document set](https://support.office.com/en-us/article/customize-the-welcome-page-for-a-document-set-fc4e5d63-b168-4ece-bbf6-851a2ac07e31)
* [Create and manage Document Sets](https://support.office.com/en-us/article/create-and-manage-document-sets-c71d5796-d559-48de-b1b3-42383bdd13ea)

### Samples

* [DocumentSetTemplate using CSOM](https://github.com/SharePoint/PnP/tree/master/Samples/ECM.DocumentSets)

## Publishing

_**Applies to:** SharePoint Online | SharePoint 2013 | SharePoint 2016_

SharePoint Online includes a set of features that enables you to author and publish rich webpages for your intranet or Internet. These features are housed within the SharePoint Publishing Infrastructure and must be activated prior to use. You can activate them at either the site collection or site level. However, nowadays you should prefer creating "modern" communication sites and leverage their new layout to provide information portals to your users, rather than creating publishing sites or enabling the publishing features on team sites.

### Articles

* [Branding and site provisioning solutions for SharePoint Server 2013, SharePoint Server 2016 and SharePoint Online](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/branding-and-site-provisioning-solutions-for-sharepoint)
* [SharePoint pages and the page model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/sharepoint-pages-and-the-page-model)

### Samples

* [Creating MMS Based Navigation](https://github.com/SharePoint/PnP/tree/master/Samples/Core.MMSNavigationSample)
* [Cross-site publishing in SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/cross-site-publishing-in-sharepoint)
* [SharePoint metadata, site navigation, and publishing site features](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/sharepoint-metadata-site-navigation-and-publishing-site-features)
* [Provisioning.PublishingFeatures](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.PublishingFeatures)

## "Modern" Experience

_**Applies to:** SharePoint Online_

SharePoint Online has started the gradual introduction of "modern" experiences across the SharePoint service, which has a direct impact not only on the end user experience but also on the customization options that can be used.

### Articles

* [Customizing the "modern" experiences in SharePoint Online](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modern-experience-customizations)
* [Provisioning "modern" team sites programmatically](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modern-experience-customizations-provisioning-sites)
* [Customizing "modern" team sites](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modern-experience-customizations-customize-sites)
* [Customizing "modern" lists and libraries](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modern-experience-customizations-customize-lists-and-libraries)
* [Customizing "modern" site pages](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modern-experience-customizations-customize-pages)
* [SharePoint "modern" sites classification](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modern-experience-site-classification)

### Samples

* [Programmatically creating and updating "modern" pages](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.ModernPages)
* [Create "modern" site collections](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Cloud.Modern.Async)
* [Create a "modern" SharePoint site using SharePoint REST APIs](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Modern.Console.RESTAPI)

## Site Classification

_**Applies to:** Office 365 | SharePoint Online | SharePoint 2013 | SharePoint 2016_

Site classification allows managing clusters of sites based on their classification from a governance and compliance perspective, as well as to automate governance processes based on site classification. The native UI to create a new "modern" site includes this information.

### Articles

* [SharePoint "modern" sites classification](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/modern-experience-site-classification)
* [Implement a SharePoint site classification solution](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/implement-a-sharepoint-site-classification-solution)

### Samples

* [Site Classification](https://github.com/SharePoint/PnP/tree/master/Samples/Core.SiteClassification)
* [Information Management](https://github.com/SharePoint/PnP/tree/master/Samples/Core.InformationManagement)
* [Core.SiteInformation](https://github.com/SharePoint/PnP/tree/master/Samples/Core.SiteInformation)

### Videos

* [PnP Shorts - Enabling out-of-the-box site classification for SharePoint sites](https://www.youtube.com/watch?v=E-8Z2ggHcS0)

## Information Rights Management

_**Applies to:** SharePoint Online | SharePoint 2013 | SharePoint 2016_

Information Rights Management (IRM) helps prevent sensitive information from being printed, forwarded, saved, edited, or copied by unauthorized people. With IRM in SharePoint Online, you can limit the actions that users can take on files that have been downloaded from lists or libraries. 

### Articles

* [Information Rights Management](https://technet.microsoft.com/en-us/library/dn792011.aspx)
* [Set up Information Rights Management (IRM) in SharePoint admin center](https://support.office.com/en-us/article/set-up-information-rights-management-irm-in-sharepoint-admin-center-239ce6eb-4e81-42db-bf86-a01362fed65c)
* [Apply Information Rights Management to a list or library](https://support.office.com/en-us/article/Apply-Information-Rights-Management-to-a-list-or-library-3bdb5c4e-94fc-4741-b02f-4e7cc3c54aa1)

## Records Management

_**Applies to:** SharePoint Online | SharePoint 2013 | SharePoint 2016_

A record is a document or other electronic or physical entity in an organization that serves as evidence of an activity or transaction performed by the organization and that requires retention for some time period. Records management is the process by which an organization determines the rules for records.

### Articles

* [Overview of records management in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/cc261982.aspx)
* [Implement Records Management](https://support.office.com/en-us/article/Implement-Records-Management-0bfe419e-eb1d-421a-becd-5be9fed1e479)
* [Records management extensions sample app for SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/records-management-extensions-sample-app-for-sharepoint)

### Samples

* [In Place Records Management](https://github.com/SharePoint/PnP/tree/master/Samples/ECM.RecordsManagement)

### Videos

* [Introduction to Records Management and Compliance](https://support.office.com/en-us/article/introduction-to-records-management-and-compliance-99743e35-335e-4010-a244-be8646beb771)

## DocumentID Provider

_**Applies to:** SharePoint Online | SharePoint 2013 | SharePoint 2016_

Document ID allows to assign a unique identifier to documents. However, the technique to assign the ID differs depending if you are in SharePoint Online or in SharePoint 2013/2016 on-premises.

### Articles

* [Document ID provider in the SharePoint add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/document-id-provider-sharepoint-add-in)
* [Enable and configure unique Document IDs](https://support.office.com/en-us/article/Enable-and-configure-unique-Document-IDs-ea7fee86-bd6f-4cc8-9365-8086e794c984)

## Information Management Policies

_**Applies to:** SharePoint Online | SharePoint 2013 | SharePoint 2016_

An information management policy is a set of rules for a type of content. Information management policies enable organizations to control and track things like how long content is retained or what actions users can take with that content. Information management policies can help organizations comply with legal or governmental regulations, or they can simply enforce internal business processes.

### Articles

* [Introduction to information management policies](https://support.office.com/en-us/article/Introduction-to-information-management-policies-63a0b501-ba59-44b7-a35c-999f3be057b2)
* [Information management policy in the SharePoint add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/information-management-policy-sharepoint-add-in)
* [Plan for information management policy in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/cc262490.aspx)
* [Information management policies in Office 365](https://technet.microsoft.com/en-us/library/dn792007.aspx)
* [Create and apply information management policies](https://support.office.com/en-us/article/create-and-apply-information-management-policies-eb501fe9-2ef6-4150-945a-65a6451ee9e9)

### Solutions

* [SharePoint Online Content Type Retention](https://github.com/SharePoint/PnP/tree/master/Solutions/Governance.ContentTypeEnforceRetention)

## Site Columns and Content Types

_**Applies to:** SharePoint Online | SharePoint 2013 | SharePoint 2016_

Site Columns and Content Types are fundamental to define the Information Architecture of a SharePoint solution. However, the approach to create Site Columns and Content Types is different between SharePoint on-premises and SharePoint Online. In the former scenario you can use the declarative XML (CAML), while in the latter case you use CSOM/REST.

### Articles

* [Site columns and content types in the SharePoint add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/site-columns-and-content-types-sharepoint-add-in)
* [Replace SharePoint content types and site columns](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/replace-sharepoint-content-types-and-site-columns)

### Samples

* [Creating Content Types](https://github.com/SharePoint/PnP/tree/master/Samples/Core.CreateContentTypes)
* [Fields and Content Types](https://github.com/SharePoint/PnP/tree/master/Samples/Core.ContentTypesAndFields)
* [Creating Document Content Types](https://github.com/SharePoint/PnP/tree/master/Samples/Core.CreateDocumentContentType)
