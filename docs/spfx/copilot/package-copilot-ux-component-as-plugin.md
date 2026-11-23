---
title: Manually package a Copilot UX component as a plug-in
description: Manually package SPFx 1.24.x Copilot UX components as a plug-in using agentConnectors, tenant-specific MCP URLs, and dynamic tool discovery.
ms.date: 11/23/2026
ms.topic: how-to
ms.localizationpriority: high
---

# Manually package a Copilot UX component as a plug-in

Package an existing SharePoint Framework (SPFx) Copilot UX component solution as a Microsoft 365 Copilot plug-in for the agent gallery. Add `agentConnectors` to the app manifest and manually configure its tenant-specific `mcpServerUrl`. Copilot then discovers the solution's tools dynamically from the deployed SPFx MCP endpoint.

This walkthrough creates a plug-in with **both an included declarative agent and an app-level MCP connector**. The agent's action manifest is still required even though its tools are discovered dynamically.

> [!IMPORTANT]
> For **SPFx 1.24.x**, creating this plug-in package requires the manual configuration and packaging described here. Starting with the upcoming **SPFx 1.25**, developers can choose an **opt-in option to package Copilot UX components as plug-ins**. Plug-in packaging isn't mandatory for every solution. This guidance will be updated with that workflow when it is available.

Here, *manual packaging* means assembling the app package and configuring its endpoint URLs. It does **not** mean maintaining tool definitions manually: both the app-level connector and the included agent use dynamic discovery.

The examples use the preview Microsoft 365 app manifest format used by this integration. The app manifest, declarative-agent schema, action schema, and SPFx version are separate version contracts. Confirm that your target client and publishing channel support dynamic discovery for the included agent and app connector.

