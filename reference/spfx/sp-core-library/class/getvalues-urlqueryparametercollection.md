# getValues(param)



Returns the values of all of the matching query parameters or undefined if the key doesn't exist. Examples: this._queryParameterList = [ {key: TEST, value: done}, {key: DEBUG, value: false}, {key: TEST, value: notdone}] getValues('TEST') ---> ['done', 'notdone'] getValues('debug') ---> ['false'] getValues('lost') ---> undefined

**Signature:** _public getValues(param: string): (string | undefined)[] | undefined;_

**Returns**: `(string `,` undefined)[] `,` undefined`





#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `param`    | `string` | the case insensitive key for the desired query parameter value. |


