---
title: Maximize use of modern lists and libraries
description: Get the maximum number of lists and libraries when using the SharePoint modern user interface.
ms.date: 03/04/2019
ms.prod: sharepoint
localization_priority: Priority
---

# Maximize use of modern lists and libraries

This article discusses how to get the maximum number of lists and libraries when using the modern user interface in SharePoint.

You can't yet transform all lists and libraries to the modern experience because:

- Certain types of lists and libraries are not yet built by the SharePoint team to show up in a modern user interface; for example, a Task list or an Events list. For these you could either wait for the SharePoint team to implement a modern version, or switch over to an equivalent option. Options include using Microsoft Planner instead of a classic Task list, or using the calendar of your Office 365 group instead of a classic SharePoint Events list calendar. 

- Certain types of lists and libraries can be shown in modern, but are blocked due to an incompatible configuration or customization; you can take action here.

## List templates available in the modern user interface

Following are the most commonly used list template types that SharePoint can currently render in a modern user interface (as of October 2018):

- List (100)
- Document Library (101)
- Links list (103)
- Announcements list (104)
- Contacts list (105)
- Picture library (109)
- Form library (115)
- Site pages library (119)
- Custom grid (120)
- Promoted links list (170)
- Publishing pages library (850)
- Assets library (851)
- Issue tracking list (1100)

In this section you'll learn how to identify lists which are not showing as a modern list, why that is and how to remediate those (if possible). However before jumping into this, it's important to realize that for most tenants we see the majority of the lists loading in modern without any caveats. Lists that don't load in modern either stay in classic (like the calendar or tasks list) or can be unblocked by remediating them, which is the scope of this article series. Lists which do not load as modern list are 100% fine to use, fully supported and they should not hold you back from enabling the modern list and library experience for your tenant.

> [!IMPORTANT]
> SharePoint will automatically default to modern lists and libraries, but will also automatically fallback when needed. This will ensure that all lists that can use modern present themselves as a modern list while lists that cannot simply switch to classic when you use them.

## Detect lists and libraries not available in the modern user interface

