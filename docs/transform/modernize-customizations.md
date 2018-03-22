# Introduction

An important aspect of a site modernization is understanding the customizations that are used on that site as not all existing customizations continue to work after the site modernization. A classic example we see coming back a lot is a site banner showing some company information (e.g. a legal notice). This typically is realized via user custom action that embeds JavaScript on the page which on it's turn is responsible for showing the banner. This banner is visible on all classic pages, but will not be visible on modern pages. To workaround this problem you can implement the banner as a SharePoint Framework Application customizer extension and deploy that one to the site. In the article you'll get an overview of the customizations which are not compatible with the modern user interface and guidelines on how to remediate.

## Customizations being used in list and libraries

This chapter focusses on customizations that you might have implemented on your lists and libraries. In the SharePoint classic user interface you could actually edit the the list and library pages, but in the modern user experience this is not possible anymore. Moreover SharePoint will automatically fallback to the classic list and library user interface when it detects an incompatible customization, hence it's important to address these if you want to get 100% modern experience. The [SharePoint "Modern" user interface experience scanner](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.UIExperience.Scanner) will help you get a deep understanding on the modern user interface compatibility of your lists and libraries.

### The use of JSLink

A very common model to control how a field is represented in the SharePoint user interface is using JSLink. Essentially JSLink allows you to plugin JavaScript that then takes over the rendering of the field. In the modern user interface similar customization capabilities are available for the list view pages, although customizing the list edit pane currently is not possible. If you're replacing JSLink then there's two alternative approaches that you can consider, which one works best depends on the complexity of the existing solution. If it's merely about how to display the data then using column formatting often is the best choice, if more 'behavior' is needed then a SharePoint Framework Field Customizer extension probably is the best.

#### Use column formatting to customize SharePoint

You can use column formatting to customize how fields in SharePoint lists and libraries are displayed. To do this, you construct a JSON object that describes the elements that are displayed when a field is included in a list view, and the styles to be applied to those elements. The column formatting does not change the data in the list item or file; it only changes how it’s displayed to users who browse the list. Anyone who can create and manage views in a list can use column formatting to configure how view fields are displayed.

For example, a list with the fields Title, Effort, Assigned To, and Status with no customizations applied might look like this:
![Before column formatter](/media/modernize/sp-columnformatting-none.png)

A list with the appearance of the Effort, Assigned To, and Status fields customized via column formatting might look like this:
![After column formatter](/media/modernize/sp-columnformatting-all.png)

To learn more about column formatting check out these resources:

