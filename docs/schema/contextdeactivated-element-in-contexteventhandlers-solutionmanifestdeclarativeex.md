---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e11d1c83-a2b8-5f26-5ecb-0a0d5197bbf7
---


# ContextDeactivated Element in ContextEventHandlers 

(SolutionManifestDeclarativeExtensions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Enables you to execute a specified action when a context is deactivated. For example, this can be used to execute a custom action to do cleanup when a context is deactivated.

**Namespace**:
http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest/DeclarativeExtensions

**Schema**: SolutionManifestDeclarativeExtensions

```XML
<ContextDeactivated  ActionName = "String" Description = "String"> </ContextDeactivated>
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
<td align="left"><p>**ActionName**</p></td>
<td align="left"><p>The name of the action to execute.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>A description for the action.</p>
<p>Optional.</p>
<p>Attribute type: **String**</p></td>
</tr>
</tbody>
</table>

### Child elements

None.

### Parent elements

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="contexteventhandlers-element-in-declarativecontextdefinition-solutionmanifestdec.md">ContextEventHandlers Element in DeclarativeContextDefinition (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>The context event handlers for the context.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>








