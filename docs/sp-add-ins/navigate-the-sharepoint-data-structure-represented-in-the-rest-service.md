---
title: Navigate the SharePoint data structure represented in the REST service
description: Start from a REST endpoint for a given SharePoint item, and navigate to and access related items, such as parent sites or the library structure where that item resides. 
ms.date: 12/14/2017
ms.prod: sharepoint
localization_priority: Priority
---

# Navigate the SharePoint data structure represented in the REST service

When you're working with the SharePoint REST service, you'll often start out knowing the URL of a specific SharePoint item, but want to access related items, such as the folder or library structure where that item resides. For example, suppose you create an add-in where your user enters the URL of a document in a SharePoint library. Your add-in must then break down that URL to figure out the actual SharePoint site URL. After it's done that, the add-in can then make more requests from the site on the user's behalf, such as to create, update, or delete related items or resources. 

To do this, your add-in needs to query SharePoint for the following information:

- The server relative URLs of the site and site collection containing the resource.
- A form digest to enable you to perform requests that change the state of the resource, such as **POST**, **PUT**, **MERGE**, and **DELETE**.

### The basic process

1. Use the `/contextinfo` operator with the given URL to access the site and site collection addresses, and the form digest. Use the `/contextinfo` operator in the following format:
    
    `http://server/web/doclib/forms/_api/contextinfo`
    
    To increase security against cross-site scripting attempts, the `/contextinfo` operator accepts only **POST** requests.
    
2. Use the [SPContextWebInformation object properties](#bk_props) that the `/contextinfo` operator returns to access additional resources as desired.
    
 
### Try it

1. Start with a URL to a given SharePoint item. For example:
    
    `http://site/web/doclib/myDocument.docx`
    
2. Remove the name of the specific resource from the end of the URL, so that the URL points to a document library, folder, or list. In this case:
    
    `http://site/web/doclib/`
    
3. Append the REST service pointer and the `/contextinfo` operator to the URL:
    
    `http://site/web/doclib/_api/contextinfo`
    
4. Read the form digest and **webFullUrl** properties from the response.
 
5. Append the REST service pointer `_api` to the web URL.

6. Use the resulting URL and the form digest to make requests for other resources you need.

You don't have to pass the form digest if you're making **GET** requests, or making requests using a validated OAuth token.

<a name="bk_sites"> </a> 

## Navigate parent and child sites

When you navigate your site structure using the SharePoint server object model, you use the **SPWeb.ParentWeb** and **SPWeb.Webs** properties to access objects that represent parent and child sites.

The corresponding REST resources—`web/parentweb` and `web/webs`—don't return objects that represent sites. This is because the REST service conforms to OData standards, and returning complete site representations would make such requests inefficient. Instead, they return a [WebInfo object ](#bk_webinfo) that contains the site's scalar properties, but without related entity sets such as like collections or field collections.

To navigate to a specific parent or child site, construct the appropriate REST URL to that site by using the **Id** or **Title** property. From there, you can access that site's related entity sets.

<a name="bk_folders"> </a> 

## Navigate folder structure

The SharePoint REST service does not support traversing the folder hierarchy of a site through the URL construction. Instead, use the REST equivalent of the **Web.GetFolderByServerRelativeUrl** method. For example:

*Navigation not supported through the REST service:* 

`/_vti_bin/client.svc/web/lists/SharedDocuments/folder1/stuff/things/Recycle`
 
*Navigation that is supported by the REST service:* 
 
`/_vti_bin/client.svc/web/GetFolderByServerRelativeUrl('SharedDocuments/folder1/stuff/things')/Recycle`
 

<a name="bk_props"> </a>

## SPContextWebInformation object properties

|**SPContextWebInformation Property**|**Description**|
|:-----|:-----|
|**webFullUrl**|Gets the server-relative URL of the nearest site.|
|**siteFullUrl**|Gets the server-relative URL of the root of the site collection that the site is contained within.<br/>If the nearest web is the root of a site collection, the value of the **webFullUrl** property is equal to the **siteFullUrl** property.|
|**formDigestValue**|Gets the server's request form digest.|
|**LibraryVersion**|Gets the current version of the REST library.|
|**SupportedSchemaVersions**|Gets the versions of the schema of the REST/CSOM library that are supported.|

<a name="bk_webinfo"> </a>

## WebInfo object

|**WebInfo property**|**Description**|
|:-----|:-----|
|**Created**|Gets a value that specifies when the site was created.|
|**Description**|Gets or sets the description for the site.|
|**Id**|Gets a value that specifies the site identifier.|
|**Language**|Gets a value that specifies the locale ID (LCID) for the language that is used on the site.|
|**LastItemModifiedDate**|Gets a value that specifies when an item was last modified on the site.|
|**Title**|Gets or sets the title for the site.|
|**WebTemplateId**|Gets the identifier of the site template.|

## See also
<a name="bk_addresources"> </a>

- [Get to know the SharePoint REST service](get-to-know-the-sharepoint-rest-service.md)
- [REST API reference and samples](https://msdn.microsoft.com/library)
- [Use ETag values through the REST service to get document list item versioning](working-with-lists-and-list-items-with-rest.md#using-etag-values-to-determine-document-and-list-item-versioning)
- [OData resources](get-to-know-the-sharepoint-rest-service.md#odata-resources)
- [Develop SharePoint Add-ins](develop-sharepoint-add-ins.md)
    
 

 

 