- [Use column formatting to customize SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/column-formatting)
- [SharePoint Column Formatting Samples](https://github.com/SharePoint/sp-dev-column-formatting)

#### Use SharePoint Framework Field Customizer extension

SharePoint Framework Extensions enable you to extend the SharePoint user experience within modern pages and document libraries, while using the familiar SharePoint Framework tools and libraries for client-side development. Specifically Field Customizers allow you fully control how field data is presented in your list or library views. Below you'll see an example of a percent column.

![Field customizer](/media/modernize/spfx-field-customizer-percent-field-graphic.png)

To learn more about SharePoint Framework (field customizer) extensions check out these resources:

- [Overview of the SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview)
- [Overview of SharePoint Framework Extensions](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/overview-extensions)
- [Build your first Field Customizer extension](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/get-started/building-simple-field-customizer)
- [Migrating JSLink customizations to SharePoint Framework Field Customizers](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/guidance/migrate-jslink-to-spfx-extensions)
- [Migrating from JSLink to SharePoint Framework Extensions tutorial](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/guidance/migrate-from-jslink-to-spfx-extensions)
- [SharePoint Framework Extensions samples & tutorial materials](https://github.com/SharePoint/sp-dev-fx-extensions)

### List scoped user custom actions that embed JavaScript or add custom menu options in the list ribbon or context menu

Using a list user custom action that adds custom menu options or embeds JavaScript is next to JSLink a very common customization pattern which does not work anymore for the modern list and library experience. Luckily using SharePoint Framework Extensions you can realize similar customizations, more in particular via command set extension which allows you to add custom ECB menu items or custom buttons to the command bar of a list view for a list or a library. You can associate any JavaScript (TypeScript) action to these commands.

![List view command set](/media/modernize/spfx-listview-commandset-doc-select.png)

To learn more about SharePoint Framework (list view command set) extensions check out these resources:

- [Overview of the SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview)
- [Overview of SharePoint Framework Extensions](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/overview-extensions)
- [Build your first ListView Command Set extension](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/get-started/building-simple-cmdset-with-dialog-api)
- [Migrating user custom actions and ECB menu items to SharePoint Framework Extensions](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/guidance/migrate-user-customactions-to-spfx-extensions)
- [Migrating from Edit Control Block (ECB) menu item to SharePoint Framework Extensions](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/guidance/migrate-from-ecb-to-spfx-extensions)
- [Migrating from UserCustomAction to SharePoint Framework Extensions tutorial](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/guidance/migrate-from-usercustomactions-to-spfx-extensions)
- [SharePoint Framework Extensions samples & tutorial materials](https://github.com/SharePoint/sp-dev-fx-extensions)

## Customizations used on pages

SharePoint has multiple flavors of classic site pages, there's wiki pages, web part pages and publishing pages. Each of these pages allow the user to customize them by adding web parts and (formatted) text to them or by embedding JavaScript via user custom actions. This chapter will give an overview of the existing customization models and how these can be replaced by modern compatible options.

### The use of out-of-the-box classic web parts (including script editor web part) for which there's no out-of-the-box modern equivalent

SharePoint has many out-of-the-box web parts that do work on classic pages...but are not compatible with modern pages. There's also a nice set of modern, 1st party, client side web parts available that offer similar functionality for some of the classic web parts...however, there's no feature parity. If you need the functionality of a classic web part as a modern client side equivalent you'll need to either roll your own version based on the SharePoint Framework or alternatively consume a web part from the large list of open source SharePoint Framework web parts which you can find in the [sp-dev-fx-webparts](https://github.com/SharePoint/sp-dev-fx-webparts) GitHub repository.

![SPFX Web Part sample](/media/modernize/spfx-react-image-magnifier.gif)

To learn more about SharePoint Framework client side web parts check out these resources:

- [Overview of the SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview)
- [Overview of SharePoint client-side web parts](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/overview-client-side-web-parts)
- [Migrate existing Script Editor Web Part customizations to the SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/guidance/migrate-script-editor-web-part-customizations)
- [SharePoint Framework client-side web part samples & tutorial materials](https://github.com/SharePoint/sp-dev-fx-webparts)

### Site or Web scoped user custom actions that embed JavaScript

In the introduction we mentioned the common pattern of adding a site banner by embedding JavaScript via a site/web scoped user custom action. As this pattern is not compatible with the modern user interface you'll need to rework this type of customization based upon the SharePoint Framework Application Customizer extensions. Using application customizers you can insert custom script that can be used to embed HTML into the SharePoint modern user interface at predefined extension points at the top/bottom of the page.

![SPFX Application Customizer sample](/media/modernize/spfx-application-customizer-sample.png)

To learn more about SharePoint Framework (application customizer) extensions check out these resources:

- [Overview of the SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview)
- [Overview of SharePoint Framework Extensions](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/overview-extensions)
- [Build your first SharePoint Framework Application Customizer Extension](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/get-started/build-a-hello-world-extension)
- [Migrating user custom actions and ECB menu items to SharePoint Framework Extensions](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/guidance/migrate-user-customactions-to-spfx-extensions)
- [Migrating from UserCustomAction to SharePoint Framework Extensions tutorial](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/guidance/migrate-from-usercustomactions-to-spfx-extensions)
- [SharePoint Framework Extensions samples & tutorial materials](https://github.com/SharePoint/sp-dev-fx-extensions)

### The addition of custom menu items in the site actions

Currently it's not possible to add your own custom menu items to the site actions menu (the **gear icon**) on modern pages. Alternative strategies you can follow are adding the needed links into the site's navigation or by adding the needed links on the site's home page.