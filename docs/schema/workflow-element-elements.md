---
title: Workflow Element (Elements)
description: Describes the Workflow element (elements) and provides the element's definition, attributes, remarks, and an example.
manager: soliver
ms.date: 06/07/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 57efcd92-6cd3-465e-af3b-12a17d6b2c35
---

# Workflow Element (Elements)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Defines a workflow.

## Definition

```XML
<Workflow
  Title="Text"
  Name="Text"
  CodeBesideAssembly="Text"
  CodeBesideClass="Text"
  Description="Text"
  Id="Text"
  EngineClass="Text"
  EngineAssembly="Text"
  AssociationUrl="Text"
  InstantiationUrl="Text"
  ModificationUrl="Text"
  StatusUrl="Text"
  TaskListContentTypeId="Text" >
</Workflow>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes


| Attribute | Description |
| --- | --- |
| **Title** | Optional **Text**. |
| **Name** | Required **Text**. Specifies the workflow name that is displayed in the SharePoint Foundation interface. The workflow name can be up to 256 characters long. |
| **CodeBesideAssembly** | Required **Text**. Specifies the strong name of the code beside assembly. |
| **CodeBesideClass** | Required **Text**. Specifies the name of the workflow class in the code-beside file used to generate the workflow assembly. This should include the namespace of the class. |
| **Description** | Optional **Text**. Specifies the workflow description to be displayed in the SharePoint Foundation interface. The workflow description can be up to 256 characters long. |
| **Id** | Required **Text**. Specifies the globally unique identifier (GUID) for the workflow. |
| **EngineClass** | Reserved for future use. |
| **EngineAssembly** | Reserved for future use. |
| **AssociationUrl** | Optional **Text**. Specifies the URL of the association form for this workflow. Set the value of the **AssociationURL** attribute to the custom form page you want to use for workflow association. For example:<br><br> `AssociationURL` = `MyWkflAssociationPage.aspx`<br><br>**Note**: SharePoint Foundation supports absolute or server-relative paths in the workflow template definition. All form path URLs must be expressed in one of these formats; for example, an absolute path, such as `"http://site/library/page.aspx"` or a server-relative path, such as `"/layouts/page.aspx"`. SharePoint Foundation does not support link fix-up in workflow template definitions.<br><br>To use the same form for instantiation and association of the workflow, set both elements to that form.<br><br>For more information about association forms, see [Workflow Association and Initiation Forms (Windows SharePoint Services)](https://msdn.microsoft.com/library/ffdfe5a7-f860-47b0-80e0-2dc2bd36ed38(Office.15).aspx). |
| **InstantiationUrl** | Optional **Text**. Specifies the URL of the initiation form for this workflow. For example:<br><br>`InstantiationURL` = `MyWorkflowInitiationPage.aspx`<br><br>**Note**: SharePoint Foundation supports absolute or server-relative paths in the workflow template definition. All form path URLs must be expressed in one of these formats; for example, an absolute path, such as `"http://site/library/page.aspx"` or a server-relative path, such as `"/layouts/page.aspx"`. SharePoint Foundation does not support link fix-up in workflow template definitions.<br><br>For more information about initiation forms, see [Workflow Association and Initiation Forms (Windows SharePoint Services)](https://msdn.microsoft.com/library/ffdfe5a7-f860-47b0-80e0-2dc2bd36ed38(Office.15).aspx). |
| **ModificationUrl** | Optional **Text**. Specifies the URL of the form handling the modifications for this workflow. If your workflow includes multiple modifications, you can program the form you specify with this attribute to:<br><br><li> Display a different view of the form, based on the modification identifier passed to this form.<br><li> Redirect to a separate form, based on the modification identifier passed to this form.<br>  </li> <br>For more information about modification forms, see [Workflow Modification Forms (Windows SharePoint Services)](https://msdn.microsoft.com/library/fba5147d-70a7-4f83-8efc-2fe0a5d0b4a7(Office.15).aspx). |
| **StatusUrl** | Obsolete. Do not use. |
| **TaskListContentTypeId** | Optional **Text**. Specifies the content type ID of the content type assigned to the workflow task list.<br><br>For more information about task forms, see [Workflow Task Forms (Windows SharePoint Services)](https://msdn.microsoft.com/library/327137dd-9a2b-4df6-be48-582a4b41aaa9(Office.15).aspx). |

### Child elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="associationdata-element-workflow.md">AssociationData Element (Workflow)</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="metadata-element-workflow.md">MetaData Element (Workflow)</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="categories-element-workflow.md">Categories Element (Workflow)</a></p></td>
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
<td align="left"><p><a href="elements-element-workflow.md">Elements Element (Workflow)</a></p></td>
</tr>
</tbody>
</table>

### Remarks

For more information about association and initiation forms, see [Workflow Association and Initiation Forms (Windows SharePoint Services)](https://msdn.microsoft.com/library/ffdfe5a7-f860-47b0-80e0-2dc2bd36ed38(Office.15).aspx).

## Example

Following is an example of the **Workflow** element in a workflow definition elements file. The example has been edited for clarity.

```XML
    <?xml version="1.0" encoding="utf-8" ?>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <Workflow
            Name="AdventureWorksWorkflow"
            Description="Use this workflow to track sequential tasks of users."
            Id="C6964BFF-BG8D-41ac-AC5E-B61EC111731C"
            CodeBesideClass="AdventureWorks.Workflow1"
            CodeBesideAssembly="AdventureWorks, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e3bce121e9429c"
            TaskListContentTypeId="0x01080100C9C9515DE4E24001905074F980F93160"
            AssociationUrl="_layouts/myAssocPage.aspx"
            InstantiationUrl="_layouts/myIniPage.aspx"
            ModificationUrl="_layouts/myModPage.aspx">
        <Categories/>
        <AssociationData>
          …
        </AssociationData>
        <MetaData>
          …
        </MetaData>
      </Workflow>
    </Elements>
```

## See also

- [Workflow Definitions](workflow-definitions.md)
- [Workflows in Windows SharePoint Services](https://msdn.microsoft.com/library/be0888d4-20b2-4d39-bf28-2d8a71829d8e(Office.15).aspx)
- [Workflow Deployment Using Features](https://msdn.microsoft.com/library/ad294f09-483d-4e87-bd19-fa37795ed558(Office.15).aspx)
- [Workflow Association and Initiation Forms (Windows SharePoint Services)](https://msdn.microsoft.com/library/ffdfe5a7-f860-47b0-80e0-2dc2bd36ed38(Office.15).aspx)
- [Workflow Modification Forms (Windows SharePoint Services)](https://msdn.microsoft.com/library/fba5147d-70a7-4f83-8efc-2fe0a5d0b4a7(Office.15).aspx)
- [Workflow Task Forms (Windows SharePoint Services)](https://msdn.microsoft.com/library/327137dd-9a2b-4df6-be48-582a4b41aaa9(Office.15).aspx)
