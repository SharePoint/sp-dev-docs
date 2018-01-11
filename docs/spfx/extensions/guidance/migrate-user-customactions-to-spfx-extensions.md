---
title: Migrating User CustomAction / ECB menu items to SharePoint Framework Extensions
description: 
ms.date: 01/11/2018
ms.prod: sharepoint
---

# Migrating User CustomAction / ECB menu items to SharePoint Framework Extensions

SharePoint Framework is a new model for building SharePoint customizations. If you customized SharePoint with user custom actions and custom ECB (Edit Control Block) menu items using the SharePoint Feature Framework, you might be wondering what are the possible advantages of migrating them to the new SharePoint Framework.

First of all, let's introduce the available options when developing SharePoint Framework Extensions:

* **Application Customizer**: extend the native "modern" UI of SharePoint Online by adding custom HTML elements and client-side code to pre-defined placeholders of "modern" pages. At the time of this writing, the available placeholders are the header and the footer of every "modern" page.
* **Command Set**: allow to add custom ECB menu items or custom buttons to the command bar of a list view for a list or a library. You can associate any JavaScript (TypeScript) action to these commands.
* **Field Customizer**: customize the rendering of a field in a list view using custom HTML elements and client-side code.

Depending on what is the target of your customization, you can leverage any of the above flavors.
For example, the **Application Customizers** are a great replacement for the user custom actions.
Moreover, the **Command Sets** are an appropriate replacement for the ECB menu items.

## Benefit of migrating existing SharePoint Feature Framework customizations to the SharePoint Framework

SharePoint Framework have been built thinking about the new SharePoint "modern" experience, which is available in the "modern" team sites and "modern" communication sites, and which targets any device, and any platform.

### The only supported way of customizing no-script "modern" sites 

For sure, one of the main benefits of migrating an old-school SharePoint Feature Framework customizations to the SharePoint Framework is that it is the only supported technique that you have in modern sites for customizing the UI.
In fact, the "modern" sites have the no-script flag enabled, which avoids executing any scripting embedded into the page, as well as any user custom action, which refers to external JavaScript or to embedded JavaScript.
Thus, the old-school user custom actions simply don't work in the "modern" UI. Moreover, the ECB customizations built using the Feature Framework are really limited. For example, you can only define ECB items that do not refer to external JavaScript file, or that do not use embedded JavaScript calls. Thus, if you really want to extend the "modern" UI you need to upgrade to the SharePoint Framework.

### Easier access to information in SharePoint and Office 365

Another really fundamental topic to consider, is that in the old-school model of user custom actions and ECB customizations it was not easy to consume SharePoint content and data. The only way of doing that was by using JSOM (the JavaScript client-side object model of SharePoint) or low-level REST APIs. Moreover, it was almost close to impossible to consume the full set of services of Office 365, unless you autonomously leveraged ADAL.JS (Azure Active Directory Authentication Library for JavaScript) and a bunch of custom JavaScript code.
Nowdays, with the SharePoint Framework and  the SharePoint Framework Extensions it is really easy and straightforward to consume both the SharePoint REST API and the Microsoft Graph.
Thus, you can now create more powerfull solutions, which can consume and interact with the full ecosystem of services provided by Microsoft Office 365.

## Similarities between SharePoint Framework solutions and SharePoint Feature Framework customizations

Nevertheless, both the SharePoint Feature Framework user custom actions and ECB items, and the SharePoint Feature Framework customizations share some similarities. 

### Provisioning model

Both SharePoint Framework Extensions and user custom action or ECB menu item solutions leverage an XML manifest file, which is written with the SharePoint Feature Framework syntax, almost. Thus, the deployment is based on the same tecniques.

### Run as a part of the page

Similarly to user custom actions and ECB of SharePoint Feature Framework, SharePoint Framework Extensions are a part of the page. This gives these solutions access to the page's DOM and allows them to communicate with other components on the same page. Also, it allows developers to more easily make their solutions responsive to adapt to the different form factors on which a SharePoint page could be displayed, including the SharePoint mobile app.
Based on the fact that SharePoint Framework Extensions run as part of the page, whatever resources the particular customization has access to, other elements on the page can access as well. This is important to keep in mind when building solutions that rely on OAuth implicit flow with bearer access tokens or use cookies or browser storage for storing sensitive information. Because SharePoint Framework Extensions run as a part of the page, other elements on that page are able to access all these resources as well.

### Use any library to build your extensions

When building pages customizations using user custom actions you might have used libraries such as jQuery or Knockout to make your customization dynamic and better respond to user interaction. When building SharePoint Framework Extensions you can use any client-side library to enrich your solution, the same way you would have done it in the past. Additional benefit that the SharePoint Framework offers you, is isolation of your script. Even though the web part is executed as a part of the page, its script is packaged as a module allowing for example different extensions on the same page to use a different version of jQuery without colliding with each other. This is a powerful feature that allows you to focus on delivering business value instead of technical migrations and compromising on functionality.

### Run as the current user

In customizations built using user custom actions and ECB menu items, whenever you needed to communicate with SharePoint, all you had to do was to call its API. The client-side solution was running in the browser in the context of the current user, and by automatically sending the authentication cookie along with the request, your solution could directly connect to SharePoint. No additional authentication, like when using SharePoint add-ins, was necessary to communicate with SharePoint. The same mechanism applies to customizations built on the SharePoint Framework, that also run under the context of the currently authenticated user and also don't require any additional authentication steps in order to communicate with SharePoint.

Of course, the security context will be the one of the currently connected user, which implies that from a security perspective you need to be careful when installing any SharePoint Framework Extension in any target site collection.

### Use only client-side code

