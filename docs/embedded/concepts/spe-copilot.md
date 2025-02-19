---
title: SharePoint Embedded Copilot
description: Details Copilot Integration with SharePoint Embedded Applications
ms.date: 02/19/2025
ms.localizationpriority: high
---

# Overview

> [!NOTE]
>
> Sharepoint Embedded Copilot is currently in public preview, the API surface and SDK are expected to change frequently.

SharePoint Embedded Copilot is a powerful tool designed to enhance the functionality of SharePoint Embedded applications by integrating advanced Microsoft 365 features. 


## Key Features

### Application Scoping

Application scoping in SharePoint Embedded Copilot (SPE Copilot) involves defining the boundaries and context within which the tool operates, ensuring its features and capabilities are tailored to meet the specific needs of different applications. This process helps customize the Copilot's functionality, making it more effective and relevant for various use cases.

When SPE Copilot users query the LLM, it will only have access to files that the `User+Application` have access to. Typically this will be the application that has been granted access over the container type and the user.


#### DiscoverabilityDisabled

### CSP Policies

### Consumptive Billing ( Coming Soon )

## Getting Started


> [!NOTE]
>
> 1. You must specify the purpose of the container type you're creating at creation time. Depending on the purpose, you may or may not need to provide your Azure Subscription ID. A container type set for trial purposes can't be converted for production; or vice versa.
> 1. You must use the latest version of SharePoint PowerShell to configure a container type. For permissions and the most current information about Windows PowerShell for SharePoint Embedded, see the documentation at [Intro to SharePoint Embedded Management Shell](/powershell/sharepoint/sharepoint-online/introduction-sharepoint-online-management-shell).
> -  Ensure that Copilot for Microsoft 365 is available for your organization. You have two ways to get a developer environment for Copilot:
>     - A sandbox Microsoft 365 tenant with Copilot (available in limited preview through [TAP membership](https://developer.microsoft.com/microsoft-365/tap)).
>     - An [eligible Microsoft 365 or Office 365 production environment](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/prerequisites#customers-with-existing-microsoft-365-and-copilot-licenses) with a Copilot for Microsoft 365 license.


### Quick Start

### Examples

# API Documentation

[LINK_TO_API_EXTRACTOR](https://api-extractor.com/pages/setup/generating_docs/)

# Frequently Asked Questions

## Consumptive Billing

Currently you need a copilot license enabled for your user to use Sharepoint Embedded copilot. When consumptive billing is enabled you will no longer require a license however you will be required to use a Standard Container type.

***Trial Container Types expire after 30 days, for this reason we recommend starting off with Standard Container types. Currently there is no upgrade path from Trial to Standard container types.***

## Standard or Trail Container Type

Once consumptive billing is enabled, we will be disabling using this feature with Trial Container types and it will only be enabled on Standard container types going forward. Please follow this [guide](../concepts/app-concepts/containertypes.md) to get startted on creating your Standard Container type.

# Support

## Chat Control Feedback Dialog

## Contact Us

Please reach out to ContactSPECopilot@microsoft.com for any comments or concerns not captured in this article.