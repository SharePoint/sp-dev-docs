# UrlUtilities class







Common helper functions for working with URLs. These utilities are intended to be simple, small, and very broadly applicable.






## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`convertToODataStringLiteral()`](converttoodatastringliteral-urlutilities.md)     | `public, static` | `string` | Converts a variable to an OData string literal suitable for usage in a REST URL. The returned string will be enclosed in single quotes, and any single quotes will be escaped. Example usage: const url = "/_api/web/GetFolderByServerRelativeUrl(" + UrlUtilities.convertToODataStringLiteral("/SitePages/Alice's%20Page") + ")/Files"; // Produces this URL: // "/_api/web/GetFolderByServerRelativeUrl('/SitePages/Alice''s%20Page')/Files" |
|[`removeEndSlash(url)`](removeendslash-urlutilities.md)     | `public, static` | `string` | Removes any slash characters from the end of the URL. This function assumes that the input is already a valid absolute or server-relative URL. Examples: removeEndSlash('http://example.com/') ---> 'http://example.com' removeEndSlash('/example') ---> '/example' removeEndSlash('/') ---> '' |





