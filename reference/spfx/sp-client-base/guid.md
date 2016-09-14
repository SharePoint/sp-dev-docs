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
|[`equals`](#equals)     | `public` | `boolean` | This class represents a globally unique identifier,as described by  IETF RFC 4122 |
|[`isValid`](#isvalid)     | `public, _static_` | `boolean` | This class represents a globally unique identifier,as described by  IETF RFC 4122 |
|[`constructorGuid`](#constructorguid)     | `public, _static_` | [`Guid`](../sp-client-base/guid.md) | This class represents a globally unique identifier,as described by  IETF RFC 4122 |
|[`toString`](#tostring)     | `public` | `string` | This class represents a globally unique identifier,as described by  IETF RFC 4122 |
|[`tryParse`](#tryparse)     | `public, _static_` | [`Guid`](../sp-client-base/guid.md) | This class represents a globally unique identifier,as described by  IETF RFC 4122 |





### equals

This class represents a globally unique identifier,as described by 
IETF RFC 4122. The input string is normalized and validated by the class 
constructor, which provides important guarantees that simplify other code 
that works with the GUID. This class also provides basic functionality 
for generating a pseudo-random GUID ("version 4" UUID from the RFC); 
however, be aware that the uniqueness depends on the browser's 
Math.random() function and may be not be suitable for some applications. 


#### Signature
`equals(guid: Guid): boolean`

#### Returns
`boolean`
A value indicating whether this instance and the specified Guid object 
represent the same value

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    | [`Guid`](../sp-client-base/guid.md) |  |


### isValid

This class represents a globally unique identifier,as described by 
IETF RFC 4122. The input string is normalized and validated by the class 
constructor, which provides important guarantees that simplify other code 
that works with the GUID. This class also provides basic functionality 
for generating a pseudo-random GUID ("version 4" UUID from the RFC); 
however, be aware that the uniqueness depends on the browser's 
Math.random() function and may be not be suitable for some applications. 


#### Signature
`isValid(guid: string): boolean`

#### Returns
`boolean`
Value indicating whether the guid is valid.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    | `string` | - Test guid |


### constructorGuid

This class represents a globally unique identifier,as described by 
IETF RFC 4122. The input string is normalized and validated by the class 
constructor, which provides important guarantees that simplify other code 
that works with the GUID. This class also provides basic functionality 
for generating a pseudo-random GUID ("version 4" UUID from the RFC); 
however, be aware that the uniqueness depends on the browser's 
Math.random() function and may be not be suitable for some applications. 


#### Signature
`newGuid(randomProvider?: IRandomProvider): Guid`

#### Returns
[`Guid`](../sp-client-base/guid.md)
A new valid unique Guid object

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `randomProvider`    | `IRandomProvider` | _Optional._ |


### toString

This class represents a globally unique identifier,as described by 
IETF RFC 4122. The input string is normalized and validated by the class 
constructor, which provides important guarantees that simplify other code 
that works with the GUID. This class also provides basic functionality 
for generating a pseudo-random GUID ("version 4" UUID from the RFC); 
however, be aware that the uniqueness depends on the browser's 
Math.random() function and may be not be suitable for some applications. 


#### Signature
`toString(): string`

#### Returns
`string`
The GUID value in lowercase hexadecimal without braces. 
Example: 'd5369f3b-bd7a-412a-9c0f-7f0650bb5489'

#### Parameters
None


### tryParse

This class represents a globally unique identifier,as described by 
IETF RFC 4122. The input string is normalized and validated by the class 
constructor, which provides important guarantees that simplify other code 
that works with the GUID. This class also provides basic functionality 
for generating a pseudo-random GUID ("version 4" UUID from the RFC); 
however, be aware that the uniqueness depends on the browser's 
Math.random() function and may be not be suitable for some applications. 


#### Signature
`tryParse(guid: string): Guid`

#### Returns
[`Guid`](../sp-client-base/guid.md)
If the guid argument was valid,a new Guid instance. Otherwise,undefined.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    | `string` | - A guid string |

