---
title: Troubleshoot Copilot UX components
description: Find and fix common problems when you build, deploy, and update a Copilot UX component and its agent in Microsoft 365 Copilot.
ms.date: 10/28/2026
ms.localizationpriority: high
---

# Troubleshoot Copilot UX components

A Copilot UX component runs in several places: your code in the Copilot Workbench, the solution in the SharePoint app catalog, the agent in the tenant agent catalog, and the tool call in Microsoft 365 Copilot. A problem in any one of them can look the same to the user: the agent answers in text, or the component doesn't render. This article helps you find which part failed and fix it.

Before troubleshooting, check the [license and supported-client requirements](overview-copilot-apps.md#availability). At GA, iOS and Android aren't supported. A solution combining Copilot UX components and SPFx Teams functionality also has an automatic-sync limitation; use the [manual Teams package workaround](overview-copilot-apps.md#ga-limitations).

| Symptom | Go to |
| --- | --- |
| The agent doesn't appear in Copilot | [The agent doesn't appear in Copilot](#the-agent-doesnt-appear-in-copilot) |
| **Add to Teams** shows "Couldn't add app to Teams. Check your network connection and try again." | [Add to Teams fails](#add-to-teams-fails) |
| The agent says the tool isn't available | [Copilot can't call the tool](#copilot-cant-call-the-tool) |
| The tool fails with "CopilotComponent '...' not found in solution '...'" | [The agent calls an old solution](#the-agent-calls-an-old-solution) |
| After an update, the component gets the old parameters | [Copilot uses the old tool definition after an update](#copilot-uses-the-old-tool-definition-after-an-update) |
| The component gets missing or wrong parameters | [The tool gets the wrong arguments](#the-tool-gets-the-wrong-arguments) |
| The component shows a loading skeleton that never ends | [The component never renders](#the-component-never-renders) |
| Approving a Microsoft Graph permission fails | [A Microsoft Graph permission can't be approved](#a-microsoft-graph-permission-cant-be-approved) |
| The component works for some URLs or users and fails for others | [The component fails on unexpected data](#the-component-fails-on-unexpected-data) |
| Context cannot be sent to Copilot | [Context is too large or the host rejects the message](#context-is-too-large-or-the-host-rejects-the-message) |
| Agent schema validation fails during build | [The agent fails build-time validation](#the-agent-fails-build-time-validation) |

## Find where the problem is

Before you change code, find out whether the problem is in your component or in the deployment.

### Test in the Copilot Workbench first

The Copilot Workbench runs your component code with the properties you enter. It doesn't use the agent, the tool description, or the tool call from Copilot. So:

- If the component fails in the Workbench, the problem is in your code. Fix it there first.
- If the component works in the Workbench but fails in Copilot, the problem is in the agent, the tool definition, or the deployment. Your component code is probably fine.

For more information about the Workbench, see [Build your first Copilot UX component](get-started/build-your-first-copilot-app.md#test-in-the-copilot-workbench).

### Turn on developer mode in Copilot

Copilot can show what the agent did for each response, including the tool call and the arguments it sent.

1. Open the agent in Microsoft 365 Copilot.
1. Enter `-developer on` and submit it.
1. Start a new conversation with the agent and send your prompt.
1. Under the response, open **Agent debug info**.

The debug info has the information you need for most sections in this article:

| Field | What it tells you |
| --- | --- |
| **Agent version** | The version of the agent that Copilot loaded. It's the `version` from **./copilot/manifest.json**. |
| **Actions** | The tools that Copilot matched for the prompt, their version, and whether Copilot selected them. |
| **Executed actions** | The tool that Copilot called, the version of the tool definition it used, the tool arguments, the MCP server URL, and the response. |

App and tool versions identify different artifacts and aren't required to be numerically identical. Inspect the actual tool arguments and deployed configuration when diagnosing stale definitions. See [Copilot uses the old tool definition after an update](#copilot-uses-the-old-tool-definition-after-an-update).

## The agent doesn't appear in Copilot

After **Add to Teams**, the agent might not appear in Copilot for some time, even when the admin centers already list it.

1. Confirm that the app is deployed:
    - In the Teams admin center, under **Manage apps**, the app shows **App status: Unblocked**.
    - In the Microsoft 365 admin center, under **Agents**, the agent shows **Status: Available**.
1. Allow for deployment propagation and test in a new conversation. Verify that you're signed in with the intended licensed account and tenant.
1. If the agent still doesn't appear, install it for users from the Teams admin center.
1. Search for the agent by its name. It might not appear in the agent list before it appears in search.

### Remove old copies of the agent

Deploying with a new Teams app ID can create a separate agent. Use **Agent debug info** to identify the agent you're testing. Work with the tenant administrator to retire obsolete copies only after checking ownership and user impact. Don't delete agents or change identities as a routine update step.

## Add to Teams fails

When **Add to Teams** fails, the app catalog shows only "Couldn't add app to Teams. Check your network connection and try again." To see the real error:

1. Open the browser developer tools on the app catalog page and select the **Network** tab.
1. Select **Add to Teams** again.
1. Select the failed `SyncSolutionToTeams` request and read the response.

One possible response is a 400 error containing "The remote server returned an error: (409) Conflict." Check whether the app ID and version duplicate a deployed package. Also check the [combined Copilot/Teams automatic-sync limitation](overview-copilot-apps.md#ga-limitations).

### Change the Teams app version

First decide whether another sync is required. For a component-only or tool-parameter update, redeploy the SPFx solution and test runtime discovery in a new conversation. **Don't re-sync an unchanged baseline merely to update a component.**

For a baseline-agent update, inspect the built Teams app manifest and compare its numeric `version` with the deployed app. The build automatically updates the app version for relevant changes, but a clean build or a different build machine can have different local build state. If the built package would reuse a deployed app version, update the source app version in **./copilot/manifest.json**, rebuild and package, then upload and sync the changed baseline.

Don't use the declarative-agent schema version (such as `v1.8`) as an app version counter. See [Keep version fields separate](development-and-deployment.md#keep-version-fields-separate).

### Change the Teams app ID

Changing the app ID creates a different identity and can leave users with duplicate agents or an old solution binding. Keep the existing identity for normal updates. If an app was deleted and a conflict persists, collect the sync response, app ID, package version, and tenant details for administrator/support investigation before planning an identity migration.

## Copilot can't call the tool

The agent answers in text and says the tool isn't available, for example: "I can't call MyCopilotAppTool because no such tool is currently available to me in this session."

Open **Agent debug info** for the response:

- If **Executed actions** shows a response with "CopilotComponent '...' not found in solution '...'", the agent calls a solution that doesn't have the component. See [The agent calls an old solution](#the-agent-calls-an-old-solution).
- If **Actions** has no tool, or the action has no name, Copilot hasn't loaded the tool definition yet. This can happen right after you deploy a new agent. Wait, and test again in a new conversation.

### The agent calls an old solution

The agent package doesn't contain the URL of the tool. **Add to Teams** fills it in with the ID of the solution that ran the sync: `https://<tenant>.sharepoint.com/_api/mcp/beta/spfx?solutionId=<solution ID>`. You can see this URL in **Executed actions** as the MCP server URL.

The agent stays bound to that solution ID. If you delete the solution, or you deploy a package with a new solution ID but the same Teams app ID, the agent can still call the old solution. The tool call then fails with "CopilotComponent '[[TOOL_NAME]]' not found in solution '[[SOLUTION_ID]]'."

To fix it:

1. Compare the `solutionId` in the MCP server URL with the `id` in the `solution` section of **./config/package-solution.json**.
1. If they're different, select the solution in the app catalog and select **Add to Teams** again.
1. If the sync fails, see [Add to Teams fails](#add-to-teams-fails).

Keep both identities stable for ordinary updates. If an identity change is intentional, plan it as a migration and verify old-agent retirement separately.

## Copilot uses the old tool definition after an update

When you change the tool parameters, for example rename or add a property in the properties schema, Copilot can keep calling the tool with the old parameters after you deploy the update. Your new component code then gets properties it doesn't expect.

Dynamic tool discovery caches tool definitions for a few minutes after an updated `.sppkg` is deployed. New functions can take a few minutes to become available for the same reason. UX changes are available immediately after deployment because the component code is served directly from the SharePoint App Catalog site collection, independently of the discovery cache.

Open **Agent debug info** and compare the versions:

- **Agent version** and the **Actions** version show the version that Copilot loaded for the agent.
- The **Executed actions** version shows the tool definition that Copilot used for the call.

If the **Executed actions** version is older, Copilot built the call from the old tool definition. The tool arguments show the old parameter names, for example `{"message":"https://contoso.sharepoint.com/sites/marketing"}` when the new tool has a `siteUrl` parameter.

To work with this:

- Confirm the updated `.sppkg` is deployed. Tool parameters and the number of component functions are discovered dynamically; no re-sync is needed unless the baseline agent also changed.
- Allow a few minutes for the discovery cache to refresh, then test again in a new conversation. Starting a new conversation doesn't bypass the cache; don't re-sync an unchanged baseline to refresh it.
- Validate the properties in your component and show a clear message when a required property is missing, for example "No site URL was given." Then you can see the problem right away instead of a component that fails without a reason.
- Test parameter changes in the Copilot Workbench, where the component gets the properties you enter.

## The tool gets the wrong arguments

The component renders but shows that a property is missing or wrong, for example "No site URL was given." Copilot decides which arguments to send from the text you give it. Open **Agent debug info** and check the tool arguments in **Executed actions**.

- **The arguments use old property names:** see [Copilot uses the old tool definition after an update](#copilot-uses-the-old-tool-definition-after-an-update).
- **A property is missing or has the wrong value:** make the description clearer. Copilot reads three descriptions:
  - The `.describe()` text of each property in the properties schema. Say what the value is and give an example, for example "The absolute URL of a SharePoint site, such as `https://contoso.sharepoint.com/sites/marketing`."
  - The tool `description` in the component manifest. Say when Copilot should call the tool.
  - The agent instructions in **./copilot/instruction.txt**. Say what to do when the user doesn't give a required value, for example ask for it.
- **The prompt doesn't have the value:** if a conversation starter doesn't contain the value, Copilot has nothing to send. Make the instructions tell the agent to ask the user.

For an example of a tool with clear descriptions, see [Connect your Copilot UX component to SharePoint data](get-started/connect-to-sharepoint-data.md).

## The component never renders

Copilot calls the tool, **Executed actions** shows **200 OK**, but the component shows a loading skeleton that never ends. The browser console shows:

```text
Error: Host did not send tool-input within 30000ms
```

A failed request to `/_layouts/15/PortableComponent.aspx`, including one reported through a service worker, is diagnostic evidence rather than proof of a single cause. Inspect the network response, client console, sign-in state, and access to the deployed assets. Compare a supported browser and desktop client and collect the failing request details for support. Don't unregister service workers as a universal GA repair procedure.

## The agent fails build-time validation

Check the reported schema path and required fields in the source agent definition. Verify referenced instruction/action files exist and that the schema URL and declared version agree. Fix source configuration and rebuild; don't repair only the generated temporary package. See [Configure Copilot UX components and agents](component-and-agent-configuration.md).

## Context is too large or the host rejects the message

At GA, text context supplied using `createCopilotTextContent` is limited to **10 KB**. Larger text context blocks sending the message to Copilot. The helper creates a block; it doesn't send by itself. Reduce the view/selection or create a deliberate shorter summary, then retry.

Handle rejected promises and check `isError` on follow-up responses. Don't display success after discarding context. See [Provide Copilot with context from your component](provide-context-to-copilot.md).

## A Microsoft Graph permission can't be approved

Your component calls Microsoft Graph and the call fails with 401 or 403 because the permission isn't approved. You try to approve it with the CLI for Microsoft 365, and the command fails:

```console
m365 spo serviceprincipal grant add --resource "Microsoft Graph" --scope "Mail.Read"
```

```text
The service principal for permssion request could not be found.
```

In tenants that use the new SharePoint Framework principal, **SharePoint Online Web Client Extensibility** (app ID `08e18876-6177-487e-b8b5-cf950c1e598c`), the API that this command uses can't find the principal. The approved Microsoft Graph permissions for SPFx are on a delegated permission grant of this principal. You can change the grant with Microsoft Graph. You must be a Global Administrator or a Privileged Role Administrator.

1. Get the ID of the SPFx principal and of Microsoft Graph:

    ```http
    GET https://graph.microsoft.com/v1.0/servicePrincipals(appId='08e18876-6177-487e-b8b5-cf950c1e598c')?$select=id
    GET https://graph.microsoft.com/v1.0/servicePrincipals(appId='00000003-0000-0000-c000-000000000000')?$select=id
    ```

1. Get the grant for all users:

    ```http
    GET https://graph.microsoft.com/v1.0/oauth2PermissionGrants?$filter=clientId eq '{spfx-principal-id}' and resourceId eq '{graph-principal-id}'
    ```

    Use the grant where `consentType` is `AllPrincipals`.

1. Add the permission to the `scope` of the grant. The `scope` is a list of permissions separated by spaces. Keep the permissions that are already there.

    ```http
    PATCH https://graph.microsoft.com/v1.0/oauth2PermissionGrants/{grant-id}
    Content-Type: application/json

    {
      "scope": "User.Read Calendars.Read Mail.Read"
    }
    ```

To remove a permission, send the same request without it. The permissions apply to every SPFx solution in the tenant, not only to yours. For more information about requesting permissions, see [Access data from a Copilot UX component](access-data.md#request-microsoft-graph-permissions).

## The component fails on unexpected data

A component that works for one site or user can fail for another. Test these cases in the Copilot Workbench:

- **A URL that isn't a site:** Copilot can send a page URL or a document URL instead of a site URL. A SharePoint REST call to a URL like that can return **200 OK** with a body that isn't the data you expect, for example HTML or JSON without a `value` array. Don't rely on the status code alone. Check that the response has the shape you expect before you use it, and show a message such as "No SharePoint site was found at this URL. Use the URL of the site, not the URL of a page or a list."
- **A user without access:** the call returns 401 or 403 when the user can't access the site or the permission isn't approved. Tell the user what to do instead of showing the raw error.
- **A site that doesn't exist:** the call returns 404.

For an example of these checks, see [Connect your Copilot UX component to SharePoint data](get-started/connect-to-sharepoint-data.md) and [Access data from a Copilot UX component](access-data.md).

## See also

- [Overview of Copilot UX components](overview-copilot-apps.md)
- [Build your first Copilot UX component](get-started/build-your-first-copilot-app.md)
- [Connect your Copilot UX component to SharePoint data](get-started/connect-to-sharepoint-data.md)
- [Access data from a Copilot UX component](access-data.md)
- [Display modes in Copilot UX components](displayMode.md)
- [Develop and deploy Copilot UX components](development-and-deployment.md)
- [Provide context to Copilot](provide-context-to-copilot.md)
