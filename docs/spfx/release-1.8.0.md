---
title: SharePoint Framework v1.8.0 release notes
description: Release notes for the SharePoint Framework v1.8.0 release
ms.date: 09/08/2021
ms.prod: sharepoint
ms.localizationpriority: high
---
# SharePoint Framework v1.8.0 release notes

We'll release more updated documentation and guidance videos during upcoming days and weeks. Your feedback on needed assets and topics is more than welcome.

**Released:** March 14, 2019

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Upgrading projects from v1.7.1 to v1.8.0

1. In the project's **package.json** file, identify all SPFx v1.7.1 packages. For each SPFx package:
    1. Uninstall the existing v1.7.1 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.7.1
        ```

    1. Install the refreshed v1.8.0 package:

        ```console
        npm install @microsoft/{spfx-package-name}@1.8.0.0 --save --save-exact
        ```

1. Make sure that there's an entry in the `devDependency` section of **package.json** that references `"@microsoft/sp-tslint-rules": "1.8.0"`.
1. Add a **\@microsoft/rush-stack-compiler-x-x** package as a `devDependency` in the **package.json**. Refer to the section [Support for TypeScript 2.7, 2.9 and 3.x (General Availability)](#support-for-typescript-27-29-and-3x-general-availability) for details on the correct version to use.
1. Update your **tsconfig.json** file to extend the TypeScript configuration for your version of the **\@microsoft/rush-stack-compiler-x-x**. Do this by modifying the top of the file as follows:

    - For **\@microsoft/rush-stack-compiler-2-7**, the top of the **tsconfig.json** file would look like

        ```json
        {
           "extends": "./node_modules/@microsoft/rush-stack-compiler-2.7/includes/tsconfig-web.json",
           "compilerOptions": { // ommitted for brevity }
        }
        ```

    - For **\@microsoft/rush-stack-compiler-3-3**, the top of the **tsconfig.json** file would look like

        ```json
        {
           "extends": "./node_modules/@microsoft/rush-stack-compiler-3.3/includes/tsconfig-web.json",
           "compilerOptions": { // ommitted for brevity }
        }
        ```

1. Fix all the new and interesting tslint errors that are now getting raised with a newer compiler. For large projects, this might take a while. The default behavior of the TypeScript compilers is getting stricter, but your code will be the better for it.

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### SPFx development for Teams tabs (General Availability)

Teams Tabs solutions using SPFx is now fully supported. Add `TeamsTab` to the `supportedHosts` property in the web part manifest and deploy it to the app catalog. From there, you can choose the solution and click the "Sync to Teams" button. The web part will now appear as an app in teams. When a web part is hosted in a Teams Tab, it will have access to the Teams SDK via the web part context. There are the following changes from the beta release in 1.7:

- Initial and future configurations are handled using the Property Pane
- The manifest property `canUpdateConfiguration` can be set to false to disable configuration after the initial configuration
- Reduced JavaScript overhead to host the web part
- “Sync to Teams” feature to automate Teams manifest creation and upload
- Update teams-js to v1.4.1
- Locale is driven by the current Teams Locale

See more from:

- [Building Microsoft Teams Tabs using SharePoint Framework](integrate-with-teams-introduction.md)
- [Build Microsoft Teams tab using SharePoint Framework - Tutorial](web-parts/get-started/using-web-part-as-ms-teams-tab.md)
- [Create Microsoft Teams manifest manually for a web part and deploy it to Microsoft Teams](sharepoint/dev/spfx/deployment-spfx-teams-solutions)

### App Pages (General Availability)

We frequently receive requests to have a single-page-app framework in SPFx. We hope App Pages will meet the majority of the goals around SPAs while providing a similar development model and user experience. App pages are a new SharePoint modern page layout, which hosts a single web part on the entire page; keeping the look and feel (navigation, header, theme, and so on) consistent. Adding `SharePointFullPage` to the `supportedHosts` property of the web part manifest will add an App Page with the web part option when creating a new page.

The web part can be configured (unless the `canUpdateConfiguration` property is `false`), but the page layout/content can't be modified. The end-user creation of app pages should be rolling out later this month with the new page creation experience. In the meantime, there's a static page (located at _layouts/15/appPageHost.aspx?componentId=yourComponentGuidHere) that will host any component in an app page. This page is rolling out now and should be available at release time, or a day or two later, depending on your tenant.

See more from:

- [Using single part app pages in SharePoint Online](web-parts/single-part-app-pages.md)

### Domain isolated web parts (General Availability)

SPFx components running inside the current page is simple and fast. However, there are scenarios where a stronger level of isolation is wanted. Domain isolated web parts run in an iframe with a separate domain, which can have different permissions from the host page. This allows, for example, a web part to access the current user’s email without giving all code running in the tenant the same level of access.

The domain and its AAD app are created and managed for the tenant - the tenant admin will need to approve the permissions requested by the solution. For end users, the web part looks and behaves like any other web part. _At this time, domain isolated web parts only support Dynamic Data in the Page Context. Full part-to-part communication will come in a future update._

See more from:

- [Isolated web parts](web-parts/isolated-web-parts.md)

### Library Components (Developer Preview)

You can now create libraries that other SPFx components can reference. They're a bit tricky to use, so we'll be publishing a separate document that describes them in more detail. The trick is that you need to publish your library to an npm feed (internal is fine) to consume it.

See more from:

- [Using library component type in SharePoint Framework](library-component-overview.md)
- [Build solutions with the library component type in SharePoint Framework](library-component-tutorial.md)

### Support for TypeScript 2.7, 2.9 and 3.x (General Availability)

In this release, we've done work to separate out the version of TypeScript from the version of SPFx you're using. You can now specify the version of TypeScript you want to use separate from the build system itself. You can use any compiler listed here: https://www.npmjs.com/search?q=%40microsoft%2Frush-stack-compiler.

> [!NOTE]
> The compiler you use needs to be reflected in your **tsconfig.json** file, with a reference to `"extends": "./node_modules/@microsoft/rush-stack-compiler-2.7/includes/tsconfig-web.json"`, that matches the version of the rush-stack-compiler you include.

*We noticed at the last moment that some of the recent versions of the **\@microsoft/rush-stack-compiler** packages aren't working correctly. If you find that the npm install gives warnings about peer dependencies for TypeScript, and the build fails with complaints of not finding a compiler, use an earlier version of the package.*

The following versions of the **\@microsoft/rush-stack-compiler** should be used with the corresponding TypeScript version.

- TypeScript v2.7
  - **\@microsoft/rush-stack-compiler-2.7@0.5.7**
- TypeScript v2.9
  - **\@microsoft/rush-stack-compiler-2.9@0.6.8**
- TypeScript v3.0
  - **\@microsoft/rush-stack-compiler-3.0@0.5.9**
- TypeScript v3.3
  - **\@microsoft/rush-stack-compiler-3.3@0.1.6**

### Web part variant theming in SharePoint modern pages

SharePoint modern pages recently released a feature to have section background colors. Web parts can update their theming to reflect the background color the web part is rendering over. Setting the `supportsThemeVariants` property in the web part manifest to `true` will disable the default behavior of always rendering a white background.

Web parts can then use the SPFx **ThemeProvider** to be notified of background color changes.

See more from:

- [Supporting section backgrounds](web-parts/guidance/supporting-section-backgrounds.md)

## Changes in this release

### Removed PropertyPane code out of **\@microsoft/sp-webpart-base**

We're moving the property pane code to a different package (**\@microsoft/sp-property-pane**\) that contains all the property pane logic that previously existed in **\@microsoft/sp-webpart-base**. Solutions that are currently running will continue to work (we'll forward the calls appropriately), but the public property pane APIs on the **\@microsoft/sp-webpart-base** are deprecated in SPFx v1.8, and will be removed in the SPFx v1.9 release.

Your code changes simple needs to change the imported package. They have the exact same types and signatures; they're located in a different package. This allows us to only load the property pane code (and all its dependent packages) only when needed.

## Deprecations and removed items in this release

### Legacy Fabric CSS consumption

Since release of SPFx v1.0, we've added a bunch of Fabric CSS to the page. Although we've changed how Fabric CSS works since then, we continued adding the old version of Fabric CSS to the page. This wound up adding a considerable about of unneeded CSS. Starting with SPFx 1.8.0, solutions will no longer load the old Fabric CSS.

If your solution still needs the pre-1.8.0 behavior, add `”loadLegacyFabricCss”: true` to your component manifest.

If your styles aren't working correctly after upgrading to 1.8.0, you might need to switch this setting.

Instead, your solution can import the Fabric.css stylesheet like so:

```typescript
import 'office-ui-fabric-react/dist/css/fabric.css';
```

## Known issues and limitations

The new end-user experience to create app pages is dependent on the new **Add a Page** experience in modern pages. This is being rolled out now but release in your tenant may be a few days behind.

As mentioned in the TypeScript support section, some of the more recent builds of the **\@microsoft/rush-stack-compiler** that we use are having problems. The earlier versions work. We'll publish updates and notifications when this is addressed.

The updated provider hosted model for hosting Microsoft Teams solutions in SharePoint Online (using the Teams SDK) is still in preview.

Dynamic data support for isolated domain parts is limited to the page context data source. Full support for dynamic data across the iFrame boundary will come in a future update.
