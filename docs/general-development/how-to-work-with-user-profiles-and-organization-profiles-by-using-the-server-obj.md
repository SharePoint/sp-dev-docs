---
title: How to Work with user profiles and organization profiles by using the server object model in SharePoint
ms.prod: SHAREPOINT
ms.assetid: 13f16dc3-f652-4fb3-996b-5f2166236d2b
---


# How to: Work with user profiles and organization profiles by using the server object model in SharePoint
Learn how to create, retrieve, and change SharePoint user profiles and user profile properties programmatically by using the SharePoint server object model.
## What are user profiles in SharePoint?

In SharePoint, user profiles represent SharePoint users. User profile properties represent information about the users and also about the properties themselves. For example, properties include the account name or email address of a user and the data type of a property. You can use the server object model to programmatically create, retrieve, and change user profiles, profile subtypes, and profile properties.
  
    
    

> **Note:**
> For more information about common programming tasks for working with user profiles and the API that you use to perform the tasks, see  [Work with user profiles in SharePoint](work-with-user-profiles-in-sharepoint.md). 
  
    
    


## Prerequisites for setting up your development environment to work with user profiles by using the SharePoint server object model
<a name="bkmk_Prereqs"> </a>

To create a console application that uses the server object model to work with user profiles and user profile properties, you'll need:
  
    
    

- SharePoint with the profile created for the current user.
    
  
- Visual Studio 2012.
    
  
- Permissions to create, retrieve, and change user profile objects. (Creating and modifying profiles requires the **Modify User Profiles** permission.)
    
  

## Create a console application that works with user profiles by using the SharePoint server object model
<a name="bkmk_CreateConsoleApp"> </a>


1. Open Visual Studio and choose **File**, **New**, **Project**.
    
  
2. In the **New Project** dialog box, choose **.NET Framework 4.5** from the drop-down list at the top of the dialog box.
    
  
3. In the **Templates** list, choose **Windows**, and then choose **Console Application**.
    
  
4. Name the project UserProfilesSSOM, and then choose the **OK** button.
    
  > Note: Make sure the **Prefer 32-bit** setting is not selected in the project's **Build** properties.

5. Add references to the following assemblies:
    
  - Microsoft.Office.Server
  - Microsoft.Office.Server.UserProfiles
  - Microsoft.SharePoint
  - System.Web

  
