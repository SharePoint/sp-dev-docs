# Guid class





This class represents a globally unique identifier,as described by 
IETF RFC 4122. The input string is normalized and validated by the class 
constructor, which provides important guarantees that simplify other code 
that works with the GUID. This class also provides basic functionality 
for generating a pseudo-random GUID ("version 4" UUID from the RFC); 
however, be aware that the uniqueness depends on the browser's 
Math.random() function and may be not be suitable for some applications. 







## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`equals(guid)`](equals-buye9.md)     | `public` | `boolean` | Compare this instance to another Guid instance   |
|[`isValid(guid)`](isvalid-udou9.md)     | `public, static` | `boolean` | Indicates whether a guid is valid (according to RFC4122).   |
|[`constructorGuid(randomProvider)`](constructorguid-syay9.md)     | `public, static` | [`Guid`](../sp-client-base/guid.md) | Returns a new Guid instance with a pseudo-randomly generated Guid.   |
|[`toString()`](tostring-5z9w9.md)     | `public` | `string` | Object.prototype.toString override   |
|[`tryParse(guid)`](tryparse-hyqk9.md)     | `public, static` | [`Guid`](../sp-client-base/guid.md) | Trys to construct a new Guid instance using guid string. The guid argument  is normalized and validated. If the argument is not a valid "version 4" UUID from  RFC 4122, tryParse will return undefined.   |




