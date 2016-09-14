# IClientSideWebPartStatusRenderer interface











## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`clearError`](#clearerror)      | `void` |  |
|[`clearLoadingIndicator`](#clearloadingindicator)      | `void` |  |
|[`displayLoadingIndicator`](#displayloadingindicator)      | `void` |  |
|[`renderError`](#rendererror)      | `void` |  |




### clearError



#### Signature
`clearError(domElement: HTMLElement): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | `HTMLElement` | - the webpart container div |


### clearLoadingIndicator



#### Signature
`clearLoadingIndicator(domElement: Element): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | `Element` | - the webpart container div |


### displayLoadingIndicator



#### Signature
`displayLoadingIndicator(domElement: Element,loadingMessage: string): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | `Element` | - the webpart container div |
| `loadingMessage`    | `string` | - the message to be displayed when the loading spinner id displayed |


### renderError



#### Signature
`renderError(domElement: HTMLElement,error: Error | string): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | `HTMLElement` | - the webpart container div |
| `error`    | `Error `,` string` | - the error message |

