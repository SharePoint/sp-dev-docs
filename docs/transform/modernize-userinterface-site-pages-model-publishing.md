---
title: Understanding and configuring the publishing page transformation model
description: Provides detailed guidance on how to configure and use the publishing page transformation model
ms.date: 02/11/2021
ms.service: sharepoint
ms.localizationpriority: medium
---

# Understanding and configuring the publishing page transformation model (as of June 2019 version)

Publishing pages are always based upon a page layout and a master page. Those two pages combined with fields containing data make up the page a user sees in the browser. When transforming publishing pages it's therefor mandatory to map the used page layouts into a publishing page transformation model. The publishing page transformation component will have a 'default' page layout mapping for all the out of the box page layouts, so if your portal is using those out of the box page layouts you're covered. Reality is that most portals use custom page layouts (and custom master pages) and therefor there's a need for page layout mappings for those custom page layouts. Custom page layouts can be handled in two ways:

- The **preferred** option is that you provide a custom page layout mapping file yourselves, this gives you full control on what fields are translated to web parts and where they reside on the modern page, what fields become metadata and more.
- If there's no page layout mapping found for the page you're transforming then we'll generate a mapping on the fly and use that. Downside of this approach is that all content will end up in the same section and column of the modern page.

## Generating a page layout mapping file

If you're using custom page layouts then it's recommended to use a custom page layout mapping file so that you'll be able to get more accurate modern pages. Luckily you don't have to handcraft these custom layout files, there's a .Net API and [PnP PowerShell](https://aka.ms/sppnp-powershell) support for generating one.

### Using PowerShell

Using the `Export-PnPPageMapping` cmdlet you can:

- Export the built in mapping file (`-BuiltInPageLayoutMapping` parameter): this file will be used for the out of the box page layouts. **If you specify a custom mapping for an out of the box page layout in your own mapping file, than that mapping will take preference over the OOB mapping**
- Analyze the page layouts in the connected portal and export those as a mapping file (`-CustomPageLayoutMapping` parameter): all the found custom page layouts are analyzed and exported. If you also want to get your OOB page layouts analyzed then use the `-AnalyzeOOBPageLayouts` parameter.

```PowerShell
# Connect to your "classic" portal
Connect-PnPOnline -Url https://contoso.sharepoint.com/sites/classicportal -Interactive

# Analyze and export the page layout mapping files
Export-PnPPageMapping -BuiltInPageLayoutMapping -CustomPageLayoutMapping -Folder c:\temp
```

### Using .Net

In .Net you need to use the `PageLayoutAnalyser` class to analyze page layouts. Below two snippets show how to analyze either all page layouts or the page layouts used by certain publishing pages.

```csharp
string siteUrl = "https://contoso.sharepoint.com/sites/classicportal";
AuthenticationManager am = new AuthenticationManager("<Azure AD client id>", "joe@contoso.onmicrosoft.com", "Pwd as SecureString");
using (var cc = am.GetSharePointOnlineAuthenticatedContextTenant(siteUrl))
{
    var analyzer = new PageLayoutAnalyser(cc);
    // Analyze all found page layouts
    analyzer.AnalyseAll();  
    analyzer.GenerateMappingFile("c:\\temp", "custompagelayoutmapping.xml");
}
```