The recommended approach to detect which lists and libraries are not available in the modern user interface is to run the [SharePoint Modernization scanner](https://aka.ms/sppnp-modernizationscanner). This tool performs a deep analysis of all the lists and libraries in your tenant, and creates reports that give you details about which lists and libraries do not show in modern, and more importantly, why that happens. Based on the scanner output, you can unblock lists and libraries by remediating them, which is covered in the next section.

## Unblock lists and libraries

A list can be blocked due to one or more reasons, which are all spelled out in the scanner output. Following are the typical reasons and their remediation approaches.

### Incompatible customizations

An incompatible customization is the most common reason for lists not rendering in modern, and is typically due to one of the following:

- The use of JSLink
- The use of a user custom action that embeds JavaScript

To fix these blockers, you can either remove the customization (in case it's not business-relevant anymore) or create an alternative solution. For more information on building customizations that are compatible with the modern list and library experience see the [Modernize customizations](modernize-customizations.md) article. Since JSLink at web part level does prevent the page from using the modern list and library experience you need to remove this configuration. You can do this manually by bringing the page in edit mode via appending `?ToolPaneView=2&pagemode=edit` to the page URL and then updating the web part properties. To programmatically do this you can use get the web part via the `LimitedWebPartManager` class and then update the respective properties as shown in below snippet. You can combine this snippet with the more complete code shown later on this page to get a full solution.

```csharp
webPart.Properties["JSLink"] = "";
webPart.SaveWebPartChanges();
cc.ExecuteQuery();
```

### Existence of certain field types

Certain field types (BCS external data, Geolocation, OutcomeChoice in edit mode, Image, Html, and SummaryLinks) are not yet built to work in a modern user interface. To remediate these, you can apply the following approaches:

- Remove the field from the views. The field is still there, so you get a classic edit experience but at least the views are modern.
- Migrate the field's data into a new field that is compatible with modern.
- Completely drop the field if it's not being used.

### Modern and library user interface blocking at site or web level

The modern list and library user interface can be blocked for a complete site collection (site level) or for one or more sites (web level). Remediating this can be done by disabling the respective site or web scoped features as shown in below PnP PowerShell snippet:

```PowerShell
$minimumVersion = New-Object System.Version("2.24.1803.0")
if (-not (Get-InstalledModule -Name SharePointPnPPowerShellOnline -MinimumVersion $minimumVersion -ErrorAction Ignore))
{
    Install-Module SharePointPnPPowerShellOnline -MinimumVersion $minimumVersion -Scope CurrentUser
}
Import-Module SharePointPnPPowerShellOnline -DisableNameChecking -MinimumVersion $minimumVersion

Connect-PnPOnline -Url "<your site url>"

# Disable the modern list site level blocking feature
Disable-PnPFeature -Identity "E3540C7D-6BEA-403C-A224-1A12EAFEE4C4" -Scope Site -Force
# Disable the modern list web level blocking feature
Disable-PnPFeature -Identity "52E14B6F-B1BB-4969-B89B-C4FAA56745EF" -Scope Web -Force
```

### Modern and library user interface blocking at list level

A list can be defined to always run the classic experience at list level (ListExperienceOptions set to ClassicExperience). To undo this following code snippet can be used:

```csharp
// Load the list you want to update
var list = context.Web.Lists.GetByTitle(title);
context.Load(list);
context.ExecuteQuery();

// Possible options are Auto (= defaults to modern), NewExperience (= "modern") and ClassicExperience
list.ListExperienceOptions = ListExperience.Auto;

// Persist the changes
list.Update();
context.ExecuteQuery();
```

### Lists that show up with BaseTemplate = 0

Each list does have a base template but sometimes you might see lists with a base template value of 0 in the scanner output. This is due to the fact that for these lists there's either no view marked as default or sometimes there's no view at all. The fix for these lists is to navigate to the lists settings page (`_layouts/15/listedit.aspx?List=%7B<list id>%7D`) and give the list a view.

### Customized list view pages that contain more than the list XSLTListViewWebPart

Classic list view and edit pages are editable by users, so you could, for example, add additional web parts on a list view page. If you've done that, the list no longer shows in modern. To remediate this, the only approach you can take is to drop the added web parts from the list pages. You can manually check these cases by going to the list and appending `?ToolPaneView=2&pagemode=edit` to the list URL. This will bring the page in edit mode and should reveal the extra web parts and allow you to remove those. If you want to programmatically do the same then below code snippet is a good starting basis. This snippet depends on the PnP sites core library which you can install to your Visual Studio project via the [SharePointPnPCoreOnline nuget package](https://www.nuget.org/packages/SharePointPnPCoreOnline/).

```csharp
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.WebParts;
using OfficeDevPnP.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;

namespace MultipleWebPartFixer
{
    class Program
    {
        static void Main(string[] args)
        {
            string siteUrl = "https://contoso.sharepoint.com/sites/demo";
            string userName = "joe@contoso.onmicrosoft.com";
            AuthenticationManager am = new AuthenticationManager();
            using (var cc = am.GetSharePointOnlineAuthenticatedContextTenant(siteUrl, userName, GetSecureString("Password")))
            {
                // Grab the list
                var list = cc.Web.Lists.GetByTitle("listtofix");
                list.EnsureProperties(l => l.RootFolder, l => l.Id);

                bool isNoScriptSite = cc.Web.IsNoScriptSite();

                if (isNoScriptSite)
                {
                    throw new Exception("You don't have the needed permissions to apply this fix!");
                }

                // get the current (allitems) form
                var files = list.RootFolder.FindFiles("allitems.aspx");
                var allItemsForm = files.FirstOrDefault();
                if (allItemsForm != null)
                {
                    // Load web part manager and web parts
                    var limitedWPManager = allItemsForm.GetLimitedWebPartManager(PersonalizationScope.Shared);
                    cc.Load(limitedWPManager);

                    // Load the web parts on the page
                    IEnumerable<WebPartDefinition> webParts = cc.LoadQuery(limitedWPManager.WebParts.IncludeWithDefaultProperties(wp => wp.Id, wp => wp.ZoneId, wp => wp.WebPart.ExportMode, wp => wp.WebPart.Title, wp => wp.WebPart.ZoneIndex, wp => wp.WebPart.IsClosed, wp => wp.WebPart.Hidden, wp => wp.WebPart.Properties));
                    cc.ExecuteQueryRetry();

                    List<WebPartDefinition> webPartsToDelete = new List<WebPartDefinition>();
                    if (webParts.Count() > 1)
                    {
                        // List all except the XsltListView web part(s)
                        foreach (var webPart in webParts)
                        {
                            if (GetTypeFromProperties(webPart.WebPart.Properties) != "XsltListView")
                            {
                                webPartsToDelete.Add(webPart);
                            }
                        }

                        if (webPartsToDelete.Count == webParts.Count() - 1)
                        {
                            foreach(var webPart in webPartsToDelete)
                            {
                                webPart.DeleteWebPart();
                            }
                            cc.ExecuteQueryRetry();
                            Console.WriteLine("List fixed!");
                        }
                        else
                        {
                            // Special case...investigation needed. Go to list and append ?ToolPaneView=2&pagemode=edit to the list url to check the page
                            Console.WriteLine("Go to list and append ?ToolPaneView=2&pagemode=edit to the list url to check this page");
                        }
                    }
                }
            }

            Console.WriteLine("Press enter to continue...");
            Console.ReadLine();
        }

        public static string GetTypeFromProperties(PropertyValues properties)
        {
            // Check for XSLTListView web part
            string[] xsltWebPart = new string[] { "ListUrl", "ListId", "Xsl", "JSLink", "ShowTimelineIfAvailable" };
            if (CheckWebPartProperties(xsltWebPart, properties))
            {
                return "XsltListView";
            }

            return "";
        }
        private static bool CheckWebPartProperties(string[] propertiesToCheck, PropertyValues properties)
        {
            bool isWebPart = true;
            foreach (var wpProp in propertiesToCheck)
            {
                if (!properties.FieldValues.ContainsKey(wpProp))
                {
                    isWebPart = false;
                    break;
                }
            }

            return isWebPart;
        }

        private static SecureString GetSecureString(string label)
        {
            SecureString sStrPwd = new SecureString();
            try
            {
                Console.Write(String.Format("{0}: ", label));

                for (ConsoleKeyInfo keyInfo = Console.ReadKey(true); keyInfo.Key != ConsoleKey.Enter; keyInfo = Console.ReadKey(true))
                {
                    if (keyInfo.Key == ConsoleKey.Backspace)
                    {
                        if (sStrPwd.Length > 0)
                        {
                            sStrPwd.RemoveAt(sStrPwd.Length - 1);
                            Console.SetCursorPosition(Console.CursorLeft - 1, Console.CursorTop);
                            Console.Write(" ");
                            Console.SetCursorPosition(Console.CursorLeft - 1, Console.CursorTop);
                        }
                    }
                    else if (keyInfo.Key != ConsoleKey.Enter)
                    {
                        Console.Write("*");
                        sStrPwd.AppendChar(keyInfo.KeyChar);
                    }

                }
                Console.WriteLine("");
            }
            catch (Exception e)
            {
                sStrPwd = null;
                Console.WriteLine(e.Message);
            }

            return sStrPwd;
        }
    }
}
```

## See also

- [Modernize the user interface](modernize-userinterface.md)
- [Modernize your classic SharePoint sites](modernize-classic-sites.md)
