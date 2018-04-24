---
title: Customize a SharePoint page by using remote provisioning and CSS
ms.date: 11/03/2017
---
# Customize a SharePoint page by using remote provisioning and CSS

Use CSS to customize SharePoint rich text fields and web part Zones.

_**Applies to:** Office 365 | SharePoint 2013 | SharePoint Online_

You can use cascading style sheets (CSS) to customize SharePoint rich text fields and web part Zones. To customize rich text fields, you can do this right in the page you're editing. For web part Zones, you can use the Script Editor web part to add HTML or scripts, or associate a CSS style sheet.
For a code sample that is associated with this article, see  [Branding.AlternateCSSAndSiteLogo](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.AlternateCSSAndSiteLogo) in [Office 365 Developer Patterns and Practices](https://github.com/SharePoint/PnP) on GitHub.

## Customize rich text fields
<a name="sectionSection0"> </a>

You can customize rich text fields by using CSS right in the page editor:

1. In your SharePoint page, choose  **Edit** to open the page editor.
    
2. From the ribbon, choose  **Insert** > **Embed Code**.
    
You can now add or modify CSS elements for a rich text field.

## Customize web part Zones
<a name="sectionSection1"> </a>

To customize web part Zones by using CSS, you use the Script Editor web part. For more information, see  [How to Use the Script Editor web part in SharePoint 2013](http://community.bamboosolutions.com/blogs/sharepoint-2013/archive/2013/05/20/how-to-use-script-editor-web-part-in-sharepoint-2013.aspx).

> [!NOTE] 
> If you are using SharePoint Online and the NoScript feature, the Script Editor web part is disabled. 

The following code example uploads custom CSS to the Asset Library, applies a reference to the CSS URL with a custom action, and then creates a custom action to build a link to the new CSS file.

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

                        // First, upload the CSS files to the Asset Library.
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
                        
                        // Clean up existing actions that we may have deployed.
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

                        // Build a custom action to write a link to your new CSS file.
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
    
-  [How to Use the Script Editor web part in SharePoint 2013](http://community.bamboosolutions.com/blogs/sharepoint-2013/archive/2013/05/20/how-to-use-script-editor-web-part-in-sharepoint-2013.aspx)
    
-  [ScriptEditorWebPart class](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.webpartpages.scripteditorwebpart.aspx)
