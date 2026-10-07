---
title: Troubleshoot Copilot UX components
description: Find and fix common problems when you build, deploy, and update a Copilot UX component and its agent in Microsoft 365 Copilot.
ms.date: 10/04/2026
ms.localizationpriority: high
---

# Troubleshoot Copilot UX components

> [!IMPORTANT]
> Copilot UX components are currently in **preview** and are subject to change. Do not use them in production environments. Some of the behavior described in this article is preview behavior that might change before general availability.

A Copilot UX component runs in several places: your code in the Copilot Workbench, the solution in the SharePoint app catalog, the agent in the tenant agent catalog, and the tool call in Microsoft 365 Copilot. A problem in any one of them can look the same to the user: the agent answers in text, or the component doesn't render. This article helps you find which part failed and fix it.

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

## Find where the problem is

Before you change code, find out whether the problem is in your component or in the deployment.

### Test in the Copilot Workbench first

The Copilot Workbench runs your component code with the properties you enter. It doesn't use the agent, the tool description, or the tool call from Copilot. So:

- If the component fails in the Workbench, the problem is in your code. Fix it there first.
- If the component works in the Workbench but fails in Copilot, the problem is in the agent, the tool definition, or the deployment. Your component code is probably fine.

For more information about the Workbench, see [Build your first SharePoint Copilot App](get-started/build-your-first-copilot-app.md#test-in-the-copilot-workbench).

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

When the three versions differ, Copilot isn't using your latest deployment everywhere. For more information, see [Copilot uses the old tool definition after an update](#copilot-uses-the-old-tool-definition-after-an-update).

## The agent doesn't appear in Copilot

After **Add to Teams**, the agent might not appear in Copilot for some time, even when the admin centers already list it.

1. Confirm that the app is deployed:
    - In the Teams admin center, under **Manage apps**, the app shows **App status: Unblocked**.
    - In the Microsoft 365 admin center, under **Agents**, the agent shows **Status: Available**.
1. Sign out of Microsoft 365, close all browser windows, and sign in again. Reloading the page isn't enough.
1. If the agent still doesn't appear, install it for users from the Teams admin center.
1. Search for the agent by its name. It might not appear in the agent list before it appears in search.

### Remove old copies of the agent

Each time you deploy with a new Teams app ID, you get a new agent, and the old one stays. Several agents with the same name make it hard to know which one you're testing. In the Teams admin center, under **Manage apps**, search for the agent name and delete the copies you don't need. Use developer mode to confirm which agent you're talking to: the agent ID is in **Agent debug info**.

## Add to Teams fails

When **Add to Teams** fails, the app catalog shows only "Couldn't add app to Teams. Check your network connection and try again." To see the real error:

1. Open the browser developer tools on the app catalog page and select the **Network** tab.
1. Select **Add to Teams** again.
1. Select the failed `SyncSolutionToTeams` request and read the response.

The most common error is a 400 response that contains "The remote server returned an error: (409) Conflict." Teams rejects the app because an app with the same ID and version already exists.

### Change the Teams app version

Teams accepts an update only when the `version` of the Teams app is higher than the deployed version. The build sets this version for you:

- The build compares the agent files in **./copilot** with the last build. When they changed, it increases the fourth part of the version, for example from `1.0.0` to `1.0.0.1`.
- When the agent files didn't change, the build reuses the last version.
- The build saves its state in **./teams/.copilot-agent-hotfix.json** and writes the version it used to the build output, for example `Teams manifest.json version: 1.0.0.1 (content changed — bumped '1.0.0' → '1.0.0.1')`.

If you change only your component code and the solution version in **./config/package-solution.json**, the agent files are the same and the build reuses the Teams version. **Add to Teams** then fails with the 409 conflict. To fix it, increase `version` in **./copilot/manifest.json**, rebuild, package, upload the package again, and select **Add to Teams**.

The build stores the version in **./teams/.copilot-agent-hotfix.json**. If you delete the **teams** folder, or you build on another computer, the build starts again from the version in **./copilot/manifest.json** and can create a version that Teams already has. Increase `version` in **./copilot/manifest.json** after a clean build.

### Change the Teams app ID

If you deleted the app in the Teams admin center, **Add to Teams** for the same Teams app ID can still fail with the 409 conflict. Give the app a new ID: replace `id` in **./copilot/manifest.json** with a new GUID, rebuild, package, and deploy again. This creates a new agent, so remove the old copies. For more information, see [Remove old copies of the agent](#remove-old-copies-of-the-agent).

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

Don't change the solution ID of a deployed solution unless you also change the Teams app ID and remove the old agent.

## Copilot uses the old tool definition after an update

When you change the tool parameters, for example rename or add a property in the properties schema, Copilot can keep calling the tool with the old parameters after you deploy the update. Your new component code then gets properties it doesn't expect.

Open **Agent debug info** and compare the versions:

- **Agent version** and the **Actions** version show the version that Copilot loaded for the agent.
- The **Executed actions** version shows the tool definition that Copilot used for the call.

If the **Executed actions** version is older, Copilot built the call from the old tool definition. The tool arguments show the old parameter names, for example `{"message":"https://contoso.sharepoint.com/sites/marketing"}` when the new tool has a `siteUrl` parameter.

To work with this:

- Wait, and test again in a new conversation.
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

The console can also show an error from the SharePoint service worker (`spserviceworker.js`) with "Failed to fetch" for a request to `/_layouts/15/PortableComponent.aspx`. The SharePoint service worker breaks the load of the page that hosts your component, so the component never gets its properties from Copilot. Your component code doesn't run.

To fix it:

1. Open the browser developer tools on the Copilot page.
1. Select **Application** > **Service workers**.
1. For your SharePoint domain, for example `https://contoso.sharepoint.com`, select **Unregister**.
1. Reload Copilot and send the prompt again.

The same component can render in Copilot in Microsoft Teams without this fix. A private browser window doesn't prevent the problem.

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

- [Overview of SharePoint Copilot Apps](overview-copilot-apps.md)
- [Build your first SharePoint Copilot App](get-started/build-your-first-copilot-app.md)
- [Connect your Copilot UX component to SharePoint data](get-started/connect-to-sharepoint-data.md)
- [Access data from a Copilot UX component](access-data.md)
- [Display modes in SharePoint Copilot components](displayMode.md)
