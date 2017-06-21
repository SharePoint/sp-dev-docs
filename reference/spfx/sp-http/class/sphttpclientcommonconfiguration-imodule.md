# SPHttpClientCommonConfiguration class

_Implements: [`ISPHttpClientCommonConfiguration`](../../sp-http.api/interface/isphttpclientcommonconfiguration.md)_





Common base class for SPHttpClientConfiguration and SPHttpClientBatchConfiguration.


## Constructor
Constructs a new instance of SPHttpClientCommonConfiguration with the specified flags. The default values will be used for any flags that are missing or undefined. If overrideFlags is specified, it takes precedence over flags.

**Signature:** _constructor(flags: [ISPHttpClientCommonConfiguration](../../sp-http.api/interface/isphttpclientcommonconfiguration.md), overrideFlags?: ISPHttpClientCommonConfiguration);_

**Returns**: 



#### Parameters
None


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`flags`     | `public` | [`ISPHttpClientCommonConfiguration`](../../sp-http.api/interface/isphttpclientcommonconfiguration.md) |  |
|`jsonRequest`     | `public` | `boolean` | _Read-only._ When this switch is true: If the 'Content-Type' header was not explicitly added for the request, then SPHttpClient will add it if the request is a write operation (i.e. an HTTP method other than 'GET', 'HEAD', or 'OPTIONS'). For OData 3.0, the value is 'application/json;odata=verbose;charset=utf-8'. For OData 4.0, the value is 'application/json;charset=utf-8'. |
|`jsonResponse`     | `public` | `boolean` | _Read-only._ When this switch is true: If the 'Accept' header was not explicitly added for the request, then SPHttpClient will add it. For OData 3.0, the value is 'application/json'. For OData 4.0, the value is 'application/json;odata.metadata=minimal'. |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`initializeFlags()`](initializeflags-sphttpclientcommonconfiguration.md)     | `protected` | `void` |  |
|[`overrideWith()`](overridewith-sphttpclientcommonconfiguration.md)     | `public` | [`SPHttpClientCommonConfiguration`](../../sp-http.api/class/sphttpclientcommonconfiguration.md) |  |





