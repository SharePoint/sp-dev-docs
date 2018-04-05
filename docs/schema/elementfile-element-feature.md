---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: bd43638e-8f18-4a0d-b122-1c055f97aa71
---

# ElementFile Element (Feature)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a support file required for the Feature.

## Definition

```XML
<ElementFile
  Location = "Text">
</ElementFile>
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
<td align="left"><p>**Location**</p></td>
<td align="left"><p>Required **Text**. Specifies the relative file path to a support file for the Feature, for example, `"controls\searcharea.xml"`.</p></td>
</tr>
</tbody>
</table>

### Child elements

None

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="elementmanifests-element-feature.md">ElementManifests</a></p></td>
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
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>

## Example

In the following example, the **ElementFile** element is used to deploy language resources used to localize a Feature.

```XML
    <Feature xmlns="http://schemas.microsoft.com/sharepoint/"
      Id="4f670c98-0b81-41e0-8793-ab4325c57938"
      Title="$Resources:WeeklyStatusListFeature"
      Description="$Resources:WeeklyStatusListFeatureDesc"
      Scope="Web">
      <ActivationDependencies>
        <ActivationDependency FeatureId="e874ff63-dd9b-49ec-a96e-6e4ba163838e"
           FeatureDescription="$Resources:WeeklyStatusReportFeatureDesc"
           FeatureTitle="$Resources:WeeklyStatusReportFeature" />
      </ActivationDependencies>
      <ElementManifests>
        <ElementManifest Location="ListInstance1\Elements.xml" />
        <ElementManifest Location="Resources\Elements.xml" />
        <ElementFile Location="Resources\Resources.resx" />
        <ElementFile Location="Resources\Resources.es-es.resx" />
        <ElementFile Location="Resources\Resources.en-us.resx" />
      </ElementManifests>
    </Feature>
```

<br/>







