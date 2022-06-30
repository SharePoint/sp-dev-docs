---
title: SolutionDefinition Element
description: SolutionDefinition Element specifies the root element of a Microsoft Business Connectivity Services (BCS) solution manifest file.
manager: soliver
ms.date: 06/14/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 1e7a8225-6a52-ba74-e109-2ec7eddaca3d
---

# SolutionDefinition Element

(SolutionManifestDefinitions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the root element of a Microsoft Business Connectivity Services (BCS) solution manifest file. A solution manifest file enables a solution developer to describe the user interface (UI), behavior, and business logic associated with a Microsoft Outlook Item Type such as Outlook Contact, Task, Post, or Calendar.

For example, in the manifest file, a solution developer would be able to indicate that for an Outlook Item Type of Contact, a certain UI should be used (example, an Office External Part) and a specific method from the external system (for example, **UpdateCustomerInstance(ID, NewInstanceValues)** should be called when the data in the item changes. There will always be at least one namespace declaration on the **SolutionDefinition** element, typically:

**Namespace**: `http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest`

**Schema**: SolutionManifestDefinitions

```XML
    xmlns="http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest"
```

This is necessary to identify the contents of the XML file as a Business Connectivity Services solution manifest file. The URI part must be written exactly as shown. You can also use a prefix such as `<<solm>>` but if you do that, you would have to name the elements `<solm:SolutionDefinition>` instead of `<SolutionDefinition>`.

```XML
<SolutionDefinition></SolutionDefinition>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None.

### Child elements

| Element | Description |
| --- | --- |
| [SolutionSettings Element in SolutionDefinition (SolutionManifestDefinitions Schema)](solutionsettings-element-in-solutiondefinition-solutionmanifestdefinitions-schem.md) | Defines the settings for this Business Connectivity Services solution such as the ID, display name, and description. |
| [ContextDefinitionGroups Element in SolutionDefinition (SolutionManifestDefinitions Schema)](contextdefinitiongroups-element-in-solutiondefinition-solutionmanifestdefinition.md) | Defines the context definitions that are part of this solution, grouped by the Outlook Item Type to which they refer. The manifest file can contain a context definition group containing a list of context definitions for each one of the Outlook Item Types such as Contact, Task, Post, or Calendar, or EntityView if showing related external data in a task pane. |

### Parent elements

None.

<br/>

<br/>
