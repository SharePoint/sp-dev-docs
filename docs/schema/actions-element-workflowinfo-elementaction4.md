---
title: Actions element (WorkflowInfo element)
description: Discusses the definition, elements and attributes for Actions element (WorkflowInfo element) which allows you to create custom workflow activities.
manager: laurawi
ms.date: 6/13/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 9323e205-67aa-89b9-45db-2a050cead9e1
---

# Actions element (WorkflowInfo element) 

(Action4)

**Applies to**: SharePoint Server 2013

Allows you to create custom workflow activities and expand the palette of available workflow actions that you can use to help model unique business processes.

## Usage

```XML
    <WorkflowInfo>
        <Conditions?>
        <Actions>
            <Action />
        </Actions>
    </WorkflowInfo>
```

## Element information

|Information|Location|
|---|---|
| **Element type**  |  |
| **Namespace**     |  |
| **Schema file**   | Actions4.xsd |


## Definition

```XML
    <xs:element name="Actions"      minOccurs="0"     maxOccurs="1"    >
               <xs:complexType>
               <xs:sequence>
         <xs:element name="Default"      type="defaultElementType" minOccurs="0"     maxOccurs="1"    >


      </xs:element>  
         <xs:element name="Action"      minOccurs="0"     maxOccurs="unbounded"    >
               <xs:complexType>
               <xs:all>
         <xs:element name="Parameters"      type="parametersType" minOccurs="0"     maxOccurs="1"    >
      </xs:element>  
         <xs:element name="RuleDesigner"      type="ruleDesignerType" minOccurs="1"     maxOccurs="1"    >


      </xs:element>  
         <xs:element name="DataSources"      type="dataSourcesType" minOccurs="0"     maxOccurs="1"    >


      </xs:element>  
         <xs:element name="Modifications"      minOccurs="0"     maxOccurs="1"    >


               <xs:complexType>
               <xs:sequence>
         <xs:element name="Modification"      minOccurs="1"     maxOccurs="unbounded"    >


         <xs:attribute name="TypeId"   type="s:string"      use="required"     />
         <xs:attribute name="NameFormat"   type="s:string"      use="required"     />
         <xs:attribute name="FormURN"   type="s:string"      use="required"     />
      </xs:element>  
           </xs:sequence>
           </xs:complexType>
      </xs:element>  
         <xs:element name="ActionVariables"      minOccurs="0"     maxOccurs="1"    >


               <xs:complexType>
               <xs:sequence>
         <xs:element name="ActionVariables"     >


      </xs:element>  
           </xs:sequence>
           </xs:complexType>
      </xs:element>  
         <xs:element name="ActionBody"      minOccurs="0"     maxOccurs="1"    >


               <xs:complexType>
               <xs:sequence>
         <xs:element name="ActionBody"     >


      </xs:element>  
           </xs:sequence>
           </xs:complexType>
      </xs:element>  
         <xs:element name="ActionConditions"      minOccurs="0"     maxOccurs="1"    >


               <xs:complexType>
               <xs:sequence>
         <xs:element name="ActionConditions"     >


      </xs:element>  
           </xs:sequence>
           </xs:complexType>
      </xs:element>  
           </xs:all>
         <xs:attribute name="Name"   type="s:string"      use="required"     />
         <xs:attribute name="ClassName"   type="s:string"      use="required"     />
         <xs:attribute name="Assembly"   type="s:string"     />
         <xs:attribute name="FunctionName"   type="s:string"     />
         <xs:attribute name="Category"   type="s:string"     />
         <xs:attribute name="CreatesTask"   type="s:boolean"     />
         <xs:attribute name="CreatesInList"   type="s:string"     />
         <xs:attribute name="AppliesTo"   type="appliesToTypes"      use="required"     />
         <xs:attribute name="IsError"   type="s:boolean"     />
         <xs:attribute name="ListModeration"   type="s:boolean"     />
         <xs:attribute name="UsesCurrentItem"   type="s:boolean"     />
         <xs:attribute name="CreatedTaskFormType"   type="s:string"     />
         <xs:attribute name="__SolutionId"   type="s:string"     />
         <xs:attribute name="SandboxedFunction"   type="s:boolean"     />
         <xs:attribute name="ShapeImageUrl"   type="s:string"     />
           </xs:complexType>
      </xs:element>  
           </xs:sequence>
         <xs:attribute name="Sequential"   type="s:string"     />
         <xs:attribute name="Parallel"   type="s:string"     />
           </xs:complexType>
      </xs:element>  
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Parent elements

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="workflowinfo-element-action4.md">WorkflowInfo</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Child elements

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="action-element-actions-elementworkflowinfo-elementaction4.md">Action</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="default-element-actions-elementworkflowinfo-elementaction4.md">Default</a></p></td>
<td align="left"><p><a href="defaultelementtype-complextype-action4.md">defaultElementType</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

  | Attribute | Type | Required | Description | Possible values |
| --- | --- | --- | --- | --- |
| **Parallel** | s:string | optional | Specifies that workflow actions should be executed in parallel and joins the respective **action** elements in the [RuleDesigner element (Action element) (Actions element) (WorkflowInfo element) (Action4)](ruledesigner-element-action-elementactions-elementworkflowinfo-elementaction4.md) sentence. | Values of the s:string type. |
| **Sequential** | s:string | optional | Specifies that workflow actions should be executed in parallel and joins the respective **action** elements in the [RuleDesigner element (Action element) (Actions element) (WorkflowInfo element) (Action4)](ruledesigner-element-action-elementactions-elementworkflowinfo-elementaction4.md) sentence. | Values of the s:string type. |






