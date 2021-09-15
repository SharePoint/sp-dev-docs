---
title: Elements Element (Custom Action)
description: Top-level element in a Feature manifest file that contains Feature element declarations.
manager: soliver
ms.date: 12/14/2020
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: a0b64f14-48d9-4149-b7cd-eb86c95856ca
---

# Elements Element (Custom Action)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Top-level element in a Feature manifest file that contains Feature element declarations.

## Definition

```XML
<Elements Id = "Text">
</Elements>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

| Attribute | Description                                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------- |
| xmlns     | Required. Identifies the XML namespace. The value must be `http://schemas.microsoft.com/sharepoint/`. |
| Id        | Optional **Text**. Specifies a unique identifier for the Feature manifest file.                       |

### Child elements

- [CustomAction](customaction-element.md)
- [CustomActionGroup](customactiongroup-element-custom-action.md)
- [HideCustomAction](hidecustomaction-element.md)

### Parent elements

None

## Example

The following example defines a custom action that adds a button to the Server ribbon.

```XML
<Elements xmlns="http://schemas.microsoft.com/sharepoint/">
  <CustomAction
    Id="Ribbon.Library.Actions.AddAButton"
    Location="CommandUI.Ribbon"
    RegistrationId="101"
    RegistrationType="List"
    Title="Add a Ribbon Button">
    <CommandUIExtension>
      <CommandUIDefinitions>
        <CommandUIDefinition
          Location="Ribbon.Library.Share.Controls._children">
          <Button Id="Ribbon.Library.Share.NewRibbonButton"
            Command="NewRibbonButtonCommand"
            Image16by16="Insert an image URL here."
            Image32by32="Insert an image URL here."
            LabelText="Hello World"
            TemplateAlias="o2" />
        </CommandUIDefinition>
      </CommandUIDefinitions>
      <CommandUIHandlers>
        <CommandUIHandler
          Command="NewRibbonButtonCommand"
          CommandAction="javascript:alert('Hello, world');" />
      </CommandUIHandlers>
    </CommandUIExtension>
  </CustomAction>
</Elements>
```
