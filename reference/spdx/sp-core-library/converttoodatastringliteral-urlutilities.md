# convertToODataStringLiteral()
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



Converts a variable to an OData string literal suitable for usage in a REST URL. The returned string will be enclosed in single quotes, and any single quotes will be escaped. Example usage: const url = "/_api/web/GetFolderByServerRelativeUrl(" + UrlUtilities.convertToODataStringLiteral("/SitePages/Alice's%20Page") + ")/Files"; // Produces this URL: // "/_api/web/GetFolderByServerRelativeUrl('/SitePages/Alice''s%20Page')/Files"

**Signature:** _public static convertToODataStringLiteral(value: string): string;_

**Returns**: `string`





#### Parameters
None


