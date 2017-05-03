---
title: How to Retrieve user profile properties by using the .NET client object model in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: 236ebaf8-f92e-4192-9b51-0a9de0210885
---


# How to: Retrieve user profile properties by using the .NET client object model in SharePoint 2013
Learn how to retrieve user profile properties programmatically by using the SharePoint 2013 .NET client object model.
## What are user profile properties in SharePoint 2013?
<a name="bkmk_WhatIs"> </a>

User properties and user profile properties provide information about SharePoint users, such as display name, email, title, and other business and personal information. In client-side APIs, you access these properties from the  [PersonProperties](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PersonProperties.aspx) object and its [UserProfileProperties](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PersonProperties.UserProfileProperties.aspx) property. The [UserProfileProperties](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PersonProperties.UserProfileProperties.aspx) property contains all user profile properties, but the [PersonProperties](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PersonProperties.aspx) object contains commonly used properties (such as [AccountName](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PersonProperties.AccountName.aspx) , [DisplayName](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PersonProperties.DisplayName.aspx) , and [Email](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PersonProperties.Email.aspx) ) that are easier to access.
  
    
    
The  [PeopleManager](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PeopleManager.aspx) object includes the following methods that you can use to retrieve user properties and user profile properties by using the .NET client object model:
  
    
    

- The  [GetMyProperties](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PeopleManager.GetMyProperties.aspx) method and the [GetPropertiesFor](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PeopleManager.GetPropertiesFor.aspx) method return a [PersonProperties](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PersonProperties.aspx) object.
    
  
- The  [GetUserProfilePropertiesFor](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PeopleManager.GetUserProfilePropertiesFor.aspx) method and the [GetUserProfilePropertyFor](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PeopleManager.GetUserProfilePropertyFor.aspx) method return the values of the user profile properties that you specify.
    
  
User profile properties from client APIs are read-only (except the profile picture, which you can change by using the  [PeopleManager.SetMyProfilePicture](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PeopleManager.SetMyProfilePicture.aspx) method). If you want to change other user profile properties, you must use the server object model.
  
    
    

> **Note:**
> The client version of the  [UserProfile](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.UserProfile.aspx) object doesn't contain all of the user properties as the server-side version. However, the client-side version does provide the methods for creating a personal site for the current user. To retrieve the client-side [UserProfile](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.UserProfile.aspx) for the current user, use the [ProfileLoader.GetUserProfile](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.ProfileLoader.GetUserProfile.aspx) method.
  
    
    

For more information about working with profiles, see  [Work with user profiles in SharePoint 2013](work-with-user-profiles-in-sharepoint.md).
  
    
    

## Prerequisites for setting up your development environment to retrieve user profile properties by using the SharePoint 2013 .NET client object model
<a name="bk_Prereqs"> </a>

To create a console application that uses the .NET client object model to retrieve user profile properties, you'll need the following:
  
    
    

- SharePoint Server 2013 with profiles created for the current user and a target user
    
  
- Visual Studio 2012
    
  
- **Full Control** connection permissions to access the User Profile service application for the current user.
    
  

> **Note:**
> If you're not developing on the computer that is running SharePoint Server 2013, get the  [SharePoint Client Components](http://www.microsoft.com/en-us/download/details.aspx?id=35585) download that contains SharePoint 2013 client assemblies.
  
    
    


## Create the console application that retrieves user profile properties by using the SharePoint 2013 .NET client object model
<a name="bk_RetrieveProps"> </a>


1. On your development computer, open Visual Studio and choose **File**, **New**, **Project**.
    
  
2. In the **New Project** dialog box, choose **.NET Framework 4.5** from the drop-down list at the top of the dialog box.
    
  
3. From the project templates, choose **Windows**, and then choose **Console Application**.
    
  
4. Name the project UserProfilesCSOM, and then choose the **OK** button.
    
  
5. Add references to the following assemblies:
    
  - **Microsoft.SharePoint.Client**
  - **Microsoft.SharePoint.ClientRuntime**  
  - **Microsoft.SharePoint.Client.UserProfiles**
    
  
