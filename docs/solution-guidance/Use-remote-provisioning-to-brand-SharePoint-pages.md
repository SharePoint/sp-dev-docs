---
title: Use remote provisioning to brand SharePoint pages
ms.date: 11/03/2017
---
# Use remote provisioning to brand SharePoint pages

Use remote provisioning to interact with themes in SharePoint.

_**Applies to:** Office 365 | SharePoint 2013 | SharePoint Online_

You can apply and interact with themes by using remote provisioning features in SharePoint. These features are provided by the following APIs:

-  [ApplyTheme method](http://msdn.microsoft.com/library/52c567e8-03e6-7ba3-a9ed-cf4e3c22dbdd%28Office.15%29.aspx)
    
-  [ThemeInfo class](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.themeinfo.aspx)
    
The  **ApplyTheme** method powers the Change the Look wizard. The wizard applies acomposed look, or a custom look, to a SharePoint site by using specified components. Themes are applied on a site-by-site basis.
The  **ApplyThemeApp** and **ThemeInfo** server-side APIs are exposed via the **ApplyTheme** and **ThemeInfo** APIs in CSOM and JSOM.
For a sample that shows you how to apply an existing or custom theme, see  [Branding.Themes](https://github.com/Lauragra/PnP/tree/master/Samples/Branding.Themes) on GitHub.

## ApplyTheme method
<a name="sectionSection0"> </a>

Use the  **ApplyTheme** client-side method when you use remote provisioning to apply themes, as shown in the following example.

```
public void ApplyTheme(
	    	string colorPaletteUrl,
	    	string fontSchemeUrl,
	    	string backgroundImageUrl,
		    bool shareGenerated
             )
```

The  **ApplyTheme** method uses the following parameters:

- colorPaletteUrl - The server-relative URL of the color palette file (for example, spcolor).
    
- fontSchemeUrl - The server-relative URL of the font scheme file (for example, spfont).
    
- backgroundImageUrl - The server-relative URL of the background image. If there is no background image, this parameter returns a **null** reference.
    
- shareGenerated - A Boolean value. **True** if the generated theme files should be applied to the root web; **false** if they are to be stored in the current web.

> [!NOTE] 
> The shareGenerated parameter determines whether the themed output files are stored in a web-specific location or a location that is accessible across the site collection. We recommend that you keep the default value for your site type.

## ThemeInfo class
<a name="sectionSection1"> </a>

You can use CSOM code to get information about the composed looks that are applied to a site. The  [ThemeInfo](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.themeinfo.aspx) class gets the context associated with the themes, as shown in the following example.

```
public ThemeInfo ThemeInfo { get; }
```

You can use the  **ThemeInfo** class to get details about themes that are applied to a site, including descriptions, context, object data, colors, and fonts for the specified name (and fonts for the specified language code), as well as the URI for the background image defined for the composed look.

## Using ApplyTheme and ThemeInfo in CSOM code
<a name="sectionSection2"> </a>

The following code example shows how to use  **ApplyTheme** and **ThemeInfo** in CSOM code. You can use this code in the remote provisioning pattern. For example, you might decide to create composed looks programmatically, as specified by a designer, and provision them to sites in your web application.

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;
using System.IO;
using Microsoft.SharePoint.Client;

namespace ApplyThemeAppWeb.Pages
{
    public partial class Default : System.Web.UI.Page
    {
        public string _ContextToken 
        {
            get
            {
                if (ViewState["ContextToken"] == null)
                    return null;
                return ViewState["ContextToken"].ToString();
            }
            set
            {
                ViewState["ContextToken"] = value;
            }
        }

        public string _HostWeb
        {
            get
            {
                if (ViewState["HostWeb"] == null)
                    return null;
                return ViewState["HostWeb"].ToString();
            }
            set
            {
                ViewState["HostWeb"] = value;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                _ContextToken = TokenHelper.GetContextTokenFromRequest(Page.Request);
                _HostWeb = Page.Request["SPHostUrl"];
            }

            StatusMessage.Text = string.Empty;
        }

        protected void GetThemeInfo_Click(object sender, EventArgs e)
        {
            try
            {
                StatusMessage.Text += GetThemeInfo();
            }
            catch (Exception ex)
            {
                StatusMessage.Text += Environment.NewLine + ex.ToString();
            }
        }

        protected void ApplyTheme_Click(object sender, EventArgs e)
        {
            try
            {
                ApplyTheme();
                StatusMessage.Text += "Theme applied. Click Get Theme Info to see changes." + Environment.NewLine;
            }
            catch (Exception ex)
            {
                StatusMessage.Text += Environment.NewLine + ex.ToString();
            }
        }

        private string GetThemeInfo()
        {
            using (var clientContext = TokenHelper.GetClientContextWithContextToken(_HostWeb, _ContextToken, Request.Url.Authority))
            {

                Web hostWebObj = clientContext.Web;
                ThemeInfo initialThemeInfo = hostWebObj.ThemeInfo;

                // Get the initial theme info for the web. No need to load the entire web object.
                clientContext.Load(hostWebObj, w => w.ThemeInfo, w => w.CustomMasterUrl);

                // Theme component info is available via a method call that must be run.
                var linkShade = initialThemeInfo.GetThemeShadeByName("Hyperlink");
                var titleFont = initialThemeInfo.GetThemeFontByName("title", 1033);

                // Run.
                clientContext.ExecuteQuery();

                // Use ThemeInfo to show some data about the theme currently applied to the web.
                StringBuilder initialInfo = new StringBuilder();
                initialInfo.AppendFormat("Current master page: {0}\r\n", hostWebObj.CustomMasterUrl);
                initialInfo.AppendFormat("Background Image: {0}\r\n", initialThemeInfo.ThemeBackgroundImageUri);
                initialInfo.AppendFormat("The \"Hyperlink\" Color for this theme is: {0}\r\n", linkShade.Value);
                initialInfo.AppendFormat("The \"title\" Font for this theme is: {0}\r\n", titleFont.Value);
                return initialInfo.ToString();
            }
        }

        protected void ApplyTheme()
        {
            using (var clientContext = TokenHelper.GetClientContextWithContextToken(_HostWeb, _ContextToken, Request.Url.Authority))
            {
                // Apply the new theme.

                // First, copy theme files to a temporary location (the web's Site Assets library).
                Web hostWebObj = clientContext.Web;
                Site hostSiteObj = clientContext.Site;
                Web hostRootWebObj = hostSiteObj.RootWeb;
                
                // Get the necessary lists and libraries.
                List themeLibrary = hostRootWebObj.Lists.GetByTitle("Theme Gallery");
                Folder themeFolder = themeLibrary.RootFolder.Folders.GetByUrl("15");
                List looksGallery = hostRootWebObj.Lists.GetByTitle("Composed Looks");
                List masterLibrary = hostRootWebObj.Lists.GetByTitle("Master Page Gallery");
                List assetLibrary = hostRootWebObj.Lists.GetByTitle("Site Assets");

                clientContext.Load(themeFolder, f => f.ServerRelativeUrl);
                clientContext.Load(masterLibrary, l => l.RootFolder);
                clientContext.Load(assetLibrary, l => l.RootFolder);

                // First, upload the theme files to the Theme Gallery.
                DirectoryInfo themeDir = new DirectoryInfo(Server.MapPath("/Theme"));
                foreach (var themeFile in themeDir.EnumerateFiles())
                {
                    FileCreationInformation newFile = new FileCreationInformation();
                    newFile.Content = System.IO.File.ReadAllBytes(themeFile.FullName);
                    newFile.Url = themeFile.Name;
                    newFile.Overwrite = true;
                    
                    // Sort by file extension into the correct library. 
                    switch (themeFile.Extension)
                    {
                        case ".spcolor":
                        case ".spfont":
                            Microsoft.SharePoint.Client.File uploadTheme = themeFolder.Files.Add(newFile);
                            clientContext.Load(uploadTheme);
                            break;
                        case ".master":
                        case ".html":
                            Microsoft.SharePoint.Client.File updloadMaster = masterLibrary.RootFolder.Files.Add(newFile);
                            clientContext.Load(updloadMaster);
                            break;
                        default:
                            Microsoft.SharePoint.Client.File uploadAsset = assetLibrary.RootFolder.Files.Add(newFile);
                            clientContext.Load(uploadAsset);
                            break;
                    }

                }

                // Run the file upload.
                clientContext.ExecuteQuery();

                // Create a new composed look for the theme.
                string themeFolderUrl = themeFolder.ServerRelativeUrl;
                string masterFolderUrl = masterLibrary.RootFolder.ServerRelativeUrl;

                // Optional: Use to make the custom theme available for selection in the UI. For
		  // example, for OneDrive for Business sites, you don't need this code because 
                // the ability to set a theme is hidden. 
		  ListItemCreationInformation newLook = new ListItemCreationInformation();
                Microsoft.SharePoint.Client.ListItem newLookItem = looksGallery.AddItem(newLook);
                newLookItem["Title"] = "Theme Sample Look";
                newLookItem["Name"] = "Theme Sample Look";

                FieldUrlValue masterFieldValue = new FieldUrlValue();
                masterFieldValue.Url = masterFolderUrl + "/seattle.master";
                newLookItem["MasterPageUrl"] = masterFieldValue;

                FieldUrlValue colorFieldValue = new FieldUrlValue();
                colorFieldValue.Url = themeFolderUrl + "/ThemeSample.spcolor";
                newLookItem["ThemeUrl"] = colorFieldValue;

                FieldUrlValue fontFieldValue = new FieldUrlValue();
                fontFieldValue.Url = themeFolderUrl + "/ThemeSample.spfont";
                newLookItem["FontSchemeUrl"] = fontFieldValue;

                newLookItem.Update();

                // Apply the master page.
                hostWebObj.CustomMasterUrl = masterFieldValue.Url;

                // Update between the last and next steps. ApplyTheme throws errors if the theme
		  // and master page are updated in the same query.
                hostWebObj.Update();
                clientContext.ExecuteQuery();

                // Apply the theme.
                hostWebObj.ApplyTheme(
                    colorFieldValue.Url, // URL of the color palette (.spcolor) file,
                    fontFieldValue.Url, // URL to the font scheme (.spfont) file (optional)
                    null, // Background Image URL (optional, null here),
                    false // false stores the composed look files in this web only. True shares the composed look with the site collection (to which you need permission). 

                // Need to call update to apply the change to the host web.
                hostWebObj.Update();

                // Run the Update method.
                clientContext.ExecuteQuery();
            }
        }
    }
}
```

## See also
<a name="bk_addresources"> </a>

-  [SharePoint site branding and page customization solutions](SharePoint-site-branding-and-page-customization-solutions.md)
    
-  [Use composed looks to brand SharePoint sites](Use-composed-looks-to-brand-SharePoint-sites.md)
    
-  [Branding.Themes sample](https://github.com/Lauragra/PnP/tree/master/Samples/Branding.Themes)
