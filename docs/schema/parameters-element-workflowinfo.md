---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 300b5383-cbdd-4a74-aaee-556c70dab65b
---

# Parameters Element (WorkflowInfo)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Container for all **Parameter** elements, and contains no definable attributes. Includes the descriptions of the parameters in a condition or action method signature.

The **Parameters** element is a complex element type and can be used with both **Actions** and **Conditions** elements to define their parameters.

## Definition

```XML
<Conditions>
  <Condition>
    <Parameters>
    <Parameter />
    </Parameters>
  </Condition>
</Conditions>
<Actions>
  <Action>
    <Parameters>
      <Parameter />
    </Parameters>
  </Action>
</Actions>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="parameter-element-workflowinfo.md">Parameter</a></p></td>
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
<td align="left"><p><a href="condition-element-workflowinfo.md">Condition</a></p>
<p><a href="action-element-workflowinfo.md">Action</a></p></td>
</tr>
</tbody>
</table>

## Example

The following example demonstrates how to construct the **Parameters** element so that the workflow engine can interact with the assembly code.

```XML
    <WorkflowInfo>
       <Conditions>
          <Default>…</Default>
          <Condition>…</Condition>
          <Parameters>
             <Parameter />
          </Parameters>
       </Conditions>
       <Actions Sequential="then" Parallel="and">
          <Action Name="Update my custom SharePoint list"
                  ClassName="CustomActivities.OrderListFunctions"
                  Assembly="CustomActivities,
                            PublicKeyToken=71e9bce111e9429c,
                            Version=1.0.0.0,
                            Culture=neutral"
                  Category="My Custom Actions"
                  CreatesTask="true"
                  CreatesInList="UpdateList"
                  AppliesTo="all"
                  ListModeration="false"
                  UsesCurrentItem="true">
             <RuleDesigner Sentence="Update %1">
                <FieldBind Field="UpdateList"
                           Function="UpdateOrderList"
                           DesignerType="ChooseListItem"
                           ID="1"
                           Text="My Custom List">
                </FieldBind>
             </RuleDesigner>
          <Parameters>
             <Parameter Type="System.String, mscorlib"
                        Direction="In"
                        Name="UpdateList" />
          </Parameters>
          </Action>
       </Actions>
    </WorkflowInfo>
```

## See also

- [.ACTIONS File Example](actions-file-example-workflowinfo.md)
- [Default Workflow Actions](default-workflow-actions-workflowinfo.md)
- [Default Workflow Conditions](default-workflow-conditions-workflowinfo.md)
- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/en-us/library/office/bb417436.aspx)
- [Workflow Actions Schema Overview](https://msdn.microsoft.com/en-us/library/office/bb897626.aspx)






