# User profiles REST API reference
Learn about  **PeopleManager**,  **ProfileLoader**,  **UserProfile**, and other user profile-related resources and endpoints in the REST API.
 

 **Last modified:** March 09, 2015
 

 * **Applies to:** apps for SharePoint | SharePoint Online | SharePoint Server 2013* 
 

## About the request examples in this article
<a name="bk_AboutTheExamples"> </a>

The examples in this article use jQuery AJAX requests. Before you try to use the examples, do the following:
 

 

- Change  _<site url>_ and other placeholder data such as any IDs, names, or paths of SharePoint entities.
    
 
- If you're using OAuth, add an  **Authorization** header ( `"Authorization": "Bearer " + <access token>`) to send the OAuth access token.
    
 
- Remove the line breaks from the  **url** and **data** property values in the request examples. Line breaks are added to the examples to make them easier to read.
    
 
- If you want the server to return responses in Atom format, remove the  `"accept": "application/json;odata=verbose"` header.
    
 
See  [How REST requests differ by environment](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#bk_HowRequestsDiffer) for more information about changing the requests. See [Additional resources](user-profiles-rest-api-reference.md#bk_AdditionalResources) for links to more information about using the cross-domain library, OAuth, and the SharePoint REST service.
 

 

 **Tip**  The SharePoint Online REST service supports combining multiple requests into a single call to the service by using the OData  `$batch` query option. For details and links to code samples, see [Make batch requests with the REST APIs](http://msdn.microsoft.com/library/make-batch-requests-with-the-rest-apis%28Office.15%29.aspx). This option is not yet supported for on-premise SharePoint.
 


## PeopleManager resource
<a name="bk_PeopleManager"> </a>

 [Endpoint URI](user-profiles-rest-api-reference.md#bk_PeopleManagerEndpoint) | [Properties](user-profiles-rest-api-reference.md#bk_PeopleManagerProperties) | [Methods](user-profiles-rest-api-reference.md#bk_PeopleManagerMethods) | [OData representation](user-profiles-rest-api-reference.md#bk_PeopleManagerOData)
 

 
Provides methods for operations related to people.
 

 
The  [SocialRestFollowingManager](http://msdn.microsoft.com/library/c05755df-846d-4a39-941d-950d066cc6d4%28Office.15%29.aspx) API is recommended for Following People and Following Content tasks, but **PeopleManager** provides some functionality that **SocialRestFollowingManager** doesn't.
 

 

### Endpoint URI
<a name="bk_PeopleManagerEndpoint"> </a>

http:// _<site url>_/_api/sp.userprofiles.peoplemanager
 

 

#### Supported HTTP methods

GET | POST
 

 

#### Request example
<a name="bk_PeopleManagerRequestExamples"> </a>

 **GET request example:** Get the current **PeopleManager** instance
 

 

```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


### PeopleManager properties
<a name="bk_PeopleManagerProperties"> </a>

To get a property, send a GET request to the property endpoint, as shown in the following example.
 

 

```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager/<property name>",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```



|**Property**|**Type**|**R/W**|** [Returned with resource](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#NavigationProperties)**|**Description**|
|:-----|:-----|:-----|:-----|:-----|
|EditProfileLink|**String**|R|Yes|The URL of the edit profile page for the current user.|
|IsMyPeopleListPublic|**Boolean**|R|Yes|A  **Boolean** value that indicates whether the current user's **People I'm Following** list is public.|

### PeopleManager methods
<a name="bk_PeopleManagerMethods"> </a>

 [AmIFollowedBy](user-profiles-rest-api-reference.md#bk_PeopleManagerAmIFollowedBy)
 
 [AmIFollowing](user-profiles-rest-api-reference.md#bk_PeopleManagerAmIFollowing)
 
 [Follow](user-profiles-rest-api-reference.md#bk_PeopleManagerFollow)
 
 [FollowTag](user-profiles-rest-api-reference.md#bk_PeopleManagerFollowTag)
 
 [GetFollowedTags](user-profiles-rest-api-reference.md#bk_PeopleManagerGetFollowedTags)
 
 [GetFollowersFor](user-profiles-rest-api-reference.md#bk_PeopleManagerGetFollowedTags)
 
 [GetMyFollowers](user-profiles-rest-api-reference.md#bk_PeopleManagerGetMyFollowers)
 
 [GetMyProperties](user-profiles-rest-api-reference.md#bk_PeopleManagerGetMyProperties)
 
 [GetMySuggestions](user-profiles-rest-api-reference.md#bk_PeopleManagerGetMySuggestions)
 
 [GetPeopleFollowedBy](user-profiles-rest-api-reference.md#bk_PeopleManagerGetPeopleFollowedBy)
 
 [GetPeopleFollowedByMe](user-profiles-rest-api-reference.md#bk_PeopleManagerGetPeopleFollowedByMe)
 
 [GetPropertiesFor](user-profiles-rest-api-reference.md#bk_PeopleManagerGetPropertiesFor)
 
 [GetTrendingTags](user-profiles-rest-api-reference.md#bk_PeopleManagerGetTrendingTags)
 
 [GetUserProfilePropertyFor](user-profiles-rest-api-reference.md#bk_PeopleManagerGetUserProfilePropertyFor)
 
 [HideSuggestion](user-profiles-rest-api-reference.md#bk_PeopleManagerHideSuggestion)
 
 [IsFollowing](user-profiles-rest-api-reference.md#bk_PeopleManagerIsFollowing)
 
 [SetMyProfilePicture](user-profiles-rest-api-reference.md#bk_PeopleManagerSetMyProfilePicture)
 
 [StopFollowing](user-profiles-rest-api-reference.md#bk_PeopleManagerStopFollowing)
 
 [StopFollowingTag](user-profiles-rest-api-reference.md#bk_PeopleManagerStopFollowingTag)
 

 

#### AmIFollowedBy method
<a name="bk_PeopleManagerAmIFollowedBy"> </a>

Checks whether the specified user is following the current user.
 

 

|||
|:-----|:-----|
|**Endpoint**|/amifollowedby(@v)?@v=' _<account name>_'|
|**Parameters**|Type:  **String** The account name of the user, encoded and passed as an alias in the query string, as shown in the request example. See  [Implementation notes](user-profiles-rest-api-reference.md#bk_Notes) for other example formats.|
|**HTTP method**|GET|
|**Response**|Type:  **Boolean**  **true** if the specified user is following the current user, otherwise **false**.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager
    /amifollowedby(@v)?@v='i%3A0%23.f%7Cmembership%7Cuser%40domain.onmicrosoft.com'",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### AmIFollowing method
<a name="bk_PeopleManagerAmIFollowing"> </a>

Checks whether the current user is following the specified user.
 

 

|||
|:-----|:-----|
|**Endpoint**|/amifollowing(@v)?@v=' _<account name>_'|
|**Parameters**|Type:  **String** The account name of the user, encoded and passed as an alias in the query string, as shown in the request example. See  [Implementation notes](user-profiles-rest-api-reference.md#bk_Notes) for other example formats.|
|**HTTP method**|GET|
|**Response**|Type:  **Boolean**  **true** if the current user is following the specified user, otherwise **false**.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager
    /amifollowing(@v)?@v='i%3A0%23.f%7Cmembership%7Cuser%40domain.onmicrosoft.com'",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### Follow method
<a name="bk_PeopleManagerFollow"> </a>

Adds the specified user to the current user's list of followed users.
 

 
The recommended API to use for this task is  [social.following/follow](http://msdn.microsoft.com/library/c05755df-846d-4a39-941d-950d066cc6d4%28Office.15%29.aspx#bk_Follow).
 

 

|||
|:-----|:-----|
|**Endpoint**|/follow(@v)?@v=' _<account name>_'|
|**Parameters**|Type:  **String** The account name of the user, encoded and passed as an alias in the query string, as shown in the request example. See  [Implementation notes](user-profiles-rest-api-reference.md#bk_Notes) for other example formats.|
|**HTTP method**|POST|
|**Response**|None|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager
    /follow(@v)?@v='i%3A0%23.f%7Cmembership%7Cuser%40domain.onmicrosoft.com'",
  type: "POST",
  headers: { "X-RequestDigest": <form digest value> },
  success: successHandler,
  error: errorHandler
});
```


#### FollowTag method
<a name="bk_PeopleManagerFollowTag"> </a>

Adds the specified tag to the current user's list of followed tags.
 

 
The recommended API to use for this task is  [social.following/follow](http://msdn.microsoft.com/library/c05755df-846d-4a39-941d-950d066cc6d4%28Office.15%29.aspx#bk_Follow).
 

 

|||
|:-----|:-----|
|**Endpoint**|/followtag(' _<tag id>_')|
|**Parameters**|Type:  **GUID** The ID of the tag to start following. You can't query for the tag ID by using REST, but you can  [get the tag ID by using the JavaScript object model](http://msdn.microsoft.com/library/30e68cd6-6e55-4cf9-afd6-7139b0a97288%28Office.15%29.aspx#bk_getTagGuid) or the.NET client object model. Or if the tag is a trending tag, you can call the [GetTrendingTags method](user-profiles-rest-api-reference.md#bk_PeopleManagerGetTrendingTags) and get the tag ID from the [HashTag name](user-profiles-rest-api-reference.md#bk_HashTag).|
|**HTTP method**|POST|
|**Response**|None|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager
    /followtag('3e324ad0-de47-4c0a-b9c6-59fda8419430')",
  type: "POST",
  headers: { "X-RequestDigest": <form digest value> },
  success: successHandler,
  error: errorHandler
});
```


#### GetFollowedTags method
<a name="bk_PeopleManagerGetFollowedTags"> </a>

Gets tags that the user is following.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getfollowedtags( _<max count>_)|
|**Parameters**|Type:  **Int32** The maximum number of tags to get.|
|**HTTP method**|GET|
|**Response**|Type:  **Collection(String)** The tags that the user is following, up to the specified number.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager
    /getfollowedtags(5)",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetFollowersFor method
<a name="bk_PeopleManagerGetFollowersFor"> </a>

Gets the people who are following the specified user.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getfollowersfor(@v)?@v=' _<account name>_'|
|**Parameters**|Type:  **String** The account name of the user, encoded and passed as an alias in the query string, as shown in the request example. See  [Implementation notes](user-profiles-rest-api-reference.md#bk_Notes) for other example formats.|
|**HTTP method**|GET|
|**Response**|Type: Collection( [SP.UserProfiles.PersonProperties](user-profiles-rest-api-reference.md#bk_PersonProperties)) The people who are following the specified user.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager
    /getfollowersfor(@v)?@v='i%3A0%23.f%7Cmembership%7Cuser%40domain.onmicrosoft.com'",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetMyFollowers method
<a name="bk_PeopleManagerGetMyFollowers"> </a>

Gets the people who are following the current user.
 

 
The recommended API to use for this task is  [social.following/getfollowers](http://msdn.microsoft.com/library/c05755df-846d-4a39-941d-950d066cc6d4%28Office.15%29.aspx#bk_GetFollowers).
 

 

|||
|:-----|:-----|
|**Endpoint**|/getmyfollowers|
|**Parameters**|None|
|**HTTP method**|GET|
|**Response**|Type: Collection( [SP.UserProfiles.PersonProperties](user-profiles-rest-api-reference.md#bk_PersonProperties)) The people who are following the current user.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager
    /getmyfollowers",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetMyProperties method
<a name="bk_PeopleManagerGetMyProperties"> </a>

Gets user properties for the current user.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getmyproperties|
|**Parameters**|None|
|**HTTP method**|GET|
|**Response**|Type:  [SP.UserProfiles.PersonProperties](user-profiles-rest-api-reference.md#bk_PersonProperties) User properties for the current user.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager
    /getmyproperties",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetMySuggestions method
<a name="bk_PeopleManagerGetMySuggestions"> </a>

Gets suggestions for who the current user might want to follow.
 

 
The recommended API to use for this task is  [social.following/getsuggestions](http://msdn.microsoft.com/library/c05755df-846d-4a39-941d-950d066cc6d4%28Office.15%29.aspx#bk_GetSuggestions).
 

 

|||
|:-----|:-----|
|**Endpoint**|/getmysuggestions|
|**Parameters**|None|
|**HTTP method**|GET|
|**Response**|Type: Collection( [SP.UserProfiles.PersonProperties](user-profiles-rest-api-reference.md#bk_PersonProperties)) Users who the current user might want to follow.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager
    /getmysuggestions",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetPeopleFollowedBy method
<a name="bk_PeopleManagerGetPeopleFollowedBy"> </a>

Gets the people who the specified user is following.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getpeoplefollowedby(@v)?@v=' _<account name>_'|
|**Parameters**|Type:  **String** The account name of the user, encoded and passed as an alias in the query string, as shown in the request example. See  [Implementation notes](user-profiles-rest-api-reference.md#bk_Notes) for other example formats.|
|**HTTP method**|GET|
|**Response**|Type: Collection( [SP.UserProfiles.PersonProperties](user-profiles-rest-api-reference.md#bk_PersonProperties)) The people who the specified user is following.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager
    /getpeoplefollowedby(@v)?@v='i%3A0%23.f%7Cmembership%7Cuser%40domain.onmicrosoft.com'",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetPeopleFollowedByMe method
<a name="bk_PeopleManagerGetPeopleFollowedByMe"> </a>

Gets the people who the current user is following.
 

 
The recommended API to use for this task is  [social.following/getfollowed](http://msdn.microsoft.com/library/c05755df-846d-4a39-941d-950d066cc6d4%28Office.15%29.aspx#bk_GetFollowed).
 

 

|||
|:-----|:-----|
|**Endpoint**|/getpeoplefollowedbyme|
|**Parameters**|None|
|**HTTP method**|GET|
|**Response**|Type: Collection( [SP.UserProfiles.PersonProperties](user-profiles-rest-api-reference.md#bk_PersonProperties)) The people who the current user is following.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager
    /getpeoplefollowedbyme",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetPropertiesFor method
<a name="bk_PeopleManagerGetPropertiesFor"> </a>

Gets user properties for the specified user.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getpropertiesfor(@v)?@v=' _<account name>_'|
|**Parameters**|Type:  **String** The account name of the user, encoded and passed as an alias in the query string, as shown in the request example. See  [Implementation notes](user-profiles-rest-api-reference.md#bk_Notes) for other example formats.|
|**HTTP method**|GET|
|**Response**|Type:  [SP.UserProfiles.PersonProperties](user-profiles-rest-api-reference.md#bk_PersonProperties) User properties for the specified user.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager
    /getpropertiesfor(@v)?@v='i%3A0%23.f%7Cmembership%7Cuser%40domain.onmicrosoft.com'",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetTrendingTags method
<a name="bk_PeopleManagerGetTrendingTags"> </a>

Gets the most popular tags. Static method.
 

 

|||
|:-----|:-----|
|**Endpoint**|/sp.userprofiles.peoplemanager.gettrendingtags|
|**Parameters**|None|
|**HTTP method**|GET|
|**Response**|Type:  [SP.UserProfiles.HashTagCollection](user-profiles-rest-api-reference.md#bk_HashTagCollection) The 20 most popular hash tags over the past week, sorted so that the most popular tag appears first.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/
    /sp.userprofiles.peoplemanager.gettrendingtags,
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### GetUserProfilePropertyFor method
<a name="bk_PeopleManagerGetUserProfilePropertyFor"> </a>

Gets the specified user profile property for the specified user.
 

 
The  **GetUserProfilePropertiesFor** method is not implemented in the REST API. To get all user profile properties, call the [GetPropertiesFor](user-profiles-rest-api-reference.md#bk_PeopleManagerGetPropertiesFor) method and then get the user profile properties from the **UserProfileProperties** property of the returned [PersonProperties](user-profiles-rest-api-reference.md#bk_PersonProperties) object.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getuserprofilepropertyfor(accountname=@v, propertyname=' _<property name>_')?@v=' _<account name>_'|
|**Parameters**| accountnameType: StringThe account name of the user, encoded and passed as an alias in the query string, as shown in the request example. See Implementation notes for other example formats.propertyNameType: StringThe case-sensitive name of the property to get. |
|**HTTP method**|GET|
|**Response**|Type:  **String** The specified profile property for the specified user.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager
    /getuserprofilepropertyfor(accountame=@v, propertyname='PictureURL')
        ?@v='i%3A0%23.f%7Cmembership%7Cuser%domain.onmicrosoft.com'",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### HideSuggestion method
<a name="bk_PeopleManagerHideSuggestion"> </a>

Removes the specified user from the user's list of suggested people to follow.
 

 

|||
|:-----|:-----|
|**Endpoint**|/hidesuggestion(@v)?@v=' _<account name>_'|
|**Parameters**|Type:  **String** The account name of the user, encoded and passed as an alias in the query string, as shown in the request example. See  [Implementation notes](user-profiles-rest-api-reference.md#bk_Notes) for other example formats.|
|**HTTP method**|POST|
|**Response**|None|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager
    /hidesuggestion(@v)?@v='i%3A0%23.f%7Cmembership%7Cuser%domain.onmicrosoft.com'",
  type: "POST",
  headers: { "X-RequestDigest": <form digest value> },
  success: successHandler,
  error: errorHandler
});
```


#### IsFollowing method
<a name="bk_PeopleManagerIsFollowing"> </a>

Checks whether the first user is following the second user. Static method.
 

 

|||
|:-----|:-----|
|**Endpoint**|/sp.userprofiles.peoplemanager.isfollowing(  possiblefolloweraccountname=@v, possiblefolloweeaccountname=@y)  ?@v=' _<account name>_'&amp;@y=' _<account name>_'|
|**Parameters**| possiblefolloweraccountnameType: StringThe account name of the user who might be following possiblefolloweeaccountname, encoded and passed as an alias in the query string, as shown in the request example. See Implementation notes for other example formats.possiblefolloweeaccountnameType: StringThe account name of the user who might be followed, encoded and passed as an alias in the query string, as shown in the request example. See Implementation notes for other example formats. |
|**HTTP method**|GET|
|**Response**|Type:  **Boolean**  **true** if the first user is following the second user; otherwise **false**.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api
    /sp.userprofiles.peoplemanager.isfollowing(possiblefolloweraccountname=@v,possiblefolloweeaccountname=@y)
      ?@v='i%3A0%23.f%7Cmembership%7Cuser1%40domain.onmicrosoft.com'
      &amp;@y='i%3A0%23.f%7Cmembership%7Cuser2%40domain.onmicrosoft.com'",
  type: "GET",
  headers: { "accept": "application/json;odata=verbose" },
  success: successHandler,
  error: errorHandler
});
```


#### SetMyProfilePicture method
<a name="bk_PeopleManagerSetMyProfilePicture"> </a>

Uploads and sets the user profile picture. Users can upload a picture to their own profile only.
 

 

|||
|:-----|:-----|
|**Endpoint**|/setmyprofilepicture|
|**Parameters**|Type:  **Stream** The picture in BMP, JPEG, or PNG format of up to 4.76MB. Send this parameter in the request body.|
|**HTTP method**|POST|
|**Response**|None|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager
    /setmyprofilepicture",
  type: "POST",
  data: arrayBuffer,
  processData: false,
  headers: {
    "accept": "application/json;odata=verbose",
    "X-RequestDigest": $("#__REQUESTDIGEST").val(),
    "content-length": arrayBuffer.byteLength
 },
  success: successHandler,
  error: errorHandler
});
```

The following JavaScript and jQuery code example represents the contents of the App.js in a SharePoint-hosted app. It assumes the user has selected a local file in a file input control on the Default.aspx page.
 

 



```
'use strict';

$(document).ready(function () {

    // Check to see if the browser supports the HTML5 FileReader API.
    if (!window.FileReader) {
        alert('This browser does not support the FileReader API.');
    }
});

function setProfilePicture() {

    // First get the file buffer and then send the request.
    var call = getFileBuffer();
    call.done(function (arrayBuffer) {
        setMyProfilePicture(arrayBuffer);
    });
    call.fail(function (error) {
        alert(error);
    });

    // Get the ArrayBuffer for the picture file.
    function getFileBuffer() {

        // Get the file from the file input control on the page.
        // Pictures can be BMP, JPG, or PNG format and up to 5 million bytes.
        var file = $('#profilePic')[0].files[0];

        var deferred = $.Deferred();
        var reader = new FileReader();
        reader.onloadend = function (e) {
            deferred.resolve(e.target.result);
        }
        reader.onerror = function (e) {
            deferred.reject(e.target.error);
        }
        reader.readAsArrayBuffer(file);
        return deferred.promise();
    }

    // Send the POST request.
    function setMyProfilePicture(arrayBuffer) { 

        // Get the site URL and construct the endpoint URI for the rest post.
        var absoluteUrl = _spPageContextInfo.webAbsoluteUrl;
        var setPictureEndpoint = absoluteUrl +
            "/_api/sp.userprofiles.peoplemanager/setmyprofilepicture";

        $.ajax({
            url: setPictureEndpoint,
            type: "POST",
            data: arrayBuffer,
            processData: false,
            headers: {
                "accept": "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                "content-length": arrayBuffer.byteLength
            },
            success: function (data) {
                alert('SetMyProfilePicture succeeded.');
            },
            error: function (error) {
                alert(error.responseText);
            }
        });
    }
}
```


#### StopFollowing method
<a name="bk_PeopleManagerStopFollowing"> </a>

Remove the specified user from the current user's list of followed users.
 

 
The recommended API to use for this task is  [social.following/stopfollowing](http://msdn.microsoft.com/library/c05755df-846d-4a39-941d-950d066cc6d4%28Office.15%29.aspx#bk_Follow).
 

 

|||
|:-----|:-----|
|**Endpoint**|/stopfollowing(@v)?@v=' _<account name>_'|
|**Parameters**|Type:  **String** The account name of the user, encoded and passed as an alias in the query string, as shown in the request example. See  [Implementation notes](user-profiles-rest-api-reference.md#bk_Notes) for other example formats.|
|**HTTP method**|POST|
|**Response**|None|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager
    /stopfollowing(@v)?@v='i%3A0%23.f%7Cmembership%7Cuser%domain.onmicrosoft.com'",
  type: "POST",
  headers: { "X-RequestDigest": <form digest value> },
  success: successHandler,
  error: errorHandler
});
```


#### StopFollowingTag method
<a name="bk_PeopleManagerStopFollowingTag"> </a>

Remove the specified tag from the current user's list of followed tags.
 

 
The recommended API to use for this task is  [social.following/stopfollowing](http://msdn.microsoft.com/library/c05755df-846d-4a39-941d-950d066cc6d4%28Office.15%29.aspx#bk_Follow).
 

 

|||
|:-----|:-----|
|**Endpoint**|/stopfollowingtag(' _<tag id>_')|
|**Parameters**|Type:  **GUID** The ID of the tag to stop following. You can't get the tag ID by using REST, but you can  [get the tag ID by using the JavaScript object model](http://msdn.microsoft.com/library/30e68cd6-6e55-4cf9-afd6-7139b0a97288%28Office.15%29.aspx#bk_getTagGuid) or the.NET client object model.|
|**HTTP method**|POST|
|**Response**|None|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.peoplemanager
    /stopfollowingtag('3e324ad0-de47-4c0a-b9c6-59fda8419430')",
  type: "POST",
  headers: { "X-RequestDigest": <form digest value> },
  success: successHandler,
  error: errorHandler
});
```


### OData representation
<a name="bk_PeopleManagerOData"> </a>

The following example represents a  [PeopleManager](user-profiles-rest-api-reference.md#bk_PeopleManager) resource in JSON format.
 

 

```
{"d":{
  "__metadata":{,
    "id":"sp.userprofiles.peoplemanager",
    "uri":"http://<site url>/_api/sp.userprofiles.peoplemanager",
    "type":"SP.UserProfiles.PeopleManager"
  },
  "EditProfileLink":"https://domain-my.sharepoint.com:443/_layouts/15/EditProfile.aspx?UserSettingsProvider=dfb95e82%2D8132%2D404b%2Db693%2D25418fdac9b6&amp;ReturnUrl=https%3A%2F%2Fdomain%2Esharepoint%2Ecom%2F%5Fapi%2Fsp%2Euserprofiles%2Epeoplemanager",
  "IsMyPeopleListPublic":false
}}
```


## ProfileLoader resource
<a name="bk_ProfileLoader"> </a>

 [Endpoint URI](user-profiles-rest-api-reference.md#bk_ProfileLoaderEndpoint) | [Methods](user-profiles-rest-api-reference.md#bk_ProfileLoaderMethods)
 

 
Provides an alternate entry point to user profiles rather than calling methods directly.
 

 

### Endpoint URI
<a name="bk_ProfileLoaderEndpoint"> </a>

 **POST** http:// _<site url>_/_api/sp.userprofiles.profileloader.getprofileloader
 

 

#### Supported HTTP methods

POST
 

 

### ProfileLoader methods
<a name="bk_ProfileLoaderMethods"> </a>

 [CreatePersonalSiteEnqueueBulk](user-profiles-rest-api-reference.md#bk_ProfileLoaderCreatePersonalSiteEnqueueBulk)
 
 [GetOwnerUserProfile](user-profiles-rest-api-reference.md#bk_ProfileLoaderGetOwnerUserProfile)
 
 [GetProfileLoader](user-profiles-rest-api-reference.md#bk_ProfileLoaderGetProfileLoader)
 
 [GetUserProfile](user-profiles-rest-api-reference.md#bk_ProfileLoaderGetUserProfile)
 

 

#### CreatePersonalSiteEnqueueBulk method
<a name="bk_ProfileLoaderCreatePersonalSiteEnqueueBulk"> </a>

Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
 

 

|||
|:-----|:-----|
|**Endpoint**|/createpersonalsiteenqueuebulkThis request must be sent by a My Site administrator to the SharePoint Online Administration Center site, as shown in the request example.|
|**Parameters**| emailIDsType: Collection(String)The email addresses of the users to provision sites for. Maximum 200 characters. |
|**HTTP method**|POST|
|**Response**|None|

 
 **Request example**
 

 



```
$.ajax({
  url: "https://<domain>-admin.sharepoint.com/_api/sp.userprofiles.profileloader.getprofileloader
    /createpersonalsiteenqueuebulk",
  type: "POST",
  data: "{ 'emailIDs': ['usera@domain.onmicrosoft.com', 'userb@domain.onmicrosoft.com'] }",
  headers: {
    "X-RequestDigest": <form digest value>,
    "accept": "application/json;odata=verbose"
  },
  success: successHandler,
  error: errorHandler
});
```


#### GetOwnerUserProfile method
<a name="bk_ProfileLoaderGetOwnerUserProfile"> </a>

Gets the user profile of the site owner. Static method.
 

 

|||
|:-----|:-----|
|**Endpoint**|/sp.userprofiles.profileloader.getowneruserprofile|
|**Parameters**|None|
|**HTTP method**|POST|
|**Response**|Type:  [SP.UserProfiles.UserProfile](user-profiles-rest-api-reference.md#bk_UserProfile) The user profile of the site owner.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api
    /sp.userprofiles.profileloader.getowneruserprofile",
  type: "POST",
  headers: {
    "X-RequestDigest": <form digest value>,
    "accept": "application/json;odata=verbose"
  },
  success: successHandler,
  error: errorHandler
});
```


#### GetProfileLoader method
<a name="bk_ProfileLoaderGetProfileLoader"> </a>

Gets a  **ProfileLoader** object from the context cache. Static method.
 

 
Use this endpoint to access the  [CreatePersonalSiteEnqueueBulk](user-profiles-rest-api-reference.md#bk_ProfileLoaderCreatePersonalSiteEnqueueBulk) and [GetUserProfile](user-profiles-rest-api-reference.md#bk_ProfileLoaderGetUserProfile) methods.
 

 

|||
|:-----|:-----|
|**Endpoint**|/sp.userprofiles.profileloader.getprofileloader|
|**Parameters**|None|
|**HTTP method**|POST|
|**Response**|Type:  **SP.UserProfiles.ProfileLoader** The  **ProfileLoader** object from the context cache.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api
    /sp.userprofiles.profileloader.getprofileloader",
  type: "POST",
  headers: {
    "X-RequestDigest": <form digest value>,
    "accept": "application/json;odata=verbose"
  },
  success: successHandler,
  error: errorHandler
});
```


#### GetUserProfile method
<a name="bk_ProfileLoaderGetUserProfile"> </a>

Gets the user profile that corresponds to the current user. Static method.
 

 

|||
|:-----|:-----|
|**Endpoint**|/getuserprofile|
|**Parameters**|None|
|**HTTP method**|POST|
|**Response**|Type:  [SP.UserProfiles.UserProfile](user-profiles-rest-api-reference.md#bk_UserProfile) The user profile of the current user.|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url>/_api/sp.userprofiles.profileloader.getprofileloader
    /getuserprofile
  type: "POST",
  headers: {
    "X-RequestDigest": <form digest value>,
    "accept": "application/json;odata=verbose"
  },
  success: successHandler,
  error: errorHandler
});
```


## UserProfile resource
<a name="bk_UserProfile"> </a>

 [Endpoint URI](user-profiles-rest-api-reference.md#bk_UserProfileEndpoint) | [Properties](user-profiles-rest-api-reference.md#bk_UserProfileProperties) | [Methods](user-profiles-rest-api-reference.md#bk_UserProfileMethods) | [OData representation](user-profiles-rest-api-reference.md#bk_UserProfileOData)
 

 
Represents a client-side user profile for a person.
 

 

### Endpoint URI
<a name="bk_UserProfileEndpoint"> </a>

 **POST** http:// _<site url>_/_api/sp.userprofiles.profileloader.getprofileloader/getuserprofile
 

 

#### Supported HTTP methods

POST
 

 

#### Request examples
<a name="bk_UserProfileRequestExamples"> </a>

Get the user profile of the current user
 

 

```
$.ajax({
  url: "http://<site url/_api/sp.userprofiles.profileloader.getprofileloader
    /getuserprofile",
  type: "POST",
  headers: {
    "X-RequestDigest": <form digest value>,
    "accept": "application/json;odata=verbose"
  },
  success: successHandler,
  error: errorHandler
});
```


### UserProfile properties
<a name="bk_UserProfileProperties"> </a>

To get a property, send a POST request to the property endpoint, as shown in the following example.
 

 

```
$.ajax({
  url: "http://<site url/_api/sp.userprofiles.profileloader.getprofileloader
    /getuserprofile/<property name>",
  type: "POST",
  headers: {
    "X-RequestDigest": <form digest value>,
    "accept": "application/json;odata=verbose"
  },
  success: successHandler,
  error: errorHandler
});
```

All requests to the  **UserProfile** resource must be sent as POST requests because a user profile is retrieved by using the [ProfileLoader](user-profiles-rest-api-reference.md#bk_ProfileLoader) resource.
 

 


|**Property**|**Type**|**R/W**|** [Returned with resource](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx#NavigationProperties)**|**Description**|
|:-----|:-----|:-----|:-----|:-----|
|FollowedContent|**FollowedContent**|R|No|An object containing the user's  **FollowedDocumentsUrl** and **FollowedSitesUrl**.|
|AccountName|**String**|R|Yes|The account name of the user. (SharePoint Online only)|
|DisplayName|**String**|R|Yes|The display name of the user. (SharePoint Online only)|
|O15FirstRunExperience|**Int32**|R|Yes|The  **FirstRun** flag of the user. (SharePoint Online only)|
|PersonalSite|**SP.Site**|R|No|The personal site of the user.|
|PersonalSiteCapabilities|**Int32**|R|Yes|The capabilities of the user's personal site. Represents a bitwise  **PersonalSiteCapabilities** value: None = 0; Profile Value = 1; Social Value = 2; Storage Value = 4; MyTasksDashboard Value = 8; Education Value = 16; Guest Value = 32.|
|PersonalSiteFirstCreationError|**String**|R|Yes|The error thrown when the user's personal site was first created, if any. (SharePoint Online only)|
|PersonalSiteFirstCreationTime|**DateTime**|R|Yes|The date and time when the user's personal site was first created. (SharePoint Online only)|
|PersonalSiteInstantiationState|**Int32**|R|Yes|The status for the state of the personal site instantiation. See  **PersonalSiteInstantiationState** in the .NET client object model reference for a list of instantiation state values.|
|PersonalSiteLastCreationTime|**DateTime**|R|Yes|The date and time when the user's personal site was last created. (SharePoint Online only)|
|PersonalSiteNumberOfRetries|**Int32**|R|Yes|The number of attempts made to create the user's personal site. (SharePoint Online only)|
|PictureImportEnabled|**Boolean**|R|Yes|A  **Boolean** value that indicates whether the user's picture is imported from Exchange.|
|PublicUrl|**String**|R|Yes|The public URL of the personal site of the current user. (SharePoint Online only)|
|UrlToCreatePersonalSite|**String**|R|Yes|The URL used to create the user's personal site.|

### UserProfile methods
<a name="bk_UserProfileMethods"> </a>

 [CreatePersonalSiteEnque](user-profiles-rest-api-reference.md#bk_UserProfile)
 
 [ShareAllSocialData](user-profiles-rest-api-reference.md#bk_UserProfileShareAllSocialData)
 

 

#### CreatePersonalSiteEnque method
<a name="bk_UserProfileCreatePersonalSiteEnque"> </a>

Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files.
 

 
For SharePoint Online development, My Site Host administrators can also use the  [CreatePersonalSiteEnqueueBulk](user-profiles-rest-api-reference.md#bk_ProfileLoaderCreatePersonalSiteEnqueueBulk) method to create personal sites for one or more users.
 

 

|||
|:-----|:-----|
|**Endpoint**|/createpersonalsiteenque|
|**Parameters**|Type:  **Boolean**  **true** if this is an interactively (web) initiated request, or **false** if this is a non-interactively (client) initiated request.|
|**HTTP method**|POST|
|**Response**|None|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url/_api/sp.userprofiles.profileloader.getprofileloader
    /getuserprofile/createpersonalsiteenque(true)",
  type: "POST",
  headers: { "X-RequestDigest": <form digest value> },
  success: successHandler,
  error: errorHandler
});
```


#### ShareAllSocialData method
<a name="bk_UserProfileShareAllSocialData"> </a>

Sets the privacy settings for this profile.
 

 

|||
|:-----|:-----|
|**Endpoint**|/createpersonalsiteenque|
|**Parameters**|Type:  **Boolean**  **true** to make all social data public; **false** to make all social data private.|
|**HTTP method**|POST|
|**Response**|None|

 
 **Request example**
 

 



```
$.ajax({
  url: "http://<site url/_api/sp.userprofiles.profileloader.getprofileloader
    /getuserprofile/shareallsocialdata(true)",
  type: "POST",
  headers: { "X-RequestDigest": <form digest value> },
  success: successHandler,
  error: errorHandler
});
```


### OData representation
<a name="bk_UserProfileOData"> </a>

The following example represents a  [UserProfile](fields-rest-api-reference.md#bk_) resource in JSON format.
 

 

```
{"d":{
  "__metadata":{,
    "id":"https://<site url>/_api/sp.userprofiles.profileloader.getprofileloader/getuserprofile",
    "uri":"https://<site url>/_api/sp.userprofiles.profileloader.getprofileloader/getuserprofile",
    "type":"SP.UserProfiles.UserProfile"
  },
  "FollowedContent":{"__deferred":{"uri":"https://<site url>/_api/sp.userprofiles.profileloader.getprofileloader/getuserprofile/FollowedContent"}},
  "PersonalSite":{"__deferred":{"uri":"https://<site url>/_api/sp.userprofiles.profileloader.getprofileloader/getuserprofile/PersonalSite"}},
  "AccountName":"i:0#.f|membership|user@domain.onmicrosoft.com",
  "DisplayName":"User Name",
  "O15FirstRunExperience":16,
  "PersonalSiteCapabilities":14,
  "PersonalSiteFirstCreationError":"Personal Site already exists.",
  "PersonalSiteFirstCreationTime":"2014-03-23T17:37:48",
  "PersonalSiteInstantiationState":2,
  "PersonalSiteLastCreationTime":"2014-03-23T17:38:34",
  "PersonalSiteNumberOfRetries":2,
  "PictureImportEnabled":true,
  "PublicUrl":"https://domain-my.sharepoint.com:443/Person.aspx?accountname=i%3A0%23%2Ef%7Cmembership%7Cuser%40domain%2Eonmicrosoft%2Ecom",
  "UrlToCreatePersonalSite":"https://domain-my.sharepoint.com/personal/user_domain_onmicrosoft_com/"
}}
```


## SP.UserProfiles resources returned in user profile-related REST responses
<a name="bk_UserProfile"> </a>

The following REST resources from the  **SP.UserProfiles** namespace are returned in server responses for user profile-related REST requests.
 

 

### HashTag
<a name="bk_HashTag"> </a>

Represents a hash tag in the collection of trending tags.
 

 


|**Property**|**Type**|**Description**|
|:-----|:-----|:-----|
|Name|**String**|The hash tag's internal name. The name is constructed with the following components: the prefix  `L0|#0` + the tag ID + the character `|` + the tag name. Example:  `L0|#03e324ad0-de47-4c0a-b9c6-59fda8419430|#tagname`|
|UseCount|**Int64**|The number of times that the hash tag is used.|

### HashTagCollection
<a name="bk_HashTagCollection"> </a>

Represents a collection of hash tags in microblog posts. This collection is returned by the  [GetTrendingTags](user-profiles-rest-api-reference.md#bk_PeopleManagerGetTrendingTags) method.
 

 


|**Property**|**Type**|**Description**|
|:-----|:-----|:-----|
|Items|Collection( [SP.UserProfiles.HashTag](user-profiles-rest-api-reference.md#bk_HashTag))|The hash tags in the collection.|

### PersonProperties
<a name="bk_PersonProperties"> </a>

Represents user properties.
 

 


|**Property**|**Type**|**Description**|
|:-----|:-----|:-----|
|AccountName|**String**|The user's account name.|
|DirectReports|**Collection(String)**|The account names of the user's direct reports.|
|DisplayName|**String**|The user's display name.|
|Email|**String**|The user's email address.|
|ExtendedManagers|**Collection(String)**|The account names of the user's manager hierarchy.|
|ExtendedReports|**Collection(String)**|The account names of the user's extended reports.|
|IsFollowed|**Boolean**|A  **Boolean** value that indicates whether the user is being followed by the current user.|
|LatestPost|**String**|The user's latest microblog post.|
|Peers|**Collection(String)**|The account names of the user's peers.|
|PersonalUrl|**String**|The absolute URL of the user's personal site.|
|PictureUrl|**String**|The URL of the user's profile picture.|
|Title|**String**|The user's title.|
|UserProfileProperties|**Collection(** [SP.KeyValue](complex-types-in-the-sp-namespace.md#bk_KeyValue) **)**|The user profile properties for the user.|
|UserUrl|**String**|The URL of the user's profile page.|

## Implementation notes
<a name="bk_Notes"> </a>

The format of the account name for users depends on the SharePoint environment, as described in Table 1:
 

 

**Table 1. Account name formats**


|**SharePoint environment**|**Example account name format**|**How to pass the account name by using an alias in the query string**|
|:-----|:-----|:-----|
|SharePoint Online, or SharePoint 2013 on-premises using forms|i:0#.f|membership| _user_@ _domain_.com|…/ _<method>_(@v)?@v='i%3A0%23.f%7Cmembership%7C _user_%40 _domain_.onmicrosoft.com'|
|SharePoint 2013 on-premises using Windows claims|i:0#.w| _domain_\ _user_|…/ _<method>_(@v)?@v='i%3A0%23.w%7C _domain_\ _user_'|
|SharePoint 2013 on-premises using SAML claims|i:05:t|adfs with roles| _user_@ _domain_.com|…/ _<method>_(@v)?@v='i%3A05%3At%7Cadfs+with+roles%7C _user_%40 _domain_.com'|

 **Note**  The format of the login name in the Security Assertion Markup Language (SAML)-based claims authentication example assumes that the  [identity claim](http://technet.microsoft.com/en-us/library/cc262350.aspx#plansaml) is configured to use email address or user principal name. SAML claims authentication cannot be used in SharePoint-hosted apps.
 


## Additional resources
<a name="bk_Notes"> </a>


-  [Complete basic operations using SharePoint 2013 REST endpoints](http://msdn.microsoft.com/library/complete-basic-operations-using-sharepoint-2013-rest-endpoints%28Office.15%29.aspx)
    
 
-  [Access SharePoint 2013 data from add-ins using the cross-domain library](http://msdn.microsoft.com/library/access-sharepoint-2013-data-from-add-ins-using-the-cross-domain-library%28Office.15%29.aspx)
    
 
-  [OAuth authentication and authorization flow for cloud-hosted apps](http://msdn.microsoft.com/library/context-token-oauth-flow-for-sharepoint-add-ins%28Office.15%29.aspx)
    
 
-  [Use OData query operations in SharePoint REST requests](http://msdn.microsoft.com/library/use-odata-query-operations-in-sharepoint-rest-requests%28Office.15%29.aspx)
    
 
-  [REST API reference and samples](rest-api-reference-and-samples.md)
    
 
-  [Get to know the SharePoint 2013 REST service](http://msdn.microsoft.com/library/get-to-know-the-sharepoint-2013-rest-service%28Office.15%29.aspx)
    
 
-  [Following people and content REST API reference for SharePoint 2013](http://msdn.microsoft.com/library/c05755df-846d-4a39-941d-950d066cc6d4%28Office.15%29.aspx)
    
 
-  [Social feed REST API reference for SharePoint 2013](http://msdn.microsoft.com/library/f1cb914f-1e91-4e23-bf53-d2ab323eac13%28Office.15%29.aspx)
    
 
