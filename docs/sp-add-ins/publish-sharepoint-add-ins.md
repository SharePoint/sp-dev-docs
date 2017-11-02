---
title: Publish SharePoint Add-ins
ms.date: 11/02/2017
ms.prod: sharepoint
---

# Publish SharePoint Add-ins

Find articles and resources to help you publish your SharePoint Add-ins.
 
> [!NOTE]
> The name "apps for SharePoint" is changing to "SharePoint Add-ins." During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint." For details, see [New name for apps for SharePoint](new-name-for-apps-for-sharepoint.md).

## Get started with publishing your add-ins
<a name="bk_gettingstarted"> </a>

You've finished developing your SharePoint Add-in—the final step is making that add-in available to your users. You can do this by publishing the add-in to one of two places:

- **The public Office Store.** Publish your add-in to the Office Store to make the add-in publically available, so that it can be acquired by users of any SharePoint deployment.

- **An internal organization add-in catalog.** Publish your add-ins to an internal organization add-in catalog, hosted on your SharePoint deployment, to make them available to users with access to that SharePoint deployment.

For information about how to package your add-in for publication by using Visual Studio 2012, see [Publish SharePoint Add-ins by using Visual Studio](publish-sharepoint-add-ins-by-using-visual-studio.md).

### Publishing to the Office Store

To publish an add-in to the Office Store, you must first [register as a Microsoft developer](https://sellerdashboard.microsoft.com/Registration). 

When you upload an add-in to the Office Store for publication, Microsoft performs a series of verification checks to ensure your add-in adheres to the add-in content and behavior guidelines. For example, it checks whether the add-in manifest markup is valid and complete and verifies that any SharePoint solution packages (.wsp files) that are included in the add-in do not contain elements that aren't allowed, or SharePoint Features with a scope that is broader than Web. The package is also inspected for objectionable content. If the add-in package passes all tests, it's wrapped into a file and signed by Microsoft.

When you upload your add-in for publication on the Office Store, you can choose the terms of the license you want to offer users when they download it. Use this add-in license to decide: 

- Whether you are offering your add-in for free, trial, or for purchase.
- Whether your add-in can be acquired on a per-user or site basis.

SharePoint does not enforce license terms for add-in usage—it provides a licensing framework that lets you include code logic in your add-in to enforce whatever licensing restrictions you choose. For example, you can include code logic in your add-in that enables users to access certain add-in features if they have a paid license, but not if they have a trial license. For more information, see [License your Office and SharePoint Add-ins](http://msdn.microsoft.com/library/license-your-office-and-sharepoint-add-ins%28Office.15%29.aspx).

### Publishing to an add-in catalog

If you're creating SharePoint Add-ins for your own company's use or a specific corporate client, instead of the general public, you'll likely want to publish your add-in to an internal add-in catalog hosted on SharePoint. A private add-in catalog is a dedicated site collection in a SharePoint web application (or a SharePoint Online tenancy) that hosts document libraries for SharePoint Add-ins and Office Add-ins. Putting the catalog into its own site collection makes it easier for the web application administrator or tenant administrator to limit permissions to the catalog.

Uploading a SharePoint Add-in to a corporate add-in catalog is as easy as uploading any file to a SharePoint document library. You fill out a pop-up form in which you supply the local URL of the add-in package and other information, such as the name of the add-in. When you upload the add-in to an add-in catalog, there are similar checks, and add-ins that do not pass are marked as invalid or disabled in the catalog.

## Deciding where to publish your SharePoint Add-in
<a name="bk_decide"> </a>

The following table offers a comparison of publishing to the Office Store or to an add-in catalog, and lists issues to consider when deciding where to publish your add-in. We recommend you decide where you plan to publish your add-in before you design and develop it; in some cases, such as licensing, where you publish your add-in will affect the design and development of your add-in.

**Table 1. Considerations for where to publish your add-in**

|**Office Store**|**Add-in Catalog**|
|:-----|:-----|
|Add-in is publically available.|Add-in is available to users with access to this SharePoint deployment.|
|Licensing framework is available.|Licensing framework is not available for use.|
|Add-in package is verified by Microsoft for technical and content adherence to policies.|Add-in package verification is performed by SharePoint when add-in is uploaded.|
|You must be signed up with the Microsoft Seller Dashboard to upload add-ins.|No registration with Microsoft is required.|

## Additional resources
<a name="bk_addresources"> </a>

-  [Create or update client IDs and secrets in the Seller Dashboard](http://msdn.microsoft.com/library/create-or-update-client-ids-and-secrets-in-the-seller-dashboard%28Office.15%29.aspx)
-  [Use the Seller Dashboard to submit Office and SharePoint Add-ins and Office 365 apps to the Office Store](http://msdn.microsoft.com/library/use-the-seller-dashboard-to-submit-office-and-sharepoint-add-ins-and-office-365-apps-to-the-office-store%28Office.15%29.aspx)
-  [Validation policies for apps and add-ins submitted to the Office Store (version 2.1)](http://msdn.microsoft.com/library/validation-policies-for-apps-and-add-ins-submitted-to-the-office-store-version-2-1%28Office.15%29.aspx)
-  [Start building Office and SharePoint Add-ins](http://msdn.microsoft.com/library/187f8c8c-1b15-471c-80b5-69a40e67deea.aspx)
-  [License your Office and SharePoint Add-ins](http://msdn.microsoft.com/library/license-your-office-and-sharepoint-add-ins%28Office.15%29.aspx)
-  [Deploying and installing SharePoint Add-ins: methods and options](deploying-and-installing-sharepoint-add-ins-methods-and-options.md)
-  [Tenancies and deployment scopes for SharePoint Add-ins](tenancies-and-deployment-scopes-for-sharepoint-add-ins.md)
-  [Publish SharePoint Add-ins by using Visual Studio](publish-sharepoint-add-ins-by-using-visual-studio.md)
-  [Publishing Office Add-ins Store](http://social.msdn.microsoft.com/Forums/en-US/officestore)
    
 

