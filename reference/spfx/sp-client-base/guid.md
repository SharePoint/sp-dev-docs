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
|[`equals(guid)`](#equalsguid)     | `public` | `boolean` | Compare this instance to another Guid instance   |
|[`isValid(guid)`](#isvalidguid)     | `public, static` | `boolean` | Indicates whether a guid is valid (according to RFC4122).   |
|[`constructorGuid(randomProvider)`](#constructorguidrandomprovider)     | `public, static` | [`Guid`](../sp-client-base/guid.md) | Returns a new Guid instance with a pseudo-randomly generated Guid.   |
|[`toString()`](#tostring)     | `public` | `string` | Object.prototype.toString override   |
|[`tryParse(guid)`](#tryparseguid)     | `public, static` | [`Guid`](../sp-client-base/guid.md) | Trys to construct a new Guid instance using guid string. The guid argument  is normalized and validated. If the argument is not a valid "version 4" UUID from  RFC 4122, tryParse will return undefined.   |





### equals(guid)

Compare this instance to another Guid instance 


**Signature:** _equals(guid: [Guid](../sp-client-base/guid.md)): boolean_

**Returns**: `boolean`

A value indicating whether this instance and the specified Guid object 
represent the same value

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    | [`Guid`](../sp-client-base/guid.md) |  |


### isValid(guid)

Indicates whether a guid is valid (according to RFC4122). 


**Signature:** _isValid(guid: string): boolean_

**Returns**: `boolean`

Value indicating whether the guid is valid.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    | `string` | - Test guid. |


### constructorGuid(randomProvider)

Returns a new Guid instance with a pseudo-randomly generated Guid. 


**Signature:** _new[Guid](../sp-client-base/guid.md)(randomProvider?: IRandomProvider): Guid_

**Returns**: [`Guid`](../sp-client-base/guid.md)

A new valid unique Guid object

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `randomProvider`    | `IRandomProvider` | _Optional._ |


### toString()

Object.prototype.toString override 


**Signature:** _toString(): string_

**Returns**: `string`

The GUID value in lowercase hexadecimal without braces. 
Example: 'd5369f3b-bd7a-412a-9c0f-7f0650bb5489'

#### Parameters
None


### tryParse(guid)

Trys to construct a new Guid instance using guid string. The guid argument 
is normalized and validated. If the argument is not a valid "version 4" UUID from 
RFC 4122, tryParse will return undefined. 


**Signature:** _tryParse(guid: string): [Guid](../sp-client-base/guid.md)_

**Returns**: [`Guid`](../sp-client-base/guid.md)

If the guid argument was valid,a new Guid instance. Otherwise,undefined.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    | `string` | - A guid string |

