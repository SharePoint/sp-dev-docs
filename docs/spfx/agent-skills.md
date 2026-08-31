---
title: Use the SPFx development skill with AI coding agents
description: Install and use the SPFx development skill to give compatible AI coding agents guidance for creating, upgrading, designing, and accessing data in SharePoint Framework solutions.
ms.date: 08/31/2026
ms.localizationpriority: high
---

# Use the SPFx development skill with AI coding agents

The [SPFx development skill](https://github.com/SharePoint/spfx-dev-skills) gives compatible AI coding agents instructions for common SharePoint Framework (SPFx) development tasks. The skill helps an agent identify the SPFx version in a project, choose the corresponding Heft or gulp toolchain, and follow task-specific guidance instead of relying only on its general knowledge.

> [!IMPORTANT]
> The SPFx development skill is in preview. Its scope and guidance might change. Review all generated code and commands before you use them, and test changes before you deploy them.

## What the skill covers

The `spfx` skill provides guidance for the following tasks:

| Task | Guidance |
| --- | --- |
| Create projects | Check the development environment and scaffold web parts or extensions by using the SharePoint Framework Yeoman generator in non-interactive mode. |
| Upgrade projects | Inspect the current SPFx version, generate an upgrade report by using CLI for Microsoft 365, apply its steps, and validate the upgraded project. |
| Build React user interfaces | Use React, TypeScript, and Fluent UI v9 components with guidance for theming, responsive layouts, accessibility, and SharePoint host integration. |
| Access data | Use PnPjs by default for SharePoint and Microsoft Graph data operations, with guidance for initialization, selective imports, permissions, and common operations. |

For every supported task, the skill determines the build toolchain from the installed SPFx version. It uses Heft for SPFx v1.22.0 and later, and the legacy gulp toolchain for SPFx v1.21.1 and earlier. The upgrade and React user interface guidance directs the agent to validate its changes with a clean build.

## Install the skill

The skill follows the portable agent skill convention: a folder that contains a **SKILL.md** file and supporting Markdown references. Your AI coding agent must support this convention and loading skills from a local skills directory.

> [!NOTE]
> One-command installation and marketplace distribution aren't currently available. Install the skill manually from its GitHub repository.

1. Clone the SPFx Dev Skills repository.

   ```console
   git clone https://github.com/SharePoint/spfx-dev-skills.git
   ```

1. Copy the **plugins/spfx/skills/spfx** folder from the cloned repository to your agent's local or global skills directory. Keep the folder name **spfx**.

   Common workspace locations include **.github/skills** and **skills**. The supported location depends on your agent, so check its documentation before you copy the folder.

1. Start a new agent session so that the agent can discover the skill.

## Use the skill

Describe the SPFx development task in natural language. For example:

- "Create an SPFx React web part called HelloWorld."
- "Upgrade this solution to the latest SPFx version."
- "Add an accessible Fluent UI v9 card layout to this web part."
- "Read items from the Projects list and display them."

When the agent recognizes a supported SPFx task, it loads the relevant guidance from the skill. Depending on the task, the agent might inspect project files, check the development environment, install required tools or dependencies, modify the project, and run a build.

The skill is guidance for the AI coding agent, not a replacement for the SPFx development environment. The tools and accounts required by the task must still be available. For example, creating and building a project requires a Node.js version supported by the targeted SPFx version and the SPFx development toolchain. The skill uses `m365 spfx doctor` to check the environment before it creates a project.

## Provide feedback and contribute

The skill is open source. To report incorrect guidance or request support for another scenario, [open an issue in the SPFx Dev Skills repository](https://github.com/SharePoint/spfx-dev-skills/issues). To propose a change, see the repository's [contribution guidance](https://github.com/SharePoint/spfx-dev-skills/blob/main/CONTRIBUTING.md).

## See also

- [Set up your SharePoint Framework development environment](set-up-your-development-environment.md)
- [SharePoint Framework toolchain](tools-and-libraries.md)
- [Platform and toolchain compatibility](compatibility.md)
