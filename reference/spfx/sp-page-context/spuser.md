# SPUser class







This class is primarily used with the PageContext class. It provides contextual information for the SharePoint user that is accessing the page.



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`displayName`     | `public` | `string` | _Read-only._ The display name for the current user. Example: "John Doe" |
|`email`     | `public` | `string` | _Read-only._ The email address for the current user. Example: "example@contoso.com" |
|`isAnonymousGuestUser`     | `public` | `boolean` | _Read-only._ Returns if the current user is an anonymous guest. |
|`isExternalGuestUser`     | `public` | `boolean` | _Read-only._ Returns true if the current user is an external guest. |
|`loginName`     | `public` | `string` | _Read-only._ The login name for current user. Example: "i:0#.w|domain\user" |







