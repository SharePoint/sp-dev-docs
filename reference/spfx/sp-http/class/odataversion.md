# ODataVersion class







Represents supported version of the 'OData-Version' header, which is part of the Open Data Protocol standard.



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`v3`     | `public` | [`ODataVersion`](../sp-http/class/odataversion.md) | Represents version 3.0 for the 'OData-Version' header |
|`v4`     | `public` | [`ODataVersion`](../sp-http/class/odataversion.md) | Represents version 4.0 for the 'OData-Version' header |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`toString()`](tostring-odataversion.md)     | `public` | `string` | Returns the 'OData-Version' value, for example '4.0'. |
|[`tryParseFromHeaders()`](tryparsefromheaders-odataversion.md)     | `public, static` | [`ODataVersion`](../sp-http/class/odataversion.md) | If the 'OData-Version' header is present, this returns the corresponding ODataVersion constant. An error is thrown if the version number is not supported. If the header is missing, then undefined is returned. |





