# IClientSideComponentContext interface





This is in beta mode

The base context interface for client-side components.




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`manifest`      | `IClientSideComponentManifest` | Manifest for the client side component. |
|`serviceScope`      | [`ServiceScope`](../sp-core-library/class/servicescope.md) | Service scope instance that is scoped to this particular web part. |






### Remarks

A "context" object is a collection of well-known services and other objects that are likely to be needed by any business logic working with a component. Each component type has its own specialized extension of this interface, e.g. IWebPartContext for web parts, ICodePartContext for code parts, etc.

