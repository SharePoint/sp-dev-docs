---
title: Update the branding of existing SharePoint sites and page regions
description: Customize and then refresh the branding of existing SharePoint sites or regions of SharePoint pages, including the ribbon, the site navigation, the Settings menu, the tree view, and the page content.
ms.date: 4/25/2018
localization_priority: Normal
---

# Update the branding of existing SharePoint sites and page regions

You can refresh the branding on your existing SharePoint sites and site collections, as well as customize regions of SharePoint pages. You might want to do this, for example, when you update to a new version of the site. 

## Refresh branding of existing sites and subsites

The [Branding.Refresh](https://github.com/SharePoint/PnP/tree/dev/Samples/Branding.Refresh) sample in the Office 365 Developer Patterns and Practices project on GitHub shows you how to use the OfficeDevPnP.Core library to iterate over existing sites and subsites to verify and update the applied branding. The sample shows how to update site branding, but the same concept can be used to do other things, such as deploy a new library to a list of sites, or update a custom action that was deployed during provisioning. You can use the same process to move existing sites to a newer version.

The operation involves two steps:

- Get the sites you want to update.
    
- Update the site branding.

### Get the sites you want to update

First, get a list of sites and subsites that you want to update. The sample shows how to do this by using the search functionality, but other options include reading from a site directory, or providing a management UI where administrators can specify the list. The following example shows you how to use search functionality to generate the list.

```cs
// Get a list of sites. Search is one way to get this list, an alternative can be a site directory.
List<SiteEntity> sites = cc.Web.SiteSearchScopedByUrl("https://bertonline.sharepoint.com");

// Generic settings (apply changes on all webs or just root web).
bool applyChangesToAllWebs = true;

// Optionally further refine the list of returned site collections.
var filteredSites = from p in sites
                    where p.Url.Contains("13003")
                    select p;

List<SiteEntity> sitesAndSubSites = new List<SiteEntity>();
if (applyChangesToAllWebs)
{
  // You want to update all sites, so the list of sites is extended to all subsites.
  foreach (SiteEntity site in filteredSites)
  {
    sitesAndSubSites.Add(new SiteEntity() { Url = site.Url, 
                                            Title = site.Title, 
                                            Template = site.Template });
    GetSubSites(cc, site.Url, ref sitesAndSubSites);
  }
  sites = sitesAndSubSites;
}
```

The call to **GetSubSites** is recursive, so it fetches the subsite tree. After the tree has been fetched, verify that the number returned is correct before you continue.

### Update the branding

After you select a site for processing, you can use OfficeDevPnP.Core methods to manipulate the site. The sample shows how to do this for site branding, but you can process any type of change in the same way.

The sample uses a pattern that leverages the web property bag to store information about the current settings. The code first reads the web property bag values and then takes an action that is appropriate for each value.

```cs
// Verify that you have a property bag entry.
string themeName = cc.Web.GetPropertyBagValueString(BRANDING_THEME, "");

if (!String.IsNullOrEmpty(themeName))
{
  // If no theme property bag entry, assume no theme has been applied.
  if (themeName.Equals(currentThemeName, StringComparison.InvariantCultureIgnoreCase))
  {
    // The applied theme matches to the theme you want to update.
    int? brandingVersion = cc.Web.GetPropertyBagValueInt(BRANDING_VERSION, 0);
    if (brandingVersion < currentBrandingVersion)
    {
      DeployTheme(cc, currentThemeName);
      // Set the web propertybag entries
      cc.Web.SetPropertyBagValue(BRANDING_THEME, currentThemeName);
      cc.Web.SetPropertyBagValue(BRANDING_VERSION, currentBrandingVersion);
    }
  }
  else
  {
    if (forceBranding)
    {
      DeployTheme(cc, currentThemeName);
      // Set the web propertybag entries.
      cc.Web.SetPropertyBagValue(BRANDING_THEME, currentThemeName);
      cc.Web.SetPropertyBagValue(BRANDING_VERSION, currentBrandingVersion);
    }
  }
}
```

<br/>

The code that then updates the theme is straightforward and is based on OfficeDevPnP.Core methods.

```cs
string themeRoot = Path.Combine(AppRootPath, String.Format(@"Themes\{0}", themeName));
string spColorFile = Path.Combine(themeRoot, string.Format("{0}.spcolor", themeName));
string spFontFile = Path.Combine(themeRoot, string.Format("{0}.spfont", themeName));
string backgroundFile = Path.Combine(themeRoot, string.Format("{0}bg.jpg", themeName));
string logoFile = Path.Combine(themeRoot, string.Format("{0}logo.png", themeName));

if (IsThisASubSite(cc.Url))
{
  // Retrieve the context of the root site of the site collection.
  using (ClientContext ccParent = new ClientContext(GetRootSite(cc.Url)))
  {
    ccParent.Credentials = cc.Credentials;
    cc.Web.DeployThemeToSubWeb(ccParent.Web, themeName, spColorFile, spFontFile, backgroundFile, "");
    cc.Web.SetThemeToSubWeb(ccParent.Web, themeName);
  }
}
else
{
  cc.Web.DeployThemeToWeb(themeName, spColorFile, spFontFile, backgroundFile, "");
  cc.Web.SetThemeToWeb(themeName);
}
```

## Customize regions of a SharePoint page

When your objective is to customize regions of a SharePoint page, you can use a combination of remote provisioning and custom cascading style sheets (CSS) on files associated with regions of the page. Initially, then, you must be aware of which SharePoint files are associated with the various regions of a SharePoint page. 

**Table 1. SharePoint page regions and associated files**

|Page region|Associated files|More information|
|:-----|:-----|:-----|
|Ribbon|Any of the default master pages. Corresponding CSS: <ul xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:mtps="http://msdn2.microsoft.com/mtps" xmlns:mshelp="http://msdn.microsoft.com/mshelp" xmlns:ddue="http://ddue.schemas.microsoft.com/authoring/2003/5" xmlns:msxsl="urn:schemas-microsoft-com:xslt"><li><p>Main body - body: #s4-workspace</p></li><li><p>Suite bar - Left: #suiteBarLeft</p></li><li><p>Suite bar - Right: #suiteBarRight</p></li><li><p>Ribbon container: #globalNavBox</p></li></ul>|Can be hidden via the **Focus on Content** button.|
|Suite navigation|Any of the default master pages. |Can be hidden via the **Focus on Content** button.|
|Suite links||Can be hidden via the **Focus on Content** button.|
|Welcome menu|.master|Can be hidden via the **Focus on Content** button.|
|Settings menu or gear|.master|For an example, see [FTC to CAM - Custom actions and property bag entries from SP Add-in](http://blogs.msdn.com/b/vesku/archive/2013/10/02/ftc-to-cam-custom-actions-and-property-bag-entries.aspx).|
|Help|.master||
|Ribbon contextual tabs|Any default master page.|For examples, see the following: <ul xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:mtps="http://msdn2.microsoft.com/mtps" xmlns:mshelp="http://msdn.microsoft.com/mshelp" xmlns:ddue="http://ddue.schemas.microsoft.com/authoring/2003/5" xmlns:msxsl="urn:schemas-microsoft-com:xslt"><li><p><a href="https://social.msdn.microsoft.com/Forums/sharepoint/en-US/df1e4e32-ef58-4b51-8ac8-a8c3690e648b/sharepoint-2013-duplicate-contextual-tabs?forum=sharepointdevelopment" target="_blank">SharePoint 2013 Duplicate Contextual Tabs</a></p></li><li><p><a href="https://social.msdn.microsoft.com/Forums/sharepoint/en-US/a3640d58-afe1-41d0-ac83-bd7886c37355/hide-a-contextual-ribbon-tab?forum=crmdevelopment" target="_blank">Hide a Contextual ribbon tab</a></p></li><li><p><a href="https://social.msdn.microsoft.com/Forums/sharepoint/en-US/201306cf-5874-4778-b773-f870c67cee94/hideshow-contextual-tab-on-click-event-of-subgrid?forum=crmdevelopment" target="_blank">Hide/Show contextual tab on click event of subgrid</a></p></li></ul>|
|Quick access toolbar|.master|Can be hidden via the **Focus on Content** button.|
|Site logo|.master<p>Corresponding CSS: .ms-sitelcon-img</p>||
|Top navigation|Nav CSOM/JSOM<p>.master</p>Corresponding CSS (not in edit mode): <ul xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:mtps="http://msdn2.microsoft.com/mtps" xmlns:mshelp="http://msdn.microsoft.com/mshelp" xmlns:ddue="http://ddue.schemas.microsoft.com/authoring/2003/5" xmlns:msxsl="urn:schemas-microsoft-com:xslt"><li><p>New Item selected: .ms-core-listMenu-horizontalBox li.static > .ms-core.listMenu-selected</p></li><li><p>New Item Hover: .mscore-listMenu-horizontalBox li.static > a.ms-core-listMenu-item:hover</p></li><li><p>Flyout Arrow: .ms-core-listMenu-horizontalBox .dynamic-children.additional-background</p></li><li><p>Nav Item (corresponding to top-level menu items): .ms-core-listMenu-horizontalBox li.static > .ms-core-listMenu-item</p></li><li><p>Flyout Item: ul.dynamic .ms-core-listMenu-item</p></li><li><p>Flyout Container: ul.dynamic</p></li><li><p>Edit Links: .ms-navedit-editLinksText > span> .ms-metadata</p></li></ul>Corresponding CSS (in edit mode): <ul xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:mtps="http://msdn2.microsoft.com/mtps" xmlns:mshelp="http://msdn.microsoft.com/mshelp" xmlns:ddue="http://ddue.schemas.microsoft.com/authoring/2003/5" xmlns:msxsl="urn:schemas-microsoft-com:xslt"><li><p>Nav Edit Mode Link: .ms-core-listMenu-horizontalBox .ms-core-listMenuEdit > tr> .msnavedit-linkCell > .ms-core-listMenu-item</p></li><li><p>Add Link: .ms-core-listMenu-horizontalBox a.ms-navedit-addNewLink</p></li></ul>||
|Page title|Corresponding CSS (in edit mode): <ul xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:mtps="http://msdn2.microsoft.com/mtps" xmlns:mshelp="http://msdn.microsoft.com/mshelp" xmlns:ddue="http://ddue.schemas.microsoft.com/authoring/2003/5" xmlns:msxsl="urn:schemas-microsoft-com:xslt"><li><p>Page Title and Page Title with Link: .ms-core-pageTitle, .ms-core-pageTitle a</p></li><li><p>Description button: #ms-pageDescriptionDiv</p></li><li><p>Description box: .js-callout-mainElement</p></li><li><p>Description box arrow: .js-callout-beak</p></li><li><p>Description text: .js-callout-body</p></li></ul>||
|Search box|Nav CSOM/JSOM<p>.master</p>Corresponding CSS: <ul xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:mtps="http://msdn2.microsoft.com/mtps" xmlns:mshelp="http://msdn.microsoft.com/mshelp" xmlns:ddue="http://ddue.schemas.microsoft.com/authoring/2003/5" xmlns:msxsl="urn:schemas-microsoft-com:xslt"><li><p>Search Box Border: .ms-srch-sb-border</p></li><li><p>Search Box Border Hover: .ms-srch-sb-border: hover</p></li><li><p>Search Box Border when clicked: .ms-srch-sb-borderFocused</p></li><li><p>Search Box Input Text Box: .ms-srch-sb-borderFocused</p></li><li><p>Search Box Body: .ms-srch-sb</p></li><li><p>Search Box Input Text Box: .ms-srch-sb-searching</p></li><li><p>Search</p></li></ul>||
|Left navigation|Nav CSOM/JSOM<p>.master</p>|For more information see: <ul xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:mtps="http://msdn2.microsoft.com/mtps" xmlns:mshelp="http://msdn.microsoft.com/mshelp" xmlns:ddue="http://ddue.schemas.microsoft.com/authoring/2003/5" xmlns:msxsl="urn:schemas-microsoft-com:xslt"><li><p><a href="https://msdn.microsoft.com/en-us/library/office/ms558975(v=office.14).aspx" target="_blank">How to: Customize Navigation in SharePoint Server</a></p></li><li><p><a href="../general-development/managed-navigation-in-sharepoint.md" target="_blank">Managed navigation in SharePoint</a></p></li></ul>|
|Tree view|.master|For more information, see [How to customize the built-in Treeview navigator](https://social.msdn.microsoft.com/Forums/sharepoint/en-US/dd4d49fd-e107-469d-b326-d37c86ff66b8/how-to-customize-the-builtin-treeview-navigator-?forum=sharepointcustomizationprevious).|
|Page content|Page Layout/Content Pages<br>Web part zone/web parts<p>Corresponding CSS (web part zone and web part):</p><ul xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:mtps="http://msdn2.microsoft.com/mtps" xmlns:mshelp="http://msdn.microsoft.com/mshelp" xmlns:ddue="http://ddue.schemas.microsoft.com/authoring/2003/5" xmlns:msxsl="urn:schemas-microsoft-com:xslt"><li><p>Web part zone: .ms-webpart-zone</p></li><li><p>Web part holder: .ms-webpartzone-cell</p></li><li><p>Web part title: .ms-webpart-titleText</p></li><li><p>Web part title with link: .ms-webpart-titleText > a</p></li><li><p>Web part body: .ms-WPBody</p></li></ul>|For more information, see [Create a page layout in SharePoint](../general-development/how-to-create-a-page-layout-in-sharepoint.md)|

For samples related to customizing regions of a page, see the following in the Office 365 Developer Patterns and Practices project on GitHub:

- [Branding.AlternateCSSAndSiteLogo](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.AlternateCSSAndSiteLogo) 
- [Branding.Themes](https://github.com/SharePoint/PnP/tree/master/Samples/Branding.Themes)

### Required "minimal" content placeholders in default SharePoint master pages

SharePoint .master pages require that you use content placeholders, which render the basic content and structural elements that a SharePoint page needs to support the page lifecycle. Table 2 lists and describes the content placeholders.

**Table 2. Minimum required content placeholders for a SharePoint master page**

|Content placeholder|Holds content for|
|:-----|:-----|
|PlaceHolderAdditionalPageHead|Additional items in the <head> section of a page.|
|PlaceHolderBodyAreaClass|Additional styles in the page header.|
|PlaceHolderBodyLeftBorder|The left border element for the body of the page.|
|PlaceHolderBodyRightBorder|The right border element for the body of the page.|
|PlaceHolderCalendarNavigator|A date picker for navigating in a calendar when a calendar is visible on a page.|
|PlaceHolderFormDigest|The "form digest" security control.|
|PlaceHolderGlobalNavigation|The global navigation breadcrumb (Top Navigation).|
|PlaceHolderGlobalNavigationSiteMap|The site map in the global navigation (Top Navigation).|
|PlaceHolderHorizontalNav|The top navigation menu for a page (Top Navigation).|
|PlaceHolderLeftActions|The bottom left navigation area (Left Navigation).|
|PlaceHolderLeftNavBar|The left navigation area (Left Navigation).|
|PlaceHolderLeftNavBarDataSource|The data source for the left navigation menu (Left Navigation).|
|PlaceHolderLeftNavBarTop|The top left navigation area (Left Navigation).|
|PlaceHolderMain|The main content of the page (Page Content).|
|PlaceHolderMiniConsole|Page-level commands, such as Edit Page, History, and Incoming Links on an enterprise wiki page.|
|PlaceHolderNavSpacer|The width of the left navigation area (Left Navigation).|
|PlaceHolderPageDescription|Description of the page contents.|
|PlaceHolderPageImage|Page icon in the upper-left corner of the page (the Ribbon).|
|PlaceHolderPageTitle|The page title (&lt;title&gt;) (Page Title) displayed in the title bar of the browser page.|
|PlaceHolderPageTitleInTitle|The page title (Page Title) shown immediately below the breadcrumb. |
|PlaceHolderQuickLaunchBottom|The bottom of the Quick Launch navigation (Top Navigation).|
|PlaceHolderQuickLaunchTop|The top of the Quick Launch navigation (Top Navigation).|
|PlaceHolderSearchArea|The area where the search box control appears (Search Box).|
|PlaceHolderSiteName|The name of the site (Suite Navigation).|
|PlaceHolderTitleAreaClass|The title area of the page (Suite Navigation).|
|PlaceHolderTitleAreaSeparator|Shadows in the title area (Suite Navigation).|
|PlaceHolderTitleBreadCrumb|The title breadcrumb content area. |
|PlaceHolderTitleLeftBorder|The left border of the title area (Suite Navigation).|
|PlaceHolderTitleRightMargin|The right margin of the title area (Suite Navigation).|
|PlaceHolderTopNavBar|The top navigation area (Top Navigation).|
|PlaceHolderUtilities|Extra content that must appear at the bottom of the page (Page Content).|
|SPNavigation|Includes navigation-related operations.|
|WSSDesignConsole|The page editing controls when the page is in Edit mode.|

If you remove one of the content placeholders listed in Table 2 from a SharePoint .master page, SharePoint will throw an error. You can add a content placeholder with hidden visibility, which hides the content from end users.

For more information, see [Windows SharePoint Services Default Master Pages](https://docs.microsoft.com/en-us/previous-versions/office/developer/sharepoint-services/ms467402(v=office.12)) (this article describes functionality in SharePoint Services 3, but the content still applies). See also [Working with content placeholder controls](https://support.office.com/en-us/article/Working-with-content-placeholder-controls-d8b87b85-d1ef-409d-a5c7-044890f89288?CorrelationId=517ec37c-89ef-40d9-b70e-54aa63ac994f&amp;ui=en-US&amp;rs=en-US&amp;ad=US).

Default SharePoint master pages such as seattle.master and oslo.master include many more content placeholders than SharePoint requires. For example, these master pages include `<SharePoint:Themes runat="server">` and `<SharePoint.CssRegistration runat="server">` controls.

Both the **Themes** and **CssRegistration** controls run during the page lifecycle. By using the remote provisioning pattern, you can use a custom action to add a server control to register custom CSS.

Content placeholders that are not visible still work as expected, but any content they generate is omitted from the HTML source that browsers recognize. A content placeholder with `Visible="false"` is hidden.

> [!IMPORTANT] 
> Do not create custom placeholders in custom master pages that exist in out-of-the-box .master pages such as seattle.master and oslo.master. This will cause catastrophic exceptions.

### SharePoint Online Suite Navigation control

SharePoint Online introduces new master page markup for the **Suite Navigation** control, which renders the top navigation. The default markup for the **Suite Navigation** control differs depending on whether the site is an intranet or public-facing. To learn more about the **Suite Navigation** control and see code examples for both intranet and public-facing sites that you can add to your master pages, see [SharePoint Online Suite Navigation control](../general-development/sharepoint-online-suite-navigation-control.md).

### Use CSOM to customize the regions of a SharePoint page

Generally, we recommend that you use the [UserCustomAction](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.usercustomaction.aspx) class to add or remove links and other elements. This is a variant of SharePoint using the [CustomAction](https://msdn.microsoft.com/en-us/library/office/ms460194.aspx) element, which you might recognize as part of the feature framework if you're familiar with the full trust code model. Although the **CustomAction** element and feature framework provisioning pattern are not specifically supported in the client-side object model (CSOM), the same location identifiers available to the **CustomAction** element can be used in CSOM code.

```cs
<CustomAction
  RequiredAdmin = "Delegated | Farm | Machine"
  ControlAssembly = "Text"
  ControlClass = "Text"
  ControlSrc = "Text"
  Description = "Text"
  FeatureId = "Text"
  GroupId = "Text"
  Id = "Text"
  ImageUrl = "Text"
  Location = "Text"
  RegistrationId = "Text"
  RegistrationType = "Text"
  RequireSiteAdministrator = "TRUE" | "FALSE"
  Rights = "Text"
  RootWebOnly = "TRUE" | "FALSE"
  ScriptSrc = "Text"
  ScriptBlock = "Text"
  Sequence = "Integer"
  ShowInLists = "TRUE" | "FALSE"
  ShowInReadOnlyContentTypes = "TRUE" | "FALSE"
  ShowInSealedContentTypes = "TRUE" | "FALSE"
  Title = "Text"
  UIVersion = "Integer">
</CustomAction>
```

### Customize the SharePoint ribbon

When you customize the ribbon, the HTML that the server renders is assigned to the class name that you assign to a custom style. To use this feature, go to the Style Library and create a new CSS file for each style that you want to add to the ribbon. You can add custom styles to two sections of the ribbon: 

- For the **Page Elements** section: `span.ms-rteElement-<yourowndefinedname>`. Alternatively, you can use styles H1, H2, H3, or H4, which will be wrapped around the text that the style is applied to.
    
- For the **Text Styles** section: `.ms-rteEStyle-<yourowndefinedname>`.
    
Then, in your CSS class definition, add the following line: 

`-ms-name:"The name visual in the ribbon for your style";`

Now you can finish defining the details of your custom CSS class in your custom .css file.

### Customize Suite Navigation on a web part page

In SharePoint, the UI has a modern look and feel that is based on page tiles. For example, Live Tiles appear on the default SharePoint page by default. The top navigation makes it easy for users to see and access social content and OneDrive for Business. You can customize the look and feel of these areas by using a mix of CSS and JavaScript.

After you create a web part page, add a Script Editor web part to an available web part zone. You can use this web part to add JavaScript to your page. You can add JavaScript code to the Script Editor web part that identifies the top navigation bar by its **ElementId**, and then hide it by setting its visibility property to hidden.

### Customize the Settings menu or gear

You can use the [UserCustomAction](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.usercustomaction.aspx) class and property bag entries to customize the settings menu of any SharePoint site, as shown in the following code example.

```cs
public void AddCustomActions(ClientContext clientContext)
{
    // Add a site settings link if it doesn't already exist.
    if (!CustomActionAlreadyExists(clientContext, "Sample_CustomSiteSetting"))
    {
        // Add a site settings link.
        UserCustomAction siteSettingLink = clientContext.Web.UserCustomActions.Add();
        siteSettingLink.Group = "SiteTasks";
        siteSettingLink.Location = "Microsoft.SharePoint.SiteSettings";
        siteSettingLink.Name = "Sample_CustomSiteSetting";
        siteSettingLink.Sequence = 1000;
        siteSettingLink.Url = string.Format(DeployManager.appUrl, clientContext.Url);
        siteSettingLink.Title = "Modify Site Metadata";
        siteSettingLink.Update();
        clientContext.ExecuteQuery();
    }

    // Add a site actions link, if it doesn't already exist.
    if (!CustomActionAlreadyExists(clientContext, "Sample_CustomAction"))
    {
        UserCustomAction siteAction = clientContext.Web.UserCustomActions.Add();
        siteAction.Group = "SiteActions";
        siteAction.Location = "Microsoft.SharePoint.StandardMenu";
        siteAction.Name = "Sample_CustomAction";
        siteAction.Sequence = 1000;
        siteAction.Url = string.Format(DeployManager.appUrl, clientContext.Url); ;
        siteAction.Title = "Modify Site Metadata";
        siteAction.Update();
        clientContext.ExecuteQuery();
    }
}
```

### Customize the tree view

To modify the width of the tree view, add a  `<div>` tag around the tree tag in the .master page and assign a CSS class with a style width attribute to the `<div>`. You can increase the width of the **Quick Launch** navigation by adding the following style definition to the .css file.

```css
.ms-nav {
  width: 220 px;
}
```

### Customize page content

Requirements for customizing page content depend on the content you're including in your page. As for customizing the **Site Actions** menu, you can use a [UserCustomAction](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.usercustomaction.aspx) object to provision branding to web parts.

If you are building a publishing site, see [Create a page layout in SharePoint](../general-development/how-to-create-a-page-layout-in-sharepoint.md) to learn the basics. Page layouts depend on the availability of the [ContentTypeId](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.contenttypeid.aspx) class in CSOM. As for other members that aren't available in CSOM, you can use a Windows Communication Foundation (WCF) service to work with **ContentTypeId** as a temporary workaround.

## See also

- [SharePoint site branding and page customization solutions](sharepoint-site-branding-and-page-customization-solutions.md)    
- [Branding and site provisioning solutions for SharePoint](branding-and-site-provisioning-solutions-for-sharepoint.md)
