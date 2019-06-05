---
title: Understanding and configuring the publishing page transformation model
description: Provides detailed guidance on how to configure and use the publishing page transformation model
ms.date: 06/06/2019
ms.prod: sharepoint
localization_priority: Normal
---

# Understanding and configuring the publishing page transformation model (as of June 2019 version)

Publishing pages are always based upon a page layout and a master page. Those two pages combined with fields containing data make up the page a user sees in the browser. When transforming publishing pages it's therefor mandatory to map the used page layouts into a publishing page transformation model. The publishing page transformation component will have a 'default' page layout mapping for all the out of the box page layouts, so if your portal is using those out of the box page layouts you're covered. Reality is that most portals use custom page layouts (and custom master pages) and therefor there's a need for page layout mappings for those custom page layouts. Custom page layouts can be handled in two ways:

- The **preferred** option is that you provide a custom page layout mapping file yourselves, this gives you full control on what fields are translated to web parts and where they reside on the modern page, what fields become metadata and more.
- If there's no page layout mapping found for the page you're transforming then we'll generate a mapping on the fly and use that. Downside of this approach is that all content will end up in the same section and column of the modern page.

## Generating a page layout mapping file

If you're using custom page layouts then it's recommended to use a custom page layout mapping file so that you'll be able to get more accurate modern pages. Luckily you don't have to handcraft these custom layout files, there's a .Net API and [PnP PowerShell](https://aka.ms/sppnp-powershell) support for generating one.

### Using PowerShell

Using the `Export-PnPClientSidePageMapping` cmdlet you can:

- Export the built in mapping file (`-BuiltInPageLayoutMapping` parameter): this file will be used for the out of the box page layouts. **If you specify a custom mapping for an out of the box page layout in your own mapping file, than that mapping will take preference over the OOB mapping**
- Analyze the page layouts in the connected portal and export those as a mapping file (`-CustomPageLayoutMapping` parameter): all the found custom page layouts are analyzed and exported. If you also want to get your OOB page layouts analyzed then use the `-AnalyzeOOBPageLayouts` parameter.

```PowerShell
# Connect to your "classic" portal
Connect-PnPOnline -Url https://contoso.sharepoint.com/sites/classicportal

# Analyze and export the page layout mapping files
Export-PnPClientSidePageMapping -BuiltInPageLayoutMapping -CustomPageLayoutMapping -Folder c:\temp
```

### Using .Net

In .Net you need to use the `PageLayoutAnalyser` class to analyze page layouts. Below two snippets show how to analyze either all page layouts or the page layouts used by certain publishing pages.

```csharp
string siteUrl = "https://contoso.sharepoint.com/sites/classicportal";
string userName = "joe@contoso.onmicrosoft.com";
AuthenticationManager am = new AuthenticationManager();
using (var cc = am.GetSharePointOnlineAuthenticatedContextTenant(siteUrl, userName, GetSecureString("Password")))
{
    var analyzer = new PageLayoutAnalyser(cc);
    // Analyze all found page layouts
    analyzer.AnalyseAll();  
    analyzer.GenerateMappingFile("c:\\temp", "custompagelayoutmapping.xml");
}
```

```csharp
string siteUrl = "https://contoso.sharepoint.com/sites/classicportal";
string userName = "joe@contoso.onmicrosoft.com";
AuthenticationManager am = new AuthenticationManager();
using (var cc = am.GetSharePointOnlineAuthenticatedContextTenant(siteUrl, userName, GetSecureString("Password")))
{
    var analyzer = new PageLayoutAnalyser(cc);
    // Analyze all the unique page layouts for publishing pages starting with an "a"
    var pages = cc.Web.GetPagesFromList("Pages", "a");
    foreach (var page in pages)
    {
        analyzer.AnalysePageLayoutFromPublishingPage(page);
    }

    analyzer.GenerateMappingFile("c:\\temp", "custompagelayoutmapping.xml");
}
```

## The page layout mapping model explained

When you open a page layout mapping file the following top level elements are present:

- **AddOns**: as user of page transformation you might have the needed to apply custom logic to realize your needs e.g. you need to transform a given property in a way that it can work with your custom client side web part. The framework supports this by allowing you to add your assemblies with functions...simply defining them in the AddOn section and then referencing your custom functions later on by prefixing them with the given name will make the publishing page transformation use your custom code.

