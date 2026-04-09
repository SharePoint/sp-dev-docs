---
title: SharePoint Framework CLI (spfx-cli)
description: Scaffold SPFx projects with the open-source spfx-cli, the modern replacement for the Yeoman generator.
author: andrewconnell
ms.topic: concept-article
ms.service: sharepoint
ms.date: 04/09/2026
ms.localizationpriority: high
---

# SharePoint Framework CLI (spfx-cli)

The **SharePoint Framework CLI** (`@microsoft/spfx-cli`) is the modern, open-source command-line tool for scaffolding SharePoint Framework (SPFx) projects. It replaces the legacy Yeoman-based generator (`@microsoft/generator-sharepoint`) with a purpose-built CLI and a template system that's versioned independently of the tool itself.

[!INCLUDE [spfx-prerelease-related](../../../includes/snippets/spfx-prerelease-related.md)]

## Why a new SPFx CLI?

The legacy Yeoman generator tightly coupled the scaffolding tool to a specific SPFx version — updating templates required publishing a new generator. The new SPFx CLI decouples these concerns:

- **Templates are fetched at runtime** from the [SharePoint/spfx](https://github.com/SharePoint/spfx) GitHub repository, so template fixes and new component types ship without a CLI update.
- **Template versions are selectable.** Use `--spfx-version` to target a specific SPFx release branch (for example, `1.22` or `1.23-rc.0`).
- **Custom template sources are supported.** Point the CLI at a local folder or a different GitHub repository to use your own templates.
- **The CLI is open source.** The project lives at [github.com/SharePoint/spfx](https://github.com/SharePoint/spfx) and accepts community contributions.

## Prerequisites

- **Node.js** `>=22.14.0 <23.0.0` or `>=24.12.0 <25.0.0`
- **npm**, **pnpm**, or **yarn** (optional — the CLI can skip dependency installation)
- A **SharePoint Online** tenant for deploying and testing solutions

## Install

Install the CLI globally from npm:

```console
npm install -g @microsoft/spfx-cli
```

Verify the installation:

```console
spfx --version
```

## Scaffold your first project

Create a React-based web part:

```console
spfx create \
  --template webpart-react \
  --library-name my-spfx-library \
  --component-name "Hello World"
```

This command:

1. Downloads the `webpart-react` template from the default [SharePoint/spfx](https://github.com/SharePoint/spfx) repository.
1. Scaffolds the project into a subfolder derived from the component name (`hello-world`).
1. Configures the project with SPFx 1.22.2 by default.

Once scaffolding completes, install dependencies and build the project:

```console
cd hello-world
npm install
npm run build
```

## Commands

### `spfx create`

Scaffolds a new SPFx component from a template.

**Required flags:**

|           Flag            |                           Description                           |
| ------------------------- | --------------------------------------------------------------- |
| `--template <name>`       | Template name (see [Available templates](#available-templates)) |
| `--library-name <name>`   | npm library name for the component (for example, `my-spfx-lib`) |
| `--component-name <name>` | Display name of the component (for example, `"Hello World"`)    |

**Common optional flags:**

| Flag | Default | Description |
| ---- | ------- | ----------- |
| `--target-dir <path>` | derived from solution name | Directory to scaffold into |
| `--solution-name <name>` | hyphen-cased component name | SharePoint solution name |
| `--component-alias <alias>` | same as component name | Short identifier for the component |
| `--component-description <text>` | `"<name> description"` | Component description |
| `--spfx-version <version>` | `latest` | SPFx version branch (for example, `1.22`, `1.23-rc.0`) |
| `--template-url <url>` | `https://github.com/SharePoint/spfx` | Custom GitHub template repository |
| `--local-source <path>` | — | Path to a local template folder (repeatable) |
| `--remote-source <url>` | — | Additional GitHub template repository (repeatable) |
| `--package-manager <npm\|pnpm\|yarn\|none>` | `none` | Package manager to run install with after scaffolding |

### `spfx list-templates`

Lists all available templates from the configured sources. The default GitHub source is always included; use `--local-source` and `--remote-source` to add more.

```console
spfx list-templates
```

Target a specific SPFx release branch:

```console
spfx list-templates --spfx-version 1.22
```

## Available templates

All templates target **SPFx 1.22.2** by default. Use `--spfx-version` to target a different release branch.

### Web parts

[Web parts](../web-parts/overview-client-side-web-parts.md) are the primary building blocks for pages in SharePoint and Microsoft 365, and the most common SPFx component type. Pick `webpart-minimal` when you want the smallest possible starting point (no scaffolding beyond what's required to render), `webpart-noframework` for a complete web part project without a UI framework dependency, or `webpart-react` for a React-based project pre-wired with Fluent UI — the recommended starting point for most new web parts.

|       Template        |               Description               |
| --------------------- | --------------------------------------- |
| `webpart-minimal`     | Bare-bones web part, no UI framework    |
| `webpart-noframework` | Full web part scaffold, no UI framework |
| `webpart-react`       | Web part with React and Fluent UI       |

### Extensions

[SPFx extensions](../extensions/overview-extensions.md) let you customize the SharePoint user experience beyond the web part canvas — adding headers and footers with application customizers, changing how fields render in lists with field customizers, replacing the default new/edit/view forms with form customizers, contributing commands to list view toolbars with list view command sets, or modifying search queries server-side. Pick the template that matches the extension type you need; use the `-react` variants when you want a React + Fluent UI starting point, or the `-noframework` / `-minimal` variants for a leaner scaffold.

|                Template                 |                 Description                 |
| --------------------------------------- | ------------------------------------------- |
| `extension-application-customizer`      | Application Customizer                      |
| `extension-fieldcustomizer-minimal`     | Field Customizer, no UI framework (minimal) |
| `extension-fieldcustomizer-noframework` | Field Customizer, no UI framework           |
| `extension-fieldcustomizer-react`       | Field Customizer with React                 |
| `extension-formcustomizer-noframework`  | Form Customizer, no UI framework            |
| `extension-formcustomizer-react`        | Form Customizer with React                  |
| `extension-listviewcommandset`          | List View Command Set                       |
| `extension-search-query-modifier`       | Search Query Modifier                       |

### Adaptive Card Extensions

[Adaptive Card Extensions (ACEs)](../viva/overview-viva-connections.md) are the SPFx component model for building cards that surface on the Viva Connections dashboard and elsewhere in Microsoft 365. Each template corresponds to one of the built-in ACE card designs — pick the one whose layout most closely matches the experience you want to build, then customize from there. Use `ace-generic-card` for the broadest starting point, or the more specialized templates (`ace-data-visualization`, `ace-search-card`, and the image/primary text variants) when their layout fits your scenario.

|            Template            |        Description        |
| ------------------------------ | ------------------------- |
| `ace-data-visualization`       | Data Visualization card   |
| `ace-generic-card`             | Generic card              |
| `ace-generic-image-card`       | Generic image card        |
| `ace-generic-primarytext-card` | Generic primary text card |
| `ace-search-card`              | Search card               |

### Other

Not every SPFx project produces a visual component. The `library` template scaffolds a [shared SPFx library component](../library-component-overview.md) — a reusable package of code that other web parts, extensions, and ACEs in the same tenant can take a dependency on. Use this when you need to share logic, types, or services across multiple SPFx solutions without duplicating code.

| Template  |          Description          |
| --------- | ----------------------------- |
| `library` | Shared SPFx library component |

## Examples

### Scaffold into a specific directory

By default, the CLI creates a new folder derived from the solution name in the current working directory. Use `--target-dir` when you want to control exactly where the project lands — for example, when scaffolding into an existing repository layout, a monorepo packages folder, or a build workspace where the folder name needs to match something other than the component name.

```console
spfx create \
  --template webpart-react \
  --library-name my-spfx-library \
  --component-name "My Dashboard" \
  --target-dir ./my-project
```

### Target a specific SPFx version

New projects are scaffolded against the `version/latest` branch of the template repository, which tracks the most recent generally available SPFx release. Use `--spfx-version` to pin a project to a specific release branch — for example, when you need to match an existing solution's SPFx version, stay on a supported LTS release, or try out a release candidate before it ships. The value is resolved to the corresponding `version/<VERSION>` branch in the template repository.

```console
spfx create \
  --template webpart-react \
  --library-name my-spfx-library \
  --component-name "My Web Part" \
  --spfx-version 1.22
```

### Use local templates (offline or custom)

Use `--local-source` to point the CLI at a template folder on disk. This is useful when you're working offline, iterating on a template you're authoring, or keeping a private template set outside of GitHub. The local source is added alongside the default GitHub source — it doesn't replace it — so you can scaffold from either. Pass the flag multiple times to register more than one local folder.

```console
spfx create \
  --template webpart-minimal \
  --library-name my-spfx-library \
  --component-name "My Web Part" \
  --local-source ./path/to/templates
```

### Use templates from a custom GitHub repository

Teams that maintain their own SPFx templates (for example, to enforce organizational standards, pre-wire common dependencies, or ship internal component patterns) can publish them in any public GitHub repository and consume them with `--remote-source`. Like `--local-source`, the custom repository is added alongside the default [SharePoint/spfx](https://github.com/SharePoint/spfx) source, and the flag is repeatable when you want to aggregate templates from multiple repositories.

```console
spfx create \
  --template my-custom-template \
  --library-name my-spfx-library \
  --component-name "My Web Part" \
  --remote-source https://github.com/my-org/my-templates
```

### Use templates from GitHub Enterprise

If your organization hosts templates on GitHub Enterprise Server (GHES) rather than github.com, use `--template-url` to replace the default template source with your GHES repository. Because GHES requires authentication for all API calls, you must also provide a `GITHUB_TOKEN` environment variable with a personal access token that has read access to the repository. The same token approach works for private repositories on github.com.

```console
GITHUB_TOKEN=ghp_... spfx create \
  --template webpart-react \
  --library-name my-spfx-library \
  --component-name "My Web Part" \
  --template-url https://github.myenterprise.com/my-org/spfx-templates
```

## Environment variables

|         Variable         |                                                   Description                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `SPFX_TEMPLATE_REPO_URL` | Equivalent to `--template-url`                                                                                  |
| `GITHUB_TOKEN`           | GitHub personal access token — required for GitHub Enterprise hosts, also works for private repos on github.com |

## Programmatic API

In addition to the CLI, the project ships [`@microsoft/spfx-template-api`](https://github.com/SharePoint/spfx/tree/main/api/spfx-template-api), a programmatic API for template rendering. Use this package to build custom tooling on top of the same template engine used by the CLI.

## Contributing and feedback

The SPFx CLI is open source. For more information and to file issues, feature requests, or pull requests, see the [sharepoint/spfx repository](https://github.com/SharePoint/spfx).

## See also

- [SPFx CLI on GitHub](https://github.com/SharePoint/spfx)
- [SPFx CLI on npmjs](https://www.npmjs.com/package/@microsoft/spfx-cli)
