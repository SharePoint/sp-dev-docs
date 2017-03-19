# loadScript(url,options)




Given a URL, load a script.

**Signature:** _loadScript < TModule >(url: string, options?: [ILoadScriptOptions](../sp-loader/iloadscriptoptions.md)): Promise<TModule>;_

**Returns**: `Promise<TModule>`



A promise containing the loaded module.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | The script URL. |
| `options`    | [`ILoadScriptOptions`](../sp-loader/iloadscriptoptions.md) | __Optional.__ globalExportsName: If the script isn't an AMD module and loads a global member on the page, specify the global member's name. |


