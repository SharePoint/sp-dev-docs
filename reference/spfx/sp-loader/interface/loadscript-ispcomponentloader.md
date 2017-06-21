# loadScript(url,options)



Given a URL, load a script.

**Signature:** _loadScript < TModule >(url: string, options?: [ILoadScriptOptions](../../sp-loader/interface/iloadscriptoptions.md)): [Promise](../../web-apis/class/promise.md)<TModule>;_

**Returns**: [`Promise`](../../web-apis/class/promise.md)<TModule>



A promise containing the loaded module.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | The script URL. |
| `options`    | [`ILoadScriptOptions`](../../sp-loader/interface/iloadscriptoptions.md) | _Optional._ globalExportsName: If the script isn't an AMD module and loads a global member on the page, specify the global member's name. |


