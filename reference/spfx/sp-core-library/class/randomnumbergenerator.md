# RandomNumberGenerator class

_Implements: [`IRandomNumberGenerator`](../../sp-core-library/interface/irandomnumbergenerator.md)_





This is the default implementation of IRandomNumberGenerator that simply calls Math.random().


## Constructor


**Signature:** _constructor(serviceScope: [ServiceScope](../../sp-core-library/class/servicescope.md));_

**Returns**: 



#### Parameters
None


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`serviceKey`     | `public` | [`ServiceKey`](../../sp-core-library/class/servicekey.md)<[`IRandomNumberGenerator`](../../sp-core-library/interface/irandomnumbergenerator.md)> | The service key for IRandomNumberGenerator. |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`generate()`](generate-randomnumbergenerator.md)     | `public` | `number` |  |





