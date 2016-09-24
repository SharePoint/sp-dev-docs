# sp-client-preview external module



## Classes

| Class	   |  Description |
|:-------------|:---------------|
| [`BaseClientSideWebPart`](./sp-client-preview/baseclientsidewebpart.md)     | This abstract class implements the the base functionality for a client side web part. Every client side web part  needs to inherit from this class. Along with the base functionality, this class provides some APIs that can be  used by the web part. These APIs fall in two catagories.    The first category of APIs provide data and functionality. Example, the web part context (i.e. this.context). This  API should be used to access contextual data relevant to this web part instance.    The second category of APIs provide a base implementation for the web part lifecycle and can be overridden for an  updated implementation. The render() API is the only API that is mandatory to be implemented/overridden by a web  part. All other life cycle APIs have a base implementation and can be overridden based on the needs of the web part.  Please refer to the documentation of the individual APIs to make the right decision. |
| [`MockWebPartContext`](./sp-client-preview/mockwebpartcontext.md)     |  |



## Interfaces

| Interface	   |  Description |
|:-------------|:---------------|
| [`IClientSideWebPartStatusRenderer`](./sp-client-preview/iclientsidewebpartstatusrenderer.md)   |   |
| [`IHtmlProperties`](./sp-client-preview/ihtmlproperties.md)   | Structure of the data that a webpart developer can return on the onBeforeSerialize() API.  The outcome contains 3 kay/value dictionaries for properties that need to be search indexed.  Both keys and values are expected to be strings and will be HTML encoded during serialization.    {  searchableProperties: { 'prop1': 'value_of_prop1' },  linkProperties: { 'prop2': 'http://www.contoso.com/page1.aspx' },  imageLinkPropertes: { 'prop3': 'http://www.contoso.com/imag.png' }  }    This input would get translated to the following HTML string.    "<div data-sp-prop-name='prop1'>value1</div>  link data-sp-prop-name='prop2' href='http://www.contoso.com/page1.aspx'>  img data-sp-prop-name='prop2' href='http://www.contoso.com/image.png'>"    |
| [`IOdataList`](./sp-client-preview/iodatalist.md)   | Represents an OData SP.List object. For more information about this object  see the MSDN documentation here:  https://msdn.microsoft.com/en-us/library/office/jj860569.aspx  |
| [`IOdataListItem`](./sp-client-preview/iodatalistitem.md)   | Represents an OData SP.ListItem object. For more information about this object  see the MSDN documentation here:  https://msdn.microsoft.com/en-us/library/office/jj860569.aspx  |
| [`IOdataUser`](./sp-client-preview/iodatauser.md)   | Represents an OData SP.User object. For more information about this object  see the MSDN documentation here:  https://msdn.microsoft.com/en-us/library/office/jj860569.aspx  |
| [`IOdataUserId`](./sp-client-preview/iodatauserid.md)   | Represents an OData SP.UserId object. For more information about this object  see the MSDN documentation here:  https://msdn.microsoft.com/en-us/library/office/jj860569.aspx  |
| [`IPropertyPaneButtonProps`](./sp-client-preview/ipropertypanebuttonprops.md)   |   |
| [`IPropertyPaneCheckboxProps`](./sp-client-preview/ipropertypanecheckboxprops.md)   |   |
| [`IPropertyPaneChoiceGroupOption`](./sp-client-preview/ipropertypanechoicegroupoption.md)   |   |
| [`IPropertyPaneChoiceGroupProps`](./sp-client-preview/ipropertypanechoicegroupprops.md)   |   |
| [`IPropertyPaneCustomFieldProps`](./sp-client-preview/ipropertypanecustomfieldprops.md)   |   |
| [`IPropertyPaneData`](./sp-client-preview/ipropertypanedata.md)   | Web part - PropertyPane data contract.  |
| [`IPropertyPaneDropdownOption`](./sp-client-preview/ipropertypanedropdownoption.md)   |   |
| [`IPropertyPaneDropdownProps`](./sp-client-preview/ipropertypanedropdownprops.md)   |   |
| [`IPropertyPaneField`](./sp-client-preview/ipropertypanefield.md)   |   |
| [`IPropertyPaneGroup`](./sp-client-preview/ipropertypanegroup.md)   | PropertyPane group. Group is part of the PropertyPanePage.  |
| [`IPropertyPaneLabelProps`](./sp-client-preview/ipropertypanelabelprops.md)   |   |
| [`IPropertyPaneLinkProps`](./sp-client-preview/ipropertypanelinkprops.md)   |   |
| [`IPropertyPanePage`](./sp-client-preview/ipropertypanepage.md)   | PropertyPanePage interface.  |
| [`IPropertyPanePageHeader`](./sp-client-preview/ipropertypanepageheader.md)   | PropertyPane header.  This header remains same for all the pages.  |
| [`IPropertyPaneSettings`](./sp-client-preview/ipropertypanesettings.md)   | Web part configuration settings  |
| [`IPropertyPaneSliderProps`](./sp-client-preview/ipropertypanesliderprops.md)   |   |
| [`IPropertyPaneTextFieldProps`](./sp-client-preview/ipropertypanetextfieldprops.md)   |   |
| [`IPropertyPaneToggleProps`](./sp-client-preview/ipropertypanetoggleprops.md)   |   |
| [`IWebPartConfigurationEventCallback`](./sp-client-preview/iwebpartconfigurationeventcallback.md)   | Configuration event callback  |
| [`IWebPartContext`](./sp-client-preview/iwebpartcontext.md)   | Web part context interface.  |
| [`IWebPartData`](./sp-client-preview/iwebpartdata.md)   |   |
| [`IWebPartHost`](./sp-client-preview/iwebparthost.md)   | A web part host is a component,control or a page that hosts client side web parts.  The web part infrastructure provides many features inbuilt e.g. an HttpClient to make  server requests and the SPPageContext. The porpose of this interface is not to replicate  those feature. This interface outlines the services and features where there needs to be  a direct interaction between the host and the web part infrastructure. This interface also  outlines some services where the web part host may want to override the default  implementations provided by the infrastructure. Let us discuss some examples:    - APIs like setDirty, webPartConfigurationEventCallback help the web part infrastucture  communicate the fact that some web part is in a dirty state or web part communication  events to the host.    - In future we expect that this interface will be used to provide services where the host  might want to override the default implemenations. e.g.  - the web part status rendering service. The default implementation of this service  provides an office fabric spinny. But a certain host could easily want to show a  different spinny.    - The event aggregation service. Currently the web part manager hosts a single event  event aggregator. But there are possibilities when a page can have multiple hosts  and each host may want to scope its event aggregation service.  |



