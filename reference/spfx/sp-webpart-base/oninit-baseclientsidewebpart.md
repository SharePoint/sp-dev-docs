# onInit()
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



This API should be overridden to perform long running operations e.g. data fetching from a remote service before the initial rendering of the web part. The loading indicator is displayed during the lifetime of this method. This API is called only once during the lifecycle of a web part.

**Signature:** _@virtual protected onInit(): Promise<void>;_

**Returns**: `Promise<void>`





#### Parameters
None


