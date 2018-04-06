---
title: "List Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c9fd975a-7133-4d0a-a3a2-9072ef08feee
description: "Last modified: March 09, 2015"
---

# List Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a Windows SharePoint Services 3.0 list ([SPList](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPList.aspx) ) object. 
  
```
DECLARATION
<xs:element name="List" type="SPList" />
USAGE
<SPObject
        <List
                Id="Guid"
                Title="xs:string"
                RootFolderId="Guid"
                RootFolderUrl="xs:string"
                ParentWebId="Guid"
                ParentWebUrl="xs:string"
                BaseType="SPBaseType"
                BaseTemplate="SPListTemplateType"
                TemplateFeatureId="Guid"
                Description="xs:string"
                Direction="xs:string"
                DocumentTemplateId="Guid"
                EventSinkAssembly="xs:string"
                SendToLocationName="xs:string"
                SendToLocationUrl="xs:string"
                EventSinkClass="xs:string"
                EventSinkData="xs:string"
                ImageUrl="xs:string"
                AllowDeletion="xs:boolean"
                AllowMultiResponses="xs:boolean"
                EnableAttachments="xs:boolean"
                EnableModeration="xs:boolean"
                EnableVersioning="xs:boolean"
                EnableMinorVersions="xs:boolean"
                RequestAccessEnabled="xs:boolean"
                DraftVersionVisibility="DraftVisibilityType"
                ForceCheckout="xs:boolean"
                ExcludeFromTemplate="xs:boolean"
                Hidden="xs:boolean"
                MultipleDataList="xs:boolean"
                Ordered="xs:boolean"
                ShowUser="xs:boolean"
                Author="xs:string"
                Created="xs:dateTime"
                OnQuickLaunch="xs:boolean"
                ReadSecurity="xs:int"
                WriteSecurity="xs:int"
                Version="xs:int"
                MajorVersionLimit="xs:int"
                MajorWithMinorVersionsLimit="xs:int"
                EmailAlias="xs:string"
                EnableContentTypes="xs:boolean"
                EnableDeployWithDependentList="xs:boolean"
                EnableFolderCreation="xs:boolean"
                DefaultItemOpen="DefaultItemOpen"
                DefaultContentApprovalWorkflowId="Guid"
                EnableAssignToEmail="xs:boolean"
                EnableSyndication="xs:boolean"
                   <Fields />
           <ContentTypes />
           <Views />
           <Forms />
           <EventReceivers />
           <DeleteFields />
        />
/>

```

## Type

