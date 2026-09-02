---
title: Use the MCP server to build apps with a coding agent
description: Use the open-source SharePoint Embedded MCP server with a coding agent to provision, configure, scaffold, and manage SharePoint Embedded applications through natural language.
ms.date: 07/10/2026
ms.localizationpriority: high
ms.author: grjoseph
ms.reviewer: cindylay
ai-usage: ai-assisted
---

# Use the MCP server to build apps with a coding agent

**Applies to:** Developer

<!-- agent:
task_type: how-to
audience: developer
outcome: Use the SharePoint Embedded MCP server with a coding agent to provision, configure, scaffold, and manage SharePoint Embedded applications through natural language.
next: quickstart-vscode.md
-->

The SharePoint Embedded MCP server is an open-source [Model Context Protocol](https://modelcontextprotocol.io/) server that lets MCP-compatible AI clients set up and manage SharePoint Embedded applications through natural language. Supported clients include GitHub Copilot in Visual Studio Code or CLI, Claude Desktop, Cursor, and Azure AI Foundry. It's distributed as the [`@microsoft/spe-mcp`](https://github.com/microsoft/SharePoint-Embedded-MCP-Server) npm package and runs locally on your machine as a developer tool.

Instead of clicking through portals and stitching together Microsoft Graph and Azure CLI commands by hand, you describe what you want—"create a trial container type for my app"—and the AI client calls the server's tools to do it.

> [!NOTE]
> The SharePoint Embedded MCP server is an open-source developer tool released in preview. Its source code, full tool reference, and issue tracker live in the [microsoft/SharePoint-Embedded-MCP-Server](https://github.com/microsoft/SharePoint-Embedded-MCP-Server) repository on GitHub.

> [!IMPORTANT]
> To start building with SharePoint Embedded, you'll need administrative access to a Microsoft 365 tenant.
>
> If you don't already have a tenant, you can get your own with the [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program), [Microsoft Customer Digital Experience](https://cdx.transform.microsoft.com/), or a free trial of a [Microsoft 365 E3 license](https://www.microsoft.com/microsoft-365/enterprise/microsoft365-plans-and-pricing).

## Available tools

The server exposes tools that an AI client can call on your behalf.

| Category | What the tools do | Representative tools |
|---|---|---|
| Provisioning and status | Check your signed-in identity and provisioning readiness. Create and manage owning applications, [container types](../plan/container-types-containers.md), container type registrations, and containers. | `status_get`, `project_app_create`, `project_provision`, `container_type_create`, `container_type_register`, `container_create` |
| Billing | Select an Azure subscription and resource group, connect a container type to [standard billing](../plan/choose-billing-model.md), and inspect billing classification or trial expiry. | `azure_subscriptions_list`, `azure_resource_groups_list`, `billing_setup`, `billing_check` |
| Scaffold, run, and deploy | Generate a reference application, write its configuration, seed sample content, run it locally, and deploy it to Azure. | `project_scaffold`, `project_hydrate_config`, `project_seed_sample_data`, `project_run_local`, `project_deploy` |
| Content operations (opt-in) | After explicit consent, seed sample content, upload files, create folders, search, preview, and manage sharing. | `content_access_grant`, `project_seed_sample_data`, `content_file_upload`, `content_search`, `content_sharing_manage` |
| Container permissions and lifecycle | Manage container permissions and archive, restore, or delete containers. | `container_permissions_manage`, `container_archive_restore`, `container_delete` |
| Documentation | Search and fetch official SharePoint Embedded and Microsoft Graph documentation through the [Microsoft Learn MCP server](/training/support/mcp). | `docs_search`, `docs_fetch` |

For the complete, versioned list of tools, CLI flags, and environment variables, see the [server README](https://github.com/microsoft/SharePoint-Embedded-MCP-Server#available-tools).

## Prerequisites

- **Node.js** version 22 or later.
- **[Azure CLI](/cli/azure/install-azure-cli)**, signed in with `az login --allow-no-subscriptions`. The `--allow-no-subscriptions` flag is required for Microsoft 365–only tenants that have no Azure subscription.
- A Microsoft 365 tenant and tenant-admin access (Global Administrator or Application Administrator).
- An **MCP-compatible client**, such as [Visual Studio Code](https://code.visualstudio.com/) with GitHub Copilot, Claude Desktop, or Cursor.

## Install and configure

MCP clients launch the server with `npx`, so there's no separate global install. Add a server entry to your client's MCP configuration.

### Add the server with one click

[!INCLUDE [Add the SharePoint Embedded MCP server](../includes/sharepoint-embedded-mcp-install.md)]

To add the server manually instead, use the following client-specific steps.

### Visual Studio Code

Add an MCP server entry to `.vscode/mcp.json` in your workspace:

```json
{
  "servers": {
    "spe": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@microsoft/spe-mcp", "start"]
    }
  }
}
```

The `-y` flag lets Visual Studio Code launch the server non-interactively. After the server is registered, use Copilot Chat in agent mode to call its tools.

### Claude Desktop

Add the server to `%APPDATA%\Claude\claude_desktop_config.json` (Windows) or `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS):

```json
{
  "mcpServers": {
    "spe": {
      "command": "npx",
      "args": ["-y", "@microsoft/spe-mcp", "start"]
    }
  }
}
```

### Cursor and other MCP clients

Any client that supports MCP servers over the stdio transport can run the server with the same `npx -y @microsoft/spe-mcp start` command. See your client's documentation for where to register MCP servers.

## Configuration

The server accepts operational configuration through CLI flags or equivalent environment variables. When you set both for the same option, the CLI flag wins.

| CLI flag | Environment variable | Description |
|---|---|---|
| `--client-id` | `SPE_CLIENT_ID` | Microsoft Entra ID application (client) ID of the owning application. Omit it to use bootstrap mode. |
| `--tenant-id` | `SPE_TENANT_ID` | Microsoft Entra ID tenant ID. The server discovers it from the Azure CLI when you omit it. |
| `--read-only` | `SPE_READ_ONLY` | Advertise and allow only read, list, get, and search tools. Reject mutating calls. |
| `--tools` | `SPE_TOOLS` | Restrict tools to a profile (`readOnly`, `docsOnly`, `provisioning`, `content`, or `admin`) or a comma-separated list of tool names. |
| `--data-dir` | `SPE_DATA_DIR` | Path for the token cache and provisioning state. Use a unique absolute path or `~/` path for each server instance. Sharing this directory can overwrite cached authentication and provisioning state. Don't use a path relative to the current directory. The default is `~/.spe-mcp`. |

Set flags in the `args` array or variables in the `env` object of your client's MCP configuration. Run `npx -y @microsoft/spe-mcp start --help` or see the [server configuration reference](https://github.com/microsoft/SharePoint-Embedded-MCP-Server#configuration) for the complete, versioned option list.

## Choose how the server authenticates

The server supports two running modes.

- **Bootstrap mode (recommended to get started)**: No app registration required. The server uses your Azure CLI session for the control plane and provisions the owning Microsoft Entra ID application on demand. Sign in once and start the server with no client ID:

    ```console
    az login --allow-no-subscriptions
    ```

- **Pre-provisioned-app mode**: Pass an existing public-client Microsoft Entra ID application that already has admin-consented delegated permissions for `FileStorageContainer.Selected`, `FileStorageContainerType.Manage.All`, and `FileStorageContainerTypeReg.Manage.All`. Provide the app ID and tenant ID through the `SPE_CLIENT_ID` and `SPE_TENANT_ID` environment variables (or the `--client-id` and `--tenant-id` flags):

    ```json
    {
      "servers": {
        "spe": {
          "type": "stdio",
          "command": "npx",
          "args": ["-y", "@microsoft/spe-mcp", "start"],
          "env": {
            "SPE_CLIENT_ID": "your-client-id",
            "SPE_TENANT_ID": "your-tenant-id"
          }
        }
      }
    }
    ```

> [!IMPORTANT]
> Configure redirect URIs on the applicable app registration:
>
> - **Owning app registration for the MCP server**: Under **Mobile and desktop applications**, add `http://localhost` for interactive sign-in.
> - **Owning app registration for the React single-page application (SPA)**: Under **Single-page application**, add the local app URL shown by `project_run_local` and the deployed URL returned by `project_deploy`. In pre-provisioned-app mode, add these redirect URIs manually if the server can't update the app registration.
> - **Separate C# web app registration**: The C# scaffold provisions this registration with a web redirect URI. Don't add the C# app's redirect URI to the owning app registration.
>
> Manage redirect URIs under **App registrations** > **Authentication** in the [Microsoft Entra admin center](https://entra.microsoft.com/).

In bootstrap mode, the first SharePoint Embedded call opens a browser for a one-time consent and caches the token, so no separate terminal step is needed. For the full authentication waterfall, token storage details, and headless/automation guidance, see the [server README](https://github.com/microsoft/SharePoint-Embedded-MCP-Server#authentication).

## Try it

With the server registered in your client and an Azure CLI sign-in complete, ask your AI client to work with SharePoint Embedded. For example, in Copilot Chat:

- *"List my SharePoint Embedded container types."*
- *"Create a trial container type called Contoso Docs for app ID abc-123."*
- *"Provision a new SharePoint Embedded app and scaffold a React sample."*

The client calls the matching tools, prompts you for consent the first time, and reports the results.

## Control what the server can do

The server includes controls to limit which tools are exposed and callable—useful when you want an AI client to explore your environment without making changes:

- **Read-only mode**: Advertise and allow only read, list, get, and search tools, and reject any mutating call. Set the `--read-only` flag or the `SPE_READ_ONLY` environment variable.
- **Tool profiles**: Restrict the exposed tools to a profile (`readOnly`, `docsOnly`, `provisioning`, `content`, or `admin`) or a comma-separated list of tool names, using the `--tools` flag or the `SPE_TOOLS` environment variable.

See [Configuration](#configuration) for the other operational options.

The **content operations** tools are also gated behind a separate, explicit consent, so an AI client can't read or change files in your containers until you opt in. For the full security model, see [security controls](https://github.com/microsoft/SharePoint-Embedded-MCP-Server/blob/main/docs/SECURITY-CONTROLS.md) in the server repository.

## Related content

- [SharePoint Embedded MCP server on GitHub](https://github.com/microsoft/SharePoint-Embedded-MCP-Server) – source code, full tool reference, and issues.
- [Quickstart: Build your first app with VS Code](quickstart-vscode.md) – a guided extension for getting started for free.
- [SharePoint Embedded container types](../plan/container-types-containers.md)
- [SharePoint Embedded app architecture](../plan/app-tenant-architecture.md)
- [Authentication and authorization](configure-authentication-authorization.md)
- [Model Context Protocol](https://modelcontextprotocol.io/)
