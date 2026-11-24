---
title: Build a contract management app with a coding agent
description: Build a contract management app for a legal team with the SharePoint Embedded MCP server and a coding agent, and see how each part of the app maps to SharePoint Embedded.
ms.date: 11/24/2026
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
- A development tenant that doesn't already have a trial container type. A tenant can have only one trial container type at a time. For the trial restrictions, see [Create a trial container type](create-container-type.md#create-a-trial-container-type).

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

1. Sign in with `az login --allow-no-subscriptions`.
1. In your MCP client, such as Copilot Chat in agent mode, paste this prompt:

    ```text
    Using the SharePoint Embedded MCP server, build a contract management app in my tenant:

    1. Check my sign-in and provisioning readiness.
    2. Provision a trial container type named "Contract Matters" with its owning app and default container.
    3. Scaffold the React reference app as "contract-matters", and write its configuration from the provisioning state.
    4. Use container_create, not the app UI, to create two containers for these contract matters: "Fabrikam master services agreement" and "Northwind mutual NDA".
    5. In each matter container, create the folders Drafts, Signed, and Correspondence.
    6. Run the app locally and give me its URL.
    ```

1. Approve each tool call when the client asks. Folder and file operations also ask you to grant content access first.

A trial container type is free and lasts 30 days. It allows up to five containers, including containers in the recycle bin. This example uses three: the default container created during provisioning and the two matter containers.

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

The `project_cleanup` tool doesn't delete containers. If any of the container type's containers remain, including containers in the recycle bin, cleanup stops and keeps the container type and owning app. Permanently delete the containers first, and then run cleanup:

```text
Using the SharePoint Embedded MCP server, clean up the contract management example:

1. List the containers of the "Contract Matters" container type.
2. With container_delete, soft-delete each of those containers, and then permanently delete each one. Ask me before each permanent deletion.
3. Use container_deleted_list to confirm that no deleted containers remain.
4. Run project_cleanup to delete the trial container type and its owning app.
```

Permanent deletion can't be undone. Confirm each deletion only after you check the container name.

## Next steps

- Add [search across matters](search-containers-files.md) to your app.
- Store contract stages and dates as [container metadata](container-metadata.md).
- Learn more about [sharing files and managing permissions](share-files-manage-permissions.md).
- See every tool the server provides in [Use the MCP server to build apps with a coding agent](sharepoint-embedded-mcp-server.md#available-tools).
