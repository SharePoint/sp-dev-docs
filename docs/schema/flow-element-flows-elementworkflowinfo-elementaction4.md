---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c94f34a7-6f7f-23d1-893c-b8d7bd5853a4
---

# Flow element 

(Flows element) (WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Represents the activity underlying the **Go to a stage** action in the visual workflow designer.

## Usage

```XML
    <Flows>
        <Flow>
            <RuleDesigner />
            <Paramters />
        </Flow>
    </Flows>
```

## Element information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Element type</span></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>Actions4.xsd</p></td>
</tr>
</tbody>
</table>

## Definition

```XML
    <xs:element name="Flow" minOccurs="0" maxOccurs="unbounded">
       <xs:complexType>
          <xs:sequence>
             <xs:element name="RuleDesigner" type="ruleDesignerType" minOccurs="1"  maxOccurs="1">
             </xs:element>  
             <xs:element name="Parameters" type="parametersType" minOccurs="1" maxOccurs="1">
             </xs:element>
          </xs:sequence>
          <xs:attribute name="Name" type="s:string" use="required" />
          <xs:attribute name="Category" type="s:string" use="required" />
       </xs:complexType>
    </xs:element>  
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Parent elements

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="50%" />
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
<td align="left"><p><a href="flows-element-workflowinfo-elementaction4.md">Flows</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p>Container element for individual <span sdata="link"><a href="flow-element-flows-elementworkflowinfo-elementaction4.md">Flow element (Flows element) (WorkflowInfo element) (Action4)</a></span> elements.</p></td>
</tr>
</tbody>
</table>

### Child elements

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="50%" />
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
<td align="left"><p><a href="parameters-element-flow-elementflows-elementworkflowinfo-elementaction4.md">Parameters</a></p></td>
<td align="left"><p><a href="parameterstype-complextype-action4.md">parametersType</a></p></td>
<td align="left"><p>Serves as a container for **Parameter** elements, and contains no definable attributes. Includes the descriptions of the parameters in an action method signature.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="ruledesigner-element-flow-elementflows-elementworkflowinfo-elementaction4.md">RuleDesigner</a></p></td>
<td align="left"><p><a href="ruledesignertype-complextype-action4.md">ruleDesignerType</a></p></td>
<td align="left"><p>Contains information that allows the rendering of a declarative sentence in the visual workflow editor in SharePoint Designer or Visual Studio.</p></td>
</tr>
</tbody>
</table>

### Attributes

<table>
<colgroup>
<col width="15%" />
<col width="15%" />
<col width="15%" />
<col width="30%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Required</p></th>
<th align="left"><p>Description</p></th>
<th align="left"><p>Possible values</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Category**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies the ribbon category in the visual designer user interface (in this case, **Common Flows**) that contains the **Go to a stage** action.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies the string that identifies the action in the visual designer user interface. In this case, the name is **Go to a stage**.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








