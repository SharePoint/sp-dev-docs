---
title: End user guide for the page transformation UI 
description: Explains how end users can use the page transformation UI 
ms.date: 11/21/2018
ms.prod: sharepoint
localization_priority: Normal
---

# User guide for page transformation UI

The key feature of the page transformation UI is creating modern pages for existing classic wiki or web part pages. This short guide describes how to use it.

> [!IMPORTANT]
> The Page transformation UI must have been installed and configured upfront, it's not there out of the box. The installation and configuration steps can be found [here](modernize-userinterface-site-pages-ui.md).

## Trigger the migration of a wiki or web part page

As a user you can self-service trigger the creation of a modern version of your page. **This modern version by default will not overwrite your current version**, there's no risk for loosing your current page. The SharePoint UI has several (ribbon) buttons that you can use to request a modern page version. You'll find a button in the wiki page or web part ribbons:

![page transformation UI extensions](media/modernize/pagetransformation_ui_3.png)

Similar buttons are available from the site pages library, both in classic UI as in modern UI:

![page transformation UI extensions](media/modernize/pagetransformation_ui_4.png)

Requesting a modern page version is a simple as clicking one of these buttons.

## Page transformation process

After requesting a modern version of your page you'll see a spinner indicating a page is being created. Once the modern page version is ready it will be automatically loaded.

![page transformation process](media/modernize/pagetransformation_ui_5.png)

The created modern page will have a banner on top of it and this banner has a specific function: it will allow you as the user requesting the page to keep the preview as being the final page you want to use in the future. Obviously it also allows you to decline the page.

![page banner on modern page](media/modernize/pagetransformation_ui_6.png)

Also the classic page will get a banner to indicate the site users that there's a modern version of this page available:

![page banner on classic page](media/modernize/pagetransformation_ui_9.png)

Let's have a look at the options of the modern page banner.

### Keep this page

When you use this option the created modern version of your page will become the one you use in the future. As part of the transition to this page the following will happen:

- The banner on top of the page will be removed
- The modern page will get the name of original page you started from, the original page get's renamed with an old_ prefix (e.g. Old_MyPage.aspx)
- Links that pointed to the original wiki or web part page now point to the new modern page

### Discard this page

When you don't like the created modern page you can discard the page by clicking on the "Discard this page" button. When you do this you'll be asked to provide feedback on why the page is not good for you, this feedback will be available for your SharePoint administrators and they can use it tweak the tool's transformation capabilities.

![page transformation process](media/modernize/pagetransformation_ui_7.png)

## Frequently Asked Questions

### The migrated modern page looks good, but when I edit the page it looks different

As part of transformation to a modern page the wiki html is rewritten to html that works in the modern text editor part. The modern text editor part can render all html it has been given, but when it comes to editing certain scenarios are not supported (e.g. nested tables). When you then save the page only the html that's supported to be edited is saved, which can mean the page differs from the original one.

### I clicked on "Keep this page" but now want to revert that

Since the original page is never deleted you can always revert back the original page following these steps:

- If there's navigation links pointing to the modern page (MyWikiPage.aspx) then change these to point to the old page (Old_MyWikiPage.aspx)
- Delete the created modern page (MyWikiPage.aspx)
- Rename the old page (Old_MyWikiPage.aspx) to the original name (MyWikiPage.aspx)

### What about navigation links pointing to a transformed page

When you create a modern version of a page the navigation links will still point to the classic wiki or web part page as the modern page has a new name (e.g. Migrated_MyWikiPage.aspx). When you discard the page the navigation links are not updated and everything stays as is. When you keep the page the navigation links will point to the modern version of the page, the old page will still be available (e.g. Old_MyWikiPage.aspx) in the site pages library.
