---
title: Prepare your SharePoint Framework application for publishing to the Marketplace
description: Tips & tricks to help you get your SharePoint Framework application published in the Marketplace
ms.date: 10/05/2024
ms.localizationpriority: high
---

# Prepare your SharePoint Framework application for publishing to the Marketplace

Before a SharePoint Framework application is published in the Marketplace, it must go through an approval process. This process is executed free of charge by Microsoft and is meant to ensure that your app functions properly and that its page clearly describes its purpose and features. To help you get your application published in the Marketplace, following is the list of tests executed as a part of the approval process.

## Prerequisites

### Use SharePoint Framework v1.11 or newer

To build solutions that you want to publish to the Marketplace, you need to use SharePoint Framework v1.11 or higher. Starting from version 1.11, SharePoint Framework solution manifest has additional information about your organization and solution, which is required for publishing your application in the Marketplace.

> [!TIP]
> If your application is built using an older version of the SharePoint Framework, you can easily upgrade it to SharePoint Framework v1.11 or newer using CLI for Microsoft 365. For more information, visit [https://pnp.github.io/cli-microsoft365/cmd/spfx/project/project-upgrade/](https://pnp.github.io/cli-microsoft365/cmd/spfx/project/project-upgrade/).

### Test application in both root and non-root sites

When testing your application, verify that it's working as intended when installed both in the root site collection of a tenant as well as non-root sites. This will help you verify that it doesn't have any dependencies on specific site URLs.

### Test application in the required browsers

When testing your application against checks described in the following section, verify that it works as expected at least on Windows 10 in the latest versions of Microsoft Edge, Google Chrome, Firefox, and Microsoft Teams Desktop client (if your application exposes web parts in Teams).

### Can I rely on unpublished offers in Partner Center for managing a multi-tenant Client ID for customers?

No, offers setup in Partner Center must be published to the Marketplace before using the client IDs in production.

## Required checks

Following checks must be passed. If one or more checks from this category failed, your application will be rejected and you will be instructed to fix the reported issues.

### Ensure SharePoint Framework Contract Conformance

Your web part or customizer must only manipulate the DOM element provided through the `domElement` property. This element and the provided context object are the only approved ways to add functionality into sites through your app. Directly manipulating the page DOM will result in rejection of your solution.

### Under normal circumstances solution should work as intended

Under normal circumstances, all components (web parts and extensions) in your solution should work as intended. Preferably, before submitting your application for approval, you should verify that it's working as expected on multiple tenants and using different user accounts to ensure that it doesn't depend on any specific configuration. If your solution requires specific settings, mention it explicitly in your solution's description.

### Web part should work in all hosts in which it is exposed

When building web parts using SharePoint Framework, you can choose [where they should be exposed](integrate-with-teams-introduction.md). Before submitting your application for review, ensure that your web part works as intended in all these hosts.

### Solution package must contain valid developer metadata

Solution's manifest (managed in the `package-solution.json` file) has to have a new section named `developer` with the following properties:

Attribute|Description|Mandatory
---|---|---
`name`|Name of the organization that built the application|Yes
`websiteUrl`|URL of a website with additional information about the application|Yes
`mpnId`|Microsoft Partner Network ID (more details on [MS Partner Network](/partner-center/mpn-overview))|No (but highly recommended to provide it)
`privacyUrl`|Privacy statement URL|Yes
`termOfUseUrl`|Terms of use URL|Yes

Including this additional information allows you to clearly communicate information about your application towards your users and in the future should allow you to access additional usage data.

The developer information is displayed when installing web parts in Microsoft Teams. Information about the application and the developer that is displayed in the Marketplace is managed separately in the Marketplace.

### Web part metadata description text must briefly describe its functionality and value proposition

Ensure that your web part's description in the metadata is meaningful so that users understand what is your web part's purpose and what they can expect of it.

### Solution's description must clearly describe the different components included in the package

When submitting your package to the Marketplace, be sure to clearly describe what different components (web parts, application customizers, etc.) are included in the package to manage user expectations and help them understand the impact of using your application.

### Don't use names of features in Teams and SharePoint in your solution's name

In your solution name, don't use words matching features in Microsoft Teams or SharePoint, such as **Chat**, **Contacts**, **Calendar**, **Calls**, **Files**, **Meeting**, **Activity**, **Teams**, **Apps**, **Help**, **SharePoint**, **List**, **Page**, etc. as these names could be confused with the standard functionality in Teams and SharePoint.

### Don't use names of other Microsoft's products in your solution's name

Your solution will be rejected if its name contains a name of another Microsoft product, such as **Outlook**, **Word**, **Calendar**, **Tasks**, **Teams**, **Excel**, **PowerPoint**, **Visio**, etc.

### Don't use keywords that are related to Microsoft's products

Your solution must not use Microsoft Teams or SharePoint feature-specific keywords like - **Start meeting**, **Make call**, **Upload file**, **Start chat**, etc. These keywords are used in Microsoft's products and using them in your application could confuse users. If your application offers similar functionality, include the name of your name in the action, for example: **Start a Zoom Meeting**, **Upload file to Dropbox**, **Start Freshdesk chat**, etc.

### Naming your solution

If your solution is named after a common word, such as **Orders**, you will need to include your company name as well to clearly differentiate it from other solutions in the Marketplace, for example, **Contoso Orders**. Where *Contoso* refers to the name of the company submitting the solution.

Ensure that the `package-solution.json` configuration file has understandable `name` entry updated based on above format as shown in the below example.

### Don't include additional advertising in your app's description and screenshots

Make sure that your app's description, screenshots, text, and promotional images, describe only the app and don't contain any additional advertising.

### All properties exposed in the property pane should be functional

Properties exposed in the property pane of your web part should be meaningful. Changing their settings, should clearly change the behavior of your web part.

### Verify that the package file can be uploaded to App Catalog without errors

Verify that the solution package can be uploaded to the App Catalog in your tenant without any errors.

### Verify that the app can be deployed without errors

Verify that your application can be installed in a specific site but also that it can be deployed globally to all sites without any errors.

### Provide justification for any API requests

If your application requires additional API access (for example to communicate with Microsoft Graph), it should request them in the solution manifest. Additionally, prepare justification for the requested API access as we might ask for it when reviewing your app.

### Supporting end users to inject scripts is not allowed

Your solution cannot enable end users to embed arbitrary scripts to SharePoint pages. This means that solutions which enable classic script editor or content editor scenarios in SharePoint are not allowed to be published to SharePoint Store.

This model is not allowed through the SharePoint Store as it opens security concerns by normal end users embedding scripts on the portal. You can only provide this kind of solution to customers outside of the Microsoft hosted store.

### All URLs displayed in the web part must be working

If your web part shows URLs, they must be pointing to existing resources and must not lead to non-existent or error pages.

### Application doesn't stop responding

When using your application, it shouldn't stop responding to users. If it needs to perform an operation that could take a moment to complete, it communicates this to the user.

### Is the solution complete

Does your solution contain all functionality as advertised in its description and screenshots?

### Is the application's UI finished

The first impression users will have of your application will be by looking at its UI. If it doesn't look polished, if some elements are misaligned, it uses many different fonts or some placeholder text has not been replaced by its final value, it could give them an impression that your application isn't finished and that they shouldn't use it.

> [!TIP]
> To ensure seamless integration with SharePoint and Teams, we recommend that you use Office UI Fabric which is the design language for Microsoft 365. For more information, see the [design](../design/design-guidance-overview.md) section of this documentation.

### Application shouldn't prompt users without explicit interaction

Your application shouldn't prompt users without explicit interaction on their part.

### Verify that browsers don't block your pop-ups

If your application uses pop-ups, verify, that browsers with default settings don't block them interrupting the user flow.

### Correct first-launch experience

If possible, your application should work when launched for the first time. If it must be configured first, clearly communicate next steps to the user. If the configuration is complex or requires additional information, provide clear instructions to help users set up your application.

### Test syncing to Teams

If your application contains web parts that are exposed as Teams tabs or personal apps, verify that they can be deployed to teams using the **Sync to Teams** option in the App Catalog without any errors. After syncing the configuration to Teams, verify that all web parts are exposed in the Teams' App Catalog as intended, can be installed and work as expected.

### Verify that links with additional information are correct

Verify, that links such as **Terms of Service**, **Privacy Policy**, **About**, etc. are valid and point to correct pages.

### Acquire account or license

If your solution requires users to acquire an account or a license, is it clear how they can do it and how they can use the obtained information with your application?

### No demo content if free trial is included in the offering

If your offering includes a free trial of your application, then your application shouldn't include any demo content.

### Don't include malicious code

Solutions that contain malicious code, link to malicious websites or otherwise illegal resources will be rejected from publishing in the Marketplace.

### Don't include vulnerable resource

Verify, that your code doesn't contain any vulnerabilities. If you're using third-party dependencies

### Ensure that your application doesn't use resources excessively

When testing your application, verify that it doesn't lead to noticeable or sustained increase in CPU usage, that it doesn't consume a lot of memory and that it doesn't lead to the browser becoming unresponsive. In general, your application should run well on an average desktop computer with internet access. Also, it shouldn't take longer than 10 seconds for your application to load.

### Microsoft Teams targeted solutions will need to be tenant scoped

SharePoint Framework solutions targeted to be also used in Microsoft Teams will need to be [tenant-scoped targeted](tenant-scoped-deployment.md). This setting is controlled with the `skipFeatureDeployment` attribute in the `package-solution.json` configuration file and setting should be `true` for any solution, which has components targeted also to Microsoft Teams.

## Recommended checks

Following checks are recommended to pass. While a failed check in this category won't prevent you from publishing your application in the Marketplace, it might have a negative impact on end-user experience.

### Web part icon should be 64x64px with transparent background

We recommend that you use a 64x64px image with transparent background for your web part's icon. This will allow it to be correctly displayed in the different UI modes in SharePoint.

### Microsoft Teams logos will need to be using correct image sizes

If your solution contains components targeted for Microsoft Teams, they are expected to use the official image sizes based on Microsoft Teams guidance. Outline image has to be 32x32px and color image as 192x192px.

### Full page image has to be sized properly

If solution contains components, which are targeted to be exposed as single part app pages, each of these components must have `fullPageAppIconImageUrl` attribute with specific image designed to be used when new page is created in SharePoint. This image must be sized as 193x158px.

### Web part should have a title that's configurable in the property pane

We recommend that all web parts have a title that clearly describes the information the web part presents. Page authors should be able to adjust this title through property pane, so that if the web part is configurable, the title can correctly describe its contents.

> [!TIP]
> You can easily add a configurable title to your web part by using the [WebPartTitle](https://pnp.github.io/sp-dev-fx-controls-react/controls/WebPartTitle/) PnP Reusable React control.

### Properly handle different themes

Your application should properly handle light- and dark-color themes. Switching between the different themes shouldn't have a negative effect on the usability of your application. While not supporting themes will not prevent you from publishing your app in the Marketplace, it's recommended that you support them to offer optimal user experience.

> [!TIP]
> For more information about using themes in your application, see the [Use theme colors in your SharePoint Framework customizations](use-theme-colors-in-your-customizations.md) article.
