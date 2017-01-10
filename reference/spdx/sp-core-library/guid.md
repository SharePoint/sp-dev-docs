# Guid class







This class represents a globally unique identifier, as described by IETF RFC 4122. The input string is normalized and validated, which provides important guarantees that simplify other code that works with the GUID. This class also provides basic support for generating a pseudo-random GUID; however, be aware that the uniqueness depends on the browser's Math.random() function and may be not be suitable for some applications.



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`empty`     | `public` | [`Guid`](../sp-core-library/guid.md) | Returns a new empty Guid instance. |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`equals()`](equals-guid.md)     | `public` | `boolean` | Compare this instance to another Guid instance |
|[`isValid(guid)`](isvalid-guid.md)     | `public, static` | `boolean` | Indicates whether a guid is valid, i.e. whether it would be successfully parsed by Guid.tryParse(). This function is cheaper than Guid.tryParse() because it does not construct a Guid object. |
|[`newGuid()`](newguid-guid.md)     | `public, static` | [`Guid`](../sp-core-library/guid.md) | Returns a new Guid instance with a pseudo-randomly generated Guid, according to the version 4 UUID algorithm from RFC 4122. |
|[`parse(guid)`](parse-guid.md)     | `public, static` | [`Guid`](../sp-core-library/guid.md) | Parses the input string to construct a new Guid object. If the string cannot be parsed, then an error is thrown. |
|[`toString()`](tostring-guid.md)     | `public` | `string` | Object.prototype.toString override |
|[`tryParse(guid)`](tryparse-guid.md)     | `public, static` | [`Guid`](../sp-core-library/guid.md) | Attempts to parse the input string to construct a new Guid object. If the string cannot be parsed, then undefined is returned. |





