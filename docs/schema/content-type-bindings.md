---
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5ea25a00-6a99-4073-976e-336706fb7bc9
---

# Content Type Bindings

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Each element manifest file that specifies a content type binding must adhere to the Content Type Binding Definition Schema.

Content type binding enables you to provision a content type on a list defined in the onet.xml schema. Lists defined in the onet.xml schema cannot be modified directly.

Following is a list of the elements in the Content Type Binding Definition Schema.

- [ContentTypeBinding Element (ContentTypeBinding)](contenttypebinding-element-contenttypebinding.md)

- [Elements Element (ContentTypeBinding)](elements-element-contenttypebinding.md)

## Content Type Binding Definition schema example

The following example specifies a content type to bind to the specified list type.

```XML 
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <ContentTypeBinding
        ContentTypeId="0x010100C5A8DB52D9D0A14D9B2FDCC96666E9F2" 
        ListUrl="_catalogs/masterpage"
      />
    </Elements>
```

<br/>

## See also

- [Content Type Definitions](content-type-definitions.md)










