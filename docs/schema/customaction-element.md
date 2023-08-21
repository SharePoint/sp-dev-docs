---
title: CustomAction Element
description: Outlines the CustomAction element, which defines an extension to the user interface, such as a button on a toolbar or a link on a site settings page.
manager: soliver
ms.date: 03/28/2023
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
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

|Attribute |Description|
|----------|-----------|
|**RequiredAdmin**|Optional **Text**. Specifies the administrative rights that are required for the custom action to apply. This value is used to trim links in Central Administration. Possible values are: <ul><li>Delegated</li><li>Farm</li><li>Machine</li></ul>|
|**ControlAssembly**|Optional **Text**. Specifies the assembly of a control that supports the custom action.|
|**ControlClass**|Optional **Text**. Specifies a control class that supports the custom action.|
|**ControlSrc**|Optional **Text**. Specifies the relative URL of the .ascx file that serves as the source for the custom action, for example, `~/_controltemplates/myCustomAction.ascx`.|
|**Description**|Optional **Text**. Specifies a longer description for the action that is exposed as a tooltip or sub-description for the action.|
|**FeatureId**|Optional **Text**. Identifies the Feature that is associated with the custom action.|
|**GroupId**|Optional **Text**. Identifies an action group that contains the action, for example, `"SiteManagement"`. If it is contained within a custom action group, the value of the **GroupId** attribute must equal the group ID of the [CustomActionGroup](customactiongroup-element-custom-action.md) element. <br /><br />For a list of the default custom action group IDs that are used in Microsoft SharePoint Foundation, see [Default Custom Action Locations and IDs](default-custom-action-locations-and-ids.md).|
|**Id**|Optional **Text**. Specifies a unique identifier for the custom action. The ID may be a GUID, or it may be a unique term, for example, `"HtmlViewer"`.|
|**ImageUrl**|Optional **Text**. Specifies a virtual server relative link to an image that presents an icon for the item.|
|**Location**|Optional **Text**. Specifies the location of this custom action, for example, `"Microsoft.SharePoint.SiteSettings"`.<br /><br />If the **CustomAction** element contains a **CommandUIExtension** child element, the **Location** must start with "CommandUI.Ribbon". For a list of default locations that are used with the Server ribbon, see [Default Server Ribbon Customization Locations](https://msdn.microsoft.com/library/9ca6e4cc-9c51-4579-8f57-cf5aa59de5fd(Office.15).aspx).<br /><br />If the custom action is a menu item or toolbar button, the possible options include **EditControlBlock**, **NewFormToolbar**, **DisplayFormToolbar**, and **EditFormToolbar**.<br /><br />If it is contained within a custom action group, the value of the **Location** attribute must equal the location of the [CustomActionGroup](customactiongroup-element-custom-action.md) element.<br /><br />For a list of the default custom action locations that are used in SharePoint Foundation, see [Default Custom Action Locations and IDs](default-custom-action-locations-and-ids.md).
|**RegistrationId**|Optional **Text**. Specifies the identifier of the list or item content type that this action is associated with, or the file type or programmatic identifier (**ProgID**).|
|**RegistrationType**|Optional **Text**. Specifies the registration attachment for a per-item action. Possible values include:<ul><li>None</li><li>List</li><li>ContentType</li><li>ProgId</li><li>FileType</li></ul>|
|**RequireSiteAdministrator**|Optional **Boolean**. **TRUE** to specify that the item be displayed only if the user is a site administrator; otherwise, **FALSE**. Using the **RequireSiteAdministrator** attribute for the drop-down menu of SharePoint Foundation commands that are associated with list items is not supported.|
|**Rights**|Optional **Text**. Specifies a set of rights that the user must have for the link to be visible, for example, `"ViewListItems,ManageAlerts"`. If it is not specified, the action always appears in the list of actions. To specify multiple rights, separate the values by using commas. The set of rights are grouped logically according to **AND** logic, which means that a user must have all the specified rights to see an action. For a list of possible values, see Microsoft.SharePoint.SPBasePermissions.|
|**RootWebOnly**|Optional **Boolean**. **TRUE** to deploy the custom action only on root websites. This attribute applies to custom actions in a sandboxed solution.|
|**ScriptSrc**|Optional **Text**. Specifies a file that contains script to be executed. This attribute is only applicable when the **Location** attribute is set to **ScriptLink**.|
|**ScriptBlock**|Optional **Text**. Specifies a block of script to be executed. This attribute is only applicable when the **Location** attribute is set to **ScriptLink**.|
|**Sequence**|Optional **Integer**. Specifies the ordering priority for actions.|
|**ShowInLists**|This attribute is deprecated and should not be used.<br /><br />Optional **Boolean**. **TRUE** if the custom action is only displayed for lists on the page for managing content types. The default value is **FALSE**.|
|**ShowInReadOnlyContentTypes**|Optional **Boolean**. **TRUE** if the custom action is only displayed for read-only content types on the page for managing content types. The default value is **FALSE**.|
|**ShowInSealedContentTypes**|Optional **Boolean**. **TRUE** if the custom action is only displayed for sealed content types on the page for managing content types. The default value is **FALSE**.|
|**Title**|Required **Text**. Specifies the end-user description for this action.|
|**UIVersion**|Optional **Integer**. Specifies the version of the user interface in which this custom action should be listed.|

### Child elements

- [CommandUIExtension](commanduiextension-element.md)
- [UrlAction](urlaction-element.md)

### Parent elements

- [Elements](elements-element-custom-action.md)

### Occurrences

- Minimum: 1
- Maximum: Unbounded

### Remarks

You can use the **CustomAction** element to add standard ASP.NET controls and user controls (for example, text boxes or option buttons) as custom actions in toolbars. However, you can only add controls instantiating menu items to the drop-down menus of toolbars; you cannot add web parts or arbitrary controls.

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

## See also

- [Default Custom Action Locations and IDs](default-custom-action-locations-and-ids.md)
