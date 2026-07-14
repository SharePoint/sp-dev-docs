---
title: Use the MCP server to build apps with a coding agent
description: Use the open-source SharePoint Embedded MCP server with a coding agent to provision, configure, scaffold, and manage SharePoint Embedded applications through natural language.
ms.date: 07/10/2026
ms.localizationpriority: high
ms.author: grjoseph
ai-usage: ai-assisted
---

# Use the MCP server to build apps with a coding agent

The SharePoint Embedded MCP server is an open-source [Model Context Protocol](https://modelcontextprotocol.io/) server that lets any MCP-compatible AI client—such as GitHub Copilot in Visual Studio Code or CLI, Claude Desktop, Cursor, or Azure AI Foundry—set up and manage SharePoint Embedded applications through natural language. It's distributed as the [`@microsoft/spe-mcp`](https://github.com/microsoft/SharePoint-Embedded-MCP-Server) npm package and runs locally on your machine as a developer tool.

Instead of clicking through portals and stitching together Microsoft Graph and Azure CLI commands by hand, you describe what you want—"create a trial container type for my app"—and the AI client calls the server's tools to do it.

> [!NOTE]
> The SharePoint Embedded MCP server is an open-source developer tool released in preview. Its source code, full tool reference, and issue tracker live in the [microsoft/SharePoint-Embedded-MCP-Server](https://github.com/microsoft/SharePoint-Embedded-MCP-Server) repository on GitHub.

> [!IMPORTANT]
> To start building with SharePoint Embedded, you'll need administrative access to a Microsoft 365 tenant.
>
> If you don't already have a tenant, you can get your own with the [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program), [Microsoft Customer Digital Experience](https://cdx.transform.microsoft.com/), or a free trial of a [Microsoft 365 E3 license](https://www.microsoft.com/microsoft-365/enterprise/microsoft365-plans-and-pricing).

## What you can do with it

The server exposes tools that an AI client can call on your behalf, grouped by task:

- **Provisioning and status**: Check your signed-in identity and provisioning readiness, create the owning Microsoft Entra ID application, and create, register, list, update, or delete [container types](containertypes.md) and containers. A single `project_provision` tool can run the whole sequence—app → container type → billing → registration → container—in one call.
- **Billing**: Pick an Azure subscription and resource group, register the `Microsoft.Syntex` resource provider, link a container type to [standard billing](../administration/billing/billing.md), and inspect billing classification or trial expiry.
- **Scaffold, run, and deploy**: Generate a runnable reference application (a React single-page app with Azure Functions, or a C# web app), write its runtime configuration from your provisioning state, seed sample content, run it locally, and deploy it to Azure.
- **Content operations (opt-in)**: After a separate, explicit consent, upload files, create folders, search, preview, manage sharing and permissions, and archive or restore containers.
- **Documentation**: Search and fetch official SharePoint Embedded and Microsoft Graph documentation, grounded through the [Microsoft Learn MCP server](/training/support/mcp).

For the complete, versioned list of tools, CLI flags, and environment variables, see the [server README](https://github.com/microsoft/SharePoint-Embedded-MCP-Server#available-tools).

## Prerequisites

- **Node.js** version 22 or later.
- **[Azure CLI](/cli/azure/install-azure-cli)**, signed in with `az login --allow-no-subscriptions`. The `--allow-no-subscriptions` flag is required for Microsoft 365–only tenants that have no Azure subscription.
- A Microsoft 365 tenant and tenant-admin access (Global Administrator or Application Administrator).
- An **MCP-compatible client**, such as [Visual Studio Code](https://code.visualstudio.com/) with GitHub Copilot, Claude Desktop, or Cursor.

## Install and configure

MCP clients launch the server with `npx`, so there's no separate global install. Add a server entry to your client's MCP configuration.

### Visual Studio Code

Add an MCP server entry to `.vscode/mcp.json` in your workspace:

```json
{
  "servers": {
    "spe": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@microsoft/spe-mcp"]
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
      "args": ["-y", "@microsoft/spe-mcp"]
    }
  }
}
```

### Cursor and other MCP clients

Any client that supports MCP servers over the stdio transport can run the server with the same `npx -y @microsoft/spe-mcp` command. See your client's documentation for where to register MCP servers.

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
          "args": ["-y", "@microsoft/spe-mcp"],
          "env": {
            "SPE_CLIENT_ID": "your-client-id",
            "SPE_TENANT_ID": "your-tenant-id"
          }
        }
      }
    }
    ```

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

The **content operations** tools are also gated behind a separate, explicit consent, so an AI client can't read or change files in your containers until you opt in. For the full security model, see [security controls](https://github.com/microsoft/SharePoint-Embedded-MCP-Server/blob/main/docs/SECURITY-CONTROLS.md) in the server repository.

## Related content

- [SharePoint Embedded MCP server on GitHub](https://github.com/microsoft/SharePoint-Embedded-MCP-Server) – source code, full tool reference, and issues.
- [SharePoint Embedded for Visual Studio Code](spembedded-for-vscode.md) – a guided extension for getting started for free.
- [SharePoint Embedded container types](containertypes.md)
- [SharePoint Embedded app architecture](../development/app-architecture.md)
- [Authentication and authorization](../development/auth.md)
- [Model Context Protocol](https://modelcontextprotocol.io/)
