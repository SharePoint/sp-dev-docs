---
title: Open Office Files From Your App
description: Launch Word, Excel, and PowerPoint files from SharePoint Embedded in Office web or desktop clients.
ms.date: 07/10/2026
ms.reviewer: cindylay
ms.localizationpriority: high
---
# Open Office Files From Your App
**Applies to:** Developer
<!-- agent:
task_type: how-to
audience: developer
outcome: Add Office web and desktop launch experiences for files stored in SharePoint Embedded.
next: preview-files.md
-->
Open Office files from your SharePoint Embedded app by using Microsoft Graph DriveItem metadata and Office launch patterns supported by Microsoft 365.
Complete [Upload, download, and manage files](manage-files.md) first so your app has files to launch.

## Understand Office experiences
SharePoint Embedded Office file experiences work similarly to Microsoft 365 file experiences.
Supported experiences include:

- Opening Office documents in Office for the web.
- Opening Office documents in Office desktop clients.
- Viewing and editing files.
- AutoSave for Word, Excel, and PowerPoint files.
- Version history for Office documents.
- Coauthoring.
- Sharing and shareable links.
- Comments and mentions, with documented limitations.
- Breadcrumbs in Office clients that associate a file with your app.

> [!NOTE]
> Documents stored in an archived container can't be viewed or accessed. Your app must handle the archived state by showing an appropriate error and guiding users on next steps, such as reactivating the container.

## Prerequisites
Before launching Office files, make sure:

- The file is stored in a SharePoint Embedded container.
- The app can read DriveItem metadata for the file.
- The user has permission to view or edit the file.
- The file type is supported by the target Office client.
- Your app handles browser redirects or new-window behavior.

## Get the DriveItem web URL
When your app retrieves a DriveItem from Microsoft Graph, the response can include `webUrl`.
For supported Office file types, `webUrl` points to a URL that opens the document in Office for the web.
A supported Office web URL has this shape:

```http
https://host/:w:r/contentstorage/sitecollection/_layouts/15/doc2.aspx?sourcedoc=guid&file=filename.docx&action=default&mobileredirect=true
```

For request details, see [Get a DriveItem resource](/graph/api/driveitem-get).

## Launch Office for the web
Use the DriveItem `webUrl` when your app should open Office in the browser.

1. Read the DriveItem for the selected file.
1. Confirm the response includes `webUrl`.
1. Open the URL in a browser tab, window, or app-controlled navigation surface.
1. Preserve app context so users can return after editing.
1. Handle access denied errors by checking file permissions and container membership.

> [!NOTE]
> Office files use AutoSave when users edit Word, Excel, and PowerPoint files stored in SharePoint Embedded.

## Configure the default launch experience
By default, the Office URL includes `action=default`.
To force a mode, update the query parameter with this pattern:

```csharp
System.UriBuilder builder = new System.UriBuilder(webUrl);
System.Collections.Specialized.NameValueCollection queryDictionary = System.Web.HttpUtility.ParseQueryString(builder.Query);
queryDictionary["action"] = "view";
builder.Query = queryDictionary.ToString();
string modifiedWebUrl = builder.ToString();
```

Use:

- `action=view` for read-only viewing.
- `action=edit` for editing when the user has edit permission.
- `action=default` when Office should choose the default behavior.

