# loadComponent(manifest)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



Loads a component from a manifest.

**Signature:** _loadComponent < TComponent >(manifest: IClientSideComponentManifest): Promise<TComponent>;_

**Returns**: `Promise<TComponent>`



A promise containing the loaded module.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `manifest`    | `IClientSideComponentManifest` | Manifest of the module to load. |


