# loadScript(url,options)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



Given a URL, load a script.

**Signature:** _loadScript < TModule >(url: string, options?: [ILoadScriptOptions](../sp-loader/interface/iloadscriptoptions.md)): Promise<TModule>;_

**Returns**: `Promise<TModule>`



A promise containing the loaded module.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | The script URL. |
| `options`    | [`ILoadScriptOptions`](../sp-loader/interface/iloadscriptoptions.md) | _Optional._ globalExportsName: If the script isn't an AMD module and loads a global member on the page, specify the global member's name. |


