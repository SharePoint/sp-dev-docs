---
title: Working with the AADTokenProvider
description: Learn how to work with, and configure, the AADTokenProvider API for certain scenarios.
ms.date: 01/31/2023
ms.localizationpriority: high
---
# Working with the AADTokenProvider

The [AADTokenProvider](/javascript/api/sp-http-base/aadtokenprovider) API in the SharePoint Framework (SPFx) allows developers to obtain OAuth tokens from Azure AD. These tokens are used to authenticate the user from the SharePoint page to other services, such as Power BI, Sway, Exchange, Yammer, etc.

## Handling the popupEvent

A SPFx component requests an access token from Azure AD to connect to a secured service, such as Microsoft Graph, uses the **AADTokenProvider** to perform this task.

When the component requests an access token from a browser SPFx first attempts to use a hidden `<iframe>` to obtain the token. This technique is referred to as *silent SSO*

However in the case where a browser blocks third-party cookies, such as Safari when its Intelligent Tracking Protection (ITP) feature is enabled, SPFx will force a full page redirect to prompt the user to sign in to Azure AD and then obtain the access token.

The [SPFx v1.17 release](release-1.17.md) introduced a capability that enables tenant administrators to change this behavior and, instead, allow users to sign in via a popup window experience instead of the full page redirect.

To support this scenario, a new event was added to the **AADTokenProvider** so developers can intercept the popup request and add their own business logic to handle the popup flow.

### Enabling the popup flow experience

To enable the popup experience, a tenant administrator must first enable the feature on the tenant. This is done using the [Set-SPOTenant](/powershell/module/sharepoint-online/set-spotenant) to set the `[-IsEnableAppAuthPopupEnabled](/powershell/module/sharepoint-online/set-spotenant?view=sharepoint-ps#-isenableappauthpopupenabled)` argument on the tenant.

> [!IMPORTANT]
> The SPFx will always first attempt to obtain an access token using the *silent SSO* first with the hidden `<iframe>`.
>
> If the SPFx fails to obtain an access token using the silent SSO approach, it will then fall back to the full page redirect or the popup flow experience.

### Handling the popupEvent

SPFx components that wish to use the **AADTokenProvider** and want to implement the popup flow can do so by handling the [AADTokenProvider.popupEvent](/javascript/api/sp-http-base/aadtokenprovider?view=sp-typescript-latest#@microsoft-sp-http-base-aadtokenprovider-popupevent-member).

> [!TIP]
> Popups are commonly blocked by browsers unless they are initiated by a user action or gesture.

Prior to requesting an access token, your component should implement a handler for the `popupEvent`. For example, this could be done in the `onInit()` method of a web part.

```typescript
const configurableTokenProvider: AadTokenProvider = _AadTokenProviders.configurable as AadTokenProvider;

configurableTokenProvider.popupEvent.add(this, (args: IPopupEventArgs) => {
  args.cancel();     // REQUIRED: to cancel the default popup that is called to open
  args.showPopup();  // initiate the popup flow
});
```

This event will be called by SPFx when the silent SSO process fails and if the tenant has been configured to enable the popup flow for access token acquisition.
