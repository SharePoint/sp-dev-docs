---
title: Build a contract management app with a coding agent
description: Build a contract management app for a legal team with the SharePoint Embedded MCP server and a coding agent, and see how each part of the app maps to SharePoint Embedded.
ms.date: 11/27/2026
ai-usage: ai-assisted
---

# Build a contract management app with a coding agent

**Applies to:** Developer

<!-- agent:
task_type: how-to
audience: developer
outcome: Build and run a contract management app in a development tenant with the SharePoint Embedded MCP server, and map each part of the app to a SharePoint Embedded concept.
next: share-files-manage-permissions.md
-->

[!INCLUDE [Install the SharePoint Embedded MCP server](../includes/mcp-install-buttons.md)]

This example builds a contract management app for a legal team. The team tracks each contract matter, such as a master services agreement or a nondisclosure agreement (NDA), from first draft to signature and renewal.

You describe the app to a coding agent. The agent calls tools from the [SharePoint Embedded MCP server](sharepoint-embedded-mcp-server.md) to create the SharePoint Embedded resources in your tenant, and then scaffolds and runs the app on your machine.

> [!CAUTION]
> These prompts create real resources in the tenant you're signed in to. Use a development tenant, not production.

## Prerequisites

- The SharePoint Embedded MCP server, installed in an MCP client such as Visual Studio Code with GitHub Copilot. Use the buttons at the top of this article, or follow [Install and configure](sharepoint-embedded-mcp-server.md#install-and-configure).
- The remaining [MCP server prerequisites](sharepoint-embedded-mcp-server.md#prerequisites): Node.js 22 or later, the Azure CLI, and tenant-admin access.
- A development tenant that doesn't already have a trial container type. A tenant can have only one trial container type at a time. An expired trial type still occupies that slot until it's removed; creating another owning app doesn't reset the quota. For the trial restrictions, see [Create a trial container type](create-container-type.md#create-a-trial-container-type).

## How the app maps to SharePoint Embedded

Each action in the app corresponds to a SharePoint Embedded concept, and the coding agent uses an MCP tool to set it up:

| In the app | In SharePoint Embedded | Tool the agent calls |
|---|---|---|
| The contract management product | An owning app, one [container type](../plan/container-types-containers.md), and a default container | `project_provision` |
| A new contract matter | One container, which is the matter's content and permission boundary | `container_create` |
| Drafts, signed copies, and correspondence | Folders in the matter's container | `content_folder_create` |
| Contract notes | A file in the matter's container | `content_file_upload` |
| Reviewers on a matter | [Members of the container](share-files-manage-permissions.md#understand-container-roles) with a role such as writer | `container_permissions_manage` |

SharePoint Embedded stores the documents and enforces access. Contract stages, due dates, approvals, and signatures are your app's business logic. Keep them in your app's data store, or as [metadata columns](container-metadata.md) on the files.

## Build the app

1. Create an empty local folder for the reference app. If your MCP client requires a workspace, select that existing folder before starting the chat. Don't overwrite an existing app when retrying setup.
1. Choose the development tenant ID and sign in to that tenant. Replace `<tenant-id>` before running this command:

    ```powershell
    az login --tenant <tenant-id> --allow-no-subscriptions
    ```

    If you've used the server with another tenant, first follow [Work with more than one tenant](sharepoint-embedded-mcp-server.md#work-with-more-than-one-tenant). Keep each server instance's authentication and provisioning state separate.
1. In your MCP client, such as Copilot Chat in agent mode, paste this prompt:

    ```text
    Using the SharePoint Embedded MCP server, build a contract management app in my tenant:

    1. Check my sign-in and provisioning readiness, and confirm the intended tenant ID before changing resources. Create or reuse an owning app named "Contract Matters" if needed to authenticate SPE calls, complete its sign-in, and list the container types. If a trial type already exists, report it and stop before creating a new type; do not delete existing resources or enable paid billing automatically.
    2. Using that saved owning app, provision a trial container type named "Contract Matters" and its default container.
    3. Scaffold the React reference app as "contract-matters" in the empty target folder, and write its configuration from the provisioning state before creating the matter containers. Use a distinct local SPA callback path, such as /auth/callback.html, configure MSAL and its callback page to use it, and register that exact URI as a Single-page application redirect. Preserve the MCP desktop loopback redirect.
    4. Use container_create, not the app UI, to create two containers for these contract matters: "Fabrikam master services agreement" and "Northwind mutual NDA".
    5. In each matter container, create the folders Drafts, Signed, and Correspondence.
    6. Run the app locally and give me its URL. Verify browser sign-in, the three active containers, and the exact three folder names in each matter. Report any incomplete step instead of treating a running web server as completed provisioning.
    ```

1. Complete both sign-ins when prompted: the Azure CLI sign-in and the owning app's Microsoft sign-in are separate. Approve each tool call when the client asks. Folder and file operations also ask you to grant content access first; review any additional permission consent before approving it.

A trial container type is free and lasts 30 days. It allows up to five containers, including containers in the recycle bin. This example uses three: the default container created during provisioning and the two matter containers.

### Verify the result

Open the local URL, sign in with an account in the intended tenant, and refresh the container list. Confirm all of these outcomes:

- The connection settings contain the intended tenant, owning app, and container type IDs.
- The default container and both named matter containers exist and are active.
- Each matter contains folders named exactly `Drafts`, `Signed`, and `Correspondence`.
- Container and folder requests succeed without an authentication or service error.
- The reference app's production build succeeds.

Keep the IDs returned by provisioning. If a later step fails, resume with those resources instead of creating duplicate apps or containers.

## Troubleshoot setup

### The server still uses the previous tenant

Run `status_get` after restarting the configured server, and compare its tenant ID with the one you intended to use. A successful sign-in in another terminal doesn't prove that the running MCP server uses that terminal's cache. Use separate `SPE_DATA_DIR` and `AZURE_CONFIG_DIR` paths, sign in with the same Azure CLI directory configured for the server, and restart the correct server instance. Don't reuse an old tenant's provisioning state or clear another instance's cache.

For configuration examples and owning-app sign-in recovery, see [Use the MCP server to build apps with a coding agent](sharepoint-embedded-mcp-server.md#work-with-more-than-one-tenant).

### Browser sign-in fails with AADSTS9002326 or AADSTS50011

Check the exact redirect URI requested by MSAL and its platform on the owning Entra app. Register the browser callback under **Single-page application**, not **Web** or **Mobile and desktop applications**.

Entra ignores port numbers when matching localhost redirect URIs. An MCP desktop callback of `http://localhost` and a SPA callback of `http://localhost:5173` therefore collide, even though both appear in the registration. Use different paths, for example:

| Client | Platform | Example redirect URI |
|---|---|---|
| MCP server | Mobile and desktop applications | `http://localhost` |
| Local React app | Single-page application | `http://localhost:5173/auth/callback.html` |

The React app must request that same SPA callback and provide a callback page appropriate for its MSAL sign-in flow. Adding the URI in Entra without updating the app doesn't fix the mismatch. For a popup-based app, a minimal static callback page lets the opener finish authentication; a redirect-based app must process the redirect response with MSAL.

For the matching rules, see [Redirect URI localhost exceptions](/entra/identity-platform/reply-url#localhost-exceptions). Reload the app and start a new sign-in after correcting the registration.

### Trial provisioning fails with HTTP 422

If the error says the tenant has reached its maximum number of trial container types, inspect the existing trial with `container_type_list` and `container_type_get`. Check its owning app, active containers, and recycle-bin containers before considering cleanup. An expiry date or rounded storage value isn't proof that the content is disposable.

Ask the resource owner to approve any irreversible deletion. Don't remove unrelated standard types to address the single-trial quota, delete an owning app before its containers, or run `project_cleanup` against newly created state to try to remove an unrelated old trial. Keep any owning app already created for this example so provisioning can resume after capacity is available.

If approved cleanup isn't possible, use another development tenant, request support, or explicitly choose standard billing after reviewing its costs. Don't switch billing automatically.

### An existing container is read-only to administrators

An older container can be controlled by its owning application even when an administrator can view it. If SharePoint reports that the container is read-only to administrators or Graph returns `Admin operations are not permitted on this container.`, stop the administrative deletion attempt. `-Force`, additional admin roles, or removing the owning app aren't a cleanup solution.

Use the owning application's supported data-access workflow instead. In an application-only workflow, the app needs the Microsoft Graph `FileStorageContainer.Selected` application permission, the appropriate container-type grant, and a valid credential. Delegated administrative access with `FileStorageContainer.Manage.All` isn't equivalent to that application-only identity.

Confirm that existing certificates or secrets haven't expired. Don't expose or export private keys, create credentials without approval, or override retention and read-only controls. If a temporary credential is explicitly approved, preserve existing credentials and remove only the temporary credential and its private key after the attempt.

For supported deletion permissions, see [Delete a container](/graph/api/filestorage-delete-containers) and [Permanently remove a deleted container](/graph/api/filestorage-delete-deletedcontainers). Confirm that both the active and deleted collections are empty before unregistering and removing an approved trial type. If the owning application can't perform supported cleanup, contact its owner or Microsoft support.

### Permanent deletion fails in a preview server

Check the container's current collection and the operation supported by your installed server version. The Graph `POST /storage/fileStorage/containers/{id}/permanentDelete` action targets an active container; it isn't the same operation as `DELETE /storage/fileStorage/deletedContainers/{id}` for a recycled container.

If a preview tool returns `Operation not supported` or `Invalid hostname for this tenancy`, record the server version, error, and correlation ID. Don't repeat the same failed call or treat a soft deletion as permanent cleanup. Use a supported workflow to remove the approved recycled container through the [deleted-container API](/graph/api/filestorage-delete-deletedcontainers), with the appropriate app or administrator permissions. If the MCP tool doesn't expose that operation, report the limitation and obtain approval for the supported cleanup method instead of continuing `project_cleanup`.

After a successful deletion response, verify both collections again. If the inventory still shows a completed deletion, allow the state to propagate and repeat the read-only check rather than issuing the same irreversible deletion again. Continue type and app cleanup only after empty collections are verified.

## Work with the matters

After the app runs, keep going in the same chat. Replace the placeholder values with your own.

- Add a reviewer to a matter:

    ```text
    Add <reviewer email> as a writer on the "Fabrikam master services agreement" container.
    ```

- Upload contract notes:

    ```text
    Using content_file_upload, create "Fabrikam-MSA-notes.txt" in the Drafts folder of the "Fabrikam master services agreement" container with the text "Review the renewal terms."
    ```

## Clean up

The `project_cleanup` tool acts on the server instance's saved provisioning state and doesn't delete containers. First confirm that the tenant, owning app, and trial type in that state belong to this example. If any containers remain, including containers in the recycle bin, cleanup stops and keeps the type and app. Permanently delete only the approved example containers first, then preview cleanup:

```text
Using the SharePoint Embedded MCP server, clean up the contract management example:

1. Confirm the intended tenant, saved owning app, and exact "Contract Matters" trial type ID, then list its active and deleted containers.
2. Resolve the IDs of the default container and the two example matters. Stop if unexpected dependencies appear. With container_delete, soft-delete only these approved containers. Ask me before permanently removing each one from the deleted collection. Use the supported recycled-container operation; if the installed MCP tool cannot perform it, report that limitation and wait for an approved supported cleanup method rather than retrying an active-container action.
3. Use container_list and container_deleted_list to confirm that both collections are empty.
4. Run project_cleanup without confirmation to preview its exact trial type and owning app. After I approve that preview, run it with confirm=true. Keep production-type protection enabled and report any incomplete deletion.
```

Permanent deletion can't be undone. Confirm each deletion only after you check the container name.

## Next steps

- Add [search across matters](search-containers-files.md) to your app.
- Store contract stages and dates as [container metadata](container-metadata.md).
- Learn more about [sharing files and managing permissions](share-files-manage-permissions.md).
- See every tool the server provides in [Use the MCP server to build apps with a coding agent](sharepoint-embedded-mcp-server.md#available-tools).
