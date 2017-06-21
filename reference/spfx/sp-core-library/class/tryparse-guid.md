# tryParse(guid)



Attempts to parse the input string to construct a new Guid object. If the string cannot be parsed, then undefined is returned.

**Signature:** _public static tryParse(guid: string | undefined | null): [Guid](../../sp-core-library/class/guid.md) | undefined;_

**Returns**: [`Guid `](../../sp-core-library/class/guid.md),` undefined`



The Guid object, or undefined if the string could not be parsed.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `guid`    | `string `,` undefined `,` null` | The input string. |


### Remarks

Example syntaxes accepted by this function: 'd5369f3b-bd7a-412a-9c0f-7f0650bb5489' '{d5369f3b-bd7a-412a-9c0f-7f0650bb5489}' '/Guid(d5369f3b-bd7a-412a-9c0f-7f0650bb5489)'

