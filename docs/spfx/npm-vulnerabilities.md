---
title: Understanding npm audit vulnerabilities in SPFx projects
description: When running npm install on a SharePoint Framework (SPFx) project, npm automatically performs a security audit and may report vulnerabilities. Learn what these vulnerability reports mean, how the SPFx architecture affects their relevance, and the recommended approach for handling them.
ms.date: 01/28/2026
ms.localizationpriority: high
---
# Understanding npm audit vulnerabilities in SharePoint Framework projects

When running `npm install` on a SharePoint Framework (SPFx) project, npm automatically performs a security audit and may report vulnerabilities. This article explains what these vulnerability reports mean, how the SPFx architecture affects their relevance, and the recommended approach for handling them.

## Overview

npm runs a security audit on installed packages after every `npm install` command. This audit checks the current version of each package in your project against a database of known vulnerabilities. You can also manually run this audit using the `npm audit` command. For more information, see [npm-audit](https://docs.npmjs.com/cli/audit).

When creating a new SPFx project using the SharePoint Framework Yeoman generator, or running `npm install` on an existing project, you may see vulnerability warnings after the initial package installation. These warnings can include moderate, high, or even critical severity ratings across numerous packages.

```console
➜ npm i

... omitted for brevity...

added 1343 packages, and audited 1344 packages in 17s

238 packages are looking for funding
  run `npm fund` for details

6 vulnerabilities (2 moderate, 4 high)

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
```

## How npm audit works

The npm audit process examines all packages in your project's dependency tree, including transitive dependencies (dependencies of dependencies). A single direct dependency can introduce dozens of indirect dependencies, each of which is checked against the npm security advisory database.

The audit report displays information about each vulnerability, including:

- The affected package name and version
- The severity level (low, moderate, high, or critical)
- The dependency path showing which direct dependency introduced the vulnerable package
- A link to more information about the specific vulnerability

## Dependency chains in SPFx projects

SPFx projects contain core Microsoft packages that have their own dependency chains. When you run `npm audit`, the reported vulnerabilities often exist in packages that are dependencies of these core SPFx packages, such as:

- `@microsoft/sp-core-library`
- `@microsoft/sp-component-base`
- `@microsoft/sp-property-pane`
- `@microsoft/sp-webpart-base`

These dependency relationships mean that the vulnerable packages are not direct dependencies of your project code but rather transitive dependencies managed by the SPFx packages.

## SPFx build output and deployment

Understanding the SPFx build and deployment architecture is important when evaluating the relevance of npm audit vulnerabilities.

SPFx projects are development environments used to create deployment artifacts. The build process compiles TypeScript code, bundles JavaScript files, and creates a SharePoint package (**\*.sppkg** file) for deployment. **The npm packages installed in your project are used during the build process but are not deployed to SharePoint.**

The deployment artifacts include:

- Bundled JavaScript files containing your component code
- A SharePoint package manifest
- Asset files (images, CSS, localization files)

> [!IMPORTANT]
> The **node_modules** folder and its contents remain on the development machine and are not included in the deployed package.

## Microsoft's approach to npm vulnerabilities in SPFx projects

Microsoft strives to update the latest version of the SPFx with zero vulnerabilities. However, an upstream dependency may contain a vulnerability discovered between SPFx releases. Therefore, you may see some vulnerabilities in the summary after executing `npm install` until the next SPFx release.

## Recommended approach for handling vulnerabilities

### For new projects

When working with a newly created SPFx project, the recommended approach is to proceed with development without attempting to resolve the reported vulnerabilities. The vulnerabilities exist in the transitive dependencies of the SPFx packages, which are managed by Microsoft.

### Why npm audit fix is not recommended

Running `npm audit fix` or `npm audit fix --force` to automatically update packages is not recommended for the following reasons:

- Transitive dependencies are controlled by the parent packages that depend on them. Changing these dependencies can cause version conflicts or unexpected behavior.
- Semantic versioning (semver) is not universally followed by all packages. A "patch" or "minor" version update may introduce breaking changes.
- The SPFx packages are tested with specific dependency versions. Altering these versions may cause build failures or runtime issues.

### When to investigate vulnerabilities

Consider investigating vulnerabilities when:

- You have added third-party packages to your project beyond the default SPFx dependencies
- The vulnerable package is a direct dependency that you control
- Your organization's security policies require documented assessment of all vulnerabilities

### Addressing vulnerabilities in the ecosystem

For vulnerabilities in the SPFx's transitive dependencies, resolution requires updates from the package maintainers. The typical process involves:

1. The maintainer of the vulnerable package releases a patched version
1. The packages that depend on it update their dependency references
1. Microsoft updates the SPFx packages with the new dependency chain
1. Developers update to the new SPFx version

## See also

- [Set up your SharePoint Framework development environment](set-up-your-development-environment)
- [SharePoint Framework toolchain](sharepoint-framework-toolchain)
- [npm audit documentation](https://docs.npmjs.com/cli/audit)
