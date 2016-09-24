# Validate class





This class implements provides a standard way to validate properties and function parameters. 
Unlike an assertion, the Validate checks are always performed and will always throw an error, 
even in a production release. As such, be careful not to overuse these checks in a way 
that might impact performance.






## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`isNonemptyString(value,variableName)`](isnonemptystring-tk9c9.md)     | `public, static` | `void` | Throws an exception if the specified string is null,undefined,or an empty string. |
|[`isNotNullOrUndefined(value,variableName)`](isnotnullorundefined-kyjc9.md)     | `public, static` | `void` | Throws an exception if the specified value is null or undefined. |
|[`isTrue(value,variableName)`](istrue-rw4y9.md)     | `public, static` | `void` | Throws an exception if the specified value is not true. |




