---
title: Understanding npm audit vulnerabilities in SPFx projects
description: When running npm install on a SharePoint Framework (SPFx) project, npm automatically performs a security audit and may report vulnerabilities. Learn what these vulnerability reports mean, how the SPFx architecture affects their relevance, and the recommended approach for handling them.
ms.date: 10/25/2026
ms.localizationpriority: high
---
# Understanding npm audit vulnerabilities in SharePoint Framework projects

When running `npm install` on a SharePoint Framework (SPFx) project, npm automatically performs a security audit and may report vulnerabilities. This article explains what these vulnerability reports mean, how the SPFx architecture affects their relevance, and the recommended approach for handling them.

## Overview

By default, npm runs a security audit during `npm install`. This audit checks package versions against a database of known vulnerabilities; it doesn't determine whether vulnerable code is reachable in your particular solution. You can also run `npm audit` manually. For more information, see [npm-audit](https://docs.npmjs.com/cli/audit).

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

Findings can affect these transitive dependencies, development tools, or packages your solution depends on directly. Use the dependency path and advisory details to identify the affected package and the conditions required to exploit it.

## SPFx build output and deployment

Understanding the SPFx build and deployment architecture is important when evaluating the relevance of npm audit vulnerabilities.

SPFx projects are development environments used to create deployment artifacts. The build process compiles TypeScript, bundles JavaScript, and creates a SharePoint package (**\*.sppkg** file). Although the **node_modules** directory isn't deployed as a directory, code imported from npm dependencies can be included in the generated JavaScript bundles and run in users' browsers. External libraries can also be loaded separately at runtime.

The deployment artifacts include:

- Bundled JavaScript files containing your component code and any bundled dependency code
- A SharePoint package manifest
- Asset files (images, CSS, localization files)

> [!IMPORTANT]
> Not deploying **node_modules** does not establish that a vulnerability is irrelevant. Assess shipped dependency code and development/CI tools separately. A build-only dependency can still affect the workstation, build agent, or produced artifacts under the conditions described in its advisory.

## Microsoft's approach to npm vulnerabilities in SPFx projects

SPFx releases can update dependency versions, but new advisories can be published between releases. Check the advisory, the affected versions, and the release notes for an applicable fix. Neither a new SPFx release nor a clean audit is a guarantee that a project is free of vulnerabilities.

## Recommended approach for handling vulnerabilities

### For new projects

Use the supported dependency versions for your SPFx release and review reported advisories before deciding how to proceed. A finding in a freshly generated project is not automatically exploitable, but it should not be dismissed solely because the dependency was generated or is transitive.

### Why npm audit fix is not recommended

Don't run `npm audit fix`, particularly `npm audit fix --force`, without reviewing the proposed dependency changes and validating compatibility:

- Transitive dependencies are controlled by the parent packages that depend on them. Changing these dependencies can cause version conflicts or unexpected behavior.
- Semantic versioning (semver) is not universally followed by all packages. A "patch" or "minor" version update may introduce breaking changes.
- The SPFx packages are tested with specific dependency versions. Altering these versions may cause build failures or runtime issues.

### When to investigate vulnerabilities

Assess each finding according to your organization's security policy:

1. Record the advisory, affected version, severity, and dependency path from `npm audit`. Use `npm explain <package-name>` to identify why a package is installed.
1. Determine whether affected code is bundled or otherwise loaded at runtime, used only during development or CI, or unused. A package's placement in `dependencies` or `devDependencies` alone doesn't prove what ships.
1. Check the advisory's prerequisites against your use of the package, including exposed inputs and execution environment. Severity alone doesn't establish exploitability, and lack of runtime exposure doesn't rule out build-time impact.
1. For dependencies you control, choose a compatible patched version and review the manifest and lockfile diff. For SPFx-managed dependencies, check for an applicable SPFx update or seek guidance through your organization's support process.
1. Validate the build, production package, and affected runtime scenarios. Document mitigations, accepted risk, and unresolved findings; don't treat this article as a vulnerability-specific safety assessment.

### Addressing vulnerabilities in the ecosystem

For vulnerabilities in the SPFx's transitive dependencies, resolution requires updates from the package maintainers. The typical process involves:

1. The maintainer of the vulnerable package releases a patched version
1. The packages that depend on it update their dependency references
1. Microsoft updates the SPFx packages with the new dependency chain
1. Developers update to the new SPFx version

## See also

- [Set up your SharePoint Framework development environment](set-up-your-development-environment.md)
- [SharePoint Framework Heft-based toolchain](toolchain/sharepoint-framework-toolchain-rushstack-heft.md)
- [Update SharePoint Framework packages](toolchain/update-latest-packages.md)
- [npm audit documentation](https://docs.npmjs.com/cli/audit)
