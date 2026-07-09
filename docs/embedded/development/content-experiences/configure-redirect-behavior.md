---
title: Configuring redirect behavior
description: Configure the urlTemplate property on a SharePoint Embedded container type to control how Microsoft 365 routes users to container content from Microsoft 365 search results and from the driveItem.webUrl property returned by Microsoft Graph.
ms.date: 05/29/2026
ms.localizationpriority: high
---

# Configuring redirect behavior

The `urlTemplate` property on a SharePoint Embedded [container type](../../getting-started/containertypes.md) governs where Microsoft 365 sends users when they open files in your containers. It controls the destination on two surfaces:

- Microsoft 365 search results.
- The `driveItem.webUrl` property is used to open an item in a browser.

For files without a supported viewer (the Office web viewer or the embedded viewer), both surfaces use `urlTemplate` to route users to your application. This article explains how Microsoft 365 chooses a destination and how to configure `urlTemplate`.

## Prerequisites

Before you configure `urlTemplate`, ensure you have:

- A SharePoint Embedded [container type](../../getting-started/containertypes.md) that you own.
- The delegated Microsoft Graph permission scope listed in the **Permissions** section of [Update fileStorageContainerType](/graph/api/filestoragecontainertype-update). Application permissions aren't supported.

> [!NOTE]
> Discoverability is separate from redirect behavior: you don't need to enable it to configure or use `urlTemplate`. The [`isDiscoverabilityEnabled`](/graph/api/resources/filestoragecontainertypesettings) setting is **disabled by default** and controls only whether your content is surfaced in the broader Microsoft 365 experience, such as **My Activity**, office.com, OneDrive.com, other intelligent file discovery features, and Copilot grounding. Leaving it disabled doesn't prevent search: applications can still query content in non-discoverable containers with the [Microsoft Search API](search-content) by setting `sharePointOneDriveOptions.includeHiddenContent` to `true`. To learn how discoverability affects Microsoft 365 surfaces, see [Content discovery in Microsoft 365](user-experiences-overview.md#content-discovery-in-microsoft-365).

## How Microsoft 365 chooses a destination

Microsoft 365 chooses a destination based on the file type. `urlTemplate` applies only to files without a supported viewer (the Office web viewer or the embedded viewer). This file-type scope is the same today and after the `webUrl` rollout described in [driveItem.webUrl behavior](#driveitemweburl-behavior).

If `urlTemplate` isn't configured, Microsoft 365 sends users who open files without a supported viewer to a generic [Microsoft help page](https://aka.ms/spe-openfilelocation). The help page explains that the file is stored in a third-party application and directs the user to open it there.

### How file types are handled

The destination for a file depends on the file type and whether `urlTemplate` is set:

| File type | `urlTemplate` set? | Behavior when opened |
| --- | --- | --- |
| Files with a supported Office web viewer (Word, Excel, PowerPoint, Visio, OneNote, and others) | Either | Opens in the corresponding Office web viewer |
| PDF | Either | Opens in the embedded viewer |
| All other types | Yes | Redirected to your application through `urlTemplate` |
| All other types | No | Redirected to a [Microsoft help page](https://aka.ms/spe-openfilelocation) |

### `driveItem.webUrl` behavior

For SharePoint Embedded items, the `driveItem.webUrl` property returned by Microsoft Graph reflects the same redirect behavior described above:

- For files without a supported viewer, when `urlTemplate` is set: `webUrl` returns the resolved `urlTemplate` redirect URL.
- For files without a supported viewer, when `urlTemplate` isn't set: `webUrl` returns the `aka.ms` help link.
- For files with a supported viewer: `webUrl` returns the viewer URL.

> [!IMPORTANT]
> `driveItem.webUrl` will soon reflect the redirect behavior described above. If your application currently relies on `webUrl` returning the file's canonical URL, switch to the [`webDavUrl`](/graph/api/resources/driveitem) property, which returns the canonical URL today and continues to do so after the rollout.

## Configure `urlTemplate`

Set `urlTemplate` on your container type by calling the [Update fileStorageContainerType](/graph/api/filestoragecontainertype-update) API (`PATCH /storage/fileStorage/containerTypes/{id}`) and setting `settings.urlTemplate`. The value applies to every tenant that registers the container type. This API requires the delegated permission scope(s) listed in its **Permissions** section; application permissions aren't supported.

The value is a URL with placeholder tokens that Microsoft 365 resolves to actual item identifiers when a user opens an item.

The SharePoint Embedded PowerShell cmdlet exposes the same setting as a "redirect URI" parameter. The PowerShell "redirect URI" is the `urlTemplate` value and is unrelated to the app-registration redirect URI used for authentication.

### Requirements

The `urlTemplate` value must:

- Be a valid absolute URL that uses the `https://` scheme. HTTP URLs aren't accepted.
- Not resolve to a loopback address, such as `localhost` or `127.0.0.1`.

> [!IMPORTANT]
> If the URL fails validation, `urlTemplate` is silently set to `null` without returning an error. To confirm your configuration, see [Verify your configuration](#verify-your-configuration).

### URL template syntax

```text
https://app.contoso.com/open?tenant={tenant-id}&drive={drive-id}&item={item-id}
```

Each placeholder token uses curly braces. When a user opens an item, Microsoft 365 resolves each token to a value that corresponds to the item, URL-encodes the value, and substitutes it in the template.

If Microsoft 365 can't resolve a token, it drops the entire query parameter that contains that token from the resolved URL (for example, `&folder={folder-id}` is dropped entirely rather than emitted as `&folder=`). The exceptions are `{tenant-id}` and `{drive-id}`: when Microsoft 365 can't resolve them, their query parameters remain in the URL with the token left as literal text (for example, `&tenant={tenant-id}`).

### Supported tokens

| Token | Value your application receives |
| --- | --- |
| `{tenant-id}` | GUID of the consuming tenant. Used to make tenant-scoped Microsoft Graph API calls. |
| `{drive-id}` | Drive ID of the container. Use it with Microsoft Graph APIs to reference the container. |
| `{folder-id}` | Item ID of the file's immediate parent folder. Item IDs aren't GUIDs. If the file is at the root of the container, Microsoft 365 drops the entire query parameter that contains `{folder-id}` from the redirect URL rather than passing it with an empty value. |
| `{item-id}` | Item ID of the driveItem. Item IDs aren't GUIDs. |
| `{site-domain}` | The hostname of the container's site (for example, contoso.sharepoint.com). |
| `{list-id}` | The GUID identifier of the document library that backs the container. |
| `{site-url}` | The container site's full web URL without the scheme (authority + path + query + fragment). For example: `contoso.sharepoint.com/contentstorage/CSP_6fa4ae51-5276-4437-b4f5-9b42388a9e1c` |

#### Advanced tokens

The following tokens cover specialized scenarios. Most applications can rely on the [supported tokens](#supported-tokens) above.

| Token | Value your application receives |
| --- | --- |
| `{ownershipType}` | The container's ownership type: TenantOwned, UserOwned, GroupOwned, or ApplicationOwned. |
| `{itemname-guid}` | The GUID parsed from the item's filename, if the file is named `<GUID>.extension`. Empty if the filename isn't a GUID. |
| `{folderpath-guids}` | Comma-separated GUIDs found in the folder path segments leading to the item. Path segments split on / or _ are each checked for a valid GUID. |

### Example

If your container type has `urlTemplate` set to:

```text
https://app.contoso.com/open?t={tenant-id}&d={drive-id}&i={item-id}
```

When a user opens a `.txt` file, Microsoft 365 redirects the user to a URL like the following:

```text
https://app.contoso.com/open?t=72f988bf-86f1-41af-91ab-2d7cd011db47&d=b%21abc123def456ghi789jkl0&i=01ABC23DEF45GHI67JKL890
```

Your application receives the tenant ID, drive ID, and item ID as the values of whatever query-parameter names you defined in the template. The parameter names (`t`, `d`, and `i` in this example) are arbitrary and developer-defined; Microsoft 365 doesn't require any specific names. Use the parsed values to retrieve and open the file through the Microsoft Graph API.

### Update `urlTemplate` with Microsoft Graph

Use the PATCH endpoint [Update fileStorageContainerType](/graph/api/filestoragecontainertype-update) to update `urlTemplate`:

```http
PATCH https://graph.microsoft.com/v1.0/storage/fileStorage/containerTypes/{containerTypeId}
Content-Type: application/json

{
  "settings": {
    "urlTemplate": "https://app.contoso.com/open?t={tenant-id}&d={drive-id}&i={item-id}"
  }
}
```

To clear `urlTemplate`, set the property to `null` in the PATCH request body.

### Verify your configuration

Because validation failures are silent, confirm your update by reading the value back. Call [Get fileStorageContainerType](/graph/api/filestoragecontainertype-get) with the `$select` query option to retrieve the current `urlTemplate` value:

```http
GET https://graph.microsoft.com/v1.0/storage/fileStorage/containerTypes/{containerTypeId}?$select=settings
```

If the response shows `urlTemplate` as `null`, the URL you submitted didn't meet the [requirements](#requirements). Update the value and try again.

## What your application does when called

When Microsoft 365 routes a user to your application, your application must:

1. Authenticate the user. The user might not have an active session in your app. Microsoft 365 doesn't pass authentication context in the redirect URL.
1. Parse the token values from the redirect URL query string.
1. Call Microsoft Graph with the drive ID and item ID values from the query string to retrieve the [driveItem](/graph/api/resources/driveitem) and open the file in your application's UI.

For information about calling Microsoft Graph against a consuming tenant's containers, see [Authentication and authorization](../auth.md).

## Troubleshooting

| Symptom | Possible cause |
| --- | --- |
| Your files don't appear in Microsoft 365 search results. | The container type's `isDiscoverabilityEnabled` setting is `false`. Search indexing can also take time after enablement. |
| Users land on the Microsoft help page instead of your application. | `urlTemplate` is `null` (likely because the URL failed validation), or the file type opens in a supported viewer (the Office web viewer or the embedded viewer) instead of redirecting. |
| A token appears as literal text (such as `{tenant-id}`) in the redirect URL. | Microsoft 365 couldn't resolve the token for the current item. Verify the token name matches a [supported token](#supported-tokens) or a [custom property](/graph/api/filestoragecontainer-post-customproperty). |
| Updates to `urlTemplate` don't appear in search results. | Search index updates aren't instantaneous. See [Limitations](#limitations). |

## Limitations

### Updates to `urlTemplate` aren't instantaneous

Microsoft 365 stores the destination URL for each file in the search index. If you configure or update `urlTemplate` after files are indexed, search results continue to use the previous destination until Microsoft 365 updates the index. Updates to a container type's settings can take up to 24 hours to reach existing container type registrations.

### Search results for already-indexed content require a recrawl

Setting or updating `urlTemplate` takes effect immediately for Microsoft Graph API responses. However, search results for content that's already indexed continue to use the previously indexed destination until Microsoft 365 recrawls and reindexes that content. Today, there's no self-serve mechanism to trigger a recrawl.

### `urlTemplate` is scoped to the container type

The template applies to all container instances of the corresponding container type across all consuming tenants. Use the `{tenant-id}` token to route users to the correct tenant within your application.

## Related content

- [Container types](../../getting-started/containertypes.md)
- [Update fileStorageContainerType](/graph/api/filestoragecontainertype-update)
- [fileStorageContainerTypeSettings](/graph/api/resources/filestoragecontainertypesettings)
- [Add custom properties to a fileStorageContainer](/graph/api/filestoragecontainer-post-customproperty)
- [Authentication and authorization](../auth.md)
