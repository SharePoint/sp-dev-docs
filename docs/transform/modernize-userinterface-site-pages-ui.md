---
title: Transform classic pages to modern client-side pages using UI
description: Explains how to transform classic wiki and web part pages into modern client side pages using the SharePoint UI
ms.date: 01/30/2019
ms.prod: sharepoint
localization_priority: Priority
---

# Transforming to modern site pages from inside the SharePoint UI

> [!IMPORTANT]
> **The SharePoint Page Transformation UI is currently a beta release**. The solution is continuously evolving, checkout [the sp-dev-modernization GitHub repository](https://github.com/SharePoint/sp-dev-modernization/tree/dev) to stay up to date on the latest changes. If you encounter problems please file an issue in the [sp-dev-modernization GitHub issue list](https://github.com/SharePoint/sp-dev-modernization/issues).

If you want to give your end users the option to self-service modernize pages then using the SharePoint Page Transformation UI makes a lot of sense as it offers your end users UI extensions (ribbon buttons) to launch page transformation:

![page transformation UI extensions](media/modernize/pagetransformation_ui_1.png)

A second key feature is that the UI integration also allows your end users to accept or discard the generated pages:

![page transformation feedback](media/modernize/pagetransformation_ui_2.png)

## Installing the Page Transformation UI in your tenant

The Page Transformation UI installation consists out of 3 steps:

- Installing and configuring the Azure AD protected Azure function app
- Installing and configuring the SharePoint Modernization center site
- Enabling the page transformation UI for the site collections that need it

Checkout the [Page Transformation UI deployment guide](https://aka.ms/sppnp-pagetransformationui-deployment) for step-by-step guidance and check out below video to learn how to set up the page transformation UI solution.

> [!Video https://www.youtube.com/embed/DK8YMRRyPgw]

## Upgrading from the preview release to the beta release

Upgrading from preview to beta is easy as explained in the [upgrade guide](https://aka.ms/sppnp-pagetransformationui-upgrade).

## Page Transformation UI high level architecture

Below steps describe the high level flow of the solution:

1. From any of the UI elements the users triggers the creation of a modern version of the selected wiki or web part page. This will be done by calling a "central" proxy page which is hosted in the modernization center site collection
2. The "central" proxy page contains an SPFX web part that makes a call to an Azure AD secured Azure Function
3. The Azure Function uses the SharePoint Modernization Framework to create a modern version of the page. This created modern version does contain a banner web part which provides the end user with the option to keep or discard the created page. Important to understand is that this modern page is a new page with name like migrated_oldpagename.aspx
4. If the page is discard a feedback dialog is shown asking the user for a reason why the page was not good. This information is then stored in a central list in the modernization center site collection.
5. If the users keeps the page then the modern page gets the name of the original page and the original page is renamed with an old_ prefix

![page transformation architecture](media/modernize/pagetransformation_ui_8.png)

## See also

- [Modernize your classic SharePoint sites](modernize-classic-sites.md)
- [Understanding and configuring the page transformation model](modernize-userinterface-site-pages-model.md)
- [Classic and modern web part experiences](https://support.office.com/en-us/article/classic-and-modern-web-part-experiences-3fdae6c3-8fc1-49ab-8708-8c104b882e64)
