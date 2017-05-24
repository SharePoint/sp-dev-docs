---
title: Follow content in SharePoint
ms.prod: SHAREPOINT
ms.assetid: 30e68cd6-6e55-4cf9-afd6-7139b0a97288
---



# Follow content in SharePoint
Learn about common programming tasks for following content (documents, sites, and tags) in SharePoint.
## APIs for following content in SharePoint
<a name="bkmk_APIversions"> </a>

When users follow documents, sites, or tags, status updates from documents, conversations on sites, and notifications of tag use show up in their newsfeed. The features related to following content can be seen on the **Newsfeed** and the **Following** content pages.
  
    
    
SharePoint provides the following APIs that you can use to programmatically follow content:
  
    
    

- Client object models for managed code
    
  - .NET client object model
    
  
  - Silverlight client object model
    
  
  - Mobile client object model
    
  
- JavaScript object model
    
  
- Representational State Transfer (REST) service
    
  
- Server object model
    
  
As a best practice in SharePoint development, use client APIs when you can. Client APIs include the client object models, a JavaScript object model, and a REST service. For more information about the APIs in SharePoint and when to use them, see  [Choose the right API set in SharePoint](choose-the-right-api-set-in-sharepoint).
  
    
    
Each API includes a manager object that you use to perform core tasks for following content.
  
    
    

> **Note:**
> The same APIs are used to follow people. See  [Follow people in SharePoint](follow-people-in-sharepoint) for an overview of Following People tasks.
  
    
    

Table 1 shows the manager and other key objects (or REST resources) in the APIs and the class library (or access point) where you can find them.
  
    
    

> **Note:**
> The Silverlight and mobile client object models are not included in Table 1 or Table 2 because they provide the same core functionality as the .NET client object model and use the same signatures. The Silverlight client object model is defined in Microsoft.SharePoint.Client.UserProfiles.Silverlight.dll, and the mobile client object model is defined in Microsoft.SharePoint.Client.UserProfiles.Phone.dll. 
  
    
    


**Table 1. SharePoint APIs used for following content programmatically**

