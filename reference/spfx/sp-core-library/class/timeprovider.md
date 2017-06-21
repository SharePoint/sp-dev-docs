# TimeProvider class

_Implements: [`ITimeProvider`](../../sp-core-library/interface/itimeprovider.md)_





This is the default implementation of ITimeProvider that simply calls the real browser APIs.


## Constructor


**Signature:** _constructor(serviceScope: [ServiceScope](../../sp-core-library/class/servicescope.md));_

**Returns**: 



#### Parameters
None


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`serviceKey`     | `public` | [`ServiceKey`](../../sp-core-library/class/servicekey.md)<[`ITimeProvider`](../../sp-core-library/interface/itimeprovider.md)> | The service key for ITimeProvider.<br/> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._ |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`getDate()`](getdate-timeprovider.md)     | `public` | `Date` |  |
|[`getTimestamp()`](gettimestamp-timeprovider.md)     | `public` | `number` |  |





