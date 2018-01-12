---
title: Known issues and frequently asked questions
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Known issues and frequently asked questions

This page is for listing any known issues or to answer any frequently asked questions around SharePoint Framework. 

## Known issues

**Dev certificate issue with Chrome (v58-)**

- *Date - 28th of April*
- *Updated - 2nd of May*

If you are using Chrome as your development browser, you might have challenges with the developer certificate regardless of executing `gulp trust-dev-cert` command. Chrome has changed its model for certificate validation starting from version 58 and you might see "Your connection is not private" warning when you are accessing the local workbench.

You should update your Yeoman template packages. We have updated certification creation logic in the *@microsoft/gulp-core-build-serve* package. In existing solutions, you can simply delete this folder and run `npm install` to get the updated package. You will also need to execute `untrust-dev-cert` and `trust-dev-cert` commands in your machine to address the certification creation logic issue. 

## Frequently asked questions

**When will custom actions and JSLink be available in the SharePoint Framework?**

- *Date - 6th of June*

SharePoint Framework Extensions with additional customizations capabilities is now available in SharePoint Online. You can find more details on the SharePoint Framework extensions from our documentation.

- [SharePoint Framework Extensions Overview](./extensions/overview-extensions.md)
- [SharePoint Framework Extensions Tutorials](./extensions/get-started/build-a-hello-world-extension.md)

**Will SharePoint Framework be available in on-premises?**

- *Date - 6th of June*

SharePoint Framework client-side web parts on classic pages were released to SharePoint 2016 as part of the Feature Pack 2 (FP2). There are no plans currently to provide SharePoint Framework capabilities to SharePoint 2013. There's no specific list of SharePoint Framework capabilities which will be included in the SharePoint 2019 release.

## See also
Please use following resources to provide feedback, comments and questions towards SharePoint engineering. 

* [sp-dev-docs GitHub issue list](https://github.com/SharePoint/sp-dev-docs/issues)
* [SharePoint Developer MS Tech Community space](https://aka.ms/sppnp-community)
- [SharePoint Framework Overview](../sharepoint-framework-overview.md)
