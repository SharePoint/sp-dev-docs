---
title: Configure Default Launch Experience for your Office Files
description: Configure Default Launch Experience for your Office Files
ms.date: 05/21/2024
ms.localizationpriority: high
---

# Configure Default Launch Experience for your Office Files

## Configure the Launch mode of Office Clients

When retrieving a `DriveItem` from the Microsoft Graph API with:

```http
/graph/api/driveitem-get?view=graph-rest-1.0
```

The `webUrl` property in the response can be a link to Web Application Open Platform Interface (WOPI) for rendering supported office file types. The URL will look like:

```http
https://host/:w:r/contentstorage/sitecollection/_layouts/15/doc2.aspx?sourcedoc=guid&file=filename.docx&action=default&mobileredirect=true
```

This `webUrl` will open WOPI in the default mode (`action=default`). If you wish to override the default mode to force a specific mode (for example, View for read-only and Edit for editor), you can augment the `webUrl` like this:

```csharp
string webUrl = https://host/:w:r/contentstorage/sitecollection/_layouts/15/doc2.aspx?sourcedoc=guid&file=filename.docx&action=default&mobileredirect=true;

System.UriBuilder builder = new System.UriBuilder(webUrl);
System.Collections.Specialized.NameValueCollection queryDictionary = System.Web.HttpUtility.ParseQueryString(builder.Query);
queryDictionary["action"] = "view";
//queryDictionary["action"] = "edit";
builder.Query = queryDictionary.ToString();
string modifiedWebUrl = builder.ToString();
```

> [!TIP]
> To learn more about WOPI Actions, see: [WOPI Discovery - WOPI Actions](/microsoft-365/cloud-storage-partner-program/online/discovery#wopi-actions).

### Open Office files directly in Desktop clients

To open your files directly in the Office desktop clients, you need to create an Office URI scheme. The format is as follows:

```xml
<scheme-name>:<command-name>"|"<command-argument-descriptor>"|"<command-argument>
```

Use the following table to replace the preceding segments:

- **scheme-name**: the name of the application, for example: *ms-excel*
- **command-name**:
  - `ofv` for Open File View
  - `ofe` for Open File Edit
  - `nft` for New From Template
- **command-argument-descriptor** and **command-argument**:
  - `|u|{file url}`
  - `|s|{save location}`
    - *only for New From Template*

> [!NOTE]
> The **New From Template** may not work as you would expect for save location since the permissions schema is different from SharePoint Sites.

The following contains an example usage of the Office URI scheme:

```text
ms-word:ofv|u|https://contoso.com/document.docx
ms-powerpoint:ofe|u|https://contoso.com/presentation.pptx
```

Because the `webUrl` property points to Office Online for Office documents, you must get the actual link in two steps:

1. Getting the WebUrl of the parent folder
1. Appending the name of the file

For example, the following scheme:

```text
ms-word:ofe|u|{folder.WebUrl]/{item.Name}
```

... will result in the following scheme:

```text
ms-word:ofe|u|https://contoso.sharepoint.com/contentstorage/CSP_1234765465/Document%20Library/MyDocument.docx
```

To learn more about Office URI schemes, see [Office URI Schemes](/office/client-developer/office-uri-schemes).

> [!NOTE]
> The Uri must be opened in a blank window or new tab.
