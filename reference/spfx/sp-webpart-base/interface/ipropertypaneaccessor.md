# IPropertyPaneAccessor interface







Web part context property pane accessor interface. Provides some most commonly used utilities to access the property pane.







## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`isPropertyPaneOpen()`](ispropertypaneopen-ipropertypaneaccessor.md)      | `boolean` | Returns true if the PropertyPane is open. |
|[`isRenderedByWebPart()`](isrenderedbywebpart-ipropertypaneaccessor.md)      | `boolean` | Indicates whether the PropertyPane was initially opened by the web part. For example, if the web part calls this.context.propertyPane.open() then the property would be true, whereas if the property pane was opened by the host, then the value will be false. |
|[`open()`](open-ipropertypaneaccessor.md)      | `void` | This API should be used to open the PropertyPane to help configure the web part. |
|[`refresh()`](refresh-ipropertypaneaccessor.md)      | `void` | This API should be used to invoke the PropertyPane to help configure the web part. This operation only works when the PropertyPane is already open for the currently active web part. If the PropertyPane is opened for another web part, calling the refresh API will have no impact. |




