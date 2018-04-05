---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- feature. custom action [sharepoint 2010],custom action ID [SharePoint 2010]
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6889686e-f6e6-4da0-bfd4-099878614980
---

# Default Custom Action Locations and IDs

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The following table shows the locations, custom action group IDs, and custom action IDs that are used in the [CustomAction](customaction-element.md) element and the [CustomActionGroup](customactiongroup-element-custom-action.md) element of custom actions that are installed by default in Microsoft SharePoint Foundation.

In the table, each location value corresponds to the **Location** attribute of the [CustomAction](customaction-element.md) element. Each group ID corresponds to the **GroupId** attribute of the [CustomAction](customaction-element.md) element or to
the **Id** attribute of the [CustomActionGroup](customactiongroup-element-custom-action.md) element. Each custom action ID corresponds to the **Id** attribute of the [CustomAction](customaction-element.md) element.

You can create a Feature that implements the [HideCustomAction](hidecustomaction-element.md) element to hide any default custom action that is identified in the table.

## Menu custom action locations and group IDs

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Location</p></th>
<th align="left"><p>Custom Action Group IDs</p></th>
<th align="left"><p>Default Custom Action IDs</p></th>
<th align="left"><p>Group Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**DisplayFormToolbar**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><ul>
<li><p>**ExportEventToolbarButton** (calendars)</p></li>
<li><p>**ExportContactToolbarButton** (contacts)</p></li>
</ul></td>
<td align="left"><p>**Location** corresponds to the display form toolbar of lists.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EditControlBlock**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>**Location** corresponds to the per-item edit control block (ECB) menu.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EditFormToolbar**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>**Location** corresponds to the edit form toolbar of lists.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NewFormToolbar**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>**Location** corresponds to the new form toolbar of lists.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ViewToolbar**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>**Location** corresponds to the toolbar in list views.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.StandardMenu**</p></td>
<td align="left"><p>**ActionsMenu**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>**Actions** menu in list and document library views.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.StandardMenu**</p></td>
<td align="left"><p>**ActionsMenuForSurvey**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>**Site Actions** menu for surveys.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.StandardMenu**</p></td>
<td align="left"><p>**SettingsMenuForSurvey**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>**Site Settings** links for surveys.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.StandardMenu**</p></td>
<td align="left"><p>**SiteActions**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>**Site Actions** menu.</p></td>
</tr>
</tbody>
</table>

