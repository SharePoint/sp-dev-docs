# ISPHttpClientOptions interface







This interface defines the options for the SPHttpClient operations such as get(), post(), fetch(), etc. It is based on the WHATWG API standard parameters that are documented here: https://fetch.spec.whatwg.org/




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`webUrl`      | `string` | For a write operation, SPHttpClient will automatically add the "X-RequestDigest" header, which may need to be fetched using a seperate request such as "https://example.com/sites/sample/_api/contextinfo". Typically the SPWeb URL ("https://example.com/sites/sample" in this example) can be guessed by looking for a reserved URL segment such as "_api" in the original REST query, however certain REST endpoints do not contain a reserved URL segment; in this case, the webUrl can be explicitly specified using this option. |






