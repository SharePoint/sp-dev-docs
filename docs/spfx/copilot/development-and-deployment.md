---
title: Develop and deploy Copilot UX components
description: Understand local testing, initial agent deployment, runtime tool discovery, baseline agent updates, and deployment limitations for Copilot UX components.
ms.date: 10/28/2026
ms.localizationpriority: high
---

# Develop and deploy Copilot UX components

A Copilot UX component solution has two related deployment surfaces: its SPFx components and its baseline declarative agent. **Sync to Teams is required for the initial agent deployment and changes to the baseline agent configuration. It isn't required for every component update.**

This article applies to SPFx 1.24 and forward. For an end-to-end first deployment, follow [Build your first Copilot UX component](get-started/build-your-first-copilot-app.md). Check [licensing and supported clients](overview-copilot-apps.md#availability) before testing in Copilot.

## Develop locally

Use the **Copilot Workbench**, which remains fully supported, to run the component from your local development server. Test rendering, parameters, display modes, loading and error states, theme changes, keyboard interaction, and sizing.

Development and testing, including Copilot Workbench, require the Microsoft 365 Copilot add-on license on top of your normal E3, E5, or E7 license. The licensing requirement is the same as for production use.

Workbench testing doesn't validate agent intent matching, runtime tool discovery, tenant permissions, or deployment to a user's Copilot session. Test those with a deployed agent in a development tenant.

The SharePoint Online workbench used for web parts is a different experience and is deprecated. Debug web parts on actual SharePoint pages with the [developer toolbar](../debug-toolbar.md); don't apply that retirement to Copilot Workbench.

## Deploy the baseline agent once

1. Build and package the solution using the project's scripts and the [first-component tutorial](get-started/build-your-first-copilot-app.md#package-the-solution).
1. Upload the `.sppkg` to the tenant's SharePoint App Catalog and enable it. Review deployment options and approve required API permissions through the appropriate administrative process.
1. Select **Add to Teams** for the solution. This catalog action performs **Sync to Teams** and deploys the baseline declarative-agent definition.
1. Make the agent available to the intended users under the tenant's agent and app policies.
1. Test discovery and rendering with a licensed user in a supported Copilot client.

Keep the solution ID, component IDs, and Teams app ID stable for subsequent updates to the same solution. Changing an identity isn't a routine version update and can create a separate agent or break the association with the deployed solution.

## Decide whether an update needs another sync

| Change | Required action | Sync again? |
| --- | --- | --- |
| Local UI, styling, or parameter iteration | Rebuild/serve locally and test in Copilot Workbench. | No. |
| Component implementation or UI in a deployed solution | Build, package, and redeploy the updated `.sppkg`. | No, if the baseline agent configuration is unchanged. |
| Tool parameters or tool descriptions | Update the component's schema/manifest, build, package, and redeploy. | No, if only the runtime-discovered tool definition changed. |
| Add or remove component functions in the existing agent | Update component source/manifests and agent grouping, build, package, and redeploy. | No, if the baseline agent configuration is unchanged. |
| Agent image/icon, title/name, or starter prompts | Update the baseline agent files/assets, build, package, redeploy, and sync. | Yes. |
| Agent instructions, knowledge sources, or additional actions | Update and redeploy the baseline agent definition, then sync. | Yes. |
| Both tool parameters and agent instructions/starters | Redeploy both changes, then sync the changed baseline. | Yes. |

[Dynamic tool discovery](/microsoft-365/copilot/extensibility/plugin-dynamic-tool-discovery) discovers the current tool definitions at runtime. It doesn't upload source edits, approve permissions, or bypass tenant governance. SPFx supplies the managed tool-discovery endpoint; you don't need to host an external MCP server merely to use SPFx Copilot UX components.

> [!NOTE]
> Dynamic tool discovery caches tool definitions for a few minutes. After you deploy an updated `.sppkg`, it can take a few minutes before new functions or updated tool definitions are available in Copilot. You don't need to sync again to refresh this cache.
>
> UX changes are available immediately after deployment because the component code is served directly from the SharePoint App Catalog site collection. They don't wait for the dynamic tool-discovery cache to refresh.

Allow a few minutes for tool discovery, then test in a **new conversation**. Starting a new conversation doesn't bypass the discovery cache. An existing conversation can also retain earlier tool context; don't assume an already-open session immediately refreshes.

## Keep version fields separate

| Version | Purpose |
| --- | --- |
| SPFx solution/package version in `config/package-solution.json` | Identifies an update to the installed SharePoint solution. |
| Component manifest version | Identifies the component build; generated manifests can derive it from the project version. |
| Numeric app `version` in `copilot/manifest.json` | Identifies the Teams/Microsoft 365 app package for baseline agent updates. |
| Declarative-agent `version`, such as `v1.8` | Selects the declarative-agent schema. It is **not** a deployment counter. |

The SPFx build manages app-version updates when it detects relevant agent content changes. For a baseline-update conflict, compare the built app manifest with the deployed app version, particularly after a clean build or in CI. Don't change the declarative-agent schema version to resolve an app-version conflict. A component-only update doesn't require a redundant sync merely to change the Teams app version.

## Combined Copilot and Teams solutions

> [!IMPORTANT]
> At SPFx 1.24 GA, combining Copilot UX components and SPFx Teams functionality in the same solution causes a mismatch in **automatic Sync to Teams packaging**. A manually created Teams package works for this combination.

Use the [developer-provided Teams package option](../deployment-spfx-teams-solutions.md#developer-provided-microsoft-teams-app-manifest--package). The package must describe all intended experiences, including the declarative agent and the Teams functionality; a web-part-only manifest isn't a complete agent package. Validate the package in your development tenant before distribution.

The initial-sync versus baseline-update distinction still applies. Dynamic discovery doesn't fix this packaging mismatch. A fix is planned as a fast follow after GA, without a committed date.

## Update across tenants and through the Store

The same `.sppkg` can be deployed to multiple tenants, but data locations, permissions, app policies, user licenses, and agent availability must be configured and tested in each tenant. Automatic component hosting doesn't provision a custom backend or grant access to another tenant's data.

Copilot UX components are supported in the SharePoint Store starting at GA. Store acquisition doesn't remove initial deployment, agent setup, licensing, or consent requirements. See [Maintain and support your published app](../publish-to-marketplace-after-publishing.md).

## Validate updates and retirement

For an update, verify the installed solution, baseline app version where applicable, discovered tools and arguments, authorized data access, and rendered UX. Test both the happy path and unavailable/invalid parameters.

For rollback, redeploy a known-good component implementation using an appropriate package version. If the baseline agent changed, restore and re-sync an appropriate baseline as well. Re-test discovery in a fresh conversation.

For retirement, plan removal of the solution, agent/app availability, permissions, and any backend resources separately. Don't assume deleting the `.sppkg` automatically cleans up every agent installation or custom service. Follow tenant administration procedures and verify that the retired experience is no longer available.

## Next steps

- [Configure Copilot UX components and agents](component-and-agent-configuration.md)
- [Provide Copilot with context from your component](provide-context-to-copilot.md)
- [Troubleshoot Copilot UX components](troubleshooting-copilot-ux-components.md)
