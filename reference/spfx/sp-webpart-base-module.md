# sp-webpart-base package

SharePoint Framework support for building web parts

A web part is a reusable visual object that a page author can add to their content, and customize using a property pane. Examples of web parts include an embedded video player, a map, a group calendar, a chart, etc. The sp-webpart-base package defines the APIs used by developers to create a custom web part.


## Classes

| Class	   |  Description |
|:-------------|:---------------|
| [`BaseClientSideWebPart`](./sp-webpart-base/class/baseclientsidewebpart.md)     | This abstract class implements the the base functionality for a client side web part. Every client side web part needs to inherit from this class. Along with the base functionality, this class provides some APIs that can be used by the web part. These APIs fall in two catagories. The first category of APIs provide data and functionality. Example, the web part context (i.e. this.context). This API should be used to access contextual data relevant to this web part instance. The second category of APIs provide a base implementation for the web part lifecycle and can be overridden for an updated implementation. The render() API is the only API that is mandatory to be implemented/overridden by a web part. All other life cycle APIs have a base implementation and can be overridden based on the needs of the web part. Please refer to the documentation of the individual APIs to make the right decision. |



## Interfaces

| Interface	   |  Description |
|:-------------|:---------------|
| [`IClientSideWebPartStatusRenderer`](./sp-webpart-base/interface/iclientsidewebpartstatusrenderer.md)   | Interface to be implemented by a component that should display the loading indicator and error messages for a webpart.  |
| [`IPlaceholderSpinnerProps`](./sp-webpart-base/interface/iplaceholderspinnerprops.md)   | Interface for properties used to display the loading spinner in the web part display area.  |
| [`IPropertyPaneAccessor`](./sp-webpart-base/interface/ipropertypaneaccessor.md)   | Web part context property pane accessor interface. Provides some most commonly used utilities to access the property pane.  |
| [`IPropertyPaneButtonProps`](./sp-webpart-base/interface/ipropertypanebuttonprops.md)   | PropertyPane button props.  |
| [`IPropertyPaneCheckboxProps`](./sp-webpart-base/interface/ipropertypanecheckboxprops.md)   | PropertyPane CheckBox component props.  |
| [`IPropertyPaneChoiceGroupOption`](./sp-webpart-base/interface/ipropertypanechoicegroupoption.md)   | PropertyPane ChoiceGroup option props.  |
| [`IPropertyPaneChoiceGroupOptionIconProps`](./sp-webpart-base/interface/ipropertypanechoicegroupoptioniconprops.md)   | PropertyPane ChoiceGroup icon props.  |
| [`IPropertyPaneChoiceGroupProps`](./sp-webpart-base/interface/ipropertypanechoicegroupprops.md)   | PropertyPane ChoiceGroup props.  |
| [`IPropertyPaneConfiguration`](./sp-webpart-base/interface/ipropertypaneconfiguration.md)   | Web part configuration settings  |
| [`IPropertyPaneCustomFieldProps`](./sp-webpart-base/interface/ipropertypanecustomfieldprops.md)   | PropertyPane CustomPropertyField props.  |
| [`IPropertyPaneDropdownOption`](./sp-webpart-base/interface/ipropertypanedropdownoption.md)   | PropertyPane drop down options.  |
| [`IPropertyPaneDropdownProps`](./sp-webpart-base/interface/ipropertypanedropdownprops.md)   | PropertyPane drop down component props.  |
| [`IPropertyPaneField`](./sp-webpart-base/interface/ipropertypanefield.md)   | PropertyPane field.  |
| [`IPropertyPaneGroup`](./sp-webpart-base/interface/ipropertypanegroup.md)   | PropertyPane group. Group is part of the PropertyPanePage.  |
| [`IPropertyPaneLabelProps`](./sp-webpart-base/interface/ipropertypanelabelprops.md)   | PropertyPaneLabel component props.  |
| [`IPropertyPaneLinkProps`](./sp-webpart-base/interface/ipropertypanelinkprops.md)   | PropertyPaneLink component props.  |
| [`IPropertyPanePage`](./sp-webpart-base/interface/ipropertypanepage.md)   | PropertyPanePage interface.  |
| [`IPropertyPanePageHeader`](./sp-webpart-base/interface/ipropertypanepageheader.md)   | PropertyPane header. This header remains same for all the pages.  |
| [`IPropertyPaneSliderProps`](./sp-webpart-base/interface/ipropertypanesliderprops.md)   | PropertyPaneSliderProps component props.  |
| [`IPropertyPaneTextFieldProps`](./sp-webpart-base/interface/ipropertypanetextfieldprops.md)   | PropertyPaneTextField component props.  |
| [`IPropertyPaneToggleProps`](./sp-webpart-base/interface/ipropertypanetoggleprops.md)   | PropertyPaneToggle component props.  |
| [`ISerializedServerProcessedData`](./sp-webpart-base/interface/iserializedserverprocesseddata.md)   | Contains collections of data that can be processed by server side services like search index and link fixup  |
| [`ISerializedWebPartData`](./sp-webpart-base/interface/iserializedwebpartdata.md)   | This structure represents the part of the serialized state of a web part which is controlled by the web part. It is extended by IWebPartData which contains additional data added by the framework to the serialized data.  |
| [`IWebPartContext`](./sp-webpart-base/interface/iwebpartcontext.md)   | The base context interface for client-side web parts.  |
| [`IWebPartData`](./sp-webpart-base/interface/iwebpartdata.md)   | This structure represents the serialized state of a web part. When the serialize() API is called on a web part, the output should be this structure. The structure of the 'properties' field is owned by the web part and is specific to the web part. Each web part can decide the set of properties it wants to serialialize.  |
| [`IWebPartPropertiesMetadata`](./sp-webpart-base/interface/iwebpartpropertiesmetadata.md)   | This structure is used to define metadata for web part propeties as a map of string to IWebPartPropertyMetadata The key should be a json path to the property in web part propeties. The json path supports the following operators: - Dot . for selecting object members e.g. person.name - Brackets [] for selecting array items e.g. person.photoURLs[0] - Bracketed asterisk [*] for array elements wildcard e.g. person.websites[*]. You can make combinations of these operators e.g. person.websites[*].url Important Note: Only one wildcard per path is supported. Example: Let's assume we have a web part with properties that have the following schema: { title: string; person: { name: string; bio: string; photoURLs: string[]; websites: { title: string; url: string; }[] } } We can define the metadata for the desired properties as following: { 'person.bio': { isRichContent: true }, 'person.photoURLs[*]': { isImageSource: true }, 'person.websites[*].url': { isLink: true } } This will make SharePoint servers aware of the content of your properties and run services such as search indexing, link fix-up, etc on the data. In case any of the values needs to update by these services, e.g link fix-up, the web part property bag is automatically updated.  |



