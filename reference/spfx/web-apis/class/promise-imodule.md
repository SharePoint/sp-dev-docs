# Promise <T> class

_Implements: [`Thenable`](../../web-apis.api/interface/thenable.md)_

_Type parameters: `<T>`_






## Constructor


**Signature:** _constructor(callback: (resolve: (value?: T | [Thenable](../../web-apis.api/interface/thenable.md)<T>) => void, reject: (error?: any) => void) => void);_

**Returns**: 



#### Parameters
None





## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`all()`](all-promise.md)     | `public, static` | [`Promise`](../../web-apis.api/class/promise.md)<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]> |  |
|[`catch()`](catch-promise.md)     | `` | [`Promise`](../../web-apis.api/class/promise.md)<U> |  |
|[`race()`](race-promise.md)     | `public, static` | [`Promise`](../../web-apis.api/class/promise.md)<T> |  |
|[`reject()`](reject-promise.md)     | `public, static` | [`Promise`](../../web-apis.api/class/promise.md)<any> |  |
|[`resolve()`](resolve-promise.md)     | `public, static` | [`Promise`](../../web-apis.api/class/promise.md)<T> |  |
|[`then()`](then-promise.md)     | `` | [`Promise`](../../web-apis.api/class/promise.md)<U> |  |





