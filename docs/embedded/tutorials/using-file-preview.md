---
title: File Previews
description: Preview SharePoint Embedded content
ms.date: 05/21/2024
ms.localizationpriority: high
---

# Using File Previews

## Embedding a file preview in an iFrame

It's possible to preview a [wide range](https://support.microsoft.com/office/file-types-supported-for-previewing-files-in-onedrive-sharepoint-and-teams-e054cd0f-8ef2-4ccb-937e-26e37419c5e4) of files in your browser without using a special application. Among the files supported, you can view PDF, JPG, MP4, etc.

In order to preview a file in an `iframe`, you need to

1. Call Graph's driveItem preview endpoint and obtain the GetUrl
1. Use the URL in an iFrame (or even open it in a new page)

## Get the preview url using Graph

Microsoft Graph offers the following endpoint to [preview a file](/graph/api/driveitem-preview):

```javascript
POST https://graph.microsoft.com/{version}/drives/{driveId}/items/{itemId}/preview
```

- `Version` is Graph's version. For example "v1.0"
- The `driveId` is Container ID (starts with "b!")
- The `itemId`, which is the drive item ID.

If you're using the Microsoft Graph C# SDK, the code would be similar to the following:

```csharp
ItemPreviewInfo preview = await graphServiceClient.Drives[driveId].Items[itemId]
    .Preview()
    .Request()
    .PostAsync();
```

The JSON response includes the preview URLs for each document. Use the one obtained in `getUrl`:

```javascript
{
  "getUrl": "https://www.onedrive.com/embed?foo=bar&bar=baz",
  "postParameters": "param1=value&param2=another%20value",
  "postUrl": "https://www.onedrive.com/embed_by_post"
}
```

> [!TIP]
> It is possible to remove the banner at the top by adding the parameter `nb=true` to the obtained URL. E.g.
> `https://contoso.sharepoint.com/restOfUrl/embed.aspx?param1=value&nb=true`

> [!CAUTION]
> Currently **getUrl** contains a parameter with an encrypted token that can only be used with your application. However, this may change in the near future and you may be asked to add an auth header as you do with  other requests.

## Use the URL in an `iframe`

The next step is simply to use the URL obtained in the previous step in a new page. You could have an endpoint in your application that serves a new page as similar to this one:

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>Preview</h2>
    <p>Preview of {file name}:</p>

    <iframe src="{preview URL}" height="200" width="300" id="preview" title="Iframe Example"></iframe>
  </body>
</html>
```

## Load the document preview dynamically

If you intend to dynamically load the preview in the same page without leaving it, you might get a CORS error if you attempt to access the Microsoft Graph endpoint directly from a script from your page.

One way to solve this problem is to create an endpoint in your application that makes the request and returns the url.

For example, your server-side code should first obtain the document's preview url:

```csharp
[HttpGet]
[AuthorizeForScopes(Scopes = new string[] { "Files.Read.All" })]
public async Task<ActionResult<string>> GetPreviewUrl(string driveId, string itemId)
{
  // Obtain tokens for the the request
  // Use the function created in the first step
  return url + "&nb=true"; //Use nb=true to suppress banner
}
```

The client-side application can then use the browser's `fetch` API to request and inject the url into the `iframe`:

```javascript
async function preview(driveId, itemId) {
  const url = `/GetPreviewUrl?driveId=${driveId}&itemId=${itemId}`;
  const response = await fetch(url, {
      credentials: 'include',
  }).then(response => response.text());

  document.getElementById('preview').src = response + "&nb=true"; //Use nb=true to suppress banner
}
```