- **PageLayouts**: this element contains information for each page layout that you'll plan to use. For each page layout you'll find a definition of the header, web part, metadata, web part zones and fixed web parts.

Upcoming chapters will provide more details.

## PageLayout definition in the page layout model

Let's analyze how a page layout mapping is configured in the page layout mapping model, which is best done based upon a sample definition:

```Xml
    <PageLayout Name="MyPageLayout" AssociatedContentType="CustomPage1" PageLayoutTemplate="AutoDetect" PageHeader="Custom">
      <Header Type="FullWidthImage" Alignment="Left" ShowPublishedDate="true">
        <Field Name="PublishingRollupImage" HeaderProperty="ImageServerRelativeUrl" Functions="ToImageUrl({PublishingRollupImage})" />
        <Field Name="ArticleByLine" HeaderProperty="TopicHeader" Functions=""/>
        <Field Name="PublishingContact" HeaderProperty="Authors" Functions="ToAuthors({PublishingContact})"/>
      </Header>
      <MetaData ShowPageProperties="true" PagePropertiesRow="1" PagePropertiesColumn="3" PagePropertiesOrder="1">
        <Field Name="PublishingContactEmail" TargetFieldName="MyPageContact" Functions="" />
        <Field Name="MyCategory" TargetFieldName="Category" Functions="" ShowInPageProperties="true" />
      </MetaData>
      <WebParts>
        <Field Name="PublishingPageImage" TargetWebPart="SharePointPnP.Modernization.WikiImagePart" Row="1" Column="1" Order="1">
          <Property Name="ImageUrl" Type="string" Functions="ToImageUrl({PublishingPageImage})"/>
          <Property Name="AlternativeText" Type="string" Functions="ToImageAltText({PublishingPageImage})" />
        </Field>
        <Field Name="PublishingPageContent" TargetWebPart="SharePointPnP.Modernization.WikiTextPart" Row="1" Column="2" Order="1">
          <Property Name="Text" Type="string" Functions="" />
        </Field>
      </WebParts>
      <WebPartZones>
        <WebPartZone Row="2" Column="1" Order="1" ZoneId="g_0C7F16935FAC4709915E2D77092A90DE" ZoneIndex="0"/>
      </WebPartZones>
      <FixedWebParts>
        <WebPart Row="1" Column="2" Order="1" Type="Microsoft.SharePoint.WebPartPages.ContentEditorWebPart, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c">
          <Property Name="TITLE" Type="string" Value="Example Embedded Web Content Editor"/>
          <Property Name="CONTENT" Type="string" Value="PnP Rocks!"/>
        </WebPart>
      </FixedWebParts>
    </PageLayout>
```

> [!Note]
> It's recommended that you use the [pagelayoutmapping.xsd schema](https://github.com/SharePoint/sp-dev-modernization/blob/dev/Tools/SharePoint.Modernization/SharePointPnP.Modernization.Framework/Publishing/pagelayoutmapping.xsd) while editing these files. To files you provide to page transformation will be validated against that schema and transformation will fail when the provided page layout mapping file is invalid.

### PageLayout element

The following properties are used on the PageLayout element:

- **Name**: contains the name of your page layout.
- **AssociatedContentType**: the name of the modern site page content type you want use. Leave this blank if you want to use the default site page content type.
- **PageLayoutTemplate**: the layout system to use...defaults to `AutoDetect` which should work fine in all cases, but optionally you can pick a specific wiki layout as well.
- **PageHeader**: controls the type of page header that will be used. Defaults to `Custom` as that allows for a nice header, but you can switch it to `None` for no header or `Default` for the default modern page header.

### Header element

The following properties are used on the Header element:

- **Type**: defaults to `FullWidthImage` allowing the header to show the header image in full width. Alternative options are `ColorBlock`, `CutInShape` and `NoImage`. Note that this attribute only is relevant when the PageHeader attribute was set to `Custom`.
- **Alignment**: controls how the page header content is aligned. Default is `Left`, alternative option is `Center`.
- **ShowPublishedDate**: defines whether the page publication date is shown. Defaults to `true`.

When constructing a modern page header there are 4 page header fields that you can populate with data coming from the publishing page:

