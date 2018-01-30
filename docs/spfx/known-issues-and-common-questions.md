---
title: SharePoint Framework known issues and frequently asked questions
description: Find answers to issues and FAQ about the SharePoint Framework.
ms.date: 01/12/2018
ms.prod: sharepoint
---


# SharePoint Framework known issues and frequently asked questions

This page is for listing any known issues or to answer any frequently asked questions about SharePoint Framework. 

## Known issues

### Dev certificate issue with Chrome (v58-)

- *Date - April 28, 2017*
- *Updated - May 2, 2017*

If you are using Chrome as your development browser, you might have challenges with the developer certificate regardless of executing the `gulp trust-dev-cert` command. Chrome has changed its model for certificate validation starting from version 58, and you might see a "Your connection is not private" warning when you are accessing the local workbench.

You should update your Yeoman template packages. We have updated certification creation logic in the [*@microsoft/gulp-core-build-serve* package](https://www.npmjs.com/package/@microsoft/gulp-core-build-serve). 

In existing solutions, you can simply delete this folder and run `npm install` to get the updated package. You also need to execute `untrust-dev-cert` and `trust-dev-cert` commands on your machine to address the certification creation logic issue. 

## Frequently asked questions

### When will custom actions and JSLink be available in the SharePoint Framework?

- *Date - June 6, 2017*

SharePoint Framework Extensions with additional customization capabilities is now available in SharePoint Online. You can find more information about SharePoint Framework Extensions from our documentation:

- [SharePoint Framework Extensions Overview](./extensions/overview-extensions.md)
- [SharePoint Framework Extensions Tutorials](./extensions/get-started/build-a-hello-world-extension.md)

### Will SharePoint Framework be available in on-premises?

- *Date - June 6, 2017*

SharePoint Framework client-side web parts on classic pages were released to SharePoint 2016 as part of the Feature Pack 2 (FP2). There are no plans currently to provide SharePoint Framework capabilities to SharePoint 2013. There's no specific list of SharePoint Framework capabilities that will be included in the SharePoint 2019 release.

## See also

Please use following resources to provide feedback, comments, and questions to SharePoint engineering. 

- [GitHub sp-dev-docs issues](https://github.com/SharePoint/sp-dev-docs/issues)
- [SharePoint Developer Microsoft Tech Community space](https://aka.ms/sppnp-community)

