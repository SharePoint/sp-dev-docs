---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0c401210-8f56-70d1-a337-ac7ad529ef16
---

# Identities Element in Subscription 

(Subscription Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Lists the explicit identities this cache subscription contains.

**Namespace**: http://schemas.microsoft.com/office/2006/03/BusinessDataCatalog

**Schema**: Subscription

```XML
<Identities></Identities>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None.

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
<td align="left"><p><span sdata="link"><a href="identity-element-in-identities-subscription-schema.md">Identity Element in Identities (Subscription Schema)</a></span></p></td>
<td align="left"><p>The serialized value of an identity of an external item. You can get the serialized value of an identity by calling the **Serialize** method on the **Identity** object.</p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p><span sdata="link"><a href="subscription-element-subscription-schema.md">Subscription Element (Subscription Schema)</a></span></p></td>
<td align="left"><p>The cache subscription that contains this list of explicit identities.</p></td>
</tr>
</tbody>
</table>








