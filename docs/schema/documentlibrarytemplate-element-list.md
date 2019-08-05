---
title: "DocumentLibraryTemplate element (List)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- List schema
api_type:
- schema
ms.assetid: eb0ec0a6-82a9-4f92-8d82-c685c287e9e1
description: Used in the wire protocol that the server uses to export list metadata to the SharePoint Designer client. This element specifies which file serves as the template document for a document library. 
---

# DocumentLibraryTemplate element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in the wire protocol that the server uses to export list metadata to the SharePoint Designer client. This element specifies which file serves as the template document for a document library. 
  
```XML
<DocumentLibraryTemplate>
</DocumentLibraryTemplate>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

None
   
### Parent elements

- [Metadata](metadata-element-list.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1 
   
## Example

The following example indicates that the document library whose schema is currently being retrieved has MyDocLib/Forms/template.htm as its template:
  
```XML
<List>
  <MetaData>
    ...
    <DocumentLibraryTemplate>MyDocLib/Forms/template.htm
    </DocumentLibraryTemplate>
    ...
  </MetaData>
</List>
```

## See also

- [DocumentTemplate element (Site)](documenttemplate-element-site.md)
- [DocumentTemplates element (Site)](documenttemplates-element-site.md)

   
<br/> 

