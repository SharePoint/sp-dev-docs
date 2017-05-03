---
title: How to Retrieve user profile properties by using the JavaScript object model in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: c6e1ca38-134f-428a-8d21-b8b2615b161b
---


# How to: Retrieve user profile properties by using the JavaScript object model in SharePoint 2013
Learn how to retrieve user properties and user profile properties programmatically by using the SharePoint 2013 JavaScript object model.
## What are user properties and user profile properties in SharePoint 2013?
<a name="bkmk_WhatIs"> </a>

User properties and user profile properties provide information about SharePoint users, such as display name, email, title, and other business and personal information. In client-side APIs, you access these properties from the  [PersonProperties](http://msdn.microsoft.com/library/0274d97f-b697-f436-2aaf-f5bcf9b70df8%28Office.15%29.aspx) object and its [userProfileProperties](http://msdn.microsoft.com/library/56516666-7425-4993-222f-f745cf266e89%28Office.15%29.aspx) property. The [userProfileProperties](http://msdn.microsoft.com/library/56516666-7425-4993-222f-f745cf266e89%28Office.15%29.aspx) property contains all user profile properties, but the [PersonProperties](http://msdn.microsoft.com/library/0274d97f-b697-f436-2aaf-f5bcf9b70df8%28Office.15%29.aspx) object contains commonly used properties (such as [accountName](http://msdn.microsoft.com/library/ad1551bf-dad8-d54e-880a-8a4388fad44e%28Office.15%29.aspx),  [displayName](http://msdn.microsoft.com/library/ffc35ed6-5f3e-c86d-6931-97ff9d825a8b%28Office.15%29.aspx), and  [email](http://msdn.microsoft.com/library/74302f73-aaf6-920b-0605-812b0dbf4568%28Office.15%29.aspx)) that are easier to access.
  
    
    
The  [PeopleManager](http://msdn.microsoft.com/library/985fd2df-0e31-6ece-b846-ba2ccb156d00%28Office.15%29.aspx) object includes the following methods that you can use to retrieve user properties and user profile properties by using the JavaScript object model:
  
    
    

- The  [getMyProperties](http://msdn.microsoft.com/library/be001abc-a431-8d48-8e6f-161251aa19ac%28Office.15%29.aspx) method and the [getPropertiesFor](http://msdn.microsoft.com/library/097464db-2630-4c7a-fd0c-0f333680b5a4%28Office.15%29.aspx) method return a [PersonProperties](http://msdn.microsoft.com/library/0274d97f-b697-f436-2aaf-f5bcf9b70df8%28Office.15%29.aspx) object.
    
  
- The  [getUserProfilePropertiesFor](http://msdn.microsoft.com/library/8674e96f-d320-4a50-1580-9a4568842ee5%28Office.15%29.aspx) method and the [getUserProfilePropertyFor](http://msdn.microsoft.com/library/da048bfa-54c6-8216-e8ef-09bd84f68d8d%28Office.15%29.aspx) method return the values of the user profile properties that you specify.
    
  
User profile properties from client APIs are read-only (except the profile picture, which you can change by using the  [PeopleManager.setMyProfilePicture](http://msdn.microsoft.com/library/a4f8d745-f211-e750-4fd0-047091804683%28Office.15%29.aspx) method). If you want to change other user profile properties, you must use the server object model. For more information about working with user profiles, see [Work with user profiles in SharePoint 2013](work-with-user-profiles-in-sharepoint.md).
  
    
    

> **Note:**
> The client-side  [UserProfile](http://msdn.microsoft.com/library/f8c4a219-fbaa-2e50-1bd5-fdc80051b33d%28Office.15%29.aspx) object doesn't contain all of the user properties as the server-side version. However, the client-side version does provide the methods for creating a personal site for the current user. To retrieve it, use the [ProfileLoader.getUserProfile](http://msdn.microsoft.com/library/8e30e811-5da1-b6d0-a8b5-befea9b22496%28Office.15%29.aspx) method.
  
    
    


## Prerequisites for setting up your development environment to retrieve user properties by using the SharePoint 2013 JavaScript object model
<a name="bk_Prereqs"> </a>

To create an application page that uses the JavaScript object model to retrieve user properties, you'll need:
  
    
    

- SharePoint Server 2013 with profiles created for the current user and a target user
    
  
- Visual Studio 2012
    
  
- Office Developer Tools for Visual Studio 2013
    
  
- **Full Control** connection permissions to access the User Profile service application for the current user
    
  

## Create the application page in Visual Studio 2012
<a name="bk_CreateAppPage"> </a>


1. On the server running SharePoint Server 2013, open Visual Studio and choose **File**, **New**, **Project**.
    
  
2. In the **New Project** dialog box, choose **.NET Framework 4.5** from the drop-down list at the top of the dialog box.
    
  
3. In the **Templates** list, expand **Office/SharePoint**, choose the **SharePoint Solutions** category, and then choose the **SharePoint 2013 Project** template.
    
  
4. Name the project UserProfilesJSOM, and then choose the **OK** button.
    
  
5. In the **SharePoint Customization Wizard** dialog box, enter the URL to your target SharePoint site, choose **Deploy as a farm solution**, and then choose the **Finish** button.
    
  
6. In **Solution Explorer**, open the shortcut menu for the UserProfilesJSOM project, and then add a SharePoint "Layouts" mapped folder.
    
  
7. In the **Layouts** folder, open the shortcut menu for theUserProfilesJSOM folder, and then add a new SharePoint application page namedUserProfiles.aspx.
    
   > Note: The code examples in this article define custom code in the page markup but do not use the code-behind class file that Visual Studio creates for the page. 

8. Open the shortcut menu for the UserProfiles.aspx page, and then choose **Set as Startup Item**.
    
  
9. In the markup for the UserProfiles.aspx page, paste the following code inside the "Main" **asp:Content** tags. This code adds a **span** control that displays the results of the query, **SharePoint:ScriptLink** controls that reference SharePoint JavaScript class library files, and **script** tags to contain your custom logic.
    
```HTML
<span id="results"></span><br />
<SharePoint:ScriptLink ID="ScriptLink1" name="SP.js" runat="server"
    ondemand="false" localizable="false" loadafterui="true" />
<SharePoint:ScriptLink ID="ScriptLink2" name="SP.UserProfiles.js" runat="server"
    ondemand="false" localizable="false" loadafterui="true" />
<script type="text/javascript">
    // Replace this comment with the code for your scenario.
</script>
```

10. To add logic to retrieve user profile properties, replace the comment between the **script** tags with the code example from one of the following scenarios:
    
  -  [Retrieve user profile properties from the PersonProperties object and its userProfileProperties property](how-to-retrieve-user-profile-properties-by-using-the-javascript-object-model-in.md#bk_examplePersonPropsObj)  
  -  [Retrieve a set of user profile properties by using the getUserProfilePropertiesFor method](how-to-retrieve-user-profile-properties-by-using-the-javascript-object-model-in.md#bk_exampleGetUPMethod)
    
  
11. To test the application page, on the menu bar, choose **Debug**, **Start Debugging**. If you're prompted to modify the web.config file, choose the **OK** button.
    
  

## Code example: Retrieving user profile properties from the PersonProperties object and its userProfileProperties property in the SharePoint 2013 JavaScript object model
<a name="bk_examplePersonPropsObj"> </a>

The following code example shows how to get user profile properties for a target user by querying the  [PersonProperties](http://msdn.microsoft.com/library/0274d97f-b697-f436-2aaf-f5bcf9b70df8%28Office.15%29.aspx) object and its [userProfileProperties](http://msdn.microsoft.com/library/56516666-7425-4993-222f-f745cf266e89%28Office.15%29.aspx) property. It shows how to:
  
    
    

- Get the  [PersonProperties](http://msdn.microsoft.com/library/0274d97f-b697-f436-2aaf-f5bcf9b70df8%28Office.15%29.aspx) object that represents the target user by using the [getPropertiesFor](http://msdn.microsoft.com/library/097464db-2630-4c7a-fd0c-0f333680b5a4%28Office.15%29.aspx) method. (To get the [PersonProperties](http://msdn.microsoft.com/library/0274d97f-b697-f436-2aaf-f5bcf9b70df8%28Office.15%29.aspx) object for the current user, use the [getMyProperties](http://msdn.microsoft.com/library/be001abc-a431-8d48-8e6f-161251aa19ac%28Office.15%29.aspx) method.)
    
  
- Get a property directly from the  [PersonProperties](http://msdn.microsoft.com/library/0274d97f-b697-f436-2aaf-f5bcf9b70df8%28Office.15%29.aspx) object. This example gets the [displayName](http://msdn.microsoft.com/library/ffc35ed6-5f3e-c86d-6931-97ff9d825a8b%28Office.15%29.aspx) property.
    
  
- Get a property from the  [userProfileProperties](http://msdn.microsoft.com/library/56516666-7425-4993-222f-f745cf266e89%28Office.15%29.aspx) property of the [PersonProperties](http://msdn.microsoft.com/library/0274d97f-b697-f436-2aaf-f5bcf9b70df8%28Office.15%29.aspx) object. This example gets the **Department** property.
    
  

> **Note:**
> Paste the following code between the **script** tags that you added to the UserProfiles.aspx file in the [Create the application page](how-to-retrieve-user-profile-properties-by-using-the-javascript-object-model-in.md#bk_CreateAppPage) procedure. Replace the `domainName\\userName` placeholder value before you run the code. (This code example does not use the code-behind class file.)
  
    
    


```

var personProperties;

// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.
SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');

function getUserProperties() {

    // Replace the placeholder value with the target user's credentials.
    var targetUser = "domainName\\userName";

    // Get the current client context and PeopleManager instance.
    var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);

    // Get user properties for the target user.
    // To get the PersonProperties object for the current user, use the
    // getMyProperties method.
    personProperties = peopleManager.getPropertiesFor(targetUser);

    // Load the PersonProperties object and send the request.
    clientContext.load(personProperties);
    clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);
}

// This function runs if the executeQueryAsync call succeeds.
function onRequestSuccess() {

    // Get a property directly from the PersonProperties object.
    var messageText = " \\"DisplayName\\" property is "
        + personProperties.get_displayName();

    // Get a property from the UserProfileProperties property.
    messageText += "<br />\\"Department\\" property is "
        + personProperties.get_userProfileProperties()['Department'];
    $get("results").innerHTML = messageText;
}

// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
    $get("results").innerHTML = "Error: " + args.get_message();
}
```


## Code example: Retrieving a set of user profile properties by using the getUserProfilePropertiesFor method in the SharePoint 2013 JavaScript object model
<a name="bk_exampleGetUPMethod"> </a>

The following code example retrieves the values for a specified set of user profile properties for a target user by using the  [getUserProfilePropertiesFor](http://msdn.microsoft.com/library/8674e96f-d320-4a50-1580-9a4568842ee5%28Office.15%29.aspx) method. It shows how to:
  
    
    

- Create a  [UserProfilePropertiesForUser](http://msdn.microsoft.com/library/97bc94ec-62c8-dc38-d204-c5ad9ee8faee%28Office.15%29.aspx) object that specifies the target user and the user profile properties to retrieve. This example gets the **PreferredName** property and the **Department** property.
    
  
- Get the values of the specified properties by using the  [getUserProfilePropertiesFor](http://msdn.microsoft.com/library/8674e96f-d320-4a50-1580-9a4568842ee5%28Office.15%29.aspx) method and passing in the [UserProfilePropertiesForUser](http://msdn.microsoft.com/library/97bc94ec-62c8-dc38-d204-c5ad9ee8faee%28Office.15%29.aspx) object. (To retrieve the value for only one user profile property, use the [getUserProfilePropertyFor](http://msdn.microsoft.com/library/da048bfa-54c6-8216-e8ef-09bd84f68d8d%28Office.15%29.aspx) method.)
    
  
- Get the values from the returned array of property values.
    
  

> **Note:**
> Paste the following code between the **script** tags that you added to the UserProfiles.aspx file in the [Create the application page](how-to-retrieve-user-profile-properties-by-using-the-javascript-object-model-in.md#bk_CreateAppPage) procedure. Replace the `domainName\\\\userName` placeholder value before you run the code. (This code example does not use the code-behind class file.)
  
    
    


```

var userProfileProperties;

// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.
SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');

function getUserProperties() {

    // Replace the placeholder value with the target user's credentials.
    var targetUser = "domainName\\\\userName";

    // Get the current client context and PeopleManager instance.
    var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);

    // Specify the properties to retrieve and target user for the 
    // UserProfilePropertiesForUser object.
    var profilePropertyNames = ["PreferredName", "Department"];
    var userProfilePropertiesForUser = 
        new SP.UserProfiles.UserProfilePropertiesForUser(
            clientContext,
            targetUser,
            profilePropertyNames);

    // Get user profile properties for the target user.
    // To get the value for only one user profile property, use the
    // getUserProfilePropertyFor method.
    userProfileProperties = peopleManager.getUserProfilePropertiesFor(
        userProfilePropertiesForUser);

    // Load the UserProfilePropertiesForUser object and send the request.
    clientContext.load(userProfilePropertiesForUser);
    clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);
}

// This function runs if the executeQueryAsync call succeeds.
function onRequestSuccess() {
    var messageText = "\\"PreferredName\\" property is " 
        + userProfileProperties[0];
    messageText += "<br />\\"Department\\" property is " 
        + userProfileProperties[1];
    $get("results").innerHTML = messageText;
}

// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
    $get("results").innerHTML = "Error: " + args.get_message();
}
```


## Additional resources
<a name="bk_addresources"> </a>


-  [Work with user profiles in SharePoint 2013](work-with-user-profiles-in-sharepoint.md)
    
  
-  [How to: Retrieve user profile properties by using the .NET client object model in SharePoint 2013](how-to-retrieve-user-profile-properties-by-using-the-net-client-object-model-in.md)
    
  
-  [How to: Work with user profiles and organization profiles by using the server object model in SharePoint 2013](how-to-work-with-user-profiles-and-organization-profiles-by-using-the-server-obj.md)
    
  
-  [SP.UserProfiles namespace (sp.userprofiles)](http://msdn.microsoft.com/library/8c1fcceb-cd9a-b25c-32f4-1cfb0578278c%28Office.15%29.aspx)
    
  

