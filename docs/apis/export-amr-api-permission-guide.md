---
title: "SharePoint Migration Export (Asynchronous Metadata Read) API permission guide"
description: This article targets ISVs and any third-party vendors/developers who are developing and maintaining a migration tool and explains the permission details and options in the export API.
ms.date: 08/25/2023
ms.author: jhendr
author: JoanneHendrickson
manager: Serdars
audience: ITPro
ms.subservice: migration-tool
ms.topic: article
ms.localizationpriority: high
ms.collection:
  - SPMigration
  - m365-collaboration
---

# AMR Export Permission Guide

The Asynchronous Metadata Read (AMR) API export permission lets you export SharePoint Online metadata permission info using a new export option. This guide will show you how to use this option and what changes have been introduced to the export result.

## How to use AMR export permission option

For both CSOM and RESTFul calls, add the below option to enable/disable AMR export permission:

- For CSOM, when building `AsyncReadOptions` object, set `IncludePermission` property to `true` or `false`.
  - If you cannot use `IncludePermission` property, please update your CSOM nuget package to the latest version.
- For RESTFul, add `IncludePermission` key to the request JSON payload's `readOptions` section, and set it to `true` or `false`.
  - For example: `{..., "readOptions":{...,"IncludePermission":true,...}...}`

## What changes have been introduced to the export result

The new `IncludePermission=true` option will involve an additional tag called `<RoleAssignments>` into **Manifest.xml** file in the export result, which includes all distinguished permission info for each exported SPO object with property `ScopeId`, like below:

```xml
<...>
<RoleAssignments>
    <RoleAssignment ScopeId="08501058-995b-4fc6-b908-66da16e6bb52" ...>
        <Assignment RoleId="1073741825" PrincipalId="5" />
        <Assignment RoleId="1073741826" PrincipalId="6" />
        ...
    </RoleAssignment>
</RoleAssignments>
<...>
```

The `RoleAssignments` tag is a list of `RoleAssignment` tags, each `RoleAssignment` tag represents a unique permission scope from exported SPO objects, identified by `ScopeId`. Each `RoleAssignment` tag contains multiple `Assignment` tags, representing an entity within that specific unique permission scope each, such as a user, a group, etc., with a principal ID.

In the meantime, all involved entities will be listed in **UserGroup.xml** file in the export result, to help further user resolution.

Here is an example of **Manifest.xml** file and **UserGroup.xml** with `IncludePermission=true` option:

