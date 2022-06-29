---
title: DeclarativeContextDefinition Element
description: The DeclarativeContextDefinition element derives from the ContextDefinition element.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 3dbfc06e-ca4b-dd3e-b7ee-bc52803b3ee4
---

# DeclarativeContextDefinition Element

(SolutionManifestDeclarativeExtensions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The **DeclarativeContextDefinition** element derives from the **ContextDefinition** element. In intermediate declarative Microsoft Outlook 2010 solutions, this element is used to define a context for an external content type of **Outlook Item Type**, which this context definition group defines.

**Namespace**:
`http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest/DeclarativeExtensions`

**Schema**: SolutionManifestDeclarativeExtensions

```
<ContextDefinition xsl:type="DeclarativeContextDefinition" xmlns:xsl=http://www.w3.org/2001/XMLSchema-instance"  ContentType = "String" Description = "String"> </ContextDefinition>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

| Attribute | Description |
| --- | --- |
| **ContentType** | The type name of this context in Outlook 2010. Can be different from the name of the external content type in the model. The value that you specify here affects the name of the Outlook item type as it appears in the Outlook object model. In Outlook, the name is appended to the Outlook item type; the full name of an external content type is **Outlook.\<OutlookItemType\>.\<ContentType\>**. For example, a **Customer** external type could be **Outlook.Contact.Customer** if it is visualized as an Outlook Contact. If the external content type is visualized in a taskpane in Outlook, the full name is **EntityView.\<ContentType\>**. For example, **EntityView.Customer** indicates how a customer would be visualized in the taskpane. If you use the object model to work on Outlook items, this is the naming scheme that you use to identify your Outlook items. Required. Attribute type: **String** |
| **Description** | A description for the context definition. Optional. Attribute type: **String** |

### Child elements

| Element | Description |
| --- | --- |
| [Entities](https://msdn.microsoft.com/library/a36a61aa-3ea9-031a-88d3-706b494af5f0.aspx) | The **Entities** element defines the external content type that this context definition is associated with. Note that in the current release of the product, a context definition can be associated with only one external type, even though the schema supports associating a context definition with more than one **Entity** element. |
| [OfficeItemCustomizations](https://msdn.microsoft.com/library/476e961f-9c21-b096-2dbb-cfb87a2740f6.aspx) | The **OfficeItemCustomizations** element lists the Outlook user interface customizations that are defined for this context definition. |
| [Layouts Element in DeclarativeContextDefinition (SolutionManifestDeclarativeExtensions Schema)](layouts-element-in-declarativecontextdefinition-solutionmanifestdeclarativeexten.md) | The **Layouts** element lists the layouts that are defined for this context definition. |
| [Actions Element in DeclarativeContextDefinition (SolutionManifestDeclarativeExtensions Schema)](actions-element-in-declarativecontextdefinition-solutionmanifestdeclarativeexten.md) | The **Actions** element displays the actions that are defined for this context. |
| [ContextEventHandlers Element in DeclarativeContextDefinition (SolutionManifestDeclarativeExtensions Schema)](contexteventhandlers-element-in-declarativecontextdefinition-solutionmanifestdec.md) | The **ContextEventHandlers** element lists the actions to be executed when the context becomes active or when the context is deactivated. |

### Parent elements

None.

<br/>


<br/>
