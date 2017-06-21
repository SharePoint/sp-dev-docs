# SPSite class







This class is primarily used with the PageContext class. It provides contextual information for the SharePoint site collection ("site") that hosts the page.



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`absoluteUrl`     | `public` | `string` | _Read-only._ Returns the absolute URL for this SPSite. Example: "https://example.com/sites/PubSite" |
|`cdnPrefix`     | `public` | `string` | _Read-only._ Returns the prefix of the application's specified cdn or an empty string if there isn't one. |
|`classification`     | `public` | `string` | _Read-only._ Returns the classification of the site. |
|`correlationId`     | `public` | [`Guid`](../../sp-core-library/class/guid.md) | _Read-only._ Returns the correlation id to the current server request. |
|`id`     | `public` | [`Guid`](../../sp-core-library/class/guid.md) | _Read-only._ The GUID that identifies the SPSite on the server. |
|`isNoScriptEnabled`     | `public` | `boolean` | _Read-only._ Returns true if isNoScript has been enabled on the SPSite. |
|`recycleBinItemCount`     | `public` | `number` | _Read-only._ The amount of items in the recyle bin. |
|`serverRelativeUrl`     | `public` | `string` | _Read-only._ Returns the server-relative URL for this SPSite. Example: "/sites/PubSite" |
|`serverRequestPath`     | `public` | `string` | _Read-only._ Returns serverRelativeUrl of the original request. Example: "/teams/SPClientTest/SitePages/Home.aspx" |
|`sitePagesEnabled`     | `public` | `boolean` | _Read-only._ Returns true if SitePages are enabled on this SPSite. |







