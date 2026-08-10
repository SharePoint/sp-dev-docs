---
title: Modify SharePoint components for MDS
description: Learn how to modify the components in your SharePoint project to take advantage of Minimal Download Strategy (MDS) in SharePoint.
ms.date: 04/24/2017
ms.assetid: c967be7c-f29f-481a-9ce2-915ead315dcd
ms.localizationpriority: medium
---

# Modify SharePoint components for MDS

> [!IMPORTANT]
> This article applies only to **Classic SharePoint (SharePoint Server 2013/2016/2019 Classic Experience)**.
> It is **not applicable to SharePoint Online Modern experiences**, where Minimal Download Strategy (MDS), master pages, and server-side page rendering customization aren't used.
>
> Modern SharePoint development uses the **SharePoint Framework (SPFx)** instead of MDS-based page optimization techniques.

Learn how to modify the components in your SharePoint project to take advantage of Minimal Download Strategy (MDS) in SharePoint.
Minimal Download Strategy (MDS) improves the user experience by returning from the server only the portions of a page required to render it properly in the browser. Because the fully rendered page isn't returned to the client, the server must can accurately identify the portions that are required to render the page. You might need to modify the components in your SharePoint project so that they're identified as MDS-compliant and can work with the MDS engine. Learn more about MDS in [Minimal Download Strategy overview](minimal-download-strategy-overview.md).

## Why modify SharePoint components?

As explained in [Minimal Download Strategy overview](minimal-download-strategy-overview.md), SharePoint controls work whether or not you modify them to take full advantage of MDS. However, when your components aren't MDS-compliant, the MDS engine issues a failover. In a failover, the MDS engine takes an extra round trip to redirect the browser to the full version of the new page, which takes time. Users have the best experience when you modify components to work with MDS and avoid a failover every time they browse to a new page in SharePoint. You usually need to modify master pages, ASP.NET pages, controls, and web parts.

## Master pages

The master page provides a template that lets MDS identify the content regions that may need to be updated when someone navigates to a new page. Optimizing your master page is one of the most important steps to take when optimizing performance because master pages identify sections that require updated content. The Seattle.master page included with SharePoint is a good example of an optimized master page. Figure 1 shows examples of components in the Seattle.master master page that change from page to page, such as the (1) main content area, (2) left navigation bar, and (3) page title.

![Components that require updates in master page](../images/MDS_SeattleMaster.png)
*Figure 1. Components that require updates in a master page*

> [!NOTE]
> There are many more components in the Seattle.master master page that change from page to page, such as style sheets and JavaScript files. Figure 1 shows only a few examples.

There are different patterns to optimize the components in a master page. You can use a pattern for the following components:

- HTML regions and controls
- Style sheets
- JavaScript files
- Page title

HTML regions and controls are MDS compatible if they're wrapped in `<SharePoint:AjaxDelta>` tags. By wrapping the content in `<SharePoint:AjaxDelta>` tags, you're signaling that the MDS engine should update the enclosed controls and HTML. If a control or HTML section doesn't change from page to page, it shouldn't be sent to the client. Therefore, you should keep these controls outside of `<AjaxDelta>` tags. In the Seattle.master master page shown in Figure 1, the (1) main content area is wrapped in `<AjaxDelta>` tags, as shown here.

```asp.net
<SharePoint:AjaxDelta
      id="DeltaPlaceHolderMain"
      BlockElement="true"
      IsMainContent="true"
      runat="server">
  <a id="mainContent" name="mainContent" tabindex="-1"></a>
  <asp:ContentPlaceHolder id="PlaceHolderMain" runat="server" />
</SharePoint:AjaxDelta>
```

Another example of the `<AjaxDelta>` pattern is the (2) left navigation bar in Figure 1. The following code shows how the control is wrapped in `<AjaxDelta>` tags along with many other controls and HTML.

```asp.net
<SharePoint:AjaxDelta
      id="DeltaPlaceHolderLeftNavBar"
      BlockElement="true"
      CssClass="ms-core-navigation"
      role="navigation"
      runat="server">
  <asp:ContentPlaceHolder id="PlaceHolderLeftNavBar" runat="server">
    <a id="startNavigation" name="startNavigation" tabIndex="-1"></a>
    <asp:ContentPlaceHolder id="PlaceHolderLeftNavBarTop" runat="server" />
    <asp:ContentPlaceHolder id="PlaceHolderQuickLaunchTop" runat="server" />
    <asp:ContentPlaceHolder id="PlaceHolderLeftNavBarDataSource" runat="server" />
    <asp:ContentPlaceHolder id="PlaceHolderCalendarNavigator" runat="server" />
    <asp:ContentPlaceHolder id="PlaceHolderLeftActions" runat="server" />
    <!-- There are more controls and HTML in this placeholder in the Seattle master page -->
  </asp:ContentPlaceHolder>
</SharePoint:AjaxDelta>
```