6. In the **Main** method, define variables for the server URL and the target user name, as shown in the following code.
    
```cs
const string serverUrl = "http://serverName/";
const string targetUser = "domainName\\\\userName";
```

   > Note: Remember to replace the  `http://serverName/` and `domainName\\\\userName` placeholder values before you run the code.

7. Initialize the SharePoint client context, as shown in the following code.
    
```cs
ClientContext clientContext = new ClientContext(serverUrl);
```

8. Get the target user's properties from the **PeopleManager** object, as shown in the following code.
    
```cs
PeopleManager peopleManager = new PeopleManager(clientContext);
PersonProperties personProperties = peopleManager.GetPropertiesFor(targetUser);
```

   The **personProperties** object is a client object. Some client objects contain no data until they are initialized. For example, you cannot access the property values of the **personProperties** object until you initialize it. If you try to access a property before it is initialized, you receive a **PropertyOrFieldNotInitializedException** exception.
    
  
9. To initialize the **personProperties** object, register the request that you want to run, and then run the request on the server, as shown in the following code.
    
```cs
clientContext.Load(personProperties, p => p.AccountName, p => p.UserProfileProperties);
clientContext.ExecuteQuery();
```

   When you call the **Load** method (or the **LoadQuery** method), you pass in the object that you want to retrieve or change. In this example, the call to the **Load** method passes in optional parameters to filter the request. The parameters are lambda expressions that request only the **AccountName** property and **UserProfileProperties** property of the **personProperties** object.
    
   >Tip: To reduce network traffic, request only the properties that you want to work with when you call the **Load** method. In addition, if you're working with multiple objects, group multiple calls to the **Load** method when possible before you call the **ExecuteQuery** method.

10. Iterate through the user profile properties and read the name and value of each property, as shown in the following code.
    
```cs
foreach (var property in personProperties.UserProfileProperties)
{
    Console.WriteLine(string.Format("{0}: {1}", 
        property.Key.ToString(), property.Value.ToString()));
}
```


## Code example: Retrieving all user profile properties by using the SharePoint 2013 .NET client object model
<a name="SP15UserProf_codeexample1"> </a>