## Functions

| Function	   | Returns | Description |
|:-------------|:------|:---------------|
| [`PropertyPaneButton(targetProperty,properties)`](./sp-webpart-base/function/propertypanebutton.md) |[`IPropertyPaneField`](./../sp-webpart-base/interface/ipropertypanefield.md)<[`IPropertyPaneButtonProps`](./../sp-webpart-base/interface/ipropertypanebuttonprops.md)>  | Helper method to create a Button on the PropertyPane.  |
| [`PropertyPaneCheckbox(targetProperty,properties)`](./sp-webpart-base/function/propertypanecheckbox.md) |[`IPropertyPaneField`](./../sp-webpart-base/interface/ipropertypanefield.md)<[`IPropertyPaneCheckboxProps`](./../sp-webpart-base/interface/ipropertypanecheckboxprops.md)>  | Helper method to create a Checkbox on the PropertyPane.  |
| [`PropertyPaneChoiceGroup(targetProperty,properties)`](./sp-webpart-base/function/propertypanechoicegroup.md) |[`IPropertyPaneField`](./../sp-webpart-base/interface/ipropertypanefield.md)<[`IPropertyPaneChoiceGroupProps`](./../sp-webpart-base/interface/ipropertypanechoicegroupprops.md)>  | Helper method to create a Choice Group on the PropertyPane.  |
| [`PropertyPaneCustomField(targetProperty,properties)`](./sp-webpart-base/function/propertypanecustomfield.md) |[`IPropertyPaneField`](./../sp-webpart-base/interface/ipropertypanefield.md)<[`IPropertyPaneCustomFieldProps`](./../sp-webpart-base/interface/ipropertypanecustomfieldprops.md)>  | Helper method to create a custom field on the PropertyPane. The purpose of the custom field is to help the web part developer to add a custom control to the PropertyPane. The PropertyPane supports a host of inbuilt field types. While this list meets the demands of most web parts, but there are exceptional cases when web parts have special needs and need a special control. The custom field helps fill that gap.  |
| [`PropertyPaneDropdown(targetProperty,properties)`](./sp-webpart-base/function/propertypanedropdown.md) |[`IPropertyPaneField`](./../sp-webpart-base/interface/ipropertypanefield.md)<[`IPropertyPaneDropdownProps`](./../sp-webpart-base/interface/ipropertypanedropdownprops.md)>  | Helper method to create a Dropdown on the PropertyPane.  |
| [`PropertyPaneHorizontalRule(properties)`](./sp-webpart-base/function/propertypanehorizontalrule.md) |[`IPropertyPaneField`](./../sp-webpart-base/interface/ipropertypanefield.md)<void>  | Helper method to create a Horizontal Rule on the PropertyPane.  |
| [`PropertyPaneLabel(targetProperty,properties)`](./sp-webpart-base/function/propertypanelabel.md) |[`IPropertyPaneField`](./../sp-webpart-base/interface/ipropertypanefield.md)<[`IPropertyPaneLabelProps`](./../sp-webpart-base/interface/ipropertypanelabelprops.md)>  | Helper method to create a Label on the PropertyPane.  |
| [`PropertyPaneLink(targetProperty,properties)`](./sp-webpart-base/function/propertypanelink.md) |[`IPropertyPaneField`](./../sp-webpart-base/interface/ipropertypanefield.md)<[`IPropertyPaneLinkProps`](./../sp-webpart-base/interface/ipropertypanelinkprops.md)>  | Helper method to create a Link on the PropertyPane.  |
| [`PropertyPaneSlider(targetProperty,properties)`](./sp-webpart-base/function/propertypaneslider.md) |[`IPropertyPaneField`](./../sp-webpart-base/interface/ipropertypanefield.md)<[`IPropertyPaneSliderProps`](./../sp-webpart-base/interface/ipropertypanesliderprops.md)>  | Helper method to create a Slider on the PropertyPane.  |
| [`PropertyPaneTextField(targetProperty,properties)`](./sp-webpart-base/function/propertypanetextfield.md) |[`IPropertyPaneField`](./../sp-webpart-base/interface/ipropertypanefield.md)<[`IPropertyPaneTextFieldProps`](./../sp-webpart-base/interface/ipropertypanetextfieldprops.md)>  | Helper method to create a TextField on the PropertyPane.  |
| [`PropertyPaneToggle(targetProperty,properties)`](./sp-webpart-base/function/propertypanetoggle.md) |[`IPropertyPaneField`](./../sp-webpart-base/interface/ipropertypanefield.md)<[`IPropertyPaneToggleProps`](./../sp-webpart-base/interface/ipropertypanetoggleprops.md)>  | Helper method to create a Toggle on the PropertyPane.  |


## Enumerations

| Enumeration	   | Description|
|:-----------|:------------|
|[`PropertyPaneButtonType`](./sp-webpart-base/enum/propertypanebuttontype.md)    | Enum for all the supported button types. |
|[`PropertyPaneFieldType`](./sp-webpart-base/enum/propertypanefieldtype.md)    | Enum for all the supported PropertyPane field types. Names should be consistent with those in office-ui-fabric-react, be careful to get letter casing correct. |




