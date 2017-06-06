# Known issues and frequently asked questions

This page is for listing any known issues or to answer any frequently asked questions around SharePoint Framework. 

## Known issues

**Dev certificate issue with Chrome (v58-)**

- *Date - 28th of April*
- *Updated - 2nd of May*

If you are using a Chrome as your development browser, you might have challenges with the developer certificate regardless of executing `gulp trust-dev-cert` command. Chrome has changed it's model for certificate validation starting from version 58 and you might see "Your connection is not private" warning when you are accessing local workbench.

You should updated your Yeoman template packages. We have updated certification creation logic in the *@microsoft/gulp-core-build-serve* package. In existing solutions, you can simply delete this folder and run `npm install` to get the updated package. You will also need to execute `untrust-dev-cert` and `trust-dev-cert` commands in your machine to address the certification creation logic issue. 

## Frequently asked questions

**When will custom actions and JSLink be available in the SharePoint Framework?**

- *Date - 6th of June*

SharePoint Extensions with additional customizations capabilities for the SharePoint Online is now available for dev preview. We do not have public GA date currently. You can start learning how to build these extensions reading following tutorials.

* [Getting started with SharePoint Framework Extensions](http://aka.ms/spfx-extensions)

**Will SharePoint Framework be available in on-premises?**

- *Date - 6th of June*

SharePoint Framework client-side web parts will be released to SharePoint 2016 as part of the Feature Pack 2 (FP2). 

## Additional resources
Please use following resources to provide feedback, comments and questions towards SharePoint engineering. 

* [sp-dev-docs GitHub issue list](https://github.com/SharePoint/sp-dev-docs/issues)
* [SharePoint Developer MS Tech Community space](https://aka.ms/sppnp-community)
