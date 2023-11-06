---
title: Overview of SharePoint Framework (SPFx) Extensions
description: Use SPFx Extensions to customize more facets of the SharePoint experience, including notification areas, toolbars, and list data views.
ms.date: 11/08/2022
ms.localizationpriority: high
---

# Overview of SharePoint Framework Extensions

You can use SharePoint Framework (SPFx) Extensions to extend the SharePoint user experience. With SPFx Extensions, you can customize more facets of the SharePoint experience, including notification areas, toolbars, list data views, and forms. SPFx Extensions are available in all Microsoft 365 subscriptions for production usage.

SPFx Extensions enable you to extend the SharePoint user experience within modern pages and document libraries, while using the familiar SPFx tools and libraries for client-side development. Specifically, the SPFx includes four extension types:

- **Application Customizers**: Adds scripts to the page, and accesses well-known HTML element placeholders and extends them with custom renderings.
- **Field Customizers**: Provides modified views to data for fields within a list.
- **Command Sets**: Extends the SharePoint command surfaces to add new actions, and provides client-side code that you can use to implement behaviors.
- **Form Customizer**: Provides a way to assoicate and override default new, edit and view form experience of list and libraries with custom forms by associating component to content type .

You can build extensions alongside common scripting frameworks, such as Angular and React, or to plain JavaScript projects. For example, you can use React along with components from Office UI Fabric React to create experiences based on the same components used in Microsoft 365.

> [!IMPORTANT]
> The SharePoint page [HTML DOM](https://www.w3.org/TR/WD-DOM/introduction.html) is not an API. You should avoid taking any dependencies on the page DOM structure or CSS styles, which are subject to change and potentially break your solutions. SharePoint Framework provides a rich API to customize the SharePoint experience in reliable ways and is the only supported means to interact with the SharePoint page HTML DOM.

## See also

- [Overview of the SharePoint Framework](../sharepoint-framework-overview.md)
- [SharePoint Framework development tools and libraries](../tools-and-libraries.md)
