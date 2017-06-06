# Overview of SharePoint Framework Extensions (preview)

SharePoint Framework Extensions let developers extend the user experience of SharePoint, including ways to customize more facets of the SharePoint experience, including notification areas, the toolbars of SharePoint, and the views of list data. SharePoint Framework extensions are available for testing through Office 365 Developer Tenants during preview and later cross all of the tenants, when they will GA. 

> You can get free Office 365 Developer Tenant by subscribing to [Office 365 Developer Program](http://dev.office.com/devprogram).

SharePoint Framework Extensions add new capabilities to extend the user experience of SharePoint within modern pages and document libraries, while leveraging the familiar tools and libraries for client-side development coming from the SharePoint Framework. Specifically, SharePoint Framework includes three new Extension types:

- **ApplicationCustomizers** allow developers to add script to the page, as well as access well-known HTML element placeholders and extend them with custom renderings
- **FieldCustomizers** can be used to provide modified views to data for fields within a list
- **CommandSets** let developers extend the command surfaces of SharePoint to add new actions, along with client-side code that can be used to implement behaviors

In addition to plain JavaScript projects, you can build extensions alongside common scripting frameworks, such as AngularJS and React. For example, you can use React along with components from Office UI Fabric React to quickly create experiences based on the same components used in Office 365.

## Getting started
If you have not yet installed SharePoint Framework, please have a look on following tutorial to ready for SharePoint Framework development.

* [Setup your development environment](../set-up-your-development-environment)

If you have already previously installed SharePoint Framework, please execute following command to update your Yeoman templates with the latest version.

```
npm install -g @microsoft/generator-sharepoint
```

## Updates & Feedback

To keep track of improvements to the SharePoint Framework, including extensions releases, please take a look at:

* [@SharePoint](https://twitter.com/sharepoint) and [@OfficeDev](https://twitter.com/officedev) on Twitter
* [Office Developer Blog](http://dev.office.com/blogs)

## Provide us feedback during preview
SharePoint Framework Extensions preview release is available to provide SharePoint engineering feedback around the planned capabilities and functionalities. Please use the following resources to start discussion with SharePoint engineering. 

- [sp-dev-docs repository issue list](https://github.com/SharePoint/sp-dev-docs/issues) - Questions, Issues and comments
* [SharePoint StackExchange](http://sharepoint.stackexchange.com/) (please use [#spfx](http://sharepoint.stackexchange.com/tags/spfx/), [#spfx-extensions](http://sharepoint.stackexchange.com/tags/spfx-extensions/), and [#spfx-tooling](http://sharepoint.stackexchange.com/tags/spfx-tooling/) tags)
* [SharePoint Developer](https://techcommunity.microsoft.com/t5/SharePoint-Developer/bd-p/SharePointDev) group at Microsoft Tech Community
* [SharePoint Developer UserVoice](https://sharepoint.uservoice.com/forums/329220-sharepoint-dev-platform) - New capabilities and feature requests


## Additional resources

- [Overview of the SharePoint Framework](../sharepoint-framework-overview)
- [SharePoint Framework development tools and libraries](../tools-and-libraries)