- **ImageServerRelativeUrl**: If your header needs to show an image this field will need to defined a server relative image path for an image living in the same site collection as the page. By default the classic publishing page `PublishingRollupImage` field is used, but since that contains an Img tag the field contents is cleaned via the `ToImageUrl` function.
- **TopicHeader**:  By default the classic publishing page `ArticleByLine` field is used as topic header for the modern page header
- **Authors**: Setting the authors allows you to show the main contact for this page in the page header. By default the classic publishing page `PublishingContact` field is used, but since that's a user field the field contents is transformed via the `ToAuthors` function.
- **AlternativeText**: Not mapped by default, but you can add a custom mapping to fill the modern header alternative text property if desired

If you for example don't want to set a topic header you can simply remove or comment the respective Field element.

#### Page Header image options

The default mapping takes the image defined in the `PublishingRollupImage` field as page header but you can optionally pick another publishing image field or specify a hard coded value of an image living in either the source site or the target site. Below sample shows a header with a static image:

```Xml
<Header Type="FullWidthImage" Alignment="Left" ShowPublishedDate="true">
  <!-- Note that static values do require specifying them between '' -->
  <Field Name="PublishingRollupImage" HeaderProperty="ImageServerRelativeUrl" Functions="StaticString('/sites/classicportal/images/myimage.jpg')" />
  <Field Name="ArticleByLine" HeaderProperty="TopicHeader" Functions=""/>
  <Field Name="PublishingContact" HeaderProperty="Authors" Functions="ToAuthors({PublishingContact})"/>
</Header>
```

> [!Note]
> Static strings are introduced with the May 2019 release.

### MetaData element

The metadata element defines which of the classic publishing page fields need to be taken over as metadata for the modern page. As sometimes you want the metadata to be also represented using the OOB Page Properties web part you indicate that via these optional attributes:

- **ShowPageProperties**: will the page properties web part be added on the resulting modern page
- **PagePropertiesRow**: row that will hold the page properties web part
- **PagePropertiesColumn**: column that will hold the page properties web part
- **PagePropertiesOrder**: the order of the page properties web part in the defined row/column

For each field that you want to take over you'll need to add a Field element specifying:

- **Name**: the name of the field in the classic publishing page
- **TargetFieldName**: the name of the field in the target modern page
- **Functions**: If set to empty then the field value from the classic publishing page is taken as is, however if you specify a function here then the output of that function is used
- **ShowInPageProperties**: If set to true and if showing the page properties web part was turned on than this field is shown in the page properties web part

> [!Note]
> - Functions support is not available for taxonomy fields
> - Page property web part configuration was introduced in the June 2019 release

#### Page preview image options

When a page has a page header image that image will also be used as a page preview image. If you however want to control the page preview image then you can populate the `BannerImageUrl` field using either the `ToPreviewImageUrl` function or by specifying a hard coded value as shown in below samples.

```XML
<!-- When you do have a publishing image field that will need to be set as preview image -->
<Field Name="PreviewImage" TargetFieldName="BannerImageUrl" Functions="ToPreviewImageUrl({PreviewImage})" />

<!-- When you do have a hard coded preview image already available on the target site. Note that the source field name (PublishingContactEmail in below sample) must exist, although it's not used here  -->
<Field Name="PublishingContactEmail" TargetFieldName="BannerImageUrl" Functions="StaticString('https://contoso.sharepoint.com/_layouts/15/getpreview.ashx?guidSite=88eebac1710b464cb6816639340fac55&amp;guidWeb=277fe40db9d24da5bbc6827714184958&amp;guidFile=91bf17fd54e849149a3ad6b4f006304e&amp;ext=jpg')" />

<!-- When you want to refer a static image living in the source site  -->
<Field Name="PreviewImage" TargetFieldName="BannerImageUrl" Functions="ToPreviewImageUrl('/sites/classicportal/images/myimage.jpg')" />
```

> [!Note]
> Controlling the page preview image was introduced with the May 2019 release.

### WebParts element

Each field in the classic publishing page that needs to become a visual element on the target page (like a web part or text) must defined in the web parts section:

- **Name**: the name of the field in the classic publishing page.
- **TargetWebPart**: the type of the target web part that will visualize this field on the modern page. Supported target web parts are `SharePointPnP.Modernization.WikiTextPart`, `SharePointPnP.Modernization.WikiImagePart` and `Microsoft.SharePoint.Publishing.WebControls.SummaryLinkWebPart, Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c`.
- **Row**: the row you want to put the target web part in. Needs to be 1 or greater.
- **Column**: the column you want to put the target web part in. Needs to be 1, 2 or 3.
- **Order**: the order of the target web part in the defined row/column.