[SPList](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPList.aspx)
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**AllowDeletion** <br/> |xs:boolean  <br/> |Optional. Specifies whether the list can be deleted.  <br/> |
|**AllowMultiResponses** <br/> |xs:boolean  <br/> |Optional. Specifies whether users are allowed to make multiple responses to a survey.  <br/> |
|**Author** <br/> |xs:string  <br/> |Optional. User who created the list.  <br/> |
|**BaseTemplate** <br/> |[SPListTemplateType Simple Type (DeploymentManifest)](splisttemplatetype-simple-type-deploymentmanifest.md) <br/> |Required. Specifies a base type for instantiating list templates. Includes, but is not limited to, types enumerated in **SPListTemplateType**.  <br/> |
|**BaseType** <br/> |[SPBaseType Simple Type (DeploymentManifest)](spbasetype-simple-type-deploymentmanifest.md) <br/> |Optional. Specifies the base type for the list.  <br/> |
|**Created** <br/> |xs:dateTime  <br/> |Optional. Specifies the time and date the list was created.  <br/> |
|**DefaultContentApprovalWrokFlowId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the default content approval workflow that is associated with the list.  <br/> |
|**DefaultItemOpen** <br/> |[DefaultItemOpen Simple Type (DeploymentManifest)](defaultitemopen-simple-type-deploymentmanifest.md) <br/> |Optional. Specifies whether to open list items in a client application or in the browser.  <br/> |
|**Description** <br/> |xs:string  <br/> |Optional. Provides a description for the list.  <br/> |
|**Direction** <br/> |xs:string  <br/> |Optional. Specifies the direction of the reading order for the list. The string value " **ltr**" specifies left-to-right; the string " **rtl**" specifies either right-to-left, or that no reading order is specified.  <br/> |
|**DocumentTemplateId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the document template.  <br/> |
|**DraftVersionVisibility** <br/> |[DraftVisibilityType Simple Type (DeploymentManifest)](draftvisibilitytype-simple-type-deploymentmanifest.md) <br/> |Optional. Specifies user types that can view minor versions of document drafts within the list.  <br/> |
|**EmailAlias** <br/> |xs:string  <br/> |Optional. When e-mail notification is enabled (**EnableAssignToEmail=true**), specifies the e-mail address to use to notify the owner of an item when the item has been updated or the assignment has changed.  <br/> |
|**EnableAssignToEmail** <br/> |xs:boolean  <br/> |Optional. Specifies whether e-mail notification is enabled for the list.  <br/> |
|**EnableAttachments** <br/> |xs:boolean  <br/> |Optional. Specifies whether attachments can be added to items in the list; **true** if attachments can be added, otherwise **false**.  <br/> |
|**EnableContentTypes** <br/> |xs:boolean  <br/> |Optional.  <br/> |
|**EnableDeployWithDependentList** <br/> |xs:boolean  <br/> |Optional. Specifies whether the list can be deployed with a dependent list; **true** if the list can be deployed with a dependent list, otherwise **false**.  <br/> |
|**EnableFolderCreation** <br/> |xs:boolean  <br/> |Optional. Specifies whether folders can be created in the list; **true** if folders can be created, otherwise **false**.  <br/> |
|**EnableMinorVersions** <br/> |xs:boolean  <br/> |Optional. When versioning is enabled for a document library (**EnableVersioning=true**), specifies whether the minor versions are enabled.  <br/> |
|**EnableModeration** <br/> |xs:boolean  <br/> |Optional. Specifies whether the Content Approval feature is enabled for the list; **true** if approval feature is enabled, otherwise **false**.  <br/> |
|**EnableSyndication** <br/> |xs:boolean  <br/> |Optional. Specifies whether RSS syndication is enabled for the list.  <br/> |
|**EnableVersioning** <br/> |xs:boolean  <br/> |Optional. Specifies whether versioning is enabled for the document library; **true** if versioning is enabled, otherwise **false**.  <br/> |
|**EventSinkAssembly** <br/> |xs:string  <br/> |Optional. Strong name of a file in the global assembly cache (GAC) that provides an event handler for document library events.  <br/> |
|**EventSinkClass** <br/> |xs:string  <br/> |Optional. Fully qualified, case-sensitive name of a class that defines an event handler for document library events.  <br/> |
|**EventSinkData** <br/> |xs:string  <br/> |Optional. Arbitrary string for use by an event handler for document library events.  <br/> |
|**ExcludeFromTemplate** <br/> |xs:boolean  <br/> |Optional. Specifies whether the content of the list is included when the list is saved as a list template or when the site to which the list belongs is saved as a site template. The value is **true** if the content is excluded, otherwise **false**.  <br/> |
|**ForceCheckout** <br/> |xs:boolean  <br/> |Optional. Specifies whether Forced Checkout is enabled for the document library; **true** if forced checkout is enabled, otherwise **false**.  <br/> |
|**Hidden** <br/> |xs:boolean  <br/> |Optional. Specifies whether the list is hidden; **true** if the list is hidden, otherwise **false**.  <br/> |
|**Id** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Required. Unique identifier of the list in the database.  <br/> |
|**ImageUrl** <br/> |xs:string  <br/> |Optional. The server-relative URL for the icon that represents the list.  <br/> |
|**MajorVersionLimit** <br/> |xs:int  <br/> |Optional. For document library that uses version control with major versions only, specifies the maximum number of major versions allowed for an item.  <br/> |
|**MajorWithMinorVersionsLimit** <br/> |xs:int  <br/> |Optional. For a document library that uses version control with both major and minor versions, specifies the number of major versions allowed for an item.  <br/> |
|**MultipleDataList** <br/> |xs:boolean  <br/> |Optional. Specifies whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site.  <br/> |
|**OnQuickLaunch** <br/> |xs:boolean  <br/> |Optional. Specifies whether the list provides Quick Launch on the home page; **true** if Quick Launch is enabled, otherwise **false**.  <br/> |
|**Ordered** <br/> |xs:boolean  <br/> |Optional. Specifies whether the option to allow users to reorder items in the list is available on the Edit View page for the list; **true** if ordering is enabled, otherwise **false**.  <br/> |
|**ParentWebId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Required. Unique identifier for the parent Web site for the list.  <br/> |
|**ParentWebUrl** <br/> |xs:string  <br/> |Optional. The URL of the parent Web site for the list.  <br/> |
|**ReadSecurity** <br/> |xs:int  <br/> |Optional. Specifies the Read security setting for the list.  <br/> |
|**RequestAccessEnabled** <br/> |xs:boolean  <br/> |Optional. Specifies whether the option to allow users to request access to the list is available; **true** if requesting access is enabled, otherwise **false**.  <br/> |
|**RootFolderId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the folder that contains all of the files used in working with the list.  <br/> |
|**RootFolderUrl** <br/> |xs:string  <br/> |Required. Server-relative URL to the folder that contains files used in working with the list.  <br/> |
|**SendToLocationName** <br/> |xs:string  <br/> |Optional. File name to use when copying an item in the list to another document library.  <br/> |
|**SendToLocationUrl** <br/> |xs:string  <br/> |Optional. URL to use when copying an item in the list to another document library.  <br/> |
|**ShowUser** <br/> |xs:boolean  <br/> |Optional. Specifies whether user names are shown in the results of a survey; **true** if user names are shown, otherwise **false**.  <br/> |
|**TemplateFeatureId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of a template feature that is associated with the list.  <br/> |
|**Title** <br/> |xs:string  <br/> |Required. Display title for the list.  <br/> |
|**Version** <br/> |xs:int  <br/> |Optional. Version number of the list.  <br/> |
|**WriteSecurity** <br/> |xs:int  <br/> |Optional. Specifies the Write security setting for the list.  <br/> |
   
### Child elements

||
|:-----|
|[ContentTypes Element (DeploymentManifest)](contenttypes-element-deploymentmanifest.md) <br/> |
|[DeletedFields Element (DeploymentManifest)](deletedfields-element-deploymentmanifest.md) <br/> |
|[EventReceivers Element (DeploymentManifest - SPList)](eventreceivers-element-deploymentmanifestsplist.md) <br/> |
|[Fields Element (DeploymentManifest - SPList)](fields-element-deploymentmanifestsplist.md) <br/> |
|[Forms Element (DeploymentManifest)](forms-element-deploymentmanifest.md) <br/> |
|[Views Element (DeploymentManifest)](views-element-deploymentmanifest.md) <br/> |
   
### Parent elements

||
|:-----|
|[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)
   
## See also



[SPList](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPList.aspx)
  
[SPListTemplateType](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPListTemplateType.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

