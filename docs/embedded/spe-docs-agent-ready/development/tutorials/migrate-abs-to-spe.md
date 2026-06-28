---
title: Migrate content from Azure Blob Storage to a SharePoint Embedded container
description: Copy blobs from an Azure Blob Storage container into a SharePoint Embedded container with C#, rebuilding folder structure and uploading via Graph upload sessions.
ms.topic: how-to
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
search.appverid: MET150
agent:
  schema_version: 1
  task_type: how-to
  outcome: Every blob in a source Azure Blob Storage container is copied into a target SharePoint Embedded container, with the flat blob namespace rebuilt as a folder hierarchy under a top folder named after the source container; failures are written to a re-runnable output file.
  estimated_minutes: 60
  difficulty: advanced
  roles: [app-developer, migration-engineer]
  prerequisites:
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
      kind: how-to
    - uri: /sharepoint/dev/embedded/development/auth
      kind: concept
    - capability: azure-subscription
    - capability: spe-admin
  api_surface:
    - id: getContainer
      method: GET
      path: /storage/fileStorage/containers/{container-id}
      permissions: [FileStorageContainer.Selected]
    - id: listContainers
      method: GET
      path: /storage/fileStorage/containers?$filter=containerTypeId eq {container-type-id}
      permissions: [FileStorageContainer.Selected]
    - id: listDriveItems
      method: GET
      path: /drives/{drive-id}/items/{parent-folder-id}/children
      permissions: [FileStorageContainer.Selected]
  inputs:
    - name: sas-url
      type: string
      source: user-supplied
    - name: tenant-id
      type: uuid
      source: entra-portal
    - name: client-id
      type: uuid
      source: app-registration
    - name: container-id
      type: string
      source: prior-step
    - name: blob-file
      type: string
      source: user-supplied
    - name: output-file
      type: string
      source: user-supplied
  outputs:
    - name: migrated-items
      type: string
      verify: GET /drives/{drive-id}/items/{parent-folder-id}/children lists a top folder named after the source container with the migrated tree beneath it
  next_steps:
    - uri: /sharepoint/dev/embedded/development/tutorials/metadata
      when: always
    - uri: /sharepoint/dev/embedded/development/content-experiences/search-content
      when: needs-search
  related:
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
    - uri: /sharepoint/dev/embedded/development/auth
    - uri: /sharepoint/dev/embedded/development/limits-calling
  stability: ga
  last_validated: proposed
---

# Migrate content from Azure Blob Storage to a SharePoint Embedded container
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

