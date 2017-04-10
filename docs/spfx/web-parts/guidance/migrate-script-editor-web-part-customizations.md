# Migrate existing Script Editor Web Part customizations to the SharePoint Framework

SharePoint Framework is a new model for building SharePoint customizations. If you have been building client-side SharePoint solutions using the Script Editor Web Part in the past, you might be wondering what the possible advantages are of migrating them to the new SharePoint Framework. This article highlights the different benefits of migrating existing client-side customizations to the new SharePoint Framework and points out a number of considerations that you should take into account when planning the migration.

> Note: The information in this article applies to customizations built using both the Content- and the Script Editor Web Part. Wherever there is a reference to the Script Editor Web Part, you should read _Content Editor Web Part and Script Editor Web Part_.

## Benefit of migrating existing client-side customizations to the SharePoint Framework

SharePoint Framework has been built from the ground up as a SharePoint development model focusing on client-side development. While it primarily offers extensibility capabilities for modern team sites, customizations built on the SharePoint Framework also work with the classic SharePoint experience. Building your customizations using the SharePoint Framework offers you a number of benefits over using any other SharePoint development model available to date.

### Build once, reuse across all devices

The modern SharePoint user experience has been designed to natively support access to information stored in SharePoint on any device. Additionally, the modern experience supports the SharePoint mobile app. Solutions built using the SharePoint Framework seamlessly integrate with the modern SharePoint experience and can be used across the different devices as well as inside the SharePoint mobile app. Because SharePoint Framework solutions also work with the classic SharePoint experience, they can be also used by organizations that haven't migrated to the modern experience yet.

### More robust and future-proof

In the past, developers were customizing SharePoint by attaching to specific DOM elements in the user interface. Using this approach, they could change the standard user experience or provide additional functionality to end users. Such solutions were however error-prone. Because the SharePoint page DOM was never meant as an extensibility surface, whenever it changed, solutions relying on it would break.

SharePoint Framework offers developers standardized API and extensibility points to build client-side solutions and provide end-users with additional capabilities. Developers can use the SharePoint Framework to build solutions in a supported and future-proof way and don't need to be concerned with how future changes to the SharePoint user interface could affect your solution.

### Easier access to information in SharePoint and Office 365

Microsoft is continuously extending capabilities of SharePoint and Office 365. As organizations make more use of both platforms, it's becoming increasingly important for developers to be able to tap into the information and insights stored in Office 365 to build rich solutions. One of the goals of the SharePoint Framework is to make it easy for developers to connect to various SharePoint and Office 365 APIs.

### Enable users to configure solutions to their needs

Client-side solutions built through script embedding often didn't offer end-users an easy way to configure them to their needs. The only way to configure such solution, was by altering its code or through a custom user interface built specifically for that purpose.

SharePoint Framework client-side web parts offer a standard way for configuring web parts using a property pane - familiar to users who worked with classic web parts in the past. Developers building client-side web parts can choose whether their web part should have a reactive property pane (default), where each change to a web part property is directly reflected in the web part body, or a non-reactive property pane, where changes to web part properties must be explicitly applied.

### Work on no-script sites

To helps organizations govern their customizations, Microsoft released the no-script capability in SharePoint Online. When the tenant or a particular site collection has the no-script flag enabled, customizations relying on script injection and embedding are disabled.

Because SharePoint Framework client-side web part are deployed through the app catalog with a prior approval, they are allowed to run in no-script sites. By default, modern team sites have the no-script setting enabled and it's not possible to embed scripts in these sites. This makes at this moment, using the SharePoint Framework the only supported way to build client-side customizations in modern team sites.

## Similarities between SharePoint Framework solutions and Script Editor Web Part customizations

While built on a new development model using a new toolchain, SharePoint Framework solutions are similar to the Script Editor Web Part customizations you have built in the past. Because they share the same concepts, it makes it easier for you to migrate them to the new SharePoint Framework.

### Run as a part of the page

Similarly to customizations embedded in and Script Editor Web Parts, SharePoint Framework solutions are a part of the page. This gives these solutions access to the page's DOM and allows them to communicate with other components on the same page. Also, it allows developers to more easily make their solutions responsive to adapt to the different form factors on which a SharePoint page could be displayed, including the SharePoint mobile app.

Unlike SharePoint add-ins, SharePoint Framework client-side web parts are not isolated in an iframe. As a consequence, whatever resources the particular client-side web part has access to, other elements on the page can access as well. This is important to keep in mind when building solutions that rely on OAuth implicit flow with bearer access tokens or use cookies or browser storage for storing sensitive information. Because client-side web parts run as a part of the page, other elements on that page are able to access all these resources as well.

