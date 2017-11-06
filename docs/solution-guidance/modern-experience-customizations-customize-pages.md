---
title: Customizing "modern" site pages
ms.date: 11/03/2017
---
# Customizing "modern" site pages
During the autumn of 2016 the "modern" page experience was released by the SharePoint team. Modern team site pages are fast, easy to author, and support rich multimedia content. Additionally, pages look great on any device, in a browser or from within the SharePoint mobile app. SharePoint pages are built with web parts, which you can customize according to your needs. You can add documents, videos, images, site activities, Yammer feeds, and more. Just click the + sign and pick a web part from the toolbox to add content to your page. The new “highlighted content” web part lets you set criteria so that specific content will automatically and dynamically populate in that area of the page. And using the SharePoint Framework, developers can build custom web parts that will show up right in the toolbox.

![](https://blogs.office.com/wp-content/uploads/2016/08/New-capabilities-in-SharePoint-Online-team-sites-including-integration-with-Office-365-Groups-1.gif)

This article focuses on the extensibility options within the "modern" page experience. If you, however, want to learn more about the functionalities offered by the "modern" experiences, then the following link will help:
 - New capabilities in SharePoint Online team sites: https://blogs.office.com/2016/08/31/new-capabilities-in-sharepoint-online-team-sites-including-integration-with-office-365-groups

In the remainder of this article we'll use "modern" for the new user experience and "classic" for the legacy user experience. 

>**Important:** 
We're not deprecating the "classic" experience - both "classic" and "modern" will coexist.

_**Applies to:** SharePoint Online_


## Supported customizations for "modern" pages
The number of customizations available for "modern" pages keeps on growing and in this article we'll provide details and examples of the supported options. The SharePoint team is working to support more options in the future. The list below gives a quick overview of the supported capabilities for "modern" team sites:
 - Custom branding
 - Adding "modern" pages programmatically
 - Adding, deleting, updating client side web parts on "modern" pages
 - Alternative layouts - See note on **SharePoint Virtual Summit**

There are numerous customizations which currently are not supported for "modern" pages:
 - Adding "classic" web parts on "modern" pages
 - Custom CSS via AlternateCSSUrl web property
 - Custom JavaScript embedded via User Custom Actions - See note on **SharePoint Framework Extensions**
 - Custom master pages - More extensive branding will be supported later using alternative options
 - Minimal Download Strategy (MDS)

>**Note:**
> - We don't recommend combining the "modern" page functionality with "classic" SharePoint publishing portals. That's the reason why by default the "modern" page functionality is not enabled on "classic" SharePoint publishing portals.
> - In June 2017 [SharePoint Framework extensions went into developer preview](https://dev.office.com/blogs/announcing-availability-of-sharepoint-framework-extensions-developer-preview). Using these SharePoint Framework Extensions you can control the rendering of a field via custom code and you can create user custom actions that execute your custom code. If you want to learn more about the SharePoint Framework Extensions checkout out this link: http://aka.ms/spfx-extensions. 
> - In May 2017 during the [SharePoint Virtual Summit we announced communication sites with configurable page layouts](https://blogs.office.com/2017/05/16/new-sharepoint-and-onedrive-capabilities-accelerate-your-digital-transformation/).  

## Custom branding
<a name="themingimpact"> </a>
If your site happens to use a custom theme, then this custom theme will be respected in the "modern" page experience as shown in the sample below:

![Modern page with custom branding coming from theme settings](media/modern-experiences/modern-page-with-custom-theme.png)

## Why is my site not having the modern pages functionality?
<a name="sitesversusmodernpages"> </a>
The "modern" pages are delivered via the "Site Pages" web scoped feature (B6917CB1-93A0-4B97-A84D-7CF49975D4EC), so when this feature is activated your site will have the option to use "modern" pages. When Microsoft rolled out this feature we enabled this for all "modern" team sites (GROUP#0 sites) and for most "classic" team sites (STS#0). If a "classic" team site had a high count of web part or wiki pages the feature was not automatically enabled and the same applies to "classic" team sites with the publishing feature enabled. If you want "modern" page functionality in these sites you can still activate the "Site Pages" feature. This also implies that sites based on other templates do not have the "modern" pages functionality enabled. 

Previous paragraph talked about how the "modern" page feature was enabled on existing sites, when you create a new "modern" or "classic" team sites (so GROUP#0 or STS#0) then the "modern" site pages feature will be enabled at provisioning time. Sites based on other templates will not get the "modern" site pages feature enabled.


## How to configure the end user experience
<a name="configuremodernpages"> </a>
You have multiple options to control whether the "modern" or "classic" page experience will be used. 

### Tenant level configuration
If you want to completely disable the "modern" experience, then it's best to use the tenant setting for this. Navigate to your tenant admin center (e.g. contoso-admin.sharepoint.com), go to settings, and select the "classic" experience:

![Site Pages section in the SharePoint tenant scoped settings in admin UI](media/modern-experiences/site-pages-setting-admin-ui.png)

>**Notes:**
> - The tenant level setting can be a little confusing: "Preventing users from creating Site Pages" will actually bring back the "classic" experience.
> - The current configuration is cached, logging off the session will immediately show the effect of this change.

### Web level configuration
You can prevent a web from using the "modern" page experience by disabling the web scoped feature with ID **B6917CB1-93A0-4B97-A84D-7CF49975D4EC** (name = "Site Pages"). To re-enable the "modern" page experience at the web level you'll need to activate the feature again.

Use the following [PnP PowerShell](http://aka.ms/sppnp-powershell) to enable/disable the needed features:

```PowerShell
# Connect to a site
$cred = Get-Credential
Connect-PnPOnline -Url https://[tenant].sharepoint.com/sites/siteurl -Credentials $cred

# Prevent site pages at web level
Disable-PnPFeature -Identity B6917CB1-93A0-4B97-A84D-7CF49975D4EC -Scope Web 
# And again enable site pages at web
#Enable-PnPFeature -Identity B6917CB1-93A0-4B97-A84D-7CF49975D4EC -Scope Web 
```

>**Notes:**
> - When you disable the feature you'll not be able anymore to create new "modern" pages, but the already created pages stay working using the "modern" user experience. 

### Commenting configuration
By default users will be able to add comments (July 2017) on "modern" pages. If your organization does not want this feature it can be disabled from the tenant admin center via the settings page:

![](http://i.imgur.com/atl91Vh.png)

>**Notes:**
> You can also programmatically manage the commenting behaviour via site and tenant level API's (requires SharePoint Client-Side Object Model (CSOM) version 16.1.6621.1200 or higher):
> - Microsoft.Online.SharePoint.TenantAdministration.SiteProperties.CommentsOnSitePagesDisabled 
> - Microsoft.SharePoint.Client.Site.CommentsOnSitePagesDisabled


## Programming "modern" pages
### Adding "modern" pages
Creating a "modern" page comes down to creating a list item in the site pages library and assigning it the correct content type combined with setting some additional properties as shown in below code snippet:

```C#
// pagesLibrary is List object for the "site pages" library of the site
ListItem item = pagesLibrary.RootFolder.Files.AddTemplateFile(serverRelativePageName, TemplateFileType.ClientSidePage).ListItemAllFields;

// Make this page a "modern" page
item["ContentTypeId"] = "0x0101009D1CB255DA76424F860D91F20E6C4118";
item["Title"] = System.IO.Path.GetFileNameWithoutExtension("mypage.aspx");
item["ClientSideApplicationId"] = "b6917cb1-93a0-4b97-a84d-7cf49975d4ec";
item["PageLayoutType"] = "Article";
item["PromotedState"] = "0";
item["CanvasContent1"] = "<div></div>";
item["BannerImageUrl"] = "/_layouts/15/images/sitepagethumbnail.png";
item.Update();
clientContext.Load(item);
clientContext.ExecuteQuery();

```

When using PnP (as of March 2017 release) you can leverage our extension methods resulting in an really easy model to add a page:

```C#
cc.Web.AddClientSidePage("mypage.aspx", true);
```

> **Important:**
> At this moment (September 2017) pages created using the `AddTemplateFile` method do not have a preview when you hover over them from the search results page. Microsoft is working on a fix/alternative solution for this.

### Using the PnP support for "modern" pages and client side web parts
As of the [March 2017 release the PnP Sites core library](http://aka.ms/sppnp) offers support for creating, updating and deleting client side pages. This chapter will give you insight in how to work with client side pages using the [PnP Sites core library](https://github.com/SharePoint/PnP-Sites-Core).

#### Creating a new page and adding a text web part
In this sample we create a new client side page in memory, add a rich text editor control and finally save the page to the site pages library as mypage.aspx. First step is creating a ClientSidePage instance, then we instantiate a control which we add on the page using the `AddControl` method. Once that's done the page will be saved.

```C#
// cc is the ClientContext instance for the site you're working with
ClientSidePage myPage = new ClientSidePage(cc);

ClientSideText txt1 = new ClientSideText() { Text = "PnP Rocks" };
myPage.AddControl(txt1, 0);
myPage.Save("mypage.aspx");
```

#### Loading an existing page 
When you want to modify or copy and existing page then you can load that page into the PnP client side object model: the loading will "transform" the html content into a object model that you can manipulate. Loading an existing page is done using the `Load` method

```C#
// load the page with name "page3.aspx"
ClientSidePage p = ClientSidePage.Load(cc, "page3.aspx");

// perform your page updates
...

// save the page back to SharePoint
p.Save()
```

#### Adding a sections
Pages can have a flexible layout: you can add one or more sections on a page and these sections then can have up to 3 columns. You can add sections to your pages using the SharePoint user interface, but you can also do this programmatically:

```C#
var page2 = cc.Web.AddClientSidePage("PageWithSections.aspx", true);
page2.AddSection(CanvasSectionTemplate.ThreeColumn, 5);
page2.AddSection(CanvasSectionTemplate.TwoColumn, 10);
```

#### Adding an out of the box web part 
Below sample shows how you can add an out of the box **image** client side web part on a page. Note that we instantiate the web part object using the `InstantiateDefaultWebPart` method call. Once the web part is initiated its properties are set to the default properties defined in the web part manifest. For most web parts you'll need to update the properties as shown in below sample.

```C#
ClientSidePage page5 = new ClientSidePage(cc);
var imageWebPart = page5.InstantiateDefaultWebPart(DefaultClientSideWebParts.Image);
imageWebPart.Properties["imageSourceType"] = 2;
imageWebPart.Properties["siteId"] = "c827cb03-d059-4956-83d0-cd60e02e3b41";
imageWebPart.Properties["webId"] = "9fafd7c0-e8c3-4a3c-9e87-4232c481ca26";
imageWebPart.Properties["listId"] = "78d1b1ac-7590-49e7-b812-55f37c018c4b";
imageWebPart.Properties["uniqueId"] = "3C27A419-66D0-4C36-BF24-BD6147719052";
imageWebPart.Properties["imgWidth"] = 1002;
imageWebPart.Properties["imgHeight"] = 469;
page5.AddControl(imageWebPart);
page5.Save("page5.aspx");

```

#### Adding a custom client side web part
Previous samples showed how to work with out of the box web parts, but obviously you can also add your custom built client side web parts to a page. You would start from getting your web part information using the `AvailableClientSideComponents` method, then you search for your web part and use the found information to instantiate a `ClientSideWebPart` instance which in a last step will be added to the page.

```C#
ClientSidePage p = new ClientSidePage(cc);

// get a list of possible client side web parts that can be added
var components = p.AvailableClientSideComponents();

// Find our custom "HelloWord" web part
var myWebPart = components.Where(s => s.ComponentType == 1 && s.Name == "HelloWorld").FirstOrDefault();
if (myWebPart != null)
{
    // Instantiate a client side web part from our found web part information
    ClientSideWebPart helloWp = new ClientSideWebPart(myWebPart) { Order = 10 };
    // Add the custom client side web part to the page
    p.AddControl(helloWp);
}

// Persist the page to SharePoint
p.Save("PnPRocks.aspx");
```

#### Adjusting control order
You have different methods to control the order in which the controls will appear on the page. The key aspect is the `Order` attribute on the actual control: the list of controls is sorted by the value of that `Order` attribute when the page html is generated...and the order in the html is also the order at page rendering time.

```C#
// Set the order when initiating the control
ClientSideText txt1 = new ClientSideText() { Text = "PnP Rocks", Order = 5 };

// Set the order when you add the control to the page, in this case we want the control to be the first
myPage.AddControl(txt1, -1);

// Manipulate the control order on the page...e.g. move a control to the back
myPage.Controls[1].Order = 10;

```

#### Deleting a control
If you want to delete a control from a page you can simply call the `Delete` method on the control and save the page back.

```C#
ClientSidePage deleteDemoPage = ClientSidePage.Load(cc, "page3.aspx");
deleteDemoPage.Controls[0].Delete();
deleteDemoPage.Save();
```

#### Deleting a page 
Finally you can also delete a client side page.

```C#
ClientSidePage p = ClientSidePage.Load(cc, "deleteme.aspx");
p.Delete();
```

#### Class model
Below picture shows the most important classes you'll be working with when using the PnP client side page object model.

![PnP Client Side object model](media/pnpclientsideobjectmodel.png)

## Additional Considerations
<a name="sectionSection22"> </a>

We'll gradually introduce more customization options for the "modern" pages experience. These options will be aligned with the release of additional SharePoint framework capabilities. Currently there is no exact schedule available, but we'll be updating the "modern" experience articles whenever new capabilities are released.

## Additional resources
<a name="bk_addresources"> </a>

 - [Allow or prevent creation of site pages by end users](https://support.office.com/en-us/article/Allow-or-prevent-creation-of-site-pages-by-end-users-c41d9cc8-c5c0-46b4-8b87-ea66abc6e63b?ui=en-US&rs=en-US&ad=US)
