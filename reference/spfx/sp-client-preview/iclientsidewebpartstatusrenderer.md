# IClientSideWebPartStatusRenderer interface













## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`clearError(domElement)`](#clearerrordomelement)      | `void` | Clear the webpart error message. |
|[`clearLoadingIndicator(domElement)`](#clearloadingindicatordomelement)      | `void` | Clear the loading indicator. |
|[`displayLoadingIndicator(domElement,loadingMessage)`](#displayloadingindicatordomelementloadingmessage)      | `void` | Display a loading spinner. |
|[`renderError(domElement,error)`](#rendererrordomelementerror)      | `void` | Render the provided error message in the webpart container div. |




### clearError(domElement)

Clear the webpart error message.

**Signature:** _clearError(domElement: HTMLElement): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | `HTMLElement` | - the webpart container div. |


### clearLoadingIndicator(domElement)

Clear the loading indicator.

**Signature:** _clearLoadingIndicator(domElement: Element): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | `Element` | - the webpart container div. |


### displayLoadingIndicator(domElement,loadingMessage)

Display a loading spinner.

**Signature:** _displayLoadingIndicator(domElement: Element,loadingMessage: string): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | `Element` | - the webpart container div. |
| `loadingMessage`    | `string` | - the message to be displayed when the loading spinner id displayed. |


### renderError(domElement,error)

Render the provided error message in the webpart container div.

**Signature:** _renderError(domElement: HTMLElement,error: Error | string): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | `HTMLElement` | - the webpart container div. |
| `error`    | `Error `,` string` | - the error message. |

