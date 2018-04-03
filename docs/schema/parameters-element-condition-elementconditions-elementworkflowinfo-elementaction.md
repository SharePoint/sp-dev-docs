---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 634793ca-8e14-818d-1e5c-3dd2b7b1626d
---

# Parameters element (Condition element) 

(Conditions element) (WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Container for **Parameter** elements that includes descriptions of the parameters in **Condition** method signatures. This element is of type [parametersType](parameterstype-complextype-action4.md).

## Usage

```XML
    <Conditions>
        <Condition>
            <Parameters>
                <Parameter />
            </Parameters>
            <RuleDesigner />
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
<td align="left"><p><a href="parameterstype-complextype-action4.md">parametersType</a></p></td>
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
    <xs:element name="Parameters" type="parametersType" minOccurs="1"     maxOccurs="1">
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
<td align="left"><p><a href="parameter-element-parameterstype-complextypeaction4.md">Parameter</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.


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

<br/>







