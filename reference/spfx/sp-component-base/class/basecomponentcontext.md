# BaseComponentContext class





> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

The base class for context objects for client-side components.



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`manifest`     | `public` | `IClientSideComponentManifest` | _Read-only._ Manifest for the client side component. |
|`serviceScope`     | `public` | [`ServiceScope`](../../sp-core-library/class/servicescope.md) | _Read-only._ Service scope instance that is scoped to this particular web part. |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`getBaseManifest()`](getbasemanifest-basecomponentcontext.md)     | `protected` | `IClientSideComponentManifest` | The child class's overridden "manifest" property should call this method. |





### Remarks

A "context" object is a collection of well-known services and other objects that are likely to be needed by any business logic working with the associated component. Each component type has its own specialized subclass ofClientSideComponentContext, e.g. WebPartContext for web parts, ExtensionContext for client-side extensions, etc. The constructor for this class is marked as internal; third party code should not inherit directly from this base class.

