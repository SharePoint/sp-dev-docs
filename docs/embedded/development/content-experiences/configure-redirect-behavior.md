---
title: Configuring redirect behavior
description: Configure the urlTemplate property on a SharePoint Embedded container type to route users from Microsoft 365 search results to your application.
ms.date: 05/29/2026
ms.localizationpriority: high
---

# Configuring redirect behavior

When a user selects a SharePoint Embedded file in Microsoft 365 search results, Microsoft 365 chooses a destination based on the file type. For files without a built-in Microsoft 365 web viewer, the destination depends on the `urlTemplate` property on the [container type](../../getting-started/containertypes.md). This article explains how Microsoft 365 chooses a destination and how to configure `urlTemplate` to route users to your application.

## Prerequisites

Before you configure `urlTemplate`, ensure you have:

- A SharePoint Embedded [container type](../../getting-started/containertypes.md) that you own.
- The Microsoft Graph permission `FileStorageContainerType.Manage.All` (delegated, work or school account). Application permissions aren't supported for [Update fileStorageContainerType](/graph/api/filestoragecontainertype-update).
- `isDiscoverabilityEnabled` set to `true` on your container type's settings, so files in your containers appear in Microsoft 365 search results.

## How Microsoft 365 chooses a destination for a search result

The [`isDiscoverabilityEnabled`](/graph/api/resources/filestoragecontainertypesettings) setting on the container type controls whether a container's files appear in Microsoft 365 search results. Files appear in search only when `isDiscoverabilityEnabled` is `true` for their container type.

When a user selects a SharePoint Embedded file from search results, the file opens in an appropriate viewer. For file types without a built-in Microsoft 365 viewer, the destination depends on the container type's [`urlTemplate`](/graph/api/resources/filestoragecontainertypesettings) property.

If `urlTemplate` isn't configured, Microsoft 365 redirects users who select non-Office or non-PDF files to a generic Microsoft help page. The help page explains that the file is stored in a third-party application and directs the user to open it there.

### How file types are handled

The destination URL for a file in search results depends on the file type and whether `urlTemplate` is set:

| File type | `urlTemplate` set? | Behavior when selected from search |
| --- | --- | --- |
| Files with a supported Microsoft 365 web viewer (Word, Excel, PowerPoint, Visio, OneNote, and others) | Either | Opens in the corresponding Microsoft 365 web viewer |
| PDF | Either | Opens in the SharePoint Embedded PDF previewer |
| All other types | Yes | Redirected to your application through `urlTemplate` |
| All other types | No | Redirected to a [Microsoft help page](https://aka.ms/spe-openfilelocation) |

## Configure `urlTemplate`

Set the `urlTemplate` property on your container type by calling the [Update fileStorageContainerType](/graph/api/filestoragecontainertype-update) API. The value is a URL with placeholder tokens that Microsoft 365 resolves to actual item identifiers when a user selects a search result.

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

Each placeholder token uses curly braces. When a user selects a search result, Microsoft 365 resolves each token to a value that corresponds to the item, URL-encodes the value, and substitutes it in the template. If Microsoft 365 can't resolve a token, it omits that token from the resolved URL. The exceptions are `{tenant-id}` and `{drive-id}`—if Microsoft 365 can't resolve them, they remain as literal text in the URL.

### Supported tokens

| Token | Value your application receives |
| --- | --- |
| `{tenant-id}` | GUID of the consuming tenant. Used to make tenant-scoped Microsoft Graph API calls. |
| `{drive-id}` | Drive ID of the container. Use it with Microsoft Graph APIs to reference the container. |
| `{folder-id}` | Item ID of the file's immediate parent folder. Item IDs aren't GUIDs. If the file is at the root of the container, `{folder-id}` is omitted from the redirect URL rather than passed as an empty value. |
| `{item-id}` | Item ID of the driveItem. Item IDs aren't GUIDs. |
| `{site-domain}` | _To be documented._ |
| `{list-id}` | _To be documented._ |
| `{site-url}` | _To be documented._ |

To use a custom container property as a token in `urlTemplate`, set the property's `isPatternToken` value to `true` when you create or update the property. Then reference the property in your template by enclosing its name in curly braces (for example, `{myCustomProperty}`). For more information, see [Add custom properties to a fileStorageContainer](/graph/api/filestoragecontainer-post-customproperty).

#### Advanced tokens

The following tokens cover specialized scenarios. Most applications can rely on the [common tokens](#supported-tokens) above.

| Token | Value your application receives |
| --- | --- |
| `{ownershipType}` | _To be documented._ |
| `{itemname-guid}` | _To be documented._ |
| `{folderpath-guids}` | _To be documented._ |

### Example

If your container type has `urlTemplate` set to:

```text
https://app.contoso.com/open?t={tenant-id}&d={drive-id}&i={item-id}
```

When a user opens a `.txt` file from a search result, Microsoft 365 redirects the user to a URL like the following:

```text
https://app.contoso.com/open?t=72f988bf-86f1-41af-91ab-2d7cd011db47&d=b%21abc123def456ghi789jkl0&i=01ABC23DEF45GHI67JKL890
```

Your application receives the tenant ID, drive ID, and item ID as query parameter values (using the parameter names you defined in the template, such as `t`, `d`, and `i`). Use these values to retrieve and open the file through the Microsoft Graph API.

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
1. Call Microsoft Graph with the `driveId` and `itemId` to retrieve the [driveItem](/graph/api/resources/driveitem) and open the file in your application's UI.

For information about calling Microsoft Graph against a consuming tenant's containers, see [Authentication and authorization](../auth.md).

## Troubleshooting

| Symptom | Possible cause |
| --- | --- |
| Your files don't appear in Microsoft 365 search results. | The container type's `isDiscoverabilityEnabled` setting is `false`, or the registration in the consuming tenant overrides the setting. Search indexing can also take time after enablement. |
| Users land on the Microsoft help page instead of your application. | `urlTemplate` is `null` (likely because the URL failed validation), or the file type opens in a Microsoft 365 viewer instead of redirecting. |
| A token appears as literal text (such as `{tenant-id}`) in the redirect URL. | Microsoft 365 couldn't resolve the token for the current item. Verify the token name matches a [supported token](#supported-tokens) or a custom property with `isPatternToken` set to `true`. |
| Updates to `urlTemplate` don't appear in search results. | Search index updates aren't instantaneous. See [Limitations](#limitations). |

## Limitations

### Updates to `urlTemplate` aren't instantaneous

Microsoft 365 stores the destination URL for each file in the search index. If you configure or update `urlTemplate` after files are indexed, search results continue to use the previous destination until Microsoft 365 updates the index. Updates to a container type's settings can take up to 24 hours to reach existing container type registrations.

### `urlTemplate` is scoped to the container type

The template applies to all container instances of the corresponding container type across all consuming tenants. Use the `{tenant-id}` token to route users to the correct tenant within your application.

## Related content

- [Container types](../../getting-started/containertypes.md)
- [Update fileStorageContainerType](/graph/api/filestoragecontainertype-update)
- [fileStorageContainerTypeSettings](/graph/api/resources/filestoragecontainertypesettings)
- [Add custom properties to a fileStorageContainer](/graph/api/filestoragecontainer-post-customproperty)
- [Authentication and authorization](../auth.md)
