---
title: Retrieve user profile properties by using the JavaScript object model in SharePoint
description: Learn how to retrieve user properties and user profile properties programmatically by using the SharePoint JavaScript object model.
ms.date: 04/24/2017
ms.assetid: c6e1ca38-134f-428a-8d21-b8b2615b161b
ms.localizationpriority: high
---

# Retrieve user profile properties by using the JavaScript object model in SharePoint

Learn how to retrieve user properties and user profile properties programmatically by using the SharePoint JavaScript object model.

## What are user properties and user profile properties in SharePoint?

User properties and user profile properties provide information about SharePoint users, such as display name, email, title, and other business and personal information. In client-side APIs, you access these properties from the [PersonProperties](/previous-versions/office/sharepoint-visio/jj712733(v=office.15)) object and its [userProfileProperties](/previous-versions/office/sharepoint-visio/jj679700(v=office.15)) property. The [userProfileProperties](/previous-versions/office/sharepoint-visio/jj679700(v=office.15)) property contains all user profile properties, but the [PersonProperties](/previous-versions/office/sharepoint-visio/jj712733(v=office.15)) object contains commonly used properties (such as [accountName](/previous-versions/office/sharepoint-visio/jj667852(v=office.15)), [displayName](/previous-versions/office/sharepoint-visio/jj667922(v=office.15)), and [email](/previous-versions/office/sharepoint-visio/jj679810(v=office.15))) that are easier to access.

The [PeopleManager](/previous-versions/office/sharepoint-visio/jj667813(v=office.15)) object includes the following methods that you can use to retrieve user properties and user profile properties by using the JavaScript object model:

- The [getMyProperties](/previous-versions/office/sharepoint-visio/jj679865(v=office.15)) method and the [getPropertiesFor](/previous-versions/office/sharepoint-visio/jj712745(v=office.15)) method return a [PersonProperties](/previous-versions/office/sharepoint-visio/jj712733(v=office.15)) object.
- The [getUserProfilePropertiesFor](/previous-versions/office/sharepoint-visio/jj679779(v=office.15)) method and the [getUserProfilePropertyFor](/previous-versions/office/sharepoint-visio/jj667887(v=office.15)) method return the values of the user profile properties that you specify.

User profile properties from client APIs are read only (except the profile picture, which you can change by using the [PeopleManager.setMyProfilePicture](/previous-versions/office/sharepoint-visio/jj667836(v=office.15)) method). If you want to change other user profile properties, you must use the server object model. For more information about working with user profiles, see [Work with user profiles in SharePoint](work-with-user-profiles-in-sharepoint.md).

> [!NOTE]
> The client-side [UserProfile](/previous-versions/office/sharepoint-visio/jj667833(v=office.15)) object doesn't contain all of the user properties as the server-side version. However, the client-side version does provide the methods for creating a personal site for the current user. To retrieve it, use the [ProfileLoader.getUserProfile](/previous-versions/office/sharepoint-visio/jj679826(v=office.15)) method.

## Prerequisites for setting up your development environment to retrieve user properties by using the SharePoint JavaScript object model

To create an application page that uses the JavaScript object model to retrieve user properties, you'll need:

- SharePoint with profiles created for the current user and a target user
- Visual Studio 2022
- Office Developer Tools for Visual Studio 2022
- **Full Control** connection permissions to access the User Profile service application for the current user

## Create the application page in Visual Studio

1. On the server running SharePoint, open Visual Studio and choose **File**, **New**, **Project**.
`. In the **New Project** dialog box, choose **.NET Framework 4.5** from the drop-down list at the top of the dialog box.
`. In the **Templates** list, expand **Office/SharePoint**, choose the **SharePoint Solutions** category, and then choose the **SharePoint Project** template.
`. Name the project UserProfilesJSOM, and then choose the **OK** button.
`. In the **SharePoint Customization Wizard** dialog box, enter the URL to your target SharePoint site, choose **Deploy as a farm solution**, and then choose the **Finish** button.
`. In **Solution Explorer**, open the shortcut menu for the UserProfilesJSOM project, and then add a SharePoint "Layouts" mapped folder.
`. In the **Layouts** folder, open the shortcut menu for theUserProfilesJSOM folder, and then add a new SharePoint application page namedUserProfiles.aspx.

    > [!NOTE]
    > The code examples in this article define custom code in the page markup but don't use the code-behind class file that Visual Studio creates for the page.

1. Open the shortcut menu for the UserProfiles.aspx page, and then choose **Set as Startup Item**.
1. In the markup for the UserProfiles.aspx page, paste the following code inside the "Main" **asp:Content** tags. This code adds a **span** control that displays the results of the query, **SharePoint:ScriptLink** controls that reference SharePoint JavaScript class library files, and **script** tags to contain your custom logic.

```HTML
<span id="results"></span><br />
<SharePoint:ScriptLink ID="ScriptLink1"
                       name="SP.js"
                       runat="server"
                       ondemand="false"
                       localizable="false"
                       loadafterui="true" />
<SharePoint:ScriptLink ID="ScriptLink2"
                       name="SP.UserProfiles.js"
                       runat="server"
                       ondemand="false"
                       localizable="false"
                       loadafterui="true" />
<script type="text/javascript">
  // Replace this comment with the code for your scenario.
</script>
```

