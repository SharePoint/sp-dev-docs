---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0a10e602-92fe-fde5-287b-2b6b060b5bf8
---

# RuleDesigner element (Condition element) 

(Conditions element) (WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Contains information that allows the rendering of a declarative **Condition** sentence in the visual workflow editor in SharePoint Designer or Visual Studio.

## Usage

```XML
    <Conditions>
        <Condition>
            <RuleDesigner>
                <FieldBind />
            </RuleDesigner>
        </Condition>
    </Conditions>
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
<td align="left"><p><a href="ruledesignertype-complextype-action4.md">ruleDesignerType</a></p></td>
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
    <xs:element name="RuleDesigner" type="ruleDesignerType" minOccurs="1" maxOccurs="1">
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
<td align="left"><p><a href="condition-element-conditions-elementworkflowinfo-elementaction4.md">Condition</a></p></td>
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
<td align="left"><p><a href="fieldbind-element-ruledesignertype-complextypeaction4.md">FieldBind</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
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
<td align="left"><p>**Sentence**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Text that is displayed in the workflow editor that represents the workflow rule. The rule sentence can contain static text and also text that is dynamically generated at run time.</p>
<p>Variables can be embedded into the sentence by using the notation %1, %2, and so on. Each variable maps to a **FieldBind** element **Id**. Then, during workflow design, the text that is displayed for these variables is the **Text** attribute of the **FieldBind** element.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








