# sp-http module



## Classes

| Class	   |  Description |
|:-------------|:---------------|
| [`HttpClient`](./sp-http/httpclient.md)     | HttpClient implements a basic set of features for performing REST operations. The subclass SPHttpClient extends this basic functionality with SharePoint-specific enhancements. |
| [`HttpClientConfiguration`](./sp-http/httpclientconfiguration.md)     | The HttpClientConfiguration object provides a set of switches for enabling/disabling various features of the HttpClient class. Normally these switches are set (e.g. when calling HttpClient.fetch()) by providing one of the predefined defaults from HttpClientConfigurations, however switches can also be changed via the HttpClientConfiguration.overrideWith() method. |
| [`HttpClientConfigurations`](./sp-http/httpclientconfigurations.md)     | This class provides standard predefined HttpClientConfiguration objects for use with the HttpClient class. In general, clients should choose the latest available version number, which enables all the switches that are recommended for typical scenarios. (If new switches are introduced in the future, a new version number will be introduced, which ensures that existing code will continue to function the way it did at the time when it was tested.) |
| [`HttpClientResponse`](./sp-http/httpclientresponse.md)     | The Response subclass returned by methods such as HttpClient.fetch(). |
| [`ODataVersion`](./sp-http/odataversion.md)     | Represents supported version of the 'OData-Version' header, which is part of the Open Data Protocol standard. |
| [`SPHttpClient`](./sp-http/sphttpclient.md)     | SPHttpClient is used to perform REST calls against SharePoint. It adds default headers, manages the digest needed for writes, and collects telemetry that helps the service to monitor the performance of an application. For communicating with non-SharePoint services, use the HttpClient class instead. |
| [`SPHttpClientCommonConfiguration`](./sp-http/sphttpclientcommonconfiguration.md)     | Common base class for SPHttpClientConfiguration and SPHttpClientBatchConfiguration. |
| [`SPHttpClientConfiguration`](./sp-http/sphttpclientconfiguration.md)     | The SPHttpClientConfiguration object provides a set of switches for enabling/disabling various features of the SPHttpClient class. Normally these switches are set (e.g. when calling SPHttpClient.fetch()) by providing one of the predefined defaults from SPHttpClientConfigurations, however switches can also be changed via the SPHttpClientConfiguration.overrideWith() method. |
| [`SPHttpClientConfigurations`](./sp-http/sphttpclientconfigurations.md)     | This class provides standard predefined SPHttpClientConfiguration objects for use with the SPHttpClient class. In general, clients should choose the latest available version number, which enables all the switches that are recommended for typical scenarios. (If new switches are introduced in the future, a new version number will be introduced, which ensures that existing code will continue to function the way it did at the time when it was tested.) |
| [`SPHttpClientResponse`](./sp-http/sphttpclientresponse.md)     | The Response subclass returned by methods such as SPHttpClient.fetch(). |



## Interfaces

| Interface	   |  Description |
|:-------------|:---------------|
| [`IHttpClientConfiguration`](./sp-http/ihttpclientconfiguration.md)   | Flags interface for HttpClientConfiguration.  |
| [`IHttpClientOptions`](./sp-http/ihttpclientoptions.md)   | This interface defines the options for the HttpClient operations such as get(), post(), fetch(), etc. It is based on the whatwg API standard parameters that are documented here: https://fetch.spec.whatwg.org/  |
| [`ISPHttpClientCommonConfiguration`](./sp-http/isphttpclientcommonconfiguration.md)   | Flags interface for SPHttpClientCommonConfiguration  |
| [`ISPHttpClientConfiguration`](./sp-http/isphttpclientconfiguration.md)   | Flags interface for SPHttpClientConfiguration.  |
| [`ISPHttpClientOptions`](./sp-http/isphttpclientoptions.md)   | This interface defines the options for the SPHttpClient operations such as get(), post(), fetch(), etc. It is based on the WHATWG API standard parameters that are documented here: https://fetch.spec.whatwg.org/  |






