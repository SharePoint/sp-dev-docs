---
title: Configure Default Launch Experience for your Office Files  
description: TODO
ms.date: 11/14/2023
ms.localizationpriority: high
---

# Configure Default Launch Experience for your Office Files  

### In this article:</br>
1. [Launch Office in 'View' or 'Edit' mode'](#Configure-Launch-mode-of-Office-Clients)</br>
2. [Launch Desktop Clients Directly](#Open-Office-files-directly-in-Desktop-clients)

### Configure Launch mode of Office Clients

When retrieving a driveitem back from the Graph API per:

https://learn.microsoft.com/en-us/graph/api/driveitem-get?view=graph-rest-1.0

There is a webUrl property which can be a link to WOPI for rendering supported office file types.  This url will look something like:
    ```
    https://host/:w:r/contentstorage/sitecollection/_layouts/15/doc2.aspx?sourcedoc=guid&file=filename.docx&action=default&mobileredirect=true
    ```
When you use this webUrl it will open WOPI in the default mode (action=default). If you wish to override the default mode to force a specific mode (e.g. View for read-only and Edit for editor) you can augment the webUrl like this:

```C#
string webUrl = https://host/:w:r/contentstorage/sitecollection/_layouts/15/doc2.aspx?sourcedoc=guid&file=filename.docx&action=default&mobileredirect=true;

System.UriBuilder builder = new System.UriBuilder(webUrl);
System.Collections.Specialized.NameValueCollection queryDictionary = System.Web.HttpUtility.ParseQueryString(builder.Query);
queryDictionary["action"] = "view";
//queryDictionary["action"] = "edit";
builder.Query = queryDictionary.ToString();
string modifiedWebUrl = builder.ToString();
```

To learn more about WOPI Actions:
https://learn.microsoft.com/en-us/microsoft-365/cloud-storage-partner-program/online/discovery#wopi-actions

### Open Office files directly in Desktop clients

To open your files directly in Office desktop you need to create an Office URI scheme. The format is as follows

```< scheme-name >:< command-name >"|"< command-argument-descriptor > "|"< command-argument >```

Where:
- scheme-name is the name of application, for example ms-excel.
- command-name:
  - ofv for Open File View
  - ofe for Open File Edit
  - nft for New From Template
- command-argument-descriptor and command-argument
  - |u|{file url}
  - |s|{save location} - only for New From Template

> **_NOTE:_**
New From Template may not work as you would expect for save location since the permissions schema is different from SharePoint Sites.

For example:
```
ms-word:ofv|u|https://contoso.com/document.docx
ms-powerpoint:ofe|u|https://contoso.com/presentation.pptx
```

Since WebUrl points to Office Online for office documents, getting the actual link requires two steps:

- Getting the WebUrl of the parent folder
- Appending the name of the file

For example:

`ms-word:ofe|u|{folder.WebUrl]/{item.Name}`

which will turn into

`ms-word:ofe|u|https://contoso.sharepoint.com/contentstorage/CSP_1234765465/Document%20Library/MyDocument.docx`

To learn more about Office URI schemes

https://learn.microsoft.com/en-us/office/client-developer/office-uri-schemes

> **_NOTE:_** The Uri must be open in a blank window or tab
