---
title: Create SharePoint Embedded applications
description: Developers can leverage SharePoint's file management features in their applications with SharePoint Embedded, which involves building one component for CRUD operations via Microsoft Graph APIs and another for the user interface. This section walks through the initial creation of a web application capable of conducting CRUD operations on a SharePoint Embedded Container.
ms.date: 11/28/2023
ms.localizationpriority: high
---
# Create SharePoint Embedded applications

Developers can create applications that utilize the powerful file and document management capabilities in SharePoint through SharePoint Embedded. These types of applications have two distinct components. One component is responsible for performing CRUD operations against SharePoint Embedded using Microsoft Graph APIs. The other component implements the interface for users to consume and store the documents stored in SharePoint Embedded. In this section, you’ll complete the initial steps to create a web application that will perform CRUD operations on a SharePoint Embedded Container.

## Introducing SharePoint Embedded

That’s what SharePoint Embedded brings to developers. It provides a faster way for developers to create file and document focused applications. SharePoint Embedded is powered by SharePoint. Developers can integrate the same powerful file and document capabilities that SharePoint has to offer in their own custom applications.

Another way to look at SharePoint Embedded is your custom application leverages SharePoint for all document storage and collaboration features. This effectively uses SharePoint Embedded as a “headless-API” to SharePoint’s document storage system.

## App documents stay in their Microsoft 365 tenant

When a consumer installs/registers a SharePoint Embedded application in their Microsoft 365 tenant, SharePoint Embedded creates another SharePoint partition. This storage partition does not have a user interface but instead, the documents in the partition is only accessible via APIs. This means that all documents will be accessible to the ISV or developer’s application, but the documents will only reside in the consumer’s Microsoft 365 tenant.

## Consumer Microsoft 365 settings apply to app documents

All documents stored in the SharePoint partition created by the SharePoint Embedded app are in the consumer’s Microsoft 365 tenant and therefore are subject to the consumer’s Microsoft 365 tenant settings.

> [!NOTE]
> Learn more about configuring SharePoint Embedded in your Microsoft 365 tenant, the Microsoft Entra ID application, and adding content manually using the REST APIs with Postman, see [SharePoint Embedded - Overview & Configuration](./m01-01-intro.md).

## Understanding different types app permissions and the On-Behalf-Of flow

When creating applications for that access REST APIs like Microsoft Graph and SharePoint Online, different tasks require different types of access. To address this, the OAuth v2.0 is an open standard for authorization used for API access, including Microsoft Graph and SharePoint Online. It provides applications with delegated access to protected resources on behalf of a user. This includes two types of permissions: **App+User** (also known as Delegated) and **App-Only** (or Application).

- **App+User (or Delegated) Permissions**: This model is about a two-party permission model. The application is performing tasks and calling APIs on behalf of a signed-in user. The application gets delegated permissions from the user who signs into it, inheriting the privileges that the user has including any restrictions like not being able to access certain data or take certain actions. These reflect the tasks the user has permitted the app to carry out on their behalf during their session.

    For example, an app might be given permission to send an email on behalf of a user, but if the user does not have permission to send an email, then the app won't be able to send it either.

    This type of permission is often used when you want your app to operate as the signed-in user would, to application scenarios where interaction is on behalf of a user and the permissions should vary by the user who grants consent.

- **App-Only (or Application) Permissions**: App-only permissions, conversely, are used when an app needs to access resources independently of a user. The application gets the permissions directly granted to itself, irrespective of the user permissions. It allows the application to access the API service with its own identity and privileges. This is ideal for background services or daemons that run independent from a user session.

For instance, if you have an application that needs to access all the files in a document library, even those which are not shared with any user, app-only permissions would be the right choice.

Application permissions can only be consented by an administrator because they often grant higher privileges.

In addition to these two options, a third OAuth 2.0 flow, **On-Behalf-Of** (also known as the *OBO* flow) can be used when an application needs to perform a task on behalf of the user. Here’s how the entire OBO flow works:

1. A client application authenticates to the authorization server (like Microsoft Entra ID) and requests an access token for a API (like our project’s API server).
1. The user signs in and allows the application to act on their behalf.
1. The client application receives an access token and refresh token representing the user’s session.
1. When the client application needs to call another service, such as SharePoint Online, on behalf of the user, it sends the access token it obtained earlier in the `Authorization` HTTP header.
1. Our server-side API validates the access token and processes the request. If it needs to call another service (like SharePoint Online) on behalf of the user, it fetches a token from Microsoft Entra ID by presenting this already obtained token.
1. Azure AD issues a 'new' access token for SharePoint Online that our project’s API server can now use to call SharePoint Online.

In a practical scenario dealing with Microsoft Graph or SharePoint Online, when a user wants an app to access their calendar, it's not ideal to have the application sign in for each individual operation. Instead, with the OBO flow, the user only needs to authenticate once and the application will perform all authorized operations on their behalf.

Thus, the OBO flow simplifies user experience and enhances the security of the system by ensuring that permissions are validated each time a chain of calls is made.

## Summary

In this section, you’ll complete the initial steps to create a web application that will perform CRUD operations on a SharePoint Embedded Container.

## Next Steps

Let's get started and continue with the next topic in this tutorial, [Hands on Lab - Setup & configure the SharePoint Embedded environment and web app project](m02-03-hol.md), where you'll set up a project with a server-side REST API, authenticated through Microsoft Entra ID, to interact with SharePoint Embedded Containers via Microsoft Graph API, and a client-side single-page React app to display the contents. Upon completion, you'll have a foundational project ready for further functional expansion in subsequent sections.
