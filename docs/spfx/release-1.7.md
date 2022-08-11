---
title: SharePoint Framework v1.7 release notes
description: Release notes for the SharePoint Framework v1.7 release
ms.date: 09/08/2021
ms.localizationpriority: high
---
# SharePoint Framework v1.7 release notes

This is probably the biggest release for new features we've had since the original preview (or maybe the preview of extensions).

**Released:** November 8, 2018

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Upgrading projects from v1.6 to v1.7

1. In the project's **package.json** file, identify all SPFx v1.6 packages. For each SPFx package:
    1. Uninstall the existing v1.6 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.6
        ```

    1. Install the refreshed v1.7 package:

        ```console
        npm install @microsoft/{spfx-package-name}@1.7.0 --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### Dynamic Data

For the **Dynamic Data** feature, we've made a number of improvements in the GA (general availability) work.

- [Connect SharePoint Framework components using dynamic data](dynamic-data.md)
- [Sample client-side web part using Dynamic Data in 1.7](https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/react-events-dynamicdata)

#### Author configuration

The main bulk of the additions between developer preview and GA are around the property pane. There are different kinds of classes introduced to support this, including

- `IPropertyPaneConditionalGroup`, which allows you to have different groups appear based on some condition
- `IDynamicDataSharedPropertyConfiguration`, `IDynamicDataSharedPropertyFilters`, `IDynamicDataSharedSourceConfiguration`, `IDynamicDataSharedSourceFilters`, `IPropertyPaneDynamicFieldSetProps`, that can be used to create controls in the property pane that allow authors to pick a dynamic data source and property.
- We've deprecated (and will remove completely in a future release) the developer preview `IPropertyPaneDynamicTextFieldProps` interface and `PropertyPaneDynamicTextField` function that was the quick-and-dirty way to edit a dynamic property.
- We've updated the `IWebPartPropertiesMetadata` interface to allow a developer to declare web part properties as dynamic, which allows us to create the `DynamicProperty` objects for you at web part creation time.

#### Underlying data

On the underlying data side of things, the `DynamicDataSourceManager` now exposes the `sourceId` of the data source (useful in debugging). A data source can now provide a `getAnnotatedPropertyValue`callback that will be used to display localized strings and sample data to the end user. Finally, when calling the `DynamicProperty` object to get the current value of a property, you can call  , which returns a single property, or  , which will return an array. This is useful when a given data source might return one or many objects (for example, the selected items of a list web part), and you always want to support multiple properties. For both scenarios, the framework will make sure that you get a single object or an array, independent of what the underlying data source exposes. This can be useful if you're creating a web part (say a people card), that always expects to display a single person. You can have the author pick the current user from the context data source, or you can have the user pick the author from the selected item of a list web part. As the developer, you only have to call `property.tryGetValue()` and you'll always get back a single value (or undefined).

#### Build in data sources

The first built-in data source is the page context data source. It's a simplified version of the current PageContext object, returning things like the current user, list, site, and so on. Other data source (like the list/document library web part) will follow.

### SharePoint Server 2019 Support

When you target 2019, you get public/GA feature set from the 2019 product. This is the public/GA code from v1.4.1 of the SharePoint Framework

### SPFx for Teams Tabs (Developer Preview)

You can now create Microsoft Teams tabs solutions using SPFx. All the build tools, packaging, hosting, CDN, and authentication stays the same. There's now a property available on the context object called `microsoftTeams` that exposes the Teams SDK object. From there, if your solution is being hosted as a Teams app, you'll have access to the full Teams context object, containing things like the team name, ID, channel, etc. Just side-load a **teamsApp.zip** file with the manifest we provide in the Yeoman-generated project.

- [Docs: Building Microsoft Teams Tabs using SharePoint Framework](integrate-with-teams-introduction.md)
- [Tutorial: Build Microsoft Teams tab using SharePoint Framework](web-parts/get-started/using-web-part-as-ms-teams-tab.md)

### Teams-based Apps in SharePoint (Developer Preview)

If you've created a provider-hosted Teams tab solution, you can now upload the solution directly to the SharePoint app catalog, and the tab will be available as a web part. The latest teams SDK has a SharePoint context object available that provides the same PageContext object that you've access to in SharePoint (the initial release of the Teams SDK has it typed as any, a future release of the SDK will have the full interface. However, the object will be the same). For a better experience, you can host this provider-hosted app in the new *Full page app* feature.

- [Hosting Microsoft Teams Tabs as a solution in SharePoint](using-teams-solutions-in-sharepoint.md)

### Full page apps (Developer Preview)

One thing that has been asked for quite a while is the ability to create full page apps in SPFx. We think we have a better solution, which is to create a page layout that hosts a single web part that covers the entire content area of the page. Things like navigation and the header still exist, and follow the form and style of the rest of the site (so an app page in a communications site won't have left nav, while an app page in a team site will). In the future, as extensions expand and allow for other customizations, those customizations will carry over. This will mean that you as a developer only need to focus on your content, and not do a bunch of work to try to make the app page look like every other page in the system, handle fast-page navigation, handle application customizers, etc. There's a property on the `BaseWebPartContext` object called `formFactor` that will let you know if you know if you're full-size or standard. To create an app page, see here.

- [Using single part app pages in SharePoint Online](web-parts/single-part-app-pages.md)

### Domain Isolated WebParts (Developer Preview)

From the beginning of SPFx, we've always stated that iFrames have a purpose, but that the primary solution didn't need them. Now that the framework has matured, it's time to unlock the scenarios where iFrames were important - namely when you need a different level of permissions for a web part than the rest of the page/tenancy. Building on the Web API feature from v1.6, by setting the `isDomainIsolated` property in your package-solution.json file tp true. When you do this, all web parts in the solution will run in a separate domain with its own set of permissions. The framework will handle the creation of the iFrame, passing data back and forth to allow the property pane to work correctly, and so on. You manage the permissions for this solution in the same admin page that you manage the SPFx permissions for the rest of the tenancy. In this developer preview, dynamic data across web parts from the main page and a domain isolated web part isn't supported.

- [Isolated web parts](web-parts/isolated-web-parts.md)

### ListSubscriptions in the browser (Developer Preview)

The newly published **\@microsoft/sp-list-subscription** package allows you to register for browser events when an underlying library is updated. You provide the library information and a callback function, and when the library is updated, your callback will be called.

- [Subscribe to list notifications](subscribe-to-list-notifications.md)
- [Code sample showing how ListSubscriptions work](https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/react-realtime-documents)

## Changes in this release

We've reworked the ContentPlaceholder lifecycle events. Now, whenever you create a content placeholder, it will succeed. However, if the current page doesn't have a place for the placeholder, the placeholder won't render. Once the user navigates to a page that does support the placeholder (or the placeholder support becomes enabled on the page after the PlaceholderContent has been created), we'll display it. A new property on the PlaceholderContent object, `isVisible` will let you know if the placeholder is being displayed. Additionally, when the visibility of placeholders change, we'll call a method on the `ApplicationCustomizer` called `onPlaceholdersChanged()`. If you wish to be notified of these changes, you can override the method.

We have made a couple of methods on the `SPComponentLoader` public. `getManifests()` will return the list of manifests that the loader is aware of, and `loadComponentById` will load a component by ID from the server if it isn't already loaded (and return it to you).

## Deprecations and removed items in this release

- Removed support for Node.js v6 in this release.
- Removed the previously deprecated use of **MSGraphClient** from **\@microsoft/sp-client-preview**. You should use the GA version from v1.6 that is in the **\@microsoft/sp-http** package.
