---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 70ecf495-6f5d-abb5-c8cc-a3c88faf186b
---

# Parameters Element in ActionDefinition 

(SolutionManifestDeclarativeExtensions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The **Parameters** element lists all the parameters that an action accepts.

**Namespace**: 
http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest/DeclarativeExtensions

**Schema**: SolutionManifestDeclarativeExtensions

```
<Parameters > </Parameters>
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
<td align="left"><p><span sdata="link"><a href="constantparameter-element-in-actionparameterdefinitions-solutionmanifestdeclarat.md">ConstantParameter Element in ActionParameterDefinitions (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>The **ConstantParameter** element defines a constant parameter for an action.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="expressionparameter-element-in-actionparameterdefinitions-solutionmanifestdeclar.md">ExpressionParameter Element in ActionParameterDefinitions (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>The **ExpressionParameter** element defines a parameter for an action that can take a value from the context of the current item.</p></td>
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
<td align="left"><p><span sdata="link"><a href="urlaction-element-in-actions-solutionmanifestdeclarativeextensions-schema.md">UrlAction Element in Actions (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>The **DOCS-LESSTHANUrlActionDOCS-GREATERTHAN** element is used to execute a URL-based action.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="codemethodaction-element-in-actions-solutionmanifestdeclarativeextensions-schema.md">CodeMethodAction Element in Actions (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>The **DOCS-LESSTHANCodeMethodActionDOCS-GREATERTHAN** element is used to execute a custom code action or one of the predefined actions that are provided by Microsoft Business Connectivity Services (BCS).</p></td>
</tr>
</tbody>
</table>


<br/>

<br/>







