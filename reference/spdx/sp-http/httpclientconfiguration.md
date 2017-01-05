# HttpClientConfiguration class

_Implements: [`IHttpClientConfiguration`](../sp-http/ihttpclientconfiguration.md)_



This is in beta mode

The HttpClientConfiguration object provides a set of switches for enabling/disabling various features of the HttpClient class. Normally these switches are set (e.g. when calling HttpClient.fetch()) by providing one of the predefined defaults from HttpClientConfigurations, however switches can also be changed via the HttpClientConfiguration.overrideWith() method.


## Constructor
Constructs a new instance of HttpClientConfiguration with the specified flags. The default values will be used for any flags that are missing or undefined. If overrideFlags is specified, it takes precedence over flags. *

**Signature:** _constructor(flags: [IHttpClientConfiguration](../sp-http/ihttpclientconfiguration.md), overrideFlags?: IHttpClientConfiguration);_

**Returns**: 



#### Parameters
None


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`consoleLogging`     | `public` | `boolean` | _Read-only._ {@inheritdoc IHttpClientConfiguration.consoleLogging} |
|`flags`     | `public` | [`IHttpClientConfiguration`](../sp-http/ihttpclientconfiguration.md) |  |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`initializeFlags()`](initializeflags-httpclientconfiguration.md)     | `protected` | `void` | Child classes should override this method to initialize the flags object. |
|[`overrideWith()`](overridewith-httpclientconfiguration.md)     | `public` | [`HttpClientConfiguration`](../sp-http/httpclientconfiguration.md) | Child classes should override this method to construct the child class type, rather than the base class type. |





