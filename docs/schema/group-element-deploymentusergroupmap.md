---
title: "Group Element (DeploymentUserGroupMap)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e63f9c59-018f-4438-a861-f0d3db3b8e7f
description: "Last modified: March 09, 2015"
---

# Group Element (DeploymentUserGroupMap)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents an instance of a deployment group (**DeploymentGroup**) object for generating the group map (UserGroup.xml) file exported to the content migration package.

## Definition

```XML
DECLARATION
<xs:element 
    name="Group" 
    type="DeploymentGroup" 
    minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<Groups>
    <Group>
           <Member />
        Id="xs:string"
        Name="xs:string"
        Owner="xs:string"
        OwnerIsUser="xs:boolean"
        Description="xs:string"
        OnlyAllowMembersViewMembership="xs:boolean"
        AllowMembersEditMembership="xs:boolean"
        AllowRequestToJoinLeave="xs:boolean"
        AutoAcceptRequestToJoinLeave="xs:boolean"
        RequestToJoinLeaveEmailSetting="xs:string"
    </Group>
</Groups>

```

## Type

**DeploymentGroup**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Id** <br/> |xs:string  <br/> |Required. Identifier of the deployment group.  <br/> |
|**Name** <br/> |xs:string  <br/> |Required. Name of the deployment group.  <br/> |
|**Owner** <br/> |xs:string  <br/> |Required. Owner of the deployment group.  <br/> |
|**OwnerIsUser**  <br/> |xs:boolean  <br/> |Required. Specifies whether the owner of the deployment group is also a user; **true** if the owner is also a user.  <br/> |
|**Description** <br/> |xs:string  <br/> |Optional. Description of the deployment group.  <br/> |
|**OnlyAllowMembersViewMembership** <br/> |xs:boolean  <br/> |Optional. Specifies whether only members of the deployment group are able to view the list of deployment group members; **true** if viewing membership is restricted to group members.  <br/> |
|**AllowMembersEditMembership** <br/> |xs:boolean  <br/> |Optional. Specifies whether deployment group members can edit the list of group members; **true** if group members can edit the membership list.  <br/> |
|**AllowRequestToJoinLeave** <br/> |xs:boolean  <br/> |Optional. Specifies whether the deployment group accepts requests to join or leave the deployment group: **true** if the group accepts such requests.  <br/> |
|**AutoAcceptRequestToJoinLeave** <br/> |xs:boolean  <br/> |Optional. Specifies whether the deployment group automatically accepts requests to join or leave the deployment group; **true** if the group automatically accepts such requests.  <br/> |
|**RequestToJoinLeaveEmailSetting** <br/> |xs:string  <br/> |Optional. Provides the e-mail address to which users can send requests to join or leave the deployment group.  <br/> |
   
### Child elements

[Member Element (DeploymentUserGroupMap)](member-element-deploymentusergroupmap.md)
   
### Parent elements

[Groups Element (DeploymentUserGroupMap)](groups-element-deploymentusergroupmap.md)
   
## See also

- [DeploymentUserGroupMap Schema](deploymentusergroupmap-schema.md)

