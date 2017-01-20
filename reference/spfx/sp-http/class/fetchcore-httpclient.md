# fetchCore()
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.

 Note: This is being made avaiable in **beta** mode. This is not recommended for use in Production.

All network requests are routed through this method, which calls the underlying IFetchProvider.fetch().

**Signature:** _protected fetchCore(configuration: [HttpClientConfiguration](../sp-http/class/httpclientconfiguration.md), request: [Request](../whatwg-fetch.api/class/request.md)): Promise<[Response](../whatwg-fetch.api/class/response.md)>;_

**Returns**: `Promise<Response>`





#### Parameters
None


