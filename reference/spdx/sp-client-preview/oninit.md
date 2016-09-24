# onInit<T>()

This API should be overridden to perform long running operations e.g. data fetching from a remote service before 
the initial rendering of the web part. The loading indicator is displayed during the lifetime of this method. 
This API is called only once during the lifecycle of a web part.

**Signature:** _onInit<T>(): [Promise](../es6-promise/promise.md)<T>_

**Returns**: [`Promise`](../es6-promise/promise.md)<T>



#### Parameters
None