```csharp
string siteUrl = "https://contoso.sharepoint.com/sites/classicportal";
AuthenticationManager am = new AuthenticationManager("<Azure AD client id>", "joe@contoso.onmicrosoft.com", "Pwd as SecureString");
using (var cc = am.GetSharePointOnlineAuthenticatedContextTenant(siteUrl))
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

- **AddOns**: as user of page transformation you might have the needed to apply custom logic to realize your needs e.g. you need to transform a given property in a way that it can work with your custom SPFX web part. The framework supports this by allowing you to add your assemblies with functions...simply defining them in the AddOn section and then referencing your custom functions later on by prefixing them with the given name will make the publishing page transformation use your custom code.

- **PageLayouts**: this element contains information for each page layout that you'll plan to use. For each page layout you'll find a definition of the header, web part, metadata, web part zones and fixed web parts.

Upcoming chapters will provide more details.

## PageLayout definition in the page layout model

Let's analyze how a page layout mapping is configured in the page layout mapping model, which is best done based upon a sample definition:

```Xml
    <PageLayout Name="MyPageLayout" AlsoAppliesTo="MyOtherPageLayout;MyOtherPageLayout2" AssociatedContentType="CustomPage1" PageLayoutTemplate="AutoDetect" IncludeVerticalColumn="true" PageHeader="Custom">
      <SectionEmphasis VerticalColumnEmphasis="Soft">
        <Section Row="3" Emphasis="Neutral" />
      </SectionEmphasis>
      <Header Type="FullWidthImage" Alignment="Left" ShowPublishedDate="true">
        <Field Name="PublishingRollupImage;PublishingPageImage" HeaderProperty="ImageServerRelativeUrl" Functions="ToImageUrl({@name})" />
        <Field Name="ArticleByLine" HeaderProperty="TopicHeader" Functions=""/>
        <Field Name="PublishingContact" HeaderProperty="Authors" Functions="ToAuthors({PublishingContact})"/>
      </Header>
      <MetaData ShowPageProperties="true" PagePropertiesRow="1" PagePropertiesColumn="4" PagePropertiesOrder="1">
        <Field Name="PublishingContactName;PublishingContactEmail" TargetFieldName="MyPageContact" Functions="" />
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
        <WebPartZone Row="2" Column="1" Order="1" ZoneId="g_0C7F16935FAC4709915E2D77092A90DE" ZoneIndex="0">
          <!-- Optional element, only needed if you want to use custom position of the web parts coming from a web part zone -->
          <WebPartZoneLayout>
            <WebPartOccurrence Type="Microsoft.SharePoint.WebPartPages.ContentEditorWebPart, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" Row="3" Column="2"/>
            <WebPartOccurrence Type="Microsoft.SharePoint.WebPartPages.ContentEditorWebPart, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" Row="3" Column="1" Order="2"/>
            <WebPartOccurrence Type="Microsoft.SharePoint.WebPartPages.XsltListViewWebPart, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" Row="3" Column="1" Order="1"/>
          </WebPartZoneLayout>
        </WebPartZone>
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
- **AlsoAppliesTo**: when this mapping will be used for multiple page layouts then you can specify the names of those additional page layouts as a semi colon delimited list in this attribute. The **Name** property will be name of the first page layout, the **AlsoAppliesTo** just contains the additional ones.
- **AssociatedContentType**: the name of the modern site page content type you want use. Leave this blank if you want to use the default site page content type.
- **PageLayoutTemplate**: the layout system to use...defaults to `AutoDetect` which should work fine in all cases, but optionally you can pick a specific wiki layout as well.
- **IncludeVerticalColumn**: optional element to specify the created target page should have a vertical column. When using a vertical column you target the vertical column as an extra column, so if you before adding a vertical column had 3 columns you'll now have 4 and as such you can set the column value of page content to 4 to put it in the vertical column.
- **PageHeader**: controls the type of page header that will be used. Defaults to `Custom` as that allows for a nice header, but you can switch it to `None` for no header or `Default` for the default modern page header.

### SectionEmphasis element

The following properties are used on the optional SectionEmphasis element:

- **VerticalColumnEmphasis**: use this property to set the vertical column emphasis to None, Neutral, Soft or Strong

For each section you optionally can specify a section emphasis via the Section element:

- **Row**: indicates the row number of this section, first section will have number 1
- **Emphasis**: sets the section emphasis to None, Neutral, Soft or Strong

### Header element

The following properties are used on the Header element:

- **Type**: defaults to `FullWidthImage` allowing the header to show the header image in full width. Alternative options are `ColorBlock`, `CutInShape` and `NoImage`. Note that this attribute only is relevant when the PageHeader attribute was set to `Custom`.
- **Alignment**: controls how the page header content is aligned. Default is `Left`, alternative option is `Center`.
- **ShowPublishedDate**: defines whether the page publication date is shown. Defaults to `true`.

