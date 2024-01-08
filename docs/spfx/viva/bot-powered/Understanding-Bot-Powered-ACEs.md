---
title: Understanding Bot Powered Adaptive Card Extensions
description: Provides a technological and architectural overview of the Bot Powered Adaptive Card Extensions
ms.date: 01/08/2024
ms.localizationpriority: high
---
# Understanding Bot Powered Adaptive Card Extensions

Bot Powered Adaptive Card Extensions (ACEs) for Microsoft Viva Connections are a new technology to extend the Microsoft Viva Connections Dashboard leveraging the Bot development model.

At the time of this writing, the main extensibility model for the Viva Connections Dashboard is based on client-side ACEs built using the SharePoint Framework. The extensibility model itself is really solid and mature, especially with the latest features introduced with the [component based ACEs](/sharepoint/dev/spfx/viva/design/designing-card) released with SharePoint Framework version 1.18.  However, there are some use cases that cannot be addressed with a client-side development model, like just to make few examples:

* Solutions where you already hava server-side Bot, hosted on the cloud, and you want to reuse the same code and effort also to power an ACE running in the Viva Connections dashboard for a better return of investment.
* Already existing applications mainly developed using C# and .NET, which cannot be used on the client-side in SharePoint Framework, unless you rewrite most of the logic with client-side code, making maintenance and ALM more complex and expensive.
* Software architectures where you rely on external (eventually non-Microsoft) identity providers (IDPs) and you would like to have a seemless and silent single sign-on (SSO) experience for your end users. However, with SharePoint Framework and SharePoint Online there is no native support for external or third party IDPs.
* Scenarios where you need to rely on REST APIs secured with API Key and you cannot store them on the client-side, for obvious security reasons. As such, you would have to host a back-end API in an Azure Function or in an ASP.NET REST API as a middleware to consume the actual back-end REST APIs providing the API Key.
* Application architectures where you need to leverage business critical logic and formulas that you don't want to make available on the client-side, and again you would have to rely on a back-end API to provide that kind of business logic.
* Etc.

In all the above scenarios, as well as in many more, being able to generate and manage the rendering of an ACE on the server-side makes it possible to realize architectures that otherwise wouldn't be possible with client-side code only. The Bot Powered ACEs have been designed and built precisely for the sake of making these scenarios possible.

## Architecture of Bot Powered ACEs
Let's have a look at the architecture of Bot Powered ACEs in order to better understand how they work and what their potentials are.

From a development point of view, a Bot Powered ACE behaves like a regular client-side ACE built with SharePoint Framework. As such, you can render Card Views, Quick Views, you can provide properties configurable via a Property Pane, and you can implement specific behaviors to handle actions in the user interface of the ACE. You can learn more about the basics of client-side Adaptive Card Extensions for Microsoft Viva Connections by reading the tutorial ["Build your first SharePoint Adaptive Card Extension"](/sharepoint/dev/spfx/viva/get-started/build-first-sharepoint-adaptive-card-extension).

Bot Powered ACEs are based on Azure Bots and whenever you want to create a new Bot Powered ACE you need to register an Azure Bot in the Microsoft Azure Portal and you have to implement a Bot using the Microsoft Bot Framework SDK.

![The architectural diagram of an Azure hosted Bot Powered ACE. The end user interacts with the Bot via the Microsoft 365 Channel, which relies on the Azure Bot Services. The Azure Bot Services are an intermediary to the Bot Adapter which handles the actual requests, creates a TurnContext object and hands control to the actual Bot. The response of a Bot request flows back to the end user following the reversed path.](./images/Bot-Architectural-Diagram.png)

A Bot Powered ACE relies on the Microsoft 365 Channel, which is used also to create Bots for other Microsoft 365 apps. Whenever an end user interacts with a Bot Powered ACE, the Microsoft 365 Channel handles the request and hands it to the Azure Bot Services. Then, the Azure Bot Services transfer the request to a Bot Adapter that creates a proper _TurnContext_ object, which includes request context information and a definition of the _Activity_ requested for the Bot. The actual Bot implements the logic to render the Bot Powered ACE and replies back to the end user/front-end providing a response that can be a new card (Card View or Quick View) to render in the Viva Connections Dashboard.

