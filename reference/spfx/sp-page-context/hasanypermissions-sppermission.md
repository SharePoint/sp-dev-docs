# hasAnyPermissions(...requestedPerms)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



Function for determining if a given permission mask has any of the requested permissions.

**Signature:** _public hasAnyPermissions(...requestedPerms: [SPPermission](../sp-page-context/sppermission.md)[]): boolean;_

**Returns**: `boolean`





#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `...requestedPerms`    | [`SPPermission`](../sp-page-context/sppermission.md)[] | Any number of SPPermission objects to be compared against the original |


