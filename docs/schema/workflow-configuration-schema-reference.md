---
manager: laurawi
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 63824239-6eb2-4cf1-ba84-44eace4d3781
---

# Workflow configuration schema reference

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The workflow configuration file contains the information necessary to create a workflow template in SharePoint Foundation from the specified workflow markup and rules files, and to associate it to a specific list. Information included in the workflow configuration file includes:

- The workflow markup and rules files to use, including the appropriate version of those files to use.

- The list to which the workflow should be associated.

- The task list and history list for the workflow to use.

- Conditions under which the workflow starts.

- Workflow initiation form location, data fields, and default values.

The workflow configuration file is specified as a parameter for the following methods of the **websvcWebPartPages** Web Service. These methods enable Microsoft SharePoint Designer 2010 to create declarative workflow templates and associate those workflow templates with SharePoint Foundation 2010 lists.

- **ValidateWorkflowMarkupAndCreateSupportObjects(String, String, String, String)**

  Use this method to validate the workflow markup of a declarative workflow, and optionally, to create the support objects necessary for that workflow to run.

- **AssociateWorkflowMarkup(String, String)**

  Use this method to create a workflow template, and associate that workflow template with the specified SharePoint list.

For more information about creating workflow editors, see [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx).

The workflow configuration schema contains the following elements:

- [WorkflowConfig element](workflowconfig-element.md)

- [Template element (WorkflowConfig)](template-element-workflowconfig.md)

- [Association element (WorkflowConfig)](association-element-workflowconfig.md)

- [ContentTypes element (WorkflowConfig)](contenttypes-element-workflowconfig.md)

- [ContentType element (WorkflowConfig)](contenttype-element-workflowconfig.md)

- [Initiation element (WorkflowConfig)](initiation-element-workflowconfig.md)

- [Fields element (WorkflowConfig)](fields-element-workflowconfig.md)

- [Parameters element (WorkflowConfig)](parameters-element-workflowconfig.md)

- [Parameter element (WorkflowConfig)](parameter-element-workflowconfig.md)


### Description

Elements have been edited for readability.

### Code

```XML 
    <WorkflowConfig>
      <Template
        BaseID="{68B99644-EDCE-4988-9D11-7FD5CCAE09CC}"
        DocLibID="{74FAE22C-0176-46DF-AA12-988CE79C8889}"
        XomlHref="Workflows/Notify Me/Notify Me.xoml"
        XomlVersion="V3.0"
        RulesHref="Workflows/Notify Me/Notify Me.xoml.rules"
        RulesVersion="V3.0"
      >
      </Template>
      <Association
        ListID="{B8C6FEEA-8066-462E-958D-1B4E90FE1C34}"
        TaskListID="{C64BA541-9D5B-42F3-A989-96F56FD51155}"
        StartManually="true"
        StartOnCreate="true"
      >
      </Association>
      <ContentTypes>
        <ContentType 
          Name="Review New Document" 
          ContentTypeID=
            "0x0108010086C115D5C5C27B439C22EB22F050B49B00DD9F97273595EA4BA32838A26054BF08" 
          Form="/Workflows/Notify Me/Review New Document.aspx" 
          Description="Workflow used to review new documents">
          <Fields/>
        </ContentType>
      </ContentTypes>
      <Initiation 
        URL="Workflows/Notify Me/Notify Me.aspx">
        <Fields>
          <Field 
            Name="Reason_for_Review" 
            …
            DisplayName="Reason for Review" 
            …
          >
            <Default>Standard review of new documents</Default>
          </Field>
        </Fields>
        <Parameters>
          <Parameter Name="Reason_for_Review" Type="System.String" />
        </Parameters>
      </Initiation>
    </WorkflowConfig>
```

## See also

- [Workflow Development for SharePoint Foundation](https://msdn.microsoft.com/library/ad7a5bf2-fab0-4b30-ae0b-46b15f16b491(Office.15).aspx)
- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)
- [SharePoint Designer Workflow Overview](https://msdn.microsoft.com/library/5ef4e933-564e-4dea-b2f4-c1b621774969(Office.15).aspx)



 


