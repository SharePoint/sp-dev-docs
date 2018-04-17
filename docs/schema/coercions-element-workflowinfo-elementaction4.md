---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0d790bac-681d-7e9c-5448-92df6305c037
---

# Coercions element 

(WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Specifies the available coercions for converting data from one form to another.

## Usage

```XML
    <Coercions>
        <Coercion />
    </Coercions>
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
    <xs:element name="Coercions"   minOccurs="0"  maxOccurs="1"    >
               <xs:complexType>
               <xs:sequence minOccurs="0" maxOccurs="unbounded">
         <xs:element name="Coercion"   minOccurs="0"   maxOccurs="unbounded"    >

               <xs:complexType>
               <xs:all>
         <xs:element name="Parameters"      type="coercionParametersType" minOccurs="0"     maxOccurs="1"    >

      </xs:element>  
           </xs:all>
         <xs:attribute name="Name"   type="s:string"      use="required"     />
         <xs:attribute name="Assembly"   type="s:string"     />
         <xs:attribute name="DisplayName"   type="s:string"      use="required"     />
         <xs:attribute name="CatchAll"   type="s:boolean"      use="required"     />
         <xs:attribute name="RankDefault"   type="s:integer"      use="required"     />
         <xs:attribute name="SourceType"   type="s:string"     />
         <xs:attribute name="SourceFieldType"   type="s:string"     />
         <xs:attribute name="DestinationType"   type="s:string"      use="required"     />
         <xs:attribute name="DestinationFieldType"   type="s:string"     />
         <xs:attribute name="ClassName"   type="s:string"      use="required"     />
         <xs:attribute name="Id"   type="s:string"      use="required"     />
         <xs:attribute name="SourceProperty"   type="s:string"      use="required"     />
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
<td align="left"><p><a href="coercion-element-coercions-elementworkflowinfo-elementaction4.md">Coercion</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.








