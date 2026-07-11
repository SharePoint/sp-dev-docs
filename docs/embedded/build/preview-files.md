---
title: Preview Files in Your App
description: Create Microsoft Graph preview links and embed supported SharePoint Embedded file previews in your app.
ms.date: 07/10/2026
ms.reviewer: cindylay
ms.localizationpriority: high
---
# Preview Files in Your App
**Applies to:** Developer
<!-- agent:
task_type: how-to
audience: developer
outcome: Add file preview UX by creating preview links and embedding them safely in your app.
next: ../build/search-containers-files.md
-->
Add file preview UX so users can inspect SharePoint Embedded content without downloading files or opening a full Office editing experience.
Complete [Open Office files from your app](open-office-files.md) when you need Office editing. Use this article for lightweight previews.
## Understand preview flow
The preview flow has two steps:
1. Call the Microsoft Graph DriveItem preview endpoint.
1. Use the returned URL in an iframe or new browser page.
The Graph endpoint is:
```http
POST https://graph.microsoft.com/{version}/drives/{driveId}/items/{itemId}/preview
```
Where:
- `{version}` is the Microsoft Graph version, such as `v1.0`.
- `{driveId}` is the container ID that starts with `b!`.
- `{itemId}` is the DriveItem ID.
For the canonical API reference, see [Preview a DriveItem](/graph/api/driveitem-preview).
## Know supported file types
Microsoft 365 supports previews for many file types, including common document, image, video, and PDF formats.
Examples include:
- PDF files.
- JPG and other image files.
- MP4 and other supported media files.
- Office files supported by Microsoft 365 preview experiences.
For the current list, see [File types supported for previewing files in OneDrive, SharePoint, and Teams](https://support.microsoft.com/office/file-types-supported-for-previewing-files-in-onedrive-sharepoint-and-teams-e054cd0f-8ef2-4ccb-937e-26e37419c5e4).
> [!NOTE]
> File type support can vary by service capability, tenant policy, and client experience. Always handle preview failures gracefully.

## Native PDF viewing
The SharePoint Embedded native PDF viewing experience supports **searching within the file**, **viewing comments and sticky notes** embedded on the file, and **printing** (added March 2026). These capabilities are available through the [driveItem: preview](/graph/api/driveitem-preview) API in **both the beta and v1.0** Microsoft Graph endpoints.

### Enhance the PDF previewer with query parameters
Enhance the SharePoint Embedded PDF previewer by appending query parameters to the driveItem's `webUrl` property. To get `webUrl`, call the [driveItem GET API](/graph/api/driveitem-get), for example `GET /drives/{drive-id}/items/{item-id}?$select=webUrl`.

Pass parameters as a JSON-encoded `embed` query string. You can include one or more parameters in the same object.

```text
<webUrl>?&embed={"<param1>":<value>,"<param2>":<value>}
```

| Parameter | Effect |
|---|---|
| `mpp` | Enables the print icon and Ctrl+P printing. For example, `<webUrl>?&embed={"mpp":true}`. |
| `mpsn` | Shows sticky note content when the PDF contains sticky notes. For example, `<webUrl>?&embed={"mpsn":true}`. |
## Prerequisites
Before creating previews, make sure:
- The file is stored in a SharePoint Embedded container.
- Your app knows the container ID and DriveItem ID.
- Your app can acquire a Microsoft Graph token.
- The caller has permission to read the file.
- The file type is supported for preview.
- Your UI can host an iframe or open a new page.
## Create a preview link
Call the preview endpoint from your service layer.
Use this C# SDK pattern:
```csharp
ItemPreviewInfo preview = await graphServiceClient.Drives[driveId].Items[itemId]
    .Preview()
    .Request()
    .PostAsync();
```
The response includes preview URL information:
```json
{
  "getUrl": "https://www.onedrive.com/embed?foo=bar&bar=baz",
  "postParameters": "param1=value&param2=another%20value",
  "postUrl": "https://www.onedrive.com/embed_by_post"
}
```
Use `getUrl` when available.
> [!CAUTION]
> `getUrl` currently contains an encrypted token that can only be used with your application. This behavior may change.
## Remove the preview banner
Add `nb=true` to the obtained URL to remove the banner at the top.
Example:
```http
https://contoso.sharepoint.com/restOfUrl/embed.aspx?param1=value&nb=true
```
Use this only when it fits your user experience and compliance requirements.
## Embed the preview in an iframe
Create an app page that hosts the preview URL.
Example shape:
```html
<!DOCTYPE html>
<html>
  <body>
    <h2>Preview</h2>
    <p>Preview of {file name}:</p>
    <iframe src="{preview URL}" height="200" width="300" id="preview" title="File preview"></iframe>
  </body>
</html>
```
In production, also provide:
- A descriptive iframe title.
- Responsive sizing.
- Loading states.
- Error states.
- A fallback download or open action.
## Load previews dynamically
Don't call Microsoft Graph directly from a browser script if that creates CORS issues or exposes tokens.
Use a server-side endpoint that:
1. Authenticates the user.
1. Validates access to the requested file.
1. Acquires a Graph token.
1. Calls the DriveItem preview endpoint.
1. Returns the preview URL to the client.
Use this server-side pattern:
```csharp
[HttpGet]
[AuthorizeForScopes(Scopes = new string[] { "Files.Read.All" })]
public async Task<ActionResult<string>> GetPreviewUrl(string driveId, string itemId)
{
  return url + "&nb=true";
}
```
Then the client can request the URL and set the iframe source.
```javascript
async function preview(driveId, itemId) {
  const url = `/GetPreviewUrl?driveId=${driveId}&itemId=${itemId}`;
  const response = await fetch(url, {
      credentials: 'include',
  }).then(response => response.text());
  document.getElementById('preview').src = response + "&nb=true";
}
```
## Design preview UX
A good preview UX should:
- Show the file name.
- Show a loading indicator.
- Reserve enough space for the iframe.
- Provide an open-in-Office action for Office files.
- Provide a download action when preview isn't available.
- Preserve keyboard accessibility.
- Avoid trapping focus inside the preview frame.
- Explain errors in user-friendly language.
## Handle preview errors
| Failure | Handling |
|---|---|
| Unsupported file type | Show a download or open action instead. |
| Missing permission | Ask the user to request access or sign in again. |
| Expired URL | Request a fresh preview URL. |
| CORS error | Move the Graph call to your server-side endpoint. |
| File deleted | Refresh the file list and remove stale selections. |
| Service error | Retry once, then show a stable fallback. |
> [!IMPORTANT]
> Don't cache preview URLs as durable identifiers. Store the container ID and DriveItem ID, then create a fresh preview URL when needed.
## Secure preview requests
Treat preview as a read operation on protected content.
Your service should:
1. Validate the signed-in user or service context.
1. Confirm the caller can read the container content.
1. Confirm the requested item belongs to the expected container.
1. Avoid exposing Graph tokens to the browser.
1. Avoid logging preview URLs that include sensitive tokens.
1. Expire app-side preview sessions when the user signs out.
## Validate the preview experience
Test with multiple file types and users:
1. Upload a PDF file.
1. Upload an image file.
1. Upload an Office file.
1. Create a preview URL for each file.
1. Render each preview in an iframe.
1. Test a user with read access.
1. Test a user without access.
1. Delete a file and confirm the error is handled.
1. Refresh an expired preview URL.
1. Confirm the fallback action works.
## Connect to the next build task
After preview is working, add discovery experiences so users can find content across containers and files.
Continue to [Search containers and files](../build/search-containers-files.md).

## Next steps

- [Search containers and files](search-containers-files.md)
