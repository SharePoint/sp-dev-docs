# removeEndSlash(url)
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



Removes any slash characters from the end of the URL. This function assumes that the input is already a valid absolute or server-relative URL. Examples: removeEndSlash('http://example.com/') ---> 'http://example.com' removeEndSlash('/example') ---> '/example' removeEndSlash('/') ---> ''

**Signature:** _public static removeEndSlash(url: string): string;_

**Returns**: `string`





#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | the URL to be normalized |


