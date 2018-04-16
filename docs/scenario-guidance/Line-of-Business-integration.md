# Line of Business Integration

## Summary

Very often SharePoint is used as the unique and central access point for all of the content and services related to a business, hence the name of the product. Thus, very often customers need to consume and access Line-of-Business (LOB) data and applications from within SharePoint, whether having custom metadata fields of list items and documents whose values are retrieved from external systems, whether using custom developed solutions that consume business data.
In order to access and consume LOB data and systems from within SharePoint, you can leverage multiple techniques, which you can choose based on the kind of data sources that you need to consume, and on the physical architecture of your solution (i.e. SharePoint 2013/2016 on-premises or SharePoint Online). In this article you can find detailed information about the various LOB integration techniques that you can choose from.

## High-level guideline/general rules

Here follow some high-level guidelines and general rules that you should consider whenever you need to integrate SharePoint with any LOB system:

* Try to consume REST-based APIs, rather than SOAP services or custom APIs, in order to being able to leverage modern development techniques and to use modern security protocols (OAuth 2.0, OpenID Connect, etc.).
* Use a data cache intermediary, instead of directly consuming any external service, so that you can speed up the consumption process and avoid useless network roundtrips to retrieve data that you already requested from the LOB system.
* Make your best to list data page by page, rather than listing all the data in "one huge shot", to avoid flooding the data cache and to overload the network bandwidth.
* From an Authentication and Authorization perspective, tend to use services that leverage well-known protocols like OAuth 2.0, OpenID Connect, etc. and which are possibly registered in Azure Active Directory, in order to share a unique security infrastructure.

## Client-side Connection

_**Applies to:** Office 365 | SharePoint Online | SharePoint 2016_

Whenever you need to consume LOB systems from a client-side solution, like a client-side Web Part developed using SharePoint Framework, or a bunch of JavaScript code hosted in a Script Editor Web Part, you can consume a LOB system just using a REST API, eventually registered in Azure Active Directory. In this section you can find useful links to further information about this topic.

### Articles
* [Connect to API secured with Azure Active Directory](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/guidance/connect-to-api-secured-with-aad)

### Samples
* [Call custom Web API secured with AAD from SharePoint Framework client-side web part](https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/react-aad-webapi)
* [Azure Active Directory implicit flow authentication samples](https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/react-aad-implicitflow)
* [Call custom Web API secured with AAD from SharePoint Framework client-side web part using Angular v1.x](https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/angular-aad-webapi)
* [Angular MS Graph Web Part Built with Angular v1.x](https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/angular-msgraph)
* [Application Customizer GraphClient from Modern Teamsite](https://github.com/SharePoint/sp-dev-fx-extensions/tree/master/samples/js-application-graph-client)

### Videos
* [Calling external APIs securely from SharePoint Framework](https://www.youtube.com/watch?v=SDjKRfHA1nw)
* [Let's build with SharePoint (Web Parts, Extensions and much more)](https://myignite.microsoft.com/sessions/55180)

## Business Connectivity Services

_**Applies to:** SharePoint Online | SharePoint 2013 | SharePoint 2016_

Business Connectivity Services (BCS) is a service application of Microsoft SharePoint 2013/2016 and SharePoint Online. It provides capabilities to read and write data from external systems, such as line-of-business applications (LOB), web services, databases, or any other external source that offers a suitable connector.
In SharePoint 2013/2016 on-premises the BCS can connect to a variety of LOB systems either using a DBMS connection-oriented approach, either using a SOAP service, or using a custom .NET library.
In SharePoint Online the BCS can connect to an OData REST service, to a SOAP service, or to an Azure SQL Database.
Moreover, in SharePoint Online, if compared with SharePoint on-premises, you don't have functionalities like External Data Search, Profile Pages, custom Actions, and Office client support.

### Articles
* [Business Connectivity Services in SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/business-connectivity-services-in-sharepoint)
* [Make an External List from a SQL Azure table with Business Connectivity Services and Secure Store](https://support.office.com/en-us/article/Make-an-External-List-from-a-SQL-Azure-table-with-Business-Connectivity-Services-and-Secure-Store-466f3809-fde7-41f2-87f7-77d9fdadfc95?ui=en-US&rs=en-US&ad=US#__toc350352765)

### Videos
* [Configuring Hybrid Business Connectivity Services with SharePoint 2013](https://channel9.msdn.com/Events/SharePoint-Conference/2014/SPC319)

## Hybrid - Connect to on-premises

_**Applies to:** Office 365 | SharePoint Online_

While consuming LOB systems, another option that you have is to create SharePoint Online solutions that leverage on-premises data through an hybrid topology. For example, you can create an Azure App Service that connects to an on-premises infrastructure and consumes a SQL Server database, or any other on-premises data repository, through an Hybrid Connection.

### Articles
* [Create hybrid connectivity apps for SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/create-hybrid-connectivity-apps-for-sharepoint)
* [Azure Relay Hybrid Connections protocol](https://docs.microsoft.com/en-us/azure/service-bus-relay/relay-hybrid-connections-protocol)

### Videos
* [Azure App Service with Hybrid Connections to On-premises Resources](https://azure.microsoft.com/en-us/resources/videos/azure-app-service-with-hybrid-connections-to-on-premises-resources/)
