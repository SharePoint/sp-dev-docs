---
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
keywords:
- workflow schemas, overview
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 34e1e631-e1b5-437b-a861-029ef327d3d3
---

# Workflow Definitions

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Each element manifest that defines a workflow must adhere to the Workflow Definition schema. A workflow definition is an XML file that contains the information that SharePoint Foundation requires to instantiate and run the workflow, such as the following:

- The name, GUID, and description of the workflow

- The URLs of any custom forms used in this workflow

- The names of the workflow assembly, and the class within that assembly to call

- Optionally, any custom metadata the workflow requires to run

The structure of the workflow definition schema is as follows.

- [Elements element (Workflow)](elements-element-workflow.md)

- [Workflow element (Elements)](workflow-element-elements.md)

- [Categories element (Workflow)](categories-element-workflow.md)

- [AssociationData element (Workflow)](associationdata-element-workflow.md)

- [MetaData element (Workflow)](metadata-element-workflow.md)

- [InitiationType element (Workflow)](initiationtype-element-workflow.md)

- [Modification\_GUID\_Name element (Workflow)](modification_guid_name-element-workflow.md)

- [StatusPageUrl element (Workflow)](statuspageurl-element-workflow.md)

- [ExtendedStatusColumnValues element (Workflow)](extendedstatuscolumnvalues-element-workflow.md)

- [StatusColumnValue element (Workflow)](statuscolumnvalue-element-workflow.md)



## See also

- [Workflow Deployment Using Features](https://msdn.microsoft.com/library/ad294f09-483d-4e87-bd19-fa37795ed558(Office.15).aspx)