The [plug-in schema v2.4](https://developer.microsoft.com/json-schemas/copilot/plugin/v2.4/schema.json) applies to `ai-plugin.json`. Keep its `$schema` URL and `schema_version: "v2.4"` aligned. Don't apply that schema to the outer `manifest.json` or an MCP tool-description catalog. Those files have different structures.

## Prerequisites

- An SPFx 1.24.x solution with working Copilot UX components. Start with [Build your first Copilot UX component](get-started/build-your-first-copilot-app.md).
- The solution's `.sppkg`, `config/package-solution.json`, and agent configuration.
- A target SharePoint Online tenant, permission to deploy to its tenant App Catalog, and approval for any APIs the solution uses.
- A supported Copilot client and the licenses, policies, and plug-in upload permissions required for the target experience. See [availability](overview-copilot-apps.md#availability).
- A JSON editor with schema validation, PowerShell for the packaging command, and two app icons.

Deploy and enable the `.sppkg` in the target tenant before testing the plug-in. Follow [Develop and deploy Copilot UX components](development-and-deployment.md) for deployment prerequisites. The plug-in ZIP connects to that implementation. It doesn't deploy or duplicate the running SPFx components.

## How App Catalog deployment and dynamic resolution work

The `.sppkg` and plug-in ZIP have different responsibilities. The `.sppkg` provides the SPFx implementation; the ZIP tells Copilot how to reach it.

1. **Deploy the SPFx implementation.** Upload and enable the `.sppkg` in the target tenant's SharePoint App Catalog. Deployment registers the solution and its components. Each Copilot UX component declares the tools and input schemas it provides.
2. **Address that deployed solution.** The hostname in the MCP URL selects the tenant, and the `solutionId` query parameter identifies the deployed solution by its `solution.id` from `config/package-solution.json`. The package filename isn't used for this mapping. One solution ID can resolve multiple Copilot UX components and their tools.
3. **Discover the current tools.** Copilot connects to `/_api/mcp/spfx?solutionId=<solution-id>`. SPFx resolves the components belonging to that deployed solution and supplies their current tool definitions through MCP discovery. The plug-in doesn't need to contain the component IDs, tool list, or parameter schemas.
4. **Load the UX implementation.** When a discovered tool is invoked, SPFx connects it to the corresponding UX component, and Copilot loads the component's hosted client-side assets. With `solution.includeClientSideAssets: true`, those assets are deployed from the `.sppkg` to the App Catalog site's `ClientSideAssets` location. SharePoint serves them directly or through the configured Microsoft 365 CDN. The plug-in ZIP doesn't serve the UX code.

```text
Plug-in's tenant URL + solutionId
  -> Deployed SPFx solution in that tenant's App Catalog
  -> Registered Copilot UX components and dynamically discovered tools
  -> Hosted component assets rendered in Copilot
```

> [!IMPORTANT]
> Keep the `.sppkg` deployed and enabled for as long as the plug-in uses it. Publishing the ZIP or copying a solution GUID doesn't provision the implementation. Removing or disabling the SPFx solution can break tool discovery or rendering even if the plug-in still appears in the agent gallery.

See [Automatic hosting from the SharePoint App Catalog](overview-copilot-apps.md#automatic-hosting-from-the-sharepoint-app-catalog) for the asset-hosting model.

## 1. Record the deployment inputs

| Input | Where to obtain it | Example |
| --- | --- | --- |
| SharePoint origin | Root URL of the tenant hosting the deployed solution | `https://contoso.sharepoint.com` |
| SPFx solution ID | `solution.id` in `config/package-solution.json` | `11111111-2222-4333-8444-555555555555` |
| Plug-in app ID | Generate once for this new plug-in | Run `[guid]::NewGuid().ToString()` |
| App version | Your plug-in release version | `1.0.0` |

**The SharePoint origin is environment-specific.** Use `https://[prefix].sharepoint.com`, replacing `[prefix]` with the deployment tenant's prefix. Use the root origin without a trailing slash, site path, or query string. Don't use the `-admin` host, a personal OneDrive host, the full App Catalog site URL, or the Copilot URL.

The endpoint is:

```text
https://[prefix].sharepoint.com/_api/mcp/spfx?solutionId=[solution-id]
```

`[solution-id]` is the **deployed SPFx solution ID**, not a component ID, the new plug-in app ID, or an agent ID.

For a separate plug-in alongside an existing agent, generate a new app GUID and choose distinct agent, action, connector, and action-namespace identifiers. Keep the existing solution ID, component IDs, and tool names: they identify the implementation the plug-in calls. Keep the new app GUID stable for updates to the same plug-in.

## 2. Create the package folder and icons

Create a separate authoring folder. The package contains these five files at the ZIP root:

```text
manifest.json
declarativeAgent.json
ai-plugin.json
color.png
outline.png
```

| File | Purpose |
| --- | --- |
| `manifest.json` | App identity, metadata, icons, app-level connector, and reference to the included agent. |
| `declarativeAgent.json` | Agent instructions, starters, and reference to its action manifest. |
| `ai-plugin.json` | Agent action configuration: MCP endpoint, authorization, and dynamic discovery. It isn't a static tool catalog. |
| `color.png` | 192 x 192 pixel icon, with a full-color background and a recognizable app mark. |
| `outline.png` | 32 x 32 pixel icon, with a white mark on a transparent background. |

Use branding that distinguishes the new plug-in from the original agent. Replace all example publisher, privacy, and terms URLs with accurate information before distribution. See the [app icon guidelines](/microsoftteams/platform/concepts/build-and-test/apps-package#app-icons).

**Don't include or reference `mcp-tools.json` in this package.** Tool definitions, schemas, and UX metadata come from SPFx at runtime. You can retain a manual tool-description file in the authoring folder as a reference without deleting it; leave it out of the ZIP and both manifest entry points.

## 3. Create the app manifest

Create `manifest.json`. If you start from an existing SPFx declarative-agent manifest, **add the top-level `agentConnectors` array** shown in the following section while retaining `copilotAgents` for the included agent. Replace the app GUID, publisher information, tenant prefix, and solution ID:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/teams/vDevPreview/MicrosoftTeams.schema.json",
  "manifestVersion": "devPreview",
  "version": "1.0.0",
  "id": "aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee",
  "developer": {
    "name": "Contoso",
    "websiteUrl": "https://www.contoso.com",
    "privacyUrl": "https://www.contoso.com/privacy",
    "termsOfUseUrl": "https://www.contoso.com/terms"
  },
  "icons": {
    "color": "color.png",
    "outline": "outline.png"
  },
  "name": {
    "short": "Contoso Workplace Plugin",
    "full": "Contoso Workplace Plugin"
  },
  "description": {
    "short": "Interactive employee experiences in Copilot.",
    "full": "Open the Contoso workplace experience through a separately deployed SPFx Copilot UX component."
  },
  "accentColor": "#073B4C",
  "agentConnectors": [
    {
      "id": "ContosoWorkplacePlugin-MCP",
      "displayName": "Contoso Workplace Tools",
      "description": "Open the employee's interactive workplace experience.",
      "toolSource": {
        "remoteMcpServer": {
          "mcpServerUrl": "https://contoso.sharepoint.com/_api/mcp/spfx?solutionId=11111111-2222-4333-8444-555555555555",
          "authorization": {
            "type": "None"
          }
        }
      }
    }
  ],
  "copilotAgents": {
    "declarativeAgents": [
      {
        "id": "contosoWorkplacePluginAgent",
        "file": "declarativeAgent.json"
      }
    ]
  },
  "permissions": ["identity"],
  "validDomains": []
}
```

### Why agentConnectors matters

`agentConnectors` declares the MCP connection exposed through the plug-in model. `copilotAgents` registers the included declarative agent. An agent declaration alone doesn't declare an app-level connector, and the connector doesn't replace the agent's action configuration. This package needs both.

The connector's `id` is a package-local identifier. It isn't the SPFx solution ID. The deployed solution is selected by the `solutionId` inside `mcpServerUrl`.

### Manually configure mcpServerUrl for the deployment tenant

Set `agentConnectors[].toolSource.remoteMcpServer.mcpServerUrl` to the **complete endpoint URL for the tenant where the `.sppkg` is deployed**:

1. Replace the URL's `https://contoso.sharepoint.com` origin with `https://[prefix].sharepoint.com` for the deployment tenant. Keep `/_api/mcp/spfx` as the path.
2. Replace the example GUID with `solution.id` from the deployed solution's `config/package-solution.json`.
3. Use the same complete endpoint in the included agent's action runtime, as shown in the next step.

These are literal package values. The manually assembled ZIP doesn't substitute the installing tenant or resolve placeholders for you. Copying an existing manifest without changing this URL can send discovery to the wrong tenant or solution.

Omit `mcpToolDescription` from `remoteMcpServer`: this connector uses runtime discovery, not a packaged tool-description file.

For this SPFx integration, retain the shown `None` authorization configuration. It declares no separate plug-in credential flow; it does **not** make SharePoint anonymous, grant data access, or bypass sign-in, permissions, consent, or tenant policy. Don't apply this setting to an unrelated protected MCP server.

## 4. Configure the included agent and dynamic action

Create `declarativeAgent.json`:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/copilot/declarative-agent/v1.8/schema.json",
  "version": "v1.8",
  "name": "Contoso Workplace Plugin",
  "description": "Open interactive employee experiences.",
  "instructions": "When the user asks for a daily briefing, call ShowMyDay. Preserve any supplied scope or filter. Let the rendered experience carry the details. If the tool fails, explain that it could not be opened; do not claim success.",
  "conversation_starters": [
    {
      "title": "Show my day",
      "text": "What matters in my workday?"
    }
  ],
  "actions": [
    {
      "id": "contosoWorkplacePluginAction",
      "file": "ai-plugin.json"
    }
  ]
}
```

Adapt the instructions and starters to the tools your deployed solution provides. Use literal instruction text. If you reuse generated source containing `$[file('instruction.txt')]` or environment placeholders, resolve them before creating the ZIP. Compressing files doesn't run the Agents Toolkit substitution step.

The agent's `actions[].file` references `ai-plugin.json`. The file-reference chain is:

```text
manifest.json -> declarativeAgent.json -> ai-plugin.json
```

> [!IMPORTANT]
> Keep `ai-plugin.json` in this package. The agent references it indirectly through the included agent, not directly through the app manifest. Removing it breaks the agent's action reference. A connector-only plug-in requires a different package configuration without this included-agent dependency.

Create `ai-plugin.json`:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/copilot/plugin/v2.4/schema.json",
  "schema_version": "v2.4",
  "namespace": "contosoWorkplacePlugin",
  "name_for_human": "Contoso Workplace",
  "description_for_human": "Interactive employee experiences.",
  "functions": [],
  "runtimes": [
    {
      "type": "RemoteMCPServer",
      "auth": {
        "type": "None"
      },
      "spec": {
        "url": "https://contoso.sharepoint.com/_api/mcp/spfx?solutionId=11111111-2222-4333-8444-555555555555"
      },
      "run_for_functions": ["*"]
    }
  ]
}
```

Keep both entry points configured for dynamic discovery:

| File | Setting | Required value |
| --- | --- | --- |
| `manifest.json` | `agentConnectors[].toolSource.remoteMcpServer.mcpToolDescription` | Omitted. Don't reference a static tool-description file. |
| `ai-plugin.json` | `functions` | An empty array: `[]`. Don't enumerate functions or parameter schemas. |
| `ai-plugin.json` | `runtimes[].run_for_functions` | `["*"]`, so the runtime resolves the server's tools. |
| `ai-plugin.json` | `runtimes[].spec.mcp_tool_description` | Omitted. Don't reference a static tool-description file. |

An empty `functions` array doesn't mean the agent has no tools. SPFx supplies the current tool definitions through MCP discovery. You don't need exported tool schemas or a pinned tool count. See [Dynamic tool discovery](/plugins/plugin-dynamic-tool-discovery).

Before packaging, manually update these two endpoint locations and confirm that their **complete URLs are identical**, including the tenant and solution ID:

| File | Endpoint setting |
| --- | --- |
| `manifest.json` | `agentConnectors[].toolSource.remoteMcpServer.mcpServerUrl` |
| `ai-plugin.json` | `runtimes[].spec.url` |

The first exposes the plug-in connector; the second supplies actions to the included agent. Editing one doesn't update the other. When deploying to another tenant, update both even if you reuse the same `.sppkg` and solution GUID.

### Tenant domains and UX content security policy

Dynamic discovery removes the packaged tool snapshot, but it doesn't remove content security policy (CSP) enforcement. SPFx supplies the tool and UX metadata at runtime. When you inspect that metadata or diagnose a rendering failure, check the deployment tenant:

| UX metadata | What to check |
| --- | --- |
| `frameDomains` | The allowed frame origins include the deployment tenant's SharePoint origin, such as `https://contoso.sharepoint.com`. |
| `resourceDomains` | The allowed resource origins include that same SharePoint origin and any other required resource origins. |

These checks are for the discovered UX configuration, **not instructions to add `mcp-tools.json` to the ZIP**. If you inspect tool metadata containing `_meta["ui/csp"]`, check its `frameDomains` and `resourceDomains`. Neither list ships manually in this dynamic package. Don't reintroduce a static file or either tool-description reference to supply CSP settings. The app manifest's `validDomains` isn't a substitute for UX CSP configuration.

Use exact HTTPS origins, not `*.sharepoint.com`, site paths, or the full MCP endpoint. If the deployed component uses more frames or resources, verify the corresponding origins in runtime diagnostics. Correct the deployed configuration if metadata points to another environment. Changing the plug-in endpoint alone doesn't prove the discovered UX can render.

## 5. Validate and create the ZIP

Before packaging, verify:

- The tenant named in both MCP URLs has the `.sppkg` deployed and enabled in the App Catalog, and its `solution.id` matches the URL's `solutionId`.
- The new app GUID differs from the original agent's app ID and the SPFx solution ID.
- Both endpoint URLs have the target tenant origin and the deployed `solution.id`.
- The included agent's `functions` is empty, its runtime uses `["*"]`, and its runtime has no `mcp_tool_description`.
- The app connector has no `mcpToolDescription`, and the ZIP has no `mcp-tools.json`.
- The reference chain resolves: `copilotAgents.declarativeAgents[].file` points to `declarativeAgent.json`, and that agent's `actions[].file` points to the packaged `ai-plugin.json`.
- Both icon files exist, and instructions contain no unresolved placeholders.
- JSON files pass their declared schemas, and icons have the required dimensions and transparency.
- The package contains no secrets, tokens, source bundles, `.sppkg`, or development-only files.

Run the following steps from the folder containing the five package files:

```powershell
$files = @(
    'manifest.json',
    'declarativeAgent.json',
    'ai-plugin.json',
    'color.png',
    'outline.png'
)
Compress-Archive -LiteralPath $files -DestinationPath '.\workplace-plugin.zip' -Force
```

Open the ZIP and confirm that it contains only the five listed files, with `manifest.json` at its root rather than inside a parent folder. Don't include authoring scripts, a reference tool catalog, a README, the SVG icon source, or another ZIP. Recreate the ZIP after changing any packaged JSON or PNG file; an existing ZIP doesn't update automatically.

Validate the **built ZIP** with the supported upload/package validator. Packaging doesn't deploy the `.sppkg`, publish the plug-in, or test tenant access. Schema validation alone doesn't prove endpoint reachability, runtime discovery, CSP compatibility, or client support.

## 6. Upload and test in the agent gallery

1. Use the plug-in upload flow supported in your tenant. For organization distribution, an administrator opens **Microsoft 365 admin center** > **Agents** > **Tools** > **Registry** > **Upload** and selects the ZIP. See [Publish your plug-in to your organization](/plugins/publish-plugin-organization).
2. Review the plug-in and its included agent and connector. Initially scope access to a test user or group and complete installation, permissions, and policy review.
3. Confirm that the assigned user can discover and install or enable the new entry in the Copilot agent gallery. Check the distinct name, icon, and identity.
4. Open the included agent in a new conversation and run each starter. Confirm that tools are discovered from the target SPFx endpoint and the expected UX renders.
5. Test inline/fullscreen behavior where supported, arguments, themes, and permitted data access by using the intended user's account. Check CSP diagnostics for the correct SharePoint tenant.
6. If the target experience also invokes the plug-in-level connector directly, test that path separately. Success in the included agent doesn't prove the connector path works, or vice versa.

Plug-in publication, administrator approval, and user availability are separate steps. An included agent can also appear in **Agents** > **All agents** > **Registry**; that record isn't a substitute for reviewing the plug-in in **Tools** **Registry**. The SharePoint App Catalog hosts the SPFx solution, not the plug-in ZIP.

Record the app ID, package version, tenant origin, SPFx solution version, tested client, and test result before expanding access. Don't describe a locally validated ZIP as tenant-tested until upload and authenticated invocation succeed.

## Move to another tenant or release an update

| Change | Required action |
| --- | --- |
| Different deployment tenant | Deploy the `.sppkg` there; manually update `mcpServerUrl` in the app connector and `spec.url` in the agent action; rebuild and upload the ZIP; verify discovery, runtime CSP domains, and rendering in the new tenant. |
| Component implementation or tool contract changes | Rebuild and deploy the `.sppkg`; allow dynamic discovery to refresh, then retest. No packaged tool list needs updating. |
| Tool names change and agent instructions refer to them | Redeploy the solution and update the affected instructions/starters; increment app `version`, rebuild, and upload the plug-in. |
| Agent instructions, starters, icons, or other package metadata change | Keep the app ID, increment app `version`, rebuild, and upload the plug-in. |
| Independent side-by-side plug-in | Generate a new app GUID and distinct package-local identifiers; keep the deployed solution ID if both use the same SPFx implementation. |

Dynamic tool definitions can be cached for a few minutes. Starting a new conversation doesn't bypass that cache. Allow propagation and verify the actual discovered tools before diagnosing an update as failed.

The same `.sppkg` can serve multiple tenants, but this plug-in ZIP is **tenant-specific** because its endpoints identify a deployment tenant. Dynamic discovery doesn't make a hard-coded tenant URL portable or grant access to another tenant.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Upload rejects the manifest or file references | Confirm schema/version pairs, required files, ZIP root layout, icon requirements, resolved placeholders, and support for dynamic connectors. |
| Included agent is present, but the app has no plug-in connector | Check that `manifest.json` contains the top-level `agentConnectors` array and its `remoteMcpServer.mcpServerUrl`, not only `copilotAgents`. Also verify tenant installation and availability policies. |
| Agent action is missing or its file can't be found | Follow the reference chain from `manifest.json` through `declarativeAgent.json`; retain `ai-plugin.json` in the ZIP even though the app manifest doesn't reference it directly. |
| Plug-in is visible, but its tools or component assets are unavailable | Confirm that the `.sppkg` remains deployed and enabled in the target tenant's App Catalog. Check the solution-ID mapping and hosted asset availability; installing the plug-in ZIP alone doesn't deploy the UX implementation. |
| Tools aren't discovered | Check both endpoint URLs, deployed solution availability, and tenant approval. The agent needs `functions: []`, `run_for_functions: ["*"]`, and no runtime `mcp_tool_description`; the app connector must omit `mcpToolDescription`. |
| Tool is found, but the UX is blank or CSP-blocked | Inspect runtime UX metadata and both CSP domain lists. Verify the SharePoint tenant and additional frame/resource dependencies. |
| Tool targets the wrong tenant or solution | Manually correct both endpoint URLs. Confirm the hostname is the deployment tenant and `solutionId` is the deployed `solution.id`, not an app/component ID or a value copied from another sample. |
| User can't find or use the plug-in | Check publication status, assignment, installation, licensing, consent, policies, and client support. |
| Another agent is unexpectedly updated | Check whether the package reused an existing app GUID instead of a new identity. |
| Old parameters remain after a component update | Confirm the updated `.sppkg` is deployed, allow discovery-cache propagation, and test in a new conversation. Don't add a static tool snapshot as a workaround. |

## See also

- [Configure Copilot UX components and agents](component-and-agent-configuration.md)
- [Develop and deploy Copilot UX components](development-and-deployment.md)
- [Dynamic tool discovery](/plugins/plugin-dynamic-tool-discovery)
- [Package your plug-in](/plugins/package-plugin)
- [Test and validate your plug-in](/plugins/validate-plugin)
