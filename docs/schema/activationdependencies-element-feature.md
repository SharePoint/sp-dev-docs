---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a569a5cd-e3af-4393-acb9-504d388584fc
---

# ActivationDependencies Element (Feature)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a list of features on which the activation of the current feature depends.

## Definition

```XML
<ActivationDependencies>
</ActivationDependencies>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="activationdependency-element-feature.md">ActivationDependency</a></p></td>
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
<td align="left"><p><a href="feature-element-feature.md">Feature</a></p></td>
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
<td align="left"><p>Minimum: 0</p>
<p>Maximum: 1</p></td>
</tr>
</tbody>
</table>

## Remarks

If the Feature on which the current Feature depends is hidden and inactive, it is activated automatically. Such a hidden Feature is deactivated when the last Feature depending on it is deactivated. If the Feature is visible, it is not activated automatically. A hidden Feature cannot have any activation dependencies.

## Example

If included within a [Feature](feature-element-feature.md) element, the following code example prevents the current Feature from being activated unless the Feature with the specified ID is activated.

```XML
    <ActivationDependencies>
      <ActivationDependency
        FeatureId="11111111-1111-1111-1111-111111111111" />
    </ActivationDependencies>
```

For another example of how this element is used, see [Feature.xml Files](feature-xml-files.md).

<br/>