## Functions

| Function	   | Returns | Description |
|:-------------|:------|:---------------|
| [`combineURLPaths(...url)`](./sp-client-preview/combineurlpaths-jcms9.md) |`string`  | Combines any number of URL paths.  |
| [`getPathNameFromAbsoluteUrl(url)`](./sp-client-preview/getpathnamefromabsoluteurl-uobc9.md) |`string`  | Get's the path name from an absolute url.    |
| [`PropertyPaneButton(targetProperty,properties)`](./sp-client-preview/propertypanebutton-1guo9.md) |[`IPropertyPaneField`](./sp-client-preview/ipropertypanefield.md)<[`IPropertyPaneButtonProps`](./sp-client-preview/ipropertypanebuttonprops.md)>  | Helper method to create a Button on the PropertyPane.  |
| [`PropertyPaneCheckbox(targetProperty,properties)`](./sp-client-preview/propertypanecheckbox-tnjq9.md) |[`IPropertyPaneField`](./sp-client-preview/ipropertypanefield.md)<[`IPropertyPaneCheckboxProps`](./sp-client-preview/ipropertypanecheckboxprops.md)>  | Helper method to create a Checkbox on the PropertyPane.  |
| [`PropertyPaneChoiceGroup(targetProperty,properties)`](./sp-client-preview/propertypanechoicegroup-2m0w9.md) |[`IPropertyPaneField`](./sp-client-preview/ipropertypanefield.md)<[`IPropertyPaneChoiceGroupProps`](./sp-client-preview/ipropertypanechoicegroupprops.md)>  | Helper method to create a Choice Group on the PropertyPane.  |
| [`PropertyPaneCustomField(targetProperty,properties)`](./sp-client-preview/propertypanecustomfield-xr2i9.md) |[`IPropertyPaneField`](./sp-client-preview/ipropertypanefield.md)<[`IPropertyPaneCustomFieldProps`](./sp-client-preview/ipropertypanecustomfieldprops.md)>  | Helper method to create a Choice Group on the PropertyPane.  |
| [`PropertyPaneDropdown(targetProperty,properties)`](./sp-client-preview/propertypanedropdown-edlq9.md) |[`IPropertyPaneField`](./sp-client-preview/ipropertypanefield.md)<[`IPropertyPaneDropdownProps`](./sp-client-preview/ipropertypanedropdownprops.md)>  | Helper method to create a Dropdown on the PropertyPane.  |
| [`PropertyPaneHorizontalRule()`](./sp-client-preview/propertypanehorizontalrule-vuly9.md) |[`IPropertyPaneField`](./sp-client-preview/ipropertypanefield.md)<void>  | Helper method to create a Horizontal Rule on the PropertyPane.  |
| [`PropertyPaneLabel(targetProperty,properties)`](./sp-client-preview/propertypanelabel-9upq9.md) |[`IPropertyPaneField`](./sp-client-preview/ipropertypanefield.md)<[`IPropertyPaneLabelProps`](./sp-client-preview/ipropertypanelabelprops.md)>  | Helper method to create a Label on the PropertyPane.  |
| [`PropertyPaneLink(targetProperty,properties)`](./sp-client-preview/propertypanelink-7ses9.md) |[`IPropertyPaneField`](./sp-client-preview/ipropertypanefield.md)<[`IPropertyPaneLinkProps`](./sp-client-preview/ipropertypanelinkprops.md)>  | Helper method to create a Link on the PropertyPane.  |
| [`PropertyPaneSlider(targetProperty,properties)`](./sp-client-preview/propertypaneslider-gqcs9.md) |[`IPropertyPaneField`](./sp-client-preview/ipropertypanefield.md)<[`IPropertyPaneSliderProps`](./sp-client-preview/ipropertypanesliderprops.md)>  | Helper method to create a Slider on the PropertyPane.  |
| [`PropertyPaneTextField(targetProperty,properties)`](./sp-client-preview/propertypanetextfield-zv7c9.md) |[`IPropertyPaneField`](./sp-client-preview/ipropertypanefield.md)<[`IPropertyPaneTextFieldProps`](./sp-client-preview/ipropertypanetextfieldprops.md)>  | Helper method to create a TextField on the PropertyPane.  |
| [`PropertyPaneToggle(targetProperty,properties)`](./sp-client-preview/propertypanetoggle-3vb09.md) |[`IPropertyPaneField`](./sp-client-preview/ipropertypanefield.md)<[`IPropertyPaneToggleProps`](./sp-client-preview/ipropertypanetoggleprops.md)>  | Helper method to create a Toggle on the PropertyPane.  |


## Enumerations

| Enumeration	   | Description|
|:-----------|:------------|
|[`IPropertyPaneFieldType`](./sp-client-preview/ipropertypanefieldtype.md)    | Sample IPropertypanefieldtype description |
|[`PropertyPaneButtonType`](./sp-client-preview/propertypanebuttontype.md)    | Sample PropertyPaneButtonType description |
|[`WebPartConfigurationEvent`](./sp-client-preview/webpartconfigurationevent.md)    | Sample WebPartConfigurationEvent description |




