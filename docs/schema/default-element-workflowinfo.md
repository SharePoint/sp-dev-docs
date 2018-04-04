---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 24ffa55e-9c63-4e52-ba2d-3382155a16ca
---

# Default Element (WorkflowInfo)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The **Default** element is a container for other elements and has no definable attributes.

> [!NOTE] 
> The **Default** element is only read from the default WSS.ACTIONS file and cannot be overridden with a custom .ACTIONS file.

## Definition

```XML
<Default>
        <RuleDesigner>
            <FieldBind>
                <Option>…</Option>
            </FieldBind>
        </RuleDesigner>
</Default>
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
<td align="left"><p>**ItemKeyType**</p></td>
<td align="left"><p>Optional **text**. The implementation-specific identifier for the default object type.</p></td>
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
<td align="left"><p><a href="ruledesigner-element-workflowinfo.md">RuleDesigner</a></p></td>
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
<td align="left"><p><a href="conditions-element-workflowinfo.md">Conditions</a></p></td>
</tr>
</tbody>
</table>

### Remarks

When you create workflows by using a declarative, code-free workflow editor, such as Microsoft SharePoint Designer 2010, the .ACTIONS file that is installed on the server is combined into a single list of items and displayed to the workflow editor. Microsoft SharePoint Foundation 2010 then searches for existing workflow conditions. If SharePoint Foundation 2010 finds a condition that is not represented by an entry in an .ACTIONS file, the **Default** element sentence is displayed for that condition.

### Example

The following XML demonstrates how to construct a **Default** element to make it visible to the workflow editor.

```XML
    <WorkflowInfo Language="en-us">
       <Conditions And="and" Or="or" Not="not" When="If" Else="ElseIf">
          <Condition 
                  AppliesTo="list" 
                  Assembly="MyWorkflowProject.Workflow1
                            PublicKeyToken=71e9bce111e9429c,
                            Version=1.0.0.0,
                            Culture=neutral" 
                  ClassName="MyWorkflowProject.Workflow1.MyClass"
                  FunctionName="IsOrderComplete" 
                  Name="Check if item in %1 is a complete order"
                  Type="Custom"
                  UsesCurrentItem="True">
              <RuleDesigner>...</RuleDesigner>
          </Condition>
          <Default>
             <RuleDesigner Sentence="the file type is %1">
                <FieldBind ID=1 Field="_1_" Text="specific type" DesignerType="Type">
                   <Option></Option>
                </FieldBind>
             </RuleDesigner>
          </Default
       </Conditions>
    </WorkflowInfo>
```

## See also

- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/en-us/library/office/bb417436.aspx)
- [Workflow Actions Schema Overview](https://msdn.microsoft.com/en-us/library/office/bb897626.aspx)








