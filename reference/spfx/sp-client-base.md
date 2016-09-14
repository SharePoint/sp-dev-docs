


## Classes

| Class	   |  Description |
|:-------------|:---------------|
| [BasicHttpClient](./sp-client-base/basichttpclient.md)     | BasicHttpClient implements a basic set of features for performing REST operations |
| [Compare](./sp-client-base/compare.md)     |  |
| [CultureInfo](./sp-client-base/cultureinfo.md)     | This class is primarily used with the PageContext class |
| [Environment](./sp-client-base/environment.md)     | This class contains contextual information about the enviroment that is hosting the framework and  its components |
| [Guid](./sp-client-base/guid.md)     | This class represents a globally unique identifier,as described by  IETF RFC 4122 |
| [HttpClient](./sp-client-base/httpclient.md)     | HttpClient is used to perform REST calls against SharePoint |
| [Log](./sp-client-base/log.md)     | The Log class provides methods for logging messages at different levels (verbose,  info, warning, error) and with context information |
| [ODataBatch](./sp-client-base/odatabatch.md)     | The ODataBatch class accumulates a number of REST service calls and  transmits them as a single ODATA batch |
| [PageContext](./sp-client-base/pagecontext.md)     | The page context provides standard definitions for common SharePoint objects  that need to be shared between the client-side application, web parts, and other  components |
| [ServiceKey](./sp-client-base/servicekey.md)     | The ServiceKey is a lookup key that is used when calling ServiceScope |
| [ServiceScope](./sp-client-base/servicescope.md)     | ServiceScope provides a formalized way for components to register and consume dependencies  ("services"), and to enable different implementations to be registered in different scopes |
| [SPPermission](./sp-client-base/sppermission.md)     | This class can be used to determine if the current user has a requested set of permissions |
| [SPSite](./sp-client-base/spsite.md)     | This class is primarily used with the PageContext class |
| [SPUser](./sp-client-base/spuser.md)     | This class is primarily used with the PageContext class |
| [SPWeb](./sp-client-base/spweb.md)     | This class is primarily used with the PageContext class |
| [UrlQueryParameterCollection](./sp-client-base/urlqueryparametercollection.md)     | Class for storing and retrieving query parameters |
| [UrlUtilities](./sp-client-base/urlutilities.md)     | Common helper functions for working with URLs |
| [Validate](./sp-client-base/validate.md)     | This class implements provides a standard way to validate properties and function parameters |



## Interfaces

| Interface	   |  Description |
|:-------------|:---------------|
| [IBasicHttpClientOptions](./sp-client-base/ibasichttpclientoptions.md)   | This interface defines the options for the BasicHttpClient operations such as  get(), post(), fetch(), etc  |
| [IClientSideApplicationManifest](./sp-client-base/iclientsideapplicationmanifest.md)   | This is is the manifest for a client-side application  |
| [IClientSideComponentManifest](./sp-client-base/iclientsidecomponentmanifest.md)   | This is the base interface that is extended by the interfaces  that represent the manifest for each kind of client-side component  |
| [IDigestCache](./sp-client-base/idigestcache.md)   | IDigestCache is an internal service used by HttpClient to maintain a cache of request digests  for each SPWeb URL  |
| [IHttpClientOptions](./sp-client-base/ihttpclientoptions.md)   | This interface defines the options for the HttpClient operations such as  get(), post(), fetch(), etc  |
| [IODataBasePermission](./sp-client-base/iodatabasepermission.md)   | Data used for creating a SPPermission object  |
| [IODataBatchOptions](./sp-client-base/iodatabatchoptions.md)   | This interface is passed to the ODataBatch constructor  |
| [IODataChangeToken](./sp-client-base/iodatachangetoken.md)   | Represents an OData SP  |
| [IODataContextWebInformation](./sp-client-base/iodatacontextwebinformation.md)   | Represents an OData SP  |
| [IODataNavigationNode](./sp-client-base/iodatanavigationnode.md)   | Represents an OData SP  |
| [IODataNavigationNodeCollection](./sp-client-base/iodatanavigationnodecollection.md)   | Represents an OData Microsoft  |
| [IODataWeb](./sp-client-base/iodataweb.md)   | Represents an OData SP  |
| [IServiceScopeProvider](./sp-client-base/iservicescopeprovider.md)   | This is a convenient interface that can be used to indicate that an object  has an associated ServiceScope  |



## Enumerations

| Enumeration	   | Description|
|:-----------|:------------|
|[DisplayMode](./sp-client-base/displaymode.md)    |  |
|[EnvironmentType](./sp-client-base/environmenttype.md)    |  |




