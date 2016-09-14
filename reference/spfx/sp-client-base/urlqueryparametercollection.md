# UrlQueryParameterCollection class





Class for storing and retrieving query parameters. 
The URL can be server-relative and it will parse empty/null strings. 
The query parameters must start with? to indicate the first query parameter and 
use & for all subsequent parameters. The class also supports fragments. 
Edge cases behavior: 
Empty value (www.example.com/?test=) stores key and empty value 
No equals in queryParam (www.example.com/?test) stores key and undefined value 
Empty queryParam (www.example.com/?&debug=on) stores undefined key and value 
Query param with only equals (www.example.com/?=&debug=on stores empty string key and value




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`UrlQueryParameterCollection`](../sp-client-base/urlqueryparametercollection.md) | Class for storing and retrieving query parameters |
|[`getValue`](#getvalue)     | `public` | `string` | Class for storing and retrieving query parameters |
|[`getValues`](#getvalues)     | `public` | `string[]` | Class for storing and retrieving query parameters |





### constructor

Class for storing and retrieving query parameters. 
The URL can be server-relative and it will parse empty/null strings. 
The query parameters must start with? to indicate the first query parameter and 
use & for all subsequent parameters. The class also supports fragments. 
Edge cases behavior: 
Empty value (www.example.com/?test=) stores key and empty value 
No equals in queryParam (www.example.com/?test) stores key and undefined value 
Empty queryParam (www.example.com/?&debug=on) stores undefined key and value 
Query param with only equals (www.example.com/?=&debug=on stores empty string key and value

#### Signature
`constructor(url: string)`

#### Returns
[`UrlQueryParameterCollection`](../sp-client-base/urlqueryparametercollection.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` |  |


### getValue

Class for storing and retrieving query parameters. 
The URL can be server-relative and it will parse empty/null strings. 
The query parameters must start with? to indicate the first query parameter and 
use & for all subsequent parameters. The class also supports fragments. 
Edge cases behavior: 
Empty value (www.example.com/?test=) stores key and empty value 
No equals in queryParam (www.example.com/?test) stores key and undefined value 
Empty queryParam (www.example.com/?&debug=on) stores undefined key and value 
Query param with only equals (www.example.com/?=&debug=on stores empty string key and value

#### Signature
`getValue(param: string): string`

#### Returns
`string`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `param`    | `string` | the case insensitive key for the desired query parameter value |


### getValues

Class for storing and retrieving query parameters. 
The URL can be server-relative and it will parse empty/null strings. 
The query parameters must start with? to indicate the first query parameter and 
use & for all subsequent parameters. The class also supports fragments. 
Edge cases behavior: 
Empty value (www.example.com/?test=) stores key and empty value 
No equals in queryParam (www.example.com/?test) stores key and undefined value 
Empty queryParam (www.example.com/?&debug=on) stores undefined key and value 
Query param with only equals (www.example.com/?=&debug=on stores empty string key and value

#### Signature
`getValues(param: string): string[]`

#### Returns
`string[]`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `param`    | `string` | the case insensitive key for the desired query parameter value |

