# SPHttpClientConfiguration class

_Implements: [`ISPHttpClientConfiguration`](../../sp-http.api/interface/isphttpclientconfiguration.md)_





The SPHttpClientConfiguration object provides a set of switches for enabling/disabling various features of the SPHttpClient class. Normally these switches are set (e.g. when calling SPHttpClient.fetch()) by providing one of the predefined defaults from SPHttpClientConfigurations, however switches can also be changed via the SPHttpClientConfiguration.overrideWith() method.


## Constructor
Constructs a new instance of SPHttpClientConfiguration with the specified flags. The default values will be used for any flags that are missing or undefined. If overrideFlags is specified, it takes precedence over flags.

**Signature:** _constructor(flags: [ISPHttpClientConfiguration](../../sp-http.api/interface/isphttpclientconfiguration.md), overrideFlags?: ISPHttpClientConfiguration);_

**Returns**: 



#### Parameters
None


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`defaultODataVersion`     | `public` | [`ODataVersion`](../../sp-http.api/class/odataversion.md) | _Read-only._ When this switch is specified (i.e. not undefined): If the 'OData-Version' header was not explictly added for the request, then SPHttpClient will add the header to specify the version indicated by defaultODataVersion. NOTE: Without an 'OData-Version' header, the SharePoint server currently defaults to Version 3.0 in most cases. The recommended version is 4.0. |
|`defaultSameOriginCredentials`     | `public` | `boolean` | _Read-only._ When this switch is true: If RequestInit.credentials is not explicitly specified for the request, then SPHttpClient will assign it to be 'same-origin'. Without this switch, different web browsers may apply different defaults. For more information, see the spec: https://fetch.spec.whatwg.org/#cors-protocol-and-credentials |
|`flags`     | `public` | [`ISPHttpClientConfiguration`](../../sp-http.api/interface/isphttpclientconfiguration.md) |  |
|`requestDigest`     | `public` | `boolean` | _Read-only._ When this switch is true: If the 'X-RequestDigest' header was not explicitly added for the request, then SPHttpClient will add it if the request is a write operation (i.e. an HTTP method other than 'GET', 'HEAD', or 'OPTIONS'). The request digest is managed by the DigestCache service. In the case of a cache miss, an additional network request may be performed. |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`initializeFlags()`](initializeflags-sphttpclientconfiguration.md)     | `protected` | `void` |  |
|[`overrideWith()`](overridewith-sphttpclientconfiguration.md)     | `public` | [`SPHttpClientConfiguration`](../../sp-http.api/class/sphttpclientconfiguration.md) |  |





