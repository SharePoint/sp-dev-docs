# onProvideServices()

> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

Constructs the object that will be returned by the "services" property.

**Signature:** _@virtual protected onProvideServices(serviceScope: [ServiceScope](../../sp-core-library.api/class/servicescope.md)): void;_

**Returns**: `void`





#### Parameters
None


### Remarks

Child classes can expose additional services by extending the IExtensionServiceCollection interface, and then overriding consumeServices() function and the "services" property.

