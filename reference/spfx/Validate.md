# Validate class





This class implements provides a standard way to validate properties and function parameters. 
Unlike an assertion, the Validate checks are always performed and will always throw an error, 
even in a production release. As such, be careful not to overuse these checks in a way 
that might impact performance.






## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`isNonemptyString`](#isnonemptystring)     | `public, _static_` | `void` | Throws an exception if the specified string is null,undefined,or an empty string |
|[`isNotNullOrUndefined`](#isnotnullorundefined)     | `public, _static_` | `void` | Throws an exception if the specified value is null or undefined |
|[`isTrue`](#istrue)     | `public, _static_` | `void` | Throws an exception if the specified value is not true |




### isNonemptyString

Throws an exception if the specified string is null,undefined,or an empty string.

#### Signature
`public isNonemptyString(value: string,variableName: string): void`

#### Returns
`void`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `string` |  |
| `variableName`    | `string` |  |


### isNotNullOrUndefined

Throws an exception if the specified value is null or undefined.

#### Signature
`public isNotNullOrUndefined(value: any,variableName: string): void`

#### Returns
`void`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `any` |  |
| `variableName`    | `string` |  |


### isTrue

Throws an exception if the specified value is not true.

#### Signature
`public isTrue(value: boolean,variableName: string): void`

#### Returns
`void`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `boolean` |  |
| `variableName`    | `string` |  |

