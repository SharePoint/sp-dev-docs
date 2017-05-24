# IWebPartData interface







This structure represents the serialized state of a web part. When the serialize() API is called on a web part, the output should be this structure. The structure of the 'properties' field is owned by the web part and is specific to the web part. Each web part can decide the set of properties it wants to serialialize.




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`description`      | `string` | Definition: web part description. Usage: display the description of the web part. Required: no Type: string Supported values: string with the description. Example: "Text" |
|`id`      | `string` | Definition: universally unique web part Type id. Usage: uniquely identify a web part. Required: yes Type: GUID Supported values: any GUID Example: "dbef608d-3ad5-4f8f-b139-d916f2f0a294" |
|`instanceId`      | `string` | Definition: universally unique instance id of the web part. A web part can have multiple instances on a page. This id is expected to be universally unique accross time and page boundaries. how used: used by the framework to uniquely identify an instance of a web part. mandatory: yes type: string supported values: a unique string. Could be GUID or other uniquely identifiable formats. example: ["dbef608d-3ad5-4f8f-b139-d916f2f0a294"] experimental: yes |
|`title`      | `string` | Definition: web part title. Usage: display the name of the web part in the toolbox, web part gallery and the page. Required: yes Type: string Supported values: string less than 100 characters Example: "Text" |






