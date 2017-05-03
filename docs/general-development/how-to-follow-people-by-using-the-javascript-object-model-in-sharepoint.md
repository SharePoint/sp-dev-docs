---
title: How to Follow people by using the JavaScript object model in SharePoint
ms.prod: SHAREPOINT
ms.assetid: 2643c286-47c9-4a7a-9273-7474394477d6
---


# How to: Follow people by using the JavaScript object model in SharePoint
Learn how to work with Following People features by using the SharePoint JavaScript object model.
## Why use Following People features in SharePoint?
<a name="bk_FollowingPeopleFeatures"> </a>

In SharePoint, Following People features help users to stay connected with each other. For example, when a user follows someone, that person's posts and activities show up in the user's newsfeed. By using Following People features to focus on the people who users care about, you can improve the relevance of your app or solution. In the JavaScript object model, people that you follow are represented by  [SocialActor](http://msdn.microsoft.com/library/4e369fd5-b9b0-9804-957e-b3e39c559cd4%28Office.15%29.aspx) objects. To perform core Following People tasks in the JavaScript object model, you use the [SocialFollowingManager](http://msdn.microsoft.com/library/9ee1c0c0-b864-f0c3-f0cb-4dd4f1870dfa%28Office.15%29.aspx) object. This article shows how to use the JavaScript object model to work with Following People features.
  
    
    
> **Note:**
> [SocialFollowingManager](http://msdn.microsoft.com/library/9ee1c0c0-b864-f0c3-f0cb-4dd4f1870dfa%28Office.15%29.aspx) is the recommended API to use for following people and content. However, the [PeopleManager](http://msdn.microsoft.com/library/985fd2df-0e31-6ece-b846-ba2ccb156d00%28Office.15%29.aspx) object contains additional functionality for following people, such as the [amIFollowedBy](http://msdn.microsoft.com/library/3641c469-0063-054d-355d-e56697cb08ae%28Office.15%29.aspx) method and methods that obtain the following status of other users.
  
    
    


## Prerequisites for setting up your development environment to work with Following People features by using the SharePoint JavaScript object model
<a name="bk_Prereqs"> </a>

To create the farm solution that uses the JavaScript object model to work with Following People features, you'll need:
  
    
    

- SharePoint with My Site configured, and with user profiles and personal sites created for the current user and a target user
    
  
- Visual Studio 2012
    
  
- Office Developer Tools for Visual Studio 2012
    
  
- **Full Control** access permissions to the User Profile service application for the logged-on user
    
  
- Local administrator permissions for the logged-on user
    
  

## Create a farm solution and application page in Visual Studio 2012
<a name="bk_CreateSolution"> </a>


1. Run Visual Studio as administrator, and choose **File**, **New**, **Project**.
    
  
2. In the **New Project** dialog box, choose **.NET Framework 4.5** from the drop-down list at the top of the dialog box.
    
  
3. In the **Templates** list, expand **Office/SharePoint**, choose **SharePoint Solutions**, and then choose the **SharePoint - Empty Project** template.
    
  
4. Name the project FollowPeopleJSOM, and then choose the **OK** button.
    
  
5. In the **SharePoint Customization Wizard** dialog box, choose **Deploy as a farm solution**, and then choose the **Finish** button.
    
  
6. In **Solution Explorer**, open the shortcut menu for the **FollowPeopleJSOM** project, and then add a SharePoint "Layouts" mapped folder.
    
  
7. In the **Layouts** folder, open the shortcut menu for the **FollowPeopleJSOM** folder, and then add a new SharePoint application page namedFollowPeople.aspx.
    
   > **Note:**
   > The code examples in this article define custom code in the page markup but do not use the code-behind class that Visual Studio creates for the page. 

8. Open the shortcut menu for the FollowPeople.aspx page, and then choose **Set as Startup Item**.
    
  
9. In the markup of the FollowPeople.aspx file, paste the following code between the "Main" **asp:Content** tags. This code defines controls and script references.
    
```HTML
<span id="followResults"></span><br/><br />
<button id="sendRequest" type="button"></button><br/>
<span id="message" style="color: #FF0000;"></span>
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.6.2.min.js" type="text/javascript"></script>
<SharePoint:ScriptLink name="SP.js" runat="server" ondemand="false" localizable="false" loadafterui="true" />
<SharePoint:ScriptLink name="SP.UserProfiles.js" runat="server" ondemand="false" localizable="false" loadafterui="true" />
<SharePoint:FormDigest id="FormDigest" runat="server"/>
<script type="text/javascript">
    // Replace this comment with the code for your scenario. 
</script>
```

   > **Note:**
   > The "Get followers and followed people" example doesn't use the button control or the form digest control, which is only required for operations that update server content. A form digest generates a message digest used for security validation. 

10. Replace the comment between the **script** tags with the code example from one of the following scenarios:
    
  -  [Start or stop following people](how-to-follow-people-by-using-the-javascript-object-model-in-sharepoint.md#bk_FollowPeople)  
  -  [Get followers and followed people](how-to-follow-people-by-using-the-javascript-object-model-in-sharepoint.md#bk_GetFollowers)
    
11. To test the solution, on the menu bar, choose **Debug**, **Start Debugging**.
    
  

## Code example: Start or stop following people by using the SharePoint JavaScript object model
<a name="bk_FollowPeople"> </a>

The following code example makes the current user start following or stop following a target user. It shows how to:
  
    
    

- Check whether the current user is following a target user by using the  [isFollowed](http://msdn.microsoft.com/library/2c1f62e6-fb75-ad4d-c081-36408b418c21%28Office.15%29.aspx) method.
    
  
- Get the count of people who the current user is following by using the  [getFollowedCount](http://msdn.microsoft.com/library/97b53b4f-481a-cf41-1854-8f3ff860b2bb%28Office.15%29.aspx) method.
    
  
- Start following the target user by using the  [follow](http://msdn.microsoft.com/library/40d14320-27ba-2941-b0e2-be3b5a407c89%28Office.15%29.aspx) method.
    
  
- Stop following the target user by using the  [stopFollowing](http://msdn.microsoft.com/library/65b0e9be-dc5e-09fb-c57f-7a933de09a4c%28Office.15%29.aspx) method.
    
  

> **Note:**
> Paste the following code between the **script** tags that you added in the [Create a farm solution and application page](how-to-follow-people-by-using-the-javascript-object-model-in-sharepoint.md#bk_CreateSolution) procedure. Then, change the placeholder value for the **targetUser** variable before you run the code.
  
    
    


```

// Replace the placeholder value with the account name of the target user.
var targetUser = 'domain\\userName';

var clientContext;
var followingManager;
var actorInfo;
var isFollowed;
var followedCount;

// Ensure that the SP.UserProfiles.js file is loaded before running your code.
$(document).ready(function () {
    SP.SOD.executeOrDelayUntilScriptLoaded(getFollowingStatus, 'SP.UserProfiles.js');
});

// Get the Following status of the current user.
function getFollowingStatus() {

    // Get the current client context.
    clientContext = SP.ClientContext.get_current();

    // Get the SocialFeedManager instance.
    followingManager = new SP.Social.SocialFollowingManager(clientContext);

    // Create a SocialActorInfo object to represent the target user.
    actorInfo = new SP.Social.SocialActorInfo();
    actorInfo.set_accountName(targetUser);

    // Find out whether the current user is following the target user.
    isFollowed = followingManager.isFollowed(actorInfo);
    followedCount = followingManager.getFollowedCount(1);

    // Get the information from the server.
    clientContext.executeQueryAsync(showFollowingStatus, requestFailed)
}

// Show the Following status of the current user.
function showFollowingStatus() {
    var results = '';
    results += 'Is the current user following the target user? ' + isFollowed.get_value();
    results += '<br/>Total count of followed people: ' + followedCount.get_value();
    $('#followResults').html(results);

    // Initialize the button for this example.
    $('#sendRequest').click(
        function () {
            $('#message').empty();
            toggleFollowingStatus();
        });
    $('#sendRequest').text('Toggle following status');
}

// Follow or stop following the target user.
function toggleFollowingStatus() {
    if (isFollowed.get_value() === false) {
        followingManager.follow(actorInfo);
    }
    else if (isFollowed.get_value() === true) {
        followingManager.stopFollowing(actorInfo);
    }
    clientContext.executeQueryAsync(getFollowingStatus, requestFailed);
}

// Failure callback.
function requestFailed(sender, args) {
    $('#message').html('Error: ' + args.get_message());
}
```


## Code example: Get followers and followed people by using the SharePoint JavaScript object model
<a name="bk_GetFollowers"> </a>

The following code example gets the people who the current user is following and gets the people who are followed by the current user. It shows how to:
  
    
    

- Get the people who the current user is following by using the  [getFollowed](http://msdn.microsoft.com/library/432a7cec-6add-fdb1-a79f-a93414ee8cd3%28Office.15%29.aspx) method.
    
  
- Get the people who are following the current user by using the  [getFollowers](http://msdn.microsoft.com/library/ae4a944b-c043-05fb-c74b-101d2ce4a813%28Office.15%29.aspx) method and passing **1** to represent **User** actor types.
    
  
- Iterate through the groups of people and get each person's display name, personal site URI, and picture URI.
    
  

> **Note:**
> Paste the following code between the **script** tags that you added in the [Create a farm solution and application page](how-to-follow-people-by-using-the-javascript-object-model-in-sharepoint.md#bk_CreateSolution) procedure.
  
    
    


```

var followed;
var followers;

// Ensure that the SP.UserProfiles.js file is loaded before running your code.
$(document).ready(function () {
    SP.SOD.executeOrDelayUntilScriptLoaded(getFollowedAndFollowers, 'SP.UserProfiles.js');

    // Hide the button for this example.
    $('#sendRequest').hide();
});

// Get the Following status of the current user.
function getFollowedAndFollowers() {

    // Get the current client context.
    var clientContext = SP.ClientContext.get_current();

    // Get the SocialFeedManager instance.
    var followingManager = new SP.Social.SocialFollowingManager(clientContext);

    // Get followed people and followers.
    followers = followingManager.getFollowers();
    followed = followingManager.getFollowed(1);

    // Send the request to the server.
    clientContext.executeQueryAsync(showFollowedAndFollowers, requestFailed)
}

// Show the Following status of the current user.
function showFollowedAndFollowers() {
    var results = 'The current user is following ' + followed.length + ' people: <br/>';

    for (var i = 0; i < followed.length; i++) {
        var user = followed[i];
        var name = user.get_name();
        var personalSiteUri = user.get_personalSiteUri();
        var pictureUri = user.get_imageUri();

        results += '<br/>' + name + '<br/>' + personalSiteUri + '<br/>' + pictureUri + '<br/>';
    }

    results += '<br/>The current user is followed by ' + followers.length + ' people: <br/>';

    for (var i = 0; i < followers.length; i++) {
        var user = followers[i];
        var name = user.get_name();
        var personalSiteUri = user.get_personalSiteUri();
        var pictureUri = user.get_imageUri();

        results += '<br/>' + name + '<br/>' + personalSiteUri + '<br/>' + pictureUri + '<br/>';
    }
    $('#followResults').html(results);
}

// Failure callback.
function requestFailed(sender, args) {
    $('#message').html('Error: ' + args.get_message());
}
```


## Additional resources
<a name="bk_AdditionalResources"> </a>


-  [Follow people in SharePoint](follow-people-in-sharepoint.md)
    
  
-  [How to: Follow people by using the .NET client object model in SharePoint](how-to-follow-people-by-using-the-net-client-object-model-in-sharepoint.md)
    
  

