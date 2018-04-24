---
title: Important aspects of the SharePoint Add-in architecture and development landscape
description: The architecture of and the model for SharePoint Add-ins, including add-in hosting and user interface options, deployment system, security system, and lifecycle. 
ms.date: 11/02/2017
ms.prod: sharepoint
---

# Important aspects of the SharePoint Add-in architecture and development landscape


<a name="SPAppModelArch_SPCenteredVsCloudCentered"> </a>
This article supplements the information in the article [SharePoint Add-ins](sharepoint-add-ins.md).

The SharePoint add-in model provides the following ways to host the components of a SharePoint Add-in: 

-  **Provider-hosted:** Add-ins that include at least one remote component and may also include SharePoint components. The non-SharePoint components are deployed by your logic on your hardware or cloud account, or deployed on the customer's hardware or cloud account using installation programs and instructions that you provide.

-  **SharePoint-hosted:** Add-ins that include only SharePoint components and logic that runs on the client.

For more detailed information about hosting options and some guidance for how to choose between them, see [Choose patterns for developing and hosting your SharePoint Add-in](choose-patterns-for-developing-and-hosting-your-sharepoint-add-in.md).

<a name="SPComponents"> </a>
## Add-in webs, host webs, Features, and SharePoint components in add-ins

The website to which a SharePoint Add-in is installed is called the host web. However, the significant parts of the SharePoint Add-in, whether they are SharePoint components or external components, are not deployed to the host web. External parts are deployed to external servers or cloud accounts. SharePoint components are deployed to a special website with its own domain. This is called the add-in web. 

Only a limited set of UI elements that give users access to the add-in's other components are deployed to the host web. These UI components in the host web are deployed as part of a host web Feature—a Feature that is loose in the add-in package instead of inside a .wsp file. The components that are deployed to the add-in web are always in Features that are inside a .wsp file. Both kinds of Features must have **Web** scope. No other scope is possible for Features in SharePoint Add-ins.

As a general rule, any SharePoint component that does not include custom code that runs on the SharePoint servers can be included in a SharePoint Add-in (and be deployed to the add-in web). There are, however, some exceptions and some nuances to how and where the components are deployed. For more information about these nuances and about host webs, the isolated add-in webs, and Features in add-ins, see [Host webs, add-in webs, and SharePoint components in SharePoint](host-webs-add-in-webs-and-sharepoint-components-in-sharepoint.md).

<a name="AccessingApp"> </a>
## Accessing the add-in from the UI

When a SharePoint Add-in is installed on a website, the add-in is listed on the **Site Contents** page of the host web. Users can start the add-in from that page. When opened in this way, the add-in runs in full-screen mode.

Another way that a SharePoint Add-in can be surfaced is through an add-in part, a type of web part that is represented by the **ClientWebPart** class. This kind of web part is essentially a wrapper for an IFrame that would host a page of the add-in. In the simplest case, the only significant property of the web part is a URL that points to the page. 

But web parts can have custom properties that users can set in a Tool Part. Such properties could be used, for example, to set context information such as the user's ZIP Code or Postal Code. To include such an add-in part in your add-in, you create a host web Feature in the add-in and add declarative web part markup. Like any other web part, it appears in the SharePoint UI from which users add web parts. You can have more than one add-in part deployed with your add-in if you need even more variability. For example, a weather add-in can have an add-in part that shows current weather and a second add-in part that shows a weekly forecast. The two parts can have different sizes and functionality.

> [!NOTE]
> You can also deploy add-in parts to the add-in web. To implement this, the markup for the web part would be part of a Feature inside a .wsp file in the add-in package, not in the host web Feature.

We recommend that you try to give your add-ins a SharePoint appearance to the extent possible, although that is not mandatory and may not always be the best choice. For more information about the user experience guidelines, see [UX design for SharePoint Add-ins](ux-design-for-sharepoint-add-ins.md). 

There is, for example, a special master page called app.master. This page is optimized for use by the pages of add-ins. The app.master page is part of a new site definition that is included in SharePoint. 

