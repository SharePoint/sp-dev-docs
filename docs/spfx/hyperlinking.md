---
title: Hyperlinking considerations in SharePoint Framework
description: Considerations when hyperlinking on a modern page with regard to smart or absolute navigation
ms.date: 07/01/2020
ms.prod: sharepoint
localization_priority: Priority
---

# Hyperlinking considerations in SharePoint Framework

By default on a modern page in SharePoint when a hyperlink is clicked, navigation to the page is achieved via a page router to avoid full refresh of the screen.

When you develop custom SPFx solutions the behavior of smart navigation might not be desirable, especially for scenarios using the `target` attribute to open a page in a separate tab in the browser.

Consider the following markup:

```html
<a href="https://contoso.sharepoint.com/sites/marketing/SitePages/Awesome.aspx" target="_blank">Awesome page</a>
```

In the above example, the `target` attribute will be ignored and the page opens in the same tab via page router logic. In order to override the page router for hyperlinks add the `data-interception` attribute to the link with a value of `off`.

```html
<a href="https://contoso.sharepoint.com/sites/marketing/SitePages/Awesome.aspx" target="_blank" data-interception="off">Awesome page</a>
```

When the link is clicked in the above example, the page will open in a new tab.
