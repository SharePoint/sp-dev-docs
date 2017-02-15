---
title: Develop SharePoint Add-ins
keywords: vs.sharepointtools.project.sharepointappprojectproperties
f1_keywords:
- vs.sharepointtools.project.sharepointappprojectproperties
ms.prod: SHAREPOINT
ms.assetid: 71ddde4b-fac4-4d8c-aa2e-524f9c2c4c99
---


# Develop SharePoint Add-ins
Find in-depth articles and resources to help you build advanced capabilities into your SharePoint Add-ins.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 


 **Note**  This article assumes that you are familiar with the article  [SharePoint Add-ins](sharepoint-add-ins.md) and the getting started material that it links to.
 


Under  **Develop**, we've got the following to help explain all the different things you can do in a SharePoint Add-in:
 


- In-depth overviews
    
 
- How-to articles
    
 
- Code snippets
    
 
You'll find articles about: 
 

- Performing create, read, update, and delete (CRUD) operations on lists
    
 
- How to build REST queries and interact with the new APIs
    
 
- How and when to configure OAuth for security
    
 
SharePoint has enterprise social features like activity feeds and user profiles, along with enterprise content management features, line-of-business (LOB) interoperability features, and website design features that can really make your add-ins stand out. Learn more about them in  [Add SharePoint 2013 capabilities](http://msdn.microsoft.com/library/11ecb65e-6dc5-4cf1-80ca-3c16418697b6%28Office.15%29.aspx).
 
And, code is key, so take a look at the "Samples" menu in the Dev Center. It's a direct link to our code samples for add-ins. As soon as you've set up your development environment, you should check out a few of our samples. Take advantage of a community feature that lets you request a code sample if we don't have one you'd like to see. We take those requests, along with other doc feedback and use them in our continuous updates to the content and samples. So please, let us know if you'd like to see something!
 

## Get started with SharePoint Add-ins resources
<a name="bk_gettingstarted"> </a>

If you're just getting started with developing SharePoint Add-ins, first take a look a  [SharePoint Add-ins](sharepoint-add-ins.md). That page points you to key articles to get you acquainted quickly with the different kinds of SharePoint Add-ins. Before doing more advanced kinds of development with SharePoint Add-ins, you should start with a good idea of the kinds of add-ins that you want to build, the technologies that you will want to include, and the hosting options that you will want to use.
 

 

### Essential tasks and resources for developing SharePoint Add-ins using the client object model, JavaScript object model, and REST endpoints in SharePoint 2013
<a name="bk_essentials"> </a>

No matter what kind of SharePoint Add-in you decide to build, your add-in will always interact in some way with a SharePoint 2013 site. The articles in Table 1 describe how to do many of the most important kinds of work with SharePoint sites by using three interfaces that are available for you to use in your SharePoint Add-ins: the client object model, the JavaScript object model, and REST endpoints.
 

 

**Table 1. Basic operations with the SharePoint 2013 client object model, JavaScript object model, and REST interface**


|**Topic**|**Description**|
|:-----|:-----|
| [Complete basic operations using SharePoint 2013 client library code](complete-basic-operations-using-sharepoint-2013-client-library-code.md)|Explains how to do common operations by using C# and the client object model.|
| [Complete basic operations using JavaScript library code in SharePoint 2013](complete-basic-operations-using-javascript-library-code-in-sharepoint-2013.md)|Explains how to do common operations by using the JavaScript object model.|
| [Complete basic operations using SharePoint 2013 REST endpoints](complete-basic-operations-using-sharepoint-2013-rest-endpoints.md)|Explains how to do common operations by using the REST interface.|

## Learn the fundamental concepts for development with SharePoint Add-ins
<a name="bk_fundamentals"> </a>

In addition to understanding the basic operations, you should understand the fundamental concepts of the SharePoint 2013 add-in development model. Every kind of SharePoint Add-in contains an add-in manifest file and is built into an add-in package that you deploy to a SharePoint 2013 site. And when you develop any kind of add-in you must consider a range of issues related to authentication and authorization, data access, and usability. The articles in Table 2 acquaint you with these issues and explain their implications for any kind of that you want to create.
 

 

**Table 2. Fundamental concepts for working with SharePoint Add-ins**


|**Topic**|**Description**|
|:-----|:-----|
| [Authorization and authentication of SharePoint Add-ins](authorization-and-authentication-of-sharepoint-add-ins.md)|Guides you through core concepts related to acquiring the necessary privileges for working with SharePoint 2013 resources.|
| [Explore the app manifest structure and the package of a SharePoint Add-in](explore-the-app-manifest-structure-and-the-package-of-a-sharepoint-add-in.md)|Explains how add-in manifests work and how add-in packages are built.|
| [Create UX components in SharePoint 2013](create-ux-components-in-sharepoint-2013.md)|Explores the ways in which you can build a rich user experience in SharePoint Add-ins.|
| [Work with external data in SharePoint 2013](work-with-external-data-in-sharepoint-2013.md)|Explains the data access options and techniques that are available in different kinds of SharePoint Add-ins.|
| [License your Office and SharePoint Add-ins](http://msdn.microsoft.com/library/license-your-office-and-sharepoint-add-ins%28Office.15%29.aspx)|Guides you through the add-in license framework for Office and SharePoint Add-ins.|

## Put the pieces together: Building advanced SharePoint Add-ins by integrating capabilities
<a name="bk_integrate"> </a>

When you are familiar with the capabilities and features of SharePoint Add-ins, you can start building more complex add-ins by putting all of the pieces together in ways that suit your requirements. The articles in Table 3 demonstrate how to integrate capabilities and create more fully featured SharePoint Add-ins.
 

 

**Table 3. Advanced concepts in SharePoint Add-ins**


|**Topic**|**Description**|
|:-----|:-----|
| [Create a provider-hosted add-in that includes a custom SharePoint list and content type](create-a-provider-hosted-add-in-that-includes-a-custom-sharepoint-list-and-content-type.md)|Explains how to create SharePoint Add-ins that are hosted in the cloud and that include custom SharePoint lists and content types.|

## Additional resources
<a name="bk_addresources"> </a>


-  [Tools and environments for developing SharePoint Add-ins](tools-and-environments-for-developing-sharepoint-add-ins.md)
    
 
-  [Design SharePoint Add-ins](design-sharepoint-add-ins.md)
    
 
-  [Publish SharePoint Add-ins](publish-sharepoint-add-ins.md)
    
 
-  [SharePoint Add-ins sample pack](http://code.msdn.microsoft.com/office/Apps-for-SharePoint-sample-64c80184)
    
 

