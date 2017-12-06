---
title: Set external sharing on site collections in Office 365
ms.date: 11/03/2017
---
# Set external sharing on site collections in Office 365

You can control external sharing settings on a SharePoint site collection in Office 365, allowing external users (users who don't have an organization account in your Office 365 subscription) access to your site collection.

_**Applies to:** add-ins for SharePoint | SharePoint Online | Office 365_

The  [Core.ExternalSharing](https://github.com/SharePoint/PnP/tree/master/Samples/Core.ExternalSharing) code sample shows you how to control your external sharing settings on a SharePoint site collection. Use this solution to:

- Control external sharing settings during your site provisioning process.
    
- Prepare your site collection for sharing with external users.

> [!NOTE] 
> External sharing settings are only available in Office 365.

## Before you begin
<a name="sectionSection0"> </a>

To get started, download the  [Core.ExternalSharing](https://github.com/SharePoint/PnP/tree/master/Samples/Core.ExternalSharing) sample add-in from the [Office 365 Developer patterns and practices](https://github.com/SharePoint/PnP/tree/dev) project on GitHub.

## Using the Core.ExternalSharing app
<a name="sectionSection1"> </a>

Verify that your Office 365 subscription allows external sharing. To do this:

1. Open your  **Office 365 admin center**.
    
2. On the left navigation menu, choose  **EXTERNAL SHARING**.
    
3. Choose  **Sharing Overview**.
    
4. In  **Sites**, ensure that  **Let external people access your sites** is **On**.
    
Verify your external site settings on your SharePoint site collection. To do this:

1. Open your  **Office 365 admin center**.
    
2. On the left navigation menu, choose  **SharePoint** to open your **SharePoint admin center**.
    
3. Select the check box next to the site collection URL that you want to verify your external sharing settings on.
    
4. On the ribbon, choose  **Sharing**.
    
5. Review your external sharing settings in the  **sharing** dialog. After running the code sample, return to the **sharing** dialog to verify that your external sharing settings changed.
    
When you run this code sample,  **Main** in Program.cs performs the following tasks:

- Gets the Office 365 admin center URL.
    
- Gets the site collection URL to configure external sharing settings on.
    
- Gets your Office 365 administrator credentials.
    
- Calls  **GetInputSharing**, which prompts the user to choose an external sharing setting ( [SharingCapabilities](https://msdn.microsoft.com/library/office/microsoft.online.sharepoint.tenantmanagement.sharingcapabilities.aspx)) to apply to the site collection. The external sharing settings choices include:
    
	-  **Disabled**, which turns off external sharing on the site.
    
	-  **ExternalUserAndGuestSharing**, which enables external user and guest sharing on the site.
    
	-  **ExternalUserSharingOnly**, which enables external user sharing only.
    
- Calls  **SetSiteSharing**.

> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

```C#
 static void Main(string[] args)
        {
           
            /* Prompt for your Office 365 admin center URL*/
            Console.WriteLine("Enter your Tenant Admin URL for your Office 365 subscription:");
            string tenantAdminURL = GetSite();

            /* End Program if no Office 365 admin center URL is supplied*/
            if (string.IsNullOrEmpty(tenantAdminURL))
            {
                Console.WriteLine("Hmm, i tried to work on it but you didn't supply your admin tenant url:");
                return;
            }
               
            // Prompt the user for an Office365 site collection 
            Console.WriteLine("Enter your Office 365 Site Collection URL:");
            string siteUrl = GetSite();

            /* Prompt for Credentials */
            Console.WriteLine("Enter Credentials for your Office 365 Site Collection {0}:", siteUrl);

            string userName = GetUserName();
            SecureString pwd = GetPassword();

            /* End program if no credentials are entered */
            if (string.IsNullOrEmpty(userName) || (pwd == null))
            {
                Console.WriteLine("Hmm, i tried to work on it but you didn't supply your credentials:");
                return;
            }

            try 
            {
                SharingCapabilities _sharingSettingToApply = GetInputSharing(siteUrl);
                using (ClientContext cc = new ClientContext(tenantAdminURL))
                { 
                    cc.AuthenticationMode = ClientAuthenticationMode.Default;
                    cc.Credentials = new SharePointOnlineCredentials(userName, pwd);
                    SetSiteSharing(cc, siteUrl, _sharingSettingToApply);
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine("Oops, Mistakes can happen to anyone. An Error occured : {0}", ex.Message);
               
            }

            Console.WriteLine("Hit Enter to exit.");
            Console.Read();

        
        }
```

**SetSiteSharing** does the following:

-  Uses the **Tenant.GetSitePropertiesByUrl** to retrieve **SiteProperties** on your site collection.
    
- Uses  **Tenant.SharingCapability** to determine whether external sharing is enabled on your Office 365 subscription.
    
-  If sharing is enabled in your Office 365 subscription, sets the **SiteProperties.SharingCapability** to the external sharing settings the user entered.

```C#
public static void SetSiteSharing(ClientContext adminCC, string siteCollectionURl, SharingCapabilities shareSettings)
        {
            var _tenantAdmin = new Tenant(adminCC);
            SiteProperties _siteprops = _tenantAdmin.GetSitePropertiesByUrl(siteCollectionURl, true);
            adminCC.Load(_tenantAdmin);
            adminCC.Load(_siteprops);
            adminCC.ExecuteQuery();

            SharingCapabilities _tenantSharing = _tenantAdmin.SharingCapability;
            var _currentShareSettings = _siteprops.SharingCapability;
            bool _isUpdatable = false;

            if(_tenantSharing == SharingCapabilities.Disabled)
            {
                Console.WriteLine("Sharing is currently disabled in your tenant! I am unable to work on it.");
            }
            else
            {  
                if(shareSettings == SharingCapabilities.Disabled)
                { _isUpdatable = true; }
                else if(shareSettings == SharingCapabilities.ExternalUserSharingOnly)
                {
                    _isUpdatable = true;   
                }
                else if (shareSettings == SharingCapabilities.ExternalUserAndGuestSharing)
                {
                    if (_tenantSharing == SharingCapabilities.ExternalUserAndGuestSharing)
                    {
                        _isUpdatable = true;
                    }
                    else
                    {
                        Console.WriteLine("ExternalUserAndGuestSharing is currently disabled in your tenant! I am unable to work on it.");
                    }
                }
            }
            if (_currentShareSettings != shareSettings &amp;&amp; _isUpdatable)
            {
                _siteprops.SharingCapability = shareSettings;
                _siteprops.Update();
                adminCC.ExecuteQuery();
                Console.WriteLine("Set Sharing on site {0} to {1}.", siteCollectionURl, shareSettings);
            }
        }
```

## See also
<a name="bk_addresources"> </a>

-  [Office 365 development patterns and practices solution guidance](Office-365-development-patterns-and-practices-solution-guidance.md)
    
-  [Manage external sharing for your SharePoint Online environment](https://support.office.com/article/Manage-external-sharing-for-your-SharePoint-Online-environment-C8A462EB-0723-4B0B-8D0A-70FEAFE4BE85)
