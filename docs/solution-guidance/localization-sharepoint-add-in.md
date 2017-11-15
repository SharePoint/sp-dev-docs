---
title: Localization in the SharePoint add-in model
ms.date: 11/03/2017
---
Localization in the SharePoint add-in model
===========================================

Summary
-------

The approach you take to implement localization for Add-ins is different in the new SharePoint Add-in model than it was with Full Trust Code. In a typical Full Trust Code (FTC) / Farm Solution scenario, localization for custom components such as Web Parts, User Controls, and Web Controls was implemented with a combination of resource files, .Net managed code, properties, and declarative code.  All the artifacts were packaged in features deployed via SharePoint Solutions.

In an SharePoint Add-in model scenario, you use JavaScript or the localization capabilities associated with the web technology you build your Add-ins with to implement localization. Depending on the localized resource, you might also use classic resources files, for example when you need to lozalize elements deployed to add-in web using feature framework elements in the add-in definition.

High-Level Guidelines
---------------------

As a rule of a thumb, we would like to provide the following high-level guidelines for implementing localization.

- You must install the appropriate Language Packs in your SharePoint on-premises and Office 365 environments to enable users to create websites in a specific language and culture.
- Using JavaScript to implement localization in SharePoint Add-ins is also an approach you may use to localize content in Script Editor Add-in Parts. 

Localization scenarios
----------------------

There are two distinct scenarios where you may need to implement localization for an Add-in.

- SharePoint-hosted Add-ins
- Provider-hosted Add-ins

Add-in web components or assets
-------------------------
In this scenario localization is applied to the Add-in via JavaScript.

- SharePoint-hosted Add-ins do not have access to server-based resource files in the SharePoint servers, but you have access on the feature element resx files 
- The approach to localize a SharePoint-hosted Add-in and an Office Add-in are very similar because they both use JavaScript.

**When is it a good fit?**

When you are creating a SharePoint-hosted Add-in, using JavaScript is your best fit because you can implement localization with JavaScript and deploy all of the JavaScript files necessary to support localization with the SharePoint-hosted Add-in. You can also take advantage of this approach if your provider hosted add-in contains also specific add-in web.

**Getting Started**

Scenario 2 in the [Core.JavaScriptCustomization (O365 PnP Sample))](https://github.com/SharePoint/PnP/tree/master/Samples/Core.JavaScriptCustomization) demonstrates how to use JavaScript to localize the text in an Add-in as well as attributes associated with the HTML elements in the Add-in.

The [Localize SharePoint Add-ins](https://msdn.microsoft.com/en-us/library/fp179919(v=office.15).aspx) also demonstrates how to use JavaScript to localize assets in the add-in web.

Remote components
-------------------------
In this scenario localization is applied to the Add-in via the localization technologies associated with the web technology hosting the Add-in.

- When ASP.NET is used to implement the Add-in, resource files and JavaScript files are used to localize it.
- When another technology such as PHP, Python, or Ruby are used to implement the Add-in the localization capabilities associated with those platforms is used.

**When is it a good fit?**

When you are creating a Provider-hosted Add-in, using the localization technology that comes with the web hosting platform is the best fit because you are building the Add-in in a way that does not introduce custom code or additional complexity.

**Getting Started**

The following articles describes how to localize Provider-hosted Add-ins with resource files and JavaScript.

- [Localize SharePoint Add-ins (MSDN Article)](https://msdn.microsoft.com/en-us/library/fp179919(v=office.15).aspx)
- [Localize the add-in web, host web, and remote components of an add-in  (MSDN Code Sample)](https://code.msdn.microsoft.com/office/SharePoint-2013-Bookstore-328060fc)

Related links
=============

- [Localize SharePoint Add-ins (MSDN Article)](https://msdn.microsoft.com/en-us/library/fp179919(v=office.15).aspx)
- [Localize the add-in web, host web, and remote components of an add-in  (Office Dev GitHub sample)](https://github.com/SharePoint/SharePoint-Add-in-Localization)
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================

- [VariationsExtensions.cs class (O365 PnP Sample)](https://github.com/SharePoint/PnP-Sites-Core/tree/master/Core/OfficeDevPnP.Core/AppModelExtensions/VariationExtensions.cs)
- Samples and content at [http://aka.ms/OfficeDevPnP](http://aka.ms/OfficeDevPnP)

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D)
- SharePoint 2013 on-premises
