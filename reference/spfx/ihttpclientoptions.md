# IHttpClientOptions interface

_Extends: [`IBasicHttpClientOptions`](ibasichttpclientoptions.md)_



This interface defines the options for the HttpClient operations such as 
get(), post(), fetch(), etc. It is based on the WHATWG API standard 
parameters that are documented here: 
https://fetch.spec.whatwg.org/




### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`body`      | `BodyInit` |  |
|`cache`      | `string`,[`RequestCache`](requestcache.md) |  |
|`credentials`      | `string`,[`RequestCredentials`](requestcredentials.md) |  |
|`headers`      | `string }` |  |
|`method`      | `string` |  |
|`mode`      | `string`,[`RequestMode`](requestmode.md) |  |
|`webUrl`      | `string` | For a write operation,HttpClient will automatically add the  "X-RequestDigest" header, which may need to be fetched using a seperate  request such as "https://example |




