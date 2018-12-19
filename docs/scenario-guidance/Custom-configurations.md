---
title: Scenario Guidance - Custom configurations
description: Scenario guidance on where and how to store configuration values.
ms.date: 03/26/2018
---

# Custom configurations

## Summary

Allowing the different aspects of a SharePoint solution to be configurable makes them more versatile. Using its configuration, you can control how the solution is working, without having to change its code and redeploy it to your tenant. SharePoint offers you a number of different way to store and handle solution configuration properties. You can choose the location where to store your configuration settings, depending on who is supposed to manage them.

## High-level guideline/general rules

- Don't store secrets, such as credentials, in SharePoint as different users might be able to access them.
- Don't assume the integrity of the configuration values as they could be modified by users and other applications.
- Choose the storage for your configuration settings, based on the target audience who will be managing them.

## Tenant properties

_**Applies to:** Office 365_

Tenant properties allow tenant administrators to add properties in the App Catalog that can be read by various SharePoint Framework components. The tenant properties are managed by tenant administrators by using the Microsoft SharePoint Online Management Shell, which is a PowerShell module to manage your SharePoint Online subscription in Office 365 or using the [Office 365 CLI](https://aka.ms/o365cli).

### Articles

- [SharePoint Online tenant properties](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/tenant-properties)

### Videos

- [PnP Webcast - Working with Tenant Properties in SharePoint Online](https://www.youtube.com/watch?v=SVIrtZ2nM6s)


## Property bags

_**Applies to:** Office 365 | SharePoint Server_

Description. Can't edit if no script enabled.

### Articles

### Videos

### Samples

## SharePoint Framework

_**Applies to:** Office 365 | SharePoint Server_

### Related resources

### Articles

- [Make your SharePoint client-side web part configurable](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/basics/integrate-with-property-pane)
- [Simplify adding web parts with preconfigured entries](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/guidance/simplify-adding-web-parts-with-preconfigured-entries)
- [Validate web part property values](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/guidance/validate-web-part-property-values)
- [Integrate web part properties with SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/guidance/integrate-web-part-properties-with-sharepoint)
- [Build custom controls for the property pane](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/guidance/build-custom-property-pane-controls)

### Videos

- [PnP Shorts - Optimizing validation of client-side web part configuration](https://www.youtube.com/watch?v=yIVpdBICMmM)
- [PnP Webcast - Integrate Client-Side web part Properties with SharePoint](https://www.youtube.com/watch?v=iB8PBs8RH-E)
- [PnP Webcast - Custom Property Pane Controls with SharePoint Framework](https://www.youtube.com/watch?v=d_9o3tQ90zo)
- [PnP Webcast - Validating SharePoint Framework client-side web part property values](https://www.youtube.com/watch?v=6r6MqUDzKvI)
- [PnP Shorts - Correctly handling numeric web part properties](https://www.youtube.com/watch?v=vrPnOw-XxNM)

### Samples

- [Angular client-side web part (passing web part configuration to Angular and reacting to configuration changes)](https://github.com/SharePoint/sp-dev-fx-webparts/blob/master/samples/angular-todo/README.md)
- [Weather SharePoint Framework Field Customizer](https://github.com/SharePoint/sp-dev-fx-extensions/blob/master/samples/js-field-weather/README.md)
- [Announcements SharePoint Framework Application Customizer](https://github.com/SharePoint/sp-dev-fx-extensions/blob/master/samples/react-app-announcements/README.md)
- [Conditional formatting SharePoint Framework Field Customizer](https://github.com/SharePoint/sp-dev-fx-extensions/blob/master/samples/js-field-conditionalformatting/README.md)
- [Directions SharePoint Framework ListView Command Set](https://github.com/SharePoint/sp-dev-fx-extensions/blob/master/samples/react-command-directions/README.md)

## SharePoint add-ins

_**Applies to:** Office 365 | SharePoint Server_

Description. 

### Articles

### Videos

### Samples


## Farm solutions

_**Applies to:** Office 365 | SharePoint Server_

Description. Can't edit if no script enabled.

### Articles

### Videos

### Samples