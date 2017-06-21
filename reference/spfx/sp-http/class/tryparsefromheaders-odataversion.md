# tryParseFromHeaders()



If the 'OData-Version' header is present, this returns the corresponding ODataVersion constant. An error is thrown if the version number is not supported. If the header is missing, then undefined is returned.

**Signature:** _public static tryParseFrom[Headers](../../web-apis/class/headers.md)(headers: Headers): [ODataVersion](../../sp-http/class/odataversion.md) | undefined;_

**Returns**: [`ODataVersion `](../../sp-http/class/odataversion.md),` undefined`





#### Parameters
None


