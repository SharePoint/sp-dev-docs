---
title: How to Customize page layouts for a catalog-based site in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 21d8db99-73b3-4429-b6cb-04e375af9f55
---


# How to: Customize page layouts for a catalog-based site in SharePoint
Learn how to create and customize category page and catalog-item page layouts for a SharePoint cross-site publishing site.
## Prerequisites for creating and customizing page layouts for a catalog-based site
<a name="bk_prereqs"> </a>

To follow the steps in this example, you must have the following:
  
    
    

- An HTML editor
    
  
- A SharePoint cross-site publishing environment
    
  
For information about how to set up a SharePoint cross-site publishing environment, see  [Configure cross-site publishing in SharePoint](http://technet.microsoft.com/en-us/library/jj656774.aspx).
  
    
    

### Core concepts to know for creating and customizing page layouts for a catalog-based site

Table 1 lists useful articles that can help you understand the concepts and steps that are involved in creating and customizing page layouts for a catalog-based site.
  
    
    

**Table 1. Core concepts for creating and customizing page layouts for a catalog-based site**


|**Article title**|**Description**|
|:-----|:-----|
| [Overview of cross-site publishing in SharePoint](http://technet.microsoft.com/en-us/library/jj635883.aspx) <br/> |Learn about how to use cross-site publishing and Search Web Parts to create adaptive SharePoint Internet, intranet, and extranet sites.  <br/> |
| [How to: Create a page layout in SharePoint](how-to-create-a-page-layout-in-sharepoint.md) <br/> |Learn about how to create page layouts in SharePoint.  <br/> |
| [How to: Resolve errors and warnings when previewing a page in SharePoint](how-to-resolve-errors-and-warnings-when-previewing-a-page-in-sharepoint.md) <br/> |Learn about how to resolve any issues that prevent the server-side preview from rendering your page.  <br/> |
| [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md) <br/> |Learn about how to use snippets to add SharePoint functionality to your HTML master page or page layout.  <br/> |
   

## Introduction to category page layouts and catalog item page layouts
<a name="bk_introduction"> </a>

Category pages and catalog item pages are page layouts that you can use to show structured catalog content consistently across a site. By default, SharePoint can automatically create one category page layout and one catalog item page layout per catalog connection. Pages based on these layouts are created in the Pages library of a publishing site when you connect the site to a catalog. For more information about page layouts, see  [How to: Create a page layout in SharePoint](how-to-create-a-page-layout-in-sharepoint.md). For more information about features that are specific to category page layouts and catalog item page layouts, see  [Overview of cross-site publishing in SharePoint](http://technet.microsoft.com/en-us/library/jj635883.aspx).
  
    
    
By default, category page layouts and catalog item page layouts are created automatically when you connect a publishing site to a catalog. You can also use Design Manager to create category page layouts and catalog item page layouts that you can select when you connect a publishing site to a catalog, or when you configure the navigation term set on a publishing site.
  
    
    

## Create a category page layout
<a name="bk_createCategoryPage"> </a>

Before you can create or customize a category page layout, we recommend that you create a mapped network drive that points to the **Master Page Gallery**. For more information, see  [How to: Map a network drive to the SharePoint Master Page Gallery](how-to-map-a-network-drive-to-the-sharepoint-master-page-gallery.md).
  
    
    
The simplest way to create a category page layout is to let SharePoint create the page layout automatically when you connect the publishing site to a catalog, and then customize the existing category page layout to change the markup as required by the page design. Alternatively, you can create a new category page layout from scratch by using Design Manager.
  
    
    

### To customize an existing category page layout that was created automatically by SharePoint


1. Using Windows Explorer, open the mapped network drive to the Master Page Gallery.
    
  
2. To customize a category page layout, edit the HTML file that resides directly on the server by using an HTML editor to open and edit the HTML file in the mapped drive. Each time that you save the HTML file, any changes are synched to the associated .aspx file.
    
  
3. Replace the markup inside the content placeholder that has **id="PlaceHolderMain"** with the markup that you want to use in the page layout.
    
    > **Important:**
      > You must keep the Content Search Snippet markup so that the category page can display search results. 
4. To configure and copy the HTML for any snippets you want to add to the page, follow step 1 through step 11 in the "Insert a snippet from the Snippet Gallery" section of  [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md).
    
  
5. Make any other required changes to the markup, and then save the file.
    
  
6. Follow step 9 through step 11 in the "Create a page layout" section of  [How to: Create a page layout in SharePoint](how-to-create-a-page-layout-in-sharepoint.md) to check the status of the file, preview the page layout, and fix any errors.
    
  

### To create a category page layout by using Design Manager


1. Follow step 1 through step 6 in the "Create a page layout" section of  [How to: Create a page layout in SharePoint](how-to-create-a-page-layout-in-sharepoint.md).
    
  
2. In step 7, choose the **Article Page** content type.
    
  
3. Choose **OK**.
    
    At this point, SharePoint creates an HTML file and an .aspx file that has the same name.
    
    In Design Manager, your HTML file now appears with a **Status** column that shows one of two statuses:
    
  - **Warnings and Errors**
    
  
  - **Conversion successful**
    
  
4. Using Windows Explorer, open the mapped network drive to the Master Page Gallery.
    
  
5. To customize the category page layout, edit the HTML file that resides directly on the server by using an HTML editor to open and edit the HTML file in the mapped drive. Each time that you save the HTML file, any changes are synched to the associated .aspx file.
    
  
6. In the **\<head\>** tag, replace the content placeholder that has **id="PlaceHolderPageTitle"** with:
    
```HTML
  
<!--MS:<asp:ContentPlaceHolder id="PlaceHolderPageTitle" runat="server">-->
<!--CS: Start Taxonomy TermProperty Snippet-->
<!--SPM:<%@Register Tagprefix="Taxonomy"  Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>-->
<!--MS:<Taxonomy:TermProperty Property="Name" runat="server">-->
<!--ME:</Taxonomy:TermProperty>-->
<!--ME:</asp:ContentPlaceHolder>-->
```

7. Find the content placeholder that has the **id="PlaceHolderPageTitleInTitleArea"** and replace it with:
    
```HTML
  
<!--MS:<asp:ContentPlaceHolder id="PlaceHolderPageTitleInTitleArea" runat="server">-->
<!--SPM:<asp:SiteMapPath runat="server" ParentLevelsDisplayed="1" SiteMapProvider="CurrentNavigationSwitchableProvider"/>-->
<!--ME:</asp:ContentPlaceHolder>-->
```

8. Replace the markup inside the content placeholder that has **id="PlaceHolderMain"** with the markup that you want to use in the page layout.
    
  
9. To configure and copy the HTML for the Content Search Snippet and any other snippets you want to add to the page, follow step 1 through step 11 in the "Insert a snippet from the Snippet Gallery" section of  [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md).
    
    > **Note:**
      > When you add the Content Search Snippet to the page layout, be sure to change the query to use the result source that was created when you connected the publishing site to a catalog. For more information, see  [Configure result sources for web content management in SharePoint](http://technet.microsoft.com/en-us/library/jj715262.aspx). 
10. Make any other required changes to the markup, and then save the file.
    
  
11. Follow step 9 through step 11 in the "Create a page layout" section of  [How to: Create a page layout in SharePoint](how-to-create-a-page-layout-in-sharepoint.md) to check the status of the file, preview the page layout, and fix any errors.
    
  

## Understanding the markup in the HTML category page layout
<a name="bk_CategoryPageMarkup"> </a>

When you create a page layout, an .aspx file is created that SharePoint uses, and some HTML markup is added to the HTML version of the page layout. Category page layouts have markup components that are added to the page layout based on the Cross-Site Collection Publishing feature, and that are unique to category page layouts. When you edit the HTML category page layout in your HTML editor, it might be helpful to understand some of this markup.
  
    
    

### Browser window page title

The component that appears inside the content placeholder with **id="PlaceHolderPageTitle"** contains markup that tells SharePoint to use a term property as the page title in the browser window, instead of using the standard page field value. The following code shows the markup for the browser window page title.
  
    
    

```HTML

<!--CS: Start Taxonomy TermProperty Snippet-->
<!--SPM:<%@Register Tagprefix="Taxonomy"  Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=15.0.0.0, Culture=neutral, 
PublicKeyToken=71e9bce111e9429c" %>-->
<!--MS:<Taxonomy:TermProperty Property="Name" runat="server">-->
<!--ME:</Taxonomy:TermProperty>-->
```


### Page title

The component that appears inside the content placeholder with **id="PlaceHolderPageTitleInTitleArea"** contains markup that tells SharePoint to use a term property as the page title on the page, instead of using the **SPTitleBreadcrumb** snippet and the standard page title field value. The following code shows the markup for the page title.
  
    
    

```HTML

<!--SPM:<asp:SiteMapPath runat="server" ParentLevelsDisplayed="1" SiteMapProvider="CurrentNavigationSwitchableProvider"/>-->"
```


### Content Search Snippet

The components that appear after the page content snippet, inside the content placeholder with **id="PlaceHolderMain"**, contain markup for a Web Part Zone Snippet that contains four Web Part zones. The first Web Part zone contains a Content Search Snippet that displays a Content Search Web Part on the page. This snippet also contains information that helps the Content Search Web Part query a result source and show the results on the page. The last three Web Part zones are empty. If you choose to create your own category page layout, you must include the markup for the Content Search Snippet in the HTML file for your page layout. The following code shows the markup for the Content Search snippet. Replace  _ResultSourceID_ with the GUID of the result source, and replace _CatalogURL_ with the URL of the catalog.
  
    
    

> **Note:**
> The GUIDs for **ID** and **\_\_WebPartId** are randomly generated by SharePoint when the snippets are added to the page layout.
  
    
    


```HTML
<!--
CS: Start Content Search Snippet-->
<!--SPM:<%@Register Tagprefix="a781102493" Namespace="Microsoft.Office.Server.Search.WebControls" Assembly="Microsoft.Office.Server.Search, Version=15.0.0.0, Culture=neutral, 
PublicKeyToken=71e9bce111e9429c"%>-->
<!--MS:<a781102493:ContentBySearchWebPart runat="server" DataProviderJSON="{&amp;#34;QueryTemplate&amp;#34;:&amp;#34;&amp;#34;,&amp;#34;SourceID&amp;#34;
:&amp;#34;ResultSourceID&amp;#34;,&amp;#34;PropertiesJson&amp;#34;:&amp;#34;
{'Tag':'{Term.IDWithChildren}','Scope':'CatalogURL'}&amp;#34;}" ResultsPerPage="3" RenderTemplateId="~sitecollection/_catalogs/masterpage/Display Templates/Content Web Parts/Control_ListWithPaging.js" 
ItemTemplateId="~sitecollection/_catalogs/masterpage/Display Templates/Content Web Parts/Item_PictureOnTop.js" SelectedPropertiesJson="[&amp;#34;WorkId&amp;#34;,&amp;#34;Rank&amp;#34;,&amp;#34;Title&amp;#34;,&amp;#34;Author&amp;#34;,&amp;#34;
Size&amp;#34;,&amp;#34;Path&amp;#34;,&amp;#34;Description&amp;#34;,&amp;#34;Write&amp;#34;,&amp;#34;CollapsingStatus&amp;#34;,&amp;#34;
HitHighlightedSummary&amp;#34;,&amp;#34;HitHighlightedProperties&amp;#34;,&amp;#34;ContentClass&amp;#34;,&amp;#34;
PictureThumbnailURL&amp;#34;,&amp;#34;ServerRedirectedURL&amp;#34;,&amp;#34;ServerRedirectedEmbedURL&amp;#34;,&amp;#34;
ServerRedirectedPreviewURL&amp;#34;,&amp;#34;FileExtension&amp;#34;,&amp;#34;ContentTypeId&amp;#34;,&amp;#34;ParentLink&amp;#34;,&amp;#34;
ViewsLifeTime&amp;#34;,&amp;#34;ViewsRecent&amp;#34;,&amp;#34;SectionNames&amp;#34;,&amp;#34;SectionIndexes&amp;#34;,&amp;#34;
SiteLogo&amp;#34;,&amp;#34;SiteDescription&amp;#34;,&amp;#34;deeplinks&amp;#34;,&amp;#34;importance&amp;#34;]" ShouldHideControlWhenEmpty="True" FrameType="None" SuppressWebPartChrome="False" Description="$Resources:Microsoft.Office.Server.Search,CBS_Description;" IsIncluded="True" 
ZoneID="" PartOrder="0" FrameState="Normal" AllowRemove="True" AllowZoneChange="True" 
AllowMinimize="True" AllowConnect="True" AllowEdit="True" AllowHide="True" IsVisible="True" 
DetailLink="" HelpLink="" HelpMode="Modeless" Dir="Default" PartImageSmall="" IsIncludedFilter="" ExportControlledProperties="True" ConnectionID="00000000-0000-0000-0000-000000000000" ID="g_54e35103_6f29_4dd9_b93b_8d4c863834af" ChromeType="None" ExportMode="All" __MarkupType="vsattributemarkup" __WebPartId="54e35103-6f29-4dd9-b93b-8d4c863834af" 
WebPart="true" Height="" Width="" Title="$Resources:cms,WebPartZoneTitle_Dynamic;">-->
<!--ME:</a781102493:ContentBySearchWebPart>-->
<!--CE: End Content Search Snippet-->

```


## Create a catalog item page layout
<a name="bk_createCatItemPage"> </a>

Before you can create or customize a catalog item page layout, we recommend that you create a mapped network drive that points to the Master Page Gallery. For more information, see  [How to: Map a network drive to the SharePoint Master Page Gallery](how-to-map-a-network-drive-to-the-sharepoint-master-page-gallery.md).
  
    
    
As with the category page layout, the simplest way to create a catalog item page layout is to let SharePoint create the page layout automatically when you connect the publishing site to a catalog, and then customize the existing catalog item page layout to add any additional markup required by the page design. Alternatively, you can create a catalog item page layout from scratch by using Design Manager.
  
    
    

### To customize an existing catalog item page layout that was created automatically by SharePoint


1. Using Windows Explorer, open the mapped network drive to the Master Page Gallery.
    
  
2. To customize a catalog item page layout, edit the HTML file that resides directly on the server by using an HTML editor to open and edit the HTML file in the mapped drive. Each time that you save the HTML file, any changes are synched to the associated .aspx file.
    
  
3. Inside the content placeholder that has **id="PlaceHolderMain"**, add the markup that you want to use in the page layout.
    
  
4. Delete any snippets that you do not want to use in the page layout, and move the remaining snippets to places in the markup where you want the property values to appear.
    
    > **Caution:**
      > By default, a Web Part Zone Snippet that contains a Catalog-Item Reuse Snippet is added to the page layout. This snippet contains the data provider that returns query results that are used by all other snippets on the page. We recommend that you keep the Catalog-Item Reuse Snippet in this default Web Part Zone Snippet. (You can move the Catalog-Item Reuse Snippet outside the Web Part Zone, and you can change the property that it displays. But, you must keep the Catalog-Item Reuse Snippet in the page layout.) For more information, see  [Page fields](how-to-customize-page-layouts-for-a-catalog-based-site-in-sharepoint.md#bk_pagefields), later in this article. 
5. To configure and copy the HTML snippet for any snippets you want to use in the page, follow step 1 through step 11 in the "Insert a snippet from the Snippet Gallery" section of  [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md).
    
  
6. Make any other required changes to the markup, and then save the file.
    
  
7. Follow step 9 through step 11 in the "Create a page layout" section of  [How to: Create a page layout in SharePoint](how-to-create-a-page-layout-in-sharepoint.md) to check the status of the file, preview the page layout, and fix any errors.
    
  

### To create a catalog item page layout by using Design Manager


1. Follow step 1 through step 6 in the "Create a page layout" section of  [How to: Create a page layout in SharePoint](how-to-create-a-page-layout-in-sharepoint.md).
    
  
2. In step 7, choose **Remote Catalog**, and then choose the catalog that contains the data to appear on the page.
    
  
3. Choose **OK**.
    
    At this point, SharePoint creates an HTML file and an .aspx file that has the same name.
    
    In Design Manager, your HTML file now appears with a **Status** column that shows one of two statuses:
    
  - **Warnings and Errors**
    
  
  - **Conversion successful**
    
  
4. Using Windows Explorer, open the mapped network drive to the Master Page Gallery.
    
  
5. To customize the catalog item page layout, edit the HTML file that resides directly on the server by using an HTML editor to open and edit the HTML file in the mapped drive. Each time that you save the HTML file, any changes are synched to the associated .aspx file.
    
  
6. Inside the content placeholder that has **id="PlaceHolderMain"**, add the markup that you want to use in the page layout.
    
  
7. Delete any snippets that you do not want to use in the page layout, and move the remaining snippets to places in the markup where you want the property values to appear.
    
    > **Caution:**
      > By default, a Web Part Zone Snippet that contains a Catalog-Item Reuse Snippet is added to the page layout. This snippet contains the data provider that returns query results that are used by all other snippets on the page. We recommend that you keep the Catalog-Item Reuse Snippet in this default Web Part Zone Snippet. (You can move the Catalog-Item Reuse Snippet outside the Web Part Zone, and you can change the property that it displays. But, you must keep the Catalog-Item Reuse Snippet in the page layout.) For more information, see  [Page fields](how-to-customize-page-layouts-for-a-catalog-based-site-in-sharepoint.md#bk_pagefields), later in this article. 
8. To configure and copy the HTML snippet for any snippets you want to use in the page, follow step 1 through step 11 in the "Insert a snippet from the Snippet Gallery" section of  [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md).
    
  
9. Make any other required changes to the markup, and then save the file.
    
  
10. Follow step 9 through step 11 in the "Create a page layout" section of  [How to: Create a page layout in SharePoint](how-to-create-a-page-layout-in-sharepoint.md) to check the status of the file, preview the page layout, and fix any errors.
    
  

## Understanding the markup in the HTML catalog item page layout
<a name="bk_CatItemMarkup"> </a>

When you create a page layout, an .aspx file is created that SharePoint uses, and some HTML markup is added to the HTML version of the page layout. Catalog item page layouts have markup components that are added to the page layout based on the Cross-Site Collection Publishing feature, and that are unique to catalog item page layouts. When you edit the HTML catalog item page layout in your HTML editor, it might be helpful to understand some of this markup.
  
    
    

### Browser window page title

The component that appears inside the content placeholder with **id="PlaceHolderPageTitle"** contains a Catalog-Item Reuse Snippet that tells SharePoint to use the name of the catalog item as the page title in the browser window, instead of using the standard page title field value. The following code shows the markup for the browser window page title.
  
    
    

> **Note:**
> The GUIDs for **ID** and **__WebPartId** are randomly generated by SharePoint when the snippets are added to the page layout.
  
    
    


```HTML

<!--CS: [Title] Start Catalog-Item Reuse Snippet-->
<!--SPM:<cc1:CatalogItemReuseWebPart runat="server" UseServerSideRenderFormat="True" ResultType="" NumberOfItems="1" UseSharedDataProvider="True" OverwriteResultPath="False" ResultsPerPage="1"  SelectedPropertiesJson="[&amp;#34;Title&amp;#34;]" 
Title="$Resources:Microsoft.Office.Server.Search,CBSItem_Title;" Description="$Resources:Microsoft.Office.Server.Search,CBSItem_Description;" 
MissingAssembly="Cannot import this Web Part." ID="g_863912c1_c849_46dc_8781_2920ee2bc83f" __WebPartId="{863912c1-c849-46dc-8781-2920ee2bc83f}">-->
<!--SPM:<RenderFormat>-->
<!--DC:Renders value from search without any additional formatting.-->
<!--SPM:</RenderFormat>-->
<!--SPM:</cc1:CatalogItemReuseWebPart>-->
<!--CE:End Catalog-Item Reuse Snippet-->

```


### Page fields
<a name="bk_pagefields"> </a>

The components that appear inside the content placeholder with **id="PlaceHolderMain"** contain snippets for the **Title**, **Page Content**, and **Catalog-Item URL** fields. You may delete any of these snippets from the page layout. The following code shows the markup for these page fields.
  
    
    

```HTML

<div>
    <!--CS: Start Page Field: Title Snippet-->
    <!--SPM:<%@Register Tagprefix="PageFieldTextField" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, 
Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
    <!--SPM:<%@Register Tagprefix="Publishing" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
    <!--MS:<Publishing:EditModePanel runat="server" CssClass="edit-mode-panel">-->
        <!--MS:<PageFieldTextField:TextField FieldName="fa564e0f-0c70-4ab9-b863-0177e6ddd247" 
runat="server">-->
        <!--ME:</PageFieldTextField:TextField>-->
    <!--ME:</Publishing:EditModePanel>-->
    <!--CE: End Page Field: Title Snippet-->
</div>
<div>
    <!--CS: Start Page Field: Page Content Snippet-->
    <!--SPM:<%@Register Tagprefix="PageFieldRichHtmlField" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
    <!--MS:<PageFieldRichHtmlField:RichHtmlField FieldName="f55c4d88-1f2e-4ad9-aaa8-819af4ee7ee8" runat="server">-->
        <!--PS: Start of READ-ONLY PREVIEW (do not modify)-->
            <div id="ctl02_label" style="display:none">Page Content</div>
            <div id="ctl02__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl02_label">
                <div align="left" class="ms-formfieldcontainer">
                    <div class="ms-formfieldlabelcontainer" nowrap="nowrap">
                        <span class="ms-formfieldlabel" nowrap="nowrap">Page Content</span>
                    </div>
                    <div class="ms-formfieldvaluecontainer">
                        <div class="ms-rtestate-field">Page Content field value. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                </div>
            </div>
        <!--PE: End of READ-ONLY PREVIEW-->
    <!--ME:</PageFieldRichHtmlField:RichHtmlField>-->
    <!--CE: End Page Field: Page Content Snippet-->
</div>
<div>
    <!--CS: Start Page Field: Catalog-Item URL Snippet-->
    <!--SPM:<%@Register Tagprefix="PageFieldCatalogSourceFieldControl" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
    <!--MS:<PageFieldCatalogSourceFieldControl:CatalogSourceFieldControl FieldName="75772bbf-0c25-4710-b52c-7b78344ad136" runat="server">-->
    <!--PS: Start of READ-ONLY PREVIEW (do not modify)-->
        <div align="left" class="ms-formfieldcontainer">
            <div class="ms-formfieldlabelcontainer" nowrap="nowrap">
                <span class="ms-formfieldlabel" nowrap="nowrap">Catalog-Item URL</span>
            </div>
            <div class="ms-formfieldvaluecontainer">
                <a href="http://www.example.com">Link to sample web site.</a>
            </div>
        </div>
    <!--PE: End of READ-ONLY PREVIEW-->
    <!--ME:</PageFieldCatalogSourceFieldControl:CatalogSourceFieldControl>-->
    <!--CE: End Page Field: Catalog-Item URL Snippet-->
</div>

```

If the catalog item page layout was created automatically when the publishing site was connected to a catalog, or was created by selecting a remote catalog during page layout creation, the page layout also contains a Web Part Zone Snippet that contains a Catalog-Item Reuse Snippet that registers a data provider for the page. The Catalog-Item Reuse Snippet contains a **UseSharedDataProvider** property, which is set to **False**. The Web Part Zone Snippet can be deleted from the page layout. But, the Catalog-Item Reuse Snippet must be kept in the page layout markup for the page to display catalog items. When you create a page that uses this page layout, you can configure the Web Part so that it is hidden when a user views the page.
  
    
    

> **Important:**
> If you create a new catalog item page layout, and you choose a content type instead of a remote catalog, you must include a Catalog-Item Reuse Snippet in the page layout. The following code shows the markup for the Catalog-Item Reuse Snippet as it appears inside the Web Part Zone Snippet. Replace  _ManagedPropertyName_ with the name of the managed property to display, replace _ResultSourceID_ with the GUID of the result source, and replace _CatalogURL_ with the URL of the catalog.
  
    
    




```HTML

<div>
    <!--CS: Start Web Part Zone Snippet-->
    <!--SPM:<%@Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, 
Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
    <!--SPM:<%@Register Tagprefix="cc1"  Namespace="Microsoft.Office.Server.Search.WebControls" Assembly="Microsoft.Office.Server.Search, Version=15.0.0.0, Culture=neutral, 
PublicKeyToken=71e9bce111e9429c" %>-->
    <!--MS:<WebPartPages:WebPartZone runat="server" Title="&amp;#60;%$Resources:cms,WebPartZoneTitle_Body%&amp;#62;" AllowPersonalization="False" FrameType="TitleBarOnly" ID="Body" Orientation="Vertical">-->
        <!--MS:<ZoneTemplate>-->
            <!--CS: [ManagedPropertyName] Start Catalog-Item Reuse Snippet-->
            <!--DC:To render the search property using a rendering template, change the "UseServerSideRenderFormat" property to "False".-->
            <!--SPM:<cc1:CatalogItemReuseWebPart runat="server" UseServerSideRenderFormat="True" 
ResultType="" NumberOfItems="1" AddSEOPropertiesFromSearch="True" LogAnalyticsViewEvent="True" UseSharedDataProvider="False" OverwriteResultPath="False" DataProviderJSON="{&amp;#34;QueryTemplate&amp;#34;:&amp;#34;ListItemID:{URLTOKEN.1}&amp;#34;,&amp;#34;SourceID&amp;#34;:&amp;#34; ResultSourceID&amp;#34;,&amp;#34;PropertiesJson&amp;#34;:&amp;#34;{&amp;#39;Scope&amp;#39;:&amp;#39;  CatalogURL&amp;#39;,&amp;#39;Tag&amp;#39;:&amp;#39;{Term}&amp;#39;}&amp;#34;}" ResultsPerPage="1"  SelectedPropertiesJson="[&amp;#34;ManagedPropertyName&amp;#34;]" Title="$Resources:Microsoft.Office.Server.Search,CBSItem_Title;" Description="$Resources:Microsoft.Office.Server.Search,CBSItem_Description;" MissingAssembly="Cannot import this Web Part." ID="g_d63eebe7_207f_4e8c_9566_7381acc80cc7" __WebPartId="{d63eebe7-207f-4e8c-9566-7381acc80cc7}">-->
            <!--SPM:<RenderFormat>-->
            <!--DC:Renders value from search without any additional formatting.-->
            <!--SPM:</RenderFormat>-->
            <!--SPM:</cc1:CatalogItemReuseWebPart>-->
        <!--ME:</ZoneTemplate>-->
    <!--ME:</WebPartPages:WebPartZone>-->
    <!--CE:End Catalog-Item Reuse Snippet-->
</div>

```

If the catalog item page layout was created automatically when the publishing site was connected to a catalog, or was created by selecting a remote catalog during page layout creation, the rest of the page contains Catalog-Item Reuse Snippets that correspond to managed properties from the catalog on the authoring site. These managed properties display the details for the specific catalog item that is displayed by using the catalog item page layout. These Catalog-Item Reuse Snippets appear outside the Web Part zone, and are rendered directly on the page when an item is chosen on a category page. Table 2 lists the managed properties that are automatically included in the catalog item page layout.
  
    
    

> **Note:**
> Some managed properties are included only if the catalog is a Pages library. The **Used by** column in Table 2 indicates which managed properties are used by both a Pages library and a list, and which from a Pages library only.
  
    
    


**Table 2. Default managed properties Catalog-Item Reuse Snippets**


|**Managed property**|**Description**|**Used by**|
|:-----|:-----|:-----|
|**AuthorOWSUSER** <br/> |The name of the user who created the page.  <br/> |Pages library only  <br/> |
|**CreatedOWSDATE** <br/> |The date the page or list item was created.  <br/> |Pages library and list  <br/> |
|**EditorOWSUSER** <br/> |The name of the user who last changed the page or list item.  <br/> |Pages library and list  <br/> |
|**ListItemID** <br/> |The ID for the page or list item.  <br/> |Pages library and list  <br/> |
|**ModifiedOWSDATE** <br/> |The date the page or list item was last changed.  <br/> |Pages library and list  <br/> |
|**PublishingContactOWSUSER** <br/> |Contact is a site column created by the Publishing feature. It is used on the Page Content Type as the person or group who is the contact person for the page.  <br/> |Pages library only  <br/> |
|**PublishingIsFurlPageOWSBOOL** <br/> |A Boolean value that indicates whether the page is associated with a friendly URL.  <br/> |Pages library only  <br/> |
|**PublishingPageContentOWSHTML** <br/> |The HTML content of the page.  <br/> |Pages library only  <br/> |
|**PublishingPageLayoutOWSURLH** <br/> |The URL to the page layout that was used to create the page.  <br/> |Pages library only  <br/> |
|**Title** <br/> |The title of the page or list item.  <br/> |Pages library and list  <br/> |
   
The managed properties for custom columns that you add to the Pages library or list are also included in Catalog-Item Reuse Snippets. The managed property name will vary, based on the site column type that you use when you create the site column. For more information, see  [Automatically created managed properties in SharePoint](http://technet.microsoft.com/en-us/library/jj613136.aspx), and  [Overview of the search schema in SharePoint](http://technet.microsoft.com/en-us/library/jj219669.aspx).
  
    
    

> **Important:**
> The **Page Image** site column in a Pages library is mapped to the **PublishingImage** managed property. But, the **PublishingImage** managed property is not automatically included in the category-item page layout. To include the image in your page layout, you must add a Catalog-Item Reuse Snippet for the **PublishingImage** managed property. Use the following HTML to add a Catalog-Item Reuse Snippet to display the value of the **PublishingImage** managed property in your page layout. Replace _UniqueID_ with a GUID that is unique to each instance of the snippet.
  
    
    




```HTML

<div>
<!--CS: [PublishingImage] Start Catalog-Item Reuse Snippet-->
<!--SPM:<cc1:CatalogItemReuseWebPart runat="server" UseServerSideRenderFormat="True" 
ResultType="" NumberOfItems="1" UseSharedDataProvider="True" OverwriteResultPath="False" 
ResultsPerPage="1"  SelectedPropertiesJson="[&amp;#34;PublishingImage&amp;#34;]" 
Title="$Resources:Microsoft.Office.Server.Search,CBSItem_Title;" 
Description="$Resources:Microsoft.Office.Server.Search,CBSItem_Description;" 
MissingAssembly="Cannot import this Web Part." ID="g_UniqueID" __WebPartId="{UniqueID}">-->
<!--SPM:<RenderFormat>-->
<!--SPM:<Format Type="HTML"> -->
<!--SPM:<Picture>-->True<!--SPM:</Picture>-->
<!--SPM:</Format> -->
<!--SPM:</RenderFormat>-->
<!--SPM:</cc1:CatalogItemReuseWebPart>-->
<!--CE:End Catalog-Item Reuse Snippet-->
</div>

```

If you create a new catalog item page layout by using Design Manager, and you choose a content type instead of a remote catalog, you can add Catalog-Item Reuse Snippets to the page by using the Snippet Gallery. The following code shows the markup for the Catalog-Item Reuse Snippets for the **Title**, **PublishingPageContentOWSHTML**, **CreatedOWSDATE**, and **owstaxIdPageCategory** managed properties.
  
    
    

> **Note:**
> The GUIDs for **ID** and **__WebPartId** are randomly generated by SharePoint when the snippets are added to the page layout.
  
    
    




```HTML

<div>
    <!--CS: [Title] Start Catalog-Item Reuse Snippet-->
    <!--SPM:<cc1:CatalogItemReuseWebPart runat="server" UseServerSideRenderFormat="True" 
ResultType="" NumberOfItems="1" UseSharedDataProvider="True" OverwriteResultPath="False" 
ResultsPerPage="1"  SelectedPropertiesJson="[&amp;#34;Title&amp;#34;]" 
Title="$Resources:Microsoft.Office.Server.Search,CBSItem_Title;" 
Description="$Resources:Microsoft.Office.Server.Search,CBSItem_Description;" 
MissingAssembly="Cannot import this Web Part." ID="g_0dc23bb8_8d34_4f9f_8085_5a6ac286cb9e" 
__WebPartId="{0dc23bb8-8d34-4f9f-8085-5a6ac286cb9e}">-->
    <!--SPM:<RenderFormat>-->
    <!--DC:Renders value from search without any additional formatting.-->
    <!--SPM:</RenderFormat>-->
    <!--SPM:</cc1:CatalogItemReuseWebPart>-->
    <!--CE:End Catalog-Item Reuse Snippet-->
</div>
<div>
    <!--CS: [PublishingPageContentOWSHTML] Start Catalog-Item Reuse Snippet-->
    <!--SPM:<cc1:CatalogItemReuseWebPart runat="server" UseServerSideRenderFormat="True" 
ResultType="" NumberOfItems="1" UseSharedDataProvider="True" OverwriteResultPath="False" 
ResultsPerPage="1"  SelectedPropertiesJson="[&amp;#34;PublishingPageContentOWSHTML&amp;#34;]" 
Title="$Resources:Microsoft.Office.Server.Search,CBSItem_Title;" 
Description="$Resources:Microsoft.Office.Server.Search,CBSItem_Description;" 
MissingAssembly="Cannot import this Web Part." ID="g_25253a49_a9a6_4277_bf9d_416961024cee" 
__WebPartId="{25253a49-a9a6-4277-bf9d-416961024cee}">-->
    <!--SPM:<RenderFormat>-->
    <!--DC:Renders value from search without any additional formatting.-->
    <!--SPM:</RenderFormat>-->
    <!--SPM:</cc1:CatalogItemReuseWebPart>-->
    <!--CE:End Catalog-Item Reuse Snippet-->
</div>
<div>
    <!--CS: [CreatedOWSDATE] Start Catalog-Item Reuse Snippet-->
    <!--SPM:<cc1:CatalogItemReuseWebPart runat="server" UseServerSideRenderFormat="True" 
ResultType="" NumberOfItems="1" UseSharedDataProvider="True" OverwriteResultPath="False" 
ResultsPerPage="1"  SelectedPropertiesJson="[&amp;#34;CreatedOWSDATE&amp;#34;]" 
Title="$Resources:Microsoft.Office.Server.Search,CBSItem_Title;" 
Description="$Resources:Microsoft.Office.Server.Search,CBSItem_Description;" 
MissingAssembly="Cannot import this Web Part." 
ID="g_4e1f180b_12f8_4e50_84d7_c72b0ee3793f" 
__WebPartId="{4e1f180b-12f8-4e50-84d7-c72b0ee3793f}">-->
    <!--SPM:<RenderFormat>-->
    <!--SPM:<Format Type="DateTime"> -->
    <!--DC:To render Date and Time, change this value to False.-->
    <!--SPM:<DateOnly>-->True<!--SPM:</DateOnly>-->
    <!--SPM:</Format> -->
    <!--SPM:</RenderFormat>-->
    <!--SPM:</cc1:CatalogItemReuseWebPart>-->
    <!--CE:End Catalog-Item Reuse Snippet-->
</div>
<div>
    <!--CS: [owstaxIdPageCategory] Start Catalog-Item Reuse Snippet-->
    <!--SPM:<cc1:CatalogItemReuseWebPart runat="server" UseServerSideRenderFormat="True" 
ResultType="" NumberOfItems="1" UseSharedDataProvider="True" OverwriteResultPath="False" 
ResultsPerPage="1"  SelectedPropertiesJson="[&amp;#34;owstaxIdPageCategory&amp;#34;]" 
Title="$Resources:Microsoft.Office.Server.Search,CBSItem_Title;" 
Description="$Resources:Microsoft.Office.Server.Search,CBSItem_Description;" 
MissingAssembly="Cannot import this Web Part." ID="g_22e39e9d_1b25_42c7_bf2a_7ebca37616d4" 
__WebPartId="{22e39e9d-1b25-42c7-bf2a-7ebca37616d4}">-->
    <!--SPM:<RenderFormat>-->
    <!--DC:Renders value from search without any additional formatting.-->
    <!--SPM:</RenderFormat>-->
    <!--SPM:</cc1:CatalogItemReuseWebPart>-->
    <!--CE:End Catalog-Item Reuse Snippet-->
</div>

```


## Additional resources
<a name="bk_addresources"> </a>


-  [Develop the site design in SharePoint](develop-the-site-design-in-sharepoint.md)
    
  
-  [Overview of Design Manager in SharePoint](overview-of-design-manager-in-sharepoint.md)
    
  
-  [Overview of the SharePoint page model](overview-of-the-sharepoint-page-model.md)
    
  
-  [How to: Create a page layout in SharePoint](how-to-create-a-page-layout-in-sharepoint.md)
    
  
-  [SharePoint Design Manager display templates](sharepoint-design-manager-display-templates.md)
    
  

