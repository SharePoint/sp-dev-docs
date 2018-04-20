---
title: Shorter share link format in OneDrive and SharePoint
description: Links to shared files and folders in OneDrive and SharePoint are now shorter and have a new format. 
ms.date: 4/19/2018
ms.prod: sharepoint
---

# Shorter share link format in OneDrive and SharePoint

Links to shared files and folders in OneDrive and SharePoint are now shorter and have a new format. For example, the following shows the old and new format for a OneDrive link that works for anyone inside the organization.

<br/>

|Old link format|New link format|
|:--------------|:--------------|
|[https://contoso-my.sharepoint.com/personal/john_contoso_com/_layouts/15/guestaccess.aspx?share=ERGZUIZ8E0pAuC1oJtwz4dQB23IabPgbMtiVe0OLPtMybw](https://contoso-my.sharepoint.com/personal/john_contoso_com/_layouts/15/guestaccess.aspx?share=ERGZUIZ8E0pAuC1oJtwz4dQB23IabPgbMtiVe0OLPtMybw)|[https://contoso-my.sharepoint.com/:w:/p/john/ERGZUIZ8E0pAuC1oJtwz4dQB23IabPgbMtiVe0OLPtMybw](https://contoso-my.sharepoint.com/:w:/p/john/ERGZUIZ8E0pAuC1oJtwz4dQB23IabPgbMtiVe0OLPtMybw)|

> [!NOTE]
> Links that were shared before this change was introduced are not affected by the change and will continue to work.

The new link format might affect applications or services that inspect or take dependencies on OneDrive or SharePoint URL structures, especially if those applications or services parse the site URL or specific strings. The new short links are compatible with all APIs that work with `guestaccess.aspx` links. 

The following are some scenarios that are affected by this change:

- Applications that parse a URL input by an end user to get the site URL in order to construct SharePoint REST API requests such as GetFileByUrl or GetSharingLinkData.

- Applications that take URL input from an end user and use CSOM to attempt to query file information.

- Applications that parse a URL input by an end user to determine whether it is an anonymous or an internal-only sharing link.

Apps that use Microsoft Graph to interact with SharePoint links will continue to work. For more information, see [Accessing shared DriveItems](https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/shares_get).

## SharePoint REST API

The SharePoint REST API does not have a supported way to interact with user input links. We recommend that you migrate to the Microsoft Graph shares API if possible. 

If you’re unable to migrate to Microsoft Graph, you can use the following workaround. Note that this workaround is not supported.

1.	Determine the base URL. This is now the hostname of the link.

2.	Construct the API request by concatenating the base URL, `SP.RemoteWeb`, and a specific API method, as shown.

    `{hostname}/_api/SP.RemoteWeb(@a)/web/{specific_api_here}?@a='{url_encoded_link}'`

For example, for the following input URL:

`https://contoso-my.sharepoint.com/personal/john_contoso_com/_layouts/15/guestaccess.aspx?share=ERGZUIZ8E0pAuC1oJtwz4dQB23IabPgbMtiVe0OLPtMybw`

This is the original API request:

`https://contoso-my.sharepoint.com/personal/john_contoso_com/_api/web/GetFileByUrl(@url)?@url='https%3A%2F%2Fcontoso-my.sharepoint.com%2Fpersonal%2Fjohn_contoso_com%2F_layouts%2F15%2Fguestaccess.aspx%3Fshare%3DERGZUIZ8E0pAuC1oJtwz4dQB23IabPgbMtiVe0OLPtMybw`

This is the new API request:

`https://contoso-my.sharepoint.com/_api/SP.RemoteWeb(@url)/web/GetFileByUrl(@url)?@url='https%3A%2F%2Fcontoso-my.sharepoint.com%2Fpersonal%2Fjohn_contoso_com%2F_layouts%2F15%2Fguestaccess.aspx%3Fshare%3DERGZUIZ8E0pAuC1oJtwz4dQB23IabPgbMtiVe0OLPtMybw`

To determine the specific type of link, inspect the `IsSharingLink` and `IsAnonymous` fields in the response for the GetSharingLinkData API (replace **GetFileByUrl** with **GetSharingLinkData** in the examples). Use this method instead of parsing URLs for tokens such as `guestaccess.aspx`.

## SharePoint CSOM 

CSOM does not have a supported way to interact with user input links. Some applications open a **ClientContext** and query the file metadata by successively truncating path segments from the SharePoint link until the **ClientContext** constructor succeeds. This approach no longer works with the new URL format.

To work around this:
1.	Open a **ClientContext** on the root site (scheme://hostname). 
2.	Call `Web.WebUrlFromPageUrlDirect()` to get the web URL of the link.
3.	Open a new **ClientContext** using this web URL to make additional requests.

> [!NOTE]
> This approach is not supported.
