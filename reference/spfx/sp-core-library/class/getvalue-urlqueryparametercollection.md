# getValue(param)



Returns the value of the first matching query parameter or undefined if the key doesn't exist. Examples: this._queryParameterList = [ {key: TEST, value: done}, {key: DEBUG, value: false}, {key: TEST, value: notdone}] getValue('TEST') ---> 'done' getValue('debug') ---> 'false' getValue('lost') ---> undefined

**Signature:** _public getValue(param: string): string | undefined;_

**Returns**: `string `,` undefined`





#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `param`    | `string` | the case insensitive key for the desired query parameter value. |


