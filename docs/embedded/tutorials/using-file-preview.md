---
title: File Previews
description: Preview SharePoint Embedded content
ms.date: 11/14/2023
ms.localizationpriority: high
---

# Using File Previews 

### Embedding a file preview in an iFrame

It is possible to preview a 
[wide range](https://support.microsoft.com/en-us/office/file-types-supported-for-previewing-files-in-onedrive-sharepoint-and-teams-e054cd0f-8ef2-4ccb-937e-26e37419c5e4) 
of files in your browser without using a special application. Among the files supported, you can view PDF, JPG, MP4, etc.

In order to preview a file in an iFrame, you need to

1. Call Graph's driveItem preview endpoint and obtain the GetUrl
2. Use the URL in an iFrame (or even open it in a new page)
3. If you want to load the preview dynamically...


## Get the preview url using Graph

Graph offers the following endpoint to [preview a file](https://learn.microsoft.com/en-us/graph/api/driveitem-preview?view=graph-rest-1.0):

```js
POST https://graph.microsoft.com/{version}/drives/{driveId}/items/{itemId}/preview
```
- Version is Graph's version. Eg. "v1.0"
- The driveId is Container id (starts with "b!")
- The itemId, which is the drive item Id.


If you're using the Graph C# Framework, the code would be similar to this:
```cs
ItemPreviewInfo preview = await graphServiceClient.Drives[driveId].Items[itemId]
    .Preview()
    .Request()
    .PostAsync();
```

The answer will be a json with the preview URLs. Use the one obtained in getUrl
```js
{
    "getUrl": "https://www.onedrive.com/embed?foo=bar&bar=baz",
    "postParameters": "param1=value&param2=another%20value",
    "postUrl": "https://www.onedrive.com/embed_by_post"
}
```

> **_NOTE:_** Currently **getUrl** contains a parameter with an encrypted token that can only
be used with your application. However, this may change in the near future and you may be
asked to add an auth header as you do with  other requests.


## Use the URL in an iFrame
The next step is simply to use the URL obtained in the previous step in a new page. You could
have an endpoint in your application that serves a new page as similar to this one:

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
<br></br>

## If you want to load the preview dynamically...
If you intend to dynamically load the preview in the same page without leaving it,
you may get a CORS error if you attempt to access the Graph endpoint directly from a script from your page.

One way to solve this problem is to create an endpoint in your application that makes the request and
returns the Url.

For example, in your backend
```cs
[HttpGet]
[AuthorizeForScopes(Scopes = new string[] { "Files.Read.All" })]
public async Task<ActionResult<string>> GetPreviewUrl(string driveId, string itemId)
{
    // Obtain tokens for the the request
    // Use the function created in the first step
    return url;
}
```

In your fronted you can use fetch to make the request and inject the url into the iFrame
```js
async function preview(driveId, itemId) {
    const url = `/GetPreviewUrl?driveId=${driveId}&itemId=${itemId}`;
    const response = await fetch(url, {
        credentials: 'include',
    }).then(response => response.text());

    document.getElementById('preview').src = response;
}
```



