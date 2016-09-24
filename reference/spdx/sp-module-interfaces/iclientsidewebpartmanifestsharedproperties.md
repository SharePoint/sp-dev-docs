# IClientSideWebPartManifestSharedProperties interface





This interface specifies the set of common properties that are shared between all instances of the Web Part. 





## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`imageLinkPropertyNames`      | `string[]` | Definition: List of names of Web Part properties that are image sources and need to be link fixed up  and potentially preloaded for performance reasons.  Required: no. If not provided, all values are sanitized  Type: string array  Supported values: any property names  Values: the strings in the array are expected to be JSONPath for the object properties.  (http://goessner.net/articles/JsonPath/)  Example: ["image[0].source"] |
|`linkPropertyNames`      | `string[]` | Definition: List of names of Web Part properties that are links and need to be link fixed up.  Link fixup is a SharePoint feature to help make sure SharePoint internal links in the content  are correct. Pages and content can be moved around within SharePoint site hierarchy.  Required: no. If not provided, all values are sanitized  Type: string array  Values: the strings in the array are expected to be JSONPath for the object properties.  (http://goessner.net/articles/JsonPath/)  Supported values: any property names  Example: ["destination.url"] |
|`searchablePropertyNames`      | `string[]` | Definition: List of names of Web Part properties that need to be indexed for search.  Usage: extract the specified value properties on the server and provide them to the search indexer.  Required: no. If not provided, no values are indexed.  Type: string array  Values: the strings in the array are expected to be JSONPath for the object properties.  (http://goessner.net/articles/JsonPath/)  Supported values: any property names  Example: ["text"] |





