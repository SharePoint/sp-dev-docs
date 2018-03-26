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

![Collapse
section](../icons/collapse_all.gif "Collapse section")![Expand
section](../icons/expand_all.gif "Expand section")![](../icons/collapse_all.gif)![](../icons/expand_all.gif)![](../icons/dropdown.gif)![](../icons/dropdownHover.gif)![Copy
code](../icons/copycode.gif "Copy code")![Copy code
hover](../icons/copycodeHighlight.gif "Copy code hover")
<table>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

Visual Basic  
C\#  
C++  
JavaScript  

<table>
<tbody>
<tr class="odd">
<td align="left"><span id="runningHeaderText"></span></td>
</tr>
<tr class="even">
<td align="left"># Default Custom Action Locations and IDs</td>
</tr>
<tr class="odd">
<td align="left"><a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

**Last modified:** March 09, 2015

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

The following table shows the locations, custom action group IDs, and
custom action IDs that are used in the
[CustomAction](customaction-element.htm) element and the
[CustomActionGroup](customactiongroup-element-custom-action.htm) element of
custom actions that are installed by default in Microsoft SharePoint
Foundation.

In the table, each location value corresponds to the <span
class="keyword">Location</span> attribute of the
[CustomAction](customaction-element.htm) element. Each
group ID corresponds to the **GroupId**
attribute of the
[CustomAction](customaction-element.htm) element or to
the **Id** attribute of the
[CustomActionGroup](customactiongroup-element-custom-action.htm) element.
Each custom action ID corresponds to the **Id**
attribute of the
[CustomAction](customaction-element.htm) element.

