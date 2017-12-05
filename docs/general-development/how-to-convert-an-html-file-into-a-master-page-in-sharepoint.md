---
title: Convert an HTML file into a master page in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: a76ab289-3256-45de-ac63-d5112a74e3c7
---


# Convert an HTML file into a master page in SharePoint

With Design Manager, you can convert an .html file into a SharePoint master page, a .master file. After the conversion, the HTML file and master page are associated, so that when you edit and save the HTML file, the changes are synced to the associated master page.

## Introduction to converting a master page
<a name="Introduction"> </a>

 With Design Manager, you can convert an.html file into a SharePoint master page, a .master file. After the conversion, the HTML file and master page are associated, so that when you edit and save the HTML file, the changes are synced to the associated master page.
  
    
    
Why do you want to convert an HTML file, instead of creating a .master file from scratch? In SharePoint, master pages work exactly as they do in ASP.NET, but SharePoint also requires that certain elements, such as controls and content placeholders that are specific to SharePoint, must be present on the page for SharePoint to correctly render that master page. By using Design Manager to convert an HTML file into a fully functioning SharePoint master page, you don't have to know about ASP.NET or the SharePoint-specific markup; instead, you can focus on designing your site in HTML, CSS, and JavaScript.
  
    
    
When you convert an HTML file into a master page:
  
    
    

- A .master file with the same name as your HTML file is created in the Master Page Gallery.
    
  
- All markup required by SharePoint is added to the .master file so that the master page renders correctly.
    
  
- Markup such as comments, **\<div\>** tags, snippets, and content placeholders are added to your original HTML file.
    
  
- The HTML file and master page are associated, so that any later edits to the HTML file are synced to the .master file when the HTML file is saved.
    
> [!NOTE]
> The syncing goes in one direction only. Changes to the HTML master page are synced to the associated .master file, but if you choose to edit the .master file directly the changes are not synced to the HTML file. Every HTML master page (and every HTML page layout) has a property named **Associated File** that is set to **True** by default, which creates the association and syncing between files.
  
    
    

If you have a pair of associated files (HTML and .master) and you edit the .master file without breaking the association, the changes to the .master file will be saved, but you can't check in or publish the .master file, so those changes are not saved in a meaningful way. Any changes to the HTML file override the .master file. If you check in or publish the HTML file, the HTML file changes override any changes that were made to the .master file. The changes to the .master file are lost.
  
    
    
If you're a developer comfortable working with ASP.NET, you can choose to work only with the .master file by breaking the association between the files. To break the association between the HTML file and the .master file, in Design Manager, choose **Edit Properties** for the HTML file, and then clear the **Associated File** check box. You can later re-associate the files by editing the properties and selecting this check box, in which case the HTML file will again overwrite the .master file, and changes made to the .master file will be lost.
  
    
    

## Prepare the HTML file for conversion
<a name="Prepare"> </a>

Before you convert your HTML file, here are some best practices and guidance to consider:
  
    
    

- Consider the SharePoint page model. For more information, see  [Overview of the SharePoint page model](overview-of-the-sharepoint-page-model.md). As you design the HTML mockups of your site, you'll probably have several HTML files for different types of pages, such as an article page or a category page that contains Web Parts that display a category of items from a catalog. But, only one HTML file will be converted into the master page. An HTML file can be converted into a master page, but an HTML file can't be converted directly into a page layout because a page layout requires page fields.
    
  
- Make sure your HTML file is XML-compliant. For the conversion to work, the HTML file must be XML-compliant. Unfortunately, this requirement overrides some HTML 5 standards—for example, in HTML 5 you can specify the **doctype** in lowercase, but in XML the **doctype** must be uppercase. Also, you should remove any **\<form\>** tags from your HTML file. Consider running your HTML file through an external XML validator to identify XML errors before conversion.
    
  
- Consider these important guidelines for your CSS references:
    
  - Don't put **\<style\>** blocks in the **\<head\>** tag. These styles are removed during conversion. Instead, link from your HTML file to an external CSS file.
    
  
  - Add  `ms-design-css-conversion="no"` to the **\<CSS link\>** tag if you're using a web font.
    
  
  - Be cautious about applying styles to general HTML tags like **\<body\>**, **\<div\>**, and **\<img\>**. Everything within your SharePoint design, including the ribbon, is within the **\<body\>** tag. For styles that you would usually apply to the **\<body\>** tag, consider applying them instead to **\<div id="s4-bodyContainer"\>**, which is a tag that SharePoint uses for the main body of the page. Also, SharePoint uses many images that are affected by whatever styles you apply to the **\<img\>** tag.
    
  
  - Many designers style the navigation by applying classes to **\<ul\>** and **\<li\>** elements. But, SharePoint uses a dynamic navigation control, which you can add to your master page from the Snippet Gallery. SharePoint navigation controls have styles applied by default that you have to override.
    
  
