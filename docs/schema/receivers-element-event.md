---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1290b4ef-956f-4775-82cc-07f9b812c0f9
---

# Receivers Element (Event)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Contains the description of an event receiver for handling item events in lists created through the specified list template.

## Definition

```XML
<Receivers
  ListTemplateId = "Text"
  ListTemplateOwner = "Text"
  ListUrl = string
  RootWebOnly = TRUE | FALSE
  Scope = Site | Web>
</Receivers>
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
<td align="left"><p>**ListTemplateId**</p></td>
<td align="left"><p>Optional **Text**. Specifies the index of the list template to which the event receiver applies. For a list of the default list template types, see <span sdata="cer" target="T:Microsoft.SharePoint.SPListTemplateType"><span class="nolink">SPListTemplateType</span></span>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ListTemplateOwner**</p></td>
<td align="left"><p>Optional **Text**. Specifies the GUID of the list template owner if the list template is registered through Features, or the name of the site definition if the list template is registered by a site definition.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ListUrl**</p></td>
<td align="left"><p>Optional **string**. Specifies the URL of the list to which the event receiver applies.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RootWebOnly**</p></td>
<td align="left"><p>Optional **Boolean**. **True** if the event receiver applies only to the root Web; otherwise, **False**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Scope**</p></td>
<td align="left"><p>Optional **enumeration**. The scope of the event receiver. This can be **Site** or **Web**. When the **Scope** attribute is set to **Site**, event receivers that are defined inside of a Feature that is scoped to the site collection are registered at the site collection level. When the **Scope** attribute is set to **Web**, event receivers that are defined inside of a Feature that is scoped to a Web are registered on the Web.</p></td>
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
<td align="left"><p><a href="receiver-element-event.md">Receiver</a></p></td>
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
<td align="left"><p><a href="elements-element-event.md">Elements</a></p></td>
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
<td align="left"><p>Minimum: 1</p>
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>


## Example

For an example of how this element is used, see [Event Registrations](event-registrations.md).

A **Receivers** tag can imply a site-wide event registration or an event registration for the root Web. The **Scope** attribute is used to define at what level the event receivers are applied. If the **Receivers** tag has no **ListTemplateId** or **ListUrl** attribute, the event receiver is registered at the same scope as the Feature. 

For example, a Feature that is scoped to the Web results in an event receiver being added to an event receiver collection that is scoped to the Web.

<br/>








