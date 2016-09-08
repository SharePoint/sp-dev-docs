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
|[`equals`](#equals)     | `public` | `boolean` | Compare this instance to another Guid instance   |
|[`isValid`](#isvalid)     | `public, _static_` | `boolean` | Indicates whether a guid is valid (according to RFC4122) |
|[`constructorGuid`](#constructorguid)     | `public, _static_` | [`Guid`](guid.md) | Returns a new Guid instance with a pseudo-randomly generated Guid |
|[`toString`](#tostring)     | `public` | `string` | Object |
|[`tryParse`](#tryparse)     | `public, _static_` | [`Guid`](guid.md) | Trys to construct a new Guid instance using guid string |




### equals

Compare this instance to another Guid instance 


#### Signature
`public equals(guid: Guid): boolean`

#### Returns
`boolean`
A value indicating whether this instance and the specified Guid object 
represent the same value

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    | [`Guid`](guid.md) |  |


### isValid

Indicates whether a guid is valid (according to RFC4122). 


#### Signature
`public isValid(guid: string): boolean`

#### Returns
`boolean`
Value indicating whether the guid is valid.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    | `string` | - Test guid |


### constructorGuid

Returns a new Guid instance with a pseudo-randomly generated Guid. 


#### Signature
`public newGuid(randomProvider?: IRandomProvider): Guid`

#### Returns
[`Guid`](guid.md)
A new valid unique Guid object

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `randomProvider`    | `IRandomProvider` | _Optional._ |


### toString

Object.prototype.toString override 


#### Signature
`public toString(): string`

#### Returns
`string`
The GUID value in lowercase hexadecimal without braces. 
Example: 'd5369f3b-bd7a-412a-9c0f-7f0650bb5489'

#### Parameters
None


### tryParse

Trys to construct a new Guid instance using guid string. The guid argument 
is normalized and validated. If the argument is not a valid "version 4" UUID from 
RFC 4122, tryParse will return undefined. 


#### Signature
`public tryParse(guid: string): Guid`

#### Returns
[`Guid`](guid.md)
If the guid argument was valid,a new Guid instance. Otherwise,undefined.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    | `string` | - A guid string |