The following code example shows how to retrieve and iterate through all the user profile properties of a target user, as described in the  [previous procedure](how-to-retrieve-user-profile-properties-by-using-the-net-client-object-model-in.md#bk_RetrieveProps).
  
    
    

> **Note:**
> Replace the  `http://serverName/` and `domainName\\\\userName` placeholder values before you run the code.
  
    
    


```cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.UserProfiles;

namespace UserProfilesCSOM
{
    class Program
    {
        static void Main(string[] args)
        {

            // Replace the following placeholder values with the target SharePoint site and
            // target user.
            const string serverUrl = "http://serverName/";  
            const string targetUser = "domainName\\\\userName";  

            // Connect to the client context.
            ClientContext clientContext = new ClientContext(serverUrl);

            // Get the PeopleManager object and then get the target user's properties.
            PeopleManager peopleManager = new PeopleManager(clientContext);
            PersonProperties personProperties = peopleManager.GetPropertiesFor(targetUser);

            // Load the request and run it on the server.
            // This example requests only the AccountName and UserProfileProperties
            // properties of the personProperties object.
            clientContext.Load(personProperties, p => p.AccountName, p => p.UserProfileProperties);
            clientContext.ExecuteQuery();

            foreach (var property in personProperties.UserProfileProperties)
            {
                Console.WriteLine(string.Format("{0}: {1}", 
                    property.Key.ToString(), property.Value.ToString()));
            }
            Console.ReadKey(false);

            // TODO: Add error handling and input validation.
        }
    }
}
```


## Code example: Retrieving user profile properties of people who are following me by using the SharePoint 2013 .NET client object model
<a name="SP15UserProfilescodeInApp"> </a>

The following code example shows how to get, in a SharePoint Add-in, the user profile properties of people who are following you.
  
    
    

```cs

string contextTokenString = TokenHelper.GetContextTokenFromRequest(Request);

if (contextTokenString != null)
{
    Uri sharepointUrl = new Uri(Request.QueryString["SP.Url"]);

    ClientContext clientContext = TokenHelper.GetClientContextWithContextToken(sharepointUrl.ToString(), contextTokenString, Request.Url.Authority);

    PeopleManager peopleManager = new PeopleManager(clientContext);
    ClientObjectList<PersonProperties> peopleFollowedBy = peopleManager.GetMyFollowers();
    clientContext.Load(peopleFollowedBy, people => people.Include(person => person.PictureUrl, person => person.DisplayName));
    clientContext.ExecuteQuery();

    foreach (PersonProperties personFollowedBy in peopleFollowedBy)
    {
        if (!string.IsNullOrEmpty(personFollowedBy.PictureUrl))
        {
        Response.Write("<img src=\\"" + personFollowedBy.PictureUrl + "\\" alt=\\"" + personFollowedBy.DisplayName + "\\"/>");
        }
    }
    clientContext.Dispose();
}
```


## Code example: Retrieving a set of user profile properties by using the SharePoint 2013 .NET client object model
<a name="SP15UserProfilescode2"> </a>

The following code example shows how to retrieve a specific set of user profile properties for a target user.
  
    
    

> **Note:**
> To retrieve the value for only one user profile property, use the  [GetUserProfilePropertyFor](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PeopleManager.GetUserProfilePropertyFor.aspx) method.
  
    
    

Unlike the previous code example that retrieves a  [PersonProperties](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PersonProperties.aspx) object for the target user, this example calls the [PeopleManager.GetUserProfilePropertiesFor](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PeopleManager.GetUserProfilePropertiesFor.aspx) method and passes in a [UserProfilePropertiesForUser](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.UserProfilePropertiesForUser.aspx) object that specifies the target user and the user profile properties to retrieve. [GetUserProfilePropertiesFor](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PeopleManager.GetUserProfilePropertiesFor.aspx) returns an **IEnumerable<string>** collection that contains the values of the properties that you specify.
  
    
    

> **Note:**
> Replace the  `http://serverName/` and `domainName\\\\userName` placeholder values before you run the code.
  
    
    




```cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.UserProfiles;

namespace UserProfilesCSOM
{
    class Program
    {
        static void Main(string[] args)
        {

            // Replace the following placeholder values with the target SharePoint site and the
            // target user.
            const string serverUrl = "http://serverName/";  
            const string targetUser = "domainName\\\\userName";  

            // Connect to the client context.
            ClientContext clientContext = new ClientContext(serverUrl);

            // Get the PeopleManager object.
            PeopleManager peopleManager = new PeopleManager(clientContext);

            // Retrieve specific properties by using the GetUserProfilePropertiesFor method. 
            // The returned collection contains only property values.
            string[] profilePropertyNames = new string[] { "PreferredName", "Department", "Title" };
            UserProfilePropertiesForUser profilePropertiesForUser = new UserProfilePropertiesForUser(
                clientContext, targetUser, profilePropertyNames);
            IEnumerable<string> profilePropertyValues = peopleManager.GetUserProfilePropertiesFor(profilePropertiesForUser);

            // Load the request and run it on the server.
            clientContext.Load(profilePropertiesForUser);
            clientContext.ExecuteQuery();

            // Iterate through the property values.
            foreach (var value in profilePropertyValues)
            {
                Console.Write(value + "\\n");
            }
            Console.ReadKey(false);

            // TO DO: Add error handling and input validation.
        }
    }
}

```


## Additional resources
<a name="bk_addresources"> </a>


-  [Work with user profiles in SharePoint 2013](work-with-user-profiles-in-sharepoint.md)
    
  
-  [How to: Retrieve user profile properties by using the JavaScript object model in SharePoint 2013](how-to-retrieve-user-profile-properties-by-using-the-javascript-object-model-in.md)
    
  
-  [How to: Work with user profiles and organization profiles by using the server object model in SharePoint 2013](how-to-work-with-user-profiles-and-organization-profiles-by-using-the-server-obj.md)
    
  
-  [Microsoft.SharePoint.Client.UserProfiles](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.aspx)
    
  

