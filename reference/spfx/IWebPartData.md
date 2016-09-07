# IWebPartData interface





a webpart,the output should be this structure. The structure of the 'properties' field is owned by the 
webpart and is specific to the webpart. Each webpart can decide the set of properties it wants to 
serialialize.




### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`htmlProperties`      | `string` | Definition: HTML markup equivalent for searchable properties and properties that need link fixup |
|`id`      | `string` | Definition: universally unique webpart Type id |
|`instanceId`      | `string` | Definition: universally unique instance id of the webpart |
|`properties`      | `any` | Definition: webpart specific properties |
|`title`      | `string` | Definition: webpart title |
|`version`      | `string` | Definition: webpart version |




