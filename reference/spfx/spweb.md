# SPWeb class





This class is primarily used with the PageContext class. It provides contextual 
information for the SharePoint site ("web") that hosts the page.



### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`absoluteUrl`     | `public` | `string` | Returns the absolute URL for this SPWeb |
|`id`     | `public` | [`Guid`](guid.md) | The GUID that identifies the SPWeb on the server or undefined if the Guid string  value is invalid |
|`serverRelativeUrl`     | `public` | `string` | Returns the server-relative URL for this SPWeb |
|`title`     | `public` | `string` | Returns the title of the SharePoint site |





