---
title: Follow documents, sites, and tags by using the REST service in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 989a5873-49f9-49e4-8d0f-439dde891cc2
---


# Follow documents, sites, and tags by using the REST service in SharePoint

Create SharePoint-hosted apps that use the REST service to follow content (documents, sites, and tags) and to get followed content.

## How do I use the SharePoint REST service to follow content?
<a name="bk_intro"> </a>

SharePoint users can follow documents, sites, and tags to get updates about the items in their newsfeeds and to quickly open followed documents and sites. You can use the SharePoint REST API in your app or solution to start following content, stop following content, and get followed content on behalf of the current user.
  
    
    
The following REST resources are the primary API for Following Content tasks:
  
    
    

- **SocialRestFollowingManager** provides methods for managing a user's list of followed actors.
    
  
- **SocialActor** represents a document, site, or tag that the server returns in response to a client-side request.
    
  
- **SocialActorInfo** specifies a document, site, or tag in client-side requests to the server.
    
  
- **SocialActorType** and **SocialActorTypes** specify content types in client-side requests to the server.
    
  
To perform Following Content tasks by using the REST API, you send HTTP **GET** and HTTP **POST** requests to the REST service. REST endpoint URIs for Following Content tasks begin with the **SocialRestFollowingManager** resource ( `<siteUri>/_api/social.following`) and end with one of the following resources:
  
    
    

- **follow** to start following a document, site, or tag
    
  
- **stopfollowing** to stop following a document, site, or tag
    
  
- **isfollowed** to find out whether the user is following a specific document, site, or tag
    
  
- **my/followed** to get followed documents, sites, and tags
    
  
- **my/followedcount** to get the count of followed documents, sites, and tags
    
  

> **Note:**
> You also use these endpoints for Following People tasks, but the **followers** and **suggestions** resources available from **SocialRestFollowingManager** only support following people, not content. For more information about how you can use **SocialRestFollowingManager**, see  [Follow content in SharePoint](follow-content-in-sharepoint.md) and [Follow people in SharePoint](follow-people-in-sharepoint.md). 
  
    
    


## Prerequisites for creating a SharePoint-hosted app that manages followed content by using the SharePoint REST service
<a name="bkmk_Prereqs"> </a>

This article assumes that you create the SharePoint Add-in by using Napa on an Office 365 Developer Site. If you're using this development environment, you've already met the prerequisites.
  
    
    

