


## Classes

| Class	   |  Description |
|:-------------|:---------------|
| [BasicHttpClient](basichttpclient.md)     | BasicHttpClient implements a basic set of features for performing REST operations |
| [Compare](compare.md)     |  |
| [CultureInfo](cultureinfo.md)     | This class is primarily used with the PageContext class |
| [Environment](environment.md)     | This class contains contextual information about the enviroment that is hosting the framework and  its components |
| [Guid](guid.md)     | This class represents a globally unique identifier,as described by  IETF RFC 4122 |
| [HttpClient](httpclient.md)     | HttpClient is used to perform REST calls against SharePoint |
| [Log](log.md)     | The Log class provides methods for logging messages at different levels (verbose,  info, warning, error) and with context information |
| [ODataBatch](odatabatch.md)     | The ODataBatch class accumulates a number of REST service calls and  transmits them as a single ODATA batch |
| [PageContext](pagecontext.md)     | The page context provides standard definitions for common SharePoint objects  that need to be shared between the client-side application, web parts, and other  components |
| [ServiceKey](servicekey.md)     | The ServiceKey is a lookup key that is used when calling ServiceScope |
| [ServiceScope](servicescope.md)     | ServiceScope provides a formalized way for components to register and consume dependencies  ("services"), and to enable different implementations to be registered in different scopes |
| [SPPermission](sppermission.md)     | This class can be used to determine if the current user has a requested set of permissions |
| [SPSite](spsite.md)     | This class is primarily used with the PageContext class |
| [SPUser](spuser.md)     | This class is primarily used with the PageContext class |
| [SPWeb](spweb.md)     | This class is primarily used with the PageContext class |
| [UrlQueryParameterCollection](urlqueryparametercollection.md)     | Class for storing and retrieving query parameters |
| [UrlUtilities](urlutilities.md)     | Common helper functions for working with URLs |
| [Validate](validate.md)     | This class implements provides a standard way to validate properties and function parameters |



## Interfaces

| Interface	   |  Description |
|:-------------|:---------------|
| [IBasicHttpClientOptions](ibasichttpclientoptions.md)   | This interface defines the options for the BasicHttpClient operations such as  get(), post(), fetch(), etc  |
| [IClientSideApplicationManifest](iclientsideapplicationmanifest.md)   | This is is the manifest for a client-side application  |
| [IClientSideComponentManifest](iclientsidecomponentmanifest.md)   | This is the base interface that is extended by the interfaces  that represent the manifest for each kind of client-side component  |
| [IDigestCache](idigestcache.md)   | IDigestCache is an internal service used by HttpClient to maintain a cache of request digests  for each SPWeb URL  |
| [IHttpClientOptions](ihttpclientoptions.md)   | This interface defines the options for the HttpClient operations such as  get(), post(), fetch(), etc  |
| [IODataBasePermission](iodatabasepermission.md)   | Data used for creating a SPPermission object  |
| [IODataBatchOptions](iodatabatchoptions.md)   | This interface is passed to the ODataBatch constructor  |
| [IODataChangeToken](iodatachangetoken.md)   | Represents an OData SP  |
| [IODataContextWebInformation](iodatacontextwebinformation.md)   | Represents an OData SP  |
| [IODataNavigationNode](iodatanavigationnode.md)   | Represents an OData SP  |
| [IODataNavigationNodeCollection](iodatanavigationnodecollection.md)   | Represents an OData Microsoft  |
| [IODataWeb](iodataweb.md)   | Represents an OData SP  |
| [IServiceScopeProvider](iservicescopeprovider.md)   | This is a convenient interface that can be used to indicate that an object  has an associated ServiceScope  |



### Enumerations

| Enumeration	   | Description|
|:-----------|:------------|
|[DisplayMode](displaymode.md)    |  |
|[EnvironmentType](environmenttype.md)    |  |




