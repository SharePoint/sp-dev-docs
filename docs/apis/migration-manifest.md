---
title: "Preparing the manifest for Migration API"
description: "This article provides in-depth information on how to use create and use manifest packages with SharePoint Migration API"
ms.date: 04/18/2024
ms.author: ranren
author: underreview
manager: dapodean
audience: ITPro
ms.subservice: migration-tool
ms.topic: article
ms.localizationpriority: high
ms.collection:
  - SPMigration
  - m365-collaboration
---

# XML manifest files

Migration API relies on XML manifest files to process the content import correctly. Create manifest files in a well-defined format. AMR API also exports metadata in this format.

## XML Validation

The package structure for Manifest files is based on a constrained version of [SharePoint Content Migration Schemas](/sharepoint/dev/schema/content-migration-schemas).

## Encoding invalid XML characters

AMR API encodes invalid XML characters in fields. Decode the attributes listed in `EncodedAttributes`.

Migration API doesn't support invalid XML character encoding.

### Example

In this example, these attributes are encoded: URL, ParentWebURL, Name, and Version.

```xml
<File Url="testlib_x002F_File_0905-1653-31240"
      Id="e72e2015-91a4-4d07-ae9a-7b6c76918d2a"
      ParentWebId="7206fc09-e4af-48b3-8730-ed7321396d7a"
      ParentWebUrl="_x002F_"
      Name="File_0905-1653-31240"
      ListItemIntId="3"
      ListId="48ea9454-9538-47ae-926d-917df80bc93e"
      ParentId="33ff2f12-c818-4c8d-8578-c6d057172fd8"
      ScopeId="385cd4d5-86da-4183-bdac-2e83da1b05fc"
      TimeCreated="2021-11-08T03:57:05"
      TimeLastModified="2021-01-17T16:01:48"
      Version="_x0031_.0"
      FileSize="1"
      Level="1"
      EncodedAttributes="Url,ParentWebUrl,Name,Version">
```

## Location

Placed all manifest files at the root level of the Azure Blob Storage Container for manifest files.

## ArchivedFiles.xml

Optional.

Used to process archived small files in batch.

### ArchivedFiles.xml Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<ArchivedFiles>
  <ArchivedFile Name="pack0.zip" Checksum="xxxxxx=">
    <File FileValue="01.dat" />
    <File FileValue="02.dat" />
    <File FileValue="03.dat" />
    <File FileValue="04.dat" />
    <File FileValue="05.dat" />
    <File FileValue="06.dat" />
 </ArchivedFile>
  <ArchivedFile Name="pack1.zip" Checksum="xxxxxx=">
    <File FileValue="07.dat" />
    <File FileValue="08.dat" />
    <File FileValue="09.dat" />
    <File FileValue="10.dat" />
    <File FileValue="11.dat" />
    <File FileValue="12.dat" />
  </ArchivedFile>
</ArchivedFiles>
```

## ExportSettings.xml

Required.

An XML file contains the export settings specified with the `SPExportSettings` and other classes. It also specifies the export settings, used in the subsequent import process at the migration target site. It also maintains a catalog of all objects exported to the migration package.

### Ignore Web Parts

Migration API checks and processes SharePoint Web Parts in certain types of files. For sources other than SharePoint Server and SharePoint Online, bypass these checks by setting `IgnoreWebParts` to `true`. This practice improves the performance of migration tasks when not migrating Web Parts.

### Specify content source

Migration API requires a `SourceType` value, containing the source of the content. It should contain a value from the following list:

#### Accepted `SourceType` values

- `AmazonS3`
- `AzureStorage`
- `Box`
- `Dropbox`
- `Egnyte`
- `FileShare`
- `GoogleCloudStorage`
- `GoogleDrive`
- `MicrosoftStream`
- `OneDrive`
- `SharePointOnline`
- `SharePointOnPremServer`
- `Other`

When declaring to `Other`, include an extra `DetailedSource` value to provide more detail on the content source information.

### ExportSettings.xml Example

```xml
<ExportSettings xmlns="urn:deployment-exportsettings-schema" SiteUrl="https://url" FileLocation="some paths" IncludeSecurity="All" SourceType="Other" DetailedSource="My special source type not in the list">
  <ExportObjects>
    <DeploymentObject Id="GUID for list" Type="List" ParentId="GUID for web" />
  </ExportObjects>
