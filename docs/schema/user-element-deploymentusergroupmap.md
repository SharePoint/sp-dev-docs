---
title: "User Element (DeploymentUserGroupMap)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 16571086-f2bc-49f5-8dd8-d2ce064de700
description: "Last modified: March 09, 2015"
---

# User Element (DeploymentUserGroupMap)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents an instance of a deployment user ( **DeploymentUser**) object included in the user group map (UserGroup.xml) file for export to the content migration package.
  
```
DECLARATION
<xs:element 
    name="User" 
    type="DeploymentUser" 
    minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<Users>
    <User
        Id="xs:string"
        Name="xs:string"
        Login="xs:string"
        Email="xs:string"
        IsDomainGroup="xs:boolean"
        IsSiteAdmin="xs:boolean"
        SystemId="xs:string"
        IsDeleted="xs:boolean"
    />
</Users>

```

## Type

 **DeploymentUser**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Id** <br/> |xs:string  <br/> |Required. Identifier of the user.  <br/> |
|**Name** <br/> |xs:string  <br/> |Required. Name of the user.  <br/> |
|**Login** <br/> |xs:string  <br/> |Required. Login name for the user.  <br/> |
|**Email** <br/> |xs:string  <br/> |Optional. E-mail address for the user.  <br/> |
|**IsDomainGroup** <br/> |xs:boolean  <br/> |Optional. Specifies whether the user identity represents a domain group; **true** if the user is a domain group.  <br/> |
|**IsSiteAdmin** <br/> |xs:boolean  <br/> |Optional. Specifies whether the user is a Microsoft SharePoint Foundation site administrator; **true** if the user is a site administrator.  <br/> |
|**SystemId** <br/> |xs:string  <br/> |Optional. Represents the value of the Active Directory SID, which is converted to a base64 data type by using the [ToBase64String](frlrfSystemConvertClassToBase64StringTopic) method. Note that functionality provided by the **SPExport** type does not validate the data that is passed through the **SystemId** attribute.  <br/> |
|**IsDeleted** <br/> |xs:boolean  <br/> |Optional. Specifies whether the user has been deleted; **true** if the user has been deleted.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[Users Element (DeploymentUserGroupMap)](users-element-deploymentusergroupmap.md)|
   
## See also



[DeploymentUserGroupMap Schema](deploymentusergroupmap-schema.md)

