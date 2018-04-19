---
title: Use CSS to brand SharePoint pages
ms.date: 11/03/2017
---
# Use CSS to brand SharePoint pages
Use CSS to support branding and site design in SharePoint. Find out about CSS is master pages, the corev15.css file, and composed looks in custom branding.

_**Applies to:** Office 365 | SharePoint 2013 | SharePoint Online_

Cascading style sheet (CSS) plays a large role in SharePoint branding. To successfully customize the site design in SharePoint 2013 and SharePoint Online, it's useful to be familiar with how SharePoint uses CSS.

## CSS branding overview
<a name="sectionSection0"> </a>

When you create a SharePoint site collection, SharePoint creates a Master Page Gallery (_catalogs/masterpage) where most branding assets, including .master, .css, image, HTML, and JavaScript files are stored.

In SharePoint 2013, SharePoint uses the seattle.master page by default for Team sites, Publishing sites, and Team sites with Publishing enabled. It uses mysite15.master for OneDrive for Business sites. Each .master file refers to the corev15.css file, which is built from a variety of .css files delivered with SharePoint out of the box.

All default master pages use corev15.css when processing styles, and rely on the CSS cascade and CSS file sharing to resolve which styles are applied to specific controls and elements in regions of a page. Multiple CSS files are also combined to build the oslo.css file, which is used with the oslo.master master page.

## CSS in master pages
<a name="sectionSection1"> </a>

The  `<SharePoint:CssRegistration>` content placeholder, which corresponds to the [WebControls.CssRegistration](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.webcontrols.cssregistration.aspx) class in the server-side object model, defines the CSS file. Like a reference to a master page, SharePoint replaces the tokens in the master page when the page is processed. The [WebControls.CssLink](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.webcontrols.csslink.aspx) class reads the registration from the master page and inserts a `<link>` tag in the resulting HTML file that is generated.

Consider the following example.

```
<SharePoint:CssRegistration name="<% $SPUrl:~SiteCollection/Style Library/~language/Core Styles/contoso.css%>" runat="server"/>
```

At runtime, this code is rendered as follows.

```
<link rel="stylesheet" type="text/css" href="/sites/nopub/Style%20Library/en-US/Core%20Styles/contoso.css">
```

The  **CSSLink** class renders all style sheets when the page is rendered. If you define styles in a custom .css file that are also defined in corev15.css, they are overwritten.

## Corev15.css file
<a name="sectionSection2"> </a>

A lot of CSS is applied to SharePoint by default. The corev15.css file is the main source for styles in SharePoint. This file is stored in the SharePoint 15 folder on the server at ` \TEMPLATE\LAYOUTS\1033\STYLES\Themable\COREV15.CSS` and not in the Master Page Gallery of the root site and home page.

To see how SharePoint uses CSS out of the box, look at the corev15.css file by using the developer tools in your web browser. In Internet Explorer, use the Internet Explorer Developer Toolbar (access it by pressing  **F12**) and choose the  **CSS** tab to view corev15.css.

Styles defined in corev15.css use the .ms- , and .s4- prefixes, which indicate styles that were created by Microsoft. Corev15.css also uses a lot of child and descendent selectors. 

When you view the file, you'll notice many comments in this format:  `/* [ReplaceFont ( themeFont:"body")] */`. SharePoint reads these comments when a composed look is applied. The comments tell SharePoint to change the attribute of the CSS that immediately follows the comment. Applying a composed look might change many of the default colors, fonts, and background images that are applied, and subsequently update the settings in corev15.css.

> [!NOTE] 
> Selecting the corev15.css file this way loads the rendered CSS rather than the saved CSS. Sometimes you might find discrepancies between the two. User agents such as browsers can also change rendering in response to user actions.

> [!IMPORTANT] 
> Do not log on to the server and edit or customize core SharePoint CSS files in the SharePoint root. Doing so will negatively impact support and upgrade. Never edit the corev15.css directly; always create a copy, rename it, and edit the new file instead. Editing corev15.css will apply branding to all web applications on the server.

### To create a custom style sheet for SharePoint

1. Make a copy of corev15.css and name it contosov15.css.
    
2. Open contosov15.css and modify the CssRegistration line to point to contosov15.css from corev15.css, as shown in the following example.
    
  ```
  <SharePoint:CssRegistration Name="Themable/contoso.css" runat="server" />
  ```

3. Below the CssRegistration line, add the following.
    
  ```
  <SharePoint:CssRegistration name="/_catalogs/masterpage/contoso/contoso.css" 
runat="server">

  ```

## Composed looks in custom branding
<a name="sectionSection3"> </a>

You can use composed looks in custom branding when CSS is called from a master page. The CSS file is stored in the SharePoint file system in one of the following locations: 

-  `15\TEMPLATE\LAYOUTS\{LCID}\STYLES\Themable`
    