> **Note:**
> Go to  [Set up a development environment for SharePoint Add-ins on Office 365](http://msdn.microsoft.com/library/b22ce52a-ae9e-4831-9b68-c9210af6dc54%28Office.15%29.aspx) to sign up for a Developer Site and start using Napa.
  
    
    

If you're not using Napa on an Office 365 Developer Site, you'll need to meet the following prerequisites before you can deploy the SharePoint Add-in:
  
    
    

- A SharePoint development environment that is configured for app isolation. If you're developing remotely, the server must support sideloading of apps or you must install the app on a Developer Site.
    
  
- The My Site host configured, with a personal site created for the current user.
    
  
- Visual Studio 2012 or Visual Studio 2013 with Office Developer Tools for Visual Studio 2013.
    
  
- Sufficient permissions for the logged-on user:
    
  - Local administrator permissions on the development computer.
    
  
  - Manage Web Site and Create Subsites user permissions to the SharePoint site where you're installing the app. By default, these permissions are available only to users who have the Full Control permission level or who are in the site Owners group.
    
  
  - You must be logged on as someone other than the system account. The system account does not have permission to install the app.
    
  

> **Note:**
> See  [Set up an on-premises development environment for SharePoint Add-ins](http://msdn.microsoft.com/library/b0878c12-27c9-4eea-ae3b-7e79e5a8838d%28Office.15%29.aspx) for guidance about on-premises setup (including how to disable the loopback check, if necessary).
  
    
    


  
    
    

## Create the SharePoint Add-in project
<a name="bkmk_CreateApp"> </a>


1. On your Developer Site, open Napa, and then choose **Add New Project**.
    
  
2. Choose the **App for SharePoint** template, name the project, and then choose the **Create** button.
    
  
3. Set the permissions for your app:
    
   1. Choose the **Properties** button at the bottom of the page.
    
  
   2. In the **Properties** window, choose **Permissions**.
    
  
   3. In the **Content** category, set **Write** permissions for the **Tenant** scope.
    
  
   4. In the **Social** category, set **Read** permissions for the **User Profiles** scope.
    
  
   5. Close the **Properties** window.
    
  
4. Expand the **Scripts** node, choose the App.js file and replace its contents with the code from one of the following scenarios:
    
   -  [Start following and stop following a document](how-to-follow-documents-sites-and-tags-by-using-the-rest-service-in-sharepoint-2.md#bkmk_FollowDocs)
   -  [Start following and stop following a site](how-to-follow-documents-sites-and-tags-by-using-the-rest-service-in-sharepoint-2.md#bkmk_FollowSites)
   -  [Start following and stop following a tag](how-to-follow-documents-sites-and-tags-by-using-the-rest-service-in-sharepoint-2.md#bkmk_FollowTags)
   -  [Get followed content](how-to-follow-documents-sites-and-tags-by-using-the-rest-service-in-sharepoint-2.md#bkmk_GetFollowed)
  
5. To run the app, choose the **Run Project** button at the bottom of the page.
    
  
6. In the **Do you trust** page that opens, choose the **Trust It** button. The app page opens and runs the code. To debug the page, choose the **F12** key and then choose App.js on the **Script** tab.
    
  

## Code example: Start following and stop following a document by using the SharePoint REST service
<a name="bkmk_FollowDocs"> </a>

The following code example represents the contents of the App.js file and shows how to:
  
    
    

- Get the app web URI from the query string and construct the  `<siteUri>/_api/social.following` endpoint URI.
    
  
- Build and send a **POST** request to the `isfollowed` endpoint to find out whether the current user is already following a specified document.
    
  
- Build and send a **POST** request to the `follow` endpoint to start following the document.
    
  
- Build and send a **POST** request to the `stopfollowing` endpoint to stop following the document.
    
  
- Read the JSON response returned by the  `isfollowed` request and the `follow` request. (The `stopfollowing` request doesn't return anything in the response.) See [Example JSON responses](how-to-follow-documents-sites-and-tags-by-using-the-rest-service-in-sharepoint-2.md#bk_exampleResponses).
    
  
Before you run the code, you'll need to upload a document and change the placeholder value for the **documentUrl** variable to the document's URL.
  
    
    



```

// Replace the documentUrl placeholder value before you run the code.
var documentUrl = "https://domain.sharepoint.com/Shared%20Documents/fileName.docx";
var followingManagerEndpoint;

// Get the SPAppWebUrl parameter from the query string and build
// the Following manager endpoint.
$(document).ready(function () {
    var appweburl;
    var params = document.URL.split("?")[1].split("&amp;");
    for (var i = 0; i < params.length; i = i + 1) {
        var param = params[i].split("=");
        if (param[0] === "SPAppWebUrl") appweburl = param[1];
    }
    followingManagerEndpoint = decodeURIComponent(appweburl) + "/_api/social.following";
    isFollowed();
});

// Check whether the current user is already following the document.
// The request body includes a SocialActorInfo object that represents
// the specified item. 
// The success function reads the response from the REST service and then
// toggles the user's following status by calling the appropriate method.
function isFollowed() {
    $.ajax( {
        url: followingManagerEndpoint + "/isfollowed",
        type: "POST",
        data: JSON.stringify( { 
            "actor": {
                "__metadata": {
                    "type":"SP.Social.SocialActorInfo"
                },
                "ActorType":1,
                "ContentUri":documentUrl,
                "Id":null
            } 
        }),
        headers: { 
            "accept":"application/json;odata=verbose",
            "content-type":"application/json;odata=verbose",
            "X-RequestDigest":$("#__REQUESTDIGEST").val()
        },
        success: function (responseData) { 
            stringData = JSON.stringify(responseData);
            jsonObject = JSON.parse(stringData);
            if (jsonObject.d.IsFollowed === true ) {
                alert('The user is currently following the document.');
                stopFollowDocument();
            }
            else {
                alert('The user is currently NOT following the document.');
                followDocument();
            }
        },
        error: requestFailed
    });
}

// Make the current user start following a document.
// The request body includes a SocialActorInfo object that represents
// the document to follow.
// The success function reads the response from the REST service.
function followDocument() {
    $.ajax( {
        url: followingManagerEndpoint + "/follow",
        type: "POST",
        data: JSON.stringify( { 
            "actor": {
                "__metadata": {
                    "type":"SP.Social.SocialActorInfo"
                },
                "ActorType":1,
                "ContentUri":documentUrl,
                "Id":null
            } 
        } ),
        headers: { 
            "accept":"application/json;odata=verbose",
            "content-type":"application/json;odata=verbose",
            "X-RequestDigest":$("#__REQUESTDIGEST").val()
        },
        success: function (responseData) { 
            stringData = JSON.stringify(responseData);
            jsonObject = JSON.parse(stringData);
            var statusMessage = {
                0 : 'The user has started following the document. ',
                1 : 'The user is already following the document. ',
                2 : 'An internal limit was reached. ',
                3 : 'An internal error occurred. '
            }
            alert(statusMessage[jsonObject.d.Follow] + 'Status code = ' + jsonObject.d.Follow);
        },
        error: requestFailed
    } );
}

// Make the current user stop following a document.
// The request body includes a SocialActorInfo object that represents
// the document to stop following.
function stopFollowDocument() {
    $.ajax( {
        url: followingManagerEndpoint + "/stopfollowing",
        type: "POST",
        data: JSON.stringify( { 
            "actor": {
                "__metadata": {
                    "type":"SP.Social.SocialActorInfo"
                },
                "ActorType":1,
                "ContentUri":documentUrl,
                "Id":null
            } 
        } ),
        headers: { 
            "accept":"application/json;odata=verbose",
            "content-type":"application/json;odata=verbose",
            "X-RequestDigest":$("#__REQUESTDIGEST").val()
        },
        success: function () { 
            alert('The user has stopped following the document.');
        },
        error: requestFailed
    } );
}

function requestFailed(xhr, ajaxOptions, thrownError) {
    alert('Error:\\n' + xhr.status + '\\n' + thrownError + '\\n' + xhr.responseText);
}
```


## Code example: Start following and stop following a site by using the SharePoint REST service
<a name="bkmk_FollowSites"> </a>

The following code example represents the contents of the App.js file and shows how to:
  
    
    

- Get the app web URI from the query string and construct the  `<siteUri>/_api/social.following` endpoint URI.
    
  
- Build and send a **POST** request to the `isfollowed` endpoint to find out whether the current user is already following a specified site.
    
  
- Build and send a **POST** request to the `follow` endpoint to start following the site.
    
  
- Build and send a **POST** request to the `stopfollowing` endpoint to stop following the site.
    
  
- Read the JSON response returned by the  `isfollowed` request and the `follow` request. (The `stopfollowing` request doesn't return anything in the response.) See [Example JSON responses](how-to-follow-documents-sites-and-tags-by-using-the-rest-service-in-sharepoint-2.md#bk_exampleResponses).
    
  
Before you run the code, change the placeholder value for the **siteUrl** variable to match the site that you want to follow. Use the format **http://server/siteCollection/site** for a site in a site collection. You can follow a site from any page or library in that site. If the site uses a template that doesn't support following (like the My Site host or a personal site), you'll get an **UnsupportedSite** error (error code 10).
  
    
    



```

// Replace the siteUrl placeholder value before you run the code.
var siteUrl = "https://domain.sharepoint.com";
var followingManagerEndpoint;

// Get the SPAppWebUrl parameter from the query string and build
// the Following manager endpoint.
$(document).ready(function () {
    var appweburl;
    var params = document.URL.split("?")[1].split("&amp;");
    for (var i = 0; i < params.length; i = i + 1) {
        var param = params[i].split("=");
        if (param[0] === "SPAppWebUrl") appweburl = param[1];
    }
    followingManagerEndpoint = decodeURIComponent(appweburl) + "/_api/social.following";
    isFollowed();
});

// Check whether the current user is already following the site.
// The request body includes a SocialActorInfo object that represents
// the specified item. 
// The success function reads the response from the REST service and then
// toggles the user's following status by calling the appropriate method.
function isFollowed() {
    $.ajax( {
        url: followingManagerEndpoint + "/isfollowed",
        type: "POST",
        data: JSON.stringify( { 
            "actor": {
                "__metadata": {
                    "type":"SP.Social.SocialActorInfo"
                },
                "ActorType":2,
                "ContentUri":siteUrl,
                "Id":null
            } 
        }),
        headers: { 
            "accept":"application/json;odata=verbose",
            "content-type":"application/json;odata=verbose",
            "X-RequestDigest":$("#__REQUESTDIGEST").val()
        },
        success: function (responseData) { 
            stringData = JSON.stringify(responseData);
            jsonObject = JSON.parse(stringData);
            if (jsonObject.d.IsFollowed === true ) {
                alert('The user is currently following the site.');
                stopFollowSite();
            }
            else {
                alert('The user is currently NOT following the site.');
                followSite();
            }
        },
        error: requestFailed
    });
}

// Make the current user start following a site.
// The request body includes a SocialActorInfo object that represents
// the site to follow.
// The success function reads the response from the REST service.
function followSite() {
    $.ajax( {
        url: followingManagerEndpoint + "/follow",
        type: "POST",
        data: JSON.stringify( { 
            "actor": {
                "__metadata": {
                    "type":"SP.Social.SocialActorInfo"
                },
                "ActorType":2,
                "ContentUri":siteUrl,
                "Id":null
            } 
        } ),
        headers: { 
            "accept":"application/json;odata=verbose",
            "content-type":"application/json;odata=verbose",
            "X-RequestDigest":$("#__REQUESTDIGEST").val()
        },
        success: function (responseData) { 
            stringData = JSON.stringify(responseData);
            jsonObject = JSON.parse(stringData);
            var statusMessage = {
                0 : 'The user has started following the site. ',
                1 : 'The user is already following the site. ',
                2 : 'An internal limit was reached. ',
                3 : 'An internal error occurred. '
            }
            alert(statusMessage[jsonObject.d.Follow] + 'Status code = ' + jsonObject.d.Follow);
        },
        error: requestFailed
    } );
}

// Make the current user stop following a site.
// The request body includes a SocialActorInfo object that represents
// the site to stop following.
function stopFollowSite() {
    $.ajax( {
        url: followingManagerEndpoint + "/stopfollowing",
        type: "POST",
        data: JSON.stringify( { 
            "actor": {
                "__metadata": {
                    "type":"SP.Social.SocialActorInfo"
                },
                "ActorType":2,
                "ContentUri":siteUrl,
                "Id":null
            } 
        } ),
        headers: { 
            "accept":"application/json;odata=verbose",
            "content-type":"application/json;odata=verbose",
            "X-RequestDigest":$("#__REQUESTDIGEST").val()
        },
        success: function () { 
            alert('The user has stopped following the site.');
        },
        error: requestFailed
    } );
}

function requestFailed(xhr, ajaxOptions, thrownError) {
    alert('Error:\\n' + xhr.status + '\\n' + thrownError + '\\n' + xhr.responseText);
}
```


## Code example: Start following and stop following a tag by using the SharePoint REST service
<a name="bkmk_FollowTags"> </a>

The following code example represents the contents of the App.js file and shows how to:
  
    
    

- Get the app web URI from the query string and construct the  `<siteUri>/_api/social.following` endpoint URI.
    
  
- Build and send a **POST** request to the `isfollowed` endpoint to find out whether the current user is already following a specified tag.
    
  
- Build and send a **POST** request to the `follow` endpoint to start following the tag.
    
  
- Build and send a **POST** request to the `stopfollowing` endpoint to stop following the tag.
    
  
- Read the JSON response returned by the  `isfollowed` request and the `follow` request. (The `stopfollowing` request doesn't return anything in the response.) For more information, see [Example JSON responses](how-to-follow-documents-sites-and-tags-by-using-the-rest-service-in-sharepoint-2.md#bk_exampleResponses).
    
  
Before you run the code, change the placeholder value for the **tagGuid** variable to the GUID of an existing tag. The taxonomy API that you use to retrieve a tag from the **HashTagsTermSet** doesn't have a REST interface, so you have to use the .NET client object model or the JavaScript object model. See [How to get a tag's GUID based on the tag's name by using the JavaScript object model](follow-content-in-sharepoint.md#bk_getTagGuid) for an example.
  
    
    



```

// Replace the tagGuid placeholder value before you run the code.
var tagGuid = "19a4a484-c1dc-4bc5-8c93-bb96245ce928";
var followingManagerEndpoint;

// Get the SPAppWebUrl parameter from the query string and build
// the Following manager endpoint.
$(document).ready(function () {
    var appweburl;
    var params = document.URL.split("?")[1].split("&amp;");
    for (var i = 0; i < params.length; i = i + 1) {
        var param = params[i].split("=");
        if (param[0] === "SPAppWebUrl") appweburl = param[1];
    }
    followingManagerEndpoint = decodeURIComponent(appweburl) + "/_api/social.following";
    isFollowed();
});

// Check whether the current user is already following the tag.
// The request body includes a SocialActorInfo object that represents
// the specified item. 
// The success function reads the response from the REST service and then
// toggles the user's following status by calling the appropriate method.
function isFollowed() {
    $.ajax( {
        url: followingManagerEndpoint + "/isfollowed",
        type: "POST",
        data: JSON.stringify( { 
            "actor": {
                "__metadata": {
                    "type":"SP.Social.SocialActorInfo"
                },
                "ActorType":3,
                "TagGuid":tagGuid,
                "Id":null
            } 
        }),
        headers: { 
            "accept":"application/json;odata=verbose",
            "content-type":"application/json;odata=verbose",
            "X-RequestDigest":$("#__REQUESTDIGEST").val()
        },
        success: function (responseData) { 
            stringData = JSON.stringify(responseData);
            jsonObject = JSON.parse(stringData);
            if (jsonObject.d.IsFollowed === true ) {
                alert('The user is currently following the tag.');
                stopFollowTag();
            }
            else {
                alert('The user is currently NOT following the tag.');
                followTag();
            }
        },
        error: requestFailed
    });
}

// Make the current user start following a tag.
// The request body includes a SocialActorInfo object that represents
// the tag to follow.
// The success function reads the response from the REST service.
function followTag() {
    $.ajax( {
        url: followingManagerEndpoint + "/follow",
        type: "POST",
        data: JSON.stringify( { 
            "actor": {
                "__metadata": {
                    "type":"SP.Social.SocialActorInfo"
                },
                "ActorType":3,
                "TagGuid":tagGuid,
                "Id":null
            } 
        } ),
        headers: { 
            "accept":"application/json;odata=verbose",
            "content-type":"application/json;odata=verbose",
            "X-RequestDigest":$("#__REQUESTDIGEST").val()
        },
        success: function (responseData) { 
            stringData = JSON.stringify(responseData);
            jsonObject = JSON.parse(stringData);
            var statusMessage = {
                0 : 'The user has started following the tag. ',
                1 : 'The user is already following the tag. ',
                2 : 'An internal limit was reached. ',
                3 : 'An internal error occurred. '
            }
            alert(statusMessage[jsonObject.d.Follow] + 'Status code = ' + jsonObject.d.Follow);
        },
        error: requestFailed
    } );
}

// Make the current user stop following a tag.
// The request body includes a SocialActorInfo object that represents
// the tag to stop following.
function stopFollowTag() {
    $.ajax( {
        url: followingManagerEndpoint + "/stopfollowing",
        type: "POST",
        data: JSON.stringify( { 
            "actor": {
                "__metadata": {
                    "type":"SP.Social.SocialActorInfo"
                },
                "ActorType":3,
                "TagGuid":tagGuid,
                "Id":null
            } 
        } ),
        headers: { 
            "accept":"application/json;odata=verbose",
            "content-type":"application/json;odata=verbose",
            "X-RequestDigest":$("#__REQUESTDIGEST").val()
        },
        success: function () { 
            alert('The user has stopped following the tag.');
        },
        error: requestFailed
    } );
}

function requestFailed(xhr, ajaxOptions, thrownError) {
    alert('Error:\\n' + xhr.status + '\\n' + thrownError + '\\n' + xhr.responseText);
}
```


## Code example: Get followed content by using the SharePoint REST service
<a name="bkmk_GetFollowed"> </a>

The following code example represents the contents of the App.js file and shows how to:
  
    
    

- Get the app web URI from the query string and construct the  `<siteUri>/_api/social.following` endpoint URI.
    
  
- Build and send a **GET** request to the `my/followedcount` endpoint to get the count of content that the current user is following.
    
  
- Build and send a **GET** request to the `my/followed` endpoint to get the content that the current user is following.
    
  
- Read the JSON response returned by the requests. See  [Example JSON responses](how-to-follow-documents-sites-and-tags-by-using-the-rest-service-in-sharepoint-2.md#bk_exampleResponses).
    
  

```

var followingManagerEndpoint;
var followedCount;

// Get the SPAppWebUrl parameter from the query string and build
// the following manager endpoint.
$(document).ready(function () {
    var appweburl;
    var params = document.URL.split("?")[1].split("&amp;");
    for (var i = 0; i < params.length; i = i + 1) {
        var param = params[i].split("=");
        if (param[0] === "SPAppWebUrl") appweburl = param[1];
    }
    followingManagerEndpoint = decodeURIComponent(appweburl)+ "/_api/social.following";
    getMyFollowedCount();
} );

// Get the count of content that the current user is following.
// The "types=14" parameter specifies all content types
// (documents = 2 + sites = 4 + tags = 8).
function getMyFollowedCount() {
    $.ajax( {
        url: followingManagerEndpoint + "/my/followedcount(types=14)",
        headers: { 
            "accept": "application/json;odata=verbose"
        },
        success: function (data) { 
            followedCount = data.d.FollowedCount;
            getMyFollowedContent();
        },
        error: requestFailed
    } );
}

// Get the content that the current user is following.
// The "types=14" parameter specifies all content types
// (documents = 2 + sites = 4 + tags = 8).
function getMyFollowedContent() {
    $.ajax( {
        url: followingManagerEndpoint + "/my/followed(types=14)",
        headers: { 
            "accept": "application/json;odata=verbose"
        },
        success: followedContentRetrieved,
        error: requestFailed
    });
}

// Parse the JSON data and iterate through the collection.
function followedContentRetrieved(data) {
    var stringData = JSON.stringify(data);
    var jsonObject = JSON.parse(stringData); 
    var types = {
        1: "document",
        2: "site",
        3: "tag" 
    };
 
    var followedActors = jsonObject.d.Followed.results; 
    var followedList = "You're following " + followedCount + " items:";
    for (var i = 0; i < followedActors.length; i++) {
        var actor = followedActors[i];
        followedList += "<p>The " + types[actor.ActorType] + ": \\"" +
        actor.Name + "\\"</p>";
    } 
    $("#message").html(followedList); 
}

function requestFailed(xhr, ajaxOptions, thrownError) {
    alert('Error:\\n' + xhr.status + '\\n' + thrownError + '\\n' + xhr.responseText);
}
```


## Example JSON responses for Following Content requests
<a name="bk_exampleResponses"> </a>

By default, the REST service returns responses that are formatted by using the Atom protocol, but you can request the JSON format by using an HTTP **Accept** header (for example: `"accept":"application/json;odata=verbose"`). The response data is returned as a string, and you can use the **JSON.stringify** function and **JSON.parse** function to convert the string into an object, as shown in the previous code examples.
  
    
    
To troubleshoot an error returned by the REST service, in debug mode, look at the **responseText** property, as shown in the **requestFailed** callback functions in the previous examples. You can also get the correlation ID for the ULS server log from a network sniffer or HTTP debugger, such as Fiddler. The correlation ID is the same as the request ID in the HTTP response.
  
    
    

### Example response for the Follow endpoint

In response to client-side requests to the  `follow` endpoint, the REST service returns a **SocialFollowResult** value that represents whether the **Follow** request succeeded.
  
    
    
The following response represents the **AlreadyFollowing** status.
  
    
    



```

{"d":{"Follow":1}}
```

Table 1 shows **SocialFollowResult** status codes and their values.
  
    
    

**Table 1. SocialFollowResult codes and values**

|**Status code**|**Value**|
|:-----|:-----|
|0|**OK**. The current user is now following the actor.|
|1|**AlreadyFollowing**. The current user is already following the actor.|
|2|**LimitReached**. The request failed because an internal limit was reached.|
|3|**InternalError**. The request failed due to an internal error.|
   

> **Note:**
> The REST service doesn't return a response for the **StopFollowing** request. It returns `{"d":{"StopFollowing":null}}`. 
  
    
    


### Example response for the IsFollowed endpoint

In response to client-side requests to the  `isfollowed` endpoint, the REST service returns a **bool** value that represents whether the current user is following the specified actor.
  
    
    
The following response indicates that the current user is not following the specified document, site, or tag.
  
    
    



```
{"d":{"IsFollowed":false}}
```


### Example response for the My/Followed endpoint

In response to client-side requests to the  `my/followed` endpoint, the REST service returns an array of **SP.Social.SocialActor** objects that represent documents, sites, and tags that the current user is following.
  
    
    
The following response represents a followed document, site, and tag. The request specifies the types of content to include.
  
    
    



```
{"d":{"Followed":{"results":[
  {"__metadata":{"type":"SP.Social.SocialActor"}
    "AccountName":null
    "ActorType":1
    "CanFollow":true
    "ContentUri":"https://domain.sharepoint.com:443/Shared%20Documents/fileName.docx"
    "EmailAddress":null
    "FollowedContentUri":null
    "Id":"2.089f4944a6374a64b52b7af5ba140392.9340a4837688405daa6b83f2b58f973d.
      51bbb5d8e214457ba794669345d23040.98b9fc73d5224265b039586688b15b98"
    "ImageUri":null
    "IsFollowed":true
    "LibraryUri":null
    "Name":"snippets.txt"
    "PersonalSiteUri":null
    "Status":0
    "StatusText":null
    "TagGuid":"00000000-0000-0000-0000-000000000000"
    "Title":null
    "Uri":"https://domain.sharepoint.com:443/Shared%20Documents/fileName.docx"
  }
  {"__metadata":{"type":"SP.Social.SocialActor"}
    "AccountName":null
    "ActorType":2
    "CanFollow":true
    "ContentUri":"https://domain.sharepoint.com:443/"
    "EmailAddress":null
    "FollowedContentUri":null
    "Id":"8.089f4944a6374a64b52b7af5ba140392.9340a4837688405daa6b83f2b58f973d.
      089f4944a6374a64b52b7af5ba140392.98b9fc73d5224265b039586688b15b98"
    "ImageUri":null
    "IsFollowed":true
    "LibraryUri":null
    "Name":"Developer Site"
    "PersonalSiteUri":null
    "Status":0
    "StatusText":null
    "TagGuid":"00000000-0000-0000-0000-000000000000"
    "Title":null
    "Uri":"https://domain.sharepoint.com:443/"
  }
  {"__metadata":{"type":"SP.Social.SocialActor"}
    "AccountName":null
    "ActorType":3
    "CanFollow":true
    "ContentUri":null
    "EmailAddress":null
    "FollowedContentUri":null
    "Id":"16.00000000000000000000000000000000.00000000000000000000000000000000.
      19a4a484c1dc4bc58c93bb96245ce928.98b9fc73d5224265b039586688b15b98"
    "ImageUri":null
    "IsFollowed":true
    "LibraryUri":null
    "Name":"#someTag"
    "PersonalSiteUri":null
    "Status":0
    "StatusText":null
    "TagGuid":"19a4a484-c1dc-4bc5-8c93-bb96245ce928"
    "Title":null
    "Uri":"https://domain-my.sharepoint.com:443/_layouts/15/HashTagProfile.aspx?
      TermID=19a4a484-c1dc-4bc5-8c93-bb96245ce928"
  }
]}}}
```


### Example response for the My/FollowedCount endpoint

In response to client-side requests to the  `my/followedcount` endpoint, the REST service returns an **Int32** value that represents the total count of specified actor types that the current user is following.
  
    
    
The following response represents a count of three followed documents, sites, and/or tags. The request specifies the types of content to include.
  
    
    



```

{"d":{"FollowedCount":3}}
```


## Additional resources
<a name="bkmk_AddtionalResources"> </a>


-  [Follow content in SharePoint](follow-content-in-sharepoint.md)
    
  
-  [Following people and content REST API reference for SharePoint](following-people-and-content-rest-api-reference-for-sharepoint.md)
    
  
-  [How to: Follow documents and sites by using the .NET client object model in SharePoint](how-to-follow-documents-and-sites-by-using-the-net-client-object-model-in-sharep.md)
    
  