You can create a Feature that implements the
[HideCustomAction](hidecustomaction-element.htm) element to
hide any default custom action that is identified in the table.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
<td align="left"><p><span class="ui">Actions </span>menu in list and document library views.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.StandardMenu**</p></td>
<td align="left"><p>**ActionsMenuForSurvey**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p><span class="ui">Site Actions</span> menu for surveys.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.StandardMenu**</p></td>
<td align="left"><p>**SettingsMenuForSurvey**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p><span class="ui">Site Settings</span> links for surveys.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.StandardMenu**</p></td>
<td align="left"><p>**SiteActions**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p><span class="ui">Site Actions</span> menu.</p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
<td align="left"><p><span class="ui">Columns</span> section on site collection <span class="ui">Content Type</span> page.</p></td>
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
<td align="left"><p><span class="ui">Settings</span> section on site collection <span class="ui">Content Type</span> page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.ContentTypeTemplateSettings**</p></td>
<td align="left"><p>**Fields**</p></td>
<td align="left"><ul>
<li><p>**AddField**</p></li>
<li><p>**ReorderFields**</p></li>
</ul></td>
<td align="left"><p><span class="ui">Columns</span> section on List <span class="ui">Content Type</span> page.</p></td>
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
<td align="left"><p><span class="ui">Settings</span> section on List <span class="ui">Content Type</span> page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.Create**</p></td>
<td align="left"><p>**WebPages**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p><span class="ui">Web Pages</span> section on <span class="ui">Create</span> page.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.GroupsPage**</p></td>
<td align="left"><p>**NewMenu**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p><span class="ui">New</span> menu on site collection <span class="ui">People and Groups</span> page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.GroupsPage**</p></td>
<td align="left"><p>**SettingsMenu**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p><span class="ui">Settings</span> menu on site collection <span class="ui">People and Groups</span> page.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.ListEdit**</p></td>
<td align="left"><p>**Communications**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p><span class="ui">Communications</span> section on <span class="ui">Customize</span> page for list or document library.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.ListEdit**</p></td>
<td align="left"><p>**GeneralSettings**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p><span class="ui">General Settings</span> section on <span class="ui">Customize</span> page for list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.ListEdit**</p></td>
<td align="left"><p>**Permissions**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p><span class="ui">Permissions and Management</span> section on <span class="ui">Customize</span> page for list or document library.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.ListEdit.DocumentLibrary**</p></td>
<td align="left"><p>**GeneralSettings**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p><span class="ui">General Settings</span> section on <span class="ui">Customize</span> page for document library.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.PeoplePage**</p></td>
<td align="left"><p>**ActionsMenu**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p><span class="ui">Actions</span> menu on site collection <span class="ui">People and Groups</span> page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.PeoplePage**</p></td>
<td align="left"><p>**NewMenu**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p><span class="ui">New</span> menu on site collection <span class="ui">People and Groups</span> page.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.PeoplePage**</p></td>
<td align="left"><p>**SettingsMenu**</p></td>
<td align="left"><p>Not applicable</p></td>
<td align="left"><p><span class="ui">Settings</span> menu on site collection <span class="ui">People and Groups</span> page.</p></td>
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
<td align="left"><p><span class="ui">Look and Feel</span> section on <span class="ui">Site Settings</span> page.</p></td>
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
<td align="left"><p><span class="ui">Galleries</span> section on <span class="ui">Site Settings</span> page.</p></td>
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
<td align="left"><p><span class="ui">Site Administration</span> section on <span class="ui">Site Settings</span> page.</p></td>
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
<td align="left"><p><span class="ui">Site Collection Administration</span> section on <span class="ui">Site Settings</span> page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.SiteSettings**</p></td>
<td align="left"><p>**UsersAndPermissions**</p></td>
<td align="left"><ul>
<li><p>**PeopleAndGroups**</p></li>
<li><p>**SiteCollectionAdministrators**</p></li>
<li><p>**User**</p></li>
</ul></td>
<td align="left"><p><span class="ui">Users and Permissions</span> section on <span class="ui">Site Settings</span> page.</p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
<td align="left"><p><span class="ui">Databases</span> section under <span class="ui">Application Management</span> in Central Administration</p></td>
</tr>
<tr class="even">
<td align="left"><p></p></td>
<td align="left"><p>ServiceApplications</p></td>
<td align="left"><p><span class="ui">Service Applications</span> section under <span class="ui">Application Management</span> in Central Administration</p></td>
</tr>
<tr class="odd">
<td align="left"><p></p></td>
<td align="left"><p>SiteCollections</p></td>
<td align="left"><p><span class="ui">Site Collections</span> section under <span class="ui">Application Management</span> in Central Administration</p></td>
</tr>
<tr class="even">
<td align="left"><p></p></td>
<td align="left"><p>WebApplications</p></td>
<td align="left"><p><span class="ui">Web Applications</span> section under <span class="ui">Application Management</span> in Central Administration</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.Administration.Backups**</p></td>
<td align="left"><p>FarmBackup</p></td>
<td align="left"><p><span class="ui">Farm Backup and Restore</span> section under <span class="ui">Backup and Restore</span> in Central Administration</p></td>
</tr>
<tr class="even">
<td align="left"><p></p></td>
<td align="left"><p>GranularBackup</p></td>
<td align="left"><p><span class="ui">Granular Backup</span> section under <span class="ui">Backup and Restore</span> in Central Administration</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.Administration.ConfigurationWizards**</p></td>
<td align="left"><p>FarmConfiguration</p></td>
<td align="left"><p><span class="ui">Farm Configuration</span> section under <span class="ui">Configuration Wizards</span> in Central Administration</p></td>
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
<td align="left"><p><span class="ui">Default</span> page in Central Administration</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.Administration.GeneralApplicationSettings**</p></td>
<td align="left"><p>ExternalServiceConnections</p></td>
<td align="left"><p><span class="ui">External Service Connections</span> section under <span class="ui">General Application Settings</span> in Central Administration.</p></td>
</tr>
<tr class="even">
<td align="left"><p></p></td>
<td align="left"><p>SiteDirectory</p></td>
<td align="left"><p><span class="ui">Site Directory</span> section under <span class="ui">General Application Settings</span> in Central Administration.</p></td>
</tr>
<tr class="odd">
<td align="left"><p></p></td>
<td align="left"><p>SPD</p></td>
<td align="left"><p><span class="ui">SharePoint Designer</span> section under <span class="ui">General Application Settings</span> in Central Administration.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.Administration.Monitoring**</p></td>
<td align="left"><p>HealthStatus</p></td>
<td align="left"><p><span class="ui">Health Analyzer</span> section under <span class="ui">Monitoring</span> in Central Administration</p></td>
</tr>
<tr class="odd">
<td align="left"><p></p></td>
<td align="left"><p>Reporting</p></td>
<td align="left"><p><span class="ui">Reporting</span> section under <span class="ui">Monitoring</span> in Central Administration</p></td>
</tr>
<tr class="even">
<td align="left"><p></p></td>
<td align="left"><p>TimerJobs</p></td>
<td align="left"><p><span class="ui">Timer Jobs</span> section under <span class="ui">Monitoring</span> in Central Administration</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.Administration.Security**</p></td>
<td align="left"><p>GeneralSecurity</p></td>
<td align="left"><p><span class="ui">General Security</span> Section under <span class="ui">Security</span> in Central Administration.</p></td>
</tr>
<tr class="even">
<td align="left"><p></p></td>
<td align="left"><p>InformationPolicy</p></td>
<td align="left"><p><span class="ui">Information Policy</span> Section under <span class="ui">Security</span> in Central Administration.</p></td>
</tr>
<tr class="odd">
<td align="left"><p></p></td>
<td align="left"><p>Users</p></td>
<td align="left"><p><span class="ui">Users</span> Section under <span class="ui">Security</span> in Central Administration.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Microsoft.SharePoint.Administration.SystemSettings**</p></td>
<td align="left"><p>Email</p></td>
<td align="left"><p><span class="ui">E-Mail and Text Messages (SMS)</span> section under <span class="ui">System Settings</span> in Central Administration.</p></td>
</tr>
<tr class="odd">
<td align="left"><p></p></td>
<td align="left"><p>Farm Management</p></td>
<td align="left"><p><span class="ui">Farm Management</span> section under <span class="ui">System Settings</span> in Central Administration.</p></td>
</tr>
<tr class="even">
<td align="left"><p></p></td>
<td align="left"><p>Servers</p></td>
<td align="left"><p><span class="ui">Servers</span> section under <span class="ui">System Settings</span> in Central Administration.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Microsoft.SharePoint.Administration.UpgradeAndMigration**</p></td>
<td align="left"><p>Patch</p></td>
<td align="left"><p><span class="ui">Upgrade and Patch Management</span> section under <span class="ui">Upgrade and Migration</span> in Central Administration.</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

<span sdata="link">[Custom Action Definition
Schema](custom-action-definition-schema.htm)</span>

#### Other resources

[How to: Add Actions to the User
Interface](http://msdn.microsoft.com/library/b2403912-161d-408f-90ae-6b95c014d054(Office.15).aspx)

<span sdata="link">[Schema reference for SharePoint
2013](schema-reference-for-sharepoint-2013.htm)</span>