### Use any library to build your web part

When building customizations using the Script Editor Web Part you might have used libraries such as jQuery or Knockout to make your customization dynamic and better respond to user interaction. When building SharePoint Framework client-side web parts you can use any client-side library to enrich your solution, the same way you would have done it in the past. Additional benefit that the SharePoint Framework offers you, is isolation of your script. Even though the web part is executed as a part of the page, its script is packaged as a module allowing for example different web parts on the same page to use a different version of jQuery without colliding with each other. This is a powerful feature that allows you to focus on delivering business value instead of technical migrations and compromising on functionality.

### Run as the current user

In customizations built using the Script Editor Web Part, whenever you needed to communicate with SharePoint, all you had to do was to call its API. The client-side solution was running in the browser in the context of the current user, and by automatically sending the authentication cookie along with the request, your solution could directly connect to SharePoint. No additional authentication, like when using SharePoint add-ins, was necessary to communicate with SharePoint. The same mechanism applies to customizations built on the SharePoint Framework, that also run under the context of the currently authenticated user and also don't require any additional authentication steps in order to communicate with SharePoint.

### Use only client-side code

Both SharePoint Framework and Script Editor Web Part solutions run in the browser and can contain only client-side JavaScript code. Client-side solutions have a number of limitations, such as not being able to elevate permissions in SharePoint or reach out to external APIs that don't support cross-origin communication (CORS) or authentication using OAuth implicit flow. In such cases, the client-side solution could leverage a remote server-side API to perform the necessary operation and return the results to the client.

### Host solution in SharePoint

One of the benefits of building SharePoint customizations using Script Editor Web Parts was the fact, that their code could be hosted in a regular SharePoint document library. Comparing to SharePoint add-ins, it required less infrastructure and simplified hosting the solution. Additionally, organizations could use SharePoint permissions to control access to the solution files.

While hosting SharePoint Framework solutions on a CDN offers a number of advantages, it is not required, and you could choose to host their code in a regular SharePoint document library. SharePoint Framework packages (.sppkg files) deployed to the app catalog specify the URL at which SharePoint Framework can find the solution's code. There are no restrictions with regards to what that URL must be, as long as the user browsing the page with the web part on it, can download the script from the specified location.

