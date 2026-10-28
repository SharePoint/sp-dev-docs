---
title: Overview of the SharePoint Framework (SPFx)
description: SPFx is a page and web part model that provides full support for client-side SharePoint development, easy integration with SharePoint data, and extending Microsoft 365.
ms.date: 10/28/2026
ms.localizationpriority: high
---

# Overview of the SharePoint Framework

The SharePoint Framework (SPFx) is a page and web part model that provides full support for client-side SharePoint development, easy integration with SharePoint data, and extending Microsoft Teams and Microsoft Viva. With the SharePoint Framework, you can use modern web technologies and tools in your preferred development environment to build productive experiences and apps that are responsive and mobile-ready.

The SPFx is the recommended SharePoint customization and extensibility model for developers. Due to tight integration between SharePoint Online, Microsoft Teams, and Microsoft Viva Connections, developers can also use SPFx to customize and extend all of these products. In fact, the SPFx is the only extensibility and customization option for Viva Connections.

Start with the [SharePoint Framework development environment and generator](set-up-your-development-environment.md). Tooling extensions, such as the [SharePoint Framework Toolkit](https://pnp.github.io/vscode-viva/), can assist with supported scenarios; check their SPFx and component-type requirements. Share UI and business logic across hosts while using the appropriate component type, host adapter, manifest, and deployment configuration.

Key capabilities of the SharePoint Framework for Microsoft 365 are the following:

- **Content Driven Applications** – SharePoint Framework can be used to build content driven applications for surfacing information easily from Microsoft 365 with Microsoft Graph or to integrate with externally hosted content.
- **Integrated authentication** – Use the framework-provided clients for supported signed-in-user API access. Authentication doesn't grant access to data: tenant consent, user permissions, API requirements, and host behavior still apply.
- **Component hosting** – SharePoint can host packaged component assets. External APIs and backend services used by a solution have their own hosting, operations, licensing, and cost requirements.
- **Industry standard tooling** – SharePoint Framework is using standard web stack tooling with node, npm, TypeScript and any JavaScript framework of your preference. You just need standard web skills to succeed without needing any proprietary tooling.

Reuse shared code across [supported applications](./office/overview.md), and validate the solution in each host it targets. The following image illustrates a [reference solution](https://github.com/pnp/spfx-reference-scenarios/tree/main/samples/contoso-retail-demo/).

![Use SharePoint Framework solutions across multiple Microsoft 365 apps.](../images/overview/spfx-across-apps.png)

Use SPFx to extend [Microsoft Viva Connections](./viva/overview-viva-connections.md) by building custom Adaptive Card Extensions.

![Use SharePoint Framework solutions to extend Viva Connections](../images/overview/viva-spfx-extensibility.png)

Use SPFx to extend Microsoft 365 Copilot by building [Copilot UX components](./copilot/overview-copilot-apps.md), generally available with SPFx 1.24 on October 28, 2026. A solution packages interactive UI components that render inside a Copilot conversation together with a declarative agent definition, and deploys through the SharePoint app catalog. See the [licensing and supported-client requirements](./copilot/overview-copilot-apps.md#availability), including the required Copilot add-on license and the iOS/Android exclusions at GA.

Follow [Develop and deploy Copilot UX components](copilot/development-and-deployment.md) for initial agent sync and later runtime-discovered updates. Explore [SPFx web part samples](https://pnp.github.io/sp-dev-fx-webparts/) and [Copilot UX component samples](https://aka.ms/spfx/copilot/samples) for host-specific examples.

Copilot UX components are supported in the SharePoint Store starting with SPFx 1.24 GA. See [Publish SharePoint Framework applications to the marketplace](publish-to-marketplace-overview.md) for submission, licensing, and supported-client guidance.

In addition to Microsoft 365, the SPFx is supported and can be used to customize SharePoint on-premises deployments going back to SharePoint Server 2016.

To learn more about where developers can use SPFx, see [Supported extensibility platforms](supported-extensibility-platforms-overview.md).

## Key features of the SharePoint Framework

The following are some of the key features included as part of the SPFx:

- It runs in the context of the current user and connection in the browser. SharePoint page customizations run in the page, while Copilot UX components are hosted in an iframe in the Copilot canvas.
- SharePoint page controls are rendered in the page DOM; Copilot UX components render in their host iframe.
- The controls are responsive and accessible by nature.
- It enables the developer to access the lifecycle in addition to **render**, **load**, **serialize** and **deserialize**, **configuration changes**, and more.
- It's framework-agnostic. You can use any JavaScript web framework that you like including, but not limited to, React, Handlebars, Knockout, Angular, and Vue.js.
- The developer toolchain is based on popular open-source client development tools such as npm, TypeScript, Yeoman, webpack, and Heft.
- Performance is reliable.
- End users can use SPFx client-side solutions that are approved by the tenant administrators (or their delegates) on all sites, including self-service team, group, or personal sites.
- SPFx web parts can be added to both classic and modern pages.
- SPFx web parts solutions can be used to extend Microsoft Teams.
- SPFx Adaptive Card Extensions (ACEs) can be used to extend Microsoft Viva Connections.
- SPFx Copilot UX components can be used to extend Microsoft 365 Copilot.

The runtime model improves on the Script Editor web part. It includes a robust client API, an `HttpClient` object that handles authentication to SharePoint and Microsoft 365, contextual information, easy property definition and configuration, and more.

If you work primarily with C#, you want to learn more about client-side JavaScript development. Most of your existing JavaScript knowledge related to SharePoint, however, is transferable, as the data models haven't changed, and you’ll use the same [REST services](../sp-add-ins/get-to-know-the-sharepoint-rest-service.md) depending on your requirements. If you're a C# developer, TypeScript is a nice transition into the JavaScript world. The choice of IDE is up to you. Many developers like to use the cross-platform IDE [Visual Studio Code](https://code.visualstudio.com).

> [!IMPORTANT]
> The SharePoint page [HTML DOM](https://www.w3.org/TR/WD-DOM/introduction.html) is not an API. You should avoid taking any dependencies on the page DOM structure or CSS styles, which are subject to change and potentially break your solutions. SharePoint Framework provides a rich API to customize the SharePoint experience in reliable ways and is the only supported means to interact with the SharePoint page HTML DOM.

> [!NOTE]
> All supported scenarios for SharePoint Framework are included in the documentation. Any scenario which is not covered in the documentation, is considered as unsupported. If you need to validate the supportability of your planned scenario, please use the available Microsoft support channels.

## SharePoint Framework license

The SharePoint Framework components are licensed under this [Microsoft EULA](https://aka.ms/spfx/license).

## Questions?

If you have any questions, post them on [SharePoint StackExchange](https://sharepoint.stackexchange.com/). Tag your questions and comments with [#spfx](https://sharepoint.stackexchange.com/tags/spfx/), [#spfx-webparts](https://sharepoint.stackexchange.com/tags/spfx-webparts/), and [#spfx-tooling](https://sharepoint.stackexchange.com/tags/spfx-tooling/).

You can also post issues, questions, or feedback about the docs at the following GitHub issue list [sharepoint/sp-dev-docs/issues](https://github.com/SharePoint/sp-dev-docs/issues).

## See also

- [Overview of SharePoint client-side web parts](./web-parts/overview-client-side-web-parts.md)
- [Overview of SharePoint Framework Extensions](./extensions/overview-extensions.md)
- [Overview of Copilot UX components](./copilot/overview-copilot-apps.md)
- [SharePoint development](/sharepoint/dev)
- [SharePoint glossary](../general-development/sharepoint-glossary.md)