6. Replace the contents of the **Program** class with the code example from one of the following scenarios:
    
  -  [Create a user profile](how-to-work-with-user-profiles-and-organization-profiles-by-using-the-server-obj.md#bkmk_CreateUP)
  -  [Create a user profile property](how-to-work-with-user-profiles-and-organization-profiles-by-using-the-server-obj.md#bkmk_CreateUPProp)
  -  [Retrieve and change user profiles](how-to-work-with-user-profiles-and-organization-profiles-by-using-the-server-obj.md#bkmk_GetChangeUP)
  -  [Retrieve and change attributes for user profile properties](how-to-work-with-user-profiles-and-organization-profiles-by-using-the-server-obj.md#bkmk_GetChangePropAttributes)
  -  [Retrieve and change values for user properties](how-to-work-with-user-profiles-and-organization-profiles-by-using-the-server-obj.md#bkmk_GetChangePropValues)
    
  
7. To test the console application, on the menu bar, choose **Debug**, **Start Debugging**. You can check your changes from the **Manage Profile Service** page for the User Profile Service Application in Central Administration.
    
  

## Code example: Create user profiles by using the SharePoint server object model
<a name="bkmk_CreateUP"> </a>

In SharePoint, user profiles represent SharePoint users. Profile types and subtypes help categorize profiles into groups, such as employees or customers. Profile types and subtypes are used to set common profile properties and attributes at the subtype level. SharePoint Server includes a default user profile subtype.
  
    
    
The following code example creates a  [UserProfile](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.UserProfile.aspx) object that is associated with the default user profile subtype. Some user profile properties are automatically populated with information that is imported from the directory that contains user accounts, such as Active Directory Domain Services. For a code example that creates a custom subtype, see [ProfileSubtype](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.ProfileSubtype.aspx) .
  
    
    

> **Note:**
> Change the domain\\username andservername placeholder values before you run the code.
  
    
    




```cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Office.Server;
using Microsoft.Office.Server.UserProfiles;
using Microsoft.SharePoint;
using System.Web;
namespace UserProfilesSSOM
{
    class Program
    {
        static void Main(string[] args)
        {

            // Replace "domain\\username" and "servername" with actual values.
            string newAccountName = "domain\\username";
            using (SPSite site = new SPSite("http://servername"))
            {
                SPServiceContext serviceContext = SPServiceContext.GetContext(site);
                try
                {

                    // Create a user profile that uses the default user profile
                    // subtype.
                    UserProfileManager userProfileMgr = new UserProfileManager(serviceContext);
                    UserProfile userProfile = userProfileMgr.CreateUserProfile(newAccountName);

                    Console.WriteLine("A profile was created for " + userProfile.DisplayName);
                    Console.Read();
                }

                catch (System.Exception e)
                {
                    Console.WriteLine(e.GetType().ToString() + ": " + e.Message);
                    Console.Read();
                }
            }
        }
    }
}
```


## Code example: Create user profile properties by using the SharePoint server object model
<a name="bkmk_CreateUPProp"> </a>

User profile properties describe personal and organizational information about users. You can create and add a custom profile property to the default set of SharePoint profile properties.
  
    
    
A profile property and its attributes are represented by a set of linked objects: a  [CoreProperty](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.CoreProperty.aspx) object, a [ProfileTypeProperty](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.ProfileTypeProperty.aspx) object, and a [ProfileSubtypeProperty](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.ProfileSubtypeProperty.aspx) object.
  
    
    
The following code example creates a  [CoreProperty](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.CoreProperty.aspx) that has a URL data type (or optionally a [CoreProperty](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.CoreProperty.aspx) that has a multivalue string data type). In addition, it creates a [ProfileTypeProperty](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.ProfileTypeProperty.aspx) and a [ProfileTypeProperty](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.ProfileTypeProperty.aspx) that define availability, privacy, and other settings for the property. The [ProfileSubtypeProperty.DefaultPrivacy](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.ProfileSubtypeProperty.DefaultPrivacy.aspx) property controls the visibility of properties and other My Site content. For a complete list of the possible data types for profile property values, see [PropertyDataType](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.PropertyDataType.aspx) .
  
    
    

> **Note:**
> Change the servername placeholder value before you run the code.
  
    
    




```cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Office.Server;
using Microsoft.Office.Server.Administration;
using Microsoft.Office.Server.UserProfiles;
using Microsoft.SharePoint;
using System.Web;
namespace UserProfilesSSOM
{
    class Program
    {
        static void Main(string[] args)
        {

            // Replace "servername" with an actual value.
            using (SPSite site = new SPSite("http://servername"))
            {
                SPServiceContext serviceContext = SPServiceContext.GetContext(site);
                try
                {
                    ProfilePropertyManager profilePropMgr = new UserProfileConfigManager(serviceContext).ProfilePropertyManager;
                    CorePropertyManager corePropMgr = profilePropMgr.GetCoreProperties();

                    // Create a URL property.
                    CoreProperty coreProp = corePropMgr.Create(false);
                    coreProp.Name = "AppsWebsite";
                    coreProp.DisplayName = "Apps site";
                    coreProp.Type = PropertyDataType.URL;
                    coreProp.Length = 100;
                    corePropMgr.Add(coreProp);

                    //// Create a multivalue property.
                    //// To create this property, comment out the previous
                    //// block of code and uncomment this block of code.
                    //CoreProperty coreProp = corePropMgr.Create(false);
                    //coreProp.Name = "PublishedAppsList";
                    //coreProp.DisplayName = "Published apps";
                    //coreProp.Type = PropertyDataType.StringMultiValue;
                    //coreProp.IsMultivalued = true;
                    //coreProp.Length = 100;
                    //corePropMgr.Add(coreProp);

                    // Create a profile type property and make the core property 
                    // visible in the Details section page.
                    ProfileTypePropertyManager typePropMgr = profilePropMgr.GetProfileTypeProperties(ProfileType.User);
                    ProfileTypeProperty typeProp = typePropMgr.Create(coreProp);
                    typeProp.IsVisibleOnViewer = true;
                    typePropMgr.Add(typeProp);

                    // Create a profile subtype property.
                    ProfileSubtypeManager subtypeMgr = ProfileSubtypeManager.Get(serviceContext);
                    ProfileSubtype subtype = subtypeMgr.GetProfileSubtype(ProfileSubtypeManager.GetDefaultProfileName(ProfileType.User));
                    ProfileSubtypePropertyManager subtypePropMgr = profilePropMgr.GetProfileSubtypeProperties(subtype.Name);
                    ProfileSubtypeProperty subtypeProp = subtypePropMgr.Create(typeProp);
                    subtypeProp.IsUserEditable = true;
                    subtypeProp.DefaultPrivacy = Privacy.Public;
                    subtypeProp.UserOverridePrivacy = true;
                    subtypePropMgr.Add(subtypeProp);

                    Console.WriteLine("The properties were created.");
                    Console.Read();
                }

                catch (System.Exception e)
                {
                    Console.WriteLine(e.GetType().ToString() + ": " + e.Message);
                    Console.Read();
                }
            }
        }
    }
}
```


## Code example: Retrieve and change user profiles by using the SharePoint server object model
<a name="bkmk_GetChangeUP"> </a>

The following code example retrieves all user profiles within the context and changes the value of a user's  [DisplayName](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.UserProfile.DisplayName.aspx) property. Most profile properties are accessed by using the [UserProfile.Item](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.UserProfile.Item.aspx) accessor.
  
    
    

> **Note:**
> Change the domain\\username andservername placeholder values before you run the code.
  
    
    


```cs

using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Office.Server;
using Microsoft.Office.Server.UserProfiles;
using Microsoft.SharePoint;
using System.Web;
namespace UserProfilesSSOM
{
    class Program
    {
        static void Main(string[] args)
        {

            // Replace "domain\\username" and "servername" with actual values.
            string targetAccountName = "domain\\username";
            using (SPSite site = new SPSite("http://servername"))
            {
                SPServiceContext serviceContext = SPServiceContext.GetContext(site);
                try
                {

                    // Retrieve and iterate through all of the user profiles in this context.
                    Console.WriteLine("Retrieving user profiles:");
                    UserProfileManager userProfileMgr = new UserProfileManager(serviceContext);
                    IEnumerator userProfiles = userProfileMgr.GetEnumerator();
                    while (userProfiles.MoveNext())
                    {
                        UserProfile userProfile = (UserProfile)userProfiles.Current;
                        Console.WriteLine(userProfile.AccountName);
                    }

                    // Retrieve a specific user profile. Change the value of a user profile property
                    // and save (commit) the change on the server.
                    UserProfile user = userProfileMgr.GetUserProfile(targetAccountName);
                    Console.WriteLine("\\nRetrieving user profile for " + user.DisplayName + ".");
                    user.DisplayName = "Pat";
                    user.Commit();
                    Console.WriteLine("\\nThe user\\'s display name has been changed.");
                    Console.Read();
                }

                catch (System.Exception e)
                {
                    Console.WriteLine(e.GetType().ToString() + ": " + e.Message);
                    Console.Read();
                }
            }
        }
    }
}
```


## Code example: Retrieve and change attributes for user profile properties by using the SharePoint server object model
<a name="bkmk_GetChangePropAttributes"> </a>

The following code example retrieves the set of properties that represent a specific user property and its attributes, and then it changes the  [CoreProperty.DisplayName](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.CoreProperty.DisplayName.aspx) attribute, [ProfileTypeProperty.IsVisibleOnViewer](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.ProfileTypeProperty.IsVisibleOnViewer.aspx) attribute, and [ProfileSubtypeProperty.PrivacyPolicy](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.ProfileSubtypeProperty.PrivacyPolicy.aspx) attribute. These changes apply globally to the property set. [ProfileSubtypeProperty.PrivacyPolicy](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.ProfileSubtypeProperty.PrivacyPolicy.aspx) specifies whether users are required to provide a value for the property. [PrivacyPolicy](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.ProfileSubtypeProperty.PrivacyPolicy.aspx) applies to user profile properties only.
  
    
    

> **Note:**
> Change the servername placeholder value before you run the code.
  
    
    


```cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Office.Server;
using Microsoft.Office.Server.UserProfiles;
using Microsoft.SharePoint;
using System.Web;
namespace UserProfilesSSOM
{
    class Program
    {
        static void Main(string[] args)
        {

            // Replace "servername" with an actual value.
            using (SPSite site = new SPSite("http://servername"))
            {
                SPServiceContext serviceContext = SPServiceContext.GetContext(site);
                try
                {
                    ProfilePropertyManager profilePropMgr = new UserProfileConfigManager(serviceContext).ProfilePropertyManager;
                    ProfileSubtypePropertyManager subtypePropMgr = profilePropMgr.GetProfileSubtypeProperties("UserProfile");

                    // Retrieve a specific property set (a profile subtype property and
                    // its associated core and profile type properties).
                    // Changing these properties affects all instances of this property set.
                    ProfileSubtypeProperty subtypeProp = subtypePropMgr.GetPropertyByName(PropertyConstants.Title);
                    CoreProperty coreProp = subtypeProp.CoreProperty;
                    ProfileTypeProperty typeProp = subtypeProp.TypeProperty;

                    Console.WriteLine("Property name: " + coreProp.DisplayName);
                    Console.WriteLine("IsVisibleOnViewer = " + typeProp.IsVisibleOnViewer);
                    Console.WriteLine("PrivacyPolicy = " + subtypeProp.PrivacyPolicy);
                    Console.WriteLine("Press Enter to change the values.");
                    Console.Read();

                    // Change attributes on the properties and save (commit) the changes
                    // on the server.
                    coreProp.DisplayName = "Position";
                    coreProp.Commit();
                    typeProp.IsVisibleOnViewer = true;
                    typeProp.Commit();
                    subtypeProp.PrivacyPolicy = PrivacyPolicy.OptOut;
                    subtypeProp.Commit();
                    Console.WriteLine("The property attributes have been changed.");
                    Console.Read();
                }

                catch (System.Exception e)
                {
                    Console.WriteLine(e.GetType().ToString() + ": " + e.Message);
                    Console.Read();
                }
            }
        }
    }
}
```


## Code example: Retrieve and change values for user properties by using the SharePoint server object model
<a name="bkmk_GetChangePropValues"> </a>

The following code example retrieves all **UserProfile** type properties and retrieves the property values for a specific user. Then, it changes the single-value [PictureUrl](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.PropertyConstants.PictureUrl.aspx) property and the multivalue [PastProjects](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.PropertyConstants.PastProjects.aspx) property. For the complete list of profile property name constants, see [PropertyConstants](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.PropertyConstants.aspx) .
  
    
    

> **Note:**
> Change the domain\\username, http://servername/docLib/pic.jpg, and servername placeholder values before you run the code.
  
    
    


```cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Office.Server;
using Microsoft.Office.Server.UserProfiles;
using Microsoft.SharePoint;
using System.Web;
namespace UserProfilesSSOM
{
    class Program
    {
        static void Main(string[] args)
        {

            // Replace "domain\\username," "http://servername/docLib/pic.jpg," and "servername" with actual values.
            string accountName = "domain\\username";
            string newPictureUrl = "http://servername/docLib/pic.jpg";
            using (SPSite site = new SPSite("http://servername"))
            {
                SPServiceContext serviceContext = SPServiceContext.GetContext(site);

                try
                {
                    UserProfileManager userProfileMgr = new UserProfileManager(serviceContext);
                    ProfilePropertyManager profilePropMgr = new UserProfileConfigManager(serviceContext).ProfilePropertyManager;
                   
                    // Retrieve all properties for the "UserProfile" profile subtype,
                    // and retrieve the property values for a specific user.
                    ProfileSubtypePropertyManager subtypePropMgr = profilePropMgr.GetProfileSubtypeProperties("UserProfile");
                    UserProfile userProfile = userProfileMgr.GetUserProfile(accountName);
                    IEnumerator<ProfileSubtypeProperty> userProfileSubtypeProperties = subtypePropMgr.GetEnumerator();
                    while (userProfileSubtypeProperties.MoveNext())
                    {
                        string propName = userProfileSubtypeProperties.Current.Name;
                        ProfileValueCollectionBase values = userProfile.GetProfileValueCollection(propName);
                        if (values.Count > 0)
                        {

                            // Handle multivalue properties.
                            foreach (var value in values)
                            {
                                Console.WriteLine(propName + ": " + value.ToString());
                            }
                        }
                        else
                        {
                            Console.WriteLine(propName + ": ");
                        }
                    }
                    Console.WriteLine("Press Enter to change the values.");
                    Console.Read();

                    // Change the value of a single-value user property.
                    userProfile[PropertyConstants.PictureUrl].Value = newPictureUrl;

                    // Add a value to a multivalue user property.
                    userProfile[PropertyConstants.PastProjects].Add((object)"Team Feed App");
                    userProfile[PropertyConstants.PastProjects].Add((object)"Social Ratings View Web Part");

                    // Save the changes to the server.
                    userProfile.Commit();
                    Console.WriteLine("The property values for the user have been changed.");
                    Console.Read();
                }

                catch (System.Exception e)
                {
                    Console.WriteLine(e.GetType().ToString() + ": " + e.Message);
                    Console.Read();
                }
            }
        }
    }
}
```


## Additional resources
<a name="bk_addresources"> </a>


-  [Work with user profiles in SharePoint](work-with-user-profiles-in-sharepoint.md)
    
  
-  [How to: Retrieve user profile properties by using the .NET client object model in SharePoint](how-to-retrieve-user-profile-properties-by-using-the-net-client-object-model-in.md)
    
  
-  [How to: Retrieve user profile properties by using the JavaScript object model in SharePoint](how-to-retrieve-user-profile-properties-by-using-the-javascript-object-model-in.md)
    
  
-  [Microsoft.Office.Server.UserProfiles](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.aspx)
    
  

