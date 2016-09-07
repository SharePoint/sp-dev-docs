# sp-client-preview external module


## Classes

| Class	   |  Description |
|:-------------|:---------------|
| [BaseClientSideWebPart](BaseClientSideWebPart.md)     | This abstract class implements the the base functionality for a client side web part |
| [MockWebPartContext](MockWebPartContext.md)     |  |



## Interfaces

| Class	   |  Description |
|:-------------|:---------------|
| [IClientSideWebPartStatusRenderer](IClientSideWebPartStatusRenderer.md)   | error messages for a webpart  |
| [IHtmlProperties](IHtmlProperties.md)   | Structure of the data that a webpart developer can return on the onBeforeSerialize() API  |
| [IOdataList](IOdataList.md)   | Represents an OData SP  |
| [IOdataListItem](IOdataListItem.md)   | Represents an OData SP  |
| [IOdataUser](IOdataUser.md)   | Represents an OData SP  |
| [IOdataUserId](IOdataUserId.md)   | Represents an OData SP  |
| [IPropertyPaneButtonProps](IPropertyPaneButtonProps.md)   |   |
| [IPropertyPaneCheckboxProps](IPropertyPaneCheckboxProps.md)   |   |
| [IPropertyPaneChoiceGroupOption](IPropertyPaneChoiceGroupOption.md)   |   |
| [IPropertyPaneChoiceGroupProps](IPropertyPaneChoiceGroupProps.md)   |   |
| [IPropertyPaneCustomFieldProps](IPropertyPaneCustomFieldProps.md)   |   |
| [IPropertyPaneData](IPropertyPaneData.md)   | Web part - PropertyPane data contract  |
| [IPropertyPaneDropdownOption](IPropertyPaneDropdownOption.md)   |   |
| [IPropertyPaneDropdownProps](IPropertyPaneDropdownProps.md)   |   |
| [IPropertyPaneField](IPropertyPaneField.md)   |   |
| [IPropertyPaneGroup](IPropertyPaneGroup.md)   | PropertyPane group  |
| [IPropertyPaneLabelProps](IPropertyPaneLabelProps.md)   |   |
| [IPropertyPaneLinkProps](IPropertyPaneLinkProps.md)   |   |
| [IPropertyPanePage](IPropertyPanePage.md)   | PropertyPanePage interface  |
| [IPropertyPanePageHeader](IPropertyPanePageHeader.md)   | PropertyPane header  |
| [IPropertyPaneSettings](IPropertyPaneSettings.md)   | Web part configuration settings  |
| [IPropertyPaneSliderProps](IPropertyPaneSliderProps.md)   |   |
| [IPropertyPaneTextFieldProps](IPropertyPaneTextFieldProps.md)   |   |
| [IPropertyPaneToggleProps](IPropertyPaneToggleProps.md)   |   |
| [IWebPartConfigurationEventCallback](IWebPartConfigurationEventCallback.md)   | Configuration event callback  |
| [IWebPartContext](IWebPartContext.md)   | Web part context interface  |
| [IWebPartData](IWebPartData.md)   | a webpart,the output should be this structure  |
| [IWebPartHost](IWebPartHost.md)   | A web part host is a component,control or a page that hosts client side web parts  |



## Functions

| Function	   | Returns | Description |
|:-------------|:------|:---------------|
| [combineURLPaths](combineURLPaths~vm409.md) |``string` `   | Combines any number of URL paths  |
| [getPathNameFromAbsoluteUrl](getPathNameFromAbsoluteUrl~LxLU9.md) |``string` `   | Get's the path name from an absolute url  |
| [PropertyPaneButton](PropertyPaneButton~gfP89.md) |`[`IPropertyPaneField<IPropertyPaneButtonProps>`](IPropertyPaneField.md) `   | Helper method to create a Button on the PropertyPane  |
| [PropertyPaneCheckbox](PropertyPaneCheckbox~V0849.md) |`[`IPropertyPaneField<IPropertyPaneCheckboxProps>`](IPropertyPaneField.md) `   | Helper method to create a Checkbox on the PropertyPane  |
| [PropertyPaneChoiceGroup](PropertyPaneChoiceGroup~jUI09.md) |`[`IPropertyPaneField<IPropertyPaneChoiceGroupProps>`](IPropertyPaneField.md) `   | Helper method to create a Choice Group on the PropertyPane  |
| [PropertyPaneCustomField](PropertyPaneCustomField~QzDs9.md) |`[`IPropertyPaneField<IPropertyPaneCustomFieldProps>`](IPropertyPaneField.md) `   | Helper method to create a Choice Group on the PropertyPane  |
| [PropertyPaneDropdown](PropertyPaneDropdown~ro4g9.md) |`[`IPropertyPaneField<IPropertyPaneDropdownProps>`](IPropertyPaneField.md) `   | Helper method to create a Dropdown on the PropertyPane  |
| [PropertyPaneHorizontalRule](PropertyPaneHorizontalRule~c9a89.md) |`[`IPropertyPaneField<void>`](IPropertyPaneField.md) `   | Helper method to create a Horizontal Rule on the PropertyPane  |
| [PropertyPaneLabel](PropertyPaneLabel~lVOg9.md) |`[`IPropertyPaneField<IPropertyPaneLabelProps>`](IPropertyPaneField.md) `   | Helper method to create a Label on the PropertyPane  |
| [PropertyPaneLink](PropertyPaneLink~juxg9.md) |`[`IPropertyPaneField<IPropertyPaneLinkProps>`](IPropertyPaneField.md) `   | Helper method to create a Link on the PropertyPane  |
| [PropertyPaneSlider](PropertyPaneSlider~Bm7g9.md) |`[`IPropertyPaneField<IPropertyPaneSliderProps>`](IPropertyPaneField.md) `   | Helper method to create a Slider on the PropertyPane  |
| [PropertyPaneTextField](PropertyPaneTextField~Kc9c9.md) |`[`IPropertyPaneField<IPropertyPaneTextFieldProps>`](IPropertyPaneField.md) `   | Helper method to create a TextField on the PropertyPane  |
| [PropertyPaneToggle](PropertyPaneToggle~dEnY9.md) |`[`IPropertyPaneField<IPropertyPaneToggleProps>`](IPropertyPaneField.md) `   | Helper method to create a Toggle on the PropertyPane  |


### Enumerations

| Enumeration	   | Description|
|:-----------|:------------|
|[IPropertyPaneFieldType](IPropertyPaneFieldType.md)    |  |
|[PropertyPaneButtonType](PropertyPaneButtonType.md)    |  |
|[WebPartConfigurationEvent](WebPartConfigurationEvent.md)    |  |




