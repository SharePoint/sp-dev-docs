# Validate class





This class implements provides a standard way to validate properties and function parameters. 
Unlike an assertion, the Validate checks are always performed and will always throw an error, 
even in a production release. As such, be careful not to overuse these checks in a way 
that might impact performance.






## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`isNonemptyString`](#isnonemptystring)     | `public, _static_` | `void` | This class implements provides a standard way to validate properties and function parameters |
|[`isNotNullOrUndefined`](#isnotnullorundefined)     | `public, _static_` | `void` | This class implements provides a standard way to validate properties and function parameters |
|[`isTrue`](#istrue)     | `public, _static_` | `void` | This class implements provides a standard way to validate properties and function parameters |





### isNonemptyString

This class implements provides a standard way to validate properties and function parameters. 
Unlike an assertion, the Validate checks are always performed and will always throw an error, 
even in a production release. As such, be careful not to overuse these checks in a way 
that might impact performance.

#### Signature
`isNonemptyString(value: string,variableName: string): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `string` | - the value to check  Throws an exception if the specified string is null, undefined, or an empty string |
| `variableName`    | `string` | - the program variable name,which will be mentioned in the error message  Throws an exception if the specified string is null, undefined, or an empty string |


### isNotNullOrUndefined

This class implements provides a standard way to validate properties and function parameters. 
Unlike an assertion, the Validate checks are always performed and will always throw an error, 
even in a production release. As such, be careful not to overuse these checks in a way 
that might impact performance.

#### Signature
`isNotNullOrUndefined(value: any,variableName: string): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `any` | - the value to check  Throws an exception if the specified value is null or undefined |
| `variableName`    | `string` | - the program variable name,which will be mentioned in the error message  Throws an exception if the specified value is null or undefined |


### isTrue

This class implements provides a standard way to validate properties and function parameters. 
Unlike an assertion, the Validate checks are always performed and will always throw an error, 
even in a production release. As such, be careful not to overuse these checks in a way 
that might impact performance.

#### Signature
`isTrue(value: boolean,variableName: string): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `boolean` | - the value to check  Throws an exception if the specified value is not true |
| `variableName`    | `string` | - the program variable name,which will be mentioned in the error message  Throws an exception if the specified value is not true |