## Page custom action locations and group IDs

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Location</p></th>
<th align="left"><p>Custom Action Group IDs</p></th>
<th align="left"><p>Default Custom Action IDs</p></th>
<th align="left"><p>Group Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.ContentTypeSettings**</p></td>
<td align="left"><p>**Fields**</p></td>
<td align="left"><ul>
<li><p>**AddField**</p></li>
<li><p>**ReorderFields**</p></li>
</ul></td>
<td align="left"><p>**Columns** section on site collection **Content Type** page.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.ContentTypeSettings**</p></td>
<td align="left"><p>**General**</p></td>
<td align="left"><ul>
<li><p>**ChangeNameDescription**</p></li>
<li><p>**ChangeOptionalSettings**</p></li>
<li><p>**ChangeWorkflowSettings**</p></li>
<li><p>**RemoveContentType**</p></li>
</ul></td>
<td align="left"><p>**Settings** section on site collection **Content Type** page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.ContentTypeTemplateSettings**</p></td>
<td align="left"><p>**Fields**</p></td>
<td align="left"><ul>
<li><p>**AddField**</p></li>
<li><p>**ReorderFields**</p></li>
</ul></td>
<td align="left"><p>**Columns** section on List **Content Type** page.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.ContentTypeTemplateSettings**</p></td>
<td align="left"><p>**General**</p></td>
<td align="left"><ul>
<li><p>**ChangeNameDescriptionGroup**</p></li>
<li><p>**ChangeOptionalSettings**</p></li>
<li><p>**ChangeWorkflowSettings**</p></li>
<li><p>**RemoveContentType**</p></li>
</ul></td>
<td align="left"><p>**Settings** section on List **Content Type** page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.Create**</p></td>
<td align="left"><p>**WebPages**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>**Web Pages** section on **Create** page.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.GroupsPage**</p></td>
<td align="left"><p>**NewMenu**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>**New** menu on site collection **People and Groups** page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.GroupsPage**</p></td>
<td align="left"><p>**SettingsMenu**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>**Settings** menu on site collection **People and Groups** page.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.ListEdit**</p></td>
<td align="left"><p>**Communications**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>**Communications** section on **Customize** page for list or document library.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.ListEdit**</p></td>
<td align="left"><p>**GeneralSettings**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>**General Settings** section on **Customize** page for list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.ListEdit**</p></td>
<td align="left"><p>**Permissions**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>**Permissions and Management** section on **Customize** page for list or document library.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.ListEdit.DocumentLibrary**</p></td>
<td align="left"><p>**GeneralSettings**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>**General Settings** section on **Customize** page for document library.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.PeoplePage**</p></td>
<td align="left"><p>**ActionsMenu**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>**Actions** menu on site collection **People and Groups** page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.PeoplePage**</p></td>
<td align="left"><p>**NewMenu**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>**New** menu on site collection **People and Groups** page.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.PeoplePage**</p></td>
<td align="left"><p>**SettingsMenu**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>**Settings** menu on site collection **People and Groups** page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.SiteSettings**</p></td>
<td align="left"><p>**Customization**</p></td>
<td align="left"><ul>
<li><p>**ProjectSettings**</p></li>
<li><p>**NavOptions**</p></li>
<li><p>**Theme**</p></li>
<li><p>**TopNav**</p></li>
<li><p>**QuickLaunch**</p></li>
<li><p>**SaveAsTemplate**</p></li>
<li><p>**ReGhost**</p></li>
</ul></td>
<td align="left"><p>**Look and Feel** section on **Site Settings** page.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.SiteSettings**</p></td>
<td align="left"><p>**Galleries**</p></td>
<td align="left"><ul>
<li><p>**MasterPageCatalog**</p></li>
<li><p>**ManageCType**</p></li>
<li><p>**ManageField**</p></li>
<li><p>**SiteTemplates**</p></li>
<li><p>**ListTemplates**</p></li>
<li><p>**WebParts**</p></li>
<li><p>**Workflows**</p></li>
</ul></td>
<td align="left"><p>**Galleries** section on **Site Settings** page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.SiteSettings**</p></td>
<td align="left"><p>**SiteAdministration**</p></td>
<td align="left"><ul>
<li><p>**RegionalSettings**</p></li>
<li><p>**LibrariesAndLists**</p></li>
<li><p>**WebUsage**</p></li>
<li><p>**UserAlerts**</p></li>
<li><p>**RSS**</p></li>
<li><p>**SrchVis**</p></li>
<li><p>**ManageSubWebs**</p></li>
<li><p>**ManageSiteFeatures**</p></li>
<li><p>**DeleteWeb**</p></li>
</ul></td>
<td align="left"><p>**Site Administration** section on **Site Settings** page.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.SiteSettings**</p></td>
<td align="left"><p>**SiteCollectionAdmin**</p></td>
<td align="left"><ul>
<li><p>**DeletedItems**</p></li>
<li><p>**SiteCollectionUsage**</p></li>
<li><p>**Storage**</p></li>
<li><p>**ManageSiteCollectionFeatures**</p></li>
<li><p>**Hierarchy**</p></li>
<li><p>**Portal**</p></li>
</ul></td>
<td align="left"><p>**Site Collection Administration** section on **Site Settings** page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.SiteSettings**</p></td>
<td align="left"><p>**UsersAndPermissions**</p></td>
<td align="left"><ul>
<li><p>**PeopleAndGroups**</p></li>
<li><p>**SiteCollectionAdministrators**</p></li>
<li><p>**User**</p></li>
</ul></td>
<td align="left"><p>**Users and Permissions** section on **Site Settings** page.</p></td>
</tr>
</tbody>
</table>

