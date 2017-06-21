# getBaseManifest()

> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

The child class's overridden "manifest" property should call this method.

**Signature:** _protected getBaseManifest(): IClientSideComponentManifest;_

**Returns**: `IClientSideComponentManifest`





#### Parameters
None


### Remarks

This is a workaround for a TypeScript/ES5 limitation, which prevents a subclass using "super" to access properties from the base class (even though functions work okay). It will be fixed in TypeScript/ES6.

