# onBeforeSerialize()

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

