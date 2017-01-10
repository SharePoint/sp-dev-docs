# SPWeb class







This class is primarily used with the PageContext class. It provides contextual information for the SharePoint site ("web") that hosts the page.



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`absoluteUrl`     | `public` | `string` | _Read-only._ Returns the absolute URL for this SPWeb. Example: "https://example.com/sites/PubSite/SubWeb" |
|`id`     | `public` | [`Guid`](../sp-core-library/guid.md) | _Read-only._ The GUID that identifies the SPWeb on the server. |
|`isAppWeb`     | `public` | `boolean` | _Read-only._ Returns true if this SPWeb the container web for an SPApp. |
|`language`     | `public` | `number` | _Read-only._ Returns the locale identifier (LCID) for the default language of the website. Example: 1033 represents the locale identifier for en-US. |
|`logoUrl`     | `public` | `string` | _Read-only._ Returns the absolute URL of the website logo. Example: https://example.com/sites/PubSite/SubWeb/logo.jpg |
|`permissions`     | `public` | [`SPPermission`](../sp-page-context/sppermission.md) | _Read-only._ Return the SPPermission object that represents the set of permissions that the current user has for interacting with the web. |
|`serverRelativeUrl`     | `public` | `string` | _Read-only._ Returns the server-relative URL for this SPWeb. Example: "/sites/PubSite/SubWeb" |
|`templateName`     | `public` | `string` | _Read-only._ Returns the name of the site definition or site template that was used to create the site. Example: "BLOG" represents the Blog template when creating a new site on SharePoint. |
|`title`     | `public` | `string` | _Read-only._ Returns the title of the current SPWeb. |







