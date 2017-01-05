# ISPHttpClientConfiguration interface







Flags interface for SPHttpClientConfiguration.




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`defaultODataVersion`      | [`ODataVersion`](../sp-http/odataversion.md) | When this switch is specified (i.e. not undefined): If the 'OData-Version' header was not explictly added for the request, then SPHttpClient will add the header to specify the version indicated by defaultODataVersion. NOTE: Without an 'OData-Version' header, the SharePoint server currently defaults to Version 3.0 in most cases. The recommended version is 4.0. |
|`defaultSameOriginCredentials`      | `boolean` | When this switch is true: If RequestInit.credentials is not explicitly specified for the request, then SPHttpClient will assign it to be 'same-origin'. Without this switch, different web browsers may apply different defaults. For more information, see the spec: https://fetch.spec.whatwg.org/#cors-protocol-and-credentials |
|`requestDigest`      | `boolean` | When this switch is true: If the 'X-RequestDigest' header was not explicitly added for the request, then SPHttpClient will add it if the request is a write operation (i.e. an HTTP method other than 'GET', 'HEAD', or 'OPTIONS'). The request digest is managed by the DigestCache service. In the case of a cache miss, an additional network request may be performed. |






