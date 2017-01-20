# SPHttpClientCommonConfiguration class

_Implements: [`ISPHttpClientCommonConfiguration`](../sp-http/interface/isphttpclientcommonconfiguration.md)_





Common base class for SPHttpClientConfiguration and SPHttpClientBatchConfiguration.


## Constructor
Constructs a new instance of SPHttpClientCommonConfiguration with the specified flags. The default values will be used for any flags that are missing or undefined. If overrideFlags is specified, it takes precedence over flags.

**Signature:** _constructor(flags: [ISPHttpClientCommonConfiguration](../sp-http/interface/isphttpclientcommonconfiguration.md), overrideFlags?: ISPHttpClientCommonConfiguration);_

**Returns**: 



#### Parameters
None


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`flags`     | `public` | [`ISPHttpClientCommonConfiguration`](../sp-http/interface/isphttpclientcommonconfiguration.md) |  |
|`jsonRequest`     | `public` | `boolean` | _Read-only._ {@inheritdoc IHttpClientConfiguration.jsonRequest} |
|`jsonResponse`     | `public` | `boolean` | _Read-only._ {@inheritdoc IHttpClientConfiguration.jsonResponse} |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`initializeFlags()`](initializeflags-sphttpclientcommonconfiguration.md)     | `protected` | `void` |  |
|[`overrideWith()`](overridewith-sphttpclientcommonconfiguration.md)     | `public` | [`SPHttpClientCommonConfiguration`](../sp-http/class/sphttpclientcommonconfiguration.md) |  |





