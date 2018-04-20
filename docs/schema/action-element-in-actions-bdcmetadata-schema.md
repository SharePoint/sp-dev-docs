---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.Action Element
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f58b96c0-77a8-69d3-8710-fff03d4970b9
---

# Action element in Actions 

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies an action supported by an external content type.

**Namespace**: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema**: BDCMetadata

Actions bridge the gap between Microsoft SharePoint 2010 and Microsoft Office 2010 and an external system's user interface by providing a link back to the external system.

By default, the Business Data Connectivity (BDC) service provides actions such as **View Item**, **Edit Item**, and **Delete Item** after you model these operations in the BDC model. In addition to these default actions, you can create actions for other functionality that you want to attach to your external content type. For example, you can use actions to perform simple actions such as to send email messages to a customer from the Customer external content type or to open a customer's home page in a browser.

Actions travel with an external content type. That is, after you define an action for an external content type, the action appears everywhere you display that external content type—whether in an external list or Business Data Web Part or in an External Data column.

```XML
<Action Position = "Integer" IsOpenedInNewWindow = "Boolean" Url = "String" ImageUrl = "String" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"></Action>
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
<td align="left"><p>**Position**</p></td>
<td align="left"><p>Required.</p>
<p>The suggested position of this action among the other actions of this external content type.</p>
<p>Attribute type: **Integer**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsOpenedInNewWindow**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the results of executing an action are presented in a new user interface window.</p>
<p>Default value: **false**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Url**</p></td>
<td align="left"><p>Required.</p>
<p>The URL to go to when the action is invoked. The URL string is a Microsoft .NET Framework format string. Each format specifier (for example, {0}) corresponds to an **Action** parameter.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageUrl**</p></td>
<td align="left"><p>Optional.</p>
<p>The absolute or relative path to the icon image for the action. The icon image should be 16 x 16 pixels.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of this action.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DefaultDisplayName**</p></td>
<td align="left"><p>Optional.</p>
<p>The default display name for this action.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsCached**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether this action is used frequently. This is used by the BDC client runtime to cache this action.</p>
<p>Default value: **true**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
</tbody>
</table>

<br/>

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
<td align="left"><p><span sdata="link"><a href="localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md">LocalizedDisplayNames element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The localized names of the action.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-bdcmetadata-schema.md">Properties element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The properties of the action.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="actionparameters-element-in-action-bdcmetadata-schema.md">ActionParameters element in Action (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The parameters of the action.</p></td>
</tr>
</tbody>
</table>

<br/>

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
<td align="left"><p><span sdata="link"><a href="actions-element-in-entity-bdcmetadata-schema.md">Actions element in Entity (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The list of actions of an external content type.</p></td>
</tr>
</tbody>
</table>








