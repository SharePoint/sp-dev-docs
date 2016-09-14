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

## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`accessibleTitle`     | `protected` | `string` | _Read-only._ Constructor for the BaseClientSideWebPart class |
|`context`     | `protected` | [`IWebPartContext`](../sp-client-preview/iwebpartcontext.md) | _Read-only._ Constructor for the BaseClientSideWebPart class |
|`disableReactivePropertyChanges`     | `protected` | `boolean` | _Read-only._ Constructor for the BaseClientSideWebPart class |
|`displayMode`     | `protected` | [`DisplayMode`](../sp-client-base/displaymode.md) | _Read-only._ Constructor for the BaseClientSideWebPart class |
|`domElement`     | `protected` | `HTMLElement` | _Read-only._ Constructor for the BaseClientSideWebPart class |
|`previewImageUrl`     | `protected` | `string` | _Read-only._ Constructor for the BaseClientSideWebPart class |
|`properties`     | `protected` | `TProperties` | _Read-only._ Constructor for the BaseClientSideWebPart class |
|`propertyPaneSettings`     | `protected` | [`IPropertyPaneSettings`](../sp-client-preview/ipropertypanesettings.md) | _Read-only._ Constructor for the BaseClientSideWebPart class |
|`renderedFromDefaultProperties`     | `protected` | `boolean` | _Read-only._ Constructor for the BaseClientSideWebPart class |
|`renderedOnce`     | `protected` | `boolean` | _Read-only._ Constructor for the BaseClientSideWebPart class |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`BaseClientSideWebPart`](../sp-client-preview/baseclientsidewebpart.md) | Constructor for the BaseClientSideWebPart class |
|[`clearError`](#clearerror)     | `protected` | `void` | Constructor for the BaseClientSideWebPart class |
|[`configureStart`](#configurestart)     | `protected` | `void` | Constructor for the BaseClientSideWebPart class |
|[`deserialize`](#deserialize)     | `protected` | `TProperties` | Constructor for the BaseClientSideWebPart class |
|[`dispose`](#dispose)     | `protected` | `void` | Constructor for the BaseClientSideWebPart class |
|[`onBeforeSerialize`](#onbeforeserialize)     | `protected` | [`IHtmlProperties`](../sp-client-preview/ihtmlproperties.md) | Constructor for the BaseClientSideWebPart class |
|[`onDisplayModeChanged`](#ondisplaymodechanged)     | `protected` | `void` | Constructor for the BaseClientSideWebPart class |
|[`onInit<T>`](#oninit<t>)     | `protected` | [`Promise<T>`](../es6-promise/promise.md) | Constructor for the BaseClientSideWebPart class |
|[`onPropertyChange`](#onpropertychange)     | `protected` | `void` | Constructor for the BaseClientSideWebPart class |
|[`onPropertyConfigurationComplete`](#onpropertyconfigurationcomplete)     | `protected` | `void` | Constructor for the BaseClientSideWebPart class |
|[`onPropertyPaneRendered`](#onpropertypanerendered)     | `protected` | `void` | Constructor for the BaseClientSideWebPart class |
|[`onPropertyPaneSave`](#onpropertypanesave)     | `protected` | `void` | Constructor for the BaseClientSideWebPart class |
|[`render`](#render)     | `public` | `void` | Constructor for the BaseClientSideWebPart class |
|[`renderError`](#rendererror)     | `protected` | `void` | Constructor for the BaseClientSideWebPart class |





### constructor

Constructor for the BaseClientSideWebPart class. 
If a sub class overrides the constructor, it needs to call super(context) as the first line of its constructor. 


#### Signature
`constructor(ctx: IWebPartContext)`

#### Returns
[`BaseClientSideWebPart`](../sp-client-preview/baseclientsidewebpart.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `ctx`    | [`IWebPartContext`](../sp-client-preview/iwebpartcontext.md) |  |


### clearError

Constructor for the BaseClientSideWebPart class. 
If a sub class overrides the constructor, it needs to call super(context) as the first line of its constructor. 


#### Signature
`clearError(): void`

#### Returns
`void`


#### Parameters
None


### configureStart

Constructor for the BaseClientSideWebPart class. 
If a sub class overrides the constructor, it needs to call super(context) as the first line of its constructor. 


#### Signature
`configureStart(refreshOnly?: boolean): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `refreshOnly`    | `boolean` | _Optional._ |


### deserialize

Constructor for the BaseClientSideWebPart class. 
If a sub class overrides the constructor, it needs to call super(context) as the first line of its constructor. 


#### Signature
`deserialize(data: IWebPartData): TProperties`

#### Returns
`TProperties`
- web part property bag. 


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `data`    | [`IWebPartData`](../sp-client-preview/iwebpartdata.md) | - web part persisted data |


### dispose

Constructor for the BaseClientSideWebPart class. 
If a sub class overrides the constructor, it needs to call super(context) as the first line of its constructor. 


#### Signature
`dispose(): void`

#### Returns
`void`
- web part property bag. 


#### Parameters
None


### onBeforeSerialize

Constructor for the BaseClientSideWebPart class. 
If a sub class overrides the constructor, it needs to call super(context) as the first line of its constructor. 


#### Signature
`onBeforeSerialize(): IHtmlProperties`

#### Returns
[`IHtmlProperties`](../sp-client-preview/ihtmlproperties.md)
- reference to searchable properties and properties that need link fixup. Please read 
the documentation of IHtmlProperties interface for more details.

#### Parameters
None


### onDisplayModeChanged

Constructor for the BaseClientSideWebPart class. 
If a sub class overrides the constructor, it needs to call super(context) as the first line of its constructor. 


#### Signature
`onDisplayModeChanged(oldDisplayMode: DisplayMode): void`

#### Returns
`void`
- reference to searchable properties and properties that need link fixup. Please read 
the documentation of IHtmlProperties interface for more details.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `oldDisplayMode`    | [`DisplayMode`](../sp-client-base/displaymode.md) | - The old display mode |


### onInit<T>

Constructor for the BaseClientSideWebPart class. 
If a sub class overrides the constructor, it needs to call super(context) as the first line of its constructor. 


#### Signature
`onInit<T>(): Promise<T>`

#### Returns
[`Promise<T>`](../es6-promise/promise.md)
- reference to searchable properties and properties that need link fixup. Please read 
the documentation of IHtmlProperties interface for more details.

#### Parameters
None


### onPropertyChange

Constructor for the BaseClientSideWebPart class. 
If a sub class overrides the constructor, it needs to call super(context) as the first line of its constructor. 


#### Signature
`onPropertyChange(propertyPath: string,newValue: any): void`

#### Returns
`void`
- reference to searchable properties and properties that need link fixup. Please read 
the documentation of IHtmlProperties interface for more details.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `propertyPath`    | `string` | - JSON path of the property in the property bag |
| `newValue`    | `any` | - New value of the property |


### onPropertyConfigurationComplete

Constructor for the BaseClientSideWebPart class. 
If a sub class overrides the constructor, it needs to call super(context) as the first line of its constructor. 


#### Signature
`onPropertyConfigurationComplete(): void`

#### Returns
`void`
- reference to searchable properties and properties that need link fixup. Please read 
the documentation of IHtmlProperties interface for more details.

#### Parameters
None


### onPropertyPaneRendered

Constructor for the BaseClientSideWebPart class. 
If a sub class overrides the constructor, it needs to call super(context) as the first line of its constructor. 


#### Signature
`onPropertyPaneRendered(): void`

#### Returns
`void`
- reference to searchable properties and properties that need link fixup. Please read 
the documentation of IHtmlProperties interface for more details.

#### Parameters
None


### onPropertyPaneSave

Constructor for the BaseClientSideWebPart class. 
If a sub class overrides the constructor, it needs to call super(context) as the first line of its constructor. 


#### Signature
`onPropertyPaneSave(): void`

#### Returns
`void`
- reference to searchable properties and properties that need link fixup. Please read 
the documentation of IHtmlProperties interface for more details.

#### Parameters
None


### render

Constructor for the BaseClientSideWebPart class. 
If a sub class overrides the constructor, it needs to call super(context) as the first line of its constructor. 


#### Signature
`render(): void`

#### Returns
`void`
- reference to searchable properties and properties that need link fixup. Please read 
the documentation of IHtmlProperties interface for more details.

#### Parameters
None


### renderError

Constructor for the BaseClientSideWebPart class. 
If a sub class overrides the constructor, it needs to call super(context) as the first line of its constructor. 


#### Signature
`renderError(error: Error): void`

#### Returns
`void`
- reference to searchable properties and properties that need link fixup. Please read 
the documentation of IHtmlProperties interface for more details.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `error`    | `Error` | - An error object containing the error message to render |

