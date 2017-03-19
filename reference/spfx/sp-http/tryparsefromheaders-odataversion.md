# tryParseFromHeaders()




If the 'OData-Version' header is present, this returns the corresponding ODataVersion constant. An error is thrown if the version number is not supported. If the header is missing, then undefined is returned.

**Signature:** _public static tryParseFromHeaders(headers: Headers): [ODataVersion](../sp-http/odataversion.md);_

**Returns**: [`ODataVersion`](../sp-http/odataversion.md)





#### Parameters
None