Another tool you can use to help your add-ins maintain a consistent look and feel with SharePoint is the chrome control that ships with SharePoint. This control enables you to add the SharePoint navigation header area to your add-in pages, including pages hosted externally. For more information about UX design in SharePoint Add-ins, see [UX design for SharePoint Add-ins](ux-design-for-sharepoint-add-ins.md). For more information about the chrome control, see [Use the client chrome control in SharePoint Add-ins](use-the-client-chrome-control-in-sharepoint-add-ins.md).

<a name="SPAppModelArch_Package"> </a>
## Add-in package structure

A SharePoint Add-in package is a file that has an ".app" extension and that complies with the [Open Packaging Conventions (OPC)](http://msdn.microsoft.com/en-us/magazine/cc163372.aspx). (You can open the file by adding ".zip" as an extra extension on the filename and then opening it in Windows Explorer.) It contains an add-in manifest that specifies certain properties of the add-in and instructions to the SharePoint installation infrastructure. For more information about the add-in manifest and package, see [Explore the app manifest structure and the package of a SharePoint Add-in](explore-the-app-manifest-structure-and-the-package-of-a-sharepoint-add-in.md).

<a name="SPAppModelArch_Running"> </a>
## Permissions, authentication, and authorization for SharePoint add-ins

SharePoint introduces a new add-in permissions and security system.

<a name="AppPermissions"> </a>
### Add-in permissions

SharePoint Add-ins have permissions just as users and groups do. This enables an add-in to have a set of permissions that are different from the permissions of the user who is executing the add-in. 

You must request, in the add-in manifest file, the permissions that an add-in needs to run. The user who adds the add-in must grant these requests, and the user can only grant permissions that he or she has as a user. The grant must be for all the requested permissions or none of them to simplify the management of permissions for users and developers. (The add-in principal always has full control rights to the add-in web, so it only needs to request permissions to SharePoint resources in the host web or other locations outside the add-in web.)

For more information about add-in permissions, see [Add-in permissions in SharePoint](add-in-permissions-in-sharepoint.md).

<a name="SelectiveAuthorization"> </a>
### Selective delegation and authorization

Neither users who are launching an add-in, nor resource owners who are granting an add-in permission to access a resource, need to provide the add-in their credentials or password. Instead, SharePoint enables users and resource owners to grant only the specific permissions that the add-in requests. What makes this possible is the use by SharePoint of the transaction protocol [OAuth 2.0](http://tools.ietf.org/html/draft-ietf-oauth-v2-22). For more information about OAuth in SharePoint, see [Context Token OAuth flow for SharePoint Add-ins](context-token-oauth-flow-for-sharepoint-add-ins.md).

<a name="cross-domain-access"> </a>
### Cross-domain access

A SharePoint Add-in that includes a remote web application that uses JavaScript for its data access logic can use a JavaScript cross domain library to get authorized access to SharePoint data within the tenancy where the add-in is installed. For more information, see [Access SharePoint data from add-ins using the cross-domain library](access-sharepoint-data-from-add-ins-using-the-cross-domain-library.md).

<a name="SPAppModelArch_Lifecycle"> </a>
## Add-in lifecycle

The lifecycle for a SharePoint Add-in includes publishing, installing, upgrading, and uninstalling. For more information about these subjects, see [Publish SharePoint Add-ins](publish-sharepoint-add-ins.md), [Deploying and installing SharePoint Add-ins: methods and options](deploying-and-installing-sharepoint-add-ins-methods-and-options.md) and [SharePoint Add-ins update process](sharepoint-add-ins-update-process.md). 

Note also that there is a mechanism by which tenant administrators can batch install a SharePoint Add-in to multiple websites. For more information, see [Tenancies and deployment scopes for SharePoint Add-ins](tenancies-and-deployment-scopes-for-sharepoint-add-ins.md).

<a name="Data"> </a>
## Data storage in SharePoint Add-ins

SharePoint Add-ins can create and access any kind of data, including structured data, documents, and multimedia files. This data can be stored in SharePoint or in an external location. 

<a name="StructuredData"> </a>
### Structured data storage options

A SharePoint Add-in can use almost any kind of structured data storage, both inside and out of SharePoint and on Microsoft and non-Microsoft platforms. The following are *some* locations where you can store structured data for a SharePoint Add-in:

- SharePoint lists in an add-in web
- SQL Azure
- External data sources connected to SharePoint with Microsoft Business Connectivity Services (BCS)
- A non-Microsoft cloud service
- A database on your own server

> [!TIP]
> You will probably upgrade your SharePoint Add-in at some point. When a SharePoint Add-in includes SharePoint components on an add-in web, the upgrade process makes a complete copy of the add-in web. For this reason, very large SharePoint lists on the add-in web make the upgrade process time-consuming and processor intensive on the content database server. You should avoid putting "big data" in SharePoint lists on the add-in web.

<a name="UnStructuredData"> </a>
### Unstructured data storage options

Documents, images, videos, audio files, and other kinds of unstructured data that is produced or used by a SharePoint Add-in can be stored in or outside SharePoint. Document libraries are a good choice for documents and are searchable via SharePoint search. A site asset library is often a good choice for multimedia files. 

Other options include blob storage in your Microsoft Azure account or on your own servers. You can also store files in some non-Microsoft platforms or cloud services.

<a name="AppMetadata"> </a>
### Add-in settings and other metadata storage options

Metadata for a SharePoint Add-in, such as user preferences, location information, and other settings can be stored in several places. A hidden SharePoint list is sometimes a good choice. You can also use the property bag of the add-in web. Another option, for a provider-hosted add-in, is to use Azure Table storage. 

<a name="DataAccess"> </a>
### Secure data access options

Your options for secure data access, of course, depend on your choice of storage. Data access and search are discussed in detail in several other articles. For more information, see [Secure data access and client object models for SharePoint Add-ins](secure-data-access-and-client-object-models-for-sharepoint-add-ins.md).

<a name="SPAppModelArch_Managing"> </a>
## Managing add-ins

Site collection administrators and tenant administrators can monitor add-ins and change the resources allocated to them. In addition, Microsoft personnel for the add-in store can flag add-ins and disable them.

For more information about managing add-ins, see [Install and manage SharePoint Add-ins](http://msdn.microsoft.com/en-us/library/733647a3-a5d3-475b-967d-3bb627c2a0c2) on TechNet.

<a name="SPAppModelArch_Monitoring"> </a>
### Monitoring add-ins

SharePoint provides health monitoring of add-ins and makes this information available in the UI to website owners, tenant administrators, and farm administrators. Most documentation for the monitoring system is on TechNet; for example [Monitor SharePoint Add-ins](http://technet.microsoft.com/library/3adafdd2-f276-4a9d-8a74-e06b8916bbc2). This section is just a quick introduction to explain how add-ins that you sell are monitored.

Some kinds of data are reported per-app and other kinds are reported per-app-instance. The primary items that the monitoring framework reports are as follows:

- Use of the add-in, such as the number of times it has been installed (creating a new instance). 
- Server resource consumption of each add-in instance.
- Installation, upgrade, and run-time errors of each add-in instance.
- An overall health indicator for each add-in instance of green, yellow, and red.

If the add-in includes Azure website components, the monitoring framework also polls Azure hourly for its error data and reports critical errors and storage quota data in the SharePoint UI. Azure SQL Database errors are not reported.

The information that is provided by the monitoring framework enables administrators to determine whether their add-in purchase budget is being wisely spent, whether they have to deploy more resources to add-ins, and whether they have to disable an add-in that is not working correctly.

<a name="RegisterDependency"> </a>
## Registering add-in dependencies

If your SharePoint Add-in depends on a SharePoint capability that is not available and cannot be made available on the add-in web, then it will not work properly and your customers will complain. You can ensure that your add-in is not installed where the requisite services and Features are not available by registering the dependencies of the add-in in add-in manifest. The installation infrastructure for SharePoint Add-ins will check for these prerequisites and it will block installation of you add-in if any of them is not available.

For services, such as Excel, Access, or Visio services, the infrastructure will verify that the service is installed and licensed.

For Features, such as a Task list, the infrastructure verifies that the Feature is deployed and either:

- activated at the  **Farm**, **WebApplication**, or **Site** (site collection) scope

or

- activatable, with **Web** scope, on the add-in web that is created when the add-in is installed.
 
> [!NOTE]
> The add-in installation infrastructure will automatically activate such Features on the add-in web when it is created.

The following sections provide the details you need to register your prerequisites.

<a name="PermAsPreq"> </a>
### Implicitly register dependencies with permission requests

When your add-in needs access to SharePoint components outside of the add-in web, it must request permission for these resources in the **AppPermissionRequests** section of the add-in manifest. These permission requests also serve as prerequisite registrations because SharePoint will infer from the permissions that your add-in requests that it the add-in needs certain SharePoint capabilities to be available. In many situations, SharePoint can infer all the capabilities that your add-in needs and the remaining sections of this topic are not needed. However, redundant dependency registrations are not harmful.

<a name="Explicit"> </a>
### Explicitly register dependencies with AppPrerequisites

When your add-in has a dependency that is not implied by its permission requests, you register each dependency with an **AppPrerequisite** element in the add-in manifest. There are three attributes in this element: **Type**, **ID**, and (optionally) **MinimumVersion**. 

There are three possible prerequisite values for **Type**: `Feature`, `Capablility`, and `AutoProvisioning`. A Feature prerequisite is simply a SharePoint Feature that must be deployed and activated on the add-in web or a broader scope that includes the add-in web. A capability is a set of related Features and services that must be available on the add-in web. (`AutoProvisioning` is discussed in the next section.)

The optional **MinimumVersion** specifies the lowest version of the Feature or capability that your add-in requires. The attribute values are of the form n.n.n.n; for example `15.0.0.0`.

The **ID** specifies which Feature or capability is required. If **Type** is `Feature`, the **ID** is the bracketed, hyphenated GUID of the Feature; for example `{151D22D9-95A8-4904-A0A3-22E4DB85D1E0}`. If **Type** is `Capability`, the **ID** is the GUID of the capability. The capabilities are listed below. To get the find the GUID of a capability, see [AppPrerequisite element (AppPrerequisiteCollection complexType) (SharePoint Add-in Manifest)](http://msdn.microsoft.com/library/791be402-981f-519e-fcde-f24cc3cb4139%28Office.15%29.aspx).

- Access Services 2010
- Access Services
- Managed Metadata Web Service
- PowerPoint Services
- Secure Store Services
- Machine Translation Service
- User Profile Service
- Visio Graphics Service
- Work Management Service
- Duet
- Workflow
- Search
- EDU

The following is an example of raw **AppPrerequisites** markup that registers the Workflow capability. If you are using Visual Studio, you edit the add-in manifest in a designer tool.

```
<AppPrerequisites>
  <AppPrerequisite Type="Capability" ID="{CDD8F991-B459-4512-8048-03D5A03FF27E}" MinimumVersion="15.0.0.0" />
</ AppPrerequisites>
```

## In this section
<a name="RegisterDependency"> </a>

- [Choose patterns for developing and hosting your SharePoint Add-in](choose-patterns-for-developing-and-hosting-your-sharepoint-add-in.md)
- [Host webs, add-in webs, and SharePoint components in SharePoint](host-webs-add-in-webs-and-sharepoint-components-in-sharepoint.md)

## See also
<a name="SPAppModelArch_AdditionalResources"> </a>

-  [SharePoint Add-ins](sharepoint-add-ins.md)
-  [SharePoint Add-ins compared with SharePoint solutions](http://msdn.microsoft.com/library/0e9efadb-aaf2-4c0d-afd5-d6cf25c4e7a8%28Office.15%29.aspx)
-  [Add-in permissions in SharePoint](add-in-permissions-in-sharepoint.md)
-  [Context Token OAuth flow for SharePoint Add-ins](context-token-oauth-flow-for-sharepoint-add-ins.md)
-  [UX design for SharePoint Add-ins](ux-design-for-sharepoint-add-ins.md)
-  [IFrame](http://www.w3schools.com/tags/tag_iframe.asp)
-  [Explore the app manifest structure and the package of a SharePoint Add-in](explore-the-app-manifest-structure-and-the-package-of-a-sharepoint-add-in.md)
-  [Deploying and installing SharePoint Add-ins: methods and options](deploying-and-installing-sharepoint-add-ins-methods-and-options.md)
-  [SharePoint Add-ins update process](sharepoint-add-ins-update-process.md).
-  [Tenancies and deployment scopes for SharePoint Add-ins](tenancies-and-deployment-scopes-for-sharepoint-add-ins.md)
    
 

