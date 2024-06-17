---
title: Isolated web parts
description: Overview of the isolated web parts capability in the SharePoint Framework
ms.date: 05/39/2024
ms.localizationpriority: high
---

# Isolated web parts

Using this capability, you can build web parts that securely communicate with APIs secured with Azure AD without exposing the access token to other components on the page or even scripts in the tenant.

> [!IMPORTANT]
> The isolated web parts feature has been deprecated and will be retired as of April 2, 2026. Check the [retirement announcement](./isolated-web-parts-retirement.md) to learn more.

## Why isolated web parts

To allow your SharePoint Framework solutions to securely access APIs secured with Azure AD, you can use the API management to specify which APIs can be accessed by scripts in your tenant and with which permissions. Next, using the SharePoint Framework, you can easily retrieve an access token for the specific API. While it significantly simplifies communicating with APIs secured with Azure AD, it allows all scripts, not just specific SharePoint Framework solutions, to obtain an access token for any of the approved APIs. If one of the scripts you use in your tenant was exploited, then it could access any of the approved APIs on behalf of the current user.

Isolated web parts introduce a new way to isolate access to APIs secured with Azure AD and ensure that only specific SharePoint Framework web parts are allowed to obtain an access token for the particular API.

## How isolated web parts work

> [!IMPORTANT]
> The isolated web parts capability is available only in SharePoint Framework v1.8 and later.
> Isolated web parts are only supported on modern pages. While you might be able to add isolated web parts to classic pages, upon publishing, the web part will not render and generate an error.
> Isolated web parts can only be installed into the tenant app catalog.  They will not work from a Site Collection app catalog.

![Architectural overview illustrating how isolated web parts work](../../images/isolated-web-parts.png)

Solutions using the isolated web parts capability, have a specific flag set in the project metadata in the **\*.sppkg** file. When deploying these solutions to the app catalog, all API permission requests are specified as isolated.

After approving an isolated API permission request, SharePoint will create a separate Azure AD application in the Azure AD linked to the Microsoft 365 tenant. This Azure AD application is specific to the SharePoint Framework solution that requested API permissions and will have set OAuth permissions as requested by that solution. The return URL of that Azure AD application, which is used by the OAuth implicit flow, will be set to a unique domain that is tied to that specific SharePoint Framework application.

All web parts from solutions using isolated permissions, when added to a page, will be displayed using an `<iframe>` pointing to a unique domain tied to the particular SharePoint Framework solution. This way, SharePoint Framework can enforce unique API permissions and ensure that no other solution or script in the tenant can obtain an access token to these APIs.

### Scaffolding a project that uses isolated permissions

When you scaffold a new SharePoint Framework project that targets SharePoint Online, the SharePoint Framework Yeoman generator will display the following prompt:

**Will the components in the solution require permissions to access web APIs that are unique and not shared with other components in the tenant?**:

If you answer **Yes**, the generator will add a flag to your project's configuration in the **config/package-solution.json** file, by setting the `isDomainIsolated` property to `true`. Because the isolated web parts capability applies only to web parts, the generator will only allow you to create web parts in your project.

> [!IMPORTANT]
> Theoretically, you could manually create a SharePoint Framework extension in a project that uses isolated permissions. This is, however a bad idea, something you should never do and is not supported.
>
> If the extension you have added communicated with APIs secured with Azure AD, it wouldn't be able to retrieve the access token in an isolated way and would fail on runtime.

### Communicating with APIs

Despite the web part using isolated permissions, there's nothing specific to how you obtain an access token to an API secured with Azure AD in your code. Additionally, even though on runtime isolated web parts will be loaded inside an `<iframe>` pointing to a unique domain, you can communicate with SharePoint REST API, the same way as you would in non-isolated web parts.

### Deploying solutions with isolated web parts

Solutions with isolated web parts are deployed the same way as regular SharePoint Framework solutions. The only difference is, that the API permission requests are deployed as isolated. This is clearly visible on the API management page, where the API permission requests are grouped per solution to which they apply.

API permissions granted on the tenant-level can be used by any SharePoint Framework solution or piece of script on the tenant. Isolated permissions on the other hand, can only be used by the solution that requested them.

> [!IMPORTANT]
> It might take up to 24 hours for isolated web parts to be available for consumption once deployed. During that time, users can receive a "The redirect URI specified in the request does not match the redirect URIs configured for the application" AADSTS50011 error.

### Using isolated web parts

When added to the page, isolated web parts are displayed using an iframe. This `<iframe>` points to a unique domain assigned to the SharePoint Framework solution where the web part is located. This domain is also referenced in the return URL of the Azure AD application created to host the isolated permissions for the particular SharePoint Framework solution. Using the unique domain allows to ensure, that only web parts from the particular SharePoint Framework solution can obtain an access token for the isolated set of permissions.

### Property pane for isolated web parts

Property pane for isolated web parts is rendered as a separate `<iframe>` with _additional_ instance of the same web part. It brings some specifics that developers should be aware of:

- Isolated web part's lifecycle events such as `render` will be called twice: once for the web part itself and once for the property pane.
- The property pane's `<iframe>` size is limited to the panel's dimensions. Take it into consideration if you plan to use modals or any wide controls in your property pane.

### Disposal of isolated web parts

`onDispose` method for isolated web parts _may not be called_ as `<iframe>` removal from DOM automatically cleans all the resources, including socket connections, associated with the iframe's document.

### Upgrading existing project to use isolated permissions

If you're upgrading an existing SharePoint Framework project to v1.8.0 and want to use the isolated permissions capability, you can do it, by setting in the **config/package-solution.json** file, the `isDomainIsolated` property to `true`. You should ensure, that your project contains only web parts.

After changing the project to use isolated permissions, you should redeploy your project. This will issue new API permission requests, isolated to your solution, which will need to be approved by the tenant admin.

### Removing solutions with isolated permissions

When approving isolated API permissions, SharePoint creates a dedicated Azure AD application specific for the SharePoint Framework solution that requested permissions. When the SharePoint Framework solution is removed from the app catalog, the API permissions and the Azure AD application aren't removed.