[Office 365 offers the public CDN capability](https://dev.office.com/blogs/office-365-public-cdn-developer-preview-release) that allows you to publish files from a specific SharePoint document library to a CDN. Office 365 public CDN strikes a nice balance between the benefits of using a CDN and the simplicity of hosting code files in a SharePoint document library. If your organization doesn't mind their code files being publicly available, using the Office 365 public CDN is an option worth considering.

## Differences between SharePoint Framework solutions and Script Editor Web Part customizations

SharePoint customizations built using the SharePoint Framework and Script Editor Web Part are very similar. They all run as a part of the page under the context of the current user and are built using client-side JavaScript. But there are also some significant differences that might influence your architectural decisions and which you should keep in mind when design your solution.

### Run in no-script sites

When building client-side customizations using the Script Editor Web Part, you had to take into account whether the site, where the customization would be used, was a no-script site or not. If the site was a no-script site, you either had to request the admin to disable the no-script setting or build your solution differently, for example using the add-in model.

Because SharePoint Framework solutions are deployed through the app catalog with a prior approval, they are not subject to the no-script restrictions and work on all sites.

### Deployed and updated through IT

Script Editor Web Parts are used to build SharePoint customizations primarily by citizen developers. With nothing more than site owner permissions, citizen developers can build compelling SharePoint customizations that add business value. Whenever the customization needs to be updated, users with the necessary permissions can apply updates to the solution's script files and the changes will be immediately visible to all users.

Script Editor Web Part solutions make it hard for IT organizations to keep track of what customizations are being used and where they are being used. Additionally, organizations can't tell which external scripts are being used in their intranet and have access to their data.

SharePoint Framework gives the control back to the IT. Because SharePoint Framework solutions are deployed and managed centrally in the app catalog, organizations have the opportunity to review the solution before deploying it. Additionally, any updates are deployed via the app catalog as well, allowing organizations to verify and approve them before deployment.

### Focus more on uniform user experience

When building customizations using the Script Editor Web Part, citizen developers owned the complete DOM of their customization. There were no guidelines related to the user experience and how such customization should work. As a result, different developers built customizations in a different way what lead to an inconsistent user experience for the end-users.

One of the goals of the SharePoint Framework is to standardize building client-side customizations so that they are uniform from the deployment, maintenance and user experience point of view. Using [Office UI Fabric](http://dev.office.com/fabric) developers can more easily make their custom solutions look and behave like they were an integral part of SharePoint, simplifying the user adoption. SharePoint Framework toolchain generates package files for the solutions, that are deployed to the app catalog, and script bundles, that are deployed to the hosting location of your choice. Every solution is structured and managed in the same way.

### Don't modify DOM outside of the customization

Script Editor Web Parts were frequently used in the past to modify parts of the page, such as adding buttons to toolbar or changing the heading or branding of the page. Such customizations relied on the existence of specific DOM elements and whenever SharePoint UI would be updated, there was a chance that such customization would break.

SharePoint Framework encourages a more structured and reliable approach to customizing SharePoint. Rather than using specific DOM elements to customize SharePoint, SharePoint Framework provides developers with a public API that they can use to extend SharePoint. At this moment client-side web part are the only shape supported by the SharePoint Framework, but other shapes, such as equivalents of JSLink and User Custom Actions, are being [taken into consideration for the future](https://dev.office.com/sharepoint/docs/spfx/roadmap) so that developers can implement the most common customization scenarios using the SharePoint Framework.

### Distributed as packages

SharePoint client-side customizations often used SharePoint lists and libraries to store their data. When built using the Script Editor Web Part, there was no easy way to automatically provision the necessary prerequisites. Deploying the same customization to another site often meant copying the web part but also correctly recreating and maintaining the necessary data storage.

SharePoint Framework solutions are distributed as packages capable of provisioning their prerequisites, such as fields, content types or lists, automatically. Developers building the package can specify which artifacts are required by the solution, and whenever it's installed in a site, the specified artifacts will be created. This significantly simplifies the process of deploying and managing the solution on multiple sites.

### Use TypeScript for building more robust and easier to maintain solution

When building customizations using the Script Editor Web Part, citizen developers often used plain JavaScript. Often such solutions didn't contain any automated tests and refactoring the code was error-prone.

SharePoint Framework allows developers to benefit of the TypeScript type system when building solutions. Thanks to the type system, errors are caught during development rather than on runtime. Also, refactoring code can be done more easily as changes to the code are safeguarded by TypeScript. Because all JavaScript is valid TypeScript, the entry barrier is low and you can migrate your plain JavaScript to TypeScript gradually over time increasing the maintainability of your solution.

### Can't rely on the spPageContextInfo object

When building reusable client-side customizations, in the past developers used the **spPageContextInfo** JavaScript object to get information about the current page, site or user. This object offered them an easy way to make their solution reusable across the different sites in SharePoint and not have to use fixed URLs.

While the **spPageContextInfo** object is still present on classic SharePoint pages, it cannot be reliably used with modern SharePoint pages and libraries. When building solutions on the SharePoint Framework developers are recommended to use the **[IWebPartContext.pageContext](https://dev.office.com/sharepoint/reference/spfx/sp-webpart-base/iwebpartcontext)** object instead, which contains the context information for the particular solution.

### No access to SharePoint JavaScript Object Model by default

When building client-side customizations for the classic SharePoint user experience, many developers used the JavaScript Object Model (JSOM) to communicate with SharePoint. JSOM offered them intellisense and easy access to the SharePoint API in a way similar to the Client-Side Object Model (CSOM). In classic SharePoint pages, the core piece of JSOM was by default present on the page, and developers could load additional pieces to for example communicate with SharePoint Search.

The modern SharePoint user experience doesn't include SharePoint JSOM by default. While developers can load it themselves, the recommendation is to use the REST API instead. Using REST is more universal and interchangeable between the different client-side libraries such as jQuery, Angular or React.

Microsoft is not actively investing in JSOM anymore. If you prefer working with an API, you could alternatively use the [SharePoint Patterns and Practices JavaScript Core Library](https://github.com/SharePoint/PnP-JS-Core) which offers you a fluent API and TypeScript typings.

## Migrate existing customization to the SharePoint Framework

Migrating existing Script Editor Web Part customizations to the SharePoint Framework offers both end-users and developers a number of benefits. When considering migrating existing customizations to the SharePoint Framework you can either choose to reuse as much of the existing scripts as possible or to completely rewrite the customization.

### Reuse existing scripts

When migrating existing Script Editor Web Part customizations to the SharePoint Framework you can choose to reuse your existing scripts. Even though the SharePoint Framework encourages using TypeScript, you can perfectly well use plain JavaScript and gradually transform it to TypeScript. If you need to support a particular solution for a limited period of time or have a limited budget, this approach might be good enough for you.

Reusing existing scripts in a SharePoint Framework solution is not always possible. SharePoint Framework solutions for example are packaged as JavaScript modules and load asynchronously on a page. Some JavaScript libraries don't work correctly when referenced in a module or have to be referenced in a specific way. Additionally, relying on page events such as `onload` or using the jQuery `ready` function, might lead to undesirable results.

Given the variety of JavaScript libraries, there is no easy way to tell upfront if your existing scripts can be reused in a SharePoint Framework solution or if you will need to rewrite it after all. The only way to determine this, is by trying to move the different pieces to a SharePoint Framework solution and see if they work as expected.

### Rewrite the customization

If you need to support your solution for a longer period of time, would like to make better use of the SharePoint Framework or if it turns out that your existing scripts cannot be reused with the SharePoint Framework, you might need to completely rewrite your customization. While it's more costly than reusing existing scripts, it offers you better results over a longer period of time: a solution that is better performing, easier to maintain and to use.

When rewriting an existing Script Editor Web Part customization to a SharePoint Framework solution, you should start with the desired functionality in mind. For implementing the user experience you should consider using the Office UI Fabric so that your solution looks like an integral part of SharePoint. For specific components such as charts or sliders, you should try looking for modern libraries that are distributed as modules and have TypeScript typings. This will make it easier for you to integrate the component in your solution.

While there is no single answer which component is the best to use for which scenario, the SharePoint Framework is flexible enough to accommodate most popular scenarios and you should be able to transform your existing client-side customizations into fully-featured SharePoint Framework solutions.

### Migration tips

When transforming existing Script Editor Web Part customizations to the SharePoint Framework there are a few common patterns.

#### Move existing code to SharePoint Framework

SharePoint customizations built using the Script Editor Web Part often consist of some HTML markup, included in the web part, and one or more references to JavaScript files. When transforming your existing customization to a SharePoint Framework solution, the HTML markup from the Script Editor Web Part would most likely have to be moved to the **render** method of the SharePoint Framework client-side web part. References to external scripts would be changed to references in the **externals** property in the **config.json** file. Internal scripts would be copied to the web part source folder and referenced from the web part class using **require()** statements.

#### Reference functions from script files

In order to reference functions from script files, these functions need to be defined as an export. Consider an existing JavaScript file, that you would like to use in a SharePoint Framework client-side web part:

```js
var greeting = function() {
  alert('How are you doing?');
  return false;
}
```

In order to be able to call the **greeting** function from the web part class, you would need to change the JavaScript file to:

```js
var greeting = function() {  
  alert('How are you doing?');
  return false;
}

module.exports = {  
  greeting: greeting
};
```

Then, in the web part class you can refer to the script and call the **greeting** function:

```ts
public render(): void {  
  this.domElement.innerHTML = `
    <input type="button" value="Click me"/>`;

  const myScript = require('./my-script.js');
  this.domElement.querySelector('input').addEventListener('click', myScript.greeting);
}
```

#### Execute AJAX calls

Many client-side customizations use jQuery for executing AJAX requests for its simplicity and cross-browser compatibility. If this is all that you're using jQuery for, you can execute the AJAX calls using the standard HTTP client provided with the SharePoint Framework. SharePoint Framework offers you two types of HTTP client: the [SPHttpClient](https://dev.office.com/sharepoint/reference/spfx/sp-http/sphttpclient), meant for executing requests to the SharePoint REST API, and the [HttpClient](https://dev.office.com/sharepoint/reference/spfx/sp-http/httpclient) designed for issuing web requests to other REST APIs. Here is how you would execute a call using the SPHttpClient to get the title of the current SharePoint site:

```ts
this.context.spHttpClient.get(`${this.context.pageContext.web.absoluteUrl}/_api/web?$select=Title`,
SPHttpClient.configurations.v1,
{
  headers: {
    'Accept': 'application/json;odata=nometadata',
    'odata-version': ''
  }
})
.then((response: SPHttpClientResponse): Promise<{Title: string}> => {
  return response.json();
})
.then((web: {Title: string}): void => {
  // web.Title
}, (error: any): void => {
  // error
});
```

## More information

- [Migrate SharePoint JavaScript customizations to SharePoint Framework - reference functions from script files](https://blog.mastykarz.nl/migrate-sharepoint-javascript-customizations-sharepoint-framework-reference-functions/)
- [Migrate SharePoint JavaScript customizations to SharePoint Framework – jQuery AJAX calls and showing data](https://rencore.com/blog/migrate-sharepoint-javascript-customizations-to-sharepoint-framework-jquery-ajax-calls-and-showing-data/)