- Consider these potential issues about file naming:
    
  - If you have Index.html and Index.htm, those files will have the same .master file.
    
  
  - If you have Design/Index.html and Design/SubDesign/Index.html, both of those files are available for conversion into their own, separate .master files, but they'll both show up as Index.html in the master page list in Design Manager. To disambiguate them, click or select the ellipsis button for each file to see the full path.
    
  
- If you're adding a JavaScript widget, make sure the **\<script\>** start tag is on its own line.
    
```
  
<script>
(function( …

```

Do not put them on the same line, like this.
    


```
  
<Script> (function( …
```

- A reference to the JQuery library (an external reference) should go before the **\</head\>** tag.
    
  

## Convert the HTML file into a master page
<a name="Convert"> </a>

Before you convert an HTML file, you first have to upload all of your design files, including your HTML file. For more information, see  [How to: Map a network drive to the SharePoint Master Page Gallery](how-to-map-a-network-drive-to-the-sharepoint-master-page-gallery.md).
  
    
    

### To convert the HTML file into a .master file


1. Browse to your publishing site.
    
  
2. In the upper-right corner of the page, choose **Settings**, and then choose **Design Manager**.
    
  
3. In Design Manager, in the left navigation pane, choose **Edit Master Pages**.
    
  
4. Choose **Convert an HTML file to a SharePoint master page**.
    
  
5. In the **Select an Asset** dialog box, browse to and select the HTML file that you want to convert.
    
    > [!NOTE]
    > When you upload your design files, you should keep all files that are related to a single design in their own folder in the Master Page Gallery. When you copy your design folder into the mapped network drive, the Master Page Gallery retains whatever folder structure you created. 
6. Choose **Insert**.
    
    At this point, SharePoint converts your HTML file into a .master file with the same name.
    
    In Design Manager, your HTML file now appears with a Status column that shows one of two possible statuses:
    
  - **Warnings and Errors**
    
  
  - **Conversion successful**
    
  
7. Follow the link in the Status column to preview the file and to view any errors or warnings about the master page.
    
    The preview page is a live server-side preview of your master page. The top of the preview displays any warnings or errors that you may have to resolve by editing the HTML file in an HTML editor. Errors must be fixed before the preview will display the master page correctly.
    
    For more information about resolving errors and warnings, see  [How to: Resolve errors and warnings when previewing a page in SharePoint](how-to-resolve-errors-and-warnings-when-previewing-a-page-in-sharepoint.md).
    
    For more information about previewing the master page with different pages, see  [How to: Change the preview page in SharePoint Design Manager](how-to-change-the-preview-page-in-sharepoint-design-manager.md).
    
    The preview page also contains a Snippets link in the upper-right corner. This link opens the Snippet Gallery, where you can begin replacing static or mockup controls in your design with dynamic SharePoint controls. For more information, see  [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md).
    
  
8. To fix any errors, edit the HTML file that resides directly on the server by using an HTML editor to open and edit the HTML file in the mapped drive. Each time you save the HTML file, any changes are synced to the associated .master file.
    
  
9. After your master page previews successfully, you will see a **\<div\>** tag that gets added to your HTML file. You may have to scroll to the bottom of the page to see the **\<div\>** tag.
    
    This **\<div\>** is the main content block. It resides inside a content placeholder named **ContentPlaceHolderMain**. At run time, when a visitor browses your site and requests a page, this content placeholder gets filled with content from a page layout that contains content in a matching content region. You should position this **\<div\>** where you want your page layouts to appear on the master page.
    
    If your HTML file contains static or mockup content in the body of the page, now you begin the process of removing that static content from the HTML master page and applying those styles to other elements of the SharePoint page model, such as page layouts, page field controls, snippets, and display templates. For an example, see  [How to: Create a page layout in SharePoint](how-to-create-a-page-layout-in-sharepoint.md).
    
  