1. To add logic to retrieve user profile properties, replace the comment between the **script** tags with the code example from one of the following scenarios:

    - [Retrieve user profile properties from the PersonProperties object and its userProfileProperties property](how-to-retrieve-user-profile-properties-by-using-the-javascript-object-model-in.md#code-example-retrieving-user-profile-properties-from-the-personproperties-object-and-its-userprofileproperties-property-in-the-sharepoint-javascript-object-model)
    - [Retrieve a set of user profile properties by using the getUserProfilePropertiesFor method](how-to-retrieve-user-profile-properties-by-using-the-javascript-object-model-in.md#code-example-retrieving-a-set-of-user-profile-properties-by-using-the-getuserprofilepropertiesfor-method-in-the-sharepoint-javascript-object-model)

1. To test the application page, on the menu bar, choose **Debug**, **Start Debugging**. If you're prompted to modify the web.config file, choose the **OK** button.

## Code example: Retrieving user profile properties from the PersonProperties object and its userProfileProperties property in the SharePoint JavaScript object model

The following code example shows how to get user profile properties for a target user by querying the [PersonProperties](/previous-versions/office/sharepoint-visio/jj712733(v=office.15)) object and its [userProfileProperties](/previous-versions/office/sharepoint-visio/jj679700(v=office.15)) property. It shows how to:

- Get the [PersonProperties](/previous-versions/office/sharepoint-visio/jj712733(v=office.15)) object that represents the target user by using the [getPropertiesFor](/previous-versions/office/sharepoint-visio/jj712745(v=office.15)) method. (To get the [PersonProperties](/previous-versions/office/sharepoint-visio/jj712733(v=office.15)) object for the current user, use the [getMyProperties](/previous-versions/office/sharepoint-visio/jj679865(v=office.15)) method.)
- Get a property directly from the [PersonProperties](/previous-versions/office/sharepoint-visio/jj712733(v=office.15)) object. This example gets the [displayName](/previous-versions/office/sharepoint-visio/jj667922(v=office.15)) property.
- Get a property from the [userProfileProperties](/previous-versions/office/sharepoint-visio/jj679700(v=office.15)) property of the [PersonProperties](/previous-versions/office/sharepoint-visio/jj712733(v=office.15)) object. This example gets the **Department** property.

> [!NOTE]
> Paste the following code between the **script** tags that you added to the UserProfiles.aspx file in the [Create the application page](how-to-retrieve-user-profile-properties-by-using-the-javascript-object-model-in.md#create-the-application-page-in-visual-studio) procedure. Replace the `domainName\\userName` placeholder value before you run the code. (This code example doesn't use the code-behind class file.)

```javascript
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
  var messageText = " \\"DisplayName\\" property is " + personProperties.get_displayName();

  // Get a property from the UserProfileProperties property.
  messageText += "<br />\\"Department\\" property is " + personProperties.get_userProfileProperties()['Department'];
  $get("results").innerHTML = messageText;
}

// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
  $get("results").innerHTML = "Error: " + args.get_message();
}
```

## Code example: Retrieving a set of user profile properties by using the getUserProfilePropertiesFor method in the SharePoint JavaScript object model

The following code example retrieves the values for a specified set of user profile properties for a target user by using the [getUserProfilePropertiesFor](/previous-versions/office/sharepoint-visio/jj679779(v=office.15)) method. It shows how to:

- Create a [UserProfilePropertiesForUser](/previous-versions/office/sharepoint-visio/jj679838(v=office.15)) object that specifies the target user and the user profile properties to retrieve. This example gets the **PreferredName** property and the **Department** property.
- Get the values of the specified properties by using the [getUserProfilePropertiesFor](/previous-versions/office/sharepoint-visio/jj679779(v=office.15)) method and passing in the [UserProfilePropertiesForUser](/previous-versions/office/sharepoint-visio/jj679838(v=office.15)) object. (To retrieve the value for only one user profile property, use the [getUserProfilePropertyFor](/previous-versions/office/sharepoint-visio/jj667887(v=office.15)) method.)
- Get the values from the returned array of property values.

> [!NOTE]
> Paste the following code between the **script** tags that you added to the UserProfiles.aspx file in the [Create the application page](how-to-retrieve-user-profile-properties-by-using-the-javascript-object-model-in.md#create-the-application-page-in-visual-studio) procedure. Replace the `domainName\\\\userName` placeholder value before you run the code. (This code example doesn't use the code-behind class file.)

```javascript
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
  userProfileProperties = peopleManager.getUserProfilePropertiesFor(userProfilePropertiesForUser);

  // Load the UserProfilePropertiesForUser object and send the request.
  clientContext.load(userProfilePropertiesForUser);
  clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);
}

// This function runs if the executeQueryAsync call succeeds.
function onRequestSuccess() {
  var messageText = "\\"PreferredName\\" property is " + userProfileProperties[0];
  messageText += "<br />\\"Department\\" property is " + userProfileProperties[1];
  $get("results").innerHTML = messageText;
}

// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
  $get("results").innerHTML = "Error: " + args.get_message();
}
```

## See also

- [Work with user profiles in SharePoint](work-with-user-profiles-in-sharepoint.md)
- [How to: Retrieve user profile properties by using the .NET client object model in SharePoint](how-to-retrieve-user-profile-properties-by-using-the-net-client-object-model-in.md)
- [How to: Work with user profiles and organization profiles by using the server object model in SharePoint](how-to-work-with-user-profiles-and-organization-profiles-by-using-the-server-obj.md)
- [SP.UserProfiles namespace (sp.userprofiles)](/previous-versions/office/sharepoint-visio/jj642931(v=office.15))
