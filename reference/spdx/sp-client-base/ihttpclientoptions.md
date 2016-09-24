# IHttpClientOptions interface

_Extends: [`IBasicHttpClientOptions`](../sp-client-base/ibasichttpclientoptions.md)_



This interface defines the options for the HttpClient operations such as 
get(), post(), fetch(), etc. It is based on the WHATWG API standard 
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
|`webUrl`      | `string` | For a write operation,HttpClient will automatically add the  "X-RequestDigest" header, which may need to be fetched using a seperate  request such as "https://example.com/sites/sample/_api/contextinfo".  Typically the SPWeb URL ("https://example.com/sites/sample" in this  example) can be guessed by looking for a reserved URL segment such  as "_api" in the original REST query, however certain REST endpoints  do not contain a reserved URL segment; in this case, the webUrl can  be explicitly specified using this option. |