## Understanding the HTML file after conversion
<a name="Understand"> </a>

When you convert an HTML file into a master page, many lines of markup get added to your HTML file. You can safely ignore most of this markup, and most of it will not appear in the final markup of your site when you view source in the browser, but this markup is critical for converting your HTML file into the .master file that SharePoint actually uses. Each time you save a change to your HTML file, this SharePoint markup makes it possible for that same change to be made to the associated .master file in the background.
  
    
    
The markup that gets added includes tags before and in the **\<head\>** tag, snippets, and content placeholders. Most of the markup is enclosed within comment tags: Whenever you save a change to the HTML file, the conversion process strips out the comments to use the ASP.NET markup within.
  
    
    

### Types of markup

The following is a breakdown of the types of markup that are added to the HTML file:
  
    
    

- **Document properties** The **\<mso\>** tag contains SharePoint metadata, including information about the file itself and some properties needed for the successful conversion to the .master file.
    
```HTML
  
<mso:CustomDocumentProperties>
<mso:HtmlDesignFromMaster msdt:dt="string"></mso:HtmlDesignFromMaster>
<mso:HtmlDesignStatusAndPreview msdt:dt="string">http://[server_name]/sites/PubSite/_catalogs/masterpage/[site_name]/index.html, Conversion successful.</mso:HtmlDesignStatusAndPreview>
<mso:ContentTypeId msdt:dt="string">0x0101000F1C8B9E0EB4BE489F09807B2C53288F0054AD6EF48B9F7B45A142F8173F171BD10003D357F861E29844953D5CAA1D4D8A3A0084F0F9C7FCB65541A59990D173DA60FA</mso:ContentTypeId>
<mso:HtmlDesignAssociated msdt:dt="string">1</mso:HtmlDesignAssociated>
<mso:HtmlDesignConversionSucceeded msdt:dt="string">True</mso:HtmlDesignConversionSucceeded>
</mso:CustomDocumentProperties>
```

- **SharePoint namespace registration** The **\<SPM\>** tag ("SharePoint markup") provides a line registering a SharePoint namespace.
    
```HTML
  
<!--SPM:<%@Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
        <!--SPM:<%@Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
```

- **Comments** The **\<CS\>** and **\<CE\>** ("Comment start" and "comment end") tags are ignored during the conversion process. These tags are to help you parse the lines of markup.
    
```HTML
  
<!--CS: Start Page Head Contents Snippet-->
…
<!--CE: End Page Head Contents Snippet-->

  <!--CS: Start Ribbon Snippet-->
…
<!--CE: End Ribbon Snippet-->

<!--CS: Start PlaceHolderMain Snippet-->
…
<!--CE: End PlaceHolderMain Snippet-->
```

- **Snippets** The **\<MS\>** and **\<ME\>** ("markup start" and "markup end") tags denote the beginning and end of a SharePoint control or a snippet. A snippet is a SharePoint control that adds SharePoint functionality to your page. You can add snippets yourself by using the Snippet Gallery. For more information, see [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md).
    