For each field that you want to use in the modern header you'll need to add a Field element specifying:

- **Name**: the name of the field(s) in the classic publishing page. E.g. adding `PublishingRollupImage;PublishingPageImage` as value will mean that the `PublishingRollupImage` will be taken if it was populated, if not populated the `PublishingPageImage` will be tried. You can add as many overrides as you need
- **HeaderProperty**: the name of the header property to set
- **Functions**: If set to empty then the field value from the classic publishing page is taken as is, however if you specify a function here then the output of that function is used. If you've specified multiple fields (so using the field override option), then you need to specify the field to use in the function as `{@name}`

When constructing a modern page header there are 4 page header properties that you can populate with data coming from the publishing page:

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

### MetaData element

The metadata element defines which of the classic publishing page fields need to be taken over as metadata for the modern page. As sometimes you want the metadata to be also represented using the OOB Page Properties web part you indicate that via these optional attributes:

- **ShowPageProperties**: will the page properties web part be added on the resulting modern page
- **PagePropertiesRow**: row that will hold the page properties web part
- **PagePropertiesColumn**: column that will hold the page properties web part
- **PagePropertiesOrder**: the order of the page properties web part in the defined row/column

For each field that you want to take over you'll need to add a Field element specifying:

- **Name**: the name of the field(s) in the classic publishing page. E.g. adding `PublishingContactName;PublishingContactEmail` as value will mean that the `PublishingContactName` will be taken if it was populated, if not populated the `PublishingContactEmail` will be tried. You can add as many overrides as you need
- **TargetFieldName**: the name of the field in the target modern page
- **Functions**: If set to empty then the field value from the classic publishing page is taken as is, however if you specify a function here then the output of that function is used. If you've specified multiple fields (so using the field override option), then you need to specify the field to use in the function as `{@name}`
- **ShowInPageProperties**: If set to true and if showing the page properties web part was turned on than this field is shown in the page properties web part

> [!Note]
> - Functions support is not available for taxonomy fields

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

Sometimes publishing pages have multiple web parts in a web part zone and you do want to position each web part differently on the target page. You can do that by using the optional WebPartZoneLayout element:

```Xml
<WebPartZoneLayout>
  <WebPartOccurrence Type="Microsoft.SharePoint.WebPartPages.ContentEditorWebPart, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" Row="3" Column="2"/>
  <WebPartOccurrence Type="Microsoft.SharePoint.WebPartPages.ContentEditorWebPart, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" Row="3" Column="1" Order="2"/>
  <WebPartOccurrence Type="Microsoft.SharePoint.WebPartPages.XsltListViewWebPart, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" Row="3" Column="1" Order="1"/>
</WebPartZoneLayout>
```

The above definition will have as a result that the first ContentEditorWebPart will go to row 3, column 2. The second ContentEditorWebPart will be put in row 3, column 1 with order 2 and the first XSLTListView web part will end up in row 3, column 1 with order 1. You can define as many WebPartOccurrence elements as needed, if there is no corresponding web part in the web part zone then the WebPartOccurrence element will be ignored. If there's a web part in the web part zone which is not listed as a WebPartOccurrence element then that web part will get it's row, column and order information from the WebPartZone element.

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

## Page layout mapping FAQ

### I want to keep the source page creation information

When using the [PnP PowerShell approach](modernize-userinterface-site-pages-powershell.md) then use the `-KeepPageCreationModificationInformation` cmdlet in the `ConvertTo-PnPClientSidePage` cmdlet. When you're using the [.Net approach](modernize-userinterface-site-pages-dotnet.md) then set the `KeepPageCreationModificationInformation` parameter to true. Using this option will give the target page the Created, Modified, Author and Editor field values from the source page.

> [!Note]
> When you, as part of page transformation, promote the page as news or publish the page the Editor field will be set to the account running page transformation

### I want to promote the created pages as news

