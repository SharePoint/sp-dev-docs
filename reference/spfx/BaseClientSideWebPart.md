# BaseClientSideWebPart `<TProperties>` class



_Type parameters: `<TProperties>`_

This abstract class implements the the base functionality for a client side web part. Every client side web part 
needs to inherit from this class. Along with the base functionality, this class provides some APIs that can be 
used by the web part. These APIs fall in two catagories. 
 
The first category of APIs provide data and functionality. Example, the web part context (i.e. this.context). This 
API should be used to access contextual data relevant to this web part instance. 
 
The second category of APIs provide a base implementation for the web part lifecycle and can be overridden for an 
updated implementation. The render() API is the only API that is mandatory to be implemented/overridden by a web 
part. All other life cycle APIs have a base implementation and can be overridden based on the needs of the web part. 
Please refer to the documentation of the individual APIs to make the right decision.



### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`accessibleTitle`     | `protected` | `string` | This property points to the accessible title of web part made available to screen readers |
|`context`     | `protected` | [`IWebPartContext`](IWebPartContext.md) |  |
|`disableReactivePropertyChanges`     | `protected` | `boolean` | This property is used to change the web part's PropertyPane interaction from Reactive to NonReactive |
|`displayMode`     | `protected` | [`DisplayMode`](DisplayMode.md) | This property is the current display mode of the web part |
|`domElement`     | `protected` | `HTMLElement` | This property is a pointer to the root DOM element of the web part |
|`previewImageUrl`     | `protected` | `string` | This property points to the preview image for the web part |
|`properties`     | `protected` | `TProperties` | This property is the pointer to the custom property bag of the web part |
|`propertyPaneSettings`     | `protected` | [`IPropertyPaneSettings`](IPropertyPaneSettings.md) |  |
|`renderedFromDefaultProperties`     | `protected` | `boolean` | This property indicates whether the web part was rendered from the default properties,as opposed to using  serialized state from the last time that the web part was saved |
|`renderedOnce`     | `protected` | `boolean` | This property indicates whether the web part has been rendered once or not |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`IWebPartContext`](IWebPartContext.md) |   e |
|[`clearError`](#clearerror)     | `protected` | `void` | This API should be used to clear the error message from the web part display area |
|[`configureStart`](#configurestart)     | `protected` | `void` | if it is not already open |
|[`deserialize`](#deserialize)     | `protected` | `TProperties` |  |
|[`dispose`](#dispose)     | `protected` | `void` | This API is called at the end of the web part lifecycle |
|[`onBeforeSerialize`](#onbeforeserialize)     | `protected` | [`IHtmlProperties`](IHtmlProperties.md) | the documentation of IHtmlProperties interface for more details |
|[`onDisplayModeChanged`](#ondisplaymodechanged)     | `protected` | `void` |  |
|[`onInit<T>`](#oninit<t>)     | `protected` | [`Promise<T>`](Promise.md) | This API should be overridden to perform long running operations e |
|[`onPropertyChange`](#onpropertychange)     | `protected` | `void` | This API is invoked on property changes in the PropertyPane when the PropertyPane is being used in Reactive mode |
|[`onPropertyConfigurationComplete`](#onpropertyconfigurationcomplete)     | `protected` | `void` | This API is called when the current web part configuration process is completed |
|[`onPropertyPaneRendered`](#onpropertypanerendered)     | `protected` | `void` | This API is involed when the PropertyPane is rendered |
|[`onPropertyPaneSave`](#onpropertypanesave)     | `protected` | `void` | this API is invoked when the the changes are applied on the PropertyPane when the PropertyPane is used in  Non-Reactive mode |
|[`render`](#render)     | `public` | `void` | This API is called to render the web part |
|[`renderError`](#rendererror)     | `protected` | `void` | This API should be used to render an error message in the web part display area |




### constructor

 
e.g. 
constructor(conext: IWebPartContext) { 
super(context); 
. 
. class specific constructor code .. 
}

#### Signature
`constructor(ctx: IWebPartContext)`

#### Returns
[`IWebPartContext`](IWebPartContext.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `ctx`    | [`IWebPartContext`](IWebPartContext.md) |  |


### clearError

This API should be used to clear the error message from the web part display area.

#### Signature
`protected clearError(): void`

#### Returns
`void`

#### Parameters
None


### configureStart

if it is not already open.

#### Signature
`protected configureStart(refreshOnly?: boolean): void`

#### Returns
`void`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `refreshOnly`    | `boolean` | _Optional._ |


### deserialize



#### Signature
`protected deserialize(data: IWebPartData): TProperties`

#### Returns
`TProperties`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `data`    | [`IWebPartData`](IWebPartData.md) |  |


### dispose

This API is called at the end of the web part lifecycle. It should be overridden to dispose any 
resources that the web part is holding onto.

#### Signature
`protected dispose(): void`

#### Returns
`void`

#### Parameters
None


### onBeforeSerialize

the documentation of IHtmlProperties interface for more details.

#### Signature
`protected onBeforeSerialize(): IHtmlProperties`

#### Returns
[`IHtmlProperties`](IHtmlProperties.md)

#### Parameters
None


### onDisplayModeChanged



#### Signature
`protected onDisplayModeChanged(oldDisplayMode: DisplayMode): void`

#### Returns
`void`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `oldDisplayMode`    | [`DisplayMode`](DisplayMode.md) |  |


### onInit<T>

This API should be overridden to perform long running operations e.g. data fetching from a remote service before 
the initial rendering of the web part. The loading indicator is displayed during the lifetime of this method. 
This API is called only once during the lifecycle of a web part.

#### Signature
`protected onInit<T>(): Promise<T>`

#### Returns
[`Promise<T>`](Promise.md)

#### Parameters
None


### onPropertyChange

This API is invoked on property changes in the PropertyPane when the PropertyPane is being used in Reactive mode. 
The base implementation of this API updates the web part property bag and re-render the web part. This API also 
invokes the web part host's setDirty API. 


#### Signature
`protected onPropertyChange(propertyPath: string,newValue: any): void`

#### Returns
`void`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `propertyPath`    | `string` |  |
| `newValue`    | `any` |  |


### onPropertyConfigurationComplete

This API is called when the current web part configuration process is completed. ConfigurationComplete event 
is fired when user switches between web parts while the PropertyPane is open, and this event handler is called 
for the previously selected web part. 


#### Signature
`protected onPropertyConfigurationComplete(): void`

#### Returns
`void`

#### Parameters
None


### onPropertyPaneRendered

This API is involed when the PropertyPane is rendered.

#### Signature
`protected onPropertyPaneRendered(): void`

#### Returns
`void`

#### Parameters
None


### onPropertyPaneSave

this API is invoked when the the changes are applied on the PropertyPane when the PropertyPane is used in 
Non-Reactive mode. This API is not invoked when the PropertyPane is used in Reactive mode.

#### Signature
`protected onPropertyPaneSave(): void`

#### Returns
`void`

#### Parameters
None


### render

This API is called to render the web part. There is no base implementation of this API and the web part is 
required to override this API.

#### Signature
`public render(): void`

#### Returns
`void`

#### Parameters
None


### renderError

This API should be used to render an error message in the web part display area. Also logs the error message 
using the trace logger. 


#### Signature
`protected renderError(error: Error): void`

#### Returns
`void`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `error`    | `Error` |  |

