---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 082dcea0-3ac6-b534-08c2-3ab87f3348a8
---

# ContextDefinition Element in ContextDefinitionGroup 

(SolutionManifestDefinitions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Defines a context for an external content type of Outlook Item Type that this context definition group defines.

**Namespace**: http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest

**Schema**: SolutionManifestDefinitions

```XML
<ContextDefinition ContentType = "String" Description = "String"> </ContextDefinition>
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
<td align="left"><p>**ContentType**</p></td>
<td align="left"><p>Required.</p>
<p>The type name of this context in Microsoft Outlook 2010. This can be different from the name of the external content type in the model. The value you specify here affects the name of the Outlook Item Type as it will appear in the Outlook object model. In Outlook, the name will be appended to the Outlook Item Type and the full name of an external content type will be `OutlookDOCS-LESSTHANOutlookItemTypeDOCS-GREATERTHANDOCS-LESSTHANContentTypeDOCS-GREATERTHAN`<br/>For example, a Customer external type could be `OutlookContactCustomer` in Outlook if it is visualized as an Outlook Contact. 
<p>If the external content type is visualized in a task pane in Outlook, the content type has to be in the following format: `length_of_entity_namespace length_of_entity_name length_of_view_name entity_namespace entity_name view_name position_of_entity_namespace`<br/>For example, `12 12 24 AWWSExample OrderHeader GetSalesOrderHeaderById 9`.</p>
<p>If you use the object model to work on the Outlook items, this is the naming scheme you will use to identify your Outlook items.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional.</p>
<p>A description for the context definition.</p>
<p>Attribute type: **String**</p></td>
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
<td align="left"><p><span sdata="link"><a href="entities-element-in-contextdefinition-solutionmanifestdefinitions-schema.md">Entities Element in ContextDefinition (SolutionManifestDefinitions Schema)</a></span></p></td>
<td align="left"><p>Defines the external content type that this context definition is associated with. In the current release of the product, a context definition can be associated with only one external type, even though the schema supports more than one **Entity** element.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="officeitemcustomizations-element-in-contextdefinition-solutionmanifestdefinition.md">OfficeItemCustomizations Element in ContextDefinition (SolutionManifestDefinitions Schema)</a></span></p></td>
<td align="left"><p>Lists the Outlook UI customizations defined in this context definition.</p></td>
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
<td align="left"><p><span sdata="link"><a href="contextdefinitiongroup-element-in-contextdefinitiongroups-solutionmanifestdefini.md">ContextDefinitionGroup Element in ContextDefinitionGroups (SolutionManifestDefinitions Schema)</a></span></p></td>
<td align="left"><p>The context definition group that contains this context definition.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>








