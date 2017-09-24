---
title: Three authorization systems for SharePoint Add-ins
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Three authorization systems for SharePoint Add-ins
Learn the three systems that SharePoint Add-ins can use to get authorization to SharePoint resources.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 

In SharePoint, a SharePoint Add-in is an identity principal just like a user and it must be authenticated and authorized to use SharePoint resources. There are three authorization systems that an add-in can use. They are not mutually exclusive.
 

## Understand the three authorization systems and when to use them
<a name="UnderstandThreeSystems"> </a>


 

 

-  **Low-Trust**: A provider-hosted SharePoint Add-in can register with Microsoft Azure Access Control Service (ACS) which issues an access token to the add-in that allows the add-in access to the resources in the SharePoint tenancy or farm on which the add-in is installed. Azure ACS is the trusted token issuer in an OAuth 2.0 Framework "flow" that includes SharePoint and the remote components of the add-in. Add-ins that use this system can be sold in the Office Store. The low-trust system is primarily intended for add-ins whose remote components are hosted in the cloud.
    
    For more information about creating a SharePoint Add-in that uses the low-trust system, see the SDK node  [Creating SharePoint Add-ins that use low-trust authorization](creating-sharepoint-add-ins-that-use-low-trust-authorization.md).
    
     **Note**  The customer who installs the add-in must have an Office 365 account. This is needed to give the add-in access to the Azure ACS. However, the customer need not use the account for any other purpose, and the add-in can be installed to an on-premise SharePoint farm after some simple configuration tasks on the farm.
-  **High-Trust**: A provider-hosted add-in can establish trust with SharePoint by using digital certificates. The high-trust system is primarily intended for add-ins whose remote components are hosted on-premise. The add-in can be installed to a SharePoint farm that is not connected to the Internet. The add-in cannot be installed on SharePoint Online or sold in the Office Store.
    
    For more information about creating a SharePoint Add-in that uses the high-trust system, see the SDK node  [Creating SharePoint Add-ins that use high-trust authorization](creating-sharepoint-add-ins-that-use-high-trust-authorization.md).
    
 
-  **Cross-Domain Library**: When the add-in's business logic is in JavaScript, you have the option of using the SharePoint cross-domain library either in place of, or as a supplement to, the low-trust and high-trust systems. The library is also intended for scenarios where the add-in has cloud-hosted components, but the customer's corporate firewall makes it difficult to use the low-trust system. The user's browser blocks scripts from other domains, but the library encapsulates a secure system for working around this restriction. Add-ins that use the library can be sold in the Office Store and can be installed to either SharePoint Online or on-premise SharePoint.
    
    For more information about creating a SharePoint Add-in that uses the cross-domain library, see the SDK node  [Creating SharePoint Add-ins that use the cross-domain library](creating-sharepoint-add-ins-that-use-the-cross-domain-library.md), the blog post  [Solving cross-domain problems in SharePoint Add-ins](http://blogs.msdn.com/b/officeapps/archive/2012/11/29/solving-cross-domain-problems-in-apps-for-sharepoint.aspx).
    
 

## Background information about the OAuth 2.0 Framework and the SharePoint implementation of it
<a name="UnderstandThreeSystems"> </a>

Two of the three authorization systems, use the OAuth 2.0 Framework. OAuth 2.0 is an  **open framework for authorization**. OAuth enables secure authorization from desktop, device, and web applications in a standard way. OAuth enables a user to approve an application to act on his or her behalf without sharing his or her user name and password. For example, it **enables a user to share** his or her private resources or data (contact list, documents, photos, videos and so on) on one site with another site, **without requiring the user to provide his or her credentials** (typically user name and password) to the other site.
 

 
OAuth enables users to provide access tokens to data that is hosted by a given service provider (such as SharePoint). Each token grants access to a specific resource provider (such as a SharePoint website), for specific resources (for example, documents in a SharePoint document library), and for a defined duration (for example, 12 hours). This enables a user to grant a third-party web or desktop application access to information that is stored with another resource or service provider (such as SharePoint), and to do so without sharing his or her user name and password and without sharing  *all*  the data that he or she has with the provider.
 

 
SharePoint uses the  **OAuth 2.0** framework **uses token passing "flows"** to:
 

 

- Authorize requests by a SharePoint Add-in to access SharePoint resources.
    
 
- Authenticate add-ins in the Office Store, an add-in catalog, or a developer tenant.
    
 
For more information and background about OAuth and OAuth terminology, see  [OAuth.net](http://oauth.net/) and [Web Authorization Protocol (oauth)](http://datatracker.ietf.org/doc/active/). In sum, there is a resource server that hosts a protected resource, an owner of the resource, a client application which seeks access to the resource, and an authorization server that issues access tokens to the resource when instructed to by the resource owner. The official OAuth documentation tends to assume a scenario in which there is a single resource owner who grants access to the resource from the client application each time the client application is run. It also assumes that the person using the client application is the resource owner. The SharePoint implementation takes account of the fact that a SharePoint resource, such as a list, is shared among multiple users. Also, in the SharePoint implementation the SharePoint Add-in is granted access when it is installed, not each time it is run; and it can be run by users other than the person who installed it and granted it access. (In the case of add-ins that are not installed on SharePoint, but access SharePoint resources (so they are "SharePoint Add-ins" only in an extended sense), the user running the add-in does have to grant permissions each time the add-in is run.)
 

 
So, in the SharePoint implementation, the OAuth roles are played by the following components:
 

 

- The remote component of a SharePoint Add-in plays the role of the client application.
    
 
- SharePoint users play the role of resource owner.
    
 
- SharePoint plays the role of the resource server.
    
 
- Azure ACS plays the role of the authorization server when  [the low-trust authorization system](creating-sharepoint-add-ins-that-use-low-trust-authorization.md) is used. When the [the high-trust system](creating-sharepoint-add-ins-that-use-high-trust-authorization.md) is used, the add-in itself (along with a digitial certificate.md) becomes the authorization server.
    
 

### Access tokens are not sign-in tokens
<a name="FileName_uniquekeyword3"> </a>

As described above, to access resources, an add-in has to request an access token from an OAuth authorization server that has previously been designated as a trusted security token issuer (STS) by the resource owner. In contrast, the WS-Federation STS and the Security Assertion Markup Language (SAML) passive sign-in STS are primarily intended to issue sign-in tokens. In SharePoint, an OAuth STS is not used for issuing sign-in tokens, that is, they are not used as identity providers. So, you will not see an OAuth STS listed in the user sign-in page, the  **Authentication Provider** section in Central Administration, or the people picker in SharePoint.
 

 
SharePoint administrators can use Windows PowerShell commands to enable or disable an OAuth STS, similar to how they can enable or disable trusted login providers in SharePoint 2010. 
 

 

