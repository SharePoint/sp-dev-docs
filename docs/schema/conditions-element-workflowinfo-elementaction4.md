---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c9b3ceac-85d2-7b04-5b1b-f16f154de9f3
---

# Conditions element 

(WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

In the workflow rule designer, represents corresponding, underlying functions that are used to evaluate workflow conditions, and which return **Boolean** values that represent the outcome of the evaluations. The parent container element for all **Condition** elements.

## Usage

```XML
       <Conditions>
          <Condition />
          <Default />
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
<td align="left"><p>Element type</span></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Namespace</span></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Schema file</span></p></td>
<td align="left"><p>Actions4.xsd</p></td>
</tr>
</tbody>
</table>

## Definition

```XML
    <xs:element name="Conditions" minOccurs="0" maxOccurs="1">
               <xs:complexType>
               <xs:sequence>
         <xs:element name="Default"   minOccurs="0"   maxOccurs="1" >
               <xs:complexType>
               <xs:sequence>
         <xs:element name="RuleDesigner"      type="ruleDesignerType">
      </xs:element>  
           </xs:sequence>
         <xs:attribute name="ItemKeyType"   type="s:string" />
           </xs:complexType>
      </xs:element>  
         <xs:element name="Condition"  minOccurs="0"  maxOccurs="unbounded">
               <xs:complexType>
               <xs:all>
         <xs:element name="RuleDesigner"      type="ruleDesignerType" minOccurs="1"     maxOccurs="1"    >
      </xs:element>  
         <xs:element name="Parameters"      type="parametersType" minOccurs="1"     maxOccurs="1"    >
      </xs:element>  
           </xs:all>
         <xs:attribute name="Type"   type="s:string"     />
         <xs:attribute name="Name"   type="s:string"      use="required"     />
         <xs:attribute name="AppliesTo"   type="appliesToTypes"      use="required"     />
         <xs:attribute name="UsesCurrentItem"   type="s:boolean"     />
         <xs:attribute name="ItemKeyType"   type="s:string"     />
         <xs:attribute name="FunctionName"   type="s:string"     />
         <xs:attribute name="Assembly"   type="s:string"     />
         <xs:attribute name="ClassName"   type="s:string"     />
         <xs:attribute name="ShapeImageUrl"   type="s:string"     />
           </xs:complexType>
      </xs:element>  
           </xs:sequence>
         <xs:attribute name="And"   type="s:string"     />
         <xs:attribute name="Or"   type="s:string"     />
         <xs:attribute name="When"   type="s:string"     />
         <xs:attribute name="Else"   type="s:string"     />
         <xs:attribute name="Not"   type="s:string"     />
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
<td align="left"><p><a href="condition-element-conditions-elementworkflowinfo-elementaction4.md">Condition</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="default-element-conditions-elementworkflowinfo-elementaction4.md">Default</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

> [!NOTE] 
> The attributes listed in the following table are only read from the default ACTIONS file and cannot be overridden in any custom .ACTIONS file.

<table>
<colgroup>
<col width="15%" />
<col width="15%" />
<col width="15%" />
<col width="35%" />
<col width="20%" />
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
<td align="left"><p>**And**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Displayed in the rule designer sentence when two or more conditions are used in the same conditional branch, and when all conditions must be satisfied before workflow actions can be executed. The value is not case-sensitive.</p>
<p>The default value is **and** (applies only to the English language version of SharePoint).</p>
<p>**Example**: `<Conditions And="and">`</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Else**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The text that is defined in this attribute is displayed in the rule designer sentence when a conditional branch activity is added to the workflow. The value is not case-sensitive.</p>
<p>The default value is **Else if** (applies only to the English language version of SharePoint).</p>
<p>**Example**: `<Conditions Else="Else if">`</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Not**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The text that is defined in this attribute is displayed in the rule designer sentence when there are two or more conditions in the same conditional branch and any value will satisfy the conditions, allowing the workflow actions to execute. The value is not case-sensitive. The default value is **not**.</p>
<p>**Example**: `<Conditions Not="not">`</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Or**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The text that is defined in this attribute is displayed in the rule designer sentence when there are two or more conditions in the same conditional branch and any value will satisfy the conditions, allowing the workflow actions to execute. The value is not case-sensitive. The default value is **or**.</p>
<p>**Example**: `<Conditions Or="or">`</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**When**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The text that is defined in this attribute is displayed in the rule designer sentence when a conditional branch is added that requires the values or conditions that follow it to return **true** for the workflow actions to execute. The value is not case-sensitive. The default value is **If**.</p>
<p>**Example**: `<Conditions When="If">`</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








