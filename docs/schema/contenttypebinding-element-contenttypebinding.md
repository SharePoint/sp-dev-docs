---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0e8825a9-29a0-48ee-bf97-2276e786fb46
---

# ContentTypeBinding Element (ContentTypeBinding)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a content type to provision on a list defined in the onet.xml schema.

## Definition

```XML
<ContentTypeBinding
    ContentTypeId="Text"
    ListUrl="Text" 
    RootWebOnly="TRUE" | "FALSE"
/>
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
<td align="left"><p>**ContentTypeId**</p></td>
<td align="left"><p>Required **Text**. A string that represents the content type ID of the site content type to add to the specified list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ListUrl**</p></td>
<td align="left"><p>Required **Text**. A string that represents the Web-relative path to the list to which to add the content type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RootWebOnly**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to associate this binding only on the root Web site in a site collection.</p></td>
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
<td align="left"><p>None</p></td>
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
<td align="left"><p><span sdata="link"><a href="elements-element-contenttypebinding.md">Elements Element (ContentTypeBinding)</a></span></p></td>
</tr>
</tbody>
</table>

### Remarks

Lists defined in the onet.xml schema cannot be modified directly.

## Example

Following is an example of the **ContentTypeBinding** element specifying the content type to bind to the specified list.

```XML
    <?xml version="1.0" encoding="utf-8" ?> 
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
        <ContentTypeBinding ContentTypeId="0x010102" ListUrl="Shared Documents" />
        <ContentTypeBinding ContentTypeId="0x010108" ListUrl="Shared Documents" />
    </Elements>
```

## See also

- [Content Type Bindings](content-type-bindings.md)








