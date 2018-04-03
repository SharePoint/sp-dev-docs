---
manager: laurawi
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 8c6e3c71-4e1b-4068-bb03-6d5b0dcdd888
---

# .ACTIONS File Example (WorkflowInfo)</td>

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

This example shows the general structure of a valid .ACTIONS file that can be used to import custom conditions and actions into a declarative, rules-based code-free workflow editor, such as Microsoft SharePoint Designer 2010.

## Example

The following XML is an example of how an .ACTIONS file could be constructed to add **Conditions** or **Actions** elements to the default list.

```XML
    <?xml version="1.0" encoding="utf-8"?>
    <WorkflowInfo Language="en-us">
       <Conditions And="and"
                   Else="Else If"
                   Not="not"
                   Or="or"
                   When="If">
          <Condition AppliesTo="list"
                     Assembly="Assembly.Name, 
                               Version=0.0.0.0, 
                               Culture=neutral, 
                               PublicKeyToken=GUID"
                     ClassName="Fully qualified 
                                class name"
                     FunctionName="Boolean method name
                                   implemented in 
                                   class"
                     Name="Name to be displayed in 
                           workflow editor"
                     Type="Advanced"
                     UsesCurrentItem="true">
             <RuleDesigner Sentence="Sentence to be 
                                     displayed to the 
                                     workflow editor">
                <FieldBind DesignerType="Date"
                           Field="Parameter that 
                                  FieldBind maps to"
                           Function="true"
                           Id="Unique positive Integer"
                           Text="Text to be displayed 
                                 as a hyperlink"
                           TypeFrom="Parameter that a 
                                     non-Operator derives 
                                     its type from"
                           Value="Reserved for future use">
                   <Option Name="Option1" Value="Value1" />
                </FieldBind>
             </RuleDesigner>
             <Parameters>
                <Parameter Direction="In"
                           InitialValue=""
                           Name="MyParameter"
                           Type="System.String, mscorlib" />
             </Parameters>
          </Condition>
       </Conditions>
       <Actions>
          <Action Name="Action name displayed in editor">
             <RuleDesigner Sentence="Sentence to be 
                                     displayed to the
                                     workflow editor">
                <FieldBind DesignerType="CreateListItem"
                           Field="Parameter that FieldBind 
                                  maps to"
                           Function="true"
                           Id="Unique positive Integer"
                           OperatorTypeFrom="Parameter 
                                             Operator derives 
                                             its type from"
                           Text="Text to be displayed 
                                 as a hyperlink"
                           TypeFrom="Parameter non-Operator 
                                     derives its type from"
                           Value="Reserved for future use">
                </FieldBind>
             </RuleDesigner>
          </Default>
       </Actions>
    </WorkflowInfo>
```

## See also

- [Default Workflow Actions](default-workflow-actions-workflowinfo.md)
- [Default Workflow Conditions](default-workflow-conditions-workflowinfo.md)
- [Creating Declarative, No-Code Workflow Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)
- [Workflow Actions Schema Overview](http://msdn.microsoft.com/library/25da07cb-b228-43f2-9cdf-c8c71c3eabbb(Office.15).aspx)








