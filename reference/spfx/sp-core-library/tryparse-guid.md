# tryParse(guid)




Attempts to parse the input string to construct a new Guid object. If the string cannot be parsed, then undefined is returned.

**Signature:** _public static tryParse(guid: string): [Guid](../sp-core-library/guid.md);_

**Returns**: [`Guid`](../sp-core-library/guid.md)



The Guid object, or undefined if the string could not be parsed.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    | `string` | The input string. |


### Remarks

Example syntaxes accepted by this function: 'd5369f3b-bd7a-412a-9c0f-7f0650bb5489' '{d5369f3b-bd7a-412a-9c0f-7f0650bb5489}' '/Guid(d5369f3b-bd7a-412a-9c0f-7f0650bb5489)'