</ExportSettings>
```

## LookupListMap.xml

Optional.

An XML manifest file that maintains a simple lookup list, which records all SharePoint List Item references. Place it at the root of the Azure Blob Store Container defined by the `CreateMigrationJob`’s `azureContainerManifestUri` parameter.

Not required if the import package doesn't contain Defining Fields or Views on a List or Document Library. The omission of this file generates a warning message in the log. Include a file with a childless `root` node to avoid this warning message.

## Manifest.xml

Required.

An XML manifest file that contains the complete list of both the contents and the structure of the content package. Migration API uses this manifest file to reconstitute the source and its components.

Place all instances of the **Manifest.xml** file for a package at the root of the Azure Blob Store Container.

This manifest file is also the primary descriptor for metadata within the package, and provides the List, Folder, and Item hierarchy, along with metadata for the items including references back to users and groups defined in **UserGroupMap.xml** file.

Use more than one **Manifest.xml** if needed. The manifests are identified with different file names. Migration API locates all manifests through references in **SystemData.xml** file’s `ManifestFile` entries.

### Document Library/List ID consistency

Use consistent Web ID and Document Library ID/List ID at the source and the target location. Inconsistent Web IDs generate errors as Migration API can't find the parent web for the import operation.

Likewise, Migration API can't import items with incorrect Document Library IDs and List IDs into the target Document Library or List. Don't reuse IDs within the same site collection, to avoid Migration API importing packages to the same target site collection, regardless of the destination web.

### GUID consistency

To avoid GUID conflicts and import errors, use the same package for the same target. Importing a new package with the same content will cause problems. The package from a file share assigns GUIDs to files, folders, and list items. Keep the package from the file share as a record of the original GUIDs. Use the same GUIDs for later packages to avoid conflicts and track changes.

### Preserve content identifiers

The identifiers in the Import Packages are **explicitly** used during import to identify content. This practice preserves existing identifiers for Document Library contents.

Reference the target Web and List identifiers **explicitly**.

Migration API preserves content type identifiers, file/folder item GUIDs, and List Item integer identifiers during import. Import fails when Migration API encounters incorrect identifiers in the package.

This preservation enables successive import iterations with different packages, allowing items to move locations.

### Permission Roles

Manifest.xml contains the following Roles-related objects:

#### Roles object

Contains the list of all defined Roles on the Web.

#### Role object

Defines a Role with ID, internal permissions rights mask flags, and display information.

##### RoleId value

Defines the identifiers of the Role object.

##### PermMask value

Contains the rights mask flags.

#### RoleAssignments object

Contains the list of all unique permissions (RoleAssignment objects).

#### RoleAssignment object

Includes the list of distinct Assignment objects (if any).

##### Assignment object

Contains the actual membership of one distinct User or Group and their actual Role, where

- RoleId values map to the RoleId values of the Role objects.
- PrincipalId values map to ID values of User or Group objects respectively in **UserGroups.xml**.

#### Permissions Example

```xml
<SPObjects xmlns="urn:deployment-manifest-schema">
  …
  <SPObject Id="0b3c1b13-b260-453c-ac8d-8053a537d610" ObjectType="DeploymentRoles" ParentId="203e30e2-1139-4adf-b545-e74235f105c2" ParentWebId="203e30a2-1139-4acf-b535-e74235f105c2" ParentWebUrl="/teams/temp">
    <Roles>
      <Role RoleId="1073751825" Title="Test Role" Description="This is a test role" PermMask="206292717568" Hidden="true" RoleOrder="160" Type="1" />
      <Role RoleId="1073751826" Title="Test Role 2" Description="This is another test role" PermMask="756052856929" Hidden="false" RoleOrder="128" Type="2" />
      …
    </Roles>
  </SPObject>
  <SPObject Id="373ea0ba-107a-4a78-9563-bc642f9ab14d" ObjectType="DeploymentRoleAssignments" ParentId="203e30e2-1139-4adf-b545-e74235f105c2" ParentWebId="203e30a2-1139-4acf-b535-e74235f105c2" ParentWebUrl="/teams/temp">
    <RoleAssignments>
      <RoleAssignment ScopeId="ffcab9b9-94ef-4701-e6d9-19a370760e1e" RoleDefWebId="203e11c2-1139-4abe-b534-e74235f106c2" RoleDefWebUrl="teams/temp" ObjectId="9f743aaf-65f9-473e-0c37-37f147960560" ObjectType="1" ObjectUrl="teams/temp/IWConvertedForms" AnonymousPermMask="0" />
      <RoleAssignment ScopeId="c3f564f3-62cd-4b25-8da4-2da7722402ab" RoleDefWebId="203e30a2-1139-4acf-b535-e74255e105c2" RoleDefWebUrl="teams/temp" ObjectId="2b9b0a32-51fb-4af8-a218-c90f63fd1de4" ObjectType="1" ObjectUrl="teams/temp/Relationships List" AnonymousPermMask="0">
        <Assignment RoleId="1073751825" PrincipalId="5" />
        <Assignment RoleId="1073751825" PrincipalId="6" />
        <Assignment RoleId="1073751826" PrincipalId="4" />
        <Assignment RoleId="1073751828" PrincipalId="1" />
      </RoleAssignment>
      …
    </RoleAssignments>
  </SPObject>
  …