## Central administration custom action locations and group IDs

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Location</p></th>
<th align="left"><p>Custom Action Group ID</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.Administration.Applications**</p></td>
<td align="left"><p>Databases</p></td>
<td align="left"><p>**Databases** section under **Application Management** in Central Administration</p></td>
</tr>
<tr class="even">
<td align="left"><p></p></td>
<td align="left"><p>ServiceApplications</p></td>
<td align="left"><p>**Service Applications** section under **Application Management** in Central Administration</p></td>
</tr>
<tr class="odd">
<td align="left"><p></p></td>
<td align="left"><p>SiteCollections</p></td>
<td align="left"><p>**Site Collections** section under **Application Management** in Central Administration</p></td>
</tr>
<tr class="even">
<td align="left"><p></p></td>
<td align="left"><p>WebApplications</p></td>
<td align="left"><p>**Web Applications** section under **Application Management** in Central Administration</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.Administration.Backups**</p></td>
<td align="left"><p>FarmBackup</p></td>
<td align="left"><p>**Farm Backup and Restore** section under **Backup and Restore** in Central Administration</p></td>
</tr>
<tr class="even">
<td align="left"><p></p></td>
<td align="left"><p>GranularBackup</p></td>
<td align="left"><p>**Granular Backup** section under **Backup and Restore** in Central Administration</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.Administration.ConfigurationWizards**</p></td>
<td align="left"><p>FarmConfiguration</p></td>
<td align="left"><p>**Farm Configuration** section under **Configuration Wizards** in Central Administration</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.Administration.Default**</p></td>
<td align="left"><ul>
<li><p>CA_Applications</p></li>
<li><p>CA_Backups</p></li>
<li><p>CA_ConfigurationWizards</p></li>
<li><p>CA_GeneralApplicationSettings</p></li>
<li><p>CA_Monitoring</p></li>
<li><p>CA_Security</p></li>
<li><p>CA_SystemSettings</p></li>
<li><p>CA_UpgradeAndMigration</p></li>
</ul></td>
<td align="left"><p>**Default** page in Central Administration</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.Administration.GeneralApplicationSettings**</p></td>
<td align="left"><p>ExternalServiceConnections</p></td>
<td align="left"><p>**External Service Connections** section under **General Application Settings** in Central Administration.</p></td>
</tr>
<tr class="even">
<td align="left"><p></p></td>
<td align="left"><p>SiteDirectory</p></td>
<td align="left"><p>**Site Directory** section under **General Application Settings** in Central Administration.</p></td>
</tr>
<tr class="odd">
<td align="left"><p></p></td>
<td align="left"><p>SPD</p></td>
<td align="left"><p>**SharePoint Designer** section under **General Application Settings** in Central Administration.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.Administration.Monitoring**</p></td>
<td align="left"><p>HealthStatus</p></td>
<td align="left"><p>**Health Analyzer** section under **Monitoring** in Central Administration</p></td>
</tr>
<tr class="odd">
<td align="left"><p></p></td>
<td align="left"><p>Reporting</p></td>
<td align="left"><p>**Reporting** section under **Monitoring** in Central Administration</p></td>
</tr>
<tr class="even">
<td align="left"><p></p></td>
<td align="left"><p>TimerJobs</p></td>
<td align="left"><p>**Timer Jobs** section under **Monitoring** in Central Administration</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.Administration.Security**</p></td>
<td align="left"><p>GeneralSecurity</p></td>
<td align="left"><p>**General Security** Section under **Security** in Central Administration.</p></td>
</tr>
<tr class="even">
<td align="left"><p></p></td>
<td align="left"><p>InformationPolicy</p></td>
<td align="left"><p>**Information Policy** Section under **Security** in Central Administration.</p></td>
</tr>
<tr class="odd">
<td align="left"><p></p></td>
<td align="left"><p>Users</p></td>
<td align="left"><p>**Users** Section under **Security** in Central Administration.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.Administration.SystemSettings**</p></td>
<td align="left"><p>Email</p></td>
<td align="left"><p>**E-Mail and Text Messages (SMS)** section under **System Settings** in Central Administration.</p></td>
</tr>
<tr class="odd">
<td align="left"><p></p></td>
<td align="left"><p>Farm Management</p></td>
<td align="left"><p>**Farm Management** section under **System Settings** in Central Administration.</p></td>
</tr>
<tr class="even">
<td align="left"><p></p></td>
<td align="left"><p>Servers</p></td>
<td align="left"><p>**Servers** section under **System Settings** in Central Administration.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.Administration.UpgradeAndMigration**</p></td>
<td align="left"><p>Patch</p></td>
<td align="left"><p>**Upgrade and Patch Management** section under **Upgrade and Migration** in Central Administration.</p></td>
</tr>
</tbody>
</table>

## Server ribbon custom action locations and group IDs

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Location</p></th>
<th align="left"><p>Custom Action Group IDs</p></th>
<th align="left"><p>Default Custom Action IDs</p></th>
<th align="left"><p>Group Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**CommandUI.Ribbon.ListView**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>See <a href="http://msdn.microsoft.com/library/9ca6e4cc-9c51-4579-8f57-cf5aa59de5fd(Office.15).aspx">Default Server Ribbon Customization Locations</a></p></td>
<td align="left"><p>**Location** corresponds to the list view.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CommandUI.Ribbon.NewForm**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>See <a href="http://msdn.microsoft.com/library/9ca6e4cc-9c51-4579-8f57-cf5aa59de5fd(Office.15).aspx">Default Server Ribbon Customization Locations</a></p></td>
<td align="left"><p>**Location** corresponds to the new form for the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CommandUI.Ribbon.EditForm**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>See <a href="http://msdn.microsoft.com/library/9ca6e4cc-9c51-4579-8f57-cf5aa59de5fd(Office.15).aspx">Default Server Ribbon Customization Locations</a></p></td>
<td align="left"><p>**Location** corresponds to the edit form for the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CommandUI.Ribbon.DisplayForm**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>See <a href="http://msdn.microsoft.com/library/9ca6e4cc-9c51-4579-8f57-cf5aa59de5fd(Office.15).aspx">Default Server Ribbon Customization Locations</a></p></td>
<td align="left"><p>**Location** corresponds to the display form for the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CommandUI.Ribbon**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p>See <a href="http://msdn.microsoft.com/library/9ca6e4cc-9c51-4579-8f57-cf5aa59de5fd(Office.15).aspx">Default Server Ribbon Customization Locations</a></p></td>
<td align="left"><p>**Location** corresponds to the list view and edit, new, and display forms for the list.</p></td>
</tr>
</tbody>
</table>


## See also 

- [Custom Action Definition Schema](custom-action-definition-schema.md)
- [How to: Add Actions to the User Interface](http://msdn.microsoft.com/library/b2403912-161d-408f-90ae-6b95c014d054(Office.15).aspx)
- [Schema reference for SharePoint 2013](schema-reference-for-sharepoint-2013.md)








