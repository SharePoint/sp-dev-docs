---
title: Set up your Microsoft 365 tenant
description: Build and deploy client-side web parts using the SharePoint Framework by setting up a Microsoft 365 tenant.
ms.date: 10/28/2026
ms.localizationpriority: high
ms.custom: scenarios:getting-started
---

# Set up your Microsoft 365 tenant

To build and deploy client-side web parts using the SharePoint Framework, you need a Microsoft 365 tenant.

If you already have a Microsoft 365 tenant, see the section [Create app catalog site](#create-app-catalog-site).

[!INCLUDE [sp-add-in-deprecation](../../includes/snippets/sp-add-in-spfx.md)]

If you don't have a Microsoft 365 tenant, you might qualify for one through the [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program); for details, see the [FAQ](/office/developer-program/microsoft-365-developer-program-faq#who-qualifies-for-a-microsoft-365-e5-developer-subscription-). Alternatively, you can [sign up for a 1-month free trial or purchase a Microsoft 365 plan](https://www.microsoft.com/en-us/microsoft-365/try).

You can also follow these steps by watching this video on the Microsoft 365 Platform Communtiy (PnP) YouTube Channel:

> [!Video https://www.youtube.com/embed/ijaJgc3J-iE]

## Create app catalog site

You need an app catalog to upload and deploy web parts. If you've already set up an app catalog, continue to [Create a new site collection](#create-a-new-site-collection).

### To create an app catalog site

1. Go to the **SharePoint Admin Center** by entering the following URL in your browser. Replace **yourtenantprefix** with your Microsoft 365 tenant prefix.

    Commercial Tenant

    ```http
    https://{your-tenant-prefix}-admin.sharepoint.com
    ```

    GCC High Tenant

    ```http
    https://{your-tenant-prefix}-admin.sharepoint.us
    ```

1. In the left sidebar, select **More features**
1. Locate the section **Apps** and select **Open**.

This will start the automatic creation of the SharePoint app catalog to the tenant if it does not exist. If the app catalog already exists, you will be redirect to it. SharePoint app catalog is used to manage and deploy SharePoint Framework solutions.

## Create a new site collection

You also need a site collection and a site for your testing. You can create a new site collection by using any of the available templates.

1. Navigate to **SharePoint Admin Center** by entering the following URL in your browser. Replace **{your-tenant-prefix}** with your Microsoft 365 tenant prefix:

    Commercial Tenant

    ```http
    https://{your-tenant-prefix}-admin.sharepoint.com
    ```

    GCC High Tenant

    ```http
    https://{your-tenant-prefix}-admin.sharepoint.us
    ```

1. In the left sidebar, select **Sites > Active sites**.
1. Select **Create** from the toolbar at the top of the page.
1. On the **Create a site** panel, select **Team site**.
1. In the new view that appears, enter required details to create the site (*Site name, Group owner, and language*):
1. Select **Next** to create the site collection.

After SharePoint creates the site, you can browse to your site collection by selecting **Finish** & entering the URL of the new site.

> [!NOTE]
> In this case, we are creating a new group associated team site with modern user interface experience. You could just as well create a *communication site* to be used as your test site collection supporting your development.

> [!NOTE]
> You can potentially use the same tenant for developing SharePoint Framework experiences, especially for initial development experiences. We do, however, recommend the use of isolated developer tenants for each developer, for the best isolated developer experience.

## Set up a page for debugging

Create a modern SharePoint page in your development site and make sure your developer account can edit it. Use this page to test locally served web parts in their actual SharePoint context, with the [SharePoint Framework Debug Toolbar (developer toolbar)](debug-toolbar.md). Extensions require an appropriate modern page, list, or library for their extension type. See [Debug SharePoint Framework solutions on modern SharePoint pages](debug-modern-pages.md).

The local workbench was removed in SPFx 1.13 and isn't included in current projects.

[!INCLUDE [spfx-online-workbench-deprecation](../../includes/snippets/spfx-online-workbench-deprecation.md)]

For Copilot UX components, use the fully supported [Copilot Workbench](copilot/overview-copilot-apps.md#test-with-the-copilot-workbench). Development and testing, including Copilot Workbench, require the Microsoft 365 Copilot add-on license on top of your normal E3, E5, or E7 license, just as production use does. Eligibility for a Microsoft 365 developer subscription doesn't replace this requirement. See the [Copilot UX component licensing and availability requirements](copilot/overview-copilot-apps.md#availability).

## Next steps

Now that you've configured your SharePoint tenant, [set up your development environment](./set-up-your-development-environment.md) to build client-side web parts.
