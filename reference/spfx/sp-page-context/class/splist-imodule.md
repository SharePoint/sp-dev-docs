# SPList class







This class is primarily used with the PageContext class. It provides contextual information for the SharePoint list that hosts the page.



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`id`     | `public` | [`Guid`](../../sp-core-library.api/class/guid.md) | _Read-only._ The GUID that identifies the SPList on the server. This property could be undefined if the information isn't avalible. |
|`permissions`     | `public` | [`SPPermission`](../../sp-page-context.api/class/sppermission.md) | _Read-only._ Return the SPPermission object that represents the set of permissions that the current user has for interacting with the list. |
|`serverRelativeUrl`     | `public` | `string` | _Read-only._ Returns the server-relative URL for this SPList. Example: "/sites/PubSite" |
|`title`     | `public` | `string` | _Read-only._ Returns the title for this SPList. |







