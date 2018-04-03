---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 4f6ec6ed-2443-2364-b01d-2e60b68c2d39
---

# Flows element 

(WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Container element for individual [Flow element (Flows element) (WorkflowInfo element) (Action4)](flow-element-flows-elementworkflowinfo-elementaction4.md) elements.

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
    <xs:element name="Flows" minOccurs="0" maxOccurs="1">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="Flow" minOccurs="0" maxOccurs="unbounded">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="RuleDesigner" type="ruleDesignerType" minOccurs="1" maxOccurs="1">
                            </xs:element>  
                            <xs:element name="Parameters" type="parametersType" minOccurs="1"     maxOccurs="1">
                            </xs:element>  
                        </xs:sequence>
                        <xs:attribute name="Name" type="s:string" use="required" />
                        <xs:attribute name="Category" type="s:string" use="required" />
                    </xs:complexType>
                </xs:element>  
           </xs:sequence>
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
<td align="left"><p><a href="workflowinfo-element-action4.md">WorkflowInfo</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p>The root element of the Actions schema. This element must be included in any .ACTIONS file that is installed on the server.</p></td>
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
<td align="left"><p><a href="flow-element-flows-elementworkflowinfo-elementaction4.md">Flow</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p>Represents the activity underlying the **Go to a stage** action in the visual workflow designer.</p></td>
</tr>
</tbody>
</table>

### Attributes

None.








