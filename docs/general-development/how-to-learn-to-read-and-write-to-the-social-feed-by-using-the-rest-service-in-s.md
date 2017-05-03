---
title: How to Learn to read and write to the social feed by using the REST service in SharePoint
ms.prod: SHAREPOINT
ms.assetid: 1da8d484-3666-42c3-8a8f-8b3ef93e96e9
---


# How to: Learn to read and write to the social feed by using the REST service in SharePoint
Create a SharePoint-hosted app that uses the REST service to publish a post and get the personal feed for the current user.
## Prerequisites for creating a SharePoint-hosted SharePoint Add-in that publishes a post and gets the social feed by using the SharePoint REST service
<a name="bkmk_Prereqs"> </a>

This article assumes that you create the SharePoint Add-in by using Napa on an Office 365 Developer Site. If you're using this development environment, you've already met the prerequisites.
  
    
    

> **Note:**
> Go to  [Set up a development environment for SharePoint Add-ins on Office 365](http://msdn.microsoft.com/library/b22ce52a-ae9e-4831-9b68-c9210af6dc54%28Office.15%29.aspx) to find out how to sign up for a Developer Site and start using Napa.
  
    
    

If you're not using Napa on a Developer Site, you'll need the following:
  
    
    

- SharePoint with My Site configured, and with a personal site created for the current user
    
  
- Visual Studio 2012 and Office Developer Tools for Visual Studio 2013
    
  
- **Full Control** access permissions to the User Profile service application for the logged-on user
    
  

> **Note:**
> For guidance about how to set up a development environment that fits your needs, see  [Start building apps for Office and SharePoint](http://msdn.microsoft.com/library/187f8c8c-1b15-471c-80b5-69a40e67deea.aspx). 
  
    
    


## Core concepts to know about working with SharePoint social feeds
<a name="bkmk_CoreConcepts"> </a>

The SharePoint-hosted app that you create in this article uses JavaScript to build and send HTTP requests to Representational State Transfer (REST) endpoints. These requests publish a post and get the personal feed for the current user. Table 1 contains links to articles that describe general concepts you should understand before you get started.
  
    
    

**Table 1. Core concepts for working with SharePoint social feeds**


|**Article title**|**Description**|
|:-----|:-----|
| [SharePoint Add-ins](http://msdn.microsoft.com/library/cd1eda9e-8e54-4223-93a9-a6ea0d18df70%28Office.15%29.aspx) <br/> |Learn about SharePoint Add-ins and fundamental concepts for building them.  <br/> |
| [Get started developing with social features in SharePoint](get-started-developing-with-social-features-in-sharepoint.md) <br/> |Find out how to start programming with social feeds and microblog posts, following people and content (documents, sites, and tags), and working with user profiles.  <br/> |
| [Work with social feeds in SharePoint](work-with-social-feeds-in-sharepoint.md) <br/> |Learn about common programming tasks for working with social feeds and the API that you use to perform the tasks.  <br/> |
   

## Create the SharePoint Add-in project
<a name="bkmk_CreateApp"> </a>


1. On your Developer Site, open Napa, and then choose **Add New Project**.
    
  
2. Choose the **App for SharePoint** template, name the projectSocialFeedREST, and then choose the **Create** button.
    
  
3. Specify the permissions that your app needs:
    
  a. Choose the **Properties** button at the bottom of the page.
     
  b. In the **Properties** window, choose **Permissions**.
    
  c. In the **Content** category, set **Write** permissions for the **Tenant** scope.
    
  d. In the **Social** category, set **Read** permissions for the **User Profiles** scope.
    
  e. Close the **Properties** window.
    
4. Expand the **Scripts** node, choose the App.js file, and delete the contents of the file.
    
  

## Post to the social feed by using the SharePoint REST service
<a name="bkmk_PubPost"> </a>


1. In the App.js file, declare a global variable for the URL of the **SocialFeedManager** endpoint.
    
```
var feedManagerEndpoint;
```

2. Add the following code, which gets the **SPAppWebUrl** parameter from the query string and uses it to build the **SocialFeedManager** endpoint.
    
```
  $(document).ready(function () {
    var appweburl;
    var params = document.URL.split("?")[1].split("&amp;");
    for (var i = 0; i < params.length; i = i + 1) {
        var param = params[i].split("=");
        if (param[0] === "SPAppWebUrl") appweburl = param[1];
    }
    feedManagerEndpoint = decodeURIComponent(appweburl) + "/_api/social.feed";
    postToMyFeed();
});
```

3. Add the following code, which builds the HTTP **POST** request for the `/my/Feed/Post` endpoint, defines the post's creation data, and publishes the post.
    
    The request sends a **SocialRestPostCreationData** resource in the request body. **SocialRestPostCreationData** contains the target for the post (in this case, `null` to specify a root post for the current user) and a **SocialPostCreationData** complex type that defines the post's properties.
    


```
  
function postToMyFeed() {
    $.ajax( {
        url: feedManagerEndpoint + "/my/Feed/Post",
        type: "POST",
        data: JSON.stringify( { 
            'restCreationData':{
                '__metadata':{ 
                    'type':'SP.Social.SocialRestPostCreationData'
                },
                'ID':null, 
                'creationData':{ 
                    '__metadata':{ 
                        'type':'SP.Social.SocialPostCreationData'
                    },
                'ContentText':'This post was published using REST.',
                'UpdateStatusText':false
                } 
            } 
        }),
        headers: { 
            "accept": "application/json;odata=verbose",
            "content-type":"application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        success: getMyFeed,
        error: function (xhr, ajaxOptions, thrownError) { 
            alert("POST error:\\n" + xhr.status + "\\n" + thrownError);
        }
    });
}

```


## Retrieve the social feed for the current user by using the SharePoint REST service
<a name="bkmk_GetFeed"> </a>

Add the following code, which gets the **Personal** feed type for the current user by using the `/my/Feed` endpoint. The **accept** header requests that the server return a JavaScript Object Notation (JSON) representation of the feed in its response.
  
    
    

```

function getMyFeed() {
    $.ajax( {
        url: feedManagerEndpoint + "/my/Feed",
        headers: { 
            "accept": "application/json;odata=verbose"
        },
        success: feedRetrieved,
        error: function (xhr, ajaxOptions, thrownError) { 
            alert("GET error:\\n" + xhr.status + "\\n" + thrownError);
        }
    });    
}

```


## Iterate through the social feed and read from it by using the SharePoint REST service
<a name="bkmk_ReadFeed"> </a>

Add the following code, which prepares the returned data by using the **JSON.stringify** function and the **JSON.parse** function, and then iterates through the feed and gets the thread's owner and the root post's text.
  
    
    

```

function feedRetrieved(data) {
    var stringData = JSON.stringify(data);
    var jsonObject = JSON.parse(stringData); 
 
    var feed = jsonObject.d.SocialFeed.Threads; 
    var threads = feed.results;
    var feedContent = "";
    for (var i = 0; i < threads.length; i++) {
        var thread = threads[i];
        var participants = thread.Actors;
        var owner = participants.results[thread.OwnerIndex].Name;
        feedContent += '<p>' + owner + 
            ' said "' + thread.RootPost.Text + '"</p>';
    }  
    $("#message").html(feedContent); 
}
```


## Run the app for SharePoint on the Developer Site
<a name="bkmk_ReadFeed"> </a>


1. To run the app, choose the **Run Project** button at the bottom of the page.
    
  
2. In the **Do you trust** page that opens, choose the **Trust It** button. The app page opens and displays the owner's name and the text of each root post in the feed.
    
  

  
    
    

## Code example: Publish a post and get the feed for the current user by using the SharePoint REST service
<a name="bkmk_PubPosts1"> </a>

The following is the complete code example for the App.js file. It publishes a post and gets the personal feed for the current user, which is returned as a JSON object. Then it iterates through the feed.
  
    
    

```

var feedManagerEndpoint;

// Get the SPAppWebUrl parameter from the query string and build
// the feed manager endpoint.
$(document).ready(function () {
    var appweburl;
    var params = document.URL.split("?")[1].split("&amp;");
    for (var i = 0; i < params.length; i = i + 1) {
        var param = params[i].split("=");
        if (param[0] === "SPAppWebUrl") appweburl = param[1];
    }
    feedManagerEndpoint = decodeURIComponent(appweburl)+ "/_api/social.feed";
    postToMyFeed();
});

// Publish a post to the current user's feed by using the 
// "<app web URL>/_api/social.feed/my/Feed/Post" endpoint.
function postToMyFeed() {
    $.ajax( {
        url: feedManagerEndpoint + "/my/Feed/Post",
        type: "POST",
        data: JSON.stringify( { 
            'restCreationData':{
                '__metadata':{ 
                    'type':'SP.Social.SocialRestPostCreationData'
                },
                'ID':null, 
                'creationData':{ 
                    '__metadata':{ 
                        'type':'SP.Social.SocialPostCreationData'
                    },
                'ContentText':'This post was published using REST.',
                'UpdateStatusText':false
                } 
            } 
        }),
        headers: { 
            "accept": "application/json;odata=verbose",
            "content-type":"application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        success: getMyFeed,
        error: function (xhr, ajaxOptions, thrownError) { 
            alert("POST error:\\n" + xhr.status + "\\n" + thrownError);
        }
    });
}

// Get the current user's feed by using the 
// "<app web URL>/_api/social.feed/my/Feed" endpoint.
function getMyFeed() {
    $.ajax( {
        url: feedManagerEndpoint + "/my/Feed",
        headers: { 
            "accept": "application/json;odata=verbose"
        },
        success: feedRetrieved,
        error: function (xhr, ajaxOptions, thrownError) { 
            alert("GET error:\\n" + xhr.status + "\\n" + thrownError);
        }
    });    
}

// Parse the JSON data and iterate through the feed.
function feedRetrieved(data) {
    var stringData = JSON.stringify(data);
    var jsonObject = JSON.parse(stringData); 
 
    var feed = jsonObject.d.SocialFeed.Threads; 
    var threads = feed.results;
    var feedContent = "";
    for (var i = 0; i < threads.length; i++) {
        var thread = threads[i];
        var participants = thread.Actors;
        var owner = participants.results[thread.OwnerIndex].Name;
        feedContent += '<p>' + owner + 
            ' said "' + thread.RootPost.Text + '"</p>';
    }  
    $("#message").html(feedContent); 
}
```


## Next steps
<a name="bkmk_PubPosts1"> </a>

See  [Social feed REST API reference for SharePoint](social-feed-rest-api-reference-for-sharepoint.md) and [Following people and content REST API reference for SharePoint](following-people-and-content-rest-api-reference-for-sharepoint.md) for other REST endpoints that you can use to access social features.
  
    
    

## Additional resources
<a name="bk_addResources"> </a>


-  [Social feed REST API reference for SharePoint](social-feed-rest-api-reference-for-sharepoint.md)
    
  
-  [Get started developing with social features in SharePoint](get-started-developing-with-social-features-in-sharepoint.md)
    
  
-  [Work with social feeds in SharePoint](work-with-social-feeds-in-sharepoint.md)
    
  

