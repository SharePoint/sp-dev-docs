# IBasicHttpClientOptions interface

_Extends: [`RequestInit`](requestinit.md)_



This interface defines the options for the BasicHttpClient operations such as 
get(), post(), fetch(), etc. It is based on the whatwg API standard 
parameters that are documented here: 
https://fetch.spec.whatwg.org/




### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`body`      | [`BodyInit`](whatwg-fetch-module.md#types) | This interface defines the options for the BasicHttpClient operations such as  get(), post(), fetch(), etc |
|`cache`      | `string`,[`RequestCache`](requestcache.md) | This interface defines the options for the BasicHttpClient operations such as  get(), post(), fetch(), etc |
|`credentials`      | `string`,[`RequestCredentials`](requestcredentials.md) | This interface defines the options for the BasicHttpClient operations such as  get(), post(), fetch(), etc |
|`headers`      | [`HeaderInit`](whatwg-fetch-module.md#types),`{ [index: string]: string }` | This interface defines the options for the BasicHttpClient operations such as  get(), post(), fetch(), etc |
|`method`      | `string` | This interface defines the options for the BasicHttpClient operations such as  get(), post(), fetch(), etc |
|`mode`      | `string`,[`RequestMode`](requestmode.md) | This interface defines the options for the BasicHttpClient operations such as  get(), post(), fetch(), etc |





