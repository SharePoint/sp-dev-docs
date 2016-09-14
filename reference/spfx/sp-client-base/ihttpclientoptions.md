# IHttpClientOptions interface

_Extends: [`IBasicHttpClientOptions`](../sp-client-base/ibasichttpclientoptions.md)_



This interface defines the options for the HttpClient operations such as 
get(), post(), fetch(), etc. It is based on the WHATWG API standard 
parameters that are documented here: 
https://fetch.spec.whatwg.org/


## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`body`      | [`BodyInit`](../whatwg-fetch/whatwg-fetch-module.md#types) | This interface defines the options for the HttpClient operations such as  get(), post(), fetch(), etc |
|`cache`      | `string`,[`RequestCache`](../whatwg-fetch/requestcache.md) | This interface defines the options for the HttpClient operations such as  get(), post(), fetch(), etc |
|`credentials`      | `string`,[`RequestCredentials`](../whatwg-fetch/requestcredentials.md) | This interface defines the options for the HttpClient operations such as  get(), post(), fetch(), etc |
|`headers`      | [`HeaderInit`](../whatwg-fetch/whatwg-fetch-module.md#types),`{ [index: string]: string }` | This interface defines the options for the HttpClient operations such as  get(), post(), fetch(), etc |
|`method`      | `string` | This interface defines the options for the HttpClient operations such as  get(), post(), fetch(), etc |
|`mode`      | `string`,[`RequestMode`](../whatwg-fetch/requestmode.md) | This interface defines the options for the HttpClient operations such as  get(), post(), fetch(), etc |
|`webUrl`      | `string` | This interface defines the options for the HttpClient operations such as  get(), post(), fetch(), etc |





