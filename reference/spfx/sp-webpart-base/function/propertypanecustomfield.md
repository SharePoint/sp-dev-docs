# PropertyPaneCustomField(targetProperty,properties)

> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

Helper method to create a custom field on the PropertyPane. The purpose of the custom field is to help the web part developer to add a custom control to the PropertyPane. The PropertyPane supports a host of inbuilt field types. While this list meets the demands of most web parts, but there are exceptional cases when web parts have special needs and need a special control. The custom field helps fill that gap.

**Signature:** __

**Returns**: [`IPropertyPaneField`](../../sp-webpart-base/interface/ipropertypanefield.md)<[`IPropertyPaneCustomFieldProps`](../../sp-webpart-base/interface/ipropertypanecustomfieldprops.md)>





#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `targetProperty`    |  | target property for this field. This parameter is being deprecated in future releases. |
| `properties`    | [`IPropertyPaneCustomFieldProps`](../../sp-webpart-base/interface/ipropertypanecustomfieldprops.md) | Strongly typed Custom field properties. |