For supported `action` values, see [Web Application Open Platform Interface actions](/microsoft-365/cloud-storage-partner-program/online/discovery#wopi-actions).
## Open files in Office desktop clients
Use Office URI schemes when your app should open desktop clients directly.
The format is:

```text
<scheme-name>:<command-name>|<command-argument-descriptor>|<command-argument>
```

Common values include:

| Segment | Value |
|---|---|
| Scheme name | `ms-word`, `ms-excel`, or `ms-powerpoint` |
| Open File View command | `ofv` |
| Open File Edit command | `ofe` |
| URL descriptor | `u` |

Examples:

```text
ms-word:ofv|u|https://contoso.com/document.docx
ms-powerpoint:ofe|u|https://contoso.com/presentation.pptx
```

> [!NOTE]
> The URI must be opened in a blank window or new tab.

## Build a desktop client URL
Because `webUrl` points to Office Online for Office documents, build the desktop URI in two steps:

1. Get the `webUrl` of the parent folder.
1. Append the file name.

Example pattern:

```text
ms-word:ofe|u|{folder.WebUrl}/{item.Name}
```

Resulting shape:

```text
ms-word:ofe|u|https://contoso.sharepoint.com/contentstorage/CSP_1234765465/Document%20Library/MyDocument.docx
```

For scheme details, see [Office URI Schemes](/office/client-developer/office-uri-schemes).

## Configure redirect behavior
Use redirect settings to route users back to your app when Microsoft 365 can't open a file in a supported viewer.

`ApplicationRedirectUrl` configures the application redirect URL on the container type. Use it for the app route that handles file-return scenarios for your workload.

The `urlTemplate` setting controls where Microsoft 365 sends users for files without a supported viewer. Supported Office web viewer files, such as Word, Excel, and PowerPoint, open in the Office web viewer. PDF files open in the embedded viewer. Other file types redirect through `urlTemplate` when it's configured. If `urlTemplate` isn't configured, Microsoft 365 sends users to a Microsoft help page.

Set `settings.urlTemplate` with the Microsoft Graph `PATCH /storage/fileStorage/containerTypes/{containerTypeId}` API. Use a valid absolute `https://` URL that doesn't resolve to a loopback address.

```http
PATCH https://graph.microsoft.com/v1.0/storage/fileStorage/containerTypes/{containerTypeId}
Content-Type: application/json

{
  "settings": {
    "urlTemplate": "https://app.contoso.com/open?t={tenant-id}&d={drive-id}&i={item-id}"
  }
}
```

Microsoft 365 resolves supported tokens, URL-encodes their values, and substitutes them into the template. Common tokens include `{tenant-id}`, `{drive-id}`, `{folder-id}`, `{item-id}`, `{site-domain}`, `{list-id}`, and `{site-url}`.

When your app receives a `urlTemplate` redirect, authenticate the user, parse the token values, and use Microsoft Graph to retrieve the file. If you need the canonical file URL, use the DriveItem `webDavUrl` property instead of `webUrl`.

When you design redirects:

- Use a stable production URL for your app.
- Use development URLs only for local or trial work.
- Keep Microsoft Entra ID redirect URIs aligned with app routes.
- Validate that users return to the right in-app context after Office actions.
- Avoid URL rewriting that removes required Office query parameters.
- Verify `urlTemplate` after updates because invalid values are stored as `null`.

## Support sharing and coauthoring
Office experiences include collaboration features.
Users can share documents, create shareable links, coauthor in real time, see presence indicators, use comments, and use mentions where supported.

When a user creates a sharing link, they choose who it grants access to:

| Sharing scope | Who can use the link |
|---|---|
| **Anyone** | Anyone who receives the link, including people outside your organization, whether you send it directly or it's forwarded. |
| **People in your organization** | Anyone in your organization who has the link, whether sent directly or forwarded. |
| **Specific people** | Only the people you specify. If the invitation is forwarded, only people who already have access can use the link. |
| **People with existing access** | People who already have access to the file or folder. This scope doesn't change existing permissions. |

> [!NOTE]
> Mentions require target users to have a Microsoft 365 license assigned. Mentions are restricted to people inside the consuming tenant's organization and exclude guests and users from other tenants in multitenant settings.

## Use version history
Versioning is automatically enabled for Word, Excel, and PowerPoint files stored in SharePoint Embedded apps.
Users can see changes, compare versions, restore previous versions, recover from mistakes, and review changes from coauthoring sessions.
## Use breadcrumb properties
Office clients can display breadcrumb-style elements that associate Office files with your application.
Breadcrumb patterns are constructed from container properties configured for your app.
Use Current Channel to get breadcrumb patterns and future Office app enhancements.
For Office update channel information, see [Overview of update channels for Microsoft 365 Apps](/deployoffice/updates/overview-update-channels).
## Validate Office launch
Test each launch path:

1. Upload a Word document to a container.
1. Read the DriveItem and capture `webUrl`.
1. Open `webUrl` with `action=default`.
1. Modify the query string to `action=view`.
1. Modify the query string to `action=edit`.
1. Build an Office URI scheme for desktop launch.
1. Confirm permissions block edit when appropriate.
1. Confirm AutoSave and version history behavior.
1. Confirm the user can return to your app.

## Troubleshoot Office launch

| Symptom | Check |
|---|---|
| URL opens in view instead of edit | `action` parameter and user edit permission. |
| Desktop client doesn't open | Office URI scheme, browser policy, and new-tab behavior. |
| User can't coauthor | File type, permissions, and Office client support. |
| Mentions don't find a user | Microsoft 365 license and tenant membership limitations. |
| Breadcrumb doesn't look right | Container properties and Office update channel. |
| Redirect returns to wrong route | `ApplicationRedirectUrl` and app route handling. |

## Next steps
Add embedded previews in [Preview files in your app](preview-files.md).