|**API**|**Key objects**|
|:-----|:-----|
|.NET client object model  <br/> See:  [How to: Follow documents and sites by using the .NET client object model in SharePoint](how-to-follow-documents-and-sites-by-using-the-net-client-object-model-in-sharep)|Manager object:            [SocialFollowingManager](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.aspx) <br/> Primary namespace:            [Microsoft.SharePoint.Client.Social](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.aspx) <br/> Other key objects:            [SocialActor](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialActor.aspx) , [SocialActorInfo](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialActorInfo.aspx) , [SocialActorType](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialActorType.aspx) , [SocialActorTypes](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialActorTypes.aspx) <br/> Class library:           Microsoft.SharePoint.Client.UserProfiles.dll  |
|JavaScript object model|Manager object:            [SocialFollowingManager](http://msdn.microsoft.com/library/9ee1c0c0-b864-f0c3-f0cb-4dd4f1870dfa%28Office.15%29.aspx) <br/> Primary namespace:            [SP.Social](http://msdn.microsoft.com/library/43d47f01-c085-0e77-bd01-48bcb7d5bb35%28Office.15%29.aspx) <br/> Other key objects:            [SocialActor](http://msdn.microsoft.com/library/4e369fd5-b9b0-9804-957e-b3e39c559cd4%28Office.15%29.aspx),  [SocialActorInfo](http://msdn.microsoft.com/library/d940db32-1561-c868-bb66-0612e2031f17%28Office.15%29.aspx),  [SocialActorType](http://msdn.microsoft.com/library/fbde74da-f292-dc87-0b7e-81bc5b7a880c%28Office.15%29.aspx),  [SocialActorTypes](http://msdn.microsoft.com/library/a460c3e6-ed88-117d-6755-4c5803a154a0%28Office.15%29.aspx) <br/> Class library:           SP.UserProfiles.js  |
|REST service  <br/> See  [How to: Follow documents, sites, and tags by using the REST service in SharePoint](how-to-follow-documents-sites-and-tags-by-using-the-rest-service-in-sharepoint-2)|Manager resource:            [social.following](following-people-and-content-rest-api-reference-for-sharepoint) <br/> Primary namespace (OData):           **sp.social.SocialRestFollowingManager** <br/> Other key resources:           **SocialActor**, **SocialActorInfo**, **SocialActorType**, **SocialActorTypes** <br/> Access point:            `<siteUri>/_api/social.following` |
|Server object model|Manager object:            [SPSocialFollowingManager](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.aspx) <br/> Primary namespace:            [Microsoft.Office.Server.Social](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.aspx) <br/> Other key objects:            [SPSocialActor](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialActor.aspx) , [SPSocialActorInfo](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialActorInfo.aspx) , [SPSocialActorType](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialActorType.aspx) , [SPSocialActorTypes](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialActorTypes.aspx) <br/> Class library:           Microsoft.Office.Server.UserProfiles.dll  |
   

## Common programming tasks for following content in SharePoint
<a name="bkmk_CommonTasks"> </a>

Table 2 shows common programming tasks for following content and the members that you use to perform them. Members are from the .NET client object model (CSOM), JavaScript object model (JSOM), REST service, and server object model (SSOM).
  
    
    

> **Note:**
> The same APIs are used to follow people. See  [Follow people in SharePoint](follow-people-in-sharepoint) for an overview of Following People tasks.
  
    
    


**Table 2. API for common tasks for following content in SharePoint**


|**Task**|**Members**|
|:-----|:-----|
|Create an instance of a manager object in the context of the current user|CSOM:  [SocialFollowingManager](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.aspx) <br/> JSOM:  [SocialFollowingManager](http://msdn.microsoft.com/library/9ee1c0c0-b864-f0c3-f0cb-4dd4f1870dfa%28Office.15%29.aspx) <br/> REST:  `<siteUri>/_api/social.following` <br/> SSOM:  [SPSocialFollowingManager](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.aspx)|
|Create an instance of a manager object in the context of a specified user|CSOM: not implemented  <br/> JSOM: not implemented  <br/> REST: not implemented  <br/> SSOM:  [SPSocialFollowingManager](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.aspx) (overloaded)|
|Have the current user start following (stop following) an item|CSOM:  [Follow](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.Follow.aspx) ( [StopFollowing](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.StopFollowing.aspx) ) <br/> JSOM:  [follow](http://msdn.microsoft.com/library/40d14320-27ba-2941-b0e2-be3b5a407c89%28Office.15%29.aspx) ( [stopFollowing](http://msdn.microsoft.com/library/65b0e9be-dc5e-09fb-c57f-7a933de09a4c%28Office.15%29.aspx))  <br/> REST: **POST** [`<siteUri>/_api/social.following/Follow`](following-people-and-content-rest-api-reference-for-sharepoint#bk_Follow) ( [`<siteUri>/_api/social.following/StopFollowing`](following-people-and-content-rest-api-reference-for-sharepoint#bk_StopFollowing))           and pass the _actor_ parameter in the request body <br/> SSOM:  [Follow](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.Follow.aspx) ( [StopFollowing](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.StopFollowing.aspx) )|
|Find out whether the current user is following a particular item|CSOM:  [IsFollowed](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.IsFollowed.aspx) <br/> JSOM:  [isFollowed](http://msdn.microsoft.com/library/2c1f62e6-fb75-ad4d-c081-36408b418c21%28Office.15%29.aspx) <br/> REST: **POST** [`<siteUri>/_api/social.following/IsFollowed`](following-people-and-content-rest-api-reference-for-sharepoint#bk_IsFollowed) and pass the _actor_ parameter in the request body <br/> SSOM:  [IsFollowed](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.IsFollowed.aspx)|
|Get the documents, sites, and/or tags that the current user is following|CSOM:  [GetFollowed](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.GetFollowed.aspx) <br/> JSOM:  [getFollowed](http://msdn.microsoft.com/library/432a7cec-6add-fdb1-a79f-a93414ee8cd3%28Office.15%29.aspx) <br/> REST: **GET** [`<siteUri>/_api/social.following/my/Followed(types=2)`](following-people-and-content-rest-api-reference-for-sharepoint#bk_Followed) (documents = **2**, sites = **4**, tags = **8**)  <br/> SSOM:  [GetFollowed](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.GetFollowed.aspx)|
|Get the count of documents, sites, and/or tags that the user is following|CSOM:  [GetFollowedCount](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.GetFollowedCount.aspx) <br/> JSOM:  [getFollowedCount](http://msdn.microsoft.com/library/97b53b4f-481a-cf41-1854-8f3ff860b2bb%28Office.15%29.aspx) <br/> REST: **GET** [`<siteUri>/_api/social.following/my/FollowedCount(types=2)`](following-people-and-content-rest-api-reference-for-sharepoint#bk_FollowedCount) (documents = **2**, sites = **4**, tags = **8**)  <br/> SSOM:  [GetFollowedCount](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.GetFollowedCount.aspx)|
|Get the URI of the site that lists the current user's followed documents|CSOM:  [FollowedDocumentsUri](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.FollowedDocumentsUri.aspx) <br/> JSOM:  [followedDocumentsUri](http://msdn.microsoft.com/library/3a70b9c7-abd7-94ff-d730-70298673d6ec%28Office.15%29.aspx) <br/> REST: **GET** [`<siteUri>/_api/social.following/my/FollowedDocumentsUri`](following-people-and-content-rest-api-reference-for-sharepoint#bk_MyFollowedDocumentsUri) <br/> SSOM:  [FollowedDocumentsUri](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.FollowedDocumentsUri.aspx)|
|Get the URI of the site that lists the current user's followed sites|CSOM:  [FollowedSitesUri](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.FollowedSitesUri.aspx) <br/> JSOM:  [followedSitesUri](http://msdn.microsoft.com/library/829404bc-1b3a-7545-5e95-0922df330084%28Office.15%29.aspx) <br/> REST: **GET** [`<siteUri>/_api/social.following/my/FollowedSitesUri`](following-people-and-content-rest-api-reference-for-sharepoint#bk_MyFollowedSitesUri) <br/> SSOM:  [FollowedSitesUri](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.FollowedSitesUri.aspx)|
   

> **Note:**
> For examples that show how to use the REST service to follow content, see  [How to: Follow documents, sites, and tags by using the REST service in SharePoint](how-to-follow-documents-sites-and-tags-by-using-the-rest-service-in-sharepoint-2). 
  
    
    


## How to get a tag's GUID based on the tag's name by using the JavaScript object model
<a name="bk_getTagGuid"> </a>

To start and stop following a tag or to find out whether the current user is following it, you need to use the tag's GUID. The following code shows how to get the GUID based on the tag name.
  
    
    
Before you run the code, you need to add a reference to **sp.taxonomy.js** and change the placeholder tag name with the name of an existing tag.
  
    
    



```

function getTagGuid() {
    var tagName = '#tally';
    var clientContext = new SP.ClientContext.get_current();
    var label = SP.Taxonomy.LabelMatchInformation.newObject(clientContext);
    label.set_termLabel(tagName);
    label.set_trimUnavailable(false);
    var taxSession = SP.Taxonomy.TaxonomySession.getTaxonomySession(clientContext);
    var termStore = taxSession.getDefaultKeywordsTermStore();
    var termSet = termStore.get_hashTagsTermSet();
    terms = termSet.getTerms(label);
    clientContext.load(terms);
    clientContext.executeQueryAsync(
        function () {
            var tag = terms.get_item(0);
            if (tag !== null) {
                var tagGuid = tag.get_id().toString();
                if (!SP.ScriptUtility.isNullOrEmptyString(tagGuid)) {
                    alert(tagGuid);
                }
            }
        },
        function (sender, args) {
            alert(args.get_message());
        }
    );
}

```


## Additional resources
<a name="bk_addResources"> </a>


-  [How to: Follow documents and sites by using the .NET client object model in SharePoint](how-to-follow-documents-and-sites-by-using-the-net-client-object-model-in-sharep)
    
  
-  [How to: Follow documents, sites, and tags by using the REST service in SharePoint](how-to-follow-documents-sites-and-tags-by-using-the-rest-service-in-sharepoint-2)
    
  
-  [Following people and content REST API reference for SharePoint](following-people-and-content-rest-api-reference-for-sharepoint)
    
  
-  [Social and collaboration features in SharePoint](social-and-collaboration-features-in-sharepoint)
    
  
-  [Get started developing with social features in SharePoint](get-started-developing-with-social-features-in-sharepoint)
    
  
-  [Follow people in SharePoint](follow-people-in-sharepoint)
    
  
