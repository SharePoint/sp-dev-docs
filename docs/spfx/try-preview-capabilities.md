---
title: Try SharePoint Framework preview capabilities
description: Details on how to use new "in preview" packages with SharePoint Framework or newer versions.
ms.date: 03/25/2026
ms.localizationpriority: medium
---

# Try SharePoint Framework preview capabilities

You can try preview capabilities in the SharePoint Framework starting from version 1.5.0. This article outlines how to create SharePoint Framework projects using preview capabilities and what to consider when using them.

> [!IMPORTANT]
> Creating SharePoint Framework projects using preview capabilities is meant for evaluation purposes only. Deploying projects using preview capabilities to production environments is not supported. Microsoft doesn't guarantee that any of the preview capabilities will be released to production tenants. Microsoft can change or remove preview capabilities without any prior notice.

## What are SharePoint Framework preview features?

As the SharePoint Framework evolves, Microsoft would like to get feedback on the different capabilities considered for adding to the SharePoint Framework. At the same time, organizations have been asking for preview of future capabilities both to provide feedback and take them into account for their future projects.

Microsoft introduced the ability to evaluate preview capabilities in SharePoint Framework with version 1.5.0. These capabilities are available through a separate set of npm packages tagged with the _plusbeta_ label and range from additional API options to complete features. Even though commonly labels in SemVer are used to denote a pre-release, in this case, the _plusbeta_ label indicates that the npm package contains additional preview functionality. For example, the _1.5.0-plusbeta_ version of the SharePoint Framework includes all the functionality released in the _1.5.0_ version plus some extra experimental features.

When scaffolding SharePoint Framework projects using the regular SharePoint Framework Yeoman generator (_@microsoft/generator-sharepoint_), you can choose if you want to use the preview capabilities or not. Based on your choice, the generator will create a project which you can run in a production environment or a project that you can use to evaluate the experimental features. You should keep in mind, that there is no guarantee that the capabilities from a _plusbeta_ version will be released in a future version of the SharePoint Framework and using solutions built using the _plusbeta_ version in production is not supported.

> [!NOTE]
> Feedback on provided preview capabilities is welcome using the [issue list](https://aka.ms/spdev-issues) at sp-dev-docs GitHub repository.

## Create SharePoint Framework projects using preview features

You can use the SharePoint Framework Yeoman generator to create projects with preview features (available since version 1.5.0). To include preview capabilities, add the `plusbeta` switch to the `yo` command, for example:

```sh
yo @microsoft/sharepoint --plusbeta
```

After executing this command, the SharePoint Framework Yeoman generator will scaffold a new SharePoint Project using whatever preview capabilities are available at that moment. For additional information about the available preview capabilities, refer to the release notes of the SharePoint Framework Yeoman generator.

If _plusbeta_ switch was used, package.json will reference different packages for the scaffolded project with the _@plusbeta_ tag.
