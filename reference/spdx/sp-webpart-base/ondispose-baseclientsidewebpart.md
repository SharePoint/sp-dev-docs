# onDispose()
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



This API should be used to refresh the contents of the PropertyPane. This API is called at the end of the web part lifecycle on a page. It should be used to dispose any local resources (i.e. DOM elements) that the web part is holding onto. This API is expected to be called in scenarios like page navigation i.e. the host is transitioning from one page to another and disposes the page that is being transitioned out.

**Signature:** _@virtual protected onDispose(): void;_

**Returns**: `void`





#### Parameters
None


