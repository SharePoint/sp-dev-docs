---
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
keywords:
- features [sharepoint 2010], schemas,schemas [SharePoint 2010], Features,Features [SharePoint 2010]
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a9f6f15e-3489-4677-b579-db330638a853
---

# SharePoint Features schemas

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Different Features require different file formats, depending on the type of customization you are making. In most cases, a Feature.xml file contains a [Feature](feature-element-feature.md) element that uniquely identifies the Feature, specifies its scope, and points to an XML file whose top-level **Elements** element defines the elements comprising the Feature.

A Feature, however, might not include an Elements file, and may consist of a Feature.xml file whose **Feature**
element, in addition to providing the previously described specifications, points to an assembly that is used in the Feature, such as in the case of declaring an event receiver.

In addition to describing the file format of [Feature.xml Files](feature-xml-files.md) and the Feature sections in [Site Definition (Onet.xml) Files](site-definition-onet-xml-files.md), this section describes the file formats used for the following Feature types:

- [Client Web Part Definition schema](client-web-part-definition-schema.md)

- [Content Type Bindings](content-type-bindings.md)

- [Content Type Definitions](content-type-definitions.md)

- [Custom Action Definition schema](custom-action-definition-schema.md)

- [Delegate Controls](delegate-controls.md)

- [Document Converter](document-converter.md)

- [Event Registrations](event-registrations.md)

- [Feature.xml Files](feature-xml-files.md)

- [Feature/Site Template Associations](feature-site-template-associations.md)

- [Field Definitions](field-definitions.md)

- [List Instances](list-instances.md)

- [List Template Files](list-template-files.md)

- [Modules](modules.md)

- [Property Bag schema](property-bag-schema.md)

- [Site Definition (Onet.xml) Files](site-definition-onet-xml-files.md)

- [Web Template XML](web-template-xml.md)

- [Workflow Definitions](workflow-definitions.md)

 





