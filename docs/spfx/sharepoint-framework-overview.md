# Overview of the SharePoint Framework

>**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production enviornments.

The SharePoint Framework (SPFx) is a page and part model that enables fully supported client-side development for building SharePoint experiences, easy integration with SharePoint data, and support for open source tooling development. With the SharePoint Framework, you can use modern web technologies and tools in your preferred development environment to build productive experiences and apps that are responsive and mobile-ready from day one. The SharePoint Framework works both on-premises and online.
 
The SharePoint Framework has the following features:

* It runs in the context of the current user and connection in the browser. There are no iFrames.
* The controls are rendered in the normal page DOM.
* The controls are responsive and accessible by nature.
* The developer is involved in the life cycle. There's more than just **render**, such as **load**, **serialize** and **deserialize**, **configuration changes**, and more.
* It is framework agnostic. You can use any browser framework that you like; React, Handlebars, Knockout, Angular – take your pick.
* The toolchain is based on common open source client development tools like npm, TypeScript, Yeoman, webpack, and gulp.
* Performance is great.
* SPFx client-side solutions that are approved by the tenant administrators (or their delegates) can be used by end users on all sites; even self-service created sites like teams, groups, personal, etc. 
* Can be deployed in both classic web part and publishing pages as well as the modern pages.
 
The runtime model is similar to the script editor web part, but improved substantially. There is a robust client API that can be used, an HttpClient object that handles authentication to SharePoint and Office 365 for you, contextual information, easy property definition and configuration, and other goodies. The biggest change is the toolchain which is based on common open source client development tools like npm, TypeScript, Yeoman, webpack, and gulp.

Many developers are already working with C# and Visual Studio, or just JavaScript. You may have to learn a few new skills if you are not familiar with client-side JavaScript development. A large amount of your knowledge is completely transferable. You’ll be using the same REST services that you were likely using (or JSOM if that is more your style). The data model has not changed in any way.  And if you are a C# developer, TypeScript is a nice transition into the JavaScript world. The choice of IDE is up to you. Many developers like to use the cross-platform IDE Visual Studio Code, and there is a plug-in for Visual Studio to work with the new development environment as well.  Many developers also use products like Sublime, and ATOM. Use what works best for you.

## History
SharePoint started as an on-premise product back in 2001. It picked up a lot of users along the way, and a large developer community to extend and shape it in ways that we couldn’t foresee. For the most part, the extensibility that developers engaged in followed the same patterns and practices that the developers in the SharePoint team at Microsoft used. Things like web parts, SharePoint feature XML, and more, were all the same. Also a large majority of the features were written in C#, compiled to DLLs, and deployed to the servers.
 
While that solution works well in an environment with only one enterprise, it doesn’t work and scale in the cloud, where multiple tenants all run side-by-side. Because of this, traditional extensibility models don’t work, and alternate methods were introduced. Two popular ways of customizing SharePoint are through client-side JavaScript injection and the SharePoint add-in model. Both of these solutions have pros and cons. Let’s start with script injection.

### Adding Script to SharePoint

One of the most popular web parts in SharePoint Online is the Script Editor web part, which allows a developer to paste JavaScript into the web part and have that JavaScript execute when the page renders. It’s fairly simple and rudimentary, but effective. It runs in the same browser context as the page, and is in the same DOM, so it can interact with other controls on the page.  It is also relatively performant, and is simple to use. 

There are a couple of downsides to this approach, though. First, while you can package up your solution so that end users can drop the control onto the page, there isn’t really an easy way to provide configuration options. Additionally, the end user can edit the page and modify the script, breaking the web part. Another big problem is that the script editor web part is not marked as **"Safe For Scripting"**.  Most self-service site collections (my-sites, team sites, group sites, etc...) have a feature known as **"NoScript"** enabled. Technically, it is the removal of the Add/Customize Pages (ACP) permission in SharePoint. What this means for a developer though, is that the script editor web part will be blocked from executing on these sites.  

### Add-in model

The current option for solutions that run in NoScript sites is the add-in/app-part model. This implementation creates an **iFrame** where the actual experience resides and executes. The main strength here is that since it is external to the system and has no access to the current DOM/connection, it is easier to trust and deploy for information workers. They can be installed on NoScript sites by end users. 

There are a couple of downsides though. First, they run in an **iFrame**, which has a collection of issues associated with them. They are slower than the script editor web part, as it winds up being a completely new request to another page. The page has to go through authentication and authorization, make its own calls to get SharePoint data, load various JavaScript libraries, and more. A script editor might typically take, for example, 100 milliseconds to load and render while an app-part might take upwards of 2 seconds or more. Additionally, the **iFrame** boundary makes it more difficult to create responsive designs, and inherit CSS and theming information. However, it does have stronger security, which can be useful from the developer's perspective (my page is inaccessible by other controls on the page) and from the end user's perspective (the control has no access to my connection to Office 365).

Additionally, neither of these solutions work for the SharePoint product team at Microsoft. The product team historically created web parts as full trust C# assemblies that were installed on the cloud servers. However, the majority of current development work is almost entirely JavaScript running in a browser making REST API calls to the SharePoint and Office 365 back end workloads. C# assemblies don’t work in this world, so an updated development model was needed.

## Moving forward
This is the first preview release. The SharePoint product team is not finished, and there will be more updates and refinements in the future. While the SharePoint Framework is in preview, there will be occasional breaking changes around API names, flows, and more, based on your feedback and experience. Once the SharePoint Framework is out of preview all future updates will be backwards compatible, so that the solutions you write continue to work in the future without requiring you to make changes.

## Questions
If you have any questions, head over to [SharePoint Stackexchange](http://sharepoint.stackexchange.com/) and tag your questions and comments with #spfx, #spfx-webparts, and #spfx-tooling.