Both SharePoint Framework Extensions and user custom action or ECB menu item solutions run in the browser and can contain only client-side JavaScript code. Client-side solutions have a number of limitations, such as not being able to elevate permissions in SharePoint or reach out to external APIs that don't support cross-origin communication (CORS) or authentication using OAuth implicit flow. In such cases, the client-side solution could leverage a remote server-side API to perform the necessary operation and return the results to the client.

### Hosting model self-consistent and based on Office 365

Both SharePoint Framework Extensions and user custom action or ECB menu item solutions can be hosted in SharePoint Online, and eventually in the Office 365 CDN service, avoiding any need for external services or hosting environment.

While hosting SharePoint Framework solutions on a CDN offers a number of advantages, it is not required, and you could choose to host their code in a regular SharePoint document library. SharePoint Framework packages (.sppkg files) deployed to the App Catalog specify the URL at which SharePoint Framework can find the solution's code. There are no restrictions with regards to what that URL must be, as long as the user browsing the page with the extension on it, can download the script from the specified location.
Office 365 offers the public CDN capability that allows you to publish files from a specific SharePoint document library to a CDN. Office 365 public CDN strikes a nice balance between the benefits of using a CDN and the simplicity of hosting code files in a SharePoint document library. If your organization doesn't mind their code files being publicly available, using the Office 365 public CDN is an option worth considering.

## Differences between SharePoint Framework solutions and SharePoint Feature Framework customizations

However, between the two development models there are also some significant differences, which you should take into account when designing the architecture of your solutions.

### Run in no-script sites

Because SharePoint Framework solutions, including Extensions, are deployed through the app catalog with a prior approval, they are not subject to the no-script restrictions and work on all "modern" sites.

### Pre-defined set of extensibility points

While a user custom action can embed JavaScript code which can update or literally change the DOM of any part of thhe page, a SharePoint Framework Extension like an Application Customizer can only customize, at the time of this writing, the header and/or the footer of any "modern" page.

Theoretically you could create an Application Customizer that using DOM can completely change the structure of a page, as like as it was with user custom actions. Nevertheless, SharePoint Framework encourages a more structured and reliable approach to customizing SharePoint. Rather than using specific DOM elements to customize SharePoint, SharePoint Framework provides developers with specific hooks and placeholders for customizations, and you should use them only.

### Use TypeScript for building more robust and easier to maintain solution

When building customizations using the user custom actions or the ECB menu items, developers often used plain JavaScript. Often such solutions didn't contain any automated tests and refactoring the code was error-prone.
SharePoint Framework allows developers to benefit of the TypeScript type system when building solutions. Thanks to the type system, errors are caught during development rather than on runtime. Also, refactoring code can be done more easily as changes to the code are safeguarded by TypeScript. Because all JavaScript is valid TypeScript, the entry barrier is low and you can migrate your plain JavaScript to TypeScript gradually over time, increasing the maintainability of your solutions.

### No access to SharePoint JavaScript Object Model by default

When building client-side customizations for the classic SharePoint user experience, many developers used the JavaScript Object Model (JSOM) to communicate with SharePoint. JSOM offered them intellisense and easy access to the SharePoint API in a way similar to the Client-Side Object Model (CSOM). In classic SharePoint pages, the core piece of JSOM was by default present on the page, and developers could load additional pieces to for example communicate with SharePoint Search.
The modern SharePoint user experience doesn't include SharePoint JSOM by default. While developers can load it themselves, the recommendation is to use the REST API instead, or the SharePoint Patterns and Practices JavaScript Core Library (PnP JS Library), which internally uses the SharePoint REST API. Using REST is more universal and interchangeable between the different client-side libraries such as jQuery, Angular or React.
Microsoft is not actively investing in JSOM anymore. If you prefer working with an API, you could alternatively use the PnP JS Library which offers you a fluent API and TypeScript typings.

## Migrate existing customization to the SharePoint Framework Extensions

Migrating existing customizations to the SharePoint Framework Extensions offers both end-users and developers a number of benefits. When considering migrating existing customizations to the SharePoint Framework you can either choose to reuse as much of the existing JavaScript scripts as possible, or to completely rewrite the customization usign TypeScript.

### Reuse existing scripts

When migrating existing customizations to the SharePoint Framework Extensions you can choose to reuse your existing scripts. Even though the SharePoint Framework encourages using TypeScript, you can perfectly well use plain JavaScript and gradually transform it to TypeScript. If you need to support a particular solution for a limited period of time or have a limited budget, this approach might be good enough for you.

However, reusing existing scripts in a SharePoint Framework solutions is not always possible. For example, given the variety of JavaScript libraries, there is no easy way to tell upfront if your existing scripts can be reused in a SharePoint Framework solution or if you will need to rewrite it after all. The only way to determine this, is by trying to move the different pieces to a SharePoint Framework solution and see if they work as expected.

### Rewrite the customization

If you need to support your solution for a longer period of time, would like to make better use of the SharePoint Framework or if it turns out that your existing scripts cannot be reused with the SharePoint Framework, you might need to completely rewrite your customization. While it's more costly than reusing existing scripts, it offers you better results over a longer period of time: a solution that is better performing, easier to maintain and to use.

When rewriting an existing customization to a SharePoint Framework solution, you should start with the desired functionality in mind. For implementing the user experience you should consider using the Office UI Fabric so that your solution looks like an integral part of SharePoint. 

## More information

For further information about how to migrate from user custom actions and custom ECB (Edit Control Block) menu items to SharePoint Framework Extensions you can read the following tutorials:

* [Tutorial: Migrating from UserCustomAction to SharePoint Framework Extensions](./migrate-from-usercustomactions-to-spfx-extensions.md)
* [Tutorial: Migrating from Edit Control Block (ECB) menu item to SharePoint Framework Extensions](./migrate-from-ecb-to-spfx-extensions.md)