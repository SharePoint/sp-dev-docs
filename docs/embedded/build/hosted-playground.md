---
title: Plan your first SharePoint Embedded app with a static example
description: Explore a synthetic contract workspace, understand the setup sequence, and plan how to build and onboard customers to a full SharePoint Embedded app.
ms.date: 11/05/2026
ms.topic: how-to
ai-usage: ai-assisted
---

# Plan your first SharePoint Embedded app with a static example

**Applies to:** Developer

Start with a small contract-workspace example to understand what SharePoint Embedded
(SPE) provides, what your application must build, and which tenant setup steps come
before real requests. The included Demo and build guide keep their learning
navigation inside the application; the article's related procedures are internal
to this documentation set.

**V1 is entirely static.** The example runs against synthetic browser-local state.
It doesn't sign in, connect to Microsoft Graph, register an app, configure billing,
upload a document, or change tenant resources. No AI runner or model is needed.

> [!NOTE]
> This contribution provides the static application source and local preview
> instructions, not a hosted application URL. Publishing this
> article doesn't deploy the application. V2's test-tenant connection is future work,
> not an available feature or a prerequisite for trying V1.

## Choose where to start

| Your goal | Start here | What you need |
|---|---|---|
| Understand SPE before creating resources | [Try the static example](#try-the-static-example) | Node.js 22 or later and the repository checkout; see [Run the included Demo](#run-the-included-demo) |
| Build a working application | [Turn the example into a full app](#turn-the-example-into-a-full-app) | A developer tenant, an app owner, and the administrators required by the linked setup procedures |
| Install an existing ISV application for your organization | [Guide customers through tenant setup](../publish/customer-tenant-setup-guide.md) | The ISV's installation package and the appropriate customer administrators |

The [end-to-end build journey](build-app-end-to-end.md) is the authoritative
setup sequence. Use the [Visual Studio Code quickstart](quickstart-vscode.md)
when you're ready to configure a real development environment.

## Understand the example

Imagine a legal team that needs a workspace for each contract matter. A matter
groups the agreement, supporting documents, and the people allowed to work on it.

- **The product that customers install.** SPE mapping: Owning Entra application
  and container type. Application responsibility: Own the app registration,
  choose the tenant and billing model, and package customer setup.
- **One contract matter.** SPE mapping: One container in the consuming tenant.
  Application responsibility: Store the returned container ID and enforce the
  intended business-object mapping.
- **Agreements and attachments.** SPE mapping: DriveItems inside the container's
  drive. Application responsibility: Build file-management UX and use the
  documented DriveItem APIs.
- **Reviewers and matter owners.** SPE mapping: Container membership and roles
  for delegated access. Application responsibility: Check the user's access and
  manage membership through authorized operations.
- **Review stages, due dates, approvals, and signatures.** SPE mapping: Your
  application's business model. Application responsibility: Implement the
  workflow; SPE doesn't supply a contract lifecycle or signing service.

The V1 application is an original implementation with invented synthetic
contract matters. It doesn't embed or depend on a separately hosted prototype.
Its supported operation set is intentionally small.

## Try the static example

The Demo page, build guide, styles, engine, controller, static preview server, and
tests are all included under `apps/spe-playground` in this repository. There is
no separately hosted application dependency.

The page has two paths: try the example to learn the request/state relationship,
or follow the build roadmap to plan a real application.

1. Inspect the sample matter workspaces. Preparing a read or a new workspace only
   fills an editable request draft; it doesn't execute an operation.
1. Run the list example to see the known synthetic seed and an unchanged state.
1. Prepare a create request for a new matter. Inspect the method, path, and body.
   Keep the synthetic container type ID.
1. Explicitly run the request. Inspect the illustrative `201` response, synthetic
   container ID, new workspace, and state effect.
1. List again, then prepare and run a read using the returned synthetic ID.
   Inspect the illustrative `200` response and unchanged state.
1. Reset the Demo. Only the known seed and this application's storage key reset.

All IDs beginning with `demo-`, including `demo-container-type`, are synthetic and
invalid for Live use. Editing or selecting a draft never sends a Graph request.
The Demo doesn't persist drafts, tokens, credentials, or request history. Don't
enter secrets, personal data, or actual contract content.

### Run the included Demo

Use Node.js 22 or later. From the repository root, run:

```sh
node apps/spe-playground/server.mjs
```

Open the loopback address printed by the server, using the `#example` fragment
to start at the Demo. The default address is `http://127.0.0.1:4173/#example`.
You can select another port, for example:

```sh
node apps/spe-playground/server.mjs 8789
```

The Demo page is `apps/spe-playground/index.html`; the in-place learning guide is
`apps/spe-playground/guide.html`. Header, sidebar, breadcrumb, roadmap, and
related-topic links stay within those pages. The guide covers the setup,
permissions, billing, file-flow, and customer-handoff procedures without
redirecting the learner to another site. Both pages remain readable without
JavaScript; the synthetic Demo itself requires JavaScript.
Returning from the guide, including with browser Back, reloads saved synthetic
matters without replaying the previous request or retaining its success response.
The request editor starts with an unexecuted list draft.

The server serves an allowlist of static frontend assets on loopback. It isn't a
fake Graph API, confidential backend, or prerequisite service for the Demo engine.
No install or build is required. This local command does not deploy the app;
publishing this article also does not host its HTML or JavaScript.

### Supported V1 operations

The request shapes below teach a small part of the Graph contract. Response
objects and status values are synthetic, not evidence of authorization or execution.

- **List containers.** Request:
  `GET /storage/fileStorage/containers?$filter=containerTypeId eq demo-container-type`
  with no body. Synthetic response: `200`, containing the Demo container
  collection. State effect: None.
- **Create a container.** Request:
  `POST /storage/fileStorage/containers` with the JSON body below.
  Synthetic response: `201`, containing the new synthetic container.
  State effect: Adds one Demo container.
- **Read a container.** Request:
  `GET /storage/fileStorage/containers/{demo-container-id}` with no body.
  Synthetic response: `200`, containing the selected Demo container.
  State effect: None.

```json
{
  "displayName": "Learning container",
  "description": "Synthetic data only",
  "containerTypeId": "demo-container-type"
}
```

Real container listing requires a container type filter; a bare collection `GET`
isn't a supported Demo request. The in-place guide explains the real container
request flow and its prerequisites. For the documentation-set procedure, see
[Create and manage containers](create-manage-containers.md).

Other methods, APIs, query options, filters, and non-synthetic identifiers are
unsupported. Invalid requests produce explicit Demo errors without changing state
or retaining a successful status. Browser-storage read, corruption, and write
failures are reported explicitly, not silently converted to success. Reset doesn't
clear other applications' browser storage.

## Turn the example into a full app

Use these milestones to plan implementation. Reading a stage or running the Demo
doesn't mark any real tenant, permission, or billing prerequisite as complete.

### 1. Decide who owns and consumes the app

**Owner:** Application developer or architect.

Choose a single-tenant internal application or a multitenant ISV application.
Identify the developer/owning tenant and every consuming tenant. In the example,
the consuming tenant stores that customer's matter containers and documents.
The owning and consuming tenant can be the same for evaluation.

**Output:** A tenant model, one-matter-per-container decision, and named app,
administration, and billing owners. See [App and tenant architecture](../plan/app-tenant-architecture.md)
and [Choose an app model](../plan/choose-app-model.md).

### 2. Create the owning app and container type

**Owner:** Application developer, with the roles and consent required by each
setup procedure.

Prepare a Microsoft 365 tenant with SharePoint, register the owning Entra
application, and create its container type. One owning application owns one
container type. Record the returned real app and type IDs outside the Demo.

Management, registration, and content access are different tasks:

| Permission | Purpose |
|---|---|
| `FileStorageContainerType.Manage.All` | Container type management |
| `FileStorageContainerTypeReg.Selected` | Registration in a consuming tenant |
| `FileStorageContainer.Selected` | Container and content access |

Request only the permission types needed by each component. Application permissions
require administrator consent; delegated consent follows the documented flow and
tenant policy. Don't grant every management permission to the runtime app by default.

**Output:** An owning application and type, the chosen access model, and an
operation-specific permission plan. See [Create a container type](create-container-type.md)
and [Configure authentication and authorization](configure-authentication-authorization.md).

### 3. Choose and configure billing in the right order

**Owner:** Developer billing owner, or the consuming tenant's authorized billing
administrator.

- **Trial evaluation.** Required setup order: Create the trial type, then register
  it before using containers. Boundary: Trial types are single-tenant evaluation
  resources, not production types, and can't be converted in place.
- **`standard`.** Required setup order: Create the type and attach the developer
  tenant's Azure billing profile before using it. Boundary: The developer pays.
- **`directToCustomer` / pass-through.** Required setup order: Create the type,
  register it in the consuming tenant, then activate consuming-tenant
  pay-as-you-go billing before container access. Boundary: The customer pays and
  owns its billing setup.

Choose before creating the type; changing billing classification needs a new type.
Don't ask standard-billed customers to activate pass-through billing.

**Output:** A documented payer and valid billing setup for the selected route.
See [Choose a billing model](../plan/choose-billing-model.md).

### 4. Register, consent, and authorize separately

**Owner:** Application developer and consuming-tenant administrator; a test user
participates in delegated validation.

Register the type in every consuming tenant, including the same-tenant evaluation
case. Establish the owning app's service principal, required Graph consent, and
least-privilege container type application grants. For delegated content operations,
also assign the user's appropriate container role.

These are separate gates: Graph permission, container type application permission,
and delegated user membership/role. Sign-in or Graph consent alone doesn't prove
access. Allow documented registration propagation with bounded retries; don't
replace failures with success.

**Output:** A verified registration and permission plan for the exact tenant,
app, type, user, and operation. See [Register application permissions](register-application-permissions.md)
and [Plan authentication and permissions](../plan/authentication-permissions.md).

### 5. Build the trusted backend and first document flow

**Owner:** Application development team.

Real container creation requires a confidential client even for delegated access.
Keep credentials and token acquisition in an owned trusted backend, never in the
static page or browser storage. A conceptual production request path is:

```text
Your application's browser UI
  -> your confidential backend
  -> Microsoft Graph
  -> containers and documents in the consuming tenant
```

This isn't V1's network behavior. It is the application architecture you must
implement and authorize independently.

Create a real test container, create a folder, upload a small file, read its
DriveItem metadata, and download it. Keep returned container and item IDs; the
container ID is the Graph drive ID. Don't reconstruct IDs from URLs.

**Output:** Genuine results or actionable genuine errors for the smallest
authorized document flow. See [Create and manage containers](create-manage-containers.md)
and [Upload, download, and manage files](manage-files.md).

### 6. Add the contract experience and operational behavior

**Owner:** Application development team and the customer's governance stakeholders.

Full-app capabilities to implement or integrate:

- **Contract workflow:** App-owned stages, approvals, due dates, notifications,
  and any signing integration.
- **Documents:** File/folder UX, supported upload patterns, concurrency/error
  handling, and durable ID mapping.
- **Matter membership:** Authorized container roles and
  [sharing operations](share-files-manage-permissions.md).
- **Collaboration:** [Office editing/coauthoring](open-office-files.md), with the
  applicable access and licensing requirements.
- **Discovery:** [Preview](preview-files.md),
  [search](search-containers-files.md), and appropriate
  [metadata](container-metadata.md).
- **Operations:** Request outcomes/latency, bounded retry handling, support
  diagnostics without secrets, cost monitoring, and lifecycle cleanup.
- **Tenant governance:** Work with administrators on
  [security and compliance controls](../plan/security-compliance-governance.md);
  don't assume a Demo proves a policy is configured.

These capabilities aren't implemented by V1. Follow the linked procedures and
validate only the capabilities your application advertises.

### 7. Validate and hand off to customer administrators

**Owner:** ISV/application team, customer administrator, and an authorized test user.

Test the real production path, not a hidden bypass. Check at least:

- The exact application, publisher, container type, and consuming-tenant registration.
- Required consent, type-level grants, delegated user roles, and the selected
  billing route.
- An authorized create/upload/read/download sequence and a denied operation for a
  user or resource that shouldn't have access.
- Real errors for missing registration, insufficient permissions, or incomplete
  billing; no synthetic fallback.
- Customer administrator visibility, support diagnostics, cost ownership, and cleanup.

Provide the administrator with app/type IDs, redirect and sign-in URLs, permissions
and their purpose, billing ownership, support contact, data-handling boundaries,
and a validation checklist. The customer administrator reviews consent, completes
registration through the approved app flow, and activates pass-through billing
only when applicable.

**Output:** Evidence from the actual consuming tenant and a repeatable customer
onboarding package. A successful developer-tenant test isn't customer-tenant proof.
See [Prepare customer installation](../publish/prepare-customer-installation.md),
[Guide customer setup](../publish/customer-tenant-setup-guide.md), and
[Validate installation](../publish/validate-customer-installation.md).

## V1 now, V2 later

### V1: implemented static learning

- Synthetic sample workspace, three request shapes, and state effects.
- Readable setup roadmap and included build guide with internal-only navigation.
- Explicit local Run and seed-only reset.
- No sign-in, credentials, uploads, assistant, or tenant mutations.

### V2: future authorized test-tenant integration

- An owned confidential backend and real Graph execution.
- Verified application/tenant configuration, consent, grants, billing, and user
  access.
- Explicitly authorized real operations, genuine results/errors, and tenant-safe
  cleanup.
- Separately scoped integration; not enabled by visiting or completing V1.

V2 must never reuse synthetic IDs as real resources, migrate Demo state into a
tenant silently, or return synthetic success after a real operation fails. It
needs its own implementation, authorization, security review, and test evidence.
Static hosting, documentation publication, and a tenant-connected application are
three separate delivery concerns.
