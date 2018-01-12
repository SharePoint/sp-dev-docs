---
title: Migrating user custom actions and ECB menu items to SharePoint Framework Extensions
description: Benefits of migrating, along with similarities and differences between the platforms.
ms.date: 01/11/2018
ms.prod: sharepoint
---

# Migrating user custom actions and ECB menu items to SharePoint Framework Extensions

SharePoint Framework is a new model for building SharePoint customizations. If you customized SharePoint with user custom actions and custom Edit Control Block (ECB) menu items by using the SharePoint Feature Framework, you might be wondering what the possible advantages of migrating them to the new SharePoint Framework are.

First, let's introduce the available options when developing SharePoint Framework Extensions:

* **Application Customizer**. Extend the native "modern" UI of SharePoint Online by adding custom HTML elements and client-side code to pre-defined placeholders of "modern" pages. At the time of this writing, the available placeholders are the header and the footer of every "modern" page.
* **Command Set**. Add custom ECB menu items or custom buttons to the command bar of a list view for a list or a library. You can associate any JavaScript (TypeScript) action to these commands.
* **Field Customizer**. Customize the rendering of a field in a list view by using custom HTML elements and client-side code.

Depending on the target of your customization, you can leverage any of the above flavors. For example, the **Application Customizers** are a great replacement for the user custom actions. Moreover, the **Command Sets** are an appropriate replacement for the ECB menu items.

## Benefits of migrating existing SharePoint Feature Framework customizations to the SharePoint Framework

SharePoint Framework was built thinking about the new SharePoint "modern" experience, which is available on the "modern" team sites and "modern" communication sites, and which targets any device and any platform.

### The only supported way of customizing no-script "modern" sites 

One of the main benefits of migrating old-school SharePoint Feature Framework customizations to the SharePoint Framework is that it is the only supported technique that you have on modern sites for customizing the UI.

In fact, the "modern" sites have the no-script flag enabled, which avoids executing any scripting embedded into the page, as well as any user custom action, which refers to external JavaScript or to embedded JavaScript.

Thus, the old-school user custom actions simply don't work in the "modern" UI. Moreover, the ECB customizations built by using the Feature Framework are very limited. For example, you can only define ECB items that do not refer to external JavaScript files, or that do not use embedded JavaScript calls. Thus, if you really want to extend the "modern" UI, you need to upgrade to the SharePoint Framework.

### Easier access to information in SharePoint and Office 365

Another fundamental topic to consider is that in the old-school model of user custom actions and ECB customizations, it was not easy to consume SharePoint content and data. The only way of doing that was by using JSOM (the JavaScript client-side object model of SharePoint) or low-level REST APIs. Moreover, it was almost impossible to consume the full set of services of Office 365, unless you autonomously leveraged ADAL.JS (Azure Active Directory Authentication Library for JavaScript) and custom JavaScript code.

Now, with the SharePoint Framework and the SharePoint Framework Extensions, it is easy and straightforward to consume both the SharePoint REST API and Microsoft Graph. You can now create more powerful solutions, which can consume and interact with the full ecosystem of services provided by Microsoft Office 365.

## Similarities between SharePoint Framework solutions and SharePoint Feature Framework customizations

Nevertheless, both the SharePoint Feature Framework user custom actions and ECB items and the SharePoint Feature Framework customizations share some similarities. 

### Provisioning model

Both SharePoint Framework Extensions and user custom actions or ECB menu item solutions leverage an XML manifest file, which is written with the SharePoint Feature Framework syntax. Thus, the deployment is based on the same techniques.

### Run as a part of the page

Similar to user custom actions and ECB of SharePoint Feature Framework, SharePoint Framework Extensions are a part of the page. This gives these solutions access to the page's DOM and allows them to communicate with other components on the same page. Also, it allows developers to more easily make their solutions responsive to adapt to the different form factors on which a SharePoint page could be displayed, including the SharePoint mobile app.

Because SharePoint Framework Extensions run as part of the page, whatever resources the customization has access to, other elements on the page can access as well. This is important to keep in mind when building solutions that rely on OAuth implicit flow with bearer access tokens or use cookies or browser storage for storing sensitive information. Because SharePoint Framework Extensions run as a part of the page, other elements on that page can access all these resources as well.

### Use any library to build your extensions

When building page customizations by using user custom actions, you might have used libraries such as jQuery or Knockout to make your customization dynamic and better respond to user interaction. When building SharePoint Framework Extensions, you can use any client-side library to enrich your solution, the same way you would have done in the past.

An additional benefit that the SharePoint Framework offers you is isolation of your script. Even though the web part is executed as a part of the page, its script is packaged as a module allowing, for example, different extensions on the same page to use a different version of jQuery without colliding with each other. This is a powerful feature that allows you to focus on delivering business value instead of technical migrations and compromising on functionality.

### Run as the current user

In customizations built by using user custom actions and ECB menu items, whenever you needed to communicate with SharePoint, all you had to do was to call its API. The client-side solution was running in the browser in the context of the current user, and by automatically sending the authentication cookie along with the request, your solution could directly connect to SharePoint. No additional authentication, such as when using SharePoint Add-ins, was necessary to communicate with SharePoint.

The same mechanism applies to customizations built on the SharePoint Framework that also run under the context of the currently authenticated user and don't require any additional authentication steps to communicate with SharePoint. Of course, the security context is that of the currently connected user, which implies that from a security perspective, you need to be careful when installing any SharePoint Framework Extension in any target site collection.

### Use only client-side code

