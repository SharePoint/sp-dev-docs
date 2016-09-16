# IBasicHttpClientOptions interface

_Extends: [`RequestInit`](../whatwg-fetch/requestinit.md)_



This interface defines the options for the BasicHttpClient operations such as 
get(), post(), fetch(), etc. It is based on the whatwg API standard 
parameters that are documented here: 
https://fetch.spec.whatwg.org/




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`body`      | [`BodyInit`](..//whatwg-fetch.md#types) |  |
|`cache`      | `string`,[`RequestCache`](../whatwg-fetch/requestcache.md) |  |
|`credentials`      | `string`,[`RequestCredentials`](../whatwg-fetch/requestcredentials.md) |  |
|`headers`      | [`HeaderInit`](..//whatwg-fetch.md#types),`{ [index: string]: string }` |  |
|`method`      | `string` |  |
|`mode`      | `string`,[`RequestMode`](../whatwg-fetch/requestmode.md) |  |