At the end of this how-to, every blob in a source Azure Blob Storage (ABS) container has been copied into a target SharePoint Embedded (SPE) container. The sample app rebuilds the flat blob namespace into a folder hierarchy under a top folder named after the source container, uploads each file with a Microsoft Graph upload session, skips files that already exist at the destination, and writes any failures to an output file you can feed back in for an incremental re-run. The reference implementation is `MigrateABStoSPE` in the [SharePoint Embedded Samples repository](https://github.com/microsoft/SharePoint-Embedded-Samples/tree/main/Tools/migrate-from-blob-storage).

> [!IMPORTANT]
> This sample copies content one file at a time through Graph upload sessions. SharePoint Embedded also exposes a server-side migration path (`createMigrationJob` / `provisionMigrationContainers`) for migrating from SharePoint-managed staging storage; that is a different mechanism and is not what this ABS-to-SPE sample uses. There is no documented rollback for a partial migration — see `api-surface.json` gap `migrationRollback`. Plan to re-run incrementally from the failed-blob output file rather than rolling back.

## Prerequisites

- [Container types](/sharepoint/dev/embedded/getting-started/containertypes) — you need an onboarded container type and a target container in the consuming tenant.
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth) — the app registration must be granted `User.Read` and `FileStorageContainer.Selected`, with admin consent.
- Capability: `azure-subscription` — to host or read the source ABS container.
- Capability: `spe-admin` — the authenticating user needs at least the SharePoint Embedded Administrator or Global Administrator role.
- A Microsoft Entra app registration with a **Mobile and desktop applications** platform added and redirect URI `http://localhost` (required for the interactive browser sign-in used by the sample). See [Register an application](https://learn.microsoft.com/graph/auth-register-app-v2).
- .NET SDK 8.0.303 or later, on Windows, Linux, or macOS.
- A source ABS container and a **container-level Shared Access Signature (SAS) URL** with **Read** and **List** permission. See [Introduction to Azure Blob Storage](https://learn.microsoft.com/azure/storage/blobs/storage-blobs-introduction).

> [!NOTE]
> The container type must be registered in the consuming tenant and the app installed there, even when the owning tenant and the consuming tenant are the same. See [Install your app in a customer tenant](/sharepoint/dev/embedded/development/tutorials/vendor-install-app-customer).

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{sas-url}` | string | Azure portal → source storage account → container → Shared access tokens; needs Read + List |
| `{tenant-id}` | uuid | The consuming SPE tenant's directory (tenant) ID from [Microsoft Entra admin center](https://entra.microsoft.com) |
| `{client-id}` | uuid | The app registration's Application (client) ID |
| `{container-id}` | string | The target SPE container ID from [`listContainers`](https://learn.microsoft.com/graph/api/filestorage-list-containers) |
| `{blob-file}` | string | Optional path to a file listing blobs to migrate (one blob name per line, no quotes) |
| `{output-file}` | string | Optional path where the failed-blob list is written for an incremental re-run |

## Steps

### Step 1 — Build the sample app {#step-1}

Compile the sample so the migration binary is ready to run. From a terminal in the directory containing `Program.cs`, restore packages and build. The project references Microsoft Graph SDK 5.56.0, Azure.Identity 1.12.0, Azure.Storage.Blobs 12.21.0, CommandLineParser 2.9.1, and Newtonsoft.Json 13.0.3.

```bash
dotnet --version
dotnet build
```

**Expected response:** `dotnet build` reports `Build succeeded` with 0 errors.

**On failure:**
- `dotnet: command not found` → the .NET SDK is not installed or not on `PATH`. Install [.NET SDK 8.0.303](https://dotnet.microsoft.com/download/dotnet/8.0).
- Package restore errors → no network access to NuGet, or a pinned package version is unavailable. Restore connectivity, then re-run `dotnet build`.

### Step 2 — Resolve the target container's drive {#step-2}

Confirm the target `{container-id}` exists and is reachable before moving data. Read the container; the migration writes into its drive.

```http
GET https://graph.microsoft.com/v1.0/storage/fileStorage/containers/{container-id}
Authorization: Bearer {token}
```

**Expected response:** `200 OK` with a `fileStorageContainer` whose `status` is `active`.

**On failure:**
- `404 Not Found` → `{container-id}` is wrong, or the container type is not registered in this tenant. Verify with `GET /storage/fileStorage/containers?$filter=containerTypeId eq {container-type-id}`.
- `403 Forbidden` (`accessDenied`) → the app lacks `FileStorageContainer.Selected`, or admin consent was not granted. See [Install your app in a customer tenant](/sharepoint/dev/embedded/development/tutorials/vendor-install-app-customer).

### Step 3 — Connect to the source and destination {#step-3}

Open a read connection to the ABS container and an interactive Graph connection to SPE. The sample uses `InteractiveBrowserCredential`, which opens a browser for the consuming-tenant user to sign in; the redirect URI must match the `http://localhost` registered in [#step-1](#step-1) prerequisites.

```csharp
// Source: Azure Blob Storage
_containerClient = new BlobContainerClient(new Uri(_containerLevelSASUrl));

// Destination: SharePoint Embedded via Microsoft Graph
string[] scopes = { "User.Read", "FileStorageContainer.Selected" };
InteractiveBrowserCredentialOptions interactiveBrowserCredentialOptions = new InteractiveBrowserCredentialOptions()
{
  ClientId = clientId,
  RedirectUri = new Uri("http://localhost"),
};
InteractiveBrowserCredential interactiveBrowserCredential = new InteractiveBrowserCredential(interactiveBrowserCredentialOptions);

_graphClient = new GraphServiceClient(interactiveBrowserCredential, scopes, null);

// Opens a browser to sign in with consuming-tenant credentials
var user = await _graphClient.Me.GetAsync();
```

**Expected response:** the browser sign-in completes and `_graphClient.Me.GetAsync()` returns the signed-in user; the `BlobContainerClient` is constructed without error.

**On failure:**
- `AuthenticationFailedException` / no browser opens → wrong `{client-id}`, or the redirect URI is not registered as a Mobile and desktop applications platform. Re-check the app registration.
- ABS `403 (AuthorizationFailure)` → the `{sas-url}` is expired or lacks Read/List. Regenerate the SAS with Read and List permission.

### Step 4 — Enumerate the source blobs {#step-4}

List the blobs to migrate. ABS stores blobs in a flat namespace, so the names carry any folder path as a prefix. If a `{blob-file}` was supplied, read it (one blob per line); otherwise enumerate the container.

```csharp
var blobs = new List<string>();
await foreach (var blobItem in _containerClient.GetBlobsAsync())
{
  blobs.Add(blobItem.Name);
}
return blobs;
```

**Expected response:** a non-empty list of blob names; the sample then sizes a `CountdownEvent` to `blobs.Count` so the thread pool knows how many files to migrate.

**On failure:**
- Empty list when the container has data → the SAS lacks **List**, or you pointed at the wrong container. Regenerate the SAS with List.
- `{blob-file}` not found, or names wrapped in quotes → fix the path; the format is one blob name per line with no surrounding quotes.

### Step 5 — Rebuild the folder hierarchy at the destination {#step-5}

Recreate the implied folder tree in the container. The sample creates a top folder named after the source container, then parses each blob's path segments and creates one folder at a time, reusing folders that already exist.

```csharp
// Create the top folder (named after the source container) under the drive root.
containerFolder = await _graphClient.CreateFolder(_containerName, "root");

foreach (var blobName in fileList)
{
  FileStructure fs = new FileStructure() { blobName = blobName };
  // Parse the flat blob name into folders; returns the parent folder id for the file.
  fs.parentFolderId = TraverseBlobName(fs, containerFolder.Id);
  // Queue the file for migration on the thread pool.
  ThreadPool.QueueUserWorkItem(MigrateFile, fs);
}

// Wait for all queued files to finish.
_countdown.Wait();
```

`CreateFolder` issues `POST /drives/{drive-id}/items/{parent-folder-id}/children` with `@microsoft.graph.conflictBehavior: fail`, and `CheckIfItemExists` reads `GET /drives/{container-id}/items/{parent-folder-id}:/{item-path}` to skip folders that already exist.

```csharp
var folder = new DriveItem
{
  Name = folderName,
  Folder = new Folder(),
  AdditionalData = new Dictionary<string, object>()
  {
    { "@microsoft.graph.conflictBehavior", "fail" }
  }
};
var createdFolder = await _graphClient.Drives[_containerId].Items[parentFolderId].Children.PostAsync(folder);
```

**Expected response:** `201 Created` per new folder; an existing folder is detected by `CheckIfItemExists` and reused rather than recreated.

**On failure:**
- `409 Conflict` (`nameAlreadyExists`) from `CreateFolder` → the folder already exists; the sample reuses it via `CheckIfItemExists`. No action needed.
- `403 Forbidden` → the signed-in user lacks write access on the container. Grant the user a writer/manager/owner role or re-consent `FileStorageContainer.Selected`.

### Step 6 — Stream each file from ABS to SPE {#step-6}

Migrate file bytes without staging them on disk: download the blob to a memory stream, then upload that stream to SPE through a Graph upload session in 320 KB chunks. `MigrateFile` runs on the thread pool and signals the countdown when done.

```csharp
// Download the blob from ABS as a stream
BlobClient blobClient = _containerClient.GetBlobClient(blobName);
MemoryStream memoryStream = new MemoryStream();
await blobClient.DownloadToAsync(memoryStream);
memoryStream.Position = 0; // rewind before upload

// Upload the stream to SPE via an upload session
int _maxChunkSize = 320 * 1024;
var uploadSessionRequestBody = new CreateUploadSessionPostRequestBody()
{
  AdditionalData = new Dictionary<string, object>
  {
    { "@microsoft.graph.conflictBehavior", "fail" }
  }
};
var uploadSession = await _graphClient.Drives[_containerId]
    .Items[parentFolderId]
    .ItemWithPath(fileName)
    .CreateUploadSession
    .PostAsync(uploadSessionRequestBody);

var fileUploadTask = new LargeFileUploadTask<DriveItem>(uploadSession, memoryStream, _maxChunkSize, _graphClient.RequestAdapter);
IProgress<long> progress = new Progress<long>(prog => Console.WriteLine($"Uploaded {fileName} {prog} bytes"));
var uploadResult = await fileUploadTask.UploadAsync(progress);

_countdown.Signal();
```

The upload session is created with `POST /drives/{drive-id}/items/{parent-folder-id}:/{filename}:/createUploadSession`; chunks are `PUT` to the returned `uploadUrl`. `conflictBehavior: fail` makes a file that already exists fail rather than overwrite, so re-runs are idempotent.

**Expected response:** `uploadResult.UploadSucceeded` is `true`; the console logs `Uploaded {filename} {n} bytes`.

**On failure:**
- `409 Conflict` (`nameAlreadyExists`) → the file already exists at the destination; this is expected on re-runs and the sample records it as "exists in destination", not a failure.
- `423 Locked` → the container is locked read-only. Unlock it, then re-run.
- `507 Insufficient Storage` → container or container-type quota exhausted. Increase quota or split the migration.
- `429 Too Many Requests` → throttling. Honor `Retry-After`; reduce thread-pool concurrency. See [Limits and calling patterns](/sharepoint/dev/embedded/development/limits-calling).

### Step 7 — Run the migration {#step-7}

Run the built app with the source SAS URL and the SPE target coordinates. The two optional arguments let you migrate a specific blob list and capture failures for an incremental re-run.

```bash
# line breaks added for readability
dotnet run Program.cs -- \
  --sasurl "{sas-url}" \
  --tenantid "{tenant-id}" \
  --clientid "{client-id}" \
  --containerid "{container-id}" \
  [ --blobfile "{blob-file}" --outputfile "{output-file}" ]
```

**Expected response:** the app prints each queued file, then a summary of total, success, exists-in-destination, and failed counts. If any files failed, it writes them to `{output-file}` and prints the re-run command.

**On failure:**
- Process exits immediately with an auth error → re-check `{tenant-id}`, `{client-id}`, and that admin consent was granted for `FileStorageContainer.Selected`.
- Many files report `failed` with `403` → the signed-in user lacks write permission on the container, or the Mobile and desktop applications platform is missing from the app registration.

## Verify {#verify}

List the children of the target container's drive root and confirm the top folder (named after the source container) holds the migrated tree.

```http
GET https://graph.microsoft.com/v1.0/drives/{drive-id}/items/{parent-folder-id}/children
Authorization: Bearer {token}
```

Returns `200 OK` and the `value` array contains a folder named after the source container; descending into it reproduces the blob path hierarchy with the migrated files. Cross-check the run summary: `success + exists-in-destination` should equal the source blob count, with `failed` equal to 0.

## Troubleshooting {#troubleshooting}

| Symptom | Likely cause | Fix |
|---|---|---|
| ABS `403 (AuthorizationFailure)` | `{sas-url}` expired or missing Read/List | Regenerate a container-level SAS with **Read** and **List** |
| File reported "already exists" and skipped | `conflictBehavior: fail` and the file is already at the destination | Expected; delete the destination file or switch to `replace` to overwrite |
| `{blob-file}` not found / not parsed | Wrong path, or blob names wrapped in quotes | One blob name per line, no quotes; fix the path |
| `403 Forbidden` from Graph | Missing `User.Read` + `FileStorageContainer.Selected`, no admin consent, or no console platform | Grant scopes and admin consent; add the Mobile and desktop applications platform |
| `423 Locked` on upload | Container locked read-only | Unlock the container, then re-run from `{output-file}` |
| `429 Too Many Requests` | Throttling under thread-pool concurrency | Honor `Retry-After`; lower concurrency. See [Limits](/sharepoint/dev/embedded/development/limits-calling) |
| Partial migration, want to undo | No migration rollback exists (`api-surface.json` gap `migrationRollback`) | Re-run incrementally from `{output-file}`; do not expect server-side rollback |

## Next steps

- [Using metadata on containers](/sharepoint/dev/embedded/development/tutorials/metadata) — tag migrated files with queryable metadata.
- [Search content](/sharepoint/dev/embedded/development/content-experiences/search-content) — make migrated content discoverable.

## Related

- [Container types](/sharepoint/dev/embedded/getting-started/containertypes)
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth)
- [Limits and calling patterns](/sharepoint/dev/embedded/development/limits-calling)
- [Introduction to Azure Blob Storage](https://learn.microsoft.com/azure/storage/blobs/storage-blobs-introduction)
- [MigrateABStoSPE sample](https://github.com/microsoft/SharePoint-Embedded-Samples/tree/main/Tools/migrate-from-blob-storage)
