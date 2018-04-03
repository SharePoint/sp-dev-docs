---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 7c83ff1e-71c3-d864-cfca-3070af296553
---

# CompositeSteps element 

(WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Container for the steps in a composite workflow activity, which are represented by **CompositeStep** elements.

## Usage

```XML
    <CompositeSteps>
        <CompositeStep />
    </CompositeSteps>
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
    <xs:element name="CompositeSteps"      minOccurs="0"     maxOccurs="1"    >
               <xs:complexType>
               <xs:sequence minOccurs="0" maxOccurs="unbounded">
         <xs:element name="CompositeStep"     >
               <xs:complexType>
               <xs:sequence>
         <xs:element name="DataSources"      type="dataSourcesType" minOccurs="0"     maxOccurs="1"    >

      </xs:element>  
           </xs:sequence>
         <xs:attribute name="Name"   type="s:string"      use="required"     />
         <xs:attribute name="ClassName"   type="s:string"      use="required"     />
         <xs:attribute name="Assembly"   type="s:string"      use="required"     />
         <xs:attribute name="AppliesTo"   type="appliesToTypes"      use="required"     />
         <xs:attribute name="Order"   type="s:nonNegativeInteger"     />
         <xs:attribute name="Description"   type="s:string"     />
           </xs:complexType>
      </xs:element>  
           </xs:sequence>
           </xs:complexType>
      </xs:element>  
```

## Elements and attributes

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
<td align="left"><p><a href="compositestep-element-compositesteps-elementworkflowinfo-elementaction4.md">CompositeStep</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.








