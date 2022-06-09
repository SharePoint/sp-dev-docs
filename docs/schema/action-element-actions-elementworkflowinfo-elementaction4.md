---
title: Action element
description: Discusses the code and syntax for the Action element which contains the information that is required for Workflow Manager Client 1.0 to process a workflow action.
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 98829cd3-8f68-351b-6e33-c0e27e174b58
---

# Action element

(Actions element) (WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Contains the information that is required for Workflow Manager Client 1.0 to process a workflow action's underlying activity or activities.

## Usage

```XML
    <Actions>
        <Action>
            <Parameters />
            <RuleDesigner />
            <DataSources />
            <Modifications>
                <Modification/>
            </Modifications>
            <ActionVariables />
            <ActionBody /
            <ActionConditions />
        </Action>
    </Actions>
```

## Element information

|Information|Location|
|---|---|
| **Element type**  |  |
| **Namespace**     |  |
| **Schema file**   | Actions4.xsd |

</br>

## Definition

```XML
    <xs:element name="Action" minOccurs="0" maxOccurs="unbounded">
    <xs:complexType>
       <xs:all>
       <xs:element name="Parameters" type="parametersType" minOccurs="0" maxOccurs="1"></xs:element>
       <xs:element name="RuleDesigner" type="ruleDesignerType" minOccurs="1" maxOccurs="1"></xs:element>
       <xs:element name="DataSources" type="dataSourcesType" minOccurs="0" maxOccurs="1"></xs:element>
       <xs:element name="Modifications" minOccurs="0" maxOccurs="1">
       <xs:complexType>
          <xs:sequence>
          <xs:element name="Modification" minOccurs="1" maxOccurs="unbounded">
             <xs:attribute name="TypeId" type="s:string" use="required" />
             <xs:attribute name="NameFormat" type="s:string" use="required" />
             <xs:attribute name="FormURN" type="s:string" use="required" />
          </xs:element>
          </xs:sequence>
       </xs:complexType>
       </xs:element>
       <xs:element name="ActionVariables" minOccurs="0" maxOccurs="1">
       <xs:complexType>
          <xs:sequence>
             <xs:element name="ActionVariables"></xs:element>
          </xs:sequence>
       </xs:complexType>
       </xs:element>
       <xs:element name="ActionBody" minOccurs="0" maxOccurs="1">
       <xs:complexType>
          <xs:sequence>
             <xs:element name="ActionBody"></xs:element>
          </xs:sequence>
                </xs:complexType>
       </xs:element>
       <xs:element name="ActionConditions" minOccurs="0" maxOccurs="1">
       <xs:complexType>
          <xs:sequence>
             <xs:element name="ActionConditions"></xs:element>
          </xs:sequence>
       </xs:complexType>
       </xs:element>
       </xs:all>
         <xs:attribute name="Name" type="s:string" use="required" />
         <xs:attribute name="ClassName" type="s:string" use="required" />
         <xs:attribute name="Assembly" type="s:string" />
         <xs:attribute name="FunctionName" type="s:string" />
         <xs:attribute name="Category" type="s:string" />
         <xs:attribute name="CreatesTask" type="s:boolean" />
         <xs:attribute name="CreatesInList" type="s:string" />
         <xs:attribute name="AppliesTo" type="appliesToTypes" use="required" />
         <xs:attribute name="IsError" type="s:boolean" />
         <xs:attribute name="ListModeration" type="s:boolean" />
         <xs:attribute name="UsesCurrentItem" type="s:boolean" />
         <xs:attribute name="CreatedTaskFormType" type="s:string" />
         <xs:attribute name="__SolutionId" type="s:string" />
         <xs:attribute name="SandboxedFunction" type="s:boolean" />
         <xs:attribute name="ShapeImageUrl" type="s:string" />
       </xs:complexType>
    </xs:element>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Parent elements
  
| Element | Type | Description |
| --- | --- | --- |
| [Actions](actions-element-workflowinfo-elementaction4.md) |     |     |

</br>

### Child elements
  
| Element | Type | Description |
| --- | --- | --- |
| [ActionBody](actionbody-element-action-elementactions-elementworkflowinfo-elementaction4.md) |     |     |
| [ActionConditions](actionconditions-element-action-elementactions-elementworkflowinfo-elementaction.md) |     |     |
| [ActionVariables](actionvariables-element-action-elementactions-elementworkflowinfo-elementaction4.md) |     |     |
| [DataSources](datasources-element-action-elementactions-elementworkflowinfo-elementaction4.md) | [dataSourcesType](datasourcestype-complextype-action4.md) |     |
| [Modifications](modifications-element-action-elementactions-elementworkflowinfo-elementaction4.md) |     |     |
| [Parameters](parameters-element-action-elementactions-elementworkflowinfo-elementaction4.md) | [parametersType](parameterstype-complextype-action4.md) |     |
| [RuleDesigner](ruledesigner-element-action-elementactions-elementworkflowinfo-elementaction4.md) | [ruleDesignerType](ruledesignertype-complextype-action4.md) |     |

</br>

### Attributes
  
| Attribute | Type | Required | Description | Possible values |
| --- | --- | --- | --- | --- |
| **__SolutionId** | s:string | optional | Specifies a GUID that the client application writes to the implementation-specific action. The server uses the GUID to help locate the assembly at workflow runtime. | Values of the s:string type. |
| **AppliesTo** | [appliesToTypes](appliestotypes-simpletype-action4.md) | required | Indicates what this workflow action should be. Valid values include **site**, **list**, **doclib**, and **all**. The value **all** means that the action is available under any scope and will always show up in the Actions list. | Values of the appliesToTypes type. |
| **Assembly** | s:string | optional | The assembly name that contains instructions for implementing the **Action** element. The text should include the PublicKeyToken, Version, and Culture values. | Values of the s:string type. |
| **Category** | s:string | optional | Provides a category for the workflow action. This value is used to filter the list of available actions. | Values of the s:string type. |
| **ClassName** | s:string | required | Fully qualified name of the class that implements the workflow action. | Values of the s:string type. |
| **CreatedTaskFormType** | s:string | optional | Specifies the type of a task created. Use **DataCollectTask** to create a task that collects data from one user; use **GroupAssignedTask** to create a task that collects data from one or more users; use **TodoItemTask** to create a task that does not collect data from users but only exists for a user to validate that they have done something; use **TaskProcess** to create a task that has a form that allows for ad-hoc collaboration and might collect data from one or more users. | Values of the s:string type. |
| **CreatesInList** | s:string | optional | If set, specifies that the workflow create an item in a list or document library. Values must map to a parameter name that contains the ID of the list or document library. | Values of the s:string type. |
| **CreatesTask** | s:boolean | optional | If **true**, a task list item is created in the workflow. If left blank, the assumption is **false**, and no task list items are created. | Values of the s:boolean type. |
| **FunctionName** | s:string | optional | Specifies the name of a function to call. | Values of the s:string type. |
| **IsError** | s:boolean | optional | If **true**, instances of this **Action** element are considered an error by the client application. | Values of the s:boolean type. |
| **ListModeration** | s:boolean | optional | If **true**, this **Action** element applies to a list or document library that has content approval enabled. If left blank, the assumption is **false**. | Values of the s:boolean type. |
| **Name** | s:string | required | Represents the descriptive name of the workflow action that is displayed to the workflow editor. | Values of the s:string type. |
| **SandboxedFunction** | s:boolean | optional | If **true**, the client application inserts an implementation-specific action when this action is selected. The action should be configured to call a function defined by the conjunction of AssemblyName, ClassName, and FunctionName. If set, AssemblyName, ClassName, FunctionName, and __SolutionId must also be set. | Values of the s:boolean type. |
| **ShapeImageUrl** | s:string | optional | The URL of a default icon shape-image file that is available for customization when creating custom actions or custom conditions. | Values of the s:string type. |
| **UsesCurrentItem** | s:boolean | optional | Specifies whether a given workflow action can be used in a "site" workflow. Setting this to **true** means that the action cannot be used and is not available for site workflows. The copy/paste function on actions is also blocked. If this attribute value is not set, **false** is implied. | Values of the s:boolean type. |
