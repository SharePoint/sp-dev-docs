# convertToODataStringLiteral(value)

Converts a variable to an OData string literal and escapes apostrophes. 
OData specification: 
https://tools.oasis-open.org/version-control/ 
browse/wsvn/odata/trunk/spec/ABNF/odata-abnf-construction-rules.txt 
SQUOTE-in-string = SQUOTE SQUOTE ; two consecutive single quotes represent one within a string literal 
Examples: 
convertToODataStringLiteral("example's list") ---> "'example''s list'" 
convertToODataStringLiteral("example list") ---> "'example list'" 
convertToODataStringLiteral("'example list'") ---> "'''example list'''"

**Signature:** _convertToODataStringLiteral(value: string): string_

**Returns**: `string`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `string` |  |

