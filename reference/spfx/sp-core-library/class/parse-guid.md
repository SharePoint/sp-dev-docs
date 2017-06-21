# parse(guid)



Parses the input string to construct a new Guid object. If the string cannot be parsed, then an error is thrown.

**Signature:** _public static parse(guidString: string | undefined | null): [Guid](../../sp-core-library/class/guid.md);_

**Returns**: [`Guid`](../../sp-core-library/class/guid.md)



A valid Guid object

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    |  | The input string. |


### Remarks

Example syntaxes accepted by this function: 'd5369f3b-bd7a-412a-9c0f-7f0650bb5489' '{d5369f3b-bd7a-412a-9c0f-7f0650bb5489}' '/Guid(d5369f3b-bd7a-412a-9c0f-7f0650bb5489)'