```HTML
  
<!--MS:<SharePoint:RobotsMetaTag runat="server">-->
        <!--ME:</SharePoint:RobotsMetaTag>-->
        <!--MS:<SharePoint:PageTitle runat="server">-->
            <!--MS:<asp:ContentPlaceHolder id="PlaceHolderPageTitle" runat="server">-->
                <!--MS:<SharePoint:ProjectProperty Property="Title" runat="server">-->
                <!--ME:</SharePoint:ProjectProperty>-->
            <!--ME:</asp:ContentPlaceHolder>-->
        <!--ME:</SharePoint:PageTitle>-->
        <!--MS:<SharePoint:StartScript runat="server">-->
        <!--ME:</SharePoint:StartScript>-->
        <!--MS:<SharePoint:CssLink runat="server" Version="15">-->
        <!--ME:</SharePoint:CssLink>-->
        <!--MS:<SharePoint:CacheManifestLink runat="server">-->
        <!--ME:</SharePoint:CacheManifestLink>-->
        <!--MS:<SharePoint:PageRenderMode runat="server" RenderModeType="Standard">-->
        <!--ME:</SharePoint:PageRenderMode>-->
        <!--MS:<SharePoint:ScriptLink language="javascript" name="core.js" OnDemand="true" runat="server" Localizable="false">-->
        <!--ME:</SharePoint:ScriptLink>-->
        <!--MS:<SharePoint:ScriptLink language="javascript" name="menu.js" OnDemand="true" runat="server" Localizable="false">-->
        <!--ME:</SharePoint:ScriptLink>-->
        <!--MS:<SharePoint:ScriptLink language="javascript" name="callout.js" OnDemand="true" runat="server" Localizable="false">-->
        <!--ME:</SharePoint:ScriptLink>-->
        <!--MS:<SharePoint:ScriptLink language="javascript" name="sharing.js" OnDemand="true" runat="server" Localizable="false">-->
        <!--ME:</SharePoint:ScriptLink>-->
        <!--MS:<SharePoint:ScriptLink language="javascript" name="suitelinks.js" OnDemand="true" runat="server" Localizable="false">-->
        <!--ME:</SharePoint:ScriptLink>-->
        <!--MS:<SharePoint:CustomJSUrl runat="server">-->
        <!--ME:</SharePoint:CustomJSUrl>-->
        <!--MS:<SharePoint:SoapDiscoveryLink runat="server">-->
        <!--ME:</SharePoint:SoapDiscoveryLink>-->
        <!--MS:<SharePoint:AjaxDelta id="DeltaPlaceHolderAdditionalPageHead" Container="false" runat="server">-->
            <!--MS:<asp:ContentPlaceHolder id="PlaceHolderAdditionalPageHead" runat="server">-->
            <!--ME:</asp:ContentPlaceHolder>-->
            <!--MS:<SharePoint:DelegateControl runat="server" ControlId="AdditionalPageHead" AllowMultipleControls="true">-->
            <!--ME:</SharePoint:DelegateControl>-->
            <!--MS:<asp:ContentPlaceHolder id="PlaceHolderBodyAreaClass" runat="server">-->
            <!--ME:</asp:ContentPlaceHolder>-->
        <!--ME:</SharePoint:AjaxDelta>-->
        <!--MS:<SharePoint:CssRegistration Name="Themable/corev15.css" runat="server">-->
        <!--ME:</SharePoint:CssRegistration>-->
        <!--MS:<SharePoint:AjaxDelta id="DeltaSPWebPartManager" runat="server">-->
            <!--MS:<WebPartPages:SPWebPartManager runat="server">-->
            <!--ME:</WebPartPages:SPWebPartManager>-->
        <!--ME:</SharePoint:AjaxDelta>-->
```

- **Preview blocks** The **\<PS\>** and **\<PE\>** ("Preview start" and "preview end") tags surround a section of HTML code that you shouldn't edit because this section affects only the design-time preview. These preview sections are a snapshot in time of the SharePoint control that snippet is inserting. A preview makes it possible for you to work more meaningfully on the HTML file in a client-side HTML editor. But, changing the content or styling within that preview has no lasting effect on the .master file, which is what SharePoint is ultimately using. To style a snippet, you have to identify and override the SharePoint styles with your own custom CSS.
    
```HTML
  
<!--PS: Start of READ-ONLY PREVIEW (do not modify) -->
<div class="DefaultContentBlock" style="background:rgb(0, 114, 198); color:white; width:100%; padding:8px; height:64px; overflow:hidden;">The SharePoint ribbon will be here when your file is either previewed on or applied to your site.</div>
<!--PE: End of READ-ONLY PREVIEW -->
```

- **SharePoint IDs** Two of the snippets added to your HTML file during the conversion (the Page Head Contents snippet and the SharePoint Ribbon) have an associated SharePoint ID, or SID (00 and 02, respectively). These IDs make it possible to shorten the snippets and make the HTML in the page easier to read.
    
