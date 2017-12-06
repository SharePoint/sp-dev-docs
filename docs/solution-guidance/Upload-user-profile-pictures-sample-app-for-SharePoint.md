---
title: Upload user profile pictures sample add-in for SharePoint
ms.date: 11/03/2017
---
# Upload user profile pictures sample add-in for SharePoint

You can use a provider-hosted add-in to do a bulk upload of user profile data from either a file share or SharePoint Online URL.
    
_**Applies to:** Office 365 | SharePoint 2013 | SharePoint Online_
    
The [Core.ProfilePictureUploader](https://github.com/SharePoint/PnP/tree/master/Samples/Core.ProfilePictureUploader) sample add-in shows how to do a bulk upload of user profile data from either a file share or SharePoint Online URL, and how to link user profile properties to uploaded images.
    
Use this sample to learn how to:

- Migrate a user's profile pictures from SharePoint Server 2013 on-premises to SharePoint Online.
    
- Fix issues that occur when the Azure Active Directory Sync tool (dirsync) fails to synchronize user's profile pictures to SharePoint Online.
    
- Replace poor quality user profile pictures in SharePoint Online.
    
This sample uses a console application to do the following:

- Read the user names and image file paths or URLs from a user mapping file.
    
- Fetch and upload one or three images to a picture library on the My Site host. 
    
- Set user profile properties to link the uploaded images to a user's profile.
    
- Update additional (optional) user profile properties.
    
## Before you begin
<a name="sectionSection0"> </a>

To get started, download the  [Core.ProfilePictureUploader](https://github.com/SharePoint/PnP/tree/master/Samples/Core.ProfilePictureUploader) sample add-in from the [Office 365 Developer patterns and practices](https://github.com/SharePoint/PnP/tree/dev) project on GitHub.

Before you run this code sample:

- Store your user images that you intend to upload to SharePoint Online on a file share or web server. 
    
- Edit the userlist.csv file to include the following:
    
	- A header row containing the value  **UserPrincipalName**,  **SourceURL**.
    
	- For each user, add a new row containing the user's organizational account (or user principal name) and the file path or URL of the image to upload. 
    
- To run this sample from Visual Studio, configure the  **Core.ProfilePictureUploader** project with the following command-line arguments: `-SPOAdmin Username -SPOAdminPassword Password -Configuration filepath`
    
  Where:
    
	- *Username* is your Office 365 administrator's username.
    
	- *Password* is your Office 365 administrator's password.
    
	- *Filepath* is the file path of the configuration.xml file.
    
- To set the command-line arguments on the Core.ProfilePictureUploader project:
    
	- In Solution Explorer, open the shortcut menu (right click) for the  **Core.ProfilePictureUploader** project > **Properties**.
    
	- Choose  **Debug**.
    
	- In  **Command line arguments**, enter the command-line arguments listed earlier.
    
- To configure the upload process to meet your requirements, edit the configuration.xml file by entering the following values:
    
	- The name of your Office 365 tenant in the  **tenantName** element. For example: `<tenantName>contoso.onmicrosoft.com</tenantName>`
    
	- The user mapping file path in the  **pictureSourceCsv** element. For example: `<pictureSourceCsv>C:\temp\userlist.csv</pictureSourceCsv>`
    
	- Image upload instructions using the  **thumbs** element. Edit the following attributes in the thumbs element:
    
		-  **aupload3Thumbs** - Set to **true** if you want to upload three images for each user, or set to **false** if you only want to upload one image.
    
		-  **createSMLThumbs** - Set to **true** if you want to create three different sized images (small, medium, and large) of the source image, or set to **false** if you want to upload three images of the same size.
    
	- Additional properties to set on the user's profile using the  **additionalProfilePropties** element. For example, the following XML specifies an additional user profile property called **SPS-PictureExchangeSyncState** that should be set to zero on the user's profile when the code sample runs.

	```
	<additionalProfileProperties>
	     <property name="SPS-PictureExchangeSyncState" value="0"/>
	</additionalProfileProperties>
	```

  - The log file path in the  **logfile** element, as shown in the following example. `<logFile path="C:\temp\log.txt" enableLogging="true" loggingLevel="verbose" />`
    
  - The upload delay in milliseconds between the upload of different image files using the  **uploadDelay** element. The recommended setting for **uploadDelay** is 500 milliseconds.
    
- In the App.config file, change the  **value** element of the **ProfilePictureUploader_UPSvc_UserProfileService** setting to include a reference to the user profile service in your SharePoint Online admin center. as shown in the following example.

```XML  
<Contoso.Core.ProfilePictureUploader.Properties.Settings>
      <setting name="ProfilePictureUploader_UPSvc_UserProfileService"
            serializeAs="String">
            <value>https://contoso-admin.sharepoint.com/_vti_bin/userprofileservice.asmx</value>
      </setting>
 </Contoso.Core.ProfilePictureUploader.Properties.Settings>
```

**Important**  Connecting to the userprofileservice.asmx web service on the SharePoint Online admin center allows you to update the user profile properties of other users. When you run this code sample, use an Office 365 administrator account that has permissions to manage user profiles. 

## Using the Core.ProfilePictureUploader app
<a name="sectionSection1"> </a>

This code sample runs as a console application. When the code sample runs, the  **Main** method in Program.cs does the following:

- Initializes the console application using  **SetupArguments** and **InitializeConfiguration**. 
    
- Calls  **InitializeWebService** to connect to the user profile service in SharePoint Online.
    
- Iterates through the userlist.csv file to read the user principal name (UPN) for the user and the location of the user's image file. 
    
- Fetches a user's image using  **WebRequest** and **WebResponse** objects in **GetImagefromHTTPUrl**.
    
- Calls  **UploadImageToSpo** to upload the user's image to SharePoint Online.
    
- Calls  **SetMultipleProfileProperties** to set the **PictureURL** and **SPS-PicturePlaceholderState** user profile properties for the user.
    
- Calls  **SetAdditionalProfileProperties** to set additional properties on the user profile after the image file is uploaded.

> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

```C#
static void Main(string[] args)
        {
            int count = 0;

            if (SetupArguments(args)) // Checks if args passed are valid 
            {

                if (InitializeConfiguration()) // Check that the configuration file is valid
                {
                    if (InitializeWebService()) // Initialize the web service end point for the SharePoint Online user profile service.
                    {
                        
                        using (StreamReader readFile = new StreamReader(_appConfig.PictureSourceCsv))
                        {
                            string line;
                            string[] row;
                            string sPoUserProfileName;
                            string sourcePictureUrl;

                            while ((line = readFile.ReadLine()) != null)
                            {
                                if (count > 0)
                                {
                                    row = line.Split(',');
                                    sPoUserProfileName = row[0]; 
                                    sourcePictureUrl = row[1]; 

                                    LogMessage("Begin processing for user " + sPoUserProfileName, LogLevel.Warning);

                                    // Get source picture from source image path.
                                    using (MemoryStream picturefromExchange = GetImagefromHTTPUrl(sourcePictureUrl))
                                    {
                                        if (picturefromExchange != null) // if we got image, upload to SharePoint Online
                                        {
                                            // Create SharePoint naming convention for image file.
                                            string newImageNamePrefix = sPoUserProfileName.Replace("@", "_").Replace(".", "_");
                                            // Upload source image to SharePoint Online.
                                            string spoImageUrl = UploadImageToSpo(newImageNamePrefix, picturefromExchange);
                                            if (spoImageUrl.Length > 0)// If upload worked.
                                            {
                                                string[] profilePropertyNamesToSet = new string[] { "PictureURL", "SPS-PicturePlaceholderState" };
                                                string[] profilePropertyValuesToSet = new string[] { spoImageUrl, "0" };
                                                // Set these two required user profile properties - path to uploaded image, and pictureplaceholder state.
                                                SetMultipleProfileProperties(_sPOProfilePrefix + sPoUserProfileName, profilePropertyNamesToSet, profilePropertyValuesToSet);
                                                // Set additional user profile properties based on your requirements.
                                                SetAdditionalProfileProperties(_sPOProfilePrefix + sPoUserProfileName);
                                            }
                                        }
                                    }

                                    LogMessage("End processing for user " + sPoUserProfileName, LogLevel.Warning);

                                    int sleepTime = _appConfig.UploadDelay;
                                    System.Threading.Thread.Sleep(sleepTime); // A pause between uploads is recommended. 
                                }
                                count++;
                            }
                        }
                    }
                }
            }


            LogMessage("Processing finished for " + count + " user profiles", LogLevel.Information);
         } 

```

**InitializeWebService** connects to SharePoint Online, and sets a reference of the user profile service to an instance variable. Other methods in this code sample use this instance variable to apply updates to user profile properties. To administer the user profile, this code sample uses the userprofileservice.asmx web service in the SharePoint Online admin center.

```
static bool InitializeWebService()
        {
            try
            {
                string webServiceExt = "_vti_bin/userprofileservice.asmx";
                string adminWebServiceUrl = string.Empty;

                // Append the web service (ASMX) URL onto the admin website URL.
                if (_profileSiteUrl.EndsWith("/"))
                    adminWebServiceUrl = _profileSiteUrl + webServiceExt;
                else
                    adminWebServiceUrl = _profileSiteUrl + "/" + webServiceExt;

                LogMessage("Initializing SPO web service " + adminWebServiceUrl, LogLevel.Information);

                // Get secure password from clear text password.
                SecureString securePassword = GetSecurePassword(_sPoAuthPasword);

                // Set credentials from SharePoint Client API, used later to extract authentication cookie, so can replay to web services.
                SharePointOnlineCredentials onlineCred = new SharePointOnlineCredentials(_sPoAuthUserName, securePassword);

                // Get the authentication cookie by passing the URL of the admin website. 
                string authCookie = onlineCred.GetAuthenticationCookie(new Uri(_profileSiteUrl));

                // Create a CookieContainer to authenticate against the web service. 
                CookieContainer authContainer = new CookieContainer();

                // Put the authenticationCookie string in the container. 
                authContainer.SetCookies(new Uri(_profileSiteUrl), authCookie);

                // Setting up the user profile web service. 
                _userProfileService = new UPSvc.UserProfileService();

                // Assign the correct URL to the admin profile web service. 
                _userProfileService.Url = adminWebServiceUrl;

                // Assign previously created authentication container to admin profile web service. 
                _userProfileService.CookieContainer = authContainer;
               // LogMessage("Finished creating service object for SharePoint Online Web Service " + adminWebServiceUrl, LogLevel.Information);
                return true;
            }
            catch (Exception ex)
            {
                LogMessage("Error initiating connection to profile web service in SPO " + ex.Message, LogLevel.Error);
                return false;

            }

            
        }

```

The  **Main** method in Program.cs calls **UploadImageToSpo** to upload the user's profile picture to SharePoint Online. All users' profile pictures are stored in a picture library on the My Site Host. **UploadImageToSpo** performs the following tasks:

- Connects to SharePoint Online.
    
- Determines the number of images to upload for each user. 
    
	- If you configured the application to upload one image per user, the image is uploaded to the picture library. 
    
	- If you configured the application to upload three images per user, the application checks the value of  **createSMLThumbs** in the configuration file to determine whether three different sized images are required. If three different sized images are required, the application uses **ResizeImageSmall** and **ResizeImageLarge** to create three different sized images from the source image. The application then uploads the resized images to the picture library. If three different sized images are not required, the application uploads three images of the same size to the picture library.

```C#
static string UploadImageToSpo(string PictureName, Stream ProfilePicture)
        {
            try
            {

                string spPhotoPathTempate = "/User Photos/Profile Pictures/{0}_{1}Thumb.jpg"; // Path template to picture library on the My Site Host.
                string spImageUrl = string.Empty;

                // Create SharePoint Online Client context to My Site Host.
                ClientContext mySiteclientContext = new ClientContext(_mySiteUrl);
                SecureString securePassword = GetSecurePassword(_sPoAuthPasword);
                // Provide authentication credentials using Office 365 authentication.
                mySiteclientContext.Credentials = new SharePointOnlineCredentials(_sPoAuthUserName, securePassword);
                                
                if (!_appConfig.Thumbs.Upload3Thumbs) // Upload a single input image only to picture library, no resizing necessary.
                {
                    spImageUrl = string.Format(spPhotoPathTempate, PictureName, "M");
                    LogMessage("Uploading single image, no resize, to " + spImageUrl, LogLevel.Information);
                    Microsoft.SharePoint.Client.File.SaveBinaryDirect(mySiteclientContext, spImageUrl, ProfilePicture, true);
                }
                else if (_appConfig.Thumbs.Upload3Thumbs &amp;&amp; !_appConfig.Thumbs.CreateSMLThumbs)// Upload three images of the same size. 
                {
                    // The following code is not optimal. Upload the same source image three times with different names.
                    // No resizing of images necessary.
                    LogMessage("Uploading threes image to SPO, no resize", LogLevel.Information);

                    spImageUrl = string.Format(spPhotoPathTempate, PictureName, "M");
                    LogMessage("Uploading medium image to " + spImageUrl, LogLevel.Information);
                    Microsoft.SharePoint.Client.File.SaveBinaryDirect(mySiteclientContext, spImageUrl, ProfilePicture, true);

                    ProfilePicture.Seek(0, SeekOrigin.Begin);
                    spImageUrl = string.Format(spPhotoPathTempate, PictureName, "L");
                    LogMessage("Uploading large image to " + spImageUrl, LogLevel.Information);
                    Microsoft.SharePoint.Client.File.SaveBinaryDirect(mySiteclientContext, spImageUrl, ProfilePicture, true);
                    
                    ProfilePicture.Seek(0, SeekOrigin.Begin);
                    spImageUrl = string.Format(spPhotoPathTempate, PictureName, "S");
                    LogMessage("Uploading small image to " + spImageUrl, LogLevel.Information);
                    Microsoft.SharePoint.Client.File.SaveBinaryDirect(mySiteclientContext, spImageUrl, ProfilePicture, true);

                    
                }
                else if (_appConfig.Thumbs.Upload3Thumbs &amp;&amp; _appConfig.Thumbs.CreateSMLThumbs) //generate 3 different sized images
                {
                    LogMessage("Uploading threes image to SPO, with resizing", LogLevel.Information);
                    // Create three images based on recommended sizes for SharePoint Online.
                    // Create small-sized image.
                    using (Stream smallThumb = ResizeImageSmall(ProfilePicture, _smallThumbWidth))
                    {
                        if (smallThumb != null)
                        {
                            spImageUrl = string.Format(spPhotoPathTempate, PictureName, "S");
                            LogMessage("Uploading small image to " + spImageUrl, LogLevel.Information);
                            Microsoft.SharePoint.Client.File.SaveBinaryDirect(mySiteclientContext, spImageUrl, smallThumb, true);                            
                        }
                    }

                    // Create medium-sized image.
                    using (Stream mediumThumb = ResizeImageSmall(ProfilePicture, _mediumThumbWidth))
                    {
                        if (mediumThumb != null)
                        {
                            spImageUrl = string.Format(spPhotoPathTempate, PictureName, "M");
                            LogMessage("Uploading medium image to " + spImageUrl, LogLevel.Information);
                            Microsoft.SharePoint.Client.File.SaveBinaryDirect(mySiteclientContext, spImageUrl, mediumThumb, true);
                           
                        }
                    }

                    // Create large-sized image. This image is shown when you open the user's OneDrive for Business. 
                    using (Stream largeThumb = ResizeImageLarge(ProfilePicture, _largeThumbWidth))
                    {
                        if (largeThumb != null)
                        {

                            spImageUrl = string.Format(spPhotoPathTempate, PictureName, "L");
                            LogMessage("Uploading large image to " + spImageUrl, LogLevel.Information);
                            Microsoft.SharePoint.Client.File.SaveBinaryDirect(mySiteclientContext, spImageUrl, largeThumb, true);
                            
                        }
                    }
                  
                   
                }
                // Return URL of the medium-sized image to set properties on the user profile.
                return _mySiteUrl + string.Format(spPhotoPathTempate, PictureName, "M");                
                
            }
            catch (Exception ex)
            {
                LogMessage("User Error: Failed to upload thumbnail picture to SPO for " + PictureName + " " + ex.Message, LogLevel.Error);
                return string.Empty;
            }

        }

```

**SetMultipleProfileProperties** sets multiple user profile properties in a single method call. In this code sample, **SetMultipleProfileProperties** sets the following user profile properties for a user:

-  **PictureURL** - Set to the URL of the medium-sized uploaded image in the picture library on the My Site Host.
    
-  **SPS-PicturePlaceholderState** - Set to zero to indicate that SharePoint Online should show the uploaded picture for the user.

```C#
static void SetMultipleProfileProperties(string UserName, string[] PropertyName, string[] PropertyValue)
        {

            LogMessage("Setting multiple SPO user profile properties for " + UserName, LogLevel.Information);

            try
            {
                int arrayCount = PropertyName.Count();

                UPSvc.PropertyData[] data = new UPSvc.PropertyData[arrayCount];
                for (int x = 0; x < arrayCount; x++)
                {
                    data[x] = new UPSvc.PropertyData();
                    data[x].Name = PropertyName[x];
                    data[x].IsValueChanged = true;
                    data[x].Values = new UPSvc.ValueData[1];
                    data[x].Values[0] = new UPSvc.ValueData();
                    data[x].Values[0].Value = PropertyValue[x];
                }

                _userProfileService.ModifyUserPropertyByAccountName(UserName, data);
                // LogMessage("Finished setting multiple SharePoint Online user profile properties for " + UserName, LogLevel.Information);

            }
            catch (Exception ex)
            {
                LogMessage("User Error: Exception trying to update profile properties for user " + UserName + "\n" + ex.Message, LogLevel.Error);
            }
        }

```

**SetAdditionalProfileProperties** sets any additional user profile properties you want to update after uploading the image files. You can specify additional properties to update in the configuration.xml file.

```C#
static void SetAdditionalProfileProperties(string UserName)
        {
            if (_appConfig.AdditionalProfileProperties.Properties == null) // If there are no additional properties to update. 
                return;

            int propsCount = _appConfig.AdditionalProfileProperties.Properties.Count();
            if (propsCount > 0)
            {
                string[] profilePropertyNamesToSet = new string[propsCount];
                string[] profilePropertyValuesToSet = new string[propsCount];
                // Loop through each property in configuration file.
                for (int i = 0; i < propsCount; i++)
                {
                    profilePropertyNamesToSet[i] = _appConfig.AdditionalProfileProperties.Properties[i].Name;
                    profilePropertyValuesToSet[i] = _appConfig.AdditionalProfileProperties.Properties[i].Value;
                }

                // Set all properties in a single call.
                SetMultipleProfileProperties(UserName, profilePropertyNamesToSet, profilePropertyValuesToSet);

            }
        }

```

## See also
<a name="bk_addresources"> </a>

-  [User profile solutions for SharePoint 2013 and SharePoint Online](user-profile-solutions-for-sharepoint.md)
    
-  [Core.ProfilePictureUploader app](https://github.com/SharePoint/PnP/tree/master/Samples/Core.ProfilePictureUploader)
    
-  [UserProfile.Manipulation.CSOM](https://github.com/SharePoint/PnP/tree/master/Samples/UserProfile.Manipulation.CSOM)
    
-  [Core.ProfileProperty.Migration](https://github.com/SharePoint/PnP/tree/master/Samples/Core.ProfileProperty.Migration)
    
-  [UserProfile.Manipulation.CSOM.Console](https://github.com/SharePoint/PnP/tree/master/Samples/UserProfile.Manipulation.CSOM.Console)
