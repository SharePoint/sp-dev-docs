# ISPHttpClientCommonConfiguration interface







Flags interface for SPHttpClientCommonConfiguration




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`jsonRequest`      | `boolean` | When this switch is true: If the 'Content-Type' header was not explicitly added for the request, then SPHttpClient will add it if the request is a write operation (i.e. an HTTP method other than 'GET', 'HEAD', or 'OPTIONS'). For OData 3.0, the value is 'application/json;odata=verbose;charset=utf-8'. For OData 4.0, the value is 'application/json;charset=utf-8'. |
|`jsonResponse`      | `boolean` | When this switch is true: If the 'Accept' header was not explicitly added for the request, then SPHttpClient will add it. For OData 3.0, the value is 'application/json'. For OData 4.0, the value is 'application/json;odata.metadata=minimal'. |






