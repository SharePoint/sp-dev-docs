# SPHttpClientConfiguration class

_Implements: [`ISPHttpClientConfiguration`](../sp-http/isphttpclientconfiguration.md)_





The SPHttpClientConfiguration object provides a set of switches for enabling/disabling various features of the SPHttpClient class. Normally these switches are set (e.g. when calling SPHttpClient.fetch()) by providing one of the predefined defaults from SPHttpClientConfigurations, however switches can also be changed via the SPHttpClientConfiguration.overrideWith() method.


## Constructor
Constructs a new instance of SPHttpClientConfiguration with the specified flags. The default values will be used for any flags that are missing or undefined. If overrideFlags is specified, it takes precedence over flags.

**Signature:** _constructor(flags: [ISPHttpClientConfiguration](../sp-http/isphttpclientconfiguration.md), overrideFlags?: ISPHttpClientConfiguration);_

**Returns**: 



#### Parameters
None


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`defaultODataVersion`     | `public` | [`ODataVersion`](../sp-http/odataversion.md) | _Read-only._ {@inheritdoc IHttpClientConfiguration.defaultODataVersion} |
|`defaultSameOriginCredentials`     | `public` | `boolean` | _Read-only._ {@inheritdoc IHttpClientConfiguration.defaultSameOriginCredentials} |
|`flags`     | `public` | [`ISPHttpClientConfiguration`](../sp-http/isphttpclientconfiguration.md) |  |
|`requestDigest`     | `public` | `boolean` | _Read-only._ {@inheritdoc IHttpClientConfiguration.requestDigest} |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`initializeFlags()`](initializeflags-sphttpclientconfiguration.md)     | `protected` | `void` |  |
|[`overrideWith()`](overridewith-sphttpclientconfiguration.md)     | `public` | [`SPHttpClientConfiguration`](../sp-http/sphttpclientconfiguration.md) |  |





