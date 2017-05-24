# onBeforeSerialize()




This API is called before the web part is serialized. The default implementation is a no-op. A web part developer can override this API when the web part's state is not fully reflected in the property bag i.e. this.properties. This gives the web part developer a chance to update the property bag right before serialization.

**Signature:** _@virtual protected onBeforeSerialize(): void;_

**Returns**: `void`





#### Parameters
None


