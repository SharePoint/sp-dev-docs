


## Classes

| Class	   |  Description |
|:-------------|:---------------|
| [BaseClientSideWebPart](./sp-client-preview/baseclientsidewebpart.md)     | This abstract class implements the the base functionality for a client side web part |
| [MockWebPartContext](./sp-client-preview/mockwebpartcontext.md)     |  |



## Interfaces

| Interface	   |  Description |
|:-------------|:---------------|
| [IClientSideWebPartStatusRenderer](./sp-client-preview/iclientsidewebpartstatusrenderer.md)   |   |
| [IHtmlProperties](./sp-client-preview/ihtmlproperties.md)   | Structure of the data that a webpart developer can return on the onBeforeSerialize() API  |
| [IOdataList](./sp-client-preview/iodatalist.md)   | Represents an OData SP  |
| [IOdataListItem](./sp-client-preview/iodatalistitem.md)   | Represents an OData SP  |
| [IOdataUser](./sp-client-preview/iodatauser.md)   | Represents an OData SP  |
| [IOdataUserId](./sp-client-preview/iodatauserid.md)   | Represents an OData SP  |
| [IPropertyPaneButtonProps](./sp-client-preview/ipropertypanebuttonprops.md)   |   |
| [IPropertyPaneCheckboxProps](./sp-client-preview/ipropertypanecheckboxprops.md)   |   |
| [IPropertyPaneChoiceGroupOption](./sp-client-preview/ipropertypanechoicegroupoption.md)   |   |
| [IPropertyPaneChoiceGroupProps](./sp-client-preview/ipropertypanechoicegroupprops.md)   |   |
| [IPropertyPaneCustomFieldProps](./sp-client-preview/ipropertypanecustomfieldprops.md)   |   |
| [IPropertyPaneData](./sp-client-preview/ipropertypanedata.md)   | Web part - PropertyPane data contract  |
| [IPropertyPaneDropdownOption](./sp-client-preview/ipropertypanedropdownoption.md)   |   |
| [IPropertyPaneDropdownProps](./sp-client-preview/ipropertypanedropdownprops.md)   |   |
| [IPropertyPaneField](./sp-client-preview/ipropertypanefield.md)   |   |
| [IPropertyPaneGroup](./sp-client-preview/ipropertypanegroup.md)   | PropertyPane group  |
| [IPropertyPaneLabelProps](./sp-client-preview/ipropertypanelabelprops.md)   |   |
| [IPropertyPaneLinkProps](./sp-client-preview/ipropertypanelinkprops.md)   |   |
| [IPropertyPanePage](./sp-client-preview/ipropertypanepage.md)   | PropertyPanePage interface  |
| [IPropertyPanePageHeader](./sp-client-preview/ipropertypanepageheader.md)   | PropertyPane header  |
| [IPropertyPaneSettings](./sp-client-preview/ipropertypanesettings.md)   | Web part configuration settings  |
| [IPropertyPaneSliderProps](./sp-client-preview/ipropertypanesliderprops.md)   |   |
| [IPropertyPaneTextFieldProps](./sp-client-preview/ipropertypanetextfieldprops.md)   |   |
| [IPropertyPaneToggleProps](./sp-client-preview/ipropertypanetoggleprops.md)   |   |
| [IWebPartConfigurationEventCallback](./sp-client-preview/iwebpartconfigurationeventcallback.md)   | Configuration event callback  |
| [IWebPartContext](./sp-client-preview/iwebpartcontext.md)   | Web part context interface  |
| [IWebPartData](./sp-client-preview/iwebpartdata.md)   |   |
| [IWebPartHost](./sp-client-preview/iwebparthost.md)   | A web part host is a component,control or a page that hosts client side web parts  |



## Functions

| Function	   | Returns | Description |
|:-------------|:------|:---------------|
| [combineURLPaths](./sp-client-preview/combineurlpaths-jcms9.md) |`string`  | Combines any number of URL paths  |
| [getPathNameFromAbsoluteUrl](./sp-client-preview/getpathnamefromabsoluteurl-uobc9.md) |`string`  | Get's the path name from an absolute url  |
| [PropertyPaneButton](./sp-client-preview/propertypanebutton-1guo9.md) |[`IPropertyPaneField<IPropertyPaneButtonProps>`](../sp-client-preview/ipropertypanefield.md)  | Helper method to create a Button on the PropertyPane  |
| [PropertyPaneCheckbox](./sp-client-preview/propertypanecheckbox-tnjq9.md) |[`IPropertyPaneField<IPropertyPaneCheckboxProps>`](../sp-client-preview/ipropertypanefield.md)  | Helper method to create a Checkbox on the PropertyPane  |
| [PropertyPaneChoiceGroup](./sp-client-preview/propertypanechoicegroup-2m0w9.md) |[`IPropertyPaneField<IPropertyPaneChoiceGroupProps>`](../sp-client-preview/ipropertypanefield.md)  | Helper method to create a Choice Group on the PropertyPane  |
| [PropertyPaneCustomField](./sp-client-preview/propertypanecustomfield-xr2i9.md) |[`IPropertyPaneField<IPropertyPaneCustomFieldProps>`](../sp-client-preview/ipropertypanefield.md)  | Helper method to create a Choice Group on the PropertyPane  |
| [PropertyPaneDropdown](./sp-client-preview/propertypanedropdown-edlq9.md) |[`IPropertyPaneField<IPropertyPaneDropdownProps>`](../sp-client-preview/ipropertypanefield.md)  | Helper method to create a Dropdown on the PropertyPane  |
| [PropertyPaneHorizontalRule](./sp-client-preview/propertypanehorizontalrule-vuly9.md) |[`IPropertyPaneField<void>`](../sp-client-preview/ipropertypanefield.md)  | Helper method to create a Horizontal Rule on the PropertyPane  |
| [PropertyPaneLabel](./sp-client-preview/propertypanelabel-9upq9.md) |[`IPropertyPaneField<IPropertyPaneLabelProps>`](../sp-client-preview/ipropertypanefield.md)  | Helper method to create a Label on the PropertyPane  |
| [PropertyPaneLink](./sp-client-preview/propertypanelink-7ses9.md) |[`IPropertyPaneField<IPropertyPaneLinkProps>`](../sp-client-preview/ipropertypanefield.md)  | Helper method to create a Link on the PropertyPane  |
| [PropertyPaneSlider](./sp-client-preview/propertypaneslider-gqcs9.md) |[`IPropertyPaneField<IPropertyPaneSliderProps>`](../sp-client-preview/ipropertypanefield.md)  | Helper method to create a Slider on the PropertyPane  |
| [PropertyPaneTextField](./sp-client-preview/propertypanetextfield-zv7c9.md) |[`IPropertyPaneField<IPropertyPaneTextFieldProps>`](../sp-client-preview/ipropertypanefield.md)  | Helper method to create a TextField on the PropertyPane  |
| [PropertyPaneToggle](./sp-client-preview/propertypanetoggle-3vb09.md) |[`IPropertyPaneField<IPropertyPaneToggleProps>`](../sp-client-preview/ipropertypanefield.md)  | Helper method to create a Toggle on the PropertyPane  |


## Enumerations

| Enumeration	   | Description|
|:-----------|:------------|
|[IPropertyPaneFieldType](./sp-client-preview/ipropertypanefieldtype.md)    | Sample IPropertypanefieldtype description |
|[PropertyPaneButtonType](./sp-client-preview/propertypanebuttontype.md)    | Sample PropertyPaneButtonType description |
|[WebPartConfigurationEvent](./sp-client-preview/webpartconfigurationevent.md)    | Sample WebPartConfigurationEvent description |




