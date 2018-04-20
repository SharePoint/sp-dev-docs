---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: cc5ed5c2-c362-4a61-af77-ff9e8f7e1cae
---

# CustomAction Element

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Defines an extension to the user interface, such as a button on a toolbar or a link on a site settings page.

## Definition

```XML
<CustomAction
  RequiredAdmin = "Delegated | Farm | Machine"
  ControlAssembly = "Text"
  ControlClass = "Text"
  ControlSrc = "Text"
  Description = "Text"
  FeatureId = "Text"
  GroupId = "Text"
  Id = "Text"
  ImageUrl = "Text"
  Location = "Text"
  RegistrationId = "Text"
  RegistrationType = "Text"
  RequireSiteAdministrator = "TRUE" | "FALSE"
  Rights = "Text"
  RootWebOnly = "TRUE" | "FALSE"
  ScriptSrc = "Text"
  ScriptBlock = "Text"
  Sequence = "Integer"
  ShowInLists = "TRUE" | "FALSE"
  ShowInReadOnlyContentTypes = "TRUE" | "FALSE"
  ShowInSealedContentTypes = "TRUE" | "FALSE"
  Title = "Text"
  UIVersion = "Integer">
</CustomAction>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**RequiredAdmin**</p></td>
<td align="left"><p>Optional **Text**. Specifies the administrative rights that are required for the custom action to apply. This value is used to trim links in Central Administration. Possible values are:</p>
<ul>
<li><p>**Delegated**</p></li>
<li><p>**Farm**</p></li>
<li><p>**Machine**</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**ControlAssembly**</p></td>
<td align="left"><p>Optional **Text**. Specifies the assembly of a control that supports the custom action.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ControlClass**</p></td>
<td align="left"><p>Optional **Text**. Specifies a control class that supports the custom action.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ControlSrc**</p></td>
<td align="left"><p>Optional **Text**. Specifies the relative URL of the .ascx file that serves as the source for the custom action, for example, `"~/_controltemplates/myCustomAction.ascx"`.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **Text**. Specifies a longer description for the action that is exposed as a tooltip or sub-description for the action.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FeatureId**</p></td>
<td align="left"><p>Optional **Text**. Identifies the Feature that is associated with the custom action.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**GroupId**</p></td>
<td align="left"><p>Optional **Text**. Identifies an action group that contains the action, for example, `"SiteManagement"`. If it is contained within a custom action group, the value of the **GroupId** attribute must equal the group ID of the <a href="customactiongroup-element-custom-action.md">CustomActionGroup</a> element.</p>
<p>For a list of the default custom action group IDs that are used in Microsoft SharePoint Foundation, see <a href="default-custom-action-locations-and-ids.md">Default Custom Action Locations and IDs</a>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Optional **Text**. Specifies a unique identifier for the custom action. The ID may be a GUID, or it may be a unique term, for example, `"HtmlViewer"`.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageUrl**</p></td>
<td align="left"><p>Optional **Text**. Specifies a virtual server relative link to an image that presents an icon for the item.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Location**</p></td>
<td align="left"><p>Optional **Text**. Specifies the location of this custom action, for example, `"Microsoft.SharePoint.SiteSettings"`.</p>
<p>If the **CustomAction** element contains a **CommandUIExtension** child element, the **Location** must start with "CommandUI.Ribbon". For a list of default locations that are used with the Server ribbon, see <a href="http://msdn.microsoft.com/library/9ca6e4cc-9c51-4579-8f57-cf5aa59de5fd(Office.15).aspx">Default Server Ribbon Customization Locations</a>.</p>
<p>If the custom action is a menu item or toolbar button, the possible options include **EditControlBlock**, **NewFormToolbar**, **DisplayFormToolbar**, and **EditFormToolbar**.</p>
<p>If it is contained within a custom action group, the value of the **Location** attribute must equal the location of the <a href="customactiongroup-element-custom-action.md">CustomActionGroup</a> element.</p>
<p>For a list of the default custom action locations that are used in SharePoint Foundation, see <a href="default-custom-action-locations-and-ids.md">Default Custom Action Locations and IDs</a>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RegistrationId**</p></td>
<td align="left"><p>Optional **Text**. Specifies the identifier of the list or item content type that this action is associated with, or the file type or programmatic identifier (**ProgID**).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RegistrationType**</p></td>
<td align="left"><p>Optional **Text**. Specifies the registration attachment for a per-item action. Possible values include:</p>
<ul>
<li><p>**None**</p></li>
<li><p>**List**</p></li>
<li><p>**ContentType**</p></li>
<li><p>**ProgId**</p></li>
<li><p>**FileType**</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**RequireSiteAdministrator**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that the item be displayed only if the user is a site administrator; otherwise, **FALSE**. Using the **RequireSiteAdministrator** attribute for the drop-down menu of SharePoint Foundation commands that are associated with list items is not supported.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Rights**</p></td>
<td align="left"><p>Optional **Text**. Specifies a set of rights that the user must have for the link to be visible, for example, `"ViewListItems,ManageAlerts"`. If it is not specified, the action always appears in the list of actions. To specify multiple rights, separate the values by using commas. The set of rights are grouped logically according to **AND** logic, which means that a user must have all the specified rights to see an action. For a list of possible values, see <span sdata="cer" target="T:Microsoft.SharePoint.SPBasePermissions"><span class="nolink">Microsoft.SharePoint.SPBasePermissions</span></span>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RootWebOnly**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to deploy the custom action only on root websites. This attribute applies to custom actions in a sandboxed solution.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ScriptSrc**</p></td>
<td align="left"><p>Optional **Text**. Specifies a file that contains script to be executed. This attribute is only applicable when the **Location** attribute is set to **ScriptLink**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ScriptBlock**</p></td>
<td align="left"><p>Optional **Text**. Specifies a block of script to be executed. This attribute is only applicable when the **Location** attribute is set to **ScriptLink**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Sequence**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the ordering priority for actions.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowInLists**</p></td>
<td align="left"><p>This attribute is deprecated and should not be used.</p>
<p>Optional **Boolean**. **TRUE** if the custom action is only displayed for lists on the page for managing content types. The default value is **FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowInReadOnlyContentTypes**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if the custom action is only displayed for read-only content types on the page for managing content types. The default value is **FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowInSealedContentTypes**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if the custom action is only displayed for sealed content types on the page for managing content types. The default value is **FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>Required **Text**. Specifies the end-user description for this action.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UIVersion**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the version of the user interface in which this custom action should be listed.</p></td>
</tr>
</tbody>
</table>

### Child elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="commanduiextension-element.md">CommandUIExtension</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="urlaction-element.md">UrlAction</a></p></td>
</tr>
</tbody>
</table>

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="elements-element-custom-action.md">Elements</a></p></td>
</tr>
</tbody>
</table>

### Occurrences

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 1</p>
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>

### Remarks

You can use the **CustomAction** element to add standard ASP.NET controls and user controls (for example, text boxes or option buttons) as custom actions in toolbars. However, you can only add controls instantiating menu items to the drop-down menus of toolbars; you cannot add Web Parts or arbitrary controls.

## Example

The following example is part of a Feature that replaces a button on the Server ribbon.

```XML
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <CustomAction Id="Ribbon.Library.Actions.ReplacementButton"
        Location="CommandUI.Ribbon"
        RegistrationId="101"
        RegistrationType="List"
        Title="Replace a Ribbon Button">
        <CommandUIExtension>
          <CommandUIDefinitions>
            <CommandUIDefinition
              Location="Ribbon.Library.Actions.ConnectToClient">
                 <Button Id="Ribbon.Library.Actions.ConnectToClient.ReplacementButton"
                   Command="ReplacementButtonCommand"
                   Image16by16="Insert an image URL here."
                   Image32by32="Insert an image URL here."
                   LabelText="Replaced Button"
                   TemplateAlias="o2" />
            </CommandUIDefinition>
          </CommandUIDefinitions>
          <CommandUIHandlers>
            <CommandUIHandler
              Command="ReplacementButtonCommand"
              CommandAction="javascript:alert('This button has been replaced.');" />
          </CommandUIHandlers>
        </CommandUIExtension>
      </CustomAction>
    </Elements>
```

<br/>

## See also

- [Default Custom Action Locations and IDs](default-custom-action-locations-and-ids.md)








