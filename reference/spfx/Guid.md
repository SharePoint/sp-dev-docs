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
|[`equals`](#equals)     | `public` | `boolean` | represent the same value |
|[`isValid`](#isvalid)     | `public, _static_` | `boolean` | Indicates whether a guid is valid (according to RFC4122) |
|[`constructorGuid`](#constructorguid)     | `public, _static_` | [`Guid`](Guid.md) | Returns a new Guid instance with a pseudo-randomly generated Guid |
|[`toString`](#tostring)     | `public` | `string` | Example: 'd5369f3b-bd7a-412a-9c0f-7f0650bb5489' |
|[`tryParse`](#tryparse)     | `public, _static_` | [`Guid`](Guid.md) | Trys to construct a new Guid instance using guid string |




### equals

represent the same value

#### Signature
`public equals(guid: Guid): boolean`

#### Returns
`boolean`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    | [`Guid`](Guid.md) |  |


### isValid

Indicates whether a guid is valid (according to RFC4122). 


#### Signature
`public isValid(guid: string): boolean`

#### Returns
`boolean`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    | `string` |  |


### constructorGuid

Returns a new Guid instance with a pseudo-randomly generated Guid. 


#### Signature
`public newGuid(randomProvider?: IRandomProvider): Guid`

#### Returns
[`Guid`](Guid.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `randomProvider`    | `IRandomProvider` | _Optional._ |


### toString

Example: 'd5369f3b-bd7a-412a-9c0f-7f0650bb5489'

#### Signature
`public toString(): string`

#### Returns
`string`

#### Parameters
None


### tryParse

Trys to construct a new Guid instance using guid string. The guid argument 
is normalized and validated. If the argument is not a valid "version 4" UUID from 
RFC 4122, tryParse will return undefined. 


#### Signature
`public tryParse(guid: string): Guid`

#### Returns
[`Guid`](Guid.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    | `string` |  |