```HTML
  
<!--SID:00 -->

<!--SID:02 {Ribbon}-->
```


### Added snippets

It's important to know about two of the snippets that are added to your HTML file. These snippets are added automatically during the conversion, but they're not available for you to add from the Snippet Gallery.
  
    
    

- **The Ribbon** For content authors to be able to create pages and author content on your SharePoint site, your master page needs the ribbon and the "suite navigation" that is new to SharePoint. The ribbon is contained in a security-trimming snippet, so that when a visitor browses your site, the ribbon is displayed only to authenticated users, not anonymous users. You can move the ribbon to a different position on the page or style it by overriding the default CSS classes, but we do not recommend moving or reordering the components (such as the Site Actions menu) that are contained inside the ribbon.
    
```HTML
  
<!--MS:<SharePoint:SPSecurityTrimmedControl runat="server" AuthenticationRestrictions="AnonymousUsersOnly">-->
<!--MS:<wssucw:Welcome runat="server" EnableViewState="false">-->
<!--ME:</wssucw:Welcome>-->
<!--ME:</SharePoint:SPSecurityTrimmedControl>-->
```

- **ContentPlaceHolderMain** At the bottom of the **\<div id="s4-bodyContainer"\>** tag, before the closing **\</body\>** tag, the conversion process inserts a content placeholder named **PlaceHolderMain**. Inside this snippet is the black-bordered, yellow **\<div\>** that appears in the design view of your HTML editor, or in the server-side preview in Design Manager.
    
    This **\<div\>** represents the area where the content specified by your page layouts and pages will go. You should move the **PlaceHolderMain** snippet to the place within your master page that will be filled by your page layouts—the area of your site design that isn't the same across all pages of your site.
    


```HTML
  
<!--CS: Start PlaceHolderMain Snippet-->
                    <!--SPM:<%@Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
                    <!--MS:<SharePoint:AjaxDelta ID="DeltaPlaceHolderMain" IsMainContent="true" runat="server">-->
                        <!--MS:<asp:ContentPlaceHolder ID="PlaceHolderMain" runat="server">-->
                            <div class="DefaultContentBlock" style="border:medium black solid; background:yellow; color:black; margin:20px; padding:10px;">
            This div, which you should delete, represents the content area that your Page Layouts and pages will fill. Design your Master Page around this content placeholder.
        
                            </div>
                        <!--ME:</asp:ContentPlaceHolder>-->
                    <!--ME:</SharePoint:AjaxDelta>-->
                    <!--CE: End PlaceHolderMain Snippet-->
```


## Reference: Examples of SharePoint markup added to the HTML file
<a name="Reference"> </a>

The following is an example of markup added to an HTML file after it is converted to a master page.
  
    
    

### Markup added to the \<head\> tag


