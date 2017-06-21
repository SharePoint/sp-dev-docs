# IODataUserCustomAction interface







Represents an OData SP.UserCustomAction object. For more information about this object see the MSDN documentation here: https://msdn.microsoft.com/en-us/library/office/dn531432.aspx#bk_UserCustomAction




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`ClientSideComponentId`      | `string` | The unique identifier of the client-side component defined with SharePoint Framework_This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._ |
|`ClientSideComponentProperties`      | `string` | Custom initialization properties for the client-side component._This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._ |
|`CommandUIExtension`      | `string` | Gets or sets a value that specifies an implementation specific XML fragment that determines user interface properties of the custom action. |
|`Description`      | `string` | Gets or sets the description of the custom action. |
|`Group`      | `string` | Gets or sets a value that specifies an implementation-specific value that determines the position of the custom action in the page. |
|`Id`      | `string` | Gets a value that specifies the identifier (GUID) of the custom action. Example: "48309f28-53aa-43ed-b113-625120e5af6f" |
|`ImageUrl`      | `string` | Gets or sets the URL of the image associated with the custom action. |
|`Location`      | `string` | Gets or sets the location of the custom action. |
|`RegistrationId`      | `string` | Gets or sets the value that specifies the identifier of the object associated with the custom action. |
|`RegistrationType`      | `number` | Gets or sets the value that specifies the type of object associated with the custom action. |
|`Rights`      | [`IODataBasePermission`](../../sp-odata-types.api/interface/iodatabasepermission.md) | Gets or sets the value that specifies the permissions needed for the custom action. |
|`Scope`      | `number` | Gets a value that specifies the scope of the custom action. |
|`ScriptBlock`      | `string` | Gets or sets the value that specifies the ECMAScript to be executed when the custom action is performed. |
|`ScriptSrc`      | `string` | Gets or sets a value that specifies the URI of a file which contains the ECMAScript to execute on the page. |
|`Sequence`      | `number` | Gets or sets the value that specifies an implementation-specific value that determines the order of the custom action that appears on the page. |
|`Title`      | `string` | Gets or sets the display title of the custom action. |
|`Url`      | `string` | Gets or sets the URL, URI, or ECMAScript (JScript, JavaScript) function associated with the action. |
|`VersionOfUserCustomAction`      | `string` | Gets a value that specifies an implementation specific version identifier. |






