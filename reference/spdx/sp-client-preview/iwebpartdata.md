# IWebPartData interface










## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`htmlProperties`      | `string` | Definition: HTML markup equivalent for searchable properties and properties that need link fixup.  format: pseudo HTML  mandatory: no.  type: string  supported values: a string containing pseudo HTML.  example: "<div>searchable_property_value</div><link href='http://contoso.com/path_of_link.aspx' />"  experimental: no |
|`id`      | `string` | Definition: universally unique webpart Type id.  Usage: uniquely identify a webpart.  Required: yes  Type: GUID  Supported values: any GUID  Example: "dbef608d-3ad5-4f8f-b139-d916f2f0a294" |
|`instanceId`      | `string` | Definition: universally unique instance id of the webpart. A web part can have multiple instances on a page.  This id is expected to be universally unique accross time and page boundaries.  how used: used by the framework to uniquely identify an instance of a webpart.  mandatory: yes.  type: string  supported values: a unique string. Could be GUID or other uniquely identifiable formats.  example: ["dbef608d-3ad5-4f8f-b139-d916f2f0a294"]  experimental: yes |
|`properties`      | `any` | Definition: webpart specific properties. The individual webpart owns the definition of these properties.  how used: used by the webpart to manage its internal metadata and config data. The framework code never  touches these properties.  mandatory: yes.  type: string  supported values: any JSON stringifiable object hierarchy.  example: { 'value': 'text value' } |
|`title`      | `string` | Definition: webpart title.  Usage: display the name of the webpart in the toolbox, webpart gallery and the page.  Required: yes  Type: string  Supported values: string less than 100 characters  Example: "Text" |
|`version`      | `string` | Definition: webpart version.  Usage: versioning and evolving a webpart safely.  Required: yes  Type: string representing a semantic version (http://semver.org)  Supported values: MAJOR.MINOR.PATCH  Example: "1.0.0" |