Promoting pages created from a page layout as news pages can be be done by using the `-PostAsNews` parameter on the `-KeepPageCreationModificationInformation` cmdlet (when you're using the [PnP PowerShell approach](modernize-userinterface-site-pages-powershell.md)) or alternatively by setting the `PostAsNews` parameter to true (when using the [.Net approach](modernize-userinterface-site-pages-dotnet.md)).

When you use the `PostAsNews` option in conjunction with the `KeepPageCreationModificationInformation` option then `FirstPublishedDateField` field will be set to the source page modification date. The `FirstPublishedDateField` field is the date value shown during news rollup.

### I want to insert hard coded text on the created page

Sometimes a page layout contains text snippets, which since they're not content in the actual page are not getting transformed. If that's the case then you can define a "fake" field to map like shown below:

```XML
<WebParts>
  ...
  <Field Name="ID" TargetWebPart="SharePointPnP.Modernization.WikiTextPart" Row="1" Column="3">
    <Property Name="Text" Type="string" Functions="StaticString('&lt;H1&gt;This is some extra text&lt;/H1&gt;')" />
  </Field>
  ...
</WebParts>
```

> [!Note]
> The HTML provided in the StaticString function must be XML encoded and must be formatted like the source page HTML as this HTML will still be converted to HTML which is compliant with the modern text editor

### I want to prefix or suffix the content from field

The approach used in the previous chapter allows you to add extra text on a page, but has as downside that the extra text will be added in it's own text part. If you want the extra text to be integrated with the actual text being transformed then the below approach allows you to do that. You can either prefix and/or suffix existing field content and optionally you can only have the prefixing/suffixing done when the the field contains content. The bool parameter in the `Prefix`, `Suffix` and `PrefixAndSuffix` functions defines whether the prefixing/suffixing needs to happen when the field content is empty: 'true' means to apply the action even when the field is empty.

See [Page Transformation Functions and Selectors](modernize-userinterface-site-pages-api.md) for more details on the below functions.

```Xml
<WebParts>
...
  <Field Name="PublishingPageContent" TargetWebPart="SharePointPnP.Modernization.WikiTextPart" Row="1" Column="2">
    <Property Name="Text" Type="string" Functions="PrefixAndSuffix('&lt;H1&gt;Prefix some extra text&lt;/H1&gt;','&lt;H1&gt;Suffix some extra text&lt;/H1&gt;',{PublishingPageContent},'false')" />
  </Field>
  ...
  <Field Name="PublishingPageContent" TargetWebPart="SharePointPnP.Modernization.WikiTextPart" Row="1" Column="2">
    <Property Name="Text" Type="string" Functions="Prefix('&lt;H1&gt;Prefix some extra text&lt;/H1&gt;',{PublishingPageContent},'true')" />
  </Field>
  ...
  <Field Name="PublishingPageContent" TargetWebPart="SharePointPnP.Modernization.WikiTextPart" Row="1" Column="2">
    <Property Name="Text" Type="string" Functions="Suffix('&lt;H1&gt;Suffix some extra text&lt;/H1&gt;',{PublishingPageContent},'false')" />
  </Field>
...
</WebParts>
```

### I want to populate a managed metadata field with one or more terms

When you have a managed metadata field in the source page metadata then you might want to have a similar managed metadata field for the target page. Given page transformation currently does have a managed metadata mapping feature this poses a problem. A possible workaround is to populate the target managed metadata field with a chosen term or a set of terms in case of a multi-value managed metadata field. This can be done using the `DefaultTaxonomyFieldValue` function as shown in below example:

```Xml
<MetaData ShowPageProperties="true" PagePropertiesRow="1" PagePropertiesColumn="4" PagePropertiesOrder="1">
...
  <Field Name="TaxField2" TargetFieldName="Metadata2" Functions="DefaultTaxonomyFieldValue({TaxField2},'a65537e8-aa27-4b3a-bad6-f0f61f84b9f7|69524923-a5a0-44d1-b5ec-7f7c6d0ec160','true')" ShowInPageProperties="true"/>
...
</MetaData>
```

See [Page Transformation Functions and Selectors](modernize-userinterface-site-pages-api.md) for more details on the `DefaultTaxonomyFieldValue` function.

### I want to add an extra web part on the created page

When you transform you classic publishing page to a modern page you sometimes want to add an **additional** modern web part on the created page, without that there's a classic version of that web part on the classic publishing page. This can be done by adjusting your webpartmapping.xml and page layout mapping files as shown below.

First define your custom web part in your **webpartmapping.xml** file by **adding** it the `WebParts` element in the file like shown in this [standard SPFX Hello World web part](https://docs.microsoft.com/sharepoint/dev/spfx/web-parts/get-started/build-a-hello-world-web-part):

```XML
<WebParts>
  ...
  <!-- Custom Hello world web part-->
  <WebPart Type="SharePointPnP.Demo.HelloWorld" CrossSiteTransformationSupported="true">
    <Properties>
      <Property Name="HelloWorld" Type="string" />
    </Properties>
   <Mappings>
    <Mapping Default="true" Name="default">
      <ClientSideWebPart Type="Custom" ControlId="157b22d0-8006-4ec7-bf4b-ed62383fea76" Order="10" JsonControlData="&#123;&quot;serverProcessedContent&quot;:&#123;&quot;htmlStrings&quot;:&#123;&#125;,&quot;searchablePlainTexts&quot;:&#123;&#125;,&quot;imageSources&quot;:&#123;&#125;,&quot;links&quot;:&#123;&#125;&#125;,&quot;dataVersion&quot;:&quot;1.0&quot;,&quot;properties&quot;:&#123;&quot;description&quot;:&quot;{HelloWorld}&quot;,&quot;test&quot;:&quot;Multi-line text field&quot;,&quot;test1&quot;:true,&quot;test2&quot;:&quot;2&quot;,&quot;test3&quot;:true&#125;&#125;"/>
    </Mapping>
  </Mappings>
</WebPart>
  ...
</WebParts>
```

If you're not how to correctly define your custom web part in above **ClientSideWebPart** element then follow these steps:

- Navigate to the SharePoint Framework Workbench in your site (e.g. https://contoso.sharepoint.com/sites/myportalsite/_layouts/workbench.aspx)
- Add your custom web part to the workbench and configure it when needed
- Click on the "Web part data" button in the toolbar and then on the "Modern Pages" button
- Copy the **WebPartData** json structure and use it to complete next steps:
  - The **ControlId** guid value is the value of the **id** json property
  - Delete the following json properties from the copied snippet: id, instanceIf, title and description. At this point you have the following left:  `{"serverProcessedContent":{"htmlStrings":{},"searchablePlainTexts":{},"imageSources":{},"links":{}},"dataVersion":"1.0","properties":{"description":"HelloWorld from Bert","test":"Multi-line text field","test1":true,"test2":"2","test3":true}}`
  - XML encode this string, this will give you this: `&#123;&quot;serverProcessedContent&quot;:&#123;&quot;htmlStrings&quot;:&#123;&#125;,&quot;searchablePlainTexts&quot;:&#123;&#125;,&quot;imageSources&quot;:&#123;&#125;,&quot;links&quot;:&#123;&#125;&#125;,&quot;dataVersion&quot;:&quot;1.0&quot;,&quot;properties&quot;:&#123;&quot;description&quot;:&quot;HelloWorld from Bert&quot;,&quot;test&quot;:&quot;Multi-line text field&quot;,&quot;test1&quot;:true,&quot;test2&quot;:&quot;2&quot;,&quot;test3&quot;:true&#125;&#125;`
  - If needed insert web part parameters in this string (e.g. {HelloWorld} in above sample): `&#123;&quot;serverProcessedContent&quot;:&#123;&quot;htmlStrings&quot;:&#123;&#125;,&quot;searchablePlainTexts&quot;:&#123;&#125;,&quot;imageSources&quot;:&#123;&#125;,&quot;links&quot;:&#123;&#125;&#125;,&quot;dataVersion&quot;:&quot;1.0&quot;,&quot;properties&quot;:&#123;&quot;description&quot;:&quot;{HelloWorld}&quot;,&quot;test&quot;:&quot;Multi-line text field&quot;,&quot;test1&quot;:true,&quot;test2&quot;:&quot;2&quot;,&quot;test3&quot;:true&#125;&#125;`
  - Paste the resulting string in the **JsonControlData** property

Once that's in place you need to update your page layout mapping by adding a field in the **WebParts** section that will be transformed to this custom web part:

```XML
<WebParts>
  ...
  <!-- Add an extra web part on the page -->
  <Field Name="ID"  TargetWebPart="SharePointPnP.Demo.HelloWorld" Row="4" Column="1" Order="1">
    <Property Name="HelloWorld" Type="string" Functions="StaticString('PnP Rocks!')"/>
  </Field>
  ...
</WebParts>
```

Ensure that specify the custom **webpartmapping.xml** file as part of your transformation (`-WebPartMappingFile` PowerShell cmdlet parameter, `PublishingPageTransformator` constructor when using .Net).

### I'm using a lot of Add-In parts and want to transform these to custom SPFX web parts

The default behavior of page transformation is simply take over the add-in part on the modern page as add-in's do work on modern pages. If you however want to selectively transform some add-in parts to custom SPFX based web parts, drop some of add-in parts and keep the remaining add-in parts then the default mapping will not be sufficient. In the below example you see that the `StaticString` function is used to feed the add-in title as mapping selector value. So based up on the title of the web part a mapping will be selected. The first add-in will be taken over as add-in on the modern page, the second one will be transformed to a custom SPFX based alternative and the last one will be simply dropped.

When mapping to a custom SPFX based web part you can use any of your add-in part properties to configure the SPFX based alternative (e.g. {HelloWorld} in below sample), even if those properties are not listed in the Properties node in the mapping file. See also the previous chapter if you want to learn more about how to create a custom mapping file.

```XML
<WebPart Type="Microsoft.SharePoint.WebPartPages.ClientWebPart, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" CrossSiteTransformationSupported="true">
  <!-- Note: the add-in can depend on assets that live in the source site, which is not something we can detect -->
  <Properties>
    <Property Name="FeatureId" Type="guid"/>
    <Property Name="ProductWebId" Type="guid"/>
    <Property Name="ProductId" Type="guid"/>
  </Properties>
  <Mappings Selector="StaticString({Title})">
    <Mapping Name="My Custom Report" Default="true">
      <!-- We keep this web part -->
      <ClientSideWebPart Type="ClientWebPart" Order="10" JsonControlData="{}"/>
    </Mapping>
    <Mapping Name="News Ticker" Default="false">
      <!--This web part will be transformed to a custom SPFX based web part -->
      <ClientSideWebPart Type="Custom" ControlId="157b22d0-8006-4ec7-bf4b-ed62383fea76" Order="10" JsonControlData="&#123;&quot;serverProcessedContent&quot;:&#123;&quot;htmlStrings&quot;:&#123;&#125;,&quot;searchablePlainTexts&quot;:&#123;&#125;,&quot;imageSources&quot;:&#123;&#125;,&quot;links&quot;:&#123;&#125;&#125;,&quot;dataVersion&quot;:&quot;1.0&quot;,&quot;properties&quot;:&#123;&quot;description&quot;:&quot;{HelloWorld}&quot;,&quot;test&quot;:&quot;Multi-line text field&quot;,&quot;test1&quot;:true,&quot;test2&quot;:&quot;2&quot;,&quot;test3&quot;:true&#125;&#125;"/>
    </Mapping>
    <Mapping Name="Some other add-in" Default="false">
      <!-- This add-in will not be taken over -->
    </Mapping>
  </Mappings>
</WebPart>
```

You can even make the mapping more precise by taking in account add-in part properties by combining the add-in part properties to generate a selector string.

```XML
<WebPart Type="Microsoft.SharePoint.WebPartPages.ClientWebPart, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" CrossSiteTransformationSupported="true">
  <!-- Note: the add-in can depend on assets that live in the source site, which is not something we can detect -->
  <Properties>
    <Property Name="FeatureId" Type="guid"/>
    <Property Name="ProductWebId" Type="guid"/>
    <Property Name="ProductId" Type="guid"/>
  </Properties>
  <Mappings Selector="ConcatenateWithPipeDelimiter({Title},{effect})">
    <Mapping Name="News Ticker|Slide" Default="true">
      <ClientSideText Text="***TEST.{Title} web part - Slide mapping chosen! Slider theme = {theme}***" Order="10" />
    </Mapping>
    <Mapping Name="News Ticker|Scroll" Default="false">
      <ClientSideText Text="***TEST.{Title} web part - Scroll mapping chosen! Slider theme = {theme}***" Order="10" />
    </Mapping>
  </Mappings>
</WebPart>
```

### Can I control the page preview image

When a page has a page header image that image will also be used as a page preview image. If you however want to control the page preview image then you can populate the `BannerImageUrl` field using either the `ToPreviewImageUrl` function or by specifying a hard coded value as shown in below samples.

```XML
<!-- When you do have a publishing image field that will need to be set as preview image -->
<Field Name="PreviewImage" TargetFieldName="BannerImageUrl" Functions="ToPreviewImageUrl({PreviewImage})" />

<!-- When you do have a hard coded preview image already available on the target site. Note that the source field name (PublishingContactEmail in below sample) must exist, although it's not used here  -->
<Field Name="PublishingContactEmail" TargetFieldName="BannerImageUrl" Functions="StaticString('https://contoso.sharepoint.com/_layouts/15/getpreview.ashx?guidSite=88eebac1710b464cb6816639340fac55&amp;guidWeb=277fe40db9d24da5bbc6827714184958&amp;guidFile=91bf17fd54e849149a3ad6b4f006304e&amp;ext=jpg')" />

<!-- When you want to refer a static image living in the source site  -->
<Field Name="PreviewImage" TargetFieldName="BannerImageUrl" Functions="ToPreviewImageUrl('/sites/classicportal/images/myimage.jpg')" />
```

### I want to use different defaults for the QuickLinks web part

When transformation results in a modern QuickLinks web part (e.g. for transformation of the SummaryLinkWebPart) then the page transformation framework will use a default base configuration for the QuickLinks web part. If you, however, want a different configuration then you can do that by specifying the QuickLinksJsonProperties property. Wrap the encoded JSON properties in a StaticString function as shown in this sample:

```XML
<WebParts>
  ...
  <Field Name="SummaryLinks" TargetWebPart="Microsoft.SharePoint.Publishing.WebControls.SummaryLinkWebPart, Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" Row="1" Column="2">
    <!-- No function specified, means the content of the PublishingPageContent field will be assigned to the value of the first listed web part property -->
    <Property Name="SummaryLinkStore" Type="string" />
    <Property Name="Title" Type="string" Functions="EmptyString()"/>
    <Property Name="QuickLinksJsonProperties" Type="string" Functions="StaticString('{&quot;isMigrated&quot;: false, &quot;layoutId&quot;: &quot;Button&quot;, &quot;shouldShowThumbnail&quot;: true, &quot;buttonLayoutOptions&quot;: { &quot;showDescription&quot;: false, &quot;buttonTreatment&quot;: 1, &quot;iconPositionType&quot;: 2, &quot;textAlignmentVertical&quot;: 1, &quot;textAlignmentHorizontal&quot;: 2, &quot;linesOfText&quot;: 2}, &quot;listLayoutOptions&quot;: { &quot;showDescription&quot;: false, &quot;showIcon&quot;: true}, &quot;waffleLayoutOptions&quot;: { &quot;iconSize&quot;: 1, &quot;onlyShowThumbnail&quot;: false}, &quot;hideWebPartWhenEmpty&quot;: true}')" />
  </Field>
  ...
</WebParts>
```

The JSON in the sample shows all the possible configuration options you can set, but you can however also just define the ones you need. As long as the JSON is valid and the structure is maintained your custom QuickLinks configuration will be picked up.
