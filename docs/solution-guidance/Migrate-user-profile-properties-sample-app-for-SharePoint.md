---
title: Migrate user profile properties sample SharePoint Add-in
description: Use a provider-hosted add-in to migrate and import SharePoint user profile data.
ms.date: 5/7/2018
localization_priority: Normal
---

# Migrate user profile properties sample SharePoint Add-in
   
The Core.ProfileProperty.Migration sample shows you how to migrate user profile data from SharePoint Server into SharePoint Online.
    
This sample includes two console applications. Both use the userprofileservice.asmx web service to extract single and multivalued user profile data to an XML file, and to import the extracted data into the user profile service in SharePoint Online.

Use this code sample if you want to:

- Extract user profile data in SharePoint Server. 
- Import user profile data into SharePoint Online.

## Before you begin

To get started, download the [Core.ProfileProperty.Migration](https://github.com/SharePoint/PnP/tree/master/Samples/Core.ProfileProperty.Migration) sample add-in from the Office 365 Developer Patterns and Practices project on GitHub.

> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement. 

The code sample contains two projects:
- **Contoso.ProfileProperty.Migration.Extract**
- **Contoso.ProfileProperty.Migration.Import**

### Contoso.ProfileProperty.Migration.Extract project

Because this code sample uses the server-side object model, be sure that you are running the project on a server with SharePoint Server installed.
    
- Use an account that has SharePoint farm administrator permissions.   
- Edit the App.config file using the configuration information listed in Table 1.
- For all users, ensure that the **Work email** user profile property is not empty. If the value of the **Work email** user profile property is empty, the extraction process will end prematurely.

This code sample extracts user profiles from SharePoint Server 2010. If you are extracting user profiles from SharePoint Server 2013, do the following:

1. Open the shortcut menu (right-click) for **Contoso.ProfileProperty.Migration.Extract** > **Properties**.

2. Under **Application**, in **Target framework**, choose **.NET Framework 4**.

3. Choose **Yes**, and then choose **Save**.
    
**Table 1. Configuration settings for App.config file**

|Configuration setting name|Description|Example|
|:-----|:-----|:-----|
|**MYSITEHOSTURL** |My Site URL on the source SharePoint Server farm.|`http://my.contoso.com` |
|**PROPERTYSEPARATOR** |The character used to separate multiple values in a multivalued user profile property.| |
|**USERPROFILESSTORE** |The XML file path to use to write extracted user profile data.|`C:\temp\ProfileData.xml`|
|**LOGFILE** |The XML file path to use to write extracted user profile data.|`C:\temp\Extract.log`|
|**ENABLELOGGING** |Enables disk logging.|True|
|**TESTRUN** |Performs a test extraction to confirm that your configuration settings in App.config are correct.|Set `TESTRUN=true` if you are performing a test extraction. The test run extracts only one user from the user profile service.<br /><br />Set `TESTRUN=false` if you are extracting all users from the user profile service. |

### Contoso.ProfileProperty.Migration.Import project

- Ensure that user profiles exist in Office 365.

- Ensure that the user's **Work email** address is the same in the SharePoint Server on-premises and Office 365 user profile service.

- In the App.config file, change the **value** element of the **Contoso_ProfileProperty_Migration_Import_UPSvc_UserProfileService** setting to include a reference to the user profile service in your SharePoint Online admin center, as shown in the following example. 

	```XML
	<applicationSettings>
	<Contoso.ProfileProperty.Migration.Import.Properties.Settings>
	<setting name="Contoso_ProfileProperty_Migration_Import_UPSvc_UserProfileService" serializeAs="String">
	<value>https://contoso-admin.sharepoint.com/_vti_bin/userprofileservice.asmx</value>
	</setting>
	</Contoso.ProfileProperty.Migration.Import.Properties.Settings>
	</applicationSettings>
	```

- Edit the App.config file using the configuration settings listed in Table 2.
    
**Table 2. App.config file configuration settings**

|Configuration setting name|Description|Example|
|:-----|:-----|:-----|
|**tenantName** |This is your tenant’s name.|If your tenant URL is `http://contoso.onmicrosoft.com`, enter contoso as your tenant name.|
|**PROPERTYSEPARATOR** |The character used to separate values in a multivalued user profile property.| |
|**USERPROFILESSTORE** |The XML file to use to read extracted user profile data.|`C:\temp\ProfileData.xml`|
|**LOGFILE** |Log file used for event logging.|`C:\temp\Extract.log`|
|**ENABLELOGGING** |Enables disk logging.|True|
|**SPOAdminUserName** |An Office 365 administrator’s username.|Not applicable.|
|**SPOAdminPassword** |An Office 365 administrator’s password.|Not applicable.|

## Using the Core.ProfileProperty.Migration sample add-in

This code sample runs as a console application. When the code sample runs, the **Main** function in Program.cs performs the following tasks:

- Connects to the My Site host and uses **UserProfileManager** to connect to the user profile service. **UserProfileManager** belongs to the **Microsoft.Office.Server.UserProfiles.dll** assembly.
- Creates a list called **pData** to store extracted user profile data.
- For all users in the user profile service, it does the following:
	- Uses **GetSingleValuedProperty** to copy the **WorkEmail** and **AboutMe** user profile properties to a **UserProfileData** object called **userData**.
	- Uses **GetMultiValuedProperty** to copy the **SPS-Responsibility** user profile property to **userData**.
    - Uses **UserProfileCollection.Save** to serialize **userData** to an XML file. The XML file is saved at the file path you specified in App.config.

```csharp
static void Main(string[] args)
        {
            int userCount = 1;

            try
            {

                if (Convert.ToBoolean(ConfigurationManager.AppSettings["TESTRUN"]))
                {
                    LogMessage(string.Format("******** RUNNING IN TEST RUN MODE **********"), LogLevel.Debug);
                }
                
                LogMessage(string.Format("Connecting to My Site host: '{0}'...", ConfigurationManager.AppSettings["MYSITEHOSTURL"]), LogLevel.Info);
                using (SPSite mySite = new SPSite(ConfigurationManager.AppSettings["MYSITEHOSTURL"]))
                {
                    LogMessage(string.Format("Connecting to My Site host: '{0}'...Done!", ConfigurationManager.AppSettings["MYSITEHOSTURL"]), LogLevel.Info);

                    LogMessage(string.Format("getting Service Context..."), LogLevel.Info);
                    SPServiceContext svcContext = SPServiceContext.GetContext(mySite);
                    LogMessage(string.Format("getting Service Context...Done!"), LogLevel.Info);

                    LogMessage(string.Format("Connecting to Profile Manager..."), LogLevel.Info);
                    UserProfileManager profileManager = new UserProfileManager(svcContext);
                    LogMessage(string.Format("Connecting to Profile Manager...Done!"), LogLevel.Info);

                    // Size of the List is set to the number of profiles.
                    List<UserProfileData> pData = new List<UserProfileData>(Convert.ToInt32(profileManager.Count));
                    
                    // Initialize Serialization Class.
                    UserProfileCollection ups = new UserProfileCollection();

                    foreach (UserProfile spUser in profileManager)
                    {
                        // Get profile information.
                        LogMessage(string.Format("processing user '{0}' of {1}...", userCount,profileManager.Count),LogLevel.Info);                       
                        UserProfileData userData = new UserProfileData();
                        
                        userData.UserName = GetSingleValuedProperty(spUser, "WorkEmail");
                        
                        if (userData.UserName != string.Empty)
                        {
                            userData.AboutMe = GetSingleValuedProperty(spUser, "AboutMe");
                            userData.AskMeAbout = GetMultiValuedProperty(spUser, "SPS-Responsibility");
                            pData.Add(userData);
                            // Add to Serialization Class List of Profiles.
                            ups.ProfileData = pData;
                        }
                        
                        LogMessage(string.Format("processing user '{0}' of {1}...Done!", userCount++, profileManager.Count), LogLevel.Info);

                        // Only process the first item if we are in test mode.
                        if (Convert.ToBoolean(ConfigurationManager.AppSettings["TESTRUN"]))
                        {
                            break;
                        }

                    }
                    
                    // Serialize profiles to disk.
                    ups.Save();

                }
            }
            catch(Exception ex)
            {
                LogMessage("Exception trying to get profile properties:\n" + ex.Message, LogLevel.Error);
            }
```

<br/>

The **GetSingleValuedProperty** method uses userprofileservice.asmx to retrieve a single-valued user profile property. **GetSingleValuedProperty** does the following, as shown in the next code example:

- Gets the property object to extract data from using **spuser[userProperty]**.
- Returns the first value in the **UserProfileValueCollection** if the value is not **null**. 

```csharp
private static string GetSingleValuedProperty(UserProfile spUser,string userProperty)
        {
            string returnString = string.Empty;
            try
            {
                UserProfileValueCollection propCollection = spUser[userProperty];

                if (propCollection[0] != null)
                {
                    returnString = propCollection[0].ToString();
                }
                else
                {
                    LogMessage(string.Format("User '{0}' does not have a value in property '{1}'", spUser.DisplayName, userProperty), LogLevel.Warning);                       
                }
            }
            catch 
            {
                LogMessage(string.Format("User '{0}' does not have a value in property '{1}'", spUser.DisplayName, userProperty), LogLevel.Warning);                       
            }


            return returnString;
            
        }
```

<br/>

The **GetMultiValuedProperty** method uses userprofileservice.asmx to retrieve a multivalued user profile property. **GetMultiValuedProperty** does the following, as shown in the next code example:

- Gets the user profile property object to update using **spuser[userProperty]**. 
- Builds a string of user profile property values separated by the **PROPERTYSEPARATOR** specified in the App.config file.

```csharp
private static string GetMultiValuedProperty(UserProfile spUser, string userProperty)
        {
            StringBuilder sb = new StringBuilder("");
            string separator = ConfigurationManager.AppSettings["PROPERTYSEPARATOR"];

            string returnString = string.Empty;
            try
            {

                UserProfileValueCollection propCollection = spUser[userProperty];

                if (propCollection.Count > 1)
                {
                    for (int i = 0; i < propCollection.Count; i++)
                    {
                        if (i == propCollection.Count - 1) { separator = ""; }
                        sb.AppendFormat("{0}{1}", propCollection[i], separator);
                    }
                }
                else if (propCollection.Count == 1)
                {
                    sb.AppendFormat("{0}", propCollection[0]);
                }

            }
            catch
            {
                LogMessage(string.Format("User '{0}' does not have a value in property '{1}'", spUser.DisplayName, userProperty), LogLevel.Warning);
            }

            return sb.ToString();

        }
```

## Using the Contoso.ProfileProperty.Migration.Import sample add-in

This code sample runs as a console application. When the code sample runs, the **Main** method in Program.cs does the following:

- Initializes the console application using **InitializeConfiguration** and **InitializeWebService**.  
- Deserializes the XML file containing the extracted user profile data.  
- For all users in the XML file it does the following: 
	- Extracts the **UserName** property from the XML file.
	- Uses **SetSingleMVProfileProperty** to set **SPS-Responsibility** on the user's profile.
	- Uses **SetSingleMVProfileProperty** to set **AboutMe** on the user's profile.
    
**InitializeWebService** connects to SharePoint Online, and sets a reference of the user profile service to an instance variable. Other methods in this code sample use this instance variable to write values to user profile properties. To administer the user profile, this code sample uses the userprofileservice.asmx web service on the SharePoint Online admin center.

```csharp
static bool InitializeWebService()
        {
            try
            {
                string webServiceExt = "_vti_bin/userprofileservice.asmx";
                string adminWebServiceUrl = string.Empty;
                
                if (_profileSiteUrl.EndsWith("/"))
                    adminWebServiceUrl = _profileSiteUrl + webServiceExt;
                else
                    adminWebServiceUrl = _profileSiteUrl + "/" + webServiceExt;

                LogMessage("Initializing SPO web service " + adminWebServiceUrl, LogLevel.Information);

                SecureString securePassword = GetSecurePassword(_sPoAuthPasword);
                SharePointOnlineCredentials onlineCred = new SharePointOnlineCredentials(_sPoAuthUserName, securePassword);

                string authCookie = onlineCred.GetAuthenticationCookie(new Uri(_profileSiteUrl));

                CookieContainer authContainer = new CookieContainer();
                authContainer.SetCookies(new Uri(_profileSiteUrl), authCookie);

                // Setting up the user profile web service.
                _userProfileService = new UPSvc.UserProfileService();
                _userProfileService.Url = adminWebServiceUrl;

                // Assign previously created auth container to admin profile web service. 
                _userProfileService.CookieContainer = authContainer;
                return true;
            }
            catch (Exception ex)
            {
                LogMessage("Error initiating connection to profile web service in SPO " + ex.Message, LogLevel.Error);
                return false;

            }
            
        }
```

<br/>

The **SetSingleMVProfileProperty** method sets a multivalued user profile property, such as **SPS-Responsibility**, by doing the following:

- Splitting **PropertyValue** into a string array called **arrs** to store user profile property values. The string is split using the **PROPERTYSEPARATOR** configuration setting specified in App.config.
    
- Assigning the values of **arrs** to a **ValueData** array on the user profile service.
    
- Creating a **PropertyData** array on the user profile service. The name of the user profile property and the **ValueData** array are passed to properties on the **PropertyData** object. This array has one element only because only one multivalued user profile property will be imported.
    
The data is written to the user profile service by using **ModifyUserPropertyByAccountName** on the **userprofileservice.asmx** web service on the SharePoint Online admin center. The user running this code sample must be an Office 365 administrator.

```csharp
static void SetSingleMVProfileProperty(string UserName, string PropertyName, string PropertyValue)
        {

            try
            {
                string[] arrs = PropertyValue.Split(ConfigurationManager.AppSettings["PROPERTYSEPARATOR"][0]);
                
               UPSvc.ValueData[] vd = new UPSvc.ValueData[arrs.Count()];
               
               for (int i=0;i<=arrs.Count()-1;i++)
               {
                    vd[i] = new UPSvc.ValueData();
                    vd[i].Value = arrs[i];
                }
               
                UPSvc.PropertyData[] data = new UPSvc.PropertyData[1];
                data[0] = new UPSvc.PropertyData();
                data[0].Name = PropertyName;
                data[0].IsValueChanged = true;
                data[0].Values = vd;
                               
                _userProfileService.ModifyUserPropertyByAccountName(string.Format(@"i:0#.f|membership|{0}", UserName), data);

            }
            catch (Exception ex)
            {
                LogMessage("Exception trying to update profile property " + PropertyName + " for user " + UserName + "\n" + ex.Message, LogLevel.Error);
            }

        }

```

<br/>

The **SetSingleValuedProperty** method sets single-valued user profile properties, such as **AboutMe**. **SetSingleValuedProperty** implements the same technique as **SetSingleMVProfileProperty**, but uses a **ValueData** array with one element only.

```csharp
static void SetSingleProfileProperty(string UserName, string PropertyName, string PropertyValue)
        {

            try
            {
                UPSvc.PropertyData[] data = new UPSvc.PropertyData[1];
                data[0] = new UPSvc.PropertyData();
                data[0].Name = PropertyName;
                data[0].IsValueChanged = true;
                data[0].Values = new UPSvc.ValueData[1];
                data[0].Values[0] = new UPSvc.ValueData();
                data[0].Values[0].Value = PropertyValue;
                _userProfileService.ModifyUserPropertyByAccountName(UserName, data);
            }
            catch (Exception ex)
            {
                LogMessage("Exception trying to update profile property " + PropertyName + " for user " + UserName + "\n" + ex.Message, LogLevel.Error);
            }

        }

```

## See also

- [Core.ProfilePictureUploader](https://github.com/SharePoint/PnP/tree/master/Samples/Core.ProfilePictureUploader) 
- [UserProfile.Manipulation.CSOM](https://github.com/SharePoint/PnP/tree/master/Samples/UserProfile.Manipulation.CSOM) 
- [UserProfile.Manipulation.CSOM.Console](https://github.com/SharePoint/PnP/tree/master/Samples/UserProfile.Manipulation.CSOM.Console)
- [User profile solutions for SharePoint](user-profile-solutions-for-sharepoint.md)