One last thing to remember about `<AjaxDelta>` tags is that you can't nest them. You should specify `<AjaxDelta>` tags at the highest required level in the master page structure.

The last example in Figure 1 is the (3) page title, which requires a special pattern that uses the `<SharePoint:PageTitle>` tag. The following code shows the `<PageTitle>` tag as used in the Seattle.master master page.

```asp.net
<SharePoint:PageTitle runat="server">
  <asp:ContentPlaceHolder id="PlaceHolderPageTitle" runat="server">
    <SharePoint:ProjectProperty Property="Title" runat="server" />
  </asp:ContentPlaceHolder>
</SharePoint:PageTitle>
```

Your master page can also include style sheets and JavaScript files. The server engine needs to identify both CSS and JavaScript files as required. To identify the CSS files resources as required, use the following pattern.

```asp.net
<SharePoint:CssLink runat="server" Version="15"/>
<SharePoint:CssRegistration Name="my_styles.css" runat="server" />
```

You can have only one `<CssLink>` tag per master page, but you can have many `<CssRegistration>` tags, so you can add many CSS files. Use the following pattern for JavaScript files.

```asp.net
<SharePoint:ScriptLink language="javascript" name="my_javascript.js" runat="server" />
```

Including CSS and JavaScript files using HTML `<style>` and `<script>` tags isn't supported in MDS.

## ASP.NET pages

If your project includes ASP.NET pages, you probably need to reference CSS and JavaScript files. The HTML `<style>` and `<script>` tags aren't compatible with MDS. Instead, use the `<CssRegistration>` and `<ScriptLink>` patterns explained in the previous section.

Your ASP.NET pages may also use the `Response.Output` method to write content to the page, which isn't allowed in MDS. Instead, you can use the following MDS-compliant methods of the [SPHttpUtility](/previous-versions/office/sharepoint-server/ms450378(v=office.15)) class:

- [WriteNoEncode()](/previous-versions/office/sharepoint-server/jj169369(v=office.15))
- [WriteHtmlEncode()](/previous-versions/office/sharepoint-server/jj170139(v=office.15))
- [WriteEcmaScriptStringLiteralEncode()](/previous-versions/office/sharepoint-server/jj167256(v=office.15))
- [WriteHtmlEncodeAllowSimpleTextFormatting()](/previous-versions/office/sharepoint-server/jj173975(v=office.15))
- [WriteHtmlUrlAttributeEncode()](/previous-versions/office/sharepoint-server/jj173901(v=office.15))
- [WriteUrlKeyValueEncode()](/previous-versions/office/sharepoint-server/jj175497(v=office.15))
- [WriteUrlPathEncode()](/previous-versions/office/sharepoint-server/jj171467(v=office.15))

Besides referencing JavaScript files, your ASP.NET pages can have inline JavaScript code. Use the following pattern to make your script blocks MDS compatible.

```asp.net
<SharePoint:ScriptBlock runat="server" >
  // Your JavaScript code here.
</SharePoint:ScriptBlock>
```

## Controls and web parts

You also need to mark your controls and web parts as MDS compliant. The following code shows the pattern to use.

```csharp
[assembly: Microsoft.SharePoint.WebControls.MdsCompliantAttribute(IsCompliant = true)]
namespace VisualWebPartProject2.VisualWebPart1
{
  // Rest of your control logic
```

Also, your controls and web parts need to register their resources using the methods in the [SPPageContentManager](/previous-versions/office/sharepoint-server/jj168784(v=office.15)) class. The most common resources are JavaScript snippets and hidden files, which can be registered using the `<RegisterClientScriptBlock>` and `<RegisterHiddenField>`, respectively.

Your controls and web parts can also use XSLT files to control the rendering process. Your XSLT files can have embedded JavaScript code or files. The MDS engine needs to know about these resources. You can register the JavaScript resources using an XSLT extension object named `pcm`. A great example of how to use the `pcm` object is in the **%ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\TEMPLATE\\LAYOUTS\\XSL\\fldtypes.xsl** file. The following code shows how the **fldtypes.xsl** file uses the `pcm` object to register JavaScript resources.

```XML
<xsl:value-of select="pcm:RegisterScriptBlock(concat('block1',$ViewCounter), string($scriptbody1))"/>
<xsl:value-of select="pcm:RegisterScriptLink('/_layouts/15/wssactionmenu.js')"/>
```

## See also

- [Minimal Download Strategy overview](minimal-download-strategy-overview.md)
- [Build sites for SharePoint](build-sites-for-sharepoint.md)