```HTML

<head>
        <meta http-equiv="X-UA-Compatible" content="IE=10" />
        <!--CS: Start Page Head Contents Snippet-->
        <!--SPM:<%@Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
        <!--SPM:<%@Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
        <!--SID:00 -->
        <meta name="GENERATOR" content="Microsoft SharePoint" />
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta http-equiv="Expires" content="0" />
        <!--MS:<SharePoint:RobotsMetaTag runat="server">-->
        <!--ME:</SharePoint:RobotsMetaTag>-->
        <!--MS:<SharePoint:PageTitle runat="server">-->
            <!--MS:<asp:ContentPlaceHolder id="PlaceHolderPageTitle" runat="server">-->
                <!--MS:<SharePoint:ProjectProperty Property="Title" runat="server">-->
                <!--ME:</SharePoint:ProjectProperty>-->
            <!--ME:</asp:ContentPlaceHolder>-->
        <!--ME:</SharePoint:PageTitle>-->
        <!--MS:<SharePoint:StartScript runat="server">-->
        <!--ME:</SharePoint:StartScript>-->
        <!--MS:<SharePoint:CssLink runat="server" Version="15">-->
        <!--ME:</SharePoint:CssLink>-->
        <!--MS:<SharePoint:CacheManifestLink runat="server">-->
        <!--ME:</SharePoint:CacheManifestLink>-->
        <!--MS:<SharePoint:PageRenderMode runat="server" RenderModeType="Standard">-->
        <!--ME:</SharePoint:PageRenderMode>-->
        <!--MS:<SharePoint:ScriptLink language="javascript" name="core.js" OnDemand="true" runat="server" Localizable="false">-->
        <!--ME:</SharePoint:ScriptLink>-->
        <!--MS:<SharePoint:ScriptLink language="javascript" name="menu.js" OnDemand="true" runat="server" Localizable="false">-->
        <!--ME:</SharePoint:ScriptLink>-->
        <!--MS:<SharePoint:ScriptLink language="javascript" name="callout.js" OnDemand="true" runat="server" Localizable="false">-->
        <!--ME:</SharePoint:ScriptLink>-->
        <!--MS:<SharePoint:ScriptLink language="javascript" name="sharing.js" OnDemand="true" runat="server" Localizable="false">-->
        <!--ME:</SharePoint:ScriptLink>-->
        <!--MS:<SharePoint:ScriptLink language="javascript" name="suitelinks.js" OnDemand="true" runat="server" Localizable="false">-->
        <!--ME:</SharePoint:ScriptLink>-->
        <!--MS:<SharePoint:CustomJSUrl runat="server">-->
        <!--ME:</SharePoint:CustomJSUrl>-->
        <!--MS:<SharePoint:SoapDiscoveryLink runat="server">-->
        <!--ME:</SharePoint:SoapDiscoveryLink>-->
        <!--MS:<SharePoint:AjaxDelta id="DeltaPlaceHolderAdditionalPageHead" Container="false" runat="server">-->
            <!--MS:<asp:ContentPlaceHolder id="PlaceHolderAdditionalPageHead" runat="server">-->
            <!--ME:</asp:ContentPlaceHolder>-->
            <!--MS:<SharePoint:DelegateControl runat="server" ControlId="AdditionalPageHead" AllowMultipleControls="true">-->
            <!--ME:</SharePoint:DelegateControl>-->
            <!--MS:<asp:ContentPlaceHolder id="PlaceHolderBodyAreaClass" runat="server">-->
            <!--ME:</asp:ContentPlaceHolder>-->
        <!--ME:</SharePoint:AjaxDelta>-->
        <!--MS:<SharePoint:CssRegistration Name="Themable/corev15.css" runat="server">-->
        <!--ME:</SharePoint:CssRegistration>-->
        <!--MS:<SharePoint:AjaxDelta id="DeltaSPWebPartManager" runat="server">-->
            <!--MS:<WebPartPages:SPWebPartManager runat="server">-->
            <!--ME:</WebPartPages:SPWebPartManager>-->
        <!--ME:</SharePoint:AjaxDelta>-->
        <!--CE: End Page Head Contents Snippet-->
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <!--DC:Business Solutions-->
        <link rel="stylesheet" href="css/style.css" type="text/css" charset="utf-8" />
        <!--[if lte IE 7]>
  <link rel="stylesheet" href="css/ie.css" type="text/css" charset="utf-8"/> 
 <![endif]-->
        <!--[if gte mso 9]><xml>
<mso:CustomDocumentProperties>
<mso:HtmlDesignFromMaster msdt:dt="string"></mso:HtmlDesignFromMaster>
<mso:HtmlDesignStatusAndPreview msdt:dt="string">http://[server_name]/sites/PubSite/_catalogs/masterpage/[site_name]/index.html, Conversion successful.</mso:HtmlDesignStatusAndPreview>
<mso:ContentTypeId msdt:dt="string">0x0101000F1C8B9E0EB4BE489F09807B2C53288F0054AD6EF48B9F7B45A142F8173F171BD10003D357F861E29844953D5CAA1D4D8A3A0084F0F9C7FCB65541A59990D173DA60FA</mso:ContentTypeId>
<mso:HtmlDesignAssociated msdt:dt="string">1</mso:HtmlDesignAssociated>
<mso:HtmlDesignConversionSucceeded msdt:dt="string">True</mso:HtmlDesignConversionSucceeded>
</mso:CustomDocumentProperties>
</xml><![endif]-->
    </head>

```