Both SharePoint Framework Extensions and user custom action or ECB menu item solutions run in the browser and can contain only client-side JavaScript code. Client-side solutions have several limitations, such as not being able to elevate permissions in SharePoint, or reach out to external APIs that don't support cross-origin communication (CORS), or authentication using OAuth implicit flow. In such cases, the client-side solution could leverage a remote server-side API to perform the necessary operation and return the results to the client.

### Hosting model self-consistent and based on Office 365

Both SharePoint Framework Extensions and user custom action or ECB menu item solutions can be hosted on SharePoint Online, and eventually in the Office 365 CDN service, avoiding any need for external services or hosting environments.

While hosting SharePoint Framework solutions on a CDN offers many advantages, it is not required, and you could choose to host the code in a SharePoint document library. SharePoint Framework packages (.sppkg files) deployed to the App Catalog specify the URL at which SharePoint Framework can find the solution's code. If the user browsing the page with the extension can download the script from the specified location, there are no restrictions with regards to what that URL must be.

Office 365 offers the public CDN capability that allows you to publish files from a specific SharePoint document library to a CDN. Office 365 public CDN strikes a nice balance between the benefits of using a CDN and the simplicity of hosting code files in a SharePoint document library. If your organization doesn't mind their code files being publicly available, using the Office 365 public CDN is an option worth considering.

## Differences between SharePoint Framework solutions and SharePoint Feature Framework customizations

However, between the two development models there are also some significant differences, which you should consider when designing the architecture of your solutions.

### Run in no-script sites

Because SharePoint Framework solutions, including Extensions, are deployed through the App Catalog with a prior approval, they are not subject to the no-script restrictions and work on all "modern" sites. 

### Pre-defined set of extensibility points

While a user custom action can embed JavaScript code that can update or literally change the DOM of any part of thhe page, a SharePoint Framework Extension such as an Application Customizer can only customize, at the time of this writing, the header and/or the footer of any "modern" page.

Theoretically, you could create an Application Customizer that uses DOM to completely change the structure of a page, like with user custom actions. Nevertheless, SharePoint Framework encourages a more structured and reliable approach to customizing SharePoint. Rather than using specific DOM elements to customize SharePoint, SharePoint Framework provides developers with specific hooks and placeholders for customizations, and you should use them only.

### Use TypeScript for building more robust and easier to maintain solutions

When building customizations using the user custom actions or the ECB menu items, developers often used plain JavaScript. Often such solutions didn't contain any automated tests, and refactoring the code was error-prone.

SharePoint Framework allows developers to benefit from the TypeScript type system when building solutions. Thanks to the type system, errors are caught during development rather than at runtime. Also, refactoring code can be done more easily because changes to the code are safeguarded by TypeScript. Because all JavaScript is valid TypeScript, the entry barrier is low, and you can migrate your plain JavaScript to TypeScript gradually over time, increasing the maintainability of your solutions.

### No access to SharePoint JavaScript Object Model by default

When building client-side customizations for the classic SharePoint user experience, many developers used the JavaScript Object Model (JSOM) to communicate with SharePoint. JSOM offered them IntelliSense and easy access to the SharePoint API in a way similar to the Client-Side Object Model (CSOM). In classic SharePoint pages, the core piece of JSOM was by default present on the page, and developers could load additional pieces to communicate with SharePoint Search, for example.

The modern SharePoint user experience doesn't include SharePoint JSOM by default. While developers can load it themselves, the recommendation is to use the REST API instead, or the SharePoint Patterns and Practices JavaScript Core Library (PnP JS Library), which internally uses the SharePoint REST API. Using REST is more universal and interchangeable between the different client-side libraries such as jQuery, Angular, or React.

Microsoft is not actively investing in JSOM anymore. If you prefer working with an API, you could alternatively use the PnP JS Library, which offers you a fluent API and TypeScript typings.

## Migrate existing customization to the SharePoint Framework Extensions

Migrating existing customizations to the SharePoint Framework Extensions offers both end-users and developers many benefits. When considering migrating existing customizations to the SharePoint Framework, you can either choose to reuse as much of the existing JavaScript scripts as possible, or to completely rewrite the customization by using TypeScript.

### Reuse existing scripts

When migrating existing customizations to the SharePoint Framework Extensions, you can choose to reuse your existing scripts. Even though the SharePoint Framework encourages using TypeScript, you can use plain JavaScript and gradually transform it to TypeScript. If you need to support a solution for a limited period or have a limited budget, this approach might be good enough for you.

However, reusing existing scripts in a SharePoint Framework solution is not always possible. For example, given the variety of JavaScript libraries, there is no easy way to tell upfront if your existing scripts can be reused in a SharePoint Framework solution or if you need to rewrite them after all. The only way to determine this is by trying to move the different pieces to a SharePoint Framework solution and see if they work as expected.

### Rewrite the customization

If you need to support your solution for a longer period or would like to make better use of the SharePoint Framework, or if it turns out that your existing scripts cannot be reused with the SharePoint Framework, you might need to completely rewrite your customization. While it's costlier than reusing existing scripts, it offers you better results over a longer period: a solution that is better performing and easier to maintain and to use.

When rewriting an existing customization to a SharePoint Framework solution, you should start with the desired functionality in mind. For implementing the user experience, you should consider using the Office UI Fabric so that your solution looks like an integral part of SharePoint.

## See also

- [Tutorial: Migrating from UserCustomAction to SharePoint Framework Extensions](./migrate-from-usercustomactions-to-spfx-extensions.md)
- [Tutorial: Migrating from Edit Control Block (ECB) menu item to SharePoint Framework Extensions](./migrate-from-ecb-to-spfx-extensions.md)
- [Overview of SharePoint Framework Extensions](../overview-extensions.md)