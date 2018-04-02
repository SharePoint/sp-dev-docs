---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b8da155c-7f37-461a-84ab-99a41b0720ea
---

# Container Element 

(LayoutDefinitions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the layout for the External Data Parts.

**Namespace**: http://schemas.microsoft.com/office/2009/05/BusinessApplications/Layout

**Schema**: LayoutDefinitions

```XML
<Container ContainerType = "String" FillParent = "Boolean"> </Container>
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
<td align="left"><p>**ContainerType**</p></td>
<td align="left"><p>Required.</p>
<p>The container type.</p>
<p>The following table lists the possible values for this attribute.</p>
<div class="tableSection">
<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Value</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Stack</p></td>
<td align="left"><p>Specifies that Office External Parts in this layout will be stacked vertically or horizontally.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>**FillParent**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether this layout element is maximized within its parent.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
</tbody>
</table>

### Child elements

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
<td align="left"><p><span sdata="link"><a href="customproperties-element-in-uielement-layoutdefinitions-schema.md">CustomProperties Element in UIElement (LayoutDefinitions Schema)</a></span></p></td>
<td align="left"><p>The list of the custom properties.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="children-element-in-container-layoutdefinitions-schema.md">Children Element in Container (LayoutDefinitions Schema)</a></span></p></td>
<td align="left"><p>The list of the Office External Parts in this layout.</p></td>
</tr>
</tbody>
</table>

### Parent elements

None.








