# BaseClientSideWebPart <TProperties> class



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


## Constructor
Constructor for the BaseClientSideWebPart class. 
If a sub class overrides the constructor, it needs to call super(context) as the first line of its constructor. 


**Signature:** _constructor(ctx: [IWebPartContext](../sp-client-preview/iwebpartcontext.md))_

**Returns**: [`BaseClientSideWebPart`](../sp-client-preview/baseclientsidewebpart.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `ctx`    | [`IWebPartContext`](../sp-client-preview/iwebpartcontext.md) |  |


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`accessibleTitle`     | `protected` | `string` | _Read-only._ This property points to the accessible title of web part made available to screen readers. The base implementation  returns that default title in the manifest. Web parts that want to provide more descriptive title containing  contextual information need to override this API.   |
|`context`     | `protected` | [`IWebPartContext`](../sp-client-preview/iwebpartcontext.md) | _Read-only._ This property is a pointer to the web part context. |
|`disableReactivePropertyChanges`     | `protected` | `boolean` | _Read-only._ This property is used to change the web part's PropertyPane interaction from Reactive to NonReactive. The default  behaviour is Reactive. Where,  Reactive implies that changes made in the PropertyPane are transmitted to the web part instantly and the user can  see instant updates. This helps the page creator get instant feedback and decide if they should keep the new  configuration changes or not.  NonReactive implies that the configuraiton changes are transmitted to the web part only after 'Apply' PropertyPane  button is clicked.   |
|`displayMode`     | `protected` | [`DisplayMode`](../sp-client-base/displaymode.md) | _Read-only._ This property is the current display mode of the web part.   |
|`domElement`     | `protected` | `HTMLElement` | _Read-only._ This property is a pointer to the root DOM element of the web part. This is a DIV element and contains the whole  DOM subtree of the web part.   |
|`previewImageUrl`     | `protected` | `string` | _Read-only._ This property points to the preview image for the web part. The base implementation returns undefined. Web parts  that want to provide a valid preview image url need to override this API. The preview image url can be used to  create a preview of the web part or of the page on which the web part is present.   |
|`properties`     | `protected` | `TProperties` | _Read-only._ This property is the pointer to the custom property bag of the web part.   |
|`propertyPaneSettings`     | `protected` | [`IPropertyPaneSettings`](../sp-client-preview/ipropertypanesettings.md) | _Read-only._ This property is the pointer to the web part configuration settings. If the web part wants to use the PropertyPane  for configuration, this API needs to be overridden and the web part needs to return the set of properties it wants  to display in the PropertyPane.   |
|`renderedFromDefaultProperties`     | `protected` | `boolean` | _Read-only._ This property indicates whether the web part was rendered from the default properties,as opposed to using  serialized state from the last time that the web part was saved.   |
|`renderedOnce`     | `protected` | `boolean` | _Read-only._ This property indicates whether the web part has been rendered once or not. After the first time rendering,  the value of this property is always true. Till a full re-render of the web part happens.   |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`clearError()`](#clearerror)     | `protected` | `void` | This API should be used to clear the error message from the web part display area. |
|[`configureStart(refreshOnly)`](#configurestartrefreshonly)     | `protected` | `void` | This API should be used to invoke the PropertyPane to help configure the web part.   |
|[`deserialize(data)`](#deserializedata)     | `protected` | `TProperties` | This API is called once during the lifetime of the web part during the intial render and just before the onInit  API call. The purpose of this API is to help a web part developer deserialize the web part data and manage the  versioning of their data as the web part code evolves. The web part data may have been persisted with an older  or newer version of the web part code. This API gives the web part developer an opportunity to re-structure their  data to the appropriate data schema. The persisted data contains the version number information. That information  can be used to make decisions on how to re-structure the data.   |
|[`dispose()`](#dispose)     | `protected` | `void` | This API is called at the end of the web part lifecycle. It should be overridden to dispose any  resources that the web part is holding onto. |
|[`onBeforeSerialize()`](#onbeforeserialize)     | `protected` | [`IHtmlProperties`](../sp-client-preview/ihtmlproperties.md) | This API is called before a web part is serialized. The default implementation is a no-op. A web part developer  is expected to override this API when the web part's state is not fully reflected in the property bag i.e.  this.properties. In the overridden method, the web part developer is expected to update the state of the web  part property bag. This way the web part serialization process will use the upto date state of the web part.   |
|[`onDisplayModeChanged(oldDisplayMode)`](#ondisplaymodechangedolddisplaymode)     | `protected` | `void` | This API is called when the display mode of a web part is changed. The default implementation of this API calls  the web part render method to re-render the web part with the new display mode. If a web part developer does not  want a full re-render to happen on display mode change, they can override this API and perform specific updates  to the web part DOM to switch its display mode.   |
|[`onInit<T>()`](#oninit<t>)     | `protected` | [`Promise`](../es6-promise/promise.md)<T> | This API should be overridden to perform long running operations e.g. data fetching from a remote service before  the initial rendering of the web part. The loading indicator is displayed during the lifetime of this method.  This API is called only once during the lifecycle of a web part. |
|[`onPropertyChange(propertyPath,newValue)`](#onpropertychangepropertypathnewvalue)     | `protected` | `void` | This API is invoked on property changes in the PropertyPane when the PropertyPane is being used in Reactive mode.  The base implementation of this API updates the web part property bag and re-render the web part. This API also  invokes the web part host's setDirty API.   |
|[`onPropertyConfigurationComplete()`](#onpropertyconfigurationcomplete)     | `protected` | `void` | This API is called when the current web part configuration process is completed. ConfigurationComplete event  is fired when user switches between web parts while the PropertyPane is open, and this event handler is called  for the previously selected web part.   |
|[`onPropertyPaneRendered()`](#onpropertypanerendered)     | `protected` | `void` | This API is involed when the PropertyPane is rendered. |
|[`onPropertyPaneSave()`](#onpropertypanesave)     | `protected` | `void` | this API is invoked when the the changes are applied on the PropertyPane when the PropertyPane is used in  Non-Reactive mode. This API is not invoked when the PropertyPane is used in Reactive mode. |
|[`render()`](#render)     | `public` | `void` | This API is called to render the web part. There is no base implementation of this API and the web part is  required to override this API. |
|[`renderError(error)`](#rendererrorerror)     | `protected` | `void` | This API should be used to render an error message in the web part display area. Also logs the error message  using the trace logger.   |





### clearError()

This API should be used to clear the error message from the web part display area.

**Signature:** _clearError(): void_

**Returns**: `void`



#### Parameters
None


### configureStart(refreshOnly)

This API should be used to invoke the PropertyPane to help configure the web part. 


**Signature:** _configureStart(refreshOnly?: boolean): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `refreshOnly`    | `boolean` | _Optional._ |


### deserialize(data)

This API is called once during the lifetime of the web part during the intial render and just before the onInit 
API call. The purpose of this API is to help a web part developer deserialize the web part data and manage the 
versioning of their data as the web part code evolves. The web part data may have been persisted with an older 
or newer version of the web part code. This API gives the web part developer an opportunity to re-structure their 
data to the appropriate data schema. The persisted data contains the version number information. That information 
can be used to make decisions on how to re-structure the data. 


**Signature:** _deserialize(data: [IWebPartData](../sp-client-preview/iwebpartdata.md)): TProperties_

**Returns**: `TProperties`

- web part property bag. 


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `data`    | [`IWebPartData`](../sp-client-preview/iwebpartdata.md) | - web part persisted data. |


### dispose()

This API is called at the end of the web part lifecycle. It should be overridden to dispose any 
resources that the web part is holding onto.

**Signature:** _dispose(): void_

**Returns**: `void`



#### Parameters
None


### onBeforeSerialize()

This API is called before a web part is serialized. The default implementation is a no-op. A web part developer 
is expected to override this API when the web part's state is not fully reflected in the property bag i.e. 
this.properties. In the overridden method, the web part developer is expected to update the state of the web 
part property bag. This way the web part serialization process will use the upto date state of the web part. 


**Signature:** _onBeforeSerialize(): [IHtmlProperties](../sp-client-preview/ihtmlproperties.md)_

**Returns**: [`IHtmlProperties`](../sp-client-preview/ihtmlproperties.md)

- reference to searchable properties and properties that need link fixup. Please read 
the documentation of IHtmlProperties interface for more details.

#### Parameters
None


### onDisplayModeChanged(oldDisplayMode)

This API is called when the display mode of a web part is changed. The default implementation of this API calls 
the web part render method to re-render the web part with the new display mode. If a web part developer does not 
want a full re-render to happen on display mode change, they can override this API and perform specific updates 
to the web part DOM to switch its display mode. 


**Signature:** _on[DisplayMode](../sp-client-base/displaymode.md)Changed(oldDisplayMode: DisplayMode): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `oldDisplayMode`    | [`DisplayMode`](../sp-client-base/displaymode.md) | - The old display mode.   |


### onInit<T>()

This API should be overridden to perform long running operations e.g. data fetching from a remote service before 
the initial rendering of the web part. The loading indicator is displayed during the lifetime of this method. 
This API is called only once during the lifecycle of a web part.

**Signature:** _onInit<T>(): [Promise](../es6-promise/promise.md)<T>_

**Returns**: [`Promise`](../es6-promise/promise.md)<T>



#### Parameters
None


### onPropertyChange(propertyPath,newValue)

This API is invoked on property changes in the PropertyPane when the PropertyPane is being used in Reactive mode. 
The base implementation of this API updates the web part property bag and re-render the web part. This API also 
invokes the web part host's setDirty API. 


**Signature:** _onPropertyChange(propertyPath: string,newValue: any): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `propertyPath`    | `string` | - JSON path of the property in the property bag. |
| `newValue`    | `any` | - New value of the property. |


### onPropertyConfigurationComplete()

This API is called when the current web part configuration process is completed. ConfigurationComplete event 
is fired when user switches between web parts while the PropertyPane is open, and this event handler is called 
for the previously selected web part. 


**Signature:** _onPropertyConfigurationComplete(): void_

**Returns**: `void`



#### Parameters
None


### onPropertyPaneRendered()

This API is involed when the PropertyPane is rendered.

**Signature:** _onPropertyPaneRendered(): void_

**Returns**: `void`



#### Parameters
None


### onPropertyPaneSave()

this API is invoked when the the changes are applied on the PropertyPane when the PropertyPane is used in 
Non-Reactive mode. This API is not invoked when the PropertyPane is used in Reactive mode.

**Signature:** _onPropertyPaneSave(): void_

**Returns**: `void`



#### Parameters
None


### render()

This API is called to render the web part. There is no base implementation of this API and the web part is 
required to override this API.

**Signature:** _render(): void_

**Returns**: `void`



#### Parameters
None


### renderError(error)

This API should be used to render an error message in the web part display area. Also logs the error message 
using the trace logger. 


**Signature:** _renderError(error: Error): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `error`    | `Error` | - An error object containing the error message to render. |

