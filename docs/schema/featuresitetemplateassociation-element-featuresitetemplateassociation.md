---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: ef7dc9b4-3009-40d8-b15b-24cd60d99d7c
---

# FeatureSiteTemplateAssociation Element (FeatureSiteTemplateAssociation)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Associates the specified Features with the specified [site definition configuration](http://msdn.microsoft.com/library/0d76bceb-7ffa-444a-98cf-0fa1d60a1aa3(Office.15).aspx) so that when websites are provisioned, the Features are automatically included.

## Definition

```XML
<FeatureSiteTemplateAssociation 
    Id = "Text" 
    TemplateName = "Text"> 
    <Property 
      Key= "Text" 
      Value = "Text">
    </Property>
</FeatureSiteTemplateAssociation>
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
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Required **Text**. Specifies the GUID for the Feature.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TemplateName**</p></td>
<td align="left"><p>Required **Text**. Specifies the name of the site definition configuration. SharePoint Foundation includes the following site definition configurations by default.</p>
<ul>
<li><p>**STS#0**&nbsp;&nbsp; Team Site</p></li>
<li><p>**STS#1**&nbsp;&nbsp; Blank Site</p></li>
<li><p>**STS#2**&nbsp;&nbsp; Document Workspace</p></li>
<li><p>**MPS#0**&nbsp;&nbsp; Basic Meeting Workspace</p></li>
<li><p>**MPS#1**&nbsp;&nbsp; Blank Meeting Workspace</p></li>
<li><p>**MPS#2**&nbsp;&nbsp; Decision Meeting Workspace</p></li>
<li><p>**MPS#3**&nbsp;&nbsp; Social Meeting Workspace</p></li>
<li><p>**MPS#4**&nbsp;&nbsp; Multipage Meeting Workspace</p></li>
<li><p>**BLOG#0**&nbsp;&nbsp;Blog</p></li>
<li><p>**SGS#0**&nbsp;&nbsp; Basic Group Work Site</p></li>
<li><p>**SGS#1**&nbsp;&nbsp; Blank Group Work Site</p></li>
<li><p>**WIKI#0**&nbsp;&nbsp;Wiki</p></li>
</ul>
<p>Note that WIKI provides a site definition configuration for legacy wiki sites that were originally created in an earlier version of SharePoint Foundation. Because standard site pages on SGS sites are wiki-enabled pages, you do not need to create sites that are specifically for wikis.</p></td>
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
<td align="left"><p><a href="property-element-featuresitetemplateassociation.md">Property</a></p></td>
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
<td align="left"><p><a href="elements-element-featuresitetemplateassociation.md">Elements</a></p></td>
</tr>
</tbody>
</table>

## Example

For an example of how this element is used, see [Feature/Site Template Associations](feature-site-template-associations.md).