</SPObjects>
```

## Requirements.xml

Optional.

SharePoint Server usually generates this XML manifest file. It contains a list of deployment requirements in the form of installation requirements on the migration target, such as

- feature definitions
- template versions
- Web Part assemblies
- language packs
- and so forth.

Include no child node under the root for file shares. The omission of this file generates a warning message in the log.

## RootObjectMap.xml

Optional.

Maintains a list of mappings of secondary (dependent) objects. Migration API uses this manifest file to correctly place dependent objects.

The most common `RootObject` included is a single object of type List. The `ID` of this item should be the List `ID` of the target list, and the `ParentWebID` should match the `ID` of the parent target web containing this list in order for migration to be successful. The `ID`, `WebUrl`, and `Url` values of this object must also match the related structure laid out in the **Manifest.xml** file.

## SystemData.xml

Required.

Contains various low-level system data. It also records the number and paths of **Manifest.xml** files in the manifest package, when there are multiple manifests.

### Versions

`SchemaVersion` references to the current `Build` and `DatabaseVersion` of the target farm, currently “15.0.0.0”.

`SiteVersion` should match the target site collection `UIVersion`, currently `15`.

### Multiple Manifests

List all **Manifest.xml** files in the package in **SystemData.xml**, as `ManifestFile` entries.

### Immutable SystemObjects

List all `SystemObjects` defining dependent objects that remain immutable by Migration API.

### SystemData.xml example

This example **SystemData.xml** file shows the common objects from a file share import. Use different `ID`s for each package, and the `URL`s may be different.

```xml
<?xml version="1.0" encoding="utf-8"?>
<SystemData xmlns="urn:deployment-systemdata-schema">
  <SchemaVersion Version="15.0.0.0" Build="16.0.3111.1200" DatabaseVersion="11552" SiteVersion="15" />
  <ManifestFiles>
    <ManifestFile Name="Manifest.xml" />
  </ManifestFiles>
  <SystemObjects>
    <SystemObject Id="34321c39-3254-4bd1-b749-c99e16d1f4ab" Type="Folder" Url="/personal/username" />
    <SystemObject Id="9efb9686-baab-432d-a192-858ac34c073f" Type="Web" Url="/personal/username" />
    <SystemObject Id="e8ec714f-91a0-4c6f-9926-08328c8b3e05" Type="List" Url="/personal/username/Documents/deleteme2" />
    <SystemObject Id="a05e1f95-5712-4cc2-958c-31cf0a2cfb62" Type="List" Url="/personal/username/_catalog/users" />
  </SystemObjects>
  <RootWebOnlyLists />
