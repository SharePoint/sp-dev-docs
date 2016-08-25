# SharePoint Framework

SharePoint Framework, a Page and Part model enables fully supported client-side development for building SharePoint experiences, easy integration with the SharePoint data and support for open source tooling development.

We designed the SharePoint Framework to empower SharePoint developers both inside and outside Microsoft. Our engineers are building modern SharePoint experiences using the SharePoint Framework. You can use the same technology, tools and techniques we use to build more productive experiences and apps that are responsive and mobile-ready from day one.

## History
SharePoint started as an on-premise product back in 2001. It picked up a lot of users along the way, and a large developer community to extend and shape it in ways that we couldn’t foresee. For the most part, the extensibility that customers did followed the same patterns and practices that the developers inside the team used. Things like web parts, SharePoint feature XML, etc. were all the same, and a large majority of the features were written in C#, compiled to DLLs, and deployed to the servers.
 
While that solution works well in an environment with only one enterprise, it doesn’t work and scale in the cloud, where multiple tenants all run side-by-side. Because of this, traditional extensibility models don’t work, and alternate methods were introduced. Two popular ways of customizing SharePoint are through client-side JavaScript injection and the SharePoint add-in model. Both of these solutions have pros and cons. Let’s start with script injection.

### Adding Script to SharePoint

One of the most popular web parts in SharePoint Online is the Script Editor web part, which basically allows a developer to paste JavaScript into the web part and have that JavaScript execute when the page renders. It’s fairly simple and rudimentary, but effective. It runs in the same browser context as the page, and is in the same DOM, so it can interact with other controls on the page.  It is also relatively performant, and is simple to use. 

There are a couple of downsides to this approach, though. First, while you can package up your solution so that end users can drop the control onto the page, there isn’t really an easy way to provide configuration options. Additionally, the end user can edit the page and modify the script, breaking the web part. Another big problem is that the script editor web part is not marked as _"Safe For Scripting"_.  Most self-service site collections (my-sites, team sites, group sites, etc.) have a feature known as _"NoScript"_ enabled. Technically, it is the removal of Add/Customize Pages (ACP) permission in SharePoint. What this means for a developer though, is that the script editor web part will be blocked from executing on these sites.  

### Add-in model

The current option for solutions that run in NoScript sites is the add-in/app-part model. This implementation creates an _iFrame _where the actual experiences lives and executes. The main strength here is that since it is external to the system and has no access to the current DOM/connection, it is easier to trust and deploy for information workers. They can be installed on NoScript sites by end users. 

There are a couple of downsides though. First, they run in an _iFrame_, which has a collection of issues associated with them. They are slower than the script editor web part, as it winds up being a completely new request to another page. This page has to go through authentication and authorization, make its own calls to get SharePoint data, load various JavaScript libraries and more. Whereas a script editor might typically take, for example, 100ms to load and render while an app-part might take upwards of 2 seconds or more. Additionally, the _iFrame _ boundary makes it more difficult to create responsive designs, inherit CSS and theming information, etc. However, it does have a heightened sense of security, which _can be useful_ from the developers perspective (my page is inaccessible by other controls on the page) and from the end users perspective (the control has no access to my connection to Office 365).

Additionally, neither of these solutions work for the product team itself. The product team historically created web parts as full trust C# assemblies that were installed on the cloud servers. However, the majority of our current development work is almost entirely JavaScript running in a browser making REST API calls to the SharePoint and Office 365 back end workloads. C# assemblies don’t work in this world, so we also needed an updated development model.
 
## Introducing the SharePoint Framework

The SharePoint Framework (SPFx) tries to build on the two primary existing solutions to create an updated system for developing on top of SharePoint, both on-premises and Online. It’s used internally by the product team, and the same code is usable by 3rd party developers. There are still some circumstances where the existing add-in model is the right choice, and we will continue to support and improve the add-in model over time. In fact, one of projects is to ensure that add-ins can be added to modern pages. 

However, for many customers and scenarios, the SPFx part model is preferable. Here are a few key points:

* It runs in the context of the current user and connection in the browser. No iFrames.
* The controls are rendered in the normal page DOM.
* The controls are responsive and accessible by nature.
* There is a life cycle that the developer is involved in. 
   * It’s not just _render_, but _load_, _serialize _and _deserialize_, _configuration changes_, etc.
* It is framework agnostic – You can use any browser framework that you like – React, Handlebars, knockout, angular – take your pick.
* The tool chain is based on common open source client development tools like npm, TypeScript, yeoman, webpack, gulp, etc.
* Performance is key.
* SPFx client-side solutions that are approved by the tenant administrators (or their delegates) can be used by end users on all sites – even self service created sites like teams, groups, personal, etc. 
* Can be deployed in both classic web part and publishing pages as well as the modern pages.
 
For the most part, the runtime model is similar to the script editor web part, but beefed up substantially. There is a robust client API that can be used, an HttpClient object that handles authentication to SharePoint and Office 365 for you, contextual information, easy property definition and configuration and other goodies. The biggest change is going to be the toolchain as it is based on common open source client development tools like npm, TypeScript, yeoman, WebPack, Gulp, etc.”.  

We know that a lot of developers are used to C# and Visual Studio, or pure JavaScript. This will require you, as developers, to learn some new skills if you are not familiar with client-side JavaScript development. We think the effort is very worthwhile (having made it ourselves), and we’re doing all we can to make it as easy as possible. A large amount of your knowledge is completely transferable. You’ll be using the same REST services that you were likely using (or JSOM if that is more your style). The data model has not changed in any way.  If you are a C# developer, we feel that TypeScript is a nice transition into the JavaScript world - It’s essentially a strongly typed language that compiles into JavaScript, created by Anders Hejlsberg, the man who brought us C# (and Delphi and Turbo Pascal). The choice of IDE is broad – many of us use the cross platform IDE VS Code, and there is a plug-in for Visual Studio to work with the new development environment as well.  Others use products like Sublime, ATOM etc., Lots of choice here.

## Getting Started
We’ve created a series of tutorials to introduce the SharePoint Framework. You can find them here. They will walk you through building and testing your first web part, deploying your code to a CDN, uploading and activating your web part in SharePoint, and adding it to classic and modern pages. We’ve also created a more rich ToDo web part that shows a more complex web part. If you are keen to look into our API documentation, we have it here. 

We know you already have questions. Head over to [SharePoint Stackexchange](http://sharepoint.stackexchange.com/) and tag your questions and comments with #spfx, #spfx-webparts, and #spfx-tooling.
 
## Moving Forward
This is the first preview release.  We know we’re not finished, and we plan on releasing updates and refinements frequently. While we are in preview mode, we’ll occasionally make breaking changes around API names, flows, etc. based on feedback and experience. Once we go to our official release, we’ll make sure we are backwards compatible, so that the solutions you write today continue to work in the future without you needing to make changes.