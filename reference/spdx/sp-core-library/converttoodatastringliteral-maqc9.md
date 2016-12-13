# convertToODataStringLiteral()

Converts a variable to an OData string literal suitable for usage in a REST URL. The returned string will be enclosed in single quotes, and any single quotes will be escaped. Example usage: const url = "/_api/web/GetFolderByServerRelativeUrl(" + UrlUtilities.convertToODataStringLiteral("/SitePages/Alice's%20Page") + ")/Files"; // Produces this URL: // "/_api/web/GetFolderByServerRelativeUrl('/SitePages/Alice''s%20Page')/Files"

**Signature:** _public static convertToODataStringLiteral(value: string): string;_

**Returns**: `string`



#### Parameters
None

