---
title: Understanding Bot Powered Adaptive Card Extensions
description: Provides a technological and architectural overview of the Bot Powered Adaptive Card Extensions
ms.date: 02/01/2024
ms.localizationpriority: high
---
# Understanding Bot Powered Adaptive Card Extensions

Bot Powered Adaptive Card Extensions (ACEs) for Microsoft Viva Connections can be used to build custom experiences for the Microsoft Viva Connections Dashboard using the Bot development model.

> [!TIP]
> You can also wathc the key areas of this article in video format on the Microsoft 365 & Power Platform Community YouTube Channel.

> [!Video https://www.youtube.com/embed/OWPVe3n5UnM]

Bot Powered ACEs is the new addative extensibility extensibility model for the Viva Connections Dashboard, which can be also extended using the client-side ACEs built using the SharePoint Framework. SPFx based extensibility model is solid and mature, especially with the latest features introduced with the [component based ACEs](/sharepoint/dev/spfx/viva/design/designing-card) released with SharePoint Framework version 1.18.x.  However, there are some use cases that can't be addressed with a client-side development model, like just to make few examples:

* You have an existing server-side bot for Microsoft Teams which you'd like to use to power power an ACE running in the Viva Connections dashboard for a better return of investment.
* Existing applications developed using C# and .NET that can't be used on the client-side in SharePoint Framework.
* Software architectures where you rely on external (non-Microsoft) identity providers (IDPs) and you would like to have a seemless and silent single sign-on (SSO) experience for your end users. With SharePoint Framework and SharePoint Online there's no native support for external IDPs.
* Scenarios where you rely on REST APIs secured with API Key and you can't store them on the client-side, for security reasons.
* Application architectures where you need to apply business critical logic and formulas that you don't want to make available on the client-side.
* Etc.

In all the above scenarios, being able to generate and manage the rendering of an ACE on the server-side allows defining better software architectures. The Bot Powered ACEs are designed and provided to make these scenarios possible.

## Architecture of Bot Powered ACEs

Let's have a look at the architecture of Bot Powered ACEs in order to better understand how they work and what their potentials are.

From a development point of view, a Bot Powered ACE behaves like a regular client-side ACE built with SharePoint Framework. As such, you can render Card Views, Quick Views, you can provide properties configurable via a Property Pane, and you can implement specific behaviors to handle actions in the user interface of the ACE. 

You can learn more about the basics of client-side Adaptive Card Extensions for Microsoft Viva Connections by reading the tutorial ["Build your first SharePoint Adaptive Card Extension."](/sharepoint/dev/spfx/viva/get-started/build-first-sharepoint-adaptive-card-extension)

Bot Powered ACEs are based on Azure Bots. To create a new Bot Powered ACE, you need to register an Azure Bot in the Microsoft Azure portal, and you have to implement a Bot using the [Microsoft Bot Framework SDK](https://learn.microsoft.com/en-us/azure/bot-service/index-bf-sdk?view=azure-bot-service-4.0).

![The architectural diagram of an Azure hosted Bot Powered ACE. The end user interacts with the Bot via the Microsoft 365 Channel, which relies on the Azure Bot Services. The Azure Bot Services are an intermediary to the Bot Adapter which handles the actual requests, creates a `TurnContext` object and hands control to the actual Bot. The response of a Bot request flows back to the end user following the reversed path.](./images/Bot-Architectural-Diagram.png)

A Bot Powered ACE relies on the Microsoft 365 Channel, which is used also to create Bots for other Microsoft 365 apps. Whenever an end user interacts with a Bot Powered ACE, the Microsoft 365 Channel handles the request and hands it to the Azure Bot Services. Then, the Azure Bot Services transfers the request to a Bot Adapter that creates a proper `TurnContext` object, which includes request context information and a definition of the `Activity` requested for the Bot.

The actual Bot implements the logic to render the Bot Powered ACE and replies back to the end user/front-end providing a new card (Card View or Quick View). The new card renders in the Viva Connections Dashboard.

As a developer, you don't need to dig into all the technical details of how an Azure Bot works. You can focus on implementing the Adaptive Card Extension, while the Bot architecture takes care of all the plumbing for you.

It's important to know that the Bot Powered ACEs can only be created starting from a specific release of the [Microsoft Bot Framework SDK](/azure/bot-service/index-bf-sdk). In fact, starting from version 4.21.2 of the Bot Framework SDK there are new types supporting Bot Powered ACEs. You can develop Bot Powered ACEs either using C# and .NET or using TypeScript and Node.js. As such, depending on your development background and eventually on your already existing code, you can extend your already existing Bots to support Bot Powered ACEs.

### Bot Framework SDK `SharePointActivityHandler`

Starting from version 4.21.2 of the Bot Framework SDK there are new types supporting the creation of Bot Powered ACEs. Specifically, there's a specialized `ActivityHandler` type with name `SharePointActivityHandler` that provides the following overridable methods:

* `OnSharePointTaskGetCardViewAsync`: handles the rendering of a Card View.
* `OnSharePointTaskGetQuickViewAsync`: handles the rendering of a Quick View.
* `OnSharePointTaskGetPropertyPaneConfigurationAsync`: allows rendering the Property Pane of the ACE.
* `OnSharePointTaskSetPropertyPaneConfigurationAsync`: allows saving the settings configured using the Property Pane of the ACE.
* `OnSharePointTaskHandleActionAsync`: handles a custom action in the ACE like the select on a button in a Card View or any custom action in the UI of a Quick View.

To implement a custom Bot Powered ACE, you aren't forced to override all of the above methods. You can override what you need in order to implement your own custom ACE.

For example, if your custom ACE relies on Card Views only, you can override `OnSharePointTaskGetCardViewAsync` and you can skip overriding all the other methods. In the article ["Building your first Bot Powered Adaptive Card Extension,"](Building-Your-First-Bot-Powered-ACE.md) you can understand how to build a real Bot Powered ACE following a step by step guidance.

### Important considerations

There are some architectural things that are worth being aware of to design and implement custom Bot Powered ACEs the proper way:

1. Bots are a **stateless technology** and you should always implement your logic accordingly. For example, you can't make the assumption that you can share context and state across multiple requests from the same user. Eventually, you can take care of storing state information in the response and you collect the state back from the user on the next interaction.
1. The Bot Powered ACEs are based on a **pull model**, meaning that you can't push content to Card Views or Quick Views without an explicit user's intervention. As such, you can't implement solutions that automatically update their content based on a timer or when an external trigger event occurs. You need the end users to interact with your ACE and reload its content. The refresh occurs by pressing a button in a Card View, or by interacting with an action in a Quick View, or by refreshing the whole web page if they are on a web client.
1. By default, a Bot Powered ACE **doesn't provide you with any information about the consumer tenant or user**. If you want to access information about the tenant or the user consuming your Bot Powered ACE, you have to rely on a single sign-on (SSO) enabled Bot.
1. At the time of this writing, you **can have multiple Bots and multiple dashboard cards configured** in the **manifest.json** file of a Microsoft 365 solution. Theoretically, this configuration allows for multiple Bot Powered ACEs in a single project, if you register one Azure Bot for each. However, it's important to note that in the **manifest.json** file, only one application ID can be included in the _webApplicationInfo_ section. This section is used to configure single sign-on (SSO), which is a common requirement. So, each Visual Studio project can only have one Bot Powered ACE with SSO functionality.
1. When rendering Quick Views in Bot Powered ACEs you can rely on the **AdaptiveCards.Templating** NuGet package and on a JSON template file defining an Adaptive Card, or you can use a code based and declarative approach. Keep into account that the **AdaptiveCards.Templating** NuGet package, at the time of this writing, can only parse and process JSON files with Adaptive Card definitions up to Adaptive Card schema v. 1.2, while using the declarative and code based model you can use any version of the Adaptive Card schema.
1. If you have multiple instances of the same Bot Powered ACE on the same dashboard relying on single sign-on (SSO), they can **share the same security context**. In fact, users can authenticate on one of the card instances and their security context is shared across all of the instances. However, you need to manually refresh the dashboard to make all the instances aware of the authenticated context. The same happens when a user signs out from a single card instance. You need to refresh the page to make all the other card instances aware of the unauthenticated context.