Depending the chosen TargetWebPart you'll need to provide the web part properties holding the data needed during transformation. Each property has the following properties:

- **Name**: Name of the property. These property names need to match with properties used in the [page transformation model](modernize-userinterface-site-pages-model.md).
- **Type**: Type of the property. These property types need to match with properties used in the [page transformation model](modernize-userinterface-site-pages-model.md).
- **Functions**: If set to empty then the property value will be the value of the field in the source classic publishing page. You can use a function to first transform the field contents or to use data from another field of the classic publishing page

### WebPartZones element

If the page layout contains web part zones then these must be defined here. This is required in order to correctly position to transformed web parts on the modern page. Following properties are used:

- **ZoneId**: the name of the zone
- **ZoneIndex**: the index of the zone (integer)
- **Row**: the row you want to put the web parts hosted in this zone in. Needs to be 1 or greater.
- **Column**: the column you want to put the web parts hosted in this zone in. Needs to be 1, 2 or 3.
- **Order**: order in the defined row/column for the web parts hosted in this zone

### FixedWebParts element

Sometimes page layouts contain "fixed" web parts, this are web parts which are hard coded inside the page layout and therefore these are present on all pages that use the page layout. As there's no API's to detect these "fixed" web parts they need to be defined as part of the page layout mapping model.

Following properties can be set on a "fixed" web part:

- **Type**: type of the fixed web part. See [here](https://github.com/SharePoint/sp-dev-modernization/blob/dev/Tools/SharePoint.Modernization/SharePointPnP.Modernization.Framework/WebParts.cs) for a list of possible types.
- **Row**: the row you want to put the "fixed" web part in. Needs to be 1 or greater.
- **Column**: the column you want to put the "fixed" web part in. Needs to be 1, 2 or 3.
- **Order**: the order, relevant if there's multiple web parts that you put in the same row and column.

For each "fixed" web part you need to define the relevant properties. Typically you would take over these properties as they're defined in your classic page layout. For each property the following attributes can be set:

- **Property**: Name of the property. These property names need to match with properties used in the [page transformation model](modernize-userinterface-site-pages-model.md).
- **Type**: Type of the property. These property types need to match with properties used in the [page transformation model](modernize-userinterface-site-pages-model.md).
- **Value**: the value this property has. Don't forget to XML encode the value.

## AddOns definition in the page layout model

Add-ons allow you to insert your custom logic into the page layout mapping model by following these 2 steps:

- Create a custom assembly hosting your custom functions
- Declare this custom assembly in the AddOns elements

### Create your custom functions/selectors assembly

To create your own functions you'll need to reference the SharePoint.Modernization.Framework assembly in your project and then create a class inheriting the `SharePointPnP.Modernization.Framework.Functions.FunctionsBase` class:

```csharp
using Microsoft.SharePoint.Client;
using SharePointPnP.Modernization.Framework.Functions;
using System;

namespace Contoso.Modernization
{
    public class MyCustomFunctions: FunctionsBase
    {
        public MyCustomFunctions(ClientContext clientContext) : base(clientContext)
        {
        }

        public string MyListAddServerRelativeUrl(Guid listId)
        {
            if (listId == Guid.Empty)
            {
                return "";
            }
            else
            {
                var list = this.clientContext.Web.GetListById(listId);
                list.EnsureProperties(p => p.RootFolder.ServerRelativeUrl);
                return list.RootFolder.ServerRelativeUrl;
            }
        }

    }
}
```

### Declare your custom assembly

Before custom functions can be used they need to be declared in the model by adding one reference per library/class into the AddOns element:

```Xml
<AddOn Name="Custom" Type="Contoso.Modernization.MyCustomFunctions" Assembly="Contoso.Modernization.dll" />
```

or (note the fully qualified path)

```Xml
<AddOn Name="Custom" Type="Contoso.Modernization.MyCustomFunctions" Assembly="c:\transform\Contoso.Modernization.dll" />
```

Note that each declaration has a name, "Custom" in above sample.

### Use your custom functions/selectors

Now that the assembly has been defined you can use your functions and selectors be referencing them by the name like you see the "Custom" prefix in below sample:

```Xml
<Property Name="ListId" Type="guid" Functions="{ListServerRelativeUrl} = Custom.MyListAddServerRelativeUrl({ListId})"/>
```