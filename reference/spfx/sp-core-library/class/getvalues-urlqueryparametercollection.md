# getValues(param)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



Returns the values of all of the matching query parameters or undefined if the key doesn't exist. Examples: this._queryParameterList = [ {key: TEST, value: done}, {key: DEBUG, value: false}, {key: TEST, value: notdone}] getValues('TEST') ---> ['done', 'notdone'] getValues('debug') ---> ['false'] getValues('lost') ---> undefined

**Signature:** _public getValues(param: string): string[];_

**Returns**: `string[]`





#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `param`    | `string` | the case insensitive key for the desired query parameter value. |


