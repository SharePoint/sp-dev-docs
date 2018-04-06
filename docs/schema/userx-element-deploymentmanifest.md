---
title: "UserX Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: ac4e829e-699c-4856-87a3-a3c534edd861
description: "Last modified: March 09, 2015"
---

# UserX Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents incremental changes to an [SPUser](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPUser.aspx) object defintion during an incremental deployment. 
  
```
DECLARATION
<xs:element name="UserX" type="DeploymentUserX" />
USAGE
<SPObject>
        <UserX
                Operation="SecurityModificationType"
                Id="xs:string"
                Name="xs:string"
                Login="xs:string"
                Email="xs:string"
                SystemId="xs:string"
                IsDomainGroup="xs:boolean"
                IsSiteAdmin="xs:boolean"
                IsDeleted="xs:boolean"
        />
</SPObject>

```

## Type

 **DeploymentUserX** (based on [SPUser](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPUser.aspx) ) 
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Email** <br/> |xs:string  <br/> |Optional. Provides the e-mail address of the user.  <br/> |
|**Id** <br/> |xs:string  <br/> |Required. Provides the member ID for the user.  <br/> |
|**IsDeleted** <br/> |xs:boolean  <br/> |Optional.Specifies whether the user has been deleted.  <br/> |
|**IsDomainGroup** <br/> |xs:boolean  <br/> |Optional. Specifies whether the user is a domain group; **true** if the user is a domain group, otherwise **false**.  <br/> |
|**IsSiteAdmin** <br/> |xs:boolean  <br/> |Optional. Specifies whether the user is a site collection administrator; **true** if the user is a site collection administrator, otherwise **false**.  <br/> |
|**Login** <br/> |xs:string  <br/> |Optional. Provides the user name of the user.  <br/> |
|**Name** <br/> |xs:string  <br/> |Required. Provides the display name of the user.  <br/> |
|**Operation** <br/> |[SecurityModificationType Simple Type (DeploymentManifest)](securitymodificationtype-simple-type-deploymentmanifest.md) <br/> |Required. Enumeration type that provides values to specify which security modifications are allowed.  <br/> |
|**SystemId** <br/> |xs:string  <br/> |Optional.  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)|
   
## See also

#### Reference

[SPUser](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPUser.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

