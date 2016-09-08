# sp-client-preview external module


## Classes

| Class	   |  Description |
|:-------------|:---------------|
| [BaseClientSideWebPart](baseclientsidewebpart.md)     | This abstract class implements the the base functionality for a client side web part |
| [MockWebPartContext](mockwebpartcontext.md)     |  |



## Interfaces

| Class	   |  Description |
|:-------------|:---------------|
| [IClientSideWebPartStatusRenderer](iclientsidewebpartstatusrenderer.md)   |   |
| [IHtmlProperties](ihtmlproperties.md)   | Structure of the data that a webpart developer can return on the onBeforeSerialize() API  |
| [IOdataList](iodatalist.md)   | Represents an OData SP  |
| [IOdataListItem](iodatalistitem.md)   | Represents an OData SP  |
| [IOdataUser](iodatauser.md)   | Represents an OData SP  |
| [IOdataUserId](iodatauserid.md)   | Represents an OData SP  |
| [IPropertyPaneButtonProps](ipropertypanebuttonprops.md)   |   |
| [IPropertyPaneCheckboxProps](ipropertypanecheckboxprops.md)   |   |
| [IPropertyPaneChoiceGroupOption](ipropertypanechoicegroupoption.md)   |   |
| [IPropertyPaneChoiceGroupProps](ipropertypanechoicegroupprops.md)   |   |
| [IPropertyPaneCustomFieldProps](ipropertypanecustomfieldprops.md)   |   |
| [IPropertyPaneData](ipropertypanedata.md)   | Web part - PropertyPane data contract  |
| [IPropertyPaneDropdownOption](ipropertypanedropdownoption.md)   |   |
| [IPropertyPaneDropdownProps](ipropertypanedropdownprops.md)   |   |
| [IPropertyPaneField](ipropertypanefield.md)   |   |
| [IPropertyPaneGroup](ipropertypanegroup.md)   | PropertyPane group  |
| [IPropertyPaneLabelProps](ipropertypanelabelprops.md)   |   |
| [IPropertyPaneLinkProps](ipropertypanelinkprops.md)   |   |
| [IPropertyPanePage](ipropertypanepage.md)   | PropertyPanePage interface  |
| [IPropertyPanePageHeader](ipropertypanepageheader.md)   | PropertyPane header  |
| [IPropertyPaneSettings](ipropertypanesettings.md)   | Web part configuration settings  |
| [IPropertyPaneSliderProps](ipropertypanesliderprops.md)   |   |
| [IPropertyPaneTextFieldProps](ipropertypanetextfieldprops.md)   |   |
| [IPropertyPaneToggleProps](ipropertypanetoggleprops.md)   |   |
| [IWebPartConfigurationEventCallback](iwebpartconfigurationeventcallback.md)   | Configuration event callback  |
| [IWebPartContext](iwebpartcontext.md)   | Web part context interface  |
| [IWebPartData](iwebpartdata.md)   |   |
| [IWebPartHost](iwebparthost.md)   | A web part host is a component,control or a page that hosts client side web parts  |



## Functions

| Function	   | Returns | Description |
|:-------------|:------|:---------------|
| [combineURLPaths](combineurlpaths~vm409.md) |``string` `   | Combines any number of URL paths  |
| [getPathNameFromAbsoluteUrl](getpathnamefromabsoluteurl~lxlu9.md) |``string` `   | Get's the path name from an absolute url  |
| [PropertyPaneButton](propertypanebutton~gfp89.md) |`[`IPropertyPaneField<IPropertyPaneButtonProps>`](ipropertypanefield.md) `   | Helper method to create a Button on the PropertyPane  |
| [PropertyPaneCheckbox](propertypanecheckbox~v0849.md) |`[`IPropertyPaneField<IPropertyPaneCheckboxProps>`](ipropertypanefield.md) `   | Helper method to create a Checkbox on the PropertyPane  |
| [PropertyPaneChoiceGroup](propertypanechoicegroup~jui09.md) |`[`IPropertyPaneField<IPropertyPaneChoiceGroupProps>`](ipropertypanefield.md) `   | Helper method to create a Choice Group on the PropertyPane  |
| [PropertyPaneCustomField](propertypanecustomfield~qzds9.md) |`[`IPropertyPaneField<IPropertyPaneCustomFieldProps>`](ipropertypanefield.md) `   | Helper method to create a Choice Group on the PropertyPane  |
| [PropertyPaneDropdown](propertypanedropdown~ro4g9.md) |`[`IPropertyPaneField<IPropertyPaneDropdownProps>`](ipropertypanefield.md) `   | Helper method to create a Dropdown on the PropertyPane  |
| [PropertyPaneHorizontalRule](propertypanehorizontalrule~c9a89.md) |`[`IPropertyPaneField<void>`](ipropertypanefield.md) `   | Helper method to create a Horizontal Rule on the PropertyPane  |
| [PropertyPaneLabel](propertypanelabel~lvog9.md) |`[`IPropertyPaneField<IPropertyPaneLabelProps>`](ipropertypanefield.md) `   | Helper method to create a Label on the PropertyPane  |
| [PropertyPaneLink](propertypanelink~juxg9.md) |`[`IPropertyPaneField<IPropertyPaneLinkProps>`](ipropertypanefield.md) `   | Helper method to create a Link on the PropertyPane  |
| [PropertyPaneSlider](propertypaneslider~bm7g9.md) |`[`IPropertyPaneField<IPropertyPaneSliderProps>`](ipropertypanefield.md) `   | Helper method to create a Slider on the PropertyPane  |
| [PropertyPaneTextField](propertypanetextfield~kc9c9.md) |`[`IPropertyPaneField<IPropertyPaneTextFieldProps>`](ipropertypanefield.md) `   | Helper method to create a TextField on the PropertyPane  |
| [PropertyPaneToggle](propertypanetoggle~deny9.md) |`[`IPropertyPaneField<IPropertyPaneToggleProps>`](ipropertypanefield.md) `   | Helper method to create a Toggle on the PropertyPane  |


### Enumerations

| Enumeration	   | Description|
|:-----------|:------------|
|[IPropertyPaneFieldType](ipropertypanefieldtype.md)    |  |
|[PropertyPaneButtonType](propertypanebuttontype.md)    |  |
|[WebPartConfigurationEvent](webpartconfigurationevent.md)    |  |