As a developer, you don't need to dig into all the technical details of how an Azure Bot works. You can simply focus on implementing the Adaptive Card Extension and the Bot architecture will take care of all the plumbing for you.

It is important to know that the Bot Powered ACEs can only be created starting from a specific release of the [Microsoft Bot Framework SDK](/azure/bot-service/index-bf-sdk). In fact, starting from version 4.21.2 of the Bot Framework SDK there are new types supporting Bot Powered ACEs. Moreover, you can build Bot Powered ACEs either using C# and .NET or using TypeScript and Node.js. As such, depending on your development background and eventually on your already existing code, you can easily on-board on the Bot Powered ACEs experience with your already existing Bots.

### Bot Framework SDK _SharePointActivityHandler_
As already stated, starting from version 4.21.2 of the Bot Framework SDK there are new types supporting the creation of Bot Powered ACEs. Specifically, there is a specialized _ActivityHandler_ type with name _SharePointActivityHandler_ that provides the following overridable methods:

* _OnSharePointTaskGetCardViewAsync_: handles the rendering of a Card View.
* _OnSharePointTaskGetQuickViewAsync_: handles the rendering of a Quick View.
* _OnSharePointTaskGetPropertyPaneConfigurationAsync_: allows to render the Property Pane of the ACE.
* _OnSharePointTaskSetPropertyPaneConfigurationAsync_: allows to save the settings configured using the Property Pane of the ACE.
* _OnSharePointTaskHandleActionAsync_: handles a custom action in the ACE like the click on a button in a Card View or any custom action in the UI of a Quick View.

To implement a custom Bot Powered ACE, you are not forced to override all of the above methods. You can simply override what you need in order to implement your own custom ACE. For example, if your custom ACE relies on Card Views only, you can simply override _OnSharePointTaskGetCardViewAsync_ and you can skip overriding all the other methods. In the article ["Building your first Bot Powered Adaptive Card Extension"](Building-Your-First-Bot-Powered-ACE.md), you can understand how to build a real Bot Powered ACE following a step by step guidance.

### Important things to know
There are some architectural things that are worth being aware of to design and implement custom Bot Powered ACEs the proper way:

1. When you implement a Bot in general, and as such also when you create a Bot Powered ACE, you need to keep into account that Bots are a stateless technology and you should always implement your logic accordingly. For example, you cannot make the assumption that you can share context and state across multiple requests from the same user, unless you take care of storing state information in the response and you collect the state back from the user on the next interaction.

2. The Bot Powered ACEs are based on a **pull** model, meaning that you cannot push content to Card Views or Quick Views without an explicit user's intervention. As such, you cannot implement solutions that automatically update their content based on a timer or when an external trigger event occurs. You will rather need the end users to interact with your ACE and reload its content by pressing a button in a Card View or by interacting with an action in a Quick View.

3. By default, a Bot Powered ACE does not provide you any information about the consumer tenant or user. If you want to access information about the tenant or the user consuming your Bot Powered ACE, you have to rely on a single sign-on (SSO) enabled Bot. You can read further details about how to create a SSO enabled Bot Powered ACE by reading the article ["Authentication and Authorization in Bot Powered Adaptive Card Extensions"](./AuthN-and-AuthZ-in-Bot-Powered-ACEs.md).

4. At the time of this writing, you can have multiple Bots and multiple dashboard cards configured in the `manifest.json` file of a Microsoft 365 solution. Theoretically, this allows for multiple Bot Powered ACEs in a single project, provided that you register one Azure Bot for each. However, it is important to note that in the `manifest.json` file, only one application ID can be included in the *webApplicationInfo* section. This section is used to configure single sign-on (SSO), which is a very common requirement. Consequently, each Visual Studio project can only have one Bot Powered ACE with SSO functionality.

5. When rendering Quick Views in Bot Powered ACEs you can rely on the `AdaptiveCards.Templating` NuGet package and on a JSON template file definining an Adaptive Card, or you can use a code based and declarative approach. Keep into account that the `AdaptiveCards.Templating` NuGet package, at the time of this writing, can only parse and process JSON files with Adaptive Card definitions up to Adaptive Card schema v. 1.2, while using the declarative and code based model you can leverage any version of the Adaptive Card schema.