### Markup added after the start \<body\> tag


#### Ribbon snippet


```HTML

<!--CS: Start Ribbon Snippet-->
        <!--SPM:<%@Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
        <!--SPM:<%@Register Tagprefix="wssucw" TagName="Welcome" Src="~/_controltemplates/15/Welcome.ascx"%>-->
        <!--MS:<SharePoint:SPSecurityTrimmedControl runat="server" HideFromSearchCrawler="true" EmitDiv="true">-->
            <div id="TurnOnAccessibility" style="display:none" class="s4-notdlg noindex">
                <a id="linkTurnOnAcc" href="#" class="ms-accessible ms-acc-button" onclick="SetIsAccessibilityFeatureEnabled(true);UpdateAccessibilityUI();document.getElementById('linkTurnOffAcc').focus();return false;">
                    <!--MS:<SharePoint:EncodedLiteral runat="server" text="&amp;lt;%$Resources:wss,master_turnonaccessibility%&amp;gt;" EncodeMethod="HtmlEncode">-->
                    <!--ME:</SharePoint:EncodedLiteral>-->
                </a>
            </div>
            <div id="TurnOffAccessibility" style="display:none" class="s4-notdlg noindex">
                <a id="linkTurnOffAcc" href="#" class="ms-accessible ms-acc-button" onclick="SetIsAccessibilityFeatureEnabled(false);UpdateAccessibilityUI();document.getElementById('linkTurnOnAcc').focus();return false;">
                    <!--MS:<SharePoint:EncodedLiteral runat="server" text="&amp;lt;%$Resources:wss,master_turnoffaccessibility%&amp;gt;" EncodeMethod="HtmlEncode">-->
                    <!--ME:</SharePoint:EncodedLiteral>-->
                </a>
            </div>
        <!--ME:</SharePoint:SPSecurityTrimmedControl>-->
        <div id="ms-designer-ribbon">
            <!--SID:02 {Ribbon}-->
            <!--PS: Start of READ-ONLY PREVIEW (do not modify) --><div class="DefaultContentBlock" style="background:rgb(0, 114, 198); color:white; width:100%; padding:8px; height:64px; overflow:hidden;">The SharePoint ribbon will be here when your file is either previewed on or applied to your site.</div><!--PE: End of READ-ONLY PREVIEW -->
        </div>
        <!--MS:<SharePoint:SPSecurityTrimmedControl runat="server" AuthenticationRestrictions="AnonymousUsersOnly">-->
            <!--MS:<wssucw:Welcome runat="server" EnableViewState="false">-->
            <!--ME:</wssucw:Welcome>-->
        <!--ME:</SharePoint:SPSecurityTrimmedControl>-->
        <!--CE: End Ribbon Snippet-->

```


#### Two SharePoint \<div\> tags


```HTML

<div id="s4-workspace">
            <div id="s4-bodyContainer">

```


### Markup added before the closing \</body\> tag and two closing \</div\> tags


```HTML

<div data-name="ContentPlaceHolderMain">
                    <!--CS: Start PlaceHolderMain Snippet-->
                    <!--SPM:<%@Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
                    <!--MS:<SharePoint:AjaxDelta ID="DeltaPlaceHolderMain" IsMainContent="true" runat="server">-->
                        <!--MS:<asp:ContentPlaceHolder ID="PlaceHolderMain" runat="server">-->
                            <div class="DefaultContentBlock" style="border:medium black solid; background:yellow; color:black; margin:20px; padding:10px;">
            This div, which you should delete, represents the content area that your Page Layouts and pages will fill. Design your Master Page around this content placeholder.
        
                            </div>
                        <!--ME:</asp:ContentPlaceHolder>-->
                    <!--ME:</SharePoint:AjaxDelta>-->
                    <!--CE: End PlaceHolderMain Snippet-->
                </div>

```


## Additional resources
<a name="Additional"> </a>


-  [Overview of Design Manager in SharePoint](overview-of-design-manager-in-sharepoint.md)
    
  
-  [How to: Create a page layout in SharePoint](how-to-create-a-page-layout-in-sharepoint.md)
    
  
-  [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md)
    
  

