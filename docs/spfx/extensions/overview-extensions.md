---
title: Overview of SharePoint Framework Extensions (preview)
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Overview of SharePoint Framework Extensions (preview)

You can use SharePoint Framework Extensions to extend the SharePoint user experience. With SharePoint Frameword Extensions, you can customize more facets of the SharePoint experience, including notification areas, toolbars, and list data views. SharePoint Framework Extensions are available for testing in first release tenants and in Office 365 developer tenants as part of the release candidate release. 

>**Note:** The SharePoint Framework Extensions are currently in preview and are subject to change. SharePoint Framework Extensions are not currently supported for use in production environments.

> **Note:** You can get a free Office 365 developer tenant when you subscribe to the [Office 365 Developer Program](http://dev.office.com/devprogram).

SharePoint Framework Extensions enable you to extend the SharePoint user experience within modern pages and document libraries, while using the familiar SharePoint Framework tools and libraries for client-side development. Specifically, the SharePoint Framework includes three new extension types:

- **ApplicationCustomizers** - Adds scripts to the page, as well as access well-known HTML element placeholders and extend them with custom renderings.
- **FieldCustomizers** - Provides modified views to data for fields within a list.
- **CommandSets** -  Extends the SharePoint command surfaces to add new actions, and provides client-side code that you can use to implement behaviors.

You can build extensions alongside common scripting frameworks, such as AngularJS and React, in addition to plain JavaScript projects. For example, you can use React along with components from Office UI Fabric React to create experiences based on the same components used in Office 365.

## Get started
If you haven't installed the SharePoint Framework, follow the steps to [Set up your development environment](../set-up-your-development-environment.md).

After you install the SharePoint Framework, run the following command to update your Yeoman templates with the latest version:

```
npm install -g @microsoft/generator-sharepoint
```

Next, you can [Build your first SharePoint Framework Extension (Hello World part 1)](./get-started/build-a-hello-world-extension.md).

## Stay up to date
To keep track of improvements to the SharePoint Framework, including updates to extensions, see the following:

* [@SharePoint](https://twitter.com/sharepoint) and [@OfficeDev](https://twitter.com/officedev) on Twitter
* [Office Developer Blog](http://dev.office.com/blogs)

## Provide feedback 
We invite you to give us your feedback on the SharePoint Framework Extensions preview release. You can use the following resources to provide feedback directly to the SharePoint engineering team:

- [sp-dev-docs repository issue list](https://github.com/SharePoint/sp-dev-docs/issues) - Questions, issues, and comments.
* [SharePoint StackExchange](http://sharepoint.stackexchange.com/) - Tag with [#spfx](http://sharepoint.stackexchange.com/tags/spfx/), [#spfx-extensions](http://sharepoint.stackexchange.com/tags/spfx-extensions/), and [#spfx-tooling](http://sharepoint.stackexchange.com/tags/spfx-tooling/).
* [SharePoint Developer](https://techcommunity.microsoft.com/t5/SharePoint-Developer/bd-p/SharePointDev) - Microsoft Tech Community group.
* [SharePoint Developer UserVoice](https://sharepoint.uservoice.com/forums/329220-sharepoint-dev-platform) - Request new capabilities and features.


## Additional resources

- [Overview of the SharePoint Framework](../sharepoint-framework-overview.md)
- [SharePoint Framework development tools and libraries](../tools-and-libraries.md)
