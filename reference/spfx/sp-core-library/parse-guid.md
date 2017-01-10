# parse(guid)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



Parses the input string to construct a new Guid object. If the string cannot be parsed, then an error is thrown.

**Signature:** _public static parse(guidString: string): [Guid](../sp-core-library/guid.md);_

**Returns**: [`Guid`](../sp-core-library/guid.md)



A valid Guid object

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    |  | The input string. |


### Remarks

Example syntaxes accepted by this function: 'd5369f3b-bd7a-412a-9c0f-7f0650bb5489' '{d5369f3b-bd7a-412a-9c0f-7f0650bb5489}' '/Guid(d5369f3b-bd7a-412a-9c0f-7f0650bb5489)'

