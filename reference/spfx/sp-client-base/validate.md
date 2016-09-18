# Validate class





This class implements provides a standard way to validate properties and function parameters. 
Unlike an assertion, the Validate checks are always performed and will always throw an error, 
even in a production release. As such, be careful not to overuse these checks in a way 
that might impact performance.






## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`isNonemptyString(value,variableName)`](#isnonemptystringvaluevariablename)     | `public, static` | `void` | Throws an exception if the specified string is null,undefined,or an empty string. |
|[`isNotNullOrUndefined(value,variableName)`](#isnotnullorundefinedvaluevariablename)     | `public, static` | `void` | Throws an exception if the specified value is null or undefined. |
|[`isTrue(value,variableName)`](#istruevaluevariablename)     | `public, static` | `void` | Throws an exception if the specified value is not true. |





### isNonemptyString(value,variableName)

Throws an exception if the specified string is null,undefined,or an empty string.

**Signature:** _isNonemptyString(value: string,variableName: string): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `string` | - the value to check |
| `variableName`    | `string` | - the program variable name,which will be mentioned in the error message |


### isNotNullOrUndefined(value,variableName)

Throws an exception if the specified value is null or undefined.

**Signature:** _isNotNullOrUndefined(value: any,variableName: string): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `any` | - the value to check |
| `variableName`    | `string` | - the program variable name,which will be mentioned in the error message |


### isTrue(value,variableName)

Throws an exception if the specified value is not true.

**Signature:** _isTrue(value: boolean,variableName: string): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `boolean` | - the value to check |
| `variableName`    | `string` | - the program variable name,which will be mentioned in the error message |