-  `/Style Library/Themable/`
    
-  `/Style Library/{culture}/Themable/`
    
You can place custom branding files in  `/Style Library/Themable/` and `/Style Library/{culture}/Themable/`, but  `15\TEMPLATE\LAYOUTS\{LCID}\STYLES\Themable` is not editable, so you can't store custom files in that location.

> [!NOTE] 
> If these locations don't exist by default, you can create them manually and SharePoint will recognize them as themable.

## Applying custom CSS to a SharePoint page
<a name="sectionSection4"> </a>

You can add custom CSS to rich text fields and Web Part zones. To add CSS to a rich text field, put the page in edit mode and choose  **Insert** > **Embed Code** from the ribbon. For Web Part zones, use the Script Editor Web Part to add HTML, scripts, or an internal style sheet. You can use this approach to hide the Quick Launch navigation in the default SharePoint UI. If you are using SharePoint Online and the NoScript feature, NoScript will disable Script Editor Web Part.

Apply CSS to a SharePoint site by using an external style sheet and including a reference to the style sheet in the  `<link>` tag inside the `<head>` tags of the SharePoint page.

The following code example shows how to upload custom CSS to the asset library, apply a reference to the CSS URL with a custom action, and then create a custom action to build a link to the new CSS file. This code is part of the  [Branding.AlternateCSSAndSiteLogo ](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.AlternateCSSAndSiteLogo) sample on GitHub.

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using System.IO;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.EventReceivers;

namespace AlternateCSSAppAutohostedWeb.Services
{
    public class AppEventReceiver : IRemoteEventService
    {
        public SPRemoteEventResult ProcessEvent(SPRemoteEventProperties properties)
        {
            SPRemoteEventResult result = new SPRemoteEventResult();

            try
            {
                using (ClientContext clientContext = TokenHelper.CreateAppEventClientContext(properties, false))
                {
                    if (clientContext != null)
                    {
                        Web hostWebObj = clientContext.Web;

                        List assetLibrary = hostWebObj.Lists.GetByTitle("Site Assets");
                        clientContext.Load(assetLibrary, l => l.RootFolder);

                        // First, upload the CSS files to the Asset library.
                        DirectoryInfo themeDir = new DirectoryInfo(System.Web.Hosting.HostingEnvironment.ApplicationPhysicalPath + "CSS");
                        foreach (var themeFile in themeDir.EnumerateFiles())
                        {
                            FileCreationInformation newFile = new FileCreationInformation();
                            newFile.Content = System.IO.File.ReadAllBytes(themeFile.FullName);
                            newFile.Url = themeFile.Name;
                            newFile.Overwrite = true;

                            Microsoft.SharePoint.Client.File uploadAsset = assetLibrary.RootFolder.Files.Add(newFile);
                            clientContext.Load(uploadAsset);
                            break;
                        }
                        
                        string actionName = "SampleCSSLink";

                        // Now, apply a reference to the CSS URL via a custom action.
                        
                        // Clean up existing actions that you might have deployed.
                        var existingActions = hostWebObj.UserCustomActions;
                        clientContext.Load(existingActions);

                        // Run uploads and initialize the existing Actions collection.
                        clientContext.ExecuteQuery();

                        // Clean up existing actions.
                        foreach (var existingAction in existingActions)
                        {
                            if(existingAction.Name.Equals(actionName, StringComparison.InvariantCultureIgnoreCase))
                                existingAction.DeleteObject();
                        }
                        clientContext.ExecuteQuery();

                        // Build a custom action to write a link to our new CSS file.
                        UserCustomAction cssAction = hostWebObj.UserCustomActions.Add();
                        cssAction.Location = "ScriptLink";
                        cssAction.Sequence = 100;
                        cssAction.ScriptBlock = @"document.write('<link rel=""stylesheet"" href=""" + assetLibrary.RootFolder.ServerRelativeUrl + @"/cs-style.css"" />');";
                        cssAction.Name = actionName;
                        
                        // Apply.
                        cssAction.Update();
                        clientContext.ExecuteQuery();
                    }
                    result.Status = SPRemoteEventServiceStatus.Continue;
                    return result;
                }
            }
            catch (Exception ex)
            {
                result.Status = SPRemoteEventServiceStatus.CancelWithError;
                result.ErrorMessage = ex.Message;
                return result;
            }
            
        }

        public void ProcessOneWayEvent(SPRemoteEventProperties properties)
        {
            // This method is not used by app events.
        }
    }
}
```

## See also
<a name="bk_addresources"> </a>

-  [SharePoint site branding and page customization solutions](SharePoint-site-branding-and-page-customization-solutions.md)
    
-  [Branding.AlternateCSSAndSiteLogo sample](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.AlternateCSSAndSiteLogo)
