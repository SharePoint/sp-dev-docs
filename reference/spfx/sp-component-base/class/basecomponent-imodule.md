# BaseComponent class





> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

Base class for client-side components such as BaseClientSideWebPart, BaseExtension, etc.



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`context`     | `public` | [`BaseComponentContext`](../../sp-component-base.api/class/basecomponentcontext.md) | Use context object to access common services and state associated with the component. |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`onProvideServices()`](onprovideservices-basecomponent.md)     | `protected` | `void` | Constructs the object that will be returned by the "services" property. |





### Remarks

The constructor for this class is marked as internal; third party code should not inherit directly from this base class.