</SystemData>
```

## UserGroupMap.xml

Required.

Records Users and User Security Groups for managing permissions. Migration API uses the manifest to ascertain the membership of Users and Groups, along with their roles and specific assignments. These assignments include unique permissions set at the level of the object and its offspring, unless a deeper child object overrides them.

User or Group entries aren't mandatory, but omission prevents author or security information from the population during import. Migration API generates warnings in such cases.

### User identifiers

Identify a User only once in a single package.

Manifest all Users and Groups within the exported Web(s).

#### User object

Includes the information about specific Users, including identification of a specific security principle as a domain group or not, sign-in, and the base64 encoded SystemId (SID) of the security principle.

#### Group object

Includes the information about specific Groups and the direct membership list of that Group.

Owner values on Group objects and UserId values on member objects within group objects map to other ID values of other User or Group objects respectively.

The following example shows how to manifest Users and Groups.

```xml
<UserGroupMap xmlns="urn:deployment-usergroupmap-schema">
  <Users>
    <User Id="1" Name="John Doe" Login="DOMAIN\JDoe" Email="DJoe@contoso.com"
    IsDomainGroup="false" IsSiteAdmin="true" SystemId="AQUAAAAAAAUVAAAAXSj1f9U62DVDVOAqToYSAA==" IsDeleted="false" Flags="0" />
    <User Id="2" Name="Jane Smith" Login="DOMAIN\JSmith" Email="jsmith@contoso.com"
    IsDomainGroup="false" IsSiteAdmin="true" SystemId="AQUAAAAAAAUVAAAAXSj1f9U62DVDVOAqdUwNAA==" IsDeleted="false" Flags="0" />
    …
  </Users>
  <Groups>
    <Group Id="3" Name="Temp Group" Description="A Temp Group" Owner="2" OwnerIsUser="true" OnlyAllowMembersViewMembership="true">
      <Member UserId="2" />
    </Group>
    <Group Id="4" Name="Temp Group 2" Description="Another Temp Group" Owner="2" OwnerIsUser="false" RequestToJoinLeaveEmailSetting="JSmith@contoso.com" OnlyAllowMembersViewMembership="true">
      <Member UserId="1" />
      <Member UserId="2" />
    </Group>
    …
  </Groups>
</UserGroupMap>
```

Make sure the Sign-in and SystemId values of users match the values in SharePoint.

### Deleted Users

Include an `IsDeleted` value as `true` for deleted accounts. This practice prevents lookup failures in the import process, which negatively impacts performance.

### Unresolved User identifiers

If Migration API is unable to resolve a User with the Sign-in information, and SystemId **is not** provided, Migration API replaces this User with `System Account` in the associated metadata (such as Author or Editor) in the package and generates a warning in the import logs:

```text
Failed to ensure user 'user@contoso.com'
```

If Migration API is unable to resolve a User with the Sign-in while the SystemId **is** provided, Migration API creates a new deleted User with the provided Sign-in and SystemId. Migration API uses this User with associated metadata within the package. Migration API generates a warning in the import logs:

```text
Failed to retrieve user 'user@contoso.com' attributes from the SiteUsers; falling back to passed in values
```

### Avoid non-UPN email addresses in User identifiers

The `Login` attribute of the User identifier requires a UPN. **Do not use** non-UPN email addresses. Using non-UPN email addresses causes unexpected behavior in SharePoint Online.

### Examples

The following examples show the correct and incorrect ways of using the User identifiers.

In this case, the user has the following identifiers:

- UPN: <robert@contoso.com>
- Email: <robert.downey@contoso.com>.

#### Correct example

This example manifests the User only once, with a UPN email address.

```xml
<User Id="1" Login="i:0#.f|membership|robert@contoso.com" …/>
```

#### Incorrect example

This example **incorrectly** uses a non-UPN email address and **incorrectly** includes more than one identifier for a single user.

```xml
<User Id="1" Login="i:0#.f|membership|robert@contoso.com" …/>
<User Id="2" Login="i:0#.f|membership|robert.downey@contoso.com" …/>
```

This example **incorrectly** uses a non-UPN email address.

```xml
<User Id="2" Login="i:0#.f|membership|robert.downey@contoso.com" …/>
```

## ViewFormsList.xml

Optional.

This XML manifest file maintains a list of Web Parts and tracks whether each is a view or form.

This file is optional if the Import Package doesn't contain Web Parts. The omission of this file generates a warning message in the log. Alternatively, include a manifest file with a childless `root` node to avoid the warning message.
