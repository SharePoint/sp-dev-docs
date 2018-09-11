---
title: Overview of SharePoint Framework (SPFx) Extensions
description: Use SPFx Extensions to customize more facets of the SharePoint experience, including notification areas, toolbars, and list data views.
ms.date: 03/14/2018
ms.prod: sharepoint
---

# Overview of SharePoint Framework Extensions

You can use SharePoint Framework (SPFx) Extensions to extend the SharePoint user experience. With SharePoint Framework Extensions, you can customize more facets of the SharePoint experience, including notification areas, toolbars, and list data views. SharePoint Framework Extensions are available in all Office 365 subscriptions for production usage. 

> [!NOTE] 
> You can get an Office 365 developer subscription when you join the [Office 365 Developer Program](https://developer.microsoft.com/en-us/office/dev-program). 
> See the [Office 365 Developer Program documentation](https://docs.microsoft.com/en-us/office/developer-program/office-365-developer-program) for step-by-step instructions about how to join the Office 365 Developer Program and sign up and configure your subscription.

SharePoint Framework Extensions enable you to extend the SharePoint user experience within modern pages and document libraries, while using the familiar SharePoint Framework tools and libraries for client-side development. Specifically, the SharePoint Framework includes three new extension types:

- **Application Customizers**. Adds scripts to the page, and accesses well-known HTML element placeholders and extends them with custom renderings.
- **Field Customizers**. Provides modified views to data for fields within a list.
- **Command Sets**. Extends the SharePoint command surfaces to add new actions, and provides client-side code that you can use to implement behaviors.

You can build extensions alongside common scripting frameworks, such as AngularJS and React, in addition to plain JavaScript projects. For example, you can use React along with components from Office UI Fabric React to create experiences based on the same components used in Office 365.

> [!NOTE]
> There is a known bug with list and library extension support in the classic experiences. These only work currently in context of modern team sites, also known as group associated team sites. Work is being done to address this issue. 

## Get started

1. If you haven't installed the SharePoint Framework, follow the steps to [Set up your development environment](../set-up-your-development-environment.md).

2. After you install the SharePoint Framework, run the following command to update your Yeoman templates with the latest version:

    ```
    npm install -g @microsoft/generator-sharepoint
    ```

3. Next, you can [Build your first SharePoint Framework Extension (Hello World part 1)](get-started/build-a-hello-world-extension.md).

## Stay up to date
To keep track of improvements to the SharePoint Framework, including updates to extensions, see the following:

* [@SharePoint](https://twitter.com/sharepoint) and [@OfficeDev](https://twitter.com/officedev) on Twitter
* [Office Developer Blog](http://dev.office.com/blogs)

## Provide feedback 
We invite you to give us your feedback on the SharePoint Framework General Availability release. You can use the following resources to provide feedback directly to the SharePoint engineering team:

- [sp-dev-docs repository issue list](https://github.com/SharePoint/sp-dev-docs/issues) - Questions, issues, and comments.
* [SharePoint StackExchange](http://sharepoint.stackexchange.com/) - Tag with [#spfx](http://sharepoint.stackexchange.com/tags/spfx/), [#spfx-extensions](http://sharepoint.stackexchange.com/tags/spfx-extensions/), and [#spfx-tooling](http://sharepoint.stackexchange.com/tags/spfx-tooling/).
* [SharePoint Developer](https://techcommunity.microsoft.com/t5/SharePoint-Developer/bd-p/SharePointDev) - Microsoft Tech Community group.
* [SharePoint Developer UserVoice](https://sharepoint.uservoice.com/forums/329220-sharepoint-dev-platform) - Request new capabilities and features.


## See also

- [Overview of the SharePoint Framework](../sharepoint-framework-overview.md)
- [SharePoint Framework development tools and libraries](../tools-and-libraries.md)
