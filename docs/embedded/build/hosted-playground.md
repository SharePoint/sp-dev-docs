---
title: Explore container requests with the playground Demo
description: Learn a small set of SharePoint Embedded container request shapes with browser-local synthetic data, without signing in or changing tenant resources.
ms.date: 10/28/2026
ms.topic: how-to
ai-usage: ai-assisted
---

# Explore container requests with the playground Demo

**Applies to:** Developer

The SharePoint Embedded playground Demo lets you inspect container requests,
illustrative responses, and their effects on synthetic state. It doesn't connect
to Microsoft Graph, require a tenant, or change SharePoint resources.

> [!NOTE]
> This slice provides application source and a local Demo. A public hosted endpoint
> has not been verified, and Live mode isn't available. Publishing this article
> doesn't deploy the application. An application owner must separately host and
> verify the static frontend before a hosted playground link is added here.

## Run the Demo

Get the [playground source and local run instructions](https://github.com/SharePoint/sp-dev-docs/tree/main/apps/spe-playground).
Use the application README to start the local static file server and open its
reported URL. That server serves frontend assets only; it isn't a simulated
Graph API or a confidential backend.

No Microsoft 365 sign-in, container type registration, credential, or simulator
service is needed for the Demo. The Demo engine runs in the browser.

Keep the visible **Demo** label in mind throughout the recipe. Example identifiers,
including `demo-container-type` and IDs prefixed with `demo-`, are deliberately
synthetic. They aren't valid identifiers for real Microsoft Graph requests.

## Complete a container recipe

1. Select the list-containers example. Inspect its method, path, and empty body.
   Selecting an example only fills an editable draft.
1. Choose **Run**. Inspect the parsed request, labelled synthetic response, and
   state view. Listing containers doesn't mutate the state.
1. Select the create-container example. Set a display name and description, keeping
   `containerTypeId` set to `demo-container-type`.
1. Choose **Run**. The Demo creates a synthetic container and displays its ID.
   Inspect the state effect and illustrative `201` response.
1. Run the list request again to find the new container.
1. Use that container's synthetic ID in the read-container request and choose
   **Run**. Inspect its illustrative `200` response and unchanged state.
1. Choose the Demo reset action. Confirm that only the known synthetic seed remains.

Editing a draft doesn't execute it. Only **Run** invokes the local Demo operation.
Reset is a separate, local action; it doesn't send a Microsoft Graph request.

## Supported Demo operations

The Demo supports only the following request shapes. The response statuses and
objects are synthetic teaching examples, not evidence that Graph authorized or
executed an operation.

| Operation | Request | Synthetic response | State effect |
|---|---|---|---|
| List containers | `GET /storage/fileStorage/containers?$filter=containerTypeId eq demo-container-type` with no body | `200`, containing the Demo container collection | None |
| Create a container | `POST /storage/fileStorage/containers` with the JSON body below | `201`, containing the new synthetic container | Adds one Demo container |
| Read a container | `GET /storage/fileStorage/containers/{demo-container-id}` with no body | `200`, containing the selected Demo container | None |

```json
{
  "displayName": "Learning container",
  "description": "Synthetic data only",
  "containerTypeId": "demo-container-type"
}
```

The real [list containers API](/graph/api/filestorage-list-containers) requires the
container type filter. A bare collection `GET` isn't an advertised Demo request.
See [Create fileStorageContainer](/graph/api/filestoragecontainer-post) and
[Get fileStorageContainer](/graph/api/filestoragecontainer-get) for the corresponding
real API contracts.

Other operations, query options, filters, and non-synthetic resource identifiers
aren't supported. Unsupported or malformed requests produce an explanatory Demo
error without changing state. The Demo doesn't substitute a successful response
for an unsupported request or a failed Live operation.

## State and reset boundaries

The application stores only its synthetic state under its own browser-storage key.
It doesn't persist request drafts or credentials. Don't enter secrets or real
tenant content into learning requests.

Reset restores the known Demo seed. It doesn't clear unrelated browser storage,
delete tenant containers, or reset Live configuration. Browser-storage errors are
reported explicitly rather than shown as successful operations.

The Demo isn't a general-purpose Graph emulator. It doesn't establish product UI
parity, production limits, permission behavior, or support for APIs beyond the
operation set above.

## Understand why Live is pending

Live operation execution is outside this slice. Before it can be enabled, the
application owner must establish and validate:

- The owned execution route, including a confidential backend for container creation.
- An approved test application and tenant.
- Microsoft Graph consent, container-type grants, and the required user and resource access.
- A small, explicitly authorized operation sequence and genuine success/error evidence.

Sign-in alone wouldn't prove that an operation is authorized. A future Live
integration must require an explicit **Run**, use real Graph results or actionable
real errors, and never fall back to synthetic success.

For real integration prerequisites, see
[Configure authentication and authorization](configure-authentication-authorization.md)
and [Create and manage containers](create-manage-containers.md).

An assistant service is also outside this slice. A future request proposal must
remain an editable draft and must not execute tenant changes automatically.
