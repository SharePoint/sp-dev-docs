# sp-client-base external module


## Classes

| Class	   |  Description |
|:-------------|:---------------|
| [BasicHttpClient](BasicHttpClient.md)     | BasicHttpClient implements a basic set of features for performing REST operations |
| [Compare](Compare.md)     |   This class contains various comparison utilities |
| [CultureInfo](CultureInfo.md)     | This class is primarily used with the PageContext class |
| [Environment](Environment.md)     | This class contains contextual information about the enviroment that is hosting the framework and  its components |
| [Guid](Guid.md)     | This class represents a globally unique identifier,as described by  IETF RFC 4122 |
| [HttpClient](HttpClient.md)     | HttpClient is used to perform REST calls against SharePoint |
| [Log](Log.md)     | The Log class provides methods for logging messages at different levels (verbose,  info, warning, error) and with context information |
| [ODataBatch](ODataBatch.md)     | The ODataBatch class accumulates a number of REST service calls and  transmits them as a single ODATA batch |
| [PageContext](PageContext.md)     | The page context provides standard definitions for common SharePoint objects  that need to be shared between the client-side application, web parts, and other  components |
| [ServiceKey](ServiceKey.md)     | The ServiceKey is a lookup key that is used when calling ServiceScope |
| [ServiceScope](ServiceScope.md)     | ServiceScope provides a formalized way for components to register and consume dependencies  ("services"), and to enable different implementations to be registered in different scopes |
| [SPPermission](SPPermission.md)     | This class can be used to determine if the current user has a requested set of permissions |
| [SPSite](SPSite.md)     | This class is primarily used with the PageContext class |
| [SPUser](SPUser.md)     | This class is primarily used with the PageContext class |
| [SPWeb](SPWeb.md)     | This class is primarily used with the PageContext class |
| [UrlQueryParameterCollection](UrlQueryParameterCollection.md)     | Class for storing and retrieving query parameters |
| [UrlUtilities](UrlUtilities.md)     | Common helper functions for working with URLs |
| [Validate](Validate.md)     | This class implements provides a standard way to validate properties and function parameters |



## Interfaces

| Class	   |  Description |
|:-------------|:---------------|
| [IBasicHttpClientOptions](IBasicHttpClientOptions.md)   | headers?: HeaderInit|{ [index: string]: string }  |
| [IClientSideApplicationManifest](IClientSideApplicationManifest.md)   | This is is the manifest for a client-side application  |
| [IClientSideComponentManifest](IClientSideComponentManifest.md)   | This is the base interface that is extended by the interfaces  that represent the manifest for each kind of client-side component  |
| [IDigestCache](IDigestCache.md)   | IDigestCache is an internal service used by HttpClient to maintain a cache of request digests  for each SPWeb URL  |
| [IHttpClientOptions](IHttpClientOptions.md)   | headers?: HeaderInit|{ [index: string]: string }  |
| [IODataBasePermission](IODataBasePermission.md)   | Data used for creating a SPPermission object  |
| [IODataBatchOptions](IODataBatchOptions.md)   | This interface is passed to the ODataBatch constructor  |
| [IODataChangeToken](IODataChangeToken.md)   | Represents an OData SP  |
| [IODataContextWebInformation](IODataContextWebInformation.md)   | Represents an OData SP  |
| [IODataNavigationNode](IODataNavigationNode.md)   | Represents an OData SP  |
| [IODataNavigationNodeCollection](IODataNavigationNodeCollection.md)   | Represents an OData Microsoft  |
| [IODataWeb](IODataWeb.md)   | Represents an OData SP  |
| [IServiceScopeProvider](IServiceScopeProvider.md)   | This is a convenient interface that can be used to indicate that an object  has an associated ServiceScope  |



### Enumerations

| Enumeration	   | Description|
|:-----------|:------------|
|[DisplayMode](DisplayMode.md)    | Display mode enumeration |
|[EnvironmentType](EnvironmentType.md)    | Environment type enumeration |




