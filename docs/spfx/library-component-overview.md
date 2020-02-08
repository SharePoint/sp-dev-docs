---
title: Using library component type in SharePoint Framework
description: Using library component type in SharePoint Framework
ms.date: 07/16/2019
ms.prod: sharepoint
localization_priority: Priority
---

# Using library component type in SharePoint Framework

Library component type enables you to have independently versioned and deployed code, which is served automatically for the SharePoint Framework components with a deployment through tenant app catalog. Library component provides you alternative option to create shared code, which can be then used and referenced cross all the components in the tenant.

You can create a library component solution by selecting **Component Type** to be `Library` in the Yeoman solution creation flow.

Library components have following characteristics:

* You can only host one library component version at the time in a tenant
* It is not supported to have other component types included in a solution which contains library component
* You will need to reference library component type during development time from a package manager or using `npm link` to be able to bundle solutions which are dependent on it
* Library components are not supported when solution is deployed using site collection app catalog

You can reference library component dependency in the SharePoint solution by defining the dependency in the package.json file. When this kind of dependency exists in a solution package, SharePoint will automatically load the dependent component for the page. If library reference is not resolved, that can cause an exception in the component which was referring it.
