---
title: Overview of Bot Powered Adaptive Card Extensions
description: Generic overview about the Bot Powered Adaptive Card Extensions
ms.date: 02/01/2024
ms.localizationpriority: high
---
# Overview of Bot Powered Adaptive Card Extensions

Bot Powered Adaptive Card Extensions (ACEs) for Microsoft Viva Connections can be used to build custom experiences for the  Microsoft Viva Connections Dashboard using the Bot development model. Bot Powered ACEs are an addition to the already existing Viva Connections extensibility model, which is based on SharePoint Framework (SPFx) components.

Objective of the Bot Powered ACEs is to enable existing Microsoft Teams developers, with existing bot implementations, extend their bot implementations to be available in the Viva Connections. Bot Powered ACEs are packaged using the Microsoft Teams solution model, enabling the same bot to be used in both Microsoft Teams and in Microsoft Viva Connections.

While with SPFx components you create client-side solutions to extend Viva Connections, using the Bot Powered ACEs you can apply server-side solutions. Depending on your requirements, objectives, expertise, and scenario you can choose between these two options that are complementary and not alternative.

In the following picture, you can see an Adaptive Card Extension to collect user's feedback in action in the desktop experience of Viva Connection Dashboard. The ACE was implemented as a Bot Powered ACE.

![An Adaptive Card Extension with a textbox to collect user's feedback and a button to submit the feedback.](./images/Bot-Powered-ACE-Collect-Feedback-UI-Desktop-01.png)

While in the following picture you can see the same ACE rendered inside the mobile experience of the Viva Connections Dashboard.

![The mobile Viva Connections Dashboard with some Adaptive Card Extensions, including one to collect user's feedback with a textbox and a button to submit the feedback.](./images/Bot-Powered-ACE-Collect-Feedback-UI-Mobile-01.jpg)

From a developer point of view, you build the ACE once and you can benefit of it in both desktop and mobile experiences.

## Start building Bot Powered ACEs for Microsoft Viva Connections

In this series of articles, you can understand what Bot Powered Adaptive Card Extensions (ACEs) for Microsoft Viva Connections are, their architecture, and how to build real-life solutions.

The series of articles covers the following topics:

1. [Building your first Bot Powered Adaptive Card Extension with .NET](Building-Your-First-Bot-Powered-ACE.md)
1. [Building your first Bot Powered Adaptive Card Extension with Microsoft Teams Toolkit and TypeScript](Building-Your-First-Bot-Powered-ACE-TTK-TS.md)
1. [Understanding Bot Powered Adaptive Card Extensions](Understanding-Bot-Powered-ACEs.md)
1. [Authentication and Authorization in Bot Powered Adaptive Card Extensions](AuthN-and-AuthZ-in-Bot-Powered-ACEs.md)
1. [Building Bot Powered Adaptive Card Extensions with Microsoft Entra ID and Single Sign-on](AuthN-and-AuthZ-in-Bot-Powered-ACEs-Entra.md)
1. [Building Bot Powered Adaptive Card Extensions with Magic Code authentication](AuthN-and-AuthZ-in-Bot-Powered-ACEs-Magic-Code.md)

By reading the above articles, you're able to manage the development of Bot Powered ACEs for Microsoft Viva Connections and to apply the potential of this new technology.

In order to understand the content of this series of articles, you need to have a good understanding of how a Bot works in Microsoft Azure and in Microsoft Teams, as well as to have a basic knowledge of either .NET and C# development or TypeScript and Node.js development.