```xml
<!-- Manifest.xml -->
<...>
<SPObject Id="e85f2a94-f760-4bb4-9460-dde1cabc2fd4" ObjectType="SPFile" ParentId="2aba6aee-eb13-4379-b374-8fddc71e7d1a" ParentWebId="7206fc09-e4af-48b3-8730-ed7321396d7a" Url="/SampleDocLib/Forms/AllItems.aspx">
    <File Url="SampleDocLib/Forms/AllItems.aspx" Id="e85f2a94-f760-4bb4-9460-dde1cabc2fd4" ParentWebId="7206fc09-e4af-48b3-8730-ed7321396d7a" ParentWebUrl="/" Name="AllItems.aspx" ListId="e42a303c-995d-4237-8ce7-3545c41be140" ParentId="2aba6aee-eb13-4379-b374-8fddc71e7d1a" ScopeId="08501058-995b-4fc6-b908-66da16e6bb52" TimeCreated="2023-05-11T05:19:48" TimeLastModified="2023-05-11T05:19:48" Version="1.0" FileSize="2763" Level="1" IsGhosted="true" SetupPath="pages\viewpage.aspx" SetupPathVersion="15" SetupPathUser="12" />
</SPObject>
<...>
<RoleAssignments>
    <RoleAssignment ScopeId="08501058-995b-4fc6-b908-66da16e6bb52" RoleDefWebId="7206fc09-e4af-48b3-8730-ed7321396d7a" RoleDefWebUrl="" ObjectId="e42a303c-995d-4237-8ce7-3545c41be140" ObjectType="1" ObjectUrl="SampleDocLib" AnonymousPermMask="0">
        <Assignment RoleId="1073741825" PrincipalId="5" />
        <Assignment RoleId="1073741825" PrincipalId="15" />
        <Assignment RoleId="1073741825" PrincipalId="28" />
        <Assignment RoleId="1073741826" PrincipalId="4" />
        <Assignment RoleId="1073741829" PrincipalId="3" />
        <Assignment RoleId="1073741830" PrincipalId="5" />
        <Assignment RoleId="1073741924" PrincipalId="13" />
        <Assignment RoleId="1073741925" PrincipalId="14" />
        <Assignment RoleId="1073741926" PrincipalId="15" />
        <Assignment RoleId="1073741927" PrincipalId="16" />
    </RoleAssignment>
    <RoleAssignment ScopeId="0b40dd84-46b8-435f-b497-e0fea7cecf1f" RoleDefWebId="7206fc09-e4af-48b3-8730-ed7321396d7a" RoleDefWebUrl="" ObjectId="92f3d976-e7bd-47fc-943f-2d3222e27402" ObjectType="2" ObjectUrl="SampleDocLib/33333333.txt" AnonymousPermMask="0">
        <Assignment RoleId="1073741829" PrincipalId="3" />
        <Assignment RoleId="1073741924" PrincipalId="13" />
        <Assignment RoleId="1073741925" PrincipalId="14" />
    </RoleAssignment>
    <RoleAssignment ScopeId="bdc32b67-53e5-4ae4-a8a9-0dbbeaa64d51" RoleDefWebId="7206fc09-e4af-48b3-8730-ed7321396d7a" RoleDefWebUrl="" ObjectId="19c768aa-b6fc-4e20-aa35-d5d5b7716625" ObjectType="2" ObjectUrl="SampleDocLib/44444444.txt" AnonymousPermMask="0">
        <Assignment RoleId="1073741825" PrincipalId="28" />
        <Assignment RoleId="1073741826" PrincipalId="4" />
        <Assignment RoleId="1073741826" PrincipalId="5" />
        <Assignment RoleId="1073741826" PrincipalId="15" />
        <Assignment RoleId="1073741826" PrincipalId="31" />
        <Assignment RoleId="1073741827" PrincipalId="25" />
        <Assignment RoleId="1073741829" PrincipalId="3" />
        <Assignment RoleId="1073741924" PrincipalId="13" />
        <Assignment RoleId="1073741925" PrincipalId="14" />
        <Assignment RoleId="1073741927" PrincipalId="16" />
        <Assignment RoleId="1073741928" PrincipalId="33" />
        <Assignment RoleId="1073741929" PrincipalId="27" />
    </RoleAssignment>
</RoleAssignments>
<...>

<!-- UserGroup.xml -->
<UserGroupMap xmlns="urn:deployment-usergroupmap-schema">
    <Users>
        <User Id="1" Name="0+.w|s-1-5-82-1817844472-4009360788-1366746990-4201194761-44825052" Login="c:0+.w|s-1-5-82-1817844472-4009360788-1366746990-4201194761-44825052" Email="" IsDomainGroup="false" IsSiteAdmin="false" SystemId="YzowKy53fHMtMS01LTgyLTE4MTc4NDQ0NzItNDAwOTM2MDc4OC0xMzY2NzQ2OTkwLTQyMDExOTQ3NjEtNDQ4MjUwNTI=" IsDeleted="true" Flags="0" />
        <User Id="6" Name="NT Service\sptimerv4" Login="i:0#.w|nt service\sptimerv4" Email="" IsDomainGroup="false" IsSiteAdmin="false" SystemId="aTowKS53fHMtMS01LTgwLTU3NTg3NTE3Mi0xOTM3ODYyNTYzLTQzMTA4MTg1My0yOTQ2MTQyMDItNjM1MTk1NTc0" IsDeleted="true" Flags="0" />
        <User Id="7" Name="37483779-f0d7-46d0-ba4f-5769451f8666" Login="c:0t.c|tenant|37483779-f0d7-46d0-ba4f-5769451f8666" Email="" IsDomainGroup="true" IsSiteAdmin="false" SystemId="YzowdC5jfHRlbmFudHwzNzQ4Mzc3OS1mMGQ3LTQ2ZDAtYmE0Zi01NzY5NDUxZjg2NjY=" IsDeleted="false" Flags="0" />
        <User Id="8" Name="4da703b0-bdeb-4c8a-ba78-75dc23b4fb64" Login="c:0t.c|tenant|4da703b0-bdeb-4c8a-ba78-75dc23b4fb64" Email="" IsDomainGroup="true" IsSiteAdmin="true" SystemId="YzowdC5jfHRlbmFudHw0ZGE3MDNiMC1iZGViLTRjOGEtYmE3OC03NWRjMjNiNGZiNjQ=" IsDeleted="false" Flags="0" />
        <User Id="9" Name="Everyone except external users" Login="c:0-.f|rolemanager|spo-grid-all-users/82abb045-250e-4186-ba83-b9295930f272" Email="" IsDomainGroup="true" IsSiteAdmin="false" SystemId="YzowLS5mfHJvbGVtYW5hZ2VyfHNwby1ncmlkLWFsbC11c2Vycy84MmFiYjA0NS0yNTBlLTQxODYtYmE4My1iOTI5NTkzMGYyNzI=" IsDeleted="false" Flags="0" />
        <User Id="10" Name="spsearch" Login="i:0#.w|nt service\spsearch" Email="" IsDomainGroup="false" IsSiteAdmin="false" SystemId="aTowKS53fHMtMS01LTgwLTg3MzgzMjg3LTIwNTQyNTcwNDktMzYwMTg3MzA3Mi00NDAxNjMwMTgtMzI3MTAyNjQ3Mg==" IsDeleted="false" Flags="0" />
        <User Id="11" Name="Everyone" Login="c:0(.s|true" Email="" IsDomainGroup="true" IsSiteAdmin="false" SystemId="YzowKC5zfHRydWU=" IsDeleted="false" Flags="0" />
        <User Id="12" Name="Tenant Admin User" Login="i:0#.f|membership|admin@oidctest.ccsctp.net" Email="" IsDomainGroup="false" IsSiteAdmin="true" SystemId="aTowaC5mfG1lbWJlcnNoaXB8MTAwM2JmZmRhYjZmODEzM0BsaXZlLmNvbQ==" IsDeleted="false" Flags="0" />
        <User Id="18" Name="OIDC User0" Login="i:0#.f|membership|user0@oidctest.ccsctp.net" Email="user1@prepspo.msolctp-int.com" IsDomainGroup="false" IsSiteAdmin="false" SystemId="aTowaC5mfG1lbWJlcnNoaXB8MTAwM2JmZmQ5ZDZmNTM0ZkBsaXZlLmNvbQ==" IsDeleted="false" Flags="0" />
        <User Id="19" Name="VM255732\vmadministrator" Login="i:0#.w|vm255732\vmadministrator" Email="" IsDomainGroup="false" IsSiteAdmin="false" SystemId="aTowKS53fHMtMS01LTIxLTM1OTMxNDMyNzQtMTE0NDIzMzMyNC0xNTI2NDU5Mzg0LTUwMA==" IsDeleted="false" MobilePhone="" Flags="0" />
        <User Id="20" Name="VM255732\vmadministrator" Login="VM255732\vmadministrator" Email="" IsDomainGroup="false" IsSiteAdmin="false" SystemId="AQUAAAAAAAUVAAAA6gMr1mydM0T46/ta9AEAAA==" IsDeleted="false" MobilePhone="" Flags="0" />
        <User Id="21" Name="VM304711\vmadmin" Login="i:0#.w|VM304711\vmadmin" Email="" IsDomainGroup="false" IsSiteAdmin="false" SystemId="aTowKS53fHMtMS01LTIxLTMwNTIyODM1ODMtMjY4MjM3MTA0Mi0xNzcyNDI0NDExLTUwMA==" IsDeleted="false" MobilePhone="" Flags="0" />
        <User Id="22" Name="VM304711\VMAdmin" Login="VM304711\VMAdmin" Email="" IsDomainGroup="false" IsSiteAdmin="false" SystemId="AQUAAAAAAAUVAAAAvybuteK74Z/bDKVp9AEAAA==" IsDeleted="false" MobilePhone="" Flags="0" />
        <User Id="23" Name="Chengjia Xu" Login="FAREAST\chexu" Email="" IsDomainGroup="false" IsSiteAdmin="false" SystemId="Uy0xLTUtMjEtMjE0Njc3MzA4NS05MDMzNjMyODUtNzE5MzQ0NzA3LTI1NzU5Nzc=" IsDeleted="true" MobilePhone="" Flags="0" />
        <User Id="24" Name="OIDC User1" Login="i:0#.f|membership|user1@oidctest.ccsctp.net" Email="user2@prepspo.msolctp-int.com" IsDomainGroup="false" IsSiteAdmin="false" SystemId="aTowaC5mfG1lbWJlcnNoaXB8MTAwMzNmZmZhYmU2Y2Y4N0BsaXZlLmNvbQ==" IsDeleted="false" Flags="0" />
        <User Id="26" Name="Guest Contributor" Login="i:0#.f|membership|urn%3aspo%3aanon#9cf6d720741da817754e9ffa57029a446da569a990c8f14b7bed073562e29bc1" Email="" IsDomainGroup="false" IsSiteAdmin="false" SystemId="aTowaC5mfG1lbWJlcnNoaXB8dXJuJTNhc3BvJTNhYW5vbiM5Y2Y2ZDcyMDc0MWRhODE3NzU0ZTlmZmE1NzAyOWE0NDZkYTU2OWE5OTBjOGYxNGI3YmVkMDczNTYyZTI5YmMx" IsDeleted="false" MobilePhone="" Flags="144" />
        <User Id="27" Name="c:0u.c|tenant|9cf6d720741da817754e9ffa57029a446da569a990c8f14b7bed073562e29bc1" Login="c:0u.c|tenant|9cf6d720741da817754e9ffa57029a446da569a990c8f14b7bed073562e29bc1" Email="" IsDomainGroup="true" IsSiteAdmin="false" SystemId="YzowdS5jfHRlbmFudHw5Y2Y2ZDcyMDc0MWRhODE3NzU0ZTlmZmE1NzAyOWE0NDZkYTU2OWE5OTBjOGYxNGI3YmVkMDczNTYyZTI5YmMx" IsDeleted="false" MobilePhone="" Flags="2176" />
        <User Id="30" Name="OIDC User2" Login="i:0#.f|membership|user2@oidctest.ccsctp.net" Email="user3@prepspo.msolctp-int.com" IsDomainGroup="false" IsSiteAdmin="false" SystemId="aTowaC5mfG1lbWJlcnNoaXB8MTAwMzNmZmZhYmU2Y2ZhMEBsaXZlLmNvbQ==" IsDeleted="false" Flags="0" />
        <User Id="32" Name="Guest Contributor" Login="i:0#.f|membership|urn%3aspo%3aanon#2900e72705fe44bf8134e1ac056d15a3b7b622733d6bc5cbe9afd245d0f7b7c5" Email="" IsDomainGroup="false" IsSiteAdmin="false" SystemId="aTowaC5mfG1lbWJlcnNoaXB8dXJuJTNhc3BvJTNhYW5vbiMyOTAwZTcyNzA1ZmU0NGJmODEzNGUxYWMwNTZkMTVhM2I3YjYyMjczM2Q2YmM1Y2JlOWFmZDI0NWQwZjdiN2M1" IsDeleted="false" MobilePhone="" Flags="144" />
        <User Id="33" Name="c:0u.c|tenant|2900e72705fe44bf8134e1ac056d15a3b7b622733d6bc5cbe9afd245d0f7b7c5" Login="c:0u.c|tenant|2900e72705fe44bf8134e1ac056d15a3b7b622733d6bc5cbe9afd245d0f7b7c5" Email="" IsDomainGroup="true" IsSiteAdmin="false" SystemId="YzowdS5jfHRlbmFudHwyOTAwZTcyNzA1ZmU0NGJmODEzNGUxYWMwNTZkMTVhM2I3YjYyMjczM2Q2YmM1Y2JlOWFmZDI0NWQwZjdiN2M1" IsDeleted="false" MobilePhone="" Flags="2176" />
    </Users>
    <Groups>
        <Group Id="3" Name="Communication site Owners" Owner="3" OwnerIsUser="false" RequestToJoinLeaveEmailSetting="">
            <Member UserId="7" />
            <Member UserId="1073741823" />
        </Group>
        <Group Id="4" Name="Communication site Visitors" Owner="3" OwnerIsUser="false" RequestToJoinLeaveEmailSetting="" />
        <Group Id="5" Name="Communication site Members" Owner="3" OwnerIsUser="false" RequestToJoinLeaveEmailSetting="" AllowMembersEditMembership="true">
            <Member UserId="9" />
        </Group>
        <Group Id="13" Name="Web Administrators (Project Web App Synchronized)" Description="Users who have Manage Microsoft SharePoint Foundation permission in Microsoft Project Web App." Owner="13" OwnerIsUser="false" OnlyAllowMembersViewMembership="true">
            <Member UserId="12" />
            <Member UserId="18" />
        </Group>
        <Group Id="14" Name="Project Managers (Project Web App Synchronized)" Description="Users who have published this project or who have Save Project permission in Microsoft Project Web App." Owner="13" OwnerIsUser="false" OnlyAllowMembersViewMembership="true" />
        <Group Id="15" Name="Team Members (Project Web App Synchronized)" Description="Users who have assignments in this project in Microsoft Project Web App." Owner="13" OwnerIsUser="false" OnlyAllowMembersViewMembership="true" />
        <Group Id="16" Name="Readers (Project Web App Synchronized)" Description="Users who have been added to this project in Microsoft Project Web App, but not assigned to tasks." Owner="13" OwnerIsUser="false" OnlyAllowMembersViewMembership="true" />
        <Group Id="17" Name="Workflow and Project Detail Pages Administrators (Project Web App Synchronized)" Description="Users who have Manage Workflow and Project Detail Pages permission in Microsoft Project Web App." Owner="13" OwnerIsUser="false" OnlyAllowMembersViewMembership="true" />
        <Group Id="25" Name="SharingLinks.19c768aa-b6fc-4e20-aa35-d5d5b7716625.AnonymousEdit.846e32c2-9f06-4102-9c3b-274dc8506796" Description="This group is for AnonymousEdit sharing links on item 'SampleDocLib/44444444.txt'" Owner="1073741823" OwnerIsUser="true" OnlyAllowMembersViewMembership="true">
            <Member UserId="18" />
            <Member UserId="24" />
        </Group>
        <Group Id="28" Name="Limited Access System Group For List e42a303c-995d-4237-8ce7-3545c41be140" Description="Limited Access System Group For List e42a303c-995d-4237-8ce7-3545c41be140" Owner="1073741823" OwnerIsUser="true" OnlyAllowMembersViewMembership="true">
            <Member UserId="18" />
            <Member UserId="24" />
            <Member UserId="27" />
            <Member UserId="30" />
            <Member UserId="33" />
        </Group>
        <Group Id="29" Name="Limited Access System Group For Web 7206fc09-e4af-48b3-8730-ed7321396d7a" Description="Limited Access System Group For Web 7206fc09-e4af-48b3-8730-ed7321396d7a" Owner="1073741823" OwnerIsUser="true" OnlyAllowMembersViewMembership="true">
            <Member UserId="18" />
            <Member UserId="24" />
            <Member UserId="27" />
            <Member UserId="30" />
            <Member UserId="33" />
        </Group>
        <Group Id="31" Name="SharingLinks.19c768aa-b6fc-4e20-aa35-d5d5b7716625.AnonymousView.1c02392c-d30e-47fc-a97f-86927acc370e" Description="This group is for AnonymousView sharing links on item 'SampleDocLib/44444444.txt'" Owner="1073741823" OwnerIsUser="true" OnlyAllowMembersViewMembership="true">
            <Member UserId="30" />
        </Group>
    </Groups>
</UserGroupMap>
```

## Option interaction between `IncludeSecurity` and `IncludePermission`

Before the `IncludePermission` option, the `IncludeSecurity` option has been already used to get a full list of all user & group information of the target site. It isn't necessary that you use the `IncludePermission` option with `IncludeSecurity` option. However, if you still want to get a full list of all user and group information of target sites with permission information, you can use `IncludePermission` option with `IncludeSecurity` option together, here are the 4 combinations of the two options with expected results:

- `IncludeSecurity=true` only: get a full list of all user & group information of the target site without permission information.
- `IncludePermission=true` only: get exported items' permission information, with a list of corresponding user & group information of exported permissions.
- `IncludeSecurity=true` + `IncludePermission=true`: get exported items' permission information, with a full list of all user & group information of the target site.
- None of them is used: get no permission, nor related user & group information.
