---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a0b64f14-48d9-4149-b7cd-eb86c95856ca
---

# Elements Element (Custom Action)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Top-level element in a Feature manifest file that contains Feature element declarations.

## Definition

```XML
<Elements
  Id = "Text">
</Elements>
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
<td align="left"><p>**xmlns**</p></td>
<td align="left"><p>Required. Identifies the XML namespace. The value must be `http://schemas.microsoft.com/sharepoint/`.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Optional **Text**. Specifies a unique identifier for the Feature manifest file.</p></td>
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
<td align="left"><p><a href="customaction-element.md">CustomAction</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="customactiongroup-element-custom-action.md">CustomActionGroup</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="hidecustomaction-element.md">HideCustomAction</a></p></td>
</tr>
</tbody>
</table>

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

<br/>







