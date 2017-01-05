# IODataUser interface







Represents an OData SP.User object. For more information about this object see the MSDN documentation here: https://msdn.microsoft.com/en-us/library/office/jj860569.aspx




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`Email`      | `string` | Example: "someone@example.com" |
|`Id`      | `number` |  |
|`IsSiteAdmin`      | `boolean` | Boolean value that specifies whether the user is a site collection administrator. |
|`LoginName`      | `string` | Example: "i:0#.w|domain\user" |
|`PrincipalType`      | `number` | This enumeration has a FlagsAttribute attribute that allows a bitwise combination of its member values. None: 0 User: 1 DistributionList: 2 SecurityGroup: 4 SharePointGroup: 8 All: 15 |
|`Title`      | `string` | Example: "DOMAIN\user" |
|`UserId`      | `IODataUserId` | Gets the information of the user that contains the user's name identifier and the issuer of the user's name identifier. |






