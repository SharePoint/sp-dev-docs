---
title: "GroupX Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 3a227232-a224-4c30-b7b5-ce722f1f0eb9
description: "Last modified: March 09, 2015"
---

# GroupX Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a top-level Windows SharePoint Services 3.0 deployment group object.
  
```
DECLARATION
<xs:element name="GroupX" type="DeploymentGroupX" />
USAGE
<SPObject>
        <GroupX
                Operation="SecurityModificationType"
                Id="xs:string"
                Name="xs:string"
                OwnerLogin="xs:string"
                OwnerIsUser="xs:boolean"
                Description="xs:string"
                UserId="xs:string"
                UserLogin="xs:string"
                RequestToJoinLeaveEmailSetting="xs:string"
                OnlyAllowMembersViewMembership="xs:boolean"
                AllowRequestToJoinLeave="xs:boolean"
                AutoAcceptRequestToJoinLeave="xs:boolean"
        />
</SPObject>

```

## Type

 **DeploymentGroupX**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Operation** <br/> |[SecurityModificationType Simple Type (DeploymentManifest)](securitymodificationtype-simple-type-deploymentmanifest.md) <br/> |Required. The security modification operation associated with the group.  <br/> |
|**Id** <br/> |xs:string  <br/> |Required. Identifier of the group.  <br/> |
|**Name** <br/> |xs:string  <br/> |Required. Name of the group.  <br/> |
|**OwnerLogin** <br/> |xs:string  <br/> |Optional. Login information for the group owner.  <br/> |
|**OwnerIsUser** <br/> |xs:boolean  <br/> |Optional. Specifies whether the owner is the current user; **true** if the owner is the user.  <br/> |
|**Description** <br/> |xs:string  <br/> |Optional. Description of the deployment group.  <br/> |
|**UserId** <br/> |xs:string  <br/> |Optional. Identifier of the current user.  <br/> |
|**UserLogin** <br/> |xs:string  <br/> |Optional. Login information for the current user.  <br/> |
|**RequestToJoinLeaveEmailSetting** <br/> |xs:string  <br/> |Optional.  <br/> |
|**OnlyAllowMembersViewMembership** <br/> |xs:boolean  <br/> |Optional. Specifies whether only group members can view the list of deployment group members; **true** if only group members can view the list.  <br/> |
|**AllowRequestToJoinLeave** <br/> |xs:boolean  <br/> |Optional. Specifies whether users can request to join or leave the deployment group; **true** if users can request to join or leave the group..  <br/> |
|**AutoAcceptRequestToJoinLeave** <br/> |xs:boolean  <br/> |Optional. Specifies whether requests to join or leave the deployment group are automatically accepted; **true** if requests are automatically accepted.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)
   
## See also



[DeploymentManifest Schema](deploymentmanifest-schema.md)

