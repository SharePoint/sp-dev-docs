# BaseClientSideWebPart <TProperties> class



_Type parameters: `<TProperties>`_



This abstract class implements the the base functionality for a client side web part. Every client side web part needs to inherit from this class. Along with the base functionality, this class provides some APIs that can be used by the web part. These APIs fall in two catagories. The first category of APIs provide data and functionality. Example, the web part context (i.e. this.context). This API should be used to access contextual data relevant to this web part instance. The second category of APIs provide a base implementation for the web part lifecycle and can be overridden for an updated implementation. The render() API is the only API that is mandatory to be implemented/overridden by a web part. All other life cycle APIs have a base implementation and can be overridden based on the needs of the web part. Please refer to the documentation of the individual APIs to make the right decision.


## Constructor
Constructor for the BaseClientSideWebPart class. If a sub class overrides the constructor, it needs to call super() as the first line of its constructor. It is highly recommended that the web part use the OnInit API to perform any web part specific initialization. Most of the web part features like this.context and this.properties are not available to be used before the the onInit part of the web part loading lifecycle. e.g. constructor() { super(); . . class specific constructor code .. }

**Signature:** _constructor();_

**Returns**: 



#### Parameters
None


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`accessibleTitle`     | `public` | `string` | This property points to the accessible title of web part made available to screen readers. The base implementation returns that default title in the manifest. Web parts that want to provide more descriptive title containing contextual information need to override this API. |
|`canOpenPopupOnRender`     | `public` | `boolean` | _Read-only._ This property indicates whether a web part can open a popup on initial render. In some environments the host re-renders the web parts frequently, and therefor, opening popups during render will cause popups to open repeatedly and hence poor user experience. As an example, the classic SharePoint pages perform postbacks and hence page re-render on all button clicks. If a web part needs to open a popup on render, it should use this API before opening the popup. If this API returns false, the web part should not open popup on initial render. Some web parts that open popups during render are the document embed web part that pops up the file picker on initial render, embedded video web part that pops up the PropertyPane on initial render. |
|`context`     | `public` | [`IWebPartContext`](../../sp-webpart-base.api/interface/iwebpartcontext.md) | _Read-only._ This property is a pointer to the web part context. |
|`dataVersion`     | `public` | [`Version`](../../sp-core-library.api/class/version.md) | _Read-only._ The value of this property is stored in the serialized data of the web part to allow developers to manage versioning of their web part. The default version is 1.0 |
|`description`     | `public` | `string` | _Read-only._ Description of the WebPart |
|`disableReactivePropertyChanges`     | `public` | `boolean` | _Read-only._ This property is used to change the web part's PropertyPane interaction from Reactive to NonReactive. The default behaviour is Reactive. Where, Reactive implies that changes made in the PropertyPane are transmitted to the web part instantly and the user can see instant updates. This helps the page creator get instant feedback and decide if they should keep the new configuration changes or not. NonReactive implies that the configuraiton changes are transmitted to the web part only after 'Apply' PropertyPane button is clicked. |
|`displayMode`     | `public` | [`DisplayMode`](../../sp-core-library.api/enum/displaymode.md) | _Read-only._ This property is the current display mode of the web part. |
|`domElement`     | `public` | `HTMLElement` | _Read-only._ This property is a pointer to the root DOM element of the web part. This is a DIV element and contains the whole DOM subtree of the web part. |
|`isRenderAsync`     | `public` | `boolean` | _Read-only._ Indicates whether the web part is rendering in Async mode. Default value is false. If the web part overrides this field to return true, then it needs to call renderCompleted API after the web part rendering is complete. |
|`previewImageUrl`     | `public` | `string `,` undefined` | This property points to the preview image for the web part. The base implementation returns undefined. Web parts that want to provide a valid preview image url need to override this API. The preview image url can be used to create a preview of the web part or of the page on which the web part is present. |
|`properties`     | `public` | `TProperties` | _Read-only._ This property is the pointer to the custom property bag of the web part. |
|`propertiesMetadata`     | `public` | [`IWebPartPropertiesMetadata `](../../sp-webpart-base.api/interface/iwebpartpropertiesmetadata.md),` undefined` | _Read-only._ This property defines metadata for the web part property bag. The metadata can help SharePoint understand the content of the properties better and perform relevant services on the data. |
|`renderedFromPersistedData`     | `public` | `boolean` | _Read-only._ This property indicates whether the web part was rendered from the persisted data (serialized state from the last time that the web part was saved) or not. Example: When web part is added for the first time using toolbox then the value is false. |
|`renderedOnce`     | `public` | `boolean` | _Read-only._ This property indicates whether the web part has been rendered once or not. After the first time rendering, the value of this property is always true. Till a full re-render of the web part happens. |
|`title`     | `public` | `string` | _Read-only._ Title of the WebPart |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`clearError()`](clearerror-baseclientsidewebpart.md)     | `protected` | `void` | This API should be used to clear the error message from the web part display area. |
|[`getPropertyPaneConfiguration()`](getpropertypaneconfiguration-baseclientsidewebpart.md)     | `protected` | [`IPropertyPaneConfiguration`](../../sp-webpart-base.api/interface/ipropertypaneconfiguration.md) | This API is used to ger the configuration to build the property pane for the web part. If the web part wants to use the PropertyPane for configuration, this API needs to be overridden and the web part needs to return the configuration for the PropertyPane. |
|[`onAfterDeserialize(deserializedObject,dataVersion)`](onafterdeserialize-baseclientsidewebpart.md)     | `protected` | `TProperties` | This API is called after the web part is deserialized to an object, right before the property bag is populated. The default implementation is a no-op. A web part developer can override this API if the deserialized object does not fully reflect the initial state of the property bag. This gives the web part developer a chance to populate the property bag right after the data is deserialized to an object. |
|[`onAfterPropertyPaneChangesApplied()`](onafterpropertypanechangesapplied-baseclientsidewebpart.md)     | `protected` | `void` | This API is invoked after the changes made on the PropertyPane are applied when the PropertyPane is used in Non-Reactive mode. This API is not invoked when the PropertyPane is used in Reactive mode. |
|[`onBeforeSerialize()`](onbeforeserialize-baseclientsidewebpart.md)     | `protected` | `void` | This API is called before the web part is serialized. The default implementation is a no-op. The serialization process serializes the web part property bag i.e. this.properties. This API gives the web part a chance to update it's property bag before the serialization happens. Some web part's may keep their state other objects or even in the DOM. If a web part needs to persist some of that state, it needs to override this API and update the web part property bag to the latest state. If a web part updates the property bag with invalid property values, those will get persisted. So that should be avoided. The web part property bag should always contain valid property values. |
|[`onDisplayModeChanged(oldDisplayMode)`](ondisplaymodechanged-baseclientsidewebpart.md)     | `protected` | `void` | This API is called when the display mode of a web part is changed. The default implementation of this API calls the web part render method to re-render the web part with the new display mode. If a web part developer does not want a full re-render to happen on display mode change, they can override this API and perform specific updates to the web part DOM to switch its display mode. |
|[`onDispose()`](ondispose-baseclientsidewebpart.md)     | `protected` | `void` | This API should be used to refresh the contents of the PropertyPane. This API is called at the end of the web part lifecycle on a page. It should be used to dispose any local resources (i.e. DOM elements) that the web part is holding onto. This API is expected to be called in scenarios like page navigation i.e. the host is transitioning from one page to another and disposes the page that is being transitioned out. |
|[`onInit()`](oninit-baseclientsidewebpart.md)     | `protected` | [`Promise`](../../web-apis.api/class/promise.md)<void> | This API should be overridden to perform long running operations e.g. data fetching from a remote service before the initial rendering of the web part. The loading indicator is displayed during the lifetime of this method. This API is called only once during the lifecycle of a web part. |
|[`onPropertyPaneConfigurationComplete()`](onpropertypaneconfigurationcomplete-baseclientsidewebpart.md)     | `protected` | `void` | This API is invoked when the configuration is completed on the PropertyPane. It's invoked in the following cases: - When the CONFIGURATION_COMPLETE_TIMEOUT((currently the value is 5 secs) elapses after the last change. - When user clicks 'x'(close) button before the CONFIGURATION_COMPLETE_TIMEOUT elapses. - When user clciks 'Apply' button before the CONFIGURATION_COMPLETE_TIMEOUT elapses. - When the user switches web parts then the current web part gets this event. |
|[`onPropertyPaneConfigurationStart()`](onpropertypaneconfigurationstart-baseclientsidewebpart.md)     | `protected` | `void` | This API is invoked when the configuration starts on the PropertyPane. It's invoked in the following cases: - When the PropertyPane is opened. - When the user switches web parts then the new web part gets this event. |
|[`onPropertyPaneFieldChanged(propertyPath,oldValue,newValue)`](onpropertypanefieldchanged-baseclientsidewebpart.md)     | `protected` | `void` | This API is invoked after updating the new value of the property in the property bag when the PropertyPane is being used in Reactive mode. |
|[`onPropertyPaneRendered()`](onpropertypanerendered-baseclientsidewebpart.md)     | `protected` | `void` | This API is invoked when the PropertyPane is rendered. From framework standpoint, we do not want to allow this event handler to be passed in, and trigger it. This api should be deprecated and then removed as part of refactoring. |
|[`render()`](render-baseclientsidewebpart.md)     | `protected` | `void` | This API is called to render the web part. There is no base implementation of this API and the web part is required to override this API. |
|[`renderCompleted()`](rendercompleted-baseclientsidewebpart.md)     | `protected` | `void` | This API should be called by web parts that perform Async rendering. Those web part are required to override the isRenderAsync API and return true. One such example is web parts that render content in an IFrame. The web part initiates the IFrame rendering in the render() API but the actual rendering is complete only after the iframe loading completes. |
|[`renderError(error)`](rendererror-baseclientsidewebpart.md)     | `protected` | `void` | This API should be used to render an error message in the web part display area. Also logs the error message using the trace logger. |





